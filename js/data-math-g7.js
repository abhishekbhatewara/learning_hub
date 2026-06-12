/* Mathematics — Grade 7: Core Development (Proportional Reasoning & Foundations of Algebra)
   PER-OBJECTIVE schema: each objective is { text, resources[], quiz[] }. */
window.CURRICULUM_MATH.grades.push({
  id: "grade-7",
  name: "Grade 7",
  tagline: "Proportional Reasoning & Algebra",
  color: "#0891b2",
  blurb: "Percentages, the number system & surds, ratio/rate/proportion, time & units, indices, algebraic expressions, factorisation, equations, geometry and statistics.",
  topics: [

    /* ============================ Percentages ============================ */
    {
      id: "m7-percentages",
      title: "Percentages",
      subject: "Number",
      icon: "％",
      summary: "Reverse percentages, increase and decrease, percentage change, repeated changes, percent error and real-life applications.",
      objectives: [
        { text: "Find the original amount using reverse percentages.",
          resources: [
            { type: "interactive", title: "Reverse percentages", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Working back to the original value." },
            { type: "video", title: "Reverse percentages", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples (search 'reverse percentages')." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A price is £60 after a 20% increase. The original price was:", options: ["£48", "£50", "£72", "£45"], answer: 1, explanation: "Original × 1.2 = 60, so original = 60 ÷ 1.2 = £50." },
            { type: "numeric", difficulty: "medium", q: "30% of a number is 12. What is the number?", answer: "40", explanation: "Number = 12 ÷ 0.3 = 40." }
          ] },
        { text: "Calculate a percentage increase and decrease.",
          resources: [
            { type: "interactive", title: "Percentage increase/decrease", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Multiplier method." },
            { type: "interactive", title: "Percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice increases and decreases." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Increase 80 by 15%. What is the result?", answer: "92", explanation: "80 × 1.15 = 92." },
            { type: "numeric", difficulty: "easy", q: "Decrease 50 by 10%. What is the result?", answer: "45", explanation: "50 × 0.9 = 45." }
          ] },
        { text: "Calculate percentage change.",
          resources: [
            { type: "interactive", title: "Percentage Change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Change as a percentage of the original." },
            { type: "video", title: "Percentage change", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples (search 'percentage change')." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A value rises from 40 to 50. What is the percentage increase? (number only)", answer: "25", explanation: "Change = 10; 10 ÷ 40 × 100 = 25%." },
            { type: "mcq", difficulty: "easy", q: "Percentage change is calculated as:", options: ["change ÷ original × 100", "change ÷ new × 100", "original ÷ change × 100", "new − original"], answer: 0, explanation: "Always divide the change by the ORIGINAL amount." }
          ] },
        { text: "Work out repeated percentage changes.",
          resources: [
            { type: "interactive", title: "Repeated percentage change", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Applying multipliers more than once." },
            { type: "interactive", title: "Percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Multi-step percentage problems." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "£100 increases by 10%, then increases by 10% again. Final amount (£)?", answer: "121", explanation: "100 × 1.1 × 1.1 = 121." },
            { type: "tf", difficulty: "medium", q: "Two successive 10% increases give the same result as one 20% increase.", answer: false, explanation: "1.1 × 1.1 = 1.21 (a 21% rise), not 20%." }
          ] },
        { text: "Calculate percentage error.",
          resources: [
            { type: "interactive", title: "Percentage Error", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-error.html", note: "How far a measurement is from the true value." },
            { type: "interactive", title: "Percent error", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice problems." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "True value 50, measured 45. Percent error = |error| ÷ true × 100. What is it? (number only)", answer: "10", explanation: "|50 − 45| = 5; 5 ÷ 50 × 100 = 10%." },
            { type: "mcq", difficulty: "easy", q: "Percentage error measures:", options: ["how large a number is", "how far a measurement is from the true value, as a %", "the average", "the range"], answer: 1, explanation: "It expresses the error as a percentage of the true value." }
          ] },
        { text: "Apply percentages to real-life situations.",
          resources: [
            { type: "interactive", title: "Percentages in real life", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "VAT, discounts and tips." },
            { type: "interactive", title: "Percentage word problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Apply to contexts." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A £200 item has 15% VAT added. What is the total price (£)?", answer: "230", explanation: "15% of 200 = 30, and 200 + 30 = £230." },
            { type: "short", difficulty: "hard", q: "A shop offers 20% off, then 10% off the reduced price. Using £100 as the start, explain why this is not the same as 30% off.", answer: "20% off £100 = £80; 10% off £80 = £72. A single 30% discount would give £70. Successive discounts multiply (0.8 × 0.9 = 0.72), they don't add to 30%.", explanation: "Multipliers combine by multiplying, not adding." }
          ] }
      ]
    },

    /* ============================ Number System ============================ */
    {
      id: "m7-number-system",
      title: "Number System",
      subject: "Number",
      icon: "🔣",
      summary: "Sets of numbers, rational numbers as p/q, irrational numbers, an introduction to surds, π, and operations with rational numbers.",
      objectives: [
        { text: "Classify numbers as natural, whole, integer, rational, irrational or real.",
          resources: [
            { type: "interactive", title: "Types of Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/number-types.html", note: "All the number sets explained." },
            { type: "interactive", title: "Number sets", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Rational vs irrational." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which number is irrational?", options: ["0.5", "√2", "3/4", "−7"], answer: 1, explanation: "√2 cannot be written as a fraction; its decimal never repeats." },
            { type: "tf", difficulty: "easy", q: "Every integer is a rational number.", answer: true, explanation: "Any integer n can be written as n/1." }
          ] },
        { text: "Use the p/q definition of a rational number.",
          resources: [
            { type: "interactive", title: "Rational Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/rational-numbers.html", note: "Numbers as a ratio of integers." },
            { type: "interactive", title: "Rational numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "The p/q form." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A rational number can always be written as:", options: ["a whole number", "p/q where p and q are integers and q ≠ 0", "a decimal that never ends", "a surd"], answer: 1, explanation: "That is the definition of a rational number." },
            { type: "numeric", difficulty: "medium", q: "Write 0.25 as a fraction p/q in simplest form. What is q (the denominator)?", answer: "4", explanation: "0.25 = 1/4, so q = 4." }
          ] },
        { text: "Recognise and describe irrational numbers.",
          resources: [
            { type: "interactive", title: "Irrational Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/irrational-numbers.html", note: "Non-repeating, non-terminating decimals." },
            { type: "interactive", title: "Irrational numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Examples and properties." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which of these is NOT irrational?", options: ["π", "√3", "√9", "√5"], answer: 2, explanation: "√9 = 3, which is rational; the others are irrational." },
            { type: "tf", difficulty: "easy", q: "An irrational number has a decimal that goes on forever without repeating.", answer: true, explanation: "That is what makes it irrational." }
          ] },
        { text: "Begin working with surds.",
          resources: [
            { type: "interactive", title: "Surds", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Roots that cannot be simplified to whole numbers." },
            { type: "interactive", title: "Square roots", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Simplifying roots." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which is a surd (cannot be simplified to a rational number)?", options: ["√4", "√16", "√7", "√25"], answer: 2, explanation: "√4, √16, √25 are whole numbers; √7 is a surd." },
            { type: "mcq", difficulty: "hard", q: "√12 simplified is:", options: ["2√3", "3√2", "4√3", "6"], answer: 0, explanation: "√12 = √4 × √3 = 2√3." }
          ] },
        { text: "Understand π and its approximation 22/7.",
          resources: [
            { type: "interactive", title: "Pi", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/pi.html", note: "What π is and common approximations." },
            { type: "interactive", title: "Circles & π", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "π in circle formulas." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "22/7 is an exact value of π.", answer: false, explanation: "22/7 is only an approximation; π is irrational." },
            { type: "mcq", difficulty: "medium", q: "π is best described as:", options: ["exactly 3.14", "exactly 22/7", "an irrational number ≈ 3.14159", "a whole number"], answer: 2, explanation: "π is irrational and approximately 3.14159." }
          ] },
        { text: "Add, subtract, multiply and divide rational numbers.",
          resources: [
            { type: "interactive", title: "Rational number operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "All four operations." },
            { type: "video", title: "Operations with fractions & negatives", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Work out −3/4 + 1/4. Give your answer as a decimal.", answer: "-0.5", explanation: "−3/4 + 1/4 = −2/4 = −1/2 = −0.5." },
            { type: "numeric", difficulty: "medium", q: "Work out 2/3 × 3/4. Give your answer as a decimal.", answer: "0.5", explanation: "2/3 × 3/4 = 6/12 = 1/2 = 0.5." }
          ] }
      ]
    },

    /* ============================ Ratio, Rates & Proportion ============================ */
    {
      id: "m7-ratio-proportion",
      title: "Ratio, Rates & Proportion",
      subject: "Number",
      icon: "⚖️",
      summary: "Ratios as fractions, simplifying, solving proportions, direct proportion and variation, unit rates, rate tables, the constant of proportionality, best-buy and contextual problems.",
      objectives: [
        { text: "Express and use a ratio as a fraction.",
          resources: [
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Ratios and fractions." },
            { type: "interactive", title: "Ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Part-to-whole from a ratio." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The ratio 3:4 as a fraction (first part of the total) is:", options: ["3/4", "3/7", "4/7", "7/3"], answer: 1, explanation: "Total = 7 parts, so the first is 3/7." },
            { type: "numeric", difficulty: "medium", q: "In the ratio 1:3, the first part is what fraction of the total? Give your answer as a decimal.", answer: "0.25", explanation: "Total = 4; first part = 1/4 = 0.25." }
          ] },
        { text: "Simplify ratios.",
          resources: [
            { type: "interactive", title: "Simplifying ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Divide by the common factor." },
            { type: "video", title: "Simplifying ratios", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Simplify 15:25.", options: ["3:5", "5:3", "1:2", "15:25"], answer: 0, explanation: "Divide both by 5: 15:25 = 3:5." },
            { type: "numeric", difficulty: "medium", q: "Simplify 12:8 to the form 3:n. What is n?", answer: "2", explanation: "Divide both by 4: 12:8 = 3:2, so n = 2." }
          ] },
        { text: "Solve proportions.",
          resources: [
            { type: "interactive", title: "Proportions", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/proportions.html", note: "Cross-multiplying to solve." },
            { type: "interactive", title: "Solving proportions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Solve 3/4 = x/12. What is x?", answer: "9", explanation: "12 ÷ 4 = 3, so x = 3 × 3 = 9." },
            { type: "numeric", difficulty: "easy", q: "If 2 pens cost £3, how much do 6 pens cost (£)?", answer: "9", explanation: "6 pens is 3 times as many, so 3 × £3 = £9." }
          ] },
        { text: "Recognise and use direct proportion.",
          resources: [
            { type: "interactive", title: "Direct Proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "When one quantity scales with another." },
            { type: "interactive", title: "Proportional relationships", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Direct proportion practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In direct proportion, if one quantity doubles, the other doubles.", answer: true, explanation: "Both change by the same factor." },
            { type: "numeric", difficulty: "medium", q: "y is directly proportional to x. When x = 2, y = 10. Find y when x = 5.", answer: "25", explanation: "k = 10 ÷ 2 = 5, so y = 5 × 5 = 25." }
          ] },
        { text: "Express proportion as variation (y = kx).",
          resources: [
            { type: "interactive", title: "Proportional variation", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "The constant of variation." },
            { type: "interactive", title: "Constant of proportionality", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Finding k." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "If y ∝ x and y = 12 when x = 3, the constant of proportionality k is:", options: ["4", "9", "36", "15"], answer: 0, explanation: "k = y ÷ x = 12 ÷ 3 = 4." },
            { type: "numeric", difficulty: "easy", q: "Using y = kx with k = 4, find y when x = 7.", answer: "28", explanation: "y = 4 × 7 = 28." }
          ] },
        { text: "Calculate unit rates.",
          resources: [
            { type: "interactive", title: "Unit rates", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Rate per single unit." },
            { type: "interactive", title: "Rates", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Rates and unit rates." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A car travels 300 km in 5 hours. What is its speed in km/h?", answer: "60", explanation: "300 ÷ 5 = 60 km/h." },
            { type: "numeric", difficulty: "easy", q: "£12 buys 4 kg. What is the price per kg (£)?", answer: "3", explanation: "12 ÷ 4 = £3 per kg." }
          ] },
        { text: "Read and use rate tables.",
          resources: [
            { type: "interactive", title: "Rate tables", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Tables of equivalent rates." },
            { type: "interactive", title: "Ratio tables", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Scaling values in a table." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A car uses 6 litres per 100 km. How many litres for 250 km?", answer: "15", explanation: "6 × 2.5 = 15 litres." },
            { type: "short", difficulty: "medium", q: "A rate table shows 1 kg → £2, 2 kg → £4, 3 kg → £6. What is the rule, and the cost of 5 kg?", answer: "Cost = £2 × mass. So 5 kg costs 5 × £2 = £10.", explanation: "The unit rate is £2 per kg." }
          ] },
        { text: "Find and use the constant of proportionality.",
          resources: [
            { type: "interactive", title: "Constant of proportionality", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Finding k from data." },
            { type: "interactive", title: "Proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "The constant k." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "In y = kx, if y = 20 when x = 4, find k.", answer: "5", explanation: "k = 20 ÷ 4 = 5." },
            { type: "mcq", difficulty: "easy", q: "The constant of proportionality is found by:", options: ["y × x", "y ÷ x", "x ÷ y", "y + x"], answer: 1, explanation: "For y = kx, k = y ÷ x." }
          ] },
        { text: "Compare value for money (best-buy problems).",
          resources: [
            { type: "interactive", title: "Best buy", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Comparing unit prices." },
            { type: "video", title: "Best buys", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples (search 'best buys')." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which is better value: 500 g for £2, or 800 g for £3?", options: ["500 g for £2", "800 g for £3", "they are the same", "cannot tell"], answer: 1, explanation: "£2/500 g = 0.40p/g; £3/800 g = 0.375p/g — the 800 g pack is cheaper per gram." },
            { type: "numeric", difficulty: "easy", q: "A 2-litre bottle costs £1.50. What is the price per litre (£)?", answer: "0.75", explanation: "1.50 ÷ 2 = £0.75 per litre." }
          ] },
        { text: "Solve contextual problems involving speed, density and recipes.",
          resources: [
            { type: "interactive", title: "Speed, distance, time", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Rate formulas in context." },
            { type: "interactive", title: "Rates in context", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Speed, density and more." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Speed = distance ÷ time. A train travels 240 km in 3 hours. Find the speed in km/h.", answer: "80", explanation: "240 ÷ 3 = 80 km/h." },
            { type: "numeric", difficulty: "medium", q: "Density = mass ÷ volume. 600 g in 200 cm³. Find the density in g/cm³.", answer: "3", explanation: "600 ÷ 200 = 3 g/cm³." }
          ] }
      ]
    },

    /* ============================ Time, Units & Rates ============================ */
    {
      id: "m7-time-units",
      title: "Time, Units & Rates",
      subject: "Measurement",
      icon: "⏱️",
      summary: "Converting area and volume units, working with time and clocks, time zones, work-rate and distance-time problems, and converting units of rates.",
      objectives: [
        { text: "Convert between area and volume units.",
          resources: [
            { type: "interactive", title: "Unit conversion", provider: "Math is Fun", url: "https://www.mathsisfun.com/measure/unit-conversion-tool.html", note: "Area and volume conversions." },
            { type: "interactive", title: "Units of area & volume", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "cm², m², cm³, m³." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "How many cm² are in 1 m²?", answer: "10000", explanation: "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm²." },
            { type: "mcq", difficulty: "medium", q: "1 m³ equals how many cm³?", options: ["1000", "10000", "100000", "1000000"], answer: 3, explanation: "100 × 100 × 100 = 1,000,000 cm³." }
          ] },
        { text: "Work with hours, minutes and seconds.",
          resources: [
            { type: "interactive", title: "Time", provider: "Math is Fun", url: "https://www.mathsisfun.com/time.html", note: "Units of time." },
            { type: "interactive", title: "Time", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Converting between time units." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "How many seconds are in 3 minutes?", answer: "180", explanation: "3 × 60 = 180 seconds." },
            { type: "numeric", difficulty: "easy", q: "How many minutes are in 2.5 hours?", answer: "150", explanation: "2.5 × 60 = 150 minutes." }
          ] },
        { text: "Use the 12-hour and 24-hour clock.",
          resources: [
            { type: "interactive", title: "24-Hour Clock", provider: "Math is Fun", url: "https://www.mathsisfun.com/time.html", note: "Converting between clock formats." },
            { type: "interactive", title: "Clocks & time", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "12 and 24-hour clocks." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "3:45 pm on the 24-hour clock is:", options: ["03:45", "13:45", "15:45", "17:45"], answer: 2, explanation: "Add 12 to the pm hour: 3 + 12 = 15, so 15:45." },
            { type: "numeric", difficulty: "easy", q: "Convert 20:00 (24-hour) to a 12-hour pm time. What hour is it?", answer: "8", explanation: "20 − 12 = 8, so 8:00 pm." }
          ] },
        { text: "Add and subtract time.",
          resources: [
            { type: "interactive", title: "Adding & subtracting time", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Time calculations." },
            { type: "video", title: "Time calculations", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples (search 'time')." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "A film starts at 19:40 and lasts 2 h 35 min. What time does it end?", answer: "22:15. Add 2 h to get 21:40, then 35 min to reach 22:15.", explanation: "Add hours then minutes, carrying over 60 min into an hour." },
            { type: "numeric", difficulty: "easy", q: "From 09:15 to 11:45, how many minutes pass?", answer: "150", explanation: "2 hours 30 minutes = 150 minutes." }
          ] },
        { text: "Work with time zones.",
          resources: [
            { type: "interactive", title: "Time zones", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Calculating across zones." },
            { type: "interactive", title: "Time zones", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Time difference problems." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "London is 5 hours ahead of New York. If it is 14:00 in London, what hour is it in New York (24-hour)?", answer: "9", explanation: "14:00 − 5 hours = 09:00." },
            { type: "mcq", difficulty: "easy", q: "Travelling east across time zones, clocks generally:", options: ["go back", "go forward", "stay the same", "stop"], answer: 1, explanation: "Going east, local time is later, so clocks go forward." }
          ] },
        { text: "Solve work-rate ('men and days') problems.",
          resources: [
            { type: "interactive", title: "Inverse proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "More workers, less time." },
            { type: "video", title: "Work-rate problems", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "If 4 workers build a wall in 6 days, how many days for 8 workers (same rate)?", answer: "3", explanation: "Twice as many workers → half the time: 6 ÷ 2 = 3 days." },
            { type: "short", difficulty: "medium", q: "Two taps fill a tank in 4 hours together. Would one tap alone take more or less than 4 hours? Explain.", answer: "More — one tap fills at half the combined rate, so it takes about 8 hours, longer than 4.", explanation: "Fewer taps means a slower fill, so more time." }
          ] },
        { text: "Solve distance-time problems.",
          resources: [
            { type: "interactive", title: "Speed, distance, time", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "The distance-speed-time triangle." },
            { type: "interactive", title: "Rates", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Distance and time." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A cyclist travels at 15 km/h for 2 hours. What distance (km) is covered?", answer: "30", explanation: "Distance = speed × time = 15 × 2 = 30 km." },
            { type: "numeric", difficulty: "medium", q: "Time = distance ÷ speed. 150 km at 50 km/h takes how many hours?", answer: "3", explanation: "150 ÷ 50 = 3 hours." }
          ] },
        { text: "Use rates in different contexts.",
          resources: [
            { type: "interactive", title: "Rates", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Many kinds of rate." },
            { type: "interactive", title: "Rates", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Rate problems." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A printer prints 20 pages per minute. How many pages in 5 minutes?", answer: "100", explanation: "20 × 5 = 100 pages." },
            { type: "numeric", difficulty: "easy", q: "A tap fills 8 litres per minute. How long (minutes) to fill 40 litres?", answer: "5", explanation: "40 ÷ 8 = 5 minutes." }
          ] },
        { text: "Convert between units of rates.",
          resources: [
            { type: "interactive", title: "Converting rates", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "e.g. km/h to m/s." },
            { type: "interactive", title: "Unit conversion", provider: "Math is Fun", url: "https://www.mathsisfun.com/measure/unit-conversion-tool.html", note: "Converting compound units." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "60 km/h equals how many km/min?", options: ["1", "6", "60", "3600"], answer: 0, explanation: "60 km in 60 min = 1 km per minute." },
            { type: "numeric", difficulty: "medium", q: "Convert 2 m/s to cm/s.", answer: "200", explanation: "1 m = 100 cm, so 2 m/s = 200 cm/s." }
          ] }
      ]
    },

    /* ============================ Patterns & Sequences ============================ */
    {
      id: "m7-sequences",
      title: "Patterns & Sequences",
      subject: "Algebra",
      icon: "🔢",
      summary: "Identifying patterns, stating rules, recognising number sequences and predicting terms using rules.",
      objectives: [
        { text: "Identify patterns in sequences.",
          resources: [
            { type: "interactive", title: "Number Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Spotting the pattern." },
            { type: "interactive", title: "Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Identifying patterns." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Find the next term: 5, 11, 17, 23, ?", answer: "29", explanation: "Add 6 each time: 23 + 6 = 29." },
            { type: "numeric", difficulty: "medium", q: "Find the next term: 2, 6, 18, 54, ?", answer: "162", explanation: "Multiply by 3 each time: 54 × 3 = 162." }
          ] },
        { text: "State the rule of a pattern.",
          resources: [
            { type: "interactive", title: "Describing sequences", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Term-to-term rules." },
            { type: "video", title: "Sequences", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples (search 'sequences')." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "For 7, 12, 17, 22… the term-to-term rule is:", options: ["+4", "+5", "×2", "+7"], answer: 1, explanation: "Each term is 5 more than the previous one." },
            { type: "short", difficulty: "medium", q: "Describe the rule for 1, 2, 4, 8, 16 and give the next term.", answer: "Multiply by 2 each time; the next term is 32.", explanation: "Term-to-term rule: ×2." }
          ] },
        { text: "Recognise common number sequences.",
          resources: [
            { type: "interactive", title: "Special sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Square, triangular and Fibonacci." },
            { type: "interactive", title: "Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Recognising patterns." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Triangular numbers: 1, 3, 6, 10, ? — what is the next term?", answer: "15", explanation: "The differences grow by 1 each time: 10 + 5 = 15." },
            { type: "numeric", difficulty: "medium", q: "Fibonacci: 1, 1, 2, 3, 5, 8, ? — what is the next term?", answer: "13", explanation: "Add the two previous terms: 5 + 8 = 13." }
          ] },
        { text: "Predict terms using a position-to-term (nth term) rule.",
          resources: [
            { type: "interactive", title: "The nth term", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Position-to-term rules." },
            { type: "video", title: "nth term", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples (search 'nth term')." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "The nth term is 4n − 1. Find the 5th term.", answer: "19", explanation: "4 × 5 − 1 = 19." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 5n. Which term equals 35? Give n.", answer: "7", explanation: "5n = 35 → n = 7." }
          ] }
      ]
    },

    /* ============================ Indices & Exponents ============================ */
    {
      id: "m7-indices",
      title: "Indices & Exponents",
      subject: "Algebra",
      icon: "ⁿ",
      summary: "The laws of indices, negative and zero powers, distributing powers, fractional indices, and applying index laws to algebraic expressions.",
      objectives: [
        { text: "Apply the laws of indices.",
          resources: [
            { type: "interactive", title: "Laws of Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "All the rules together." },
            { type: "interactive", title: "Exponent properties", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice the laws." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "x³ × x⁴ = ?", options: ["x⁷", "x¹²", "x¹", "2x⁷"], answer: 0, explanation: "Add the powers: 3 + 4 = 7." },
            { type: "mcq", difficulty: "easy", q: "x⁵ ÷ x² = ?", options: ["x³", "x⁷", "x²·⁵", "x¹⁰"], answer: 0, explanation: "Subtract the powers: 5 − 2 = 3." }
          ] },
        { text: "Add, subtract and multiply powers correctly.",
          resources: [
            { type: "interactive", title: "Exponent laws", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "Power of a power." },
            { type: "video", title: "Indices", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples (search 'indices')." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(x²)³ = ?", options: ["x⁵", "x⁶", "x⁸", "x⁹"], answer: 1, explanation: "Power of a power: multiply, 2 × 3 = 6." },
            { type: "tf", difficulty: "medium", q: "x² + x³ can be simplified to x⁵.", answer: false, explanation: "You cannot add unlike powers; x² + x³ stays as it is." }
          ] },
        { text: "Use negative powers.",
          resources: [
            { type: "interactive", title: "Negative Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/negative-exponents.html", note: "Reciprocals from negative powers." },
            { type: "interactive", title: "Negative exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "x⁻² equals:", options: ["−x²", "1/x²", "2/x", "x²"], answer: 1, explanation: "A negative power means the reciprocal: x⁻² = 1/x²." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 2⁻³ as a decimal.", answer: "0.125", explanation: "2⁻³ = 1/2³ = 1/8 = 0.125." }
          ] },
        { text: "Use the zero power.",
          resources: [
            { type: "interactive", title: "Exponent laws", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "The zero rule." },
            { type: "interactive", title: "Exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Zero and one as exponents." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Evaluate 7⁰.", answer: "1", explanation: "Any non-zero number to the power 0 is 1." },
            { type: "tf", difficulty: "easy", q: "Any non-zero base to the power 0 equals 1.", answer: true, explanation: "This is the zero rule of indices." }
          ] },
        { text: "Distribute powers over products.",
          resources: [
            { type: "interactive", title: "Exponent of a product", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "(ab)ⁿ = aⁿbⁿ." },
            { type: "interactive", title: "Powers of products", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Distributing exponents." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(2x)³ = ?", options: ["2x³", "6x³", "8x³", "8x"], answer: 2, explanation: "Cube both parts: 2³ × x³ = 8x³." },
            { type: "mcq", difficulty: "easy", q: "(ab)² = ?", options: ["ab²", "a²b", "a²b²", "2ab"], answer: 2, explanation: "Square each factor: a²b²." }
          ] },
        { text: "Use fractional indices.",
          resources: [
            { type: "interactive", title: "Fractional Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-fractional.html", note: "Roots written as powers." },
            { type: "interactive", title: "Fractional exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "x^(1/2) means:", options: ["√x", "x²", "2x", "1/x"], answer: 0, explanation: "A power of one-half is a square root." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 16^(1/2).", answer: "4", explanation: "16^(1/2) = √16 = 4." }
          ] },
        { text: "Simplify numerical expressions with indices.",
          resources: [
            { type: "interactive", title: "Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/exponent.html", note: "Working out powers." },
            { type: "interactive", title: "Order of operations with exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Simplify x⁴ × x² ÷ x³.", options: ["x³", "x⁹", "x²", "x"], answer: 0, explanation: "Add then subtract powers: 4 + 2 − 3 = 3." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 3² × 3⁰. (give the number)", answer: "9", explanation: "3² × 1 = 9." }
          ] },
        { text: "Apply index laws to algebraic expressions.",
          resources: [
            { type: "interactive", title: "Index laws in algebra", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Simplifying algebraic powers." },
            { type: "interactive", title: "Exponents in algebra", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Simplify 2x² × 3x³.", options: ["5x⁵", "6x⁵", "6x⁶", "5x⁶"], answer: 1, explanation: "Multiply numbers (2×3=6), add powers (2+3=5): 6x⁵." },
            { type: "mcq", difficulty: "medium", q: "Simplify 12x⁵ ÷ 4x².", options: ["3x³", "8x³", "3x⁷", "16x³"], answer: 0, explanation: "12 ÷ 4 = 3, x⁵⁻² = x³: 3x³." }
          ] }
      ]
    },

    /* ============================ Algebraic Expressions ============================ */
    {
      id: "m7-expressions",
      title: "Algebraic Expressions",
      subject: "Algebra",
      icon: "✖️",
      summary: "Substitution, simplifying, the distributive property, expanding brackets, multiplying and squaring binomials, special products, and equivalent expressions.",
      objectives: [
        { text: "Substitute values into algebraic expressions.",
          resources: [
            { type: "interactive", title: "Substitution", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Putting numbers in for letters." },
            { type: "interactive", title: "Evaluating expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "If x = 3, evaluate 2x² + 1.", answer: "19", explanation: "2 × 3² + 1 = 2 × 9 + 1 = 19." },
            { type: "numeric", difficulty: "easy", q: "If a = 2 and b = 5, evaluate 3a + 2b.", answer: "16", explanation: "3 × 2 + 2 × 5 = 6 + 10 = 16." }
          ] },
        { text: "Simplify expressions by collecting like terms.",
          resources: [
            { type: "interactive", title: "Like Terms", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/like-terms.html", note: "Collecting like terms." },
            { type: "interactive", title: "Combining like terms", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Simplify 3x + 2x − x.", options: ["4x", "5x", "6x", "x"], answer: 0, explanation: "3 + 2 − 1 = 4, so 4x." },
            { type: "mcq", difficulty: "medium", q: "Simplify 4a + 3b − 2a + b.", options: ["2a + 4b", "6a + 2b", "2a + 2b", "2a + 3b"], answer: 0, explanation: "a-terms: 4 − 2 = 2; b-terms: 3 + 1 = 4 → 2a + 4b." }
          ] },
        { text: "Use the distributive property.",
          resources: [
            { type: "interactive", title: "Distributive property", provider: "Math is Fun", url: "https://www.mathsisfun.com/associative-commutative-distributive.html", note: "a(b + c) = ab + ac." },
            { type: "interactive", title: "Distributive property", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "3(x + 4) = ?", options: ["3x + 4", "3x + 12", "x + 12", "3x + 7"], answer: 1, explanation: "Multiply each term by 3: 3x + 12." },
            { type: "mcq", difficulty: "medium", q: "2(3x − 5) = ?", options: ["6x − 5", "6x − 10", "5x − 10", "6x + 10"], answer: 1, explanation: "2 × 3x = 6x and 2 × −5 = −10." }
          ] },
        { text: "Expand single brackets.",
          resources: [
            { type: "interactive", title: "Expanding brackets", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Multiplying out a bracket." },
            { type: "video", title: "Expanding brackets", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Expand x(x + 3).", options: ["x² + 3", "x² + 3x", "2x + 3", "x + 3x"], answer: 1, explanation: "x × x = x² and x × 3 = 3x." },
            { type: "mcq", difficulty: "medium", q: "Expand −2(x − 4).", options: ["−2x − 8", "−2x + 8", "2x − 8", "−2x + 4"], answer: 1, explanation: "−2 × x = −2x and −2 × −4 = +8." }
          ] },
        { text: "Multiply two binomials.",
          resources: [
            { type: "interactive", title: "Multiplying binomials (FOIL)", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "FOIL method." },
            { type: "interactive", title: "Multiplying binomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(x + 2)(x + 3) = ?", options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 5", "x² + 6"], answer: 0, explanation: "FOIL: x² + 3x + 2x + 6 = x² + 5x + 6." },
            { type: "mcq", difficulty: "medium", q: "(x + 1)(x − 4) = ?", options: ["x² − 3x − 4", "x² + 3x − 4", "x² − 4x − 4", "x² − 3x + 4"], answer: 0, explanation: "x² − 4x + x − 4 = x² − 3x − 4." }
          ] },
        { text: "Square a binomial.",
          resources: [
            { type: "interactive", title: "Perfect square expansion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "(a + b)² = a² + 2ab + b²." },
            { type: "video", title: "Squaring brackets", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(x + 3)² = ?", options: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "x² + 6x + 6"], answer: 1, explanation: "(x+3)² = x² + 2(3)x + 9 = x² + 6x + 9." },
            { type: "mcq", difficulty: "medium", q: "(x − 5)² = ?", options: ["x² − 25", "x² − 10x + 25", "x² + 10x + 25", "x² − 10x − 25"], answer: 1, explanation: "(x−5)² = x² − 10x + 25." }
          ] },
        { text: "Use the special product (a + b)(a − b).",
          resources: [
            { type: "interactive", title: "Difference of two squares", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "(a+b)(a−b) = a² − b²." },
            { type: "interactive", title: "Special products", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(x + 4)(x − 4) = ?", options: ["x² − 16", "x² + 16", "x² − 8x − 16", "x² − 16x"], answer: 0, explanation: "Difference of two squares: x² − 4² = x² − 16." },
            { type: "numeric", difficulty: "medium", q: "(a + b)(a − b) = a² − b². With a = 10 and b = 3, evaluate a² − b².", answer: "91", explanation: "100 − 9 = 91." }
          ] },
        { text: "Multiply a binomial by a trinomial.",
          resources: [
            { type: "interactive", title: "Multiplying polynomials", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "Each term times each term." },
            { type: "interactive", title: "Multiplying polynomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Expand (x + 1)(x² + 2x + 1). The constant term is:", options: ["1", "2", "0", "3"], answer: 0, explanation: "The constant comes from 1 × 1 = 1." },
            { type: "short", difficulty: "medium", q: "When multiplying a binomial (2 terms) by a trinomial (3 terms), how many products do you get before simplifying?", answer: "2 × 3 = 6 products (terms) before collecting like terms.", explanation: "Each term in the first bracket multiplies each in the second." }
          ] },
        { text: "Work with rational (fractional) coefficients.",
          resources: [
            { type: "interactive", title: "Algebra with fractions", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Fractional coefficients." },
            { type: "interactive", title: "Expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Simplify (1/2)x + (1/2)x.", options: ["x", "(1/2)x", "x²", "(1/4)x"], answer: 0, explanation: "1/2 + 1/2 = 1, so the result is x." },
            { type: "numeric", difficulty: "easy", q: "If x = 4, evaluate (1/2)x + 3.", answer: "5", explanation: "(1/2)(4) + 3 = 2 + 3 = 5." }
          ] },
        { text: "Recognise equivalent expressions.",
          resources: [
            { type: "interactive", title: "Equivalent expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "When two expressions are equal." },
            { type: "interactive", title: "Algebra basics", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Equivalent forms." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "2(x + 3) and 2x + 6 are equivalent expressions.", answer: true, explanation: "Expanding 2(x + 3) gives 2x + 6." },
            { type: "mcq", difficulty: "medium", q: "Which is equivalent to 4x + 8?", options: ["4(x + 2)", "4(x + 8)", "x + 2", "4x² + 8"], answer: 0, explanation: "Factor out 4: 4(x + 2)." }
          ] }
      ]
    },

    /* ============================ Factorisation ============================ */
    {
      id: "m7-factorisation",
      title: "Factorisation",
      subject: "Algebra",
      icon: "🧩",
      summary: "Factorising as the reverse of expanding, taking out common factors, factorising with powers and by grouping, middle-term factorisation, and HCF/LCM of algebraic terms.",
      objectives: [
        { text: "Understand factorising as the reverse of expanding.",
          resources: [
            { type: "interactive", title: "Factoring", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Undoing expansion." },
            { type: "interactive", title: "Factoring intro", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Factorising is the reverse of expanding.", answer: true, explanation: "Factorising puts an expression back into brackets." },
            { type: "mcq", difficulty: "easy", q: "Factorise 3x + 6.", options: ["3(x + 2)", "3(x + 6)", "x(3 + 6)", "3x + 6"], answer: 0, explanation: "HCF is 3: 3x + 6 = 3(x + 2)." }
          ] },
        { text: "Carry out simple factorisation (common factors).",
          resources: [
            { type: "interactive", title: "Common factors", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Taking out the HCF." },
            { type: "video", title: "Factorising", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Factorise 5x + 10.", options: ["5(x + 2)", "5(x + 10)", "x(5 + 10)", "10(x + 1)"], answer: 0, explanation: "HCF 5: 5(x + 2)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 8a − 12.", options: ["4(2a − 3)", "2(4a − 6)", "8(a − 12)", "4(2a − 12)"], answer: 0, explanation: "HCF 4: 4(2a − 3)." }
          ] },
        { text: "Factorise expressions involving powers.",
          resources: [
            { type: "interactive", title: "Factoring with powers", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Common variable factors." },
            { type: "interactive", title: "Factoring", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Factorise x² + x.", options: ["x(x + 1)", "x²(1 + x)", "x(x² + 1)", "1(x² + x)"], answer: 0, explanation: "Common factor x: x(x + 1)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 6x² + 9x.", options: ["3x(2x + 3)", "3(2x² + 3x)", "x(6x + 9)", "3x(2x + 9)"], answer: 0, explanation: "HCF is 3x: 3x(2x + 3)." }
          ] },
        { text: "Factorise by grouping.",
          resources: [
            { type: "interactive", title: "Factoring by grouping", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Grouping pairs of terms." },
            { type: "interactive", title: "Factoring", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Grouping method." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Factorise x(a + b) + 2(a + b).", options: ["(a + b)(x + 2)", "(a + b)(x − 2)", "x + 2 + a + b", "(a + b)²"], answer: 0, explanation: "Common factor (a + b): (a + b)(x + 2)." },
            { type: "short", difficulty: "hard", q: "Factorise ax + ay + bx + by by grouping.", answer: "a(x + y) + b(x + y) = (x + y)(a + b).", explanation: "Group in pairs, take out common factors, then the common bracket." }
          ] },
        { text: "Apply the rules (laws) of factorisation.",
          resources: [
            { type: "interactive", title: "Factoring rules", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Always take out the HCF first." },
            { type: "interactive", title: "Factoring", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The HCF of 4x and 6x² is:", options: ["2x", "2x²", "4x", "12x²"], answer: 0, explanation: "Number HCF 2, variable HCF x → 2x." },
            { type: "tf", difficulty: "easy", q: "You should always take out the highest common factor first when factorising.", answer: true, explanation: "This simplifies what remains inside the brackets." }
          ] },
        { text: "Factorise quadratics by splitting the middle term.",
          resources: [
            { type: "interactive", title: "Factoring quadratics", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring-quadratics.html", note: "Finding two numbers that multiply and add." },
            { type: "video", title: "Factorising quadratics", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Factorise x² + 5x + 6.", options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 2)(x + 4)", "(x − 2)(x − 3)"], answer: 0, explanation: "2 and 3 multiply to 6 and add to 5." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² + 7x + 12.", options: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x + 5)(x + 2)"], answer: 0, explanation: "3 and 4 multiply to 12 and add to 7." }
          ] },
        { text: "Find the HCF and LCM of algebraic terms.",
          resources: [
            { type: "interactive", title: "HCF & LCM of terms", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Highest common factor of algebraic terms." },
            { type: "interactive", title: "GCF of monomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "The HCF of 6x²y and 9xy² is:", options: ["3xy", "3x²y²", "18x²y²", "xy"], answer: 0, explanation: "Number HCF 3, then lowest powers x and y → 3xy." },
            { type: "mcq", difficulty: "medium", q: "The LCM of 2x and 3x is:", options: ["6x", "5x", "x", "6x²"], answer: 0, explanation: "Number LCM 6, variable x → 6x." }
          ] }
      ]
    },

    /* ============================ Algebraic Fractions ============================ */
    {
      id: "m7-algebraic-fractions",
      title: "Algebraic Fractions",
      subject: "Algebra",
      icon: "➗",
      summary: "Adding, subtracting, multiplying and dividing algebraic fractions, fractions with numeric denominators, and HCF/LCM of algebraic expressions.",
      objectives: [
        { text: "Add and subtract algebraic fractions.",
          resources: [
            { type: "interactive", title: "Algebraic fractions", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Common denominators with letters." },
            { type: "video", title: "Adding algebraic fractions", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "x/3 + x/3 = ?", options: ["2x/3", "x/3", "2x/6", "x²/3"], answer: 0, explanation: "Same denominator: add the tops, x + x = 2x → 2x/3." },
            { type: "mcq", difficulty: "medium", q: "x/2 + x/4 = ?", options: ["3x/4", "2x/6", "x/6", "x/8"], answer: 0, explanation: "Common denominator 4: 2x/4 + x/4 = 3x/4." }
          ] },
        { text: "Multiply and divide algebraic fractions.",
          resources: [
            { type: "interactive", title: "Multiplying algebraic fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Cancel common factors." },
            { type: "interactive", title: "Algebraic fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Operations on fractions." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(x/2) × (3/x) = ?", options: ["3/2", "x²/6", "3x/2", "3/(2x)"], answer: 0, explanation: "x cancels: (x × 3)/(2 × x) = 3/2." },
            { type: "mcq", difficulty: "hard", q: "(a/b) ÷ (a/c) = ?", options: ["c/b", "a²/(bc)", "b/c", "a/(bc)"], answer: 0, explanation: "Multiply by the reciprocal: (a/b)(c/a) = c/b." }
          ] },
        { text: "Work with algebraic fractions that have numeric denominators.",
          resources: [
            { type: "interactive", title: "Simplifying fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Dividing each term." },
            { type: "interactive", title: "Algebraic fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Simplify (2x + 4)/2.", options: ["x + 2", "2x + 2", "x + 4", "x + 2x"], answer: 0, explanation: "Divide each term by 2: x + 2." },
            { type: "numeric", difficulty: "easy", q: "If x = 6, evaluate (3x)/2.", answer: "9", explanation: "(3 × 6)/2 = 18/2 = 9." }
          ] },
        { text: "Find the HCF and LCM of algebraic expressions and fractions.",
          resources: [
            { type: "interactive", title: "HCF & LCM (algebra)", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Common denominators for algebraic fractions." },
            { type: "interactive", title: "LCM of denominators", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The LCM of the denominators in x/4 + x/6 is:", options: ["12", "24", "10", "6"], answer: 0, explanation: "The lowest common multiple of 4 and 6 is 12." },
            { type: "short", difficulty: "medium", q: "To add x/3 + x/4, what common denominator do you use, and what is the sum?", answer: "Use 12: x/3 = 4x/12 and x/4 = 3x/12, so the sum is 7x/12.", explanation: "LCM of 3 and 4 is 12." }
          ] }
      ]
    },

    /* ============================ Polynomials, Squares & Cubes ============================ */
    {
      id: "m7-polynomials",
      title: "Polynomials, Squares & Cubes",
      subject: "Algebra",
      icon: "🟦",
      summary: "Introducing polynomials and degree, algebraic squares of binomials and trinomials, algebraic cubes, and recognising mixed-degree expressions.",
      objectives: [
        { text: "Recognise polynomials and their degree.",
          resources: [
            { type: "interactive", title: "Polynomials", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials.html", note: "What a polynomial is and its degree." },
            { type: "interactive", title: "Intro to polynomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which is a polynomial?", options: ["x² + 3x − 1", "1/x + 2", "√x + 1", "x⁻² + x"], answer: 0, explanation: "Polynomials have whole-number powers of x only." },
            { type: "mcq", difficulty: "medium", q: "The degree of 4x³ + 2x − 7 is:", options: ["1", "2", "3", "7"], answer: 2, explanation: "The degree is the highest power, which is 3." }
          ] },
        { text: "Square binomials and trinomials.",
          resources: [
            { type: "interactive", title: "Perfect squares", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "(a + b)² and beyond." },
            { type: "interactive", title: "Squaring expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(x + y)² = ?", options: ["x² + y²", "x² + 2xy + y²", "x² − 2xy + y²", "2x + 2y"], answer: 1, explanation: "(x + y)² = x² + 2xy + y²." },
            { type: "mcq", difficulty: "medium", q: "(a − b)² = ?", options: ["a² − b²", "a² − 2ab + b²", "a² + 2ab + b²", "a² − ab + b²"], answer: 1, explanation: "(a − b)² = a² − 2ab + b²." }
          ] },
        { text: "Expand algebraic cubes.",
          resources: [
            { type: "interactive", title: "Cubing binomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "(a + b)³ expansion." },
            { type: "interactive", title: "Polynomials", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials.html", note: "Higher powers." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "(x + y)³ = x³ + 3x²y + 3xy² + y³. The coefficient of x²y is:", options: ["1", "2", "3", "6"], answer: 2, explanation: "The middle terms have coefficient 3." },
            { type: "numeric", difficulty: "easy", q: "Using (a + b)³ with a = 2 and b = 0, evaluate (2 + 0)³.", answer: "8", explanation: "2³ = 8." }
          ] },
        { text: "Recognise heterogeneous (mixed-degree) expressions.",
          resources: [
            { type: "interactive", title: "Polynomial terms", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials.html", note: "Degrees of terms." },
            { type: "interactive", title: "Polynomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "A heterogeneous expression has terms of different degrees, like x² + x + 1.", answer: true, explanation: "Its terms have degrees 2, 1 and 0." },
            { type: "mcq", difficulty: "medium", q: "Which expression has terms of mixed degree?", options: ["x² + 2x + 1", "x² + y² (both degree 2)", "2x + 3y (both degree 1)", "x³ + y³ (both degree 3)"], answer: 0, explanation: "x² + 2x + 1 has degrees 2, 1 and 0." }
          ] }
      ]
    },

    /* ============================ Equations & Inequalities ============================ */
    {
      id: "m7-equations",
      title: "Equations & Inequalities",
      subject: "Algebra",
      icon: "🟰",
      summary: "Solving one-, two- and multi-step equations, solving inequalities, and forming equations from contexts.",
      objectives: [
        { text: "Solve one-step equations.",
          resources: [
            { type: "interactive", title: "One-step equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Inverse operations." },
            { type: "interactive", title: "One-step equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Solve x − 5 = 9. What is x?", answer: "14", explanation: "Add 5 to both sides: x = 14." },
            { type: "numeric", difficulty: "easy", q: "Solve x/3 = 4. What is x?", answer: "12", explanation: "Multiply both sides by 3: x = 12." }
          ] },
        { text: "Solve two-step equations.",
          resources: [
            { type: "interactive", title: "Two-step equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Two inverse operations." },
            { type: "video", title: "Two-step equations", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Solve 2x + 3 = 11. What is x?", answer: "4", explanation: "Subtract 3 then divide by 2: x = 8 ÷ 2 = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 3x − 4 = 11. What is x?", answer: "5", explanation: "Add 4 then divide by 3: x = 15 ÷ 3 = 5." }
          ] },
        { text: "Solve multi-step equations.",
          resources: [
            { type: "interactive", title: "Multi-step equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Brackets and variables on both sides." },
            { type: "interactive", title: "Solving equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Step-by-step." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Solve 2(x + 3) = 16. What is x?", answer: "5", explanation: "Expand: 2x + 6 = 16 → 2x = 10 → x = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve 5x − 2 = 3x + 8. What is x?", answer: "5", explanation: "5x − 3x = 8 + 2 → 2x = 10 → x = 5." }
          ] },
        { text: "Solve inequalities.",
          resources: [
            { type: "interactive", title: "Solving Inequalities", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/inequality-solving.html", note: "Rules for inequalities." },
            { type: "interactive", title: "Inequalities", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Solve 2x + 1 > 7.", options: ["x > 3", "x < 3", "x > 4", "x > 8"], answer: 0, explanation: "2x > 6 → x > 3." },
            { type: "tf", difficulty: "hard", q: "When you multiply or divide an inequality by a negative number, you must flip the inequality sign.", answer: true, explanation: "e.g. −2x < 6 becomes x > −3." }
          ] },
        { text: "Form and solve equations from word problems.",
          resources: [
            { type: "interactive", title: "Forming equations", provider: "BBC Bitesize", url: "https://www.bbc.co.uk/bitesize/subjects/z38pycw", note: "Turning words into algebra." },
            { type: "video", title: "Forming equations", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "I think of a number, multiply by 3 and add 4 to get 19. Form and solve an equation.", answer: "3x + 4 = 19 → 3x = 15 → x = 5.", explanation: "Translate the words, then solve." },
            { type: "numeric", difficulty: "easy", q: "A square has perimeter 32 cm. Form 4x = 32 and solve for the side length x (cm).", answer: "8", explanation: "x = 32 ÷ 4 = 8 cm." }
          ] }
      ]
    },

    /* ============================ Geometry & Measurement ============================ */
    {
      id: "m7-geometry",
      title: "Geometry & Measurement",
      subject: "Geometry",
      icon: "📐",
      summary: "Area and perimeter, composite area, scale drawings, surface area, volume of prisms using V = Bh, and real-world volume problems.",
      objectives: [
        { text: "Review area and perimeter of basic shapes.",
          resources: [
            { type: "interactive", title: "Area & Perimeter", provider: "Math is Fun", url: "https://www.mathsisfun.com/area.html", note: "Formulas and examples." },
            { type: "interactive", title: "Area & perimeter", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A rectangle is 8 cm by 5 cm. What is its perimeter (cm)?", answer: "26", explanation: "P = 2(8 + 5) = 26 cm." },
            { type: "numeric", difficulty: "easy", q: "Find the area of a triangle with base 12 cm and height 5 cm (cm²).", answer: "30", explanation: "½ × 12 × 5 = 30 cm²." }
          ] },
        { text: "Find the area of composite shapes.",
          resources: [
            { type: "interactive", title: "Composite area", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Splitting into simple shapes." },
            { type: "video", title: "Area of compound shapes", provider: "Corbettmaths", url: "https://corbettmaths.com/contents/", note: "Worked examples." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "An L-shape is a 6×4 rectangle plus a 3×2 rectangle. What is the total area?", answer: "30", explanation: "24 + 6 = 30 square units." },
            { type: "short", difficulty: "medium", q: "How do you find the area of a shape made of a rectangle with a triangle on top?", answer: "Find each area separately (rectangle = length × width, triangle = ½ × base × height) and add them together.", explanation: "Split a composite shape into simple parts." }
          ] },
        { text: "Use and interpret scale drawings.",
          resources: [
            { type: "interactive", title: "Scale drawings", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Using a map scale." },
            { type: "interactive", title: "Scale", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/index.html", note: "Scale and ratio." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A map scale is 1:100. A wall is 5 cm on the map. What is the real length in cm?", answer: "500", explanation: "5 × 100 = 500 cm." },
            { type: "mcq", difficulty: "easy", q: "On a 1:50 scale drawing, 2 cm represents:", options: ["100 cm", "50 cm", "25 cm", "2 cm"], answer: 0, explanation: "2 × 50 = 100 cm." }
          ] },
        { text: "Find the surface area of solids.",
          resources: [
            { type: "interactive", title: "Surface Area", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/surface-area.html", note: "Adding up all the faces." },
            { type: "interactive", title: "Surface area", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Surface area of a cube with side 3 cm = 6 × side². Find it in cm².", answer: "54", explanation: "6 × 3² = 6 × 9 = 54 cm²." },
            { type: "numeric", difficulty: "easy", q: "A cuboid is 2×3×4. One face measures 3 cm by 4 cm. What is the area of that face (cm²)?", answer: "12", explanation: "3 × 4 = 12 cm²." }
          ] },
        { text: "Find the volume of prisms using V = Bh.",
          resources: [
            { type: "interactive", title: "Volume of a prism", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/prisms.html", note: "V = base area × height." },
            { type: "interactive", title: "Volume", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A prism has base area B = 10 cm² and height h = 6 cm. Find its volume (cm³).", answer: "60", explanation: "V = Bh = 10 × 6 = 60 cm³." },
            { type: "numeric", difficulty: "easy", q: "Find the volume of a cuboid 2 × 3 × 5 (cm³).", answer: "30", explanation: "2 × 3 × 5 = 30 cm³." }
          ] },
        { text: "Solve real-world volume problems.",
          resources: [
            { type: "interactive", title: "Volume problems", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Volume in context." },
            { type: "interactive", title: "Volume", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Word problems." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A tank is 1 m × 2 m × 0.5 m. What is its volume in m³?", answer: "1", explanation: "1 × 2 × 0.5 = 1 m³." },
            { type: "short", difficulty: "medium", q: "A box is 10 cm × 10 cm × 10 cm. Explain how to find its volume and give the answer in cm³.", answer: "Volume = length × width × height = 10 × 10 × 10 = 1000 cm³.", explanation: "Multiply the three dimensions." }
          ] }
      ]
    },

    /* ============================ Statistics & Probability ============================ */
    {
      id: "m7-statistics",
      title: "Statistics & Probability",
      subject: "Data",
      icon: "📊",
      summary: "Simple probability, experimental vs theoretical probability, sampling, measures of central tendency, data displays and interpreting graphs.",
      objectives: [
        { text: "Calculate simple probability.",
          resources: [
            { type: "interactive", title: "Probability", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/probability.html", note: "Likelihood of outcomes." },
            { type: "interactive", title: "Basic probability", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A fair die is rolled. P(rolling a 4) = ?", options: ["1/6", "1/4", "4/6", "1/2"], answer: 0, explanation: "One favourable outcome out of six: 1/6." },
            { type: "numeric", difficulty: "medium", q: "A bag has 3 red and 2 blue balls. P(red) as a decimal (1 dp)?", answer: "0.6", explanation: "3 out of 5 = 0.6." }
          ] },
        { text: "Compare experimental and theoretical probability.",
          resources: [
            { type: "interactive", title: "Theoretical vs experimental", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Prediction vs results." },
            { type: "interactive", title: "Probability", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/probability.html", note: "Outcomes and trials." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "Theoretical probability is based on equally likely outcomes; experimental probability is based on results of trials.", answer: true, explanation: "Theory predicts; experiment measures." },
            { type: "mcq", difficulty: "medium", q: "A coin is flipped 100 times, landing heads 54 times. The experimental probability of heads is:", options: ["0.5", "0.54", "0.46", "54"], answer: 1, explanation: "54 ÷ 100 = 0.54." }
          ] },
        { text: "Understand sampling.",
          resources: [
            { type: "interactive", title: "Sampling", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Representative samples." },
            { type: "interactive", title: "Data sampling", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Fair samples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A good sample should be:", options: ["large and representative", "small and biased", "only your friends", "the whole population always"], answer: 0, explanation: "Larger, representative samples give reliable results." },
            { type: "tf", difficulty: "easy", q: "A biased sample can make results misleading.", answer: true, explanation: "Bias distorts the conclusions." }
          ] },
        { text: "Find measures of central tendency.",
          resources: [
            { type: "interactive", title: "Mean, Median, Mode", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/central-measures.html", note: "The three averages." },
            { type: "interactive", title: "Averages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Find the mean of 4, 6, 8, 10.", answer: "7", explanation: "(4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7." },
            { type: "numeric", difficulty: "medium", q: "Find the median of 3, 7, 9, 12, 15.", answer: "9", explanation: "The middle value of five ordered numbers is 9." }
          ] },
        { text: "Choose and read data displays.",
          resources: [
            { type: "interactive", title: "Data displays", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Bar charts, pie charts and more." },
            { type: "interactive", title: "Charts & graphs", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Reading displays." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which display is best for showing parts of a whole?", options: ["pie chart", "line graph", "scatter plot", "time series"], answer: 0, explanation: "A pie chart shows proportions of a whole." },
            { type: "tf", difficulty: "easy", q: "A bar chart is suitable for comparing categories.", answer: true, explanation: "Bars make category comparisons easy." }
          ] },
        { text: "Interpret graphs.",
          resources: [
            { type: "interactive", title: "Interpreting graphs", provider: "BBC Bitesize (KS3)", url: "https://www.bbc.co.uk/bitesize/subjects/zqhs34j", note: "Reading and describing graphs." },
            { type: "interactive", title: "Graph interpretation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "A line graph of temperature rises then falls. What does the rising part tell you?", answer: "During the rising part, the temperature is increasing over that period of time.", explanation: "An upward slope means the quantity is increasing." },
            { type: "mcq", difficulty: "medium", q: "On a distance-time graph, a steeper line means:", options: ["faster speed", "slower speed", "stopped", "going backwards"], answer: 0, explanation: "Steeper gradient = greater speed." }
          ] }
      ]
    }
  ]
});
