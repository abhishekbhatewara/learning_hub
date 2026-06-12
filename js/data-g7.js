/* Grade 7 — Core Science Development */
window.CURRICULUM.grades.push({
  id: "grade-7",
  name: "Grade 7",
  tagline: "Core Science Development",
  color: "#e76f51",
  blurb: "Nutrition & digestion, atoms & matter, motion & forces, and the Earth–ecology–data bridge.",
  topics: [

    /* ---------------------------------------------------------------- */
    {
      id: "g7-nutrition",
      title: "Nutrition, Digestion & Wellness",
      subject: "Biology",
      icon: "🍎",
      summary:
        "Biomolecules and a balanced diet, food tests, teeth, and the journey of food through the digestive system with enzymes.",
      objectives: [
        "Name the four biomolecules (carbohydrates, proteins, lipids, nucleic acids) and their building blocks (monosaccharides, amino acids, fatty acids + glycerol, nucleotides).",
        "Relate the structure of each biomolecule to its function in the body.",
        "Distinguish macronutrients from micronutrients and explain the roles of key vitamins and minerals.",
        "Link named deficiency diseases to the nutrient that is lacking.",
        "Explain what a balanced diet is and how needs vary with age, sex and activity level; define basal metabolic rate.",
        "Carry out and interpret the four food tests: iodine (starch), Benedict's (reducing sugar), Biuret (protein) and grease-spot/emulsion (fat).",
        "Discuss how culture, religion, cost, availability and marketing influence food choices, and read a nutrition label critically.",
        "Label the structure of a tooth and the types of teeth, and explain the causes and prevention of tooth decay.",
        "Sequence the digestive processes: ingestion, digestion, absorption, assimilation and egestion.",
        "Distinguish mechanical from chemical digestion and identify the organs of the digestive system and their roles.",
        "Explain how villi and microvilli are adapted for absorption.",
        "Describe how digestive enzymes work on substrates and how pH and temperature affect them."
      ],
      resources: [
        { type: "video", title: "Digestive System & Enzymes (Amoeba Sisters)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Clear cartoons on digestion, enzymes and biomolecules." },
        { type: "interactive", title: "BBC Bitesize: Nutrition & digestion", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "Food groups, the gut and food tests with quizzes." },
        { type: "video", title: "Biomolecules & Food Tests", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Step-by-step iodine, Benedict's and Biuret tests." },
        { type: "reading", title: "CK-12: Human Digestive System", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/digestive-system/", note: "Notes on organs, enzymes and absorption." },
        { type: "podcast", title: "Brains On! – Food & the body episodes", provider: "Brains On! Science Podcast", url: "https://www.brainson.org/", note: "Kid-friendly audio on digestion and nutrition." },
        { type: "interactive", title: "Khan Academy: The digestive system", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Videos and practice on digestion and enzymes." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "The building blocks of proteins are:", options: ["Fatty acids", "Amino acids", "Monosaccharides", "Nucleotides"], answer: 1, explanation: "Proteins are chains of amino acids." },
        { type: "mcq", difficulty: "easy", q: "Which test detects starch?", options: ["Benedict's", "Biuret", "Iodine", "Grease spot"], answer: 2, explanation: "Iodine turns blue-black in the presence of starch." },
        { type: "tf", difficulty: "easy", q: "Vitamins and minerals are micronutrients, needed only in small amounts.", answer: true, explanation: "We need them in tiny quantities, but they are still essential." },
        { type: "mcq", difficulty: "easy", q: "Which organ is where most chemical digestion and absorption of nutrients happens?", options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"], answer: 1, explanation: "The small intestine completes digestion and absorbs nutrients through its villi." },
        { type: "mcq", difficulty: "medium", q: "Benedict's solution turns from blue to brick-red when heated with:", options: ["Protein", "Starch", "Reducing sugar", "Fat"], answer: 2, explanation: "A brick-red precipitate indicates a reducing sugar such as glucose." },
        { type: "mcq", difficulty: "medium", q: "Lack of vitamin C in the diet causes:", options: ["Rickets", "Scurvy", "Anaemia", "Goitre"], answer: 1, explanation: "Vitamin C deficiency causes scurvy (bleeding gums, poor wound healing)." },
        { type: "tf", difficulty: "medium", q: "Mechanical digestion (e.g. chewing and churning) physically breaks food up without changing it chemically.", answer: true, explanation: "Mechanical digestion increases surface area; chemical digestion uses enzymes to change molecules." },
        { type: "mcq", difficulty: "medium", q: "Villi increase absorption mainly by:", options: ["Producing acid", "Increasing surface area", "Killing bacteria", "Storing bile"], answer: 1, explanation: "Finger-like villi (and microvilli) hugely increase the surface area for absorption." },
        { type: "match", difficulty: "medium", q: "Match each digestive structure to its job.", pairs: [["Stomach","Churns food and adds acid + protease"],["Liver","Makes bile to emulsify fats"],["Pancreas","Releases digestive enzymes into the small intestine"],["Large intestine","Absorbs water from undigested food"]], explanation: "Each organ plays a distinct role in the digestive sequence." },
        { type: "short", difficulty: "medium", q: "List the five stages of food processing in order.", answer: "Ingestion (taking food in), digestion (breaking it down), absorption (nutrients pass into the blood), assimilation (cells use the nutrients), egestion (removing undigested waste).", explanation: "Ingestion → digestion → absorption → assimilation → egestion." },
        { type: "mcq", difficulty: "hard", q: "Most enzymes in the human body work best at about:", options: ["0 °C", "20 °C", "37 °C", "60 °C"], answer: 2, explanation: "Body temperature (~37 °C) is the optimum; too hot and enzymes denature." },
        { type: "short", difficulty: "hard", q: "Explain why a protease enzyme in the stomach works best in acid, while an enzyme in the small intestine works best in alkaline conditions.", answer: "Each enzyme has an optimum pH at which its active site shape is correct. Stomach protease (pepsin) is adapted to the acidic stomach (~pH 2). Enzymes in the small intestine work in slightly alkaline conditions because bile and pancreatic juice neutralise the acid arriving from the stomach. Outside their optimum pH the active site changes shape and the enzyme works poorly.", explanation: "pH affects the active site; each enzyme is matched to the conditions where it acts." },
        { type: "tf", difficulty: "hard", q: "Bile is an enzyme that chemically digests fat.", answer: false, explanation: "Bile is NOT an enzyme. It emulsifies fat (breaks it into droplets) to increase surface area for the enzyme lipase to work; it also neutralises stomach acid." },
        { type: "mcq", difficulty: "hard", q: "A nutrition label shows a snack is 'low fat' but very high in sugar and is marketed as 'healthy'. The best critical response is to:", options: ["Trust the front-of-pack claim", "Check the full ingredient list and per-100 g values, since 'low fat' can hide high sugar", "Assume low fat always means healthy", "Ignore the label"], answer: 1, explanation: "Marketing highlights one favourable claim; reading the full per-100 g panel reveals the real nutritional picture." },
        { type: "long", difficulty: "hard", q: "A friend eats lots of sugary snacks and rarely brushes. Explain how tooth decay happens, why fluoride helps, and two changes that would protect their teeth.", answer: "Bacteria in the mouth feed on sugar and produce acid. The acid dissolves the hard enamel, then the softer dentin, eventually reaching the pulp and causing pain (a cavity). Fluoride (in toothpaste and some water) makes enamel more resistant to acid and helps remineralise early damage. Protective changes: brush twice daily with fluoride toothpaste (removes plaque, adds fluoride) and cut down on the frequency of sugary snacks/drinks (less acid production), plus regular dental check-ups.", explanation: "Sugar → acid → enamel loss; fluoride strengthens enamel; brushing + less sugar prevents decay." },
        { type: "short", difficulty: "hard", q: "Why does an active teenage athlete need more energy (a higher calorie intake) than a less active adult of the same mass?", answer: "Energy needs depend on basal metabolic rate plus activity. A growing teenager uses energy for growth and repair, and an athlete's high activity level burns extra energy in exercise. So even at the same body mass they require more food energy than a sedentary adult to meet growth and activity demands.", explanation: "Total energy need = BMR + activity + growth; teenagers and athletes have higher demands." },
        { type: "mcq", difficulty: "hard", q: "Which biomolecule's building block is a nucleotide?", options: ["Carbohydrate", "Protein", "Lipid", "Nucleic acid"], answer: 3, explanation: "Nucleic acids (DNA and RNA) are made of nucleotide units." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "g7-matter",
      title: "Matter, Mixtures & Atomic Structure",
      subject: "Chemistry",
      icon: "⚛️",
      summary:
        "Atoms, elements and compounds; separating mixtures; chromatography; and the atomic model from Dalton to Bohr, including isotopes.",
      objectives: [
        "Define atoms, elements and compounds and recall the first 20 element symbols.",
        "Distinguish elements, compounds and mixtures and classify substances accordingly.",
        "Select and justify separation techniques: filtration, evaporation, crystallisation, simple and fractional distillation, sublimation and the separating funnel.",
        "Compare types of mixtures (solutions, suspensions, colloids, emulsions, alloys) by particle size and behaviour.",
        "Carry out paper chromatography and calculate Rf values to identify substances.",
        "State the relative charge and mass of protons, neutrons and electrons and locate them in the atom.",
        "Use atomic number and mass number (nuclide notation) to find the number of protons, neutrons and electrons.",
        "Describe how the atomic model developed through Dalton, Thomson, Rutherford and Bohr, and the role of the gold-foil experiment.",
        "Define isotopes and give real uses of radioactive isotopes (e.g. carbon-14 dating, medical and industrial uses)."
      ],
      resources: [
        { type: "video", title: "Atomic structure & the periodic table", provider: "YouTube · CrashCourse Chemistry", url: "https://www.youtube.com/@crashcourse", note: "History of the atom and subatomic particles." },
        { type: "interactive", title: "PhET: Build an Atom", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/build-an-atom", note: "Drag protons, neutrons and electrons to build atoms and ions." },
        { type: "interactive", title: "BBC Bitesize: Atoms, elements & compounds", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zstp34j", note: "Notes and quizzes on particles, mixtures and separation." },
        { type: "video", title: "Separating mixtures & chromatography", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Distillation, filtration and Rf values explained." },
        { type: "interactive", title: "Khan Academy: Atomic structure & isotopes", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Videos and practice on atoms, isotopes and the models." },
        { type: "reading", title: "CK-12: History of the atomic model", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Dalton to Bohr, with the gold-foil experiment." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "A pure substance made of only one type of atom is a(n):", options: ["Compound", "Mixture", "Element", "Solution"], answer: 2, explanation: "An element contains only one kind of atom." },
        { type: "mcq", difficulty: "easy", q: "The symbol for sodium is:", options: ["So", "S", "Na", "Sd"], answer: 2, explanation: "Sodium's symbol Na comes from the Latin 'natrium'." },
        { type: "mcq", difficulty: "easy", q: "Which technique separates an insoluble solid from a liquid?", options: ["Distillation", "Filtration", "Chromatography", "Evaporation"], answer: 1, explanation: "Filtration traps an insoluble solid (residue) while the liquid (filtrate) passes through." },
        { type: "tf", difficulty: "easy", q: "Protons have a positive charge and electrons have a negative charge.", answer: true, explanation: "Protons are +1, electrons are −1, neutrons are neutral." },
        { type: "mcq", difficulty: "medium", q: "Which separation method would you use to get pure water from salty water?", options: ["Filtration", "Simple distillation", "Crystallisation", "Sublimation"], answer: 1, explanation: "Distillation evaporates then condenses the water, leaving the salt behind." },
        { type: "numeric", difficulty: "medium", q: "An atom has atomic number 11 and mass number 23. How many neutrons does it have?", answer: "12", explanation: "Neutrons = mass number − atomic number = 23 − 11 = 12." },
        { type: "mcq", difficulty: "medium", q: "Fractional distillation is used (rather than simple distillation) when:", options: ["Separating a solid from a liquid", "Separating liquids with close boiling points", "Filtering sand", "Drying crystals"], answer: 1, explanation: "The fractionating column separates liquids whose boiling points are close, e.g. crude oil or ethanol/water." },
        { type: "numeric", difficulty: "medium", q: "In chromatography a spot travels 4 cm while the solvent travels 8 cm. What is its Rf value?", answer: "0.5", explanation: "Rf = distance moved by spot ÷ distance moved by solvent = 4 ÷ 8 = 0.5." },
        { type: "tf", difficulty: "medium", q: "In Rutherford's gold-foil experiment, most particles passed straight through, showing the atom is mostly empty space.", answer: true, explanation: "A few particles bounced back, revealing a tiny dense positive nucleus surrounded by empty space." },
        { type: "match", difficulty: "medium", q: "Match each scientist to their contribution to the atomic model.", pairs: [["Dalton","Atoms are tiny indivisible spheres"],["Thomson","'Plum pudding' — electrons in a positive blob"],["Rutherford","Tiny dense positive nucleus"],["Bohr","Electrons in fixed energy levels/shells"]], explanation: "The model was refined step by step as new evidence appeared." },
        { type: "mcq", difficulty: "hard", q: "Isotopes of the same element have:", options: ["Different numbers of protons", "The same number of neutrons", "The same number of protons but different numbers of neutrons", "Different charges"], answer: 2, explanation: "Isotopes share the proton number (same element) but differ in neutrons, so they have different mass numbers." },
        { type: "numeric", difficulty: "hard", q: "How many electrons are in a neutral atom with 17 protons?", answer: "17", explanation: "A neutral atom has equal protons and electrons, so 17 electrons." },
        { type: "short", difficulty: "hard", q: "Explain the difference between a compound and a mixture, with one example of each.", answer: "In a compound, different elements are chemically bonded in fixed proportions and can only be separated by a chemical reaction (e.g. water, H₂O). In a mixture, substances are just physically combined in any proportion and can be separated by physical methods such as filtering or distillation (e.g. salty water or air). A compound has new properties; a mixture keeps the properties of its parts.", explanation: "Compound = chemically bonded, fixed ratio; mixture = physically combined, separable physically." },
        { type: "short", difficulty: "hard", q: "Describe how you would separate a mixture of sand, salt and water to obtain dry salt and pure water.", answer: "First filter the mixture: sand stays in the filter paper (residue); salt water passes through. Then distil the salt water — the water evaporates and is condensed and collected as pure water, leaving salt behind. (Or evaporate the salt water to dryness to recover the salt as crystals.)", explanation: "Filter out the insoluble sand, then distil (or evaporate) to separate water and salt." },
        { type: "long", difficulty: "hard", q: "Carbon-14 dating is used to estimate the age of ancient organic remains. Explain what an isotope is and outline, in simple terms, why carbon-14 can be used for dating.", answer: "Atoms of the same element with different numbers of neutrons are isotopes — carbon-12, carbon-13 and carbon-14 all have 6 protons but different neutron numbers. Carbon-14 is radioactive and decays at a known, steady rate (a fixed half-life). Living things take in carbon-14 while alive, keeping a roughly constant amount. When the organism dies it stops taking in carbon, and its carbon-14 slowly decays. By measuring how much carbon-14 is left compared with a living sample, scientists estimate how long ago it died.", explanation: "Strong answer: defines isotope, notes carbon-14 is radioactive with a steady decay, and links remaining amount to age." },
        { type: "mcq", difficulty: "hard", q: "Which mixture has the LARGEST particles, big enough to settle out over time?", options: ["Solution", "Colloid", "Suspension", "Alloy"], answer: 2, explanation: "Suspensions have large particles that settle out (e.g. muddy water); solutions don't settle, colloids stay dispersed." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "g7-motion",
      title: "Measurement, Motion, Forces & Energy",
      subject: "Physics",
      icon: "🏃",
      summary:
        "Distance vs displacement, speed/velocity/acceleration with graphs and equations, types of forces, free-body diagrams, mass vs weight, pressure and Pascal's law.",
      objectives: [
        "Distinguish distance from displacement and speed from velocity (scalar vs vector).",
        "Define acceleration and interpret distance–time and velocity–time graphs, including the meaning of the slope.",
        "Use the motion equations: average speed, v = u + at and s = ut + ½at² to solve numerical problems.",
        "Explain parallax error and least count when taking measurements.",
        "Identify forces: gravity, friction, tension, drag, upthrust, magnetic, electrostatic, nuclear and push/pull.",
        "Classify forces as contact or non-contact and as balanced or unbalanced.",
        "Draw free-body diagrams showing the forces on an object.",
        "Distinguish mass from weight and calculate weight using W = m × g.",
        "Explain pressure in fluids and state Pascal's law, applying it to the hydraulic press.",
        "Relate mechanical advantage and efficiency for simple machines to force, distance and energy."
      ],
      resources: [
        { type: "video", title: "Motion, speed & acceleration", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Clear animations of distance–time and velocity–time graphs." },
        { type: "interactive", title: "PhET: Forces and Motion – Basics", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", note: "Push objects, see net force, friction and acceleration." },
        { type: "interactive", title: "The Physics Classroom: 1D Kinematics", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/1DKin", note: "Tutorials, diagrams and check-your-understanding problems." },
        { type: "video", title: "Forces & free-body diagrams", provider: "YouTube · CrashCourse Physics", url: "https://www.youtube.com/@crashcourse", note: "Newtonian forces explained with examples." },
        { type: "interactive", title: "Khan Academy: One-dimensional motion", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics/one-dimensional-motion", note: "Videos plus graded practice on kinematics." },
        { type: "reading", title: "CK-12: Pressure & Pascal's Principle", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physics/", note: "Notes on fluid pressure and hydraulics." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "Which quantity has both size AND direction (a vector)?", options: ["Distance", "Speed", "Velocity", "Time"], answer: 2, explanation: "Velocity is a vector (speed with direction); distance and speed are scalars." },
        { type: "numeric", difficulty: "easy", q: "A car travels 100 m in 20 s. What is its average speed in m/s?", answer: "5", explanation: "Speed = distance ÷ time = 100 ÷ 20 = 5 m/s." },
        { type: "tf", difficulty: "easy", q: "Weight is a force caused by gravity, while mass is the amount of matter in an object.", answer: true, explanation: "Mass (kg) stays the same everywhere; weight (N) depends on gravity." },
        { type: "mcq", difficulty: "easy", q: "Friction and air resistance are examples of:", options: ["Non-contact forces", "Contact forces", "Magnetic forces", "Nuclear forces"], answer: 1, explanation: "They act through direct contact; gravity and magnetism are non-contact." },
        { type: "mcq", difficulty: "medium", q: "On a distance–time graph, a horizontal (flat) line means the object is:", options: ["Speeding up", "Moving at constant speed", "Stationary", "Moving backwards"], answer: 2, explanation: "No change in distance over time means the object is at rest." },
        { type: "numeric", difficulty: "medium", q: "An object's velocity goes from 0 to 12 m/s in 4 s. What is its acceleration in m/s²?", answer: "3", explanation: "a = (v − u) ÷ t = (12 − 0) ÷ 4 = 3 m/s²." },
        { type: "numeric", difficulty: "medium", q: "Find the weight of a 5 kg bag where g = 10 N/kg.", answer: "50", explanation: "W = m × g = 5 × 10 = 50 N." },
        { type: "tf", difficulty: "medium", q: "When forces on an object are balanced, the object cannot be moving.", answer: false, explanation: "Balanced forces mean no change in motion — the object stays still OR keeps moving at constant velocity." },
        { type: "mcq", difficulty: "medium", q: "The steeper the slope (gradient) on a distance–time graph, the:", options: ["Slower the object", "Faster the object", "Heavier the object", "Greater the mass"], answer: 1, explanation: "Gradient of a distance–time graph = speed; steeper means faster." },
        { type: "short", difficulty: "medium", q: "Explain the difference between distance and displacement using the example of walking 3 m east then 3 m west.", answer: "Distance is the total path length travelled = 3 + 3 = 6 m. Displacement is the straight-line distance and direction from start to finish; here you end where you started, so displacement = 0 m. Distance is a scalar; displacement is a vector.", explanation: "Distance counts the whole path; displacement is start-to-end, with direction." },
        { type: "numeric", difficulty: "hard", q: "Using v = u + at, a car starts at u = 5 m/s and accelerates at 2 m/s² for 3 s. Find v (m/s).", answer: "11", explanation: "v = u + at = 5 + (2 × 3) = 5 + 6 = 11 m/s." },
        { type: "numeric", difficulty: "hard", q: "Using s = ut + ½at², find the distance when u = 0, a = 4 m/s², t = 2 s (answer in m).", answer: "8", explanation: "s = (0 × 2) + ½ × 4 × 2² = 0 + ½ × 4 × 4 = 8 m." },
        { type: "mcq", difficulty: "hard", q: "Reading a scale from the side so the value looks different from straight-on is called:", options: ["Least count", "Parallax error", "Zero error", "Random error"], answer: 1, explanation: "Parallax error comes from viewing a scale at an angle; read at eye level to avoid it." },
        { type: "short", difficulty: "hard", q: "State Pascal's law and explain how a hydraulic press uses it to lift a heavy car with a small force.", answer: "Pascal's law: pressure applied to an enclosed fluid is transmitted equally in all directions throughout the fluid. In a hydraulic press, a small force on a small piston creates a pressure that is transmitted through the oil to a large piston. Because pressure = force ÷ area is the same on both, the large piston (big area) produces a much larger force, lifting the car. You apply a small force over a large distance; the load moves a small distance.", explanation: "Same pressure on a bigger area gives a bigger force — that's the force multiplication." },
        { type: "long", difficulty: "hard", q: "A skydiver jumps and eventually falls at constant 'terminal velocity'. Using the idea of balanced and unbalanced forces, explain the motion from jump to terminal velocity, and draw/describe the free-body diagram at terminal velocity.", answer: "At the start, weight (gravity, down) is much larger than air resistance (up), so the net force is down and the diver accelerates. As speed increases, air resistance (drag) grows. Eventually drag equals weight, so forces are balanced, the net force is zero, and the diver stops accelerating — falling at a constant terminal velocity. Free-body diagram at terminal velocity: one arrow pointing down labelled 'weight' and an equal-length arrow pointing up labelled 'air resistance/drag', the two equal and opposite.", explanation: "Unbalanced (accelerating) → drag rises → balanced (constant velocity). Equal up/down arrows at terminal velocity." },
        { type: "mcq", difficulty: "hard", q: "Upthrust is the force that:", options: ["Pulls objects toward Earth", "Pushes up on an object in a fluid, opposing its weight", "Slows objects moving through air", "Holds a magnet to steel"], answer: 1, explanation: "Upthrust (buoyancy) is the upward push of a fluid; it's why things feel lighter in water." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "g7-earth-data",
      title: "Earth, Ecology & the Data Bridge",
      subject: "Earth & Data",
      icon: "🌍",
      summary:
        "Energy flow in ecosystems, the rock cycle, weathering and erosion, weather maps and climate drivers, plus data literacy: reliability, bias and correlation.",
      objectives: [
        "Describe energy flow through an ecosystem using food chains and energy pyramids.",
        "Apply the 10% rule to explain why energy decreases at each trophic level.",
        "Outline the rock cycle and distinguish weathering from erosion.",
        "Describe the main Earth systems and how they interact.",
        "Read a basic weather map, including isobars and fronts.",
        "Explain how latitude, altitude and nearby water bodies act as climate drivers.",
        "Evaluate data for reliability and bias and recognise when a sample is fair.",
        "Interpret scatter plots and describe correlation (positive, negative, none).",
        "Use environmental statistics to support a scientific claim with evidence."
      ],
      resources: [
        { type: "video", title: "Ecology – energy flow & food chains", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Trophic levels and the 10% rule explained simply." },
        { type: "interactive", title: "BBC Bitesize: Ecosystems & the rock cycle", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/zrkw2hv", note: "Notes and quizzes on ecology and Earth science." },
        { type: "interactive", title: "PhET: Natural Selection & ecosystems", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/filter?subjects=biology", note: "Model populations and energy in ecosystems." },
        { type: "video", title: "The Rock Cycle & weathering", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "How rocks form, break down and reform." },
        { type: "reading", title: "NOAA SciJinks: Weather & maps", provider: "NOAA SciJinks", url: "https://scijinks.gov/", note: "Student-friendly explanations of fronts, isobars and climate." },
        { type: "interactive", title: "Khan Academy: Interpreting scatter plots", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice reading correlation and data reliability." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "In a food chain, the arrows show the direction of:", options: ["Energy flow", "Animal movement", "Water flow", "Time"], answer: 0, explanation: "Arrows point from the eaten to the eater, showing energy transfer." },
        { type: "mcq", difficulty: "easy", q: "Roughly how much energy passes to the next trophic level?", options: ["100%", "50%", "10%", "0%"], answer: 2, explanation: "About 10% is passed on; the rest is lost as heat, movement and waste." },
        { type: "tf", difficulty: "easy", q: "Weathering breaks rock down in place, while erosion moves the broken pieces away.", answer: true, explanation: "Weathering = break down; erosion = transport by wind, water or ice." },
        { type: "mcq", difficulty: "easy", q: "Producers (e.g. green plants) get their energy from:", options: ["Eating animals", "Sunlight via photosynthesis", "Decomposers", "The soil only"], answer: 1, explanation: "Producers capture sunlight to make food by photosynthesis." },
        { type: "mcq", difficulty: "medium", q: "On a weather map, lines joining places of equal air pressure are called:", options: ["Contours", "Isobars", "Fronts", "Latitudes"], answer: 1, explanation: "Isobars connect points of equal pressure; closely spaced isobars mean stronger winds." },
        { type: "mcq", difficulty: "medium", q: "Why are there usually fewer top predators than plants in an ecosystem?", options: ["Predators are bigger", "Energy is lost at each level, so less is available higher up", "Plants reproduce slowly", "Predators don't need energy"], answer: 1, explanation: "Only ~10% of energy passes up each level, supporting fewer organisms at the top." },
        { type: "tf", difficulty: "medium", q: "Places at higher altitude tend to be colder than nearby lowlands at the same latitude.", answer: true, explanation: "Temperature generally falls with altitude — a key climate driver." },
        { type: "mcq", difficulty: "medium", q: "A scatter plot shows points rising from bottom-left to top-right. This is:", options: ["Negative correlation", "No correlation", "Positive correlation", "An outlier"], answer: 2, explanation: "As one variable increases, so does the other — positive correlation." },
        { type: "short", difficulty: "medium", q: "Give one reason a survey of 'favourite animal' carried out only at a zoo gift shop might be biased.", answer: "The sample is not representative: people at a zoo gift shop are already animal enthusiasts and may favour exotic zoo animals, so the results wouldn't reflect the wider public. A fair survey needs a varied, random sample.", explanation: "Where and who you sample can skew results — that's sampling bias." },
        { type: "mcq", difficulty: "hard", q: "Which energy pyramid shape is always correct for energy in an ecosystem?", options: ["Inverted (wider at top)", "Upright (wider at base)", "Rectangular", "Any shape"], answer: 1, explanation: "Energy pyramids are always upright because energy decreases up the levels." },
        { type: "short", difficulty: "hard", q: "Explain why coastal towns often have milder winters and cooler summers than inland towns at the same latitude.", answer: "Water heats up and cools down much more slowly than land (it has a high heat capacity). The sea stores heat in summer and releases it in winter, moderating the air temperature of nearby coasts. So coastal places have a smaller temperature range — milder winters and cooler summers — than inland areas where the land heats and cools quickly.", explanation: "Large water bodies are a climate driver because water's slow temperature change moderates nearby land." },
        { type: "tf", difficulty: "hard", q: "Correlation between two variables always means one causes the other.", answer: false, explanation: "Correlation does not prove causation; a third factor or coincidence could explain it." },
        { type: "mcq", difficulty: "hard", q: "A single data point lies far away from all the others on a scatter plot. It is best described as:", options: ["The mean", "An outlier (anomaly)", "A trend line", "The correlation"], answer: 1, explanation: "An outlier sits well away from the pattern and should be investigated before drawing conclusions." },
        { type: "long", difficulty: "hard", q: "A student claims 'eating ice cream causes sunburn' because a graph shows ice-cream sales and sunburn cases both rise together. Critique this claim using ideas of correlation, causation and a confounding variable.", answer: "The two variables show a positive correlation but correlation does not prove causation. A confounding (hidden) variable — hot, sunny weather — increases both ice-cream sales AND time spent in the sun, so sunburn cases rise too. Ice cream does not cause sunburn; both are caused by the weather. To test a real cause you would need a controlled experiment, not just a correlation in observational data.", explanation: "Identify the correlation, reject the causal claim, and name the confounder (sunny weather)." },
        { type: "short", difficulty: "hard", q: "Outline the rock cycle in a simple sequence, naming the three main rock types.", answer: "Igneous rock forms when molten magma/lava cools and solidifies. Weathering and erosion break rocks into sediments, which are compacted and cemented into sedimentary rock. Heat and pressure deep underground change existing rock into metamorphic rock. Any rock can melt back into magma, and the cycle repeats. The three types are igneous, sedimentary and metamorphic.", explanation: "Igneous → (weathering/erosion) → sedimentary → (heat/pressure) → metamorphic → (melting) → magma → igneous, repeating." }
      ]
    }
  ]
});
