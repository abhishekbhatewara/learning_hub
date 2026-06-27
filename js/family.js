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
  let state = { user: null, profile: null, view: "loading", msg: "", pendingEmail: "" };

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
  async function signOut() { await SB.auth.signOut(); state.pendingEmail = ""; refresh(); }

  async function saveProfile(role, name) {
    state.msg = "Saving…"; render();
    const { error } = await SB.from("profiles").upsert({
      id: state.user.id, role, full_name: name || null, email: state.user.email
    });
    if (error) { state.msg = "⚠️ " + error.message; render(); return; }
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

  // ---- views ----
  function shell(inner) {
    return `
      <nav class="breadcrumb"><a href="#/">Subjects</a> › <span>Parents</span></nav>
      <section class="hero">
        <h1>👪 Parents &amp; learners</h1>
        <p class="lede">Assign objectives and quizzes to your child, and watch their progress update live. Sign in by email — no passwords.</p>
      </section>
      <div class="family-wrap">${inner}</div>`;
  }
  function note() { return state.msg ? `<p class="family-msg">${esc(state.msg)}</p>` : ""; }

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
        <p class="muted">Enter your email and we'll send you a 6-digit code (and a magic link). Works for both parents and children.</p>
        <form id="fam-email-form" class="family-form">
          <input id="fam-email" type="email" required placeholder="you@example.com" autocomplete="email" />
          <button class="btn btn-primary" type="submit">Send my code →</button>
        </form>
        ${note()}
      </div>`);
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
        <h3>Assignments</h3>
        <p class="muted">Once a child is linked, you'll build and track assignments here. (Coming in the next step.)</p>
      </div>`);
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
        <p class="muted">Assignments your parent sets will appear here. (Coming in the next step.)</p>
      </div>
      ${note()}`);
    document.getElementById("fam-signout").addEventListener("click", signOut);
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
  if (isAuthCallback()) handleCallback();

  window.Family = { mount };
})();
