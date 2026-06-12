/* Mathematics — Grade 8: Mastery & Extension (Formal Algebra, Functions, Surds, Geometry & Data)
   PER-OBJECTIVE schema: each objective is { text, resources[], quiz[] }. */
window.CURRICULUM_MATH.grades.push({
  id: "grade-8",
  name: "Grade 8",
  tagline: "Mastery & Extension",
  color: "#4f46e5",
  blurb: "Advanced ratio & finance, precision & standard form, surds, advanced algebra, linear functions, simultaneous equations, sequences, advanced geometry, data and a capstone review.",
  topics: [

    /* ============================ Advanced Ratio, Proportion & Finance ============================ */
    {
      id: "m8-ratio-finance",
      title: "Advanced Ratio, Proportion & Finance",
      subject: "Number & Finance",
      icon: "💷",
      summary: "Ratio problems with algebra, direct proportion, simple and compound interest, GST, depreciation, and percentage change in financial contexts.",
      objectives: [
        { text: "Solve ratio problems involving algebra.",
          resources: [
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Algebraic ratio problems." },
            { type: "interactive", title: "Ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Two numbers are in the ratio 2:3 and add to 20. What is the larger number?", answer: "12", explanation: "5 parts → 20 ÷ 5 = 4 each; larger = 3 × 4 = 12." },
            { type: "short", difficulty: "medium", q: "x and y are in the ratio 3:5. If x = 9, find y.", answer: "The scale factor is 9 ÷ 3 = 3, so y = 5 × 3 = 15.", explanation: "Scale both parts by the same factor." }
          ] },
        { text: "Use direct proportion to find missing quantities.",
          resources: [
            { type: "interactive", title: "Direct proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "Scaling with a constant." },
            { type: "interactive", title: "Proportion", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "y is directly proportional to x; y = 18 when x = 6. Find y when x = 10.", answer: "30", explanation: "k = 18 ÷ 6 = 3, so y = 3 × 10 = 30." },
            { type: "numeric", difficulty: "easy", q: "5 books cost £20. How much do 8 books cost (£)?", answer: "32", explanation: "£4 each, so 8 × £4 = £32." }
          ] },
        { text: "Calculate simple interest.",
          resources: [
            { type: "interactive", title: "Simple Interest", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/interest.html", note: "I = PRT/100." },
            { type: "interactive", title: "Simple interest", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Simple interest = PRT/100. P = £500, R = 4%, T = 2 years. Find the interest (£).", answer: "40", explanation: "(500 × 4 × 2) ÷ 100 = 4000 ÷ 100 = £40." },
            { type: "numeric", difficulty: "medium", q: "£200 at 5% simple interest for 3 years. Interest (£)?", answer: "30", explanation: "(200 × 5 × 3) ÷ 100 = £30." }
          ] },
        { text: "Calculate compound interest.",
          resources: [
            { type: "interactive", title: "Compound Interest", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/compound-interest.html", note: "Interest on interest." },
            { type: "interactive", title: "Interest (simple & compound)", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/interest.html", note: "How interest is calculated." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "£100 at 10% compound interest for 2 years. What is the final amount (£)?", answer: "121", explanation: "100 × 1.1 × 1.1 = £121." },
            { type: "mcq", difficulty: "medium", q: "Compound interest differs from simple interest because:", options: ["interest is earned on the interest too", "it is always less", "it ignores time", "the rate changes yearly"], answer: 0, explanation: "Each year's interest is added before the next is calculated." }
          ] },
        { text: "Calculate GST (goods and services tax).",
          resources: [
            { type: "interactive", title: "Percentages of amounts", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Adding a tax percentage." },
            { type: "interactive", title: "Tax & percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "An item costs £200 before 18% GST. What is the GST amount (£)?", answer: "36", explanation: "18% of 200 = £36." },
            { type: "numeric", difficulty: "easy", q: "What is the total price of a £50 item with 10% GST (£)?", answer: "55", explanation: "50 + 10% of 50 = 50 + 5 = £55." }
          ] },
        { text: "Calculate depreciation.",
          resources: [
            { type: "interactive", title: "Money & financial maths", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/index.html", note: "Value falling over time." },
            { type: "interactive", title: "Percentage decrease", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Repeated decrease." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A £1000 laptop loses 20% of its value in a year. What is its value after 1 year (£)?", answer: "800", explanation: "1000 × 0.8 = £800." },
            { type: "short", difficulty: "hard", q: "A car worth £10,000 depreciates 10% per year. Explain how to find its value after 2 years and give the answer.", answer: "Multiply by 0.9 each year: 10,000 × 0.9 × 0.9 = £8100.", explanation: "Repeated percentage decrease uses the multiplier 0.9." }
          ] },
        { text: "Apply percentage change to financial problems.",
          resources: [
            { type: "interactive", title: "Percentage change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Increases and decreases in money." },
            { type: "interactive", title: "Money & financial maths", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/index.html", note: "Real-life financial percentages." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A salary rises from £20,000 to £22,000. What is the percentage increase? (number only)", answer: "10", explanation: "Change £2000; 2000 ÷ 20,000 × 100 = 10%." },
            { type: "numeric", difficulty: "easy", q: "An £80 jacket is reduced by 25%. What is the sale price (£)?", answer: "60", explanation: "80 × 0.75 = £60." }
          ] }
      ]
    },

    /* ============================ Precision, Approximation & Standard Form ============================ */
    {
      id: "m8-precision",
      title: "Precision, Approximation & Standard Form",
      subject: "Number",
      icon: "🎯",
      summary: "Significant figures, decimal approximation, upper and lower bounds, inequality bounds, scientific/standard form and operations in scientific notation.",
      objectives: [
        { text: "Round to a given number of significant figures.",
          resources: [
            { type: "interactive", title: "Significant Figures", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/significant-figures.html", note: "Counting and rounding sig figs." },
            { type: "interactive", title: "Khan Academy: Significant figures", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Worked rounding to sig figs." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "452 to 2 significant figures is:", options: ["450", "460", "400", "452"], answer: 0, explanation: "The first two sig figs are 4 and 5; the next digit 2 rounds down → 450." },
            { type: "numeric", difficulty: "medium", q: "Round 0.04736 to 2 significant figures.", answer: "0.047", explanation: "Leading zeros don't count; 4 and 7 are the first two sig figs; next digit 3 rounds down." }
          ] },
        { text: "Approximate to a given number of decimal places.",
          resources: [
            { type: "interactive", title: "Rounding Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/rounding-numbers.html", note: "Decimal place rounding." },
            { type: "interactive", title: "Rounding decimals", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Round 3.14159 to 2 decimal places.", answer: "3.14", explanation: "The third decimal is 1, so round down → 3.14." },
            { type: "numeric", difficulty: "medium", q: "Round 7.689 to 1 decimal place.", answer: "7.7", explanation: "The second decimal is 8, so round up → 7.7." }
          ] },
        { text: "Find upper and lower bounds of rounded values.",
          resources: [
            { type: "interactive", title: "Rounding Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/rounding-numbers.html", note: "Upper and lower bounds of rounded values." },
            { type: "interactive", title: "Khan Academy: Bounds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Worked bounds examples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A length is 8 cm to the nearest cm. The lower bound is:", options: ["7.5 cm", "7 cm", "8.5 cm", "8 cm"], answer: 0, explanation: "Half a unit below: 8 − 0.5 = 7.5 cm." },
            { type: "numeric", difficulty: "medium", q: "A mass is 50 g to the nearest 10 g. What is the upper bound (g)?", answer: "55", explanation: "Add half of 10: 50 + 5 = 55 g." }
          ] },
        { text: "Express bounds using inequalities.",
          resources: [
            { type: "interactive", title: "Khan Academy: Error intervals", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Writing bounds as inequalities." },
            { type: "interactive", title: "Inequalities", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/inequality.html", note: "Inequality notation." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "If x = 6 cm to the nearest cm, then:", options: ["5.5 ≤ x < 6.5", "6 ≤ x < 7", "5 < x < 7", "x = 6 exactly"], answer: 0, explanation: "The value lies within half a unit of 6." },
            { type: "tf", difficulty: "medium", q: "The upper bound of a value rounded to the nearest unit is found by adding half a unit.", answer: true, explanation: "e.g. nearest cm → add 0.5 cm." }
          ] },
        { text: "Write numbers in scientific (standard) form.",
          resources: [
            { type: "interactive", title: "Scientific Notation", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/scientific-notation.html", note: "a × 10ⁿ form." },
            { type: "interactive", title: "Scientific notation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "4500 in scientific (standard) form is:", options: ["4.5 × 10³", "45 × 10²", "4.5 × 10⁴", "0.45 × 10⁴"], answer: 0, explanation: "Move the point 3 places: 4.5 × 10³." },
            { type: "numeric", difficulty: "easy", q: "Write 3 × 10² as an ordinary number.", answer: "300", explanation: "3 × 100 = 300." }
          ] },
        { text: "Use standard form for small numbers.",
          resources: [
            { type: "interactive", title: "Khan Academy: Standard form", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Negative powers of 10." },
            { type: "interactive", title: "Scientific notation", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/scientific-notation.html", note: "Tiny numbers." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "0.0007 in standard form is:", options: ["7 × 10⁻⁴", "7 × 10⁴", "0.7 × 10⁻³", "7 × 10⁻³"], answer: 0, explanation: "Move the point 4 places right: 7 × 10⁻⁴." },
            { type: "numeric", difficulty: "easy", q: "Write 2.5 × 10³ as an ordinary number.", answer: "2500", explanation: "2.5 × 1000 = 2500." }
          ] },
        { text: "Calculate with numbers in scientific notation.",
          resources: [
            { type: "interactive", title: "Scientific Notation", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/scientific-notation.html", note: "Multiplying and dividing in standard form." },
            { type: "interactive", title: "Scientific notation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "(2 × 10³) × (3 × 10²) = ?", options: ["6 × 10⁵", "6 × 10⁶", "5 × 10⁵", "6 × 10¹"], answer: 0, explanation: "Multiply numbers (2×3=6), add powers (3+2=5): 6 × 10⁵." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 6 × 10² as an ordinary number.", answer: "600", explanation: "6 × 100 = 600." }
          ] }
      ]
    },

    /* ============================ Indices, Roots & Surds ============================ */
    {
      id: "m8-surds",
      title: "Indices, Roots & Surds",
      subject: "Number",
      icon: "√",
      summary: "Fractional indices, radical form, solving index equations, pure and mixed surds, conjugates, simplifying surds, operations on surds and rationalising denominators.",
      objectives: [
        { text: "Evaluate fractional indices.",
          resources: [
            { type: "interactive", title: "Fractional Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-fractional.html", note: "Roots and powers together." },
            { type: "interactive", title: "Rational exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Evaluate 27^(1/3).", answer: "3", explanation: "The cube root of 27 is 3." },
            { type: "mcq", difficulty: "hard", q: "8^(2/3) = ?", options: ["4", "2", "16", "6"], answer: 0, explanation: "Cube root of 8 is 2, then squared: 2² = 4." }
          ] },
        { text: "Convert between index and radical form.",
          resources: [
            { type: "interactive", title: "Radicals & exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "√ ↔ power forms." },
            { type: "interactive", title: "Fractional exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-fractional.html", note: "Radical form." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "x^(1/2) in radical form is:", options: ["√x", "∛x", "x²", "1/√x"], answer: 0, explanation: "A power of one-half is the square root." },
            { type: "mcq", difficulty: "medium", q: "∛x written as an index is:", options: ["x^(1/3)", "x³", "x^(3)", "x^(1/2)"], answer: 0, explanation: "A cube root is the power one-third." }
          ] },
        { text: "Solve equations involving indices.",
          resources: [
            { type: "interactive", title: "Laws of Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "Matching bases and powers." },
            { type: "interactive", title: "Exponential equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Solve x² = 49 (positive value). What is x?", answer: "7", explanation: "√49 = 7." },
            { type: "numeric", difficulty: "medium", q: "Solve 2^x = 8. What is x?", answer: "3", explanation: "2³ = 8, so x = 3." }
          ] },
        { text: "Distinguish pure and mixed surds.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Pure and mixed surds." },
            { type: "interactive", title: "Simplifying surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which is a mixed surd?", options: ["3√2", "√5", "√7", "√2"], answer: 0, explanation: "A mixed surd has a whole number in front, like 3√2." },
            { type: "mcq", difficulty: "medium", q: "√18 as a mixed surd is:", options: ["3√2", "2√3", "9√2", "3√3"], answer: 0, explanation: "√18 = √9 × √2 = 3√2." }
          ] },
        { text: "Use conjugates of surd expressions.",
          resources: [
            { type: "interactive", title: "Conjugates", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/conjugate.html", note: "Pairs that remove the surd." },
            { type: "interactive", title: "Surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The conjugate of (3 + √2) is:", options: ["3 − √2", "−3 + √2", "√2 − 3", "3 + √2"], answer: 0, explanation: "Change the sign between the terms: 3 − √2." },
            { type: "tf", difficulty: "medium", q: "Multiplying (a + √b)(a − √b) removes the surd, giving a² − b.", answer: true, explanation: "It is a difference of two squares: a² − (√b)² = a² − b." }
          ] },
        { text: "Square and square-root surds.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Squaring and simplifying surds." },
            { type: "interactive", title: "Surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Evaluate (√5)².", answer: "5", explanation: "Squaring a square root gives the number: (√5)² = 5." },
            { type: "mcq", difficulty: "medium", q: "(2√3)² = ?", options: ["12", "6", "4√3", "36"], answer: 0, explanation: "2² × (√3)² = 4 × 3 = 12." }
          ] },
        { text: "Simplify surds by prime factorisation.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Take out square factors." },
            { type: "interactive", title: "Khan Academy: Simplifying surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked surd simplification." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Simplify √50.", options: ["5√2", "2√5", "25√2", "5√5"], answer: 0, explanation: "√50 = √25 × √2 = 5√2." },
            { type: "mcq", difficulty: "medium", q: "Simplify √72.", options: ["6√2", "2√6", "3√8", "8√3"], answer: 0, explanation: "√72 = √36 × √2 = 6√2." }
          ] },
        { text: "Add, subtract and multiply surds.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Adding, subtracting and multiplying surds." },
            { type: "interactive", title: "Surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "√2 × √3 = ?", options: ["√6", "√5", "6", "√1"], answer: 0, explanation: "√a × √b = √(ab) = √6." },
            { type: "mcq", difficulty: "medium", q: "2√3 + 4√3 = ?", options: ["6√3", "6√6", "8√3", "6√9"], answer: 0, explanation: "Like surds add: (2 + 4)√3 = 6√3." }
          ] },
        { text: "Rationalise the denominator.",
          resources: [
            { type: "interactive", title: "Conjugates", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/conjugate.html", note: "Removing surds from the denominator." },
            { type: "interactive", title: "Rationalize the denominator", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Rationalise 1/√2.", options: ["√2/2", "2/√2", "√2", "1/2"], answer: 0, explanation: "Multiply top and bottom by √2: √2/2." },
            { type: "short", difficulty: "hard", q: "Explain how to rationalise the denominator of 3/√5.", answer: "Multiply numerator and denominator by √5: (3 × √5)/(√5 × √5) = 3√5/5.", explanation: "Multiplying by √5/√5 clears the surd from the bottom." }
          ] }
      ]
    },

    /* ============================ Advanced Algebra ============================ */
    {
      id: "m8-algebra",
      title: "Advanced Algebra",
      subject: "Algebra",
      icon: "🧠",
      summary: "Factorising quadratics, splitting the middle term, special cases, algebraic fractions, forming and solving equations, changing the subject, transposition and modelling.",
      objectives: [
        { text: "Factorise quadratic expressions.",
          resources: [
            { type: "interactive", title: "Factoring Quadratics", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring-quadratics.html", note: "Into two brackets." },
            { type: "interactive", title: "Factoring quadratics", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Factorise x² + 6x + 8.", options: ["(x + 2)(x + 4)", "(x + 1)(x + 8)", "(x + 3)(x + 5)", "(x − 2)(x − 4)"], answer: 0, explanation: "2 and 4 multiply to 8 and add to 6." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 9.", options: ["(x + 3)(x − 3)", "(x − 3)²", "(x + 9)(x − 1)", "(x − 3)(x − 3)"], answer: 0, explanation: "Difference of two squares: x² − 3²." }
          ] },
        { text: "Factorise by splitting the middle term.",
          resources: [
            { type: "interactive", title: "Splitting the middle term", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "For ax² + bx + c." },
            { type: "interactive", title: "Factoring Quadratics", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring-quadratics.html", note: "Splitting the middle term." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Factorise 2x² + 7x + 3 by splitting the middle term.", options: ["(2x + 1)(x + 3)", "(2x + 3)(x + 1)", "(x + 1)(x + 3)", "(2x + 1)(x + 1)"], answer: 0, explanation: "Split 7x into 6x + x: 2x(x+3) + 1(x+3) = (2x+1)(x+3)." },
            { type: "short", difficulty: "medium", q: "To factorise x² + 5x + 6 by splitting, which two numbers multiply to 6 and add to 5?", answer: "2 and 3, giving (x + 2)(x + 3).", explanation: "Find a factor pair of the constant that sums to the middle coefficient." }
          ] },
        { text: "Factorise special quadratics where b = 0 or c = 0.",
          resources: [
            { type: "interactive", title: "Difference of squares", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "b = 0 and c = 0 cases." },
            { type: "interactive", title: "Special factoring", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 16 (here b = 0).", options: ["(x + 4)(x − 4)", "(x − 4)²", "(x + 8)(x − 2)", "(x + 16)(x − 1)"], answer: 0, explanation: "Difference of two squares: x² − 4²." },
            { type: "mcq", difficulty: "easy", q: "Factorise x² + 5x (here c = 0).", options: ["x(x + 5)", "(x + 5)(x)", "x²(1 + 5)", "(x + 5)²"], answer: 0, explanation: "Common factor x: x(x + 5)." }
          ] },
        { text: "Simplify algebraic fractions with algebraic denominators.",
          resources: [
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Simplifying algebraic fractions." },
            { type: "interactive", title: "Rational expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Simplify x²/x.", options: ["x", "x²", "1", "x³"], answer: 0, explanation: "x² ÷ x = x." },
            { type: "mcq", difficulty: "medium", q: "(1/x) + (1/x) = ?", options: ["2/x", "1/(2x)", "2/x²", "1/x²"], answer: 0, explanation: "Same denominator: add the tops, 1 + 1 = 2 → 2/x." }
          ] },
        { text: "Form equations from situations.",
          resources: [
            { type: "interactive", title: "Linear Equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/linear-equations.html", note: "Turning situations into equations." },
            { type: "interactive", title: "Khan Academy: Forming equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked word-problem equations." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "The sum of a number and 7 is 20. Form and solve an equation.", answer: "x + 7 = 20 → x = 13.", explanation: "Write the relationship as an equation, then solve." },
            { type: "numeric", difficulty: "hard", q: "A rectangle's length is 3 more than its width w, and the perimeter is 26. Form 2(w + w + 3) = 26 and solve for w.", answer: "5", explanation: "2(2w + 3) = 26 → 4w + 6 = 26 → 4w = 20 → w = 5." }
          ] },
        { text: "Solve linear equations.",
          resources: [
            { type: "interactive", title: "Solving equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/linear-equations.html", note: "Step-by-step solving." },
            { type: "interactive", title: "Linear equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Solve 4x − 7 = 2x + 5. What is x?", answer: "6", explanation: "2x = 12 → x = 6." },
            { type: "numeric", difficulty: "medium", q: "Solve 3(x − 2) = 9. What is x?", answer: "5", explanation: "x − 2 = 3 → x = 5." }
          ] },
        { text: "Change the subject of a formula.",
          resources: [
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Rearranging formulae." },
            { type: "interactive", title: "Rearranging formulas", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Make x the subject of y = x + 3.", options: ["x = y − 3", "x = y + 3", "x = 3 − y", "x = 3y"], answer: 0, explanation: "Subtract 3 from both sides: x = y − 3." },
            { type: "mcq", difficulty: "hard", q: "Make r the subject of A = πr².", options: ["r = √(A/π)", "r = A/π", "r = A²/π", "r = π/A"], answer: 0, explanation: "Divide by π then square-root: r = √(A/π)." }
          ] },
        { text: "Transpose formulae and model multi-step problems.",
          resources: [
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Rearranging multi-term formulae." },
            { type: "interactive", title: "Algebraic modelling", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Rearrange v = u + at to make a the subject.", options: ["a = (v − u)/t", "a = v − u − t", "a = v/u + t", "a = (v + u)/t"], answer: 0, explanation: "Subtract u, then divide by t." },
            { type: "short", difficulty: "medium", q: "A taxi charges £3 plus £2 per km. Write a formula for the cost C of a journey of d km, and find the cost of 5 km.", answer: "C = 3 + 2d; for d = 5, C = 3 + 10 = £13.", explanation: "Fixed charge plus a rate times distance." }
          ] }
      ]
    },

    /* ============================ Linear Equations & Functions ============================ */
    {
      id: "m8-linear-functions",
      title: "Linear Equations & Functions",
      subject: "Algebra",
      icon: "📈",
      summary: "Variables on both sides, slope as rate of change from tables and graphs, graphing lines, linear models, function notation and evaluating functions.",
      objectives: [
        { text: "Solve equations with variables on both sides.",
          resources: [
            { type: "interactive", title: "Variables on both sides", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Collecting terms." },
            { type: "interactive", title: "Linear equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/linear-equations.html", note: "Solving step-by-step." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Solve 5x − 3 = 2x + 9. What is x?", answer: "4", explanation: "3x = 12 → x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 7x + 2 = 3x + 18. What is x?", answer: "4", explanation: "4x = 16 → x = 4." }
          ] },
        { text: "Interpret slope as a rate of change.",
          resources: [
            { type: "interactive", title: "Slope (gradient)", provider: "Math is Fun", url: "https://www.mathsisfun.com/gradient.html", note: "Rate of change of a line." },
            { type: "interactive", title: "Slope", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The slope (gradient) of a line represents:", options: ["the rate of change of y with x", "the y-intercept", "the area", "the length"], answer: 0, explanation: "Slope = how much y changes per unit of x." },
            { type: "tf", difficulty: "easy", q: "A steeper line has a larger gradient.", answer: true, explanation: "Steeper = greater rate of change." }
          ] },
        { text: "Find slope from a table of values.",
          resources: [
            { type: "interactive", title: "Slope from a table", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Change in y over change in x." },
            { type: "interactive", title: "Gradient", provider: "Math is Fun", url: "https://www.mathsisfun.com/gradient.html", note: "Rise over run." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A table shows x = 1, y = 3; x = 2, y = 5; x = 3, y = 7. What is the slope?", answer: "2", explanation: "y goes up 2 for each step of 1 in x." },
            { type: "numeric", difficulty: "easy", q: "x increases by 1 and y increases by 4 each time. What is the slope?", answer: "4", explanation: "Slope = change in y ÷ change in x = 4 ÷ 1 = 4." }
          ] },
        { text: "Find slope from a graph.",
          resources: [
            { type: "interactive", title: "Slope from two points", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Reading a line's gradient." },
            { type: "interactive", title: "Graphing calculator", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Plot lines and see the slope." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A line passes through (0, 0) and (2, 6). Its slope is:", options: ["3", "2", "6", "1/3"], answer: 0, explanation: "Slope = 6 ÷ 2 = 3." },
            { type: "numeric", difficulty: "easy", q: "A line rises 10 over a run of 5. What is the slope?", answer: "2", explanation: "10 ÷ 5 = 2." }
          ] },
        { text: "Interpret slope as rise over run.",
          resources: [
            { type: "interactive", title: "Rise over run", provider: "Math is Fun", url: "https://www.mathsisfun.com/gradient.html", note: "The slope formula." },
            { type: "interactive", title: "Slope", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Slope = rise ÷ run. If rise = 6 and run = 3, the slope =", options: ["2", "18", "0.5", "9"], answer: 0, explanation: "6 ÷ 3 = 2." },
            { type: "tf", difficulty: "easy", q: "A horizontal line has a slope of 0.", answer: true, explanation: "There is no rise, so the slope is 0." }
          ] },
        { text: "Graph linear equations.",
          resources: [
            { type: "interactive", title: "Equation of a line (y = mx + c)", provider: "Math is Fun", url: "https://www.mathsisfun.com/equation_of_line.html", note: "Gradient and intercept." },
            { type: "interactive", title: "Graphing calculator", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Plot lines instantly." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "In y = 2x + 1, the y-intercept is:", options: ["1", "2", "0", "−1"], answer: 0, explanation: "The constant term is the y-intercept: 1." },
            { type: "mcq", difficulty: "easy", q: "In y = 3x − 4, the gradient is:", options: ["3", "−4", "4", "−3"], answer: 0, explanation: "The coefficient of x is the gradient: 3." }
          ] },
        { text: "Use linear models.",
          resources: [
            { type: "interactive", title: "Linear models", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Real-life linear relationships." },
            { type: "interactive", title: "Graphing calculator", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Model with lines." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "A phone plan costs £10 plus £2 per GB. Write y in terms of x (GB) and find the cost for 5 GB.", answer: "y = 10 + 2x; for x = 5, y = 10 + 10 = £20.", explanation: "Fixed cost plus rate × quantity." },
            { type: "numeric", difficulty: "easy", q: "y = 4x + 2 models a cost. Find y when x = 3.", answer: "14", explanation: "4 × 3 + 2 = 14." }
          ] },
        { text: "Use function notation f(x).",
          resources: [
            { type: "interactive", title: "Function notation", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/function.html", note: "What f(x) means." },
            { type: "interactive", title: "Functions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "If f(x) = 2x + 3, find f(4).", answer: "11", explanation: "2 × 4 + 3 = 11." },
            { type: "numeric", difficulty: "medium", q: "If f(x) = x² − 1, find f(3).", answer: "8", explanation: "3² − 1 = 9 − 1 = 8." }
          ] },
        { text: "Evaluate functions.",
          resources: [
            { type: "interactive", title: "Evaluating functions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Substituting inputs." },
            { type: "interactive", title: "Functions", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/function.html", note: "Inputs and outputs." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "If g(x) = 5x, find g(6).", answer: "30", explanation: "5 × 6 = 30." },
            { type: "numeric", difficulty: "medium", q: "If f(x) = 3x − 2, find f(0).", answer: "-2", explanation: "3 × 0 − 2 = −2." }
          ] },
        { text: "Understand linearity and the definition of a function.",
          resources: [
            { type: "interactive", title: "What is a Function?", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/function.html", note: "One output per input." },
            { type: "interactive", title: "Functions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A function gives exactly one output for each input.", answer: true, explanation: "That one-to-one mapping of inputs to outputs is the definition." },
            { type: "mcq", difficulty: "medium", q: "Which equation is linear?", options: ["y = 2x + 1", "y = x²", "y = 1/x", "y = √x"], answer: 0, explanation: "A linear equation graphs as a straight line: y = 2x + 1." }
          ] }
      ]
    },

    /* ============================ Simultaneous Equations / Systems ============================ */
    {
      id: "m8-simultaneous",
      title: "Simultaneous Equations / Systems",
      subject: "Algebra",
      icon: "🔗",
      summary: "Solving systems by substitution and elimination, scaling equations, graphical solutions, and word problems using simultaneous linear equations.",
      objectives: [
        { text: "Solve simultaneous equations by substitution.",
          resources: [
            { type: "interactive", title: "Systems by substitution", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/systems-linear-equations.html", note: "Substituting one equation into another." },
            { type: "interactive", title: "Substitution method", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "Solve y = x + 1 and x + y = 5 by substitution.", answer: "Substitute: x + (x + 1) = 5 → 2x + 1 = 5 → x = 2, y = 3.", explanation: "Replace y with x + 1, then solve for x." },
            { type: "numeric", difficulty: "medium", q: "Using y = 2x and x + y = 9, find x.", answer: "3", explanation: "x + 2x = 9 → 3x = 9 → x = 3." }
          ] },
        { text: "Solve simultaneous equations by elimination.",
          resources: [
            { type: "interactive", title: "Systems by elimination", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/systems-linear-equations.html", note: "Adding or subtracting equations." },
            { type: "interactive", title: "Elimination method", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "Solve x + y = 10 and x − y = 4 by elimination.", answer: "Add the equations: 2x = 14 → x = 7, then y = 3.", explanation: "Adding removes y; subtracting would remove x." },
            { type: "numeric", difficulty: "medium", q: "x + y = 8 and x − y = 2. Find x.", answer: "5", explanation: "Add: 2x = 10 → x = 5." }
          ] },
        { text: "Multiply equations by constants to eliminate a variable.",
          resources: [
            { type: "interactive", title: "Scaling equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Matching coefficients." },
            { type: "interactive", title: "Systems of equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/systems-linear-equations.html", note: "Preparing to eliminate." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "To eliminate y from x + 2y = 7 and 3x + y = 11, you could:", options: ["multiply the 2nd equation by 2", "add them directly", "multiply the 1st by 3", "subtract y"], answer: 0, explanation: "Multiplying the 2nd by 2 gives 6x + 2y, matching the 2y to eliminate." },
            { type: "tf", difficulty: "easy", q: "You can multiply an entire equation by a constant without changing its solution.", answer: true, explanation: "Both sides scale equally, so the solution is unchanged." }
          ] },
        { text: "Solve systems graphically.",
          resources: [
            { type: "interactive", title: "Graphical solutions", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Plot both lines and find the crossing point." },
            { type: "interactive", title: "Systems graphically", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The solution of a pair of simultaneous linear equations on a graph is:", options: ["the point where the lines cross", "the y-intercept", "the origin", "the steeper line"], answer: 0, explanation: "The intersection satisfies both equations." },
            { type: "tf", difficulty: "medium", q: "Two parallel lines have no simultaneous solution.", answer: true, explanation: "Parallel lines never cross, so there is no common point." }
          ] },
        { text: "Solve word problems with simultaneous equations.",
          resources: [
            { type: "interactive", title: "Systems word problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Forming two equations from a problem." },
            { type: "interactive", title: "Systems of Linear Equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/systems-linear-equations.html", note: "Worked simultaneous-equation problems." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "2 apples and 1 banana cost £5; 1 apple and 1 banana cost £3. Find the cost of an apple.", answer: "Subtract the equations: (2a + b) − (a + b) = 5 − 3 → a = £2.", explanation: "Eliminating b leaves the price of an apple." },
            { type: "numeric", difficulty: "medium", q: "Two numbers sum to 12 and differ by 4. What is the larger number?", answer: "8", explanation: "Add the equations: 2 × larger = 16 → larger = 8." }
          ] }
      ]
    },

    /* ============================ Sequences ============================ */
    {
      id: "m8-sequences",
      title: "Sequences",
      subject: "Algebra",
      icon: "🔁",
      summary: "Arithmetic and geometric sequences, finding sequence rules and generalising patterns with an nth-term formula.",
      objectives: [
        { text: "Work with arithmetic sequences.",
          resources: [
            { type: "interactive", title: "Arithmetic Sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Constant common difference." },
            { type: "interactive", title: "Arithmetic sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Arithmetic sequence 3, 7, 11, 15… What is the common difference?", answer: "4", explanation: "Each term increases by 4." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 2n + 1. Find the 10th term.", answer: "21", explanation: "2 × 10 + 1 = 21." }
          ] },
        { text: "Work with geometric sequences.",
          resources: [
            { type: "interactive", title: "Geometric Sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Constant common ratio." },
            { type: "interactive", title: "Geometric sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Geometric sequence 2, 6, 18, 54… What is the common ratio?", answer: "3", explanation: "Each term is 3 times the previous one." },
            { type: "numeric", difficulty: "medium", q: "A geometric sequence starts at 3 with ratio 2. What is the 3rd term?", answer: "12", explanation: "3, 6, 12 — the third term is 12." }
          ] },
        { text: "Find the rule (nth term) of a linear sequence.",
          resources: [
            { type: "interactive", title: "Sequences & Series", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Finding the nth-term formula." },
            { type: "interactive", title: "Khan Academy: nth term", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked nth-term examples." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The nth term of 5, 8, 11, 14… is:", options: ["3n + 2", "5n", "3n + 5", "2n + 3"], answer: 0, explanation: "Common difference 3, and 3(1) + 2 = 5: rule is 3n + 2." },
            { type: "numeric", difficulty: "easy", q: "Using nth term 4n − 1, find the 6th term.", answer: "23", explanation: "4 × 6 − 1 = 23." }
          ] },
        { text: "Generalise a pattern with an nth-term formula.",
          resources: [
            { type: "interactive", title: "Generalising patterns", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "From pattern to formula." },
            { type: "interactive", title: "Sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Rules and terms." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "A pattern uses 2, 5, 8, 11 matchsticks. Find a rule for the nth term.", answer: "The common difference is 3, and 3(1) − 1 = 2, so the nth term is 3n − 1.", explanation: "Linear sequence rule: (difference)n + (zero term)." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 3n − 1. Which term equals 20? Give n.", answer: "7", explanation: "3n − 1 = 20 → 3n = 21 → n = 7." }
          ] }
      ]
    },

    /* ============================ Advanced Geometry ============================ */
    {
      id: "m8-geometry",
      title: "Advanced Geometry",
      subject: "Geometry",
      icon: "📐",
      summary: "Scale drawings, transformations and similarity, the effect of scaling on area, algebra in geometry, the Pythagorean theorem, and coordinate geometry.",
      objectives: [
        { text: "Use scale drawings and map scales.",
          resources: [
            { type: "interactive", title: "Khan Academy: Scale drawings", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Real lengths from a scale." },
            { type: "interactive", title: "Scale", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/index.html", note: "Scale and ratio." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Scale 1:200. A line 4 cm long represents how many cm in real life?", answer: "800", explanation: "4 × 200 = 800 cm." },
            { type: "mcq", difficulty: "hard", q: "On a 1:25,000 map, 1 cm represents:", options: ["250 m", "25 m", "2.5 km", "25 km"], answer: 0, explanation: "25,000 cm = 250 m." }
          ] },
        { text: "Recognise transformations.",
          resources: [
            { type: "interactive", title: "Transformations", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/transformations.html", note: "Translation, rotation, reflection, enlargement." },
            { type: "interactive", title: "Transformations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which of these is NOT a geometric transformation?", options: ["translation", "rotation", "reflection", "factorisation"], answer: 3, explanation: "Factorisation is an algebra operation, not a transformation." },
            { type: "tf", difficulty: "easy", q: "A translation slides a shape without turning it.", answer: true, explanation: "Translation moves every point the same distance and direction." }
          ] },
        { text: "Apply rigid transformations.",
          resources: [
            { type: "interactive", title: "Rigid transformations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Congruence-preserving moves." },
            { type: "interactive", title: "Transformations", provider: "GeoGebra", url: "https://www.geogebra.org/geometry", note: "Explore interactively." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "Rigid transformations (translation, rotation, reflection) preserve size and shape.", answer: true, explanation: "Only the position/orientation changes." },
            { type: "mcq", difficulty: "medium", q: "After a rigid transformation, the image is ___ the original.", options: ["congruent to", "larger than", "smaller than", "a different shape from"], answer: 0, explanation: "Same size and shape means congruent." }
          ] },
        { text: "Work with dilations (enlargements).",
          resources: [
            { type: "interactive", title: "Resizing (dilation)", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/resizing.html", note: "Scale factor enlargements." },
            { type: "interactive", title: "Dilations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A shape is enlarged by scale factor 3. A 4 cm side becomes how many cm?", answer: "12", explanation: "4 × 3 = 12 cm." },
            { type: "mcq", difficulty: "medium", q: "A dilation with scale factor 1/2 makes a shape:", options: ["smaller", "larger", "congruent", "rotated"], answer: 0, explanation: "A factor between 0 and 1 reduces the size." }
          ] },
        { text: "Understand similarity.",
          resources: [
            { type: "interactive", title: "Similar shapes", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/similar.html", note: "Same shape, scaled size." },
            { type: "interactive", title: "Similarity", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Similar shapes have the same shape but may differ in size, with equal corresponding angles.", answer: true, explanation: "Angles match and sides are in the same ratio." },
            { type: "numeric", difficulty: "medium", q: "Two similar triangles: a side of 3 maps to 9. What is the scale factor?", answer: "3", explanation: "9 ÷ 3 = 3." }
          ] },
        { text: "Find the effect of scaling on perimeter and area.",
          resources: [
            { type: "interactive", title: "Similar Shapes", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/similar.html", note: "How area scales with length." },
            { type: "interactive", title: "Similar shapes & area", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "If a shape is enlarged by scale factor 2, its area increases by a factor of:", options: ["4", "2", "8", "1/2"], answer: 0, explanation: "Area scales by the square of the length factor: 2² = 4." },
            { type: "tf", difficulty: "medium", q: "Enlarging lengths by a factor of k multiplies the area by k².", answer: true, explanation: "Area is two-dimensional, so it scales by k²." }
          ] },
        { text: "Use algebra within geometry.",
          resources: [
            { type: "interactive", title: "Angles & algebra", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Forming equations from angle/length facts." },
            { type: "interactive", title: "Geometry", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/index.html", note: "Angle rules." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Angles on a straight line sum to 180°. They are x and 2x. Find x.", answer: "60", explanation: "x + 2x = 180 → 3x = 180 → x = 60." },
            { type: "numeric", difficulty: "hard", q: "A rectangle has sides x and x + 2 and perimeter 16. Find x.", answer: "3", explanation: "2(x + x + 2) = 16 → 4x + 4 = 16 → x = 3." }
          ] },
        { text: "State and use the Pythagorean theorem.",
          resources: [
            { type: "video", title: "Properties of a right-angle triangle (4 min)", provider: "🐺 Wolves classroom · YouTube", url: "https://www.youtube.com/watch?v=PORfKtT7rU0", note: "The right triangle — the shape the Pythagorean theorem is built on." },
            { type: "interactive", title: "Pythagorean theorem", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/pythagorean-theorem.html", note: "a² + b² = c²." },
            { type: "interactive", title: "Pythagorean theorem", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In a right triangle, a² + b² = c², where c is the hypotenuse.", answer: true, explanation: "This is the Pythagorean theorem." },
            { type: "mcq", difficulty: "medium", q: "Which set of side lengths forms a right triangle?", options: ["3, 4, 5", "2, 3, 4", "1, 2, 3", "5, 6, 7"], answer: 0, explanation: "3² + 4² = 9 + 16 = 25 = 5²." }
          ] },
        { text: "Find the hypotenuse of a right triangle.",
          resources: [
            { type: "interactive", title: "Finding the hypotenuse", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/pythagorean-theorem.html", note: "c = √(a² + b²)." },
            { type: "interactive", title: "Khan Academy: Pythagorean theorem", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Worked hypotenuse examples." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A right triangle has legs 3 and 4. What is the hypotenuse?", answer: "5", explanation: "√(3² + 4²) = √25 = 5." },
            { type: "numeric", difficulty: "medium", q: "A right triangle has legs 6 and 8. What is the hypotenuse?", answer: "10", explanation: "√(36 + 64) = √100 = 10." }
          ] },
        { text: "Find a missing leg of a right triangle.",
          resources: [
            { type: "interactive", title: "Finding a leg", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Rearranging Pythagoras." },
            { type: "interactive", title: "Pythagorean theorem", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/pythagorean-theorem.html", note: "Solving for a leg." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A right triangle has hypotenuse 13 and one leg 5. What is the other leg?", answer: "12", explanation: "√(13² − 5²) = √(169 − 25) = √144 = 12." },
            { type: "numeric", difficulty: "medium", q: "Hypotenuse 10, one leg 6. What is the other leg?", answer: "8", explanation: "√(100 − 36) = √64 = 8." }
          ] },
        { text: "Apply coordinate geometry.",
          resources: [
            { type: "interactive", title: "Distance & midpoint", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/distance-2-points.html", note: "Distance and midpoint formulas." },
            { type: "interactive", title: "Coordinate geometry", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "What is the distance between (0, 0) and (3, 4)?", answer: "5", explanation: "√(3² + 4²) = √25 = 5." },
            { type: "mcq", difficulty: "medium", q: "The midpoint of (0, 0) and (4, 6) is:", options: ["(2, 3)", "(4, 6)", "(0, 0)", "(3, 2)"], answer: 0, explanation: "Average the coordinates: ((0+4)/2, (0+6)/2) = (2, 3)." }
          ] },
        { text: "Solve ratio segment / partition problems.",
          resources: [
            { type: "interactive", title: "Dividing a line in a ratio", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Partitioning segments." },
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Dividing a segment in a ratio." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A line from 0 to 12 is divided in the ratio 1:3. The dividing point is at?", answer: "3", explanation: "4 parts over length 12 = 3 each; 1 part from 0 is at 3." },
            { type: "short", difficulty: "hard", q: "A point divides AB in the ratio 2:1, where A = 0 and B = 9. Find the point's position.", answer: "Total 3 parts over length 9 → 3 per part; 2 parts from A puts the point at 6.", explanation: "Position = (2/3) of the way from A to B." }
          ] }
      ]
    },

    /* ============================ Data, Statistics & Probability ============================ */
    {
      id: "m8-data",
      title: "Data, Statistics & Probability",
      subject: "Data",
      icon: "📊",
      summary: "Compound probability, bivariate data and scatter plots, correlation, data modelling with a line of best fit, sampling and reliability, and statistical interpretation.",
      objectives: [
        { text: "Find compound probability.",
          resources: [
            { type: "interactive", title: "Compound probability", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/probability-events-conditional.html", note: "Probability of combined events." },
            { type: "interactive", title: "Compound events", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "P(two heads on two coin flips) = ?", options: ["1/4", "1/2", "1/3", "2/3"], answer: 0, explanation: "1/2 × 1/2 = 1/4." },
            { type: "numeric", difficulty: "medium", q: "P(rolling 6 then 6 on two dice) = 1/36. Give the denominator.", answer: "36", explanation: "1/6 × 1/6 = 1/36." }
          ] },
        { text: "Review and extend probability.",
          resources: [
            { type: "interactive", title: "Probability", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/probability.html", note: "Probability scale and outcomes." },
            { type: "interactive", title: "Probability", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A bag has 4 red and 6 blue balls. P(blue) as a decimal?", answer: "0.6", explanation: "6 out of 10 = 0.6." },
            { type: "tf", difficulty: "easy", q: "All probabilities are between 0 and 1.", answer: true, explanation: "0 means impossible, 1 means certain." }
          ] },
        { text: "Work with bivariate data.",
          resources: [
            { type: "interactive", title: "Bivariate data", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Two variables together." },
            { type: "interactive", title: "Data", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Paired data." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Bivariate data involves:", options: ["two variables", "one variable", "no variables", "categories only"], answer: 0, explanation: "'Bi' means two — two variables." },
            { type: "tf", difficulty: "easy", q: "Bivariate data can be plotted on a scatter graph.", answer: true, explanation: "Each pair becomes a point (x, y)." }
          ] },
        { text: "Read and create scatter plots.",
          resources: [
            { type: "interactive", title: "Scatter Plots", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/scatter-xy-plots.html", note: "Plotting paired data." },
            { type: "interactive", title: "Scatter plots", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A scatter plot is used to show:", options: ["the relationship between two variables", "a single value", "parts of a whole", "time only"], answer: 0, explanation: "It reveals how two variables relate." },
            { type: "tf", difficulty: "easy", q: "Each point on a scatter plot represents a pair of values.", answer: true, explanation: "One point = one (x, y) pair." }
          ] },
        { text: "Describe correlation.",
          resources: [
            { type: "interactive", title: "Correlation", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/correlation.html", note: "Positive, negative and no correlation." },
            { type: "interactive", title: "Correlation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Points going from bottom-left to top-right show:", options: ["positive correlation", "negative correlation", "no correlation", "an outlier"], answer: 0, explanation: "Both variables increase together — positive correlation." },
            { type: "tf", difficulty: "hard", q: "Correlation does not necessarily mean one variable causes the other.", answer: true, explanation: "Correlation is not causation." }
          ] },
        { text: "Model data with a line of best fit.",
          resources: [
            { type: "interactive", title: "Line of best fit", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/least-squares-regression.html", note: "Trend lines for data." },
            { type: "interactive", title: "Trend lines", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Fit a line to data." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A line of best fit is used to:", options: ["model a trend in scattered data", "connect every point", "show the mean only", "list the data"], answer: 0, explanation: "It summarises the overall trend." },
            { type: "short", difficulty: "medium", q: "What is a 'line of best fit' used for on a scatter graph?", answer: "It shows the overall trend in the data and can be used to estimate or predict values.", explanation: "It captures the general direction of the points." }
          ] },
        { text: "Judge sampling and reliability.",
          resources: [
            { type: "interactive", title: "Sampling & reliability", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Fair, reliable samples." },
            { type: "interactive", title: "Data Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Bias and reliability in data." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "A larger, well-chosen sample generally gives more reliable results.", answer: true, explanation: "It better represents the population." },
            { type: "mcq", difficulty: "easy", q: "A reliable investigation should be:", options: ["repeatable and unbiased", "quick and small", "based on opinion", "done only once"], answer: 0, explanation: "Repeatable + unbiased = reliable." }
          ] },
        { text: "Interpret statistics.",
          resources: [
            { type: "interactive", title: "Averages & range", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/central-measures.html", note: "Summarising data." },
            { type: "interactive", title: "Interpreting data", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Find the range of 4, 9, 2, 7.", answer: "7", explanation: "Range = largest − smallest = 9 − 2 = 7." },
            { type: "numeric", difficulty: "easy", q: "Find the mean of 10, 20, 30.", answer: "20", explanation: "(10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20." }
          ] }
      ]
    },

    /* ============================ Capstone & Review ============================ */
    {
      id: "m8-capstone",
      title: "Capstone & Review",
      subject: "Review",
      icon: "🏁",
      summary: "A mixed spiral review of Grades 6–8: number, exponents, equations, systems, geometry and data, plus multi-step modelling and exam strategy.",
      objectives: [
        { text: "Revise mixed Grade 6–8 skills (spiral review).",
          resources: [
            { type: "interactive", title: "Mixed practice", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Spiral review across topics." },
            { type: "interactive", title: "Khan Academy: Grade 8 review", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Mixed revision practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Work out 25% of 200.", answer: "50", explanation: "200 ÷ 4 = 50." },
            { type: "numeric", difficulty: "easy", q: "Solve 2x + 5 = 17. What is x?", answer: "6", explanation: "2x = 12 → x = 6." }
          ] },
        { text: "Bridge core skills before Grade 8 work.",
          resources: [
            { type: "interactive", title: "Pre-algebra review", provider: "Khan Academy", url: "https://www.khanacademy.org/math/pre-algebra", note: "Foundation skills." },
            { type: "interactive", title: "Number & algebra", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Review topics." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Evaluate 3² + 4².", answer: "25", explanation: "9 + 16 = 25." },
            { type: "mcq", difficulty: "easy", q: "Simplify the ratio 10:15.", options: ["2:3", "3:2", "5:3", "1:2"], answer: 0, explanation: "Divide both by 5: 2:3." }
          ] },
        { text: "Review exponents, linear equations and systems.",
          resources: [
            { type: "interactive", title: "Algebra review", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Exponents, equations and systems." },
            { type: "interactive", title: "Algebra", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Review." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "x³ × x² = ?", options: ["x⁵", "x⁶", "x¹", "2x⁵"], answer: 0, explanation: "Add the powers: 3 + 2 = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve x + y = 7 and x − y = 1. Find x.", answer: "4", explanation: "Add the equations: 2x = 8 → x = 4." }
          ] },
        { text: "Review geometry and data.",
          resources: [
            { type: "interactive", title: "Geometry review", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Key geometry skills." },
            { type: "interactive", title: "Data review", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Averages and graphs." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A right triangle has legs 9 and 12. What is the hypotenuse?", answer: "15", explanation: "√(81 + 144) = √225 = 15." },
            { type: "numeric", difficulty: "easy", q: "Find the mean of 5, 10, 15, 20.", answer: "12.5", explanation: "50 ÷ 4 = 12.5." }
          ] },
        { text: "Solve multi-step modelling problems.",
          resources: [
            { type: "interactive", title: "Modelling problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Real-world multi-step problems." },
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Multi-step modelling problems." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "A gym charges £20 joining fee plus £15 per month. Write a formula for cost C after m months and find the cost after 6 months.", answer: "C = 20 + 15m; for m = 6, C = 20 + 90 = £110.", explanation: "Fixed fee plus a monthly rate." },
            { type: "numeric", difficulty: "medium", q: "Using C = 20 + 15m, find C when m = 4.", answer: "80", explanation: "20 + 15 × 4 = 20 + 60 = 80." }
          ] },
        { text: "Use test strategy for a cumulative assessment.",
          resources: [
            { type: "reading", title: "The math myth — you don't need a 'math brain'", provider: "🐺 Wolves classroom · Big Think", url: "https://bigthink.com/hard-science/math-myth/", note: "Why anyone can improve at maths with practice — a confidence boost before a test." },
            { type: "interactive", title: "Khan Academy: Review & test prep", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Revision and review." },
            { type: "interactive", title: "Khan Academy: Grade 8 review", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Mixed revision practice." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "Give two good strategies for a maths test.", answer: "Examples: read each question carefully, show your working, manage your time, attempt easier questions first, and check answers at the end.", explanation: "Good strategy improves accuracy and earns method marks." },
            { type: "tf", difficulty: "easy", q: "Showing your working can earn method marks even if the final answer is wrong.", answer: true, explanation: "Markers reward correct method as well as the final answer." }
          ] },
        { text: "Plan and carry out a final data / modelling project.",
          resources: [
            { type: "interactive", title: "Statistical projects", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "The data-handling cycle." },
            { type: "interactive", title: "Data handling", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Collecting and presenting data." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "Outline the steps of a data project, from question to conclusion.", answer: "Pose a clear question; collect/sample data fairly; organise and display it (tables and graphs); analyse it (averages, correlation); then draw and justify a conclusion, noting limitations.", explanation: "This is the data-handling cycle." },
            { type: "tf", difficulty: "easy", q: "A good data project states a clear question and supports its conclusion with evidence.", answer: true, explanation: "Evidence-based conclusions are the goal of a data project." }
          ] }
      ]
    }
  ]
});
