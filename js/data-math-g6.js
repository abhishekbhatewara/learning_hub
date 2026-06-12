/* Mathematics — Grade 6: Foundations (Numerical Fluency)
   PER-OBJECTIVE schema: each objective is { text, resources[], quiz[] }. */
window.CURRICULUM_MATH.grades.push({
  id: "grade-6",
  name: "Grade 6",
  tagline: "Numerical Fluency",
  color: "#0d9488",
  blurb: "Fractions, ratios, decimals, percentages, integers, factors & multiples, indices, sequences, and an introduction to algebra and geometry.",
  topics: [

    /* ================================================================ */
    {
      id: "m6-fractions",
      title: "Fractions",
      subject: "Number",
      icon: "🍕",
      summary: "Equivalent fractions, the four operations with fractions, mixed and improper forms, fractions of a quantity, and order of operations.",
      objectives: [
        {
          text: "Find and recognise equivalent fractions.",
          resources: [
            { type: "interactive", title: "Equivalent Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/equivalent_fractions.html", note: "Visual explanation with an interactive tool." },
            { type: "interactive", title: "Equivalent fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Videos and practice on equivalent fractions." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which fraction is equivalent to 2/3?", options: ["4/9", "4/6", "6/8", "3/4"], answer: 1, explanation: "Multiply numerator and denominator by 2: 2/3 = 4/6." },
            { type: "numeric", difficulty: "easy", q: "Fill the blank: 3/4 = ?/12", answer: "9", explanation: "4 × 3 = 12, so multiply the top by 3 too: 3 × 3 = 9." }
          ]
        },
        {
          text: "Add and subtract fractions, including those with different denominators.",
          resources: [
            { type: "interactive", title: "Adding Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions_addition.html", note: "Step-by-step with common denominators." },
            { type: "interactive", title: "Subtracting Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions_subtraction.html", note: "Subtracting fractions, step by step." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "1/4 + 2/4 = ?", options: ["3/8", "3/4", "2/4", "1/2"], answer: 1, explanation: "Same denominator: add the tops, 1 + 2 = 3, giving 3/4." },
            { type: "numeric", difficulty: "medium", q: "Work out 7/10 + 1/10 and give your answer as a decimal.", answer: "0.8", explanation: "7/10 + 1/10 = 8/10 = 0.8." }
          ]
        },
        {
          text: "Write whole numbers as fractions.",
          resources: [
            { type: "interactive", title: "Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions.html", note: "How any whole number can be written over 1." },
            { type: "interactive", title: "Fractions intro", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", note: "Whole numbers and fractions." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The whole number 3 written as a fraction is:", options: ["1/3", "3/1", "3/3", "0/3"], answer: 1, explanation: "Any whole number is itself over 1: 3 = 3/1." },
            { type: "numeric", difficulty: "medium", q: "Write 4 as a number of quarters: 4 = ?/4", answer: "16", explanation: "Each whole is 4 quarters, so 4 wholes = 16 quarters = 16/4." }
          ]
        },
        {
          text: "Convert between mixed numbers and improper fractions.",
          resources: [
            { type: "interactive", title: "Mixed Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/mixed-fractions.html", note: "Converting both ways with examples." },
            { type: "interactive", title: "Mixed & improper fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", note: "Practice converting." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The mixed number 2 1/3 as an improper fraction is:", options: ["6/3", "7/3", "5/3", "2/3"], answer: 1, explanation: "2 × 3 + 1 = 7, over 3: 7/3." },
            { type: "mcq", difficulty: "medium", q: "The improper fraction 11/4 as a mixed number is:", options: ["2 3/4", "3 1/4", "2 1/4", "1 3/4"], answer: 0, explanation: "11 ÷ 4 = 2 remainder 3, so 2 3/4." }
          ]
        },
        {
          text: "Multiply and divide fractions.",
          resources: [
            { type: "interactive", title: "Multiplying & Dividing Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions_multiplication.html", note: "Multiply tops/bottoms; divide by the reciprocal." },
            { type: "interactive", title: "Multiplying & dividing fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", note: "Worked examples and practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "1/2 × 3/5 = ?", options: ["3/10", "4/7", "3/5", "1/10"], answer: 0, explanation: "Multiply tops (1×3=3) and bottoms (2×5=10): 3/10." },
            { type: "mcq", difficulty: "medium", q: "1/2 ÷ 1/4 = ?", options: ["1/8", "2", "1/2", "8"], answer: 1, explanation: "Divide by multiplying by the reciprocal: 1/2 × 4/1 = 2." }
          ]
        },
        {
          text: "Find a fraction of a quantity.",
          resources: [
            { type: "interactive", title: "Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions.html", note: "Finding a fraction of an amount." },
            { type: "interactive", title: "Fractions of numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice problems." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "What is 3/4 of 20?", answer: "15", explanation: "20 ÷ 4 = 5, then × 3 = 15." },
            { type: "numeric", difficulty: "medium", q: "What is 2/5 of 35?", answer: "14", explanation: "35 ÷ 5 = 7, then × 2 = 14." }
          ]
        },
        {
          text: "Solve mixed-operation word problems involving fractions.",
          resources: [
            { type: "interactive", title: "Fraction word problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Apply fractions to real situations." },
            { type: "interactive", title: "Khan Academy: Fraction arithmetic", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", note: "Apply fractions to word problems." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A jug holds 3/4 litre. You pour out 1/4 litre. How many litres remain? (decimal)", answer: "0.5", explanation: "3/4 − 1/4 = 2/4 = 1/2 = 0.5 litre." },
            { type: "short", difficulty: "hard", q: "A recipe needs 2/3 cup of sugar. You make half the recipe. How much sugar do you need, and how did you work it out?", answer: "Half of 2/3 means 1/2 × 2/3 = 2/6 = 1/3 cup. You multiply the amount by 1/2 (halving), then simplify.", explanation: "'Half of' a fraction = multiply by 1/2." }
          ]
        },
        {
          text: "Apply BODMAS (order of operations) to calculations with fractions.",
          resources: [
            { type: "interactive", title: "Order of Operations (BODMAS)", provider: "Math is Fun", url: "https://www.mathsisfun.com/operation-order-bodmas.html", note: "The order to do operations in." },
            { type: "interactive", title: "Order of operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice with brackets and operations." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Work out 1/2 + 1/4 × 2 using order of operations.", options: ["1 1/2", "1", "3/8", "1/4"], answer: 1, explanation: "Multiply first: 1/4 × 2 = 1/2. Then 1/2 + 1/2 = 1." },
            { type: "numeric", difficulty: "medium", q: "Using BODMAS, work out (1/2 + 1/2) × 3.", answer: "3", explanation: "Brackets first: 1/2 + 1/2 = 1. Then 1 × 3 = 3." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "m6-ratios",
      title: "Ratios",
      subject: "Number",
      icon: "⚖️",
      summary: "Ratio language, ratios as fractions, simplifying and equivalent ratios, sharing in a ratio, and the link to percentages.",
      objectives: [
        {
          text: "Use ratio language to describe a relationship between quantities.",
          resources: [
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "What a ratio is and how to write it." },
            { type: "interactive", title: "Intro to ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Ratio language and notation." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A class has 3 boys and 5 girls. The ratio of boys to girls is:", options: ["5:3", "3:5", "3:8", "8:3"], answer: 1, explanation: "Boys first, then girls: 3:5." },
            { type: "tf", difficulty: "easy", q: "The ratio 2:3 is the same as the ratio 3:2.", answer: false, explanation: "Order matters in a ratio, so 2:3 ≠ 3:2." }
          ]
        },
        {
          text: "Express a ratio as a fraction of the whole.",
          resources: [
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Linking ratios and fractions." },
            { type: "interactive", title: "Ratios as fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Part-to-whole from a ratio." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "In the ratio 2:5, the first quantity is what fraction of the total?", options: ["2/5", "2/7", "5/7", "1/2"], answer: 1, explanation: "Total parts = 2 + 5 = 7, so the first part is 2/7." },
            { type: "numeric", difficulty: "medium", q: "In the ratio 3:1, the first part is what fraction of the whole? Give your answer as a decimal.", answer: "0.75", explanation: "Total = 4 parts; first part = 3/4 = 0.75." }
          ]
        },
        {
          text: "Explain the difference between a ratio and a fraction.",
          resources: [
            { type: "interactive", title: "Khan Academy: Ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Part-to-part versus part-to-whole." },
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "How ratios relate to fractions." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "A ratio compares two quantities (part to part), while a fraction compares a part to the whole.", answer: true, explanation: "That is the key difference between them." },
            { type: "mcq", difficulty: "medium", q: "If apples to oranges = 2:3, the fraction of the fruit that are apples is:", options: ["2/3", "2/5", "3/5", "2/1"], answer: 1, explanation: "Total = 5; apples = 2/5 of the whole." }
          ]
        },
        {
          text: "Simplify two-part and three-part ratios.",
          resources: [
            { type: "interactive", title: "Simplifying ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Divide by the common factor." },
            { type: "interactive", title: "Khan Academy: Simplifying ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice simplifying ratios." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Simplify the ratio 6:9.", options: ["2:3", "3:2", "6:9", "1:2"], answer: 0, explanation: "Divide both by 3: 6:9 = 2:3." },
            { type: "numeric", difficulty: "medium", q: "Simplify 4:8 to the form 1:n. What is n?", answer: "2", explanation: "Divide both by 4: 4:8 = 1:2, so n = 2." }
          ]
        },
        {
          text: "Find and use equivalent ratios.",
          resources: [
            { type: "interactive", title: "Equivalent ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Scaling ratios up and down." },
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Equivalent ratios by multiplying." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which ratio is equivalent to 2:3?", options: ["4:9", "6:9", "4:5", "3:2"], answer: 1, explanation: "Multiply both by 3: 2:3 = 6:9." },
            { type: "numeric", difficulty: "medium", q: "Complete the equivalent ratio 3:4 = 9:?", answer: "12", explanation: "3 × 3 = 9, so 4 × 3 = 12." }
          ]
        },
        {
          text: "Find quantities from a given ratio and total.",
          resources: [
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Dividing a total in a given ratio." },
            { type: "interactive", title: "Khan Academy: Sharing in a ratio", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Worked examples of sharing in a ratio." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Share £20 in the ratio 2:3. How many £ is the larger share?", answer: "12", explanation: "5 parts → £20 ÷ 5 = £4 each. Larger = 3 × £4 = £12." },
            { type: "numeric", difficulty: "medium", q: "Divide 30 sweets between A and B in the ratio 1:5. How many does B get?", answer: "25", explanation: "6 parts → 30 ÷ 6 = 5 each. B = 5 × 5 = 25." }
          ]
        },
        {
          text: "Find one quantity when another is given in a ratio.",
          resources: [
            { type: "interactive", title: "Using ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Scale to find a missing quantity." },
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Finding a missing part." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "In the ratio red:blue = 2:3, there are 8 red. How many blue?", answer: "12", explanation: "2 → 8 means scale × 4, so blue = 3 × 4 = 12." },
            { type: "numeric", difficulty: "medium", q: "A recipe uses flour:sugar = 5:2. With 250 g flour, how many grams of sugar?", answer: "100", explanation: "5 → 250 means scale × 50, so sugar = 2 × 50 = 100 g." }
          ]
        },
        {
          text: "Relate ratios to percentages.",
          resources: [
            { type: "interactive", title: "Percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Turning a ratio into a percentage." },
            { type: "interactive", title: "Percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Part of a whole as a percentage." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "In a mixture of juice to water of 1:4, juice is what percentage of the whole?", options: ["25%", "20%", "10%", "40%"], answer: 1, explanation: "Total = 5 parts; juice = 1/5 = 20%." },
            { type: "numeric", difficulty: "easy", q: "If boys:girls = 1:1, what percentage are boys? (number only)", answer: "50", explanation: "Equal parts means half, which is 50%." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "m6-decimals",
      title: "Decimals",
      subject: "Number",
      icon: "🔢",
      summary: "Decimal place value, comparing decimals, converting between fractions and decimals, the four operations, and types of decimals.",
      objectives: [
        {
          text: "Understand decimal place value.",
          resources: [
            { type: "interactive", title: "Decimal explorer study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-677cdc98011081919446ff3a69d7af27-decimal-explorer", note: "Your class's tutor bot for exploring decimals and place value. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Decimals", provider: "Math is Fun", url: "https://www.mathsisfun.com/decimals.html", note: "Place value of tenths, hundredths, thousandths." },
            { type: "interactive", title: "Decimal place value", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Reading and writing decimals." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "In 4.27, the digit 7 is in the:", options: ["tenths place", "hundredths place", "ones place", "tens place"], answer: 1, explanation: "After the point: first is tenths, second is hundredths — 7 is hundredths." },
            { type: "numeric", difficulty: "easy", q: "What is the value of the digit 3 in 5.3? Give your answer as a decimal.", answer: "0.3", explanation: "The 3 is in the tenths place, worth 3 tenths = 0.3." }
          ]
        },
        {
          text: "Compare and order decimals.",
          resources: [
            { type: "interactive", title: "Comparing decimals", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Compare using place value." },
            { type: "interactive", title: "Ordering decimals", provider: "Math is Fun", url: "https://www.mathsisfun.com/ordering_decimals.html", note: "Line up the decimal points." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which is the largest?", options: ["0.5", "0.45", "0.405", "0.05"], answer: 0, explanation: "0.5 = 0.500 is bigger than 0.450, 0.405 and 0.050." },
            { type: "tf", difficulty: "easy", q: "0.7 is greater than 0.68.", answer: true, explanation: "0.70 > 0.68." }
          ]
        },
        {
          text: "Convert between decimals and fractions.",
          resources: [
            { type: "interactive", title: "Converting decimals to fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/converting-decimals-fractions.html", note: "Both directions, with examples." },
            { type: "interactive", title: "Decimals & fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice converting." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Write 1/4 as a decimal.", answer: "0.25", explanation: "1 ÷ 4 = 0.25." },
            { type: "mcq", difficulty: "medium", q: "0.6 as a fraction in simplest form is:", options: ["6/10", "3/5", "6/100", "1/6"], answer: 1, explanation: "0.6 = 6/10, which simplifies (÷2) to 3/5." }
          ]
        },
        {
          text: "Add, subtract, multiply and divide decimals.",
          resources: [
            { type: "interactive", title: "Decimal operations study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-677f7e1049148191a7c1cd39711ea281-decimal-operations", note: "Your class's tutor bot for the four operations with decimals. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Decimal operations", provider: "Math is Fun", url: "https://www.mathsisfun.com/decimals-menu.html", note: "All four operations with decimals." },
            { type: "interactive", title: "Khan Academy: Decimal operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice the four operations with decimals." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Work out 0.3 + 0.45.", answer: "0.75", explanation: "Line up the points: 0.30 + 0.45 = 0.75." },
            { type: "numeric", difficulty: "medium", q: "Work out 0.2 × 0.4.", answer: "0.08", explanation: "2 × 4 = 8, with two decimal places: 0.08." }
          ]
        },
        {
          text: "Distinguish terminating, non-terminating and recurring decimals.",
          resources: [
            { type: "interactive", title: "Recurring decimals", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/recurring-decimals.html", note: "What recurring decimals are." },
            { type: "interactive", title: "Khan Academy: Fractions to decimals", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Why some fractions terminate and others recur." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "1/3 written as a decimal is:", options: ["0.3 exactly", "0.33 (terminating)", "0.333… (recurring)", "3.0"], answer: 2, explanation: "1 ÷ 3 = 0.3333… — the 3 recurs forever." },
            { type: "tf", difficulty: "easy", q: "1/2 = 0.5 is a terminating decimal.", answer: true, explanation: "It stops after one decimal place, so it terminates." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "m6-percentages",
      title: "Percentages",
      subject: "Number",
      icon: "％",
      summary: "Converting between decimals, fractions and percentages, finding a percentage of a quantity, and using percentages in real life.",
      objectives: [
        {
          text: "Convert between decimals and percentages.",
          resources: [
            { type: "interactive", title: "Percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Decimal ↔ percentage conversion." },
            { type: "interactive", title: "Decimals & percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice converting." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Write 0.45 as a percentage. (number only)", answer: "45", explanation: "Multiply by 100: 0.45 × 100 = 45%." },
            { type: "numeric", difficulty: "easy", q: "Write 30% as a decimal.", answer: "0.3", explanation: "Divide by 100: 30 ÷ 100 = 0.3." }
          ]
        },
        {
          text: "Convert between fractions and percentages.",
          resources: [
            { type: "interactive", title: "Fractions, decimals & percentages study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-6767dd62d82481919fe6c2a40027aa83-fractions-decimals-and-percentages", note: "Your class's tutor bot linking fractions, decimals and percentages. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Fractions to percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/converting-fractions-percents.html", note: "Both directions." },
            { type: "interactive", title: "Khan Academy: Fractions & percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Converting between fractions and percentages." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Write 1/2 as a percentage. (number only)", answer: "50", explanation: "1/2 = 0.5 = 50%." },
            { type: "mcq", difficulty: "medium", q: "3/4 as a percentage is:", options: ["34%", "75%", "43%", "60%"], answer: 1, explanation: "3 ÷ 4 = 0.75 = 75%." }
          ]
        },
        {
          text: "Find a percentage of a quantity.",
          resources: [
            { type: "interactive", title: "Percentage of an amount", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Find a percentage of a number." },
            { type: "interactive", title: "Percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Finding a percentage of a number." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "What is 25% of 80?", answer: "20", explanation: "25% = 1/4, and 80 ÷ 4 = 20." },
            { type: "numeric", difficulty: "easy", q: "What is 10% of 250?", answer: "25", explanation: "10% = ÷10, so 250 ÷ 10 = 25." }
          ]
        },
        {
          text: "Use percentages in real-life situations.",
          resources: [
            { type: "interactive", title: "Percentage Change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Discounts, tips and real-life percentages." },
            { type: "interactive", title: "Percentage word problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Apply percentages to contexts." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A £40 jacket has 25% off. How many £ is the discount?", answer: "10", explanation: "25% of 40 = 40 ÷ 4 = £10." },
            { type: "short", difficulty: "medium", q: "A test is out of 50 and you score 40. What percentage is that, and how did you find it?", answer: "40 ÷ 50 = 0.8 = 80%. Divide your score by the total, then multiply by 100.", explanation: "Percentage = (part ÷ whole) × 100." }
          ]
        },
        {
          text: "Apply basic percentage ideas, including increases.",
          resources: [
            { type: "interactive", title: "Cent-percent study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-6799cb7e19f48191b31c60ba00c127bd-cent-percent", note: "Your class's tutor bot for working with percentages. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Percentage change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Increases and decreases." },
            { type: "interactive", title: "Percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Percentage applications." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "What percentage is 15 out of 60? (number only)", answer: "25", explanation: "15 ÷ 60 = 0.25 = 25%." },
            { type: "mcq", difficulty: "medium", q: "Increasing 100 by 20% gives:", options: ["80", "120", "20", "102"], answer: 1, explanation: "20% of 100 = 20, and 100 + 20 = 120." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "m6-integers",
      title: "Integers & Number Classification",
      subject: "Number",
      icon: "➖",
      summary: "The number line, classifying numbers, the four operations with integers, BODMAS, and real-life uses of negative numbers.",
      objectives: [
        {
          text: "Place and read numbers on a number line, including negatives.",
          resources: [
            { type: "interactive", title: "Integers (number line)", provider: "Math is Fun", url: "https://www.mathsisfun.com/positive-negative-integers.html", note: "Negative and positive numbers on a line." },
            { type: "interactive", title: "Negative numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "The number line and ordering." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "On a number line, which value is furthest to the left?", options: ["−3", "0", "2", "−1"], answer: 0, explanation: "The smallest value, −3, is furthest left." },
            { type: "tf", difficulty: "easy", q: "−5 is less than −2.", answer: true, explanation: "On the number line −5 is to the left of −2, so it is smaller." }
          ]
        },
        {
          text: "Classify numbers as natural, whole, integer or rational.",
          resources: [
            { type: "podcast", title: "The Trouble With Zero – Short Wave", provider: "🐺 Wolves classroom · Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-trouble-with-zero/id1482575855?i=1000681901180", note: "The strange story of zero — a number it took humans centuries to accept." },
            { type: "interactive", title: "Types of numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/number-types.html", note: "Natural, whole, integer, rational and more." },
            { type: "interactive", title: "Classifying numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Number sets explained." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which set does −3 belong to, but 0.5 does not?", options: ["Rational numbers", "Integers", "Real numbers", "Decimals"], answer: 1, explanation: "−3 is an integer; 0.5 is rational but not an integer." },
            { type: "tf", difficulty: "easy", q: "Every whole number is also an integer.", answer: true, explanation: "Integers include all whole numbers plus their negatives." }
          ]
        },
        {
          text: "Add, subtract, multiply and divide integers.",
          resources: [
            { type: "interactive", title: "Integer operations", provider: "Math is Fun", url: "https://www.mathsisfun.com/positive-negative-integers.html", note: "Rules for signs." },
            { type: "interactive", title: "Khan Academy: Integer operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Adding, subtracting and multiplying integers." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Work out −4 + 7.", answer: "3", explanation: "Start at −4 and move 7 right: −4 + 7 = 3." },
            { type: "numeric", difficulty: "medium", q: "Work out −3 × −5.", answer: "15", explanation: "Negative × negative = positive: 3 × 5 = 15." }
          ]
        },
        {
          text: "Apply BODMAS to calculations with integers.",
          resources: [
            { type: "interactive", title: "Order of Operations (BODMAS)", provider: "Math is Fun", url: "https://www.mathsisfun.com/operation-order-bodmas.html", note: "The correct order for mixed operations." },
            { type: "interactive", title: "Order of operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice with negatives." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Work out −2 + 3 × 4.", answer: "10", explanation: "Multiply first: 3 × 4 = 12, then −2 + 12 = 10." },
            { type: "numeric", difficulty: "medium", q: "Work out (−6 ÷ 2) + 5.", answer: "2", explanation: "Brackets first: −6 ÷ 2 = −3, then −3 + 5 = 2." }
          ]
        },
        {
          text: "Use integers to solve real-life problems.",
          resources: [
            { type: "interactive", title: "Integers", provider: "Math is Fun", url: "https://www.mathsisfun.com/positive-negative-integers.html", note: "Temperature, depth and money with negatives." },
            { type: "interactive", title: "Integers in context", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Word problems with negatives." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "The temperature is −3°C and rises by 8°C. What is the new temperature in °C?", answer: "5", explanation: "−3 + 8 = 5°C." },
            { type: "short", difficulty: "medium", q: "A diver is at −12 m (12 m below sea level) and rises 5 m. Where is the diver now, and how did you work it out?", answer: "−12 + 5 = −7 m, i.e. 7 m below sea level. Rising adds a positive number.", explanation: "Add a positive for going up; the result is still negative (below sea level)." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "m6-factors",
      title: "Factors & Multiples",
      subject: "Number",
      icon: "🧮",
      summary: "Divisibility rules, primes, prime factorisation, factors and multiples, and finding the LCM and HCF.",
      objectives: [
        {
          text: "Apply divisibility rules for 2 to 10.",
          resources: [
            { type: "interactive", title: "Divisibility Rules", provider: "Math is Fun", url: "https://www.mathsisfun.com/divisibility-rules.html", note: "Quick tests for each number." },
            { type: "interactive", title: "Divisibility", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice the rules." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which number is divisible by 3?", options: ["14", "22", "27", "20"], answer: 2, explanation: "2 + 7 = 9, which is divisible by 3, so 27 is too." },
            { type: "tf", difficulty: "easy", q: "A number is divisible by 5 if it ends in 0 or 5.", answer: true, explanation: "That is the divisibility rule for 5." }
          ]
        },
        {
          text: "Identify prime numbers from 1 to 100.",
          resources: [
            { type: "interactive", title: "Prime Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/prime-numbers.html", note: "What makes a number prime." },
            { type: "interactive", title: "Prime numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Identify primes." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which of these is a prime number?", options: ["21", "29", "27", "33"], answer: 1, explanation: "29 has only two factors, 1 and itself; the others are composite." },
            { type: "tf", difficulty: "medium", q: "1 is a prime number.", answer: false, explanation: "A prime has exactly two factors; 1 has only one factor, so it is not prime." }
          ]
        },
        {
          text: "Write a number as a product of its prime factors.",
          resources: [
            { type: "interactive", title: "Prime Factorization", provider: "Math is Fun", url: "https://www.mathsisfun.com/prime-factorization.html", note: "Factor trees and prime products." },
            { type: "interactive", title: "Khan Academy: Prime factorisation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Writing a number as a product of primes." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The prime factorisation of 12 is:", options: ["2 × 6", "2² × 3", "3 × 4", "2 × 3 × 3"], answer: 1, explanation: "12 = 2 × 2 × 3 = 2² × 3." },
            { type: "numeric", difficulty: "medium", q: "Write 18 in the form 2 × 3^n. What is n?", answer: "2", explanation: "18 = 2 × 9 = 2 × 3², so n = 2." }
          ]
        },
        {
          text: "Find factors and multiples of a number.",
          resources: [
            { type: "interactive", title: "Factors and Multiples", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/factors-multiples.html", note: "The difference and how to list them." },
            { type: "interactive", title: "Factors & multiples", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice problems." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which of these is a factor of 24?", options: ["5", "7", "8", "9"], answer: 2, explanation: "24 ÷ 8 = 3 with no remainder, so 8 is a factor." },
            { type: "numeric", difficulty: "easy", q: "What is the 4th multiple of 6?", answer: "24", explanation: "6 × 4 = 24." }
          ]
        },
        {
          text: "Find the LCM and HCF of two or three numbers.",
          resources: [
            { type: "interactive", title: "Least Common Multiple", provider: "Math is Fun", url: "https://www.mathsisfun.com/least-common-multiple.html", note: "Finding the LCM." },
            { type: "interactive", title: "Greatest Common Factor (HCF)", provider: "Math is Fun", url: "https://www.mathsisfun.com/greatest-common-factor.html", note: "Finding the HCF/GCF." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "What is the HCF of 12 and 18?", answer: "6", explanation: "The highest common factor of 12 and 18 is 6." },
            { type: "numeric", difficulty: "medium", q: "What is the LCM of 4 and 6?", answer: "12", explanation: "The lowest common multiple of 4 and 6 is 12." }
          ]
        },
        {
          text: "Solve real-life problems using LCM and HCF.",
          resources: [
            { type: "interactive", title: "Least Common Multiple", provider: "Math is Fun", url: "https://www.mathsisfun.com/least-common-multiple.html", note: "When to use the LCM." },
            { type: "interactive", title: "Greatest Common Factor (HCF)", provider: "Math is Fun", url: "https://www.mathsisfun.com/greatest-common-factor.html", note: "When to use the HCF." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "Two bells ring every 4 and 6 minutes. After how many minutes do they next ring together, and which (LCM or HCF) did you use?", answer: "LCM of 4 and 6 = 12 minutes. You use the LCM for 'happening together again' / repeating events.", explanation: "Repeating-together problems use the LCM." },
            { type: "numeric", difficulty: "medium", q: "Bells ring every 5 and 10 minutes. After how many minutes do they next ring together?", answer: "10", explanation: "LCM of 5 and 10 = 10 minutes." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "m6-exponents",
      title: "Indices, Squares, Cubes & Roots",
      subject: "Number",
      icon: "²",
      summary: "The laws of indices, expressing roots as powers, squares and cubes, finding roots by prime factorisation, and nearest perfect squares.",
      objectives: [
        {
          text: "Understand and use the laws of indices.",
          resources: [
            { type: "interactive", title: "Power in the roots study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-6787a7149d2881918eee37ff3d6a365c-power-in-the-roots", note: "Your class's tutor bot for powers, indices and roots. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Laws of Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "All the index laws in one place." },
            { type: "interactive", title: "Exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Intro to powers and exponents." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "2³ × 2² = ?", options: ["2⁵", "2⁶", "4⁵", "2¹"], answer: 0, explanation: "Same base: add the powers, 3 + 2 = 5, giving 2⁵." },
            { type: "numeric", difficulty: "medium", q: "Work out the value of 2³ × 2². (give the number)", answer: "32", explanation: "2³ × 2² = 2⁵ = 32." }
          ]
        },
        {
          text: "Apply the zero, product, division and inverse (negative-power) rules.",
          resources: [
            { type: "interactive", title: "Exponent laws", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "Zero, product, quotient and negative powers." },
            { type: "interactive", title: "Khan Academy: Exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra", note: "Practice the index laws." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Any non-zero number to the power 0 equals:", options: ["0", "1", "the number itself", "undefined"], answer: 1, explanation: "By the zero rule, a⁰ = 1 for any non-zero a." },
            { type: "mcq", difficulty: "medium", q: "5⁶ ÷ 5² = ?", options: ["5³", "5⁴", "5⁸", "1⁴"], answer: 1, explanation: "Same base: subtract powers, 6 − 2 = 4, giving 5⁴." }
          ]
        },
        {
          text: "Express roots using fractional indices.",
          resources: [
            { type: "interactive", title: "Fractional Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-fractional.html", note: "Why √x = x^(1/2)." },
            { type: "interactive", title: "Roots as exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Connecting roots and powers." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "√x can be written as which index?", options: ["x²", "x^(1/2)", "x^(−1)", "2x"], answer: 1, explanation: "A square root is the power one-half: √x = x^(1/2)." },
            { type: "tf", difficulty: "medium", q: "The cube root of a number can be written as a power of 1/3.", answer: true, explanation: "∛x = x^(1/3)." }
          ]
        },
        {
          text: "Simplify numerical expressions using indices.",
          resources: [
            { type: "interactive", title: "Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/exponent.html", note: "Working out powers." },
            { type: "interactive", title: "Evaluating exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice calculating with powers." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Work out 3² + 4². (give the number)", answer: "25", explanation: "9 + 16 = 25." },
            { type: "numeric", difficulty: "medium", q: "Work out 10³ ÷ 10. (give the number)", answer: "100", explanation: "10³ = 1000, and 1000 ÷ 10 = 100." }
          ]
        },
        {
          text: "Recall squares and cubes from 1 to 20.",
          resources: [
            { type: "interactive", title: "Squares and Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/square-root.html", note: "Squares (and roots) of numbers." },
            { type: "interactive", title: "Khan Academy: Squares & cubes", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice recalling squares and cubes." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "What is 12²?", answer: "144", explanation: "12 × 12 = 144." },
            { type: "numeric", difficulty: "easy", q: "What is 4³?", answer: "64", explanation: "4 × 4 × 4 = 64." }
          ]
        },
        {
          text: "Find square roots and cube roots using prime factorisation.",
          resources: [
            { type: "interactive", title: "Square & cube roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/cube-root.html", note: "Finding roots, including with factors." },
            { type: "interactive", title: "Roots via prime factors", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Using prime factorisation." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "What is √144?", answer: "12", explanation: "12 × 12 = 144, so √144 = 12." },
            { type: "numeric", difficulty: "medium", q: "Using prime factors, what is the cube root of 27?", answer: "3", explanation: "27 = 3 × 3 × 3 = 3³, so ∛27 = 3." }
          ]
        },
        {
          text: "Identify the nearest perfect squares to a number.",
          resources: [
            { type: "interactive", title: "Perfect squares", provider: "Math is Fun", url: "https://www.mathsisfun.com/square-root.html", note: "Recognising square numbers." },
            { type: "interactive", title: "Estimating roots", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Roots between whole numbers." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The nearest perfect square below 50 is:", options: ["36", "49", "25", "64"], answer: 1, explanation: "49 = 7² is the largest perfect square less than 50." },
            { type: "numeric", difficulty: "medium", q: "√70 lies between two whole numbers. Give the smaller one.", answer: "8", explanation: "8² = 64 and 9² = 81, so √70 is between 8 and 9." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "m6-sequences",
      title: "Sequences & Patterns",
      subject: "Algebra",
      icon: "🔷",
      summary: "Numeric and pictorial patterns, stating the rule, predicting the next terms, and working with pattern series.",
      objectives: [
        {
          text: "Recognise and continue numeric patterns.",
          resources: [
            { type: "interactive", title: "Number Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Spotting and continuing patterns." },
            { type: "interactive", title: "Number patterns", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice extending sequences." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Find the next term: 2, 4, 6, 8, ?", answer: "10", explanation: "Add 2 each time: 8 + 2 = 10." },
            { type: "numeric", difficulty: "medium", q: "Find the next term: 3, 6, 12, 24, ?", answer: "48", explanation: "Each term doubles: 24 × 2 = 48." }
          ]
        },
        {
          text: "Recognise and continue pictorial patterns.",
          resources: [
            { type: "interactive", title: "Pattern problems", provider: "NRICH", url: "https://nrich.maths.org/", note: "Rich visual pattern investigations." },
            { type: "interactive", title: "Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Patterns made from shapes and dots." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "A dot pattern uses 3 dots, then 5, then 7. How many dots in the 4th picture, and what is the rule?", answer: "9 dots. The rule is 'add 2 each time' (the odd numbers).", explanation: "Each picture adds 2 more dots." },
            { type: "numeric", difficulty: "medium", q: "Squares made of matchsticks use 4, 7, 10, 13 sticks. How many for the next shape?", answer: "16", explanation: "Add 3 each time: 13 + 3 = 16." }
          ]
        },
        {
          text: "State the rule of a sequence.",
          resources: [
            { type: "interactive", title: "Number Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Describing the rule of a sequence." },
            { type: "interactive", title: "Khan Academy: Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Stating sequence rules." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "For 5, 10, 15, 20… the rule is:", options: ["add 10", "multiply by 2", "add 5", "subtract 5"], answer: 2, explanation: "Each term is 5 more than the last." },
            { type: "short", difficulty: "medium", q: "Describe the rule for the sequence 100, 90, 80, 70 and give the next term.", answer: "Subtract 10 each time; the next term is 60.", explanation: "Term-to-term rule: −10." }
          ]
        },
        {
          text: "Predict the next terms of a sequence.",
          resources: [
            { type: "interactive", title: "Number Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Predicting later terms." },
            { type: "interactive", title: "Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Extending patterns." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Square numbers: 1, 4, 9, 16, ? — what is the next term?", answer: "25", explanation: "The next square is 5² = 25." },
            { type: "numeric", difficulty: "easy", q: "Sequence: 50, 45, 40, 35, ? — what is the next term?", answer: "30", explanation: "Subtract 5 each time: 35 − 5 = 30." }
          ]
        },
        {
          text: "Work with pattern series using a position-to-term rule.",
          resources: [
            { type: "interactive", title: "Sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Position-to-term (nth term) rules." },
            { type: "interactive", title: "Khan Academy: nth term", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Finding and using the nth term." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Using the rule 'term = 3 × position', what is the 5th term?", answer: "15", explanation: "3 × 5 = 15." },
            { type: "numeric", difficulty: "medium", q: "The nth term of a sequence is 2n + 1. What is the 4th term?", answer: "9", explanation: "2 × 4 + 1 = 9." }
          ]
        }
      ]
    },

    /* ================================================================ */
    {
      id: "m6-algebra-geometry",
      title: "Introductory Algebra & Geometry",
      subject: "Algebra & Geometry",
      icon: "📐",
      summary: "Variables and substitution, one-step equations and inequalities, area and perimeter of rectangles and triangles, circles, and composite areas.",
      objectives: [
        {
          text: "Use variables and substitute values into expressions.",
          resources: [
            { type: "interactive", title: "Introduction to Algebra", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "What variables are and how substitution works." },
            { type: "interactive", title: "Substitution", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Evaluating expressions." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "If x = 4, work out 3x + 2.", answer: "14", explanation: "3 × 4 + 2 = 12 + 2 = 14." },
            { type: "numeric", difficulty: "easy", q: "If a = 5 and b = 2, work out a − b.", answer: "3", explanation: "5 − 2 = 3." }
          ]
        },
        {
          text: "Solve one-step equations.",
          resources: [
            { type: "interactive", title: "Solving one-step equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Doing the same to both sides." },
            { type: "interactive", title: "One-step equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice solving." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Solve x + 7 = 12. What is x?", answer: "5", explanation: "Subtract 7 from both sides: x = 12 − 7 = 5." },
            { type: "numeric", difficulty: "easy", q: "Solve 4x = 20. What is x?", answer: "5", explanation: "Divide both sides by 4: x = 20 ÷ 4 = 5." }
          ]
        },
        {
          text: "Solve one-step inequalities.",
          resources: [
            { type: "interactive", title: "Inequalities", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/inequality.html", note: "Solving and showing inequalities." },
            { type: "interactive", title: "One-step inequalities", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice problems." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Solve x + 3 > 5. The solution is:", options: ["x > 2", "x < 2", "x > 8", "x = 2"], answer: 0, explanation: "Subtract 3 from both sides: x > 2." },
            { type: "tf", difficulty: "medium", q: "If 2x < 10 then x < 5.", answer: true, explanation: "Divide both sides by 2: x < 5." }
          ]
        },
        {
          text: "Find the area and perimeter of rectangles and triangles.",
          resources: [
            { type: "interactive", title: "Perimeter, area & surface area study bot", provider: "🐺 Wolves classroom · ChatGPT", url: "https://chatgpt.com/g/g-6773b11f5ac48191b58d5389f40a4ebd-perimeter-area-and-surface-area", note: "Your class's tutor bot for perimeter, area and surface area. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Area & Perimeter", provider: "Math is Fun", url: "https://www.mathsisfun.com/area.html", note: "Formulas for rectangles and triangles." },
            { type: "interactive", title: "Area & perimeter", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice problems." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A rectangle is 6 cm by 4 cm. What is its area in cm²?", answer: "24", explanation: "Area = length × width = 6 × 4 = 24 cm²." },
            { type: "numeric", difficulty: "medium", q: "A triangle has base 10 cm and height 6 cm. Using A = ½ × b × h, find the area in cm².", answer: "30", explanation: "½ × 10 × 6 = 30 cm²." }
          ]
        },
        {
          text: "Find the circumference and area of circles.",
          resources: [
            { type: "video", title: "Area of a circle, formula explained (2 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=YokKp3pwVFc", note: "A quick, clear look at where the circle-area formula comes from." },
            { type: "interactive", title: "Circle area & circumference", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/circle.html", note: "Using π with the formulas." },
            { type: "interactive", title: "Area & circumference of circles", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Worked examples and practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A circle has radius 5 cm. Using C = 2πr with π ≈ 3.14, find the circumference in cm.", answer: "31.4", explanation: "C = 2 × 3.14 × 5 = 31.4 cm." },
            { type: "numeric", difficulty: "medium", q: "A circle has radius 10 cm. Using A = πr² with π ≈ 3.14, find the area in cm².", answer: "314", explanation: "A = 3.14 × 10² = 3.14 × 100 = 314 cm²." }
          ]
        },
        {
          text: "Find the area of composite shapes.",
          resources: [
            { type: "interactive", title: "Area", provider: "Math is Fun", url: "https://www.mathsisfun.com/area.html", note: "Splitting shapes to find composite area." },
            { type: "interactive", title: "Khan Academy: Area of composite figures", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Worked examples of compound-shape area." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "An L-shape is made of two rectangles, 4×2 and 3×2. Explain how to find its total area and give the answer.", answer: "Find each rectangle's area and add them: 4 × 2 = 8 and 3 × 2 = 6, so the total area is 8 + 6 = 14 square units.", explanation: "Split a composite shape into simple parts, find each area, then add." },
            { type: "numeric", difficulty: "medium", q: "A shape is a 5×4 rectangle with a 2×2 square cut out. What is the remaining area?", answer: "16", explanation: "20 − 4 = 16 square units." }
          ]
        }
      ]
    }
  ]
});
