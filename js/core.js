/* Core data container for the IB Science Hub.
 * Each grade file (data-g6.js, data-g7.js, data-g8.js) pushes its grade object
 * into CURRICULUM.grades. threads.js adds the cross-topic concept threads used
 * by the mindmap. This file must load first. */
window.CURRICULUM = {
  meta: {
    title: "IB Science Hub",
    subtitle: "Grades 6 – 8 · Learning objectives, free resources, quizzes & a concept mindmap",
    arc:
      "Grade 6 builds the scientific method, measurement, cells and basic forces. " +
      "Grade 7 develops the three core sciences through nutrition & digestion, atomic structure, " +
      "matter, motion, forces, ecology and Earth systems. Grade 8 moves into integrated mastery: " +
      "immunity, genetics, evolution, bonding, reactions, thermal physics, waves, energy, climate, " +
      "engineering and data-based scientific reasoning."
  },
  grades: [],
  // concept threads are filled in by threads.js
  threads: []
};
