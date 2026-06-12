/* Grade 7 — Core Science Development
   PER-OBJECTIVE schema: each objective is { text, resources[], quiz[] }.
   Resources include curated free sources plus relevant 🐺 Wolves-classroom library items. */
window.CURRICULUM.grades.push({
  id: "grade-7",
  name: "Grade 7",
  tagline: "Core Science Development",
  color: "#e76f51",
  blurb: "Nutrition & digestion, atoms & matter, motion & forces, and the Earth–ecology–data bridge.",
  topics: [

    /* ================================================================ */
    {
      id: "g7-nutrition",
      title: "Nutrition, Digestion & Wellness",
      subject: "Biology",
      icon: "🍎",
      summary:
        "Biomolecules and a balanced diet, food tests, teeth, and the journey of food through the digestive system with enzymes.",
      objectives: [

        {
          text: "Name the four biomolecules (carbohydrates, proteins, lipids, nucleic acids) and their building blocks (monosaccharides, amino acids, fatty acids + glycerol, nucleotides).",
          resources: [
            { type: "video", title: "Biomolecules & Food Tests", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "The four biomolecules and the units they're built from." },
            { type: "interactive", title: "BBC Bitesize: Nutrition", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "Food groups and the molecules in our food." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The building blocks of proteins are:", options: ["Fatty acids", "Amino acids", "Monosaccharides", "Nucleotides"], answer: 1, explanation: "Proteins are chains of amino acids." },
            { type: "mcq", difficulty: "medium", q: "Which biomolecule's building block is a nucleotide?", options: ["Carbohydrate", "Protein", "Lipid", "Nucleic acid"], answer: 3, explanation: "Nucleic acids (DNA and RNA) are made of nucleotide units." }
          ]
        },

        {
          text: "Relate the structure of each biomolecule to its function in the body.",
          resources: [
            { type: "reading", title: "CK-12: Biochemical molecules", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "How each molecule's structure suits its job." },
            { type: "interactive", title: "Khan Academy: Macromolecules", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Structure–function of carbs, proteins, lipids and nucleic acids." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which biomolecule is the body's main long-term energy store?", options: ["Carbohydrate", "Protein", "Lipid (fat)", "Nucleic acid"], answer: 2, explanation: "Fats store about twice the energy per gram of carbohydrate, making them the main long-term store." },
            { type: "short", difficulty: "hard", q: "Explain why the precise folded shape of a protein matters for an enzyme.", answer: "An enzyme's chain of amino acids folds into a specific 3-D shape that includes an active site. The active site fits its substrate like a lock and key. If the shape changes (e.g. by heat or wrong pH), the active site no longer fits and the enzyme cannot work — so structure directly determines function.", explanation: "Shape makes the active site; the right shape lets the enzyme bind its substrate." }
          ]
        },

        {
          text: "Distinguish macronutrients from micronutrients and explain the roles of key vitamins and minerals.",
          resources: [
            { type: "interactive", title: "BBC Bitesize: A balanced diet", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "Macronutrients, vitamins and minerals." },
            { type: "interactive", title: "Khan Academy: Nutrition", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Roles of nutrients in the body." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Vitamins and minerals are micronutrients, needed only in small amounts.", answer: true, explanation: "We need them in tiny quantities, but they are still essential." },
            { type: "mcq", difficulty: "easy", q: "Which of these is a macronutrient?", options: ["Vitamin C", "Iron", "Carbohydrate", "Calcium"], answer: 2, explanation: "Carbohydrates, proteins and fats are macronutrients (needed in large amounts); vitamins and minerals are micronutrients." }
          ]
        },

        {
          text: "Link named deficiency diseases to the nutrient that is lacking.",
          resources: [
            { type: "interactive", title: "BBC Bitesize: Deficiency diseases", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "What happens when nutrients are missing." },
            { type: "reading", title: "CK-12: Vitamins & minerals", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Nutrient roles and deficiency effects." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Lack of vitamin C in the diet causes:", options: ["Rickets", "Scurvy", "Anaemia", "Goitre"], answer: 1, explanation: "Vitamin C deficiency causes scurvy (bleeding gums, poor wound healing)." },
            { type: "mcq", difficulty: "medium", q: "A lack of vitamin D and calcium in children can cause weak, soft bones — a condition called:", options: ["Scurvy", "Rickets", "Goitre", "Anaemia"], answer: 1, explanation: "Rickets is caused by too little vitamin D/calcium, needed for strong bones." }
          ]
        },

        {
          text: "Explain what a balanced diet is and how needs vary with age, sex and activity level; define basal metabolic rate.",
          resources: [
            { type: "interactive", title: "BBC Bitesize: Energy & a balanced diet", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "How dietary needs change between people." },
            { type: "podcast", title: "Brains On! – Food & the body", provider: "Brains On! Science Podcast", url: "https://www.brainson.org/", note: "Kid-friendly audio on food and energy." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Basal metabolic rate (BMR) is the energy your body uses:", options: ["During hard exercise", "At complete rest, just to stay alive", "Only while eating", "Only while asleep"], answer: 1, explanation: "BMR is the baseline energy needed for vital processes (breathing, circulation, cell repair) at rest." },
            { type: "short", difficulty: "hard", q: "Why does an active teenage athlete need more energy than a less active adult of the same mass?", answer: "Energy needs depend on basal metabolic rate plus activity. A growing teenager uses energy for growth and repair, and an athlete's high activity burns extra energy. So even at the same body mass they need more food energy than a sedentary adult.", explanation: "Total energy need = BMR + activity + growth; teens and athletes have higher demands." }
          ]
        },

        {
          text: "Carry out and interpret the four food tests: iodine (starch), Benedict's (reducing sugar), Biuret (protein) and grease-spot/emulsion (fat).",
          resources: [
            { type: "video", title: "Food tests step-by-step", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Iodine, Benedict's, Biuret and grease-spot tests." },
            { type: "interactive", title: "BBC Bitesize: Food tests", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "What each test shows and the colour changes." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which test detects starch?", options: ["Benedict's", "Biuret", "Iodine", "Grease spot"], answer: 2, explanation: "Iodine turns blue-black in the presence of starch." },
            { type: "mcq", difficulty: "medium", q: "Benedict's solution turns from blue to brick-red when heated with:", options: ["Protein", "Starch", "Reducing sugar", "Fat"], answer: 2, explanation: "A brick-red precipitate indicates a reducing sugar such as glucose." }
          ]
        },

        {
          text: "Discuss how culture, religion, cost, availability and marketing influence food choices, and read a nutrition label critically.",
          resources: [
            { type: "interactive", title: "BBC Bitesize: Diet & food choices", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "Factors that shape what we eat." },
            { type: "video", title: "What actually causes high cholesterol? (TED-Ed, 6 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=EixIyh1gshM", note: "How diet and other factors affect cholesterol — read labels critically." },
            { type: "reading", title: "Common sweetener linked to higher stroke risk", provider: "🐺 Wolves classroom · earth.com", url: "https://www.earth.com/news/common-sweetener-may-directly-damage-the-brain/", note: "A reminder to look past marketing claims to the actual ingredients." },
            { type: "reading", title: "Gut cancers linked with certain diets", provider: "🐺 Wolves classroom · ScienceAlert", url: "https://www.sciencealert.com/alarming-rise-in-cancers-of-the-gut-linked-with-these-deadly-diets", note: "Why dietary choices matter for long-term health." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "A snack is labelled 'low fat' but is very high in sugar and marketed as 'healthy'. The best critical response is to:", options: ["Trust the front-of-pack claim", "Check the full ingredient list and per-100 g values, since 'low fat' can hide high sugar", "Assume low fat always means healthy", "Ignore the label"], answer: 1, explanation: "Marketing highlights one favourable claim; reading the full per-100 g panel reveals the real picture." },
            { type: "tf", difficulty: "medium", q: "Marketing, cost and availability can influence food choices as much as nutritional value.", answer: true, explanation: "Culture, religion, price, advertising and what's available all shape real food choices." }
          ]
        },

        {
          text: "Label the structure of a tooth and the types of teeth, and explain the causes and prevention of tooth decay.",
          resources: [
            { type: "interactive", title: "BBC Bitesize: Teeth & digestion", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "Tooth structure, types and decay." },
            { type: "reading", title: "What did people use before toothbrushes?", provider: "🐺 Wolves classroom · History Facts", url: "https://historyfacts.com/science-industry/article/what-did-people-use-before-toothbrushes/", note: "A fun history of dental care and why we protect our teeth." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The hard outer layer that protects the crown of a tooth is the:", options: ["Dentine", "Enamel", "Pulp", "Root"], answer: 1, explanation: "Enamel is the hardest substance in the body and shields the tooth from decay." },
            { type: "long", difficulty: "hard", q: "A friend eats lots of sugary snacks and rarely brushes. Explain how tooth decay happens, why fluoride helps, and two changes that would protect their teeth.", answer: "Bacteria in the mouth feed on sugar and produce acid. The acid dissolves the hard enamel, then the softer dentine, eventually reaching the pulp and causing pain (a cavity). Fluoride (in toothpaste and some water) makes enamel more resistant to acid and helps remineralise early damage. Protective changes: brush twice daily with fluoride toothpaste, and cut down on the frequency of sugary snacks/drinks, plus regular dental check-ups.", explanation: "Sugar → acid → enamel loss; fluoride strengthens enamel; brushing + less sugar prevents decay." }
          ]
        },

        {
          text: "Sequence the digestive processes: ingestion, digestion, absorption, assimilation and egestion.",
          resources: [
            { type: "video", title: "Digestive System (Amoeba Sisters)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "The whole journey of food, step by step." },
            { type: "interactive", title: "BBC Bitesize: The digestive system", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zf339j6", note: "Order of the digestive processes." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "List the five stages of food processing in order.", answer: "Ingestion (taking food in), digestion (breaking it down), absorption (nutrients pass into the blood), assimilation (cells use the nutrients), egestion (removing undigested waste).", explanation: "Ingestion → digestion → absorption → assimilation → egestion." },
            { type: "mcq", difficulty: "easy", q: "Removing undigested waste from the body is called:", options: ["Digestion", "Absorption", "Egestion", "Ingestion"], answer: 2, explanation: "Egestion is the removal of undigested material as faeces — different from excretion of metabolic waste." }
          ]
        },

        {
          text: "Distinguish mechanical from chemical digestion and identify the organs of the digestive system and their roles.",
          resources: [
            { type: "video", title: "Digestion & enzymes (Amoeba Sisters)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Mechanical vs chemical digestion and the gut organs." },
            { type: "reading", title: "CK-12: Human Digestive System", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/digestive-system/", note: "Each organ and what it does." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "Mechanical digestion (e.g. chewing and churning) physically breaks food up without changing it chemically.", answer: true, explanation: "Mechanical digestion increases surface area; chemical digestion uses enzymes to change molecules." },
            { type: "match", difficulty: "medium", q: "Match each digestive structure to its job.", pairs: [["Stomach","Churns food and adds acid + protease"],["Liver","Makes bile to emulsify fats"],["Pancreas","Releases digestive enzymes into the small intestine"],["Large intestine","Absorbs water from undigested food"]], explanation: "Each organ plays a distinct role in the digestive sequence." }
          ]
        },

        {
          text: "Explain how villi and microvilli are adapted for absorption.",
          resources: [
            { type: "reading", title: "CK-12: Absorption & the small intestine", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/digestive-system/", note: "How villi are adapted for absorbing nutrients." },
            { type: "interactive", title: "Khan Academy: The digestive system", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Absorption through villi and microvilli." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Villi increase absorption mainly by:", options: ["Producing acid", "Increasing surface area", "Killing bacteria", "Storing bile"], answer: 1, explanation: "Finger-like villi (and microvilli) hugely increase the surface area for absorption." },
            { type: "mcq", difficulty: "easy", q: "Which organ is where most chemical digestion and absorption of nutrients happens?", options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"], answer: 1, explanation: "The small intestine completes digestion and absorbs nutrients through its villi." }
          ]
        },

        {
          text: "Describe how digestive enzymes work on substrates and how pH and temperature affect them.",
          resources: [
            { type: "video", title: "Enzymes explained (Amoeba Sisters)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Active sites, substrates, and the effect of pH/temperature." },
            { type: "video", title: "How enzymes work", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Optimum conditions and denaturing." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Most enzymes in the human body work best at about:", options: ["0 °C", "20 °C", "37 °C", "60 °C"], answer: 2, explanation: "Body temperature (~37 °C) is the optimum; too hot and enzymes denature." },
            { type: "short", difficulty: "hard", q: "Explain why a protease in the stomach works best in acid, while an enzyme in the small intestine works best in alkaline conditions.", answer: "Each enzyme has an optimum pH at which its active site shape is correct. Stomach protease (pepsin) is adapted to the acidic stomach (~pH 2). Small-intestine enzymes work in slightly alkaline conditions because bile and pancreatic juice neutralise the acid arriving from the stomach. Outside their optimum pH the active site changes shape and the enzyme works poorly.", explanation: "pH affects the active-site shape; each enzyme is matched to where it acts." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "g7-matter",
      title: "Matter, Mixtures & Atomic Structure",
      subject: "Chemistry",
      icon: "⚛️",
      summary:
        "Atoms, elements and compounds; separating mixtures; chromatography; and the atomic model from Dalton to Bohr, including isotopes.",
      objectives: [

        {
          text: "Define atoms, elements and compounds and recall the first 20 element symbols.",
          resources: [
            { type: "video", title: "Atomic structure & the periodic table", provider: "YouTube · CrashCourse Chemistry", url: "https://www.youtube.com/@crashcourse", note: "Atoms, elements and the first elements." },
            { type: "interactive", title: "BBC Bitesize: Atoms, elements & compounds", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zstp34j", note: "Definitions and element symbols." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A pure substance made of only one type of atom is a(n):", options: ["Compound", "Mixture", "Element", "Solution"], answer: 2, explanation: "An element contains only one kind of atom." },
            { type: "mcq", difficulty: "easy", q: "The symbol for sodium is:", options: ["So", "S", "Na", "Sd"], answer: 2, explanation: "Sodium's symbol Na comes from the Latin 'natrium'." }
          ]
        },

        {
          text: "Distinguish elements, compounds and mixtures and classify substances accordingly.",
          resources: [
            { type: "interactive", title: "BBC Bitesize: Elements, compounds & mixtures", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zstp34j", note: "How to classify substances." },
            { type: "video", title: "What happens if you eat a silica gel packet? (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=QWCHnR53oIw", note: "A real-world look at a everyday material and what it's made of." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "Explain the difference between a compound and a mixture, with one example of each.", answer: "In a compound, different elements are chemically bonded in fixed proportions and can only be separated by a chemical reaction (e.g. water, H₂O). In a mixture, substances are just physically combined in any proportion and can be separated by physical methods (e.g. salty water or air). A compound has new properties; a mixture keeps the properties of its parts.", explanation: "Compound = chemically bonded, fixed ratio; mixture = physically combined, separable physically." },
            { type: "mcq", difficulty: "easy", q: "Air is best classified as a:", options: ["Element", "Compound", "Mixture", "Pure substance"], answer: 2, explanation: "Air is a mixture of gases (nitrogen, oxygen and others) not chemically bonded together." }
          ]
        },

        {
          text: "Select and justify separation techniques: filtration, evaporation, crystallisation, distillation, sublimation and the separating funnel.",
          resources: [
            { type: "video", title: "Separating mixtures", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Filtration, distillation, crystallisation and more." },
            { type: "interactive", title: "BBC Bitesize: Separating mixtures", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zstp34j", note: "Choosing the right technique." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which technique separates an insoluble solid from a liquid?", options: ["Distillation", "Filtration", "Chromatography", "Evaporation"], answer: 1, explanation: "Filtration traps an insoluble solid (residue) while the liquid (filtrate) passes through." },
            { type: "mcq", difficulty: "medium", q: "Fractional distillation is used (rather than simple distillation) when:", options: ["Separating a solid from a liquid", "Separating liquids with close boiling points", "Filtering sand", "Drying crystals"], answer: 1, explanation: "The fractionating column separates liquids whose boiling points are close, e.g. crude oil." }
          ]
        },

        {
          text: "Compare types of mixtures (solutions, suspensions, colloids, emulsions, alloys) by particle size and behaviour.",
          resources: [
            { type: "interactive", title: "BBC Bitesize: Solutions & mixtures", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zstp34j", note: "Types of mixtures and how they behave." },
            { type: "video", title: "Not quite a solid, not quite a liquid: hydrogels (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=KKcJOHkG19w", note: "A fascinating material that blurs the states of matter." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Which mixture has the LARGEST particles, big enough to settle out over time?", options: ["Solution", "Colloid", "Suspension", "Alloy"], answer: 2, explanation: "Suspensions have large particles that settle out (e.g. muddy water); solutions don't settle." },
            { type: "mcq", difficulty: "medium", q: "In a solution, the dissolved solute particles are:", options: ["Very large and settle quickly", "So small the mixture looks clear and doesn't settle", "Always visible to the eye", "Magnetic"], answer: 1, explanation: "Solute particles in a true solution are tiny and evenly spread, so the solution looks clear and stable." }
          ]
        },

        {
          text: "Carry out paper chromatography and calculate Rf values to identify substances.",
          resources: [
            { type: "video", title: "Chromatography & Rf values", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Running a chromatogram and calculating Rf." },
            { type: "interactive", title: "Khan Academy: Chromatography", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "How separation by chromatography works." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "In chromatography a spot travels 4 cm while the solvent travels 8 cm. What is its Rf value?", answer: "0.5", explanation: "Rf = distance moved by spot ÷ distance moved by solvent = 4 ÷ 8 = 0.5." },
            { type: "short", difficulty: "medium", q: "Why might two black inks that look identical be separated into different coloured spots by chromatography?", answer: "A single 'colour' of ink can actually be a mixture of several dyes. In chromatography each dye travels a different distance up the paper depending on how strongly it sticks to the paper versus dissolving in the solvent, so the mixture separates into distinct spots, revealing the inks are different.", explanation: "Different dyes move at different rates, so a mixture splits into separate spots." }
          ]
        },

        {
          text: "State the relative charge and mass of protons, neutrons and electrons and locate them in the atom.",
          resources: [
            { type: "interactive", title: "PhET: Build an Atom", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/build-an-atom", note: "Place protons, neutrons and electrons to build atoms." },
            { type: "video", title: "Subatomic particles", provider: "YouTube · CrashCourse Chemistry", url: "https://www.youtube.com/@crashcourse", note: "Charge and mass of the three particles." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Protons have a positive charge and electrons have a negative charge.", answer: true, explanation: "Protons are +1, electrons are −1, neutrons are neutral." },
            { type: "mcq", difficulty: "medium", q: "Which particle has almost no mass and a negative charge, and is found outside the nucleus?", options: ["Proton", "Neutron", "Electron", "Nucleus"], answer: 2, explanation: "Electrons are very light, negatively charged, and orbit the nucleus in shells." }
          ]
        },

        {
          text: "Use atomic number and mass number (nuclide notation) to find the number of protons, neutrons and electrons.",
          resources: [
            { type: "interactive", title: "PhET: Build an Atom", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/build-an-atom", note: "See how atomic and mass number relate to the particles." },
            { type: "interactive", title: "Khan Academy: Atomic number & mass number", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Working out protons, neutrons and electrons." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "An atom has atomic number 11 and mass number 23. How many neutrons does it have?", answer: "12", explanation: "Neutrons = mass number − atomic number = 23 − 11 = 12." },
            { type: "numeric", difficulty: "hard", q: "How many electrons are in a neutral atom with 17 protons?", answer: "17", explanation: "A neutral atom has equal protons and electrons, so 17 electrons." }
          ]
        },

        {
          text: "Describe how the atomic model developed through Dalton, Thomson, Rutherford and Bohr, and the role of the gold-foil experiment.",
          resources: [
            { type: "reading", title: "CK-12: History of the atomic model", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Dalton to Bohr, with the gold-foil experiment." },
            { type: "video", title: "The history of the atom", provider: "YouTube · CrashCourse Chemistry", url: "https://www.youtube.com/@crashcourse", note: "How evidence reshaped the model over time." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "In Rutherford's gold-foil experiment, most particles passed straight through, showing the atom is mostly empty space.", answer: true, explanation: "A few particles bounced back, revealing a tiny dense positive nucleus surrounded by empty space." },
            { type: "match", difficulty: "medium", q: "Match each scientist to their contribution to the atomic model.", pairs: [["Dalton","Atoms are tiny indivisible spheres"],["Thomson","'Plum pudding' — electrons in a positive blob"],["Rutherford","Tiny dense positive nucleus"],["Bohr","Electrons in fixed energy levels/shells"]], explanation: "The model was refined step by step as new evidence appeared." }
          ]
        },

        {
          text: "Define isotopes and give real uses of radioactive isotopes (e.g. carbon-14 dating, medical and industrial uses).",
          resources: [
            { type: "interactive", title: "Khan Academy: Isotopes", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "What isotopes are and how they're used." },
            { type: "reading", title: "The black fungus from Chernobyl that may 'eat' radiation", provider: "🐺 Wolves classroom · BBC Future", url: "https://www.bbc.com/future/article/20251125-the-mysterious-black-fungus-from-chernobyl-that-appears-to-eat-radiation", note: "A real story about radiation and radioactive material." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Isotopes of the same element have:", options: ["Different numbers of protons", "The same number of neutrons", "The same number of protons but different numbers of neutrons", "Different charges"], answer: 2, explanation: "Isotopes share the proton number (same element) but differ in neutrons, so they have different mass numbers." },
            { type: "long", difficulty: "hard", q: "Carbon-14 dating estimates the age of ancient organic remains. Explain what an isotope is and why carbon-14 can be used for dating.", answer: "Atoms of the same element with different numbers of neutrons are isotopes — carbon-12, -13 and -14 all have 6 protons but different neutron numbers. Carbon-14 is radioactive and decays at a known, steady rate (a fixed half-life). Living things take in carbon-14 while alive. When an organism dies it stops taking in carbon, and its carbon-14 slowly decays. By measuring how much carbon-14 is left compared with a living sample, scientists estimate how long ago it died.", explanation: "Defines isotope, notes carbon-14 is radioactive with steady decay, links remaining amount to age." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "g7-motion",
      title: "Measurement, Motion, Forces & Energy",
      subject: "Physics",
      icon: "🏃",
      summary:
        "Distance vs displacement, speed/velocity/acceleration with graphs and equations, types of forces, free-body diagrams, mass vs weight, pressure and Pascal's law.",
      objectives: [

        {
          text: "Distinguish distance from displacement and speed from velocity (scalar vs vector).",
          resources: [
            { type: "video", title: "Motion, speed & acceleration", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Scalars and vectors in motion." },
            { type: "interactive", title: "Speed, velocity & acceleration study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-67888e9d3ab4819184bf9ef35745731e-calculating-speed-velocity-and-acceleration", note: "Practise the differences and calculations. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which quantity has both size AND direction (a vector)?", options: ["Distance", "Speed", "Velocity", "Time"], answer: 2, explanation: "Velocity is a vector (speed with direction); distance and speed are scalars." },
            { type: "short", difficulty: "medium", q: "Using the example of walking 3 m east then 3 m west, explain the difference between distance and displacement.", answer: "Distance is the total path length travelled = 3 + 3 = 6 m. Displacement is the straight-line distance and direction from start to finish; here you end where you started, so displacement = 0 m. Distance is a scalar; displacement is a vector.", explanation: "Distance counts the whole path; displacement is start-to-end, with direction." }
          ]
        },

        {
          text: "Define acceleration and interpret distance–time and velocity–time graphs, including the meaning of the slope.",
          resources: [
            { type: "video", title: "Distance–time & velocity–time graphs", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Reading the slope of motion graphs." },
            { type: "interactive", title: "Khan Academy: One-dimensional motion", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics/one-dimensional-motion", note: "Graphs and acceleration practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "An object's velocity goes from 0 to 12 m/s in 4 s. What is its acceleration in m/s²?", answer: "3", explanation: "a = (v − u) ÷ t = (12 − 0) ÷ 4 = 3 m/s²." },
            { type: "mcq", difficulty: "medium", q: "On a distance–time graph, a horizontal (flat) line means the object is:", options: ["Speeding up", "Moving at constant speed", "Stationary", "Moving backwards"], answer: 2, explanation: "No change in distance over time means the object is at rest." }
          ]
        },

        {
          text: "Use the motion equations: average speed, v = u + at and s = ut + ½at² to solve numerical problems.",
          resources: [
            { type: "interactive", title: "The Physics Classroom: 1D Kinematics", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/1DKin", note: "Worked examples with the motion equations." },
            { type: "interactive", title: "Khan Academy: Kinematic formulas", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics/one-dimensional-motion", note: "Practice using v = u + at and s = ut + ½at²." }
          ],
          quiz: [
            { type: "numeric", difficulty: "hard", q: "Using v = u + at, a car starts at u = 5 m/s and accelerates at 2 m/s² for 3 s. Find v (m/s).", answer: "11", explanation: "v = u + at = 5 + (2 × 3) = 11 m/s." },
            { type: "numeric", difficulty: "hard", q: "Using s = ut + ½at², find the distance when u = 0, a = 4 m/s², t = 2 s (answer in m).", answer: "8", explanation: "s = (0 × 2) + ½ × 4 × 2² = ½ × 4 × 4 = 8 m." }
          ]
        },

        {
          text: "Explain parallax error and least count when taking measurements.",
          resources: [
            { type: "interactive", title: "The Physics Classroom: Measurement", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/", note: "Reading instruments accurately." },
            { type: "interactive", title: "Khan Academy: Measurement & uncertainty", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Sources of measurement error." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Reading a scale from the side so the value looks different from straight-on is called:", options: ["Least count", "Parallax error", "Zero error", "Random error"], answer: 1, explanation: "Parallax error comes from viewing a scale at an angle; read at eye level to avoid it." },
            { type: "mcq", difficulty: "medium", q: "The 'least count' of a measuring instrument is:", options: ["Its largest reading", "The smallest division it can measure", "Its total length", "Its zero error"], answer: 1, explanation: "Least count is the smallest interval the instrument can resolve — e.g. 1 mm on a ruler." }
          ]
        },

        {
          text: "Identify forces: gravity, friction, tension, drag, upthrust, magnetic, electrostatic, nuclear and push/pull.",
          resources: [
            { type: "video", title: "Forces & free-body diagrams", provider: "YouTube · CrashCourse Physics", url: "https://www.youtube.com/@crashcourse", note: "The main types of force with examples." },
            { type: "interactive", title: "Gravity, friction & other forces study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-677becabbef48191a678cbd2c430d4b9-gravity-friction-and-other-forces", note: "Ask questions about the different forces. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Upthrust is the force that:", options: ["Pulls objects toward Earth", "Pushes up on an object in a fluid, opposing its weight", "Slows objects moving through air", "Holds a magnet to steel"], answer: 1, explanation: "Upthrust (buoyancy) is the upward push of a fluid; it's why things feel lighter in water." },
            { type: "mcq", difficulty: "medium", q: "Which of these is a non-contact force?", options: ["Friction", "Tension", "Gravity", "Drag"], answer: 2, explanation: "Gravity acts at a distance without touching; friction, tension and drag need contact." }
          ]
        },

        {
          text: "Classify forces as contact or non-contact and as balanced or unbalanced.",
          resources: [
            { type: "interactive", title: "PhET: Forces and Motion – Basics", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/forces-and-motion-basics", note: "See balanced vs unbalanced forces in action." },
            { type: "video", title: "Balanced & unbalanced forces", provider: "YouTube · CrashCourse Physics", url: "https://www.youtube.com/@crashcourse", note: "How net force changes motion." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Friction and air resistance are examples of:", options: ["Non-contact forces", "Contact forces", "Magnetic forces", "Nuclear forces"], answer: 1, explanation: "They act through direct contact; gravity and magnetism are non-contact." },
            { type: "tf", difficulty: "medium", q: "When forces on an object are balanced, the object cannot be moving.", answer: false, explanation: "Balanced forces mean no change in motion — the object stays still OR keeps moving at constant velocity." }
          ]
        },

        {
          text: "Draw free-body diagrams showing the forces on an object.",
          resources: [
            { type: "video", title: "Free-body diagrams", provider: "YouTube · CrashCourse Physics", url: "https://www.youtube.com/@crashcourse", note: "How to draw and label force arrows." },
            { type: "interactive", title: "The Physics Classroom: Free-body diagrams", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/newtlaws", note: "Practice identifying forces on objects." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "Describe the free-body diagram of a book resting on a table.", answer: "Two arrows of equal length, opposite directions: weight (gravity) pointing down, and the normal (reaction) force from the table pointing up. They are balanced, so the net force is zero and the book stays still.", explanation: "Weight down = normal reaction up; balanced forces, no movement." },
            { type: "long", difficulty: "hard", q: "A skydiver eventually falls at constant 'terminal velocity'. Using balanced and unbalanced forces, explain the motion from jump to terminal velocity, and describe the free-body diagram at terminal velocity.", answer: "At the start, weight (down) is much larger than air resistance (up), so the net force is down and the diver accelerates. As speed increases, air resistance grows. Eventually drag equals weight, so forces are balanced, net force is zero, and the diver stops accelerating — falling at constant terminal velocity. Free-body diagram at terminal velocity: one arrow down labelled 'weight' and an equal arrow up labelled 'air resistance/drag', equal and opposite.", explanation: "Unbalanced (accelerating) → drag rises → balanced (constant velocity)." }
          ]
        },

        {
          text: "Distinguish mass from weight and calculate weight using W = m × g.",
          resources: [
            { type: "video", title: "Mass vs weight", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Why weight changes with gravity but mass doesn't." },
            { type: "interactive", title: "Khan Academy: Mass & weight", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Calculating weight with W = mg." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Weight is a force caused by gravity, while mass is the amount of matter in an object.", answer: true, explanation: "Mass (kg) stays the same everywhere; weight (N) depends on gravity." },
            { type: "numeric", difficulty: "medium", q: "Find the weight of a 5 kg bag where g = 10 N/kg.", answer: "50", explanation: "W = m × g = 5 × 10 = 50 N." }
          ]
        },

        {
          text: "Explain pressure in fluids and state Pascal's law, applying it to the hydraulic press.",
          resources: [
            { type: "reading", title: "CK-12: Pressure & Pascal's Principle", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physics/", note: "Fluid pressure and hydraulics." },
            { type: "interactive", title: "Khan Academy: Fluids & pressure", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Pressure in fluids and Pascal's law." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A force of 20 N acts on an area of 4 m². What is the pressure in pascals (Pa)?", answer: "5", explanation: "Pressure = force ÷ area = 20 ÷ 4 = 5 Pa." },
            { type: "long", difficulty: "hard", q: "State Pascal's law and explain how a hydraulic press lifts a heavy car with a small force.", answer: "Pascal's law: pressure applied to an enclosed fluid is transmitted equally in all directions. In a hydraulic press, a small force on a small piston creates a pressure transmitted through the oil to a large piston. Since pressure = force ÷ area is the same on both, the large piston (big area) produces a much larger force, lifting the car. You apply a small force over a large distance; the load moves a small distance.", explanation: "Same pressure on a bigger area gives a bigger force — force multiplication." }
          ]
        },

        {
          text: "Relate mechanical advantage and efficiency for simple machines to force, distance and energy.",
          resources: [
            { type: "video", title: "Mechanical advantage & efficiency", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Trading force for distance, and energy losses." },
            { type: "video", title: "The physics behind lift cables (BBC, 4 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=b2D4nhUOGW0", note: "Real machines using pulleys to gain mechanical advantage." },
            { type: "video", title: "The physics behind Einstein's E = mc² (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=gkTVlYDB21g", note: "Enrichment: the deep link between mass and energy." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A machine lifts a 300 N load with an effort of 100 N. What is its mechanical advantage?", answer: "3", explanation: "MA = load ÷ effort = 300 ÷ 100 = 3." },
            { type: "mcq", difficulty: "medium", q: "No machine is 100% efficient mainly because:", options: ["Gravity adds energy", "Friction wastes some energy as heat", "Machines create energy", "Mass disappears"], answer: 1, explanation: "Friction always converts some input energy to heat, so useful output is less than input." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "g7-earth-data",
      title: "Earth, Ecology & the Data Bridge",
      subject: "Earth & Data",
      icon: "🌍",
      summary:
        "Energy flow in ecosystems, the rock cycle, weathering and erosion, weather maps and climate drivers, plus data literacy: reliability, bias and correlation.",
      objectives: [

        {
          text: "Describe energy flow through an ecosystem using food chains and energy pyramids.",
          resources: [
            { type: "video", title: "Ecology – energy flow & food chains", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Trophic levels and food chains explained simply." },
            { type: "video", title: "Is the Amazon Rainforest disappearing? (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=Qxby1J5bnPQ", note: "A real ecosystem under pressure." },
            { type: "video", title: "Inside the monarch butterfly migration mystery (12 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=hrXzY4DP_c8", note: "Energy, life cycles and ecosystems across a continent." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "In a food chain, the arrows show the direction of:", options: ["Energy flow", "Animal movement", "Water flow", "Time"], answer: 0, explanation: "Arrows point from the eaten to the eater, showing energy transfer." },
            { type: "mcq", difficulty: "easy", q: "Producers (e.g. green plants) get their energy from:", options: ["Eating animals", "Sunlight via photosynthesis", "Decomposers", "The soil only"], answer: 1, explanation: "Producers capture sunlight to make food by photosynthesis." }
          ]
        },

        {
          text: "Apply the 10% rule to explain why energy decreases at each trophic level.",
          resources: [
            { type: "video", title: "Energy pyramids & the 10% rule", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Why energy shrinks up the levels." },
            { type: "interactive", title: "PhET: Natural Selection & ecosystems", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/filter?subjects=biology", note: "Model populations and energy in ecosystems." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Roughly how much energy passes to the next trophic level?", options: ["100%", "50%", "10%", "0%"], answer: 2, explanation: "About 10% is passed on; the rest is lost as heat, movement and waste." },
            { type: "mcq", difficulty: "hard", q: "Which energy pyramid shape is always correct for energy in an ecosystem?", options: ["Inverted (wider at top)", "Upright (wider at base)", "Rectangular", "Any shape"], answer: 1, explanation: "Energy pyramids are always upright because energy decreases up the levels." }
          ]
        },

        {
          text: "Outline the rock cycle and distinguish weathering from erosion.",
          resources: [
            { type: "video", title: "The Rock Cycle & weathering", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "How rocks form, break down and reform." },
            { type: "podcast", title: "The Secrets Everyday Rocks Keep – Short Wave", provider: "🐺 Wolves classroom · Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-secrets-everyday-rocks-keep/id1482575855?i=1000735094795", note: "What ordinary rocks reveal about Earth's history." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Weathering breaks rock down in place, while erosion moves the broken pieces away.", answer: true, explanation: "Weathering = break down; erosion = transport by wind, water or ice." },
            { type: "short", difficulty: "hard", q: "Outline the rock cycle in a simple sequence, naming the three main rock types.", answer: "Igneous rock forms when molten magma/lava cools and solidifies. Weathering and erosion break rocks into sediments, which are compacted and cemented into sedimentary rock. Heat and pressure deep underground change existing rock into metamorphic rock. Any rock can melt back into magma, and the cycle repeats. The three types are igneous, sedimentary and metamorphic.", explanation: "Igneous → (weathering/erosion) → sedimentary → (heat/pressure) → metamorphic → (melting) → magma, repeating." }
          ]
        },

        {
          text: "Describe the main Earth systems and how they interact.",
          resources: [
            { type: "interactive", title: "BBC Bitesize: Earth & atmosphere", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/zrkw2hv", note: "The geosphere, hydrosphere, atmosphere and biosphere." },
            { type: "reading", title: "NOAA SciJinks: How Earth's systems connect", provider: "NOAA SciJinks", url: "https://scijinks.gov/", note: "Student-friendly look at interacting Earth systems." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which pair correctly names two of Earth's 'spheres'?", options: ["Atmosphere & hydrosphere", "Stratosphere & ionosphere only", "Biosphere & exosphere only", "Lithosphere & sonosphere"], answer: 0, explanation: "Earth's four main systems are the atmosphere (air), hydrosphere (water), geosphere/lithosphere (rock) and biosphere (life)." },
            { type: "short", difficulty: "medium", q: "Give one example of the atmosphere interacting with the hydrosphere.", answer: "Examples: water evaporates from the sea (hydrosphere) into the air (atmosphere) and later falls as rain; or wind (atmosphere) creates waves on the ocean (hydrosphere). Any sensible exchange between air and water is correct.", explanation: "The water cycle is a clear example of air and water systems interacting." }
          ]
        },

        {
          text: "Read a basic weather map, including isobars and fronts.",
          resources: [
            { type: "reading", title: "NOAA SciJinks: Weather maps & fronts", provider: "NOAA SciJinks", url: "https://scijinks.gov/", note: "Isobars, fronts and pressure systems." },
            { type: "interactive", title: "BBC Bitesize: Weather", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/zrkw2hv", note: "How to read a weather chart." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "On a weather map, lines joining places of equal air pressure are called:", options: ["Contours", "Isobars", "Fronts", "Latitudes"], answer: 1, explanation: "Isobars connect points of equal pressure; closely spaced isobars mean stronger winds." },
            { type: "mcq", difficulty: "medium", q: "A weather 'front' on a map shows:", options: ["A mountain range", "The boundary between two different air masses", "A river", "A line of equal temperature"], answer: 1, explanation: "Fronts are boundaries between warm and cold air masses and often bring changes in weather." }
          ]
        },

        {
          text: "Explain how latitude, altitude and nearby water bodies act as climate drivers.",
          resources: [
            { type: "reading", title: "NOAA SciJinks: What controls climate", provider: "NOAA SciJinks", url: "https://scijinks.gov/", note: "Latitude, altitude and oceans as climate drivers." },
            { type: "video", title: "This $3BN Mega-Dam Changes the Weather (11 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=vZiL--dFqCg", note: "How large water bodies can influence local climate." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "Places at higher altitude tend to be colder than nearby lowlands at the same latitude.", answer: true, explanation: "Temperature generally falls with altitude — a key climate driver." },
            { type: "short", difficulty: "hard", q: "Explain why coastal towns often have milder winters and cooler summers than inland towns at the same latitude.", answer: "Water heats up and cools down much more slowly than land (high heat capacity). The sea stores heat in summer and releases it in winter, moderating the air temperature of nearby coasts. So coastal places have a smaller temperature range — milder winters and cooler summers — than inland areas where the land heats and cools quickly.", explanation: "Water's slow temperature change moderates nearby land — a climate driver." }
          ]
        },

        {
          text: "Evaluate data for reliability and bias and recognise when a sample is fair.",
          resources: [
            { type: "interactive", title: "Khan Academy: Sampling & bias", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "What makes a sample fair and reliable." },
            { type: "interactive", title: "BBC Bitesize: Reliable data", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/zrkw2hv", note: "Spotting bias in investigations." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "Give one reason a survey of 'favourite animal' carried out only at a zoo gift shop might be biased.", answer: "The sample is not representative: people at a zoo gift shop are already animal enthusiasts and may favour exotic zoo animals, so the results wouldn't reflect the wider public. A fair survey needs a varied, random sample.", explanation: "Where and who you sample can skew results — sampling bias." },
            { type: "tf", difficulty: "medium", q: "A larger, more varied (random) sample is generally more reliable than a small, narrow one.", answer: true, explanation: "Bigger, representative samples reduce the effect of chance and bias." }
          ]
        },

        {
          text: "Interpret scatter plots and describe correlation (positive, negative, none).",
          resources: [
            { type: "interactive", title: "Khan Academy: Interpreting scatter plots", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Reading correlation from data." },
            { type: "interactive", title: "BBC Bitesize: Scatter graphs", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/zrkw2hv", note: "Positive, negative and no correlation." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A scatter plot shows points rising from bottom-left to top-right. This is:", options: ["Negative correlation", "No correlation", "Positive correlation", "An outlier"], answer: 2, explanation: "As one variable increases, so does the other — positive correlation." },
            { type: "mcq", difficulty: "hard", q: "A single data point lies far away from all the others on a scatter plot. It is best described as:", options: ["The mean", "An outlier (anomaly)", "A trend line", "The correlation"], answer: 1, explanation: "An outlier sits well away from the pattern and should be investigated before drawing conclusions." }
          ]
        },

        {
          text: "Use environmental statistics to support a scientific claim with evidence.",
          resources: [
            { type: "interactive", title: "Khan Academy: Correlation & causation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Why correlation isn't proof of cause." },
            { type: "reading", title: "NOAA SciJinks: Using data as evidence", provider: "NOAA SciJinks", url: "https://scijinks.gov/", note: "Backing claims with real environmental data." }
          ],
          quiz: [
            { type: "tf", difficulty: "hard", q: "Correlation between two variables always means one causes the other.", answer: false, explanation: "Correlation does not prove causation; a third factor or coincidence could explain it." },
            { type: "long", difficulty: "hard", q: "A student claims 'eating ice cream causes sunburn' because a graph shows ice-cream sales and sunburn cases both rise together. Critique this using correlation, causation and a confounding variable.", answer: "The two variables show a positive correlation, but correlation does not prove causation. A confounding (hidden) variable — hot, sunny weather — increases both ice-cream sales AND time in the sun, so sunburn rises too. Ice cream does not cause sunburn; both are caused by the weather. To test a real cause you'd need a controlled experiment, not just a correlation in observational data.", explanation: "Identify the correlation, reject the causal claim, name the confounder (sunny weather)." }
          ]
        }
      ]
    }
  ]
});
