/* Admin Mode — add/delete learning resources & quiz questions per objective.
 *
 * STATIC-SITE DESIGN: there is no server. Admin edits are applied in-memory and
 * persisted in this browser's localStorage as an "overrides" layer on top of the
 * baked-in data. They show only in your browser until you EXPORT them to
 * data-overrides.json and commit that one file — then the app fetches it and the
 * changes apply for every visitor. (Overrides apply for everyone; only the
 * editing UI is gated.)
 *
 * SECURITY NOTE: the passphrase below is a *soft gate* to hide the editing UI,
 * NOT real security — this is a public static site, so anyone could read the code.
 * The content is public anyway. Change ADMIN_PASS to your own phrase.
 */
(function () {
  "use strict";
  const ADMIN_PASS = "wolves-admin";          // <-- change this to set your admin passphrase
  const LS_KEY = "lh_overrides_v1";
  const OVERRIDES_URL = "data-overrides.json"; // committed file (optional) -> applies for everyone

  // ---------- state ----------
  let store = loadStore();   // this browser's unsaved overrides
  let committed = {};        // overrides from the committed data-overrides.json

  function loadStore() { try { return JSON.parse(localStorage.getItem(LS_KEY) || "{}"); } catch (e) { return {}; } }
  function saveStore() { localStorage.setItem(LS_KEY, JSON.stringify(store)); }
  function isAdmin() { return sessionStorage.getItem("lh_admin") === "1"; }
  function setAdmin(v) { v ? sessionStorage.setItem("lh_admin", "1") : sessionStorage.removeItem("lh_admin"); }

  function subjects() { return (window.HUB && window.HUB.subjects) || []; }
  function eachObjective(cb) {
    subjects().forEach(s => (s.grades || []).forEach(g => (g.topics || []).forEach(t =>
      (t.objectives || []).forEach((o, i) => { if (o && typeof o === "object" && "text" in o) cb(s, t, o, i); }))));
  }
  function oid(sId, tId, i) { return sId + "|" + tId + "|" + i; }
  function findObj(sId, tId, i) {
    const s = subjects().find(x => x.id === sId); if (!s) return null;
    for (const g of s.grades) { const t = (g.topics || []).find(x => x.id === tId); if (t) return { s, t, o: t.objectives[i] }; }
    return null;
  }
  function ensure(id) { store[id] = store[id] || { delRes: [], addRes: [], delQuiz: [], addQuiz: [] }; return store[id]; }
  function dedupe(arr, key) { const seen = new Set(); return arr.filter(x => { const k = x[key]; if (seen.has(k)) return false; seen.add(k); return true; }); }

  function merged(id) {
    const a = committed[id] || {}, b = store[id] || {};
    return {
      delRes: [...new Set([...(a.delRes || []), ...(b.delRes || [])])],
      addRes: dedupe([...(a.addRes || []), ...(b.addRes || [])], "url"),
      delQuiz: [...new Set([...(a.delQuiz || []), ...(b.delQuiz || [])])],
      addQuiz: dedupe([...(a.addQuiz || []), ...(b.addQuiz || [])], "q")
    };
  }

  // Re-derive every objective's resources/quiz from an untouched baked copy +
  // overrides. Idempotent: safe to call on every render.
  function applyAll() {
    eachObjective((s, t, o, i) => {
      if (!o.__baked) o.__baked = { res: (o.resources || []).slice(), quiz: (o.quiz || []).slice() };
      const ov = merged(oid(s.id, t.id, i));
      o.resources = o.__baked.res.filter(r => !ov.delRes.includes(r.url)).concat(ov.addRes);
      o.quiz = o.__baked.quiz.filter(q => !ov.delQuiz.includes(q.q)).concat(ov.addQuiz);
    });
  }
  function rerender() { window.dispatchEvent(new HashChangeEvent("hashchange")); }
  function refresh() { saveStore(); applyAll(); rerender(); }

  // ---------- mutations ----------
  function addResource(sId, tId, i, res) { ensure(oid(sId, tId, i)).addRes.push(res); refresh(); }
  function delResource(sId, tId, i, res) {
    const ov = ensure(oid(sId, tId, i));
    const k = ov.addRes.findIndex(r => r.url === res.url && r.title === res.title);
    if (k >= 0) ov.addRes.splice(k, 1);            // it was an admin-added one
    else if (!ov.delRes.includes(res.url)) ov.delRes.push(res.url);  // baked -> mark deleted
    refresh();
  }
  function addQuiz(sId, tId, i, q) { ensure(oid(sId, tId, i)).addQuiz.push(q); refresh(); }
  function delQuiz(sId, tId, i, q) {
    const ov = ensure(oid(sId, tId, i));
    const k = ov.addQuiz.findIndex(x => x.q === q.q);
    if (k >= 0) ov.addQuiz.splice(k, 1);
    else if (!ov.delQuiz.includes(q.q)) ov.delQuiz.push(q.q);
    refresh();
  }

  // ---------- small DOM helpers ----------
  function h(tag, attrs, html) { const e = document.createElement(tag); if (attrs) for (const k in attrs) { if (k === "class") e.className = attrs[k]; else e.setAttribute(k, attrs[k]); } if (html != null) e.innerHTML = html; return e; }
  function val(form, name) { const el = form.querySelector("[name='" + name + "']"); return el ? el.value.trim() : ""; }

  // ---------- decorate objective views with admin controls ----------
  function decorate(kind, sId, tId, i) {
    if (!isAdmin()) return;
    const ctx = findObj(sId, tId, i); if (!ctx || !ctx.o) return;
    const o = ctx.o;
    if (kind === "resources") {
      const cards = document.querySelectorAll(".res-list .res-card");
      cards.forEach((card, k) => {
        const res = o.resources[k]; if (!res) return;
        const btn = h("button", { class: "admin-del", title: "Delete this resource" }, "🗑");
        btn.addEventListener("click", () => { if (confirm("Delete this resource from this objective?")) delResource(sId, tId, i, res); });
        card.appendChild(btn);
      });
      const list = document.querySelector(".res-list");
      if (list) list.insertAdjacentElement("afterend", resourceForm(sId, tId, i));
    } else if (kind === "quiz") {
      const cards = document.querySelectorAll("#quiz-list .q-card");
      cards.forEach((card, k) => {
        const q = o.quiz[k]; if (!q) return;
        const btn = h("button", { class: "admin-del", title: "Delete this question" }, "🗑");
        btn.addEventListener("click", () => { if (confirm("Delete this quiz question?")) delQuiz(sId, tId, i, q); });
        card.querySelector(".q-top").appendChild(btn);
      });
      const listc = document.getElementById("quiz-list");
      if (listc) listc.insertAdjacentElement("afterend", quizForm(sId, tId, i));
    }
  }

  // ---------- add-resource form ----------
  function resourceForm(sId, tId, i) {
    const wrap = h("div", { class: "admin-box" });
    wrap.innerHTML = `
      <h4>➕ Add a resource</h4>
      <form class="admin-form">
        <label>Type
          <select name="type">
            <option value="reading">reading</option><option value="video">video</option>
            <option value="interactive">interactive</option><option value="podcast">podcast</option>
            <option value="book">book (textbook / enrichment)</option>
          </select></label>
        <label>Title <input name="title" required></label>
        <label>Provider / author <input name="provider" placeholder="e.g. Khan Academy"></label>
        <label>URL <input name="url" type="url" placeholder="https://…"></label>
        <label class="bookonly" style="display:none">Chapter / reference <input name="chapter"></label>
        <label class="bookonly" style="display:none"><input type="checkbox" name="enrichment"> enrichment read (green)</label>
        <label>Note <input name="note" placeholder="one-line description"></label>
        <button type="submit" class="btn btn-primary">Add resource</button>
      </form>`;
    const form = wrap.querySelector("form");
    const typeSel = form.querySelector("[name='type']");
    typeSel.addEventListener("change", () => {
      const isBook = typeSel.value === "book";
      wrap.querySelectorAll(".bookonly").forEach(el => el.style.display = isBook ? "" : "none");
    });
    form.addEventListener("submit", e => {
      e.preventDefault();
      const type = typeSel.value, title = val(form, "title");
      if (!title) return;
      let res;
      if (type === "book") {
        res = { type: "book", title, author: val(form, "provider"), chapter: val(form, "chapter"),
                note: val(form, "note"), url: val(form, "url") };
        if (form.querySelector("[name='enrichment']").checked) res.enrichment = true;
      } else {
        res = { type, title, provider: val(form, "provider"), url: val(form, "url"), note: val(form, "note") };
      }
      addResource(sId, tId, i, res);
    });
    return wrap;
  }

  // ---------- add-quiz form ----------
  function quizForm(sId, tId, i) {
    const wrap = h("div", { class: "admin-box" });
    wrap.innerHTML = `
      <h4>➕ Add a quiz question</h4>
      <form class="admin-form">
        <label>Type
          <select name="type">
            <option value="mcq">multiple choice</option><option value="tf">true / false</option>
            <option value="numeric">numeric</option><option value="short">short answer</option>
            <option value="long">long answer</option><option value="match">match pairs</option>
          </select></label>
        <label>Difficulty
          <select name="difficulty"><option>easy</option><option selected>medium</option><option>hard</option></select></label>
        <label>Question <textarea name="q" required rows="2"></textarea></label>
        <div class="q-mcq">
          <label>Options (one per line; mark the correct one with a leading *)
            <textarea name="options" rows="4" placeholder="*correct option&#10;wrong option&#10;wrong option"></textarea></label>
        </div>
        <div class="q-tf" style="display:none">
          <label>Correct answer <select name="tfans"><option value="true">True</option><option value="false">False</option></select></label>
        </div>
        <div class="q-ans" style="display:none">
          <label>Answer (numeric value, or model answer for written) <input name="answer"></label>
        </div>
        <div class="q-match" style="display:none">
          <label>Pairs (one per line as: term | match)
            <textarea name="pairs" rows="4" placeholder="3 + 4 | 7&#10;5 × 2 | 10"></textarea></label>
        </div>
        <label>Explanation <textarea name="explanation" rows="2"></textarea></label>
        <button type="submit" class="btn btn-primary">Add question</button>
      </form>`;
    const form = wrap.querySelector("form");
    const typeSel = form.querySelector("[name='type']");
    function sync() {
      const t = typeSel.value;
      wrap.querySelector(".q-mcq").style.display = t === "mcq" ? "" : "none";
      wrap.querySelector(".q-tf").style.display = t === "tf" ? "" : "none";
      wrap.querySelector(".q-ans").style.display = (t === "numeric" || t === "short" || t === "long") ? "" : "none";
      wrap.querySelector(".q-match").style.display = t === "match" ? "" : "none";
    }
    typeSel.addEventListener("change", sync); sync();
    form.addEventListener("submit", e => {
      e.preventDefault();
      const type = typeSel.value, q = val(form, "q");
      if (!q) return;
      const obj = { type, difficulty: val(form, "difficulty") || "medium", q };
      if (type === "mcq") {
        const lines = form.querySelector("[name='options']").value.split("\n").map(s => s.trim()).filter(Boolean);
        if (lines.length < 2) return alert("Add at least two options, marking the correct one with *.");
        let answer = lines.findIndex(l => l.startsWith("*"));
        if (answer < 0) answer = 0;
        obj.options = lines.map(l => l.replace(/^\*/, "").trim());
        obj.answer = answer;
      } else if (type === "tf") {
        obj.answer = val(form, "tfans") === "true";
      } else if (type === "numeric" || type === "short" || type === "long") {
        obj.answer = val(form, "answer");
      } else if (type === "match") {
        const pairs = form.querySelector("[name='pairs']").value.split("\n").map(s => s.trim()).filter(Boolean)
          .map(l => l.split("|").map(x => x.trim())).filter(p => p.length === 2);
        if (!pairs.length) return alert("Add at least one pair as: term | match");
        obj.pairs = pairs;
      }
      obj.explanation = val(form, "explanation");
      addQuiz(sId, tId, i, obj);
    });
    return wrap;
  }

  // ---------- gate + toolbar ----------
  function gearAndBar() {
    const gear = h("button", { id: "admin-gear", title: "Admin" }, "⚙");
    gear.addEventListener("click", () => { isAdmin() ? toggleBar() : login(); });
    document.body.appendChild(gear);
    const bar = h("div", { id: "admin-bar" });
    bar.innerHTML = `<span class="abadge">🔧 Admin mode</span>
      <span class="ahint">Open any objective's Resources or Quiz to add/delete. Changes save in this browser.</span>
      <button data-a="export" class="btn">⬇ Export changes</button>
      <button data-a="clear" class="btn">Clear my changes</button>
      <button data-a="exit" class="btn">Exit admin</button>`;
    document.body.appendChild(bar);
    bar.querySelector("[data-a='export']").addEventListener("click", exportOverrides);
    bar.querySelector("[data-a='clear']").addEventListener("click", () => {
      if (confirm("Discard all unsaved (this-browser) changes?")) { store = {}; saveStore(); applyAll(); rerender(); }
    });
    bar.querySelector("[data-a='exit']").addEventListener("click", () => { setAdmin(false); updateBar(); rerender(); });
    updateBar();
  }
  function updateBar() { document.body.classList.toggle("is-admin", isAdmin()); }
  function toggleBar() { /* bar visibility is driven by .is-admin; clicking gear when admin just re-shows */ updateBar(); }
  function login() {
    const p = prompt("Enter admin passphrase:");
    if (p == null) return;
    if (p === ADMIN_PASS) { setAdmin(true); updateBar(); rerender(); }
    else alert("Incorrect passphrase.");
  }
  function exportOverrides() {
    const blob = new Blob([JSON.stringify(store, null, 2)], { type: "application/json" });
    const a = h("a"); a.href = URL.createObjectURL(blob); a.download = "data-overrides.json";
    document.body.appendChild(a); a.click(); a.remove();
    alert("Saved data-overrides.json.\n\nTo publish for everyone: put this file in the repo root and commit/push it.\nThen you can 'Clear my changes' (they're now in the committed file).");
  }

  // ---------- styles ----------
  const css = `
    #admin-gear{position:fixed;right:14px;bottom:14px;z-index:9998;width:42px;height:42px;border-radius:50%;
      border:none;background:#1f2937;color:#fff;font-size:1.2rem;cursor:pointer;box-shadow:0 2px 10px rgba(0,0,0,.3);opacity:.55}
    #admin-gear:hover{opacity:1}
    #admin-bar{position:fixed;left:0;right:0;bottom:0;z-index:9997;display:none;gap:.6rem;align-items:center;flex-wrap:wrap;
      background:#111827;color:#fff;padding:.5rem .9rem;font-size:.85rem}
    body.is-admin #admin-bar{display:flex}
    body.is-admin{padding-bottom:52px}
    #admin-bar .abadge{font-weight:700;color:#fcd34d}
    #admin-bar .ahint{color:#cbd5e1;flex:1;min-width:160px}
    #admin-bar .btn{background:#374151;color:#fff;border:none;border-radius:6px;padding:.3rem .7rem;cursor:pointer;font-size:.82rem}
    #admin-bar .btn:hover{background:#4b5563}
    .admin-del{margin-top:.4rem;align-self:flex-start;background:#fee2e2;color:#b91c1c;border:1px solid #fecaca;
      border-radius:6px;padding:.12rem .5rem;font-size:.78rem;font-weight:600;cursor:pointer}
    .q-top .admin-del{margin:0 0 0 auto}
    .admin-box{margin:1rem 0;padding:1rem 1.1rem;border:1px dashed #94a3b8;border-radius:10px;background:#f8fafc}
    .admin-box h4{margin:0 0 .6rem;font-family:"Inter";font-weight:700}
    .admin-form{display:flex;flex-direction:column;gap:.55rem;max-width:560px}
    .admin-form label{display:flex;flex-direction:column;gap:.2rem;font-size:.85rem;font-weight:600;color:#334155}
    .admin-form input,.admin-form select,.admin-form textarea{font:inherit;padding:.4rem .55rem;border:1px solid #cbd5e1;border-radius:6px}
    .admin-form .btn-primary{align-self:flex-start;margin-top:.2rem}`;
  document.head.appendChild(h("style", null, css));

  // ---------- init ----------
  window.Admin = { decorate, active: isAdmin, applyAll };
  applyAll();                 // apply this-browser overrides immediately
  rerender();                 // reflect them (app already did its first paint)
  if (document.body) gearAndBar(); else window.addEventListener("DOMContentLoaded", gearAndBar);
  // pull committed overrides (apply for everyone), then re-render
  fetch(OVERRIDES_URL, { cache: "no-store" }).then(r => r.ok ? r.json() : {}).then(j => {
    committed = j && typeof j === "object" ? j : {}; applyAll(); rerender();
  }).catch(() => {});
})();
