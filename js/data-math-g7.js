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
            { type: "interactive", title: "Percentage Change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Working backwards from a percentage." },
            { type: "interactive", title: "Khan Academy: Percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Reverse-percentage problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 8)", note: "Percentage increase/decrease and applications are covered in the Cambridge Stage 8 'Percentages' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To find the original amount after a percentage increase, you divide by the multiplier.", answer: true, explanation: "If final = original × multiplier, then original = final ÷ multiplier." },
            { type: "mcq", difficulty: "easy", q: "A price has been increased by 10%. The multiplier for that increase is:", options: ["0.9", "1.1", "1.01", "0.1"], answer: 1, explanation: "An increase of 10% means × 1.10." },
            { type: "numeric", difficulty: "easy", q: "20% of a number is 8. What is the number?", answer: "40", explanation: "8 ÷ 0.2 = 40." },
            { type: "numeric", difficulty: "easy", q: "50% of a number is 35. What is the number?", answer: "70", explanation: "35 ÷ 0.5 = 70." },
            { type: "mcq", difficulty: "medium", q: "A price is £60 after a 20% increase. The original price was:", options: ["£48", "£50", "£72", "£45"], answer: 1, explanation: "Original × 1.2 = 60, so original = 60 ÷ 1.2 = £50." },
            { type: "numeric", difficulty: "medium", q: "30% of a number is 12. What is the number?", answer: "40", explanation: "Number = 12 ÷ 0.3 = 40." },
            { type: "numeric", difficulty: "medium", q: "A jacket costs £84 after a 40% increase. What was the original price (£)?", answer: "60", explanation: "84 ÷ 1.4 = 60." },
            { type: "numeric", difficulty: "medium", q: "A ticket costs £45 after a 25% decrease. What was the original price (£)?", answer: "60", explanation: "45 ÷ 0.75 = 60." },
            { type: "mcq", difficulty: "medium", q: "A TV costs £480 after a 20% reduction. The original price was:", options: ["£560", "£600", "£576", "£384"], answer: 1, explanation: "480 ÷ 0.8 = £600." },
            { type: "numeric", difficulty: "hard", q: "After two successive 10% increases a value is £242. What was the original value (£)?", answer: "200", explanation: "Divide by 1.1 twice: 242 ÷ 1.21 = 200." },
            { type: "mcq", difficulty: "hard", q: "A salary of £33 000 is after a 10% rise. The salary before the rise was:", options: ["£29 700", "£30 000", "£36 300", "£29 000"], answer: 1, explanation: "33 000 ÷ 1.1 = 30 000." },
            { type: "short", difficulty: "hard", q: "Explain in one sentence how you use a multiplier to reverse a 15% increase.", answer: "Divide the final amount by 1.15 to find the original value.", explanation: "Original = Final ÷ multiplier." }
          ] },
        { text: "Calculate a percentage increase and decrease.",
          resources: [
            { type: "interactive", title: "Percentage increase/decrease", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Multiplier method." },
            { type: "interactive", title: "Percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice increases and decreases." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 8)", note: "Percentage increase/decrease and applications are covered in the Cambridge Stage 8 'Percentages' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To increase a value by 30% you multiply by 1.3.", answer: true, explanation: "The multiplier for a 30% increase is 1 + 0.30 = 1.3." },
            { type: "mcq", difficulty: "easy", q: "The multiplier for a 25% decrease is:", options: ["0.75", "1.25", "0.25", "0.8"], answer: 0, explanation: "1 − 0.25 = 0.75." },
            { type: "numeric", difficulty: "easy", q: "Increase 80 by 15%. What is the result?", answer: "92", explanation: "80 × 1.15 = 92." },
            { type: "numeric", difficulty: "easy", q: "Decrease 50 by 10%. What is the result?", answer: "45", explanation: "50 × 0.9 = 45." },
            { type: "numeric", difficulty: "easy", q: "Increase 200 by 5%. What is the result?", answer: "210", explanation: "200 × 1.05 = 210." },
            { type: "numeric", difficulty: "easy", q: "Decrease 120 by 20%. What is the result?", answer: "96", explanation: "120 × 0.8 = 96." },
            { type: "numeric", difficulty: "medium", q: "A phone costs £320. It is reduced by 15%. What is the sale price (£)?", answer: "272", explanation: "320 × 0.85 = 272." },
            { type: "numeric", difficulty: "medium", q: "A salary of £25 000 increases by 8%. What is the new salary (£)?", answer: "27000", explanation: "25 000 × 1.08 = 27 000." },
            { type: "mcq", difficulty: "medium", q: "A population of 4000 increases by 12.5%. The new population is:", options: ["4500", "4450", "4050", "3500"], answer: 0, explanation: "4000 × 1.125 = 4500." },
            { type: "numeric", difficulty: "medium", q: "Decrease £85 by 40%. What is the result (£)?", answer: "51", explanation: "85 × 0.6 = 51." },
            { type: "mcq", difficulty: "hard", q: "After a 20% increase, then a 20% decrease, a £100 value becomes:", options: ["£96", "£100", "£104", "£80"], answer: 0, explanation: "100 × 1.2 × 0.8 = 96. Not back to 100!" },
            { type: "short", difficulty: "hard", q: "A shirt is increased by 10% then increased by a further 10%. Is the total increase 20%? Show your working.", answer: "No. Using £100: 100 × 1.1 = 110, then 110 × 1.1 = 121. That is a 21% total increase, not 20%.", explanation: "Successive multipliers multiply together, not add." }
          ] },
        { text: "Calculate percentage change.",
          resources: [
            { type: "interactive", title: "Percentage Change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Change as a percentage of the original." },
            { type: "interactive", title: "Khan Academy: Percentage change", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Percentage increase and decrease." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 8)", note: "Percentage increase/decrease and applications are covered in the Cambridge Stage 8 'Percentages' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Percentage change = (change ÷ original) × 100.", answer: true, explanation: "Always divide the change by the original (starting) value." },
            { type: "mcq", difficulty: "easy", q: "Percentage change is calculated as:", options: ["change ÷ original × 100", "change ÷ new × 100", "original ÷ change × 100", "new − original"], answer: 0, explanation: "Always divide the change by the ORIGINAL amount." },
            { type: "mcq", difficulty: "easy", q: "A price rises from £10 to £12. The percentage change is:", options: ["20%", "12%", "2%", "10%"], answer: 0, explanation: "Change = 2; 2 ÷ 10 × 100 = 20%." },
            { type: "numeric", difficulty: "medium", q: "A value rises from 40 to 50. What is the percentage increase? (number only)", answer: "25", explanation: "Change = 10; 10 ÷ 40 × 100 = 25%." },
            { type: "numeric", difficulty: "medium", q: "A value falls from 80 to 60. What is the percentage decrease? (number only)", answer: "25", explanation: "Change = 20; 20 ÷ 80 × 100 = 25%." },
            { type: "numeric", difficulty: "medium", q: "A book goes from £5 to £8. What is the percentage increase? (number only)", answer: "60", explanation: "Change = 3; 3 ÷ 5 × 100 = 60%." },
            { type: "mcq", difficulty: "medium", q: "A score rises from 25 to 30. The percentage increase is:", options: ["20%", "25%", "16.7%", "5%"], answer: 0, explanation: "5 ÷ 25 × 100 = 20%." },
            { type: "numeric", difficulty: "medium", q: "A plant is 40 cm tall and grows to 46 cm. What is the percentage increase? (number only)", answer: "15", explanation: "6 ÷ 40 × 100 = 15%." },
            { type: "mcq", difficulty: "hard", q: "A price falls from £120 to £90. The percentage decrease is:", options: ["25%", "30%", "33%", "20%"], answer: 0, explanation: "30 ÷ 120 × 100 = 25%." },
            { type: "tf", difficulty: "hard", q: "A 50% increase followed by a 50% decrease brings you back to the starting value.", answer: false, explanation: "e.g. 100 × 1.5 = 150, then × 0.5 = 75. Not 100." },
            { type: "numeric", difficulty: "hard", q: "A car is bought for £8000 and sold for £6000. What is the percentage loss? (number only)", answer: "25", explanation: "2000 ÷ 8000 × 100 = 25%." },
            { type: "short", difficulty: "hard", q: "Explain the difference between a percentage increase and a percentage change.", answer: "Percentage increase specifically describes a rise; percentage change covers both rises (positive) and falls (negative), always divided by the original value.", explanation: "Both use (change ÷ original) × 100; the sign indicates direction." }
          ] },
        { text: "Work out repeated percentage changes.",
          resources: [
            { type: "interactive", title: "Percentage Change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Applying a percentage change more than once." },
            { type: "interactive", title: "Percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Multi-step percentage problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 8)", note: "Percentage increase/decrease and applications are covered in the Cambridge Stage 8 'Percentages' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "For repeated percentage changes, you multiply the multipliers together.", answer: true, explanation: "Each successive change is applied to the new running total." },
            { type: "mcq", difficulty: "easy", q: "The overall multiplier for three 10% increases in a row is:", options: ["1.1³", "1.3", "3 × 1.1", "0.9³"], answer: 0, explanation: "Each increase is × 1.1, so three give 1.1³ = 1.331." },
            { type: "numeric", difficulty: "medium", q: "£100 increases by 10%, then increases by 10% again. Final amount (£)?", answer: "121", explanation: "100 × 1.1 × 1.1 = 121." },
            { type: "tf", difficulty: "medium", q: "Two successive 10% increases give the same result as one 20% increase.", answer: false, explanation: "1.1 × 1.1 = 1.21 (a 21% rise), not 20%." },
            { type: "numeric", difficulty: "medium", q: "£500 decreases by 20% then by a further 20%. What is the final amount (£)?", answer: "320", explanation: "500 × 0.8 × 0.8 = 320." },
            { type: "mcq", difficulty: "medium", q: "An investment grows at 5% per year. After 2 years, £200 becomes:", options: ["£220", "£210", "£220.50", "£221"], answer: 2, explanation: "200 × 1.05² = 200 × 1.1025 = £220.50." },
            { type: "numeric", difficulty: "medium", q: "A price is reduced by 10% three times in a row starting from £1000. What is the final price (£)? Round to nearest whole number.", answer: "729", explanation: "1000 × 0.9³ = 1000 × 0.729 = 729." },
            { type: "tf", difficulty: "medium", q: "A 20% increase followed by a 20% decrease returns to the original value.", answer: false, explanation: "100 × 1.2 × 0.8 = 96, not 100." },
            { type: "mcq", difficulty: "hard", q: "A car worth £10 000 depreciates by 15% each year. After 2 years it is worth approximately:", options: ["£7225", "£7000", "£8500", "£7250"], answer: 0, explanation: "10000 × 0.85² = 10000 × 0.7225 = £7225." },
            { type: "numeric", difficulty: "hard", q: "£200 increases by 50% then decreases by 50%. What is the final amount (£)?", answer: "150", explanation: "200 × 1.5 × 0.5 = 150." },
            { type: "short", difficulty: "hard", q: "Explain why a 25% increase followed by a 20% decrease does NOT return you to the original value.", answer: "The 20% decrease applies to the larger increased amount, so the reduction is larger than the original increase. e.g. 100 → 125 → 100 only if the decrease is exactly 20% of 125 = 25, so it does return to 100 in this special case. In general, the multipliers multiply: 1.25 × 0.8 = 1.00, so actually this pair does return to original.", explanation: "Always multiply the chain of multipliers to check. 1.25 × 0.8 = 1.00 exactly." },
            { type: "numeric", difficulty: "hard", q: "A population of 8000 grows by 10% one year and 5% the next. What is the population after 2 years?", answer: "9240", explanation: "8000 × 1.1 × 1.05 = 8000 × 1.155 = 9240." }
          ] },
        { text: "Calculate percentage error.",
          resources: [
            { type: "interactive", title: "Percentage Error", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-error.html", note: "How far a measurement is from the true value." },
            { type: "interactive", title: "Percent error", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 8)", note: "Percentage increase/decrease and applications are covered in the Cambridge Stage 8 'Percentages' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Percentage error uses the true (accepted) value as the denominator.", answer: true, explanation: "% error = |measured − true| ÷ true × 100." },
            { type: "mcq", difficulty: "easy", q: "Percentage error measures:", options: ["how large a number is", "how far a measurement is from the true value, as a %", "the average", "the range"], answer: 1, explanation: "It expresses the error as a percentage of the true value." },
            { type: "numeric", difficulty: "easy", q: "True value 100, measured 95. What is the percentage error? (number only)", answer: "5", explanation: "|100 − 95| = 5; 5 ÷ 100 × 100 = 5%." },
            { type: "numeric", difficulty: "medium", q: "True value 50, measured 45. Percent error = |error| ÷ true × 100. What is it? (number only)", answer: "10", explanation: "|50 − 45| = 5; 5 ÷ 50 × 100 = 10%." },
            { type: "numeric", difficulty: "medium", q: "True value 200 g, measured value 190 g. What is the percentage error? (number only)", answer: "5", explanation: "10 ÷ 200 × 100 = 5%." },
            { type: "mcq", difficulty: "medium", q: "True length 40 m, measured 44 m. The percentage error is:", options: ["10%", "9.1%", "4%", "1%"], answer: 0, explanation: "|44 − 40| = 4; 4 ÷ 40 × 100 = 10%." },
            { type: "tf", difficulty: "medium", q: "Percentage error is always a positive value because we use the absolute difference.", answer: true, explanation: "We take |measured − true|, so it is never negative." },
            { type: "numeric", difficulty: "medium", q: "A student predicts 60 but the answer is 75. What is the percentage error? (number only)", answer: "20", explanation: "|75 − 60| = 15; 15 ÷ 75 × 100 = 20%." },
            { type: "mcq", difficulty: "hard", q: "True value 8 cm, measured 8.4 cm. The percentage error is:", options: ["5%", "4.76%", "0.5%", "8%"], answer: 0, explanation: "0.4 ÷ 8 × 100 = 5%." },
            { type: "numeric", difficulty: "hard", q: "A scale shows 26.5 kg but the true mass is 25 kg. What is the percentage error? (number only)", answer: "6", explanation: "1.5 ÷ 25 × 100 = 6%." },
            { type: "short", difficulty: "hard", q: "Why do we divide by the true value and not the measured value when calculating percentage error?", answer: "Because the true value is the standard we are comparing against; using the measured value would give a different (less meaningful) answer.", explanation: "Percentage error is always relative to the accepted true value." },
            { type: "mcq", difficulty: "hard", q: "True volume is 500 mL, measured as 480 mL. Percentage error is:", options: ["4%", "4.17%", "2%", "20%"], answer: 0, explanation: "20 ÷ 500 × 100 = 4%." }
          ] },
        { text: "Apply percentages to real-life situations.",
          resources: [
            { type: "interactive", title: "Percentages", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Percentages in real situations." },
            { type: "interactive", title: "Percentage word problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Apply to contexts." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Percentages (Stage 8)", note: "Percentage increase/decrease and applications are covered in the Cambridge Stage 8 'Percentages' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "VAT (Value Added Tax) is an example of a percentage applied in real life.", answer: true, explanation: "VAT adds a fixed percentage to the price of goods." },
            { type: "mcq", difficulty: "easy", q: "A shop offers 10% discount on a £50 item. The discount amount is:", options: ["£5", "£10", "£45", "£4"], answer: 0, explanation: "10% of £50 = £5." },
            { type: "numeric", difficulty: "easy", q: "A meal costs £40 before a 10% service charge. What is the total (£)?", answer: "44", explanation: "40 × 1.1 = 44." },
            { type: "numeric", difficulty: "medium", q: "A £200 item has 15% VAT added. What is the total price (£)?", answer: "230", explanation: "15% of 200 = 30, and 200 + 30 = £230." },
            { type: "numeric", difficulty: "medium", q: "A car is £12 000 before 20% tax. What is the price after tax (£)?", answer: "14400", explanation: "12000 × 1.2 = 14400." },
            { type: "mcq", difficulty: "medium", q: "A bank pays 3% interest per year on £1000. After one year the account holds:", options: ["£1003", "£1030", "£1300", "£1003.30"], answer: 1, explanation: "1000 × 1.03 = £1030." },
            { type: "numeric", difficulty: "medium", q: "A student scores 36 out of 48 on a test. What is the percentage score? (number only)", answer: "75", explanation: "36 ÷ 48 × 100 = 75%." },
            { type: "mcq", difficulty: "medium", q: "A train ticket is £60. A railcard gives 30% off. The ticket costs:", options: ["£42", "£18", "£30", "£48"], answer: 0, explanation: "60 × 0.7 = £42." },
            { type: "short", difficulty: "hard", q: "A shop offers 20% off, then 10% off the reduced price. Using £100 as the start, explain why this is not the same as 30% off.", answer: "20% off £100 = £80; 10% off £80 = £72. A single 30% discount would give £70. Successive discounts multiply (0.8 × 0.9 = 0.72), they don't add to 30%.", explanation: "Multipliers combine by multiplying, not adding." },
            { type: "numeric", difficulty: "hard", q: "A flat is worth £180 000. After 5% stamp duty, how much is paid in stamp duty (£)?", answer: "9000", explanation: "5% of 180 000 = 9000." },
            { type: "mcq", difficulty: "hard", q: "A worker earns £800 per week. Income tax of 20% is deducted. The take-home pay is:", options: ["£640", "£160", "£960", "£600"], answer: 0, explanation: "800 × 0.8 = £640." },
            { type: "numeric", difficulty: "hard", q: "Savings of £2000 earn 4% interest compounded for 2 years. What is the total amount after 2 years (£)?", answer: "2163.2", explanation: "2000 × 1.04² = 2000 × 1.0816 = 2163.20." }
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
            { type: "interactive", title: "Number sets", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Rational vs irrational." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers, powers and roots (Stage 8)", note: "The number system, integers, powers and roots are covered in the Cambridge Stage 8 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Every integer is a rational number.", answer: true, explanation: "Any integer n can be written as n/1." },
            { type: "tf", difficulty: "easy", q: "The natural numbers are 1, 2, 3, 4, … (positive counting numbers).", answer: true, explanation: "Natural numbers are the positive counting numbers." },
            { type: "mcq", difficulty: "easy", q: "Which set includes negative whole numbers?", options: ["Natural numbers", "Whole numbers", "Integers", "Irrational numbers"], answer: 2, explanation: "Integers include …−2, −1, 0, 1, 2, … — positive and negative whole numbers and zero." },
            { type: "mcq", difficulty: "medium", q: "Which number is irrational?", options: ["0.5", "√2", "3/4", "−7"], answer: 1, explanation: "√2 cannot be written as a fraction; its decimal never repeats." },
            { type: "mcq", difficulty: "medium", q: "Which of these is a rational number?", options: ["π", "√5", "0.333…", "√7"], answer: 2, explanation: "0.333… = 1/3, which is rational." },
            { type: "tf", difficulty: "medium", q: "0 is a whole number but NOT a natural number.", answer: true, explanation: "Whole numbers include 0; natural numbers (counting numbers) start at 1." },
            { type: "mcq", difficulty: "medium", q: "Which set of numbers contains ALL of the others?", options: ["Natural numbers", "Integers", "Whole numbers", "Real numbers"], answer: 3, explanation: "Real numbers contain all rationals and irrationals, including all subsets listed." },
            { type: "mcq", difficulty: "medium", q: "−3/5 belongs to which set?", options: ["Natural numbers", "Integers", "Rational numbers", "Irrational numbers"], answer: 2, explanation: "It is a ratio p/q with p and q integers, so it is rational." },
            { type: "tf", difficulty: "medium", q: "Every rational number is also a real number.", answer: true, explanation: "Real numbers include all rationals and irrationals." },
            { type: "mcq", difficulty: "hard", q: "Which number belongs to BOTH rational and integer sets?", options: ["2.5", "−4", "√3", "π"], answer: 1, explanation: "−4 is an integer and can be written as −4/1 (rational)." },
            { type: "short", difficulty: "hard", q: "List the sets of numbers that the value −6 belongs to, from most specific to most general.", answer: "Integer → Rational → Real (it is not natural or whole).", explanation: "−6 is a negative integer, hence rational and real, but not natural or whole." },
            { type: "mcq", difficulty: "hard", q: "A recurring decimal like 0.272727… is:", options: ["irrational", "rational", "an integer", "natural"], answer: 1, explanation: "Recurring decimals can be written as fractions (e.g. 27/99 = 3/11), so they are rational." }
          ] },
        { text: "Use the p/q definition of a rational number.",
          resources: [
            { type: "interactive", title: "Rational Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/rational-numbers.html", note: "Numbers as a ratio of integers." },
            { type: "interactive", title: "Rational numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "The p/q form." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers, powers and roots (Stage 8)", note: "The number system, integers, powers and roots are covered in the Cambridge Stage 8 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In p/q, q must not equal zero.", answer: true, explanation: "Division by zero is undefined, so q ≠ 0 is part of the definition." },
            { type: "mcq", difficulty: "easy", q: "Which fraction is in simplest form (p and q have no common factor)?", options: ["4/8", "3/9", "5/7", "6/4"], answer: 2, explanation: "5 and 7 share no common factor, so 5/7 is already in simplest form." },
            { type: "mcq", difficulty: "medium", q: "A rational number can always be written as:", options: ["a whole number", "p/q where p and q are integers and q ≠ 0", "a decimal that never ends", "a surd"], answer: 1, explanation: "That is the definition of a rational number." },
            { type: "numeric", difficulty: "medium", q: "Write 0.25 as a fraction p/q in simplest form. What is q (the denominator)?", answer: "4", explanation: "0.25 = 1/4, so q = 4." },
            { type: "numeric", difficulty: "medium", q: "Write 0.6 as a fraction p/q in lowest terms. What is p (the numerator)?", answer: "3", explanation: "0.6 = 6/10 = 3/5, so p = 3." },
            { type: "mcq", difficulty: "medium", q: "Which of the following is NOT a rational number?", options: ["7/2", "−5/3", "0.75", "√11"], answer: 3, explanation: "√11 cannot be expressed as p/q with integer p and q." },
            { type: "tf", difficulty: "medium", q: "Every terminating decimal is a rational number.", answer: true, explanation: "Terminating decimals can always be written as fractions with a power of 10 denominator." },
            { type: "numeric", difficulty: "medium", q: "Express 1.5 as a fraction p/q in simplest form. What is the denominator q?", answer: "2", explanation: "1.5 = 3/2, so q = 2." },
            { type: "mcq", difficulty: "medium", q: "Which fraction is equivalent to 0.4?", options: ["2/5", "4/5", "4/10 only", "1/4"], answer: 0, explanation: "0.4 = 4/10 = 2/5." },
            { type: "tf", difficulty: "hard", q: "The fraction 22/7 is rational even though it is used as an approximation for π.", answer: true, explanation: "22/7 is p/q with integers, so it is rational; π itself is irrational." },
            { type: "short", difficulty: "hard", q: "Explain why every integer is a rational number using the p/q definition.", answer: "Any integer n can be written as n/1, where both n and 1 are integers and 1 ≠ 0, satisfying the p/q definition.", explanation: "Setting q = 1 converts any integer to rational form." },
            { type: "mcq", difficulty: "hard", q: "Which value has p = 7 and q = 3 in simplest form?", options: ["7/3", "3/7", "21/9", "14/6"], answer: 0, explanation: "7/3 is already in simplest form with p = 7 and q = 3." }
          ] },
        { text: "Recognise and describe irrational numbers.",
          resources: [
            { type: "interactive", title: "Irrational Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/irrational-numbers.html", note: "Non-repeating, non-terminating decimals." },
            { type: "interactive", title: "Irrational numbers", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Examples and properties." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers, powers and roots (Stage 8)", note: "The number system, integers, powers and roots are covered in the Cambridge Stage 8 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "An irrational number has a decimal that goes on forever without repeating.", answer: true, explanation: "That is what makes it irrational." },
            { type: "tf", difficulty: "easy", q: "√4 is an irrational number.", answer: false, explanation: "√4 = 2, which is a whole number (rational)." },
            { type: "mcq", difficulty: "easy", q: "Which number is irrational?", options: ["1/3", "0.5", "√5", "−2"], answer: 2, explanation: "√5 ≈ 2.2360679… — it does not terminate or repeat." },
            { type: "mcq", difficulty: "medium", q: "Which of these is NOT irrational?", options: ["π", "√3", "√9", "√5"], answer: 2, explanation: "√9 = 3, which is rational; the others are irrational." },
            { type: "mcq", difficulty: "medium", q: "Which is irrational?", options: ["0.1212…", "√2", "4/7", "0.875"], answer: 1, explanation: "√2 is the classic irrational; the others can be written as fractions." },
            { type: "tf", difficulty: "medium", q: "The sum of two irrational numbers is always irrational.", answer: false, explanation: "Counterexample: √2 + (−√2) = 0, which is rational." },
            { type: "mcq", difficulty: "medium", q: "Between 1 and 2, which is irrational?", options: ["1.5", "4/3", "√2", "1.75"], answer: 2, explanation: "√2 ≈ 1.4142… is irrational; the others are terminating or repeating decimals." },
            { type: "tf", difficulty: "medium", q: "π is approximately 3.14 but its exact decimal expansion never terminates.", answer: true, explanation: "π is irrational; 3.14 is only an approximation." },
            { type: "numeric", difficulty: "medium", q: "Which whole number is closest to √7? Give the whole number.", answer: "3", explanation: "√9 = 3 and √4 = 2; √7 ≈ 2.646, so the nearest whole number is 3." },
            { type: "mcq", difficulty: "hard", q: "Which expression is irrational?", options: ["√4 × √9", "√2 × √8", "√3 + √3", "√3 × √12"], answer: 2, explanation: "√2 × √8 = √16 = 4 (rational); √4 × √9 = 6 (rational); √3 × √12 = 6 (rational); but 2√3 is irrational." },
            { type: "short", difficulty: "hard", q: "Give one example of an irrational number between 2 and 3, and explain why it is irrational.", answer: "√5 ≈ 2.236… It is irrational because its decimal expansion never terminates or repeats.", explanation: "Any square root of a non-perfect-square between 4 and 9 works." },
            { type: "tf", difficulty: "hard", q: "√2 × √2 is irrational.", answer: false, explanation: "√2 × √2 = 2, which is rational." }
          ] },
        { text: "Begin working with surds.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Simplifying roots and surds." },
            { type: "interactive", title: "Square roots", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Simplifying roots." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers, powers and roots (Stage 8)", note: "The number system, integers, powers and roots are covered in the Cambridge Stage 8 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A surd is an irrational root that cannot be simplified to a whole number.", answer: true, explanation: "e.g. √2, √3, √5 are surds; √4 = 2 is not." },
            { type: "mcq", difficulty: "easy", q: "Which of these is a surd?", options: ["√9", "√16", "√3", "√25"], answer: 2, explanation: "√9 = 3, √16 = 4, √25 = 5 — all rational. √3 ≈ 1.732… is a surd." },
            { type: "mcq", difficulty: "medium", q: "Which is a surd (cannot be simplified to a rational number)?", options: ["√4", "√16", "√7", "√25"], answer: 2, explanation: "√4, √16, √25 are whole numbers; √7 is a surd." },
            { type: "mcq", difficulty: "medium", q: "√18 simplified is:", options: ["3√2", "2√3", "9√2", "6√3"], answer: 0, explanation: "√18 = √9 × √2 = 3√2." },
            { type: "mcq", difficulty: "medium", q: "√20 simplified is:", options: ["2√5", "4√5", "5√2", "2√10"], answer: 0, explanation: "√20 = √4 × √5 = 2√5." },
            { type: "mcq", difficulty: "hard", q: "√12 simplified is:", options: ["2√3", "3√2", "4√3", "6"], answer: 0, explanation: "√12 = √4 × √3 = 2√3." },
            { type: "mcq", difficulty: "medium", q: "√50 simplified is:", options: ["5√2", "10√5", "25√2", "2√5"], answer: 0, explanation: "√50 = √25 × √2 = 5√2." },
            { type: "tf", difficulty: "medium", q: "√8 = 2√2.", answer: true, explanation: "√8 = √4 × √2 = 2√2." },
            { type: "mcq", difficulty: "hard", q: "2√3 × 3√3 = ?", options: ["18", "6√9", "6√3", "5√3"], answer: 0, explanation: "2 × 3 = 6 and √3 × √3 = 3, so 6 × 3 = 18." },
            { type: "mcq", difficulty: "hard", q: "√75 simplified is:", options: ["5√3", "3√5", "25√3", "15√3"], answer: 0, explanation: "√75 = √25 × √3 = 5√3." },
            { type: "short", difficulty: "hard", q: "Explain how you simplify √48.", answer: "Find the largest perfect-square factor: 48 = 16 × 3. So √48 = √16 × √3 = 4√3.", explanation: "Look for the largest perfect-square that divides the number under the root." },
            { type: "numeric", difficulty: "hard", q: "If √n = 3√5, what is n?", answer: "45", explanation: "n = (3)² × 5 = 9 × 5 = 45." }
          ] },
        { text: "Understand π and its approximation 22/7.",
          resources: [
            { type: "interactive", title: "Pi", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/pi.html", note: "What π is and common approximations." },
            { type: "interactive", title: "Circles & π", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "π in circle formulas." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers, powers and roots (Stage 8)", note: "The number system, integers, powers and roots are covered in the Cambridge Stage 8 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "22/7 is an exact value of π.", answer: false, explanation: "22/7 is only an approximation; π is irrational." },
            { type: "tf", difficulty: "easy", q: "π is approximately equal to 3.14159.", answer: true, explanation: "π ≈ 3.14159 is a common approximation." },
            { type: "mcq", difficulty: "easy", q: "π is best described as:", options: ["exactly 3.14", "exactly 22/7", "an irrational number ≈ 3.14159", "a whole number"], answer: 2, explanation: "π is irrational and approximately 3.14159." },
            { type: "mcq", difficulty: "easy", q: "The circumference of a circle is given by:", options: ["πr²", "2πr", "πd²", "2πr²"], answer: 1, explanation: "C = 2πr (or πd)." },
            { type: "numeric", difficulty: "medium", q: "Using π ≈ 3.14, find the circumference of a circle with radius 5 cm. Give your answer to 1 dp.", answer: "31.4", explanation: "C = 2 × 3.14 × 5 = 31.4 cm." },
            { type: "mcq", difficulty: "medium", q: "Using π ≈ 22/7, the area of a circle with radius 7 cm is approximately:", options: ["154 cm²", "44 cm²", "22 cm²", "154 m²"], answer: 0, explanation: "A = π × 7² ≈ 22/7 × 49 = 154 cm²." },
            { type: "tf", difficulty: "medium", q: "π is a rational number because it can be approximated by 22/7.", answer: false, explanation: "An approximation doesn't make a number rational; π is truly irrational." },
            { type: "numeric", difficulty: "medium", q: "Using π ≈ 3.14, find the area of a circle with radius 10 cm (cm²).", answer: "314", explanation: "A = 3.14 × 10² = 314 cm²." },
            { type: "mcq", difficulty: "hard", q: "The decimal expansion of π:", options: ["terminates", "repeats with period 6", "never terminates or repeats", "is exactly 3.14159265"], answer: 2, explanation: "π is irrational; its decimal never ends or repeats." },
            { type: "numeric", difficulty: "hard", q: "A circle has diameter 14 cm. Using π ≈ 22/7, find its circumference (cm).", answer: "44", explanation: "C = π × d ≈ 22/7 × 14 = 44 cm." },
            { type: "short", difficulty: "hard", q: "Why is 22/7 not the exact value of π, and why is it still useful?", answer: "22/7 is rational but π is irrational; they differ from the fourth decimal place. 22/7 is useful because it is easy to calculate with and gives answers accurate enough for most practical purposes.", explanation: "22/7 ≈ 3.142857… ; π ≈ 3.141593… — they differ by about 0.04%." },
            { type: "mcq", difficulty: "hard", q: "Which statement about π is true?", options: ["π = 22/7 exactly", "π is rational", "π lies between 3 and 4", "π = 3.14 exactly"], answer: 2, explanation: "π ≈ 3.14159, which is between 3 and 4." }
          ] },
        { text: "Add, subtract, multiply and divide rational numbers.",
          resources: [
            { type: "interactive", title: "Rational number operations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "All four operations." },
            { type: "interactive", title: "Rational Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/rational-numbers.html", note: "Operations with rational numbers." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Integers, powers and roots (Stage 8)", note: "The number system, integers, powers and roots are covered in the Cambridge Stage 8 number units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To add fractions with the same denominator, you add the numerators and keep the denominator.", answer: true, explanation: "e.g. 1/5 + 2/5 = 3/5." },
            { type: "numeric", difficulty: "easy", q: "Work out 1/4 + 2/4. Give your answer as a decimal.", answer: "0.75", explanation: "3/4 = 0.75." },
            { type: "numeric", difficulty: "easy", q: "Work out 3/5 − 1/5. Give your answer as a decimal.", answer: "0.4", explanation: "2/5 = 0.4." },
            { type: "numeric", difficulty: "medium", q: "Work out −3/4 + 1/4. Give your answer as a decimal.", answer: "-0.5", explanation: "−3/4 + 1/4 = −2/4 = −1/2 = −0.5." },
            { type: "numeric", difficulty: "medium", q: "Work out 2/3 × 3/4. Give your answer as a decimal.", answer: "0.5", explanation: "2/3 × 3/4 = 6/12 = 1/2 = 0.5." },
            { type: "numeric", difficulty: "medium", q: "Work out 1/2 + 1/3. Give your answer as a decimal (to 2 dp).", answer: "0.83", explanation: "1/2 + 1/3 = 3/6 + 2/6 = 5/6 ≈ 0.83." },
            { type: "numeric", difficulty: "medium", q: "Work out 3/4 ÷ 1/2. Give your answer as a decimal.", answer: "1.5", explanation: "3/4 × 2/1 = 6/4 = 3/2 = 1.5." },
            { type: "mcq", difficulty: "medium", q: "Work out (−2) × (3/4).", options: ["−1.5", "1.5", "−0.5", "−3/8"], answer: 0, explanation: "−2 × 3/4 = −6/4 = −1.5." },
            { type: "numeric", difficulty: "medium", q: "Work out 5/6 − 1/3. Give the answer as a decimal (to 2 dp).", answer: "0.5", explanation: "5/6 − 2/6 = 3/6 = 1/2 = 0.5." },
            { type: "mcq", difficulty: "hard", q: "Work out (−3/5) ÷ (−3/10).", options: ["2", "1/2", "9/50", "−2"], answer: 0, explanation: "(−3/5) × (−10/3) = 30/15 = 2." },
            { type: "numeric", difficulty: "hard", q: "Work out (2/3)² as a decimal (to 2 dp).", answer: "0.44", explanation: "4/9 ≈ 0.44." },
            { type: "short", difficulty: "hard", q: "Explain how to add 1/3 and 1/4, showing your working.", answer: "LCM of 3 and 4 is 12. 1/3 = 4/12, 1/4 = 3/12. Sum = 7/12.", explanation: "Find a common denominator then add the numerators." }
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
            { type: "interactive", title: "Ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Part-to-whole from a ratio." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The ratio 2:3 can be written as the fraction 2/3.", answer: true, explanation: "A ratio a:b can be expressed as the fraction a/b (part to part) or a/(a+b) (part to whole)." },
            { type: "mcq", difficulty: "easy", q: "The ratio 3:4 as a fraction (first part of the total) is:", options: ["3/4", "3/7", "4/7", "7/3"], answer: 1, explanation: "Total = 7 parts, so the first is 3/7." },
            { type: "numeric", difficulty: "easy", q: "In the ratio 1:3, the first part is what fraction of the total? Give your answer as a decimal.", answer: "0.25", explanation: "Total = 4; first part = 1/4 = 0.25." },
            { type: "mcq", difficulty: "easy", q: "In a class of 30 students the ratio of boys to girls is 2:3. How many girls are there?", options: ["18", "12", "15", "20"], answer: 0, explanation: "Girls = 3/5 × 30 = 18." },
            { type: "numeric", difficulty: "medium", q: "The ratio of red to blue sweets is 3:5. There are 24 red sweets. How many blue sweets are there?", answer: "40", explanation: "Blue = 5/3 × 24 = 40." },
            { type: "mcq", difficulty: "medium", q: "Divide £40 in the ratio 3:5. The smaller share is:", options: ["£15", "£25", "£12", "£20"], answer: 0, explanation: "Total parts = 8; smaller share = 3/8 × 40 = £15." },
            { type: "numeric", difficulty: "medium", q: "Share 56 kg in the ratio 1:6. What is the larger share (kg)?", answer: "48", explanation: "Total parts = 7; larger share = 6/7 × 56 = 48 kg." },
            { type: "tf", difficulty: "medium", q: "The ratio 5:2 written as a fraction 5/2 represents 5 parts per every 2 parts.", answer: true, explanation: "That is the part-to-part meaning of the ratio." },
            { type: "numeric", difficulty: "medium", q: "A recipe uses flour and sugar in the ratio 4:1. For 500 g flour, how much sugar (g)?", answer: "125", explanation: "Sugar = 1/4 × 500 = 125 g." },
            { type: "mcq", difficulty: "hard", q: "The ratio of length to width of a rectangle is 5:2. The perimeter is 42 cm. The length is:", options: ["15 cm", "6 cm", "10 cm", "14 cm"], answer: 0, explanation: "Let sides be 5k and 2k; 2(5k+2k)=42 → 14k=42 → k=3 → length=15 cm." },
            { type: "short", difficulty: "hard", q: "Three people share a prize of £630 in the ratio 2:3:4. How much does each person get?", answer: "Total parts = 9; each part = £70. Shares: £140, £210, £280.", explanation: "Divide the total by the sum of ratio parts to find one part, then multiply." },
            { type: "numeric", difficulty: "hard", q: "Paint is mixed red:white = 2:7. To make 27 litres, how many litres of red are needed?", answer: "6", explanation: "Total parts = 9; red = 2/9 × 27 = 6 litres." }
          ] },
        { text: "Simplify ratios.",
          resources: [
            { type: "interactive", title: "Simplifying ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Divide by the common factor." },
            { type: "interactive", title: "Khan Academy: Simplifying ratios", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice simplifying ratios." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To simplify a ratio, divide both parts by their highest common factor.", answer: true, explanation: "Dividing by the HCF gives the simplest form." },
            { type: "mcq", difficulty: "easy", q: "Simplify 15:25.", options: ["3:5", "5:3", "1:2", "15:25"], answer: 0, explanation: "Divide both by 5: 15:25 = 3:5." },
            { type: "mcq", difficulty: "easy", q: "Simplify 10:4.", options: ["5:2", "2:5", "4:10", "1:4"], answer: 0, explanation: "Divide both by 2: 10:4 = 5:2." },
            { type: "numeric", difficulty: "medium", q: "Simplify 12:8 to the form 3:n. What is n?", answer: "2", explanation: "Divide both by 4: 12:8 = 3:2, so n = 2." },
            { type: "mcq", difficulty: "medium", q: "Simplify 18:24.", options: ["3:4", "6:8", "9:12", "2:3"], answer: 0, explanation: "HCF of 18 and 24 is 6: 18:24 = 3:4." },
            { type: "numeric", difficulty: "medium", q: "Simplify 35:21 to the form 5:n. What is n?", answer: "3", explanation: "Divide both by 7: 35:21 = 5:3, so n = 3." },
            { type: "mcq", difficulty: "medium", q: "Which ratio is equivalent to 4:6?", options: ["2:3", "3:2", "4:3", "1:3"], answer: 0, explanation: "Divide both by 2: 4:6 = 2:3." },
            { type: "tf", difficulty: "medium", q: "6:9 and 2:3 are equivalent ratios.", answer: true, explanation: "6:9 ÷ 3 = 2:3." },
            { type: "mcq", difficulty: "medium", q: "Simplify 100:75.", options: ["4:3", "3:4", "20:15", "5:4"], answer: 0, explanation: "HCF 25: 100:75 = 4:3." },
            { type: "numeric", difficulty: "hard", q: "Simplify 0.6:0.9 to the form 1:n as a decimal. What is n?", answer: "1.5", explanation: "0.6:0.9 ÷ 0.6 = 1:1.5." },
            { type: "short", difficulty: "hard", q: "Show that 56:42 simplifies to 4:3.", answer: "HCF of 56 and 42 is 14. 56 ÷ 14 = 4, 42 ÷ 14 = 3. So 56:42 = 4:3.", explanation: "Divide both by 14." },
            { type: "mcq", difficulty: "hard", q: "Three lengths are in the ratio 2:3:5. If the total is 120 m, the longest length is:", options: ["60 m", "40 m", "30 m", "50 m"], answer: 0, explanation: "Total parts = 10; longest = 5/10 × 120 = 60 m." }
          ] },
        { text: "Solve proportions.",
          resources: [
            { type: "interactive", title: "Proportions", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/proportions.html", note: "Cross-multiplying to solve." },
            { type: "interactive", title: "Solving proportions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In a proportion a/b = c/d, the cross-products are equal: a × d = b × c.", answer: true, explanation: "Cross-multiplication is the key technique for solving proportions." },
            { type: "mcq", difficulty: "easy", q: "If 5/10 = x/20, then x is:", options: ["10", "5", "15", "4"], answer: 0, explanation: "5/10 = 1/2, so x/20 = 1/2 → x = 10." },
            { type: "numeric", difficulty: "easy", q: "If 2 pens cost £3, how much do 6 pens cost (£)?", answer: "9", explanation: "6 pens is 3 times as many, so 3 × £3 = £9." },
            { type: "numeric", difficulty: "medium", q: "Solve 3/4 = x/12. What is x?", answer: "9", explanation: "12 ÷ 4 = 3, so x = 3 × 3 = 9." },
            { type: "numeric", difficulty: "medium", q: "Solve 5/8 = 15/x. What is x?", answer: "24", explanation: "Cross-multiply: 5x = 120 → x = 24." },
            { type: "mcq", difficulty: "medium", q: "If 4 boxes weigh 20 kg, how many boxes weigh 35 kg?", options: ["7", "9", "6", "8"], answer: 0, explanation: "Weight per box = 5 kg; 35 ÷ 5 = 7 boxes." },
            { type: "numeric", difficulty: "medium", q: "A map scale is 1:50 000. A road is 3 cm on the map. How long is the real road (km)?", answer: "1.5", explanation: "3 × 50 000 = 150 000 cm = 1.5 km." },
            { type: "mcq", difficulty: "medium", q: "Solve 7/x = 14/10.", options: ["5", "20", "4", "7"], answer: 0, explanation: "Cross-multiply: 70 = 14x → x = 5." },
            { type: "numeric", difficulty: "medium", q: "If 9 workers earn £540, how much do 6 workers earn (£)?", answer: "360", explanation: "Per worker: 540 ÷ 9 = £60; 6 × 60 = £360." },
            { type: "mcq", difficulty: "hard", q: "A recipe for 4 people needs 300 g flour. How much flour (g) for 10 people?", options: ["750", "600", "900", "1200"], answer: 0, explanation: "300 ÷ 4 × 10 = 750 g." },
            { type: "short", difficulty: "hard", q: "Solve 2/(x+1) = 4/10 by cross-multiplication.", answer: "Cross-multiply: 20 = 4(x+1) → 20 = 4x + 4 → x = 4.", explanation: "Cross-multiply then solve the resulting equation." },
            { type: "numeric", difficulty: "hard", q: "In a class of 35, the ratio of boys to girls is 3:4. How many boys are there?", answer: "15", explanation: "Total parts = 7; boys = 3/7 × 35 = 15." }
          ] },
        { text: "Recognise and use direct proportion.",
          resources: [
            { type: "interactive", title: "Direct Proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "When one quantity scales with another." },
            { type: "interactive", title: "Proportional relationships", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Direct proportion practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In direct proportion, if one quantity doubles, the other doubles.", answer: true, explanation: "Both change by the same factor." },
            { type: "mcq", difficulty: "easy", q: "Which table shows direct proportion?", options: ["x: 1,2,3; y: 3,6,9", "x: 1,2,3; y: 3,5,7", "x: 1,2,3; y: 6,3,2", "x: 1,2,3; y: 1,3,9"], answer: 0, explanation: "y = 3x gives 3,6,9 — y/x is constant (3), so it is direct proportion." },
            { type: "numeric", difficulty: "easy", q: "y is directly proportional to x. When x = 3, y = 12. Find k (the constant of proportionality).", answer: "4", explanation: "k = 12 ÷ 3 = 4." },
            { type: "numeric", difficulty: "medium", q: "y is directly proportional to x. When x = 2, y = 10. Find y when x = 5.", answer: "25", explanation: "k = 10 ÷ 2 = 5, so y = 5 × 5 = 25." },
            { type: "mcq", difficulty: "medium", q: "If y ∝ x and y = 9 when x = 3, find y when x = 7.", options: ["21", "3", "63", "14"], answer: 0, explanation: "k = 3; y = 3 × 7 = 21." },
            { type: "tf", difficulty: "medium", q: "In a directly proportional relationship, the graph is a straight line through the origin.", answer: true, explanation: "y = kx is a straight line through (0, 0)." },
            { type: "numeric", difficulty: "medium", q: "Fuel used is directly proportional to distance. 300 km uses 25 litres. How many litres for 120 km?", answer: "10", explanation: "k = 25/300; litres = 25/300 × 120 = 10." },
            { type: "mcq", difficulty: "medium", q: "y ∝ x. When x doubles, y:", options: ["doubles", "halves", "triples", "stays the same"], answer: 0, explanation: "Direct proportion means y and x scale together." },
            { type: "numeric", difficulty: "medium", q: "y is directly proportional to x. y = 18 when x = 6. Find x when y = 27.", answer: "9", explanation: "k = 3; x = 27 ÷ 3 = 9." },
            { type: "mcq", difficulty: "hard", q: "If y ∝ x and the graph passes through (4, 20), find y when x = 9.", options: ["45", "36", "25", "18"], answer: 0, explanation: "k = 20 ÷ 4 = 5; y = 5 × 9 = 45." },
            { type: "short", difficulty: "hard", q: "Distinguish between direct proportion and a linear relationship that doesn't start at the origin (e.g. y = 3x + 2).", answer: "Direct proportion (y = kx) passes through the origin; y = 3x + 2 is linear but starts at y = 2 when x = 0, so it is NOT direct proportion.", explanation: "Direct proportion requires a zero intercept." },
            { type: "numeric", difficulty: "hard", q: "The cost C is directly proportional to the number of items n. When n = 15, C = 60. Find C when n = 22.", answer: "88", explanation: "k = 60/15 = 4; C = 4 × 22 = 88." }
          ] },
        { text: "Express proportion as variation (y = kx).",
          resources: [
            { type: "interactive", title: "Proportional variation", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "The constant of variation." },
            { type: "interactive", title: "Constant of proportionality", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Finding k." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In y = kx, the constant k is called the constant of proportionality.", answer: true, explanation: "k links y to x in a proportional relationship." },
            { type: "numeric", difficulty: "easy", q: "Using y = kx with k = 4, find y when x = 7.", answer: "28", explanation: "y = 4 × 7 = 28." },
            { type: "numeric", difficulty: "easy", q: "Using y = kx with k = 3, find y when x = 9.", answer: "27", explanation: "y = 3 × 9 = 27." },
            { type: "mcq", difficulty: "medium", q: "If y ∝ x and y = 12 when x = 3, the constant of proportionality k is:", options: ["4", "9", "36", "15"], answer: 0, explanation: "k = y ÷ x = 12 ÷ 3 = 4." },
            { type: "numeric", difficulty: "medium", q: "Find k if y = 35 when x = 5.", answer: "7", explanation: "k = 35 ÷ 5 = 7." },
            { type: "mcq", difficulty: "medium", q: "The equation y = kx with k = 2.5 gives y when x = 8 as:", options: ["20", "2.5", "3.2", "10"], answer: 0, explanation: "2.5 × 8 = 20." },
            { type: "numeric", difficulty: "medium", q: "k = 0.5 in y = kx. Find y when x = 14.", answer: "7", explanation: "0.5 × 14 = 7." },
            { type: "tf", difficulty: "medium", q: "If k is negative in y = kx, as x increases y decreases.", answer: true, explanation: "A negative k means y and x move in opposite directions." },
            { type: "mcq", difficulty: "medium", q: "Which equation matches 'y is directly proportional to x, with k = 6'?", options: ["y = 6x", "y = x + 6", "y = 6/x", "y = x/6"], answer: 0, explanation: "Direct proportion: y = kx = 6x." },
            { type: "numeric", difficulty: "hard", q: "y = kx. The graph passes through (8, 12). Find k as a decimal.", answer: "1.5", explanation: "k = 12 ÷ 8 = 1.5." },
            { type: "short", difficulty: "hard", q: "Explain how the constant k can be read from a graph of y = kx.", answer: "k is the gradient (slope) of the line. Because the line passes through the origin, gradient = rise/run = y/x.", explanation: "The gradient of y = kx equals k." },
            { type: "mcq", difficulty: "hard", q: "If y = kx and k = 1/3, find x when y = 15.", options: ["45", "5", "3", "12"], answer: 0, explanation: "x = y/k = 15 ÷ (1/3) = 45." }
          ] },
        { text: "Calculate unit rates.",
          resources: [
            { type: "interactive", title: "Unit rates", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Rate per single unit." },
            { type: "interactive", title: "Rates", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Rates and unit rates." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A unit rate expresses a quantity per single unit of another quantity.", answer: true, explanation: "e.g. 60 km/h means 60 km per 1 hour." },
            { type: "numeric", difficulty: "easy", q: "A car travels 300 km in 5 hours. What is its speed in km/h?", answer: "60", explanation: "300 ÷ 5 = 60 km/h." },
            { type: "numeric", difficulty: "easy", q: "£12 buys 4 kg. What is the price per kg (£)?", answer: "3", explanation: "12 ÷ 4 = £3 per kg." },
            { type: "numeric", difficulty: "easy", q: "A tap drips 90 mL in 3 minutes. What is the rate in mL per minute?", answer: "30", explanation: "90 ÷ 3 = 30 mL/min." },
            { type: "mcq", difficulty: "medium", q: "A factory makes 360 items in 8 hours. The unit rate is:", options: ["45 items/h", "40 items/h", "360 items/h", "36 items/h"], answer: 0, explanation: "360 ÷ 8 = 45 items per hour." },
            { type: "numeric", difficulty: "medium", q: "A car uses 48 litres of fuel over 600 km. What is the consumption in litres per 100 km?", answer: "8", explanation: "48 ÷ 6 = 8 L/100 km." },
            { type: "mcq", difficulty: "medium", q: "A reader reads 240 pages in 4 hours. How many pages per hour?", options: ["60", "48", "80", "30"], answer: 0, explanation: "240 ÷ 4 = 60 pages per hour." },
            { type: "numeric", difficulty: "medium", q: "A supermarket charges £2.40 for 6 apples. What is the unit price in pence?", answer: "40", explanation: "240 ÷ 6 = 40 p per apple." },
            { type: "mcq", difficulty: "medium", q: "Which is the better unit rate: 180 km in 3 h, or 210 km in 4 h?", options: ["180 km in 3 h (60 km/h)", "210 km in 4 h (52.5 km/h)", "they are the same", "cannot tell"], answer: 0, explanation: "180/3 = 60 km/h versus 210/4 = 52.5 km/h." },
            { type: "numeric", difficulty: "hard", q: "A worker earns £126 for 9 hours. What is the hourly rate (£)?", answer: "14", explanation: "126 ÷ 9 = £14 per hour." },
            { type: "short", difficulty: "hard", q: "A car averages 45 km/h for 3 h then 60 km/h for 2 h. Find the overall average speed in km/h.", answer: "Total distance = 135 + 120 = 255 km; total time = 5 h; average speed = 255 ÷ 5 = 51 km/h.", explanation: "Average speed = total distance ÷ total time." },
            { type: "numeric", difficulty: "hard", q: "A factory produces 1200 items in 8 hours with 5 machines. What is the rate per machine per hour?", answer: "30", explanation: "1200 ÷ 8 = 150 per hour; 150 ÷ 5 = 30 per machine per hour." }
          ] },
        { text: "Read and use rate tables.",
          resources: [
            { type: "interactive", title: "Rate tables", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Tables of equivalent rates." },
            { type: "interactive", title: "Ratio tables", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Scaling values in a table." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A rate table shows pairs of values that follow a consistent rate.", answer: true, explanation: "Each entry in the table is found by applying the same unit rate." },
            { type: "mcq", difficulty: "easy", q: "A rate table shows: 2 items → £6, 4 items → £12, 6 items → £18. The rate is:", options: ["£3 per item", "£6 per item", "£2 per item", "£12 per item"], answer: 0, explanation: "£6 ÷ 2 = £3 per item." },
            { type: "numeric", difficulty: "easy", q: "A car uses 6 litres per 100 km. How many litres for 250 km?", answer: "15", explanation: "6 × 2.5 = 15 litres." },
            { type: "short", difficulty: "medium", q: "A rate table shows 1 kg → £2, 2 kg → £4, 3 kg → £6. What is the rule, and the cost of 5 kg?", answer: "Cost = £2 × mass. So 5 kg costs 5 × £2 = £10.", explanation: "The unit rate is £2 per kg." },
            { type: "numeric", difficulty: "medium", q: "A rate table shows time (h): 1, 2, 3 and distance (km): 55, 110, 165. What distance is covered in 5 hours (km)?", answer: "275", explanation: "Rate = 55 km/h; 55 × 5 = 275 km." },
            { type: "mcq", difficulty: "medium", q: "Hours: 1, 2, 3; Earnings (£): 8, 16, 24. How much for 7 hours?", options: ["£56", "£48", "£64", "£32"], answer: 0, explanation: "Rate = £8/h; 7 × 8 = £56." },
            { type: "numeric", difficulty: "medium", q: "Pages read: 1 h → 40, 2 h → 80, 3 h → 120. How many pages in 6 hours?", answer: "240", explanation: "40 pages per hour; 40 × 6 = 240." },
            { type: "tf", difficulty: "medium", q: "In a rate table for direct proportion, the y values are always multiples of the unit rate.", answer: true, explanation: "Each y = k × x, so they are all multiples of k." },
            { type: "mcq", difficulty: "medium", q: "A rate table: litres 5, 10, 15; cost £3.50, £7, £10.50. The cost per litre is:", options: ["£0.70", "£0.50", "£0.35", "£1.40"], answer: 0, explanation: "£3.50 ÷ 5 = £0.70 per litre." },
            { type: "numeric", difficulty: "hard", q: "Workers: 2, 4, 6; days to finish: 12, 6, 4. This is inverse proportion. If 3 workers are used, how many days?", answer: "8", explanation: "2 × 12 = 24 (constant product); 24 ÷ 3 = 8 days." },
            { type: "short", difficulty: "hard", q: "How can you tell from a rate table whether the relationship is direct proportion or not?", answer: "Check that the ratio y/x is the same for every row. If y/x = constant, it is direct proportion.", explanation: "A constant ratio y/x confirms direct proportion." },
            { type: "mcq", difficulty: "hard", q: "Speed (km/h): 60, 120, 180; time to travel 360 km (h): 6, 3, 2. This table shows:", options: ["inverse proportion", "direct proportion", "no pattern", "a quadratic"], answer: 0, explanation: "Speed × time = 360 is constant, so speed and time are inversely proportional." }
          ] },
        { text: "Find and use the constant of proportionality.",
          resources: [
            { type: "interactive", title: "Constant of proportionality", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Finding k from data." },
            { type: "interactive", title: "Proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "The constant k." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The constant of proportionality k is the same for all pairs in a directly proportional relationship.", answer: true, explanation: "k = y/x is constant throughout." },
            { type: "mcq", difficulty: "easy", q: "The constant of proportionality is found by:", options: ["y × x", "y ÷ x", "x ÷ y", "y + x"], answer: 1, explanation: "For y = kx, k = y ÷ x." },
            { type: "numeric", difficulty: "easy", q: "In y = kx, if y = 20 when x = 4, find k.", answer: "5", explanation: "k = 20 ÷ 4 = 5." },
            { type: "numeric", difficulty: "easy", q: "In y = kx, if y = 30 when x = 6, find k.", answer: "5", explanation: "k = 30 ÷ 6 = 5." },
            { type: "mcq", difficulty: "medium", q: "The data (x, y): (2, 10), (4, 20), (6, 30) gives k =", options: ["5", "2", "10", "3"], answer: 0, explanation: "k = 10/2 = 5 for every pair." },
            { type: "numeric", difficulty: "medium", q: "y ∝ x and k = 7. Find y when x = 11.", answer: "77", explanation: "y = 7 × 11 = 77." },
            { type: "mcq", difficulty: "medium", q: "If k = 1.5 and x = 8, find y.", options: ["12", "9.5", "6", "4"], answer: 0, explanation: "y = 1.5 × 8 = 12." },
            { type: "numeric", difficulty: "medium", q: "If y = 45 and k = 9, find x.", answer: "5", explanation: "x = y/k = 45/9 = 5." },
            { type: "tf", difficulty: "medium", q: "If y = kx with k = 0, y is 0 for every value of x.", answer: true, explanation: "0 × x = 0 for all x." },
            { type: "numeric", difficulty: "hard", q: "The cost of n metres of rope is directly proportional to n. 12 metres costs £7.80. Find k (cost per metre in £).", answer: "0.65", explanation: "k = 7.80 ÷ 12 = 0.65." },
            { type: "short", difficulty: "hard", q: "A proportional relationship has y = 45 when x = 9 and y = 75 when x = 15. Verify these are consistent and state k.", answer: "k = 45/9 = 5 and 75/15 = 5. Both give k = 5, confirming direct proportion.", explanation: "Checking that k is the same for each pair confirms proportionality." },
            { type: "mcq", difficulty: "hard", q: "k is the gradient of the graph of y against x. If the line passes through (5, 35), k =", options: ["7", "30", "5", "1.4"], answer: 0, explanation: "k = 35 ÷ 5 = 7." }
          ] },
        { text: "Compare value for money (best-buy problems).",
          resources: [
            { type: "interactive", title: "Unit Rates", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Comparing value using unit rates." },
            { type: "interactive", title: "Khan Academy: Best-buy problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Worked best-buy comparisons." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To find the best buy, calculate the price per unit and choose the cheapest.", answer: true, explanation: "The lowest price per unit is the best value." },
            { type: "numeric", difficulty: "easy", q: "A 2-litre bottle costs £1.50. What is the price per litre (£)?", answer: "0.75", explanation: "1.50 ÷ 2 = £0.75 per litre." },
            { type: "numeric", difficulty: "easy", q: "A bag of 10 apples costs £2. What is the cost per apple in pence?", answer: "20", explanation: "200 ÷ 10 = 20 p per apple." },
            { type: "mcq", difficulty: "medium", q: "Which is better value: 500 g for £2, or 800 g for £3?", options: ["500 g for £2", "800 g for £3", "they are the same", "cannot tell"], answer: 1, explanation: "£2/500 g = 0.40p/g; £3/800 g = 0.375p/g — the 800 g pack is cheaper per gram." },
            { type: "mcq", difficulty: "medium", q: "Which is better value: 6 cans for £4.20, or 10 cans for £6.80?", options: ["6 cans for £4.20", "10 cans for £6.80", "they are the same", "cannot determine"], answer: 1, explanation: "4.20/6 = 70 p/can; 6.80/10 = 68 p/can — 10 cans is better value." },
            { type: "numeric", difficulty: "medium", q: "Brand A: 400 g for £2.80. Brand B: 600 g for £3.90. What is the price per 100 g for Brand A (in pence)?", answer: "70", explanation: "280 ÷ 4 = 70 p per 100 g." },
            { type: "mcq", difficulty: "medium", q: "A 750 mL shampoo costs £3.75 and a 1 L size costs £4.80. Which is better value?", options: ["750 mL", "1 L", "same", "not enough info"], answer: 1, explanation: "750 mL: 0.5 p/mL; 1 L: 0.48 p/mL — 1 L is better value." },
            { type: "numeric", difficulty: "medium", q: "A 5 kg bag of rice costs £4. What is the cost per kg (£)?", answer: "0.8", explanation: "4 ÷ 5 = £0.80 per kg." },
            { type: "tf", difficulty: "medium", q: "A larger pack is always the best value for money.", answer: false, explanation: "The larger pack can sometimes be more expensive per unit; always check the unit price." },
            { type: "mcq", difficulty: "hard", q: "3 notebooks for £5.10 or 5 for £8.00. Which is better value per notebook?", options: ["3 for £5.10", "5 for £8.00", "same", "cannot tell"], answer: 1, explanation: "3 pack: £1.70 each; 5 pack: £1.60 each." },
            { type: "short", difficulty: "hard", q: "Explain the method you use to compare the value for money of two differently sized products.", answer: "Divide each product's price by its quantity to find the price per unit. The product with the lowest price per unit is the best value.", explanation: "Unit pricing is the standard method for best-buy comparisons." },
            { type: "numeric", difficulty: "hard", q: "A shop sells orange juice: 1.5 L for £1.35 or 2 L for £1.76. What is the price per litre for the 2 L carton (in pence)?", answer: "88", explanation: "176 ÷ 2 = 88 p per litre." }
          ] },
        { text: "Solve contextual problems involving speed, density and recipes.",
          resources: [
            { type: "interactive", title: "Direct & Inverse Proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "Speed as a rate (distance over time)." },
            { type: "interactive", title: "Rates in context", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Speed, density and more." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio and proportion (Stage 8)", note: "Ratio, rate and direct proportion are covered in the Cambridge Stage 8 'Ratio and proportion' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Mean and Vulgar Bits", author: "Kjartan Poskitt", chapter: "(fractions, percentages, ratio & averages)", note: "Enrichment read (great for ages 11–13): percentages, ratio and proportion, made hilarious.", url: "https://openlibrary.org/search?q=murderous+maths+mean+and+vulgar+bits" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Speed = distance ÷ time.", answer: true, explanation: "This is the definition of average speed." },
            { type: "mcq", difficulty: "easy", q: "Which formula gives distance?", options: ["D = S ÷ T", "D = S × T", "D = T ÷ S", "D = S + T"], answer: 1, explanation: "Distance = Speed × Time." },
            { type: "numeric", difficulty: "easy", q: "A cyclist travels at 20 km/h for 3 hours. What distance (km)?", answer: "60", explanation: "D = 20 × 3 = 60 km." },
            { type: "numeric", difficulty: "medium", q: "Speed = distance ÷ time. A train travels 240 km in 3 hours. Find the speed in km/h.", answer: "80", explanation: "240 ÷ 3 = 80 km/h." },
            { type: "numeric", difficulty: "medium", q: "Density = mass ÷ volume. 600 g in 200 cm³. Find the density in g/cm³.", answer: "3", explanation: "600 ÷ 200 = 3 g/cm³." },
            { type: "numeric", difficulty: "medium", q: "A recipe for 4 serves needs 200 g of pasta. How much for 10 serves (g)?", answer: "500", explanation: "200 ÷ 4 × 10 = 500 g." },
            { type: "mcq", difficulty: "medium", q: "A metal has density 8 g/cm³. The mass of 25 cm³ is:", options: ["200 g", "3.125 g", "33 g", "250 g"], answer: 0, explanation: "Mass = density × volume = 8 × 25 = 200 g." },
            { type: "numeric", difficulty: "medium", q: "Time = distance ÷ speed. How long (h) to travel 180 km at 45 km/h?", answer: "4", explanation: "180 ÷ 45 = 4 h." },
            { type: "mcq", difficulty: "medium", q: "A 6-egg omelette recipe scales to 15 eggs. The scale factor is:", options: ["2.5", "1.5", "3", "0.4"], answer: 0, explanation: "15 ÷ 6 = 2.5." },
            { type: "numeric", difficulty: "hard", q: "Gold has density 19.3 g/cm³. What is the volume (cm³) of a 386 g gold nugget?", answer: "20", explanation: "V = 386 ÷ 19.3 = 20 cm³." },
            { type: "short", difficulty: "hard", q: "A car travels 150 km at 60 km/h then 90 km at 45 km/h. Find the total journey time.", answer: "Leg 1: 150/60 = 2.5 h. Leg 2: 90/45 = 2 h. Total = 4.5 h.", explanation: "Find each time separately, then add." },
            { type: "numeric", difficulty: "hard", q: "Concrete has density 2.4 g/cm³. A block has volume 5000 cm³. What is its mass (g)?", answer: "12000", explanation: "Mass = 2.4 × 5000 = 12 000 g." }
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
            { type: "interactive", title: "Khan Academy: Units of area & volume", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Converting area and volume units." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "1 m² = 10 000 cm².", answer: true, explanation: "1 m = 100 cm, so 1 m² = 100² = 10 000 cm²." },
            { type: "numeric", difficulty: "easy", q: "How many mm² are in 1 cm²?", answer: "100", explanation: "1 cm = 10 mm, so 1 cm² = 10² = 100 mm²." },
            { type: "numeric", difficulty: "medium", q: "How many cm² are in 1 m²?", answer: "10000", explanation: "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm²." },
            { type: "mcq", difficulty: "medium", q: "1 m³ equals how many cm³?", options: ["1000", "10000", "100000", "1000000"], answer: 3, explanation: "100 × 100 × 100 = 1,000,000 cm³." },
            { type: "numeric", difficulty: "medium", q: "Convert 3.5 m² to cm².", answer: "35000", explanation: "3.5 × 10 000 = 35 000 cm²." },
            { type: "mcq", difficulty: "medium", q: "2000 cm³ = how many litres?", options: ["2", "20", "0.2", "200"], answer: 0, explanation: "1 litre = 1000 cm³; 2000 ÷ 1000 = 2 litres." },
            { type: "numeric", difficulty: "medium", q: "A floor is 5 m × 4 m. What is its area in cm²?", answer: "200000", explanation: "Area = 20 m² = 20 × 10 000 = 200 000 cm²." },
            { type: "tf", difficulty: "medium", q: "1 km² = 1 000 000 m².", answer: true, explanation: "1 km = 1000 m; 1 km² = 1000² = 1 000 000 m²." },
            { type: "numeric", difficulty: "medium", q: "Convert 8 000 000 cm³ to m³.", answer: "8", explanation: "1 m³ = 1 000 000 cm³; 8 000 000 ÷ 1 000 000 = 8 m³." },
            { type: "mcq", difficulty: "hard", q: "A swimming pool holds 500 000 litres. What is this in m³?", options: ["500", "5000", "50", "5"], answer: 0, explanation: "1 m³ = 1000 litres; 500 000 ÷ 1000 = 500 m³." },
            { type: "short", difficulty: "hard", q: "Explain why you must square or cube the conversion factor when converting area or volume units.", answer: "Length converts by multiplying by 100 (cm to m). Area involves two lengths, so you multiply by 100² = 10 000. Volume involves three lengths, so you multiply by 100³ = 1 000 000.", explanation: "Area is 2D, volume is 3D, so you raise the linear conversion factor to the corresponding power." },
            { type: "numeric", difficulty: "hard", q: "A tank is 2 m × 1.5 m × 0.8 m. What is its volume in litres?", answer: "2400", explanation: "Volume = 2 × 1.5 × 0.8 = 2.4 m³ = 2400 litres." }
          ] },
        { text: "Work with hours, minutes and seconds.",
          resources: [
            { type: "interactive", title: "Time", provider: "Math is Fun", url: "https://www.mathsisfun.com/time.html", note: "Units of time." },
            { type: "interactive", title: "Khan Academy: Working with time", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Units of time and conversions." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "There are 60 seconds in a minute.", answer: true, explanation: "This is a standard unit of time." },
            { type: "numeric", difficulty: "easy", q: "How many seconds are in 3 minutes?", answer: "180", explanation: "3 × 60 = 180 seconds." },
            { type: "numeric", difficulty: "easy", q: "How many minutes are in 2.5 hours?", answer: "150", explanation: "2.5 × 60 = 150 minutes." },
            { type: "numeric", difficulty: "easy", q: "How many seconds are in 2 minutes 30 seconds?", answer: "150", explanation: "2 × 60 + 30 = 150 seconds." },
            { type: "mcq", difficulty: "medium", q: "How many seconds are in one hour?", options: ["3600", "600", "360", "6000"], answer: 0, explanation: "60 × 60 = 3600 seconds." },
            { type: "numeric", difficulty: "medium", q: "Convert 270 seconds to minutes.", answer: "4.5", explanation: "270 ÷ 60 = 4.5 minutes." },
            { type: "mcq", difficulty: "medium", q: "Convert 1 h 45 min to minutes.", options: ["105", "145", "90", "85"], answer: 0, explanation: "1 × 60 + 45 = 105 minutes." },
            { type: "numeric", difficulty: "medium", q: "How many hours is 450 minutes?", answer: "7.5", explanation: "450 ÷ 60 = 7.5 hours." },
            { type: "tf", difficulty: "medium", q: "120 seconds = 2 minutes.", answer: true, explanation: "120 ÷ 60 = 2." },
            { type: "mcq", difficulty: "hard", q: "An event lasts 7200 seconds. How many hours is this?", options: ["2", "12", "120", "0.5"], answer: 0, explanation: "7200 ÷ 3600 = 2 hours." },
            { type: "short", difficulty: "hard", q: "A film is 5580 seconds long. Express this in hours and minutes.", answer: "5580 ÷ 60 = 93 minutes = 1 hour 33 minutes.", explanation: "First convert to minutes, then split into hours and remaining minutes." },
            { type: "numeric", difficulty: "hard", q: "A race took 2 hours 14 minutes and 35 seconds. How many seconds is that in total?", answer: "8075", explanation: "2 × 3600 + 14 × 60 + 35 = 7200 + 840 + 35 = 8075." }
          ] },
        { text: "Use the 12-hour and 24-hour clock.",
          resources: [
            { type: "interactive", title: "24-Hour Clock", provider: "Math is Fun", url: "https://www.mathsisfun.com/time.html", note: "Converting between clock formats." },
            { type: "interactive", title: "Khan Academy: 12 & 24-hour clock", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Reading the 12 and 24-hour clock." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In the 24-hour clock, midnight is written as 00:00.", answer: true, explanation: "The 24-hour clock runs from 00:00 (midnight) to 23:59." },
            { type: "mcq", difficulty: "easy", q: "3:45 pm on the 24-hour clock is:", options: ["03:45", "13:45", "15:45", "17:45"], answer: 2, explanation: "Add 12 to the pm hour: 3 + 12 = 15, so 15:45." },
            { type: "numeric", difficulty: "easy", q: "Convert 20:00 (24-hour) to a 12-hour pm time. What hour is it?", answer: "8", explanation: "20 − 12 = 8, so 8:00 pm." },
            { type: "mcq", difficulty: "easy", q: "7:00 am in 24-hour time is:", options: ["07:00", "17:00", "19:00", "70:00"], answer: 0, explanation: "am hours below 12 are the same in 24-hour format, written with a leading zero." },
            { type: "mcq", difficulty: "medium", q: "23:15 in 12-hour time is:", options: ["11:15 pm", "11:15 am", "1:15 pm", "9:15 pm"], answer: 0, explanation: "23 − 12 = 11, so 11:15 pm." },
            { type: "numeric", difficulty: "medium", q: "Convert 14:30 to a 12-hour clock hour. What hour is it?", answer: "2", explanation: "14 − 12 = 2, so 2:30 pm." },
            { type: "mcq", difficulty: "medium", q: "Noon is written as:", options: ["00:00", "12:00", "24:00", "12:00 am"], answer: 1, explanation: "Noon is 12:00 (midday) in 24-hour format." },
            { type: "tf", difficulty: "medium", q: "12:00 am (midnight) in 24-hour format is 00:00.", answer: true, explanation: "A new day starts at 00:00 in 24-hour notation." },
            { type: "mcq", difficulty: "medium", q: "A shop opens at 08:30 and closes at 18:00. How many hours is it open?", options: ["9.5", "8.5", "10", "9"], answer: 0, explanation: "18:00 − 08:30 = 9 h 30 min = 9.5 hours." },
            { type: "mcq", difficulty: "hard", q: "A flight departs at 22:45 and lands 7 h 30 min later. What is the arrival time?", options: ["06:15", "05:45", "06:30", "05:15"], answer: 0, explanation: "22:45 + 7:30 = 30:15 → subtract 24 h → 06:15." },
            { type: "short", difficulty: "hard", q: "Convert 11:55 pm to 24-hour format and explain your method.", answer: "11:55 pm = 23:55. For pm times from 1 pm to 11:59 pm, add 12 to the hours.", explanation: "Add 12 to the pm hour (except 12 pm which stays 12:00)." },
            { type: "numeric", difficulty: "hard", q: "A train journey starts at 09:47 and ends at 14:23. How many minutes does the journey take?", answer: "276", explanation: "14:23 − 09:47 = 4 h 36 min = 276 min." }
          ] },
        { text: "Add and subtract time.",
          resources: [
            { type: "interactive", title: "Time", provider: "Math is Fun", url: "https://www.mathsisfun.com/time.html", note: "Adding and subtracting time." },
            { type: "interactive", title: "Khan Academy: Time calculations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Worked time calculations." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To add time, you add hours first and then minutes, carrying 60 minutes into an extra hour.", answer: true, explanation: "There are 60 minutes in an hour; carries work differently from base-10." },
            { type: "numeric", difficulty: "easy", q: "From 09:15 to 11:45, how many minutes pass?", answer: "150", explanation: "2 hours 30 minutes = 150 minutes." },
            { type: "mcq", difficulty: "easy", q: "3 h 40 min + 2 h 30 min = ?", options: ["6 h 10 min", "5 h 70 min", "6 h", "5 h 10 min"], answer: 0, explanation: "40 + 30 = 70 min = 1 h 10 min; 3 + 2 + 1 = 6 h → 6:10." },
            { type: "short", difficulty: "medium", q: "A film starts at 19:40 and lasts 2 h 35 min. What time does it end?", answer: "22:15. Add 2 h to get 21:40, then 35 min to reach 22:15.", explanation: "Add hours then minutes, carrying over 60 min into an hour." },
            { type: "numeric", difficulty: "medium", q: "From 08:50 to 12:10, how many minutes pass?", answer: "200", explanation: "3 h 20 min = 200 minutes." },
            { type: "mcq", difficulty: "medium", q: "A bus journey takes 1 h 45 min. If it departs at 10:30, it arrives at:", options: ["12:15", "11:75", "12:30", "11:45"], answer: 0, explanation: "10:30 + 1 h = 11:30; 11:30 + 45 min = 12:15." },
            { type: "numeric", difficulty: "medium", q: "6 h 15 min − 2 h 50 min = how many minutes total?", answer: "205", explanation: "5 h 75 min − 2 h 50 min = 3 h 25 min = 205 min." },
            { type: "mcq", difficulty: "medium", q: "An event runs from 14:20 to 17:05. Its duration is:", options: ["2 h 45 min", "3 h 45 min", "2 h 35 min", "3 h 25 min"], answer: 0, explanation: "17:05 − 14:20 = 2 h 45 min." },
            { type: "tf", difficulty: "medium", q: "4 h 90 min can be simplified to 5 h 30 min.", answer: true, explanation: "90 min = 1 h 30 min, so 4 h + 1 h 30 min = 5 h 30 min." },
            { type: "mcq", difficulty: "hard", q: "A clock shows 23:50. What time will it show 40 minutes later?", options: ["00:30", "24:30", "23:90", "01:30"], answer: 0, explanation: "23:50 + 40 min = 24:30 → 00:30 (next day)." },
            { type: "short", difficulty: "hard", q: "A school day runs from 08:00 to 15:30 with a 1 h 15 min break. How many minutes of lessons are there?", answer: "Total school time = 7 h 30 min = 450 min. Minus break 75 min = 375 min of lessons.", explanation: "Subtract break time from total time." },
            { type: "numeric", difficulty: "hard", q: "A plumber works from 07:30 to 17:45 with a 45-min lunch break. How many minutes did she work (excluding lunch)?", answer: "570", explanation: "Total = 10 h 15 min = 615 min; 615 − 45 = 570 min." }
          ] },
        { text: "Work with time zones.",
          resources: [
            { type: "interactive", title: "Time", provider: "Math is Fun", url: "https://www.mathsisfun.com/time.html", note: "Calculating across time zones." },
            { type: "interactive", title: "Time zones", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Time difference problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Time zones are defined by how many hours ahead or behind UTC (Coordinated Universal Time) a place is.", answer: true, explanation: "e.g. UTC+5:30 means 5 hours 30 min ahead of UTC." },
            { type: "mcq", difficulty: "easy", q: "Travelling east across time zones, clocks generally:", options: ["go back", "go forward", "stay the same", "stop"], answer: 1, explanation: "Going east, local time is later, so clocks go forward." },
            { type: "numeric", difficulty: "easy", q: "London is 5 hours ahead of New York. If it is 14:00 in London, what hour is it in New York (24-hour)?", answer: "9", explanation: "14:00 − 5 hours = 09:00." },
            { type: "mcq", difficulty: "medium", q: "If it is 10:00 in London and Tokyo is 9 hours ahead, what time is it in Tokyo?", options: ["19:00", "01:00", "01:00 next day", "21:00"], answer: 0, explanation: "10 + 9 = 19:00." },
            { type: "numeric", difficulty: "medium", q: "Los Angeles is 8 hours behind London. If it is 15:00 in London, what hour is it in Los Angeles?", answer: "7", explanation: "15 − 8 = 7, so 07:00." },
            { type: "mcq", difficulty: "medium", q: "A flight leaves New York (EST = UTC−5) at 22:00 local time. What is the UTC departure time?", options: ["03:00 next day", "17:00", "22:00", "21:00"], answer: 0, explanation: "UTC = EST + 5 = 22 + 5 = 03:00 (next day)." },
            { type: "tf", difficulty: "medium", q: "Going west across time zones, clocks go back.", answer: true, explanation: "Moving west means an earlier local time." },
            { type: "numeric", difficulty: "medium", q: "Dubai is 4 hours ahead of London. It is 09:00 in Dubai. What time is it in London?", answer: "5", explanation: "09 − 4 = 05:00." },
            { type: "mcq", difficulty: "hard", q: "A call is made at 08:00 Sydney (UTC+10) to London (UTC+0). What time is it in London?", options: ["22:00 previous day", "18:00 same day", "06:00", "10:00"], answer: 0, explanation: "08:00 − 10 h = 22:00 the previous day." },
            { type: "short", difficulty: "hard", q: "A flight leaves London (UTC+0) at 11:00 and lands in Mumbai (UTC+5:30) after 9 hours. What is the local arrival time in Mumbai?", answer: "Departure in UTC = 11:00. Add 9 h flight = 20:00 UTC. Mumbai = 20:00 + 5:30 = 01:30 the next day.", explanation: "Convert to UTC, add flight time, then convert to destination local time." },
            { type: "numeric", difficulty: "hard", q: "New York (UTC−5) schedules a video call at 15:00 with London (UTC+0). What UTC hour is this?", answer: "20", explanation: "15 + 5 = 20:00 UTC." },
            { type: "mcq", difficulty: "hard", q: "Paris (UTC+1) is 7 hours ahead of New York (UTC−5). If a show starts at 20:00 in Paris, at what New York time can viewers watch live?", options: ["13:00", "03:00", "15:00", "01:00"], answer: 0, explanation: "20:00 − 7 = 13:00 New York time." }
          ] },
        { text: "Solve work-rate ('men and days') problems.",
          resources: [
            { type: "interactive", title: "Inverse proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "More workers, less time." },
            { type: "interactive", title: "Khan Academy: Inverse proportion", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Worked 'men and days' problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Work-rate problems involve inverse proportion: more workers means fewer days.", answer: true, explanation: "If workers double, time halves — that is inverse proportion." },
            { type: "mcq", difficulty: "easy", q: "If 1 worker can do a job in 12 days, how long do 3 workers take?", options: ["4 days", "36 days", "3 days", "9 days"], answer: 0, explanation: "3 times more workers → 12 ÷ 3 = 4 days." },
            { type: "numeric", difficulty: "medium", q: "If 4 workers build a wall in 6 days, how many days for 8 workers (same rate)?", answer: "3", explanation: "Twice as many workers → half the time: 6 ÷ 2 = 3 days." },
            { type: "short", difficulty: "medium", q: "Two taps fill a tank in 4 hours together. Would one tap alone take more or less than 4 hours? Explain.", answer: "More — one tap fills at half the combined rate, so it takes about 8 hours, longer than 4.", explanation: "Fewer taps means a slower fill, so more time." },
            { type: "numeric", difficulty: "medium", q: "5 workers complete a job in 8 days. How many days for 10 workers?", answer: "4", explanation: "Twice the workers, half the time: 8 ÷ 2 = 4 days." },
            { type: "mcq", difficulty: "medium", q: "3 painters paint a house in 6 days. How many painters are needed to do it in 2 days?", options: ["9", "6", "12", "18"], answer: 0, explanation: "Man-days = 3 × 6 = 18; painters = 18 ÷ 2 = 9." },
            { type: "numeric", difficulty: "medium", q: "8 machines finish a job in 3 hours. How long for 6 machines?", answer: "4", explanation: "Total machine-hours = 24; 24 ÷ 6 = 4 hours." },
            { type: "tf", difficulty: "medium", q: "If you use twice as many workers, the job is done in twice the time.", answer: false, explanation: "Inverse proportion: more workers → less time." },
            { type: "mcq", difficulty: "hard", q: "Tap A fills a tank in 6 hours, Tap B in 3 hours. Together they take:", options: ["2 hours", "4.5 hours", "9 hours", "1 hour"], answer: 0, explanation: "Combined rate = 1/6 + 1/3 = 1/2 per hour; time = 2 hours." },
            { type: "numeric", difficulty: "hard", q: "6 workers can dig a trench in 4 days. 2 workers are sent away. How many days will the remaining 4 workers take?", answer: "6", explanation: "Total work = 24 worker-days; 24 ÷ 4 = 6 days." },
            { type: "short", difficulty: "hard", q: "Worker A finishes a task in 10 hours, Worker B in 15 hours. How long do they take working together?", answer: "Combined rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 per hour. Together: 6 hours.", explanation: "Add the individual rates (fraction of job per hour) to get the combined rate." },
            { type: "mcq", difficulty: "hard", q: "A cistern can be filled by pipe A in 4 h and emptied by pipe B in 6 h. If both run together, the cistern fills in:", options: ["12 h", "6 h", "10 h", "2 h"], answer: 0, explanation: "Net rate = 1/4 − 1/6 = 3/12 − 2/12 = 1/12; time = 12 h." }
          ] },
        { text: "Solve distance-time problems.",
          resources: [
            { type: "interactive", title: "Direct & Inverse Proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "Speed as a rate (distance over time)." },
            { type: "interactive", title: "Rates", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Distance and time." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Distance = Speed × Time.", answer: true, explanation: "This is one of the three forms of the speed-distance-time formula." },
            { type: "mcq", difficulty: "easy", q: "Speed = ?", options: ["Distance × Time", "Distance ÷ Time", "Time ÷ Distance", "Distance + Time"], answer: 1, explanation: "Speed = Distance ÷ Time." },
            { type: "numeric", difficulty: "easy", q: "A cyclist travels at 15 km/h for 2 hours. What distance (km) is covered?", answer: "30", explanation: "Distance = speed × time = 15 × 2 = 30 km." },
            { type: "numeric", difficulty: "medium", q: "Time = distance ÷ speed. 150 km at 50 km/h takes how many hours?", answer: "3", explanation: "150 ÷ 50 = 3 hours." },
            { type: "numeric", difficulty: "medium", q: "A runner covers 400 m in 50 seconds. What is her speed in m/s?", answer: "8", explanation: "400 ÷ 50 = 8 m/s." },
            { type: "mcq", difficulty: "medium", q: "A train travels at 120 km/h for 2.5 h. The distance covered is:", options: ["300 km", "250 km", "360 km", "200 km"], answer: 0, explanation: "120 × 2.5 = 300 km." },
            { type: "numeric", difficulty: "medium", q: "A car at 80 km/h needs to travel 200 km. How long (h) will it take?", answer: "2.5", explanation: "200 ÷ 80 = 2.5 h." },
            { type: "tf", difficulty: "medium", q: "On a distance-time graph, a horizontal line means the object is stationary.", answer: true, explanation: "No change in distance over time means speed = 0." },
            { type: "mcq", difficulty: "medium", q: "On a distance-time graph, the gradient of the line represents:", options: ["speed", "acceleration", "time", "distance"], answer: 0, explanation: "Gradient = rise/run = distance/time = speed." },
            { type: "numeric", difficulty: "hard", q: "Two cyclists start from opposite ends of a 150 km route. One rides at 20 km/h, the other at 30 km/h. How many hours until they meet?", answer: "3", explanation: "Combined speed = 50 km/h; 150 ÷ 50 = 3 hours." },
            { type: "short", difficulty: "hard", q: "A car travels 60 km at 40 km/h then 90 km at 60 km/h. Find the average speed for the whole journey.", answer: "Time 1 = 1.5 h; Time 2 = 1.5 h. Total = 150 km in 3 h. Average speed = 150/3 = 50 km/h.", explanation: "Average speed = total distance ÷ total time." },
            { type: "numeric", difficulty: "hard", q: "A bus leaves Town A at 09:00 at 60 km/h. A car leaves the same place at 10:00 at 90 km/h. At what time does the car catch the bus? Give the hour (24-h clock).", answer: "12", explanation: "At 10:00 bus has gone 60 km. Car gains at 30 km/h; closes gap in 60/30 = 2 h → 12:00." }
          ] },
        { text: "Use rates in different contexts.",
          resources: [
            { type: "interactive", title: "Rates", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Many kinds of rate." },
            { type: "interactive", title: "Rates", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Rate problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A rate always involves two different units.", answer: true, explanation: "e.g. km/h, £/kg, pages/minute — two quantities in a ratio." },
            { type: "numeric", difficulty: "easy", q: "A printer prints 20 pages per minute. How many pages in 5 minutes?", answer: "100", explanation: "20 × 5 = 100 pages." },
            { type: "numeric", difficulty: "easy", q: "A tap fills 8 litres per minute. How long (minutes) to fill 40 litres?", answer: "5", explanation: "40 ÷ 8 = 5 minutes." },
            { type: "numeric", difficulty: "easy", q: "A worker earns £12 per hour. How much for 7 hours (£)?", answer: "84", explanation: "12 × 7 = £84." },
            { type: "mcq", difficulty: "medium", q: "A heart beats 70 times per minute. How many beats in 3 minutes?", options: ["210", "200", "220", "70"], answer: 0, explanation: "70 × 3 = 210." },
            { type: "numeric", difficulty: "medium", q: "A factory makes 360 items per hour. How many hours to make 1800 items?", answer: "5", explanation: "1800 ÷ 360 = 5 hours." },
            { type: "mcq", difficulty: "medium", q: "A ball rolls at 3 m/s. How far does it go in 7 seconds?", options: ["21 m", "10 m", "4 m", "18 m"], answer: 0, explanation: "3 × 7 = 21 m." },
            { type: "numeric", difficulty: "medium", q: "A tap drips at 5 mL per second. How long (seconds) to fill a 1.5 litre bottle?", answer: "300", explanation: "1500 mL ÷ 5 = 300 s." },
            { type: "mcq", difficulty: "medium", q: "A petrol pump fills at 30 litres per minute. How many seconds to fill a 45-litre tank?", options: ["90", "45", "30", "60"], answer: 0, explanation: "45/30 = 1.5 min = 90 seconds." },
            { type: "numeric", difficulty: "hard", q: "A boiler heats water at 2.5 degrees per minute. How many minutes to heat water from 20°C to 95°C?", answer: "30", explanation: "Rise needed: 75°C; 75 ÷ 2.5 = 30 min." },
            { type: "short", difficulty: "hard", q: "A car uses petrol at 8 litres per 100 km. Petrol costs £1.50 per litre. What is the fuel cost per kilometre?", answer: "Cost per km = (8 ÷ 100) × 1.50 = 0.08 × 1.50 = £0.12 per km.", explanation: "Find litres/km then multiply by cost/litre." },
            { type: "numeric", difficulty: "hard", q: "Electricity costs 28 p per unit (kWh). A heater uses 3 kW and runs for 5 hours. What is the cost in pence?", answer: "420", explanation: "Energy = 3 × 5 = 15 kWh; cost = 15 × 28 = 420 p." }
          ] },
        { text: "Convert between units of rates.",
          resources: [
            { type: "interactive", title: "Converting rates", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "e.g. km/h to m/s." },
            { type: "interactive", title: "Unit conversion", provider: "Math is Fun", url: "https://www.mathsisfun.com/measure/unit-conversion-tool.html", note: "Converting compound units." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Ratio, rate and measures (Stage 8)", note: "Time, rates and unit conversion are covered within the Cambridge Stage 8 ratio/measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Why Do Buses Come in Threes?", author: "Rob Eastaway & Jeremy Wyndham", chapter: "(everyday maths — rates, time & measures)", note: "Enrichment read (accessible stretch): the surprising maths of everyday life — rates, time and measurement.", url: "https://openlibrary.org/search?q=why+do+buses+come+in+threes" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To convert km/h to m/s you multiply by 1000 and divide by 3600.", answer: true, explanation: "1 km = 1000 m and 1 h = 3600 s." },
            { type: "mcq", difficulty: "easy", q: "60 km/h equals how many km/min?", options: ["1", "6", "60", "3600"], answer: 0, explanation: "60 km in 60 min = 1 km per minute." },
            { type: "numeric", difficulty: "easy", q: "Convert 2 m/s to cm/s.", answer: "200", explanation: "1 m = 100 cm, so 2 m/s = 200 cm/s." },
            { type: "mcq", difficulty: "medium", q: "Convert 90 km/h to m/s.", options: ["25 m/s", "0.025 m/s", "324 m/s", "9 m/s"], answer: 0, explanation: "90 × 1000 ÷ 3600 = 25 m/s." },
            { type: "numeric", difficulty: "medium", q: "Convert 15 m/s to km/h.", answer: "54", explanation: "15 × 3600 ÷ 1000 = 54 km/h." },
            { type: "numeric", difficulty: "medium", q: "Convert 30 km/h to m/min.", answer: "500", explanation: "30 km = 30 000 m; per 60 min → 30 000 ÷ 60 = 500 m/min." },
            { type: "mcq", difficulty: "medium", q: "A flow rate of 3 litres per second equals how many litres per minute?", options: ["180", "60", "0.05", "3"], answer: 0, explanation: "3 × 60 = 180 litres per minute." },
            { type: "numeric", difficulty: "medium", q: "Convert 5 km/h to m/s (to 2 dp).", answer: "1.39", explanation: "5 × 1000 ÷ 3600 ≈ 1.39 m/s." },
            { type: "mcq", difficulty: "hard", q: "A speed of 20 m/s is equivalent to:", options: ["72 km/h", "20 km/h", "1.2 km/h", "200 km/h"], answer: 0, explanation: "20 × 3600 ÷ 1000 = 72 km/h." },
            { type: "numeric", difficulty: "hard", q: "A water pipe delivers 120 litres per hour. Convert this to ml per second.", answer: "33.33", explanation: "120 L/h = 120 000 mL/h = 120 000 ÷ 3600 ≈ 33.33 mL/s." },
            { type: "short", difficulty: "hard", q: "Explain how to convert a rate in km/h to m/s.", answer: "Multiply by 1000 (convert km to m) then divide by 3600 (convert hours to seconds). Shortcut: divide by 3.6.", explanation: "1 km/h = 1000/3600 m/s = 1/3.6 m/s." },
            { type: "mcq", difficulty: "hard", q: "A machine fills bottles at 2 litres per minute. Expressed in mL per second this is:", options: ["33.33", "200", "120", "2000"], answer: 0, explanation: "2 L/min = 2000 mL/min = 2000 ÷ 60 ≈ 33.33 mL/s." }
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
            { type: "interactive", title: "Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Identifying patterns." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 8)", note: "Sequences and the nth term are covered in the Cambridge Stage 8 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "An arithmetic sequence has a constant difference between consecutive terms.", answer: true, explanation: "e.g. 3, 7, 11, 15 — the difference is always 4." },
            { type: "mcq", difficulty: "easy", q: "Find the next term: 3, 8, 13, 18, ?", options: ["23", "21", "24", "20"], answer: 0, explanation: "Add 5 each time: 18 + 5 = 23." },
            { type: "numeric", difficulty: "easy", q: "Find the next term: 5, 11, 17, 23, ?", answer: "29", explanation: "Add 6 each time: 23 + 6 = 29." },
            { type: "numeric", difficulty: "easy", q: "Find the next term: 100, 50, 25, 12.5, ?", answer: "6.25", explanation: "Divide by 2 (or multiply by 0.5) each time." },
            { type: "numeric", difficulty: "medium", q: "Find the next term: 2, 6, 18, 54, ?", answer: "162", explanation: "Multiply by 3 each time: 54 × 3 = 162." },
            { type: "mcq", difficulty: "medium", q: "Find the next two terms of 1, 4, 9, 16, 25, ?, ?", options: ["36, 49", "36, 48", "30, 36", "36, 50"], answer: 0, explanation: "These are square numbers: 6² = 36, 7² = 49." },
            { type: "numeric", difficulty: "medium", q: "Find the 10th term in the sequence: 4, 7, 10, 13, …", answer: "31", explanation: "First term = 4, difference = 3; T(10) = 4 + 9 × 3 = 31." },
            { type: "mcq", difficulty: "medium", q: "Which sequence has a geometric (multiply) pattern?", options: ["2, 4, 6, 8", "3, 6, 12, 24", "5, 10, 15, 20", "1, 3, 5, 7"], answer: 1, explanation: "3, 6, 12, 24 — each term is multiplied by 2." },
            { type: "numeric", difficulty: "medium", q: "Find the missing term: 1, 3, ?, 7, 9 (arithmetic sequence).", answer: "5", explanation: "The sequence adds 2 each time; missing term = 5." },
            { type: "tf", difficulty: "hard", q: "The sequence 1, 1, 2, 3, 5, 8, … has a geometric common ratio.", answer: false, explanation: "It is the Fibonacci sequence — each term is the sum of the two before it, not a constant multiple." },
            { type: "numeric", difficulty: "hard", q: "Find the 20th term of the arithmetic sequence 7, 11, 15, 19, …", answer: "83", explanation: "T(20) = 7 + 19 × 4 = 83." },
            { type: "short", difficulty: "hard", q: "A sequence begins 5, 2, −1, −4, … Identify the type and predict the 8th term.", answer: "Arithmetic; common difference −3. T(8) = 5 + 7 × (−3) = 5 − 21 = −16.", explanation: "Subtract 3 each time; use T(n) = first + (n−1) × d." }
          ] },
        { text: "State the rule of a pattern.",
          resources: [
            { type: "interactive", title: "Number Patterns", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Stating the rule of a sequence." },
            { type: "interactive", title: "Khan Academy: Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Number sequences and rules." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 8)", note: "Sequences and the nth term are covered in the Cambridge Stage 8 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A term-to-term rule tells you how to get the next term from the current one.", answer: true, explanation: "e.g. +3 means add 3 to each term." },
            { type: "mcq", difficulty: "easy", q: "For 7, 12, 17, 22… the term-to-term rule is:", options: ["+4", "+5", "×2", "+7"], answer: 1, explanation: "Each term is 5 more than the previous one." },
            { type: "mcq", difficulty: "easy", q: "For the sequence 48, 24, 12, 6, … the rule is:", options: ["÷2", "−24", "×2", "−12"], answer: 0, explanation: "Each term is halved: divide by 2." },
            { type: "short", difficulty: "medium", q: "Describe the rule for 1, 2, 4, 8, 16 and give the next term.", answer: "Multiply by 2 each time; the next term is 32.", explanation: "Term-to-term rule: ×2." },
            { type: "mcq", difficulty: "medium", q: "The sequence 1, 4, 9, 16 follows the rule:", options: ["add increasing odd numbers", "add 3 each time", "multiply by 4", "add the previous term"], answer: 0, explanation: "1, 1+3=4, 4+5=9, 9+7=16 — add consecutive odd numbers (3, 5, 7, …)." },
            { type: "numeric", difficulty: "medium", q: "The rule is 'double and subtract 1'. Starting at 1: 1, 1, 1, … Give the 4th term.", answer: "1", explanation: "1 → 2(1)−1 = 1 → 1 → 1 forever." },
            { type: "numeric", difficulty: "medium", q: "Sequence: 3, 7, 11, 15. The term-to-term rule is +4. What is the 6th term?", answer: "23", explanation: "15 + 4 = 19 (5th), 19 + 4 = 23 (6th)." },
            { type: "mcq", difficulty: "medium", q: "A sequence starts at 80 and has rule ÷2 each time. The 4th term is:", options: ["10", "20", "5", "40"], answer: 0, explanation: "80, 40, 20, 10 — third division gives 10." },
            { type: "tf", difficulty: "medium", q: "Every geometric sequence has a constant common ratio.", answer: true, explanation: "In a geometric sequence the ratio term(n+1)/term(n) is constant." },
            { type: "numeric", difficulty: "hard", q: "A sequence starts at 2 and has rule ×3. What is the 5th term?", answer: "162", explanation: "2, 6, 18, 54, 162." },
            { type: "short", difficulty: "hard", q: "Write down both the term-to-term rule and a formula for the nth term of 5, 8, 11, 14.", answer: "Term-to-term: add 3. nth term: T(n) = 5 + 3(n−1) = 3n + 2.", explanation: "For arithmetic sequences, T(n) = a + (n−1)d." },
            { type: "mcq", difficulty: "hard", q: "The sequence 1, −2, 4, −8, 16, … has the rule:", options: ["×(−2)", "+3", "×2", "÷(−2)"], answer: 0, explanation: "Each term is multiplied by −2." }
          ] },
        { text: "Recognise common number sequences.",
          resources: [
            { type: "interactive", title: "Special sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/numberpatterns.html", note: "Square, triangular and Fibonacci." },
            { type: "interactive", title: "Sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Recognising patterns." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 8)", note: "Sequences and the nth term are covered in the Cambridge Stage 8 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The square numbers are 1, 4, 9, 16, 25, …", answer: true, explanation: "They are the squares of 1, 2, 3, 4, 5, …" },
            { type: "mcq", difficulty: "easy", q: "What are the first four triangular numbers?", options: ["1, 3, 6, 10", "1, 2, 4, 8", "1, 4, 9, 16", "2, 4, 6, 8"], answer: 0, explanation: "Add 1, 2, 3, … to get 1, 3, 6, 10." },
            { type: "numeric", difficulty: "medium", q: "Triangular numbers: 1, 3, 6, 10, ? — what is the next term?", answer: "15", explanation: "The differences grow by 1 each time: 10 + 5 = 15." },
            { type: "numeric", difficulty: "medium", q: "Fibonacci: 1, 1, 2, 3, 5, 8, ? — what is the next term?", answer: "13", explanation: "Add the two previous terms: 5 + 8 = 13." },
            { type: "mcq", difficulty: "medium", q: "Which sequence are the perfect cubes?", options: ["1, 8, 27, 64", "1, 4, 9, 16", "1, 3, 6, 10", "1, 2, 4, 8"], answer: 0, explanation: "1³, 2³, 3³, 4³ = 1, 8, 27, 64." },
            { type: "numeric", difficulty: "medium", q: "Fibonacci: continue … 13, 21, ?, 55. What is the missing term?", answer: "34", explanation: "13 + 21 = 34." },
            { type: "mcq", difficulty: "medium", q: "The 5th triangular number is:", options: ["15", "10", "21", "12"], answer: 0, explanation: "T(5) = 5 × 6 ÷ 2 = 15." },
            { type: "tf", difficulty: "medium", q: "Every square number is also a triangular number.", answer: false, explanation: "e.g. 4 is square but not triangular (triangular numbers: 1, 3, 6, 10, 15, 21, …)." },
            { type: "numeric", difficulty: "medium", q: "What is the 6th square number?", answer: "36", explanation: "6² = 36." },
            { type: "mcq", difficulty: "hard", q: "The nth triangular number is n(n+1)/2. Find the 10th triangular number.", options: ["55", "50", "45", "66"], answer: 0, explanation: "10 × 11 ÷ 2 = 55." },
            { type: "short", difficulty: "hard", q: "Describe what makes the Fibonacci sequence unique compared to arithmetic and geometric sequences.", answer: "In Fibonacci, each term is the sum of the two before it. Arithmetic sequences add a fixed difference; geometric sequences multiply by a fixed ratio. Fibonacci has neither a fixed difference nor ratio.", explanation: "Fibonacci rule: T(n) = T(n−1) + T(n−2)." },
            { type: "numeric", difficulty: "hard", q: "Continue the Fibonacci sequence: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ?", answer: "89", explanation: "34 + 55 = 89." }
          ] },
        { text: "Predict terms using a position-to-term (nth term) rule.",
          resources: [
            { type: "interactive", title: "Sequences & Series", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Position-to-term (nth term) rules." },
            { type: "interactive", title: "Khan Academy: nth term", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Finding and using the nth term." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Sequences and functions (Stage 8)", note: "Sequences and the nth term are covered in the Cambridge Stage 8 'Sequences and functions' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A position-to-term rule lets you find any term without listing all the previous terms.", answer: true, explanation: "The nth-term formula gives T(n) directly from n." },
            { type: "mcq", difficulty: "easy", q: "For the sequence 3, 6, 9, 12, … the nth term is:", options: ["3n", "n + 3", "3n + 1", "n/3"], answer: 0, explanation: "Each term = 3 × position number." },
            { type: "numeric", difficulty: "easy", q: "The nth term is 2n. Find the 8th term.", answer: "16", explanation: "2 × 8 = 16." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 4n − 1. Find the 5th term.", answer: "19", explanation: "4 × 5 − 1 = 19." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 5n. Which term equals 35? Give n.", answer: "7", explanation: "5n = 35 → n = 7." },
            { type: "mcq", difficulty: "medium", q: "The sequence 5, 8, 11, 14 has the nth term:", options: ["3n + 2", "5n", "3n", "n + 5"], answer: 0, explanation: "First term 5, difference 3 → T(n) = 3n + 2." },
            { type: "numeric", difficulty: "medium", q: "nth term = 6n − 4. Find T(7).", answer: "38", explanation: "6 × 7 − 4 = 38." },
            { type: "mcq", difficulty: "medium", q: "The nth term is n². The 6th term is:", options: ["36", "12", "6", "16"], answer: 0, explanation: "6² = 36." },
            { type: "numeric", difficulty: "medium", q: "For T(n) = 100 − 5n, find T(10).", answer: "50", explanation: "100 − 50 = 50." },
            { type: "mcq", difficulty: "hard", q: "Find the nth term of 7, 10, 13, 16, …", options: ["3n + 4", "3n + 7", "7n", "10n − 3"], answer: 0, explanation: "Difference = 3; T(1) = 7 = 3(1) + 4. Check T(2) = 10. Yes, 3n + 4." },
            { type: "numeric", difficulty: "hard", q: "nth term is 2n + 3. Which term number gives a value of 25?", answer: "11", explanation: "2n + 3 = 25 → 2n = 22 → n = 11." },
            { type: "short", difficulty: "hard", q: "Find the nth-term formula for the sequence 2, 5, 10, 17, 26, … and name the sequence type.", answer: "T(n) = n² + 1 (quadratic). Check: 1² + 1 = 2, 2² + 1 = 5, 3² + 1 = 10.", explanation: "Second differences are constant (2), indicating a quadratic nth term." }
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
            { type: "interactive", title: "Exponent properties", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice the laws." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 8)", note: "Indices and the laws of indices are covered in the Cambridge Stage 8 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "When multiplying powers with the same base, you add the exponents.", answer: true, explanation: "aᵐ × aⁿ = aᵐ⁺ⁿ." },
            { type: "tf", difficulty: "easy", q: "When dividing powers with the same base, you subtract the exponents.", answer: true, explanation: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ." },
            { type: "mcq", difficulty: "easy", q: "x³ × x⁴ = ?", options: ["x⁷", "x¹²", "x¹", "2x⁷"], answer: 0, explanation: "Add the powers: 3 + 4 = 7." },
            { type: "mcq", difficulty: "easy", q: "x⁵ ÷ x² = ?", options: ["x³", "x⁷", "x²·⁵", "x¹⁰"], answer: 0, explanation: "Subtract the powers: 5 − 2 = 3." },
            { type: "mcq", difficulty: "medium", q: "2³ × 2⁴ = ?", options: ["2⁷", "2¹²", "4⁷", "2⁶"], answer: 0, explanation: "Same base 2: add exponents 3 + 4 = 7 → 2⁷." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 3⁴ ÷ 3². Give your answer as a whole number.", answer: "9", explanation: "3⁴ ÷ 3² = 3² = 9." },
            { type: "mcq", difficulty: "medium", q: "a² × a³ × a = ?", options: ["a⁶", "a⁵", "a⁸", "3a⁶"], answer: 0, explanation: "2 + 3 + 1 = 6 → a⁶." },
            { type: "mcq", difficulty: "medium", q: "x⁸ ÷ x⁵ = ?", options: ["x³", "x¹³", "x⁴⁰", "x²"], answer: 0, explanation: "8 − 5 = 3 → x³." },
            { type: "tf", difficulty: "medium", q: "You can only apply the multiplication law when the bases are the same.", answer: true, explanation: "xᵐ × yⁿ cannot be simplified using the multiplication law if x ≠ y." },
            { type: "mcq", difficulty: "hard", q: "Simplify 5x² × 2x³.", options: ["10x⁵", "7x⁵", "10x⁶", "7x⁶"], answer: 0, explanation: "5 × 2 = 10; x² × x³ = x⁵ → 10x⁵." },
            { type: "short", difficulty: "hard", q: "Simplify and evaluate: 2⁵ ÷ 2³.", answer: "2⁵ ÷ 2³ = 2² = 4.", explanation: "Subtract exponents: 5 − 3 = 2; 2² = 4." },
            { type: "numeric", difficulty: "hard", q: "Simplify 6x⁷ ÷ 3x⁴. Give the coefficient of x³.", answer: "2", explanation: "6 ÷ 3 = 2; x⁷ ÷ x⁴ = x³ → 2x³." }
          ] },
        { text: "Add, subtract and multiply powers correctly.",
          resources: [
            { type: "interactive", title: "Exponent laws", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "Power of a power." },
            { type: "interactive", title: "Khan Academy: Exponent properties", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice with the index laws." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 8)", note: "Indices and the laws of indices are covered in the Cambridge Stage 8 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "You can only add or subtract terms that have the same variable and the same power.", answer: true, explanation: "e.g. 3x² + 2x² = 5x², but 3x² + 2x³ cannot be combined." },
            { type: "mcq", difficulty: "easy", q: "Simplify 4x² + 3x² − x².", options: ["6x²", "7x²", "6x", "7x"], answer: 0, explanation: "4 + 3 − 1 = 6 → 6x²." },
            { type: "mcq", difficulty: "medium", q: "(x²)³ = ?", options: ["x⁵", "x⁶", "x⁸", "x⁹"], answer: 1, explanation: "Power of a power: multiply, 2 × 3 = 6." },
            { type: "tf", difficulty: "medium", q: "x² + x³ can be simplified to x⁵.", answer: false, explanation: "You cannot add unlike powers; x² + x³ stays as it is." },
            { type: "mcq", difficulty: "medium", q: "(2x)² = ?", options: ["2x²", "4x²", "4x", "2x"], answer: 1, explanation: "Square both 2 and x: 4x²." },
            { type: "mcq", difficulty: "medium", q: "(a³)⁴ = ?", options: ["a⁷", "a¹²", "a⁸", "4a³"], answer: 1, explanation: "Multiply the powers: 3 × 4 = 12 → a¹²." },
            { type: "numeric", difficulty: "medium", q: "Evaluate (2³)². Give the answer as a whole number.", answer: "64", explanation: "(2³)² = 2⁶ = 64." },
            { type: "tf", difficulty: "medium", q: "(x³)⁵ = x¹⁵.", answer: true, explanation: "Power of a power: 3 × 5 = 15." },
            { type: "mcq", difficulty: "hard", q: "Simplify (3a²)³.", options: ["27a⁶", "9a⁵", "27a⁵", "3a⁶"], answer: 0, explanation: "3³ = 27; (a²)³ = a⁶ → 27a⁶." },
            { type: "mcq", difficulty: "hard", q: "Simplify (2x³)² × 3x.", options: ["12x⁷", "6x⁷", "12x⁶", "6x⁶"], answer: 0, explanation: "(2x³)² = 4x⁶; 4x⁶ × 3x = 12x⁷." },
            { type: "short", difficulty: "hard", q: "Simplify (5x²y)² and state which laws of indices you used.", answer: "= 5² × (x²)² × y² = 25x⁴y². Laws used: power of a product and power of a power.", explanation: "Apply the power to every factor inside the bracket." },
            { type: "numeric", difficulty: "hard", q: "Simplify 8x⁶ ÷ (2x²)². Give the coefficient.", answer: "2", explanation: "(2x²)² = 4x⁴; 8x⁶ ÷ 4x⁴ = 2x²." }
          ] },
        { text: "Use negative powers.",
          resources: [
            { type: "interactive", title: "Negative Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/negative-exponents.html", note: "Reciprocals from negative powers." },
            { type: "interactive", title: "Negative exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 8)", note: "Indices and the laws of indices are covered in the Cambridge Stage 8 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A negative exponent means the reciprocal: a⁻ⁿ = 1/aⁿ.", answer: true, explanation: "e.g. 3⁻² = 1/9." },
            { type: "mcq", difficulty: "easy", q: "x⁻¹ equals:", options: ["−x", "1/x", "x", "−1/x"], answer: 1, explanation: "x⁻¹ = 1/x." },
            { type: "mcq", difficulty: "medium", q: "x⁻² equals:", options: ["−x²", "1/x²", "2/x", "x²"], answer: 1, explanation: "A negative power means the reciprocal: x⁻² = 1/x²." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 2⁻³ as a decimal.", answer: "0.125", explanation: "2⁻³ = 1/2³ = 1/8 = 0.125." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 5⁻² as a decimal.", answer: "0.04", explanation: "5⁻² = 1/25 = 0.04." },
            { type: "mcq", difficulty: "medium", q: "Which is equivalent to 4⁻¹?", options: ["0.25", "−4", "0.4", "−0.25"], answer: 0, explanation: "4⁻¹ = 1/4 = 0.25." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 10⁻³ as a decimal.", answer: "0.001", explanation: "10⁻³ = 1/1000 = 0.001." },
            { type: "tf", difficulty: "medium", q: "2⁻⁴ = 1/16.", answer: true, explanation: "2⁴ = 16, so 2⁻⁴ = 1/16." },
            { type: "mcq", difficulty: "hard", q: "Simplify x³ × x⁻⁵.", options: ["x⁻²", "x⁸", "x⁻¹⁵", "x²"], answer: 0, explanation: "3 + (−5) = −2 → x⁻²." },
            { type: "numeric", difficulty: "hard", q: "Evaluate (1/2)⁻² as a whole number.", answer: "4", explanation: "(1/2)⁻² = (2/1)² = 4." },
            { type: "short", difficulty: "hard", q: "Simplify 6x⁻² ÷ 2x⁻⁵ giving your answer with a positive exponent.", answer: "3x³. (6 ÷ 2 = 3; x⁻² ÷ x⁻⁵ = x⁻²⁺⁵ = x³.)", explanation: "Dividing powers with the same base: subtract exponents." },
            { type: "mcq", difficulty: "hard", q: "Which is larger: 3⁻² or 2⁻³?", options: ["3⁻² = 1/9 ≈ 0.111", "2⁻³ = 1/8 = 0.125", "they are equal", "cannot compare"], answer: 1, explanation: "1/9 ≈ 0.111 < 1/8 = 0.125, so 2⁻³ is larger." }
          ] },
        { text: "Use the zero power.",
          resources: [
            { type: "interactive", title: "Exponent laws", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "The zero rule." },
            { type: "interactive", title: "Exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Zero and one as exponents." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 8)", note: "Indices and the laws of indices are covered in the Cambridge Stage 8 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Any non-zero base to the power 0 equals 1.", answer: true, explanation: "This is the zero rule of indices." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 7⁰.", answer: "1", explanation: "Any non-zero number to the power 0 is 1." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 100⁰.", answer: "1", explanation: "Any non-zero base to the 0 is 1." },
            { type: "mcq", difficulty: "easy", q: "Which of these equals 1?", options: ["5⁰", "0⁵", "5¹", "5"], answer: 0, explanation: "5⁰ = 1 (zero exponent rule)." },
            { type: "mcq", difficulty: "medium", q: "Evaluate 3x⁰ when x = 7.", options: ["3", "21", "1", "0"], answer: 0, explanation: "x⁰ = 1, so 3 × 1 = 3 (regardless of x)." },
            { type: "tf", difficulty: "medium", q: "0⁰ is well-defined and equals 1.", answer: false, explanation: "0⁰ is mathematically undefined (or sometimes taken as 1 by convention, but not considered well-defined at this level)." },
            { type: "mcq", difficulty: "medium", q: "Using the division law, why does a² ÷ a² = a⁰?", options: ["2 − 2 = 0, so a⁰ = 1", "2 × 2 = 4, so a⁴", "it is undefined", "a² ÷ a² = 2"], answer: 0, explanation: "aᵐ ÷ aᵐ = aᵐ⁻ᵐ = a⁰; also aᵐ/aᵐ = 1, confirming a⁰ = 1." },
            { type: "numeric", difficulty: "medium", q: "Simplify 5 × m⁰ × n². What is the coefficient?", answer: "5", explanation: "m⁰ = 1, so 5 × 1 × n² = 5n²." },
            { type: "tf", difficulty: "medium", q: "(−3)⁰ = 1.", answer: true, explanation: "Any non-zero base (including negatives) raised to 0 equals 1." },
            { type: "mcq", difficulty: "hard", q: "Simplify 4x⁰ + 3.", options: ["7", "4x + 3", "4 + 3", "7x"], answer: 0, explanation: "4 × 1 + 3 = 7." },
            { type: "short", difficulty: "hard", q: "Use the index law aᵐ ÷ aⁿ = aᵐ⁻ⁿ to prove that a⁰ = 1 for a ≠ 0.", answer: "Choose m = n. Then aⁿ ÷ aⁿ = aⁿ⁻ⁿ = a⁰. But any non-zero number divided by itself equals 1. Therefore a⁰ = 1.", explanation: "This is the standard proof using the division law." },
            { type: "numeric", difficulty: "hard", q: "Evaluate 3 × 2⁰ + 4 × 5⁰.", answer: "7", explanation: "3 × 1 + 4 × 1 = 3 + 4 = 7." }
          ] },
        { text: "Distribute powers over products.",
          resources: [
            { type: "interactive", title: "Exponent of a product", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "(ab)ⁿ = aⁿbⁿ." },
            { type: "interactive", title: "Powers of products", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Distributing exponents." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 8)", note: "Indices and the laws of indices are covered in the Cambridge Stage 8 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "(ab)ⁿ = aⁿbⁿ.", answer: true, explanation: "The power distributes over multiplication." },
            { type: "mcq", difficulty: "easy", q: "(ab)² = ?", options: ["ab²", "a²b", "a²b²", "2ab"], answer: 2, explanation: "Square each factor: a²b²." },
            { type: "mcq", difficulty: "medium", q: "(2x)³ = ?", options: ["2x³", "6x³", "8x³", "8x"], answer: 2, explanation: "Cube both parts: 2³ × x³ = 8x³." },
            { type: "mcq", difficulty: "medium", q: "(3y)² = ?", options: ["6y²", "3y²", "9y²", "9y"], answer: 2, explanation: "3² × y² = 9y²." },
            { type: "mcq", difficulty: "medium", q: "(xy)⁴ = ?", options: ["xy⁴", "x⁴y⁴", "x⁴y", "4xy"], answer: 1, explanation: "Apply the power to each factor: x⁴y⁴." },
            { type: "mcq", difficulty: "medium", q: "(5a)² = ?", options: ["25a²", "10a²", "5a²", "25a"], answer: 0, explanation: "5² = 25; a² → 25a²." },
            { type: "numeric", difficulty: "medium", q: "Evaluate (4 × 3)² using the distribution law. What is the answer?", answer: "144", explanation: "4² × 3² = 16 × 9 = 144. (Or 12² = 144.)" },
            { type: "tf", difficulty: "medium", q: "(2a)³ = 6a³.", answer: false, explanation: "(2a)³ = 2³ × a³ = 8a³, not 6a³." },
            { type: "mcq", difficulty: "hard", q: "(2x²y)³ = ?", options: ["8x⁶y³", "6x⁶y³", "8x⁵y³", "2x⁶y³"], answer: 0, explanation: "2³ = 8; (x²)³ = x⁶; y³ → 8x⁶y³." },
            { type: "numeric", difficulty: "hard", q: "(3xy²)². The coefficient of the result is:", answer: "9", explanation: "3² = 9; (xy²)² = x²y⁴ → 9x²y⁴." },
            { type: "short", difficulty: "hard", q: "Show that (2a²b)³ = 8a⁶b³.", answer: "2³ = 8; (a²)³ = a⁶; b³. So (2a²b)³ = 8a⁶b³.", explanation: "Apply the cube to every factor: numbers and variables alike." },
            { type: "mcq", difficulty: "hard", q: "Simplify (x²y³)².", options: ["x⁴y⁶", "x²y⁶", "x⁴y⁵", "2x²y³"], answer: 0, explanation: "(x²)² = x⁴; (y³)² = y⁶ → x⁴y⁶." }
          ] },
        { text: "Use fractional indices.",
          resources: [
            { type: "interactive", title: "Fractional Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-fractional.html", note: "Roots written as powers." },
            { type: "interactive", title: "Fractional exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 8)", note: "Indices and the laws of indices are covered in the Cambridge Stage 8 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "a^(1/2) = √a.", answer: true, explanation: "A fractional index of 1/2 means square root." },
            { type: "mcq", difficulty: "easy", q: "x^(1/2) means:", options: ["√x", "x²", "2x", "1/x"], answer: 0, explanation: "A power of one-half is a square root." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 16^(1/2).", answer: "4", explanation: "16^(1/2) = √16 = 4." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 25^(1/2).", answer: "5", explanation: "25^(1/2) = √25 = 5." },
            { type: "mcq", difficulty: "medium", q: "a^(1/3) means:", options: ["∛a (cube root)", "a/3", "√a", "a³"], answer: 0, explanation: "A power of 1/3 is the cube root." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 27^(1/3).", answer: "3", explanation: "Cube root of 27 = 3 (since 3³ = 27)." },
            { type: "mcq", difficulty: "medium", q: "64^(1/2) = ?", options: ["8", "4", "32", "16"], answer: 0, explanation: "√64 = 8." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 8^(1/3).", answer: "2", explanation: "∛8 = 2 (since 2³ = 8)." },
            { type: "mcq", difficulty: "medium", q: "x^(2/3) means:", options: ["(∛x)²", "x² ÷ 3", "√(x²/3)", "x/3 squared"], answer: 0, explanation: "a^(m/n) = (ⁿ√a)ᵐ, so x^(2/3) = (∛x)²." },
            { type: "numeric", difficulty: "hard", q: "Evaluate 4^(3/2).", answer: "8", explanation: "4^(3/2) = (√4)³ = 2³ = 8." },
            { type: "short", difficulty: "hard", q: "Explain what a^(m/n) means and evaluate 8^(2/3).", answer: "a^(m/n) = (ⁿ√a)ᵐ. 8^(2/3) = (∛8)² = 2² = 4.", explanation: "Find the nth root first, then raise to the mth power." },
            { type: "mcq", difficulty: "hard", q: "Evaluate 9^(3/2).", options: ["27", "3", "81", "729"], answer: 0, explanation: "9^(3/2) = (√9)³ = 3³ = 27." }
          ] },
        { text: "Simplify numerical expressions with indices.",
          resources: [
            { type: "interactive", title: "Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/exponent.html", note: "Working out powers." },
            { type: "interactive", title: "Order of operations with exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 8)", note: "Indices and the laws of indices are covered in the Cambridge Stage 8 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "When simplifying expressions with indices, apply one law at a time and work left to right.", answer: true, explanation: "Systematic step-by-step simplification avoids errors." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 3² × 3⁰. (give the number)", answer: "9", explanation: "3² × 1 = 9." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 2³ × 2¹. Give the number.", answer: "16", explanation: "2³⁺¹ = 2⁴ = 16." },
            { type: "mcq", difficulty: "medium", q: "Simplify x⁴ × x² ÷ x³.", options: ["x³", "x⁹", "x²", "x"], answer: 0, explanation: "Add then subtract powers: 4 + 2 − 3 = 3." },
            { type: "mcq", difficulty: "medium", q: "Evaluate 2⁵ ÷ 2³.", options: ["4", "8", "2", "16"], answer: 0, explanation: "2⁵⁻³ = 2² = 4." },
            { type: "numeric", difficulty: "medium", q: "Simplify and evaluate: 5³ ÷ 5² × 5⁰.", answer: "5", explanation: "5³⁻² × 1 = 5¹ = 5." },
            { type: "mcq", difficulty: "medium", q: "Evaluate (2²)³ ÷ 2⁴.", options: ["4", "2", "8", "16"], answer: 0, explanation: "(2²)³ = 2⁶; 2⁶ ÷ 2⁴ = 2² = 4." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 3³ × 3⁻² as a whole number.", answer: "3", explanation: "3³⁺(⁻²) = 3¹ = 3." },
            { type: "mcq", difficulty: "hard", q: "Simplify 4² × 2³.", options: ["2⁷", "2⁵", "2¹²", "4⁵"], answer: 0, explanation: "4² = 2⁴; 2⁴ × 2³ = 2⁷ = 128." },
            { type: "numeric", difficulty: "hard", q: "Evaluate (3⁴ × 3⁻²)². Give the number.", answer: "81", explanation: "3⁴ × 3⁻² = 3²; (3²)² = 3⁴ = 81." },
            { type: "short", difficulty: "hard", q: "Simplify 2⁶ × 4⁻¹ ÷ 8. Show your working.", answer: "4⁻¹ = (2²)⁻¹ = 2⁻²; 8 = 2³. Expression = 2⁶ × 2⁻² ÷ 2³ = 2⁶⁻²⁻³ = 2¹ = 2.", explanation: "Convert everything to powers of 2 then apply the laws." },
            { type: "numeric", difficulty: "hard", q: "Evaluate 9¹·⁵ (write 9^(3/2) as a number).", answer: "27", explanation: "9^(3/2) = (√9)³ = 3³ = 27." }
          ] },
        { text: "Apply index laws to algebraic expressions.",
          resources: [
            { type: "interactive", title: "Laws of Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "Index laws applied to algebra." },
            { type: "interactive", title: "Exponents in algebra", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Powers and roots / indices (Stage 8)", note: "Indices and the laws of indices are covered in the Cambridge Stage 8 'Powers and roots' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Devil: A Mathematical Adventure", author: "Hans Magnus Enzensberger", chapter: "(a story across many number ideas)", note: "Enrichment read (great for ages 11–13): numbers, powers, roots and patterns through a dream-story.", url: "https://archive.org/details/numberdevilmathe0000enze" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "When multiplying algebraic expressions with indices, multiply the coefficients and add the powers of matching variables.", answer: true, explanation: "e.g. 3x² × 4x³ = 12x⁵." },
            { type: "mcq", difficulty: "easy", q: "Simplify 4x × 2x.", options: ["8x²", "6x", "8x", "6x²"], answer: 0, explanation: "4 × 2 = 8; x × x = x² → 8x²." },
            { type: "mcq", difficulty: "medium", q: "Simplify 2x² × 3x³.", options: ["5x⁵", "6x⁵", "6x⁶", "5x⁶"], answer: 1, explanation: "Multiply numbers (2×3=6), add powers (2+3=5): 6x⁵." },
            { type: "mcq", difficulty: "medium", q: "Simplify 12x⁵ ÷ 4x².", options: ["3x³", "8x³", "3x⁷", "16x³"], answer: 0, explanation: "12 ÷ 4 = 3, x⁵⁻² = x³: 3x³." },
            { type: "mcq", difficulty: "medium", q: "Simplify 5x³ × 2x².", options: ["10x⁵", "7x⁵", "10x⁶", "7x⁶"], answer: 0, explanation: "5 × 2 = 10; 3 + 2 = 5 → 10x⁵." },
            { type: "mcq", difficulty: "medium", q: "Simplify 15a⁴ ÷ 5a.", options: ["3a³", "10a³", "3a⁴", "3a"], answer: 0, explanation: "15 ÷ 5 = 3; a⁴ ÷ a¹ = a³ → 3a³." },
            { type: "mcq", difficulty: "medium", q: "Simplify (3x²)².", options: ["9x⁴", "6x⁴", "9x²", "6x²"], answer: 0, explanation: "3² = 9; (x²)² = x⁴ → 9x⁴." },
            { type: "mcq", difficulty: "hard", q: "Simplify 4x³ × 3x² ÷ 6x⁴.", options: ["2x", "7x", "2x²", "12x"], answer: 0, explanation: "4 × 3 ÷ 6 = 2; 3 + 2 − 4 = 1 → 2x¹ = 2x." },
            { type: "mcq", difficulty: "hard", q: "Simplify (2xy²)³.", options: ["8x³y⁶", "6xy⁶", "8x³y⁵", "6x³y⁶"], answer: 0, explanation: "2³ = 8; x³; (y²)³ = y⁶ → 8x³y⁶." },
            { type: "numeric", difficulty: "hard", q: "Simplify 20x⁶y⁴ ÷ 4x²y². What is the coefficient of the result?", answer: "5", explanation: "20 ÷ 4 = 5; x⁶⁻² = x⁴; y⁴⁻² = y² → 5x⁴y²." },
            { type: "short", difficulty: "hard", q: "Simplify 6a³b² × 2a²b³ ÷ 4a⁴b.", answer: "= 12a⁵b⁵ ÷ 4a⁴b = 3ab⁴.", explanation: "Combine numerators first, then divide: coefficients 12÷4=3; a⁵⁻⁴=a; b⁵⁻¹=b⁴." },
            { type: "mcq", difficulty: "hard", q: "Simplify x⁻³ × x⁵.", options: ["x²", "x⁸", "x⁻¹⁵", "x⁻²"], answer: 0, explanation: "−3 + 5 = 2 → x²." }
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
            { type: "interactive", title: "Algebra study bot", provider: "📚 Library · ChatGPT", url: "https://chatgpt.com/g/g-67594442fff88191854c1e73c3a522f0-algebra-bot", note: "Your class's tutor bot for algebra basics. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Substitution", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Putting numbers in for letters." },
            { type: "interactive", title: "Evaluating expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Substitution means replacing the letter(s) in an expression with given numbers.", answer: true, explanation: "e.g. if x = 4, then 3x = 3 × 4 = 12." },
            { type: "numeric", difficulty: "easy", q: "If x = 5, evaluate 3x.", answer: "15", explanation: "3 × 5 = 15." },
            { type: "numeric", difficulty: "easy", q: "If a = 2 and b = 5, evaluate 3a + 2b.", answer: "16", explanation: "3 × 2 + 2 × 5 = 6 + 10 = 16." },
            { type: "numeric", difficulty: "medium", q: "If x = 3, evaluate 2x² + 1.", answer: "19", explanation: "2 × 3² + 1 = 2 × 9 + 1 = 19." },
            { type: "numeric", difficulty: "medium", q: "If p = −2 and q = 3, evaluate p² + q.", answer: "7", explanation: "(−2)² + 3 = 4 + 3 = 7." },
            { type: "mcq", difficulty: "medium", q: "If x = 4, the value of x² − 3x + 2 is:", options: ["6", "14", "2", "10"], answer: 0, explanation: "16 − 12 + 2 = 6." },
            { type: "numeric", difficulty: "medium", q: "If a = 3, evaluate a³ − a.", answer: "24", explanation: "27 − 3 = 24." },
            { type: "mcq", difficulty: "medium", q: "If t = −1, evaluate 5t².", options: ["5", "−5", "25", "−25"], answer: 0, explanation: "5 × (−1)² = 5 × 1 = 5." },
            { type: "numeric", difficulty: "medium", q: "If m = 2 and n = −3, evaluate mn − m.", answer: "-8", explanation: "2 × (−3) − 2 = −6 − 2 = −8." },
            { type: "mcq", difficulty: "hard", q: "If x = 2, evaluate (x + 3)² − x².", options: ["21", "25", "17", "9"], answer: 0, explanation: "(5)² − 4 = 25 − 4 = 21." },
            { type: "short", difficulty: "hard", q: "Evaluate the formula A = ½bh when b = 7 cm and h = 6 cm.", answer: "A = ½ × 7 × 6 = 21 cm².", explanation: "Substitute then calculate." },
            { type: "numeric", difficulty: "hard", q: "If x = −2, evaluate x³ + 3x² − x.", answer: "6", explanation: "(−2)³ + 3(−2)² − (−2) = −8 + 12 + 2 = 6." }
          ] },
        { text: "Simplify expressions by collecting like terms.",
          resources: [
            { type: "interactive", title: "Simplifying expressions study bot", provider: "📚 Library · ChatGPT", url: "https://chatgpt.com/g/g-676a3f1c4c508191b14ff0aa3d15206e-simplifying-expressions-in-basic-algebra", note: "Your class's tutor bot for simplifying basic algebraic expressions. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Like Terms", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/like-terms.html", note: "Collecting like terms." },
            { type: "interactive", title: "Combining like terms", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Like terms have the same variable(s) raised to the same powers.", answer: true, explanation: "e.g. 3x² and 7x² are like terms; 3x² and 3x are not." },
            { type: "mcq", difficulty: "easy", q: "Which are like terms?", options: ["3x and 5x", "3x and 3y", "x² and x", "2 and 2x"], answer: 0, explanation: "3x and 5x both have exactly x to the first power." },
            { type: "mcq", difficulty: "easy", q: "Simplify 3x + 2x − x.", options: ["4x", "5x", "6x", "x"], answer: 0, explanation: "3 + 2 − 1 = 4, so 4x." },
            { type: "mcq", difficulty: "medium", q: "Simplify 4a + 3b − 2a + b.", options: ["2a + 4b", "6a + 2b", "2a + 2b", "2a + 3b"], answer: 0, explanation: "a-terms: 4 − 2 = 2; b-terms: 3 + 1 = 4 → 2a + 4b." },
            { type: "mcq", difficulty: "medium", q: "Simplify 5x² + 3x − 2x² − x.", options: ["3x² + 2x", "3x² − 2x", "7x² + 4x", "3x + 2x"], answer: 0, explanation: "x² terms: 5 − 2 = 3; x terms: 3 − 1 = 2 → 3x² + 2x." },
            { type: "mcq", difficulty: "medium", q: "Simplify 7p − 3q + 2p + 5q.", options: ["9p + 2q", "5p + 8q", "9p − 2q", "10p + 2q"], answer: 0, explanation: "p: 7 + 2 = 9; q: −3 + 5 = 2 → 9p + 2q." },
            { type: "numeric", difficulty: "medium", q: "Simplify 6m − 4 + m + 7. What is the coefficient of m?", answer: "7", explanation: "6m + m = 7m; −4 + 7 = 3 → 7m + 3." },
            { type: "mcq", difficulty: "medium", q: "Simplify 3xy + 2x − xy + x.", options: ["2xy + 3x", "4xy + 3x", "2xy + 2x", "xy + 3x"], answer: 0, explanation: "xy: 3 − 1 = 2; x: 2 + 1 = 3 → 2xy + 3x." },
            { type: "tf", difficulty: "medium", q: "3x² and 3x are like terms and can be combined.", answer: false, explanation: "They have different powers of x; 3x² has x² and 3x has x¹." },
            { type: "mcq", difficulty: "hard", q: "Simplify 2x² − 3x + x² + 5x − 1.", options: ["3x² + 2x − 1", "x² + 2x", "3x² − 2x", "2x² + 2x + 1"], answer: 0, explanation: "x²: 2+1=3; x: −3+5=2; constant: −1 → 3x² + 2x − 1." },
            { type: "short", difficulty: "hard", q: "Simplify 4ab + 3a²b − ab + 2a²b.", answer: "a²b terms: 3 + 2 = 5; ab terms: 4 − 1 = 3 → 5a²b + 3ab.", explanation: "Identify like terms carefully — both variable and power must match." },
            { type: "mcq", difficulty: "hard", q: "Simplify 5(x + 2) − 3(x − 1).", options: ["2x + 13", "2x + 7", "8x + 7", "2x + 3"], answer: 0, explanation: "5x + 10 − 3x + 3 = 2x + 13." }
          ] },
        { text: "Use the distributive property.",
          resources: [
            { type: "interactive", title: "Distributive property", provider: "Math is Fun", url: "https://www.mathsisfun.com/associative-commutative-distributive.html", note: "a(b + c) = ab + ac." },
            { type: "interactive", title: "Distributive property", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The distributive property states a(b + c) = ab + ac.", answer: true, explanation: "Multiply the factor outside by each term inside the bracket." },
            { type: "mcq", difficulty: "easy", q: "3(x + 4) = ?", options: ["3x + 4", "3x + 12", "x + 12", "3x + 7"], answer: 1, explanation: "Multiply each term by 3: 3x + 12." },
            { type: "mcq", difficulty: "easy", q: "5(a − 2) = ?", options: ["5a − 2", "5a − 10", "a − 10", "5a + 10"], answer: 1, explanation: "5 × a = 5a; 5 × −2 = −10." },
            { type: "mcq", difficulty: "medium", q: "2(3x − 5) = ?", options: ["6x − 5", "6x − 10", "5x − 10", "6x + 10"], answer: 1, explanation: "2 × 3x = 6x and 2 × −5 = −10." },
            { type: "mcq", difficulty: "medium", q: "4(2x + 3y) = ?", options: ["8x + 12y", "8x + 3y", "2x + 12y", "8x + 7y"], answer: 0, explanation: "4 × 2x = 8x; 4 × 3y = 12y." },
            { type: "numeric", difficulty: "medium", q: "Use the distributive property to evaluate 6 × 14 = 6(10 + 4). What is 6 × 14?", answer: "84", explanation: "6 × 10 + 6 × 4 = 60 + 24 = 84." },
            { type: "mcq", difficulty: "medium", q: "−3(x − 4) = ?", options: ["−3x + 12", "−3x − 12", "3x − 12", "−3x − 4"], answer: 0, explanation: "−3 × x = −3x; −3 × −4 = +12." },
            { type: "mcq", difficulty: "medium", q: "x(x + 5) = ?", options: ["x² + 5x", "x + 5x", "x² + 5", "2x + 5"], answer: 0, explanation: "x × x = x²; x × 5 = 5x." },
            { type: "tf", difficulty: "medium", q: "a(b − c) = ab − ac.", answer: true, explanation: "Distribute the factor over each term, keeping the signs." },
            { type: "mcq", difficulty: "hard", q: "3(2x + 1) + 2(x − 4) = ?", options: ["8x − 5", "8x + 5", "6x − 5", "5x − 5"], answer: 0, explanation: "6x + 3 + 2x − 8 = 8x − 5." },
            { type: "short", difficulty: "hard", q: "Show that 2(x + 3) + 3(x − 1) simplifies to 5x + 3.", answer: "2x + 6 + 3x − 3 = 5x + 3.", explanation: "Expand each bracket then collect like terms." },
            { type: "mcq", difficulty: "hard", q: "Expand and simplify 4(3x − 2) − 2(x + 5).", options: ["10x − 18", "10x + 2", "12x − 18", "10x − 2"], answer: 0, explanation: "12x − 8 − 2x − 10 = 10x − 18." }
          ] },
        { text: "Expand single brackets.",
          resources: [
            { type: "interactive", title: "Multiplying Polynomials", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "Multiplying out a bracket." },
            { type: "interactive", title: "Khan Academy: Expanding brackets", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked expansions." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Expanding a bracket means multiplying the factor outside by every term inside.", answer: true, explanation: "e.g. 3(x + 2) = 3x + 6." },
            { type: "mcq", difficulty: "easy", q: "Expand x(x + 3).", options: ["x² + 3", "x² + 3x", "2x + 3", "x + 3x"], answer: 1, explanation: "x × x = x² and x × 3 = 3x." },
            { type: "mcq", difficulty: "easy", q: "Expand 4(2x + 5).", options: ["8x + 20", "8x + 5", "6x + 20", "8x + 9"], answer: 0, explanation: "4 × 2x = 8x; 4 × 5 = 20." },
            { type: "mcq", difficulty: "medium", q: "Expand −2(x − 4).", options: ["−2x − 8", "−2x + 8", "2x − 8", "−2x + 4"], answer: 1, explanation: "−2 × x = −2x and −2 × −4 = +8." },
            { type: "mcq", difficulty: "medium", q: "Expand 3x(x − 2).", options: ["3x² − 6x", "3x² − 2x", "3x − 6", "3x² − 6"], answer: 0, explanation: "3x × x = 3x²; 3x × −2 = −6x." },
            { type: "mcq", difficulty: "medium", q: "Expand −(3x + 7).", options: ["−3x − 7", "3x − 7", "−3x + 7", "3x + 7"], answer: 0, explanation: "Multiplying by −1 negates every term." },
            { type: "mcq", difficulty: "medium", q: "Expand 2a(3a − 4b).", options: ["6a² − 8ab", "6a − 8ab", "6a² − 4b", "5a² − 8ab"], answer: 0, explanation: "2a × 3a = 6a²; 2a × (−4b) = −8ab." },
            { type: "numeric", difficulty: "medium", q: "Expand 5(x + 3) and then evaluate when x = 2. What is the result?", answer: "25", explanation: "5x + 15; when x = 2: 10 + 15 = 25." },
            { type: "mcq", difficulty: "hard", q: "Expand x(x + 1)(x + 2). The coefficient of x² is:", options: ["3", "6", "2", "1"], answer: 0, explanation: "First: x(x+1) = x²+x. Then (x²+x)(x+2) = x³+2x²+x²+2x = x³+3x²+2x. Coefficient of x² = 3." },
            { type: "short", difficulty: "hard", q: "Expand and simplify 2x(x + 4) − x(x + 3).", answer: "2x² + 8x − x² − 3x = x² + 5x.", explanation: "Expand each bracket then collect like terms." },
            { type: "mcq", difficulty: "hard", q: "Expand −3x(2 − x).", options: ["−6x + 3x²", "−6x − 3x²", "6x + 3x²", "3x² − 6x"], answer: 3, explanation: "−3x × 2 = −6x; −3x × −x = +3x². Arranged: 3x² − 6x." },
            { type: "numeric", difficulty: "hard", q: "Expand 3(x + 2) − (x − 5) and give the constant term.", answer: "11", explanation: "3x + 6 − x + 5 = 2x + 11. The constant term is 11." }
          ] },
        { text: "Multiply two binomials.",
          resources: [
            { type: "interactive", title: "Multiplying binomials (FOIL)", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "FOIL method." },
            { type: "interactive", title: "Multiplying binomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "FOIL stands for First, Outer, Inner, Last — the four products when multiplying two binomials.", answer: true, explanation: "FOIL helps you remember to multiply all four pairs of terms." },
            { type: "mcq", difficulty: "easy", q: "Using FOIL, the First product in (x + 2)(x + 5) is:", options: ["x²", "5x", "2x", "10"], answer: 0, explanation: "First × First: x × x = x²." },
            { type: "mcq", difficulty: "medium", q: "(x + 2)(x + 3) = ?", options: ["x² + 5x + 6", "x² + 6x + 5", "x² + 5x + 5", "x² + 6"], answer: 0, explanation: "FOIL: x² + 3x + 2x + 6 = x² + 5x + 6." },
            { type: "mcq", difficulty: "medium", q: "(x + 1)(x − 4) = ?", options: ["x² − 3x − 4", "x² + 3x − 4", "x² − 4x − 4", "x² − 3x + 4"], answer: 0, explanation: "x² − 4x + x − 4 = x² − 3x − 4." },
            { type: "mcq", difficulty: "medium", q: "(x − 2)(x − 5) = ?", options: ["x² − 7x + 10", "x² + 7x + 10", "x² − 7x − 10", "x² + 3x − 10"], answer: 0, explanation: "x² − 5x − 2x + 10 = x² − 7x + 10." },
            { type: "mcq", difficulty: "medium", q: "(x + 4)(x + 4) = ?", options: ["x² + 8x + 16", "x² + 16", "x² + 4x + 16", "x² + 8x + 8"], answer: 0, explanation: "(x+4)² = x² + 8x + 16." },
            { type: "mcq", difficulty: "medium", q: "(x + 3)(x − 3) = ?", options: ["x² − 9", "x² + 9", "x² − 6x − 9", "x² + 6x − 9"], answer: 0, explanation: "Difference of squares: x² − 9." },
            { type: "mcq", difficulty: "medium", q: "(2x + 1)(x + 3) = ?", options: ["2x² + 7x + 3", "2x² + 4x + 3", "2x² + 7x + 1", "3x² + 7x + 3"], answer: 0, explanation: "2x² + 6x + x + 3 = 2x² + 7x + 3." },
            { type: "mcq", difficulty: "hard", q: "(x − 5)(x + 2) = ?", options: ["x² − 3x − 10", "x² + 3x − 10", "x² − 7x − 10", "x² − 3x + 10"], answer: 0, explanation: "x² + 2x − 5x − 10 = x² − 3x − 10." },
            { type: "numeric", difficulty: "hard", q: "Expand (x + 7)(x − 7). What is the constant term?", answer: "-49", explanation: "x² − 49. Constant = −49." },
            { type: "short", difficulty: "hard", q: "Expand (3x − 2)(2x + 5) and collect like terms.", answer: "6x² + 15x − 4x − 10 = 6x² + 11x − 10.", explanation: "FOIL: 6x², 15x, −4x, −10; combine the middle terms." },
            { type: "mcq", difficulty: "hard", q: "(x + a)(x + b) in general equals:", options: ["x² + (a+b)x + ab", "x² + ab", "x² + abx + (a+b)", "x² + 2x + ab"], answer: 0, explanation: "x² + bx + ax + ab = x² + (a+b)x + ab." }
          ] },
        { text: "Square a binomial.",
          resources: [
            { type: "interactive", title: "Perfect square expansion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "(a + b)² = a² + 2ab + b²." },
            { type: "interactive", title: "Khan Academy: Squaring binomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Squaring a bracket." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "(a + b)² = a² + 2ab + b².", answer: true, explanation: "This is the perfect square identity; the middle term is 2ab." },
            { type: "tf", difficulty: "easy", q: "(x + 4)² = x² + 16.", answer: false, explanation: "(x + 4)² = x² + 8x + 16. The middle term 8x is missing." },
            { type: "mcq", difficulty: "medium", q: "(x + 3)² = ?", options: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "x² + 6x + 6"], answer: 1, explanation: "(x+3)² = x² + 2(3)x + 9 = x² + 6x + 9." },
            { type: "mcq", difficulty: "medium", q: "(x − 5)² = ?", options: ["x² − 25", "x² − 10x + 25", "x² + 10x + 25", "x² − 10x − 25"], answer: 1, explanation: "(x−5)² = x² − 10x + 25." },
            { type: "mcq", difficulty: "medium", q: "(x + 1)² = ?", options: ["x² + 2x + 1", "x² + 1", "x² + x + 1", "x² + 2x"], answer: 0, explanation: "(x+1)² = x² + 2x + 1." },
            { type: "mcq", difficulty: "medium", q: "(2x + 3)² = ?", options: ["4x² + 12x + 9", "4x² + 9", "4x² + 6x + 9", "2x² + 12x + 9"], answer: 0, explanation: "(2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9." },
            { type: "numeric", difficulty: "medium", q: "In (x − 7)² = x² − 14x + 49, what is the middle-term coefficient (give the number, ignoring sign)?", answer: "14", explanation: "2 × 7 = 14, so the middle term is −14x." },
            { type: "mcq", difficulty: "medium", q: "(3x − 1)² = ?", options: ["9x² − 6x + 1", "9x² − 1", "9x² + 6x + 1", "9x² − 6x − 1"], answer: 0, explanation: "9x² − 2(3x)(1) + 1 = 9x² − 6x + 1." },
            { type: "mcq", difficulty: "hard", q: "(x + 5)² − (x − 5)² simplifies to:", options: ["20x", "50", "0", "10x"], answer: 0, explanation: "(x²+10x+25)−(x²−10x+25) = 20x." },
            { type: "numeric", difficulty: "hard", q: "Use (a + b)² to compute 101² = (100 + 1)². What is the answer?", answer: "10201", explanation: "100² + 2(100)(1) + 1² = 10000 + 200 + 1 = 10201." },
            { type: "short", difficulty: "hard", q: "Expand (x + y)² and identify each term.", answer: "(x + y)² = x² + 2xy + y². First term x² (first squared), middle term 2xy (twice the product), last term y² (second squared).", explanation: "Perfect square trinomial: a² + 2ab + b²." },
            { type: "mcq", difficulty: "hard", q: "(x − 4)² expanded is x² − 8x + 16. The value when x = 5 is:", options: ["1", "9", "41", "16"], answer: 0, explanation: "25 − 40 + 16 = 1. (Or (5−4)² = 1²= 1.)" }
          ] },
        { text: "Use the special product (a + b)(a − b).",
          resources: [
            { type: "interactive", title: "Difference of two squares", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "(a+b)(a−b) = a² − b²." },
            { type: "interactive", title: "Special products", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "(a + b)(a − b) = a² − b².", answer: true, explanation: "This is the difference of two squares identity." },
            { type: "mcq", difficulty: "easy", q: "(x + 5)(x − 5) = ?", options: ["x² − 25", "x² + 25", "x² − 10x − 25", "x² − 10x"], answer: 0, explanation: "Difference of squares: x² − 5² = x² − 25." },
            { type: "mcq", difficulty: "medium", q: "(x + 4)(x − 4) = ?", options: ["x² − 16", "x² + 16", "x² − 8x − 16", "x² − 16x"], answer: 0, explanation: "Difference of two squares: x² − 4² = x² − 16." },
            { type: "numeric", difficulty: "medium", q: "(a + b)(a − b) = a² − b². With a = 10 and b = 3, evaluate a² − b².", answer: "91", explanation: "100 − 9 = 91." },
            { type: "mcq", difficulty: "medium", q: "(2x + 3)(2x − 3) = ?", options: ["4x² − 9", "4x² + 9", "4x² − 6x − 9", "2x² − 9"], answer: 0, explanation: "(2x)² − 3² = 4x² − 9." },
            { type: "numeric", difficulty: "medium", q: "Use the difference of squares formula: 19 × 21 = (20 − 1)(20 + 1) = 20² − 1². What is the answer?", answer: "399", explanation: "400 − 1 = 399." },
            { type: "mcq", difficulty: "medium", q: "(3x + 7)(3x − 7) = ?", options: ["9x² − 49", "9x² + 49", "6x² − 49", "9x² − 14x − 49"], answer: 0, explanation: "9x² − 49." },
            { type: "tf", difficulty: "medium", q: "(a + b)(a − b) always gives a quadratic with no middle term.", answer: true, explanation: "The outer and inner products cancel out: +ab − ab = 0." },
            { type: "numeric", difficulty: "hard", q: "Compute 52 × 48 using the difference of squares with a = 50 and b = 2.", answer: "2496", explanation: "50² − 2² = 2500 − 4 = 2496." },
            { type: "mcq", difficulty: "hard", q: "Which factorisation uses the difference of squares?", options: ["x² − 36 = (x+6)(x−6)", "x² + 36 = (x+6)²", "x² − 36 = (x−6)²", "x² + 36 is prime"], answer: 0, explanation: "x² − 36 = x² − 6² = (x+6)(x−6)." },
            { type: "short", difficulty: "hard", q: "Explain why x² + 4 cannot be factorised using the difference of squares.", answer: "The difference of squares requires a minus sign: a² − b². Since x² + 4 has a plus sign, it cannot be factorised this way (it is a sum of squares, which has no real factors).", explanation: "Sum of squares (a² + b²) does not factorise over the real numbers." },
            { type: "mcq", difficulty: "hard", q: "Simplify (x + y)² − (x − y)².", options: ["4xy", "2x²+2y²", "4x²", "0"], answer: 0, explanation: "(x²+2xy+y²) − (x²−2xy+y²) = 4xy." }
          ] },
        { text: "Multiply a binomial by a trinomial.",
          resources: [
            { type: "interactive", title: "Multiplying polynomials", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "Each term times each term." },
            { type: "interactive", title: "Multiplying polynomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "When multiplying a binomial by a trinomial, every term in the binomial multiplies every term in the trinomial.", answer: true, explanation: "This gives 2 × 3 = 6 products before simplifying." },
            { type: "short", difficulty: "medium", q: "When multiplying a binomial (2 terms) by a trinomial (3 terms), how many products do you get before simplifying?", answer: "2 × 3 = 6 products (terms) before collecting like terms.", explanation: "Each term in the first bracket multiplies each in the second." },
            { type: "mcq", difficulty: "hard", q: "Expand (x + 1)(x² + 2x + 1). The constant term is:", options: ["1", "2", "0", "3"], answer: 0, explanation: "The constant comes from 1 × 1 = 1." },
            { type: "mcq", difficulty: "medium", q: "(x + 2)(x² + x + 1) — the coefficient of x² is:", options: ["3", "2", "1", "4"], answer: 0, explanation: "Expand: x(x²+x+1) + 2(x²+x+1) = x³+x²+x + 2x²+2x+2 = x³+3x²+3x+2. The coefficient of x² is 3." },
            { type: "mcq", difficulty: "medium", q: "(x − 1)(x² + x + 1) = ?", options: ["x³ − 1", "x³ + 1", "x³ − x", "x³ + x − 1"], answer: 0, explanation: "This is the difference of cubes: x³ − 1." },
            { type: "numeric", difficulty: "medium", q: "Expand (x + 3)(x² + 2x + 1). What is the coefficient of x?", answer: "7", explanation: "x(x²+2x+1)+3(x²+2x+1) = x³+2x²+x+3x²+6x+3 = x³+5x²+7x+3. Coefficient of x = 7." },
            { type: "mcq", difficulty: "hard", q: "Expand (x + 2)(x² − 2x + 4). The result is:", options: ["x³ + 8", "x³ − 8", "x³ + 6x + 8", "x³ − 6x + 8"], answer: 0, explanation: "x³ − 2x² + 4x + 2x² − 4x + 8 = x³ + 8 (sum of cubes pattern)." },
            { type: "mcq", difficulty: "hard", q: "After expanding (x + a)(x² + bx + c), how many terms can appear at most before simplifying?", options: ["6", "3", "4", "9"], answer: 0, explanation: "2 terms × 3 terms = 6 products." },
            { type: "numeric", difficulty: "hard", q: "Expand (2x + 1)(x² − x + 3). What is the constant term?", answer: "3", explanation: "1 × 3 = 3 (the only constant comes from 1 × 3)." },
            { type: "short", difficulty: "hard", q: "Expand (x − 2)(x² + 3x − 1) and collect like terms.", answer: "x³+3x²−x−2x²−6x+2 = x³+x²−7x+2.", explanation: "Distribute x and then −2 across all three terms of the trinomial." },
            { type: "mcq", difficulty: "hard", q: "Expand (x + 1)(x + 2)(x + 3). The coefficient of x is:", options: ["11", "6", "3", "1"], answer: 0, explanation: "Expand first two: (x²+3x+2)(x+3)=x³+3x²+3x²+9x+2x+6=x³+6x²+11x+6. Coefficient of x = 11." },
            { type: "tf", difficulty: "hard", q: "(x + a)(x² − ax + a²) = x³ + a³.", answer: true, explanation: "This is the sum of cubes identity." }
          ] },
        { text: "Work with rational (fractional) coefficients.",
          resources: [
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Working with fractional coefficients." },
            { type: "interactive", title: "Expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A coefficient of 1/2 in front of x means half of x.", answer: true, explanation: "(1/2)x = x/2." },
            { type: "mcq", difficulty: "easy", q: "Simplify (1/2)x + (1/2)x.", options: ["x", "(1/2)x", "x²", "(1/4)x"], answer: 0, explanation: "1/2 + 1/2 = 1, so the result is x." },
            { type: "numeric", difficulty: "easy", q: "If x = 4, evaluate (1/2)x + 3.", answer: "5", explanation: "(1/2)(4) + 3 = 2 + 3 = 5." },
            { type: "mcq", difficulty: "medium", q: "Simplify (2/3)x + (1/3)x.", options: ["x", "(1/3)x", "(2/3)x", "x²"], answer: 0, explanation: "2/3 + 1/3 = 3/3 = 1, so the result is x." },
            { type: "numeric", difficulty: "medium", q: "If x = 6, evaluate (3/2)x − 1.", answer: "8", explanation: "(3/2)(6) − 1 = 9 − 1 = 8." },
            { type: "mcq", difficulty: "medium", q: "Expand (1/2)(4x + 6).", options: ["2x + 3", "4x + 3", "2x + 6", "x + 3"], answer: 0, explanation: "(1/2) × 4x = 2x; (1/2) × 6 = 3." },
            { type: "mcq", difficulty: "medium", q: "Simplify (3/4)x + (1/4)x.", options: ["x", "(3/4)x", "(1/4)x", "(3/16)x"], answer: 0, explanation: "3/4 + 1/4 = 1." },
            { type: "numeric", difficulty: "medium", q: "If t = 8, evaluate (1/4)t + (1/2)t.", answer: "6", explanation: "2 + 4 = 6." },
            { type: "mcq", difficulty: "hard", q: "Expand (1/3)(6x − 9).", options: ["2x − 3", "6x − 3", "2x − 9", "2x + 3"], answer: 0, explanation: "(1/3) × 6x = 2x; (1/3) × (−9) = −3." },
            { type: "numeric", difficulty: "hard", q: "Simplify (5/6)x − (1/6)x − (1/3)x. What is the coefficient of x?", answer: "0.33", explanation: "5/6 − 1/6 − 2/6 = 2/6 = 1/3 ≈ 0.33." },
            { type: "short", difficulty: "hard", q: "Expand (1/2)(2x + 4) + (1/3)(3x − 6) and simplify.", answer: "(x + 2) + (x − 2) = 2x.", explanation: "Distribute each fraction, then collect like terms." },
            { type: "mcq", difficulty: "hard", q: "Which expression is equivalent to (3/5)x + (2/5)(x + 10)?", options: ["x + 4", "x + 10", "3x/5 + 2", "x + 2"], answer: 0, explanation: "(3/5)x + (2/5)x + 4 = x + 4." }
          ] },
        { text: "Recognise equivalent expressions.",
          resources: [
            { type: "interactive", title: "Equivalent expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "When two expressions are equal." },
            { type: "interactive", title: "Algebra basics", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Equivalent forms." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Simplifying and substituting into algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Two expressions are equivalent if they give the same value for every value of the variable.", answer: true, explanation: "Equivalent expressions are always equal, not just for one value." },
            { type: "tf", difficulty: "easy", q: "2(x + 3) and 2x + 6 are equivalent expressions.", answer: true, explanation: "Expanding 2(x + 3) gives 2x + 6." },
            { type: "mcq", difficulty: "easy", q: "Which is equivalent to 4x + 8?", options: ["4(x + 2)", "4(x + 8)", "x + 2", "4x² + 8"], answer: 0, explanation: "Factor out 4: 4(x + 2)." },
            { type: "mcq", difficulty: "medium", q: "Which is equivalent to x² + 2x?", options: ["x(x + 2)", "x + 2", "(x + 2)²", "x²(1 + 2)"], answer: 0, explanation: "Factor out x: x(x + 2)." },
            { type: "tf", difficulty: "medium", q: "3x + 9 is equivalent to 3(x + 3).", answer: true, explanation: "3(x + 3) = 3x + 9." },
            { type: "mcq", difficulty: "medium", q: "Which pair of expressions are equivalent?", options: ["x² + 4x + 4 and (x+2)²", "x² + 4 and (x+2)²", "x² − 4 and (x−2)²", "x² and (x+2)²"], answer: 0, explanation: "(x+2)² = x² + 4x + 4." },
            { type: "mcq", difficulty: "medium", q: "Which is equivalent to x² − 9?", options: ["(x+3)(x−3)", "(x−3)²", "(x+3)²", "(x−9)(x+1)"], answer: 0, explanation: "Difference of squares: x² − 9 = (x+3)(x−3)." },
            { type: "numeric", difficulty: "medium", q: "Verify that 5(x − 2) and 5x − 10 are equivalent by substituting x = 4. What is the value?", answer: "10", explanation: "5(4−2) = 10 and 5(4) − 10 = 10. Both equal 10." },
            { type: "tf", difficulty: "hard", q: "x² + 2x + 1 and (x + 1)² are equivalent.", answer: true, explanation: "(x+1)² = x² + 2x + 1." },
            { type: "mcq", difficulty: "hard", q: "Which is equivalent to 2x² + 4x?", options: ["2x(x + 2)", "2x(x + 4)", "x(2x + 4x)", "2(x² + 4)"], answer: 0, explanation: "Factor 2x: 2x(x + 2)." },
            { type: "short", difficulty: "hard", q: "Are x(x + 1) and x² + x equivalent? Verify with x = 3.", answer: "x(x+1) = x² + x by expanding. With x = 3: 3 × 4 = 12 and 9 + 3 = 12. Yes, they are equivalent.", explanation: "Test equivalence by expanding and by substituting a value." },
            { type: "mcq", difficulty: "hard", q: "Which expression is NOT equivalent to the others?", options: ["(x−2)(x+2)", "x² − 4", "x² + 4", "(x+2)(x−2)"], answer: 2, explanation: "x² + 4 ≠ x² − 4; the others all equal x² − 4." }
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
            { type: "interactive", title: "Factoring intro", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions, formulae and equations (Stage 8)", note: "Factorising expressions is covered within the Cambridge Stage 8/9 'Expressions, formulae and equations' units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Factorising is the reverse of expanding.", answer: true, explanation: "Factorising puts an expression back into brackets." },
            { type: "mcq", difficulty: "easy", q: "Factorise 3x + 6.", options: ["3(x + 2)", "3(x + 6)", "x(3 + 6)", "3x + 6"], answer: 0, explanation: "HCF is 3: 3x + 6 = 3(x + 2)." },
            { type: "tf", difficulty: "easy", q: "Expanding 4(x + 5) gives 4x + 20.", answer: true, explanation: "4 × x = 4x and 4 × 5 = 20." },
            { type: "mcq", difficulty: "easy", q: "Which of these is already factorised?", options: ["2(x + 3)", "2x + 6", "x + 3", "2x + 3"], answer: 0, explanation: "2(x + 3) is the factorised form; 2x + 6 is its expansion." },
            { type: "numeric", difficulty: "easy", q: "What is the HCF of 6 and 9?", answer: "3", explanation: "The highest common factor of 6 and 9 is 3." },
            { type: "mcq", difficulty: "medium", q: "Expanding and then factorising an expression should return you to:", options: ["the original expression", "a different expression", "zero", "the same degree but different terms"], answer: 0, explanation: "Factorising undoes expanding, so you get back to the original." },
            { type: "mcq", difficulty: "medium", q: "Factorise 4x + 12.", options: ["4(x + 3)", "4(x + 12)", "2(2x + 6)", "4x(1 + 3)"], answer: 0, explanation: "HCF 4: 4(x + 3). Note 2(2x+6) is not fully factorised." },
            { type: "tf", difficulty: "medium", q: "3(2x − 5) expanded is 6x − 15.", answer: true, explanation: "3 × 2x = 6x; 3 × (−5) = −15." },
            { type: "mcq", difficulty: "medium", q: "To factorise, you should first find:", options: ["the HCF of all terms", "the LCM of all terms", "the square root of the expression", "the degree"], answer: 0, explanation: "Always find the highest common factor first." },
            { type: "mcq", difficulty: "hard", q: "Factorise 2x² + 4x.", options: ["2x(x + 2)", "2(x² + 2x)", "x(2x + 4)", "2x(x + 4)"], answer: 0, explanation: "HCF is 2x: 2x(x + 2)." },
            { type: "short", difficulty: "hard", q: "Expand (x + 3)(x − 2) then explain how you would factorise the result back to brackets.", answer: "(x+3)(x−2) = x² + x − 6. To factorise x² + x − 6, find two numbers that multiply to −6 and add to +1: they are +3 and −2, giving (x+3)(x−2).", explanation: "Factorising quadratics reverses FOIL expansion." },
            { type: "mcq", difficulty: "hard", q: "Factorise 15x − 9.", options: ["3(5x − 3)", "9(x − 1)", "5(3x − 9)", "3(5x − 9)"], answer: 0, explanation: "HCF 3: 15x − 9 = 3(5x − 3)." }
          ] },
        { text: "Carry out simple factorisation (common factors).",
          resources: [
            { type: "interactive", title: "Factoring", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Taking out the highest common factor." },
            { type: "interactive", title: "Khan Academy: Factoring", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked factorising examples." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions, formulae and equations (Stage 8)", note: "Factorising expressions is covered within the Cambridge Stage 8/9 'Expressions, formulae and equations' units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Factorise 5x + 10.", options: ["5(x + 2)", "5(x + 10)", "x(5 + 10)", "10(x + 1)"], answer: 0, explanation: "HCF 5: 5(x + 2)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 8a − 12.", options: ["4(2a − 3)", "2(4a − 6)", "8(a − 12)", "4(2a − 12)"], answer: 0, explanation: "HCF 4: 4(2a − 3)." },
            { type: "mcq", difficulty: "easy", q: "Factorise 6y + 9.", options: ["3(2y + 3)", "3(y + 3)", "6(y + 9)", "9(y + 1)"], answer: 0, explanation: "HCF 3: 3(2y + 3)." },
            { type: "mcq", difficulty: "easy", q: "Factorise 10m − 5.", options: ["5(2m − 1)", "5(m − 1)", "10(m − 5)", "5(2m − 5)"], answer: 0, explanation: "HCF 5: 5(2m − 1)." },
            { type: "numeric", difficulty: "easy", q: "The HCF of 12 and 8 is:", answer: "4", explanation: "12 = 4 × 3 and 8 = 4 × 2; HCF = 4." },
            { type: "mcq", difficulty: "medium", q: "Factorise 14p + 21.", options: ["7(2p + 3)", "7(p + 3)", "2(7p + 21)", "7(2p + 21)"], answer: 0, explanation: "HCF 7: 7(2p + 3)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 15n − 20.", options: ["5(3n − 4)", "5(n − 4)", "15(n − 20)", "5(3n − 20)"], answer: 0, explanation: "HCF 5: 5(3n − 4)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 4x + 4y.", options: ["4(x + y)", "4x(1 + y)", "x(4 + y)", "2(2x + 2y)"], answer: 0, explanation: "HCF 4: 4(x + y)." },
            { type: "tf", difficulty: "medium", q: "The fully factorised form of 18t − 12 is 6(3t − 2).", answer: true, explanation: "HCF of 18 and 12 is 6: 6(3t − 2)." },
            { type: "mcq", difficulty: "hard", q: "Factorise 24ab + 36b.", options: ["12b(2a + 3)", "6b(4a + 6)", "12(2ab + 3b)", "4b(6a + 9)"], answer: 0, explanation: "HCF is 12b: 12b(2a + 3)." },
            { type: "short", difficulty: "hard", q: "Factorise 30x − 45y + 15. Show your working.", answer: "HCF of 30, 45 and 15 is 15. 15(2x − 3y + 1).", explanation: "Divide each term by 15 to find what remains inside the brackets." },
            { type: "mcq", difficulty: "hard", q: "Factorise 16m + 24n − 8.", options: ["8(2m + 3n − 1)", "4(4m + 6n − 2)", "8(2m + 3n − 8)", "2(8m + 12n − 4)"], answer: 0, explanation: "HCF 8: 8(2m + 3n − 1)." }
          ] },
        { text: "Factorise expressions involving powers.",
          resources: [
            { type: "interactive", title: "Factoring with powers", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Common variable factors." },
            { type: "interactive", title: "Factoring", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions, formulae and equations (Stage 8)", note: "Factorising expressions is covered within the Cambridge Stage 8/9 'Expressions, formulae and equations' units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Factorise x² + x.", options: ["x(x + 1)", "x²(1 + x)", "x(x² + 1)", "1(x² + x)"], answer: 0, explanation: "Common factor x: x(x + 1)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 6x² + 9x.", options: ["3x(2x + 3)", "3(2x² + 3x)", "x(6x + 9)", "3x(2x + 9)"], answer: 0, explanation: "HCF is 3x: 3x(2x + 3)." },
            { type: "mcq", difficulty: "easy", q: "Factorise x³ + x².", options: ["x²(x + 1)", "x(x + 1)", "x³(1 + x)", "x²(x + x)"], answer: 0, explanation: "Common factor x²: x²(x + 1)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 4x² − 8x.", options: ["4x(x − 2)", "4(x² − 2x)", "x(4x − 8)", "4x(x − 8)"], answer: 0, explanation: "HCF 4x: 4x(x − 2)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 5x³ + 10x².", options: ["5x²(x + 2)", "5x(x² + 2x)", "x²(5x + 10)", "5x³(1 + 2)"], answer: 0, explanation: "HCF 5x²: 5x²(x + 2)." },
            { type: "tf", difficulty: "easy", q: "The HCF of x³ and x² is x².", answer: true, explanation: "The lower of the two powers of x is x²." },
            { type: "mcq", difficulty: "medium", q: "Factorise 12x² + 18x.", options: ["6x(2x + 3)", "6(2x² + 3x)", "3x(4x + 6)", "6x(2x + 18)"], answer: 0, explanation: "HCF 6x: 6x(2x + 3)." },
            { type: "mcq", difficulty: "hard", q: "Factorise 4x³ − 6x² + 2x.", options: ["2x(2x² − 3x + 1)", "2(2x³ − 3x² + x)", "x(4x² − 6x + 2)", "2x(2x² − 6x + 1)"], answer: 0, explanation: "HCF 2x: 2x(2x² − 3x + 1)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 3a³ + 9a.", options: ["3a(a² + 3)", "3a²(a + 3)", "3(a³ + 3a)", "9a(a + 1)"], answer: 0, explanation: "HCF 3a: 3a(a² + 3)." },
            { type: "mcq", difficulty: "hard", q: "Factorise 8x⁴ + 12x³.", options: ["4x³(2x + 3)", "4x(2x³ + 3x²)", "x³(8x + 12)", "4x²(2x² + 3x)"], answer: 0, explanation: "HCF 4x³: 4x³(2x + 3)." },
            { type: "short", difficulty: "hard", q: "Factorise 10x³ − 15x² + 5x fully.", answer: "HCF is 5x. 5x(2x² − 3x + 1).", explanation: "Divide every term by 5x: 10x³/5x = 2x², 15x²/5x = 3x, 5x/5x = 1." },
            { type: "tf", difficulty: "hard", q: "3x²(2x + 1) is the fully factorised form of 6x³ + 3x².", answer: true, explanation: "6x³ + 3x² = 3x²(2x + 1). Check: 3x² × 2x = 6x³ and 3x² × 1 = 3x²." }
          ] },
        { text: "Factorise by grouping.",
          resources: [
            { type: "interactive", title: "Factoring by grouping", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Grouping pairs of terms." },
            { type: "interactive", title: "Factoring", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Grouping method." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions, formulae and equations (Stage 8)", note: "Factorising expressions is covered within the Cambridge Stage 8/9 'Expressions, formulae and equations' units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Factorise x(a + b) + 2(a + b).", options: ["(a + b)(x + 2)", "(a + b)(x − 2)", "x + 2 + a + b", "(a + b)²"], answer: 0, explanation: "Common factor (a + b): (a + b)(x + 2)." },
            { type: "short", difficulty: "hard", q: "Factorise ax + ay + bx + by by grouping.", answer: "a(x + y) + b(x + y) = (x + y)(a + b).", explanation: "Group in pairs, take out common factors, then the common bracket." },
            { type: "tf", difficulty: "medium", q: "Factorising by grouping requires splitting a four-term expression into two pairs.", answer: true, explanation: "You group terms in pairs so each pair shares a common factor." },
            { type: "mcq", difficulty: "medium", q: "Factorise xy + x + 2y + 2.", options: ["(x + 2)(y + 1)", "(x + 1)(y + 2)", "(x − 2)(y + 1)", "(x + 2)(y − 1)"], answer: 0, explanation: "Group: x(y + 1) + 2(y + 1) = (x + 2)(y + 1)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 3p + 3q + rp + rq.", options: ["(3 + r)(p + q)", "(p + q)(r + 3)", "(3p + r)(p + q)", "(3 + r)(p + q + 1)"], answer: 0, explanation: "3(p + q) + r(p + q) = (3 + r)(p + q)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 2x + 6 + xy + 3y.", options: ["(x + 3)(2 + y)", "(2 + x)(y + 3)", "(x + y)(2 + 3)", "(2 + y)(x + 3)"], answer: 0, explanation: "2(x + 3) + y(x + 3) = (x + 3)(2 + y)." },
            { type: "mcq", difficulty: "hard", q: "Factorise ab − ac + db − dc.", options: ["(a + d)(b − c)", "(a − d)(b − c)", "(b − c)(a + d)", "(b + c)(a − d)"], answer: 0, explanation: "a(b − c) + d(b − c) = (a + d)(b − c)." },
            { type: "mcq", difficulty: "hard", q: "Factorise x² + 3x + 2x + 6.", options: ["(x + 2)(x + 3)", "(x + 6)(x + 1)", "(x + 3)(x − 2)", "(x + 2)(x + 2)"], answer: 0, explanation: "x(x + 3) + 2(x + 3) = (x + 2)(x + 3)." },
            { type: "tf", difficulty: "hard", q: "4x − 4y + ax − ay can be factorised as (4 + a)(x − y).", answer: true, explanation: "4(x − y) + a(x − y) = (4 + a)(x − y)." },
            { type: "short", difficulty: "hard", q: "Factorise 2mn + 6m − n − 3 by grouping.", answer: "Group: 2m(n + 3) − 1(n + 3) = (2m − 1)(n + 3).", explanation: "Factor each pair: 2m(n+3) and −1(n+3), then extract the common bracket." },
            { type: "mcq", difficulty: "easy", q: "In factorising by grouping, what do both groups of terms need to share after the first step?", options: ["a common bracket", "the same coefficient", "the same variable", "the same degree"], answer: 0, explanation: "After factorising each pair, a common bracket appears that you can then factor out." },
            { type: "mcq", difficulty: "medium", q: "Factorise pq − 3p + 4q − 12 by grouping.", options: ["(q − 3)(p + 4)", "(q + 3)(p − 4)", "(p − 3)(q + 4)", "(p + 4)(q + 3)"], answer: 0, explanation: "p(q − 3) + 4(q − 3) = (q − 3)(p + 4)." }
          ] },
        { text: "Apply the rules (laws) of factorisation.",
          resources: [
            { type: "interactive", title: "Factoring rules", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Always take out the HCF first." },
            { type: "interactive", title: "Factoring", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions, formulae and equations (Stage 8)", note: "Factorising expressions is covered within the Cambridge Stage 8/9 'Expressions, formulae and equations' units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The HCF of 4x and 6x² is:", options: ["2x", "2x²", "4x", "12x²"], answer: 0, explanation: "Number HCF 2, variable HCF x → 2x." },
            { type: "tf", difficulty: "easy", q: "You should always take out the highest common factor first when factorising.", answer: true, explanation: "This simplifies what remains inside the brackets." },
            { type: "mcq", difficulty: "easy", q: "The HCF of 10 and 15 is:", options: ["5", "2", "10", "3"], answer: 0, explanation: "10 = 2 × 5, 15 = 3 × 5. HCF = 5." },
            { type: "tf", difficulty: "easy", q: "After taking out the HCF, the terms inside the bracket should have no further common factor.", answer: true, explanation: "If they do, the HCF was not the highest." },
            { type: "mcq", difficulty: "medium", q: "The HCF of 8x² and 12x is:", options: ["4x", "4x²", "8x", "2x"], answer: 0, explanation: "Number HCF 4, variable HCF x → 4x." },
            { type: "mcq", difficulty: "medium", q: "Factorise 9a + 12 fully.", options: ["3(3a + 4)", "3a(3 + 4)", "9(a + 12)", "3(3a + 12)"], answer: 0, explanation: "HCF 3: 3(3a + 4)." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 4x.", options: ["x(x − 4)", "x(x + 4)", "4(x − 4)", "x²(1 − 4)"], answer: 0, explanation: "HCF x: x(x − 4)." },
            { type: "tf", difficulty: "medium", q: "The factorised form 2(3x + 6) is not fully factorised because 3x + 6 can be factorised further.", answer: true, explanation: "2(3x + 6) = 2 × 3(x + 2) = 6(x + 2). You should have used HCF 6 initially." },
            { type: "mcq", difficulty: "hard", q: "Factorise 18x²y − 12xy² fully.", options: ["6xy(3x − 2y)", "6x(3xy − 2y²)", "6xy(3x − 12y)", "12xy(x − y)"], answer: 0, explanation: "HCF 6xy: 6xy(3x − 2y)." },
            { type: "short", difficulty: "hard", q: "Factorise 20a³b − 15a²b² + 5ab³ fully.", answer: "HCF is 5ab. 5ab(4a² − 3ab + b²).", explanation: "Divide every term by 5ab to find what goes inside the brackets." },
            { type: "mcq", difficulty: "hard", q: "Which is the fully factorised form of 6x³ − 9x² + 3x?", options: ["3x(2x² − 3x + 1)", "3(2x³ − 3x² + x)", "x(6x² − 9x + 3)", "3x(2x² − 9x + 1)"], answer: 0, explanation: "HCF 3x: 3x(2x² − 3x + 1)." },
            { type: "mcq", difficulty: "medium", q: "The HCF of 6a²b and 9ab² is:", options: ["3ab", "6ab", "3a²b²", "3ab²"], answer: 0, explanation: "Number HCF 3; variables use lowest powers a and b → 3ab." }
          ] },
        { text: "Factorise quadratics by splitting the middle term.",
          resources: [
            { type: "interactive", title: "Factoring quadratics", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring-quadratics.html", note: "Finding two numbers that multiply and add." },
            { type: "interactive", title: "Khan Academy: Factoring quadratics", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Splitting the middle term." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions, formulae and equations (Stage 8)", note: "Factorising expressions is covered within the Cambridge Stage 8/9 'Expressions, formulae and equations' units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Factorise x² + 5x + 6.", options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 2)(x + 4)", "(x − 2)(x − 3)"], answer: 0, explanation: "2 and 3 multiply to 6 and add to 5." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² + 7x + 12.", options: ["(x + 3)(x + 4)", "(x + 2)(x + 6)", "(x + 1)(x + 12)", "(x + 5)(x + 2)"], answer: 0, explanation: "3 and 4 multiply to 12 and add to 7." },
            { type: "tf", difficulty: "easy", q: "To factorise x² + bx + c, find two numbers that multiply to c and add to b.", answer: true, explanation: "These two numbers become the constants in the two brackets." },
            { type: "mcq", difficulty: "easy", q: "Factorise x² + 4x + 3.", options: ["(x + 1)(x + 3)", "(x + 2)(x + 2)", "(x + 4)(x + 1)", "(x + 3)(x + 3)"], answer: 0, explanation: "1 and 3 multiply to 3 and add to 4." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 5x + 6.", options: ["(x − 2)(x − 3)", "(x + 2)(x + 3)", "(x − 1)(x − 6)", "(x − 6)(x + 1)"], answer: 0, explanation: "−2 and −3 multiply to +6 and add to −5." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² + x − 6.", options: ["(x + 3)(x − 2)", "(x − 3)(x + 2)", "(x + 6)(x − 1)", "(x + 2)(x − 2)"], answer: 0, explanation: "+3 and −2 multiply to −6 and add to +1." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 2x − 8.", options: ["(x − 4)(x + 2)", "(x + 4)(x − 2)", "(x − 8)(x + 1)", "(x − 2)(x + 4)"], answer: 0, explanation: "−4 and +2 multiply to −8 and add to −2." },
            { type: "mcq", difficulty: "hard", q: "Factorise x² − 9x + 20.", options: ["(x − 4)(x − 5)", "(x + 4)(x − 5)", "(x − 2)(x − 10)", "(x − 4)(x + 5)"], answer: 0, explanation: "−4 and −5 multiply to +20 and add to −9." },
            { type: "tf", difficulty: "medium", q: "x² − 16 can be factorised as (x + 4)(x − 4).", answer: true, explanation: "This is the difference of two squares: x² − 4² = (x+4)(x−4)." },
            { type: "mcq", difficulty: "hard", q: "Factorise x² + 2x − 15.", options: ["(x + 5)(x − 3)", "(x − 5)(x + 3)", "(x + 15)(x − 1)", "(x + 3)(x − 5)"], answer: 0, explanation: "+5 and −3 multiply to −15 and add to +2." },
            { type: "short", difficulty: "hard", q: "Factorise x² − x − 12. Verify your answer by expanding.", answer: "(x − 4)(x + 3). Check: x² + 3x − 4x − 12 = x² − x − 12. Correct.", explanation: "−4 and +3 multiply to −12 and add to −1." },
            { type: "mcq", difficulty: "hard", q: "Factorise x² + 6x + 9.", options: ["(x + 3)²", "(x + 3)(x − 3)", "(x + 9)(x + 1)", "(x + 3)(x + 3) = (x+3)²"], answer: 0, explanation: "3 and 3 multiply to 9 and add to 6 — a perfect square." }
          ] },
        { text: "Find the HCF and LCM of algebraic terms.",
          resources: [
            { type: "interactive", title: "Factoring", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "HCF and LCM of algebraic terms." },
            { type: "interactive", title: "GCF of monomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions, formulae and equations (Stage 8)", note: "Factorising expressions is covered within the Cambridge Stage 8/9 'Expressions, formulae and equations' units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "The HCF of 6x²y and 9xy² is:", options: ["3xy", "3x²y²", "18x²y²", "xy"], answer: 0, explanation: "Number HCF 3, then lowest powers x and y → 3xy." },
            { type: "mcq", difficulty: "medium", q: "The LCM of 2x and 3x is:", options: ["6x", "5x", "x", "6x²"], answer: 0, explanation: "Number LCM 6, variable x → 6x." },
            { type: "mcq", difficulty: "easy", q: "The HCF of 4a and 8a is:", options: ["4a", "8a", "2a", "32a"], answer: 0, explanation: "Number HCF 4, variable a → 4a." },
            { type: "mcq", difficulty: "easy", q: "The LCM of 4x and 6x is:", options: ["12x", "24x", "2x", "12x²"], answer: 0, explanation: "LCM(4, 6) = 12, variable x → 12x." },
            { type: "mcq", difficulty: "medium", q: "The HCF of 12ab and 8b is:", options: ["4b", "4ab", "12b", "8ab"], answer: 0, explanation: "Number HCF 4, variable HCF b (b is in both) → 4b." },
            { type: "tf", difficulty: "medium", q: "The LCM of 3x and 5x² is 15x².", answer: true, explanation: "LCM(3, 5) = 15; LCM of x and x² is x² → 15x²." },
            { type: "mcq", difficulty: "medium", q: "The LCM of 6a and 4a² is:", options: ["12a²", "24a²", "2a", "12a"], answer: 0, explanation: "LCM(6, 4) = 12; LCM(a, a²) = a² → 12a²." },
            { type: "mcq", difficulty: "hard", q: "The HCF of 15x²y² and 20xy³ is:", options: ["5xy²", "5x²y³", "60x²y³", "5xy"], answer: 0, explanation: "Number HCF 5; lowest powers x and y² → 5xy²." },
            { type: "mcq", difficulty: "hard", q: "The LCM of 4x²y and 6xy² is:", options: ["12x²y²", "24x²y²", "2xy", "12x³y³"], answer: 0, explanation: "LCM(4,6) = 12; LCM(x², x) = x²; LCM(y, y²) = y² → 12x²y²." },
            { type: "tf", difficulty: "hard", q: "The HCF of a³, a²b and ab² is a.", answer: true, explanation: "The only factor common to all three terms is a (the lowest power of a, and neither b appears in a³)." },
            { type: "short", difficulty: "hard", q: "Find the HCF and LCM of 6x²y and 4xy². Show your working.", answer: "HCF: number HCF(6,4)=2; variables min powers x, y → 2xy. LCM: number LCM(6,4)=12; variables max powers x², y² → 12x²y².", explanation: "For HCF take lowest powers; for LCM take highest powers." },
            { type: "mcq", difficulty: "medium", q: "To add the fractions 1/(3x) and 1/(4x²), you need the LCM of the denominators. What is it?", options: ["12x²", "7x²", "12x", "12x³"], answer: 0, explanation: "LCM(3,4) = 12; LCM(x, x²) = x² → 12x²." }
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
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Adding and subtracting algebraic fractions." },
            { type: "interactive", title: "Khan Academy: Algebraic fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked algebraic-fraction examples." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Algebraic fractions are covered within the Cambridge Stage 8/9 algebra units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "x/3 + x/3 = ?", options: ["2x/3", "x/3", "2x/6", "x²/3"], answer: 0, explanation: "Same denominator: add the tops, x + x = 2x → 2x/3." },
            { type: "mcq", difficulty: "medium", q: "x/2 + x/4 = ?", options: ["3x/4", "2x/6", "x/6", "x/8"], answer: 0, explanation: "Common denominator 4: 2x/4 + x/4 = 3x/4." },
            { type: "tf", difficulty: "easy", q: "To add algebraic fractions, you need a common denominator.", answer: true, explanation: "Just like numeric fractions, you must find a common denominator before adding." },
            { type: "mcq", difficulty: "easy", q: "x/5 + 2x/5 = ?", options: ["3x/5", "x/10", "2x²/5", "3x/10"], answer: 0, explanation: "Same denominator: (x + 2x)/5 = 3x/5." },
            { type: "mcq", difficulty: "medium", q: "x/3 − x/6 = ?", options: ["x/6", "x/3", "2x/6", "x/18"], answer: 0, explanation: "LCD 6: 2x/6 − x/6 = x/6." },
            { type: "mcq", difficulty: "medium", q: "a/4 + a/8 = ?", options: ["3a/8", "2a/8", "a/12", "4a/8"], answer: 0, explanation: "LCD 8: 2a/8 + a/8 = 3a/8." },
            { type: "mcq", difficulty: "medium", q: "2x/5 + 3x/10 = ?", options: ["7x/10", "5x/15", "5x/10", "7x/15"], answer: 0, explanation: "LCD 10: 4x/10 + 3x/10 = 7x/10." },
            { type: "mcq", difficulty: "medium", q: "x/2 − x/6 = ?", options: ["x/3", "x/4", "x/8", "2x/8"], answer: 0, explanation: "LCD 6: 3x/6 − x/6 = 2x/6 = x/3." },
            { type: "numeric", difficulty: "medium", q: "Add x/4 + 3x/4. Give the coefficient of x in the answer.", answer: "1", explanation: "(x + 3x)/4 = 4x/4 = x. Coefficient is 1." },
            { type: "mcq", difficulty: "hard", q: "a/3 + b/5 = ?", options: ["(5a + 3b)/15", "(a + b)/8", "(a + b)/15", "(5a + 3b)/8"], answer: 0, explanation: "LCD 15: 5a/15 + 3b/15 = (5a + 3b)/15." },
            { type: "short", difficulty: "hard", q: "Simplify x/2 + x/3 − x/6.", answer: "LCD 6: 3x/6 + 2x/6 − x/6 = 4x/6 = 2x/3.", explanation: "Convert all fractions to the common denominator then combine." },
            { type: "mcq", difficulty: "hard", q: "p/4 − p/6 + p/12 = ?", options: ["p/6", "p/4", "p/3", "p/12"], answer: 0, explanation: "LCD 12: 3p/12 − 2p/12 + p/12 = 2p/12 = p/6." }
          ] },
        { text: "Multiply and divide algebraic fractions.",
          resources: [
            { type: "interactive", title: "Multiplying algebraic fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Cancel common factors." },
            { type: "interactive", title: "Algebraic fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Operations on fractions." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Algebraic fractions are covered within the Cambridge Stage 8/9 algebra units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(x/2) × (3/x) = ?", options: ["3/2", "x²/6", "3x/2", "3/(2x)"], answer: 0, explanation: "x cancels: (x × 3)/(2 × x) = 3/2." },
            { type: "mcq", difficulty: "hard", q: "(a/b) ÷ (a/c) = ?", options: ["c/b", "a²/(bc)", "b/c", "a/(bc)"], answer: 0, explanation: "Multiply by the reciprocal: (a/b)(c/a) = c/b." },
            { type: "tf", difficulty: "easy", q: "To multiply algebraic fractions, multiply the numerators and multiply the denominators.", answer: true, explanation: "(a/b) × (c/d) = ac/bd." },
            { type: "mcq", difficulty: "easy", q: "(x/3) × (6/x) = ?", options: ["2", "6x/3x", "x/2", "2x"], answer: 0, explanation: "x cancels: 6/(3) = 2." },
            { type: "mcq", difficulty: "medium", q: "(2x/5) × (10/x) = ?", options: ["4", "20x/5x", "4x", "2"], answer: 0, explanation: "2x × 10 = 20x; 5 × x = 5x; 20x/5x = 4." },
            { type: "mcq", difficulty: "medium", q: "(a/4) ÷ (a/8) = ?", options: ["2", "a²/32", "1/2", "8a/4a"], answer: 0, explanation: "(a/4)(8/a) = 8a/4a = 2." },
            { type: "mcq", difficulty: "medium", q: "(3x/4) × (8/(9x)) = ?", options: ["2/3", "24x/36x", "2x/3", "2/3x"], answer: 0, explanation: "3x × 8 = 24x; 4 × 9x = 36x; 24x/36x = 2/3." },
            { type: "mcq", difficulty: "medium", q: "(x²/3) ÷ (x/6) = ?", options: ["2x", "6x²/3x", "x/2", "2x²"], answer: 0, explanation: "(x²/3)(6/x) = 6x²/3x = 2x." },
            { type: "tf", difficulty: "medium", q: "To divide by a fraction, multiply by its reciprocal.", answer: true, explanation: "a ÷ (b/c) = a × (c/b)." },
            { type: "mcq", difficulty: "hard", q: "(4x/y) × (y²/(8x)) = ?", options: ["y/2", "4xy/8xy", "2y", "y/4"], answer: 0, explanation: "4x × y² = 4xy²; y × 8x = 8xy; 4xy²/8xy = y/2." },
            { type: "short", difficulty: "hard", q: "Simplify (6a²/b) ÷ (3a/b²).", answer: "(6a²/b) × (b²/3a) = 6a²b²/(3ab) = 2ab.", explanation: "Multiply by the reciprocal, then cancel common factors." },
            { type: "mcq", difficulty: "hard", q: "(p²/q) × (q²/p) ÷ (pq/2) = ?", options: ["2", "p²q²/(pq)", "q", "2p"], answer: 0, explanation: "Step 1: (p²q²)/(pq) = pq. Step 2: pq ÷ (pq/2) = pq × 2/(pq) = 2." }
          ] },
        { text: "Work with algebraic fractions that have numeric denominators.",
          resources: [
            { type: "interactive", title: "Simplifying fractions", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Dividing each term." },
            { type: "interactive", title: "Algebraic fractions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Algebraic fractions are covered within the Cambridge Stage 8/9 algebra units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Simplify (2x + 4)/2.", options: ["x + 2", "2x + 2", "x + 4", "x + 2x"], answer: 0, explanation: "Divide each term by 2: x + 2." },
            { type: "numeric", difficulty: "easy", q: "If x = 6, evaluate (3x)/2.", answer: "9", explanation: "(3 × 6)/2 = 18/2 = 9." },
            { type: "mcq", difficulty: "easy", q: "Simplify (5x)/5.", options: ["x", "5x", "1", "5"], answer: 0, explanation: "Numerator and denominator both have factor 5: 5x/5 = x." },
            { type: "mcq", difficulty: "medium", q: "Simplify (6x + 9)/3.", options: ["2x + 3", "2x + 9", "6x + 3", "3x + 3"], answer: 0, explanation: "Divide each term by 3: 2x + 3." },
            { type: "mcq", difficulty: "medium", q: "Simplify (12a − 8)/4.", options: ["3a − 2", "3a − 8", "12a − 2", "4a − 2"], answer: 0, explanation: "12a/4 = 3a; 8/4 = 2 → 3a − 2." },
            { type: "numeric", difficulty: "medium", q: "If y = 4, evaluate (2y + 6)/2.", answer: "7", explanation: "(8 + 6)/2 = 14/2 = 7." },
            { type: "mcq", difficulty: "medium", q: "Simplify (15m + 10)/5.", options: ["3m + 2", "3m + 10", "5m + 2", "15m + 2"], answer: 0, explanation: "Divide each term by 5: 3m + 2." },
            { type: "tf", difficulty: "medium", q: "(4x − 8)/4 = x − 2.", answer: true, explanation: "4x/4 = x and 8/4 = 2, so (4x−8)/4 = x − 2." },
            { type: "mcq", difficulty: "hard", q: "Simplify (3x² + 9x)/3.", options: ["x² + 3x", "x² + 9x", "3x² + 3x", "3x + 9"], answer: 0, explanation: "Divide each term by 3: x² + 3x." },
            { type: "mcq", difficulty: "hard", q: "Simplify (10a² + 15a − 5)/5.", options: ["2a² + 3a − 1", "2a² + 3a − 5", "10a² + 3a − 1", "2a + 3 − 1"], answer: 0, explanation: "Divide each term by 5: 2a² + 3a − 1." },
            { type: "short", difficulty: "hard", q: "Simplify (8x² − 4x + 12)/4 and evaluate at x = 2.", answer: "Simplified: 2x² − x + 3. At x = 2: 2(4) − 2 + 3 = 8 − 2 + 3 = 9.", explanation: "Divide each term by 4, then substitute." },
            { type: "numeric", difficulty: "hard", q: "If p = 3, evaluate (2p² + 4p − 6)/2.", answer: "12", explanation: "Simplify first: (2p²+4p−6)/2 = p²+2p−3. At p=3: 9+6−3=12." }
          ] },
        { text: "Find the HCF and LCM of algebraic expressions and fractions.",
          resources: [
            { type: "interactive", title: "Factoring", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "Common denominators for algebraic fractions." },
            { type: "interactive", title: "LCM of denominators", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Algebraic fractions are covered within the Cambridge Stage 8/9 algebra units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The LCM of the denominators in x/4 + x/6 is:", options: ["12", "24", "10", "6"], answer: 0, explanation: "The lowest common multiple of 4 and 6 is 12." },
            { type: "short", difficulty: "medium", q: "To add x/3 + x/4, what common denominator do you use, and what is the sum?", answer: "Use 12: x/3 = 4x/12 and x/4 = 3x/12, so the sum is 7x/12.", explanation: "LCM of 3 and 4 is 12." },
            { type: "tf", difficulty: "easy", q: "The LCM is the smallest expression that all given expressions divide into evenly.", answer: true, explanation: "LCM = Lowest Common Multiple." },
            { type: "mcq", difficulty: "easy", q: "The LCM of 5 and 3 is:", options: ["15", "8", "2", "30"], answer: 0, explanation: "5 × 3 = 15 (no common factor, so LCM = product)." },
            { type: "mcq", difficulty: "medium", q: "The common denominator for x/2 + x/5 is:", options: ["10", "7", "3", "25"], answer: 0, explanation: "LCM(2, 5) = 10." },
            { type: "mcq", difficulty: "medium", q: "Using LCD 12, rewrite x/4 as:", options: ["3x/12", "x/12", "4x/12", "x/3"], answer: 0, explanation: "Multiply top and bottom by 3: x/4 = 3x/12." },
            { type: "mcq", difficulty: "medium", q: "The HCF of x/6 and x/9 as fractions is related to HCF(6, 9). What is HCF(6, 9)?", options: ["3", "18", "6", "2"], answer: 0, explanation: "6 = 2 × 3, 9 = 3 × 3. HCF = 3." },
            { type: "mcq", difficulty: "medium", q: "To add 2x/3 + 3x/4, the LCD is 12. The equivalent of 2x/3 with denominator 12 is:", options: ["8x/12", "2x/12", "6x/12", "4x/12"], answer: 0, explanation: "Multiply numerator and denominator by 4: 2x × 4 = 8x." },
            { type: "numeric", difficulty: "medium", q: "Add x/6 + x/4. Give the numerator of the simplified fraction in terms of x. The result is ?x/12. What goes in the gap?", answer: "5", explanation: "2x/12 + 3x/12 = 5x/12." },
            { type: "mcq", difficulty: "hard", q: "What is the LCD for a/6 + b/9 + c/4?", options: ["36", "12", "18", "24"], answer: 0, explanation: "LCM(6, 9, 4): 6 = 2×3, 9 = 3², 4 = 2² → LCM = 4 × 9 = 36." },
            { type: "short", difficulty: "hard", q: "Add 5x/6 − x/4. Show all steps.", answer: "LCD = 12. 5x/6 = 10x/12; x/4 = 3x/12. 10x/12 − 3x/12 = 7x/12.", explanation: "Convert to a common denominator, then subtract the numerators." },
            { type: "mcq", difficulty: "hard", q: "The HCF of the numerators 4x and 6x in the fractions 4x/5 and 6x/5 is:", options: ["2x", "24x", "x", "2"], answer: 0, explanation: "HCF(4x, 6x): number HCF 2, variable x → 2x." }
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
            { type: "interactive", title: "Intro to polynomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Expanding and working with algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which is a polynomial?", options: ["x² + 3x − 1", "1/x + 2", "√x + 1", "x⁻² + x"], answer: 0, explanation: "Polynomials have whole-number powers of x only." },
            { type: "mcq", difficulty: "medium", q: "The degree of 4x³ + 2x − 7 is:", options: ["1", "2", "3", "7"], answer: 2, explanation: "The degree is the highest power, which is 3." },
            { type: "tf", difficulty: "easy", q: "A polynomial can only have non-negative whole-number exponents.", answer: true, explanation: "Expressions with negative or fractional exponents (like x⁻¹ or √x) are not polynomials." },
            { type: "mcq", difficulty: "easy", q: "What type of polynomial is 3x + 5?", options: ["linear (degree 1)", "quadratic (degree 2)", "cubic (degree 3)", "constant (degree 0)"], answer: 0, explanation: "The highest power is 1, so it is a linear polynomial." },
            { type: "mcq", difficulty: "easy", q: "What is the degree of 7?", options: ["0", "1", "7", "undefined"], answer: 0, explanation: "A non-zero constant is a polynomial of degree 0." },
            { type: "mcq", difficulty: "medium", q: "Which is NOT a polynomial?", options: ["x + 1", "x² − 4", "1/x + 3", "5x³ − 2x + 1"], answer: 2, explanation: "1/x = x⁻¹ has a negative exponent, so 1/x + 3 is not a polynomial." },
            { type: "mcq", difficulty: "medium", q: "The degree of 6x²y³ (treating it as one term) is:", options: ["5", "6", "3", "2"], answer: 0, explanation: "Degree = sum of exponents = 2 + 3 = 5." },
            { type: "mcq", difficulty: "medium", q: "A quadratic polynomial has degree:", options: ["2", "1", "3", "0"], answer: 0, explanation: "Quadratic means the highest power is 2." },
            { type: "tf", difficulty: "medium", q: "A binomial is a polynomial with exactly two terms.", answer: true, explanation: "bi- means two; e.g. 3x + 4 is a binomial." },
            { type: "mcq", difficulty: "hard", q: "Which expression has degree 4?", options: ["x⁴ + x", "x³ + x² + x", "x² + 2x + 1", "4x + 3"], answer: 0, explanation: "The highest power in x⁴ + x is 4." },
            { type: "short", difficulty: "hard", q: "Write down a trinomial of degree 3 and identify its degree.", answer: "Example: x³ + 2x² − 5. This is degree 3 because the highest power is 3, and it has 3 terms.", explanation: "A trinomial has exactly three terms; degree = highest exponent." },
            { type: "mcq", difficulty: "hard", q: "The degree of the polynomial (x² + 1)(x³ − x) before expanding is:", options: ["5", "6", "2", "3"], answer: 0, explanation: "When multiplied, highest powers: x² × x³ = x⁵, so degree = 2 + 3 = 5." }
          ] },
        { text: "Square binomials and trinomials.",
          resources: [
            { type: "interactive", title: "Perfect squares", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials-multiplying.html", note: "(a + b)² and beyond." },
            { type: "interactive", title: "Squaring expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Expanding and working with algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "(x + y)² = ?", options: ["x² + y²", "x² + 2xy + y²", "x² − 2xy + y²", "2x + 2y"], answer: 1, explanation: "(x + y)² = x² + 2xy + y²." },
            { type: "mcq", difficulty: "medium", q: "(a − b)² = ?", options: ["a² − b²", "a² − 2ab + b²", "a² + 2ab + b²", "a² − ab + b²"], answer: 1, explanation: "(a − b)² = a² − 2ab + b²." },
            { type: "tf", difficulty: "easy", q: "(x + 3)² = x² + 6x + 9.", answer: true, explanation: "(x+3)² = x² + 2(3)x + 3² = x² + 6x + 9." },
            { type: "mcq", difficulty: "easy", q: "The middle term of (a + b)² is:", options: ["2ab", "ab", "a²b", "2a²b"], answer: 0, explanation: "The middle term is twice the product of the two terms: 2ab." },
            { type: "mcq", difficulty: "medium", q: "(2x + 5)² = ?", options: ["4x² + 20x + 25", "4x² + 10x + 25", "4x² + 25", "2x² + 20x + 25"], answer: 0, explanation: "(2x)² + 2(2x)(5) + 5² = 4x² + 20x + 25." },
            { type: "mcq", difficulty: "medium", q: "(x − 4)² = ?", options: ["x² − 8x + 16", "x² + 8x + 16", "x² − 16", "x² − 4x + 16"], answer: 0, explanation: "x² − 2(4)x + 16 = x² − 8x + 16." },
            { type: "numeric", difficulty: "medium", q: "In (3x + 1)², the coefficient of x is 2 × 3 × 1 = ?", answer: "6", explanation: "Middle term coefficient = 2 × first-term coeff × last-term coeff = 2 × 3 × 1 = 6." },
            { type: "mcq", difficulty: "hard", q: "(x + y + z)² has how many terms after expanding?", options: ["6", "3", "4", "9"], answer: 0, explanation: "x² + y² + z² + 2xy + 2yz + 2xz = 6 distinct terms." },
            { type: "mcq", difficulty: "hard", q: "Expand (x − y + 1)². What is the coefficient of the xy term?", options: ["−2", "2", "1", "−1"], answer: 0, explanation: "(x−y+1)² includes cross-term 2(x)(−y) = −2xy." },
            { type: "numeric", difficulty: "hard", q: "Compute 99² using (100 − 1)² = 100² − 2(100)(1) + 1². What is the answer?", answer: "9801", explanation: "10000 − 200 + 1 = 9801." },
            { type: "short", difficulty: "hard", q: "Expand (2a − 3b)² fully.", answer: "4a² − 12ab + 9b². Using (A−B)² = A² − 2AB + B² with A=2a, B=3b.", explanation: "(2a)²=4a²; 2(2a)(3b)=12ab; (3b)²=9b²." },
            { type: "mcq", difficulty: "hard", q: "Which is the correct expansion of (x + 1)³ computed as (x+1)(x+1)²?", options: ["x³ + 3x² + 3x + 1", "x³ + 3x + 1", "x³ + x² + x + 1", "x³ + 3x²"], answer: 0, explanation: "(x+1)² = x²+2x+1; times (x+1): x³+2x²+x+x²+2x+1 = x³+3x²+3x+1." }
          ] },
        { text: "Expand algebraic cubes.",
          resources: [
            { type: "interactive", title: "Cubing binomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "(a + b)³ expansion." },
            { type: "interactive", title: "Polynomials", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials.html", note: "Higher powers." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Expanding and working with algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "(x + y)³ = x³ + 3x²y + 3xy² + y³. The coefficient of x²y is:", options: ["1", "2", "3", "6"], answer: 2, explanation: "The middle terms have coefficient 3." },
            { type: "numeric", difficulty: "easy", q: "Using (a + b)³ with a = 2 and b = 0, evaluate (2 + 0)³.", answer: "8", explanation: "2³ = 8." },
            { type: "tf", difficulty: "easy", q: "(a + b)³ = a³ + 3a²b + 3ab² + b³.", answer: true, explanation: "This is the standard binomial cube expansion." },
            { type: "mcq", difficulty: "easy", q: "How many terms does (a + b)³ expand to?", options: ["4", "3", "6", "2"], answer: 0, explanation: "a³, 3a²b, 3ab², b³ — four terms." },
            { type: "mcq", difficulty: "medium", q: "(x + 1)³ = ?", options: ["x³ + 3x² + 3x + 1", "x³ + 1", "x³ + 3x + 1", "x³ + x² + x + 1"], answer: 0, explanation: "With a=x, b=1: x³ + 3x² + 3x + 1." },
            { type: "mcq", difficulty: "medium", q: "(x − 1)³ = ?", options: ["x³ − 3x² + 3x − 1", "x³ − 1", "x³ + 3x² − 3x + 1", "x³ − 3x"], answer: 0, explanation: "Substitute b = −1: x³ − 3x² + 3x − 1." },
            { type: "numeric", difficulty: "medium", q: "In (x + 2)³, the constant term is:", answer: "8", explanation: "(a+b)³ gives b³ = 2³ = 8 as the constant." },
            { type: "mcq", difficulty: "hard", q: "(2x + 1)³ — the coefficient of x³ is:", options: ["8", "6", "2", "1"], answer: 0, explanation: "First term: (2x)³ = 8x³; coefficient = 8." },
            { type: "mcq", difficulty: "hard", q: "(a − b)³ = ?", options: ["a³ − 3a²b + 3ab² − b³", "a³ + 3a²b + 3ab² + b³", "a³ − b³", "a³ − 3ab"], answer: 0, explanation: "Substitute −b: signs alternate: +, −, +, −." },
            { type: "numeric", difficulty: "hard", q: "Compute 11³ using (10 + 1)³ = 1000 + 300 + 30 + 1.", answer: "1331", explanation: "10³ + 3(10²)(1) + 3(10)(1) + 1 = 1000 + 300 + 30 + 1 = 1331." },
            { type: "short", difficulty: "hard", q: "Expand (x − 2)³ fully.", answer: "x³ − 6x² + 12x − 8. Using (a−b)³ with a=x, b=2: x³ − 3(x²)(2) + 3(x)(4) − 8 = x³ − 6x² + 12x − 8.", explanation: "Substitute a=x, b=2 into (a−b)³ = a³ − 3a²b + 3ab² − b³." },
            { type: "mcq", difficulty: "hard", q: "The sum of all coefficients in (x + 1)³ (set x = 1) is:", options: ["8", "4", "6", "10"], answer: 0, explanation: "1 + 3 + 3 + 1 = 8 (which equals 2³)." }
          ] },
        { text: "Recognise heterogeneous (mixed-degree) expressions.",
          resources: [
            { type: "interactive", title: "Polynomial terms", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/polynomials.html", note: "Degrees of terms." },
            { type: "interactive", title: "Polynomials", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Expressions and formulae (Stage 8)", note: "Expanding and working with algebraic expressions is covered in the Cambridge Stage 8 'Expressions and formulae' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "A heterogeneous expression has terms of different degrees, like x² + x + 1.", answer: true, explanation: "Its terms have degrees 2, 1 and 0." },
            { type: "mcq", difficulty: "medium", q: "Which expression has terms of mixed degree?", options: ["x² + 2x + 1", "x² + y² (both degree 2)", "2x + 3y (both degree 1)", "x³ + y³ (both degree 3)"], answer: 0, explanation: "x² + 2x + 1 has degrees 2, 1 and 0." },
            { type: "tf", difficulty: "easy", q: "In 3x³ + 2x² − x + 5, the terms have degrees 3, 2, 1 and 0.", answer: true, explanation: "Each term has its own degree: x³ is degree 3, x² is degree 2, x is degree 1, and 5 is degree 0." },
            { type: "mcq", difficulty: "easy", q: "What is the degree of the constant term 7 in a polynomial?", options: ["0", "1", "7", "undefined"], answer: 0, explanation: "A constant (non-zero) is a term of degree 0." },
            { type: "mcq", difficulty: "medium", q: "In the expression 5xy + 3x + 2y − 1, which term has the highest degree?", options: ["5xy (degree 2)", "3x (degree 1)", "2y (degree 1)", "−1 (degree 0)"], answer: 0, explanation: "5xy has degree 1 + 1 = 2, the highest." },
            { type: "tf", difficulty: "medium", q: "All terms in 4x² + 4y² are of the same degree (degree 2).", answer: true, explanation: "Both x² and y² have degree 2, so this is homogeneous." },
            { type: "mcq", difficulty: "medium", q: "Which expression is homogeneous (all terms the same degree)?", options: ["2x² + 3y²", "x² + 2x + 1", "x³ + x", "x² + x + 1"], answer: 0, explanation: "2x² + 3y² has two terms, both degree 2." },
            { type: "mcq", difficulty: "medium", q: "Which term in 3x³ + 2x² + x + 8 has degree 0?", options: ["8", "x", "2x²", "3x³"], answer: 0, explanation: "The constant 8 has no variable, so its degree is 0." },
            { type: "mcq", difficulty: "hard", q: "In xy² + x²y + xy, all terms have degree:", options: ["3, 3, 2", "2, 2, 2", "3, 3, 3", "2, 2, 3"], answer: 0, explanation: "xy² = 1+2=3; x²y = 2+1=3; xy = 1+1=2. Mixed degrees 3, 3, 2." },
            { type: "mcq", difficulty: "hard", q: "A homogeneous polynomial has:", options: ["all terms of the same degree", "only one term", "no constant term", "only positive coefficients"], answer: 0, explanation: "Homogeneous means every term shares the same total degree." },
            { type: "short", difficulty: "hard", q: "Identify whether 4x³y + 2xy³ − 3x²y² is homogeneous. Give the degree of each term.", answer: "All three terms have degree 4: 4x³y (3+1=4), 2xy³ (1+3=4), 3x²y² (2+2=4). So it IS homogeneous of degree 4.", explanation: "Check total exponent (x + y) for each term." },
            { type: "tf", difficulty: "hard", q: "x² + x + 1 is a heterogeneous polynomial because its three terms have degrees 2, 1 and 0.", answer: true, explanation: "Different degrees in the terms make it heterogeneous." }
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
            { type: "interactive", title: "One-step equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Equations and inequalities (Stage 8)", note: "Solving linear equations and inequalities is covered in the Cambridge Stage 8 'Equations and inequalities' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Solve x − 5 = 9. What is x?", answer: "14", explanation: "Add 5 to both sides: x = 14." },
            { type: "numeric", difficulty: "easy", q: "Solve x/3 = 4. What is x?", answer: "12", explanation: "Multiply both sides by 3: x = 12." },
            { type: "numeric", difficulty: "easy", q: "Solve x + 7 = 15. What is x?", answer: "8", explanation: "Subtract 7 from both sides: x = 8." },
            { type: "numeric", difficulty: "easy", q: "Solve 4x = 28. What is x?", answer: "7", explanation: "Divide both sides by 4: x = 7." },
            { type: "numeric", difficulty: "easy", q: "Solve x + 12 = 3. What is x?", answer: "-9", explanation: "Subtract 12 from both sides: x = −9." },
            { type: "numeric", difficulty: "medium", q: "Solve −3x = 15. What is x?", answer: "-5", explanation: "Divide both sides by −3: x = −5." },
            { type: "numeric", difficulty: "medium", q: "Solve x/5 = −3. What is x?", answer: "-15", explanation: "Multiply both sides by 5: x = −15." },
            { type: "mcq", difficulty: "medium", q: "Solve 6 = 2x. What is x?", options: ["3", "12", "4", "6"], answer: 0, explanation: "Divide both sides by 2: x = 3." },
            { type: "tf", difficulty: "easy", q: "To solve x + 8 = 20 you subtract 8 from both sides.", answer: true, explanation: "The inverse of adding 8 is subtracting 8." },
            { type: "numeric", difficulty: "medium", q: "Solve 2.5x = 10. What is x?", answer: "4", explanation: "x = 10 ÷ 2.5 = 4." },
            { type: "short", difficulty: "hard", q: "Solve and check: x/4 = −2.", answer: "Multiply both sides by 4: x = −8. Check: −8/4 = −2. Correct.", explanation: "Apply the inverse operation, then substitute back to verify." },
            { type: "mcq", difficulty: "hard", q: "Which operation solves x − (−4) = 10?", options: ["subtract 4 from both sides", "add 4 to both sides", "multiply by 4", "divide by 4"], answer: 0, explanation: "x − (−4) = x + 4 = 10, so subtract 4: x = 6." }
          ] },
        { text: "Solve two-step equations.",
          resources: [
            { type: "interactive", title: "Two-step equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Two inverse operations." },
            { type: "interactive", title: "Linear Equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/linear-equations.html", note: "Solving two-step equations." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Equations and inequalities (Stage 8)", note: "Solving linear equations and inequalities is covered in the Cambridge Stage 8 'Equations and inequalities' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Solve 2x + 3 = 11. What is x?", answer: "4", explanation: "Subtract 3 then divide by 2: x = 8 ÷ 2 = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 3x − 4 = 11. What is x?", answer: "5", explanation: "Add 4 then divide by 3: x = 15 ÷ 3 = 5." },
            { type: "numeric", difficulty: "easy", q: "Solve 5x + 2 = 27. What is x?", answer: "5", explanation: "Subtract 2: 5x = 25; divide by 5: x = 5." },
            { type: "numeric", difficulty: "easy", q: "Solve x/2 + 4 = 9. What is x?", answer: "10", explanation: "Subtract 4: x/2 = 5; multiply by 2: x = 10." },
            { type: "numeric", difficulty: "medium", q: "Solve 4x − 7 = 13. What is x?", answer: "5", explanation: "Add 7: 4x = 20; divide by 4: x = 5." },
            { type: "mcq", difficulty: "medium", q: "Solve 6x + 1 = 25.", options: ["x = 4", "x = 26", "x = 3", "x = 5"], answer: 0, explanation: "6x = 24; x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 2x − 9 = 1. What is x?", answer: "5", explanation: "Add 9: 2x = 10; divide by 2: x = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve 10 − 3x = 1. What is x?", answer: "3", explanation: "Subtract 10: −3x = −9; divide by −3: x = 3." },
            { type: "mcq", difficulty: "hard", q: "Solve x/4 − 3 = 2.", options: ["x = 20", "x = 5", "x = −4", "x = 8"], answer: 0, explanation: "Add 3: x/4 = 5; multiply by 4: x = 20." },
            { type: "numeric", difficulty: "hard", q: "Solve 2.5x + 1.5 = 11.5. What is x?", answer: "4", explanation: "Subtract 1.5: 2.5x = 10; divide by 2.5: x = 4." },
            { type: "short", difficulty: "hard", q: "Solve and check: 7x − 5 = 30.", answer: "Add 5: 7x = 35; x = 5. Check: 7(5) − 5 = 35 − 5 = 30. Correct.", explanation: "After solving, substitute back to verify." },
            { type: "numeric", difficulty: "hard", q: "Solve −4x + 8 = 24. What is x?", answer: "-4", explanation: "Subtract 8: −4x = 16; divide by −4: x = −4." }
          ] },
        { text: "Solve multi-step equations.",
          resources: [
            { type: "interactive", title: "Multi-step equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Brackets and variables on both sides." },
            { type: "interactive", title: "Solving equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/introduction.html", note: "Step-by-step." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Equations and inequalities (Stage 8)", note: "Solving linear equations and inequalities is covered in the Cambridge Stage 8 'Equations and inequalities' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Solve 2(x + 3) = 16. What is x?", answer: "5", explanation: "Expand: 2x + 6 = 16 → 2x = 10 → x = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve 5x − 2 = 3x + 8. What is x?", answer: "5", explanation: "5x − 3x = 8 + 2 → 2x = 10 → x = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve 3(x − 1) = 12. What is x?", answer: "5", explanation: "3x − 3 = 12 → 3x = 15 → x = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve 4x + 3 = 2x + 11. What is x?", answer: "4", explanation: "4x − 2x = 11 − 3 → 2x = 8 → x = 4." },
            { type: "mcq", difficulty: "medium", q: "Solve 3(2x − 1) = 15.", options: ["x = 3", "x = 5", "x = 6", "x = 2"], answer: 0, explanation: "6x − 3 = 15 → 6x = 18 → x = 3." },
            { type: "numeric", difficulty: "medium", q: "Solve 5(x + 2) − 3x = 20. What is x?", answer: "5", explanation: "5x + 10 − 3x = 20 → 2x = 10 → x = 5." },
            { type: "numeric", difficulty: "hard", q: "Solve 7x − 3 = 4(x + 3). What is x?", answer: "5", explanation: "7x − 3 = 4x + 12 → 3x = 15 → x = 5." },
            { type: "mcq", difficulty: "hard", q: "Solve 2(3x + 1) = 5(x − 1).", options: ["x = −7", "x = 7", "x = 3", "x = −3"], answer: 0, explanation: "6x + 2 = 5x − 5 → x = −7." },
            { type: "numeric", difficulty: "hard", q: "Solve (x + 1)/2 = (x − 3)/3. What is x?", answer: "-9", explanation: "Cross-multiply: 3(x+1) = 2(x−3) → 3x+3 = 2x−6 → x = −9." },
            { type: "tf", difficulty: "easy", q: "When solving an equation, the same operation must be applied to both sides.", answer: true, explanation: "Equality is maintained by doing the same to both sides." },
            { type: "short", difficulty: "hard", q: "Solve 3(x + 2) = 4(x − 1) and verify your answer.", answer: "3x + 6 = 4x − 4 → 6 + 4 = 4x − 3x → x = 10. Verify: 3(12) = 36 and 4(9) = 36. Correct.", explanation: "Expand both sides, collect x terms on one side, verify by substituting x=10 back: 3(10+2)=3(12)=36; 4(10−1)=4(9)=36." },
            { type: "mcq", difficulty: "hard", q: "Solve 2(x + 3) + 3(x − 1) = 28.", options: ["x = 5", "x = 4", "x = 7", "x = 3"], answer: 0, explanation: "2x + 6 + 3x − 3 = 28 → 5x + 3 = 28 → 5x = 25 → x = 5." }
          ] },
        { text: "Solve inequalities.",
          resources: [
            { type: "interactive", title: "Solving Inequalities", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/inequality-solving.html", note: "Rules for inequalities." },
            { type: "interactive", title: "Inequalities", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Equations and inequalities (Stage 8)", note: "Solving linear equations and inequalities is covered in the Cambridge Stage 8 'Equations and inequalities' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Solve 2x + 1 > 7.", options: ["x > 3", "x < 3", "x > 4", "x > 8"], answer: 0, explanation: "2x > 6 → x > 3." },
            { type: "tf", difficulty: "hard", q: "When you multiply or divide an inequality by a negative number, you must flip the inequality sign.", answer: true, explanation: "e.g. −2x < 6 becomes x > −3." },
            { type: "tf", difficulty: "easy", q: "The solution to x + 3 < 10 is x < 7.", answer: true, explanation: "Subtract 3 from both sides: x < 7." },
            { type: "mcq", difficulty: "easy", q: "Solve x − 2 ≥ 5.", options: ["x ≥ 7", "x ≤ 7", "x ≥ 3", "x > 7"], answer: 0, explanation: "Add 2 to both sides: x ≥ 7." },
            { type: "mcq", difficulty: "medium", q: "Solve 4x < 20.", options: ["x < 5", "x > 5", "x < 16", "x < 80"], answer: 0, explanation: "Divide by 4: x < 5." },
            { type: "mcq", difficulty: "medium", q: "Solve 3x − 6 ≤ 9.", options: ["x ≤ 5", "x ≤ 3", "x ≤ 1", "x ≤ 15"], answer: 0, explanation: "3x ≤ 15 → x ≤ 5." },
            { type: "mcq", difficulty: "medium", q: "Solve −5x > 20.", options: ["x < −4", "x > −4", "x < 4", "x > 4"], answer: 0, explanation: "Divide by −5 and flip the sign: x < −4." },
            { type: "tf", difficulty: "medium", q: "x ≥ 3 means x can be 3, 4, 5, 6, … (integers only).", answer: false, explanation: "x ≥ 3 includes all real numbers ≥ 3, not just integers." },
            { type: "mcq", difficulty: "hard", q: "Solve 5 − 2x > 1.", options: ["x < 2", "x > 2", "x < −2", "x > 4"], answer: 0, explanation: "−2x > −4; divide by −2 and flip: x < 2." },
            { type: "mcq", difficulty: "hard", q: "Solve 3(x − 2) ≤ 9.", options: ["x ≤ 5", "x ≤ 3", "x ≤ 7", "x ≤ 1"], answer: 0, explanation: "3x − 6 ≤ 9 → 3x ≤ 15 → x ≤ 5." },
            { type: "short", difficulty: "hard", q: "Solve −3x + 4 > 10 and represent the solution.", answer: "−3x > 6 → x < −2 (flip sign when dividing by negative). Solution: x < −2.", explanation: "Subtract 4: −3x > 6; divide by −3 and reverse the inequality: x < −2." },
            { type: "numeric", difficulty: "hard", q: "Solve 2x + 5 ≥ 4x − 3. Give the largest integer value NOT in the solution set.", answer: "5", explanation: "2x − 4x ≥ −3 − 5 → −2x ≥ −8 → x ≤ 4. Solution is x ≤ 4, so 5 is the smallest integer NOT in it." }
          ] },
        { text: "Form and solve equations from word problems.",
          resources: [
            { type: "interactive", title: "Linear Equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/linear-equations.html", note: "Turning words into equations." },
            { type: "interactive", title: "Khan Academy: Forming equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked word-problem equations." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Unit: Equations and inequalities (Stage 8)", note: "Solving linear equations and inequalities is covered in the Cambridge Stage 8 'Equations and inequalities' unit.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "Murderous Maths: The Phantom X (Algebra)", author: "Kjartan Poskitt", chapter: "(algebra — expressions & equations)", note: "Enrichment read (great for ages 11–13): algebra, expressions and solving for x, made fun.", url: "https://openlibrary.org/search?q=murderous+maths+phantom+x" }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "I think of a number, multiply by 3 and add 4 to get 19. Form and solve an equation.", answer: "3x + 4 = 19 → 3x = 15 → x = 5.", explanation: "Translate the words, then solve." },
            { type: "numeric", difficulty: "easy", q: "A square has perimeter 32 cm. Form 4x = 32 and solve for the side length x (cm).", answer: "8", explanation: "x = 32 ÷ 4 = 8 cm." },
            { type: "numeric", difficulty: "easy", q: "Five more than twice a number equals 17. What is the number?", answer: "6", explanation: "2x + 5 = 17 → 2x = 12 → x = 6." },
            { type: "numeric", difficulty: "medium", q: "A rectangle's length is 3 more than its width. The perimeter is 26 cm. Find the width (cm).", answer: "5", explanation: "Let width = w; length = w + 3. 2(w + w + 3) = 26 → 2(2w + 3) = 26 → 4w + 6 = 26 → 4w = 20 → w = 5." },
            { type: "mcq", difficulty: "medium", q: "Two numbers differ by 8. Their sum is 22. What is the smaller number?", options: ["7", "15", "8", "11"], answer: 0, explanation: "x + (x + 8) = 22 → 2x = 14 → x = 7." },
            { type: "numeric", difficulty: "medium", q: "A number tripled then reduced by 6 equals 18. What is the number?", answer: "8", explanation: "3x − 6 = 18 → 3x = 24 → x = 8." },
            { type: "mcq", difficulty: "medium", q: "The ages of two siblings differ by 4. Their combined age is 20. How old is the younger?", options: ["8", "12", "10", "6"], answer: 0, explanation: "y + (y + 4) = 20 → 2y = 16 → y = 8." },
            { type: "short", difficulty: "hard", q: "Aziz earns £3 more per hour than Ben. Together in 1 hour they earn £23. How much per hour does Ben earn?", answer: "Let Ben = b; Aziz = b + 3. b + (b + 3) = 23 → 2b + 3 = 23 → 2b = 20 → b = £10.", explanation: "Define a variable, form the equation, then solve." },
            { type: "numeric", difficulty: "hard", q: "A coach holds 52 passengers. After 3 stops, the same number x of people left at each stop and 25 remain. Find x.", answer: "9", explanation: "52 − 3x = 25 → 3x = 27 → x = 9." },
            { type: "mcq", difficulty: "hard", q: "The perimeter of an equilateral triangle is 5x + 3. The perimeter equals 33. Find x.", options: ["6", "5", "3", "4"], answer: 0, explanation: "5x + 3 = 33 → 5x = 30 → x = 6." },
            { type: "numeric", difficulty: "hard", q: "Five consecutive integers sum to 100. What is the smallest?", answer: "18", explanation: "n + (n+1) + (n+2) + (n+3) + (n+4) = 5n + 10 = 100 → 5n = 90 → n = 18." },
            { type: "tf", difficulty: "medium", q: "The equation for 'three less than double a number equals seven' is 2n − 3 = 7.", answer: true, explanation: "'Three less than double n' = 2n − 3; that equals 7." }
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
            { type: "interactive", title: "Geometry study bot", provider: "📚 Library · ChatGPT", url: "https://chatgpt.com/g/g-6763e3735fa48191aa94a1a3da22c5dd-geometry-bot", note: "Your class's tutor bot for geometry questions. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Area & Perimeter", provider: "Math is Fun", url: "https://www.mathsisfun.com/area.html", note: "Formulas and examples." },
            { type: "interactive", title: "Area & perimeter", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Angles; Shapes; Area, perimeter and volume (Stage 8)", note: "Angles, 2D/3D shapes, area, surface area and volume are covered in the Cambridge Stage 8 geometry and measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 ‘The Story of the Elusive Shape’", note: "Enrichment read (accessible stretch): the maths of shapes, symmetry and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A rectangle is 8 cm by 5 cm. What is its perimeter (cm)?", answer: "26", explanation: "P = 2(8 + 5) = 26 cm." },
            { type: "numeric", difficulty: "easy", q: "Find the area of a triangle with base 12 cm and height 5 cm (cm²).", answer: "30", explanation: "½ × 12 × 5 = 30 cm²." },
            { type: "numeric", difficulty: "easy", q: "Find the area of a rectangle 9 cm by 4 cm (cm²).", answer: "36", explanation: "A = 9 × 4 = 36 cm²." },
            { type: "numeric", difficulty: "easy", q: "A square has side 7 cm. What is its perimeter (cm)?", answer: "28", explanation: "P = 4 × 7 = 28 cm." },
            { type: "mcq", difficulty: "easy", q: "The formula for the area of a parallelogram is:", options: ["base × height", "½ × base × height", "base + height", "2(base + height)"], answer: 0, explanation: "Area of parallelogram = base × perpendicular height." },
            { type: "numeric", difficulty: "medium", q: "A parallelogram has base 10 cm and height 6 cm. What is its area (cm²)?", answer: "60", explanation: "A = 10 × 6 = 60 cm²." },
            { type: "numeric", difficulty: "medium", q: "Using π ≈ 3.14, find the area of a circle with radius 5 cm (cm²).", answer: "78.5", explanation: "A = 3.14 × 25 = 78.5 cm²." },
            { type: "mcq", difficulty: "medium", q: "A trapezium has parallel sides 6 cm and 10 cm and height 4 cm. Its area is:", options: ["32 cm²", "40 cm²", "24 cm²", "64 cm²"], answer: 0, explanation: "A = ½ × (6 + 10) × 4 = ½ × 16 × 4 = 32 cm²." },
            { type: "tf", difficulty: "medium", q: "Perimeter is the total distance around the outside of a shape.", answer: true, explanation: "Perimeter = total boundary length." },
            { type: "numeric", difficulty: "hard", q: "A circle has diameter 14 cm. Using π ≈ 22/7, find the circumference (cm).", answer: "44", explanation: "C = π × d ≈ 22/7 × 14 = 44 cm." },
            { type: "short", difficulty: "hard", q: "A room is 6 m by 4 m. Carpet costs £12/m². Find the total carpet cost.", answer: "Area = 24 m². Cost = 24 × £12 = £288.", explanation: "Find area first, then multiply by cost per square metre." },
            { type: "numeric", difficulty: "hard", q: "A triangle has base 9 cm and the same area as a rectangle 6 cm × 3 cm. What is the triangle's height (cm)?", answer: "4", explanation: "Rectangle area = 18 cm². Triangle: ½ × 9 × h = 18 → h = 4 cm." }
          ] },
        { text: "Find the area of composite shapes.",
          resources: [
            { type: "interactive", title: "Area", provider: "Math is Fun", url: "https://www.mathsisfun.com/area.html", note: "Splitting shapes to find composite area." },
            { type: "interactive", title: "Khan Academy: Area of composite figures", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Worked compound-area examples." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Angles; Shapes; Area, perimeter and volume (Stage 8)", note: "Angles, 2D/3D shapes, area, surface area and volume are covered in the Cambridge Stage 8 geometry and measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 ‘The Story of the Elusive Shape’", note: "Enrichment read (accessible stretch): the maths of shapes, symmetry and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "An L-shape is a 6×4 rectangle plus a 3×2 rectangle. What is the total area?", answer: "30", explanation: "24 + 6 = 30 square units." },
            { type: "short", difficulty: "medium", q: "How do you find the area of a shape made of a rectangle with a triangle on top?", answer: "Find each area separately (rectangle = length × width, triangle = ½ × base × height) and add them together.", explanation: "Split a composite shape into simple parts." },
            { type: "tf", difficulty: "easy", q: "To find the area of a composite shape, split it into simple shapes, find each area, then add (or subtract) them.", answer: true, explanation: "This is the standard approach for composite areas." },
            { type: "numeric", difficulty: "easy", q: "A shape is made of two squares: 4 cm × 4 cm and 2 cm × 2 cm. Total area (cm²)?", answer: "20", explanation: "16 + 4 = 20 cm²." },
            { type: "numeric", difficulty: "medium", q: "A cross shape is a 6×2 rectangle overlapping a 2×6 rectangle (they share a 2×2 centre). What is the total area (cm²)?", answer: "20", explanation: "6×2 + 6×2 − 2×2 = 12 + 12 − 4 = 20 cm²." },
            { type: "mcq", difficulty: "medium", q: "A large rectangle 10 × 8 has a 3 × 2 rectangle cut out. The remaining area is:", options: ["74 cm²", "80 cm²", "76 cm²", "60 cm²"], answer: 0, explanation: "80 − 6 = 74 cm²." },
            { type: "numeric", difficulty: "medium", q: "An L-shape is made by starting with a 10 × 6 rectangle and removing a 4 × 3 corner. What is the area (cm²)?", answer: "48", explanation: "60 − 12 = 48 cm²." },
            { type: "mcq", difficulty: "medium", q: "A semicircle is placed on top of a rectangle (base 10, height 5). Using π ≈ 3.14, the total area is approximately:", options: ["89.25 cm²", "78.5 cm²", "50 cm²", "100 cm²"], answer: 0, explanation: "Rectangle = 50; semicircle = ½ × 3.14 × 5² = ½ × 78.5 = 39.25. Total ≈ 89.25 cm²." },
            { type: "numeric", difficulty: "hard", q: "A shape is a 12 × 8 rectangle with a triangle of base 6 and height 4 removed. What is the remaining area (cm²)?", answer: "84", explanation: "96 − (½ × 6 × 4) = 96 − 12 = 84 cm²." },
            { type: "mcq", difficulty: "hard", q: "A running track is a rectangle 100 m × 60 m with a semicircle at each end (radius 30 m). The area of the whole track region (using π ≈ 3.14) is approximately:", options: ["8826 m²", "6000 m²", "9000 m²", "7826 m²"], answer: 0, explanation: "Rectangle: 100×60=6000; two semicircles = one circle: π×30²≈2826. Total ≈ 8826 m²." },
            { type: "short", difficulty: "hard", q: "A shaded region consists of a 10 cm × 10 cm square with a circle of radius 5 cm cut from its centre. Calculate the shaded area using π ≈ 3.14.", answer: "Square = 100 cm²; circle = 3.14 × 25 = 78.5 cm². Shaded = 100 − 78.5 = 21.5 cm².", explanation: "Subtract the cut-out area from the original shape." },
            { type: "tf", difficulty: "hard", q: "The area of a composite shape can sometimes be found by subtracting one area from another.", answer: true, explanation: "e.g. a square with a circle cut out; you subtract the circle's area." }
          ] },
        { text: "Use and interpret scale drawings.",
          resources: [
            { type: "interactive", title: "Khan Academy: Scale drawings", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Using a scale to find real lengths." },
            { type: "interactive", title: "Scale", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/index.html", note: "Scale and ratio." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Angles; Shapes; Area, perimeter and volume (Stage 8)", note: "Angles, 2D/3D shapes, area, surface area and volume are covered in the Cambridge Stage 8 geometry and measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 ‘The Story of the Elusive Shape’", note: "Enrichment read (accessible stretch): the maths of shapes, symmetry and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A map scale is 1:100. A wall is 5 cm on the map. What is the real length in cm?", answer: "500", explanation: "5 × 100 = 500 cm." },
            { type: "mcq", difficulty: "easy", q: "On a 1:50 scale drawing, 2 cm represents:", options: ["100 cm", "50 cm", "25 cm", "2 cm"], answer: 0, explanation: "2 × 50 = 100 cm." },
            { type: "tf", difficulty: "easy", q: "A scale of 1:100 means every 1 cm on the drawing equals 100 cm in real life.", answer: true, explanation: "That is the definition of a 1:100 scale." },
            { type: "numeric", difficulty: "easy", q: "A blueprint scale is 1:200. A window is 3 cm on the plan. How wide is the real window (cm)?", answer: "600", explanation: "3 × 200 = 600 cm." },
            { type: "mcq", difficulty: "medium", q: "A real room is 400 cm long. On a 1:50 drawing, the room length is:", options: ["8 cm", "40 cm", "80 cm", "4 cm"], answer: 0, explanation: "400 ÷ 50 = 8 cm on the drawing." },
            { type: "numeric", difficulty: "medium", q: "On a 1:25 000 map, a road measures 6 cm. What is the real length in km?", answer: "1.5", explanation: "6 × 25 000 = 150 000 cm = 1500 m = 1.5 km." },
            { type: "mcq", difficulty: "medium", q: "A building is 30 m tall. On a 1:500 scale drawing its height is:", options: ["6 cm", "0.6 cm", "60 cm", "15 cm"], answer: 0, explanation: "30 m = 3000 cm; 3000 ÷ 500 = 6 cm." },
            { type: "tf", difficulty: "medium", q: "If the scale is 1:n, to convert drawing length to real length you multiply by n.", answer: true, explanation: "Real length = drawing length × n." },
            { type: "mcq", difficulty: "hard", q: "A garden on a 1:200 scale plan measures 4 cm × 3 cm. The real garden area is:", options: ["48 m²", "24 m²", "4800 m²", "4.8 m²"], answer: 0, explanation: "4 × 200 = 800 cm = 8 m; 3 × 200 = 600 cm = 6 m. Area = 8 × 6 = 48 m²." },
            { type: "numeric", difficulty: "hard", q: "On a 1:50 000 map, two cities are 8.4 cm apart. How far apart are they in km?", answer: "42", explanation: "8.4 × 50 000 = 420 000 cm = 4200 m = 42 km." },
            { type: "short", difficulty: "hard", q: "A scale drawing of a park uses scale 1:500. The park is a rectangle 12 cm × 7 cm on the drawing. Find the real area in m².", answer: "Real dimensions: 6000 cm × 3500 cm = 60 m × 35 m. Area = 2100 m².", explanation: "Multiply each drawing dimension by 500 to get the real length in cm, convert to m, then multiply." },
            { type: "mcq", difficulty: "hard", q: "A room is 7.5 m × 5 m. On a 1:25 scale drawing, the room's length is:", options: ["30 cm", "7.5 cm", "25 cm", "3 cm"], answer: 0, explanation: "7.5 m = 750 cm; 750 ÷ 25 = 30 cm." }
          ] },
        { text: "Find the surface area of solids.",
          resources: [
            { type: "interactive", title: "Surface area study bot", provider: "📚 Library · ChatGPT", url: "https://chatgpt.com/g/g-67971dd2e7c08191b76c124e1dd65e00-surface-area-bot", note: "Your class's tutor bot for surface-area problems. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Surface Area", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/surface-area.html", note: "Adding up all the faces." },
            { type: "interactive", title: "Surface area", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Angles; Shapes; Area, perimeter and volume (Stage 8)", note: "Angles, 2D/3D shapes, area, surface area and volume are covered in the Cambridge Stage 8 geometry and measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 ‘The Story of the Elusive Shape’", note: "Enrichment read (accessible stretch): the maths of shapes, symmetry and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Surface area of a cube with side 3 cm = 6 × side². Find it in cm².", answer: "54", explanation: "6 × 3² = 6 × 9 = 54 cm²." },
            { type: "numeric", difficulty: "easy", q: "A cuboid is 2×3×4. One face measures 3 cm by 4 cm. What is the area of that face (cm²)?", answer: "12", explanation: "3 × 4 = 12 cm²." },
            { type: "tf", difficulty: "easy", q: "A cube has 6 identical square faces.", answer: true, explanation: "All 6 faces of a cube are congruent squares." },
            { type: "numeric", difficulty: "easy", q: "Find the surface area of a cube with side 5 cm (cm²).", answer: "150", explanation: "6 × 5² = 6 × 25 = 150 cm²." },
            { type: "mcq", difficulty: "medium", q: "A cuboid is 4 cm × 3 cm × 2 cm. The surface area is:", options: ["52 cm²", "24 cm²", "26 cm²", "48 cm²"], answer: 0, explanation: "SA = 2(4×3 + 4×2 + 3×2) = 2(12 + 8 + 6) = 2(26) = 52 cm²." },
            { type: "numeric", difficulty: "medium", q: "A rectangular box is 10 cm × 5 cm × 3 cm. Find the surface area (cm²).", answer: "190", explanation: "2(10×5 + 10×3 + 5×3) = 2(50 + 30 + 15) = 2(95) = 190 cm²." },
            { type: "mcq", difficulty: "medium", q: "The net of a cube with side 4 cm has 6 faces, each of area:", options: ["16 cm²", "64 cm²", "4 cm²", "96 cm²"], answer: 0, explanation: "Each face is 4 × 4 = 16 cm²." },
            { type: "tf", difficulty: "medium", q: "The surface area of a prism includes the two identical bases and all the rectangular lateral faces.", answer: true, explanation: "SA = 2 × base area + lateral face areas." },
            { type: "numeric", difficulty: "hard", q: "A triangular prism has triangular bases (base 6 cm, height 4 cm) and three rectangular faces (6 × 10, 5 × 10, 5 × 10 cm). Find the total surface area (cm²).", answer: "184", explanation: "2 triangles: 2 × (½ × 6 × 4) = 24 cm². Rectangles: 60 + 50 + 50 = 160 cm². Total = 24 + 160 = 184 cm²." },
            { type: "mcq", difficulty: "hard", q: "Using π ≈ 3.14, the surface area of a cylinder (r = 3 cm, h = 10 cm) is 2πrh + 2πr². It equals approximately:", options: ["244.92 cm²", "188.4 cm²", "300 cm²", "56.52 cm²"], answer: 0, explanation: "Lateral: 2 × 3.14 × 3 × 10 = 188.4; two circles: 2 × 3.14 × 9 = 56.52; total = 244.92 cm²." },
            { type: "short", difficulty: "hard", q: "A cube has surface area 96 cm². Find the side length.", answer: "96 ÷ 6 = 16 cm² per face; side = √16 = 4 cm.", explanation: "SA of cube = 6s², so s² = SA/6, then s = √(SA/6)." },
            { type: "numeric", difficulty: "hard", q: "A square-based pyramid has a base 6 cm × 6 cm and four triangular faces each with base 6 cm and slant height 5 cm. Find the total surface area (cm²).", answer: "96", explanation: "Base = 36 cm². 4 triangles: 4 × (½ × 6 × 5) = 60 cm². Total = 36 + 60 = 96 cm²." }
          ] },
        { text: "Find the volume of prisms using V = Bh.",
          resources: [
            { type: "interactive", title: "Volume study bot", provider: "📚 Library · ChatGPT", url: "https://chatgpt.com/g/g-678bba1058608191b7567d768eefdd1a-volume-bot", note: "Your class's tutor bot for volume problems. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Volume of a prism", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/prisms.html", note: "V = base area × height." },
            { type: "interactive", title: "Volume", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Angles; Shapes; Area, perimeter and volume (Stage 8)", note: "Angles, 2D/3D shapes, area, surface area and volume are covered in the Cambridge Stage 8 geometry and measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 ‘The Story of the Elusive Shape’", note: "Enrichment read (accessible stretch): the maths of shapes, symmetry and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A prism has base area B = 10 cm² and height h = 6 cm. Find its volume (cm³).", answer: "60", explanation: "V = Bh = 10 × 6 = 60 cm³." },
            { type: "numeric", difficulty: "easy", q: "Find the volume of a cuboid 2 × 3 × 5 (cm³).", answer: "30", explanation: "2 × 3 × 5 = 30 cm³." },
            { type: "tf", difficulty: "easy", q: "V = Bh means volume equals base area multiplied by the perpendicular height.", answer: true, explanation: "B is the base area and h is the height of the prism." },
            { type: "numeric", difficulty: "easy", q: "A prism has base area 15 cm² and height 4 cm. Find the volume (cm³).", answer: "60", explanation: "V = 15 × 4 = 60 cm³." },
            { type: "mcq", difficulty: "medium", q: "A triangular prism has triangular base area 12 cm² and length 8 cm. Its volume is:", options: ["96 cm³", "20 cm³", "48 cm³", "192 cm³"], answer: 0, explanation: "V = 12 × 8 = 96 cm³." },
            { type: "numeric", difficulty: "medium", q: "A cuboid is 6 cm × 4 cm × 5 cm. Find the volume (cm³).", answer: "120", explanation: "V = 6 × 4 × 5 = 120 cm³." },
            { type: "mcq", difficulty: "medium", q: "A prism has volume 180 cm³ and height 9 cm. The base area is:", options: ["20 cm²", "180 cm²", "9 cm²", "171 cm²"], answer: 0, explanation: "B = V ÷ h = 180 ÷ 9 = 20 cm²." },
            { type: "numeric", difficulty: "medium", q: "A cube has side 4 cm. Find its volume (cm³).", answer: "64", explanation: "V = 4³ = 64 cm³." },
            { type: "mcq", difficulty: "hard", q: "A prism has a base that is a right-angled triangle with legs 6 cm and 8 cm. Its height is 10 cm. The volume is:", options: ["240 cm³", "480 cm³", "120 cm³", "360 cm³"], answer: 0, explanation: "Base area = ½ × 6 × 8 = 24 cm²; V = 24 × 10 = 240 cm³." },
            { type: "numeric", difficulty: "hard", q: "A prism has volume 300 cm³ and base area 25 cm². What is the height (cm)?", answer: "12", explanation: "h = V ÷ B = 300 ÷ 25 = 12 cm." },
            { type: "short", difficulty: "hard", q: "A swimming pool is a prism 25 m long. Its cross-section is a trapezium with parallel sides 1 m and 2 m and width 10 m. Find the volume (m³).", answer: "Trapezium area = ½ × (1 + 2) × 10 = 15 m². V = 15 × 25 = 375 m³.", explanation: "V = cross-sectional area × length of prism." },
            { type: "numeric", difficulty: "hard", q: "A prism has a base that is a parallelogram with base 8 cm and height 5 cm. The prism's length is 12 cm. Find the volume (cm³).", answer: "480", explanation: "Base area = 8 × 5 = 40 cm²; V = 40 × 12 = 480 cm³." }
          ] },
        { text: "Solve real-world volume problems.",
          resources: [
            { type: "interactive", title: "Prisms (Volume)", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/prisms.html", note: "Volume in real-world contexts." },
            { type: "interactive", title: "Volume", provider: "Khan Academy", url: "https://www.khanacademy.org/math/basic-geo", note: "Word problems." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Angles; Shapes; Area, perimeter and volume (Stage 8)", note: "Angles, 2D/3D shapes, area, surface area and volume are covered in the Cambridge Stage 8 geometry and measures units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 2 ‘The Story of the Elusive Shape’", note: "Enrichment read (accessible stretch): the maths of shapes, symmetry and space.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A tank is 1 m × 2 m × 0.5 m. What is its volume in m³?", answer: "1", explanation: "1 × 2 × 0.5 = 1 m³." },
            { type: "short", difficulty: "medium", q: "A box is 10 cm × 10 cm × 10 cm. Explain how to find its volume and give the answer in cm³.", answer: "Volume = length × width × height = 10 × 10 × 10 = 1000 cm³.", explanation: "Multiply the three dimensions." },
            { type: "numeric", difficulty: "easy", q: "A fish tank is 60 cm × 30 cm × 30 cm. Find its volume in cm³.", answer: "54000", explanation: "60 × 30 × 30 = 54 000 cm³." },
            { type: "mcq", difficulty: "medium", q: "A swimming pool is 20 m × 8 m × 1.5 m deep. Its volume is:", options: ["240 m³", "200 m³", "480 m³", "120 m³"], answer: 0, explanation: "20 × 8 × 1.5 = 240 m³." },
            { type: "numeric", difficulty: "medium", q: "A rectangular box holds 500 cm³. Its base is 10 cm × 5 cm. What is its height (cm)?", answer: "10", explanation: "Height = 500 ÷ (10 × 5) = 500 ÷ 50 = 10 cm." },
            { type: "mcq", difficulty: "medium", q: "1 litre = 1000 cm³. A container has volume 3500 cm³. How many litres is this?", options: ["3.5 litres", "350 litres", "35 litres", "0.35 litres"], answer: 0, explanation: "3500 ÷ 1000 = 3.5 litres." },
            { type: "numeric", difficulty: "medium", q: "Sand fills a box 50 cm × 40 cm × 20 cm. Find the volume in litres. (1 litre = 1000 cm³)", answer: "40", explanation: "50 × 40 × 20 = 40 000 cm³ = 40 litres." },
            { type: "mcq", difficulty: "hard", q: "A cylindrical can has radius 7 cm and height 15 cm. Using π ≈ 22/7, its volume is:", options: ["2310 cm³", "3300 cm³", "660 cm³", "1155 cm³"], answer: 0, explanation: "V = π × 7² × 15 = 22/7 × 49 × 15 = 22 × 7 × 15 = 2310 cm³." },
            { type: "numeric", difficulty: "hard", q: "A cube-shaped storage box has volume 512 cm³. What is its side length (cm)?", answer: "8", explanation: "Side = ∛512 = 8 cm (since 8³ = 512)." },
            { type: "short", difficulty: "hard", q: "A water tank (1.5 m × 1 m × 0.8 m) is filled to 75% of its capacity. How many litres of water are in the tank?", answer: "Full volume = 1.5 × 1 × 0.8 = 1.2 m³ = 1200 litres. 75% = 0.75 × 1200 = 900 litres.", explanation: "Find total volume, convert to litres (1 m³ = 1000 L), then take 75%." },
            { type: "mcq", difficulty: "hard", q: "Two identical boxes each have volume 360 cm³. One has base 6 cm × 6 cm; the other has base 9 cm × 8 cm. Their heights are:", options: ["10 cm and 5 cm", "60 cm and 40 cm", "6 cm and 9 cm", "36 cm and 72 cm"], answer: 0, explanation: "Height 1 = 360 ÷ 36 = 10 cm. Height 2 = 360 ÷ 72 = 5 cm." },
            { type: "tf", difficulty: "medium", q: "Doubling all three dimensions of a box multiplies its volume by 8.", answer: true, explanation: "New volume = (2l)(2w)(2h) = 8lwh — eight times the original." }
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
            { type: "interactive", title: "Probability study bot", provider: "📚 Library · ChatGPT", url: "https://chatgpt.com/g/g-6757bc78d1f8819195c9ad980a64cb93-unschool-probability-gpt", note: "Your class's tutor bot for probability questions. (Needs a ChatGPT login.)" },
            { type: "interactive", title: "Probability", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/probability.html", note: "Likelihood of outcomes." },
            { type: "interactive", title: "Basic probability", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Statistics; Probability (Stage 8)", note: "Averages, data handling and probability are covered in the Cambridge Stage 8 statistics and probability units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 3 ‘The Secret of the Winning Streak’", note: "Enrichment read (accessible stretch): probability, chance and games.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A fair die is rolled. P(rolling a 4) = ?", options: ["1/6", "1/4", "4/6", "1/2"], answer: 0, explanation: "One favourable outcome out of six: 1/6." },
            { type: "numeric", difficulty: "medium", q: "A bag has 3 red and 2 blue balls. P(red) as a decimal (1 dp)?", answer: "0.6", explanation: "3 out of 5 = 0.6." },
            { type: "tf", difficulty: "easy", q: "Probability is always between 0 and 1 inclusive.", answer: true, explanation: "0 means impossible; 1 means certain." },
            { type: "mcq", difficulty: "easy", q: "A fair coin is flipped. P(heads) = ?", options: ["0.5", "1", "0.25", "0.75"], answer: 0, explanation: "Heads or tails: 1 out of 2 = 0.5." },
            { type: "numeric", difficulty: "easy", q: "There are 10 balls: 4 yellow and 6 green. What is P(yellow) as a decimal?", answer: "0.4", explanation: "4 out of 10 = 0.4." },
            { type: "mcq", difficulty: "medium", q: "A bag has 5 red, 3 blue and 2 green balls. P(blue) = ?", options: ["0.3", "0.5", "0.2", "3/8"], answer: 0, explanation: "3 out of 10 = 0.3." },
            { type: "tf", difficulty: "medium", q: "If P(A) = 0.7, then P(not A) = 0.3.", answer: true, explanation: "P(A) + P(not A) = 1; so P(not A) = 1 − 0.7 = 0.3." },
            { type: "numeric", difficulty: "medium", q: "P(event) = 3/5. What is P(event does NOT happen)?", answer: "0.4", explanation: "P(not A) = 1 − 3/5 = 2/5 = 0.4." },
            { type: "mcq", difficulty: "medium", q: "From cards numbered 1–10, P(even) = ?", options: ["0.5", "0.4", "0.6", "0.3"], answer: 0, explanation: "Even numbers: 2,4,6,8,10 — 5 out of 10 = 0.5." },
            { type: "mcq", difficulty: "hard", q: "A fair die is rolled. P(number greater than 4) = ?", options: ["1/3", "1/2", "2/3", "1/6"], answer: 0, explanation: "Outcomes > 4: {5, 6} — 2 out of 6 = 1/3." },
            { type: "short", difficulty: "hard", q: "A bag has 4 red, 3 blue and 5 yellow counters. Find P(not red).", answer: "P(not red) = (3 + 5) / 12 = 8/12 = 2/3 ≈ 0.667.", explanation: "Total = 12; not red = 8; P = 8/12 = 2/3." },
            { type: "numeric", difficulty: "hard", q: "From cards 1–20, find P(prime) as a decimal (to 2 dp). Primes 1–20: 2,3,5,7,11,13,17,19 (8 primes).", answer: "0.4", explanation: "8 prime numbers from 1 to 20; P = 8/20 = 0.4." }
          ] },
        { text: "Compare experimental and theoretical probability.",
          resources: [
            { type: "interactive", title: "Theoretical vs experimental", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Prediction vs results." },
            { type: "interactive", title: "Probability", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/probability.html", note: "Outcomes and trials." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Statistics; Probability (Stage 8)", note: "Averages, data handling and probability are covered in the Cambridge Stage 8 statistics and probability units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 3 ‘The Secret of the Winning Streak’", note: "Enrichment read (accessible stretch): probability, chance and games.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "Theoretical probability is based on equally likely outcomes; experimental probability is based on results of trials.", answer: true, explanation: "Theory predicts; experiment measures." },
            { type: "mcq", difficulty: "medium", q: "A coin is flipped 100 times, landing heads 54 times. The experimental probability of heads is:", options: ["0.5", "0.54", "0.46", "54"], answer: 1, explanation: "54 ÷ 100 = 0.54." },
            { type: "tf", difficulty: "easy", q: "As you conduct more trials, experimental probability tends to get closer to theoretical probability.", answer: true, explanation: "The law of large numbers: more trials → closer to theoretical value." },
            { type: "mcq", difficulty: "easy", q: "The theoretical probability of rolling a 6 on a fair die is:", options: ["1/6", "6/6", "1/2", "1/36"], answer: 0, explanation: "There is exactly 1 six on a fair six-sided die." },
            { type: "numeric", difficulty: "medium", q: "A die is rolled 60 times and shows a 6 exactly 12 times. What is the experimental probability (to 2 dp)?", answer: "0.2", explanation: "12 ÷ 60 = 0.2." },
            { type: "mcq", difficulty: "medium", q: "Which best explains why experimental probability may differ from theoretical probability?", options: ["Chance variation in a small number of trials", "The die is always unfair", "Theoretical probability is wrong", "You can only calculate experimental probability"], answer: 0, explanation: "Random variation causes differences, especially with fewer trials." },
            { type: "tf", difficulty: "medium", q: "A fair coin should land heads exactly 50% of the time in every set of 100 flips.", answer: false, explanation: "The 50% figure is the long-run average; individual sets of 100 will vary." },
            { type: "numeric", difficulty: "medium", q: "A spinner lands on red 45 times out of 150 spins. What is the experimental probability of red?", answer: "0.3", explanation: "45 ÷ 150 = 0.3." },
            { type: "mcq", difficulty: "hard", q: "You flip a coin 200 times and get 108 heads. Is this consistent with a fair coin?", options: ["Yes — 108/200 = 0.54, close to 0.5", "No — it must be biased", "Yes — only exact 100/200 confirms fair", "Cannot determine"], answer: 0, explanation: "0.54 is close to 0.5; small deviations are expected due to chance." },
            { type: "short", difficulty: "hard", q: "A die is rolled 300 times. How many 3s would you expect? Explain using theoretical probability.", answer: "Expected = 300 × (1/6) = 50 threes. Theoretical probability gives the expected long-run frequency.", explanation: "Expected frequency = n × P(event)." },
            { type: "numeric", difficulty: "hard", q: "A biased coin has P(heads) = 0.6. In 500 flips, how many heads are expected?", answer: "300", explanation: "Expected heads = 500 × 0.6 = 300." },
            { type: "mcq", difficulty: "hard", q: "To estimate the probability that a drawing pin lands point up, a student drops it 200 times and it lands point up 130 times. The estimated probability is:", options: ["0.65", "0.5", "0.35", "130"], answer: 0, explanation: "130/200 = 0.65." }
          ] },
        { text: "Understand sampling.",
          resources: [
            { type: "interactive", title: "Sampling", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Representative samples." },
            { type: "interactive", title: "Data Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Fair, representative samples." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Statistics; Probability (Stage 8)", note: "Averages, data handling and probability are covered in the Cambridge Stage 8 statistics and probability units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 3 ‘The Secret of the Winning Streak’", note: "Enrichment read (accessible stretch): probability, chance and games.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A good sample should be:", options: ["large and representative", "small and biased", "only your friends", "the whole population always"], answer: 0, explanation: "Larger, representative samples give reliable results." },
            { type: "tf", difficulty: "easy", q: "A biased sample can make results misleading.", answer: true, explanation: "Bias distorts the conclusions." },
            { type: "tf", difficulty: "easy", q: "A census surveys every member of the population.", answer: true, explanation: "A census collects data from the entire population, unlike a sample." },
            { type: "mcq", difficulty: "easy", q: "Why do we use samples instead of the whole population?", options: ["Samples are quicker and cheaper", "Samples are always more accurate", "Populations are not real", "Sample sizes should be 100%"], answer: 0, explanation: "Gathering data from a whole population is usually too time-consuming and expensive." },
            { type: "mcq", difficulty: "medium", q: "A school wants to know students' views on homework. Which sample is LEAST biased?", options: ["50 randomly chosen students from all year groups", "Only the students who volunteer", "The headteacher's class", "The 50 best students"], answer: 0, explanation: "Random selection from all groups is most representative." },
            { type: "tf", difficulty: "medium", q: "A larger sample size always guarantees an unbiased result.", answer: false, explanation: "Even large samples can be biased if the selection method is poor." },
            { type: "mcq", difficulty: "medium", q: "A shop surveys only morning customers. This is biased because:", options: ["it misses customers who only shop in the afternoon or evening", "morning customers are always right", "afternoon data is unimportant", "samples should only be taken at one time"], answer: 0, explanation: "Different customer types at different times means the sample is not representative." },
            { type: "mcq", difficulty: "medium", q: "What is a random sample?", options: ["Every member of the population has an equal chance of being selected", "The first 10 people you see", "A sample chosen by the researcher's preference", "All members of one group"], answer: 0, explanation: "Random samples give every individual an equal chance of inclusion." },
            { type: "short", difficulty: "hard", q: "A student asks 20 classmates their favourite sport to represent the views of 600 students in the school. Give two reasons why this may not be a good sample.", answer: "1. 20 is a very small fraction of 600 (only 3.3%), so results may not be representative. 2. Classmates share classes and possibly interests, making the sample not random.", explanation: "A good sample is large enough and randomly chosen from the whole population." },
            { type: "tf", difficulty: "hard", q: "Using only online responses to a survey can introduce bias.", answer: true, explanation: "Only people with internet access and motivation will respond, excluding others." },
            { type: "mcq", difficulty: "hard", q: "Which sampling method is most likely to be unbiased?", options: ["Systematic random sampling (every 5th person from a list)", "Asking only female students", "Taking data from one classroom only", "Only surveying high achievers"], answer: 0, explanation: "Systematic random sampling selects individuals at regular intervals from a complete list, reducing bias." },
            { type: "numeric", difficulty: "medium", q: "A school has 600 students. A researcher surveys 60. What percentage of the school did they sample?", answer: "10", explanation: "60/600 × 100 = 10%." }
          ] },
        { text: "Find measures of central tendency.",
          resources: [
            { type: "interactive", title: "Mean, Median, Mode", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/central-measures.html", note: "The three averages." },
            { type: "interactive", title: "Averages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Statistics; Probability (Stage 8)", note: "Averages, data handling and probability are covered in the Cambridge Stage 8 statistics and probability units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 3 ‘The Secret of the Winning Streak’", note: "Enrichment read (accessible stretch): probability, chance and games.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Find the mean of 4, 6, 8, 10.", answer: "7", explanation: "(4 + 6 + 8 + 10) ÷ 4 = 28 ÷ 4 = 7." },
            { type: "numeric", difficulty: "medium", q: "Find the median of 3, 7, 9, 12, 15.", answer: "9", explanation: "The middle value of five ordered numbers is 9." },
            { type: "tf", difficulty: "easy", q: "The mode is the value that appears most often in a data set.", answer: true, explanation: "Mode = most frequent value." },
            { type: "mcq", difficulty: "easy", q: "Find the mode of: 5, 3, 5, 7, 5, 3.", options: ["5", "3", "7", "4.67"], answer: 0, explanation: "5 appears three times — more than any other value." },
            { type: "numeric", difficulty: "easy", q: "Find the mean of 10, 20, 30.", answer: "20", explanation: "(10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20." },
            { type: "mcq", difficulty: "medium", q: "Find the median of 2, 4, 4, 6, 8.", options: ["4", "5", "6", "4.8"], answer: 0, explanation: "Middle value of five ordered numbers is the 3rd: 4." },
            { type: "numeric", difficulty: "medium", q: "Find the mean of 12, 15, 18, 21, 24.", answer: "18", explanation: "(12+15+18+21+24) ÷ 5 = 90 ÷ 5 = 18." },
            { type: "mcq", difficulty: "medium", q: "For an even number of data values, the median is:", options: ["the mean of the two middle values", "the highest value", "the most frequent value", "the first middle value only"], answer: 0, explanation: "With even n, sort the data and average the two middle values." },
            { type: "numeric", difficulty: "medium", q: "Find the median of 5, 8, 11, 14.", answer: "9.5", explanation: "Two middle values: 8 and 11; median = (8 + 11)/2 = 9.5." },
            { type: "mcq", difficulty: "hard", q: "The mean of 5 numbers is 12. Four of the numbers are 9, 11, 14, 16. What is the fifth?", options: ["10", "12", "14", "8"], answer: 0, explanation: "Sum = 5 × 12 = 60; 9+11+14+16 = 50; fifth = 60 − 50 = 10." },
            { type: "short", difficulty: "hard", q: "Ages: 13, 14, 14, 15, 16, 17. Find the mean, median and mode.", answer: "Mean = (13+14+14+15+16+17)/6 = 89/6 ≈ 14.83. Median = (14+15)/2 = 14.5. Mode = 14.", explanation: "Mean = sum ÷ count; median = average of the two middle values; mode = most frequent." },
            { type: "numeric", difficulty: "hard", q: "The mean of six tests is 75. The mean of the first five tests is 72. What is the sixth test score?", answer: "90", explanation: "Total of 6 = 6 × 75 = 450; first 5 total = 5 × 72 = 360; 6th = 450 − 360 = 90." }
          ] },
        { text: "Choose and read data displays.",
          resources: [
            { type: "interactive", title: "Data displays", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Bar charts, pie charts and more." },
            { type: "interactive", title: "Charts & graphs", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Reading displays." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Statistics; Probability (Stage 8)", note: "Averages, data handling and probability are covered in the Cambridge Stage 8 statistics and probability units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 3 ‘The Secret of the Winning Streak’", note: "Enrichment read (accessible stretch): probability, chance and games.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which display is best for showing parts of a whole?", options: ["pie chart", "line graph", "scatter plot", "time series"], answer: 0, explanation: "A pie chart shows proportions of a whole." },
            { type: "tf", difficulty: "easy", q: "A bar chart is suitable for comparing categories.", answer: true, explanation: "Bars make category comparisons easy." },
            { type: "mcq", difficulty: "easy", q: "Which chart is best for showing how a quantity changes over time?", options: ["line graph", "bar chart", "pie chart", "histogram"], answer: 0, explanation: "A line graph joins data points over time, making trends clear." },
            { type: "tf", difficulty: "easy", q: "A pictogram uses pictures or symbols to represent data.", answer: true, explanation: "Each symbol represents a fixed number of items." },
            { type: "mcq", difficulty: "medium", q: "In a pie chart, the whole circle represents:", options: ["100% of the data", "the most frequent value", "50% of the data", "the range"], answer: 0, explanation: "A full circle (360°) = 100% of the data." },
            { type: "mcq", difficulty: "medium", q: "Which chart is best for showing the frequency distribution of continuous data?", options: ["histogram", "pie chart", "pictogram", "bar chart"], answer: 0, explanation: "Histograms show the distribution of continuous data with no gaps between bars." },
            { type: "mcq", difficulty: "medium", q: "A frequency table shows that 12 students scored 70–79. In a bar chart with this range on the x-axis, the bar height is:", options: ["12", "70", "79", "74.5"], answer: 0, explanation: "The bar height equals the frequency: 12 students." },
            { type: "tf", difficulty: "medium", q: "A stem-and-leaf diagram shows both the shape of the data and the individual values.", answer: true, explanation: "Each value is split into a stem (tens) and leaf (units), retaining all original data." },
            { type: "mcq", difficulty: "hard", q: "A pie chart sector for 'Science' represents 90° out of 360°. What percentage chose Science?", options: ["25%", "90%", "50%", "40%"], answer: 0, explanation: "90 ÷ 360 × 100 = 25%." },
            { type: "short", difficulty: "hard", q: "Explain when you would choose a scatter graph over a bar chart.", answer: "Use a scatter graph when you want to investigate a possible relationship (correlation) between two numerical variables. Use a bar chart to compare the frequencies or amounts of different categories.", explanation: "Scatter graphs show relationships; bar charts show category comparisons." },
            { type: "mcq", difficulty: "hard", q: "In a back-to-back stem-and-leaf diagram, two sets of data share:", options: ["the same stem", "the same leaves", "the same scale", "the same mean"], answer: 0, explanation: "The stem runs down the middle; leaves for each group extend either side." },
            { type: "numeric", difficulty: "medium", q: "30 students were surveyed. In a pie chart, if 9 chose maths, how many degrees represent maths?", answer: "108", explanation: "9/30 × 360 = 0.3 × 360 = 108°." }
          ] },
        { text: "Interpret graphs.",
          resources: [
            { type: "interactive", title: "Data Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Reading and describing graphs." },
            { type: "interactive", title: "Graph interpretation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." },
            { type: "book", title: "Cambridge Lower Secondary Mathematics Learner's Book 8", author: "Cambridge University Press (2nd ed.)", chapter: "Units: Statistics; Probability (Stage 8)", note: "Averages, data handling and probability are covered in the Cambridge Stage 8 statistics and probability units.", url: "https://www.cambridge.org/us/education/subject/mathematics/cambridge-primary-and-lower-secondary-mathematics-2nd-edition/cambridge-lower-secondary-mathematics-2nd-edition-learners-book-8-digital-access-1-year?isbn=9781108771528" },
            { type: "book", enrichment: true, title: "The Number Mysteries", author: "Marcus du Sautoy", chapter: "Ch 3 ‘The Secret of the Winning Streak’", note: "Enrichment read (accessible stretch): probability, chance and games.", url: "https://archive.org/details/numbermysteriesm0000dusa" }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "A line graph of temperature rises then falls. What does the rising part tell you?", answer: "During the rising part, the temperature is increasing over that period of time.", explanation: "An upward slope means the quantity is increasing." },
            { type: "mcq", difficulty: "medium", q: "On a distance-time graph, a steeper line means:", options: ["faster speed", "slower speed", "stopped", "going backwards"], answer: 0, explanation: "Steeper gradient = greater speed." },
            { type: "tf", difficulty: "easy", q: "A horizontal section on a distance-time graph means the object is stationary.", answer: true, explanation: "No change in distance over time means speed = 0." },
            { type: "mcq", difficulty: "easy", q: "On a bar chart, the tallest bar represents:", options: ["the most frequent category", "the least frequent category", "the median", "the mean"], answer: 0, explanation: "The tallest bar has the greatest frequency." },
            { type: "mcq", difficulty: "medium", q: "A line graph shows positive correlation between two variables. This means:", options: ["as one increases, the other increases", "as one increases, the other decreases", "there is no relationship", "both decrease together"], answer: 0, explanation: "Positive correlation means both variables increase together." },
            { type: "mcq", difficulty: "medium", q: "On a pie chart, a sector of 180° represents what fraction of the total?", options: ["1/2", "1/4", "1/3", "3/4"], answer: 0, explanation: "180°/360° = 1/2." },
            { type: "tf", difficulty: "medium", q: "A scatter graph with points close to a straight line shows strong correlation.", answer: true, explanation: "Points near a line indicate a strong linear relationship." },
            { type: "mcq", difficulty: "medium", q: "On a frequency table, the total of all frequencies equals:", options: ["the number of data values", "the mean", "the median", "the range"], answer: 0, explanation: "Adding all frequencies gives the total number of data values (n)." },
            { type: "mcq", difficulty: "hard", q: "A distance-time graph shows a line going backwards (downward slope). This means:", options: ["the object is returning to the starting point", "the object sped up", "the object is stationary", "the graph is wrong"], answer: 0, explanation: "A downward slope means the distance from the start is decreasing — the object is moving back." },
            { type: "short", difficulty: "hard", q: "A scatter graph shows no correlation between shoe size and maths score. What does this tell you?", answer: "There is no linear relationship between the two variables: knowing someone's shoe size does not help you predict their maths score.", explanation: "No correlation means the variables are unrelated." },
            { type: "mcq", difficulty: "hard", q: "Two line graphs on the same axes show sales for January–December. Which feature lets you compare the trends most easily?", options: ["The overall shape and direction of each line", "The individual y-values at each month", "The number of data points", "The colour of each line"], answer: 0, explanation: "The shape and direction of the lines reveals whether sales rose, fell or stayed flat over time for each product." },
            { type: "numeric", difficulty: "hard", q: "A bar chart shows these frequencies: A=15, B=25, C=10, D=20. What is the relative frequency (as a decimal) of category B?", answer: "0.36", explanation: "Total = 70; relative frequency of B = 25/70 ≈ 0.357 ≈ 0.36." }
          ] }
      ]
    }
  ]
});
