/* Global search: a hub-wide index over every subject's topics, objectives and
 * resources, with a live-filtering results page at #/search/<query>.
 * Self-contained (like progress.js / admin.js); app.js routes to it. */
(function () {
  function esc(x) { return String(x).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function isPerObj(t) { return Array.isArray(t.objectives) && t.objectives.length > 0 && typeof t.objectives[0] === "object"; }

  // Build a flat index once (subjects/grades/topics rarely change at runtime).
  let INDEX = null;
  function buildIndex() {
    if (INDEX) return INDEX;
    INDEX = [];
    const subs = (window.HUB && window.HUB.subjects) || [];
    subs.forEach(s => {
      s.grades.forEach(g => {
        g.topics.forEach(t => {
          const base = { subjId: s.id, subjName: s.name, color: g.color, gradeName: g.name, topicId: t.id, topicTitle: t.title };
          INDEX.push(Object.assign({ kind: "topic", title: t.title, sub: t.subject || "", text: t.summary || "",
            href: `#/${s.id}/topic/${t.id}`, hay: (t.title + " " + (t.summary || "") + " " + (t.subject || "")).toLowerCase() }, base));
          if (isPerObj(t)) {
            t.objectives.forEach((o, i) => {
              INDEX.push(Object.assign({ kind: "objective", title: o.text, idx: i,
                href: `#/${s.id}/topic/${t.id}/obj/${i}/resources`, hay: (o.text || "").toLowerCase() }, base));
              (o.resources || []).forEach(r => {
                if (r.type === "book") return; // skip the 794 textbook/enrichment refs — too noisy for search
                const prov = r.provider || r.author || "";
                INDEX.push(Object.assign({ kind: "resource", title: r.title || "", text: prov, rtype: r.type, url: r.url || "",
                  href: `#/${s.id}/topic/${t.id}/obj/${i}/resources`, idx: i,
                  hay: ((r.title || "") + " " + prov).toLowerCase() }, base));
              });
            });
          }
        });
      });
    });
    return INDEX;
  }

  function search(q) {
    const tokens = q.toLowerCase().split(/\s+/).filter(Boolean);
    if (!tokens.length) return [];
    const items = buildIndex().filter(it => tokens.every(tk => it.hay.includes(tk)));
    // rank: topics first, then objectives, then resources; title-start matches boosted
    const order = { topic: 0, objective: 1, resource: 2 };
    const q0 = tokens[0];
    items.forEach(it => { it._rank = order[it.kind] * 100 - (it.title.toLowerCase().startsWith(q0) ? 10 : 0); });
    items.sort((a, b) => a._rank - b._rank);
    return items;
  }

  const KIND = {
    topic: { label: "Topic", icon: "📘" },
    objective: { label: "Objective", icon: "🎯" },
    resource: { label: "Resource", icon: "🔗" }
  };

  function resultCard(it) {
    const k = KIND[it.kind];
    const ctx = `${esc(it.subjName)} · ${esc(it.gradeName)}${it.kind !== "topic" ? " · " + esc(it.topicTitle) : ""}`;
    return `<a class="search-result" href="${it.href}">
      <span class="sr-kind" style="background:${it.color}1a;color:${it.color}">${k.icon} ${k.label}</span>
      <span class="sr-main">
        <span class="sr-title">${esc(it.title)}</span>
        <span class="sr-ctx">${ctx}${it.kind === "resource" && it.text ? " · " + esc(it.text) : ""}</span>
      </span>
      <span class="sr-go">→</span>
    </a>`;
  }

  function page(initial) {
    const q = initial || "";
    return `
      <nav class="breadcrumb"><a href="#/">Subjects</a> › <span>Search</span></nav>
      <section class="hero">
        <h1>🔍 Search the hub</h1>
        <p class="lede">Find any topic, learning objective or resource across Science, Maths and English — all three grades at once.</p>
        <input id="search-box" class="search-box" type="search" autocomplete="off"
          placeholder="Search topics, objectives, resources…" value="${esc(q)}" />
      </section>
      <p class="search-count" id="search-count"></p>
      <div class="search-results" id="search-results"></div>`;
  }

  const MAX = 60;
  function mount() {
    const box = document.getElementById("search-box");
    const out = document.getElementById("search-results");
    const countEl = document.getElementById("search-count");
    if (!box || !out) return;

    function run(q) {
      q = q.trim();
      if (!q) {
        out.innerHTML = "";
        countEl.textContent = "Type at least one word to search.";
        return;
      }
      const res = search(q);
      const shown = res.slice(0, MAX);
      out.innerHTML = shown.length ? shown.map(resultCard).join("")
        : `<p class="empty">No matches for “${esc(q)}”. Try a different word.</p>`;
      countEl.textContent = res.length
        ? `${res.length} result${res.length === 1 ? "" : "s"}${res.length > MAX ? ` (showing first ${MAX})` : ""}`
        : "";
    }

    let t;
    box.addEventListener("input", () => {
      const q = box.value;
      clearTimeout(t);
      t = setTimeout(() => {
        run(q);
        // keep the URL shareable without re-routing
        history.replaceState(null, "", "#/search" + (q.trim() ? "/" + encodeURIComponent(q.trim()) : ""));
      }, 120);
    });
    run(box.value);
    box.focus();
  }

  window.Search = { page, mount };
})();
