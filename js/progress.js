/* Progress tracking: per-objective completion + quiz scores, stored in
 * localStorage. A small, dependency-free layer (like admin.js) that app.js
 * calls into. Nothing here is security-sensitive — it's the learner's own
 * private study record, kept only in their browser.
 *
 * Store shape (localStorage key lh_progress_v1):
 *   { done:  { "subjId|topicId|objIdx": 1 },
 *     quiz:  { "subjId|topicId|objIdx": { pct, correct, total, ts } } }
 */
(function () {
  const KEY = "lh_progress_v1";
  const PASS = 70; // quiz % that counts as "passed" (auto-marks the objective done)

  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function db() { const d = load(); d.done = d.done || {}; d.quiz = d.quiz || {}; return d; }
  function k(s, t, i) { return `${s}|${t}|${i}`; }
  function esc(x) { return String(x).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function isPerObj(t) { return Array.isArray(t.objectives) && t.objectives.length > 0 && typeof t.objectives[0] === "object"; }

  // ---- reads ----
  function isDone(s, t, i) { return !!db().done[k(s, t, i)]; }
  function quizOf(s, t, i) { return db().quiz[k(s, t, i)] || null; }

  // ---- visited resources (lightweight; keyed by URL) ----
  const VKEY = "lh_visited_v1";
  function visitedDb() { try { return JSON.parse(localStorage.getItem(VKEY)) || {}; } catch (e) { return {}; } }
  function isVisited(url) { return !!visitedDb()[url]; }
  function markVisited(url) { if (!url) return; const d = visitedDb(); if (!d[url]) { d[url] = 1; try { localStorage.setItem(VKEY, JSON.stringify(d)); } catch (e) {} } }

  // ---- writes ----
  function setDone(s, t, i, val) {
    const d = db();
    if (val) d.done[k(s, t, i)] = 1; else delete d.done[k(s, t, i)];
    save(d);
    notify();
    syncFamily(s, t, i);
  }
  // mirror completion to the parent/child assignments backend, if signed in
  function syncFamily(s, t, i) { if (window.Family && window.Family.syncProgress) window.Family.syncProgress(s, t, i); }
  function toggleDone(s, t, i) { const v = !isDone(s, t, i); setDone(s, t, i, v); return v; }
  function recordQuiz(s, t, i, correct, total) {
    if (!total) return;
    const d = db(), key = k(s, t, i);
    const pct = Math.round((correct / total) * 100);
    const prev = d.quiz[key];
    // keep the best attempt
    if (!prev || pct >= prev.pct) d.quiz[key] = { pct, correct, total, ts: Date.now() };
    if (pct >= PASS) d.done[key] = 1; // passing the quiz auto-completes the objective
    save(d);
    notify();
    syncFamily(s, t, i);
  }
  function reset() { save({ done: {}, quiz: {} }); notify(); }

  // ---- listeners (so visible bars refresh after a change) ----
  const listeners = new Set();
  function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }
  function notify() { listeners.forEach(fn => { try { fn(); } catch (e) {} }); }

  // ---- stats ----
  function topicStats(subjId, topic) {
    if (!isPerObj(topic)) return { done: 0, total: 0, quizzes: 0, scoreSum: 0 };
    let done = 0, quizzes = 0, scoreSum = 0;
    topic.objectives.forEach((o, i) => {
      if (isDone(subjId, topic.id, i)) done++;
      const q = quizOf(subjId, topic.id, i);
      if (q) { quizzes++; scoreSum += q.pct; }
    });
    return { done, total: topic.objectives.length, quizzes, scoreSum };
  }
  function gradeStats(subjId, grade) {
    return grade.topics.reduce((a, t) => {
      const s = topicStats(subjId, t);
      a.done += s.done; a.total += s.total; a.quizzes += s.quizzes; a.scoreSum += s.scoreSum;
      return a;
    }, { done: 0, total: 0, quizzes: 0, scoreSum: 0 });
  }
  function subjectStats(subject) {
    return subject.grades.reduce((a, g) => {
      const s = gradeStats(subject.id, g);
      a.done += s.done; a.total += s.total; a.quizzes += s.quizzes; a.scoreSum += s.scoreSum;
      return a;
    }, { done: 0, total: 0, quizzes: 0, scoreSum: 0 });
  }
  function hubStats() {
    const subs = (window.HUB && window.HUB.subjects) || [];
    return subs.reduce((a, s) => {
      const st = subjectStats(s);
      a.done += st.done; a.total += st.total; a.quizzes += st.quizzes; a.scoreSum += st.scoreSum;
      return a;
    }, { done: 0, total: 0, quizzes: 0, scoreSum: 0 });
  }
  function pct(st) { return st.total ? Math.round((st.done / st.total) * 100) : 0; }

  // ---- UI helpers ----
  function bar(st, color) {
    const p = pct(st);
    const c = color || "var(--accent, #2563eb)";
    return `<div class="prog-bar" title="${st.done} of ${st.total} objectives complete">
      <div class="prog-fill" style="width:${p}%;background:${c}"></div>
      <span class="prog-label">${st.done}/${st.total}${st.total ? " · " + p + "%" : ""}</span>
    </div>`;
  }

  // Inject a "mark complete" control + quiz-best chip into an objective detail page.
  function decorateObj(subjId, topicId, i) {
    const slot = document.getElementById("obj-progress");
    if (!slot) return;
    const render = () => {
      const done = isDone(subjId, topicId, i);
      const q = quizOf(subjId, topicId, i);
      const chip = q
        ? `<span class="prog-quiz-chip ${q.pct >= PASS ? "pass" : "fail"}" title="Best quiz score">📝 Best: ${q.pct}% (${q.correct}/${q.total})</span>`
        : "";
      slot.innerHTML = `
        <button class="prog-toggle ${done ? "done" : ""}" type="button" aria-pressed="${done}">
          <span class="prog-tick">${done ? "✓" : ""}</span>${done ? "Completed" : "Mark this objective complete"}
        </button>${chip}`;
      slot.querySelector(".prog-toggle").addEventListener("click", () => { toggleDone(subjId, topicId, i); render(); });
    };
    render();
    onChange(render); // refresh the chip if a quiz score lands while on the page
  }

  // Decorate the topic objective hub: per-card ticks + a topic progress bar.
  function decorateHub(subjId, topic, color) {
    const slot = document.getElementById("topic-progress");
    const st = topicStats(subjId, topic);
    if (slot) {
      slot.innerHTML = st.total ? `
        <div class="topic-prog">
          <span class="topic-prog-text">${st.done === st.total ? "🎉 Topic complete!" : `Your progress: ${st.done} of ${st.total} objectives`}</span>
          ${bar(st, color)}
        </div>` : "";
    }
    document.querySelectorAll(".obj-card[data-obj]").forEach(card => {
      const i = +card.dataset.obj;
      card.classList.toggle("obj-done", isDone(subjId, topic.id, i));
      const q = quizOf(subjId, topic.id, i);
      const badge = card.querySelector(".obj-prog-badge");
      if (badge) badge.innerHTML = (isDone(subjId, topic.id, i) ? `<span class="obj-tick">✓ Done</span>` : "")
        + (q ? `<span class="obj-quiz-mini ${q.pct >= PASS ? "pass" : "fail"}">📝 ${q.pct}%</span>` : "");
    });
  }

  // ---- Medicine Through Time module (external microsite; same-origin storage) ----
  const MED = [
    { id: "anatomy", icon: "🦴", title: "Anatomy & Dissection" },
    { id: "measuring", icon: "📏", title: "Measuring the Body" },
    { id: "surgery", icon: "🔪", title: "Surgery & Pain" },
    { id: "infection", icon: "🦠", title: "Fighting Infection" },
    { id: "humours", icon: "🩸", title: "Blood-letting & the Four Humours" },
    { id: "radiation", icon: "☢️", title: "Cancer, Radiation & X-rays" },
    { id: "electricity", icon: "⚡", title: "Electricity & the Mind" },
    { id: "penicillin", icon: "💊", title: "Penicillin & Antibiotics" }
  ];
  function medQuiz(id) { return db().quiz["medicine|" + id + "|0"] || null; }
  function medicineStats() {
    let done = 0, quizzes = 0, scoreSum = 0;
    MED.forEach(m => { const q = medQuiz(m.id); if (q) { quizzes++; scoreSum += q.pct; if (q.pct >= PASS) done++; } });
    return { done, total: MED.length, quizzes, scoreSum };
  }

  // ---- dashboard (#/progress) ----
  function dashboard() {
    const subs = (window.HUB && window.HUB.subjects) || [];
    const hub = hubStats();
    const med = medicineStats();
    const combined = { done: hub.done + med.done, total: hub.total + med.total, quizzes: hub.quizzes + med.quizzes, scoreSum: hub.scoreSum + med.scoreSum };
    const overallPct = pct(combined);
    const avgScore = combined.quizzes ? Math.round(combined.scoreSum / combined.quizzes) : null;

    const subjBlocks = subs.map(s => {
      const sst = subjectStats(s);
      const grades = s.grades.map(g => {
        const gst = gradeStats(s.id, g);
        const topics = g.topics.map(t => {
          const tst = topicStats(s.id, t);
          const tp = pct(tst);
          return `<a class="dash-topic" href="#/${s.id}/topic/${t.id}">
            <span class="dash-topic-name">${t.icon || ""} ${esc(t.title)}</span>
            ${bar(tst, g.color)}
          </a>`;
        }).join("");
        return `<div class="dash-grade">
          <div class="dash-grade-head"><strong>${esc(g.name)}</strong> ${bar(gst, g.color)}</div>
          <div class="dash-topics">${topics}</div>
        </div>`;
      }).join("");
      return `<details class="dash-subject" ${pct(sst) > 0 ? "open" : ""}>
        <summary>
          <span class="dash-subj-name" style="color:${s.color}">${esc(s.icon || "")} ${esc(s.name)}</span>
          ${bar(sst, s.color)}
        </summary>
        <div class="dash-grades">${grades}</div>
      </details>`;
    }).join("");

    const medRows = MED.map(m => {
      const q = medQuiz(m.id);
      const chip = q
        ? `<span class="prog-quiz-chip ${q.pct >= PASS ? "pass" : "fail"}">📝 ${q.pct}%</span>`
        : `<span class="prog-quiz-chip">— not tried</span>`;
      return `<a class="dash-topic" href="medicine/#/${m.id}">
        <span class="dash-topic-name">${m.icon} ${esc(m.title)}${q && q.pct >= PASS ? " ✓" : ""}</span>
        ${chip}
      </a>`;
    }).join("");
    const medBlock = `<details class="dash-subject" ${med.quizzes > 0 ? "open" : ""}>
      <summary>
        <span class="dash-subj-name" style="color:#9b1d20">🩺 Medicine Through Time</span>
        ${bar({ done: med.done, total: med.total }, "#9b1d20")}
      </summary>
      <div class="dash-grades"><div class="dash-topics" style="padding-top:.6rem">${medRows}</div></div>
    </details>`;

    return `
      <nav class="breadcrumb"><a href="#/">Subjects</a> › <span>My Progress</span></nav>
      <section class="hero">
        <h1>📈 My Progress</h1>
        <p class="lede">Your study record — saved privately in this browser. Mark objectives complete or pass their quiz (≥${PASS}%) and watch your bars fill up.</p>
      </section>
      <div class="dash-summary">
        <div class="dash-stat"><div class="dash-num">${overallPct}%</div><div class="dash-cap">Objectives complete</div></div>
        <div class="dash-stat"><div class="dash-num">${combined.done}<small>/${combined.total}</small></div><div class="dash-cap">Objectives done</div></div>
        <div class="dash-stat"><div class="dash-num">${combined.quizzes}</div><div class="dash-cap">Quizzes attempted</div></div>
        <div class="dash-stat"><div class="dash-num">${avgScore == null ? "—" : avgScore + "%"}</div><div class="dash-cap">Avg quiz score</div></div>
      </div>
      ${combined.done === 0 && combined.quizzes === 0
        ? `<p class="empty">No progress yet. Open any objective, mark it complete or take its quiz — or try a Medicine module quiz — and it'll show up here.</p>`
        : `<h2 class="section-title">By subject</h2><div class="dash-list">${subjBlocks}${medBlock}</div>`}
      <div class="dash-actions">
        <button id="prog-reset" class="btn btn-ghost" type="button">↺ Reset all progress</button>
      </div>`;
  }

  function mountDashboard() {
    const btn = document.getElementById("prog-reset");
    if (btn) btn.addEventListener("click", () => {
      if (confirm("Reset ALL your progress (completed objectives and quiz scores)? This can't be undone.")) {
        reset();
        location.reload();
      }
    });
  }

  window.Progress = {
    isDone, quizOf, isVisited, markVisited, setDone, toggleDone, recordQuiz, reset, onChange,
    topicStats, gradeStats, subjectStats, hubStats, pct, bar,
    decorateObj, decorateHub, dashboard, mountDashboard, PASS
  };
})();
