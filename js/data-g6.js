/* Grade 6 — Foundations */
window.CURRICULUM.grades.push({
  id: "grade-6",
  name: "Grade 6",
  tagline: "Foundations",
  color: "#2a9d8f",
  blurb: "Scientific method, measurement & data, simple machines, and the cell as the unit of life.",
  topics: [

    /* ---------------------------------------------------------------- */
    {
      id: "g6-method",
      title: "Scientific Method, Measurement & Data",
      subject: "Skills",
      icon: "🔬",
      summary:
        "How scientists ask questions, plan fair tests, measure carefully, and turn raw numbers into tables, graphs and conclusions.",
      objectives: [
        "Describe the stages of a scientific investigation: question → hypothesis → method → data → analysis → conclusion.",
        "Write a testable research question and a hypothesis in 'If… then… because…' form.",
        "Identify the independent, dependent and controlled variables in an experiment.",
        "Explain what makes a test 'fair', and distinguish reliability from validity.",
        "Distinguish accuracy from precision and identify random vs systematic errors.",
        "Select correct SI base units and convert between units (e.g. mm ↔ cm ↔ m, g ↔ kg, s ↔ min).",
        "Tell fundamental quantities (length, mass, time) apart from derived quantities (area, volume, density).",
        "Measure length, mass and time with appropriate instruments and read scales correctly.",
        "Find the area and volume of regular shapes by calculation and of irregular objects by displacement.",
        "Calculate density (ρ = m ÷ V) and use it to compare materials.",
        "Record raw data in a well-headed table and display it as a bar graph or line graph.",
        "Round values to a sensible number of significant figures and decimal places."
      ],
      resources: [
        { type: "video", title: "The Scientific Method (Crash Course Kids)", provider: "YouTube · Crash Course Kids", url: "https://www.youtube.com/c/crashcoursekids", note: "Short, friendly intro series to investigation steps." },
        { type: "interactive", title: "BBC Bitesize: Working scientifically", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/topics/zwbr97h", note: "Variables, fair tests, reliability with check questions." },
        { type: "interactive", title: "PhET: Measuring & graphing sims", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/filter?subjects=earth-science,general", note: "Free browser labs for measurement and data." },
        { type: "reading", title: "CK-12: Measurement & the Metric System", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "Readable notes on SI units and unit conversion." },
        { type: "video", title: "Accuracy vs Precision", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Clear animation contrasting the two ideas." },
        { type: "interactive", title: "Khan Academy: Units & graphing data", provider: "Khan Academy", url: "https://www.khanacademy.org/science", note: "Practice sets with instant feedback." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "Which step normally comes first in a scientific investigation?", options: ["Drawing a conclusion", "Asking a testable question", "Plotting a graph", "Writing the method"], answer: 1, explanation: "Everything starts with a question you can actually test." },
        { type: "mcq", difficulty: "easy", q: "The SI base unit of mass is the:", options: ["Newton", "Gram", "Kilogram", "Litre"], answer: 2, explanation: "The kilogram (kg) is the SI base unit of mass; the gram is a smaller derived multiple." },
        { type: "tf", difficulty: "easy", q: "A line graph is usually the best choice when both variables are numbers that change continuously.", answer: true, explanation: "Continuous numerical data (e.g. temperature over time) suits a line graph; categories suit a bar graph." },
        { type: "mcq", difficulty: "easy", q: "Convert 2.5 m into centimetres.", options: ["25 cm", "250 cm", "0.025 cm", "2500 cm"], answer: 1, explanation: "1 m = 100 cm, so 2.5 × 100 = 250 cm." },
        { type: "mcq", difficulty: "medium", q: "In 'How does fertiliser amount affect plant height?', the dependent variable is:", options: ["Amount of fertiliser", "Plant height", "Type of plant", "Amount of water"], answer: 1, explanation: "You measure the height (dependent); you change the fertiliser (independent)." },
        { type: "tf", difficulty: "medium", q: "Repeating a measurement several times and getting similar values shows the result is reliable.", answer: true, explanation: "Reliability is about repeatable, consistent results." },
        { type: "mcq", difficulty: "medium", q: "Which is a derived quantity (not a fundamental one)?", options: ["Length", "Time", "Density", "Mass"], answer: 2, explanation: "Density is mass ÷ volume, derived from other quantities." },
        { type: "numeric", difficulty: "medium", q: "A block measures 4 cm × 3 cm × 2 cm. What is its volume in cm³?", answer: "24", explanation: "Volume of a cuboid = length × width × height = 4 × 3 × 2 = 24 cm³." },
        { type: "mcq", difficulty: "medium", q: "A scale always reads 0.5 g too high, even with nothing on it. This is a:", options: ["Random error", "Systematic error", "Human reaction error", "Rounding error"], answer: 1, explanation: "A constant offset in one direction is a systematic error (here, a zero error)." },
        { type: "numeric", difficulty: "medium", q: "An object has mass 60 g and volume 20 cm³. Find its density in g/cm³.", answer: "3", explanation: "ρ = m ÷ V = 60 ÷ 20 = 3 g/cm³." },
        { type: "mcq", difficulty: "medium", q: "To find the volume of an irregular stone you should use:", options: ["A ruler", "The density formula", "Water displacement in a measuring cylinder", "A balance"], answer: 2, explanation: "Submerge it and measure the rise in water level (displacement)." },
        { type: "short", difficulty: "medium", q: "Explain the difference between accuracy and precision in one or two sentences.", answer: "Accuracy is how close a measurement is to the true value; precision is how close repeated measurements are to each other. A result can be precise (tightly grouped) but inaccurate (far from the true value).", explanation: "Think darts: precise = tight cluster; accurate = centred on the bullseye." },
        { type: "short", difficulty: "hard", q: "A student tests how light intensity affects how fast pondweed bubbles. Identify the independent, dependent and two controlled variables.", answer: "Independent: light intensity (distance of lamp). Dependent: bubbles per minute (rate of photosynthesis). Controlled: temperature of water, amount/type of pondweed, CO₂ concentration, time interval.", explanation: "Only the independent variable should change; controlled variables keep the test fair." },
        { type: "numeric", difficulty: "hard", q: "Round 7.846 to 2 significant figures.", answer: "7.8", explanation: "The first two significant figures are 7 and 8; the next digit (4) rounds down, giving 7.8." },
        { type: "mcq", difficulty: "hard", q: "Two methods measure the same boiling point. Method A: 98, 99, 98 °C. Method B: 100, 90, 95 °C (true value 100 °C). Which statement is best?", options: ["A is more accurate; B is more precise", "A is more precise; B has a closer average to the true value", "Both are equally good", "B is both more precise and more accurate"], answer: 1, explanation: "A is tightly grouped (precise) but reads low; B's average (95) is actually nearer 100, though it is less precise." },
        { type: "long", difficulty: "hard", q: "Design a fair test to find out whether the colour of a cup affects how quickly hot water cools. Describe your variables, method, what you would measure, and how you would make the test reliable.", answer: "Independent variable: cup colour (e.g. black, white, silver). Dependent variable: water temperature (°C). Controlled: same cup size/material, same starting volume and temperature of water, same room, same thermometer, no lid. Method: pour an equal measured volume of water at the same start temperature into each cup; record temperature every minute for 15 minutes with a thermometer or data logger. Reliability: repeat each cup 3 times and average the results; plot a cooling curve (temperature vs time) for each colour and compare. Conclusion: a steeper fall means faster cooling.", explanation: "A strong answer names variables, controls them, repeats trials, and uses a graph to compare." },
        { type: "mcq", difficulty: "hard", q: "Which table heading is set out correctly?", options: ["Time", "Time (seconds and °C)", "Time / s", "seconds-time"], answer: 2, explanation: "Good headings give the quantity and its unit, e.g. 'Time / s' or 'Time (s)'." },
        { type: "short", difficulty: "hard", q: "Why is it good practice to take repeat readings and ignore an obvious 'anomalous' result before averaging?", answer: "Repeats reveal random error and improve reliability. An anomaly is a value far from the others, likely caused by a mistake; including it would distort the mean, so it is identified, investigated and excluded before averaging.", explanation: "Repeats + spotting anomalies makes your average trustworthy." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "g6-machines",
      title: "Motion & Forces: Simple Machines",
      subject: "Physics",
      icon: "⚙️",
      summary:
        "Introducing motion and physical quantities, then the six simple machines that let a small effort move a big load.",
      objectives: [
        "Describe motion as a change in position over time and name the quantities used to measure it.",
        "Identify the six simple machines: lever, pulley, inclined plane, screw, wedge and wheel-and-axle.",
        "Classify levers as class 1, 2 or 3 by the order of the load, effort and fulcrum.",
        "Explain how a pulley system changes the direction or size of a force.",
        "Explain how an inclined plane, wedge and screw trade a smaller force over a longer distance.",
        "Define mechanical advantage as load ÷ effort and calculate it for simple machines.",
        "Explain why no machine is 100% efficient (friction wastes energy as heat).",
        "Identify simple machines hidden inside everyday tools and the human body."
      ],
      resources: [
        { type: "video", title: "Simple Machines (Crash Course Kids)", provider: "YouTube · Crash Course Kids", url: "https://www.youtube.com/c/crashcoursekids", note: "Six machines explained with everyday examples." },
        { type: "interactive", title: "BBC Bitesize: Forces & simple machines", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/zlbb9j6", note: "Notes, diagrams and quick quizzes." },
        { type: "interactive", title: "PhET: Balancing Act (levers)", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/balancing-act", note: "Play with fulcrum, load and effort on a seesaw." },
        { type: "reading", title: "CK-12: Simple Machines", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/simple-machines/", note: "Clear notes on each machine and mechanical advantage." },
        { type: "video", title: "Levers, Pulleys & Inclined Planes", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Animated explanations with worked examples." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "Which of these is NOT one of the six simple machines?", options: ["Lever", "Pulley", "Engine", "Wedge"], answer: 2, explanation: "An engine is a complex machine; the six simple machines are lever, pulley, inclined plane, screw, wedge and wheel-and-axle." },
        { type: "mcq", difficulty: "easy", q: "A seesaw is an example of a:", options: ["Pulley", "Lever", "Screw", "Wedge"], answer: 1, explanation: "A seesaw pivots about a fulcrum — a class-1 lever." },
        { type: "tf", difficulty: "easy", q: "Simple machines let you do the same work using a smaller force over a longer distance.", answer: true, explanation: "You trade force for distance; the work done stays roughly the same (a bit more, due to friction)." },
        { type: "mcq", difficulty: "easy", q: "A ramp used to push a heavy box onto a truck is an example of a(n):", options: ["Inclined plane", "Lever", "Pulley", "Wheel and axle"], answer: 0, explanation: "A ramp is an inclined plane." },
        { type: "mcq", difficulty: "medium", q: "In a class-1 lever, the fulcrum is:", options: ["At one end", "Between the effort and the load", "On the load", "Always moving"], answer: 1, explanation: "Class 1: fulcrum in the middle (e.g. seesaw, scissors)." },
        { type: "mcq", difficulty: "medium", q: "A wheelbarrow (load in the middle, you lift the handles, wheel is the fulcrum) is which class of lever?", options: ["Class 1", "Class 2", "Class 3", "It is not a lever"], answer: 1, explanation: "Class 2: load between fulcrum and effort." },
        { type: "numeric", difficulty: "medium", q: "A lever lifts a 200 N load with an effort of 50 N. What is its mechanical advantage?", answer: "4", explanation: "MA = load ÷ effort = 200 ÷ 50 = 4." },
        { type: "tf", difficulty: "medium", q: "A single fixed pulley changes the direction of a force but does not reduce the effort needed.", answer: true, explanation: "A fixed pulley redirects force; you pull down to lift up, but the effort still equals the load." },
        { type: "mcq", difficulty: "medium", q: "A screw can be thought of as which simple machine wrapped around a cylinder?", options: ["A lever", "An inclined plane", "A pulley", "A wedge"], answer: 1, explanation: "A screw's thread is an inclined plane wound around a shaft." },
        { type: "short", difficulty: "medium", q: "Explain why an axe is a good example of a wedge.", answer: "An axe head is a wedge: it has a thin edge that widens. A downward force on the thick end is converted into a large sideways splitting force on the wood, separating it.", explanation: "A wedge converts force applied to its blunt end into outward forces along its sloping sides." },
        { type: "numeric", difficulty: "hard", q: "A ramp is 6 m long and lifts a box to a height of 1.5 m. The ideal mechanical advantage equals ramp length ÷ height. What is it?", answer: "4", explanation: "IMA = 6 ÷ 1.5 = 4: you push with about a quarter of the force, but over four times the distance." },
        { type: "mcq", difficulty: "hard", q: "Tweezers and fishing rods are class-3 levers. What do class-3 levers give you instead of a force advantage?", options: ["A larger force", "Greater speed/range of movement at the load", "No movement", "More friction"], answer: 1, explanation: "Class 3 has effort between fulcrum and load; MA < 1, but the load end moves faster and further." },
        { type: "tf", difficulty: "hard", q: "Because of friction, the actual mechanical advantage of a real machine is usually less than its ideal mechanical advantage.", answer: true, explanation: "Friction wastes some effort as heat, so the real (measured) MA is lower than the theoretical value." },
        { type: "short", difficulty: "hard", q: "A movable pulley system has a mechanical advantage of 3. What does this mean for the effort and the distance you must pull?", answer: "An MA of 3 means the effort needed is one-third of the load, but you must pull the rope three times as far as the load rises. The machine trades distance for reduced force.", explanation: "Higher MA = less force but more rope pulled through." },
        { type: "long", difficulty: "hard", q: "Choose one everyday object and explain which simple machine(s) it contains, how it makes a task easier, and one reason it cannot be 100% efficient.", answer: "Example — bicycle: it uses wheel-and-axle (wheels, pedals/cranks) and levers (brake handles, pedals) plus gears. Pedalling a small distance at the cranks turns the wheel a larger distance, helping you travel fast for moderate effort; brake levers multiply hand force. It cannot be 100% efficient because friction in the chain, bearings and tyres, plus air resistance, turns some input energy into heat and sound rather than motion.", explanation: "A full answer names the machine(s), the force-or-speed trade-off, and friction as the energy loss." },
        { type: "mcq", difficulty: "hard", q: "Which statement about machines and energy is correct?", options: ["A machine creates extra energy", "A machine can make total work output greater than input", "A machine redistributes force and distance but cannot create energy", "A machine destroys energy"], answer: 2, explanation: "Energy is conserved; machines redirect/trade force and distance but never create energy, and some is always lost to friction." }
      ]
    },

    /* ---------------------------------------------------------------- */
    {
      id: "g6-cells",
      title: "Cells & Living Organisms",
      subject: "Biology",
      icon: "🦠",
      summary:
        "The cell as the basic unit of life: cell theory, microscopes, plant vs animal cells, organelles, and levels of organisation.",
      objectives: [
        "State the cell theory and explain why the cell is called the basic unit of life.",
        "Describe the idea that the first cells arose on early Earth (the 'primordial soup' hypothesis) as a scientific model.",
        "Distinguish unicellular from multicellular organisms with examples.",
        "Order the levels of organisation: cell → tissue → organ → organ system → organism.",
        "Name the main parts of a light microscope and describe how to use it to view cells.",
        "Compare plant and animal cells and identify structures unique to each.",
        "State the function of key organelles: cell membrane, cell wall, nucleus, cytoplasm, ribosomes, endoplasmic reticulum, mitochondria, chloroplasts and vacuoles.",
        "Explain the relationship between DNA, genes and chromosomes."
      ],
      resources: [
        { type: "video", title: "Cells (Amoeba Sisters playlist)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Beloved, clear cartoons on cell parts and theory." },
        { type: "interactive", title: "Cell Viewer & microscope (CELLS alive)", provider: "CELLS alive!", url: "https://www.cellsalive.com/cells/cell_model.htm", note: "Interactive plant, animal and bacterial cell models." },
        { type: "interactive", title: "BBC Bitesize: Cells & organisation", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/topics/znxbkqt", note: "Notes and quizzes on organelles and levels of organisation." },
        { type: "video", title: "Eukaryopolis – The City of Cells", provider: "YouTube · CrashCourse Biology", url: "https://www.youtube.com/@crashcourse", note: "Engaging tour of organelles and their jobs." },
        { type: "reading", title: "CK-12: Cell Structure & Function", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Readable notes with diagrams and review questions." },
        { type: "interactive", title: "Khan Academy: Intro to cells", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology/structure-of-a-cell", note: "Videos plus practice on cell structures." }
      ],
      quiz: [
        { type: "mcq", difficulty: "easy", q: "The basic unit of all living things is the:", options: ["Atom", "Cell", "Organ", "Tissue"], answer: 1, explanation: "All organisms are made of one or more cells — the basic unit of life." },
        { type: "tf", difficulty: "easy", q: "Bacteria are examples of unicellular organisms.", answer: true, explanation: "Bacteria are made of a single cell." },
        { type: "mcq", difficulty: "easy", q: "Which structure is found in plant cells but NOT animal cells?", options: ["Nucleus", "Cell membrane", "Cell wall", "Mitochondria"], answer: 2, explanation: "Cell walls (and chloroplasts and large vacuoles) are features of plant cells." },
        { type: "mcq", difficulty: "easy", q: "Which organelle controls the cell and contains its DNA?", options: ["Ribosome", "Nucleus", "Vacuole", "Cytoplasm"], answer: 1, explanation: "The nucleus stores genetic material and directs the cell's activities." },
        { type: "mcq", difficulty: "medium", q: "Put the levels of organisation in the correct order.", options: ["Cell → organ → tissue → organ system", "Cell → tissue → organ → organ system", "Tissue → cell → organ → organism", "Organ → tissue → cell → organism"], answer: 1, explanation: "Cells group into tissues, tissues into organs, organs into organ systems, which form the organism." },
        { type: "mcq", difficulty: "medium", q: "Which organelle releases energy from food in respiration?", options: ["Chloroplast", "Mitochondrion", "Ribosome", "Vacuole"], answer: 1, explanation: "Mitochondria are the site of aerobic respiration, releasing usable energy." },
        { type: "tf", difficulty: "medium", q: "Chloroplasts are where photosynthesis happens, so they are found in plant (not animal) cells.", answer: true, explanation: "Chloroplasts contain chlorophyll and carry out photosynthesis in plant cells." },
        { type: "mcq", difficulty: "medium", q: "Which part controls what enters and leaves the cell?", options: ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"], answer: 1, explanation: "The cell membrane is selectively permeable, regulating substances in and out." },
        { type: "short", difficulty: "medium", q: "State two points of the cell theory.", answer: "1) All living things are made of one or more cells. 2) The cell is the basic unit of structure and function in living things. 3) All cells come from pre-existing cells. (Any two.)", explanation: "Cell theory has three core statements; any two earn the marks." },
        { type: "mcq", difficulty: "medium", q: "On a microscope, which part you turn to focus the image sharply at high power?", options: ["Coarse focus", "Fine focus", "Stage clip", "Diaphragm"], answer: 1, explanation: "Coarse focus gets you close; fine focus sharpens the image, especially at high magnification." },
        { type: "short", difficulty: "hard", q: "Explain the relationship between DNA, genes and chromosomes.", answer: "DNA is the molecule that carries genetic information. A gene is a section of DNA that codes for a particular characteristic or protein. Chromosomes are long, coiled lengths of DNA (with proteins) found in the nucleus; each chromosome contains many genes.", explanation: "Chromosome (whole) > gene (a section) > DNA (the molecule itself)." },
        { type: "mcq", difficulty: "hard", q: "Total magnification with a ×10 eyepiece and a ×40 objective lens is:", options: ["×50", "×400", "×4", "×140"], answer: 1, explanation: "Total magnification = eyepiece × objective = 10 × 40 = 400." },
        { type: "tf", difficulty: "hard", q: "Ribosomes build proteins, and many are found on the rough endoplasmic reticulum.", answer: true, explanation: "Ribosomes are the sites of protein synthesis; rough ER is studded with them." },
        { type: "short", difficulty: "hard", q: "Why do plant cells need a cell wall AND a cell membrane, while animal cells have only a membrane?", answer: "All cells need a membrane to control what enters and leaves. Plant cells additionally have a rigid cellulose cell wall outside the membrane for support and to stop the cell bursting when it takes in water (it provides structural strength). Animal cells get their shape and support in other ways and do not have a wall.", explanation: "Membrane = control; wall = extra support and protection unique to plants (and fungi/bacteria)." },
        { type: "long", difficulty: "hard", q: "Compare a typical plant cell and a typical animal cell. List the structures they share and the structures unique to each, and briefly say why a leaf cell in particular is well suited to its job.", answer: "Shared: cell membrane, cytoplasm, nucleus, mitochondria, ribosomes, endoplasmic reticulum. Plant-only: cell wall (cellulose), chloroplasts, a large permanent vacuole. Animal-only: no wall/chloroplasts; small temporary vacuoles only. A leaf (palisade) cell is well suited to photosynthesis because it is packed with chloroplasts to absorb light, is near the top surface of the leaf, and is column-shaped so many can fit and capture more sunlight.", explanation: "A strong answer separates shared vs unique structures and links a structure to its function." },
        { type: "mcq", difficulty: "hard", q: "The 'primordial soup' hypothesis is best described as:", options: ["A proven fact about exactly how life began", "A scientific model suggesting simple molecules on early Earth combined to form the first cells", "The idea that cells fall from space fully formed", "A type of microscope"], answer: 1, explanation: "It is a model/hypothesis: on early Earth, energy acted on simple chemicals, forming organic molecules that could lead to the first cells." }
      ]
    }
  ]
});
