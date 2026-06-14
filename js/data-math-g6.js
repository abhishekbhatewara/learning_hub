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
            { type: "interactive", title: "Equivalent fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Videos and practice on equivalent fractions." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Fractions (Stage 7)", note: "Equivalent fractions and the four operations with fractions are covered in the Cambridge Stage 7 'Fractions' unit (the topic spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which fraction is equivalent to 2/3?", options: ["4/9", "4/6", "6/8", "3/4"], answer: 1, explanation: "Multiply numerator and denominator by 2: 2/3 = 4/6." },
            { type: "numeric", difficulty: "easy", q: "Fill the blank: 3/4 = ?/12", answer: "9", explanation: "4 × 3 = 12, so multiply the top by 3 too: 3 × 3 = 9." },
            { type: "mcq", difficulty: "easy", q: "Which fraction is equivalent to 1/2?", options: ["2/5", "3/6", "4/10", "3/8"], answer: 1, explanation: "Multiply top and bottom by 3: 1/2 = 3/6." },
            { type: "tf", difficulty: "easy", q: "4/8 is equivalent to 1/2.", answer: true, explanation: "Divide top and bottom by 4: 4/8 = 1/2." },
            { type: "numeric", difficulty: "easy", q: "Fill the blank: 2/5 = ?/15", answer: "6", explanation: "5 × 3 = 15, so multiply the top by 3 too: 2 × 3 = 6." },
            { type: "mcq", difficulty: "easy", q: "Which fraction is NOT equivalent to 3/4?", options: ["6/8", "9/12", "15/20", "6/9"], answer: 3, explanation: "6/9 simplifies to 2/3, not 3/4." },
            { type: "numeric", difficulty: "medium", q: "Fill the blank: 5/6 = 25/?", answer: "30", explanation: "5 × 5 = 25, so multiply the bottom by 5 too: 6 × 5 = 30." },
            { type: "mcq", difficulty: "medium", q: "Simplify 12/16 to its lowest terms.", options: ["3/4", "6/8", "4/5", "2/3"], answer: 0, explanation: "Divide numerator and denominator by 4: 12/16 = 3/4." },
            { type: "tf", difficulty: "medium", q: "To make an equivalent fraction you can only multiply, not divide.", answer: false, explanation: "You can divide too, which is called simplifying. Both give equivalent fractions." },
            { type: "numeric", difficulty: "medium", q: "How many eighths are the same as 3/4? (give the numerator)", answer: "6", explanation: "4 × 2 = 8, so 3 × 2 = 6. Answer: 6/8." },
            { type: "mcq", difficulty: "hard", q: "Which pair of fractions are equivalent?", options: ["3/5 and 9/20", "4/7 and 12/21", "2/3 and 5/8", "5/6 and 7/9"], answer: 1, explanation: "4/7: multiply by 3 gives 12/21. The others do not match." },
            { type: "short", difficulty: "hard", q: "Explain how you can tell that 5/8 and 15/24 are equivalent fractions.", answer: "Multiply numerator and denominator of 5/8 by 3: 5 × 3 = 15 and 8 × 3 = 24, giving 15/24. They are equivalent.", explanation: "Two fractions are equivalent if one can be obtained from the other by multiplying or dividing both parts by the same number." }
          ]
        },
        {
          text: "Add and subtract fractions, including those with different denominators.",
          resources: [
            { type: "interactive", title: "Adding Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions_addition.html", note: "Step-by-step with common denominators." },
            { type: "interactive", title: "Subtracting Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions_subtraction.html", note: "Subtracting fractions, step by step." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Fractions (Stage 7)", note: "Equivalent fractions and the four operations with fractions are covered in the Cambridge Stage 7 'Fractions' unit (the topic spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "1/4 + 2/4 = ?", options: ["3/8", "3/4", "2/4", "1/2"], answer: 1, explanation: "Same denominator: add the tops, 1 + 2 = 3, giving 3/4." },
            { type: "numeric", difficulty: "medium", q: "Work out 7/10 + 1/10 and give your answer as a decimal.", answer: "0.8", explanation: "7/10 + 1/10 = 8/10 = 0.8." },
            { type: "mcq", difficulty: "easy", q: "3/5 − 1/5 = ?", options: ["2/0", "4/5", "2/5", "3/10"], answer: 2, explanation: "Same denominator: subtract the tops, 3 − 1 = 2, giving 2/5." },
            { type: "tf", difficulty: "easy", q: "To add fractions with the same denominator, you add the numerators and keep the denominator.", answer: true, explanation: "2/7 + 3/7 = 5/7 — the denominator stays 7." },
            { type: "numeric", difficulty: "easy", q: "Work out 3/8 + 1/8. Give the numerator of the answer.", answer: "4", explanation: "3 + 1 = 4, so the answer is 4/8 (= 1/2)." },
            { type: "mcq", difficulty: "medium", q: "Work out 1/3 + 1/6.", options: ["2/9", "1/2", "2/6", "1/6"], answer: 1, explanation: "LCM of 3 and 6 is 6. 1/3 = 2/6. So 2/6 + 1/6 = 3/6 = 1/2." },
            { type: "numeric", difficulty: "medium", q: "Work out 3/4 − 1/2. Give your answer as a decimal.", answer: "0.25", explanation: "1/2 = 2/4, so 3/4 − 2/4 = 1/4 = 0.25." },
            { type: "mcq", difficulty: "medium", q: "Work out 5/6 − 1/3.", options: ["4/3", "1/2", "1/3", "4/6"], answer: 1, explanation: "1/3 = 2/6. So 5/6 − 2/6 = 3/6 = 1/2." },
            { type: "numeric", difficulty: "medium", q: "Work out 1/4 + 1/3. Give the numerator when the denominator is 12.", answer: "7", explanation: "LCM is 12. 1/4 = 3/12 and 1/3 = 4/12. Sum = 7/12." },
            { type: "tf", difficulty: "medium", q: "1/2 + 1/3 = 2/5.", answer: false, explanation: "You cannot just add tops and bottoms. The correct answer is 5/6." },
            { type: "mcq", difficulty: "hard", q: "Work out 2/3 + 3/4.", options: ["5/7", "17/12", "5/12", "6/12"], answer: 1, explanation: "LCM of 3 and 4 is 12. 2/3 = 8/12, 3/4 = 9/12. Sum = 17/12." },
            { type: "numeric", difficulty: "hard", q: "Work out 7/8 − 2/3. Give the numerator when the denominator is 24.", answer: "5", explanation: "LCM is 24. 7/8 = 21/24, 2/3 = 16/24. 21 − 16 = 5. Answer: 5/24." }
          ]
        },
        {
          text: "Write whole numbers as fractions.",
          resources: [
            { type: "interactive", title: "Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions.html", note: "How any whole number can be written over 1." },
            { type: "interactive", title: "Fractions intro", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", note: "Whole numbers and fractions." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Fractions (Stage 7)", note: "Equivalent fractions and the four operations with fractions are covered in the Cambridge Stage 7 'Fractions' unit (the topic spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The whole number 3 written as a fraction is:", options: ["1/3", "3/1", "3/3", "0/3"], answer: 1, explanation: "Any whole number is itself over 1: 3 = 3/1." },
            { type: "numeric", difficulty: "medium", q: "Write 4 as a number of quarters: 4 = ?/4", answer: "16", explanation: "Each whole is 4 quarters, so 4 wholes = 16 quarters = 16/4." },
            { type: "tf", difficulty: "easy", q: "The whole number 7 can be written as the fraction 7/1.", answer: true, explanation: "Any whole number n equals n/1." },
            { type: "mcq", difficulty: "easy", q: "Which fraction is equal to the whole number 5?", options: ["1/5", "5/5", "5/1", "0/5"], answer: 2, explanation: "5 = 5/1." },
            { type: "numeric", difficulty: "easy", q: "Write 6 as a fraction with denominator 1. Give the numerator.", answer: "6", explanation: "6 = 6/1, so the numerator is 6." },
            { type: "mcq", difficulty: "easy", q: "2 written as thirds (denominator 3) equals:", options: ["2/3", "3/2", "6/3", "1/3"], answer: 2, explanation: "2 × 3 = 6, so 2 = 6/3." },
            { type: "numeric", difficulty: "medium", q: "Write 3 as a number of fifths: 3 = ?/5", answer: "15", explanation: "3 × 5 = 15, so 3 = 15/5." },
            { type: "numeric", difficulty: "medium", q: "Write 5 as a number of thirds: 5 = ?/3", answer: "15", explanation: "5 × 3 = 15, so 5 = 15/3." },
            { type: "tf", difficulty: "medium", q: "10/2 equals the whole number 5.", answer: true, explanation: "10 ÷ 2 = 5, so 10/2 = 5." },
            { type: "mcq", difficulty: "medium", q: "Which of these fractions equals a whole number?", options: ["7/2", "9/3", "5/4", "11/6"], answer: 1, explanation: "9 ÷ 3 = 3, a whole number." },
            { type: "numeric", difficulty: "hard", q: "Write 8 as a number of sixths: 8 = ?/6", answer: "48", explanation: "8 × 6 = 48, so 8 = 48/6." },
            { type: "short", difficulty: "hard", q: "Explain why any non-zero whole number can be written as a fraction, and give an example.", answer: "Any whole number n equals n/1 because dividing by 1 does not change the value. Example: 9 = 9/1.", explanation: "The denominator 1 means 'one group', keeping the value the same." }
          ]
        },
        {
          text: "Convert between mixed numbers and improper fractions.",
          resources: [
            { type: "interactive", title: "Mixed Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/mixed-fractions.html", note: "Converting both ways with examples." },
            { type: "interactive", title: "Mixed & improper fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", note: "Practice converting." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Fractions (Stage 7)", note: "Equivalent fractions and the four operations with fractions are covered in the Cambridge Stage 7 'Fractions' unit (the topic spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The mixed number 2 1/3 as an improper fraction is:", options: ["6/3", "7/3", "5/3", "2/3"], answer: 1, explanation: "2 × 3 + 1 = 7, over 3: 7/3." },
            { type: "mcq", difficulty: "medium", q: "The improper fraction 11/4 as a mixed number is:", options: ["2 3/4", "3 1/4", "2 1/4", "1 3/4"], answer: 0, explanation: "11 ÷ 4 = 2 remainder 3, so 2 3/4." },
            { type: "tf", difficulty: "easy", q: "An improper fraction has a numerator larger than its denominator.", answer: true, explanation: "For example 7/3 — the top (7) is bigger than the bottom (3)." },
            { type: "mcq", difficulty: "easy", q: "Which of these is an improper fraction?", options: ["3/5", "2/7", "9/4", "1/2"], answer: 2, explanation: "9/4 has numerator 9 > denominator 4, so it is improper." },
            { type: "numeric", difficulty: "medium", q: "Convert 3 1/2 to an improper fraction. Give the numerator.", answer: "7", explanation: "3 × 2 + 1 = 7, over 2: 7/2." },
            { type: "mcq", difficulty: "medium", q: "Convert 1 3/5 to an improper fraction.", options: ["4/5", "8/5", "3/5", "6/5"], answer: 1, explanation: "1 × 5 + 3 = 8, over 5: 8/5." },
            { type: "numeric", difficulty: "medium", q: "Convert 13/3 to a mixed number. Give the whole number part.", answer: "4", explanation: "13 ÷ 3 = 4 remainder 1, so 4 1/3. Whole part = 4." },
            { type: "mcq", difficulty: "medium", q: "15/4 as a mixed number is:", options: ["4 1/4", "3 3/4", "3 1/4", "4 3/4"], answer: 1, explanation: "15 ÷ 4 = 3 remainder 3, so 3 3/4." },
            { type: "numeric", difficulty: "medium", q: "Convert 4 2/3 to an improper fraction. Give the numerator.", answer: "14", explanation: "4 × 3 + 2 = 14, over 3: 14/3." },
            { type: "tf", difficulty: "medium", q: "The mixed number 3 1/4 equals the improper fraction 13/4.", answer: true, explanation: "3 × 4 + 1 = 13, over 4: 13/4." },
            { type: "mcq", difficulty: "hard", q: "Convert 5 3/8 to an improper fraction.", options: ["40/8", "43/8", "38/8", "53/8"], answer: 1, explanation: "5 × 8 + 3 = 43, over 8: 43/8." },
            { type: "short", difficulty: "hard", q: "Explain the steps to convert a mixed number to an improper fraction, using 2 3/7 as an example.", answer: "Multiply the whole number by the denominator: 2 × 7 = 14. Add the numerator: 14 + 3 = 17. Write over the denominator: 17/7.", explanation: "Method: (whole × denominator + numerator) / denominator." }
          ]
        },
        {
          text: "Multiply and divide fractions.",
          resources: [
            { type: "interactive", title: "Multiplying & Dividing Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions_multiplication.html", note: "Multiply tops/bottoms; divide by the reciprocal." },
            { type: "interactive", title: "Multiplying & dividing fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", note: "Worked examples and practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Fractions (Stage 7)", note: "Equivalent fractions and the four operations with fractions are covered in the Cambridge Stage 7 'Fractions' unit (the topic spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "1/2 × 3/5 = ?", options: ["3/10", "4/7", "3/5", "1/10"], answer: 0, explanation: "Multiply tops (1×3=3) and bottoms (2×5=10): 3/10." },
            { type: "mcq", difficulty: "medium", q: "1/2 ÷ 1/4 = ?", options: ["1/8", "2", "1/2", "8"], answer: 1, explanation: "Divide by multiplying by the reciprocal: 1/2 × 4/1 = 2." },
            { type: "tf", difficulty: "easy", q: "To multiply fractions you multiply the numerators and the denominators separately.", answer: true, explanation: "a/b × c/d = (a×c)/(b×d)." },
            { type: "mcq", difficulty: "easy", q: "2/3 × 3/4 = ?", options: ["5/7", "6/7", "1/2", "2/4"], answer: 2, explanation: "2 × 3 = 6 and 3 × 4 = 12. 6/12 = 1/2." },
            { type: "numeric", difficulty: "easy", q: "Work out 4/5 × 5/8. Give the numerator of the simplified answer.", answer: "1", explanation: "4 × 5 = 20 and 5 × 8 = 40. 20/40 = 1/2. Numerator = 1." },
            { type: "mcq", difficulty: "medium", q: "What is the reciprocal of 3/4?", options: ["3/4", "4/3", "1/4", "3"], answer: 1, explanation: "Flip the fraction: the reciprocal of 3/4 is 4/3." },
            { type: "mcq", difficulty: "medium", q: "3/4 ÷ 3/8 = ?", options: ["1/2", "9/32", "2", "6/8"], answer: 2, explanation: "3/4 × 8/3 = 24/12 = 2." },
            { type: "numeric", difficulty: "medium", q: "Work out 5/6 ÷ 5/12. Give your answer as a whole number.", answer: "2", explanation: "5/6 × 12/5 = 60/30 = 2." },
            { type: "tf", difficulty: "medium", q: "To divide a fraction by another fraction, you flip the second fraction and multiply.", answer: true, explanation: "That is the 'invert and multiply' (KCF: Keep, Change, Flip) rule." },
            { type: "mcq", difficulty: "medium", q: "1/3 × 9 = ?", options: ["3", "9/3", "1/27", "3/9"], answer: 0, explanation: "1/3 × 9 = 9/3 = 3." },
            { type: "numeric", difficulty: "hard", q: "Work out 2/3 ÷ 4. Give the answer as a decimal.", answer: "0.1666666667", explanation: "2/3 ÷ 4 = 2/3 × 1/4 = 2/12 = 1/6 ≈ 0.1667." },
            { type: "mcq", difficulty: "hard", q: "3/5 ÷ 6/7 = ?", options: ["18/35", "7/10", "21/30", "3/7"], answer: 1, explanation: "3/5 × 7/6 = 21/30 = 7/10." }
          ]
        },
        {
          text: "Find a fraction of a quantity.",
          resources: [
            { type: "interactive", title: "Fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/fractions.html", note: "Finding a fraction of an amount." },
            { type: "interactive", title: "Fractions of numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Fractions (Stage 7)", note: "Equivalent fractions and the four operations with fractions are covered in the Cambridge Stage 7 'Fractions' unit (the topic spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "What is 3/4 of 20?", answer: "15", explanation: "20 ÷ 4 = 5, then × 3 = 15." },
            { type: "numeric", difficulty: "medium", q: "What is 2/5 of 35?", answer: "14", explanation: "35 ÷ 5 = 7, then × 2 = 14." },
            { type: "numeric", difficulty: "easy", q: "What is 1/2 of 18?", answer: "9", explanation: "18 ÷ 2 = 9." },
            { type: "numeric", difficulty: "easy", q: "What is 1/4 of 24?", answer: "6", explanation: "24 ÷ 4 = 6." },
            { type: "mcq", difficulty: "easy", q: "What is 1/3 of 30?", options: ["3", "9", "10", "15"], answer: 2, explanation: "30 ÷ 3 = 10." },
            { type: "numeric", difficulty: "easy", q: "What is 3/5 of 25?", answer: "15", explanation: "25 ÷ 5 = 5, then × 3 = 15." },
            { type: "numeric", difficulty: "medium", q: "What is 5/8 of 40?", answer: "25", explanation: "40 ÷ 8 = 5, then × 5 = 25." },
            { type: "mcq", difficulty: "medium", q: "What is 2/3 of 60?", options: ["20", "40", "30", "45"], answer: 1, explanation: "60 ÷ 3 = 20, then × 2 = 40." },
            { type: "numeric", difficulty: "medium", q: "What is 7/10 of 90?", answer: "63", explanation: "90 ÷ 10 = 9, then × 7 = 63." },
            { type: "tf", difficulty: "medium", q: "3/4 of 48 is 36.", answer: true, explanation: "48 ÷ 4 = 12, and 12 × 3 = 36." },
            { type: "numeric", difficulty: "hard", q: "What is 5/6 of 54?", answer: "45", explanation: "54 ÷ 6 = 9, then × 5 = 45." },
            { type: "short", difficulty: "hard", q: "A bag has 72 marbles. 5/9 are red. How many are red, and show your working.", answer: "72 ÷ 9 = 8, then 8 × 5 = 40 marbles are red.", explanation: "To find a fraction of an amount: divide by the denominator, then multiply by the numerator." }
          ]
        },
        {
          text: "Solve mixed-operation word problems involving fractions.",
          resources: [
            { type: "interactive", title: "Fraction word problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Apply fractions to real situations." },
            { type: "interactive", title: "Khan Academy: Fraction arithmetic", provider: "Khan Academy", url: "https://www.khanacademy.org/math/arithmetic/fraction-arithmetic", note: "Apply fractions to word problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Fractions (Stage 7)", note: "Equivalent fractions and the four operations with fractions are covered in the Cambridge Stage 7 'Fractions' unit (the topic spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A jug holds 3/4 litre. You pour out 1/4 litre. How many litres remain? (decimal)", answer: "0.5", explanation: "3/4 − 1/4 = 2/4 = 1/2 = 0.5 litre." },
            { type: "short", difficulty: "hard", q: "A recipe needs 2/3 cup of sugar. You make half the recipe. How much sugar do you need, and how did you work it out?", answer: "Half of 2/3 means 1/2 × 2/3 = 2/6 = 1/3 cup. You multiply the amount by 1/2 (halving), then simplify.", explanation: "'Half of' a fraction = multiply by 1/2." },
            { type: "numeric", difficulty: "easy", q: "A pizza is cut into 8 equal slices. You eat 3 slices. What fraction do you eat? (give the numerator)", answer: "3", explanation: "3 out of 8 slices = 3/8." },
            { type: "mcq", difficulty: "easy", q: "You have 1/2 a bar of chocolate and eat 1/4 of the bar. How much is left?", options: ["1/4", "3/4", "1/2", "1/8"], answer: 0, explanation: "1/2 − 1/4 = 2/4 − 1/4 = 1/4." },
            { type: "numeric", difficulty: "medium", q: "A bottle holds 3/5 litre. You add another 1/5 litre. How many litres are in the bottle?", answer: "0.8", explanation: "3/5 + 1/5 = 4/5 = 0.8 litre." },
            { type: "mcq", difficulty: "medium", q: "A class has 30 pupils. 2/5 are absent. How many are absent?", options: ["6", "10", "12", "15"], answer: 2, explanation: "30 ÷ 5 = 6, then × 2 = 12." },
            { type: "numeric", difficulty: "medium", q: "Tom had 24 stickers and gave away 1/3. How many does he have left?", answer: "16", explanation: "1/3 of 24 = 8. 24 − 8 = 16." },
            { type: "numeric", difficulty: "medium", q: "A route is 3/4 km long. You walk 1/2 km. How many km remain? (decimal)", answer: "0.25", explanation: "3/4 − 1/2 = 3/4 − 2/4 = 1/4 = 0.25 km." },
            { type: "mcq", difficulty: "hard", q: "A tank is 2/3 full with 120 litres. How many litres does the full tank hold?", options: ["80", "180", "160", "240"], answer: 1, explanation: "2/3 = 120 L, so 1/3 = 60 L, and full = 3/3 = 180 L." },
            { type: "numeric", difficulty: "hard", q: "Sarah reads 3/8 of a book on Monday and 1/4 on Tuesday. What fraction has she read in total? (give the numerator when denominator is 8)", answer: "5", explanation: "1/4 = 2/8. So 3/8 + 2/8 = 5/8." },
            { type: "short", difficulty: "hard", q: "A bag of flour weighs 2/3 kg. You use 1/4 of it. How much flour do you use and how much is left?", answer: "1/4 of 2/3 = 1/4 × 2/3 = 2/12 = 1/6 kg used. Left: 2/3 − 1/6 = 4/6 − 1/6 = 3/6 = 1/2 kg.", explanation: "First multiply to find the amount used, then subtract." },
            { type: "numeric", difficulty: "medium", q: "A film lasts 2 hours. You have watched 3/4 of it. How many minutes are left?", answer: "30", explanation: "3/4 watched means 1/4 left. 2 hours = 120 min; 1/4 of 120 = 30 minutes." }
          ]
        },
        {
          text: "Apply BODMAS (order of operations) to calculations with fractions.",
          resources: [
            { type: "interactive", title: "Order of Operations (BODMAS)", provider: "Math is Fun", url: "https://www.mathsisfun.com/operation-order-bodmas.html", note: "The order to do operations in." },
            { type: "interactive", title: "Order of operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice with brackets and operations." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Fractions (Stage 7)", note: "Equivalent fractions and the four operations with fractions are covered in the Cambridge Stage 7 'Fractions' unit (the topic spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Work out 1/2 + 1/4 × 2 using order of operations.", options: ["1 1/2", "1", "3/8", "1/4"], answer: 1, explanation: "Multiply first: 1/4 × 2 = 1/2. Then 1/2 + 1/2 = 1." },
            { type: "numeric", difficulty: "medium", q: "Using BODMAS, work out (1/2 + 1/2) × 3.", answer: "3", explanation: "Brackets first: 1/2 + 1/2 = 1. Then 1 × 3 = 3." },
            { type: "tf", difficulty: "easy", q: "BODMAS stands for Brackets, Order, Division, Multiplication, Addition, Subtraction.", answer: true, explanation: "That is exactly what the letters stand for." },
            { type: "mcq", difficulty: "easy", q: "In BODMAS, which operation do you always do first?", options: ["Addition", "Division", "Brackets", "Multiplication"], answer: 2, explanation: "B is first — always work out what is inside brackets first." },
            { type: "mcq", difficulty: "medium", q: "Work out 3/4 − (1/4 × 2).", options: ["1/4", "5/4", "1/2", "3/8"], answer: 0, explanation: "Brackets first: 1/4 × 2 = 2/4 = 1/2. Then 3/4 − 1/2 = 3/4 − 2/4 = 1/4." },
            { type: "numeric", difficulty: "medium", q: "Work out (3/5 − 1/5) × 5. Give a whole number.", answer: "2", explanation: "Brackets: 3/5 − 1/5 = 2/5. Then 2/5 × 5 = 2." },
            { type: "mcq", difficulty: "medium", q: "What is 2 × 1/3 + 1/6?", options: ["1/6", "5/6", "1/2", "1"], answer: 1, explanation: "Multiply first: 2 × 1/3 = 2/3 = 4/6. Then 4/6 + 1/6 = 5/6." },
            { type: "numeric", difficulty: "medium", q: "Work out 1/2 × (4 − 2). Give a whole number.", answer: "1", explanation: "Brackets: 4 − 2 = 2. Then 1/2 × 2 = 1." },
            { type: "tf", difficulty: "medium", q: "In the expression 5/6 − 1/3 + 1/6, you should work left to right after finding the same denominator.", answer: true, explanation: "When only addition and subtraction remain, work left to right." },
            { type: "mcq", difficulty: "hard", q: "Work out (1/2 + 1/3) × (3/4 − 1/4).", options: ["5/12", "1/2", "5/6", "1/4"], answer: 0, explanation: "First bracket: 3/6 + 2/6 = 5/6. Second bracket: 2/4 = 1/2. Product: 5/6 × 1/2 = 5/12." },
            { type: "numeric", difficulty: "hard", q: "Work out 1/2 + 1/4 × (2 − 1/2). Express as a decimal.", answer: "0.875", explanation: "Brackets: 2 − 1/2 = 3/2. Multiply: 1/4 × 3/2 = 3/8. Add: 1/2 + 3/8 = 4/8 + 3/8 = 7/8 = 0.875." },
            { type: "short", difficulty: "hard", q: "Why does BODMAS (order of operations) matter? Give an example with fractions where doing operations out of order gives a wrong answer.", answer: "Without BODMAS, 1/2 + 1/4 × 2 might be done as (1/2 + 1/4) × 2 = 3/4 × 2 = 3/2, which is wrong. BODMAS says multiply first: 1/4 × 2 = 1/2, then 1/2 + 1/2 = 1.", explanation: "Consistent rules ensure everyone gets the same answer for the same expression." }
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
            { type: "interactive", title: "Intro to ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Ratio language and notation." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 7)", note: "Ratio and proportion are covered in the Cambridge Stage 7 'Ratio and proportion' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A class has 3 boys and 5 girls. The ratio of boys to girls is:", options: ["5:3", "3:5", "3:8", "8:3"], answer: 1, explanation: "Boys first, then girls: 3:5." },
            { type: "tf", difficulty: "easy", q: "The ratio 2:3 is the same as the ratio 3:2.", answer: false, explanation: "Order matters in a ratio, so 2:3 ≠ 3:2." },
            { type: "tf", difficulty: "easy", q: "A ratio compares two or more quantities.", answer: true, explanation: "A ratio shows the relative size of two or more values." },
            { type: "mcq", difficulty: "easy", q: "A bag contains 4 apples and 6 oranges. The ratio of apples to oranges is:", options: ["6:4", "4:6", "4:10", "1:6"], answer: 1, explanation: "Apples to oranges: 4:6." },
            { type: "mcq", difficulty: "easy", q: "Which correctly describes the ratio 5:2?", options: ["2 for every 5", "5 for every 2", "5 plus 2", "5 minus 2"], answer: 1, explanation: "5:2 means 5 of the first thing for every 2 of the second." },
            { type: "numeric", difficulty: "easy", q: "A recipe uses 2 cups of flour and 1 cup of sugar. The ratio of flour to sugar has a first number of:", answer: "2", explanation: "Flour:sugar = 2:1, so the first number is 2." },
            { type: "tf", difficulty: "medium", q: "In the ratio 7:3, the total number of parts is 10.", answer: true, explanation: "7 + 3 = 10 parts in total." },
            { type: "mcq", difficulty: "medium", q: "A garden has roses to tulips in the ratio 3:7. What does this mean?", options: ["There are 10 flowers total", "For every 3 roses there are 7 tulips", "There are 4 more tulips than roses", "There are 3 tulips for every 7 roses"], answer: 1, explanation: "A ratio of 3:7 means 3 roses for every 7 tulips." },
            { type: "mcq", difficulty: "medium", q: "There are 6 cats and 9 dogs. What is the ratio of cats to dogs?", options: ["9:6", "6:9", "6:15", "3:2"], answer: 1, explanation: "Cats:dogs = 6:9 (or simplified 2:3)." },
            { type: "tf", difficulty: "medium", q: "Ratio language is only useful in mathematics, not in everyday life.", answer: false, explanation: "Ratios appear in cooking, maps, mixing paint, mixing medicine, and many everyday contexts." },
            { type: "short", difficulty: "hard", q: "In a fruit bowl the ratio of oranges to apples to bananas is 2:3:1. There are 6 bananas. How many fruits are there in total?", answer: "1 part = 6. Total parts = 2 + 3 + 1 = 6. Total fruits = 6 × 6 = 36.", explanation: "Find one unit by dividing the known quantity by its ratio part, then multiply the total parts." },
            { type: "numeric", difficulty: "hard", q: "A class has 24 students. The ratio of boys to girls is 3:5. How many boys are there?", answer: "9", explanation: "Total parts = 8. One part = 24 ÷ 8 = 3. Boys = 3 × 3 = 9." }
          ]
        },
        {
          text: "Express a ratio as a fraction of the whole.",
          resources: [
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Linking ratios and fractions." },
            { type: "interactive", title: "Ratios as fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Part-to-whole from a ratio." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 7)", note: "Ratio and proportion are covered in the Cambridge Stage 7 'Ratio and proportion' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "In the ratio 2:5, the first quantity is what fraction of the total?", options: ["2/5", "2/7", "5/7", "1/2"], answer: 1, explanation: "Total parts = 2 + 5 = 7, so the first part is 2/7." },
            { type: "numeric", difficulty: "medium", q: "In the ratio 3:1, the first part is what fraction of the whole? Give your answer as a decimal.", answer: "0.75", explanation: "Total = 4 parts; first part = 3/4 = 0.75." },
            { type: "tf", difficulty: "easy", q: "In the ratio 1:3, the first quantity is 1/4 of the whole.", answer: true, explanation: "Total = 1 + 3 = 4 parts; first = 1/4." },
            { type: "mcq", difficulty: "easy", q: "In the ratio 1:1, each part is what fraction of the whole?", options: ["1/3", "1/2", "1/4", "2/3"], answer: 1, explanation: "Total = 2 parts; each is 1/2." },
            { type: "numeric", difficulty: "medium", q: "In the ratio 4:1, the second part is what fraction of the whole? Give as a decimal.", answer: "0.2", explanation: "Total = 5 parts; second = 1/5 = 0.2." },
            { type: "mcq", difficulty: "medium", q: "In a ratio 3:2, what fraction of the whole is the second quantity?", options: ["3/5", "2/5", "2/3", "3/2"], answer: 1, explanation: "Total = 5 parts; second = 2/5." },
            { type: "numeric", difficulty: "medium", q: "In the ratio 5:3, what fraction is the larger part? Give the numerator (denominator is 8).", answer: "5", explanation: "Total = 8 parts; larger = 5/8." },
            { type: "mcq", difficulty: "medium", q: "There are 12 boys and 8 girls. What fraction of the class are boys?", options: ["12/8", "12/20", "8/20", "4/5"], answer: 1, explanation: "Total = 20. Boys = 12/20 = 3/5." },
            { type: "tf", difficulty: "medium", q: "If the ratio is 2:3, then the first part is less than half the total.", answer: true, explanation: "First part = 2/5 = 40%, which is less than 50%." },
            { type: "numeric", difficulty: "hard", q: "In a ratio 7:3, what percentage of the whole is the smaller part?", answer: "30", explanation: "Total = 10 parts; smaller = 3/10 = 30%." },
            { type: "mcq", difficulty: "hard", q: "In a 3-part ratio 2:3:5, what fraction of the whole is the middle part?", options: ["3/10", "3/5", "1/3", "1/2"], answer: 0, explanation: "Total = 10 parts; middle = 3/10." },
            { type: "short", difficulty: "hard", q: "A smoothie is made from mango, banana and strawberry in the ratio 4:2:1. What fraction of the smoothie is mango? Show your working.", answer: "Total parts = 4 + 2 + 1 = 7. Mango fraction = 4/7.", explanation: "Add all ratio parts for the total, then the fraction is the individual part over the total." }
          ]
        },
        {
          text: "Explain the difference between a ratio and a fraction.",
          resources: [
            { type: "interactive", title: "Khan Academy: Ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Part-to-part versus part-to-whole." },
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "How ratios relate to fractions." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 7)", note: "Ratio and proportion are covered in the Cambridge Stage 7 'Ratio and proportion' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "A ratio compares two quantities (part to part), while a fraction compares a part to the whole.", answer: true, explanation: "That is the key difference between them." },
            { type: "mcq", difficulty: "medium", q: "If apples to oranges = 2:3, the fraction of the fruit that are apples is:", options: ["2/3", "2/5", "3/5", "2/1"], answer: 1, explanation: "Total = 5; apples = 2/5 of the whole." },
            { type: "tf", difficulty: "easy", q: "A fraction is always a part-to-whole comparison.", answer: true, explanation: "A fraction such as 3/5 means 3 parts out of a total of 5." },
            { type: "mcq", difficulty: "easy", q: "In the ratio 4:6 (dogs to cats), the fraction that are dogs is:", options: ["4/6", "4/10", "6/10", "1/4"], answer: 1, explanation: "Total = 10. Dogs = 4/10." },
            { type: "tf", difficulty: "medium", q: "The ratio 3:5 and the fraction 3/5 represent the same thing.", answer: false, explanation: "3:5 is part to part; 3/5 is part to whole (3 out of 8)." },
            { type: "mcq", difficulty: "medium", q: "A ratio 1:4 tells us:", options: ["1 is 1/4 of the whole", "for every 1 of A there are 4 of B", "A is bigger than B", "the total is 4"], answer: 1, explanation: "A ratio describes the relationship between two parts." },
            { type: "numeric", difficulty: "medium", q: "In a ratio 3:7, what fraction of the whole are the 3 parts? Give the numerator (denominator 10).", answer: "3", explanation: "Total = 10; first part = 3/10." },
            { type: "mcq", difficulty: "medium", q: "Which statement is TRUE?", options: ["A ratio 2:5 means 2/5 of the whole", "A fraction 2/5 means 2 parts for every 5 parts", "The ratio 2:3 gives a fraction 2/5 of the whole", "Ratios and fractions are the same thing"], answer: 2, explanation: "Ratio 2:3 has total 5 parts, so the first is 2/5 of the whole." },
            { type: "tf", difficulty: "medium", q: "From the ratio 1:3, you can work out that the first quantity is 25% of the total.", answer: true, explanation: "1/(1+3) = 1/4 = 25%." },
            { type: "short", difficulty: "hard", q: "A bag has red and blue beads in the ratio 3:2. Write the fraction of beads that are red, and explain the difference between the ratio and the fraction.", answer: "Fraction red = 3/5 (3 out of total 5 parts). The ratio 3:2 compares red to blue (part to part); the fraction 3/5 compares red to the whole bag (part to whole).", explanation: "Ratio is part:part; fraction is part:whole." },
            { type: "numeric", difficulty: "hard", q: "In a ratio 9:6 (boys to girls), what fraction of the class are girls? Give the numerator (denominator 5).", answer: "2", explanation: "Simplify 9:6 to 3:2. Total = 5 parts; girls = 2/5. Numerator = 2." },
            { type: "mcq", difficulty: "hard", q: "A mixture of red, green and blue paint is in the ratio 4:3:1. What fraction is NOT red?", options: ["1/2", "5/8", "3/8", "1/4"], answer: 0, explanation: "Total = 8 parts; red = 4/8 = 1/2. So NOT red = 1 − 1/2 = 1/2." }
          ]
        },
        {
          text: "Simplify two-part and three-part ratios.",
          resources: [
            { type: "interactive", title: "Simplifying ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Divide by the common factor." },
            { type: "interactive", title: "Khan Academy: Simplifying ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice simplifying ratios." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 7)", note: "Ratio and proportion are covered in the Cambridge Stage 7 'Ratio and proportion' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Simplify the ratio 6:9.", options: ["2:3", "3:2", "6:9", "1:2"], answer: 0, explanation: "Divide both by 3: 6:9 = 2:3." },
            { type: "numeric", difficulty: "medium", q: "Simplify 4:8 to the form 1:n. What is n?", answer: "2", explanation: "Divide both by 4: 4:8 = 1:2, so n = 2." },
            { type: "tf", difficulty: "easy", q: "To simplify a ratio you divide both parts by their highest common factor.", answer: true, explanation: "Dividing by the HCF gives the simplest form." },
            { type: "mcq", difficulty: "easy", q: "Simplify 10:15.", options: ["5:6", "2:3", "1:3", "10:15"], answer: 1, explanation: "HCF = 5. 10 ÷ 5 = 2 and 15 ÷ 5 = 3. Result: 2:3." },
            { type: "mcq", difficulty: "easy", q: "Simplify 8:12.", options: ["4:6", "2:3", "1:2", "3:4"], answer: 1, explanation: "HCF = 4. 8 ÷ 4 = 2 and 12 ÷ 4 = 3. Result: 2:3." },
            { type: "numeric", difficulty: "medium", q: "Simplify 15:25 to the form 3:n. What is n?", answer: "5", explanation: "HCF = 5. 15 ÷ 5 = 3 and 25 ÷ 5 = 5. Result: 3:5, so n = 5." },
            { type: "mcq", difficulty: "medium", q: "Simplify 3-part ratio 6:9:12.", options: ["2:3:4", "3:4:5", "6:9:12", "1:2:3"], answer: 0, explanation: "HCF = 3. 6:9:12 ÷ 3 = 2:3:4." },
            { type: "tf", difficulty: "medium", q: "The ratio 5:20 simplifies to 1:4.", answer: true, explanation: "HCF = 5. 5 ÷ 5 = 1 and 20 ÷ 5 = 4." },
            { type: "numeric", difficulty: "medium", q: "Simplify 18:24. Give the first number of the simplified ratio.", answer: "3", explanation: "HCF = 6. 18 ÷ 6 = 3 and 24 ÷ 6 = 4. Result: 3:4." },
            { type: "mcq", difficulty: "hard", q: "Simplify 3-part ratio 12:8:16.", options: ["6:4:8", "3:2:4", "4:3:5", "2:1:2"], answer: 1, explanation: "HCF = 4. 12:8:16 ÷ 4 = 3:2:4." },
            { type: "numeric", difficulty: "hard", q: "Simplify 45:30 to the form n:2. What is n?", answer: "3", explanation: "HCF = 15. 45 ÷ 15 = 3 and 30 ÷ 15 = 2. Result: 3:2, so n = 3." },
            { type: "short", difficulty: "hard", q: "Simplify the ratio 24:36:60 and explain your method.", answer: "HCF of 24, 36 and 60 is 12. Divide each by 12: 2:3:5.", explanation: "Find the HCF of all parts, then divide every part by it." }
          ]
        },
        {
          text: "Find and use equivalent ratios.",
          resources: [
            { type: "interactive", title: "Equivalent ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Scaling ratios up and down." },
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Equivalent ratios by multiplying." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 7)", note: "Ratio and proportion are covered in the Cambridge Stage 7 'Ratio and proportion' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which ratio is equivalent to 2:3?", options: ["4:9", "6:9", "4:5", "3:2"], answer: 1, explanation: "Multiply both by 3: 2:3 = 6:9." },
            { type: "numeric", difficulty: "medium", q: "Complete the equivalent ratio 3:4 = 9:?", answer: "12", explanation: "3 × 3 = 9, so 4 × 3 = 12." },
            { type: "tf", difficulty: "easy", q: "To find an equivalent ratio you can multiply or divide both parts by the same number.", answer: true, explanation: "Equivalent ratios are made by scaling up or down by the same factor." },
            { type: "mcq", difficulty: "easy", q: "Which ratio is equivalent to 1:2?", options: ["2:6", "3:6", "3:4", "4:6"], answer: 1, explanation: "Multiply both by 3: 1:2 = 3:6." },
            { type: "numeric", difficulty: "easy", q: "Complete 4:5 = 8:?", answer: "10", explanation: "Multiply both by 2: 4:5 = 8:10." },
            { type: "mcq", difficulty: "medium", q: "Which ratio is NOT equivalent to 2:5?", options: ["4:10", "6:15", "8:20", "6:12"], answer: 3, explanation: "6:12 = 1:2, which is not the same as 2:5." },
            { type: "numeric", difficulty: "medium", q: "Complete 5:8 = ?:40", answer: "25", explanation: "8 × 5 = 40, so 5 × 5 = 25." },
            { type: "numeric", difficulty: "medium", q: "Complete 6:10 = 3:?", answer: "5", explanation: "Divide both by 2: 6:10 = 3:5." },
            { type: "tf", difficulty: "medium", q: "The ratios 4:6 and 6:9 are equivalent.", answer: true, explanation: "4:6 = 2:3 and 6:9 = 2:3, so they are equivalent." },
            { type: "mcq", difficulty: "hard", q: "Which two ratios are equivalent?", options: ["3:4 and 6:10", "5:8 and 10:16", "2:7 and 4:21", "1:3 and 4:9"], answer: 1, explanation: "5:8 × 2 = 10:16, so they are equivalent." },
            { type: "numeric", difficulty: "hard", q: "A map scale is 1:50000. A road measures 4 cm on the map. How many cm long is the actual road?", answer: "200000", explanation: "Equivalent ratio: 4 × 50000 = 200000 cm." },
            { type: "short", difficulty: "hard", q: "Explain what it means for two ratios to be equivalent and give an example.", answer: "Two ratios are equivalent if they represent the same relationship — you can get one from the other by multiplying or dividing both parts by the same number. Example: 2:3 and 8:12 are equivalent because 2 × 4 = 8 and 3 × 4 = 12.", explanation: "Equivalent ratios are like equivalent fractions — same proportion, different numbers." }
          ]
        },
        {
          text: "Find quantities from a given ratio and total.",
          resources: [
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Dividing a total in a given ratio." },
            { type: "interactive", title: "Khan Academy: Sharing in a ratio", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Worked examples of sharing in a ratio." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 7)", note: "Ratio and proportion are covered in the Cambridge Stage 7 'Ratio and proportion' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Share £20 in the ratio 2:3. How many £ is the larger share?", answer: "12", explanation: "5 parts → £20 ÷ 5 = £4 each. Larger = 3 × £4 = £12." },
            { type: "numeric", difficulty: "medium", q: "Divide 30 sweets between A and B in the ratio 1:5. How many does B get?", answer: "25", explanation: "6 parts → 30 ÷ 6 = 5 each. B = 5 × 5 = 25." },
            { type: "tf", difficulty: "easy", q: "To share 24 in the ratio 1:2, the smaller share is 8.", answer: true, explanation: "Total parts = 3. One part = 24 ÷ 3 = 8. Smaller = 1 × 8 = 8." },
            { type: "mcq", difficulty: "easy", q: "Share 10 in the ratio 1:4. What is the smaller share?", options: ["2", "4", "5", "8"], answer: 0, explanation: "Total parts = 5. One part = 10 ÷ 5 = 2. Smaller = 1 × 2 = 2." },
            { type: "numeric", difficulty: "medium", q: "Share 45 in the ratio 4:5. What is the larger share?", answer: "25", explanation: "Total parts = 9. One part = 45 ÷ 9 = 5. Larger = 5 × 5 = 25." },
            { type: "mcq", difficulty: "medium", q: "Divide 60 into the ratio 3:2. What is the larger share?", options: ["24", "36", "30", "40"], answer: 1, explanation: "Total parts = 5. One part = 12. Larger = 3 × 12 = 36." },
            { type: "numeric", difficulty: "medium", q: "Share 56 in the ratio 3:4:1. What is the smallest share?", answer: "7", explanation: "Total parts = 8. One part = 7. Smallest = 1 × 7 = 7." },
            { type: "numeric", difficulty: "medium", q: "Share £50 in the ratio 2:3. How many £ is the smaller share?", answer: "20", explanation: "Total parts = 5. One part = £10. Smaller = 2 × £10 = £20." },
            { type: "mcq", difficulty: "hard", q: "£72 is shared in the ratio 5:3. How much more does the larger share get?", options: ["£18", "£45", "£27", "£9"], answer: 0, explanation: "Total parts = 8. One part = £9. Larger = £45, smaller = £27. Difference = £18." },
            { type: "numeric", difficulty: "hard", q: "A sum of money is shared in the ratio 3:5. The smaller share is £27. What is the total?", answer: "72", explanation: "3 parts = £27, so 1 part = £9. Total = 8 parts = £72." },
            { type: "short", difficulty: "hard", q: "Describe the steps to share 90 in the ratio 4:1:5, and find each share.", answer: "Total parts = 10. One part = 90 ÷ 10 = 9. First = 4 × 9 = 36; second = 1 × 9 = 9; third = 5 × 9 = 45.", explanation: "Add ratio parts for total, find one unit, then multiply each ratio part." },
            { type: "numeric", difficulty: "hard", q: "Share 120 in the ratio 1:2:3. What is the largest share?", answer: "60", explanation: "Total parts = 6. One part = 20. Largest = 3 × 20 = 60." }
          ]
        },
        {
          text: "Find one quantity when another is given in a ratio.",
          resources: [
            { type: "interactive", title: "Using ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Scale to find a missing quantity." },
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Finding a missing part." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 7)", note: "Ratio and proportion are covered in the Cambridge Stage 7 'Ratio and proportion' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "In the ratio red:blue = 2:3, there are 8 red. How many blue?", answer: "12", explanation: "2 → 8 means scale × 4, so blue = 3 × 4 = 12." },
            { type: "numeric", difficulty: "medium", q: "A recipe uses flour:sugar = 5:2. With 250 g flour, how many grams of sugar?", answer: "100", explanation: "5 → 250 means scale × 50, so sugar = 2 × 50 = 100 g." },
            { type: "numeric", difficulty: "easy", q: "In the ratio cats:dogs = 1:3, there are 4 cats. How many dogs?", answer: "12", explanation: "Scale × 4: dogs = 3 × 4 = 12." },
            { type: "mcq", difficulty: "easy", q: "In the ratio 2:5, if the first quantity is 6, what is the second?", options: ["10", "12", "15", "9"], answer: 2, explanation: "Scale × 3: second = 5 × 3 = 15." },
            { type: "numeric", difficulty: "medium", q: "Pens and pencils are in the ratio 3:4. There are 9 pens. How many pencils?", answer: "12", explanation: "Scale × 3: pencils = 4 × 3 = 12." },
            { type: "numeric", difficulty: "medium", q: "A:B = 7:2. If B = 10, what is A?", answer: "35", explanation: "Scale × 5: A = 7 × 5 = 35." },
            { type: "mcq", difficulty: "medium", q: "Juice:water = 1:4. If there are 20 ml of water, how many ml of juice?", options: ["4", "5", "8", "80"], answer: 1, explanation: "Scale × 5: juice = 1 × 5 = 5 ml." },
            { type: "numeric", difficulty: "medium", q: "A:B:C = 3:1:2. B = 5. What is C?", answer: "10", explanation: "Scale × 5: C = 2 × 5 = 10." },
            { type: "numeric", difficulty: "hard", q: "Cement:sand = 2:5. If you use 35 kg of sand, how many kg of cement?", answer: "14", explanation: "Scale × 7: cement = 2 × 7 = 14 kg." },
            { type: "mcq", difficulty: "hard", q: "P:Q = 3:8. If Q = 40, what is the total P + Q?", options: ["55", "65", "45", "15"], answer: 0, explanation: "Scale × 5: P = 15, Q = 40. Total = 55." },
            { type: "short", difficulty: "hard", q: "In a ratio 5:3, the larger quantity is 35. Find the smaller quantity and show your method.", answer: "5 parts = 35, so 1 part = 7. Smaller = 3 × 7 = 21.", explanation: "Identify which ratio number matches the known value, find the unit, then scale." },
            { type: "numeric", difficulty: "hard", q: "X:Y = 4:9. Y = 63. What is X?", answer: "28", explanation: "Scale × 7: X = 4 × 7 = 28." }
          ]
        },
        {
          text: "Relate ratios to percentages.",
          resources: [
            { type: "interactive", title: "Percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Turning a ratio into a percentage." },
            { type: "interactive", title: "Khan Academy: Ratios & percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Turning a ratio into a percentage." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 7)", note: "Ratio and proportion are covered in the Cambridge Stage 7 'Ratio and proportion' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "In a mixture of juice to water of 1:4, juice is what percentage of the whole?", options: ["25%", "20%", "10%", "40%"], answer: 1, explanation: "Total = 5 parts; juice = 1/5 = 20%." },
            { type: "numeric", difficulty: "easy", q: "If boys:girls = 1:1, what percentage are boys? (number only)", answer: "50", explanation: "Equal parts means half, which is 50%." },
            { type: "tf", difficulty: "easy", q: "If the ratio is 3:1, the first quantity is 75% of the whole.", answer: true, explanation: "Total = 4 parts; first = 3/4 = 75%." },
            { type: "mcq", difficulty: "easy", q: "In the ratio 1:3, the first part is what percentage of the whole?", options: ["33%", "25%", "50%", "75%"], answer: 1, explanation: "Total = 4 parts; first = 1/4 = 25%." },
            { type: "numeric", difficulty: "medium", q: "In a ratio 2:3, what percentage is the larger part? (number only)", answer: "60", explanation: "Total = 5 parts; larger = 3/5 = 60%." },
            { type: "mcq", difficulty: "medium", q: "Cement:sand = 1:4. What percentage of the mixture is sand?", options: ["20%", "40%", "80%", "25%"], answer: 2, explanation: "Total = 5 parts; sand = 4/5 = 80%." },
            { type: "numeric", difficulty: "medium", q: "In a 2:3:5 ratio, what percentage is the smallest part? (number only)", answer: "20", explanation: "Total = 10 parts; smallest = 2/10 = 20%." },
            { type: "tf", difficulty: "medium", q: "A ratio of 3:7 means the first quantity is 30% of the total.", answer: true, explanation: "3/(3+7) = 3/10 = 30%." },
            { type: "mcq", difficulty: "medium", q: "A bag has red and blue sweets in the ratio 3:2. What percentage are blue?", options: ["60%", "40%", "33%", "50%"], answer: 1, explanation: "Total = 5 parts; blue = 2/5 = 40%." },
            { type: "numeric", difficulty: "hard", q: "In a ratio 7:3, what percentage is the smaller part? (number only)", answer: "30", explanation: "Total = 10 parts; smaller = 3/10 = 30%." },
            { type: "short", difficulty: "hard", q: "Explain how to convert a two-part ratio to percentages. Use the ratio 3:5 as your example.", answer: "Total parts = 3 + 5 = 8. First part as percentage = 3/8 × 100 = 37.5%. Second part = 5/8 × 100 = 62.5%.", explanation: "Divide each part by the total parts, then multiply by 100." },
            { type: "numeric", difficulty: "hard", q: "In a ratio 4:1, what percentage of the whole is the smaller part? (number only)", answer: "20", explanation: "Total = 5 parts; smaller = 1/5 = 20%." }
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
            { type: "interactive", title: "Decimal explorer study bot", provider: "📚 School's Library · ChatGPT", url: "https://chatgpt.com/g/g-677cdc98011081919446ff3a69d7af27-decimal-explorer", note: "Your class's tutor bot for exploring decimals and place value. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Decimals", provider: "Math is Fun", url: "https://www.mathsisfun.com/decimals.html", note: "Place value of tenths, hundredths, thousandths." },
            { type: "interactive", title: "Decimal place value", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Reading and writing decimals." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Place value, ordering, rounding and decimals (Stage 7)", note: "Decimals and place value are covered in the Cambridge Stage 7 'Place value, ordering and rounding' / decimals units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "In 4.27, the digit 7 is in the:", options: ["tenths place", "hundredths place", "ones place", "tens place"], answer: 1, explanation: "After the point: first is tenths, second is hundredths — 7 is hundredths." },
            { type: "numeric", difficulty: "easy", q: "What is the value of the digit 3 in 5.3? Give your answer as a decimal.", answer: "0.3", explanation: "The 3 is in the tenths place, worth 3 tenths = 0.3." },
            { type: "mcq", difficulty: "easy", q: "In 8.54, the digit 5 is in which place?", options: ["ones", "tenths", "hundredths", "thousandths"], answer: 1, explanation: "First digit after the decimal point is in the tenths place." },
            { type: "tf", difficulty: "easy", q: "In the number 3.069, the digit 0 is in the tenths place.", answer: true, explanation: "3.069: 0 = tenths, 6 = hundredths, 9 = thousandths." },
            { type: "numeric", difficulty: "easy", q: "What is the value of the digit 6 in 2.06? Give as a decimal.", answer: "0.06", explanation: "The 6 is in the hundredths place, worth 6 hundredths = 0.06." },
            { type: "mcq", difficulty: "easy", q: "In 7.308, the digit 3 is worth:", options: ["3", "0.03", "0.3", "0.003"], answer: 2, explanation: "7.308: first decimal digit is tenths, so 3 = 0.3." },
            { type: "numeric", difficulty: "medium", q: "Write the value of the digit 4 in 12.045 as a decimal.", answer: "0.04", explanation: "12.045: 0 = tenths, 4 = hundredths = 0.04." },
            { type: "mcq", difficulty: "medium", q: "Which number has a 9 in the thousandths place?", options: ["0.9", "0.09", "0.009", "9.000"], answer: 2, explanation: "0.009 — the 9 is three places after the decimal point (thousandths)." },
            { type: "tf", difficulty: "medium", q: "The digit 2 in 5.002 has a value of two thousandths (0.002).", answer: true, explanation: "Ones place is 5, tenths = 0, hundredths = 0, thousandths = 2 = 0.002." },
            { type: "numeric", difficulty: "medium", q: "How many hundredths are in 0.7?", answer: "70", explanation: "0.7 = 0.70 = 70 hundredths." },
            { type: "mcq", difficulty: "hard", q: "In 45.307, what is the total value of all the decimal digits (i.e. the part less than 1)?", options: ["0.370", "0.307", "3.07", "0.037"], answer: 1, explanation: "The digits after the point are 3, 0, 7, giving 0.307." },
            { type: "short", difficulty: "hard", q: "Write 0.253 in expanded form showing tenths, hundredths and thousandths.", answer: "0.2 + 0.05 + 0.003 (2 tenths + 5 hundredths + 3 thousandths).", explanation: "Expanded form separates each place-value digit." }
          ]
        },
        {
          text: "Compare and order decimals.",
          resources: [
            { type: "interactive", title: "Comparing decimals", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Compare using place value." },
            { type: "interactive", title: "Ordering decimals", provider: "Math is Fun", url: "https://www.mathsisfun.com/ordering_decimals.html", note: "Line up the decimal points." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Place value, ordering, rounding and decimals (Stage 7)", note: "Decimals and place value are covered in the Cambridge Stage 7 'Place value, ordering and rounding' / decimals units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which is the largest?", options: ["0.5", "0.45", "0.405", "0.05"], answer: 0, explanation: "0.5 = 0.500 is bigger than 0.450, 0.405 and 0.050." },
            { type: "tf", difficulty: "easy", q: "0.7 is greater than 0.68.", answer: true, explanation: "0.70 > 0.68." },
            { type: "mcq", difficulty: "easy", q: "Which is the smallest?", options: ["0.3", "0.13", "0.031", "0.301"], answer: 2, explanation: "0.031 = 0.031, which is less than 0.130, 0.300 and 0.301." },
            { type: "tf", difficulty: "easy", q: "0.09 is less than 0.1.", answer: true, explanation: "0.09 < 0.10." },
            { type: "mcq", difficulty: "easy", q: "Put in order from smallest to largest: 0.4, 0.04, 0.44. The largest is:", options: ["0.4", "0.04", "0.44", "they are equal"], answer: 2, explanation: "0.44 > 0.40 > 0.04." },
            { type: "numeric", difficulty: "medium", q: "How many of the following are greater than 0.5? List: 0.48, 0.5, 0.51, 0.499, 0.6", answer: "2", explanation: "Only 0.51 and 0.6 are strictly greater than 0.5." },
            { type: "mcq", difficulty: "medium", q: "Which correctly orders 0.3, 0.25, 0.35 from largest to smallest?", options: ["0.25, 0.3, 0.35", "0.35, 0.3, 0.25", "0.3, 0.35, 0.25", "0.35, 0.25, 0.3"], answer: 1, explanation: "0.35 > 0.30 > 0.25." },
            { type: "tf", difficulty: "medium", q: "0.100 = 0.1", answer: true, explanation: "Trailing zeros after the last significant decimal digit do not change the value." },
            { type: "mcq", difficulty: "medium", q: "Which number is between 0.6 and 0.7?", options: ["0.071", "0.59", "0.65", "0.71"], answer: 2, explanation: "0.65 is between 0.60 and 0.70." },
            { type: "numeric", difficulty: "hard", q: "What is the largest decimal with two decimal places that is less than 1?", answer: "0.99", explanation: "0.99 is the largest two-decimal-place number less than 1." },
            { type: "mcq", difficulty: "hard", q: "Order these from smallest: 0.505, 0.55, 0.5, 0.055. What is the second largest?", options: ["0.505", "0.55", "0.5", "0.055"], answer: 0, explanation: "Order: 0.055 < 0.5 < 0.505 < 0.55. Second largest = 0.505." },
            { type: "short", difficulty: "hard", q: "A friend says 0.15 > 0.2 because 15 > 2. Explain their mistake.", answer: "They compared the digits without considering the decimal point. 0.15 means 15 hundredths and 0.2 means 20 hundredths (or 0.20), so 0.2 > 0.15.", explanation: "When comparing decimals, line up the decimal points and compare place by place." }
          ]
        },
        {
          text: "Convert between decimals and fractions.",
          resources: [
            { type: "interactive", title: "Converting decimals to fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/converting-decimals-fractions.html", note: "Both directions, with examples." },
            { type: "interactive", title: "Decimals & fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice converting." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Place value, ordering, rounding and decimals (Stage 7)", note: "Decimals and place value are covered in the Cambridge Stage 7 'Place value, ordering and rounding' / decimals units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Write 1/4 as a decimal.", answer: "0.25", explanation: "1 ÷ 4 = 0.25." },
            { type: "mcq", difficulty: "medium", q: "0.6 as a fraction in simplest form is:", options: ["6/10", "3/5", "6/100", "1/6"], answer: 1, explanation: "0.6 = 6/10, which simplifies (÷2) to 3/5." },
            { type: "numeric", difficulty: "easy", q: "Write 1/2 as a decimal.", answer: "0.5", explanation: "1 ÷ 2 = 0.5." },
            { type: "numeric", difficulty: "easy", q: "Write 3/4 as a decimal.", answer: "0.75", explanation: "3 ÷ 4 = 0.75." },
            { type: "mcq", difficulty: "easy", q: "0.25 as a fraction in simplest form is:", options: ["25/100", "5/20", "1/4", "1/2"], answer: 2, explanation: "0.25 = 25/100 = 1/4." },
            { type: "numeric", difficulty: "easy", q: "Write 4/5 as a decimal.", answer: "0.8", explanation: "4 ÷ 5 = 0.8." },
            { type: "mcq", difficulty: "medium", q: "0.75 as a fraction in simplest form is:", options: ["75/100", "7/10", "3/4", "7/5"], answer: 2, explanation: "0.75 = 75/100 = 3/4." },
            { type: "numeric", difficulty: "medium", q: "Write 7/20 as a decimal.", answer: "0.35", explanation: "7 ÷ 20 = 0.35." },
            { type: "mcq", difficulty: "medium", q: "0.125 as a fraction in simplest form is:", options: ["125/1000", "1/8", "1/4", "5/40"], answer: 1, explanation: "0.125 = 125/1000 = 1/8." },
            { type: "tf", difficulty: "medium", q: "0.5 and 1/2 represent the same value.", answer: true, explanation: "1/2 = 0.5." },
            { type: "mcq", difficulty: "hard", q: "Which fraction equals 0.375?", options: ["3/8", "3/7", "37/100", "4/10"], answer: 0, explanation: "0.375 = 375/1000 = 3/8." },
            { type: "short", difficulty: "hard", q: "Convert 5/8 to a decimal and show your working.", answer: "5 ÷ 8 = 0.625. Divide 5.000 by 8: 8 × 0.6 = 4.8, remainder 0.2 → 8 × 0.02 = 0.16, remainder 0.04 → 8 × 0.005 = 0.04. Answer: 0.625.", explanation: "Divide the numerator by the denominator using long division." }
          ]
        },
        {
          text: "Add, subtract, multiply and divide decimals.",
          resources: [
            { type: "interactive", title: "Decimal operations study bot", provider: "📚 School's Library · ChatGPT", url: "https://chatgpt.com/g/g-677f7e1049148191a7c1cd39711ea281-decimal-operations", note: "Your class's tutor bot for the four operations with decimals. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Decimal operations", provider: "Math is Fun", url: "https://www.mathsisfun.com/decimals-menu.html", note: "All four operations with decimals." },
            { type: "interactive", title: "Khan Academy: Decimal operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice the four operations with decimals." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Place value, ordering, rounding and decimals (Stage 7)", note: "Decimals and place value are covered in the Cambridge Stage 7 'Place value, ordering and rounding' / decimals units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Work out 0.3 + 0.45.", answer: "0.75", explanation: "Line up the points: 0.30 + 0.45 = 0.75." },
            { type: "numeric", difficulty: "medium", q: "Work out 0.2 × 0.4.", answer: "0.08", explanation: "2 × 4 = 8, with two decimal places: 0.08." },
            { type: "numeric", difficulty: "easy", q: "Work out 1.5 + 2.3.", answer: "3.8", explanation: "1.5 + 2.3 = 3.8." },
            { type: "numeric", difficulty: "easy", q: "Work out 5.7 − 2.4.", answer: "3.3", explanation: "5.7 − 2.4 = 3.3." },
            { type: "mcq", difficulty: "easy", q: "0.6 + 0.4 = ?", options: ["0.10", "1.0", "0.24", "1.4"], answer: 1, explanation: "0.6 + 0.4 = 1.0." },
            { type: "numeric", difficulty: "medium", q: "Work out 3.6 − 1.8.", answer: "1.8", explanation: "3.6 − 1.8 = 1.8." },
            { type: "numeric", difficulty: "medium", q: "Work out 0.5 × 6.", answer: "3", explanation: "0.5 × 6 = 3." },
            { type: "numeric", difficulty: "medium", q: "Work out 4.8 ÷ 4.", answer: "1.2", explanation: "4.8 ÷ 4 = 1.2." },
            { type: "tf", difficulty: "medium", q: "0.3 × 0.3 = 0.9", answer: false, explanation: "3 × 3 = 9 with two decimal places: 0.3 × 0.3 = 0.09." },
            { type: "numeric", difficulty: "medium", q: "Work out 2.5 × 4.", answer: "10", explanation: "2.5 × 4 = 10." },
            { type: "numeric", difficulty: "hard", q: "Work out 6.3 ÷ 0.9.", answer: "7", explanation: "Multiply both by 10: 63 ÷ 9 = 7." },
            { type: "mcq", difficulty: "hard", q: "Work out 1.2 × 0.05.", options: ["0.06", "0.6", "0.006", "6"], answer: 0, explanation: "12 × 5 = 60; count 3 decimal places: 0.060 = 0.06." }
          ]
        },
        {
          text: "Distinguish terminating, non-terminating and recurring decimals.",
          resources: [
            { type: "interactive", title: "Recurring decimals", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/recurring-decimals.html", note: "What recurring decimals are." },
            { type: "interactive", title: "Khan Academy: Fractions to decimals", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Why some fractions terminate and others recur." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Place value, ordering, rounding and decimals (Stage 7)", note: "Decimals and place value are covered in the Cambridge Stage 7 'Place value, ordering and rounding' / decimals units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "1/3 written as a decimal is:", options: ["0.3 exactly", "0.33 (terminating)", "0.333… (recurring)", "3.0"], answer: 2, explanation: "1 ÷ 3 = 0.3333… — the 3 recurs forever." },
            { type: "tf", difficulty: "easy", q: "1/2 = 0.5 is a terminating decimal.", answer: true, explanation: "It stops after one decimal place, so it terminates." },
            { type: "mcq", difficulty: "easy", q: "A terminating decimal:", options: ["goes on forever", "ends after a finite number of digits", "always has a dot over a digit", "is irrational"], answer: 1, explanation: "A terminating decimal has a definite final digit." },
            { type: "tf", difficulty: "easy", q: "0.75 is a terminating decimal.", answer: true, explanation: "0.75 stops after two decimal places — it terminates." },
            { type: "mcq", difficulty: "medium", q: "Which fraction gives a recurring decimal?", options: ["1/4", "1/5", "1/6", "1/8"], answer: 2, explanation: "1/6 = 0.1666… — the 6 recurs." },
            { type: "tf", difficulty: "medium", q: "1/9 = 0.1111… is a recurring decimal.", answer: true, explanation: "1 ÷ 9 gives 0.1 recurring." },
            { type: "mcq", difficulty: "medium", q: "What type of decimal is 0.142857142857…?", options: ["Terminating", "Non-recurring non-terminating", "Recurring", "Integer"], answer: 2, explanation: "The block 142857 repeats — this is the decimal for 1/7." },
            { type: "numeric", difficulty: "medium", q: "2/3 as a decimal rounded to 2 d.p. is 0.67 (give the hundredths digit).", answer: "7", explanation: "2/3 = 0.6666… rounded to 2 d.p. = 0.67; hundredths digit = 7." },
            { type: "tf", difficulty: "medium", q: "All fractions with a denominator of 4 give terminating decimals.", answer: true, explanation: "4 = 2², so denominators that are only powers of 2 and 5 give terminating decimals." },
            { type: "mcq", difficulty: "hard", q: "Which fraction gives a terminating decimal?", options: ["1/3", "1/6", "1/7", "1/8"], answer: 3, explanation: "1/8 = 0.125 — it terminates. The others recur." },
            { type: "short", difficulty: "hard", q: "Explain why 1/4 terminates but 1/3 recurs when written as a decimal.", answer: "1/4 = 0.25 because the denominator 4 = 2², a factor of a power of 10. 1/3 recurs because 3 has no factors of 2 or 5, so it cannot be expressed as a fraction with a power-of-10 denominator.", explanation: "A fraction terminates if and only if its denominator (in lowest terms) has only 2s and 5s as prime factors." },
            { type: "mcq", difficulty: "hard", q: "0.636363… can be written as the fraction:", options: ["63/99", "63/100", "6/10", "7/11"], answer: 3, explanation: "7/11 = 0.636363…. Also 63/99 = 7/11, so option 0 is also correct; the fully simplified form is 7/11." }
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
            { type: "interactive", title: "Decimals & percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice converting." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 7)", note: "Percentages are covered in the Cambridge Stage 7 'Percentages' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Write 0.45 as a percentage. (number only)", answer: "45", explanation: "Multiply by 100: 0.45 × 100 = 45%." },
            { type: "numeric", difficulty: "easy", q: "Write 30% as a decimal.", answer: "0.3", explanation: "Divide by 100: 30 ÷ 100 = 0.3." },
            { type: "numeric", difficulty: "easy", q: "Write 0.7 as a percentage. (number only)", answer: "70", explanation: "0.7 × 100 = 70%." },
            { type: "numeric", difficulty: "easy", q: "Write 85% as a decimal.", answer: "0.85", explanation: "85 ÷ 100 = 0.85." },
            { type: "mcq", difficulty: "easy", q: "0.03 as a percentage is:", options: ["3%", "30%", "0.03%", "300%"], answer: 0, explanation: "0.03 × 100 = 3%." },
            { type: "tf", difficulty: "easy", q: "100% is equal to the decimal 1.", answer: true, explanation: "100 ÷ 100 = 1." },
            { type: "numeric", difficulty: "medium", q: "Write 0.125 as a percentage. (number only)", answer: "12.5", explanation: "0.125 × 100 = 12.5%." },
            { type: "mcq", difficulty: "medium", q: "Which decimal is equal to 7.5%?", options: ["0.75", "0.075", "7.5", "0.0075"], answer: 1, explanation: "7.5 ÷ 100 = 0.075." },
            { type: "tf", difficulty: "medium", q: "0.6 = 60%.", answer: true, explanation: "0.6 × 100 = 60%." },
            { type: "numeric", difficulty: "medium", q: "Write 150% as a decimal.", answer: "1.5", explanation: "150 ÷ 100 = 1.5." },
            { type: "mcq", difficulty: "hard", q: "A price increases to 1.35 times the original. What percentage increase is that?", options: ["135%", "35%", "1.35%", "13.5%"], answer: 1, explanation: "The new value is 135% of the old, meaning a 35% increase." },
            { type: "short", difficulty: "hard", q: "Explain how to convert 0.375 to a percentage, and give the answer.", answer: "Multiply by 100: 0.375 × 100 = 37.5%.", explanation: "To convert a decimal to a percentage, multiply by 100." }
          ]
        },
        {
          text: "Convert between fractions and percentages.",
          resources: [
            { type: "interactive", title: "Fractions, decimals & percentages study bot", provider: "📚 School's Library · ChatGPT", url: "https://chatgpt.com/g/g-6767dd62d82481919fe6c2a40027aa83-fractions-decimals-and-percentages", note: "Your class's tutor bot linking fractions, decimals and percentages. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Fractions to percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/converting-fractions-percents.html", note: "Both directions." },
            { type: "interactive", title: "Khan Academy: Fractions & percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Converting between fractions and percentages." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 7)", note: "Percentages are covered in the Cambridge Stage 7 'Percentages' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Write 1/2 as a percentage. (number only)", answer: "50", explanation: "1/2 = 0.5 = 50%." },
            { type: "mcq", difficulty: "medium", q: "3/4 as a percentage is:", options: ["34%", "75%", "43%", "60%"], answer: 1, explanation: "3 ÷ 4 = 0.75 = 75%." },
            { type: "numeric", difficulty: "easy", q: "Write 1/5 as a percentage. (number only)", answer: "20", explanation: "1/5 = 0.2 = 20%." },
            { type: "numeric", difficulty: "easy", q: "Write 1/4 as a percentage. (number only)", answer: "25", explanation: "1/4 = 0.25 = 25%." },
            { type: "mcq", difficulty: "easy", q: "50% as a fraction in simplest form is:", options: ["50/100", "5/10", "1/2", "2/4"], answer: 2, explanation: "50/100 = 1/2." },
            { type: "mcq", difficulty: "medium", q: "2/5 as a percentage is:", options: ["25%", "40%", "50%", "52%"], answer: 1, explanation: "2 ÷ 5 = 0.4 = 40%." },
            { type: "numeric", difficulty: "medium", q: "Write 3/8 as a percentage. (number only)", answer: "37.5", explanation: "3 ÷ 8 = 0.375 = 37.5%." },
            { type: "mcq", difficulty: "medium", q: "80% as a fraction in simplest form is:", options: ["80/100", "8/10", "4/5", "2/3"], answer: 2, explanation: "80/100 = 4/5." },
            { type: "tf", difficulty: "medium", q: "4/5 = 80%.", answer: true, explanation: "4 ÷ 5 = 0.8 = 80%." },
            { type: "numeric", difficulty: "hard", q: "Write 5/8 as a percentage. (number only)", answer: "62.5", explanation: "5 ÷ 8 = 0.625 = 62.5%." },
            { type: "mcq", difficulty: "hard", q: "Which fraction is equivalent to 66.67% (approximately)?", options: ["2/3", "3/4", "1/3", "2/5"], answer: 0, explanation: "2/3 = 0.6666… ≈ 66.67%." },
            { type: "short", difficulty: "hard", q: "Convert 7/20 to a percentage and show your method.", answer: "7/20 = 7 ÷ 20 = 0.35. Multiply by 100: 0.35 × 100 = 35%.", explanation: "Divide the numerator by the denominator, then multiply by 100." }
          ]
        },
        {
          text: "Find a percentage of a quantity.",
          resources: [
            { type: "interactive", title: "Percentage of an amount", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Find a percentage of a number." },
            { type: "interactive", title: "Percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Finding a percentage of a number." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 7)", note: "Percentages are covered in the Cambridge Stage 7 'Percentages' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "What is 25% of 80?", answer: "20", explanation: "25% = 1/4, and 80 ÷ 4 = 20." },
            { type: "numeric", difficulty: "easy", q: "What is 10% of 250?", answer: "25", explanation: "10% = ÷10, so 250 ÷ 10 = 25." },
            { type: "numeric", difficulty: "easy", q: "What is 50% of 64?", answer: "32", explanation: "50% = 1/2, so 64 ÷ 2 = 32." },
            { type: "numeric", difficulty: "easy", q: "What is 20% of 45?", answer: "9", explanation: "10% = 4.5, so 20% = 9." },
            { type: "mcq", difficulty: "easy", q: "What is 5% of 200?", options: ["1", "5", "10", "25"], answer: 2, explanation: "10% = 20, so 5% = 10." },
            { type: "numeric", difficulty: "medium", q: "What is 35% of 120?", answer: "42", explanation: "10% = 12. 30% = 36. 5% = 6. Total = 42." },
            { type: "mcq", difficulty: "medium", q: "What is 15% of 60?", options: ["6", "9", "12", "15"], answer: 1, explanation: "10% = 6, 5% = 3, total = 9." },
            { type: "numeric", difficulty: "medium", q: "What is 40% of 75?", answer: "30", explanation: "10% = 7.5, so 40% = 30." },
            { type: "tf", difficulty: "medium", q: "25% of 40 is 10.", answer: true, explanation: "40 ÷ 4 = 10." },
            { type: "numeric", difficulty: "hard", q: "What is 65% of 180?", answer: "117", explanation: "10% = 18. 60% = 108. 5% = 9. 65% = 117." },
            { type: "mcq", difficulty: "hard", q: "What is 12.5% of 48?", options: ["4", "6", "8", "12"], answer: 1, explanation: "12.5% = 1/8 of 48 = 6." },
            { type: "short", difficulty: "hard", q: "Explain two different methods to find 30% of 90 and give the answer.", answer: "Method 1: 10% = 9, so 30% = 3 × 9 = 27. Method 2: 0.3 × 90 = 27.", explanation: "You can use the multiplier (0.30) or build up from 10%." }
          ]
        },
        {
          text: "Use percentages in real-life situations.",
          resources: [
            { type: "interactive", title: "Percentage Change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Discounts, tips and real-life percentages." },
            { type: "interactive", title: "Percentage word problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Apply percentages to contexts." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 7)", note: "Percentages are covered in the Cambridge Stage 7 'Percentages' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A £40 jacket has 25% off. How many £ is the discount?", answer: "10", explanation: "25% of 40 = 40 ÷ 4 = £10." },
            { type: "short", difficulty: "medium", q: "A test is out of 50 and you score 40. What percentage is that, and how did you find it?", answer: "40 ÷ 50 = 0.8 = 80%. Divide your score by the total, then multiply by 100.", explanation: "Percentage = (part ÷ whole) × 100." },
            { type: "numeric", difficulty: "easy", q: "A book normally costs £20 and is 10% off. How many £ do you save?", answer: "2", explanation: "10% of £20 = £2." },
            { type: "mcq", difficulty: "easy", q: "A shop offers 50% off a £30 item. What is the sale price in £?", options: ["£25", "£20", "£15", "£10"], answer: 2, explanation: "50% of £30 = £15. Sale price = £15." },
            { type: "numeric", difficulty: "medium", q: "A class of 30 pupils — 24 passed. What percentage passed?", answer: "80", explanation: "24/30 = 0.8 = 80%." },
            { type: "mcq", difficulty: "medium", q: "A shirt costs £60 after a 20% discount. What was the original price?", options: ["£48", "£72", "£75", "£80"], answer: 2, explanation: "Original × 0.8 = 60, so original = 60 ÷ 0.8 = 75." },
            { type: "numeric", difficulty: "medium", q: "In a bag of 40 marbles 16 are green. What percentage are green?", answer: "40", explanation: "16/40 = 0.4 = 40%." },
            { type: "tf", difficulty: "medium", q: "A 20% discount on £50 gives a saving of £10.", answer: true, explanation: "20% of £50 = £10." },
            { type: "numeric", difficulty: "hard", q: "A TV costs £480. It is reduced by 15%. What is the new price in £?", answer: "408", explanation: "15% of 480 = 72. New price = 480 − 72 = £408." },
            { type: "mcq", difficulty: "hard", q: "A population of 800 increases by 25%. What is the new population?", options: ["200", "825", "1000", "1800"], answer: 2, explanation: "25% of 800 = 200. New population = 800 + 200 = 1000." },
            { type: "numeric", difficulty: "hard", q: "18 out of 24 students in a class are girls. What percentage are girls?", answer: "75", explanation: "18/24 = 0.75 = 75%." },
            { type: "short", difficulty: "hard", q: "A phone is advertised at 30% off. It originally cost £120. How much do you pay, and show your steps.", answer: "30% of £120 = £36. Sale price = £120 − £36 = £84.", explanation: "Find the discount amount, then subtract from the original." }
          ]
        },
        {
          text: "Apply basic percentage ideas, including increases.",
          resources: [
            { type: "interactive", title: "Cent-percent study bot", provider: "📚 School's Library · ChatGPT", url: "https://chatgpt.com/g/g-6799cb7e19f48191b31c60ba00c127bd-cent-percent", note: "Your class's tutor bot for working with percentages. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Percentage change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Increases and decreases." },
            { type: "interactive", title: "Percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Percentage applications." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 7)", note: "Percentages are covered in the Cambridge Stage 7 'Percentages' unit (spirals across Stages 7–9).", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, decimals, percentages & averages)", note: "Enrichment read (great for ages 11–13): fractions, decimals, percentages and averages, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "What percentage is 15 out of 60? (number only)", answer: "25", explanation: "15 ÷ 60 = 0.25 = 25%." },
            { type: "mcq", difficulty: "medium", q: "Increasing 100 by 20% gives:", options: ["80", "120", "20", "102"], answer: 1, explanation: "20% of 100 = 20, and 100 + 20 = 120." },
            { type: "numeric", difficulty: "easy", q: "What percentage is 8 out of 16? (number only)", answer: "50", explanation: "8/16 = 0.5 = 50%." },
            { type: "mcq", difficulty: "easy", q: "A jar has 5 red and 15 blue sweets. What percentage are red?", options: ["5%", "15%", "25%", "75%"], answer: 2, explanation: "Total = 20. Red = 5/20 = 25%." },
            { type: "numeric", difficulty: "medium", q: "What percentage is 12 out of 48? (number only)", answer: "25", explanation: "12/48 = 0.25 = 25%." },
            { type: "mcq", difficulty: "medium", q: "A value of 200 is decreased by 10%. What is the new value?", options: ["190", "180", "220", "210"], answer: 1, explanation: "10% of 200 = 20. 200 − 20 = 180." },
            { type: "tf", difficulty: "medium", q: "Increasing 50 by 50% gives 75.", answer: true, explanation: "50% of 50 = 25. 50 + 25 = 75." },
            { type: "numeric", difficulty: "medium", q: "What percentage is 9 out of 36? (number only)", answer: "25", explanation: "9/36 = 0.25 = 25%." },
            { type: "mcq", difficulty: "hard", q: "A plant is 40 cm tall. It grows 25%. What is its new height in cm?", options: ["10", "50", "65", "45"], answer: 1, explanation: "25% of 40 = 10. New height = 50 cm." },
            { type: "numeric", difficulty: "hard", q: "What percentage is 45 out of 180? (number only)", answer: "25", explanation: "45/180 = 0.25 = 25%." },
            { type: "short", difficulty: "hard", q: "Explain what a percentage increase of 40% means, and find the result when you apply it to 75.", answer: "A 40% increase means the value grows by 40% of itself. 40% of 75 = 30. New value = 75 + 30 = 105.", explanation: "Percentage increase: new = original + (% × original)." },
            { type: "numeric", difficulty: "hard", q: "A salary of £25000 increases by 8%. What is the new salary in £?", answer: "27000", explanation: "8% of 25000 = 2000. New salary = 25000 + 2000 = 27000." }
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
            { type: "interactive", title: "Negative numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "The number line and ordering." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers (Stage 7)", note: "Negative numbers and the four operations with integers are covered in the Cambridge Stage 7 'Integers' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "On a number line, which value is furthest to the left?", options: ["−3", "0", "2", "−1"], answer: 0, explanation: "The smallest value, −3, is furthest left." },
            { type: "tf", difficulty: "easy", q: "−5 is less than −2.", answer: true, explanation: "On the number line −5 is to the left of −2, so it is smaller." },
            { type: "tf", difficulty: "easy", q: "Positive numbers are to the right of zero on a number line.", answer: true, explanation: "Numbers increase from left to right." },
            { type: "mcq", difficulty: "easy", q: "Which number is closest to zero on a number line?", options: ["−8", "5", "−2", "3"], answer: 2, explanation: "−2 is only 2 units from zero, which is the smallest distance." },
            { type: "numeric", difficulty: "easy", q: "What number is 4 steps to the right of −1?", answer: "3", explanation: "−1 + 4 = 3." },
            { type: "mcq", difficulty: "easy", q: "Which list is in order from smallest to largest?", options: ["−1, −3, 0, 2", "−3, −1, 0, 2", "0, −1, −3, 2", "2, 0, −1, −3"], answer: 1, explanation: "−3 < −1 < 0 < 2." },
            { type: "numeric", difficulty: "medium", q: "What is the distance between −4 and 3 on a number line?", answer: "7", explanation: "Distance = 3 − (−4) = 7." },
            { type: "mcq", difficulty: "medium", q: "Which is greater, −10 or −3?", options: ["−10", "−3", "They are equal", "Cannot tell"], answer: 1, explanation: "−3 is closer to zero and to the right of −10, so −3 > −10." },
            { type: "tf", difficulty: "medium", q: "−100 is less than −1.", answer: true, explanation: "More negative means further left, which is smaller." },
            { type: "numeric", difficulty: "medium", q: "What number is halfway between −4 and 2 on a number line?", answer: "-1", explanation: "Midpoint = (−4 + 2) ÷ 2 = −2 ÷ 2 = −1." },
            { type: "mcq", difficulty: "hard", q: "Order from smallest to largest: −7, 3, −3, 0, −10.", options: ["−3, −7, −10, 0, 3", "−10, −7, −3, 0, 3", "3, 0, −3, −7, −10", "−10, −3, −7, 0, 3"], answer: 1, explanation: "On the number line: −10 < −7 < −3 < 0 < 3." },
            { type: "short", difficulty: "hard", q: "The temperature at midnight is −8°C and at noon is 5°C. How much did it rise, and show it on a number line sketch.", answer: "Rise = 5 − (−8) = 5 + 8 = 13°C. On the number line, start at −8 and count 13 steps right to reach 5.", explanation: "To find the rise, subtract the lower temperature from the higher." }
          ]
        },
        {
          text: "Classify numbers as natural, whole, integer or rational.",
          resources: [
            { type: "podcast", title: "The Trouble With Zero – Short Wave", provider: "📚 School's Library · Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/the-trouble-with-zero/id1482575855?i=1000681901180", note: "The strange story of zero — a number it took humans centuries to accept." },
            { type: "interactive", title: "Types of numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/number-types.html", note: "Natural, whole, integer, rational and more." },
            { type: "interactive", title: "Classifying numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Number sets explained." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers (Stage 7)", note: "Negative numbers and the four operations with integers are covered in the Cambridge Stage 7 'Integers' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which set does −3 belong to, but 0.5 does not?", options: ["Rational numbers", "Integers", "Real numbers", "Decimals"], answer: 1, explanation: "−3 is an integer; 0.5 is rational but not an integer." },
            { type: "tf", difficulty: "easy", q: "Every whole number is also an integer.", answer: true, explanation: "Integers include all whole numbers plus their negatives." },
            { type: "mcq", difficulty: "easy", q: "Which of these is a natural number?", options: ["−5", "0.5", "7", "−1"], answer: 2, explanation: "Natural numbers are positive counting numbers: 1, 2, 3…" },
            { type: "tf", difficulty: "easy", q: "0 is an integer.", answer: true, explanation: "Zero is included in the set of integers." },
            { type: "mcq", difficulty: "medium", q: "Which number is rational but NOT an integer?", options: ["−4", "0", "3/2", "7"], answer: 2, explanation: "3/2 = 1.5 is rational (a fraction) but is not a whole number/integer." },
            { type: "tf", difficulty: "medium", q: "Every integer is also a rational number.", answer: true, explanation: "Any integer n can be written as n/1, which is rational." },
            { type: "mcq", difficulty: "medium", q: "Which is an example of a number that is an integer but NOT a natural number?", options: ["5", "0", "−4", "1/2"], answer: 2, explanation: "Negative integers like −4 are integers but not natural numbers." },
            { type: "mcq", difficulty: "medium", q: "Natural numbers are:", options: ["all integers", "positive whole numbers from 1 upward", "all whole numbers including 0", "fractions and decimals"], answer: 1, explanation: "Natural numbers are {1, 2, 3, 4, …}" },
            { type: "tf", difficulty: "medium", q: "−7 is a rational number.", answer: true, explanation: "−7 = −7/1, which is a ratio of two integers, so it is rational." },
            { type: "mcq", difficulty: "hard", q: "Which statement is correct?", options: ["All integers are natural", "All rationals are integers", "All naturals are integers", "All integers are rationals but not all rationals are integers"], answer: 3, explanation: "Integers ⊂ Rationals but Rationals ⊄ Integers." },
            { type: "short", difficulty: "hard", q: "Place −3, 0, 2.5, 4, −1/2 in the correct number sets (natural, whole, integer, rational).", answer: "Rational: all five. Integer: −3, 0, 4. Whole: 0, 4. Natural: 4 only.", explanation: "Natural ⊂ Whole ⊂ Integer ⊂ Rational." },
            { type: "tf", difficulty: "hard", q: "0 is a whole number but not a natural number.", answer: true, explanation: "Whole numbers are {0, 1, 2, …} while natural numbers are {1, 2, 3, …} — 0 is excluded." }
          ]
        },
        {
          text: "Add, subtract, multiply and divide integers.",
          resources: [
            { type: "interactive", title: "Integer operations", provider: "Math is Fun", url: "https://www.mathsisfun.com/positive-negative-integers.html", note: "Rules for signs." },
            { type: "interactive", title: "Khan Academy: Integer operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Adding, subtracting and multiplying integers." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers (Stage 7)", note: "Negative numbers and the four operations with integers are covered in the Cambridge Stage 7 'Integers' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Work out −4 + 7.", answer: "3", explanation: "Start at −4 and move 7 right: −4 + 7 = 3." },
            { type: "numeric", difficulty: "medium", q: "Work out −3 × −5.", answer: "15", explanation: "Negative × negative = positive: 3 × 5 = 15." },
            { type: "numeric", difficulty: "easy", q: "Work out −6 + 10.", answer: "4", explanation: "−6 + 10 = 4." },
            { type: "numeric", difficulty: "easy", q: "Work out 5 − 9.", answer: "-4", explanation: "5 − 9 = −4." },
            { type: "mcq", difficulty: "easy", q: "−8 + 3 = ?", options: ["−11", "−5", "5", "11"], answer: 1, explanation: "−8 + 3 = −5." },
            { type: "numeric", difficulty: "medium", q: "Work out −2 − 5.", answer: "-7", explanation: "−2 − 5 = −7." },
            { type: "mcq", difficulty: "medium", q: "4 × (−3) = ?", options: ["12", "−12", "−7", "7"], answer: 1, explanation: "Positive × negative = negative: 4 × 3 = 12, so 4 × (−3) = −12." },
            { type: "numeric", difficulty: "medium", q: "Work out −20 ÷ 4.", answer: "-5", explanation: "20 ÷ 4 = 5; negative ÷ positive = negative: −5." },
            { type: "tf", difficulty: "medium", q: "Negative × negative = positive.", answer: true, explanation: "The product of two negatives is always positive." },
            { type: "mcq", difficulty: "medium", q: "−12 ÷ (−3) = ?", options: ["−4", "4", "−36", "36"], answer: 1, explanation: "Negative ÷ negative = positive: 12 ÷ 3 = 4." },
            { type: "numeric", difficulty: "hard", q: "Work out −7 × 6.", answer: "-42", explanation: "7 × 6 = 42; negative × positive = negative: −42." },
            { type: "short", difficulty: "hard", q: "Explain the sign rules for multiplying integers. Give one example of each possible combination.", answer: "Positive × positive = positive (e.g. 3 × 4 = 12). Positive × negative = negative (e.g. 3 × −4 = −12). Negative × positive = negative (e.g. −3 × 4 = −12). Negative × negative = positive (e.g. −3 × −4 = 12).", explanation: "The rule is: same signs give +, different signs give −." }
          ]
        },
        {
          text: "Apply BODMAS to calculations with integers.",
          resources: [
            { type: "interactive", title: "Order of Operations (BODMAS)", provider: "Math is Fun", url: "https://www.mathsisfun.com/operation-order-bodmas.html", note: "The correct order for mixed operations." },
            { type: "interactive", title: "Order of operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice with negatives." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers (Stage 7)", note: "Negative numbers and the four operations with integers are covered in the Cambridge Stage 7 'Integers' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Work out −2 + 3 × 4.", answer: "10", explanation: "Multiply first: 3 × 4 = 12, then −2 + 12 = 10." },
            { type: "numeric", difficulty: "medium", q: "Work out (−6 ÷ 2) + 5.", answer: "2", explanation: "Brackets first: −6 ÷ 2 = −3, then −3 + 5 = 2." },
            { type: "mcq", difficulty: "easy", q: "In BODMAS, what comes first?", options: ["Multiplication", "Brackets", "Addition", "Division"], answer: 1, explanation: "B = Brackets — always first." },
            { type: "numeric", difficulty: "medium", q: "Work out 3 × (−4) + 10.", answer: "-2", explanation: "Multiply first: 3 × (−4) = −12. Then −12 + 10 = −2." },
            { type: "mcq", difficulty: "medium", q: "Work out 5 − 2 × 3.", options: ["9", "−1", "1", "−9"], answer: 1, explanation: "Multiply first: 2 × 3 = 6. Then 5 − 6 = −1." },
            { type: "numeric", difficulty: "medium", q: "Work out (5 − 8) × 4.", answer: "-12", explanation: "Brackets: 5 − 8 = −3. Then −3 × 4 = −12." },
            { type: "tf", difficulty: "medium", q: "In 10 ÷ (−2) + 3, you should do the division before the addition.", answer: true, explanation: "Even inside an implicit bracket (the divisor), the ÷ has higher priority than +." },
            { type: "numeric", difficulty: "medium", q: "Work out −4 × (3 − 5).", answer: "8", explanation: "Brackets: 3 − 5 = −2. Then −4 × −2 = 8." },
            { type: "mcq", difficulty: "hard", q: "Work out −3² + 5. (Treat −3² as −(3²))", options: ["4", "−4", "14", "−14"], answer: 1, explanation: "Order (exponent) next: 3² = 9; −9 + 5 = −4." },
            { type: "numeric", difficulty: "hard", q: "Work out 2 × (−3)² − 10.", answer: "8", explanation: "Exponent: (−3)² = 9. Multiply: 2 × 9 = 18. Subtract: 18 − 10 = 8." },
            { type: "mcq", difficulty: "hard", q: "Work out (−2 + 5) × (3 − 7).", options: ["−12", "12", "−1", "1"], answer: 0, explanation: "First bracket: −2 + 5 = 3. Second: 3 − 7 = −4. Product: 3 × (−4) = −12." },
            { type: "short", difficulty: "hard", q: "Work out −10 ÷ 2 + 3 × (−2) and show each step.", answer: "Step 1: brackets — none. Step 2: division: −10 ÷ 2 = −5. Step 3: multiplication: 3 × (−2) = −6. Step 4: addition: −5 + (−6) = −11.", explanation: "Follow BODMAS: division and multiplication before addition." }
          ]
        },
        {
          text: "Use integers to solve real-life problems.",
          resources: [
            { type: "interactive", title: "Integers", provider: "Math is Fun", url: "https://www.mathsisfun.com/positive-negative-integers.html", note: "Temperature, depth and money with negatives." },
            { type: "interactive", title: "Integers in context", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Word problems with negatives." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers (Stage 7)", note: "Negative numbers and the four operations with integers are covered in the Cambridge Stage 7 'Integers' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "The temperature is −3°C and rises by 8°C. What is the new temperature in °C?", answer: "5", explanation: "−3 + 8 = 5°C." },
            { type: "short", difficulty: "medium", q: "A diver is at −12 m (12 m below sea level) and rises 5 m. Where is the diver now, and how did you work it out?", answer: "−12 + 5 = −7 m, i.e. 7 m below sea level. Rising adds a positive number.", explanation: "Add a positive for going up; the result is still negative (below sea level)." },
            { type: "numeric", difficulty: "easy", q: "A bank account has −£5 (overdrawn). £20 is deposited. What is the new balance in £?", answer: "15", explanation: "−5 + 20 = 15." },
            { type: "mcq", difficulty: "easy", q: "The temperature drops from 3°C to −4°C. How many degrees did it drop?", options: ["1", "7", "3", "4"], answer: 1, explanation: "3 − (−4) = 3 + 4 = 7 degrees." },
            { type: "numeric", difficulty: "medium", q: "A submarine is at −50 m. It descends 30 more metres. What is its new depth in m?", answer: "-80", explanation: "−50 − 30 = −80 m." },
            { type: "mcq", difficulty: "medium", q: "At midnight the temperature is −6°C. By 3 pm it is 8°C. What is the rise?", options: ["2°C", "14°C", "−2°C", "48°C"], answer: 1, explanation: "8 − (−6) = 14°C rise." },
            { type: "numeric", difficulty: "medium", q: "A business loses £200 per week. After 3 weeks, how much has it lost? (Give as a negative number)", answer: "-600", explanation: "−200 × 3 = −600." },
            { type: "tf", difficulty: "medium", q: "A floor number of −2 in a building means 2 floors below ground.", answer: true, explanation: "Negative floor numbers are used in buildings for underground floors." },
            { type: "mcq", difficulty: "hard", q: "The temperature at 6 am is −9°C. It rises 3°C every hour. What is the temperature at 10 am?", options: ["3°C", "−1°C", "1°C", "−3°C"], answer: 0, explanation: "4 hours × 3°C = 12°C rise. −9 + 12 = 3°C." },
            { type: "numeric", difficulty: "hard", q: "A scientist records temperatures: −15, −8, 2, −3. What is the range (max minus min)?", answer: "17", explanation: "Max = 2, min = −15. Range = 2 − (−15) = 17." },
            { type: "short", difficulty: "hard", q: "A lift starts on floor −2, goes up 5 floors, then down 3 floors. What floor does it end on?", answer: "−2 + 5 = 3. Then 3 − 3 = 0. The lift ends on floor 0 (ground floor).", explanation: "Apply integer operations step by step." },
            { type: "numeric", difficulty: "hard", q: "The dead sea is about −430 m. Mount Everest is 8849 m. What is the difference in height?", answer: "9279", explanation: "8849 − (−430) = 8849 + 430 = 9279 m." }
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
            { type: "interactive", title: "Divisibility", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice the rules." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Factors, multiples and primes (Stage 7)", note: "Factors, multiples, primes, HCF and LCM are covered in the Cambridge Stage 7 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 1 'The Curious Incident of the Never-Ending Primes'", note: "Enrichment read (accessible stretch): the mystery of prime numbers, factors and multiples.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which number is divisible by 3?", options: ["14", "22", "27", "20"], answer: 2, explanation: "2 + 7 = 9, which is divisible by 3, so 27 is too." },
            { type: "tf", difficulty: "easy", q: "A number is divisible by 5 if it ends in 0 or 5.", answer: true, explanation: "That is the divisibility rule for 5." },
            { type: "tf", difficulty: "easy", q: "A number is divisible by 2 if it ends in an even digit.", answer: true, explanation: "Even numbers end in 0, 2, 4, 6 or 8." },
            { type: "mcq", difficulty: "easy", q: "Which number is divisible by 4?", options: ["22", "30", "36", "46"], answer: 2, explanation: "Last two digits of 36 = 36, and 36 ÷ 4 = 9, so 36 is divisible by 4." },
            { type: "mcq", difficulty: "easy", q: "Is 135 divisible by 9?", options: ["Yes", "No", "Only if you round", "Cannot tell"], answer: 0, explanation: "1 + 3 + 5 = 9, which is divisible by 9, so 135 is too." },
            { type: "tf", difficulty: "medium", q: "Every number divisible by 6 must be divisible by both 2 and 3.", answer: true, explanation: "Divisibility rule for 6: the number must be divisible by both 2 and 3." },
            { type: "mcq", difficulty: "medium", q: "Is 84 divisible by 7?", options: ["Yes", "No", "Only if divided by 2 first", "Cannot tell"], answer: 0, explanation: "84 ÷ 7 = 12 exactly, so yes." },
            { type: "numeric", difficulty: "medium", q: "How many of the following are divisible by 4? List: 12, 18, 20, 26, 36", answer: "3", explanation: "12 ÷ 4 = 3 ✓, 18 ÷ 4 = 4.5 ✗, 20 ÷ 4 = 5 ✓, 26 ÷ 4 = 6.5 ✗, 36 ÷ 4 = 9 ✓. Count = 3." },
            { type: "mcq", difficulty: "medium", q: "Which number is divisible by both 3 and 4?", options: ["14", "16", "24", "26"], answer: 2, explanation: "24: 2+4=6 (div by 3) ✓ and 24 ÷ 4 = 6 ✓." },
            { type: "tf", difficulty: "medium", q: "486 is divisible by 9.", answer: true, explanation: "4 + 8 + 6 = 18, which is divisible by 9." },
            { type: "mcq", difficulty: "hard", q: "Which number is divisible by 2, 3 and 5?", options: ["45", "60", "25", "36"], answer: 1, explanation: "60: even ✓, 6+0=6 (div by 3) ✓, ends in 0 (div by 5) ✓." },
            { type: "short", difficulty: "hard", q: "State the divisibility rules for 3, 6 and 9, and test the number 324.", answer: "Rule for 3: digit sum divisible by 3. Rule for 6: divisible by 2 AND 3. Rule for 9: digit sum divisible by 9. 324: 3+2+4=9 → div by 3 ✓ and 9 ✓; 324 is even → div by 6 ✓.", explanation: "Apply each rule step by step." }
          ]
        },
        {
          text: "Identify prime numbers from 1 to 100.",
          resources: [
            { type: "interactive", title: "Prime Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/prime-numbers.html", note: "What makes a number prime." },
            { type: "interactive", title: "Prime numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Identify primes." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Factors, multiples and primes (Stage 7)", note: "Factors, multiples, primes, HCF and LCM are covered in the Cambridge Stage 7 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 1 'The Curious Incident of the Never-Ending Primes'", note: "Enrichment read (accessible stretch): the mystery of prime numbers, factors and multiples.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which of these is a prime number?", options: ["21", "29", "27", "33"], answer: 1, explanation: "29 has only two factors, 1 and itself; the others are composite." },
            { type: "tf", difficulty: "medium", q: "1 is a prime number.", answer: false, explanation: "A prime has exactly two factors; 1 has only one factor, so it is not prime." },
            { type: "tf", difficulty: "easy", q: "2 is a prime number.", answer: true, explanation: "2 has exactly two factors (1 and 2) — it is the only even prime." },
            { type: "mcq", difficulty: "easy", q: "How many prime numbers are there between 1 and 10?", options: ["2", "3", "4", "5"], answer: 2, explanation: "The primes are 2, 3, 5, 7 — four of them." },
            { type: "mcq", difficulty: "easy", q: "Which of these is NOT a prime?", options: ["11", "13", "15", "17"], answer: 2, explanation: "15 = 3 × 5, so it has more than two factors." },
            { type: "tf", difficulty: "medium", q: "All prime numbers (except 2) are odd.", answer: true, explanation: "Even numbers > 2 are divisible by 2, so they cannot be prime." },
            { type: "numeric", difficulty: "medium", q: "What is the largest prime less than 30?", answer: "29", explanation: "29 has no factors other than 1 and itself." },
            { type: "mcq", difficulty: "medium", q: "How many prime numbers are between 20 and 30?", options: ["1", "2", "3", "4"], answer: 1, explanation: "23 and 29 are both prime — 2 primes." },
            { type: "tf", difficulty: "medium", q: "97 is a prime number.", answer: true, explanation: "97 is not divisible by 2, 3, 5, 7 (the primes up to its square root ≈ 9.8), so it is prime." },
            { type: "mcq", difficulty: "hard", q: "Which of these is prime?", options: ["51", "57", "61", "63"], answer: 2, explanation: "61 is prime. 51 = 3×17, 57 = 3×19, 63 = 9×7." },
            { type: "short", difficulty: "hard", q: "Explain what makes a number prime and list all primes between 40 and 60.", answer: "A prime has exactly two distinct factors: 1 and itself. Primes 40–60: 41, 43, 47, 53, 59.", explanation: "Check each odd number by testing divisibility by small primes." },
            { type: "numeric", difficulty: "hard", q: "What is the sum of the first four prime numbers?", answer: "17", explanation: "2 + 3 + 5 + 7 = 17." }
          ]
        },
        {
          text: "Write a number as a product of its prime factors.",
          resources: [
            { type: "interactive", title: "Prime Factorization", provider: "Math is Fun", url: "https://www.mathsisfun.com/prime-factorization.html", note: "Factor trees and prime products." },
            { type: "interactive", title: "Khan Academy: Prime factorisation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Writing a number as a product of primes." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Factors, multiples and primes (Stage 7)", note: "Factors, multiples, primes, HCF and LCM are covered in the Cambridge Stage 7 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 1 'The Curious Incident of the Never-Ending Primes'", note: "Enrichment read (accessible stretch): the mystery of prime numbers, factors and multiples.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The prime factorisation of 12 is:", options: ["2 × 6", "2² × 3", "3 × 4", "2 × 3 × 3"], answer: 1, explanation: "12 = 2 × 2 × 3 = 2² × 3." },
            { type: "numeric", difficulty: "medium", q: "Write 18 in the form 2 × 3^n. What is n?", answer: "2", explanation: "18 = 2 × 9 = 2 × 3², so n = 2." },
            { type: "tf", difficulty: "easy", q: "A product of prime factors uses only prime numbers.", answer: true, explanation: "That is the definition — every factor in the product must be prime." },
            { type: "mcq", difficulty: "easy", q: "Which is the prime factorisation of 8?", options: ["2 × 4", "2³", "4 × 2", "8¹"], answer: 1, explanation: "8 = 2 × 2 × 2 = 2³." },
            { type: "mcq", difficulty: "medium", q: "The prime factorisation of 20 is:", options: ["4 × 5", "2² × 5", "2 × 10", "2 × 5²"], answer: 1, explanation: "20 = 2 × 2 × 5 = 2² × 5." },
            { type: "numeric", difficulty: "medium", q: "Write 36 as a product of primes in the form 2² × 3^n. What is n?", answer: "2", explanation: "36 = 4 × 9 = 2² × 3²." },
            { type: "mcq", difficulty: "medium", q: "The prime factorisation of 45 is:", options: ["9 × 5", "3² × 5", "3 × 15", "5 × 9"], answer: 1, explanation: "45 = 3 × 3 × 5 = 3² × 5." },
            { type: "numeric", difficulty: "medium", q: "Write 50 as a product of primes. What prime appears twice (give it as a number)?", answer: "5", explanation: "50 = 2 × 25 = 2 × 5²." },
            { type: "tf", difficulty: "medium", q: "The prime factorisation of 24 is 2³ × 3.", answer: true, explanation: "24 = 8 × 3 = 2³ × 3." },
            { type: "mcq", difficulty: "hard", q: "The prime factorisation of 84 is:", options: ["2 × 42", "2² × 3 × 7", "4 × 21", "2 × 3 × 7²"], answer: 1, explanation: "84 = 4 × 21 = 2² × 3 × 7." },
            { type: "short", difficulty: "hard", q: "Use a factor tree to find the prime factorisation of 72.", answer: "72 = 8 × 9 = 2³ × 3².", explanation: "72 → 8 × 9 → (2 × 2 × 2) × (3 × 3) = 2³ × 3²." },
            { type: "numeric", difficulty: "hard", q: "How many prime factors does 60 have when written as a product (count with repetition, e.g. 2² × 3 has 3 prime factors)?", answer: "4", explanation: "60 = 2² × 3 × 5 = 2 × 2 × 3 × 5 — four prime factors." }
          ]
        },
        {
          text: "Find factors and multiples of a number.",
          resources: [
            { type: "interactive", title: "Factors and Multiples", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/factors-multiples.html", note: "The difference and how to list them." },
            { type: "interactive", title: "Factors & multiples", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Factors, multiples and primes (Stage 7)", note: "Factors, multiples, primes, HCF and LCM are covered in the Cambridge Stage 7 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 1 'The Curious Incident of the Never-Ending Primes'", note: "Enrichment read (accessible stretch): the mystery of prime numbers, factors and multiples.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which of these is a factor of 24?", options: ["5", "7", "8", "9"], answer: 2, explanation: "24 ÷ 8 = 3 with no remainder, so 8 is a factor." },
            { type: "numeric", difficulty: "easy", q: "What is the 4th multiple of 6?", answer: "24", explanation: "6 × 4 = 24." },
            { type: "tf", difficulty: "easy", q: "A factor of a number divides it exactly with no remainder.", answer: true, explanation: "That is the definition of a factor." },
            { type: "mcq", difficulty: "easy", q: "Which is a multiple of 7?", options: ["22", "28", "32", "38"], answer: 1, explanation: "7 × 4 = 28, so 28 is a multiple of 7." },
            { type: "numeric", difficulty: "easy", q: "How many factors does 10 have?", answer: "4", explanation: "Factors of 10: 1, 2, 5, 10 — four factors." },
            { type: "mcq", difficulty: "medium", q: "Which of these is NOT a factor of 36?", options: ["6", "9", "8", "12"], answer: 2, explanation: "36 ÷ 8 = 4.5, so 8 is NOT a factor." },
            { type: "numeric", difficulty: "medium", q: "List the number of factors of 12.", answer: "6", explanation: "Factors: 1, 2, 3, 4, 6, 12 — six factors." },
            { type: "mcq", difficulty: "medium", q: "What is the 7th multiple of 9?", options: ["56", "63", "72", "81"], answer: 1, explanation: "9 × 7 = 63." },
            { type: "tf", difficulty: "medium", q: "Every number is a factor of itself.", answer: true, explanation: "n ÷ n = 1 exactly, so every number divides itself." },
            { type: "numeric", difficulty: "medium", q: "What is the smallest multiple of 8 greater than 50?", answer: "56", explanation: "8 × 7 = 56." },
            { type: "mcq", difficulty: "hard", q: "Which number has exactly 3 factors?", options: ["4", "6", "8", "12"], answer: 0, explanation: "4 has factors 1, 2, 4 — exactly three. Perfect squares of primes always have exactly 3 factors." },
            { type: "short", difficulty: "hard", q: "List all the factors of 48 in ascending order.", answer: "1, 2, 3, 4, 6, 8, 12, 16, 24, 48 — ten factors.", explanation: "Check each integer from 1 to √48 ≈ 6.9 and pair them." }
          ]
        },
        {
          text: "Find the LCM and HCF of two or three numbers.",
          resources: [
            { type: "interactive", title: "Least Common Multiple", provider: "Math is Fun", url: "https://www.mathsisfun.com/least-common-multiple.html", note: "Finding the LCM." },
            { type: "interactive", title: "Greatest Common Factor (HCF)", provider: "Math is Fun", url: "https://www.mathsisfun.com/greatest-common-factor.html", note: "Finding the HCF/GCF." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Factors, multiples and primes (Stage 7)", note: "Factors, multiples, primes, HCF and LCM are covered in the Cambridge Stage 7 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 1 'The Curious Incident of the Never-Ending Primes'", note: "Enrichment read (accessible stretch): the mystery of prime numbers, factors and multiples.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "What is the HCF of 12 and 18?", answer: "6", explanation: "The highest common factor of 12 and 18 is 6." },
            { type: "numeric", difficulty: "medium", q: "What is the LCM of 4 and 6?", answer: "12", explanation: "The lowest common multiple of 4 and 6 is 12." },
            { type: "tf", difficulty: "easy", q: "The HCF of two numbers is always less than or equal to both numbers.", answer: true, explanation: "The highest common factor cannot exceed either number." },
            { type: "mcq", difficulty: "easy", q: "What is the HCF of 8 and 12?", options: ["2", "4", "8", "24"], answer: 1, explanation: "Factors of 8: 1,2,4,8. Factors of 12: 1,2,3,4,6,12. Highest common = 4." },
            { type: "numeric", difficulty: "medium", q: "What is the LCM of 3 and 5?", answer: "15", explanation: "Multiples of 3: 3,6,9,12,15. Multiples of 5: 5,10,15. LCM = 15." },
            { type: "mcq", difficulty: "medium", q: "What is the HCF of 24 and 36?", options: ["4", "6", "8", "12"], answer: 3, explanation: "Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. HCF = 12." },
            { type: "numeric", difficulty: "medium", q: "What is the LCM of 6 and 8?", answer: "24", explanation: "6 × 8 ÷ HCF(6,8) = 48 ÷ 2 = 24." },
            { type: "tf", difficulty: "medium", q: "The LCM of 5 and 10 is 10.", answer: true, explanation: "10 is the smallest number divisible by both 5 and 10." },
            { type: "numeric", difficulty: "hard", q: "What is the HCF of 30 and 45?", answer: "15", explanation: "30 = 2×3×5, 45 = 3²×5. Common: 3×5 = 15." },
            { type: "numeric", difficulty: "hard", q: "What is the LCM of 12 and 18?", answer: "36", explanation: "12 = 2²×3, 18 = 2×3². LCM = 2²×3² = 36." },
            { type: "mcq", difficulty: "hard", q: "Find the HCF of 48, 36 and 24.", options: ["4", "6", "8", "12"], answer: 3, explanation: "48 = 2⁴×3, 36 = 2²×3², 24 = 2³×3. HCF = 2²×3 = 12." },
            { type: "short", difficulty: "hard", q: "Using prime factorisation, find the LCM of 15 and 20.", answer: "15 = 3×5, 20 = 2²×5. LCM = take highest powers: 2²×3×5 = 60.", explanation: "LCM uses the highest power of each prime factor present in either number." }
          ]
        },
        {
          text: "Solve real-life problems using LCM and HCF.",
          resources: [
            { type: "interactive", title: "Least Common Multiple", provider: "Math is Fun", url: "https://www.mathsisfun.com/least-common-multiple.html", note: "When to use the LCM." },
            { type: "interactive", title: "Greatest Common Factor (HCF)", provider: "Math is Fun", url: "https://www.mathsisfun.com/greatest-common-factor.html", note: "When to use the HCF." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Factors, multiples and primes (Stage 7)", note: "Factors, multiples, primes, HCF and LCM are covered in the Cambridge Stage 7 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 1 'The Curious Incident of the Never-Ending Primes'", note: "Enrichment read (accessible stretch): the mystery of prime numbers, factors and multiples.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "Two bells ring every 4 and 6 minutes. After how many minutes do they next ring together, and which (LCM or HCF) did you use?", answer: "LCM of 4 and 6 = 12 minutes. You use the LCM for 'happening together again' / repeating events.", explanation: "Repeating-together problems use the LCM." },
            { type: "numeric", difficulty: "medium", q: "Bells ring every 5 and 10 minutes. After how many minutes do they next ring together?", answer: "10", explanation: "LCM of 5 and 10 = 10 minutes." },
            { type: "mcq", difficulty: "easy", q: "To find when two periodic events happen at the same time, you use:", options: ["HCF", "LCM", "Prime factorisation", "Division"], answer: 1, explanation: "LCM gives the first time two cycles coincide." },
            { type: "numeric", difficulty: "medium", q: "You want to cut two ropes of 12 m and 18 m into equal lengths with no waste. What is the longest possible piece length in metres?", answer: "6", explanation: "HCF of 12 and 18 = 6 m." },
            { type: "mcq", difficulty: "medium", q: "You have 24 apples and 36 oranges. You want to make identical bags with no leftovers. What is the maximum number of bags?", options: ["4", "6", "8", "12"], answer: 3, explanation: "HCF of 24 and 36 = 12 bags." },
            { type: "numeric", difficulty: "medium", q: "Two buses leave a station every 8 and 12 minutes. How many minutes until they next leave together?", answer: "24", explanation: "LCM of 8 and 12 = 24 minutes." },
            { type: "short", difficulty: "medium", q: "You have 30 red and 45 blue tiles. You tile identical squares with no leftovers. What is the largest square size, and which method did you use?", answer: "HCF of 30 and 45 = 15 tiles per square. You use HCF for equal sharing with no remainders.", explanation: "Equal grouping with no leftovers uses HCF." },
            { type: "numeric", difficulty: "hard", q: "Three lights flash every 4, 6 and 8 seconds. After how many seconds do all three flash together?", answer: "24", explanation: "LCM of 4, 6 and 8: prime factors 2³ and 3 = 24." },
            { type: "mcq", difficulty: "hard", q: "You pack 48 red pens and 60 blue pens into identical boxes with no leftover. What is the max number of boxes?", options: ["4", "8", "12", "24"], answer: 2, explanation: "HCF of 48 and 60 = 12 boxes." },
            { type: "numeric", difficulty: "hard", q: "A flashing light A flashes every 15 s and light B every 20 s. They both flash at t=0. When is the next time they both flash together (in seconds)?", answer: "60", explanation: "LCM of 15 and 20 = 60 s." },
            { type: "short", difficulty: "hard", q: "Explain how to decide whether to use the LCM or HCF in a word problem, with one example of each.", answer: "Use LCM when events repeat and you want the first time they coincide (e.g. buses leaving together). Use HCF when sharing into equal groups with no remainders (e.g. tiles into equal squares).", explanation: "LCM = simultaneous recurrence; HCF = equal division without waste." },
            { type: "tf", difficulty: "medium", q: "The LCM of two numbers is always greater than or equal to both numbers.", answer: true, explanation: "The LCM is a common multiple, so it must be at least as large as each number." }
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
            { type: "interactive", title: "Power in the roots study bot", provider: "📚 School's Library · ChatGPT", url: "https://chatgpt.com/g/g-6787a7149d2881918eee37ff3d6a365c-power-in-the-roots", note: "Your class's tutor bot for powers, indices and roots. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Laws of Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "All the index laws in one place." },
            { type: "interactive", title: "Exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Intro to powers and exponents." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 7)", note: "Indices (powers) and roots are covered in the Cambridge Stage 7 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "2³ × 2² = ?", options: ["2⁵", "2⁶", "4⁵", "2¹"], answer: 0, explanation: "Same base: add the powers, 3 + 2 = 5, giving 2⁵." },
            { type: "numeric", difficulty: "medium", q: "Work out the value of 2³ × 2². (give the number)", answer: "32", explanation: "2³ × 2² = 2⁵ = 32." },
            { type: "tf", difficulty: "easy", q: "When multiplying powers with the same base, you add the exponents.", answer: true, explanation: "aᵐ × aⁿ = aᵐ⁺ⁿ." },
            { type: "mcq", difficulty: "easy", q: "3⁴ × 3² = ?", options: ["3⁸", "3⁶", "9⁶", "3²"], answer: 1, explanation: "Same base 3: add exponents 4 + 2 = 6, giving 3⁶." },
            { type: "mcq", difficulty: "easy", q: "What does 5² mean?", options: ["5 × 2", "5 + 5", "5 × 5", "2 × 2 × 2 × 2 × 2"], answer: 2, explanation: "5² = 5 × 5 = 25." },
            { type: "numeric", difficulty: "medium", q: "Work out 3⁴. (give the number)", answer: "81", explanation: "3⁴ = 3 × 3 × 3 × 3 = 81." },
            { type: "mcq", difficulty: "medium", q: "5³ ÷ 5¹ = ?", options: ["5²", "5⁴", "5³", "1"], answer: 0, explanation: "Same base: subtract exponents 3 − 1 = 2, giving 5²." },
            { type: "numeric", difficulty: "medium", q: "Work out 2⁶. (give the number)", answer: "64", explanation: "2⁶ = 64." },
            { type: "tf", difficulty: "medium", q: "2³ × 3³ = 6³.", answer: true, explanation: "(2 × 3)³ = 6³. When multiplying same exponents with different bases, you can combine the bases." },
            { type: "mcq", difficulty: "hard", q: "(2³)² = ?", options: ["2⁵", "2⁶", "4⁶", "2⁹"], answer: 1, explanation: "Power of a power: multiply exponents 3 × 2 = 6, giving 2⁶." },
            { type: "numeric", difficulty: "hard", q: "Work out (3²)³. (give the number)", answer: "729", explanation: "(3²)³ = 3⁶ = 729." },
            { type: "short", difficulty: "hard", q: "State the multiplication law of indices and use it to simplify x⁴ × x³.", answer: "Multiplication law: aᵐ × aⁿ = aᵐ⁺ⁿ. So x⁴ × x³ = x⁴⁺³ = x⁷.", explanation: "Add exponents when multiplying same-base powers." }
          ]
        },
        {
          text: "Apply the zero, product, division and inverse (negative-power) rules.",
          resources: [
            { type: "interactive", title: "Exponent laws", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "Zero, product, quotient and negative powers." },
            { type: "interactive", title: "Khan Academy: Exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra", note: "Practice the index laws." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 7)", note: "Indices (powers) and roots are covered in the Cambridge Stage 7 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Any non-zero number to the power 0 equals:", options: ["0", "1", "the number itself", "undefined"], answer: 1, explanation: "By the zero rule, a⁰ = 1 for any non-zero a." },
            { type: "mcq", difficulty: "medium", q: "5⁶ ÷ 5² = ?", options: ["5³", "5⁴", "5⁸", "1⁴"], answer: 1, explanation: "Same base: subtract powers, 6 − 2 = 4, giving 5⁴." },
            { type: "numeric", difficulty: "easy", q: "What is 100⁰?", answer: "1", explanation: "Any non-zero number to the power 0 = 1." },
            { type: "mcq", difficulty: "easy", q: "3⁷ ÷ 3⁷ = ?", options: ["0", "1", "3", "3⁰"], answer: 1, explanation: "3⁷ ÷ 3⁷ = 3⁰ = 1." },
            { type: "tf", difficulty: "medium", q: "When dividing powers with the same base, you subtract the exponents.", answer: true, explanation: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ." },
            { type: "mcq", difficulty: "medium", q: "4⁸ ÷ 4³ = ?", options: ["4⁵", "4¹¹", "4²⁴", "1⁵"], answer: 0, explanation: "Subtract exponents: 8 − 3 = 5, giving 4⁵." },
            { type: "numeric", difficulty: "medium", q: "Work out 4⁵ ÷ 4³. (give the number)", answer: "16", explanation: "4⁵ ÷ 4³ = 4² = 16." },
            { type: "mcq", difficulty: "medium", q: "What does 2⁻¹ equal?", options: ["−2", "2", "1/2", "1"], answer: 2, explanation: "Negative exponent means reciprocal: 2⁻¹ = 1/2." },
            { type: "tf", difficulty: "medium", q: "5⁻² = 1/25.", answer: true, explanation: "5⁻² = 1/5² = 1/25." },
            { type: "numeric", difficulty: "hard", q: "Work out 10⁻¹ as a decimal.", answer: "0.1", explanation: "10⁻¹ = 1/10 = 0.1." },
            { type: "mcq", difficulty: "hard", q: "2⁻³ = ?", options: ["−8", "1/8", "−1/8", "8"], answer: 1, explanation: "2⁻³ = 1/2³ = 1/8." },
            { type: "short", difficulty: "hard", q: "Explain the zero index law and the negative index law, with an example of each.", answer: "Zero law: a⁰ = 1 (e.g. 7⁰ = 1). Negative law: a⁻ⁿ = 1/aⁿ (e.g. 3⁻² = 1/9).", explanation: "Zero power = 1; negative power = reciprocal of the positive power." }
          ]
        },
        {
          text: "Express roots using fractional indices.",
          resources: [
            { type: "interactive", title: "Fractional Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-fractional.html", note: "Why √x = x^(1/2)." },
            { type: "interactive", title: "Roots as exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Connecting roots and powers." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 7)", note: "Indices (powers) and roots are covered in the Cambridge Stage 7 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "√x can be written as which index?", options: ["x²", "x^(1/2)", "x^(−1)", "2x"], answer: 1, explanation: "A square root is the power one-half: √x = x^(1/2)." },
            { type: "tf", difficulty: "medium", q: "The cube root of a number can be written as a power of 1/3.", answer: true, explanation: "∛x = x^(1/3)." },
            { type: "tf", difficulty: "easy", q: "x^(1/2) means the square root of x.", answer: true, explanation: "A power of 1/2 is the same as taking the square root." },
            { type: "mcq", difficulty: "easy", q: "9^(1/2) = ?", options: ["4.5", "81", "3", "18"], answer: 2, explanation: "9^(1/2) = √9 = 3." },
            { type: "numeric", difficulty: "medium", q: "Work out 27^(1/3). (give the number)", answer: "3", explanation: "27^(1/3) = ∛27 = 3." },
            { type: "mcq", difficulty: "medium", q: "Which root does the index 1/4 represent?", options: ["Square root", "Cube root", "Fourth root", "Half root"], answer: 2, explanation: "x^(1/4) is the fourth root of x." },
            { type: "numeric", difficulty: "medium", q: "Work out 16^(1/4). (give the number)", answer: "2", explanation: "16^(1/4) = ∜16 = 2, since 2⁴ = 16." },
            { type: "tf", difficulty: "medium", q: "64^(1/3) = 4.", answer: true, explanation: "4³ = 64, so ∛64 = 4 = 64^(1/3)." },
            { type: "mcq", difficulty: "hard", q: "8^(2/3) = ?", options: ["2", "4", "6", "16"], answer: 1, explanation: "8^(1/3) = 2, then 2² = 4. So 8^(2/3) = 4." },
            { type: "numeric", difficulty: "hard", q: "Work out 32^(1/5). (give the number)", answer: "2", explanation: "2⁵ = 32, so 32^(1/5) = 2." },
            { type: "mcq", difficulty: "hard", q: "What is 25^(3/2)?", options: ["75", "125", "5", "625"], answer: 1, explanation: "25^(1/2) = 5, then 5³ = 125. So 25^(3/2) = 125." },
            { type: "short", difficulty: "hard", q: "Explain why √x = x^(1/2) using the multiplication law of indices.", answer: "x^(1/2) × x^(1/2) = x^(1/2 + 1/2) = x^1 = x. So x^(1/2) multiplied by itself gives x, which is what a square root does. Therefore √x = x^(1/2).", explanation: "Two identical fractional powers that add to 1 define the square root." }
          ]
        },
        {
          text: "Simplify numerical expressions using indices.",
          resources: [
            { type: "interactive", title: "Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/exponent.html", note: "Working out powers." },
            { type: "interactive", title: "Evaluating exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice calculating with powers." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 7)", note: "Indices (powers) and roots are covered in the Cambridge Stage 7 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Work out 3² + 4². (give the number)", answer: "25", explanation: "9 + 16 = 25." },
            { type: "numeric", difficulty: "medium", q: "Work out 10³ ÷ 10. (give the number)", answer: "100", explanation: "10³ = 1000, and 1000 ÷ 10 = 100." },
            { type: "numeric", difficulty: "easy", q: "Work out 2⁴. (give the number)", answer: "16", explanation: "2⁴ = 16." },
            { type: "numeric", difficulty: "easy", q: "Work out 5². (give the number)", answer: "25", explanation: "5 × 5 = 25." },
            { type: "mcq", difficulty: "easy", q: "Simplify 4² + 2³.", options: ["18", "24", "22", "10"], answer: 1, explanation: "4² = 16 and 2³ = 8. 16 + 8 = 24." },
            { type: "numeric", difficulty: "medium", q: "Work out 2³ × 3². (give the number)", answer: "72", explanation: "8 × 9 = 72." },
            { type: "mcq", difficulty: "medium", q: "Work out 5³ − 10².", options: ["15", "25", "125", "100"], answer: 1, explanation: "5³ = 125, 10² = 100. 125 − 100 = 25." },
            { type: "numeric", difficulty: "medium", q: "Work out (2³)². (give the number)", answer: "64", explanation: "(2³)² = 2⁶ = 64." },
            { type: "tf", difficulty: "medium", q: "2⁵ = 32.", answer: true, explanation: "2⁵ = 2 × 2 × 2 × 2 × 2 = 32." },
            { type: "numeric", difficulty: "hard", q: "Work out 6² − 5². (give the number)", answer: "11", explanation: "36 − 25 = 11." },
            { type: "mcq", difficulty: "hard", q: "Work out 2³ + 2² − 2¹.", options: ["10", "12", "9", "14"], answer: 0, explanation: "8 + 4 − 2 = 10." },
            { type: "short", difficulty: "hard", q: "Simplify 3³ × 3² ÷ 3⁴ using index laws and give the final number.", answer: "3³ × 3² = 3⁵ = 243. 3⁵ ÷ 3⁴ = 3¹ = 3.", explanation: "Add for multiply, subtract for divide: 3 + 2 − 4 = 1, giving 3¹ = 3." }
          ]
        },
        {
          text: "Recall squares and cubes from 1 to 20.",
          resources: [
            { type: "interactive", title: "Squares and Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/square-root.html", note: "Squares (and roots) of numbers." },
            { type: "interactive", title: "Khan Academy: Squares & cubes", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice recalling squares and cubes." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 7)", note: "Indices (powers) and roots are covered in the Cambridge Stage 7 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "What is 12²?", answer: "144", explanation: "12 × 12 = 144." },
            { type: "numeric", difficulty: "easy", q: "What is 4³?", answer: "64", explanation: "4 × 4 × 4 = 64." },
            { type: "numeric", difficulty: "easy", q: "What is 7²?", answer: "49", explanation: "7 × 7 = 49." },
            { type: "numeric", difficulty: "easy", q: "What is 5³?", answer: "125", explanation: "5 × 5 × 5 = 125." },
            { type: "mcq", difficulty: "easy", q: "What is 9²?", options: ["18", "81", "72", "90"], answer: 1, explanation: "9 × 9 = 81." },
            { type: "numeric", difficulty: "easy", q: "What is 10²?", answer: "100", explanation: "10 × 10 = 100." },
            { type: "numeric", difficulty: "medium", q: "What is 15²?", answer: "225", explanation: "15 × 15 = 225." },
            { type: "mcq", difficulty: "medium", q: "What is 3³?", options: ["9", "27", "81", "6"], answer: 1, explanation: "3 × 3 × 3 = 27." },
            { type: "numeric", difficulty: "medium", q: "What is 13²?", answer: "169", explanation: "13 × 13 = 169." },
            { type: "tf", difficulty: "medium", q: "20² = 400.", answer: true, explanation: "20 × 20 = 400." },
            { type: "numeric", difficulty: "hard", q: "What is 2³?", answer: "8", explanation: "2 × 2 × 2 = 8." },
            { type: "mcq", difficulty: "hard", q: "Which cube is 216?", options: ["5³", "6³", "7³", "8³"], answer: 1, explanation: "6 × 6 × 6 = 216." }
          ]
        },
        {
          text: "Find square roots and cube roots using prime factorisation.",
          resources: [
            { type: "interactive", title: "Square & cube roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/cube-root.html", note: "Finding roots, including with factors." },
            { type: "interactive", title: "Roots via prime factors", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Using prime factorisation." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 7)", note: "Indices (powers) and roots are covered in the Cambridge Stage 7 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "What is √144?", answer: "12", explanation: "12 × 12 = 144, so √144 = 12." },
            { type: "numeric", difficulty: "medium", q: "Using prime factors, what is the cube root of 27?", answer: "3", explanation: "27 = 3 × 3 × 3 = 3³, so ∛27 = 3." },
            { type: "numeric", difficulty: "easy", q: "What is √81?", answer: "9", explanation: "9 × 9 = 81, so √81 = 9." },
            { type: "numeric", difficulty: "easy", q: "What is √25?", answer: "5", explanation: "5 × 5 = 25, so √25 = 5." },
            { type: "mcq", difficulty: "easy", q: "What is √49?", options: ["6", "7", "8", "9"], answer: 1, explanation: "7 × 7 = 49, so √49 = 7." },
            { type: "numeric", difficulty: "medium", q: "What is ∛64?", answer: "4", explanation: "4 × 4 × 4 = 64, so ∛64 = 4." },
            { type: "mcq", difficulty: "medium", q: "Using prime factorisation, √36 = ?", options: ["4", "6", "9", "12"], answer: 1, explanation: "36 = 2² × 3². √36 = 2 × 3 = 6." },
            { type: "numeric", difficulty: "medium", q: "Using prime factors, find ∛125.", answer: "5", explanation: "125 = 5³. ∛125 = 5." },
            { type: "tf", difficulty: "medium", q: "√169 = 13.", answer: true, explanation: "13 × 13 = 169." },
            { type: "numeric", difficulty: "hard", q: "Using prime factorisation of 196, find √196.", answer: "14", explanation: "196 = 4 × 49 = 2² × 7². √196 = 2 × 7 = 14." },
            { type: "mcq", difficulty: "hard", q: "∛216 using prime factors = ?", options: ["4", "5", "6", "7"], answer: 2, explanation: "216 = 8 × 27 = 2³ × 3³. ∛216 = 2 × 3 = 6." },
            { type: "short", difficulty: "hard", q: "Show how to find √900 using prime factorisation.", answer: "900 = 9 × 100 = 3² × 10² = 3² × 2² × 5². Each prime appears twice, so √900 = 3 × 2 × 5 = 30.", explanation: "Take one of each pair of prime factors from the factorisation." }
          ]
        },
        {
          text: "Identify the nearest perfect squares to a number.",
          resources: [
            { type: "interactive", title: "Perfect squares", provider: "Math is Fun", url: "https://www.mathsisfun.com/square-root.html", note: "Recognising square numbers." },
            { type: "interactive", title: "Estimating roots", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Roots between whole numbers." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 7)", note: "Indices (powers) and roots are covered in the Cambridge Stage 7 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The nearest perfect square below 50 is:", options: ["36", "49", "25", "64"], answer: 1, explanation: "49 = 7² is the largest perfect square less than 50." },
            { type: "numeric", difficulty: "medium", q: "√70 lies between two whole numbers. Give the smaller one.", answer: "8", explanation: "8² = 64 and 9² = 81, so √70 is between 8 and 9." },
            { type: "tf", difficulty: "easy", q: "25 is a perfect square.", answer: true, explanation: "25 = 5², so yes it is a perfect square." },
            { type: "mcq", difficulty: "easy", q: "Which is NOT a perfect square?", options: ["16", "36", "50", "64"], answer: 2, explanation: "50 is not a perfect square; the others are 4², 6², 8²." },
            { type: "numeric", difficulty: "medium", q: "What is the nearest perfect square above 20?", answer: "25", explanation: "5² = 25 is the smallest perfect square greater than 20." },
            { type: "mcq", difficulty: "medium", q: "√30 lies between which two whole numbers?", options: ["4 and 5", "5 and 6", "6 and 7", "3 and 4"], answer: 1, explanation: "5² = 25 and 6² = 36. Since 25 < 30 < 36, √30 is between 5 and 6." },
            { type: "numeric", difficulty: "medium", q: "What is the nearest perfect square below 80?", answer: "64", explanation: "8² = 64 < 80 < 81 = 9²." },
            { type: "mcq", difficulty: "medium", q: "Which two consecutive perfect squares does 45 lie between?", options: ["36 and 49", "25 and 36", "49 and 64", "16 and 25"], answer: 0, explanation: "6² = 36 and 7² = 49. Since 36 < 45 < 49, 45 is between them." },
            { type: "tf", difficulty: "medium", q: "√55 is between 7 and 8.", answer: true, explanation: "7² = 49 and 8² = 64. Since 49 < 55 < 64, √55 is between 7 and 8." },
            { type: "numeric", difficulty: "hard", q: "Estimate √50 to one decimal place. (round appropriately)", answer: "7.1", explanation: "7² = 49 and 8² = 64. 50 is very close to 49, so √50 ≈ 7.1." },
            { type: "mcq", difficulty: "hard", q: "Which perfect square is closest to 200?", options: ["169", "196", "225", "144"], answer: 1, explanation: "14² = 196, which is 4 away. 15² = 225, which is 25 away. 196 is closest." },
            { type: "short", difficulty: "hard", q: "Estimate √90 to one decimal place and explain your method.", answer: "9² = 81, 10² = 100. 90 is 9 from 81 and 10 from 100, so √90 ≈ 9.5.", explanation: "Find the two nearest perfect squares, then interpolate." }
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
            { type: "interactive", title: "Number patterns", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice extending sequences." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 7)", note: "Sequences and patterns are covered in the Cambridge Stage 7 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Find the next term: 2, 4, 6, 8, ?", answer: "10", explanation: "Add 2 each time: 8 + 2 = 10." },
            { type: "numeric", difficulty: "medium", q: "Find the next term: 3, 6, 12, 24, ?", answer: "48", explanation: "Each term doubles: 24 × 2 = 48." },
            { type: "numeric", difficulty: "easy", q: "Find the next term: 5, 10, 15, 20, ?", answer: "25", explanation: "Add 5 each time: 20 + 5 = 25." },
            { type: "numeric", difficulty: "easy", q: "Find the next term: 1, 3, 5, 7, ?", answer: "9", explanation: "Odd numbers: add 2 each time: 7 + 2 = 9." },
            { type: "mcq", difficulty: "easy", q: "What is the next term in 100, 90, 80, 70, ?", options: ["55", "60", "65", "50"], answer: 1, explanation: "Subtract 10 each time: 70 − 10 = 60." },
            { type: "numeric", difficulty: "medium", q: "Find the next term: 2, 5, 8, 11, ?", answer: "14", explanation: "Add 3 each time: 11 + 3 = 14." },
            { type: "mcq", difficulty: "medium", q: "What comes next in 1, 4, 9, 16, ?", options: ["20", "25", "36", "30"], answer: 1, explanation: "Square numbers: 5² = 25." },
            { type: "numeric", difficulty: "medium", q: "Find the next term: 1, 2, 4, 7, 11, ?", answer: "16", explanation: "Differences are 1, 2, 3, 4, 5 — add 5: 11 + 5 = 16." },
            { type: "tf", difficulty: "medium", q: "The sequence 1, 8, 27, 64, … is made of cube numbers.", answer: true, explanation: "1³=1, 2³=8, 3³=27, 4³=64." },
            { type: "numeric", difficulty: "hard", q: "Find the next term in the Fibonacci-like sequence: 2, 3, 5, 8, 13, ?", answer: "21", explanation: "Each term = sum of previous two: 8 + 13 = 21." },
            { type: "mcq", difficulty: "hard", q: "The sequence 1, 3, 7, 15, 31, … is generated by:", options: ["adding 2 each time", "doubling and subtracting 1", "multiplying by 3", "adding successive primes"], answer: 1, explanation: "Each term = previous × 2 + 1 (or double then minus 1). 1→3: 1×2+1=3; 3×2+1=7; 7×2+1=15." },
            { type: "short", difficulty: "hard", q: "Find the next two terms of the sequence −2, 0, 3, 7, 12, ? and explain the pattern.", answer: "Differences: 2, 3, 4, 5 — next differences are 6 and 7. Terms: 12+6=18 and 18+7=25.", explanation: "The differences form an increasing sequence." }
          ]
        },
        {
          text: "Recognise and continue pictorial patterns.",
          resources: [
            { type: "interactive", title: "Pattern problems", provider: "NRICH", url: "https://nrich.maths.org/", note: "Rich visual pattern investigations." },
            { type: "interactive", title: "Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Patterns made from shapes and dots." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 7)", note: "Sequences and patterns are covered in the Cambridge Stage 7 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "A dot pattern uses 3 dots, then 5, then 7. How many dots in the 4th picture, and what is the rule?", answer: "9 dots. The rule is 'add 2 each time' (the odd numbers).", explanation: "Each picture adds 2 more dots." },
            { type: "numeric", difficulty: "medium", q: "Squares made of matchsticks use 4, 7, 10, 13 sticks. How many for the next shape?", answer: "16", explanation: "Add 3 each time: 13 + 3 = 16." },
            { type: "tf", difficulty: "easy", q: "A pictorial pattern grows by adding the same amount of shapes each time if it is a linear pattern.", answer: true, explanation: "A linear pattern has a constant difference between consecutive pictures." },
            { type: "mcq", difficulty: "easy", q: "A staircase pattern has 1, 3, 6, 10 squares. What kind of numbers are these?", options: ["Even numbers", "Odd numbers", "Triangular numbers", "Square numbers"], answer: 2, explanation: "1, 3, 6, 10 are the triangular numbers." },
            { type: "numeric", difficulty: "medium", q: "Triangles made from dots: 1, 3, 6, 10, ? How many dots in the 5th triangular number?", answer: "15", explanation: "Add 5: 10 + 5 = 15." },
            { type: "mcq", difficulty: "medium", q: "An L-shape pattern has 3, 5, 7, 9, … squares. The rule is:", options: ["multiply by 2", "add 2 each time", "add 3 each time", "square the position"], answer: 1, explanation: "Difference = 2 between each term." },
            { type: "numeric", difficulty: "medium", q: "A cross shape grows with 1, 5, 9, 13 squares. What is the 6th term?", answer: "21", explanation: "Add 4 each time: 13, 17, 21. The 6th term is 21." },
            { type: "short", difficulty: "medium", q: "A pattern of squares grows as 2, 6, 12, 20, 30. Find the next term and describe how it grows.", answer: "Differences: 4, 6, 8, 10, 12. Next term: 30 + 12 = 42. The differences increase by 2 each time.", explanation: "The second difference is constant (+2), giving a quadratic pattern." },
            { type: "mcq", difficulty: "hard", q: "A pattern uses tiles: 1, 4, 9, 16, 25. Which describes it?", options: ["Triangular numbers", "Even numbers", "Square numbers", "Fibonacci numbers"], answer: 2, explanation: "1², 2², 3², 4², 5² — the square numbers." },
            { type: "numeric", difficulty: "hard", q: "Pentagons made from dots: 1, 5, 12, 22, ? The differences are 4, 7, 10, … Find the 5th term.", answer: "35", explanation: "Differences: 4, 7, 10 — add 3 each time. Next difference = 13. 22 + 13 = 35." },
            { type: "short", difficulty: "hard", q: "Draw the next step of a pattern: Step 1 has 5 tiles, step 2 has 9 tiles, step 3 has 13 tiles. How many tiles in step 5?", answer: "Rule: add 4 each time. Step 4 = 17, Step 5 = 21 tiles.", explanation: "Linear pattern: each step adds 4." },
            { type: "tf", difficulty: "medium", q: "The sequence of square numbers forms a pictorial pattern of squares.", answer: true, explanation: "A 1×1, 2×2, 3×3 arrangement of dots gives the square numbers." }
          ]
        },
        {
          text: "State the rule of a sequence.",
          resources: [
            { type: "interactive", title: "Number Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Describing the rule of a sequence." },
            { type: "interactive", title: "Khan Academy: Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Stating sequence rules." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 7)", note: "Sequences and patterns are covered in the Cambridge Stage 7 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "For 5, 10, 15, 20… the rule is:", options: ["add 10", "multiply by 2", "add 5", "subtract 5"], answer: 2, explanation: "Each term is 5 more than the last." },
            { type: "short", difficulty: "medium", q: "Describe the rule for the sequence 100, 90, 80, 70 and give the next term.", answer: "Subtract 10 each time; the next term is 60.", explanation: "Term-to-term rule: −10." },
            { type: "mcq", difficulty: "easy", q: "What is the term-to-term rule for: 2, 6, 18, 54?", options: ["add 4", "multiply by 3", "multiply by 2", "add 16"], answer: 1, explanation: "Each term is 3 times the previous one." },
            { type: "short", difficulty: "easy", q: "State the rule for: 7, 4, 1, −2 and give the next term.", answer: "Subtract 3 each time. Next term: −2 − 3 = −5.", explanation: "Term-to-term rule: −3." },
            { type: "numeric", difficulty: "medium", q: "The rule for a sequence is 'multiply by 2'. The first term is 3. What is the 4th term?", answer: "24", explanation: "3 → 6 → 12 → 24." },
            { type: "mcq", difficulty: "medium", q: "What is the rule for 81, 27, 9, 3?", options: ["subtract 54", "divide by 3", "multiply by 3", "subtract 18"], answer: 1, explanation: "81÷3=27, 27÷3=9, 9÷3=3 — divide by 3 each time." },
            { type: "tf", difficulty: "medium", q: "The rule 'multiply by 1' produces a constant sequence.", answer: true, explanation: "Any number × 1 = itself, so the sequence stays the same." },
            { type: "short", difficulty: "medium", q: "The rule is 'add the previous two terms'. Starting 1, 1, give the first 6 terms.", answer: "1, 1, 2, 3, 5, 8.", explanation: "This is the Fibonacci sequence." },
            { type: "numeric", difficulty: "hard", q: "A sequence starts at 256 and the rule is 'divide by 4'. What is the 4th term?", answer: "4", explanation: "256 → 64 → 16 → 4." },
            { type: "mcq", difficulty: "hard", q: "What is the rule for 1, −2, 4, −8, 16?", options: ["multiply by −2", "multiply by 2", "alternate add/subtract", "multiply by −1 then 2"], answer: 0, explanation: "Each term = previous × (−2): 1×−2=−2, −2×−2=4, 4×−2=−8, −8×−2=16." },
            { type: "short", difficulty: "hard", q: "A sequence: 1, 1.5, 2.25, 3.375. State the rule and find the next term.", answer: "Multiply by 1.5 each time. Next term: 3.375 × 1.5 = 5.0625.", explanation: "This is a geometric sequence with common ratio 1.5." },
            { type: "tf", difficulty: "hard", q: "In an arithmetic sequence, the difference between consecutive terms is always the same.", answer: true, explanation: "That constant difference is called the common difference." }
          ]
        },
        {
          text: "Predict the next terms of a sequence.",
          resources: [
            { type: "interactive", title: "Number Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Predicting later terms." },
            { type: "interactive", title: "Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Extending patterns." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 7)", note: "Sequences and patterns are covered in the Cambridge Stage 7 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Square numbers: 1, 4, 9, 16, ? — what is the next term?", answer: "25", explanation: "The next square is 5² = 25." },
            { type: "numeric", difficulty: "easy", q: "Sequence: 50, 45, 40, 35, ? — what is the next term?", answer: "30", explanation: "Subtract 5 each time: 35 − 5 = 30." },
            { type: "numeric", difficulty: "easy", q: "Sequence: 3, 6, 9, 12, ? — predict the next term.", answer: "15", explanation: "Add 3 each time: 12 + 3 = 15." },
            { type: "mcq", difficulty: "easy", q: "Cube numbers: 1, 8, 27, ? — what is next?", options: ["36", "64", "81", "125"], answer: 1, explanation: "4³ = 64." },
            { type: "numeric", difficulty: "medium", q: "Powers of 2: 1, 2, 4, 8, 16, ? — predict the next term.", answer: "32", explanation: "2⁵ = 32." },
            { type: "mcq", difficulty: "medium", q: "Triangular numbers: 1, 3, 6, 10, ? — what is next?", options: ["12", "13", "15", "16"], answer: 2, explanation: "Add 5: 10 + 5 = 15." },
            { type: "numeric", difficulty: "medium", q: "Sequence: 1, 5, 14, 30, ? The differences are 4, 9, 16, … Predict the next term.", answer: "55", explanation: "Next difference = 25 (5²). 30 + 25 = 55." },
            { type: "numeric", difficulty: "medium", q: "Sequence: 3, 7, 11, 15, ? — predict the next term.", answer: "19", explanation: "Add 4 each time: 15 + 4 = 19." },
            { type: "tf", difficulty: "medium", q: "In the sequence 2, 5, 10, 17, 26, the differences are 3, 5, 7, 9 (consecutive odd numbers).", answer: true, explanation: "3, 5, 7, 9 are consecutive odd numbers, and each difference increases by 2." },
            { type: "numeric", difficulty: "hard", q: "Sequence: 1, 3, 6, 10, 15, ? — predict the next term.", answer: "21", explanation: "Triangular numbers: add 6 (the next counting number): 15 + 6 = 21." },
            { type: "short", difficulty: "hard", q: "The sequence is 2, 3, 5, 7, 11, 13. What is the rule and what are the next two terms?", answer: "Prime numbers in order. Next two primes: 17 and 19.", explanation: "The prime numbers form a sequence." },
            { type: "numeric", difficulty: "hard", q: "Sequence: 1, 2, 6, 24, 120. The next term is n × the previous term where n increases by 1. What is the next term?", answer: "720", explanation: "120 × 6 = 720 (6! = 720)." }
          ]
        },
        {
          text: "Work with pattern series using a position-to-term rule.",
          resources: [
            { type: "interactive", title: "Sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Position-to-term (nth term) rules." },
            { type: "interactive", title: "Khan Academy: nth term", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Finding and using the nth term." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 7)", note: "Sequences and patterns are covered in the Cambridge Stage 7 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): a boy meets a 'number devil' who reveals the wonders of numbers, powers and patterns.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Using the rule 'term = 3 × position', what is the 5th term?", answer: "15", explanation: "3 × 5 = 15." },
            { type: "numeric", difficulty: "medium", q: "The nth term of a sequence is 2n + 1. What is the 4th term?", answer: "9", explanation: "2 × 4 + 1 = 9." },
            { type: "numeric", difficulty: "easy", q: "The rule is T(n) = n + 4. What is the 6th term?", answer: "10", explanation: "6 + 4 = 10." },
            { type: "mcq", difficulty: "easy", q: "The rule is T(n) = 5n. What is the 3rd term?", options: ["8", "10", "15", "20"], answer: 2, explanation: "5 × 3 = 15." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 3n − 1. What is the 5th term?", answer: "14", explanation: "3 × 5 − 1 = 15 − 1 = 14." },
            { type: "mcq", difficulty: "medium", q: "A sequence has T(n) = 4n + 2. Which term equals 22?", options: ["4th", "5th", "6th", "7th"], answer: 1, explanation: "4n + 2 = 22 → 4n = 20 → n = 5." },
            { type: "numeric", difficulty: "medium", q: "The nth term is n². What is the 7th term?", answer: "49", explanation: "7² = 49." },
            { type: "tf", difficulty: "medium", q: "For the sequence 3, 6, 9, 12, the nth term is 3n.", answer: true, explanation: "T(1)=3, T(2)=6, T(3)=9: T(n) = 3n." },
            { type: "numeric", difficulty: "hard", q: "The nth term is 2n² − 1. What is the 4th term?", answer: "31", explanation: "2 × 16 − 1 = 32 − 1 = 31." },
            { type: "mcq", difficulty: "hard", q: "The sequence 5, 8, 11, 14 has the nth term rule:", options: ["3n + 2", "3n + 5", "5n − 3", "n + 4"], answer: 0, explanation: "Common difference = 3, first term = 5. T(n) = 3n + 2. Check: 3(1)+2=5 ✓." },
            { type: "short", difficulty: "hard", q: "Find the nth term rule for the sequence 7, 12, 17, 22, 27 and use it to find the 10th term.", answer: "Common difference = 5. Rule: T(n) = 5n + 2. Check: 5(1)+2=7 ✓. T(10) = 5×10+2 = 52.", explanation: "nth term = first term + (n−1) × common difference, rearranged." },
            { type: "numeric", difficulty: "hard", q: "The nth term is 100 − 7n. What is the first term where the sequence becomes negative?", answer: "15", explanation: "100 − 7n < 0 → n > 100/7 ≈ 14.3. First whole n = 15." }
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
            { type: "interactive", title: "Substitution", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Evaluating expressions." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Expressions, formulae and equations; Geometry (Stage 7)", note: "Introductory algebra is covered in 'Expressions, formulae and equations' and shape/angle/area work in the Cambridge Stage 7 geometry units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 'The Story of the Elusive Shape'", note: "Enrichment read (accessible stretch): the maths of shapes and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "If x = 4, work out 3x + 2.", answer: "14", explanation: "3 × 4 + 2 = 12 + 2 = 14." },
            { type: "numeric", difficulty: "easy", q: "If a = 5 and b = 2, work out a − b.", answer: "3", explanation: "5 − 2 = 3." },
            { type: "numeric", difficulty: "easy", q: "If y = 3, work out 4y.", answer: "12", explanation: "4 × 3 = 12." },
            { type: "mcq", difficulty: "easy", q: "If p = 6, what is 2p − 1?", options: ["11", "13", "12", "10"], answer: 0, explanation: "2 × 6 − 1 = 12 − 1 = 11." },
            { type: "numeric", difficulty: "easy", q: "If x = 0, work out 5x + 9.", answer: "9", explanation: "5 × 0 + 9 = 0 + 9 = 9." },
            { type: "numeric", difficulty: "medium", q: "If x = 3 and y = 4, work out x² + y.", answer: "13", explanation: "3² + 4 = 9 + 4 = 13." },
            { type: "mcq", difficulty: "medium", q: "If n = 5, what is n² − 3n?", options: ["10", "20", "22", "5"], answer: 0, explanation: "25 − 15 = 10." },
            { type: "numeric", difficulty: "medium", q: "If a = 2 and b = 3, work out 2a + 3b.", answer: "13", explanation: "2×2 + 3×3 = 4 + 9 = 13." },
            { type: "tf", difficulty: "medium", q: "If t = 4, then 3t − 2 = 10.", answer: true, explanation: "3 × 4 − 2 = 12 − 2 = 10." },
            { type: "numeric", difficulty: "hard", q: "If x = 2, work out x³ − x.", answer: "6", explanation: "2³ − 2 = 8 − 2 = 6." },
            { type: "mcq", difficulty: "hard", q: "If m = 3 and n = 2, work out m² − n².", options: ["1", "5", "25", "−5"], answer: 1, explanation: "9 − 4 = 5." },
            { type: "short", difficulty: "hard", q: "If a = 4 and b = −2, work out 2a² + 3b and explain each step.", answer: "Step 1: a² = 4² = 16. Step 2: 2a² = 32. Step 3: 3b = 3 × (−2) = −6. Step 4: 32 + (−6) = 26.", explanation: "Substitute, then apply BODMAS." }
          ]
        },
        {
          text: "Solve one-step equations.",
          resources: [
            { type: "interactive", title: "Solving one-step equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Doing the same to both sides." },
            { type: "interactive", title: "One-step equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice solving." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Expressions, formulae and equations; Geometry (Stage 7)", note: "Introductory algebra is covered in 'Expressions, formulae and equations' and shape/angle/area work in the Cambridge Stage 7 geometry units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 'The Story of the Elusive Shape'", note: "Enrichment read (accessible stretch): the maths of shapes and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Solve x + 7 = 12. What is x?", answer: "5", explanation: "Subtract 7 from both sides: x = 12 − 7 = 5." },
            { type: "numeric", difficulty: "easy", q: "Solve 4x = 20. What is x?", answer: "5", explanation: "Divide both sides by 4: x = 20 ÷ 4 = 5." },
            { type: "numeric", difficulty: "easy", q: "Solve x − 3 = 9. What is x?", answer: "12", explanation: "Add 3 to both sides: x = 9 + 3 = 12." },
            { type: "mcq", difficulty: "easy", q: "Solve y + 5 = 11.", options: ["y = 6", "y = 16", "y = 5", "y = 55"], answer: 0, explanation: "Subtract 5: y = 11 − 5 = 6." },
            { type: "numeric", difficulty: "easy", q: "Solve 3n = 21. What is n?", answer: "7", explanation: "Divide by 3: n = 21 ÷ 3 = 7." },
            { type: "numeric", difficulty: "medium", q: "Solve x ÷ 4 = 6. What is x?", answer: "24", explanation: "Multiply both sides by 4: x = 24." },
            { type: "mcq", difficulty: "medium", q: "Solve 2x + 1 = 9. What is x?", options: ["3", "4", "5", "10"], answer: 1, explanation: "Subtract 1: 2x = 8. Divide by 2: x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 5y − 2 = 13. What is y?", answer: "3", explanation: "Add 2: 5y = 15. Divide by 5: y = 3." },
            { type: "tf", difficulty: "medium", q: "To solve 3x = 15, you divide both sides by 3.", answer: true, explanation: "Dividing both sides by 3 isolates x: x = 5." },
            { type: "numeric", difficulty: "hard", q: "Solve 4x + 7 = 27. What is x?", answer: "5", explanation: "Subtract 7: 4x = 20. Divide by 4: x = 5." },
            { type: "mcq", difficulty: "hard", q: "Solve 3(x + 2) = 18. What is x?", options: ["4", "5", "6", "8"], answer: 0, explanation: "Divide by 3: x + 2 = 6. Subtract 2: x = 4." },
            { type: "short", difficulty: "hard", q: "Solve 2x + 3 = x + 9 and check your answer.", answer: "Subtract x: x + 3 = 9. Subtract 3: x = 6. Check: 2(6)+3=15 and 6+9=15 ✓.", explanation: "Collect like terms on each side, then isolate x." }
          ]
        },
        {
          text: "Solve one-step inequalities.",
          resources: [
            { type: "interactive", title: "Inequalities", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/inequality.html", note: "Solving and showing inequalities." },
            { type: "interactive", title: "One-step inequalities", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-sixth-grade-math", note: "Practice problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Expressions, formulae and equations; Geometry (Stage 7)", note: "Introductory algebra is covered in 'Expressions, formulae and equations' and shape/angle/area work in the Cambridge Stage 7 geometry units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 'The Story of the Elusive Shape'", note: "Enrichment read (accessible stretch): the maths of shapes and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Solve x + 3 > 5. The solution is:", options: ["x > 2", "x < 2", "x > 8", "x = 2"], answer: 0, explanation: "Subtract 3 from both sides: x > 2." },
            { type: "tf", difficulty: "medium", q: "If 2x < 10 then x < 5.", answer: true, explanation: "Divide both sides by 2: x < 5." },
            { type: "tf", difficulty: "easy", q: "x > 3 means x can equal 4.", answer: true, explanation: "4 > 3, so yes, x = 4 is a solution." },
            { type: "mcq", difficulty: "easy", q: "Solve x − 2 < 5.", options: ["x < 7", "x < 3", "x > 7", "x < 10"], answer: 0, explanation: "Add 2 to both sides: x < 7." },
            { type: "numeric", difficulty: "medium", q: "Solve y + 4 ≥ 10. What is the smallest integer value of y?", answer: "6", explanation: "y ≥ 6, so the smallest integer is 6." },
            { type: "mcq", difficulty: "medium", q: "Solve 3x > 9.", options: ["x > 3", "x < 3", "x > 27", "x ≥ 3"], answer: 0, explanation: "Divide by 3: x > 3." },
            { type: "tf", difficulty: "medium", q: "x ≤ 5 includes the value x = 5.", answer: true, explanation: "≤ means 'less than or equal to', so x = 5 is included." },
            { type: "mcq", difficulty: "medium", q: "Solve 4n ≤ 20.", options: ["n ≤ 5", "n ≤ 80", "n ≥ 5", "n < 5"], answer: 0, explanation: "Divide by 4: n ≤ 5." },
            { type: "numeric", difficulty: "medium", q: "Solve 2x + 1 < 11. What is the largest integer value of x?", answer: "4", explanation: "2x < 10, x < 5. Largest integer = 4." },
            { type: "mcq", difficulty: "hard", q: "Solve 5 − x < 2.", options: ["x < 3", "x > 3", "x < −3", "x > 7"], answer: 1, explanation: "Subtract 5: −x < −3. Multiply by −1 (flip sign): x > 3." },
            { type: "short", difficulty: "hard", q: "Solve 3x − 4 ≥ 11 and show all steps.", answer: "Add 4: 3x ≥ 15. Divide by 3: x ≥ 5.", explanation: "Solve like an equation, keeping the inequality sign." },
            { type: "tf", difficulty: "hard", q: "When you multiply or divide an inequality by a negative number, you must flip the inequality sign.", answer: true, explanation: "For example, −x < 3 becomes x > −3 when multiplied by −1." }
          ]
        },
        {
          text: "Find the area and perimeter of rectangles and triangles.",
          resources: [
            { type: "interactive", title: "Perimeter, area & surface area study bot", provider: "📚 School's Library · ChatGPT", url: "https://chatgpt.com/g/g-6773b11f5ac48191b58d5389f40a4ebd-perimeter-area-and-surface-area", note: "Your class's tutor bot for perimeter, area and surface area. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Area & Perimeter", provider: "Math is Fun", url: "https://www.mathsisfun.com/area.html", note: "Formulas for rectangles and triangles." },
            { type: "interactive", title: "Area & perimeter", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Expressions, formulae and equations; Geometry (Stage 7)", note: "Introductory algebra is covered in 'Expressions, formulae and equations' and shape/angle/area work in the Cambridge Stage 7 geometry units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 'The Story of the Elusive Shape'", note: "Enrichment read (accessible stretch): the maths of shapes and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A rectangle is 6 cm by 4 cm. What is its area in cm²?", answer: "24", explanation: "Area = length × width = 6 × 4 = 24 cm²." },
            { type: "numeric", difficulty: "medium", q: "A triangle has base 10 cm and height 6 cm. Using A = ½ × b × h, find the area in cm².", answer: "30", explanation: "½ × 10 × 6 = 30 cm²." },
            { type: "numeric", difficulty: "easy", q: "A rectangle is 8 m by 3 m. What is its perimeter in m?", answer: "22", explanation: "Perimeter = 2(l + w) = 2(8 + 3) = 22 m." },
            { type: "mcq", difficulty: "easy", q: "A square has side 5 cm. What is its area in cm²?", options: ["10", "20", "25", "30"], answer: 2, explanation: "Area = 5 × 5 = 25 cm²." },
            { type: "numeric", difficulty: "easy", q: "A rectangle has area 36 cm² and length 9 cm. What is its width in cm?", answer: "4", explanation: "Width = 36 ÷ 9 = 4 cm." },
            { type: "numeric", difficulty: "medium", q: "A triangle has base 8 cm and height 5 cm. Find its area in cm².", answer: "20", explanation: "A = ½ × 8 × 5 = 20 cm²." },
            { type: "mcq", difficulty: "medium", q: "A rectangle has perimeter 28 cm and width 5 cm. What is its length?", options: ["7", "9", "14", "18"], answer: 1, explanation: "28 = 2(l + 5) → l + 5 = 14 → l = 9 cm." },
            { type: "numeric", difficulty: "medium", q: "A right triangle has legs 6 cm and 8 cm. What is its area in cm²?", answer: "24", explanation: "A = ½ × 6 × 8 = 24 cm²." },
            { type: "tf", difficulty: "medium", q: "The area of a triangle is always half the area of a rectangle with the same base and height.", answer: true, explanation: "A triangle = ½ × base × height, which is half of base × height (rectangle)." },
            { type: "numeric", difficulty: "hard", q: "A triangle has area 45 cm² and height 9 cm. What is its base in cm?", answer: "10", explanation: "45 = ½ × b × 9 → b = 90 ÷ 9 = 10 cm." },
            { type: "mcq", difficulty: "hard", q: "A rectangle has length (2x + 3) cm and width 4 cm. If the area is 44 cm², what is x?", options: ["4", "5", "3", "6"], answer: 0, explanation: "4(2x+3) = 44 → 2x+3 = 11 → 2x = 8 → x = 4." },
            { type: "short", difficulty: "hard", q: "A path 1 m wide runs around the outside of a 6 m × 4 m garden. Find the area of the path.", answer: "Outer rectangle: (6+2) × (4+2) = 8 × 6 = 48 m². Garden: 24 m². Path = 48 − 24 = 24 m².", explanation: "Subtract the inner area from the outer to find the border area." }
          ]
        },
        {
          text: "Find the circumference and area of circles.",
          resources: [
            { type: "video", title: "Area of a circle, formula explained (2 min)", provider: "📚 School's Library · YouTube", url: "https://www.youtube.com/watch?v=YokKp3pwVFc", note: "A quick, clear look at where the circle-area formula comes from." },
            { type: "interactive", title: "Circle area & circumference", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/circle.html", note: "Using π with the formulas." },
            { type: "interactive", title: "Area & circumference of circles", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Worked examples and practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Expressions, formulae and equations; Geometry (Stage 7)", note: "Introductory algebra is covered in 'Expressions, formulae and equations' and shape/angle/area work in the Cambridge Stage 7 geometry units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 'The Story of the Elusive Shape'", note: "Enrichment read (accessible stretch): the maths of shapes and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A circle has radius 5 cm. Using C = 2πr with π ≈ 3.14, find the circumference in cm.", answer: "31.4", explanation: "C = 2 × 3.14 × 5 = 31.4 cm." },
            { type: "numeric", difficulty: "medium", q: "A circle has radius 10 cm. Using A = πr² with π ≈ 3.14, find the area in cm².", answer: "314", explanation: "A = 3.14 × 10² = 3.14 × 100 = 314 cm²." },
            { type: "tf", difficulty: "easy", q: "The circumference of a circle is given by C = πd, where d is the diameter.", answer: true, explanation: "Since d = 2r, C = πd = 2πr." },
            { type: "mcq", difficulty: "easy", q: "A circle has diameter 10 cm. What is its circumference using π ≈ 3.14?", options: ["31.4 cm", "62.8 cm", "78.5 cm", "15.7 cm"], answer: 0, explanation: "C = πd = 3.14 × 10 = 31.4 cm." },
            { type: "numeric", difficulty: "medium", q: "A circle has radius 7 cm. Using A = πr² with π ≈ 3.14, find the area to 1 d.p.", answer: "153.9", explanation: "A = 3.14 × 7² = 3.14 × 49 = 153.86 ≈ 153.9 cm²." },
            { type: "mcq", difficulty: "medium", q: "A circle has radius 3 cm. Using C = 2πr with π ≈ 3.14, the circumference is:", options: ["9.42 cm", "18.84 cm", "28.26 cm", "6.28 cm"], answer: 1, explanation: "C = 2 × 3.14 × 3 = 18.84 cm." },
            { type: "numeric", difficulty: "medium", q: "A circle has diameter 20 cm. Using A = π(d/2)² with π ≈ 3.14, find the area in cm².", answer: "314", explanation: "r = 10. A = 3.14 × 100 = 314 cm²." },
            { type: "tf", difficulty: "medium", q: "The area of a circle with radius 4 cm is approximately 50.24 cm².", answer: true, explanation: "A = 3.14 × 4² = 3.14 × 16 = 50.24 cm²." },
            { type: "numeric", difficulty: "hard", q: "A circle has circumference 62.8 cm. Using C = 2πr with π ≈ 3.14, find the radius in cm.", answer: "10", explanation: "r = 62.8 ÷ (2 × 3.14) = 62.8 ÷ 6.28 = 10 cm." },
            { type: "mcq", difficulty: "hard", q: "A circular garden has area 78.5 m². Using A = πr², what is the radius in m?", options: ["4", "5", "6", "8"], answer: 1, explanation: "r² = 78.5 ÷ 3.14 = 25. r = 5 m." },
            { type: "short", difficulty: "hard", q: "A circle has radius 6 cm. Find its circumference and area. Use π = 3.14.", answer: "Circumference = 2 × 3.14 × 6 = 37.68 cm. Area = 3.14 × 36 = 113.04 cm².", explanation: "Use C = 2πr and A = πr² with the given radius." },
            { type: "numeric", difficulty: "hard", q: "Two circles have radii 3 cm and 5 cm. What is the difference in their areas? Use π ≈ 3.14.", answer: "50.24", explanation: "A₁ = 3.14 × 9 = 28.26. A₂ = 3.14 × 25 = 78.5. Difference = 78.5 − 28.26 = 50.24 cm²." }
          ]
        },
        {
          text: "Find the area of composite shapes.",
          resources: [
            { type: "interactive", title: "Area", provider: "Math is Fun", url: "https://www.mathsisfun.com/area.html", note: "Splitting shapes to find composite area." },
            { type: "interactive", title: "Khan Academy: Area of composite figures", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Worked examples of compound-shape area." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 7", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Expressions, formulae and equations; Geometry (Stage 7)", note: "Introductory algebra is covered in 'Expressions, formulae and equations' and shape/angle/area work in the Cambridge Stage 7 geometry units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-7-digital-access-1-year?isbn=9781108771436" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 'The Story of the Elusive Shape'", note: "Enrichment read (accessible stretch): the maths of shapes and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "An L-shape is made of two rectangles, 4×2 and 3×2. Explain how to find its total area and give the answer.", answer: "Find each rectangle's area and add them: 4 × 2 = 8 and 3 × 2 = 6, so the total area is 8 + 6 = 14 square units.", explanation: "Split a composite shape into simple parts, find each area, then add." },
            { type: "numeric", difficulty: "medium", q: "A shape is a 5×4 rectangle with a 2×2 square cut out. What is the remaining area?", answer: "16", explanation: "20 − 4 = 16 square units." },
            { type: "tf", difficulty: "easy", q: "To find the area of a composite shape, you split it into simpler parts and add the areas.", answer: true, explanation: "That is the standard method for composite (compound) shapes." },
            { type: "numeric", difficulty: "easy", q: "An L-shape is made of a 6×2 rectangle and a 4×2 rectangle. What is its total area?", answer: "20", explanation: "6×2 = 12 and 4×2 = 8. Total = 20 square units." },
            { type: "mcq", difficulty: "medium", q: "A T-shape is made of a 6×2 rectangle and a 2×3 rectangle. What is the total area?", options: ["18", "24", "12", "30"], answer: 0, explanation: "6×2 = 12 and 2×3 = 6. Total = 18 square units." },
            { type: "numeric", difficulty: "medium", q: "A shape is a 10×6 rectangle with a 3×4 rectangle removed. What is the remaining area?", answer: "48", explanation: "60 − 12 = 48 square units." },
            { type: "numeric", difficulty: "medium", q: "A staircase shape has three steps, each 1 cm high and 1 cm deep. It fits inside a 3×3 square. What is its area in cm²?", answer: "6", explanation: "The staircase covers 1 + 2 + 3 = 6 unit squares." },
            { type: "mcq", difficulty: "medium", q: "A composite shape consists of a rectangle 8×5 and a right triangle with base 4 and height 3. What is the total area?", options: ["46", "52", "56", "60"], answer: 0, explanation: "Rectangle: 40. Triangle: ½×4×3 = 6. Total = 46." },
            { type: "numeric", difficulty: "hard", q: "A running track consists of a rectangle 100 m × 40 m with a semicircle of radius 20 m at each end. Using π ≈ 3.14, find the total area in m².", answer: "5256", explanation: "Rectangle: 100×40 = 4000. Two semicircles = one circle: π×20² = 3.14×400 = 1256. Total = 5256 m²." },
            { type: "short", difficulty: "hard", q: "A window is shaped like a rectangle 80 cm wide and 100 cm tall with a semicircle on top. Using π ≈ 3.14, find the total area.", answer: "Rectangle: 80×100 = 8000 cm². Semicircle radius = 40 cm; area = ½ × 3.14 × 40² = ½ × 3.14 × 1600 = 2512 cm². Total = 8000 + 2512 = 10512 cm².", explanation: "Add the areas of the two component shapes." },
            { type: "tf", difficulty: "medium", q: "You can also find a composite area by starting with a large simple shape and subtracting cut-out pieces.", answer: true, explanation: "This subtraction method is equally valid and sometimes easier." },
            { type: "numeric", difficulty: "hard", q: "A cross shape is a 5×5 square with four 1×1 squares removed from the corners. What is its area?", answer: "21", explanation: "25 − 4 = 21 square units." }
          ]
        }
      ]
    }
  ]
});
