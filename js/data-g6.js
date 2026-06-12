/* Grade 6 — Foundations
   PER-OBJECTIVE schema: each objective is an object { text, resources[], quiz[] }.
   Each objective carries its own learning resources and its own short quiz. */
window.CURRICULUM.grades.push({
  id: "grade-6",
  name: "Grade 6",
  tagline: "Foundations",
  color: "#2a9d8f",
  blurb: "Scientific method, measurement & data, simple machines, and the cell as the unit of life.",
  topics: [

    /* ================================================================ */
    {
      id: "g6-method",
      title: "Scientific Method, Measurement & Data",
      subject: "Skills",
      icon: "🔬",
      summary:
        "How scientists ask questions, plan fair tests, measure carefully, and turn raw numbers into tables, graphs and conclusions.",
      objectives: [

        {
          text: "Describe the stages of a scientific investigation: question → hypothesis → method → data → analysis → conclusion.",
          resources: [
            { type: "video", title: "The Scientific Method (Crash Course Kids)", provider: "YouTube · Crash Course Kids", url: "https://www.youtube.com/c/crashcoursekids", note: "Short, friendly walkthrough of the investigation steps in order." },
            { type: "interactive", title: "Khan Academy: Working scientifically", provider: "Khan Academy", url: "https://www.khanacademy.org/science", note: "Notes and check questions on investigations." },
            { type: "video", title: "The art and science of failing well (TED-Ed, 6 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=lwewZMJzBh4", note: "Why trial, error and failing well are central to how science actually works." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which step normally comes first in a scientific investigation?", options: ["Drawing a conclusion", "Asking a testable question", "Plotting a graph", "Writing the method"], answer: 1, explanation: "Everything starts with a question you can actually test." },
            { type: "short", difficulty: "easy", q: "List the six stages of a scientific investigation in the correct order.", answer: "Question → hypothesis → method (plan) → data (results) → analysis → conclusion.", explanation: "You ask, predict, plan, collect, make sense of the numbers, then decide what they show." }
          ]
        },

        {
          text: "Write a testable research question and a hypothesis in 'If… then… because…' form.",
          resources: [
            { type: "reading", title: "CK-12: Planning an investigation", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "Turning a question into a testable prediction." },
            { type: "interactive", title: "Khan Academy: Science & the scientific method", provider: "Khan Academy", url: "https://www.khanacademy.org/science", note: "Practice spotting good questions and hypotheses." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which of these is a TESTABLE hypothesis?", options: ["Plants are pretty", "If I add more light, then the plant will grow taller, because light powers photosynthesis", "Why do plants grow?", "Plants are the best living things"], answer: 1, explanation: "A hypothesis predicts an effect and gives a reason — and can be tested by experiment." },
            { type: "short", difficulty: "medium", q: "Write a hypothesis in 'If… then… because…' form for the question 'Does sugar affect how fast yeast produces gas?'", answer: "If I add more sugar to the yeast, then it will produce gas faster, because sugar is the food yeast uses for respiration. (Any sensible prediction with a reason.)", explanation: "A good hypothesis links the variable you change to the effect you expect, plus a scientific reason." }
          ]
        },

        {
          text: "Identify the independent, dependent and controlled variables in an experiment.",
          resources: [
            { type: "reading", title: "CK-12: Variables & fair tests", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "The three kinds of variable." },
            { type: "video", title: "Variables in an experiment", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Animated explanation of independent, dependent and control variables." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "In 'How does fertiliser amount affect plant height?', the dependent variable is:", options: ["Amount of fertiliser", "Plant height", "Type of plant", "Amount of water"], answer: 1, explanation: "You measure the height (dependent); you change the fertiliser (independent)." },
            { type: "short", difficulty: "medium", q: "A student tests how light intensity affects how fast pondweed bubbles. Name the independent variable, the dependent variable, and one controlled variable.", answer: "Independent: light intensity (lamp distance). Dependent: bubbles per minute. Controlled (any one): water temperature, amount/type of pondweed, CO₂ level, time interval.", explanation: "Change one thing (independent), measure the effect (dependent), keep everything else the same (controlled)." }
          ]
        },

        {
          text: "Explain what makes a test 'fair', and distinguish reliability from validity.",
          resources: [
            { type: "interactive", title: "Khan Academy: Fair testing", provider: "Khan Academy", url: "https://www.khanacademy.org/science", note: "What a fair test is and why it matters." },
            { type: "reading", title: "CK-12: Designing a controlled experiment", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "Readable notes on control and repeatability." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "Repeating a measurement several times and getting similar values shows the result is reliable.", answer: true, explanation: "Reliability is about repeatable, consistent results." },
            { type: "short", difficulty: "medium", q: "In one sentence each, explain reliability and validity.", answer: "Reliability: how repeatable and consistent your results are when you measure again. Validity: whether the experiment actually tests the question (a fair test measuring the right thing).", explanation: "Reliable = repeatable; valid = measuring what you intended in a fair way." }
          ]
        },

        {
          text: "Distinguish accuracy from precision and identify random vs systematic errors.",
          resources: [
            { type: "video", title: "Accuracy vs Precision", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Clear animation contrasting the two ideas with a dartboard." },
            { type: "reading", title: "CK-12: Accuracy, precision & error", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "Notes on random vs systematic error." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A scale always reads 0.5 g too high, even with nothing on it. This is a:", options: ["Random error", "Systematic error", "Human reaction error", "Rounding error"], answer: 1, explanation: "A constant offset in one direction is a systematic error (here, a zero error)." },
            { type: "short", difficulty: "medium", q: "Explain the difference between accuracy and precision in one or two sentences.", answer: "Accuracy is how close a measurement is to the true value; precision is how close repeated measurements are to each other. A result can be precise (tightly grouped) but inaccurate (far from the true value).", explanation: "Think darts: precise = tight cluster; accurate = centred on the bullseye." }
          ]
        },

        {
          text: "Select correct SI base units and convert between units (e.g. mm ↔ cm ↔ m, g ↔ kg, s ↔ min).",
          resources: [
            { type: "reading", title: "CK-12: Measurement & the Metric System", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "SI units and step-by-step unit conversion." },
            { type: "interactive", title: "Khan Academy: Units & measurement", provider: "Khan Academy", url: "https://www.khanacademy.org/science", note: "Practice converting between metric units." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The SI base unit of mass is the:", options: ["Newton", "Gram", "Kilogram", "Litre"], answer: 2, explanation: "The kilogram (kg) is the SI base unit of mass; the gram is a smaller multiple." },
            { type: "numeric", difficulty: "easy", q: "Convert 2.5 m into centimetres.", answer: "250", explanation: "1 m = 100 cm, so 2.5 × 100 = 250 cm." }
          ]
        },

        {
          text: "Tell fundamental quantities (length, mass, time) apart from derived quantities (area, volume, density).",
          resources: [
            { type: "reading", title: "CK-12: Base & derived quantities", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "How derived quantities are built from base ones." },
            { type: "video", title: "Physical quantities & units", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Short explainer on the kinds of quantity." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which is a derived quantity (not a fundamental one)?", options: ["Length", "Time", "Density", "Mass"], answer: 2, explanation: "Density is mass ÷ volume, derived from other quantities." },
            { type: "tf", difficulty: "easy", q: "Area is a derived quantity because it is calculated from two lengths.", answer: true, explanation: "Area = length × width, so it is derived from the base quantity length." }
          ]
        },

        {
          text: "Measure length, mass and time with appropriate instruments and read scales correctly.",
          resources: [
            { type: "interactive", title: "PhET: Measuring simulations", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/filter?subjects=general", note: "Free browser labs to practise reading measuring tools." },
            { type: "reading", title: "CK-12: Taking measurements", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "Choosing and reading the right instrument." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which instrument is best for measuring a short time interval in the lab?", options: ["Ruler", "Stopwatch", "Balance", "Measuring cylinder"], answer: 1, explanation: "A stopwatch measures time; a ruler measures length and a balance measures mass." },
            { type: "short", difficulty: "medium", q: "When reading a measuring cylinder, where should your eye be and which part of the water do you read?", answer: "Your eye should be level with the liquid surface (to avoid parallax error), and you read the bottom of the meniscus — the curved bottom of the water surface.", explanation: "Eye level + bottom of the meniscus gives an accurate reading." }
          ]
        },

        {
          text: "Find the area and volume of regular shapes by calculation and of irregular objects by displacement.",
          resources: [
            { type: "interactive", title: "Khan Academy: Volume & area", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice calculating area and volume of shapes." },
            { type: "video", title: "Measuring volume by displacement", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "How to find the volume of an irregular object." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A block measures 4 cm × 3 cm × 2 cm. What is its volume in cm³?", answer: "24", explanation: "Volume of a cuboid = length × width × height = 4 × 3 × 2 = 24 cm³." },
            { type: "mcq", difficulty: "medium", q: "To find the volume of an irregular stone you should use:", options: ["A ruler", "The density formula", "Water displacement in a measuring cylinder", "A balance"], answer: 2, explanation: "Submerge it and measure the rise in water level (displacement)." }
          ]
        },

        {
          text: "Calculate density (ρ = m ÷ V) and use it to compare materials.",
          resources: [
            { type: "video", title: "Density explained", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "What density is and how to calculate it." },
            { type: "interactive", title: "PhET: Density", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/density", note: "Drag blocks into water and see why things float or sink." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "An object has mass 60 g and volume 20 cm³. Find its density in g/cm³.", answer: "3", explanation: "ρ = m ÷ V = 60 ÷ 20 = 3 g/cm³." },
            { type: "tf", difficulty: "medium", q: "An object with a density less than 1 g/cm³ will float on water.", answer: true, explanation: "Water has a density of 1 g/cm³; anything less dense floats, anything more dense sinks." }
          ]
        },

        {
          text: "Record raw data in a well-headed table and display it as a bar graph or line graph.",
          resources: [
            { type: "reading", title: "CK-12: Tables & graphs", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "Setting out results and choosing a graph." },
            { type: "interactive", title: "Khan Academy: Reading & making graphs", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice with bar and line graphs." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A line graph is usually the best choice when both variables are numbers that change continuously.", answer: true, explanation: "Continuous numerical data (e.g. temperature over time) suits a line graph; categories suit a bar graph." },
            { type: "mcq", difficulty: "medium", q: "Which table heading is set out correctly?", options: ["Time", "Time (seconds and °C)", "Time / s", "seconds-time"], answer: 2, explanation: "Good headings give the quantity and its unit, e.g. 'Time / s' or 'Time (s)'." }
          ]
        },

        {
          text: "Round values to a sensible number of significant figures and decimal places.",
          resources: [
            { type: "video", title: "Significant figures", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "How to count and round to significant figures." },
            { type: "interactive", title: "Khan Academy: Rounding & significant figures", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic", note: "Practice rounding sensibly." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Round 7.846 to 2 significant figures.", answer: "7.8", explanation: "The first two significant figures are 7 and 8; the next digit (4) rounds down, giving 7.8." },
            { type: "numeric", difficulty: "medium", q: "Round 0.04621 to 2 significant figures.", answer: "0.046", explanation: "Leading zeros don't count; the first two significant figures are 4 and 6, and the next digit (2) rounds down → 0.046." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "g6-machines",
      title: "Motion & Forces: Simple Machines",
      subject: "Physics",
      icon: "⚙️",
      summary:
        "Introducing motion and physical quantities, then the six simple machines that let a small effort move a big load.",
      objectives: [

        {
          text: "Describe motion as a change in position over time and name the quantities used to measure it.",
          resources: [
            { type: "interactive", title: "The Physics Classroom: 1D Kinematics", provider: "The Physics Classroom", url: "https://www.physicsclassroom.com/class/1DKin", note: "How we describe and measure motion." },
            { type: "video", title: "What is motion?", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Distance, time and speed explained." },
            { type: "interactive", title: "Speed, velocity & acceleration study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-67888e9d3ab4819184bf9ef35745731e-calculating-speed-velocity-and-acceleration", note: "A tutor bot for practising how we measure and calculate motion. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Motion is best described as:", options: ["A change in colour over time", "A change in position over time", "A type of force", "A kind of energy"], answer: 1, explanation: "An object is in motion when its position changes as time passes." },
            { type: "short", difficulty: "easy", q: "Name three quantities you would measure to describe how something moves.", answer: "Distance (how far), time (how long), and speed (how fast = distance ÷ time). Direction may also be named.", explanation: "Distance and time give you speed, the most common measure of motion." }
          ]
        },

        {
          text: "Identify the six simple machines: lever, pulley, inclined plane, screw, wedge and wheel-and-axle.",
          resources: [
            { type: "video", title: "Simple Machines (Crash Course Kids)", provider: "YouTube · Crash Course Kids", url: "https://www.youtube.com/c/crashcoursekids", note: "All six simple machines with everyday examples." },
            { type: "reading", title: "CK-12: Simple machines", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/simple-machines/", note: "Notes and diagrams of each machine." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which of these is NOT one of the six simple machines?", options: ["Lever", "Pulley", "Engine", "Wedge"], answer: 2, explanation: "An engine is a complex machine; the six simple machines are lever, pulley, inclined plane, screw, wedge and wheel-and-axle." },
            { type: "short", difficulty: "easy", q: "Name all six simple machines.", answer: "Lever, pulley, inclined plane, screw, wedge, and wheel-and-axle.", explanation: "Every complex machine is built from combinations of these six." }
          ]
        },

        {
          text: "Classify levers as class 1, 2 or 3 by the order of the load, effort and fulcrum.",
          resources: [
            { type: "video", title: "Levers and lever classes", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "The three lever classes with examples." },
            { type: "interactive", title: "PhET: Balancing Act (levers)", provider: "PhET Interactive Simulations", url: "https://phet.colorado.edu/en/simulations/balancing-act", note: "Play with fulcrum, load and effort on a seesaw." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "In a class-1 lever, the fulcrum is:", options: ["At one end", "Between the effort and the load", "On the load", "Always moving"], answer: 1, explanation: "Class 1: fulcrum in the middle (e.g. seesaw, scissors)." },
            { type: "mcq", difficulty: "medium", q: "A wheelbarrow (load in the middle, you lift the handles, wheel is the fulcrum) is which class of lever?", options: ["Class 1", "Class 2", "Class 3", "It is not a lever"], answer: 1, explanation: "Class 2: load between fulcrum and effort." }
          ]
        },

        {
          text: "Explain how a pulley system changes the direction or size of a force.",
          resources: [
            { type: "video", title: "Pulleys explained", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Fixed vs movable pulleys and what they change." },
            { type: "reading", title: "CK-12: Pulleys", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/simple-machines/", note: "How pulley systems multiply or redirect force." },
            { type: "video", title: "The physics behind lift cables (BBC, 4 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=b2D4nhUOGW0", note: "How elevator pulley-and-cable systems lift huge loads safely." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "A single fixed pulley changes the direction of a force but does not reduce the effort needed.", answer: true, explanation: "A fixed pulley redirects force; you pull down to lift up, but the effort still equals the load." },
            { type: "short", difficulty: "hard", q: "A movable pulley system has a mechanical advantage of 3. What does this mean for the effort and the distance you must pull?", answer: "An MA of 3 means the effort needed is one-third of the load, but you must pull the rope three times as far as the load rises. The machine trades distance for reduced force.", explanation: "Higher MA = less force but more rope pulled through." }
          ]
        },

        {
          text: "Explain how an inclined plane, wedge and screw trade a smaller force over a longer distance.",
          resources: [
            { type: "reading", title: "CK-12: Inclined planes, wedges & screws", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/simple-machines/", note: "How these three machines reduce the force needed." },
            { type: "video", title: "Inclined planes & wedges", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Trading force for distance, animated." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A ramp used to push a heavy box onto a truck is an example of a(n):", options: ["Inclined plane", "Lever", "Pulley", "Wheel and axle"], answer: 0, explanation: "A ramp is an inclined plane — less force over a longer distance." },
            { type: "short", difficulty: "medium", q: "Explain why an axe is a good example of a wedge.", answer: "An axe head is a wedge: it has a thin edge that widens. A downward force on the thick end is converted into a large sideways splitting force on the wood, separating it.", explanation: "A wedge converts force on its blunt end into outward forces along its sloping sides." }
          ]
        },

        {
          text: "Define mechanical advantage as load ÷ effort and calculate it for simple machines.",
          resources: [
            { type: "video", title: "Mechanical advantage", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "What mechanical advantage means and how to work it out." },
            { type: "reading", title: "CK-12: Mechanical advantage", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/simple-machines/", note: "Worked examples of load ÷ effort." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A lever lifts a 200 N load with an effort of 50 N. What is its mechanical advantage?", answer: "4", explanation: "MA = load ÷ effort = 200 ÷ 50 = 4." },
            { type: "numeric", difficulty: "hard", q: "A ramp is 6 m long and lifts a box to a height of 1.5 m. The ideal mechanical advantage equals ramp length ÷ height. What is it?", answer: "4", explanation: "IMA = 6 ÷ 1.5 = 4: you push with about a quarter of the force, but over four times the distance." }
          ]
        },

        {
          text: "Explain why no machine is 100% efficient (friction wastes energy as heat).",
          resources: [
            { type: "video", title: "Friction & efficiency", provider: "YouTube · FuseSchool", url: "https://www.youtube.com/@fuseschool", note: "Why some energy is always lost as heat." },
            { type: "reading", title: "CK-12: Energy & efficiency", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/", note: "Energy transfers and wasted energy." },
            { type: "interactive", title: "Gravity, friction & other forces study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-677becabbef48191a678cbd2c430d4b9-gravity-friction-and-other-forces", note: "Ask questions about friction — the force that stops any machine being 100% efficient. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "tf", difficulty: "hard", q: "Because of friction, the actual mechanical advantage of a real machine is usually less than its ideal mechanical advantage.", answer: true, explanation: "Friction wastes some effort as heat, so the real (measured) MA is lower than the theoretical value." },
            { type: "mcq", difficulty: "hard", q: "Which statement about machines and energy is correct?", options: ["A machine creates extra energy", "A machine can make total work output greater than input", "A machine redistributes force and distance but cannot create energy", "A machine destroys energy"], answer: 2, explanation: "Energy is conserved; machines redirect/trade force and distance but never create energy, and some is always lost to friction." }
          ]
        },

        {
          text: "Identify simple machines hidden inside everyday tools and the human body.",
          resources: [
            { type: "video", title: "Simple machines all around us", provider: "YouTube · Crash Course Kids", url: "https://www.youtube.com/c/crashcoursekids", note: "Spotting simple machines in everyday objects." },
            { type: "reading", title: "CK-12: Machines in everyday life", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/physical-science/simple-machines/", note: "Machines in tools and the body." },
            { type: "video", title: "The physics behind lift cables (BBC, 4 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=b2D4nhUOGW0", note: "A real-world machine — the elevator — built from pulleys and cables." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A seesaw is an example of a:", options: ["Pulley", "Lever", "Screw", "Wedge"], answer: 1, explanation: "A seesaw pivots about a fulcrum — a class-1 lever." },
            { type: "long", difficulty: "hard", q: "Choose one everyday object and explain which simple machine(s) it contains, how it makes a task easier, and one reason it cannot be 100% efficient.", answer: "Example — bicycle: it uses wheel-and-axle (wheels, pedals/cranks) and levers (brake handles, pedals) plus gears. Pedalling a small distance at the cranks turns the wheel a larger distance, helping you travel fast for moderate effort; brake levers multiply hand force. It cannot be 100% efficient because friction in the chain, bearings and tyres, plus air resistance, turns some input energy into heat and sound rather than motion.", explanation: "A full answer names the machine(s), the force-or-speed trade-off, and friction as the energy loss." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "g6-cells",
      title: "Cells & Living Organisms",
      subject: "Biology",
      icon: "🦠",
      summary:
        "The cell as the basic unit of life: cell theory, microscopes, plant vs animal cells, organelles, and levels of organisation.",
      objectives: [

        {
          text: "State the cell theory and explain why the cell is called the basic unit of life.",
          resources: [
            { type: "video", title: "Cell theory (Amoeba Sisters)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "Clear cartoon explaining the cell theory." },
            { type: "reading", title: "CK-12: Cells", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Why the cell is the basic unit of life." },
            { type: "interactive", title: "Cells & microorganisms study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-677e0912ba3c81918a4fc6efcdbf3077-cells-and-microorganisms-bot", note: "An interactive tutor to quiz yourself on cells and the cell theory. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The basic unit of all living things is the:", options: ["Atom", "Cell", "Organ", "Tissue"], answer: 1, explanation: "All organisms are made of one or more cells — the basic unit of life." },
            { type: "short", difficulty: "medium", q: "State two points of the cell theory.", answer: "1) All living things are made of one or more cells. 2) The cell is the basic unit of structure and function in living things. 3) All cells come from pre-existing cells. (Any two.)", explanation: "Cell theory has three core statements; any two earn the marks." }
          ]
        },

        {
          text: "Describe the idea that the first cells arose on early Earth (the 'primordial soup' hypothesis) as a scientific model.",
          resources: [
            { type: "video", title: "The origin of life", provider: "YouTube · CrashCourse", url: "https://www.youtube.com/@crashcourse", note: "How scientists model the first cells forming." },
            { type: "reading", title: "CK-12: Origin of life", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "The primordial soup hypothesis explained." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "The 'primordial soup' hypothesis is best described as:", options: ["A proven fact about exactly how life began", "A scientific model suggesting simple molecules on early Earth combined to form the first cells", "The idea that cells fall from space fully formed", "A type of microscope"], answer: 1, explanation: "It is a model/hypothesis: on early Earth, energy acted on simple chemicals, forming organic molecules that could lead to the first cells." },
            { type: "tf", difficulty: "medium", q: "A hypothesis like the primordial soup idea is a scientific model that can be tested and revised, not a fixed final fact.", answer: true, explanation: "Scientific models are our best current explanation and change as new evidence appears." }
          ]
        },

        {
          text: "Distinguish unicellular from multicellular organisms with examples.",
          resources: [
            { type: "video", title: "Unicellular vs multicellular", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "The difference with friendly examples." },
            { type: "reading", title: "CK-12: Unicellular & multicellular", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Single-celled and many-celled life." },
            { type: "interactive", title: "Cells & microorganisms study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-677e0912ba3c81918a4fc6efcdbf3077-cells-and-microorganisms-bot", note: "Explore single-celled microorganisms and how they differ from many-celled life. (Needs a ChatGPT login.)" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Bacteria are examples of unicellular organisms.", answer: true, explanation: "Bacteria are made of a single cell." },
            { type: "mcq", difficulty: "easy", q: "Which of these is a multicellular organism?", options: ["A bacterium", "An amoeba", "A human", "A single yeast cell"], answer: 2, explanation: "Humans are made of trillions of cells — multicellular. The others are single-celled." }
          ]
        },

        {
          text: "Order the levels of organisation: cell → tissue → organ → organ system → organism.",
          resources: [
            { type: "reading", title: "CK-12: Levels of organisation", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "From cells to whole organisms." },
            { type: "interactive", title: "Khan Academy: Body structure & organisation", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Practice ordering the levels." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Put the levels of organisation in the correct order.", options: ["Cell → organ → tissue → organ system", "Cell → tissue → organ → organ system", "Tissue → cell → organ → organism", "Organ → tissue → cell → organism"], answer: 1, explanation: "Cells group into tissues, tissues into organs, organs into organ systems, which form the organism." },
            { type: "short", difficulty: "easy", q: "Give an example of a tissue, an organ, and an organ system in the human body.", answer: "Tissue: muscle tissue (or epithelial tissue). Organ: heart (or stomach, lung). Organ system: circulatory system (or digestive, respiratory). Any sensible matching set.", explanation: "Muscle tissue → heart (organ) → circulatory system is one clear chain." }
          ]
        },

        {
          text: "Name the main parts of a light microscope and describe how to use it to view cells.",
          resources: [
            { type: "interactive", title: "Interactive microscope & cell models", provider: "CELLS alive!", url: "https://www.cellsalive.com/cells/cell_model.htm", note: "Explore cells as you would under a microscope." },
            { type: "reading", title: "CK-12: Using a microscope", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Parts of the microscope and focusing." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "On a microscope, which part do you turn to focus the image sharply at high power?", options: ["Coarse focus", "Fine focus", "Stage clip", "Diaphragm"], answer: 1, explanation: "Coarse focus gets you close; fine focus sharpens the image, especially at high magnification." },
            { type: "numeric", difficulty: "hard", q: "Total magnification with a ×10 eyepiece and a ×40 objective lens is ×?", answer: "400", explanation: "Total magnification = eyepiece × objective = 10 × 40 = 400." }
          ]
        },

        {
          text: "Compare plant and animal cells and identify structures unique to each.",
          resources: [
            { type: "interactive", title: "Plant & animal cell models", provider: "CELLS alive!", url: "https://www.cellsalive.com/cells/cell_model.htm", note: "Compare the two side by side, interactively." },
            { type: "video", title: "Plant vs animal cells (Amoeba Sisters)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "What each cell has and why." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which structure is found in plant cells but NOT animal cells?", options: ["Nucleus", "Cell membrane", "Cell wall", "Mitochondria"], answer: 2, explanation: "Cell walls (and chloroplasts and large vacuoles) are features of plant cells." },
            { type: "short", difficulty: "hard", q: "Why do plant cells need a cell wall AND a cell membrane, while animal cells have only a membrane?", answer: "All cells need a membrane to control what enters and leaves. Plant cells additionally have a rigid cellulose cell wall outside the membrane for support and to stop the cell bursting when it takes in water. Animal cells get shape and support in other ways and have no wall.", explanation: "Membrane = control; wall = extra support unique to plants (and fungi/bacteria)." }
          ]
        },

        {
          text: "State the function of key organelles: cell membrane, cell wall, nucleus, cytoplasm, ribosomes, endoplasmic reticulum, mitochondria, chloroplasts and vacuoles.",
          resources: [
            { type: "video", title: "Eukaryopolis – The City of Cells", provider: "YouTube · CrashCourse Biology", url: "https://www.youtube.com/@crashcourse", note: "Tour of organelles and the job each one does." },
            { type: "reading", title: "CK-12: Cell Structure & Function", provider: "CK-12 Foundation", url: "https://www.ck12.org/c/biology/", note: "Each organelle and its function, with diagrams." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which organelle controls the cell and contains its DNA?", options: ["Ribosome", "Nucleus", "Vacuole", "Cytoplasm"], answer: 1, explanation: "The nucleus stores genetic material and directs the cell's activities." },
            { type: "mcq", difficulty: "medium", q: "Which organelle releases energy from food in respiration?", options: ["Chloroplast", "Mitochondrion", "Ribosome", "Vacuole"], answer: 1, explanation: "Mitochondria are the site of aerobic respiration, releasing usable energy." }
          ]
        },

        {
          text: "Explain the relationship between DNA, genes and chromosomes.",
          resources: [
            { type: "video", title: "DNA, genes & chromosomes (Amoeba Sisters)", provider: "YouTube · Amoeba Sisters", url: "https://www.youtube.com/@AmoebaSisters", note: "How the three fit together." },
            { type: "interactive", title: "Khan Academy: DNA & chromosomes", provider: "Khan Academy", url: "https://www.khanacademy.org/science/biology", note: "Videos and practice on genetic material." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "Explain the relationship between DNA, genes and chromosomes.", answer: "DNA is the molecule that carries genetic information. A gene is a section of DNA that codes for a particular characteristic or protein. Chromosomes are long, coiled lengths of DNA (with proteins) found in the nucleus; each chromosome contains many genes.", explanation: "Chromosome (whole) > gene (a section) > DNA (the molecule itself)." },
            { type: "mcq", difficulty: "medium", q: "Which lists these from largest to smallest?", options: ["Gene → chromosome → DNA base", "Chromosome → gene → DNA base", "DNA base → gene → chromosome", "Gene → DNA base → chromosome"], answer: 1, explanation: "A chromosome contains many genes; a gene is made of many DNA bases." }
          ]
        }
      ]
    }
  ]
});
