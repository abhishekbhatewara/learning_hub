/* Grade 8 — Mastery & Extension
   PER-OBJECTIVE schema: each objective is { text, resources[], quiz[] }.
   Resources include curated free sources plus relevant 🐺 Wolves-classroom library items. */
window.CURRICULUM.grades.push({
  id: "grade-8",
  name: "Grade 8",
  tagline: "Mastery & Extension",
  color: "#5a4fcf",
  blurb: "Circulation, immunity, genetics & evolution; periodic trends, bonding & reactions; thermal physics, waves & energy; and climate, engineering & data science.",
  topics: [

    /* ================================================================ */
    {
      id: "g8-body",
      title: "Circulation, Immunity, Genetics & Evolution",
      subject: "Biology",
      icon: "🫀",
      summary:
        "Heart, blood and the lymphatic system; pathogens and immunity; the skeleton; Mendelian and complex inheritance; and the evidence for evolution by natural selection.",
      objectives: [

        {
          text: "Label the heart's chambers, valves and major vessels and trace the double circulation of blood.",
          resources: [
            { type: "reading", title: "CK-12: The heart & circulation", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Heart structure and double circulation." },
            { type: "interactive", title: "The human body systems study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-6780a55ada8881919ba84cbfb7664b87-the-human-body-system", note: "An interactive tutor on the body's organ systems. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Khan Academy: The circulatory system", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Chambers, valves and blood vessels." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which blood vessels carry blood AWAY from the heart?", options: ["Veins", "Arteries", "Capillaries", "Valves"], answer: 1, explanation: "Arteries carry blood away from the heart (usually at high pressure)." },
            { type: "short", difficulty: "hard", q: "Explain why blood flows through the heart in two separate circuits ('double circulation') and why the left ventricle has a thicker wall than the right.", answer: "Double circulation means blood passes through the heart twice per loop: the right side pumps deoxygenated blood to the lungs (pulmonary circuit) and the left side pumps oxygenated blood to the whole body (systemic circuit). Keeping them separate stops oxygen-rich and oxygen-poor blood mixing and keeps pressure high. The left ventricle is more muscular because it must generate much higher pressure to push blood all round the body, while the right only pushes to the nearby lungs.", explanation: "Separate circuits prevent mixing; the left ventricle works harder, so it's thicker." }
          ]
        },

        {
          text: "Compare arteries, veins and capillaries and identify the components of blood and their functions.",
          resources: [
            { type: "interactive", title: "Khan Academy: Blood & blood vessels", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Arteries, veins, capillaries and blood components." },
            { type: "reading", title: "CK-12: Blood & circulation", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "What's in blood and how vessels differ." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which blood component carries oxygen?", options: ["Platelets", "Plasma", "Red blood cells", "White blood cells"], answer: 2, explanation: "Red blood cells contain haemoglobin, which binds oxygen." },
            { type: "mcq", difficulty: "medium", q: "Capillaries are well suited to exchanging substances because they:", options: ["Have thick muscular walls", "Are one cell thick with a large surface area", "Carry only waste", "Have valves"], answer: 1, explanation: "Their very thin (one-cell) walls give short diffusion distances for exchange." }
          ]
        },

        {
          text: "Explain factors affecting heart rate and design a fair investigation into exercise and heart rate.",
          resources: [
            { type: "interactive", title: "Khan Academy: Circulation & exercise", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "How activity changes heart rate." },
            { type: "reading", title: "CK-12: Heart rate & exercise", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Why the heart speeds up during exercise." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "During exercise, heart rate usually:", options: ["Decreases", "Increases", "Stays exactly the same", "Stops"], answer: 1, explanation: "Muscles need more oxygen and glucose during exercise, so the heart beats faster to deliver it." },
            { type: "short", difficulty: "medium", q: "Name the independent and dependent variables in an investigation of how exercise affects heart rate, and one variable you would control.", answer: "Independent variable: the level/duration of exercise (e.g. minutes of step-ups). Dependent variable: heart rate in beats per minute. Controlled variable (any one): same person, same starting rest period, same way of measuring pulse, same room temperature.", explanation: "Change the exercise (IV), measure heart rate (DV), keep other conditions the same." }
          ]
        },

        {
          text: "Relate causes, prevention and treatment of coronary heart disease, hypertension, angina and heart failure.",
          resources: [
            { type: "reading", title: "CK-12: Heart disease & health", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Causes and prevention of heart disease." },
            { type: "video", title: "What actually causes high cholesterol? (TED-Ed, 6 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=EixIyh1gshM", note: "Cholesterol and the risk of heart disease." },
            { type: "reading", title: "Common sweetener linked to higher stroke risk", provider: "🐺 Wolves classroom · earth.com", url: "https://www.earth.com/news/common-sweetener-may-directly-damage-the-brain/", note: "Diet, blood vessels and cardiovascular risk." },
            { type: "video", title: "The science behind 'super agers' (26 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=WKb5PE-XM4I", note: "What lifestyle does for long-term heart and brain health." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A diet high in saturated fat can lead to fatty deposits narrowing the arteries, increasing the risk of:", options: ["Scurvy", "Coronary heart disease", "Rickets", "Anaemia"], answer: 1, explanation: "Fatty plaques in the coronary arteries reduce blood flow to the heart muscle — coronary heart disease." },
            { type: "tf", difficulty: "medium", q: "Regular exercise and not smoking lower the risk of coronary heart disease.", answer: true, explanation: "Both protect the heart and blood vessels, reducing cardiovascular risk." }
          ]
        },

        {
          text: "Describe the lymphatic system and its roles in fluid balance and immune defence.",
          resources: [
            { type: "reading", title: "CK-12: The lymphatic system", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Fluid balance and immune roles." },
            { type: "interactive", title: "Khan Academy: The lymphatic system", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Fluid balance and immune defence." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "One key role of the lymphatic system is to:", options: ["Pump blood around the body", "Return excess tissue fluid to the blood and help fight infection", "Digest food", "Produce bile"], answer: 1, explanation: "The lymphatic system drains tissue fluid back to the blood and carries white blood cells that defend the body." },
            { type: "tf", difficulty: "easy", q: "Lymph nodes contain white blood cells that help fight infection.", answer: true, explanation: "Lymph nodes filter lymph and are full of white blood cells that attack pathogens." }
          ]
        },

        {
          text: "Classify pathogens (bacteria, viruses, fungi, protozoa, parasites) and describe routes of disease transmission.",
          resources: [
            { type: "interactive", title: "Khan Academy: Pathogens & disease", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "The main pathogen groups and transmission." },
            { type: "reading", title: "The greatest parasite is right in front of you", provider: "🐺 Wolves classroom · ScienceAlert", url: "https://www.sciencealert.com/the-greatest-parasite-is-right-in-front-of-you-and-its-dangerous", note: "A real-world look at parasites as a pathogen group." },
            { type: "reading", title: "CK-12: Pathogens & transmission", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Types of pathogen and routes of infection." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Viruses are living cells that can reproduce on their own.", answer: false, explanation: "Viruses are not cells; they can only reproduce inside a host's cells." },
            { type: "match", difficulty: "medium", q: "Match each pathogen type to an example or feature.", pairs: [["Bacteria","Single-celled; some cause food poisoning"],["Virus","Not a cell; needs a host to reproduce"],["Fungi","Cause athlete's foot and ringworm"],["Protozoa","Single-celled; cause malaria"]], explanation: "Different pathogen groups cause different diseases and need different treatments." }
          ]
        },

        {
          text: "Explain the body's defences, phagocytosis, and the difference between active and passive immunity.",
          resources: [
            { type: "reading", title: "CK-12: The immune system", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Defences, white blood cells and immunity." },
            { type: "interactive", title: "Khan Academy: Defence against disease", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Barriers, phagocytosis and vaccines." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "White blood cells that engulf and 'eat' pathogens carry out:", options: ["Photosynthesis", "Phagocytosis", "Respiration", "Digestion"], answer: 1, explanation: "Phagocytes surround and digest pathogens — phagocytosis." },
            { type: "tf", difficulty: "medium", q: "A vaccine gives active immunity by training the body to make its own antibodies and memory cells.", answer: true, explanation: "Vaccines expose the body to a safe form of a pathogen so it learns to respond — active immunity." }
          ]
        },

        {
          text: "Classify bones, joints and muscle types in the human body.",
          resources: [
            { type: "reading", title: "CK-12: Skeleton, joints & muscles", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Bone, joint and muscle types." },
            { type: "interactive", title: "Khan Academy: Skeleton, joints & muscles", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Bone, joint and muscle types." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A joint that allows movement in nearly all directions, like the shoulder, is a:", options: ["Hinge joint", "Ball-and-socket joint", "Fixed joint", "Pivot joint"], answer: 1, explanation: "Ball-and-socket joints (shoulder, hip) allow rotation in many directions; hinge joints (elbow, knee) move one way." },
            { type: "tf", difficulty: "medium", q: "Skeletal muscles often work in antagonistic pairs, one contracting while the other relaxes.", answer: true, explanation: "E.g. the biceps contracts to bend the arm while the triceps relaxes, and vice versa." }
          ]
        },

        {
          text: "Use Punnett squares to predict inheritance, including codominance and incomplete dominance, and interpret a pedigree.",
          resources: [
            { type: "interactive", title: "Khan Academy: Mendelian genetics & Punnett squares", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology/classical-genetics", note: "Worked Punnett squares with practice." },
            { type: "podcast", title: "Orange Cat Lovers, Rise Up – Short Wave", provider: "🐺 Wolves classroom · Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/orange-cat-lovers-rise-up/id1482575855?i=1000708659195", note: "The genetics behind orange cat coat colour — inheritance in action." },
            { type: "reading", title: "Gene-editing tailored to rare disorders", provider: "🐺 Wolves classroom · NYTimes", url: "https://www.nytimes.com/2025/05/15/health/gene-editing-personalized-rare-disorders.html?unlocked_article_code=1.HU8.o_m0.hUzjq5_8hv8_", note: "How scientists edit genes — cutting-edge genetics and inheritance." },
            { type: "reading", title: "CK-12: Inheritance & Punnett squares", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Dominant/recessive, codominance and pedigrees." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "In a cross between a tall (TT) and a short (tt) pea plant, the offspring (Tt) are all:", options: ["Short", "Tall", "Half tall, half short", "Medium height"], answer: 1, explanation: "T is dominant, so all Tt offspring show the tall phenotype." },
            { type: "short", difficulty: "hard", q: "A monohybrid cross is Bb × Bb (B = brown eyes, dominant; b = blue). State the genotype and phenotype ratios of the offspring.", answer: "The Punnett square gives BB : Bb : bb = 1 : 2 : 1 (genotype ratio). Phenotype: 3 brown-eyed : 1 blue-eyed (BB and Bb both show brown, bb shows blue). So a 3:1 phenotype ratio and 1:2:1 genotype ratio.", explanation: "Bb × Bb → 1 BB, 2 Bb, 1 bb; brown:blue = 3:1." }
          ]
        },

        {
          text: "Define mutation and outline the evidence for evolution (fossils, anatomy/homology, vestigial structures, DNA).",
          resources: [
            { type: "interactive", title: "PhET: Natural Selection", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/natural-selection", note: "Watch traits evolve as the environment changes." },
            { type: "reading", title: "Fossilised claw prints rewrite the amniote timeline", provider: "🐺 Wolves classroom · The Guardian", url: "https://www.theguardian.com/environment/2025/may/14/fossilised-claw-prints-australia-amniotes-fossils", note: "Fossils as living evidence for evolution." },
            { type: "video", title: "Investigating the rise of early-onset cancer (documentary, 45 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=EQgP153WUUM", note: "Cancer and mutation — how changes in DNA can affect cells." },
            { type: "podcast", title: "Love Fruit? Thank Dinosaur Mass Extinction – Short Wave", provider: "🐺 Wolves classroom · Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/love-fruit-thank-dinosaur-mass-extinction/id1482575855?i=1000699108203", note: "Extinction, fossils and how life changes over time." }
          ],
          quiz: [
            { type: "tf", difficulty: "hard", q: "Vestigial structures (like the human appendix or whale hip bones) are evidence for evolution.", answer: true, explanation: "Reduced, no-longer-used structures suggest descent from ancestors that used them." },
            { type: "mcq", difficulty: "medium", q: "A change in the DNA base sequence of an organism is called a:", options: ["Mutation", "Mitosis", "Vaccine", "Vector"], answer: 0, explanation: "A mutation is a change in DNA; it creates the variation that evolution can act on." }
          ]
        },

        {
          text: "Explain natural selection and how variation, selection and isolation can lead to speciation.",
          resources: [
            { type: "interactive", title: "PhET: Natural Selection", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/natural-selection", note: "Change the environment and watch traits evolve." },
            { type: "podcast", title: "All of Life Has a Common Ancestor – Short Wave", provider: "🐺 Wolves classroom · Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/short-wave/id1482575855?i=1000684312471", note: "Common ancestry — the deep connection between all living things." },
            { type: "video", title: "The surprising reason zebras have stripes (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=QJB0nmEjbDY", note: "Adaptation and selection in a real animal." },
            { type: "video", title: "Why are there so many kinds of dogs? (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=ikxGwImO5sc", note: "Selective breeding — selection sped up by humans." }
          ],
          quiz: [
            { type: "long", difficulty: "hard", q: "A population of beetles lives on dark soil; most are brown but a few are green. Birds eat the most visible beetles. Explain, using natural selection, how the population might become mostly brown, and the role of variation and inheritance.", answer: "There is natural variation in beetle colour (some brown, some green). On dark soil the green beetles stand out and are eaten more by birds, while well-camouflaged brown beetles survive more often (selection pressure: predation). Surviving brown beetles reproduce and pass brown-colour alleles to their offspring (inheritance). Over many generations the proportion of brown beetles rises and green becomes rare. So variation provides the differences, predation selects the fittest, and inheritance passes the advantageous trait on.", explanation: "Variation → selection pressure → survival of the camouflaged → inheritance → population shifts." },
            { type: "mcq", difficulty: "hard", q: "Which is the best example of how new species can form (speciation)?", options: ["A single animal learns a new behaviour", "Two populations become geographically isolated, accumulate different changes, and can no longer interbreed", "An animal grows larger during its life", "A plant is moved to a new pot"], answer: 1, explanation: "Isolation + different selection + accumulated genetic change over time can split one species into two." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "g8-bonding",
      title: "Periodic Trends, Bonding & Reactions",
      subject: "Chemistry",
      icon: "🧪",
      summary:
        "Periodic trends, the octet rule, ionic/metallic/covalent bonding, giant structures, intermolecular forces, and chemical reactions including balancing equations and pH.",
      objectives: [

        {
          text: "Describe and explain periodic trends in atomic/ionic radius, ionisation energy, electronegativity and metallic character.",
          resources: [
            { type: "reading", title: "CK-12: The periodic table & trends", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Trends across periods and down groups." },
            { type: "interactive", title: "Khan Academy: Periodic trends", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Patterns in the periodic table." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Across a period (left to right), atomic radius generally:", options: ["Increases", "Decreases", "Stays the same", "Doubles"], answer: 1, explanation: "More protons pull the same shell of electrons closer, so atoms get smaller across a period." },
            { type: "mcq", difficulty: "hard", q: "Down a group, ionisation energy generally decreases mainly because:", options: ["Atoms have fewer protons", "The outer electron is further from the nucleus and shielded by inner shells", "Atoms gain charge", "Bonds get stronger"], answer: 1, explanation: "The outer electron is further out and shielded, so it's held less tightly and easier to remove." }
          ]
        },

        {
          text: "Link an element's electronic configuration to its position in the periodic table.",
          resources: [
            { type: "reading", title: "CK-12: Electron configuration", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "How electron shells map to the table." },
            { type: "interactive", title: "Khan Academy: Electron configurations", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Configurations and periodic position." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "An element with 7 electrons in its outer shell is in group:", options: ["Group 1", "Group 2", "Group 7", "Group 0"], answer: 2, explanation: "The number of outer-shell electrons gives the group number — here, group 7 (the halogens)." },
            { type: "tf", difficulty: "easy", q: "Elements in the same group have the same number of outer-shell (valence) electrons.", answer: true, explanation: "That shared outer-electron count is why a group's elements react similarly." }
          ]
        },

        {
          text: "State the octet rule and use it to explain ionic, covalent and metallic bonding.",
          resources: [
            { type: "interactive", title: "PhET: Build a Molecule", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/build-a-molecule", note: "Build molecules and explore bonding." },
            { type: "reading", title: "CK-12: Chemical bonding", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Why atoms bond to fill their outer shell." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Ionic bonds form between:", options: ["Two metals", "Two non-metals", "A metal and a non-metal", "Noble gases"], answer: 2, explanation: "A metal loses electrons to a non-metal, forming oppositely charged ions that attract." },
            { type: "tf", difficulty: "easy", q: "In a covalent bond, atoms share electrons.", answer: true, explanation: "Covalent bonding is the sharing of electron pairs between non-metal atoms." }
          ]
        },

        {
          text: "Predict ion charges and write/name simple ionic compounds; relate ionic properties to structure.",
          resources: [
            { type: "reading", title: "CK-12: Ionic compounds", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Forming ions and ionic properties." },
            { type: "interactive", title: "Khan Academy: Ionic compounds", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Charges, names and properties." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Ionic compounds conduct electricity when:", options: ["Solid", "Molten or dissolved in water", "Never", "Only as a gas"], answer: 1, explanation: "Ions must be free to move; locked in a solid they can't, but when molten or in solution they carry charge." },
            { type: "short", difficulty: "medium", q: "Explain why ionic compounds such as sodium chloride have very high melting points.", answer: "Ionic compounds form a giant lattice of oppositely charged ions held by strong electrostatic forces in all directions. A great deal of energy is needed to overcome these many strong forces, so they have very high melting and boiling points.", explanation: "Strong forces throughout a giant lattice = lots of energy to melt." }
          ]
        },

        {
          text: "Explain metallic bonding with the 'sea of electrons' model and link it to the properties of metals.",
          resources: [
            { type: "interactive", title: "Khan Academy: Metallic bonding", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "The sea of delocalised electrons." },
            { type: "reading", title: "CK-12: Metallic bonding", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Why metals conduct and bend." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Why do metals conduct electricity?", options: ["They have a giant covalent structure", "They contain delocalised (free) electrons", "They are made of ions only", "They have hydrogen bonds"], answer: 1, explanation: "The 'sea' of delocalised electrons can move and carry charge." },
            { type: "tf", difficulty: "medium", q: "Metals are malleable because layers of ions can slide while the sea of electrons holds them together.", answer: true, explanation: "Sliding layers + mobile electrons let metals be hammered into shape without shattering." }
          ]
        },

        {
          text: "Draw Lewis (dot-and-cross) structures for simple molecules with single, double and triple bonds.",
          resources: [
            { type: "interactive", title: "PhET: Build a Molecule", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/filter?subjects=chemistry", note: "Assemble molecules and see shared electrons." },
            { type: "interactive", title: "Khan Academy: Lewis diagrams", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Dot-and-cross structures with practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A double covalent bond involves sharing how many electrons in total?", options: ["1", "2", "4", "6"], answer: 2, explanation: "A double bond is two shared pairs = 4 electrons (a triple bond is 6)." },
            { type: "short", difficulty: "medium", q: "Describe the dot-and-cross diagram of a hydrogen molecule, H₂.", answer: "Two hydrogen atoms each have one electron. They share one pair of electrons between them (one dot and one cross in the overlap), forming a single covalent bond. Sharing gives each hydrogen a full first shell of 2 electrons.", explanation: "H₂ = one shared pair (single bond), filling each atom's outer shell." }
          ]
        },

        {
          text: "Distinguish polar from non-polar bonds/molecules and name simple covalent compounds using prefixes.",
          resources: [
            { type: "interactive", title: "PhET: Molecule Shapes & Polarity", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/molecule-shapes", note: "Electronegativity and polarity." },
            { type: "interactive", title: "Khan Academy: Covalent compounds", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Naming molecules with prefixes." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The covalent compound CO₂ is named:", options: ["Carbon oxide", "Carbon dioxide", "Carbonate", "Dicarbon oxide"], answer: 1, explanation: "Prefix 'di-' shows two oxygens: carbon dioxide." },
            { type: "mcq", difficulty: "medium", q: "A bond between two identical atoms (e.g. Cl–Cl) is:", options: ["Polar", "Non-polar", "Ionic", "Metallic"], answer: 1, explanation: "Identical atoms share electrons equally, so the bond has no charge separation — non-polar." }
          ]
        },

        {
          text: "Compare ionic and covalent compounds and describe giant covalent structures (diamond, graphite, silicon dioxide).",
          resources: [
            { type: "reading", title: "CK-12: Giant covalent structures", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Diamond, graphite and silicon dioxide." },
            { type: "interactive", title: "Khan Academy: Bonding & structure", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Comparing ionic, covalent and giant structures." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "Diamond and graphite are both made only of carbon, yet diamond is hard and graphite is soft. Explain why, using their structures.", answer: "Both are giant covalent structures of carbon. In diamond each carbon is bonded to four others in a rigid 3-D network, making it extremely hard. In graphite each carbon bonds to only three others, forming flat layers held together by weak forces, so the layers slide — making graphite soft and slippery. Graphite also has delocalised electrons (so it conducts); diamond does not.", explanation: "Same atoms, different arrangement: 3-D network (hard) vs sliding layers (soft)." },
            { type: "long", difficulty: "hard", q: "Compare the structure, bonding and typical properties of an ionic compound (e.g. NaCl) with a small covalent molecular substance (e.g. CO₂). Refer to melting point, electrical conductivity and the particles present.", answer: "Ionic (NaCl): a giant lattice of positive and negative ions held by strong electrostatic forces. High melting point (many strong forces to break). Conducts when molten or dissolved (free ions) but not as a solid. Particles: ions. Covalent molecular (CO₂): small separate molecules with strong covalent bonds inside each molecule but only weak intermolecular forces between molecules. Low melting/boiling point (only weak forces between molecules), so often a gas or liquid. Does not conduct (no free ions or electrons). Particles: molecules. Key difference: giant ionic lattice (strong throughout) vs small molecules held weakly together.", explanation: "Contrast giant ionic lattice (strong, high m.p., conducts when molten/aqueous) with small molecules (weak forces, low m.p., non-conducting)." }
          ]
        },

        {
          text: "Identify intermolecular forces (London dispersion, dipole–dipole, hydrogen bonding) and explain hydrogen bonding in water.",
          resources: [
            { type: "reading", title: "CK-12: Intermolecular forces & hydrogen bonding", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "The forces between molecules." },
            { type: "video", title: "H₂O: The Molecule That Made Us (documentary, 54 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=NSzdOc_oJeg", note: "Why water's special properties shaped life on Earth." }
          ],
          quiz: [
            { type: "tf", difficulty: "hard", q: "Water has an unusually high boiling point for its size because of hydrogen bonding between its molecules.", answer: true, explanation: "Hydrogen bonds (a strong intermolecular force) need extra energy to break, raising water's boiling point." },
            { type: "mcq", difficulty: "medium", q: "Compared with covalent bonds inside a molecule, intermolecular forces between molecules are:", options: ["Much stronger", "About the same", "Much weaker", "Always ionic"], answer: 2, explanation: "Intermolecular forces are weaker than the covalent bonds within molecules, which is why molecular substances melt easily." }
          ]
        },

        {
          text: "Distinguish physical from chemical changes, apply conservation of mass, and balance chemical equations.",
          resources: [
            { type: "interactive", title: "Khan Academy: Balancing chemical equations", provider: "Khan Academy", url: "https://www.khanacademy.org/science/chemistry", note: "Practice balancing with conservation of mass." },
            { type: "reading", title: "CK-12: Physical & chemical change", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Conservation of mass and balancing." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Balance: H₂ + O₂ → H₂O. What coefficient goes in front of H₂O?", answer: "2", explanation: "2H₂ + O₂ → 2H₂O balances atoms: 4 H and 2 O on each side." },
            { type: "mcq", difficulty: "hard", q: "Which is a chemical (not physical) change?", options: ["Ice melting", "Sugar dissolving", "Iron rusting", "Water boiling"], answer: 2, explanation: "Rusting forms a new substance (iron oxide); the others are reversible physical changes." }
          ]
        },

        {
          text: "Classify reactions as exothermic or endothermic and use the pH scale and indicators.",
          resources: [
            { type: "reading", title: "CK-12: Energy changes, acids & pH", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/chemistry/", note: "Exothermic/endothermic reactions and pH." },
            { type: "video", title: "What is entropy? (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=YM-uykVfq_E", note: "Enrichment: energy spreading out in reactions and changes." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A solution with pH 2 is:", options: ["Strongly acidic", "Neutral", "Weakly alkaline", "Strongly alkaline"], answer: 0, explanation: "pH below 7 is acidic; pH 2 is strongly acidic." },
            { type: "mcq", difficulty: "hard", q: "A reaction that releases heat to the surroundings (temperature rises) is:", options: ["Endothermic", "Exothermic", "Neutral", "Reversible only"], answer: 1, explanation: "Exothermic reactions give out energy, warming the surroundings (e.g. combustion)." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "g8-thermal-waves",
      title: "Thermal Physics, Waves, Forces & Energy",
      subject: "Physics",
      icon: "🌡️",
      summary:
        "Kinetic theory and temperature, thermal expansion and thermometers; transverse/longitudinal and EM/mechanical waves with v = fλ; sound and its uses; Newton's laws, momentum and energy.",
      objectives: [

        {
          text: "Use the kinetic theory of matter and Brownian motion to explain the states of matter.",
          resources: [
            { type: "interactive", title: "PhET: States of Matter – Basics", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/states-of-matter-basics", note: "Heat particles and watch states change." },
            { type: "interactive", title: "Khan Academy: States of matter & kinetic theory", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Particle model of solids, liquids and gases." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "In which state are particles most tightly packed and only vibrating?", options: ["Gas", "Liquid", "Solid", "Plasma"], answer: 2, explanation: "Solids have closely packed particles that vibrate in fixed positions." },
            { type: "tf", difficulty: "medium", q: "Brownian motion (the random jiggling of tiny particles) is evidence that matter is made of moving particles.", answer: true, explanation: "Pollen grains jitter because they're hit by fast-moving, invisible particles — supporting kinetic theory." }
          ]
        },

        {
          text: "Convert between Celsius, Fahrenheit and Kelvin and distinguish heat from temperature.",
          resources: [
            { type: "interactive", title: "Khan Academy: Temperature & heat", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Temperature scales and the difference from heat." },
            { type: "interactive", title: "PhET: Energy & temperature", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/states-of-matter-basics", note: "See how heating changes particle energy." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Convert 25 °C to Kelvin.", answer: "298", explanation: "K = °C + 273, so 25 + 273 = 298 K." },
            { type: "tf", difficulty: "medium", q: "Heat and temperature mean exactly the same thing.", answer: false, explanation: "Temperature measures how hot something is (average particle energy); heat is energy transferred between objects at different temperatures." }
          ]
        },

        {
          text: "Explain thermal expansion in solids, liquids and gases and its everyday applications.",
          resources: [
            { type: "interactive", title: "Khan Academy: Thermal expansion", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Why materials expand when heated." },
            { type: "interactive", title: "PhET: States of Matter", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/states-of-matter-basics", note: "Heat particles and watch matter expand." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Gaps are left between sections of railway track to allow for:", options: ["Water drainage", "Thermal expansion in hot weather", "Faster trains", "Electrical insulation"], answer: 1, explanation: "Rails expand when hot; gaps stop them buckling — an application of thermal expansion." },
            { type: "mcq", difficulty: "easy", q: "When most substances are heated, they:", options: ["Contract", "Expand", "Vanish", "Freeze"], answer: 1, explanation: "Heating makes particles move more and take up more space, so materials usually expand." }
          ]
        },

        {
          text: "Compare thermometers (liquid-in-glass, thermocouple, thermistor, infrared, bimetallic strip) and alcohol vs mercury.",
          resources: [
            { type: "interactive", title: "Khan Academy: Measuring temperature", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Different types of thermometer." },
            { type: "interactive", title: "The Physics Classroom: Thermometers & heat", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/thermalP", note: "How thermometers work." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which thermometer measures temperature without touching the object, e.g. for body temperature from a distance?", options: ["Liquid-in-glass", "Infrared", "Bimetallic strip", "Mercury-in-glass"], answer: 1, explanation: "Infrared thermometers detect heat radiation, so they don't need contact." },
            { type: "tf", difficulty: "medium", q: "Alcohol is often used instead of mercury in thermometers because it is less toxic and works at lower temperatures.", answer: true, explanation: "Alcohol freezes at a much lower temperature than mercury and is safer if the thermometer breaks." }
          ]
        },

        {
          text: "Distinguish transverse from longitudinal waves and mechanical from electromagnetic waves.",
          resources: [
            { type: "interactive", title: "The Physics Classroom: Waves", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/waves", note: "Transverse vs longitudinal, mechanical vs EM." },
            { type: "interactive", title: "PhET: Wave on a String", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/wave-on-a-string", note: "See how a transverse wave behaves." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Sound is a:", options: ["Transverse wave", "Longitudinal wave", "Electromagnetic wave", "Stationary object"], answer: 1, explanation: "Sound is longitudinal: particles vibrate back and forth along the direction of travel." },
            { type: "long", difficulty: "hard", q: "Compare transverse and longitudinal waves. Give the key difference, one example of each, and explain what wavelength, frequency and amplitude represent.", answer: "In a transverse wave the oscillations are at right angles (perpendicular) to the direction of travel — e.g. light or a wave on a rope. In a longitudinal wave the particles vibrate back and forth along (parallel to) the direction of travel, making compressions and rarefactions — e.g. sound. Wavelength is the length of one complete wave. Frequency is the number of waves passing a point each second (hertz) — it sets pitch or colour. Amplitude is the maximum displacement from rest — it relates to loudness or brightness (the wave's energy).", explanation: "Transverse = perpendicular (light); longitudinal = parallel (sound). Wavelength = one wave; frequency = waves/second; amplitude = size/energy." }
          ]
        },

        {
          text: "Define wavelength, frequency, time period and wave speed and use v = fλ and v = λ/T.",
          resources: [
            { type: "interactive", title: "The Physics Classroom: The wave equation", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/waves", note: "Using v = fλ in calculations." },
            { type: "interactive", title: "Waves study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-679aea0f60a48191814976ada31719aa-waves", note: "Practise wave properties and calculations. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A wave has frequency 5 Hz and wavelength 2 m. Use v = fλ to find its speed (m/s).", answer: "10", explanation: "v = f × λ = 5 × 2 = 10 m/s." },
            { type: "numeric", difficulty: "medium", q: "A wave travels at 20 m/s with a wavelength of 4 m. Find its frequency (Hz).", answer: "5", explanation: "f = v ÷ λ = 20 ÷ 4 = 5 Hz." }
          ]
        },

        {
          text: "Describe sound as a longitudinal wave, explain echoes, and compare its speed in different media.",
          resources: [
            { type: "interactive", title: "The Physics Classroom: Sound waves", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/sound", note: "How sound travels, echoes and speed in media." },
            { type: "interactive", title: "PhET: Waves Intro (sound)", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/waves-intro", note: "Compressions, rarefactions and echoes." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Sound cannot travel through a vacuum because it needs particles to carry the vibration.", answer: true, explanation: "Sound is mechanical, so it needs a medium; light (EM) can travel through a vacuum." },
            { type: "mcq", difficulty: "medium", q: "Which list is in order of increasing speed of sound?", options: ["Solid < liquid < gas", "Gas < liquid < solid", "Liquid < solid < gas", "They are all equal"], answer: 1, explanation: "Sound travels fastest where particles are closest: gas < liquid < solid." }
          ]
        },

        {
          text: "Explain ultrasound, infrasound, SONAR, radar and medical sound applications, and solve time–distance sound problems.",
          resources: [
            { type: "interactive", title: "The Physics Classroom: Uses of sound", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/sound", note: "Ultrasound, SONAR and echo problems." },
            { type: "interactive", title: "Khan Academy: Sound applications", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Ultrasound and echo calculations." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "Explain how a ship's SONAR uses sound to measure the depth of the sea floor.", answer: "SONAR sends a pulse of sound (ultrasound) down through the water. The sound reflects off the sea floor and returns as an echo. By measuring the time for the echo to return and knowing the speed of sound in water, depth = (speed × time) ÷ 2 (dividing by two because the sound travels down and back).", explanation: "Send a pulse, time the echo, use speed × time ÷ 2 for the one-way depth." },
            { type: "numeric", difficulty: "hard", q: "A sound takes 4 s to echo back from a cliff. If the speed of sound is 340 m/s, how far away is the cliff (m)?", answer: "680", explanation: "Total distance = 340 × 4 = 1360 m; the cliff is half that (there and back), so 680 m." }
          ]
        },

        {
          text: "State Newton's three laws and apply F = ma and momentum p = mv (and the idea of impulse).",
          resources: [
            { type: "interactive", title: "The Physics Classroom: Newton's Laws", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/newtlaws", note: "F = ma, momentum and the three laws." },
            { type: "interactive", title: "Khan Academy: Forces & Newton's laws", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Applying F = ma and momentum." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Using F = ma, find the force on a 4 kg mass accelerating at 3 m/s² (in N).", answer: "12", explanation: "F = m × a = 4 × 3 = 12 N." },
            { type: "mcq", difficulty: "hard", q: "Newton's third law is best stated as:", options: ["Objects stay still unless pushed", "Force = mass × acceleration", "For every action there is an equal and opposite reaction", "Energy cannot be created or destroyed"], answer: 2, explanation: "Forces come in pairs: A pushes B, B pushes back on A equally and oppositely." }
          ]
        },

        {
          text: "Apply momentum/impulse ideas to safety engineering such as crumple zones.",
          resources: [
            { type: "interactive", title: "Khan Academy: Momentum & impulse", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "How impulse explains safety features." },
            { type: "interactive", title: "The Physics Classroom: Momentum & collisions", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/momentum", note: "Impulse, momentum and safety engineering." }
          ],
          quiz: [
            { type: "numeric", difficulty: "hard", q: "Find the momentum of a 2 kg ball moving at 6 m/s, using p = mv (units kg·m/s).", answer: "12", explanation: "p = m × v = 2 × 6 = 12 kg·m/s." },
            { type: "short", difficulty: "hard", q: "Explain how crumple zones in cars use the idea of impulse/momentum to reduce injury in a crash.", answer: "In a crash the car's momentum must change to zero. Impulse = force × time = change in momentum. A crumple zone increases the time over which the car and passengers stop by crumpling gradually. Because the change in momentum is fixed, increasing the stopping time reduces the force experienced. A smaller force means less injury.", explanation: "Longer stopping time → smaller force for the same momentum change → safer." }
          ]
        },

        {
          text: "Identify energy forms, describe energy transfer and conservation, and calculate efficiency.",
          resources: [
            { type: "interactive", title: "Khan Academy: Energy & efficiency", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Energy forms, transfers and efficiency." },
            { type: "interactive", title: "Energy study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-6761430f8cb88191ab9bd3de2bbc6ee2-energy", note: "A tutor bot to explore energy forms and transfers. (Needs a ChatGPT login.)" },
            { type: "reading", title: "Solar superpowers, wind warriors & hydro heroes", provider: "🐺 Wolves classroom · United Nations", url: "https://www.un.org/en/climatechange/how-communities-are-embracing-renewable-energy", note: "How communities turn energy resources into electricity." },
            { type: "video", title: "Power Trip: The Story of Energy (documentary, 49 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=-35IXfS7cKg", note: "How energy powers transport and society." },
            { type: "reading", title: "Renewable energy – powering a safer future", provider: "🐺 Wolves classroom · United Nations", url: "https://www.un.org/en/climatechange/raising-ambition/renewable-energy", note: "Where our energy comes from and where it's going." }
          ],
          quiz: [
            { type: "numeric", difficulty: "hard", q: "A machine takes in 200 J of energy and does 150 J of useful work. What is its efficiency as a percentage?", answer: "75", explanation: "Efficiency = useful ÷ input × 100 = 150 ÷ 200 × 100 = 75%." },
            { type: "mcq", difficulty: "medium", q: "Energy cannot be created or destroyed, only:", options: ["Increased", "Transferred or transformed", "Deleted", "Frozen"], answer: 1, explanation: "Conservation of energy: it changes form or moves, but the total stays the same." }
          ]
        },

        {
          text: "Describe optics basics: how prisms and lenses bend light, the spectrum, and the link between frequency and energy.",
          resources: [
            { type: "interactive", title: "PhET: Bending Light", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/bending-light", note: "How light bends and splits into colours." },
            { type: "interactive", title: "Khan Academy: Light & optics", provider: "Khan Academy", url: "https://www.khanacademy.org/science/physics", note: "Lenses, prisms and the EM spectrum." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "When white light passes through a prism it splits into a spectrum because different colours:", options: ["Have the same wavelength", "Are refracted (bent) by different amounts", "Travel at the same speed in glass", "Are absorbed by the prism"], answer: 1, explanation: "Different wavelengths bend by different amounts (dispersion), so colours separate." },
            { type: "tf", difficulty: "medium", q: "Higher-frequency light (like violet) carries more energy than lower-frequency light (like red).", answer: true, explanation: "Energy increases with frequency across the spectrum." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "g8-earth-engineering",
      title: "Climate, Engineering & Data Science",
      subject: "Earth & Data",
      icon: "🌐",
      summary:
        "Geologic time and plate tectonics, the water cycle and water quality, climate change and feedback loops, systems thinking, the engineering design process, and data science.",
      objectives: [

        {
          text: "Read rock layers and the geologic time scale and explain how dating evidence orders Earth's history.",
          resources: [
            { type: "interactive", title: "NASA: Evidence & Earth's history", provider: "NASA Global Climate Change", url: "https://climate.nasa.gov/evidence/", note: "How scientists read Earth's past from physical evidence." },
            { type: "interactive", title: "Earth's structure study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-67726005ceb8819191dc29a431bca1b1-earth-s-structure-bot", note: "A tutor bot on Earth's layers and structure. (Needs a ChatGPT login.)" },
            { type: "reading", title: "It once rained on Earth for a million years", provider: "🐺 Wolves classroom · History Facts", url: "https://historyfacts.com/science-industry/fact/rained-on-earth-for-a-million-years/", note: "A dramatic chapter of deep geologic time — the Carnian Pluvial Event." },
            { type: "interactive", title: "PhET: Plate Tectonics", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/plate-tectonics", note: "How plates move and reshape the Earth." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "In undisturbed rock layers, the oldest rocks are usually:", options: ["At the top", "At the bottom", "In the middle", "Randomly placed"], answer: 1, explanation: "The law of superposition: lower layers were laid down first, so they're older." },
            { type: "mcq", difficulty: "medium", q: "Using the law of superposition, scientists can work out the ___ of rock layers.", options: ["Colour", "Relative age", "Weight", "Temperature"], answer: 1, explanation: "Superposition gives the relative age — which layers are older or younger than others." }
          ]
        },

        {
          text: "Describe plate tectonics and explain earthquakes, including P-waves and S-waves.",
          resources: [
            { type: "video", title: "Earthquake Science, and the disaster that created it (8 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=XOCxNVDiOnE", note: "How earthquakes work and how we study them." },
            { type: "video", title: "Why are earthquakes so hard to predict? (TED-Ed, 4 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=jhRuUoTnA6g", note: "Plate movement and the science of seismic prediction." },
            { type: "video", title: "Why Iceland's lava is so hard to control (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=8H--GLt3h8I", note: "Volcanism at a plate boundary — tectonics in action." },
            { type: "video", title: "How does the Richter Scale work? (4 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=NaNw9LHq9dc", note: "Measuring the strength of earthquakes." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Earthquakes happen mainly because of the movement of:", options: ["Ocean currents", "Tectonic plates", "Clouds", "The Moon"], answer: 1, explanation: "Plates moving and slipping at boundaries release energy as earthquakes." },
            { type: "mcq", difficulty: "medium", q: "Which seismic wave can travel through both solids and liquids and arrives first?", options: ["S-wave", "P-wave", "Surface wave", "Sound wave"], answer: 1, explanation: "P-waves (primary) are faster and pass through solids and liquids; S-waves can't travel through liquids." }
          ]
        },

        {
          text: "Explain interactions between Earth's spheres and outline the quantitative water cycle and watersheds.",
          resources: [
            { type: "interactive", title: "NASA Climate Kids: The water cycle", provider: "NASA Climate Kids", url: "https://climatekids.nasa.gov/", note: "How water moves between Earth's systems." },
            { type: "video", title: "Why are there two tides a day? (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=mpRJhhbKLFc", note: "How the Moon and oceans (hydrosphere) interact." },
            { type: "reading", title: "A massive underground ocean 700 km below the surface", provider: "🐺 Wolves classroom · Economic Times", url: "https://economictimes.indiatimes.com/news/science/scientists-found-a-massive-underground-ocean-hidden-700km-below-earths-surface-heres-all-about-it/articleshow/113849982.cms", note: "Water locked in the geosphere — a surprising link between Earth's spheres." },
            { type: "video", title: "The Mighty River – Ganga: River From The Skies (4 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=Q0gYQrebGwY", note: "A great river system and its watershed." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A 'watershed' (drainage basin) is:", options: ["A place that stores drinking water", "The area of land that drains into a particular river or lake", "A type of cloud", "A water-treatment machine"], answer: 1, explanation: "All rain falling in a watershed flows toward the same river system." },
            { type: "mcq", difficulty: "easy", q: "The continuous movement of water between sea, air and land is the:", options: ["Rock cycle", "Water cycle", "Carbon cycle", "Nitrogen cycle"], answer: 1, explanation: "Evaporation, condensation, precipitation and runoff make up the water cycle." }
          ]
        },

        {
          text: "Carry out and interpret water quality tests (pH, nitrates) and link them to environmental health.",
          resources: [
            { type: "video", title: "India's $10BN water treatment sector (18 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=0kySio8LOi4", note: "Why clean water and treatment matter." },
            { type: "interactive", title: "Pollution study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-676d88c6594881918166b7050d053f33-the-pollution-bot", note: "A tutor bot on pollution and environmental health. (Needs a ChatGPT login.)" },
            { type: "video", title: "Why don't we get drinking water from the ocean? (TED-Ed, 5 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=jdOjB0j329g", note: "Water quality, salts and treatment." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "High nitrate levels in a river, often from farm runoff, can cause:", options: ["Clearer water", "Algal blooms that lower oxygen and harm aquatic life", "Higher pH only", "No effect at all"], answer: 1, explanation: "Excess nitrates feed algae; when algae die and decay they use up oxygen, harming fish and other life." },
            { type: "tf", difficulty: "easy", q: "Measuring pH and nitrate levels helps assess the health of a body of water.", answer: true, explanation: "These indicators reveal pollution and whether the water can support life." }
          ]
        },

        {
          text: "Explain atmospheric pressure and circulation and the main climate drivers.",
          resources: [
            { type: "interactive", title: "NASA Climate Kids: Atmosphere & weather", provider: "NASA Climate Kids", url: "https://climatekids.nasa.gov/", note: "Air pressure, circulation and climate." },
            { type: "podcast", title: "The science behind wildfire smoke – Short Wave", provider: "🐺 Wolves classroom · Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/short-wave/id1482575855?i=1000683539757", note: "How smoke travels through the atmosphere and affects air quality." },
            { type: "interactive", title: "Atmosphere study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-6784b93bd7d08191bc36436210ebeedf-atmosphere-bot", note: "Ask questions about the atmosphere and climate drivers. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Warm air tends to:", options: ["Sink", "Rise", "Stay completely still", "Freeze instantly"], answer: 1, explanation: "Warm air is less dense, so it rises — driving winds and weather systems." },
            { type: "tf", difficulty: "medium", q: "Latitude, altitude and distance from the sea are all climate drivers.", answer: true, explanation: "Each strongly affects a place's temperature and rainfall patterns." }
          ]
        },

        {
          text: "Explain the greenhouse effect and how feedback loops can amplify or dampen climate change.",
          resources: [
            { type: "interactive", title: "PhET: Greenhouse Effect", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/greenhouse-effect", note: "Add greenhouse gases and watch temperature respond." },
            { type: "interactive", title: "Climate study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-676255862aa08191a6da8af67d3d91b2-climate", note: "A tutor bot on climate and the greenhouse effect. (Needs a ChatGPT login.)" },
            { type: "video", title: "How I think about climate change (9 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=tRA2SfSk2Tc", note: "A clear, calm look at the climate challenge." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The greenhouse effect traps some heat near Earth's surface, keeping the planet warm enough for life.", answer: true, explanation: "A natural greenhouse effect is essential; the problem is extra greenhouse gases enhancing it." },
            { type: "tf", difficulty: "medium", q: "Melting ice reducing Earth's reflectivity, which causes more warming and more melting, is a positive feedback loop.", answer: true, explanation: "Less ice = darker surface = more heat absorbed = more melting: the change amplifies itself." }
          ]
        },

        {
          text: "Interpret real climate data such as the Keeling Curve and ice-core records, and describe how climate models work.",
          resources: [
            { type: "reading", title: "NASA: Global Climate Change – Evidence", provider: "NASA Global Climate Change", url: "https://climate.nasa.gov/evidence/", note: "Real CO₂ data, ice cores and warming evidence." },
            { type: "interactive", title: "Khan Academy: Reading data & graphs", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Interpreting trends in real data." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The Keeling Curve mainly shows the rising level of which gas in the atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"], answer: 2, explanation: "It records the steady rise in atmospheric CO₂ since 1958." },
            { type: "short", difficulty: "hard", q: "Explain how ice cores let scientists learn about Earth's climate from thousands of years ago.", answer: "Snow falling each year traps tiny bubbles of atmosphere as it compacts into ice, building up in layers. By drilling deep ice cores and analysing the trapped air, scientists measure past gas concentrations like CO₂, and chemical signatures (e.g. oxygen isotopes) reveal past temperatures. Deeper layers are older, so the core gives a year-by-year climate record going back hundreds of thousands of years.", explanation: "Trapped air bubbles + layered ice = a direct archive of past atmosphere and temperature." }
          ]
        },

        {
          text: "Apply systems thinking using stocks, flows, feedback and predator–prey models.",
          resources: [
            { type: "interactive", title: "Khan Academy: Modelling & systems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Stocks, flows and feedback in models." },
            { type: "interactive", title: "TeachEngineering: Systems & modelling", provider: "TeachEngineering", url: "https://www.teachengineering.org/", note: "Hands-on systems-thinking activities." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "In a predator–prey system, if the prey population suddenly grows, the predator population will most likely:", options: ["Immediately crash", "Increase later, as more food is available", "Stay exactly the same forever", "Disappear"], answer: 1, explanation: "More prey (food) lets predators increase after a delay — a feedback relationship that creates cycles." },
            { type: "short", difficulty: "hard", q: "In systems thinking, what is a 'feedback loop'?", answer: "A feedback loop is when an output of a system feeds back to affect the system itself. In a positive (reinforcing) loop the change amplifies itself (e.g. ice-melt warming). In a negative (balancing) loop the change is dampened and the system is kept stable (e.g. predators reducing a booming prey population).", explanation: "Output feeds back on the system: positive amplifies, negative stabilises." }
          ]
        },

        {
          text: "Use the engineering design process: define criteria and constraints, prototype, test and improve, considering sustainability.",
          resources: [
            { type: "interactive", title: "TeachEngineering: Engineering design process", provider: "TeachEngineering", url: "https://www.teachengineering.org/", note: "Free design challenges with criteria and constraints." },
            { type: "video", title: "Can India's clay tea cups compete with single-use plastic? (12 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=Z_VGwnxcQtY", note: "A real design trade-off — materials, cost and life-cycle sustainability." },
            { type: "video", title: "What is a natural resource? Facts for kids (8 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=hvw1YGs63Hc", note: "The raw materials behind everything we design and build." },
            { type: "reading", title: "Natural resources for kids", provider: "🐺 Wolves classroom · The World Counts", url: "https://www.theworldcounts.com/stories/natural-resources-for-kids", note: "Using resources sustainably — key to good engineering design." },
            { type: "interactive", title: "Sustainability & conservation study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-6768f062691c8191973ed4e046acc083-sustainability-and-conservation", note: "Explore sustainable design choices. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The first step of the engineering design process is usually to:", options: ["Build the final product", "Define the problem, criteria and constraints", "Sell the product", "Throw it away"], answer: 1, explanation: "You define what success looks like (criteria) and the limits (constraints) before designing." },
            { type: "mcq", difficulty: "hard", q: "When engineers consider the full 'life-cycle' of a product, they look at:", options: ["Only the selling price", "Raw materials, manufacturing, use AND disposal/recycling", "Only how it looks", "Only the first day of use"], answer: 1, explanation: "Life-cycle analysis weighs environmental impact from material extraction through manufacture, use and end-of-life." }
          ]
        },

        {
          text: "Apply data-science skills: evaluate reliability and bias, interpret scatter plots, identify correlation, outliers and non-linear patterns.",
          resources: [
            { type: "interactive", title: "Khan Academy: Scatter plots & correlation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Bivariate data, correlation and outliers." },
            { type: "reading", title: "NASA: Reading real climate data", provider: "NASA Global Climate Change", url: "https://climate.nasa.gov/evidence/", note: "Interpreting trends and patterns in evidence." }
          ],
          quiz: [
            { type: "tf", difficulty: "hard", q: "A reliable scientific investigation should be repeatable and use a fair, representative sample to reduce bias.", answer: true, explanation: "Repeatability and representative sampling are central to reliable, unbiased data." },
            { type: "mcq", difficulty: "hard", q: "A scatter plot of data follows a curve that rises then levels off. This pattern is:", options: ["A perfect straight line", "Non-linear", "No relationship", "Only an outlier"], answer: 1, explanation: "A curved trend that isn't a straight line is a non-linear relationship." }
          ]
        },

        {
          text: "Plan a fair investigation, keep a lab notebook, and write Claim–Evidence–Reasoning explanations.",
          resources: [
            { type: "interactive", title: "TeachEngineering: Planning investigations", provider: "TeachEngineering", url: "https://www.teachengineering.org/", note: "Fair testing and recording results." },
            { type: "interactive", title: "Khan Academy: Scientific method & data", provider: "Khan Academy", url: "https://www.khanacademy.org/science", note: "Designing fair tests and arguing from evidence." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "In a Claim–Evidence–Reasoning (CER) explanation, what does each part contain?", answer: "Claim: a clear answer to the question. Evidence: the data or observations that support the claim. Reasoning: the scientific explanation linking the evidence to the claim (why the evidence supports it). Together they make a logical, defensible argument.", explanation: "Claim = answer, Evidence = data, Reasoning = the science linking them." },
            { type: "long", difficulty: "hard", q: "Design a simple investigation to compare the water quality of two local streams. State what you would measure, how you'd keep it fair and reliable, and how you'd present and interpret your data.", answer: "Aim: compare the water quality of stream A and stream B. Measure several indicators at each site: pH, nitrate concentration (test kit), temperature, dissolved oxygen and turbidity. Fairness/reliability: sample at the same time of day, same depth, same method and equipment; take several samples at each site and repeat tests, then average; record everything in a lab notebook. Present the data in a comparison table and bar charts for each indicator. Interpret: e.g. higher nitrates and lower oxygen suggest pollution (perhaps farm runoff). Write a CER conclusion: claim which stream is healthier, cite the measured evidence, and reason using the science. Note limitations and how more samples/sites would improve confidence.", explanation: "Names measurable indicators, controls variables, repeats for reliability, uses tables/graphs, ends with a CER conclusion plus limitations." }
          ]
        }
      ]
    }
  ]
});
