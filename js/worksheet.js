/* Printable worksheets: a clean, print-optimised view of a topic's objectives
 * and quiz questions (no answers shown by default, with an optional answer key).
 * Reached at #/<subj>/topic/<tid>/worksheet. Self-contained like the other
 * feature modules; app.js routes to it and calls mount(). */
(function () {
  function esc(x) { return String(x).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  const LETTER = ["A", "B", "C", "D", "E", "F", "G", "H"];

  // Render one question for the worksheet (prompt + blank answer space, NO answer).
  function questionBlock(q, n) {
    let body = "";
    if (q.type === "mcq") {
      body = `<ol class="ws-options" type="A">${q.options.map(o => `<li>${esc(o)}</li>`).join("")}</ol>`;
    } else if (q.type === "tf") {
      body = `<div class="ws-tf"><span class="ws-circle">○</span> True &nbsp;&nbsp; <span class="ws-circle">○</span> False</div>`;
    } else if (q.type === "numeric") {
      body = `<div class="ws-blank ws-short">Answer: ____________________</div>`;
    } else if (q.type === "match") {
      const left = q.pairs.map(p => `<li>${esc(p[0])}</li>`).join("");
      const right = q.pairs.map(p => p[1]).sort().map(s => `<li>${esc(s)}</li>`).join("");
      body = `<div class="ws-match"><ol class="ws-match-l" type="1">${left}</ol><ul class="ws-match-r">${right}</ul></div>`;
    } else { // short / long
      const lines = q.type === "long" ? 4 : 2;
      body = `<div class="ws-lines">${Array.from({ length: lines }, () => `<div class="ws-line"></div>`).join("")}</div>`;
    }
    return `<div class="ws-q">
      <div class="ws-q-prompt"><span class="ws-q-n">${n}.</span> ${esc(q.q)}</div>
      ${body}
    </div>`;
  }

  function answerLine(q, n) {
    let a = "";
    if (q.type === "mcq") a = `${LETTER[q.answer] || "?"} — ${esc(q.options[q.answer] || "")}`;
    else if (q.type === "tf") a = q.answer ? "True" : "False";
    else if (q.type === "match") a = q.pairs.map(p => `${esc(p[0])} → ${esc(p[1])}`).join("; ");
    else a = esc(q.answer != null ? q.answer : "(self-checked)");
    return `<li><strong>Q${n}.</strong> ${a}</li>`;
  }

  function page(subj, topic, grade) {
    let qn = 0;
    const objSections = topic.objectives.map((o, i) => {
      const quiz = o.quiz || [];
      const qs = quiz.map(q => questionBlock(q, ++qn)).join("");
      return `<section class="ws-obj">
        <h3 class="ws-obj-title"><span class="ws-obj-n">${i + 1}</span> ${esc(o.text)}</h3>
        ${qs || `<p class="ws-none">No questions for this objective.</p>`}
      </section>`;
    }).join("");

    // answer key (hidden unless the "include answer key" box is ticked)
    let an = 0;
    const keySections = topic.objectives.map((o, i) => {
      const quiz = o.quiz || [];
      const items = quiz.map(q => answerLine(q, ++an)).join("");
      return items ? `<div class="ws-key-obj"><strong>Objective ${i + 1}</strong><ol class="ws-key-list">${items}</ol></div>` : "";
    }).join("");

    const totalQ = qn;
    return `
      <div class="ws-toolbar no-print">
        <a class="btn btn-ghost" href="#/${subj.id}/topic/${topic.id}">← Back to topic</a>
        <label class="ws-check"><input type="checkbox" id="ws-answers"> Include answer key</label>
        <button class="btn btn-primary" id="ws-print" type="button">🖨️ Print / Save as PDF</button>
      </div>

      <article class="worksheet" id="worksheet">
        <header class="ws-head">
          <div class="ws-brand">Learning Hub · ${esc(subj.name)}</div>
          <h1 class="ws-title">${esc(topic.title)}</h1>
          <div class="ws-sub">${esc(grade.name)} · ${esc(topic.subject || "")} — ${topic.objectives.length} objectives · ${totalQ} questions</div>
          <div class="ws-name-row"><span>Name: ____________________________</span><span>Date: ______________</span><span>Score: _______ / ${totalQ}</span></div>
        </header>
        ${objSections}
        <section class="ws-key" id="ws-key">
          <h2 class="ws-key-title">Answer key</h2>
          <p class="ws-key-note">Written-answer questions are self-checked against the model answers on the site.</p>
          ${keySections}
        </section>
      </article>`;
  }

  function mount() {
    const printBtn = document.getElementById("ws-print");
    const answersBox = document.getElementById("ws-answers");
    if (printBtn) printBtn.addEventListener("click", () => window.print());
    if (answersBox) answersBox.addEventListener("change", () => {
      document.body.classList.toggle("ws-show-answers", answersBox.checked);
    });
  }

  window.Worksheet = { page, mount };
})();
