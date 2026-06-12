/* Interactive concept mindmap (vanilla SVG).
 * Radial layout: centre → 3 grades → topics. Concept "threads" from threads.js
 * are drawn as coloured curves connecting topics across grades, and can be
 * toggled. Nodes are clickable and navigate to the topic page. Supports
 * drag-to-pan and wheel / button zoom. Works offline (no libraries). */
window.Mindmap = (function () {
  const SVGNS = "http://www.w3.org/2000/svg";
  const VBW = 1000, VBH = 780;
  const CENTER = { x: 500, y: 380 };
  const GRADE_R = 168;
  const TOPIC_R = 330;

  // short, mindmap-friendly labels
  const SHORT = {
    "g6-method": "Scientific Method & Data",
    "g6-machines": "Simple Machines",
    "g6-cells": "Cells & Life",
    "g7-nutrition": "Nutrition & Digestion",
    "g7-matter": "Matter & Atoms",
    "g7-motion": "Motion, Forces & Energy",
    "g7-earth-data": "Ecology & Earth Data",
    "g8-body": "Circulation • Immunity • Genetics",
    "g8-bonding": "Bonding & Reactions",
    "g8-thermal-waves": "Thermal • Waves • Energy",
    "g8-earth-engineering": "Climate & Data Science"
  };

  function deg2rad(d) { return (d * Math.PI) / 180; }

  // compute positions for grades and topics
  function layout() {
    const grades = window.CURRICULUM.grades;
    const pos = { topics: {}, grades: {} };
    // grade base angles: G6 top, G7 lower-right, G8 lower-left
    const baseAngles = [-90, 30, 150];
    grades.forEach((g, gi) => {
      const base = baseAngles[gi % 3];
      pos.grades[g.id] = {
        x: CENTER.x + GRADE_R * Math.cos(deg2rad(base)),
        y: CENTER.y + GRADE_R * Math.sin(deg2rad(base)),
        color: g.color, name: g.name, tagline: g.tagline, id: g.id
      };
      const n = g.topics.length;
      const span = 58; // total degrees the topics fan across
      g.topics.forEach((t, ti) => {
        const a = n === 1 ? base : base - span / 2 + span * (ti / (n - 1));
        pos.topics[t.id] = {
          x: CENTER.x + TOPIC_R * Math.cos(deg2rad(a)),
          y: CENTER.y + TOPIC_R * Math.sin(deg2rad(a)),
          color: g.color, gradeId: g.id, icon: t.icon,
          title: SHORT[t.id] || t.title, full: t.title, id: t.id
        };
      });
    });
    return pos;
  }

  function el(tag, attrs) {
    const e = document.createElementNS(SVGNS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    return e;
  }

  function wrapLabel(text, max) {
    const words = text.split(" ");
    const lines = []; let line = "";
    words.forEach(w => {
      if ((line + " " + w).trim().length > max && line) { lines.push(line); line = w; }
      else line = (line + " " + w).trim();
    });
    if (line) lines.push(line);
    return lines.slice(0, 2);
  }

  function curve(a, b) {
    // gentle quadratic curve between two points, bowed toward centre
    const mx = (a.x + b.x) / 2, my = (a.y + b.y) / 2;
    const cx = mx + (CENTER.x - mx) * 0.28;
    const cy = my + (CENTER.y - my) * 0.28;
    return `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`;
  }

  function render(container) {
    container.innerHTML = "";
    const pos = layout();
    const threads = window.CURRICULUM.threads;
    const visible = {}; threads.forEach(t => (visible[t.id] = true));

    // ---- toolbar ----
    const toolbar = document.createElement("div");
    toolbar.className = "mindmap-toolbar";
    threads.forEach(t => {
      const b = document.createElement("button");
      b.className = "thread-toggle";
      b.innerHTML = `<span class="dot" style="background:${t.color}"></span>${t.label}`;
      b.addEventListener("click", () => {
        visible[t.id] = !visible[t.id];
        b.classList.toggle("off", !visible[t.id]);
        draw();
      });
      toolbar.appendChild(b);
    });
    const spacer = document.createElement("span"); spacer.className = "spacer"; toolbar.appendChild(spacer);
    const hint = document.createElement("span"); hint.className = "mindmap-hint"; hint.textContent = "Drag to pan · scroll to zoom · click a topic to open"; toolbar.appendChild(hint);
    const zoom = document.createElement("div"); zoom.className = "zoom-btns";
    const zin = document.createElement("button"); zin.textContent = "+"; zin.title = "Zoom in";
    const zout = document.createElement("button"); zout.textContent = "−"; zout.title = "Zoom out";
    const zreset = document.createElement("button"); zreset.textContent = "⟳"; zreset.title = "Reset view"; zreset.style.fontSize = ".95rem";
    zoom.append(zin, zout, zreset); toolbar.appendChild(zoom);
    container.appendChild(toolbar);

    // ---- svg ----
    const svg = el("svg", { id: "mindmap-svg", viewBox: `0 0 ${VBW} ${VBH}`, role: "img", "aria-label": "Concept mindmap of IB Science topics" });
    const root = el("g", {}); // pan/zoom group
    svg.appendChild(root);
    container.appendChild(svg);

    const gThreads = el("g", {}); root.appendChild(gThreads);
    const gLinks = el("g", {}); root.appendChild(gLinks);
    const gNodes = el("g", {}); root.appendChild(gNodes);

    // ---- static structural links (centre→grade→topic) ----
    window.CURRICULUM.grades.forEach(g => {
      const gp = pos.grades[g.id];
      gLinks.appendChild(el("line", { class: "mm-link", x1: CENTER.x, y1: CENTER.y, x2: gp.x, y2: gp.y, stroke: gp.color, "stroke-width": 2, opacity: .5 }));
      g.topics.forEach(t => {
        const tp = pos.topics[t.id];
        gLinks.appendChild(el("line", { class: "mm-link", x1: gp.x, y1: gp.y, x2: tp.x, y2: tp.y, stroke: gp.color, "stroke-width": 1.4, opacity: .35 }));
      });
    });

    // ---- thread paths (drawn/redrawn by draw()) ----
    function draw() {
      gThreads.innerHTML = "";
      threads.forEach(t => {
        if (!visible[t.id]) return;
        for (let i = 0; i < t.path.length - 1; i++) {
          const a = pos.topics[t.path[i]], b = pos.topics[t.path[i + 1]];
          if (!a || !b) continue;
          const p = el("path", { class: "mm-thread", d: curve(a, b), stroke: t.color });
          p.appendChild(el("title", {})).textContent = t.label;
          gThreads.appendChild(p);
        }
      });
    }
    draw();

    // ---- centre node ----
    const cg = el("g", { class: "mm-node" });
    cg.appendChild(el("circle", { cx: CENTER.x, cy: CENTER.y, r: 52, fill: "#3b5bdb", stroke: "#fff", "stroke-width": 3 }));
    const ct1 = el("text", { x: CENTER.x, y: CENTER.y - 4, "text-anchor": "middle", fill: "#fff", "font-size": 15, "font-weight": 700 }); ct1.textContent = "IB Science";
    const ct2 = el("text", { x: CENTER.x, y: CENTER.y + 15, "text-anchor": "middle", fill: "#dbe4ff", "font-size": 12, "font-weight": 600 }); ct2.textContent = "Grades 6–8";
    cg.append(ct1, ct2); gNodes.appendChild(cg);

    // ---- grade nodes ----
    window.CURRICULUM.grades.forEach(g => {
      const gp = pos.grades[g.id];
      const grp = el("g", { class: "mm-node" });
      const w = 132, h = 44;
      const rect = el("rect", { x: gp.x - w / 2, y: gp.y - h / 2, width: w, height: h, rx: 22, fill: gp.color, stroke: "#fff", "stroke-width": 2.5 });
      const t1 = el("text", { x: gp.x, y: gp.y - 2, "text-anchor": "middle", fill: "#fff", "font-size": 14, "font-weight": 700 }); t1.textContent = g.name;
      const t2 = el("text", { x: gp.x, y: gp.y + 14, "text-anchor": "middle", fill: "rgba(255,255,255,.9)", "font-size": 9.5, "font-weight": 600 }); t2.textContent = g.tagline;
      grp.append(rect, t1, t2);
      grp.style.cursor = "pointer";
      grp.addEventListener("click", () => { location.hash = "#/grade/" + g.id; });
      gNodes.appendChild(grp);
    });

    // ---- topic nodes ----
    Object.values(pos.topics).forEach(tp => {
      const grp = el("g", { class: "mm-node" });
      const w = 158, h = 52;
      const rect = el("rect", { x: tp.x - w / 2, y: tp.y - h / 2, width: w, height: h, rx: 13, fill: "#ffffff", stroke: tp.color, "stroke-width": 2.4 });
      rect.style.filter = "drop-shadow(0 3px 6px rgba(20,30,60,.12))";
      grp.appendChild(rect);
      // colour tab
      grp.appendChild(el("rect", { x: tp.x - w / 2, y: tp.y - h / 2, width: 6, height: h, rx: 3, fill: tp.color }));
      // icon
      const ic = el("text", { x: tp.x - w / 2 + 18, y: tp.y + 5, "font-size": 17, "text-anchor": "middle" }); ic.textContent = tp.icon; grp.appendChild(ic);
      // wrapped label
      const lines = wrapLabel(tp.title, 18);
      const tx = tp.x - w / 2 + 34;
      const startY = tp.y - (lines.length - 1) * 7 + 3;
      lines.forEach((ln, i) => {
        const t = el("text", { x: tx, y: startY + i * 13, fill: "#1c2230", "font-size": 11, "font-weight": 600 });
        t.textContent = ln; grp.appendChild(t);
      });
      grp.style.cursor = "pointer";
      const title = el("title", {}); title.textContent = tp.full + " — click to open"; grp.appendChild(title);
      grp.addEventListener("click", () => { location.hash = "#/topic/" + tp.id; });
      grp.addEventListener("mouseenter", () => rect.setAttribute("stroke-width", 3.4));
      grp.addEventListener("mouseleave", () => rect.setAttribute("stroke-width", 2.4));
      gNodes.appendChild(grp);
    });

    // ---- pan & zoom ----
    let scale = 1, tx = 0, ty = 0;
    const MIN = 0.5, MAX = 2.6;
    function apply() { root.setAttribute("transform", `translate(${tx} ${ty}) scale(${scale})`); }
    function zoomAt(factor, cx, cy) {
      const ns = Math.min(MAX, Math.max(MIN, scale * factor));
      const k = ns / scale;
      tx = cx - k * (cx - tx); ty = cy - k * (cy - ty); scale = ns; apply();
    }
    svg.addEventListener("wheel", (e) => {
      e.preventDefault();
      const pt = svgPoint(e.clientX, e.clientY);
      zoomAt(e.deltaY < 0 ? 1.12 : 0.89, pt.x, pt.y);
    }, { passive: false });
    zin.addEventListener("click", () => zoomAt(1.2, VBW / 2, VBH / 2));
    zout.addEventListener("click", () => zoomAt(0.83, VBW / 2, VBH / 2));
    zreset.addEventListener("click", () => { scale = 1; tx = 0; ty = 0; apply(); });

    let dragging = false, lastX = 0, lastY = 0;
    function svgPoint(clientX, clientY) {
      const r = svg.getBoundingClientRect();
      return { x: (clientX - r.left) / r.width * VBW, y: (clientY - r.top) / r.height * VBH };
    }
    svg.addEventListener("pointerdown", (e) => {
      if (e.target.closest(".mm-node")) return; // let clicks on nodes work
      dragging = true; lastX = e.clientX; lastY = e.clientY; svg.setPointerCapture(e.pointerId);
    });
    svg.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const r = svg.getBoundingClientRect();
      tx += (e.clientX - lastX) / r.width * VBW;
      ty += (e.clientY - lastY) / r.height * VBH;
      lastX = e.clientX; lastY = e.clientY; apply();
    });
    svg.addEventListener("pointerup", () => { dragging = false; });
    svg.addEventListener("pointerleave", () => { dragging = false; });
    apply();

    // ---- thread legend below ----
    const legend = document.createElement("div");
    legend.className = "legend-threads";
    threads.forEach(t => {
      const d = document.createElement("div");
      d.className = "lt"; d.style.borderLeftColor = t.color;
      d.innerHTML = `<strong style="color:${t.color}">${t.label}</strong><span>${t.note}</span>`;
      legend.appendChild(d);
    });
    container.appendChild(legend);
  }

  return { render };
})();
