/* Mathematics subject container.
 * Registers the Math subject into window.HUB and exposes window.CURRICULUM_MATH.
 * data-math-g6/7/8.js push grades into CURRICULUM_MATH.grades; threads-math.js
 * fills its mindmap threads. Loads after core.js (needs registerSubject). */
window.CURRICULUM_MATH = window.registerSubject({
  id: "math",
  name: "Mathematics",
  icon: "➗",
  color: "#0d9488",
  centreLabel: "Maths",
  hasLibrary: false,
  blurb: "Number and fractions, ratio and proportion, algebra, geometry and data across Grades 6–8.",
  meta: {
    title: "IB Mathematics Hub",
    subtitle: "Grades 6 – 8 · Learning objectives, free resources, quizzes & a concept mindmap",
    arc:
      "Grade 6 builds numerical fluency — fractions, decimals, percentages, integers, factors and indices. " +
      "Grade 7 strengthens proportional reasoning (ratio, rate, proportion) and the foundations of algebra " +
      "(expressions, factorising, equations). Grade 8 moves into formal algebra, functions, simultaneous " +
      "equations, surds, advanced geometry and data modelling."
  },
  // short labels for the mindmap
  shortLabels: {
    "m6-fractions": "Fractions",
    "m6-ratios": "Ratios",
    "m6-decimals": "Decimals",
    "m6-percentages": "Percentages",
    "m6-integers": "Integers & Number",
    "m6-factors": "Factors & Multiples",
    "m6-exponents": "Indices & Roots",
    "m6-sequences": "Sequences & Patterns",
    "m6-algebra-geometry": "Algebra & Geometry",
    "m7-percentages": "Percentages",
    "m7-number-system": "Number System",
    "m7-ratio-proportion": "Ratio, Rate & Proportion",
    "m7-time-units": "Time, Units & Rates",
    "m7-sequences": "Sequences",
    "m7-indices": "Indices & Exponents",
    "m7-expressions": "Algebraic Expressions",
    "m7-factorisation": "Factorisation",
    "m7-algebraic-fractions": "Algebraic Fractions",
    "m7-polynomials": "Polynomials",
    "m7-equations": "Equations & Inequalities",
    "m7-geometry": "Geometry & Measurement",
    "m7-statistics": "Statistics & Probability",
    "m8-ratio-finance": "Ratio, Proportion & Finance",
    "m8-precision": "Precision & Standard Form",
    "m8-surds": "Indices, Roots & Surds",
    "m8-algebra": "Advanced Algebra",
    "m8-linear-functions": "Linear Equations & Functions",
    "m8-simultaneous": "Simultaneous Equations",
    "m8-sequences": "Sequences",
    "m8-geometry": "Advanced Geometry",
    "m8-data": "Data & Probability",
    "m8-capstone": "Capstone & Review"
  }
});
