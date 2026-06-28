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

  function merge(list) {
    let changed = false;
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
        if (!window.CLASSROOM.resources.some(r => r.id === "cr-" + cr.id)) {
          window.CLASSROOM.resources.push(libResource(cr));
          window.CLASSROOM.meta.count = window.CLASSROOM.resources.length;
          changed = true;
        }
      }
    });
    if (changed) { try { window.dispatchEvent(new CustomEvent("lh-resources-loaded")); } catch (e) {} }
  }

  async function reload() {
    try {
      const res = await fetch(`${CFG.url}/rest/v1/custom_resources?select=*`, {
        headers: { apikey: CFG.anonKey, Authorization: `Bearer ${CFG.anonKey}` }
      });
      if (!res.ok) return;
      merge(await res.json());
    } catch (e) { /* offline / not set up yet — ignore */ }
  }

  window.CustomResources = { reload };
  reload();
})();
