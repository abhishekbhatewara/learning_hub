/* Custom resources: admin-added videos/sites/podcasts/books stored in Supabase
 * and merged live into objectives and/or the Library for EVERY visitor.
 * Reads via the public REST endpoint with the anon key (no login needed, no
 * supabase-js client) so it's cheap for anonymous users. */
(function () {
  const CFG = window.LH_SUPABASE || {};
  if (!CFG.url || !CFG.anonKey) return;
  const seen = new Set(); // custom_resources ids already merged

  function findObj(s, t, i) {
    const subs = (window.HUB && window.HUB.subjects) || [];
    const sub = subs.find(x => x.id === s); if (!sub) return null;
    for (const g of sub.grades) {
      const tp = g.topics.find(x => x.id === t);
      if (tp && tp.objectives && tp.objectives[i] != null && typeof tp.objectives[i] === "object") return tp.objectives[i];
    }
    return null;
  }
  function libKind(type) { return type === "video" ? "video" : type === "podcast" ? "podcast" : "reading"; }
  function objResource(cr) {
    return { type: cr.type, title: cr.title, provider: cr.provider || "➕ Added resource",
      url: cr.url, note: cr.note || "", author: cr.author || "", chapter: cr.chapter || "", __cid: cr.id };
  }
  function libResource(cr) {
    return { id: "cr-" + cr.id, title: cr.title, url: cr.url, kind: libKind(cr.type),
      module: cr.library_module || "Science", subject: cr.library_subject || "", source: cr.provider || "Added", topics: [] };
  }

  // remove all previously-merged custom resources (so a reload reflects edits/deletes)
  function clearMerged() {
    ((window.HUB && window.HUB.subjects) || []).forEach(s => s.grades.forEach(g => g.topics.forEach(t =>
      (t.objectives || []).forEach(o => { if (o.resources) o.resources = o.resources.filter(r => !r.__cid); }))));
    if (window.CLASSROOM && Array.isArray(window.CLASSROOM.resources)) {
      window.CLASSROOM.resources = window.CLASSROOM.resources.filter(r => !(typeof r.id === "string" && r.id.indexOf("cr-") === 0));
      window.CLASSROOM.meta.count = window.CLASSROOM.resources.length;
    }
    seen.clear();
  }

  function merge(list) {
    let changed = false;
    const newLib = []; // collected so we can put them at the TOP of the Library
    list.forEach(cr => {
      if (seen.has(cr.id)) return;
      seen.add(cr.id);
      (cr.targets || []).forEach(tg => {
        const obj = findObj(tg.s, tg.t, tg.i);
        if (obj) {
          obj.resources = obj.resources || [];
          if (!obj.resources.some(r => r.__cid === cr.id)) { obj.resources.push(objResource(cr)); changed = true; }
        }
      });
      if (cr.to_library && window.CLASSROOM && Array.isArray(window.CLASSROOM.resources)) {
        if (!window.CLASSROOM.resources.some(r => r.id === "cr-" + cr.id)) { newLib.push(libResource(cr)); changed = true; }
      }
    });
    if (newLib.length && window.CLASSROOM) {
      window.CLASSROOM.resources.unshift(...newLib);           // newest additions at the top
      window.CLASSROOM.meta.count = window.CLASSROOM.resources.length;
    }
    if (changed) { try { window.dispatchEvent(new CustomEvent("lh-resources-loaded")); } catch (e) {} }
  }

  async function reload() {
    try {
      // newest first so the most recent additions sit at the top of the Library
      const res = await fetch(`${CFG.url}/rest/v1/custom_resources?select=*&order=created_at.desc`, {
        headers: { apikey: CFG.anonKey, Authorization: `Bearer ${CFG.anonKey}` }
      });
      if (!res.ok) return;
      clearMerged();
      merge(await res.json());
    } catch (e) { /* offline / not set up yet — ignore */ }
  }

  window.CustomResources = { reload };
  reload();
})();
