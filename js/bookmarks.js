/* Bookmarks / favorites: star objectives and individual resources, revisit them
 * from a hub-level #/saved page. localStorage-backed, self-contained.
 *
 * Store (lh_bookmarks_v1):
 *   { obj: { "s|t|i": { ts } },
 *     res: { "<url>": { title, provider, s, t, i, ts } } }
 */
(function () {
  const KEY = "lh_bookmarks_v1";
  function esc(x) { return String(x).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  function load() { try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; } }
  function save(d) { try { localStorage.setItem(KEY, JSON.stringify(d)); } catch (e) {} }
  function db() { const d = load(); d.obj = d.obj || {}; d.res = d.res || {}; return d; }
  function k(s, t, i) { return `${s}|${t}|${i}`; }

  const listeners = new Set();
  function onChange(fn) { listeners.add(fn); return () => listeners.delete(fn); }
  function notify() { listeners.forEach(fn => { try { fn(); } catch (e) {} }); }

  // ---- objectives ----
  function isObjSaved(s, t, i) { return !!db().obj[k(s, t, i)]; }
  function toggleObj(s, t, i) {
    const d = db(), key = k(s, t, i);
    if (d.obj[key]) delete d.obj[key]; else d.obj[key] = { ts: Date.now() };
    save(d); notify();
    return !!d.obj[key];
  }

  // ---- resources ----
  function isResSaved(url) { return !!db().res[url]; }
  function toggleRes(url, meta) {
    const d = db();
    if (d.res[url]) delete d.res[url]; else d.res[url] = Object.assign({ ts: Date.now() }, meta || {});
    save(d); notify();
    return !!d.res[url];
  }

  // ---- lookup helpers ----
  function findTopicAny(id) {
    const subs = (window.HUB && window.HUB.subjects) || [];
    for (const s of subs) for (const g of s.grades) {
      const t = g.topics.find(t => t.id === id);
      if (t) return { topic: t, grade: g, subject: s };
    }
    return null;
  }

  // ---- decorators ----
  function starBtn(active, label) {
    return `<button class="bm-star ${active ? "on" : ""}" type="button" aria-pressed="${active}" title="${active ? "Remove bookmark" : "Save for later"}">
      <span class="bm-ico">${active ? "★" : "☆"}</span>${label ? `<span class="bm-label">${active ? "Saved" : "Save"}</span>` : ""}</button>`;
  }

  // star on an objective detail page (its own slot, independent of the progress toggle)
  function decorateObj(subjId, topicId, i) {
    const slot = document.getElementById("obj-bookmark");
    if (!slot) return;
    const render = () => {
      slot.innerHTML = starBtn(isObjSaved(subjId, topicId, i), true);
      slot.querySelector(".bm-star").addEventListener("click", () => { toggleObj(subjId, topicId, i); render(); });
    };
    render();
  }

  // a star on each resource card of an objective's Resources page
  function decorateResources(subjId, topicId, i, resources) {
    const cards = document.querySelectorAll("#main .res-list .res-card");
    cards.forEach((card, idx) => {
      const r = resources[idx];
      if (!r || !r.url) return; // books/items without a url aren't bookmarkable
      const meta = { title: r.title, provider: r.provider || r.author || "", s: subjId, t: topicId, i };
      const wrap = document.createElement("div");
      wrap.className = "bm-card-star";
      const draw = () => {
        wrap.innerHTML = starBtn(isResSaved(r.url), false);
        wrap.querySelector(".bm-star").addEventListener("click", (e) => {
          e.preventDefault(); e.stopPropagation();
          toggleRes(r.url, meta); draw();
        });
      };
      draw();
      card.appendChild(wrap);
    });
  }

  // ---- saved page (#/saved) ----
  function page() {
    const d = db();
    const objs = Object.keys(d.obj).map(key => {
      const [s, t, i] = key.split("|");
      const f = findTopicAny(t);
      if (!f || f.subject.id !== s) return null;
      const o = f.topic.objectives[+i];
      if (!o || typeof o !== "object") return null;
      return { s, t, i: +i, ts: d.obj[key].ts, text: o.text, subjName: f.subject.name, gradeName: f.grade.name, color: f.grade.color, topicTitle: f.topic.title };
    }).filter(Boolean).sort((a, b) => b.ts - a.ts);

    const res = Object.keys(d.res).map(url => Object.assign({ url }, d.res[url])).sort((a, b) => b.ts - a.ts);

    const objCards = objs.map(o => `
      <a class="search-result" href="#/${o.s}/topic/${o.t}/obj/${o.i}/resources">
        <span class="sr-kind" style="background:${o.color}1a;color:${o.color}">🎯 Objective</span>
        <span class="sr-main"><span class="sr-title">${esc(o.text)}</span>
          <span class="sr-ctx">${esc(o.subjName)} · ${esc(o.gradeName)} · ${esc(o.topicTitle)}</span></span>
        <span class="sr-go">→</span>
      </a>`).join("");

    const resCards = res.map(r => {
      const f = r.t ? findTopicAny(r.t) : null;
      const ctx = f ? `${esc(f.subject.name)} · ${esc(f.grade.name)} · ${esc(f.topic.title)}` : esc(r.provider || "");
      return `
      <div class="search-result bm-res-row">
        <span class="sr-kind" style="background:#c08a3e1a;color:#c08a3e">🔗 Resource</span>
        <a class="sr-main bm-res-link" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">
          <span class="sr-title">${esc(r.title || r.url)}</span>
          <span class="sr-ctx">${ctx}${r.provider ? " · " + esc(r.provider) : ""}</span>
        </a>
        <button class="bm-remove" type="button" data-url="${esc(r.url)}" title="Remove">✕</button>
      </div>`;
    }).join("");

    const empty = !objs.length && !res.length;
    return `
      <nav class="breadcrumb"><a href="#/">Subjects</a> › <span>Saved</span></nav>
      <section class="hero">
        <h1>⭐ Saved</h1>
        <p class="lede">Your bookmarked objectives and resources, kept privately in this browser. Tap the star anywhere to add or remove items.</p>
      </section>
      ${empty ? `<p class="empty">Nothing saved yet. Open any objective or resource and tap its ☆ star to bookmark it.</p>` : `
        ${objs.length ? `<h2 class="section-title">Objectives <span class="count">${objs.length}</span></h2><div class="search-results">${objCards}</div>` : ""}
        ${res.length ? `<h2 class="section-title">Resources <span class="count">${res.length}</span></h2><div class="search-results">${resCards}</div>` : ""}
      `}`;
  }

  function mount() {
    document.querySelectorAll(".bm-remove").forEach(btn => {
      btn.addEventListener("click", () => { toggleRes(btn.dataset.url); btn.closest(".bm-res-row").remove(); });
    });
  }

  window.Bookmarks = { isObjSaved, toggleObj, isResSaved, toggleRes, decorateObj, decorateResources, page, mount, onChange };
})();
