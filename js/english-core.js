/* English Language & Literature subject container.
 * Registers the English subject into window.HUB and exposes window.CURRICULUM_ENGLISH.
 * data-english-g6/7/8.js push grades into CURRICULUM_ENGLISH.grades; threads-english.js
 * fills its mindmap threads. Loads after core.js (needs registerSubject). */
window.CURRICULUM_ENGLISH = window.registerSubject({
  id: "english",
  name: "English",
  icon: "📖",
  color: "#e11d48",
  centreLabel: "English",
  hasLibrary: false,
  blurb: "Reading literary & non-literary texts, writing, grammar, rhetoric and research across Grades 6–8.",
  meta: {
    title: "IB English Hub",
    subtitle: "Grades 6 – 8 · Learning objectives, free resources, quizzes & a concept mindmap",
    arc:
      "Grade 6 builds the foundations — reading for literal meaning and inference, the basics of plot, character, " +
      "setting and theme, paragraph writing, and core grammar. Grade 7 develops core skills — literary analysis " +
      "(plot, conflict, characterisation, figurative language, point of view), media and rhetoric (ethos/pathos/logos, " +
      "bias, fallacies), the CEA paragraph and essay, sentence structure, and research with the CRAAP test and MLA. " +
      "Grade 8 reaches for mastery — comparative and deep textual analysis, authorial choices, argument with " +
      "counterargument and rebuttal, advanced style and voice, discussion and a research capstone."
  },
  // short labels for the mindmap
  shortLabels: {
    "e6-reading-lit": "Reading: Literary",
    "e6-reading-nonlit": "Reading: Non-Literary",
    "e6-writing": "Writing",
    "e6-grammar": "Grammar & Mechanics",
    "e7-themes": "Themes & Units",
    "e7-lit-reading": "Literary Reading",
    "e7-nonfiction-media": "Non-Fiction & Media",
    "e7-writing": "Writing",
    "e7-grammar": "Grammar & Sentences",
    "e7-research": "Research Skills",
    "e8-themes": "Themes & Units",
    "e8-lit-reading": "Literary Reading",
    "e8-nonlit-media": "Non-Literary & Media",
    "e8-writing": "Writing",
    "e8-grammar": "Grammar & Style",
    "e8-speaking": "Speaking & Discussion",
    "e8-research": "Research & Capstone",
    "e8-mastery": "Mastery Skills"
  }
});
