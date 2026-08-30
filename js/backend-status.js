/* Backend reachability status.
 *
 * The hub is a static site: every subject, objective, quiz, mindmap, worksheet
 * and the Library work with NO backend at all. Only the accounts layer (parent
 * /child sign-in, assignments, live progress) and admin-authored resources need
 * Supabase. A free-tier Supabase project auto-pauses after a week of inactivity
 * — when that happens its hostname stops resolving entirely, so every call dies
 * at DNS with no HTTP status to inspect.
 *
 * This module is the single place that remembers whether the backend is up, so
 * that a paused project degrades quietly and visibly instead of leaving dead
 * buttons behind a healthy-looking page.
 *
 * Cheap by design: the happy path costs ZERO extra requests. custom-resources.js
 * runs its real fetch on every page load and reports the outcome here; family.js
 * reuses that verdict and only probes when there isn't a fresh one.
 */
(function () {
  "use strict";

  const CFG = window.LH_SUPABASE || {};
  const KEY = "lh_backend_status_v1";
  const TTL_OK = 10 * 60 * 1000;  // trust "up" for 10 minutes
  const TTL_DOWN = 60 * 1000;     // re-check "down" after a minute
  const TIMEOUT = 6000;

  let inflight = null;

  function cached() {
    try {
      const j = JSON.parse(sessionStorage.getItem(KEY) || "null");
      if (!j || typeof j.ok !== "boolean") return null;
      return (Date.now() - j.ts) < (j.ok ? TTL_OK : TTL_DOWN) ? j : null;
    } catch (e) { return null; }
  }

  function report(ok) {
    try { sessionStorage.setItem(KEY, JSON.stringify({ ok: !!ok, ts: Date.now() })); } catch (e) {}
    return !!ok;
  }

  async function probe() {
    if (!CFG.url || !CFG.anonKey) return report(false);
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), TIMEOUT);
    try {
      // GoTrue's health endpoint: cheapest thing behind the API gateway.
      const r = await fetch(CFG.url + "/auth/v1/health", {
        headers: { apikey: CFG.anonKey }, signal: ctl.signal, cache: "no-store"
      });
      // Any HTTP answer means the project is awake; only a network/DNS failure
      // (or a gateway 5xx) counts as down.
      return report(r.status < 500);
    } catch (e) {
      return report(false);
    } finally { clearTimeout(timer); }
  }

  // Resolves to true/false. Uses the cached verdict unless it's stale or `force`.
  function check(force) {
    if (!force) {
      const c = cached();
      if (c) return Promise.resolve(c.ok);
    }
    if (inflight) return inflight;
    inflight = probe().then(ok => { inflight = null; return ok; });
    return inflight;
  }

  // True only when we have a FRESH verdict saying it's down — used to skip
  // requests we already know will fail (and the console noise they generate).
  function isKnownDown() {
    const c = cached();
    return c ? !c.ok : false;
  }

  function forget() { try { sessionStorage.removeItem(KEY); } catch (e) {} }

  window.LHBackend = { check, report, isKnownDown, forget, configured: !!(CFG.url && CFG.anonKey) };
})();
