/* Core data container for the IB Learning Hub (multi-subject).
 * window.HUB.subjects holds every subject; registerSubject() creates one and
 * returns it. Science is created here as window.CURRICULUM (kept under that name
 * for back-compat, so the existing data-g6/7/8.js and threads.js can keep
 * pushing into CURRICULUM.grades / CURRICULUM.threads). Other subjects
 * (Math, English, …) register their own container the same way. This file
 * must load first. */
window.HUB = { subjects: [] };
window.registerSubject = function (meta) {
  const s = Object.assign({ grades: [], threads: [] }, meta);
  window.HUB.subjects.push(s);
  return s;
};

window.CURRICULUM = window.registerSubject({
  id: "science",
  name: "Science",
  icon: "⚗︎",
  color: "#3b5bdb",
  centreLabel: "Science",
  hasLibrary: true,
  blurb: "Scientific method, biology, chemistry, physics and Earth science across Grades 6–8.",
  meta: {
    title: "IB Science Hub",
    subtitle: "Grades 6 – 8 · Learning objectives, free resources, quizzes & a concept mindmap",
    arc:
      "Grade 6 builds the scientific method, measurement, cells and basic forces. " +
      "Grade 7 develops the three core sciences through nutrition & digestion, atomic structure, " +
      "matter, motion, forces, ecology and Earth systems. Grade 8 moves into integrated mastery: " +
      "immunity, genetics, evolution, bonding, reactions, thermal physics, waves, energy, climate, " +
      "engineering and data-based scientific reasoning."
  }
});
