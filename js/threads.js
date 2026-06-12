/* Concept threads — conceptual through-lines that connect topics across the
 * three grades. The mindmap draws these as coloured links so the interlinkages
 * between topics can be seen visually. Each thread lists topic ids in the order
 * the idea develops from Grade 6 to Grade 8. */
window.CURRICULUM.threads = [
  {
    id: "thread-data",
    label: "Scientific method & data literacy",
    color: "#0ea5e9",
    note: "Asking questions, fair testing, measuring, then graphing and reasoning from data — a skill that deepens every year.",
    path: ["g6-method", "g7-motion", "g7-earth-data", "g8-earth-engineering"]
  },
  {
    id: "thread-forces",
    label: "Forces & motion",
    color: "#f59e0b",
    note: "Simple machines lead to motion graphs and Newton's laws, momentum and energy.",
    path: ["g6-machines", "g7-motion", "g8-thermal-waves"]
  },
  {
    id: "thread-body",
    label: "Cells → human body systems",
    color: "#ef4444",
    note: "The cell becomes tissues and organs: digestion, then circulation and immunity.",
    path: ["g6-cells", "g7-nutrition", "g8-body"]
  },
  {
    id: "thread-matter",
    label: "Atoms → matter → bonding",
    color: "#8b5cf6",
    note: "Atomic structure and mixtures build toward bonding, structures and reactions.",
    path: ["g7-matter", "g8-bonding"]
  },
  {
    id: "thread-genetics",
    label: "DNA → genetics & evolution",
    color: "#ec4899",
    note: "DNA and genes inside the cell return as inheritance, variation and evolution.",
    path: ["g6-cells", "g8-body"]
  },
  {
    id: "thread-energy",
    label: "Energy & its transfers",
    color: "#10b981",
    note: "Energy from food and machines, through motion, to heat, waves and efficiency.",
    path: ["g6-machines", "g7-nutrition", "g7-motion", "g8-thermal-waves"]
  },
  {
    id: "thread-earth",
    label: "Earth systems & climate",
    color: "#14b8a6",
    note: "Ecology, rocks and weather grow into plate tectonics, climate change and modelling.",
    path: ["g7-earth-data", "g8-earth-engineering"]
  }
];
