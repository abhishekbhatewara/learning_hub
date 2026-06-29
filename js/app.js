/* App: multi-subject hash router + view rendering + quiz engine.
 * Routes are subject-scoped: #/<subjectId>/grade/..., #/<subjectId>/topic/...,
 * #/<subjectId>/mindmap, #/<subjectId>/library. #/ is the subject picker.
 * Legacy science links (#/topic/..., #/grade/..., #/mindmap, #/library) still
 * resolve to the Science subject for backward compatibility. */
(function () {
  const main = document.getElementById("main");
  const HUB = window.HUB;
  let SUBJ = window.CURRICULUM; // active subject (set at the top of route())

  // ---------- helpers ----------
  const $ = (sel, root = document) => root.querySelector(sel);
  function sb() { return "#/" + SUBJ.id; }              // current subject route base
  function crumbBase() { return `<a href="#/">Subjects</a> › <a href="${sb()}">${esc(SUBJ.name)}</a>`; }
  function findTopic(id) {
    for (const g of SUBJ.grades) {
      const t = g.topics.find(t => t.id === id);
      if (t) return { topic: t, grade: g };
    }
    return null;
  }
  function gradeOf(id) { return SUBJ.grades.find(g => g.id === id); }
  function esc(s) { return String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  // Small progress bar for a card, only once the learner has done something there.
  function cardProg(stats, color) {
    if (!window.Progress || !stats || !stats.done) return "";
    return `<div class="card-prog">${window.Progress.bar(stats, color)}</div>`;
  }
  function countByType(quiz) {
    const auto = quiz.filter(q => ["mcq", "tf", "numeric", "match"].includes(q.type)).length;
    return { total: quiz.length, auto, written: quiz.length - auto };
  }
  // --- schema helpers: support BOTH the per-objective schema (objectives are
  //     objects with .text/.resources/.quiz) and the older flat schema
  //     (objectives are strings; resources/quiz live on the topic). ---
  function isPerObj(t) { return Array.isArray(t.objectives) && t.objectives.length > 0 && typeof t.objectives[0] === "object"; }
  function allResources(t) { return isPerObj(t) ? t.objectives.flatMap(o => o.resources || []) : (t.resources || []); }
  function allQuiz(t) { return isPerObj(t) ? t.objectives.flatMap(o => o.quiz || []) : (t.quiz || []); }
  // topics that share at least one concept thread with the given topic
  function relatedTopics(topicId) {
    const set = new Set();
    SUBJ.threads.forEach(th => {
      if (th.path.includes(topicId)) th.path.forEach(p => { if (p !== topicId) set.add(p); });
    });
    return [...set].map(id => findTopic(id)).filter(Boolean);
  }
  function threadsFor(topicId) { return SUBJ.threads.filter(th => th.path.includes(topicId)); }

  // ---- Library resources (optional, loaded from data-classroom.js; Science only) ----
  const CLASS = window.CLASSROOM || { meta: { count: 0 }, resources: [] };
  const KIND_META = {
    video: { label: "Video", cls: "video", icon: "▶" },
    reading: { label: "Read", cls: "reading", icon: "📄" },
    podcast: { label: "Podcast", cls: "podcast", icon: "🎧" }
  };
  function classroomFor(topicId) { return CLASS.resources.filter(r => (r.topics || []).includes(topicId)); }
  function classroomCard(r) {
    const k = KIND_META[r.kind] || KIND_META.reading;
    return `
      <a class="res-card classroom" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">
        <span class="res-type ${k.cls}">${k.icon} ${k.label}</span>
        <h4>${esc(r.title)}</h4>
        <div class="res-provider">📚 Library · ${esc(r.source || "")}</div>
        <span class="res-open">Open ↗</span>
      </a>`;
  }

  // ---------- subject picker (home) ----------
  function viewSubjects() {
    const cards = HUB.subjects.map(s => {
      const topics = s.grades.reduce((n, g) => n + g.topics.length, 0);
      return `
      <a class="grade-card" href="#/${s.id}" style="border-top-color:${s.color}">
        <span class="card-eyebrow" style="color:${s.color}">${esc(s.icon || "")} Subject</span>
        <h3>${esc(s.name)}</h3>
        <p class="card-desc">${esc(s.blurb || "")}</p>
        ${cardProg(window.Progress && window.Progress.subjectStats(s), s.color)}
        <div class="card-footer"><span class="chip">${s.grades.length} grade${s.grades.length === 1 ? "" : "s"} · ${topics} topics</span><span class="go-link">Open →</span></div>
      </a>`;
    }).join("");
    const planned = ["English", "Social Sciences"].filter(n => !HUB.subjects.some(s => s.name === n));
    const soon = planned.map(n => `
      <div class="grade-card disabled" style="border-top-color:#cbd2e0">
        <span class="card-eyebrow" style="color:#9aa3b8">Coming soon</span>
        <h3>${esc(n)}</h3>
        <p class="card-desc">Same structure — objectives, free resources, quizzes and a concept mindmap — coming next.</p>
        <div class="card-footer"><span class="chip">Planned</span></div>
      </div>`).join("");
    return `
      <section class="hero">
        <h1>Learning Hub</h1>
        <p class="lede">A free study companion for Grades 6–8 — clear learning objectives, hand-picked free resources and self-marking quizzes for every objective, plus a concept mindmap. Choose a subject to begin.</p>
        ${window.Search ? `<form class="home-search" onsubmit="location.hash='#/search/'+encodeURIComponent(this.q.value.trim());return false;">
          <input name="q" class="search-box" type="search" placeholder="🔍 Search topics, objectives & resources across all subjects…" />
        </form>` : ""}
      </section>
      <h2 class="section-title">Subjects <span class="count">${HUB.subjects.length} live${planned.length ? " · " + planned.length + " coming" : ""}</span></h2>
      <div class="grid cols-3">${cards}${soon}</div>
      ${CLASS.meta.count ? `
      <h2 class="section-title">Enrichment library</h2>
      <a class="grade-card" href="#/library" style="border-top-color:#c08a3e">
        <span class="card-eyebrow" style="color:#c08a3e">📚 Library</span>
        <h3>${CLASS.meta.count} free resources across every subject</h3>
        <p class="card-desc">A searchable stream of real-world videos, articles and podcasts your class collected — Science, Maths, Finance, History, AI, civics and more. Filter by subject and type.</p>
        <div class="card-footer"><span class="chip">Searchable</span><span class="go-link">Browse the library →</span></div>
      </a>` : ""}`;
  }

  // ---------- subject landing (grade picker for one subject) ----------
  function viewSubjectHome() {
    const grades = SUBJ.grades;
    const topicCount = grades.reduce((n, g) => n + g.topics.length, 0);
    const meta = SUBJ.meta || {};
    const gradeCards = grades.map(g => `
      <a class="grade-card" href="${sb()}/grade/${g.id}" style="border-top-color:${g.color}">
        <span class="card-eyebrow" style="color:${g.color}">${esc(g.name)}</span>
        <h3>${esc(g.tagline)}</h3>
        <p class="card-desc">${esc(g.blurb)}</p>
        ${cardProg(window.Progress && window.Progress.gradeStats(SUBJ.id, g), g.color)}
        <div class="card-footer">
          <span class="chip">${g.topics.length} topics</span>
          <span class="go-link">Explore →</span>
        </div>
      </a>`).join("");
    const hasMindmap = SUBJ.threads && SUBJ.threads.length;

    return `
      <nav class="breadcrumb"><a href="#/">Subjects</a> › <span>${esc(SUBJ.name)}</span></nav>
      <section class="hero">
        <h1>${esc(meta.title || (SUBJ.name + " Hub"))}</h1>
        <p class="lede">${esc(meta.subtitle || "")}</p>
        <div class="hero-cta">
          ${grades.length ? `<a class="btn btn-primary" href="${sb()}/grade/${grades[0].id}">Start with ${esc(grades[0].name)} →</a>` : ""}
          ${hasMindmap ? `<a class="btn btn-ghost" href="${sb()}/mindmap">🧠 View the concept mindmap</a>` : ""}
        </div>
      </section>

      ${meta.arc ? `<div class="arc-note"><strong>The 3-year arc.</strong> ${esc(meta.arc)}</div>` : ""}

      <h2 class="section-title">Choose a grade <span class="count">${grades.length} grade${grades.length === 1 ? "" : "s"} · ${topicCount} topics</span></h2>
      <div class="grid cols-3">${gradeCards}</div>

      <h2 class="section-title">How to use this hub</h2>
      <div class="grid cols-3">
        <div class="topic-card"><div class="icon">🎯</div><h3>Pick an objective</h3><p class="card-desc">Each topic breaks into clear "I can…" objectives. Open any one to study just that skill.</p></div>
        <div class="topic-card"><div class="icon">📺</div><h3>Use free resources</h3><p class="card-desc">Every objective has its own hand-picked free videos, simulations, readings and podcasts.</p></div>
        <div class="topic-card"><div class="icon">📝</div><h3>Test yourself</h3><p class="card-desc">Each objective has its own quick quiz — mixing multiple-choice, true/false, numeric and written answers, auto-marked where possible.</p></div>
      </div>

      ${hasMindmap ? `
      <h2 class="section-title">See how it all connects</h2>
      <a class="grade-card" href="${sb()}/mindmap" style="border-top-color:${SUBJ.color}">
        <span class="card-eyebrow" style="color:${SUBJ.color}">Concept mindmap</span>
        <h3>🧠 Trace ideas from Grade 6 to Grade 8</h3>
        <p class="card-desc">An interactive map showing how the big ideas thread through all three years. Toggle each thread to see the links.</p>
        <div class="card-footer"><span class="chip">Interactive</span><span class="go-link">Open mindmap →</span></div>
      </a>` : ""}

      ${CLASS.meta.count ? `
      <h2 class="section-title">Enrichment from the Library</h2>
      <a class="grade-card" href="#/library" style="border-top-color:#c08a3e">
        <span class="card-eyebrow" style="color:#c08a3e">📚 Library</span>
        <h3>${CLASS.meta.count} videos, articles &amp; podcasts across all subjects</h3>
        <p class="card-desc">A searchable stream of real-world resources your class collected. Filter by subject and type, or find the relevant ones woven into each objective's resources.</p>
        <div class="card-footer"><span class="chip">Searchable</span><span class="go-link">Browse the library →</span></div>
      </a>` : ""}`;
  }

  function viewGrade(gradeId) {
    const g = gradeOf(gradeId);
    if (!g) return `<p class="empty">Grade not found.</p>`;
    const cards = g.topics.map(t => {
      const c = countByType(allQuiz(t));
      return `
      <a class="topic-card" href="${sb()}/topic/${t.id}">
        <div class="icon">${t.icon}</div>
        <span class="card-eyebrow" style="color:${g.color}">${esc(t.subject)}</span>
        <h3>${esc(t.title)}</h3>
        <p class="card-desc">${esc(t.summary)}</p>
        <div class="topic-stats">
          <span>🎯 ${t.objectives.length} objectives</span>
          <span>📚 ${allResources(t).length} resources</span>
          <span>📝 ${c.total} questions</span>
        </div>
        ${cardProg(window.Progress && window.Progress.topicStats(SUBJ.id, t), g.color)}
        <div class="card-footer"><span class="chip subject">${esc(g.name)}</span><span class="go-link">Open →</span></div>
      </a>`;
    }).join("");
    return `
      <nav class="breadcrumb">${crumbBase()} › <span>${esc(g.name)}</span></nav>
      <section class="hero" style="background:linear-gradient(135deg, ${g.color}1a, #f8fbff)">
        <h1>${esc(g.name)} · ${esc(g.tagline)}</h1>
        <p class="lede">${esc(g.blurb)}</p>
      </section>
      <h2 class="section-title">Topics <span class="count">${g.topics.length} in ${esc(g.name)}</span></h2>
      <div class="grid cols-2">${cards}</div>`;
  }

  function topicHead(t, g) {
    return `
      <div class="topic-head">
        <span class="big-icon">${t.icon}</span>
        <div>
          <span class="card-eyebrow" style="color:${g.color}">${esc(g.name)} · ${esc(t.subject)}</span>
          <h1>${esc(t.title)}</h1>
        </div>
      </div>`;
  }

  function viewTopic(topicId, tab) {
    const found = findTopic(topicId);
    if (!found) return `<p class="empty">Topic not found.</p>`;
    const { topic: t, grade: g } = found;
    const activeTab = tab || "objectives";
    const c = countByType(t.quiz);

    const tabBtn = (key, label) => `<button class="tab-btn ${activeTab === key ? "active" : ""}" data-tab="${key}">${label}</button>`;

    return `
      <nav class="breadcrumb">${crumbBase()} › <a href="${sb()}/grade/${g.id}">${esc(g.name)}</a> › <span>${esc(t.title)}</span></nav>
      ${topicHead(t, g)}
      <p class="topic-summary">${esc(t.summary)}</p>

      <div class="tabs" role="tablist">
        ${tabBtn("objectives", "🎯 Objectives")}
        ${tabBtn("resources", `📚 Resources (${t.resources.length})`)}
        ${tabBtn("quiz", `📝 Quiz (${c.total})`)}
      </div>
      <div id="tab-content"></div>

      ${renderConnections(t)}
      <div class="back-top"><a class="btn btn-ghost" href="${sb()}/grade/${g.id}">← Back to ${esc(g.name)}</a></div>`;
  }

  // ---- per-objective topic hub (new schema) ----
  function viewTopicHub(topicId) {
    const found = findTopic(topicId);
    if (!found) return `<p class="empty">Topic not found.</p>`;
    const { topic: t, grade: g } = found;
    const objCards = t.objectives.map((o, i) => {
      const nRes = (o.resources || []).length;
      const nQuiz = (o.quiz || []).length;
      return `
        <div class="obj-card" data-obj="${i}">
          <div class="obj-card-head">
            <span class="obj-num" style="background:${g.color}">${i + 1}</span>
            <p class="obj-text">${esc(o.text)}</p>
          </div>
          <div class="obj-prog-badge"></div>
          <div class="obj-links">
            <a class="obj-link res" href="${sb()}/topic/${t.id}/obj/${i}/resources">📚 Resources <span class="obj-link-count">${nRes}</span></a>
            <a class="obj-link quiz" href="${sb()}/topic/${t.id}/obj/${i}/quiz">📝 Quiz <span class="obj-link-count">${nQuiz}</span></a>
          </div>
        </div>`;
    }).join("");

    const classroom = classroomFor(t.id);
    const classroomBlock = classroom.length ? `
      <div class="classroom-block">
        <h3>📚 From the Library</h3>
        <p class="muted">Extra videos, articles &amp; podcasts collected by your class that connect to this topic.
          <a href="#/library">Browse the full Library →</a></p>
        <div class="res-list">${classroom.map(classroomCard).join("")}</div>
      </div>` : "";

    return `
      <nav class="breadcrumb">${crumbBase()} › <a href="${sb()}/grade/${g.id}">${esc(g.name)}</a> › <span>${esc(t.title)}</span></nav>
      ${topicHead(t, g)}
      <p class="topic-summary">${esc(t.summary)}</p>
      <p class="obj-intro">This topic has <strong>${t.objectives.length} learning objectives</strong>. Each one has its own
        resources and its own quick quiz — open whichever you want from the links below.</p>
      <div class="topic-actions">
        <a class="btn btn-ghost" href="${sb()}/topic/${t.id}/worksheet">🖨️ Print worksheet</a>
      </div>
      <div id="topic-progress"></div>
      <div class="obj-hub">${objCards}</div>
      ${classroomBlock}
      ${renderConnections(t)}
      <div class="back-top"><a class="btn btn-ghost" href="${sb()}/grade/${g.id}">← Back to ${esc(g.name)}</a></div>`;
  }

  // ---- objective "workspace" helpers ----
  const RES_META = {
    video: { icon: "▶", label: "Video" },
    reading: { icon: "📄", label: "Read" },
    interactive: { icon: "🧪", label: "Interactive" },
    practice: { icon: "✏️", label: "Practice" },
    podcast: { icon: "🎧", label: "Podcast" }
  };
  function parseMins(title) { const m = (title || "").match(/\((\d+)\s*(?:minutes|mins|min)\)/i); return m ? +m[1] : null; }
  function resMeta(r) {
    const base = RES_META[r.type] || RES_META.reading;
    const mins = parseMins(r.title);
    let dur = mins ? mins + " min" : (r.type === "reading" ? "5 min read" : r.type === "interactive" || r.type === "practice" ? "~10 min" : r.type === "podcast" ? "listen" : "video");
    return { icon: base.icon, label: base.label, dur };
  }
  function estMinutes(o) {
    let m = 0;
    (o.resources || []).forEach(r => {
      if (r.type === "book") return;
      const mm = parseMins(r.title);
      if (mm) m += mm;
      else if (r.type === "video") m += 6;
      else if (r.type === "reading") m += 5;
      else if (r.type === "interactive" || r.type === "practice") m += 10;
      else if (r.type === "podcast") m += 15;
    });
    m += Math.round((o.quiz || []).length * 0.75);
    return Math.max(5, Math.round(m / 5) * 5);
  }
  function objStatus(tId, i) {
    const P = window.Progress;
    if (P && P.isDone(SUBJ.id, tId, i)) return { key: "completed", label: "✓ Completed" };
    if (P && P.quizOf(SUBJ.id, tId, i)) return { key: "progress", label: "● In progress" };
    return { key: "new", label: "Not started" };
  }
  function objRail(t, curI) {
    return `<div class="lo-rail" aria-label="Objectives in this topic">${t.objectives.map((o, i) => {
      const st = objStatus(t.id, i);
      const cls = i === curI ? "cur" : st.key === "completed" ? "done" : "";
      const mark = st.key === "completed" && i !== curI ? "✓" : (i + 1);
      return `<a class="lo-dot ${cls}" href="${sb()}/topic/${t.id}/obj/${i}/resources" title="Objective ${i + 1}${st.key === "completed" ? " · completed" : ""}">${mark}</a>`;
    }).join("")}</div>`;
  }

  // workspace header shared by the resources & quiz views
  function objNav(t, g, i, here) {
    const o = t.objectives[i];
    const st = objStatus(t.id, i);
    const nRes = (o.resources || []).length, nQuiz = (o.quiz || []).length, mins = estMinutes(o);
    const last = t.objectives.length - 1;
    const pn = (idx, label) => idx < 0 || idx > last
      ? `<span class="lo-pn disabled">${label}</span>`
      : `<a class="lo-pn" href="${sb()}/topic/${t.id}/obj/${idx}/${here}">${label}</a>`;
    return `
      <nav class="breadcrumb">${crumbBase()} › <a href="${sb()}/grade/${g.id}">${esc(g.name)}</a> › <a href="${sb()}/topic/${t.id}">${esc(t.title)}</a> › <span>Objective ${i + 1}</span></nav>
      <section class="lo-head" style="--accent:${g.color}">
        <div class="lo-head-row">
          <span class="obj-num lg" style="background:${g.color}">${i + 1}</span>
          <div class="lo-head-main">
            <span class="card-eyebrow" style="color:${g.color}">${esc(g.name)} · ${esc(t.title)}</span>
            <div class="lo-head-status">
              <span class="lo-pos">Objective ${i + 1} of ${t.objectives.length}</span>
              <span class="mastery-chip ${st.key}">${st.label}</span>
            </div>
          </div>
        </div>
        <h1 class="lo-obj-title">${esc(o.text)}</h1>
        ${objRail(t, i)}
        <div class="lo-meta"><span>⏱ ~${mins} min</span><span>📚 ${nRes} resource${nRes === 1 ? "" : "s"}</span><span>📝 ${nQuiz} question${nQuiz === 1 ? "" : "s"}</span></div>
        <div class="lo-prevnext">${pn(i - 1, "← Previous")}<a class="lo-pn mid" href="${sb()}/topic/${t.id}">All objectives</a>${pn(i + 1, "Next →")}</div>
      </section>`;
  }

  // the two-step "Learn → Quiz" guided flow
  function objFlow(t, i, here) {
    const quizDone = objStatus(t.id, i).key === "completed";
    const step = (key, n, title, sub) =>
      `<a class="lo-step ${here === key ? "active" : ""} ${key === "quiz" && quizDone ? "done" : ""}" href="${sb()}/topic/${t.id}/obj/${i}/${key}">
        <span class="lo-step-n">${key === "quiz" && quizDone ? "✓" : n}</span>
        <span class="lo-step-tx"><strong>${title}</strong><small>${sub}</small></span></a>`;
    return `<div class="lo-flow">${step("resources", "1", "Learn", "Watch, read &amp; explore")}<span class="lo-flow-arrow">→</span>${step("quiz", "2", "Quiz", "Check your understanding")}</div>`;
  }

  // a subtle secondary-actions row (mark-complete + save + hint slots)
  function objControls() {
    return `<div class="obj-controls">
      <div id="obj-progress" class="obj-progress"></div>
      <span id="obj-bookmark"></span>
      <span class="obj-controls-hint">Passing the quiz (≥70%) completes this automatically — or mark it done yourself.</span>
    </div>`;
  }

  function viewObjResources(topicId, i) {
    const found = findTopic(topicId);
    if (!found || !isPerObj(found.topic)) return `<p class="empty">Not found.</p>`;
    const { topic: t, grade: g } = found;
    const o = t.objectives[+i];
    if (!o) return `<p class="empty">Objective not found.</p>`;
    const cards = (o.resources || []).map(resourceCard).join("");
    return `<div class="objview" style="--accent:${g.color}">
      ${objNav(t, g, +i, "resources")}
      ${objFlow(t, +i, "resources")}
      ${objControls()}
      <h2 class="section-title lo-step1">Step 1 · Learn</h2>
      <p class="obj-intro">Work through these free resources to build this skill — mix watching, reading and interacting. Open each one; we'll tick them as you go.</p>
      <div class="res-list">${cards || `<p class="empty">No resources yet for this objective.</p>`}</div>
      <div class="lo-cta">
        <p class="lo-cta-lead">Feel ready? Check your understanding.</p>
        <a class="btn btn-primary btn-lg" href="${sb()}/topic/${t.id}/obj/${+i}/quiz">📝 Take the quiz for this objective →</a>
      </div>
    </div>`;
  }

  function viewObjQuiz(topicId, i) {
    const found = findTopic(topicId);
    if (!found || !isPerObj(found.topic)) return `<p class="empty">Not found.</p>`;
    const { topic: t, grade: g } = found;
    const o = t.objectives[+i];
    if (!o) return `<p class="empty">Objective not found.</p>`;
    return `<div class="objview" style="--accent:${g.color}">
      ${objNav(t, g, +i, "quiz")}
      ${objFlow(t, +i, "quiz")}
      ${objControls()}
      <h2 class="section-title lo-step2">Step 2 · Quiz</h2>
      ${renderQuizShell(o.quiz || [])}
    </div>`;
  }

  function renderTabContent(t, g, tab) {
    if (tab === "objectives") return renderObjectives(t);
    if (tab === "resources") return renderResources(t);
    if (tab === "quiz") return renderQuizShell(t.quiz);
    return "";
  }

  function renderObjectives(t) {
    const items = t.objectives.map(o => `<li>${esc(o)}</li>`).join("");
    return `<div class="tab-panel">
      <p class="obj-intro">By the end of this topic, you should be able to:</p>
      <ul class="obj-list">${items}</ul>
    </div>`;
  }

  function resourceCard(r) {
    if (r.type === "book") {
      const by = r.author || r.provider || "";
      const enrich = !!r.enrichment;
      const chip = enrich ? "📗 Enrichment read" : "📕 Textbook";
      const linkText = enrich ? "Read online ↗" : "Publisher page ↗";
      const link = r.url
        ? `<a class="res-open" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${linkText}</a>`
        : "";
      return `
        <div class="res-card book${enrich ? " enrich" : ""}">
          <span class="res-type ${enrich ? "enrich" : "book"}">${chip}</span>
          <h4>${esc(r.title)}</h4>
          ${by ? `<div class="res-provider">${esc(by)}</div>` : ""}
          ${r.chapter ? `<div class="res-chapter">📖 ${esc(r.chapter)}</div>` : ""}
          <div class="res-note">${esc(r.note || "")}</div>
          ${link}
        </div>`;
    }
    const meta = resMeta(r);
    const visited = !!(window.Progress && window.Progress.isVisited && window.Progress.isVisited(r.url));
    return `
      <div class="res-card${visited ? " visited" : ""}">
        <div class="res-card-head">
          <span class="res-type ${r.type}">${meta.icon} ${meta.label}</span>
          <span class="res-dur">${esc(meta.dur)}</span>
          <span class="res-visited">✓ opened</span>
        </div>
        <h4>${esc(r.title)}</h4>
        <div class="res-provider">${esc(r.provider)}</div>
        ${r.note ? `<div class="res-note">${esc(r.note)}</div>` : ""}
        <a class="res-open" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer" data-visit="${esc(r.url)}">Open ↗</a>
      </div>`;
  }

  function renderResources(t) {
    const cards = t.resources.map(resourceCard).join("");
    const classroom = classroomFor(t.id);
    const classroomBlock = classroom.length ? `
      <div class="classroom-block">
        <h3>📚 From the Library</h3>
        <p class="muted">Extra videos, articles &amp; podcasts collected by your class that connect to this topic.
          <a href="#/library">Browse the full Library →</a></p>
        <div class="res-list">${classroom.map(classroomCard).join("")}</div>
      </div>` : "";
    return `<div class="tab-panel">
      <p class="obj-intro">Free, high-quality resources to build and deepen your understanding. Mix watching, reading and interacting.</p>
      <div class="res-list">${cards}</div>
      ${classroomBlock}
    </div>`;
  }

  function renderConnections(t) {
    const rel = relatedTopics(t.id);
    if (!rel.length) return "";
    const ths = threadsFor(t.id);
    const pills = rel.map(({ topic, grade }) => `
      <a class="conn-pill" href="${sb()}/topic/${topic.id}"><span class="dot" style="background:${grade.color}"></span>${esc(topic.title)} <small style="color:var(--muted)">· ${esc(grade.name)}</small></a>`).join("");
    const threadTags = ths.map(th => `<span class="conn-pill"><span class="dot" style="background:${th.color}"></span>${esc(th.label)}</span>`).join("");
    return `
      <div class="connections">
        <h3>🔗 How this connects</h3>
        <p class="muted">This topic sits on these concept threads:</p>
        <div class="conn-list">${threadTags}</div>
        <p class="muted" style="margin-top:.9rem">Related topics across the grades:</p>
        <div class="conn-list">${pills}</div>
        <p style="margin-top:.9rem"><a href="${sb()}/mindmap">See the full concept mindmap →</a></p>
      </div>`;
  }

  // ---------- Library (hub-level, all subjects) ----------
  function viewLibrary() {
    const mods = (CLASS.meta.modules || []).map(m => m.name);
    const moduleChips = ["All", ...mods].map((s, i) =>
      `<button class="filter-chip ${i === 0 ? "active" : ""}" data-filter="module" data-val="${esc(s)}">${esc(s)}${s !== "All" ? ` <span class="chip-n">${(CLASS.meta.modules.find(m => m.name === s) || {}).count}</span>` : ""}</button>`).join("");
    const kinds = [["all", "All"], ["video", "Videos"], ["reading", "Reading"], ["podcast", "Podcasts"]];
    const kindChips = kinds.map((k, i) =>
      `<button class="filter-chip ${i === 0 ? "active" : ""}" data-filter="kind" data-val="${k[0]}">${esc(k[1])}</button>`).join("");
    return `
      <nav class="breadcrumb"><a href="#/">Subjects</a> › <span>Library</span></nav>
      <h1>📚 Library</h1>
      <p class="topic-summary">${CLASS.meta.count} free videos, articles and podcasts collected across <strong>every subject</strong> of the
        school — Science, Maths, Finance, History, AI, civics and more. Search, filter by subject and type, and open any of them.
        Where a resource connects to a curriculum topic, it also appears on that topic's <em>Resources</em>.</p>
      <div class="lib-controls">
        <input id="lib-search" class="lib-search" type="search" placeholder="🔍 Search titles & sources…" />
        <div class="filter-row"><span class="filter-label">Subject</span>${moduleChips}</div>
        <div class="filter-row"><span class="filter-label">Type</span>${kindChips}</div>
      </div>
      <p class="lib-count" id="lib-count"></p>
      <div class="res-list" id="lib-grid"></div>
      <p class="empty" id="lib-empty" style="display:none">No resources match your filters.</p>`;
  }

  function findTopicAny(id) {
    for (const s of HUB.subjects) for (const g of s.grades) {
      const t = g.topics.find(t => t.id === id);
      if (t) return { topic: t, grade: g, subject: s };
    }
    return null;
  }
  function libraryCard(r) {
    const k = KIND_META[r.kind] || KIND_META.reading;
    const topicPills = (r.topics || []).map(id => {
      const f = findTopicAny(id);
      return f ? `<a class="lib-topic-pill" href="#/${f.subject.id}/topic/${id}"><span class="dot" style="background:${f.grade.color}"></span>${esc(f.topic.title)}</a>` : "";
    }).join("");
    return `
      <div class="res-card classroom lib-card">
        <div class="lib-card-top">
          <span class="res-type ${k.cls}">${k.icon} ${k.label}</span>
          <span class="chip subject">${esc(r.module || r.subject)}</span>
        </div>
        <h4>${esc(r.title)}</h4>
        <div class="res-provider">${esc(r.source || "")}</div>
        ${topicPills ? `<div class="lib-topics">${topicPills}</div>` : ""}
        <a class="res-open" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">Open ↗</a>
      </div>`;
  }

  function mountLibrary() {
    const grid = document.getElementById("lib-grid");
    const countEl = document.getElementById("lib-count");
    const emptyEl = document.getElementById("lib-empty");
    if (!grid) return;
    const state = { q: "", module: "All", kind: "all" };

    function apply() {
      const q = state.q.trim().toLowerCase();
      const list = CLASS.resources.filter(r => {
        if (state.module !== "All" && r.module !== state.module) return false;
        if (state.kind !== "all" && r.kind !== state.kind) return false;
        if (q && !((r.title || "").toLowerCase().includes(q) || (r.source || "").toLowerCase().includes(q))) return false;
        return true;
      });
      grid.innerHTML = list.map(libraryCard).join("");
      countEl.textContent = `Showing ${list.length} of ${CLASS.resources.length} resources`;
      emptyEl.style.display = list.length ? "none" : "block";
    }
    document.getElementById("lib-search").addEventListener("input", e => { state.q = e.target.value; apply(); });
    document.querySelectorAll(".filter-chip").forEach(btn => {
      btn.addEventListener("click", () => {
        const f = btn.dataset.filter;
        document.querySelectorAll(`.filter-chip[data-filter="${f}"]`).forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        state[f] = btn.dataset.val;
        apply();
      });
    });
    apply();
  }

  // ---------- quiz ----------
  function renderQuizShell(quiz) {
    const c = countByType(quiz);
    return `<div class="tab-panel">
      <div class="quiz-intro">
        <div class="quiz-meta">
          <strong>${c.total} questions</strong> · ${c.auto} auto-graded, ${c.written} written (self-checked).<br>
          <span class="muted">Answer each question — press <em>Check</em> for instant feedback, or just <em>Finish &amp; submit</em> at the end.</span>
        </div>
        <div class="quiz-progress" id="quiz-progress">Score: 0 / ${c.auto}</div>
      </div>
      <div id="quiz-list"></div>
      <div class="quiz-summary" id="quiz-summary"></div>
      <div class="quiz-finish" id="quiz-finish" hidden>
        <button class="btn btn-primary" id="quiz-finish-btn" type="button">✓ Finish &amp; submit</button>
        <span class="muted quiz-finish-hint">Grades everything you've answered, shows the correct answers, and marks the objective complete.</span>
        <div id="quiz-finish-done"></div>
      </div>
    </div>`;
  }

  function mountQuiz(quiz, ctx) {
    const list = document.getElementById("quiz-list");
    if (!list) return;
    const c = countByType(quiz);
    const state = { correct: 0, answered: 0, checkedAuto: 0, autoTotal: c.auto, ctx: ctx || null, results: [] };

    quiz.forEach((q, i) => list.appendChild(buildQuestion(q, i, state)));
    updateProgress(state);
    if (ctx) wireFinish(quiz, ctx, state);
  }

  function correctText(q) {
    if (q.type === "mcq") return q.options[q.answer];
    if (q.type === "tf") return q.answer ? "True" : "False";
    if (q.type === "numeric") return String(q.answer);
    if (q.type === "match") return q.pairs.map(p => `${p[0]} → ${p[1]}`).join("; ");
    return q.answer; // short / long
  }

  // Explicit "Finish & submit" for a per-objective quiz: marks the objective
  // complete, shows a full answer review, and (for a signed-in child) stores the
  // wrong-question breakdown so the parent can see exactly what to review.
  function wireFinish(quiz, ctx, state) {
    const wrap = document.getElementById("quiz-finish");
    if (!wrap) return;
    wrap.hidden = false;
    const btn = document.getElementById("quiz-finish-btn");
    const doneEl = document.getElementById("quiz-finish-done");
    btn.addEventListener("click", () => {
      // grade any questions the student answered but didn't press "Check" on,
      // so selected answers count instead of showing as "not answered"
      document.querySelectorAll("#quiz-list .btn-check").forEach(cb => { if (!cb.disabled) cb.click(); });
      if (window.Progress) window.Progress.setDone(ctx.s, ctx.t, ctx.i, true);
      btn.disabled = true; btn.style.opacity = ".55";

      const wrong = [];
      const rows = quiz.map((q, i) => {
        const r = state.results[i];
        const auto = ["mcq", "tf", "numeric", "match"].includes(q.type);
        if (!auto) {
          return `<div class="rev-q written"><div class="rev-qh"><span>Q${i + 1}</span><span class="rev-tag">self-check</span></div>
            <div class="rev-qtext">${esc(q.q)}</div><div class="rev-ans">📝 Model answer: ${esc(q.answer)}</div></div>`;
        }
        const ok = !!(r && r.correct);
        if (!ok) wrong.push({ n: i + 1, q: q.q });
        return `<div class="rev-q ${ok ? "ok" : "bad"}"><div class="rev-qh"><span>Q${i + 1}</span><span class="rev-mark">${ok ? "✓ correct" : "✗ incorrect"}</span></div>
          <div class="rev-qtext">${esc(q.q)}</div>
          <div class="rev-your">Your answer: ${r ? esc(r.your || "—") : "<em>not answered</em>"}</div>
          ${ok ? "" : `<div class="rev-ans">✓ Correct answer: ${esc(correctText(q))}</div>`}
          ${q.explanation ? `<div class="rev-exp">${esc(q.explanation)}</div>` : ""}</div>`;
      }).join("");

      const pct = state.autoTotal ? Math.round(state.correct / state.autoTotal * 100) : null;
      const isChild = window.Family && window.Family.role && window.Family.role() === "child";
      doneEl.innerHTML = `
        <p class="quiz-submitted">✓ Submitted &amp; marked complete${pct != null ? ` — scored ${state.correct}/${state.autoTotal} (${pct}%)` : ""}.${isChild ? ` Your parent can see it now. <a href="#/parents">← Back to My learning</a>` : ""}</p>
        <details class="rev-panel" open><summary>📋 Review your answers ${wrong.length ? `· ${wrong.length} to revisit` : "· all correct! 🎉"}</summary>${rows}</details>`;
      doneEl.scrollIntoView({ behavior: "smooth", block: "nearest" });

      if (isChild && window.Family && window.Family.submitQuiz) {
        const found = findTopic(ctx.t);
        const objectiveText = found && found.topic.objectives[ctx.i] ? (found.topic.objectives[ctx.i].text || "") : "";
        const aiBox = document.createElement("div");
        aiBox.className = "concept-summary loading";
        aiBox.innerHTML = "🤖 Analysing your answers to suggest what to revise…";
        doneEl.appendChild(aiBox);
        window.Family.submitQuiz(ctx.s, ctx.t, ctx.i, objectiveText, { score: pct, correct: state.correct, total: state.autoTotal, wrong })
          .then(summary => {
            if (summary) { aiBox.classList.remove("loading"); aiBox.innerHTML = `<strong>🤖 Focus on this:</strong> ${esc(summary)}`; }
            else { aiBox.remove(); }
          });
      }
    });
  }

  function updateProgress(state) {
    const p = document.getElementById("quiz-progress");
    if (p) p.textContent = `Score: ${state.correct} / ${state.autoTotal}`;
    if (state.checkedAuto >= state.autoTotal && state.autoTotal > 0) showSummary(state);
  }

  function showSummary(state) {
    const s = document.getElementById("quiz-summary");
    if (!s) return;
    const pct = Math.round((state.correct / state.autoTotal) * 100);
    let msg = "Keep going — review the explanations and try again.";
    if (pct >= 90) msg = "Outstanding! You've really mastered this. 🌟";
    else if (pct >= 70) msg = "Great work! A little review on the missed ones will lock it in. 💪";
    else if (pct >= 50) msg = "Good start — revisit the resources for the tricky parts. 📚";
    s.className = "quiz-summary show";
    s.innerHTML = `<div class="score">${state.correct} / ${state.autoTotal} <small>(${pct}%)</small></div>
      <p>${msg}</p><p class="muted">Auto-graded questions only. Remember to self-check your written answers against the model answers.</p>`;
    s.scrollIntoView({ behavior: "smooth", block: "nearest" });
    if (state.ctx && window.Progress) {
      window.Progress.recordQuiz(state.ctx.s, state.ctx.t, state.ctx.i, state.correct, state.autoTotal);
      if (pct >= window.Progress.PASS) {
        s.innerHTML += `<p class="prog-passed">✅ Objective marked complete — see it on <a href="#/progress">My Progress</a>.</p>`;
      }
    }
  }

  const KIND_LABEL = { mcq: "Multiple choice", tf: "True / False", numeric: "Numeric", short: "Short answer", long: "Long answer", match: "Match" };

  function buildQuestion(q, i, state) {
    const card = document.createElement("div");
    card.className = "q-card";
    const diff = q.difficulty || "medium";
    card.innerHTML = `
      <div class="q-top">
        <span class="q-num">Question ${i + 1}</span>
        <span class="q-badges">
          <span class="badge ${diff}">${diff}</span>
          <span class="badge kind">${KIND_LABEL[q.type] || q.type}</span>
        </span>
      </div>
      <div class="q-text">${esc(q.q)}</div>
      <div class="q-body"></div>
      <div class="q-actions"></div>
      <div class="feedback"></div>`;
    const body = $(".q-body", card);
    const actions = $(".q-actions", card);
    const feedback = $(".feedback", card);
    let locked = false;

    function lock() { locked = true; }

    if (q.type === "mcq") {
      const name = "q" + i;
      body.innerHTML = `<div class="options">${q.options.map((o, j) =>
        `<label class="option"><input type="radio" name="${name}" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
      const check = mkCheck();
      actions.appendChild(check);
      check.addEventListener("click", () => {
        if (locked) return;
        const sel = body.querySelector(`input[name="${name}"]:checked`);
        if (!sel) { flash(feedback, "Choose an answer first.", "wrong"); return; }
        const chosen = +sel.value, right = chosen === q.answer;
        body.querySelectorAll(".option").forEach((opt, j) => {
          opt.classList.add("locked");
          if (j === q.answer) opt.classList.add("was-answer");
          if (j === chosen && !right) opt.classList.add("incorrect");
        });
        resolveAuto(right, q.options[chosen]);
      });
    }

    else if (q.type === "tf") {
      body.innerHTML = `<div class="tf-row">
        <label class="option"><input type="radio" name="tf${i}" value="true"><span>True</span></label>
        <label class="option"><input type="radio" name="tf${i}" value="false"><span>False</span></label></div>`;
      const check = mkCheck(); actions.appendChild(check);
      check.addEventListener("click", () => {
        if (locked) return;
        const sel = body.querySelector(`input[name="tf${i}"]:checked`);
        if (!sel) { flash(feedback, "Choose True or False.", "wrong"); return; }
        const chosen = sel.value === "true", right = chosen === q.answer;
        body.querySelectorAll(".option").forEach(o => o.classList.add("locked"));
        const opts = body.querySelectorAll(".option");
        const correctIdx = q.answer ? 0 : 1;
        opts[correctIdx].classList.add("was-answer");
        if (!right) opts[chosen ? 0 : 1].classList.add("incorrect");
        resolveAuto(right, chosen ? "True" : "False");
      });
    }

    else if (q.type === "numeric") {
      body.innerHTML = `<input class="numeric-input" type="text" inputmode="decimal" placeholder="Type your answer…">`;
      const input = $(".numeric-input", body);
      const check = mkCheck(); actions.appendChild(check);
      check.addEventListener("click", () => {
        if (locked) return;
        const val = input.value.trim();
        if (val === "") { flash(feedback, "Enter a value first.", "wrong"); return; }
        const right = numericMatch(val, q.answer);
        input.disabled = true;
        input.style.borderColor = right ? "var(--good)" : "var(--bad)";
        resolveAuto(right, val);
      });
      input.addEventListener("keydown", e => { if (e.key === "Enter") check.click(); });
    }

    else if (q.type === "match") {
      const rights = q.pairs.map(p => p[1]);
      const shuffled = shuffle(rights.slice());
      body.innerHTML = `<div class="match-grid">${q.pairs.map((p, r) =>
        `<div class="match-row" data-row="${r}">
          <div class="term">${esc(p[0])}</div>
          <select><option value="">— choose —</option>${shuffled.map(s => `<option value="${esc(s)}">${esc(s)}</option>`).join("")}</select>
        </div>`).join("")}</div>`;
      const check = mkCheck(); actions.appendChild(check);
      check.addEventListener("click", () => {
        if (locked) return;
        const rows = body.querySelectorAll(".match-row");
        let allFilled = true, allRight = true;
        rows.forEach((row, r) => {
          const sel = row.querySelector("select");
          if (!sel.value) allFilled = false;
          const ok = sel.value === q.pairs[r][1];
          if (!ok) allRight = false;
        });
        if (!allFilled) { flash(feedback, "Match every row first.", "wrong"); return; }
        rows.forEach((row, r) => {
          const sel = row.querySelector("select");
          const ok = sel.value === q.pairs[r][1];
          row.classList.add(ok ? "correct" : "incorrect");
          sel.disabled = true;
        });
        const yourPairs = [...rows].map((row, r) => `${q.pairs[r][0]} → ${row.querySelector("select").value || "—"}`).join("; ");
        resolveAuto(allRight, yourPairs);
      });
    }

    else { // short / long — self-checked
      const big = q.type === "long";
      body.innerHTML = `<textarea class="short-input" ${big ? 'style="min-height:130px"' : ""} placeholder="Write your answer, then reveal the model answer to self-check…"></textarea>`;
      const reveal = document.createElement("button");
      reveal.className = "btn-reveal"; reveal.textContent = "Reveal model answer";
      actions.appendChild(reveal);
      reveal.addEventListener("click", () => {
        feedback.className = "feedback model show";
        feedback.innerHTML = `<strong>Model answer</strong><div class="model-answer">${esc(q.answer)}</div>${q.explanation ? `<div class="model-answer" style="margin-top:.4rem"><em>${esc(q.explanation)}</em></div>` : ""}`;
        reveal.disabled = true; reveal.style.opacity = ".55";
      });
    }

    function resolveAuto(right, your) {
      lock();
      state.answered++; state.checkedAuto++;
      if (right) state.correct++;
      state.results[i] = { n: i + 1, q: q.q, type: q.type, correct: right, your: your };
      feedback.className = "feedback show " + (right ? "right" : "wrong");
      feedback.innerHTML = `<strong>${right ? "✓ Correct!" : "✗ Not quite"}</strong>${esc(q.explanation || "")}`;
      const btn = $(".btn-check", actions); if (btn) { btn.disabled = true; btn.style.opacity = ".55"; }
      updateProgress(state);
    }

    return card;
  }

  function mkCheck() { const b = document.createElement("button"); b.className = "btn-check"; b.textContent = "Check"; return b; }
  function flash(node, msg, kind) { node.className = "feedback show " + kind; node.innerHTML = esc(msg); }
  function numericMatch(val, ans) {
    const a = parseFloat(String(val).replace(/[^0-9.\-]/g, ""));
    const b = parseFloat(String(ans));
    if (isNaN(a) || isNaN(b)) return String(val).trim().toLowerCase() === String(ans).trim().toLowerCase();
    const tol = Math.max(1e-9, Math.abs(b) * 0.01);
    return Math.abs(a - b) <= tol;
  }
  function shuffle(arr) { for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1));[arr[i], arr[j]] = [arr[j], arr[i]]; } return arr; }

  // ---------- navigation ----------
  let navSubject = null; // remember the nav context so we can re-render on auth change
  function renderNav(subject) {
    navSubject = subject;
    const nav = document.getElementById("main-nav");
    if (!nav) return;
    // primary: where the student is studying
    let html = `<a href="#/">Subjects</a>`;
    if (subject) {
      subject.grades.forEach(g => { html += `<a href="#/${subject.id}/grade/${g.id}">${esc(g.name)}</a>`; });
      if (subject.threads && subject.threads.length) html += `<a href="#/${subject.id}/mindmap">Mindmap</a>`;
    } else {
      HUB.subjects.forEach(s => { html += `<a href="#/${s.id}">${esc(s.name)}</a>`; });
    }
    // utilities: grouped + visually de-emphasised so they don't compete
    let util = "";
    if (window.Search) util += `<a href="#/search" title="Search">🔍 Search</a>`;
    if (CLASS.meta.count) util += `<a href="#/library">Library</a>`;
    if (window.Bookmarks) util += `<a href="#/saved" title="Saved">⭐ Saved</a>`;
    if (window.Progress) util += `<a href="#/progress">My Progress</a>`;
    if (window.Family) {
      const famLabel = (window.Family.navInfo && window.Family.navInfo().label) || "👪 Parents";
      util += `<a href="#/parents">${famLabel}</a>`;
    }
    nav.innerHTML = html + (util ? `<span class="nav-sep" aria-hidden="true"></span><span class="nav-util">${util}</span>` : "");
  }

  function setActiveNav(hash) {
    document.querySelectorAll(".main-nav a").forEach(a => {
      const href = a.getAttribute("href");
      let active = false;
      if (href === "#/" && (hash === "" || hash === "#/")) active = true;
      else if (href !== "#/" && hash.startsWith(href)) active = true;
      a.classList.toggle("active", active);
    });
  }

  function wireTopicTabs(t, g) {
    const content = document.getElementById("tab-content");
    function show(tab) {
      content.innerHTML = renderTabContent(t, g, tab);
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tab));
      if (tab === "quiz") mountQuiz(t.quiz);
    }
    document.querySelectorAll(".tab-btn").forEach(b => {
      b.addEventListener("click", () => { show(b.dataset.tab); history.replaceState(null, "", `${sb()}/topic/${t.id}/${b.dataset.tab}`); });
    });
    return show;
  }

  // ---------- router ----------
  const LEGACY = ["grade", "topic", "mindmap"]; // old un-scoped science links (library is now hub-level)

  function renderInSubject(rest) {
    if (rest.length === 0) { main.innerHTML = viewSubjectHome(); return; }
    if (rest[0] === "grade") { main.innerHTML = viewGrade(rest[1]); return; }
    if (rest[0] === "topic") {
      const found = findTopic(rest[1]);
      if (!found) { main.innerHTML = `<p class="empty">Topic not found.</p>`; return; }
      if (isPerObj(found.topic)) {
        if (rest[2] === "obj" && rest[3] != null) {
          const idx = rest[3];
          if (rest[4] === "quiz") {
            main.innerHTML = viewObjQuiz(rest[1], idx);
            const o = found.topic.objectives[+idx];
            if (o) mountQuiz(o.quiz || [], { s: SUBJ.id, t: rest[1], i: +idx });
            if (window.Progress) window.Progress.decorateObj(SUBJ.id, rest[1], +idx);
            if (window.Bookmarks) window.Bookmarks.decorateObj(SUBJ.id, rest[1], +idx);
            if (window.Admin) window.Admin.decorate("quiz", SUBJ.id, rest[1], +idx);
          } else {
            main.innerHTML = viewObjResources(rest[1], idx);
            const ro = found.topic.objectives[+idx];
            if (window.Progress) window.Progress.decorateObj(SUBJ.id, rest[1], +idx);
            if (window.Bookmarks) window.Bookmarks.decorateObj(SUBJ.id, rest[1], +idx);
            if (window.Admin) window.Admin.decorate("resources", SUBJ.id, rest[1], +idx);
            if (window.Bookmarks && ro) window.Bookmarks.decorateResources(SUBJ.id, rest[1], +idx, ro.resources || []);
          }
        } else if (rest[2] === "worksheet" && window.Worksheet) {
          main.innerHTML = window.Worksheet.page(SUBJ, found.topic, found.grade);
          window.Worksheet.mount();
        } else {
          main.innerHTML = viewTopicHub(rest[1]);
          if (window.Progress) window.Progress.decorateHub(SUBJ.id, found.topic, found.grade.color);
        }
      } else {
        const tab = rest[2] || "objectives";
        main.innerHTML = viewTopic(rest[1], tab);
        const show = wireTopicTabs(found.topic, found.grade);
        show(tab);
      }
      return;
    }
    if (rest[0] === "mindmap") {
      main.innerHTML = `
        <nav class="breadcrumb">${crumbBase()} › <span>Concept mindmap</span></nav>
        <h1>🧠 ${esc(SUBJ.name)} concept mindmap</h1>
        <p class="topic-summary">Every topic across Grades 6–8, with the big ideas that thread through all three years. Toggle a thread on or off, drag to pan, scroll to zoom, and click any topic to open it.</p>
        <div class="mindmap-wrap" id="mindmap-mount" style="margin-top:1rem"></div>`;
      window.Mindmap.render(document.getElementById("mindmap-mount"), SUBJ);
      return;
    }
    if (rest[0] === "library") { main.innerHTML = viewLibrary(); mountLibrary(); return; } // alias of hub #/library
    main.innerHTML = `<p class="empty">Page not found. <a href="${sb()}">${esc(SUBJ.name)} home</a>.</p>`;
  }

  function route() {
    const hash = location.hash || "#/";
    // auth callback from a magic-link email (implicit flow leaves tokens in the
    // hash); family.js processes it and redirects. Don't show "page not found".
    if (/access_token=|refresh_token=/.test(hash)) {
      main.innerHTML = `<p class="empty">Signing you in…</p>`;
      return;
    }
    const parts = hash.replace(/^#\//, "").split("/").filter(Boolean);
    window.scrollTo(0, 0);
    closeMobileNav();

    if (parts.length === 0) {
      renderNav(null);
      main.innerHTML = viewSubjects();
      setActiveNav(hash);
      main.focus({ preventScroll: true });
      return;
    }

    // hub-level Library (spans all subjects)
    if (parts[0] === "library") {
      renderNav(null);
      main.innerHTML = viewLibrary();
      mountLibrary();
      setActiveNav(hash);
      main.focus({ preventScroll: true });
      return;
    }

    // hub-level Search (spans all subjects)
    if (parts[0] === "search" && window.Search) {
      renderNav(null);
      main.innerHTML = window.Search.page(parts[1] ? decodeURIComponent(parts[1]) : "");
      window.Search.mount();
      setActiveNav(hash);
      return;
    }

    // hub-level Parents area (Supabase-backed accounts & assignments)
    if (parts[0] === "parents" && window.Family) {
      renderNav(null);
      main.innerHTML = `<div id="family-root"></div>`;
      window.Family.mount(document.getElementById("family-root"));
      setActiveNav(hash);
      return;
    }

    // hub-level Saved / bookmarks (spans all subjects)
    if (parts[0] === "saved" && window.Bookmarks) {
      renderNav(null);
      main.innerHTML = window.Bookmarks.page();
      window.Bookmarks.mount();
      setActiveNav(hash);
      main.focus({ preventScroll: true });
      return;
    }

    // hub-level My Progress (spans all subjects)
    if (parts[0] === "progress" && window.Progress) {
      renderNav(null);
      main.innerHTML = window.Progress.dashboard();
      window.Progress.mountDashboard();
      setActiveNav(hash);
      main.focus({ preventScroll: true });
      return;
    }

    let subject = HUB.subjects.find(s => s.id === parts[0]);
    let rest;
    if (subject) { rest = parts.slice(1); }
    else if (LEGACY.includes(parts[0])) { subject = window.CURRICULUM; rest = parts; } // legacy science links
    else {
      renderNav(null);
      main.innerHTML = `<p class="empty">Page not found. <a href="#/">Go to subjects</a>.</p>`;
      setActiveNav(hash);
      return;
    }

    SUBJ = subject;
    renderNav(subject);
    renderInSubject(rest);
    setActiveNav(hash);
    main.focus({ preventScroll: true });
  }

  // ---------- mobile nav ----------
  const navToggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav");
  function closeMobileNav() { nav.classList.remove("open"); navToggle.setAttribute("aria-expanded", "false"); }
  navToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // when sign-in state resolves/changes, re-label the nav (Parents ⇄ My learning)
  window.addEventListener("lh-auth-change", () => { renderNav(navSubject); setActiveNav(location.hash); });
  // when admin-added resources arrive, re-render the current view (except the
  // stateful Parents area) so they show up without a manual refresh
  window.addEventListener("lh-resources-loaded", () => { if (!location.hash.startsWith("#/parents")) route(); });
  // mark a resource "opened" when the student clicks through (delegated)
  main.addEventListener("click", e => {
    const a = e.target.closest("a[data-visit]");
    if (!a) return;
    if (window.Progress && window.Progress.markVisited) window.Progress.markVisited(a.dataset.visit);
    const card = a.closest(".res-card"); if (card) card.classList.add("visited");
  });

  window.addEventListener("hashchange", route);
  window.addEventListener("DOMContentLoaded", route);
  if (document.readyState !== "loading") route();
})();
