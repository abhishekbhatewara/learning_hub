/* Family / Parent-Child accounts (Supabase-backed).
 * Phase 1: email-OTP auth, role onboarding, and parent⇄child linking.
 * The Supabase JS client is loaded lazily from a CDN the first time the
 * Parents area is opened, so it adds nothing to the static hub's normal load.
 *
 * Exposes window.Family with an async mount(container) that renders the right
 * view for the current auth/profile state. app.js routes #/parents here. */
(function () {
  const CFG = window.LH_SUPABASE || {};
  let SB = null;          // supabase client (once loaded)
  let loading = null;     // promise guard for init
  let container = null;   // where we render
  let cameFromCallback = false; // true while handling a magic-link return
  let childAssignments = [];    // cache of the signed-in child's assignments
  let progressChannel = null;   // realtime subscription (parent dashboard)
  const builderSel = new Map(); // assignment builder selection: "s|t|i" -> {s,t,i}
  const resSel = new Map();     // admin resource-builder objective targets
  let state = { user: null, profile: null, view: "loading", msg: "", pendingEmail: "", isAdmin: false };

  function esc(x) { return String(x == null ? "" : x).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }

  // ---- client bootstrap ----
  async function init() {
    if (SB) return SB;
    if (loading) return loading;
    loading = import("https://esm.sh/@supabase/supabase-js@2")
      .then(({ createClient }) => {
        SB = createClient(CFG.url, CFG.anonKey, {
          // We handle the magic-link callback ourselves (see handleCallback) so
          // it works whether the token comes back in the #hash or a ?code= query.
          auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
        });
        SB.auth.onAuthStateChange(() => { refresh(); });
        return SB;
      });
    return loading;
  }

  // ---- data helpers ----
  async function loadProfile(uid) {
    const { data } = await SB.from("profiles").select("*").eq("id", uid).maybeSingle();
    return data || null;
  }
  async function refresh() {
    const { data: { user } } = await SB.auth.getUser();
    state.user = user || null;
    state.profile = user ? await loadProfile(user.id) : null;
    if (!state.user) state.view = "auth";
    else if (!state.profile) state.view = "onboard";
    else state.view = state.profile.role === "parent" ? "parent" : "child";
    // keep the child's assignments cached so progress made on objective pages
    // (away from #/parents) can be synced to the database.
    if (state.profile && state.profile.role === "child") {
      try { childAssignments = await listChildAssignments(); } catch (e) { /* offline ok */ }
    } else { childAssignments = []; }
    // is this user allowed to add public resources?
    if (state.user) {
      try { const { data } = await SB.from("admins").select("email").eq("email", state.user.email); state.isAdmin = !!(data && data.length); }
      catch (e) { state.isAdmin = false; }
    } else { state.isAdmin = false; }
    // tell app.js to re-label the nav (Parents vs My learning) for the new state
    try { window.dispatchEvent(new CustomEvent("lh-auth-change")); } catch (e) {}
    // after a magic-link return we land on the base URL; route into the Parents
    // area either way — signed in (parent/child view) or failed (auth + error).
    if (cameFromCallback) {
      cameFromCallback = false;
      if (location.hash !== "#/parents") { location.hash = "#/parents"; return; }
    }
    render();
  }

  // ---- auth actions ----
  async function sendCode(email) {
    state.msg = "Sending…"; render();
    // redirect target for the magic-link path: the page base WITHOUT a hash
    // fragment (Supabase appends its own #tokens; a pre-existing #route would clash)
    const { error } = await SB.auth.signInWithOtp({
      email,
      options: { shouldCreateUser: true, emailRedirectTo: location.href.split("#")[0] }
    });
    if (error) { state.msg = "⚠️ " + error.message; render(); return; }
    state.pendingEmail = email; state.view = "verify"; state.msg = "";
    render();
  }
  async function verifyCode(token) {
    state.msg = "Checking…"; render();
    const { error } = await SB.auth.verifyOtp({ email: state.pendingEmail, token: token.trim(), type: "email" });
    if (error) { state.msg = "⚠️ " + error.message; render(); return; }
    // onAuthStateChange → refresh() handles the rest
  }
  async function signInWithGoogle() {
    state.msg = "Redirecting to Google…"; render();
    const { error } = await SB.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: location.href.split("#")[0] }
    });
    if (error) { state.msg = "⚠️ " + error.message; render(); }
  }
  async function signOut() { await SB.auth.signOut(); state.pendingEmail = ""; refresh(); }

  async function saveProfile(role, name) {
    state.msg = "Saving…"; render();
    const { error } = await SB.from("profiles").upsert({
      id: state.user.id, role, full_name: name || null, email: state.user.email
    });
    if (error) { state.msg = "⚠️ " + error.message; render(); return; }
    state.msg = "";
    refresh();
  }

  // ---- parent: children ----
  async function listChildren() {
    const { data } = await SB.from("family_links").select("*").eq("parent_id", state.user.id).order("created_at");
    const links = data || [];
    // fetch accepted children's names
    const ids = links.filter(l => l.child_id).map(l => l.child_id);
    let names = {};
    if (ids.length) {
      const { data: profs } = await SB.from("profiles").select("id, full_name, email").in("id", ids);
      (profs || []).forEach(p => { names[p.id] = p; });
    }
    return links.map(l => ({ ...l, childProfile: l.child_id ? names[l.child_id] : null }));
  }
  async function inviteChild(email) {
    state.msg = "Inviting…"; render();
    const { error } = await SB.from("family_links").insert({
      parent_id: state.user.id, child_email: email.trim().toLowerCase(), status: "pending"
    });
    const link = location.href.split("#")[0] + "#/parents";
    state.msg = error ? "⚠️ " + error.message
      : `✓ Saved — but no email is sent automatically. Send your child this link, and have them sign in with ${email.trim()}, choose “I'm a learner”, and tap Accept:  ${link}`;
    renderParent();
  }
  async function revokeLink(id) {
    await SB.from("family_links").delete().eq("id", id);
    renderParent();
  }

  // ---- child: invites ----
  async function listInvites() {
    const { data } = await SB.from("family_links").select("*").order("created_at");
    return data || []; // RLS already restricts to this child's email / uid
  }
  async function acceptInvite(id) {
    state.msg = "Linking…"; render();
    const { error } = await SB.from("family_links")
      .update({ child_id: state.user.id, status: "accepted", accepted_at: new Date().toISOString() })
      .eq("id", id);
    state.msg = error ? "⚠️ " + error.message : "✓ Linked!";
    renderChild();
  }

  // ---- curriculum lookup (from window.HUB) ----
  function subjectsList() { return (window.HUB && window.HUB.subjects) || []; }
  function objText(s, t, i) {
    const sub = subjectsList().find(x => x.id === s); if (!sub) return "(objective)";
    for (const g of sub.grades) {
      const tp = g.topics.find(x => x.id === t);
      if (tp && tp.objectives[i] != null) return typeof tp.objectives[i] === "object" ? tp.objectives[i].text : tp.objectives[i];
    }
    return "(objective)";
  }
  // flat catalog of every objective for the AI placement helper
  function objCatalog() {
    const out = [];
    subjectsList().forEach(s => s.grades.forEach(g => g.topics.forEach(t =>
      (t.objectives || []).forEach((o, i) => { if (typeof o === "object") out.push({ id: `${s.id}|${t.id}|${i}`, text: o.text }); }))));
    return out;
  }
  function objCtxOf(id) {
    const [s, t, i] = id.split("|");
    const sub = subjectsList().find(x => x.id === s); if (!sub) return null;
    for (const g of sub.grades) {
      const tp = g.topics.find(x => x.id === t);
      if (tp && tp.objectives[+i] != null) {
        const o = tp.objectives[+i];
        return { s, t, i: +i, text: typeof o === "object" ? o.text : o, ctx: `${sub.name} · ${g.name} · ${tp.title}` };
      }
    }
    return null;
  }

  // ---- assignments data ----
  async function listParentAssignments() {
    const { data } = await SB.from("assignments").select("*").eq("parent_id", state.user.id).order("created_at", { ascending: false });
    return data || [];
  }
  async function listChildAssignments() {
    const { data } = await SB.from("assignments").select("*").eq("child_id", state.user.id).order("created_at", { ascending: false });
    return data || [];
  }
  async function listProgressFor(ids) {
    if (!ids.length) return [];
    const { data } = await SB.from("assignment_progress").select("*").in("assignment_id", ids);
    return data || [];
  }
  function progressMap(rows) {
    const m = {};
    rows.forEach(p => { (m[p.assignment_id] = m[p.assignment_id] || {})[p.item_key] = p; });
    return m;
  }
  async function createAssignment(childId, title, note, due, items) {
    return (await SB.from("assignments").insert({
      parent_id: state.user.id, child_id: childId, title, note: note || null, due_date: due || null, items
    })).error;
  }

  // Bridge: when a signed-in child completes an objective via the localStorage
  // Progress system, mirror it into assignment_progress so the parent sees it live.
  async function syncProgress(s, t, i) {
    if (!SB || !state.user || !state.profile || state.profile.role !== "child" || !childAssignments.length) return;
    const key = `${s}|${t}|${i}`;
    const P = window.Progress;
    const done = P ? P.isDone(s, t, i) : false;
    const q = P ? P.quizOf(s, t, i) : null;
    for (const a of childAssignments) {
      if ((a.items || []).some(it => it.s === s && it.t === t && it.i === i)) {
        await SB.from("assignment_progress").upsert(
          { assignment_id: a.id, child_id: state.user.id, item_key: key, status: done ? "done" : "in_progress", score: q ? q.pct : null },
          { onConflict: "assignment_id,item_key" }
        );
      }
    }
  }

  // Ask the edge function for an AI "concepts to strengthen" summary.
  async function conceptSummary(objective, detail) {
    try {
      const { data, error } = await SB.functions.invoke("concept-summary", {
        body: { objective, wrong: detail.wrong, score: detail.score, total: detail.total }
      });
      if (error) return "";
      return (data && data.summary) || "";
    } catch (e) { return ""; }
  }
  // Full quiz submit for a child: get the AI summary, then store the breakdown
  // (+ summary) so both child and parent can see it. Returns the summary text.
  async function submitQuiz(s, t, i, objective, detail) {
    if (!SB || role() !== "child") return "";
    const summary = await conceptSummary(objective, detail);
    detail.summary = summary;
    await syncQuizResult(s, t, i, detail);
    return summary;
  }

  // Store a quiz result breakdown (score + which questions were wrong) so the
  // parent dashboard can show exactly what to review.
  async function syncQuizResult(s, t, i, detail) {
    if (!SB || role() !== "child" || !childAssignments.length) return;
    const key = `${s}|${t}|${i}`;
    for (const a of childAssignments) {
      if ((a.items || []).some(it => it.s === s && it.t === t && it.i === i)) {
        await SB.from("assignment_progress").upsert(
          { assignment_id: a.id, child_id: state.user.id, item_key: key, status: "done", score: detail.score, details: detail },
          { onConflict: "assignment_id,item_key" }
        );
      }
    }
  }

  // ---- views ----
  function isChildView() { return state.profile && state.profile.role === "child"; }
  function role() { return state.profile ? state.profile.role : null; }
  function navInfo() { return { label: isChildView() ? "🎒 My learning" : "👪 Parents" }; }
  function shell(inner) {
    const child = isChildView();
    const crumb = child ? "My learning" : "Parents";
    const hero = child
      ? `<h1>🎒 My learning</h1>
         <p class="lede">Your assignments from your parent — open each one, do the work, and your progress updates automatically.</p>`
      : `<h1>👪 Parents &amp; learners</h1>
         <p class="lede">Assign objectives and quizzes to your child, and watch their progress update live. Sign in with Google or email — no passwords.</p>`;
    return `
      <nav class="breadcrumb"><a href="#/">Subjects</a> › <span>${crumb}</span></nav>
      <section class="hero">${hero}</section>
      <div class="family-wrap">${inner}</div>`;
  }
  function note() { return state.msg ? `<p class="family-msg">${esc(state.msg)}</p>` : ""; }
  const GOOGLE_SVG = `
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"/>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"/>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"/>`;

  function render() {
    if (!container) return;
    if (state.view === "loading") { container.innerHTML = shell(`<p class="empty">Loading…</p>`); return; }
    if (state.view === "auth") return renderAuth();
    if (state.view === "verify") return renderVerify();
    if (state.view === "onboard") return renderOnboard();
    if (state.view === "parent") return renderParent();
    if (state.view === "child") return renderChild();
  }

  function renderAuth() {
    container.innerHTML = shell(`
      <div class="family-card">
        <h3>Sign in or create an account</h3>
        <button class="btn-google" id="fam-google" type="button">
          <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">${GOOGLE_SVG}</svg>
          Continue with Google
        </button>
        <div class="auth-divider"><span>or with email</span></div>
        <p class="muted">Enter your email and we'll send you a 6-digit code (and a magic link). Works for both parents and children.</p>
        <form id="fam-email-form" class="family-form">
          <input id="fam-email" type="email" required placeholder="you@example.com" autocomplete="email" />
          <button class="btn btn-primary" type="submit">Send my code →</button>
        </form>
        ${note()}
      </div>`);
    document.getElementById("fam-google").addEventListener("click", signInWithGoogle);
    document.getElementById("fam-email-form").addEventListener("submit", e => {
      e.preventDefault();
      const v = document.getElementById("fam-email").value.trim();
      if (v) sendCode(v);
    });
  }

  function renderVerify() {
    container.innerHTML = shell(`
      <div class="family-card">
        <h3>Enter your code</h3>
        <p class="muted">We emailed a 6-digit code to <strong>${esc(state.pendingEmail)}</strong>. Enter it below — or just click the magic link in that email.</p>
        <form id="fam-code-form" class="family-form">
          <input id="fam-code" inputmode="numeric" autocomplete="one-time-code" placeholder="123456" />
          <button class="btn btn-primary" type="submit">Verify →</button>
        </form>
        <p><button class="btn btn-ghost" id="fam-back" type="button">← Use a different email</button></p>
        ${note()}
      </div>`);
    document.getElementById("fam-code-form").addEventListener("submit", e => {
      e.preventDefault();
      const v = document.getElementById("fam-code").value;
      if (v) verifyCode(v);
    });
    document.getElementById("fam-back").addEventListener("click", () => { state.view = "auth"; state.msg = ""; render(); });
  }

  function renderOnboard() {
    container.innerHTML = shell(`
      <div class="family-card">
        <h3>Welcome! Who are you?</h3>
        <p class="muted">Signed in as <strong>${esc(state.user.email)}</strong>. Choose your role to finish setting up.</p>
        <form id="fam-onboard" class="family-form-col">
          <label class="family-field">Your name (optional)
            <input id="fam-name" type="text" placeholder="e.g. Abhishek" />
          </label>
          <div class="role-pick">
            <button class="role-btn" type="button" data-role="parent"><span class="role-emoji">🧑‍🍼</span><strong>I'm a parent</strong><span class="muted">Assign work &amp; track progress</span></button>
            <button class="role-btn" type="button" data-role="child"><span class="role-emoji">🧒</span><strong>I'm a learner</strong><span class="muted">See &amp; do my assignments</span></button>
          </div>
        </form>
        <p><button class="btn btn-ghost" id="fam-signout" type="button">Sign out</button></p>
        ${note()}
      </div>`);
    container.querySelectorAll(".role-btn").forEach(b =>
      b.addEventListener("click", () => saveProfile(b.dataset.role, document.getElementById("fam-name").value.trim())));
    document.getElementById("fam-signout").addEventListener("click", signOut);
  }

  async function renderParent() {
    state.view = "parent";
    container.innerHTML = shell(`
      <div class="family-head">
        <div><span class="role-chip parent">Parent</span> <strong>${esc(state.profile.full_name || state.user.email)}</strong></div>
        <div class="fam-signout-wrap">
          <span class="muted fam-stay-hint">No need to sign out — just close the tab and you'll stay signed in.</span>
          <button class="btn btn-ghost btn-sm" id="fam-signout" type="button">Sign out</button>
        </div>
      </div>
      <div class="family-card">
        <h3>Your learners</h3>
        <div id="fam-children"><p class="muted">Loading…</p></div>
        <h4 style="margin-top:1.2rem">Invite a child</h4>
        <p class="muted">Enter your child's email. <strong>No email is sent automatically</strong> — you'll get a link to share. Your child opens it, signs in with that email, picks “I'm a learner”, and taps Accept. Then you can assign them work.</p>
        <form id="fam-invite" class="family-form">
          <input id="fam-invite-email" type="email" required placeholder="child@example.com" />
          <button class="btn btn-primary" type="submit">Send invite →</button>
        </form>
        ${note()}
      </div>
      <div class="family-card">
        <div class="fam-assign-head">
          <h3>Assignments</h3>
          <button class="btn btn-primary btn-sm" id="fam-new-assign" type="button">＋ New assignment</button>
        </div>
        <div id="fam-builder" class="fam-builder" hidden></div>
        <div id="fam-assignments"><p class="muted">Loading…</p></div>
      </div>
      ${state.isAdmin ? `<div class="family-card admin-card">
        <div class="fam-assign-head">
          <h3>🛠️ Admin · Add a resource</h3>
          <button class="btn btn-primary btn-sm" id="adm-new-res" type="button">＋ Add resource</button>
        </div>
        <p class="muted">Add a video, site, podcast or book to one or more objectives and/or the Library. It goes live for everyone.</p>
        <div id="adm-builder" class="fam-builder" hidden></div>
        <div id="adm-resources"></div>
      </div>` : ""}`);
    document.getElementById("fam-signout").addEventListener("click", signOut);
    document.getElementById("fam-invite").addEventListener("submit", e => {
      e.preventDefault();
      const v = document.getElementById("fam-invite-email").value.trim();
      if (v) inviteChild(v);
    });
    const kids = await listChildren();
    const box = document.getElementById("fam-children");
    if (!box) return;
    box.innerHTML = kids.length ? kids.map(l => `
      <div class="link-row">
        <span class="link-name">${esc(l.childProfile ? (l.childProfile.full_name || l.childProfile.email) : l.child_email)}</span>
        <span class="link-status ${l.status}">${l.status === "accepted" ? "✓ linked" : l.status === "pending" ? "⏳ pending" : l.status}</span>
        <button class="bm-remove" type="button" data-id="${esc(l.id)}" title="Remove">✕</button>
      </div>`).join("") : `<p class="muted">No children linked yet — invite one below.</p>`;
    box.querySelectorAll(".bm-remove").forEach(b => b.addEventListener("click", () => revokeLink(b.dataset.id)));

    const accepted = kids.filter(k => k.status === "accepted" && k.child_id)
      .map(k => ({ id: k.child_id, name: k.childProfile ? (k.childProfile.full_name || k.childProfile.email) : k.child_email }));
    const newBtn = document.getElementById("fam-new-assign");
    newBtn.addEventListener("click", () => {
      const b = document.getElementById("fam-builder");
      if (b.hidden) { openBuilder(accepted); b.hidden = false; newBtn.textContent = "✕ Close"; }
      else { b.hidden = true; b.innerHTML = ""; newBtn.textContent = "＋ New assignment"; }
    });
    renderParentAssignments();
    subscribeProgress();

    if (state.isAdmin) {
      const admBtn = document.getElementById("adm-new-res");
      admBtn.addEventListener("click", () => {
        const b = document.getElementById("adm-builder");
        if (b.hidden) { openResourceBuilder(); b.hidden = false; admBtn.textContent = "✕ Close"; }
        else { b.hidden = true; b.innerHTML = ""; admBtn.textContent = "＋ Add resource"; }
      });
      renderMyResources();
    }
  }

  // ---- admin: add a resource live ----
  function openResourceBuilder() {
    const b = document.getElementById("adm-builder");
    resSel.clear();
    const subs = subjectsList();
    b.innerHTML = `
      <form id="rb-form" class="family-form-col">
        <div class="ab-row">
          <label class="family-field">Type
            <select id="rb-type">
              <option value="video">Video</option>
              <option value="reading">Reading / article</option>
              <option value="interactive">Interactive</option>
              <option value="podcast">Podcast</option>
              <option value="book">Book</option>
            </select>
          </label>
          <label class="family-field">Link (URL)<input id="rb-url" type="url" placeholder="https://…" required /></label>
        </div>
        <label class="family-field">Title<input id="rb-title" type="text" required /></label>
        <div class="ab-row">
          <label class="family-field">Provider / source<input id="rb-provider" placeholder="e.g. Khan Academy" /></label>
          <label class="family-field">Short note (optional)<input id="rb-note" /></label>
        </div>
        <div class="ab-row rb-book" hidden>
          <label class="family-field">Author<input id="rb-author" /></label>
          <label class="family-field">Chapter reference<input id="rb-chapter" placeholder="e.g. Ch 3" /></label>
        </div>
        <label class="family-field">What does this cover? <small class="muted">(a sentence helps the AI place it well)</small>
          <textarea id="rb-desc" rows="2" placeholder="e.g. A short video on adding and subtracting powers with the same base"></textarea></label>
        <div class="rb-ai-bar">
          <button class="btn btn-ghost" type="button" id="rb-ai-btn">🤖 Suggest objectives &amp; Library with AI</button>
          <span class="muted">Don't know where it fits? Let AI read the curriculum and suggest.</span>
        </div>
        <div id="rb-ai" class="rb-ai" hidden></div>
        <h4 style="margin:.6rem 0 0">Objectives <small class="muted">(AI suggestions land here; tweak as needed)</small></h4>
        <div class="ab-row">
          <label class="family-field">Subject<select id="rb-subject">${subs.map(s => `<option value="${esc(s.id)}">${esc(s.name)}</option>`).join("")}</select></label>
          <label class="family-field">Grade<select id="rb-grade"></select></label>
        </div>
        <div id="rb-objectives" class="ab-objectives"></div>
        <p class="muted"><strong id="rb-count">0</strong> objectives selected</p>
        <label class="rb-libcheck"><input type="checkbox" id="rb-lib" /> Also add to the Library</label>
        <div class="ab-row rb-libfields" hidden>
          <label class="family-field">Library module<input id="rb-libmod" value="Science" /></label>
          <label class="family-field">Library subject<input id="rb-libsub" placeholder="e.g. Biology" /></label>
        </div>
        <button class="btn btn-primary" type="submit">Add resource</button>
        <p id="rb-msg" class="family-msg" hidden></p>
      </form>`;

    const typeSel = document.getElementById("rb-type");
    typeSel.addEventListener("change", () => { document.querySelector(".rb-book").hidden = typeSel.value !== "book"; });
    document.getElementById("rb-lib").addEventListener("change", e => { document.querySelector(".rb-libfields").hidden = !e.target.checked; });

    const subjSel = document.getElementById("rb-subject");
    const gradeSel = document.getElementById("rb-grade");
    function fillGrades() {
      const sub = subs.find(s => s.id === subjSel.value);
      gradeSel.innerHTML = (sub ? sub.grades : []).map(g => `<option value="${esc(g.id)}">${esc(g.name)}</option>`).join("");
    }
    function fillObjectives() {
      const sub = subs.find(s => s.id === subjSel.value);
      const grade = sub && sub.grades.find(g => g.id === gradeSel.value);
      const wrap = document.getElementById("rb-objectives");
      if (!grade) { wrap.innerHTML = ""; return; }
      wrap.innerHTML = grade.topics.map(tp => `
        <details class="ab-topic"><summary>${esc(tp.icon || "")} ${esc(tp.title)} <span class="muted">(${tp.objectives.length})</span></summary>
          ${tp.objectives.map((o, i) => {
            const key = `${sub.id}|${tp.id}|${i}`;
            const txt = typeof o === "object" ? o.text : o;
            return `<label class="ab-obj"><input type="checkbox" data-key="${key}" data-s="${sub.id}" data-t="${tp.id}" data-i="${i}" ${resSel.has(key) ? "checked" : ""}/> <span>${esc(txt)}</span></label>`;
          }).join("")}
        </details>`).join("");
      wrap.querySelectorAll("input[type=checkbox]").forEach(cb => cb.addEventListener("change", () => {
        const key = cb.dataset.key;
        if (cb.checked) resSel.set(key, { s: cb.dataset.s, t: cb.dataset.t, i: +cb.dataset.i });
        else resSel.delete(key);
        document.getElementById("rb-count").textContent = resSel.size;
      }));
    }
    subjSel.addEventListener("change", () => { fillGrades(); fillObjectives(); });
    gradeSel.addEventListener("change", fillObjectives);
    fillGrades(); fillObjectives();

    // ---- AI placement helper ----
    function syncNavCheckbox(id, on) {
      const navCb = document.querySelector(`#rb-objectives input[data-key="${id}"]`);
      if (navCb) navCb.checked = on;
    }
    function showSuggestions(box, res) {
      const sug = (res.objectives || []).map(o => { const c = objCtxOf(o.id); return c ? { ...c, id: o.id, reason: o.reason } : null; }).filter(Boolean);
      sug.forEach(o => resSel.set(o.id, { s: o.s, t: o.t, i: o.i }));
      document.getElementById("rb-count").textContent = resSel.size;
      if (res.library && res.library.recommend) {
        document.getElementById("rb-lib").checked = true;
        document.querySelector(".rb-libfields").hidden = false;
        if (res.library.module) document.getElementById("rb-libmod").value = res.library.module;
        if (res.library.subject) document.getElementById("rb-libsub").value = res.library.subject;
      }
      box.innerHTML = `
        ${res.note ? `<p class="rb-ai-note">🤖 ${esc(res.note)}</p>` : ""}
        ${sug.length ? `<p class="muted">Suggested objectives — untick any that don't fit:</p>
          <div class="rb-ai-list">${sug.map(o => `
            <label class="rb-ai-item"><input type="checkbox" data-aikey="${esc(o.id)}" checked />
              <span><strong>${esc(o.ctx)}</strong><br>${esc(o.text)}${o.reason ? `<br><em class="muted">${esc(o.reason)}</em>` : ""}</span></label>`).join("")}</div>`
          : `<p class="muted">No single objective is a strong fit${res.library && res.library.recommend ? " — I've ticked “Add to the Library” instead." : ". Consider the Library, or pick objectives manually below."}</p>`}`;
      box.querySelectorAll("[data-aikey]").forEach(cb => cb.addEventListener("change", () => {
        const id = cb.dataset.aikey, p = id.split("|");
        if (cb.checked) resSel.set(id, { s: p[0], t: p[1], i: +p[2] }); else resSel.delete(id);
        document.getElementById("rb-count").textContent = resSel.size;
        syncNavCheckbox(id, cb.checked);
      }));
    }
    document.getElementById("rb-ai-btn").addEventListener("click", async () => {
      const box = document.getElementById("rb-ai"); box.hidden = false;
      const v = id => (document.getElementById(id).value || "").trim();
      const title = v("rb-title"), desc = v("rb-desc");
      if (!title && !desc) { box.innerHTML = `<p class="muted">Add a title or a short description first, then I can place it.</p>`; return; }
      box.innerHTML = `<p class="muted">🤖 Reading the curriculum and finding the best fit…</p>`;
      const resource = { title, description: desc, type: v("rb-type"), url: v("rb-url") };
      const modules = ((window.CLASSROOM && window.CLASSROOM.meta && window.CLASSROOM.meta.modules) || []).map(m => m.name);
      let res;
      try {
        const { data, error } = await SB.functions.invoke("suggest-placement", { body: { resource, objectives: objCatalog(), modules } });
        res = error ? { error: error.message } : data;
      } catch (e) { res = { error: String(e) }; }
      if (!res || res.error) { box.innerHTML = `<p class="family-msg">⚠️ ${esc((res && res.error) || "AI unavailable")}. You can still pick objectives manually below.</p>`; return; }
      showSuggestions(box, res);
    });

    document.getElementById("rb-form").addEventListener("submit", async e => {
      e.preventDefault();
      const msg = document.getElementById("rb-msg");
      const val = id => (document.getElementById(id).value || "").trim();
      const url = val("rb-url"), title = val("rb-title");
      const toLib = document.getElementById("rb-lib").checked;
      if (!url || !title) { msg.hidden = false; msg.textContent = "Title and link are required."; return; }
      if (!resSel.size && !toLib) { msg.hidden = false; msg.textContent = "Pick at least one objective, or tick “Add to the Library”."; return; }
      const row = {
        created_by: state.user.id, type: val("rb-type"), title, provider: val("rb-provider") || null,
        url, note: val("rb-note") || null, author: val("rb-author") || null, chapter: val("rb-chapter") || null,
        targets: [...resSel.values()], to_library: toLib,
        library_module: toLib ? (val("rb-libmod") || "Science") : null, library_subject: toLib ? (val("rb-libsub") || null) : null
      };
      msg.hidden = false; msg.textContent = "Adding…";
      const { error } = await SB.from("custom_resources").insert(row);
      if (error) { msg.textContent = "⚠️ " + error.message; return; }
      if (window.CustomResources) window.CustomResources.reload(); // merge it live
      document.getElementById("adm-builder").hidden = true;
      document.getElementById("adm-builder").innerHTML = "";
      document.getElementById("adm-new-res").textContent = "＋ Add resource";
      renderMyResources();
    });
  }

  async function renderMyResources() {
    const box = document.getElementById("adm-resources");
    if (!box) return;
    const { data } = await SB.from("custom_resources").select("*").order("created_at", { ascending: false });
    const list = data || [];
    box.innerHTML = list.length ? `<h4 style="margin-top:1rem">Added resources (${list.length})</h4>` + list.map(cr => `
      <div class="link-row">
        <span class="link-name">${esc(cr.title)} <small class="muted">· ${esc(cr.type)}${(cr.targets || []).length ? ` · ${cr.targets.length} obj` : ""}${cr.to_library ? " · Library" : ""}</small></span>
        <button class="bm-remove" type="button" data-del-res="${esc(cr.id)}" title="Delete">✕</button>
      </div>`).join("") : "";
    box.querySelectorAll("[data-del-res]").forEach(b => b.addEventListener("click", async () => {
      if (confirm("Delete this resource? It will disappear for everyone (a page refresh updates already-open pages).")) {
        await SB.from("custom_resources").delete().eq("id", b.dataset.delRes);
        renderMyResources();
      }
    }));
  }

  // ---- assignment builder (parent) ----
  function openBuilder(children) {
    const b = document.getElementById("fam-builder");
    if (!children.length) {
      b.innerHTML = `<p class="muted">Link a child first (invite them above and have them accept), then you can assign work.</p>`;
      return;
    }
    builderSel.clear();
    const subs = subjectsList();
    b.innerHTML = `
      <form id="ab-form" class="family-form-col">
        <div class="ab-row">
          <label class="family-field">Assign to
            <select id="ab-child">${children.map(c => `<option value="${esc(c.id)}">${esc(c.name)}</option>`).join("")}</select>
          </label>
          <label class="family-field">What to assign
            <select id="ab-mode">
              <option value="both">Resources + Quiz</option>
              <option value="resources">Resources only</option>
              <option value="quiz">Quiz only</option>
            </select>
          </label>
        </div>
        <label class="family-field">Title
          <input id="ab-title" type="text" placeholder="e.g. This week's science" required />
        </label>
        <div class="ab-row">
          <label class="family-field">Note (optional)<input id="ab-note" type="text" placeholder="A message for your child" /></label>
          <label class="family-field">Due date (optional)<input id="ab-due" type="date" /></label>
        </div>
        <div class="ab-row">
          <label class="family-field">Subject
            <select id="ab-subject">${subs.map(s => `<option value="${esc(s.id)}">${esc(s.name)}</option>`).join("")}</select>
          </label>
          <label class="family-field">Grade<select id="ab-grade"></select></label>
        </div>
        <div id="ab-objectives" class="ab-objectives"></div>
        <p class="muted"><strong id="ab-count">0</strong> objectives selected (across all subjects/grades)</p>
        <button class="btn btn-primary" type="submit">Create assignment</button>
        <p id="ab-msg" class="family-msg" hidden></p>
      </form>`;

    const subjSel = document.getElementById("ab-subject");
    const gradeSel = document.getElementById("ab-grade");
    function fillGrades() {
      const sub = subs.find(s => s.id === subjSel.value);
      gradeSel.innerHTML = (sub ? sub.grades : []).map(g => `<option value="${esc(g.id)}">${esc(g.name)}</option>`).join("");
    }
    function fillObjectives() {
      const sub = subs.find(s => s.id === subjSel.value);
      const grade = sub && sub.grades.find(g => g.id === gradeSel.value);
      const wrap = document.getElementById("ab-objectives");
      if (!grade) { wrap.innerHTML = ""; return; }
      wrap.innerHTML = grade.topics.map(tp => `
        <details class="ab-topic">
          <summary>${esc(tp.icon || "")} ${esc(tp.title)} <span class="muted">(${tp.objectives.length})</span></summary>
          ${tp.objectives.map((o, i) => {
            const key = `${sub.id}|${tp.id}|${i}`;
            const txt = typeof o === "object" ? o.text : o;
            return `<label class="ab-obj"><input type="checkbox" data-key="${key}" data-s="${sub.id}" data-t="${tp.id}" data-i="${i}" ${builderSel.has(key) ? "checked" : ""}/> <span>${esc(txt)}</span></label>`;
          }).join("")}
        </details>`).join("");
      wrap.querySelectorAll("input[type=checkbox]").forEach(cb => cb.addEventListener("change", () => {
        const key = cb.dataset.key;
        if (cb.checked) builderSel.set(key, { s: cb.dataset.s, t: cb.dataset.t, i: +cb.dataset.i });
        else builderSel.delete(key);
        document.getElementById("ab-count").textContent = builderSel.size;
      }));
    }
    subjSel.addEventListener("change", () => { fillGrades(); fillObjectives(); });
    gradeSel.addEventListener("change", fillObjectives);
    fillGrades(); fillObjectives();

    document.getElementById("ab-form").addEventListener("submit", async e => {
      e.preventDefault();
      const msg = document.getElementById("ab-msg");
      const childId = document.getElementById("ab-child").value;
      const title = document.getElementById("ab-title").value.trim();
      const mode = document.getElementById("ab-mode").value;
      const note = document.getElementById("ab-note").value.trim();
      const due = document.getElementById("ab-due").value || null;
      if (!title) { msg.hidden = false; msg.textContent = "Please add a title."; return; }
      if (!builderSel.size) { msg.hidden = false; msg.textContent = "Pick at least one objective."; return; }
      const items = [...builderSel.values()].map(v => ({ ...v, mode }));
      msg.hidden = false; msg.textContent = "Creating…";
      const err = await createAssignment(childId, title, note, due, items);
      if (err) { msg.textContent = "⚠️ " + err.message; return; }
      document.getElementById("fam-builder").hidden = true;
      document.getElementById("fam-builder").innerHTML = "";
      document.getElementById("fam-new-assign").textContent = "＋ New assignment";
      renderParentAssignments();
    });
  }

  async function renderParentAssignments() {
    const box = document.getElementById("fam-assignments");
    if (!box) return;
    const assigns = await listParentAssignments();
    if (!assigns.length) { box.innerHTML = `<p class="muted">No assignments yet. Tap “＋ New assignment” to set work for a linked child.</p>`; return; }
    const pmap = progressMap(await listProgressFor(assigns.map(a => a.id)));
    const kids = await listChildren();
    const nameOf = {};
    kids.forEach(k => { if (k.child_id) nameOf[k.child_id] = k.childProfile ? (k.childProfile.full_name || k.childProfile.email) : k.child_email; });
    box.innerHTML = assigns.map(a => {
      const items = a.items || [];
      const done = items.filter(it => (pmap[a.id] || {})[`${it.s}|${it.t}|${it.i}`]?.status === "done").length;
      const pct = items.length ? Math.round(done / items.length * 100) : 0;
      const rows = items.map(it => {
        const p = (pmap[a.id] || {})[`${it.s}|${it.t}|${it.i}`];
        const st = p?.status === "done" ? "done" : p?.status === "in_progress" ? "in_progress" : "not_started";
        const lbl = st === "done" ? "✓ done" : st === "in_progress" ? "… started" : "not started";
        const score = p?.score != null ? ` · ${p.score}%` : "";
        const wrong = p?.details?.wrong || [];
        const wrongBlock = wrong.length
          ? `<details class="assign-wrong"><summary>${wrong.length} question${wrong.length === 1 ? "" : "s"} to review</summary>
              <ul>${wrong.map(w => `<li>Q${w.n}. ${esc(w.q)}</li>`).join("")}</ul></details>`
          : "";
        const summary = p?.details?.summary;
        const summaryBlock = summary ? `<div class="concept-summary"><strong>🤖 Focus area:</strong> ${esc(summary)}</div>` : "";
        return `<div class="assign-item-wrap"><div class="assign-item ${st}"><span>${esc(objText(it.s, it.t, it.i))}</span><span class="assign-item-st">${lbl}${score}</span></div>${wrongBlock}${summaryBlock}</div>`;
      }).join("");
      return `<div class="assign-card">
        <div class="assign-top"><strong>${esc(a.title)}</strong> <span class="muted">→ ${esc(nameOf[a.child_id] || "child")}</span>
          <button class="bm-remove" type="button" data-del="${esc(a.id)}" title="Delete assignment">✕</button></div>
        ${a.due_date ? `<div class="muted">Due ${esc(a.due_date)}</div>` : ""}
        ${a.note ? `<div class="assign-note">${esc(a.note)}</div>` : ""}
        <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:var(--brand)"></div><span class="prog-label">${done}/${items.length} · ${pct}%</span></div>
        <details class="assign-items"><summary>${items.length} item${items.length === 1 ? "" : "s"}</summary>${rows}</details>
      </div>`;
    }).join("");
    box.querySelectorAll("[data-del]").forEach(b => b.addEventListener("click", async () => {
      if (confirm("Delete this assignment?")) { await SB.from("assignments").delete().eq("id", b.dataset.del); renderParentAssignments(); }
    }));
  }

  function subscribeProgress() {
    if (progressChannel) return;
    progressChannel = SB.channel("assign-progress")
      .on("postgres_changes", { event: "*", schema: "public", table: "assignment_progress" }, () => {
        if (document.getElementById("fam-assignments")) renderParentAssignments();
      })
      .subscribe();
  }

  async function renderChild() {
    state.view = "child";
    container.innerHTML = shell(`
      <div class="family-head">
        <div><span class="role-chip child">Learner</span> <strong>${esc(state.profile.full_name || state.user.email)}</strong></div>
        <div class="fam-signout-wrap">
          <span class="muted fam-stay-hint">No need to sign out — just close the tab and you'll stay signed in.</span>
          <button class="btn btn-ghost btn-sm" id="fam-signout" type="button">Sign out</button>
        </div>
      </div>
      <div class="family-card">
        <h3>Parent invites</h3>
        <div id="fam-invites"><p class="muted">Loading…</p></div>
      </div>
      <div class="family-card">
        <h3>My assignments</h3>
        <div id="fam-child-assignments"><p class="muted">Loading…</p></div>
      </div>
      ${note()}`);
    document.getElementById("fam-signout").addEventListener("click", signOut);
    renderChildAssignments();
    const invites = await listInvites();
    const box = document.getElementById("fam-invites");
    if (!box) return;
    const pending = invites.filter(i => i.status === "pending");
    const linked = invites.filter(i => i.status === "accepted");
    box.innerHTML = `
      ${pending.length ? pending.map(i => `
        <div class="link-row">
          <span class="link-name">Invitation from a parent</span>
          <button class="btn btn-primary btn-sm" type="button" data-accept="${esc(i.id)}">Accept</button>
        </div>`).join("") : ""}
      ${linked.length ? `<p class="muted" style="margin-top:.6rem">Linked with ${linked.length} parent${linked.length === 1 ? "" : "s"} ✓</p>` : ""}
      ${!pending.length && !linked.length ? `<p class="muted">No invites yet. Ask your parent to invite your email: <strong>${esc(state.user.email)}</strong></p>` : ""}`;
    box.querySelectorAll("[data-accept]").forEach(b => b.addEventListener("click", () => acceptInvite(b.dataset.accept)));
  }

  async function renderChildAssignments() {
    const box = document.getElementById("fam-child-assignments");
    if (!box) return;
    childAssignments = await listChildAssignments();
    if (!childAssignments.length) { box.innerHTML = `<p class="muted">No assignments yet. When your parent sets work, it'll appear here.</p>`; return; }
    const pmap = progressMap(await listProgressFor(childAssignments.map(a => a.id)));
    const P = window.Progress;
    const isDone = (it, p) => p?.status === "done" || (P && P.isDone(it.s, it.t, it.i));
    box.innerHTML = childAssignments.map(a => {
      const items = a.items || [];
      const done = items.filter(it => isDone(it, (pmap[a.id] || {})[`${it.s}|${it.t}|${it.i}`])).length;
      const pct = items.length ? Math.round(done / items.length * 100) : 0;
      const rows = items.map(it => {
        const p = (pmap[a.id] || {})[`${it.s}|${it.t}|${it.i}`];
        const d = isDone(it, p);
        const dest = it.mode === "quiz" ? "quiz" : "resources";
        const modeLbl = it.mode === "both" ? "Read + Quiz" : it.mode === "quiz" ? "Quiz" : "Resources";
        return `<a class="assign-item ${d ? "done" : ""}" href="#/${esc(it.s)}/topic/${esc(it.t)}/obj/${it.i}/${dest}">
          <span>${d ? "✓" : "○"} ${esc(objText(it.s, it.t, it.i))}</span>
          <span class="assign-item-st">${modeLbl} →</span></a>`;
      }).join("");
      return `<div class="assign-card">
        <div class="assign-top"><strong>${esc(a.title)}</strong></div>
        ${a.due_date ? `<div class="muted">Due ${esc(a.due_date)}</div>` : ""}
        ${a.note ? `<div class="assign-note">${esc(a.note)}</div>` : ""}
        <div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:var(--g6)"></div><span class="prog-label">${done}/${items.length} done</span></div>
        <div class="assign-items-list">${rows}</div>
      </div>`;
    }).join("");
  }

  // ---- entry point (called by the router) ----
  async function mount(el) {
    container = el;
    state.view = "loading"; render();
    try { await init(); await refresh(); }
    catch (e) { container.innerHTML = shell(`<p class="empty">Couldn't load the accounts service. ${esc(e.message || e)}</p>`); }
  }

  // If the page was opened from a magic-link email, the URL carries the auth
  // callback (PKCE: ?code=... in the query; legacy/implicit: #access_token=...).
  // Eagerly load the client so detectSessionInUrl consumes it, then refresh()
  // routes the now-signed-in user to #/parents.
  function isAuthCallback() {
    return /[?&]code=/.test(location.search) || /access_token=|refresh_token=/.test(location.hash);
  }
  async function handleCallback() {
    cameFromCallback = true;
    try {
      await init();
      const h = (location.hash || "").replace(/^#/, "");
      if (/access_token=/.test(h)) {
        // implicit flow: tokens delivered in the hash
        const p = new URLSearchParams(h);
        const access_token = p.get("access_token"), refresh_token = p.get("refresh_token");
        if (access_token && refresh_token) {
          const { error } = await SB.auth.setSession({ access_token, refresh_token });
          if (error) throw error;
        }
      } else {
        // PKCE flow: ?code=... in the query
        const code = new URLSearchParams(location.search).get("code");
        if (code) {
          const { error } = await SB.auth.exchangeCodeForSession(code);
          if (error) throw error;
        }
      }
    } catch (e) {
      state.msg = "⚠️ Sign-in failed: " + (e.message || e);
    }
    // strip the auth params from the URL, then route into Parents
    history.replaceState(null, "", location.href.split("#")[0].split("?")[0]);
    refresh();
  }
  // A persisted Supabase session means the user logged in before. Eagerly load
  // the client on every page (not just #/parents) so a child's completions sync
  // to the database while they work through objectives elsewhere in the hub.
  function hasStoredSession() {
    try { return Object.keys(localStorage).some(k => /^sb-.*-auth-token$/.test(k)); } catch (e) { return false; }
  }
  if (isAuthCallback()) handleCallback();
  else if (hasStoredSession()) init().then(() => refresh()).catch(() => {});

  window.Family = { mount, syncProgress, syncQuizResult, submitQuiz, navInfo, role };
})();
