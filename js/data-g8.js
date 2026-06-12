/* Grade 8 — Mastery & Extension */
window.CURRICULUM.grades.push({
  id: "grade-8",
  name: "Grade 8",
  tagline: "Mastery & Extension",
  color: "#5a4fcf",
  blurb: "Circulation, immunity, genetics & evolution; periodic trends, bonding & reactions; thermal physics, waves & energy; and climate, engineering & data science.",
  topics: [

    /* ---------------------------------------------------------------- */
    {
      id: "g8-body",
      title: "Circulation, Immunity, Genetics & Evolution",
      subject: "Biology",
      icon: "🫀",
      summary:
        "Heart, blood and the lymphatic system; pathogens and immunity; the skeleton; Mendelian and complex inheritance; and the evidence for evolution by natural selection.",
      objectives: [
        "Label the heart's chambers, valves and major vessels and trace the double circulation of blood.",
        "Compare arteries, veins and capillaries and identify the components of blood and their functions.",
        "Explain factors affecting heart rate and design a fair investigation into exercise and heart rate.",
        "Relate causes, prevention and treatment of coronary heart disease, hypertension, angina and heart failure.",
        "Describe the lymphatic system and its roles in fluid balance and immune defence.",
        "Classify pathogens (bacteria, viruses, fungi, protozoa, parasites) and describe routes of disease transmission.",
        "Explain the body's defences, phagocytosis, and the difference between active and passive immunity.",
        "Classify bones, joints and muscle types in the human body.",
        "Use Punnett squares to predict inheritance, including codominance and incomplete dominance, and interpret a pedigree.",
        "Define mutation and outline the evidence for evolution (fossils, anatomy/homology, vestigial structures, DNA).",
        "Explain natural selection and how variation, selection and isolation can lead to speciation."
      ],
      resources: [
        { type: "video", title: "Circulatory & immune systems (Amoeba Sisters)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Clear cartoons on the heart, blood and immunity." },
        { type: "video", title: "Natural Selection & evidence for evolution", provider: "YouTube · CrashCourse Biology", url: "https://www.youtube.com/@crashcourse", note: "Darwin, fossils, homology and DNA evidence." },
        { type: "interactive", title: "PhET: Natural Selection", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/natural-selection", note: "Change the environment and watch traits evolve." },
        { type: "interactive", title: "BBC Bitesize: Health, inheritance & evolution", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/zrkw2hv", note: "Notes and quizzes on body systems and genetics." },
        { type: "interactive", title: "Khan Academy: Mendelian genetics & Punnett squares", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology/classical-genetics", note: "Worked Punnett squares with practice." },
        { type: "reading", title: "CK-12: Immune system & inheritance", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Notes on defences, immunity, genetics and evolution." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "Which blood vessels carry blood AWAY from the heart?", options: ["Veins", "Arteries", "Capillaries", "Valves"], answer: 1, explanation: "Arteries carry blood away from the heart (usually at high pressure)." },
        { type: "mcq", difficulty: "easy", q: "Which blood component carries oxygen?", options: ["Platelets", "Plasma", "Red blood cells", "White blood cells"], answer: 2, explanation: "Red blood cells contain haemoglobin, which binds oxygen." },
        { type: "tf", difficulty: "easy", q: "Viruses are living cells that can reproduce on their own.", answer: false, explanation: "Viruses are not cells; they can only reproduce inside a host's cells." },
        { type: "mcq", difficulty: "easy", q: "The job of platelets in the blood is to:", options: ["Carry oxygen", "Fight infection", "Help blood clot", "Digest food"], answer: 2, explanation: "Platelets trigger clotting to seal wounds." },
        { type: "mcq", difficulty: "medium", q: "White blood cells that engulf and 'eat' pathogens carry out:", options: ["Photosynthesis", "Phagocytosis", "Respiration", "Digestion"], answer: 1, explanation: "Phagocytes surround and digest pathogens — phagocytosis." },
        { type: "mcq", difficulty: "medium", q: "Capillaries are well suited to exchanging substances because they:", options: ["Have thick muscular walls", "Are one cell thick with a large surface area", "Carry only waste", "Have valves"], answer: 1, explanation: "Their very thin (one-cell) walls give short diffusion distances for exchange." },
        { type: "tf", difficulty: "medium", q: "A vaccine gives active immunity by training the body to make its own antibodies and memory cells.", answer: true, explanation: "Vaccines expose the body to a safe form of a pathogen so it learns to respond — active immunity." },
        { type: "mcq", difficulty: "medium", q: "In a cross between a tall (TT) and a short (tt) pea plant, the offspring (Tt) are all:", options: ["Short", "Tall", "Half tall, half short", "Medium height"], answer: 1, explanation: "T is dominant, so all Tt offspring show the tall phenotype." },
        { type: "match", difficulty: "medium", q: "Match each pathogen type to an example or feature.", pairs: [["Bacteria","Single-celled; some cause food poisoning"],["Virus","Not a cell; needs a host to reproduce"],["Fungi","Cause athlete's foot and ringworm"],["Protozoa","Single-celled; cause malaria"]], explanation: "Different pathogen groups cause different diseases and need different treatments." },
        { type: "short", difficulty: "medium", q: "Name three of the body's first-line (non-specific) defences against pathogens.", answer: "Any three of: skin (a physical barrier), mucus in the airways (traps pathogens), nose hairs (filter air), stomach acid (kills many swallowed pathogens), tears/saliva (contain enzymes). These stop pathogens before any specific immune response is needed.", explanation: "First-line defences are barriers and chemicals that block entry — before white blood cells act." },
        { type: "short", difficulty: "hard", q: "A monohybrid cross is Bb × Bb (B = brown eyes, dominant; b = blue). State the genotype and phenotype ratios of the offspring.", answer: "The Punnett square gives BB : Bb : bb = 1 : 2 : 1 (genotype ratio). Phenotype: 3 brown-eyed : 1 blue-eyed (because BB and Bb both show brown, bb shows blue). So a 3:1 phenotype ratio and 1:2:1 genotype ratio.", explanation: "Bb × Bb → 1 BB, 2 Bb, 1 bb; brown:blue = 3:1." },
        { type: "mcq", difficulty: "hard", q: "In codominance (e.g. AB blood group), the heterozygote shows:", options: ["Only the dominant trait", "A blend of the two traits", "Both alleles fully and equally", "Neither trait"], answer: 2, explanation: "Codominance shows both alleles at once (e.g. both A and B antigens); incomplete dominance gives a blend." },
        { type: "tf", difficulty: "hard", q: "Vestigial structures (like the human appendix or whale hip bones) are evidence for evolution.", answer: true, explanation: "Reduced, no-longer-used structures suggest descent from ancestors that used them." },
        { type: "short", difficulty: "hard", q: "Explain why blood flows through the heart in two separate circuits ('double circulation') and why the left ventricle has a thicker muscular wall than the right.", answer: "Double circulation means blood passes through the heart twice per full loop: the right side pumps deoxygenated blood to the lungs (pulmonary circuit) and the left side pumps oxygenated blood to the whole body (systemic circuit). Keeping them separate keeps oxygen-rich and oxygen-poor blood from mixing and maintains high pressure to the body. The left ventricle is more muscular because it must generate a much higher pressure to push blood all around the body, whereas the right only pushes to the nearby lungs.", explanation: "Separate circuits prevent mixing and keep pressure high; the left ventricle works harder, so it's thicker." },
        { type: "long", difficulty: "hard", q: "A population of beetles lives on a dark soil; most are brown but a few are green. Birds eat the most visible beetles. Explain, using natural selection, how the population might become mostly brown over many generations, and what role variation and inheritance play.", answer: "There is natural variation in beetle colour (some brown, some green). On dark soil the green beetles stand out and are eaten more by birds, while well-camouflaged brown beetles are more likely to survive (selection pressure: predation). Surviving brown beetles reproduce and pass the brown-colour alleles to their offspring (inheritance). Over many generations the proportion of brown beetles rises and green becomes rare. So variation provides the differences, predation selects the fittest, and inheritance passes the advantageous trait on — the population adapts.", explanation: "Variation → selection pressure (predation) → survival of the camouflaged → inheritance → shift in the population over time." },
        { type: "mcq", difficulty: "hard", q: "Which is the best example of how new species can form (speciation)?", options: ["A single animal learns a new behaviour", "Two populations become geographically isolated, accumulate different changes, and can no longer interbreed", "An animal grows larger during its life", "A plant is moved to a new pot"], answer: 1, explanation: "Isolation + different selection + accumulated genetic change over time can split one species into two." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "g8-bonding",
      title: "Periodic Trends, Bonding & Reactions",
      subject: "Chemistry",
      icon: "🧪",
      summary:
        "Periodic trends, the octet rule, ionic/metallic/covalent bonding, giant structures, intermolecular forces, and chemical reactions including balancing equations and pH.",
      objectives: [
        "Describe and explain periodic trends in atomic/ionic radius, ionisation energy, electronegativity and metallic character.",
        "Link an element's electronic configuration to its position in the periodic table.",
        "State the octet rule and use it to explain ionic, covalent and metallic bonding.",
        "Predict ion charges and write/name simple ionic compounds; relate ionic properties (high melting point, conductivity in solution, solubility) to structure.",
        "Explain metallic bonding with the 'sea of electrons' model and link it to the properties of metals.",
        "Draw Lewis (dot-and-cross) structures for simple molecules with single, double and triple bonds.",
        "Distinguish polar from non-polar bonds/molecules and name simple covalent compounds using prefixes.",
        "Compare ionic and covalent compounds and describe giant covalent structures (diamond, graphite, silicon dioxide).",
        "Identify intermolecular forces (London dispersion, dipole–dipole, hydrogen bonding) and explain hydrogen bonding in water.",
        "Distinguish physical from chemical changes, apply conservation of mass, and balance chemical equations.",
        "Classify reactions as exothermic or endothermic and use the pH scale and indicators."
      ],
      resources: [
        { type: "video", title: "Ionic, covalent & metallic bonding", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Animated walk-through of all three bond types." },
        { type: "interactive", title: "PhET: Build a Molecule / Atomic Interactions", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/filter?subjects=chemistry", note: "Build molecules and explore bonding interactively." },
        { type: "video", title: "The periodic table & periodic trends", provider: "YouTube · CrashCourse Chemistry", url: "https://www.youtube.com/@crashcourse", note: "Trends across periods and down groups." },
        { type: "interactive", title: "BBC Bitesize: Bonding & chemical reactions", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zstp34j", note: "Notes and quizzes on bonding, equations and pH." },
        { type: "interactive", title: "Khan Academy: Chemical bonds & balancing equations", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Practice on bonding, structures and balancing." },
        { type: "reading", title: "CK-12: Intermolecular forces & hydrogen bonding", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Clear notes on the forces between molecules." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "Across a period (left to right), atomic radius generally:", options: ["Increases", "Decreases", "Stays the same", "Doubles"], answer: 1, explanation: "More protons pull the same shell of electrons closer, so atoms get smaller across a period." },
        { type: "mcq", difficulty: "easy", q: "Ionic bonds form between:", options: ["Two metals", "Two non-metals", "A metal and a non-metal", "Noble gases"], answer: 2, explanation: "A metal loses electrons to a non-metal, forming oppositely charged ions that attract." },
        { type: "tf", difficulty: "easy", q: "In a covalent bond, atoms share electrons.", answer: true, explanation: "Covalent bonding is the sharing of electron pairs between non-metal atoms." },
        { type: "mcq", difficulty: "easy", q: "A solution with pH 2 is:", options: ["Strongly acidic", "Neutral", "Weakly alkaline", "Strongly alkaline"], answer: 0, explanation: "pH below 7 is acidic; pH 2 is strongly acidic." },
        { type: "mcq", difficulty: "medium", q: "Why do metals conduct electricity?", options: ["They have a giant covalent structure", "They contain delocalised (free) electrons", "They are made of ions only", "They have hydrogen bonds"], answer: 1, explanation: "The 'sea' of delocalised electrons can move and carry charge." },
        { type: "mcq", difficulty: "medium", q: "Ionic compounds conduct electricity when:", options: ["Solid", "Molten or dissolved in water", "Never", "Only as a gas"], answer: 1, explanation: "Ions must be free to move; in a solid they're locked in place, but when molten or in solution they can carry charge." },
        { type: "numeric", difficulty: "medium", q: "Balance: H₂ + O₂ → H₂O. What coefficient goes in front of H₂O?", answer: "2", explanation: "2H₂ + O₂ → 2H₂O balances atoms: 4 H and 2 O on each side." },
        { type: "tf", difficulty: "medium", q: "In a chemical reaction, the total mass of products equals the total mass of reactants.", answer: true, explanation: "Conservation of mass — atoms are rearranged, not created or destroyed." },
        { type: "mcq", difficulty: "medium", q: "The covalent compound CO₂ is named:", options: ["Carbon oxide", "Carbon dioxide", "Carbonate", "Dicarbon oxide"], answer: 1, explanation: "Prefix 'di-' shows two oxygens: carbon dioxide." },
        { type: "short", difficulty: "medium", q: "Explain why ionic compounds such as sodium chloride have very high melting points.", answer: "Ionic compounds form a giant lattice of oppositely charged ions held together by strong electrostatic forces in all directions. A great deal of energy is needed to overcome these many strong forces, so they have very high melting and boiling points.", explanation: "Strong forces throughout a giant lattice = lots of energy to melt = high melting point." },
        { type: "mcq", difficulty: "hard", q: "Down a group, ionisation energy generally decreases mainly because:", options: ["Atoms have fewer protons", "The outer electron is further from the nucleus and shielded by inner shells", "Atoms gain charge", "Bonds get stronger"], answer: 1, explanation: "The outer electron is further out and shielded, so it's held less tightly and easier to remove." },
        { type: "short", difficulty: "hard", q: "Diamond and graphite are both made only of carbon, yet diamond is hard and graphite is soft and slippery. Explain why, using their structures.", answer: "Both are giant covalent structures of carbon. In diamond, each carbon is covalently bonded to four others in a rigid 3-D network, making it extremely hard. In graphite, each carbon bonds to only three others, forming flat layers; the layers are held together by weak forces so they can slide over each other, making graphite soft and slippery. Graphite also has delocalised electrons (so it conducts), while diamond does not.", explanation: "Same atoms, different bonding arrangement: 3-D network (hard) vs sliding layers (soft)." },
        { type: "tf", difficulty: "hard", q: "Water has unusually high boiling point for its size because of hydrogen bonding between its molecules.", answer: true, explanation: "Hydrogen bonds (a strong type of intermolecular force) need extra energy to break, raising water's boiling point." },
        { type: "mcq", difficulty: "hard", q: "Which is a chemical (not physical) change?", options: ["Ice melting", "Sugar dissolving", "Iron rusting", "Water boiling"], answer: 2, explanation: "Rusting forms a new substance (iron oxide); the others are reversible physical changes." },
        { type: "long", difficulty: "hard", q: "Compare the structure, bonding and typical properties of an ionic compound (e.g. NaCl) with a small covalent molecular substance (e.g. CO₂). Refer to melting point, electrical conductivity and what particles are present.", answer: "Ionic (NaCl): a giant lattice of positive and negative ions held by strong electrostatic forces. High melting point (many strong forces to break). Conducts electricity when molten or dissolved (free ions) but not as a solid. Often soluble in water. Particles present: ions. Covalent molecular (CO₂): small, separate molecules with strong covalent bonds inside each molecule but only weak intermolecular forces between molecules. Low melting/boiling point (only weak forces between molecules to overcome), so often a gas or liquid. Does not conduct electricity (no free ions or electrons). Particles present: molecules. The key difference is giant ionic lattice (strong throughout) versus small molecules held weakly together.", explanation: "Contrast giant ionic lattice (strong, high m.p., conducts when molten/aqueous) with small molecules (weak intermolecular forces, low m.p., non-conducting)." },
        { type: "mcq", difficulty: "hard", q: "A reaction that releases heat to the surroundings (temperature rises) is:", options: ["Endothermic", "Exothermic", "Neutral", "Reversible only"], answer: 1, explanation: "Exothermic reactions give out energy, warming the surroundings (e.g. combustion)." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "g8-thermal-waves",
      title: "Thermal Physics, Waves, Forces & Energy",
      subject: "Physics",
      icon: "🌡️",
      summary:
        "Kinetic theory and temperature, thermal expansion and thermometers; transverse/longitudinal and EM/mechanical waves with v = fλ; sound and its uses; Newton's laws, momentum and energy.",
      objectives: [
        "Use the kinetic theory of matter and Brownian motion to explain the states of matter.",
        "Convert between Celsius, Fahrenheit and Kelvin and distinguish heat from temperature.",
        "Explain thermal expansion in solids, liquids and gases and its everyday applications.",
        "Compare thermometers (liquid-in-glass, thermocouple, thermistor, infrared, bimetallic strip) and alcohol vs mercury.",
        "Distinguish transverse from longitudinal waves and mechanical from electromagnetic waves.",
        "Define wavelength, frequency, time period and wave speed and use v = fλ and v = λ/T.",
        "Describe sound as a longitudinal wave, explain echoes, and compare its speed in different media.",
        "Explain ultrasound, infrasound, SONAR, radar and medical sound applications, and solve time–distance sound problems.",
        "State Newton's three laws and apply F = ma and momentum p = mv (and the idea of impulse).",
        "Apply momentum/impulse ideas to safety engineering such as crumple zones.",
        "Identify energy forms, describe energy transfer and conservation, and calculate efficiency.",
        "Describe optics basics: how prisms and lenses bend light, the spectrum, and the link between frequency and energy."
      ],
      resources: [
        { type: "video", title: "Waves: types, properties & v = fλ", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Transverse vs longitudinal and the wave equation." },
        { type: "interactive", title: "PhET: Wave on a String & Waves Intro", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/wave-on-a-string", note: "Change frequency and amplitude; see wave behaviour." },
        { type: "interactive", title: "PhET: States of Matter & Energy Forms", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/states-of-matter-basics", note: "Heat particles and watch state changes / kinetic theory." },
        { type: "video", title: "Newton's Laws & momentum", provider: "YouTube · CrashCourse Physics", url: "https://www.youtube.com/@crashcourse", note: "F = ma, momentum and impulse with examples." },
        { type: "interactive", title: "The Physics Classroom: Waves & Sound", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/sound", note: "Tutorials and problems on sound, echoes and the wave equation." },
        { type: "interactive", title: "Khan Academy: Thermodynamics & waves", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Temperature, heat, waves and energy practice." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "In which state are particles most tightly packed and only vibrating?", options: ["Gas", "Liquid", "Solid", "Plasma"], answer: 2, explanation: "Solids have closely packed particles that vibrate in fixed positions." },
        { type: "mcq", difficulty: "easy", q: "Sound is a:", options: ["Transverse wave", "Longitudinal wave", "Electromagnetic wave", "Stationary object"], answer: 1, explanation: "Sound is longitudinal: particles vibrate back and forth along the direction of travel." },
        { type: "tf", difficulty: "easy", q: "Sound cannot travel through a vacuum because it needs particles to carry the vibration.", answer: true, explanation: "Sound is mechanical, so it needs a medium; light (EM) can travel through a vacuum." },
        { type: "numeric", difficulty: "easy", q: "Convert 25 °C to Kelvin.", answer: "298", explanation: "K = °C + 273, so 25 + 273 = 298 K." },
        { type: "mcq", difficulty: "medium", q: "Which list is in order of increasing speed of sound?", options: ["Solid < liquid < gas", "Gas < liquid < solid", "Liquid < solid < gas", "They are all equal"], answer: 1, explanation: "Sound travels fastest where particles are closest: gas < liquid < solid." },
        { type: "numeric", difficulty: "medium", q: "A wave has frequency 5 Hz and wavelength 2 m. Use v = fλ to find its speed (m/s).", answer: "10", explanation: "v = f × λ = 5 × 2 = 10 m/s." },
        { type: "numeric", difficulty: "medium", q: "Using F = ma, find the force on a 4 kg mass accelerating at 3 m/s² (in N).", answer: "12", explanation: "F = m × a = 4 × 3 = 12 N." },
        { type: "tf", difficulty: "medium", q: "Heat and temperature mean exactly the same thing.", answer: false, explanation: "Temperature measures how hot something is (average particle energy); heat is the energy transferred between objects at different temperatures." },
        { type: "mcq", difficulty: "medium", q: "Gaps are left between sections of railway track to allow for:", options: ["Water drainage", "Thermal expansion in hot weather", "Faster trains", "Electrical insulation"], answer: 1, explanation: "Rails expand when hot; gaps stop them buckling — an application of thermal expansion." },
        { type: "short", difficulty: "medium", q: "Explain how a ship's SONAR uses sound to measure the depth of the sea floor.", answer: "SONAR sends a pulse of sound (ultrasound) down through the water. The sound reflects off the sea floor and returns as an echo. By measuring the time for the echo to come back and knowing the speed of sound in water, depth = (speed × time) ÷ 2 (dividing by two because the sound travels down and back).", explanation: "Send a pulse, time the echo, use speed × time ÷ 2 for the one-way depth." },
        { type: "numeric", difficulty: "hard", q: "Find the momentum of a 2 kg ball moving at 6 m/s, using p = mv (units kg·m/s).", answer: "12", explanation: "p = m × v = 2 × 6 = 12 kg·m/s." },
        { type: "numeric", difficulty: "hard", q: "A sound takes 4 s to echo back from a cliff. If the speed of sound is 340 m/s, how far away is the cliff (m)?", answer: "680", explanation: "Total distance = speed × time = 340 × 4 = 1360 m; the cliff is half that (there and back), so 680 m." },
        { type: "short", difficulty: "hard", q: "Explain how crumple zones in cars use the idea of impulse/momentum to reduce injury in a crash.", answer: "In a crash the car's momentum must change to zero. Impulse = force × time = change in momentum. A crumple zone increases the time over which the car (and passengers) come to a stop by crumpling gradually. Because the change in momentum is fixed, increasing the stopping time reduces the force experienced. A smaller force means less injury to the occupants.", explanation: "Longer stopping time → smaller force for the same momentum change → safer." },
        { type: "mcq", difficulty: "hard", q: "Newton's third law is best stated as:", options: ["Objects stay still unless pushed", "Force = mass × acceleration", "For every action there is an equal and opposite reaction", "Energy cannot be created or destroyed"], answer: 2, explanation: "Forces come in pairs: A pushes B, B pushes back on A equally and oppositely." },
        { type: "numeric", difficulty: "hard", q: "A machine takes in 200 J of energy and does 150 J of useful work. What is its efficiency as a percentage?", answer: "75", explanation: "Efficiency = useful ÷ input × 100 = 150 ÷ 200 × 100 = 75%." },
        { type: "long", difficulty: "hard", q: "Compare transverse and longitudinal waves. Give the key difference, one example of each, and explain what wavelength, frequency and amplitude each represent.", answer: "In a transverse wave the particles/oscillations move at right angles (perpendicular) to the direction the wave travels — e.g. light, water ripples, a wave on a rope. In a longitudinal wave the particles vibrate back and forth along (parallel to) the direction of travel, creating compressions and rarefactions — e.g. sound. Wavelength is the length of one complete wave (e.g. crest to crest, or compression to compression). Frequency is the number of waves passing a point each second (in hertz) — it sets the pitch of a sound or colour of light. Amplitude is the maximum displacement from the rest position — it relates to loudness of sound or brightness of light (the wave's energy).", explanation: "Transverse = perpendicular motion (light); longitudinal = parallel motion (sound). Wavelength = one wave's length; frequency = waves per second; amplitude = size of oscillation/energy." },
        { type: "mcq", difficulty: "hard", q: "When white light passes through a prism it splits into a spectrum because different colours:", options: ["Have the same wavelength", "Are refracted (bent) by different amounts", "Travel at the same speed in glass", "Are absorbed by the prism"], answer: 1, explanation: "Different wavelengths bend by different amounts (dispersion), so colours separate." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "g8-earth-engineering",
      title: "Climate, Engineering & Data Science",
      subject: "Earth & Data",
      icon: "🌐",
      summary:
        "Geologic time and plate tectonics, the water cycle and water quality, climate change and feedback loops, systems thinking, the engineering design process, and data science.",
      objectives: [
        "Read rock layers and the geologic time scale and explain how dating evidence orders Earth's history.",
        "Describe plate tectonics and explain earthquakes, including P-waves and S-waves.",
        "Explain interactions between Earth's spheres and outline the quantitative water cycle and watersheds.",
        "Carry out and interpret water quality tests (pH, nitrates) and link them to environmental health.",
        "Explain atmospheric pressure and circulation and the main climate drivers.",
        "Explain the greenhouse effect and how feedback loops can amplify or dampen climate change.",
        "Interpret real climate data such as the Keeling Curve and ice-core records, and describe how climate models work.",
        "Apply systems thinking using stocks, flows, feedback and predator–prey models.",
        "Use the engineering design process: define criteria and constraints, prototype, test and improve, considering sustainability and life-cycle analysis.",
        "Apply data-science skills: evaluate reliability and bias, interpret bivariate data and scatter plots, identify correlation, outliers and non-linear patterns.",
        "Plan a fair investigation, keep a lab notebook, and write Claim–Evidence–Reasoning explanations."
      ],
      resources: [
        { type: "interactive", title: "NASA Climate Kids", provider: "NASA Climate Kids", url: "https://climatekids.nasa.gov/", note: "Greenhouse effect, the carbon cycle and climate data made simple." },
        { type: "video", title: "Plate tectonics & earthquakes", provider: "YouTube · CrashCourse / FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "How plates move and why earthquakes happen." },
        { type: "interactive", title: "PhET: Greenhouse Effect", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/greenhouse-effect", note: "Add greenhouse gases and watch temperature respond." },
        { type: "reading", title: "NASA: Global Climate Change – Evidence & the Keeling Curve", provider: "NASA Global Climate Change", url: "https://climate.nasa.gov/evidence/", note: "Real CO₂ data, ice cores and warming evidence." },
        { type: "interactive", title: "TeachEngineering: Engineering design process", provider: "TeachEngineering", url: "https://www.teachengineering.org/", note: "Free design challenges with criteria and constraints." },
        { type: "interactive", title: "Khan Academy: Statistics – scatter plots & correlation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Bivariate data, correlation, outliers and trend lines." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "In undisturbed rock layers, the oldest rocks are usually:", options: ["At the top", "At the bottom", "In the middle", "Randomly placed"], answer: 1, explanation: "The law of superposition: lower layers were laid down first, so they're older." },
        { type: "mcq", difficulty: "easy", q: "Earthquakes happen mainly because of the movement of:", options: ["Ocean currents", "Tectonic plates", "Clouds", "The Moon"], answer: 1, explanation: "Plates moving and slipping at boundaries release energy as earthquakes." },
        { type: "tf", difficulty: "easy", q: "The greenhouse effect traps some heat near Earth's surface, keeping the planet warm enough for life.", answer: true, explanation: "A natural greenhouse effect is essential; the problem is extra greenhouse gases enhancing it." },
        { type: "mcq", difficulty: "easy", q: "The Keeling Curve mainly shows the rising level of which gas in the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], answer: 2, explanation: "It records the steady rise in atmospheric CO₂ since 1958." },
        { type: "mcq", difficulty: "medium", q: "Which seismic wave can travel through both solids and liquids and arrives first?", options: ["S-wave", "P-wave", "Surface wave", "Sound wave"], answer: 1, explanation: "P-waves (primary) are faster and pass through solids and liquids; S-waves can't travel through liquids." },
        { type: "tf", difficulty: "medium", q: "Melting ice reducing Earth's reflectivity, which causes more warming and more melting, is an example of a positive feedback loop.", answer: true, explanation: "Less ice = darker surface = more heat absorbed = more melting: the change amplifies itself." },
        { type: "mcq", difficulty: "medium", q: "A 'watershed' (drainage basin) is:", options: ["A place that stores drinking water", "The area of land that drains into a particular river or lake", "A type of cloud", "A water-treatment machine"], answer: 1, explanation: "All rain falling in a watershed flows toward the same river system." },
        { type: "mcq", difficulty: "medium", q: "First step of the engineering design process is usually to:", options: ["Build the final product", "Define the problem, criteria and constraints", "Sell the product", "Throw it away"], answer: 1, explanation: "You define what success looks like (criteria) and the limits (constraints) before designing." },
        { type: "short", difficulty: "medium", q: "In a simple Claim–Evidence–Reasoning (CER) explanation, what does each part contain?", answer: "Claim: a clear answer to the question. Evidence: the data or observations that support the claim. Reasoning: the scientific explanation linking the evidence to the claim (why the evidence supports it). Together they make a logical, defensible scientific argument.", explanation: "Claim = answer, Evidence = data, Reasoning = the science linking them." },
        { type: "mcq", difficulty: "hard", q: "In a predator–prey system, if the prey population suddenly grows, the predator population will most likely:", options: ["Immediately crash", "Increase later, as more food is available", "Stay exactly the same forever", "Disappear"], answer: 1, explanation: "More prey (food) lets predators increase after a delay — a feedback relationship that creates cycles." },
        { type: "short", difficulty: "hard", q: "Explain how ice cores let scientists learn about Earth's climate from thousands of years ago.", answer: "Snow falling each year traps tiny bubbles of the atmosphere as it compacts into ice, building up in layers. By drilling deep ice cores and analysing the trapped air bubbles, scientists can measure past concentrations of gases like CO₂, and chemical signatures (such as oxygen isotopes) reveal past temperatures. Deeper layers are older, so the core provides a year-by-year record of climate going back hundreds of thousands of years.", explanation: "Trapped air bubbles + layered ice = a direct archive of past atmosphere and temperature." },
        { type: "tf", difficulty: "hard", q: "A reliable scientific investigation should be repeatable and use a fair, representative sample to reduce bias.", answer: true, explanation: "Repeatability and representative sampling are central to reliable, unbiased data." },
        { type: "mcq", difficulty: "hard", q: "A scatter plot of data follows a curve that rises then levels off. This pattern is:", options: ["A perfect straight line", "Non-linear", "No relationship", "Only an outlier"], answer: 1, explanation: "A curved trend that isn't a straight line is a non-linear relationship." },
        { type: "long", difficulty: "hard", q: "Design a simple investigation to compare the water quality of two local streams. State what you would measure, how you would keep it fair and reliable, and how you would present and interpret your data.", answer: "Aim: compare the water quality of stream A and stream B. Measure several indicators at each site: pH, nitrate concentration (test strips/kit), temperature, dissolved oxygen, and turbidity/clarity. Fairness/reliability: sample at the same time of day, same depth, same method and equipment; take several samples at each site and repeat tests, then average; label samples clearly in a lab notebook. Present the data in a comparison table and bar charts for each indicator. Interpret: e.g. higher nitrates and lower oxygen suggest pollution (perhaps from farm runoff). Write a Claim–Evidence–Reasoning conclusion: claim which stream is healthier, cite the measured evidence, and reason using the science (e.g. high nitrates feed algae that lower oxygen, harming aquatic life). Note limitations and how more samples or sites would improve confidence.", explanation: "Strong answer names measurable indicators, controls variables, repeats for reliability, uses tables/graphs, and ends with a CER conclusion plus limitations." },
        { type: "mcq", difficulty: "hard", q: "When engineers consider the full 'life-cycle' of a product, they look at:", options: ["Only the selling price", "Raw materials, manufacturing, use AND disposal/recycling", "Only how it looks", "Only the first day of use"], answer: 1, explanation: "Life-cycle analysis weighs environmental impact from material extraction through manufacture, use and end-of-life disposal/recycling." }
      ]
    }
  ]
});
