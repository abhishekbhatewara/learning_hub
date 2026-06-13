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
            { type: "numeric", difficulty: "easy", q: "A ratio is 1:4. The total is 10 parts? No — there are 5 parts in total. If the sum is 10, find the smaller number.", answer: "2", explanation: "5 parts → 10 ÷ 5 = 2; smaller = 1 × 2 = 2." },
            { type: "tf", difficulty: "easy", q: "The ratio 4:6 simplifies to 2:3.", answer: true, explanation: "Divide both parts by 2: 4:6 = 2:3." },
            { type: "numeric", difficulty: "medium", q: "Two numbers are in the ratio 2:3 and add to 20. What is the larger number?", answer: "12", explanation: "5 parts → 20 ÷ 5 = 4 each; larger = 3 × 4 = 12." },
            { type: "short", difficulty: "medium", q: "x and y are in the ratio 3:5. If x = 9, find y.", answer: "The scale factor is 9 ÷ 3 = 3, so y = 5 × 3 = 15.", explanation: "Scale both parts by the same factor." },
            { type: "numeric", difficulty: "medium", q: "A and B share £56 in the ratio 3:5. How much does A receive (£)?", answer: "21", explanation: "8 parts → £56 ÷ 8 = £7 each; A = 3 × £7 = £21." },
            { type: "mcq", difficulty: "medium", q: "Two numbers are in the ratio 5:7 and sum to 60. What is the smaller number?", options: ["25", "35", "12", "30"], answer: 0, explanation: "12 parts → 60 ÷ 12 = 5 each; smaller = 5 × 5 = 25." },
            { type: "numeric", difficulty: "medium", q: "If a:b = 2:3 and b = 15, find a.", answer: "10", explanation: "Scale factor = 15 ÷ 3 = 5; a = 2 × 5 = 10." },
            { type: "mcq", difficulty: "medium", q: "a:b = 4:1. If a + b = 25, find b.", options: ["5", "4", "20", "10"], answer: 0, explanation: "5 parts → 25 ÷ 5 = 5; b = 1 × 5 = 5." },
            { type: "numeric", difficulty: "hard", q: "Three people share £150 in the ratio 1:2:3. Find the largest share (£).", answer: "75", explanation: "6 parts → £150 ÷ 6 = £25; largest = 3 × £25 = £75." },
            { type: "numeric", difficulty: "hard", q: "If m:n = x:4 and m = 6, n = 8, find x.", answer: "3", explanation: "m:n = 6:8 = 3:4, so x = 3." },
            { type: "mcq", difficulty: "hard", q: "The ratio of red to blue counters is 3:2. There are 6 red. How many blue?", options: ["4", "3", "6", "9"], answer: 0, explanation: "Scale factor = 6 ÷ 3 = 2; blue = 2 × 2 = 4." },
            { type: "short", difficulty: "hard", q: "A map is drawn at a scale of 1:50. A room measures 6 cm on the map. What is the real length (cm)?", answer: "6 × 50 = 300 cm (3 m).", explanation: "Multiply map length by the scale factor." }
          ] },
        { text: "Use direct proportion to find missing quantities.",
          resources: [
            { type: "interactive", title: "Direct proportion", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/directly-inversely-proportional.html", note: "Scaling with a constant." },
            { type: "interactive", title: "Proportion", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "If y is directly proportional to x, when x doubles, y doubles.", answer: true, explanation: "Direct proportion means y = kx, so doubling x doubles y." },
            { type: "numeric", difficulty: "easy", q: "5 books cost £20. How much do 8 books cost (£)?", answer: "32", explanation: "£4 each, so 8 × £4 = £32." },
            { type: "numeric", difficulty: "medium", q: "y is directly proportional to x; y = 18 when x = 6. Find y when x = 10.", answer: "30", explanation: "k = 18 ÷ 6 = 3, so y = 3 × 10 = 30." },
            { type: "mcq", difficulty: "easy", q: "y ∝ x means:", options: ["y = kx for some constant k", "y = k + x", "y = k − x", "y = x²"], answer: 0, explanation: "The symbol ∝ means 'is proportional to', giving y = kx." },
            { type: "numeric", difficulty: "medium", q: "y is directly proportional to x; y = 12 when x = 4. Find the constant of proportionality k.", answer: "3", explanation: "k = y ÷ x = 12 ÷ 4 = 3." },
            { type: "numeric", difficulty: "medium", q: "A car uses 3 litres of fuel per 24 km. How many litres for 56 km?", answer: "7", explanation: "Rate = 3/24 per km; 56 × (3/24) = 7 litres." },
            { type: "mcq", difficulty: "medium", q: "If y = 4x and x = 7, then y = ?", options: ["28", "11", "3", "47"], answer: 0, explanation: "4 × 7 = 28." },
            { type: "numeric", difficulty: "medium", q: "A recipe uses 200 g of sugar for 8 cookies. How much sugar (g) for 12 cookies?", answer: "300", explanation: "25 g per cookie × 12 = 300 g." },
            { type: "numeric", difficulty: "hard", q: "y ∝ x; y = 45 when x = 9. Find x when y = 100.", answer: "20", explanation: "k = 45 ÷ 9 = 5; x = y ÷ k = 100 ÷ 5 = 20." },
            { type: "tf", difficulty: "hard", q: "A graph of y against x for direct proportion always passes through the origin.", answer: true, explanation: "y = kx gives (0,0) when x = 0." },
            { type: "mcq", difficulty: "hard", q: "P is directly proportional to Q. When P = 35, Q = 7. Find P when Q = 13.", options: ["65", "91", "5", "70"], answer: 0, explanation: "k = 35 ÷ 7 = 5; P = 5 × 13 = 65." },
            { type: "numeric", difficulty: "hard", q: "The cost of electricity is proportional to units used. 50 units cost £8. How much do 175 units cost (£)?", answer: "28", explanation: "Rate = 8/50 = 0.16 per unit; 175 × 0.16 = £28." }
          ] },
        { text: "Calculate simple interest.",
          resources: [
            { type: "interactive", title: "Simple Interest", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/interest.html", note: "I = PRT/100." },
            { type: "interactive", title: "Simple interest", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Simple interest is calculated only on the original principal.", answer: true, explanation: "Unlike compound interest, simple interest does not earn interest on interest." },
            { type: "mcq", difficulty: "easy", q: "The formula for simple interest is:", options: ["I = PRT/100", "I = P(1 + r)^t", "I = P + RT", "I = PT/R"], answer: 0, explanation: "I = PRT/100 where P = principal, R = rate %, T = time in years." },
            { type: "numeric", difficulty: "medium", q: "Simple interest = PRT/100. P = £500, R = 4%, T = 2 years. Find the interest (£).", answer: "40", explanation: "(500 × 4 × 2) ÷ 100 = 4000 ÷ 100 = £40." },
            { type: "numeric", difficulty: "medium", q: "£200 at 5% simple interest for 3 years. Interest (£)?", answer: "30", explanation: "(200 × 5 × 3) ÷ 100 = £30." },
            { type: "numeric", difficulty: "medium", q: "£1000 at 6% simple interest for 5 years. What is the total amount (principal + interest) at the end (£)?", answer: "1300", explanation: "Interest = (1000 × 6 × 5)/100 = £300; total = £1000 + £300 = £1300." },
            { type: "numeric", difficulty: "medium", q: "P = £400, R = 3%, T = 4 years. Find the simple interest (£).", answer: "48", explanation: "(400 × 3 × 4) ÷ 100 = £48." },
            { type: "mcq", difficulty: "medium", q: "If simple interest for 1 year at 10% on £P is £50, what is P?", options: ["500", "50", "5000", "5"], answer: 0, explanation: "I = P × 10 × 1 / 100 = P/10 = 50, so P = £500." },
            { type: "numeric", difficulty: "hard", q: "A loan of £600 earns £72 simple interest in 2 years. What is the annual rate (%)? Give just the number.", answer: "6", explanation: "R = I × 100 ÷ (P × T) = 72 × 100 ÷ (600 × 2) = 6%." },
            { type: "numeric", difficulty: "hard", q: "£P at 8% simple interest earns £120 in 3 years. Find P (£).", answer: "500", explanation: "P = I × 100 ÷ (R × T) = 120 × 100 ÷ (8 × 3) = 12000 ÷ 24 = £500." },
            { type: "short", difficulty: "hard", q: "How long does it take £800 at 5% simple interest to earn £200 interest? Show working.", answer: "T = I × 100 ÷ (P × R) = 200 × 100 ÷ (800 × 5) = 20000 ÷ 4000 = 5 years.", explanation: "Rearrange I = PRT/100 for T." },
            { type: "tf", difficulty: "hard", q: "Simple interest produces the same total amount as compound interest when T = 1 year.", answer: true, explanation: "For exactly one year, both formulas give the same interest." },
            { type: "mcq", difficulty: "hard", q: "£750 at 4% simple interest for 3 years. Total amount (£)?", options: ["840", "90", "750", "900"], answer: 0, explanation: "Interest = (750 × 4 × 3)/100 = £90; total = £750 + £90 = £840." }
          ] },
        { text: "Calculate compound interest.",
          resources: [
            { type: "interactive", title: "Compound Interest", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/compound-interest.html", note: "Interest on interest." },
            { type: "interactive", title: "Interest (simple & compound)", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/interest.html", note: "How interest is calculated." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Compound interest is calculated on both the principal and the accumulated interest.", answer: true, explanation: "Each period the interest is added, so the next period earns on a larger amount." },
            { type: "mcq", difficulty: "easy", q: "The compound-interest multiplier for 5% per year is:", options: ["1.05", "0.95", "1.5", "5"], answer: 0, explanation: "100% + 5% = 105% = 1.05." },
            { type: "numeric", difficulty: "medium", q: "£100 at 10% compound interest for 2 years. What is the final amount (£)?", answer: "121", explanation: "100 × 1.1 × 1.1 = £121." },
            { type: "mcq", difficulty: "medium", q: "Compound interest differs from simple interest because:", options: ["interest is earned on the interest too", "it is always less", "it ignores time", "the rate changes yearly"], answer: 0, explanation: "Each year's interest is added before the next is calculated." },
            { type: "numeric", difficulty: "medium", q: "£200 at 5% compound interest for 1 year. Final amount (£)?", answer: "210", explanation: "200 × 1.05 = £210." },
            { type: "numeric", difficulty: "medium", q: "£400 at 10% compound interest for 2 years. Final amount (£)?", answer: "484", explanation: "400 × 1.1² = 400 × 1.21 = £484." },
            { type: "mcq", difficulty: "medium", q: "£500 at 4% compound interest for 2 years. Final amount (£)?", options: ["540.80", "540", "541", "520"], answer: 0, explanation: "500 × 1.04² = 500 × 1.0816 = £540.80." },
            { type: "numeric", difficulty: "medium", q: "A savings account starts with £800 at 3% compound interest per year. After 1 year, how much interest is earned (£)?", answer: "24", explanation: "3% of £800 = £24." },
            { type: "numeric", difficulty: "hard", q: "£1000 at 2% compound interest per year. After 3 years, what is the total amount to 2 decimal places (£)? (1.02^3 = 1.0612)", answer: "1061.2", explanation: "1000 × 1.02³ = 1000 × 1.0612 = £1061.20." },
            { type: "tf", difficulty: "hard", q: "Over a long period, compound interest always exceeds simple interest at the same rate.", answer: true, explanation: "Compounding accelerates growth over time." },
            { type: "mcq", difficulty: "hard", q: "Which earns more after 2 years: £300 at 10% simple interest, or £300 at 10% compound interest?", options: ["compound interest", "simple interest", "they are equal", "depends on principal"], answer: 0, explanation: "Compound: 300 × 1.1² = £363; simple: 300 + 60 = £360." },
            { type: "short", difficulty: "hard", q: "£1200 is invested at 5% compound interest for 2 years. Show how to find the final amount.", answer: "Year 1: 1200 × 1.05 = 1260. Year 2: 1260 × 1.05 = 1323. Final amount = £1323.", explanation: "Apply the multiplier 1.05 repeatedly." }
          ] },
        { text: "Calculate GST (goods and services tax).",
          resources: [
            { type: "interactive", title: "Percentages of amounts", provider: "Math is Fun", url: "https://www.mathsisfun.com/percentage.html", note: "Adding a tax percentage." },
            { type: "interactive", title: "Tax & percentages", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "GST (Goods and Services Tax) is added to the price of goods.", answer: true, explanation: "GST is a consumption tax added on top of the base price." },
            { type: "numeric", difficulty: "easy", q: "What is the total price of a £50 item with 10% GST (£)?", answer: "55", explanation: "50 + 10% of 50 = 50 + 5 = £55." },
            { type: "numeric", difficulty: "medium", q: "An item costs £200 before 18% GST. What is the GST amount (£)?", answer: "36", explanation: "18% of 200 = £36." },
            { type: "numeric", difficulty: "medium", q: "An item costs £80 before 15% GST. What is the total price including GST (£)?", answer: "92", explanation: "15% of 80 = 12; 80 + 12 = £92." },
            { type: "mcq", difficulty: "medium", q: "A £250 phone has 20% GST added. The total price is:", options: ["£300", "£270", "£200", "£350"], answer: 0, explanation: "20% of 250 = 50; 250 + 50 = £300." },
            { type: "numeric", difficulty: "medium", q: "GST is 10%. An item costs £44 including GST. What was the price before GST (£)?", answer: "40", explanation: "Pre-GST = £44 ÷ 1.10 = £40." },
            { type: "numeric", difficulty: "medium", q: "GST is 5%. A bill totals £126 after GST. What is the GST amount (£)?", answer: "6", explanation: "Pre-GST = 126 ÷ 1.05 = 120; GST = 126 − 120 = £6." },
            { type: "mcq", difficulty: "medium", q: "The multiplier to add 25% GST to a price is:", options: ["1.25", "0.75", "1.025", "25"], answer: 0, explanation: "Adding 25% means multiplying by 1.25." },
            { type: "numeric", difficulty: "hard", q: "A shop sells a jacket for £117 including 17% GST. What was the price before GST (£)?", answer: "100", explanation: "117 ÷ 1.17 = 100." },
            { type: "short", difficulty: "hard", q: "A laptop costs £800 before tax. GST is 12.5%. Calculate the total price.", answer: "GST = 12.5% of £800 = £100; total = £800 + £100 = £900.", explanation: "Multiply by 1.125, or add the tax amount." },
            { type: "numeric", difficulty: "hard", q: "The GST rate is 8%. A meal costs £54 including GST. Find the GST paid (£).", answer: "4", explanation: "Pre-GST = 54 ÷ 1.08 = 50; GST = 54 − 50 = £4." },
            { type: "tf", difficulty: "hard", q: "To find the pre-GST price from the total, you divide the total by (1 + GST rate as a decimal).", answer: true, explanation: "If total = price × 1.r, then price = total ÷ 1.r." }
          ] },
        { text: "Calculate depreciation.",
          resources: [
            { type: "interactive", title: "Money & financial maths", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/index.html", note: "Value falling over time." },
            { type: "interactive", title: "Percentage decrease", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Repeated decrease." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Depreciation means an asset loses value over time.", answer: true, explanation: "Assets such as cars and electronics typically decrease in value." },
            { type: "mcq", difficulty: "easy", q: "The multiplier for a 15% annual depreciation is:", options: ["0.85", "0.15", "1.15", "1.85"], answer: 0, explanation: "Losing 15% means keeping 85% → multiply by 0.85." },
            { type: "numeric", difficulty: "medium", q: "A £1000 laptop loses 20% of its value in a year. What is its value after 1 year (£)?", answer: "800", explanation: "1000 × 0.8 = £800." },
            { type: "short", difficulty: "hard", q: "A car worth £10,000 depreciates 10% per year. Explain how to find its value after 2 years and give the answer.", answer: "Multiply by 0.9 each year: 10,000 × 0.9 × 0.9 = £8100.", explanation: "Repeated percentage decrease uses the multiplier 0.9." },
            { type: "numeric", difficulty: "medium", q: "A bike costs £500 and depreciates at 25% per year. What is its value after 1 year (£)?", answer: "375", explanation: "500 × 0.75 = £375." },
            { type: "numeric", difficulty: "medium", q: "A phone worth £600 depreciates at 30% per year. Find its value after 1 year (£).", answer: "420", explanation: "600 × 0.70 = £420." },
            { type: "mcq", difficulty: "medium", q: "A car costs £12,000 and loses 20% per year. After 2 years its value is:", options: ["£7680", "£9600", "£8000", "£7200"], answer: 0, explanation: "12,000 × 0.8² = 12,000 × 0.64 = £7680." },
            { type: "numeric", difficulty: "medium", q: "A machine costs £2000 and depreciates 10% per year. What is its value after 2 years (£)?", answer: "1620", explanation: "2000 × 0.9 × 0.9 = 2000 × 0.81 = £1620." },
            { type: "numeric", difficulty: "hard", q: "Equipment costs £8000 and depreciates 5% per year. After 3 years, what is its value? (0.95^3 = 0.857375) Give your answer to the nearest pound.", answer: "6859", explanation: "8000 × 0.857375 = £6859 (to nearest £)." },
            { type: "mcq", difficulty: "hard", q: "A car bought for £20,000 depreciates by 30% in year 1 and 20% in year 2. Its value after 2 years is:", options: ["£11200", "£10000", "£12000", "£10800"], answer: 0, explanation: "Year 1: 20,000 × 0.7 = 14,000. Year 2: 14,000 × 0.8 = £11,200." },
            { type: "short", difficulty: "hard", q: "A camera costs £900. After 2 years of 10% annual depreciation, it is sold. What is the selling price (£)?", answer: "900 × 0.9 × 0.9 = 900 × 0.81 = £729.", explanation: "Apply the 0.9 multiplier twice." },
            { type: "tf", difficulty: "hard", q: "A car that depreciates at 20% per year will be worth zero after exactly 5 years.", answer: false, explanation: "Percentage depreciation means the value halves progressively — it never reaches exactly zero." }
          ] },
        { text: "Apply percentage change to financial problems.",
          resources: [
            { type: "interactive", title: "Percentage change", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/percentage-change.html", note: "Increases and decreases in money." },
            { type: "interactive", title: "Money & financial maths", provider: "Math is Fun", url: "https://www.mathsisfun.com/money/index.html", note: "Real-life financial percentages." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The formula for percentage change is:", options: ["(change ÷ original) × 100", "(original ÷ change) × 100", "change × 100", "(new − original) ÷ 100"], answer: 0, explanation: "Percentage change = (change ÷ original) × 100." },
            { type: "numeric", difficulty: "easy", q: "An £80 jacket is reduced by 25%. What is the sale price (£)?", answer: "60", explanation: "80 × 0.75 = £60." },
            { type: "numeric", difficulty: "medium", q: "A salary rises from £20,000 to £22,000. What is the percentage increase? (number only)", answer: "10", explanation: "Change £2000; 2000 ÷ 20,000 × 100 = 10%." },
            { type: "numeric", difficulty: "medium", q: "A price drops from £50 to £40. What is the percentage decrease? (number only)", answer: "20", explanation: "Change = 10; 10 ÷ 50 × 100 = 20%." },
            { type: "mcq", difficulty: "medium", q: "A house price rises from £200,000 to £230,000. The percentage increase is:", options: ["15%", "30%", "13%", "20%"], answer: 0, explanation: "30,000 ÷ 200,000 × 100 = 15%." },
            { type: "numeric", difficulty: "medium", q: "A product's price increases by 12% from £75. What is the new price (£)?", answer: "84", explanation: "75 × 1.12 = £84." },
            { type: "numeric", difficulty: "medium", q: "A car was £15,000 and is now £12,000. Find the percentage decrease. (number only)", answer: "20", explanation: "3000 ÷ 15,000 × 100 = 20%." },
            { type: "mcq", difficulty: "medium", q: "Multiplying a price by 0.9 gives:", options: ["a 10% decrease", "a 9% decrease", "a 10% increase", "a 90% decrease"], answer: 0, explanation: "0.9 = 90% of the original, so 10% less." },
            { type: "numeric", difficulty: "hard", q: "A stock rose by 20% and then fell by 20%. If the original value was £100, what is the final value (£)?", answer: "96", explanation: "100 × 1.2 = 120; 120 × 0.8 = £96 — not back to the original." },
            { type: "short", difficulty: "hard", q: "Explain why a 20% increase followed by a 20% decrease does not return to the original value.", answer: "The decrease is applied to the higher value, so a larger amount is subtracted: 120 × 0.8 = 96, not 100.", explanation: "The percentage operations are applied to different bases." },
            { type: "numeric", difficulty: "hard", q: "A shop buys goods for £160 and sells them for £200. Find the percentage profit. (number only)", answer: "25", explanation: "Profit = £40; 40 ÷ 160 × 100 = 25%." },
            { type: "tf", difficulty: "hard", q: "A price that increases by 50% and then decreases by 50% returns to its original value.", answer: false, explanation: "50% rise on £100 gives £150; 50% fall from £150 gives £75, not £100." }
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
            { type: "tf", difficulty: "easy", q: "Leading zeros (like the zeros in 0.0045) are not significant.", answer: true, explanation: "Leading zeros only locate the decimal point; the first sig fig in 0.0045 is 4." },
            { type: "mcq", difficulty: "easy", q: "How many significant figures does 3700 have (assuming trailing zeros are not significant)?", options: ["2", "4", "3", "1"], answer: 0, explanation: "3 and 7 are the significant figures unless zeros are indicated as exact." },
            { type: "mcq", difficulty: "medium", q: "452 to 2 significant figures is:", options: ["450", "460", "400", "452"], answer: 0, explanation: "The first two sig figs are 4 and 5; the next digit 2 rounds down → 450." },
            { type: "numeric", difficulty: "medium", q: "Round 0.04736 to 2 significant figures.", answer: "0.047", explanation: "Leading zeros don't count; 4 and 7 are the first two sig figs; next digit 3 rounds down." },
            { type: "mcq", difficulty: "medium", q: "6.857 rounded to 3 significant figures is:", options: ["6.86", "6.85", "6.9", "6.857"], answer: 0, explanation: "First three sig figs: 6, 8, 5; next digit 7 rounds up → 6.86." },
            { type: "numeric", difficulty: "medium", q: "Round 0.009862 to 2 significant figures.", answer: "0.0099", explanation: "First two sig figs are 9 and 8; next digit 6 rounds up → 0.0099." },
            { type: "mcq", difficulty: "medium", q: "1234 to 1 significant figure is:", options: ["1000", "1200", "1230", "1234"], answer: 0, explanation: "Only the first digit (1) is kept; the rest become zeros." },
            { type: "numeric", difficulty: "medium", q: "Round 50,640 to 3 significant figures.", answer: "50600", explanation: "Sig figs: 5, 0, 6; next digit 4 rounds down → 50,600." },
            { type: "numeric", difficulty: "hard", q: "Round 0.001996 to 3 significant figures.", answer: "0.00200", explanation: "First three sig figs: 1, 9, 9; next digit 6 rounds up → 2.00 × 10⁻³ = 0.00200." },
            { type: "tf", difficulty: "hard", q: "Trailing zeros after a decimal point are significant (e.g. 3.60 has 3 sig figs).", answer: true, explanation: "3.60 explicitly shows the zero is meaningful, giving 3 sig figs." },
            { type: "mcq", difficulty: "hard", q: "0.050720 rounded to 3 sig figs is:", options: ["0.0507", "0.051", "0.050", "0.0508"], answer: 0, explanation: "First three sig figs: 5, 0, 7; next digit 2 rounds down → 0.0507." },
            { type: "numeric", difficulty: "hard", q: "Round 9.9965 to 3 significant figures.", answer: "10.0", explanation: "9, 9, 9 — next digit 6 rounds up repeatedly → 10.0 (3 sig figs)." }
          ] },
        { text: "Approximate to a given number of decimal places.",
          resources: [
            { type: "interactive", title: "Rounding Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/rounding-numbers.html", note: "Decimal place rounding." },
            { type: "interactive", title: "Rounding decimals", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-seventh-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "3.145 rounded to 2 decimal places is 3.15.", answer: true, explanation: "The third decimal is 5, so round up: 3.15." },
            { type: "mcq", difficulty: "easy", q: "12.348 rounded to 1 decimal place is:", options: ["12.3", "12.4", "12.0", "12.35"], answer: 0, explanation: "Second decimal is 4, which rounds down → 12.3." },
            { type: "numeric", difficulty: "easy", q: "Round 3.14159 to 2 decimal places.", answer: "3.14", explanation: "The third decimal is 1, so round down → 3.14." },
            { type: "numeric", difficulty: "medium", q: "Round 7.689 to 1 decimal place.", answer: "7.7", explanation: "The second decimal is 8, so round up → 7.7." },
            { type: "numeric", difficulty: "medium", q: "Round 0.4567 to 3 decimal places.", answer: "0.457", explanation: "Fourth decimal is 7, so round up → 0.457." },
            { type: "mcq", difficulty: "medium", q: "5.0049 rounded to 2 decimal places is:", options: ["5.00", "5.01", "5.0", "5.005"], answer: 0, explanation: "Third decimal is 4, so round down → 5.00." },
            { type: "numeric", difficulty: "medium", q: "Round 99.995 to 2 decimal places.", answer: "100.00", explanation: "Third decimal is 5, round up: 99.995 → 100.00." },
            { type: "mcq", difficulty: "medium", q: "2.7499 rounded to 1 decimal place is:", options: ["2.7", "2.8", "3.0", "2.75"], answer: 0, explanation: "Second decimal is 4, which rounds down → 2.7." },
            { type: "numeric", difficulty: "hard", q: "Round 8.0050 to 3 decimal places.", answer: "8.005", explanation: "The fourth decimal is 0, so round down → 8.005." },
            { type: "short", difficulty: "hard", q: "Explain the difference between rounding 6.745 to 2 dp and to 2 sig figs.", answer: "To 2 dp: look at the third decimal (5) → round up → 6.75. To 2 sig figs: look at the third sig fig (4) — but the sig figs here are 6 and 7, next digit is 4 → round down → 6.7.", explanation: "Decimal places count digits after the decimal; sig figs count all meaningful digits." },
            { type: "tf", difficulty: "hard", q: "0.05050 rounded to 3 decimal places is 0.051.", answer: true, explanation: "Third decimal is 0; fourth decimal is 5, which rounds up the third → 0.051." },
            { type: "mcq", difficulty: "hard", q: "Round 1.2345 to 3 decimal places:", options: ["1.235", "1.234", "1.2", "1.23"], answer: 0, explanation: "Fourth decimal is 5, round up → 1.235." }
          ] },
        { text: "Find upper and lower bounds of rounded values.",
          resources: [
            { type: "interactive", title: "Rounding Numbers", provider: "Math is Fun", url: "https://www.mathsisfun.com/rounding-numbers.html", note: "Upper and lower bounds of rounded values." },
            { type: "interactive", title: "Khan Academy: Bounds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Worked bounds examples." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "If a measurement is rounded to the nearest unit, the bounds are half a unit above and below.", answer: true, explanation: "Lower = value − 0.5; upper = value + 0.5 (for rounding to the nearest 1)." },
            { type: "mcq", difficulty: "easy", q: "A length rounded to the nearest cm is 12 cm. The upper bound is:", options: ["12.5 cm", "12.9 cm", "13 cm", "12 cm"], answer: 0, explanation: "Half a unit above: 12 + 0.5 = 12.5 cm." },
            { type: "mcq", difficulty: "medium", q: "A length is 8 cm to the nearest cm. The lower bound is:", options: ["7.5 cm", "7 cm", "8.5 cm", "8 cm"], answer: 0, explanation: "Half a unit below: 8 − 0.5 = 7.5 cm." },
            { type: "numeric", difficulty: "medium", q: "A mass is 50 g to the nearest 10 g. What is the upper bound (g)?", answer: "55", explanation: "Add half of 10: 50 + 5 = 55 g." },
            { type: "numeric", difficulty: "medium", q: "A length is 6 m to the nearest metre. What is the lower bound (m)?", answer: "5.5", explanation: "6 − 0.5 = 5.5 m." },
            { type: "mcq", difficulty: "medium", q: "A time is 20 seconds to the nearest 2 seconds. The lower bound is:", options: ["19 s", "18 s", "21 s", "19.5 s"], answer: 0, explanation: "Half of 2 is 1; lower = 20 − 1 = 19 s." },
            { type: "numeric", difficulty: "medium", q: "A weight is 300 kg to the nearest 50 kg. What is the upper bound (kg)?", answer: "325", explanation: "Add half of 50: 300 + 25 = 325 kg." },
            { type: "mcq", difficulty: "medium", q: "A speed is 80 km/h to the nearest 10 km/h. The lower bound is:", options: ["75 km/h", "70 km/h", "85 km/h", "80 km/h"], answer: 0, explanation: "Half of 10 = 5; lower = 80 − 5 = 75 km/h." },
            { type: "numeric", difficulty: "hard", q: "A distance is 450 m to the nearest 50 m. What is the lower bound (m)?", answer: "425", explanation: "Half of 50 = 25; lower = 450 − 25 = 425 m." },
            { type: "short", difficulty: "hard", q: "A plank is measured as 3.6 m to 1 decimal place. State the lower and upper bounds.", answer: "Lower bound = 3.55 m; upper bound = 3.65 m (half of 0.1 = 0.05).", explanation: "Rounded to 1 dp means accuracy to the nearest 0.1." },
            { type: "tf", difficulty: "hard", q: "A value of 7.0 (given to 1 dp) has lower bound 6.95 and upper bound 7.05.", answer: true, explanation: "Rounding to 1 dp means half of 0.1 = 0.05 either side." },
            { type: "mcq", difficulty: "hard", q: "A measurement is 0.25 kg to the nearest 0.05 kg. Upper bound is:", options: ["0.275 kg", "0.30 kg", "0.255 kg", "0.25 kg"], answer: 0, explanation: "Half of 0.05 = 0.025; upper = 0.25 + 0.025 = 0.275 kg." }
          ] },
        { text: "Express bounds using inequalities.",
          resources: [
            { type: "interactive", title: "Khan Academy: Error intervals", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Writing bounds as inequalities." },
            { type: "interactive", title: "Inequalities", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/inequality.html", note: "Inequality notation." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Error intervals use inequalities to express the range of possible values.", answer: true, explanation: "e.g. 5.5 ≤ x < 6.5 tells you x lies in that range." },
            { type: "mcq", difficulty: "easy", q: "For n rounded to the nearest whole number, the error interval is:", options: ["n − 0.5 ≤ value < n + 0.5", "n − 1 ≤ value < n + 1", "n ≤ value < n + 1", "n − 0.5 < value ≤ n + 0.5"], answer: 0, explanation: "Lower bound is inclusive; upper bound is strictly less than." },
            { type: "mcq", difficulty: "hard", q: "If x = 6 cm to the nearest cm, then:", options: ["5.5 ≤ x < 6.5", "6 ≤ x < 7", "5 < x < 7", "x = 6 exactly"], answer: 0, explanation: "The value lies within half a unit of 6." },
            { type: "tf", difficulty: "medium", q: "The upper bound of a value rounded to the nearest unit is found by adding half a unit.", answer: true, explanation: "e.g. nearest cm → add 0.5 cm." },
            { type: "mcq", difficulty: "medium", q: "A number p is rounded to the nearest 10 and gives 80. The error interval is:", options: ["75 ≤ p < 85", "70 ≤ p < 90", "79 ≤ p < 81", "75 < p < 85"], answer: 0, explanation: "Half of 10 = 5; so 75 ≤ p < 85." },
            { type: "short", difficulty: "medium", q: "t = 4.5 s to 1 decimal place. Write the error interval for t.", answer: "4.45 ≤ t < 4.55", explanation: "Half of 0.1 = 0.05; lower bound inclusive, upper bound exclusive." },
            { type: "mcq", difficulty: "medium", q: "A length L is 12.0 cm to 1 dp. Which inequality represents L?", options: ["11.95 ≤ L < 12.05", "12 ≤ L < 12.1", "11.9 ≤ L < 12.1", "11.95 < L ≤ 12.05"], answer: 0, explanation: "Rounded to 1 dp: half of 0.1 = 0.05 either side." },
            { type: "numeric", difficulty: "medium", q: "x is rounded to the nearest integer to give 9. What is the error interval's lower bound?", answer: "8.5", explanation: "9 − 0.5 = 8.5; so 8.5 ≤ x < 9.5." },
            { type: "tf", difficulty: "hard", q: "For a value truncated (cut) to 1 dp, the error interval is [value, value + 0.1).", answer: true, explanation: "Truncation removes digits without rounding up, so error is always positive." },
            { type: "mcq", difficulty: "hard", q: "m = 3.50 g to 2 dp. The error interval is:", options: ["3.495 ≤ m < 3.505", "3.50 ≤ m < 3.60", "3.49 ≤ m < 3.51", "3.50 ≤ m < 3.51"], answer: 0, explanation: "Half of 0.01 = 0.005; 3.50 − 0.005 = 3.495 ≤ m < 3.505." },
            { type: "short", difficulty: "hard", q: "A car speed s is measured as 60 km/h to the nearest 5 km/h. Write the error interval.", answer: "57.5 ≤ s < 62.5", explanation: "Half of 5 = 2.5; lower = 60 − 2.5 = 57.5, upper = 60 + 2.5 = 62.5." },
            { type: "numeric", difficulty: "hard", q: "A number is 7.4 to 1 decimal place. The upper bound is 7.45. Confirm: what is the lower bound?", answer: "7.35", explanation: "7.4 − 0.05 = 7.35; so 7.35 ≤ value < 7.45." }
          ] },
        { text: "Write numbers in scientific (standard) form.",
          resources: [
            { type: "interactive", title: "Scientific Notation", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/scientific-notation.html", note: "a × 10ⁿ form." },
            { type: "interactive", title: "Scientific notation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In standard form a × 10ⁿ, the value of a must satisfy 1 ≤ a < 10.", answer: true, explanation: "The leading digit is always a single non-zero digit." },
            { type: "numeric", difficulty: "easy", q: "Write 3 × 10² as an ordinary number.", answer: "300", explanation: "3 × 100 = 300." },
            { type: "mcq", difficulty: "medium", q: "4500 in scientific (standard) form is:", options: ["4.5 × 10³", "45 × 10²", "4.5 × 10⁴", "0.45 × 10⁴"], answer: 0, explanation: "Move the point 3 places: 4.5 × 10³." },
            { type: "mcq", difficulty: "medium", q: "1,200,000 in standard form is:", options: ["1.2 × 10⁶", "1.2 × 10⁵", "12 × 10⁵", "1.2 × 10⁷"], answer: 0, explanation: "Move decimal 6 places to the left → 1.2 × 10⁶." },
            { type: "numeric", difficulty: "medium", q: "Write 6.3 × 10⁴ as an ordinary number.", answer: "63000", explanation: "Move the decimal 4 places right: 63,000." },
            { type: "mcq", difficulty: "medium", q: "85,000,000 in standard form is:", options: ["8.5 × 10⁷", "8.5 × 10⁸", "85 × 10⁶", "8.5 × 10⁶"], answer: 0, explanation: "Move decimal 7 places: 8.5 × 10⁷." },
            { type: "numeric", difficulty: "medium", q: "Write 9.04 × 10³ as an ordinary number.", answer: "9040", explanation: "Move decimal 3 places right: 9040." },
            { type: "mcq", difficulty: "medium", q: "Which of these is NOT correctly written in standard form?", options: ["15 × 10³", "1.5 × 10⁴", "3.0 × 10²", "7.2 × 10⁵"], answer: 0, explanation: "15 is not between 1 and 10, so 15 × 10³ is not standard form." },
            { type: "numeric", difficulty: "hard", q: "Write 5 × 10⁵ as an ordinary number.", answer: "500000", explanation: "5 × 100,000 = 500,000." },
            { type: "mcq", difficulty: "hard", q: "The Sun is about 150,000,000 km from Earth. In standard form this is:", options: ["1.5 × 10⁸", "1.5 × 10⁷", "15 × 10⁷", "1.5 × 10⁹"], answer: 0, explanation: "150,000,000 = 1.5 × 10⁸." },
            { type: "tf", difficulty: "hard", q: "3.0 × 10² is the same as 300.", answer: true, explanation: "3.0 × 100 = 300." },
            { type: "short", difficulty: "hard", q: "Write the number 7,070,000 in standard form, showing your reasoning.", answer: "Move the decimal 6 places left to get 7.07; 7,070,000 = 7.07 × 10⁶.", explanation: "Count how many places the decimal moves to get a number between 1 and 10." }
          ] },
        { text: "Use standard form for small numbers.",
          resources: [
            { type: "interactive", title: "Khan Academy: Standard form", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Negative powers of 10." },
            { type: "interactive", title: "Scientific notation", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/scientific-notation.html", note: "Tiny numbers." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A negative power of 10 (like 10⁻³) represents a number less than 1.", answer: true, explanation: "10⁻³ = 0.001, which is less than 1." },
            { type: "numeric", difficulty: "easy", q: "Write 2.5 × 10³ as an ordinary number.", answer: "2500", explanation: "2.5 × 1000 = 2500." },
            { type: "mcq", difficulty: "medium", q: "0.0007 in standard form is:", options: ["7 × 10⁻⁴", "7 × 10⁴", "0.7 × 10⁻³", "7 × 10⁻³"], answer: 0, explanation: "Move the point 4 places right: 7 × 10⁻⁴." },
            { type: "numeric", difficulty: "medium", q: "Write 4.5 × 10⁻³ as a decimal.", answer: "0.0045", explanation: "Move decimal 3 places left: 0.0045." },
            { type: "mcq", difficulty: "medium", q: "0.00062 in standard form is:", options: ["6.2 × 10⁻⁴", "6.2 × 10⁻³", "6.2 × 10⁴", "0.62 × 10⁻³"], answer: 0, explanation: "Move decimal 4 places right: 6.2 × 10⁻⁴." },
            { type: "numeric", difficulty: "medium", q: "Write 3 × 10⁻² as a decimal.", answer: "0.03", explanation: "3 × 0.01 = 0.03." },
            { type: "mcq", difficulty: "medium", q: "Which is the smallest? ", options: ["3 × 10⁻⁵", "3 × 10⁻⁴", "3 × 10⁻³", "3 × 10⁻²"], answer: 0, explanation: "The most negative exponent gives the smallest value: 10⁻⁵ < 10⁻⁴ etc." },
            { type: "mcq", difficulty: "medium", q: "A bacterium is 5 × 10⁻⁶ m long. As an ordinary number this is:", options: ["0.000005 m", "0.00005 m", "0.0000005 m", "0.000050 m"], answer: 0, explanation: "Move decimal 6 places left: 0.000005." },
            { type: "numeric", difficulty: "hard", q: "Write 0.000000308 in standard form. Give the coefficient as a decimal.", answer: "3.08", explanation: "Move decimal 7 places right: 3.08 × 10⁻⁷." },
            { type: "tf", difficulty: "hard", q: "5.0 × 10⁻³ is larger than 4.9 × 10⁻².", answer: false, explanation: "4.9 × 10⁻² = 0.049 and 5.0 × 10⁻³ = 0.005; so 4.9 × 10⁻² is larger." },
            { type: "mcq", difficulty: "hard", q: "0.000000072 in standard form is:", options: ["7.2 × 10⁻⁸", "7.2 × 10⁻⁷", "7.2 × 10⁻⁹", "72 × 10⁻⁹"], answer: 0, explanation: "8 decimal places to the right: 7.2 × 10⁻⁸." },
            { type: "short", difficulty: "hard", q: "An atom has a diameter of 0.0000000001 m. Write this in standard form.", answer: "1 × 10⁻¹⁰ m (or 10⁻¹⁰ m).", explanation: "Count the decimal places: 10 places to the right → 10⁻¹⁰." }
          ] },
        { text: "Calculate with numbers in scientific notation.",
          resources: [
            { type: "interactive", title: "Scientific Notation", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/scientific-notation.html", note: "Multiplying and dividing in standard form." },
            { type: "interactive", title: "Scientific notation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "When multiplying numbers in standard form, you add the powers of 10.", answer: true, explanation: "10^a × 10^b = 10^(a+b)." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 6 × 10² as an ordinary number.", answer: "600", explanation: "6 × 100 = 600." },
            { type: "mcq", difficulty: "hard", q: "(2 × 10³) × (3 × 10²) = ?", options: ["6 × 10⁵", "6 × 10⁶", "5 × 10⁵", "6 × 10¹"], answer: 0, explanation: "Multiply numbers (2×3=6), add powers (3+2=5): 6 × 10⁵." },
            { type: "mcq", difficulty: "medium", q: "(4 × 10⁵) ÷ (2 × 10²) = ?", options: ["2 × 10³", "2 × 10⁷", "8 × 10³", "2 × 10²"], answer: 0, explanation: "Divide numbers (4÷2=2), subtract powers (5−2=3): 2 × 10³." },
            { type: "mcq", difficulty: "medium", q: "(5 × 10⁴) + (3 × 10⁴) = ?", options: ["8 × 10⁴", "8 × 10⁸", "8 × 10²", "15 × 10⁴"], answer: 0, explanation: "Same power, so add: (5+3) × 10⁴ = 8 × 10⁴." },
            { type: "mcq", difficulty: "medium", q: "(3 × 10⁻²) × (2 × 10⁴) = ?", options: ["6 × 10²", "6 × 10⁻⁸", "6 × 10⁶", "5 × 10²"], answer: 0, explanation: "3 × 2 = 6; −2 + 4 = 2: answer is 6 × 10²." },
            { type: "numeric", difficulty: "medium", q: "(8 × 10⁶) ÷ (4 × 10²). Give your answer as the coefficient × 10^n. What is the coefficient?", answer: "2", explanation: "8 ÷ 4 = 2; powers: 6 − 2 = 4; answer = 2 × 10⁴." },
            { type: "mcq", difficulty: "hard", q: "(6 × 10³) × (7 × 10⁴) = ?", options: ["4.2 × 10⁸", "4.2 × 10⁷", "42 × 10⁷", "4.2 × 10¹²"], answer: 0, explanation: "6 × 7 = 42 = 4.2 × 10¹; add to powers: 4.2 × 10^(3+4+1) = 4.2 × 10⁸." },
            { type: "numeric", difficulty: "hard", q: "(9 × 10⁵) ÷ (3 × 10⁻²). Give just the power of 10 in the answer.", answer: "7", explanation: "9÷3=3; 5 − (−2) = 7; answer = 3 × 10⁷." },
            { type: "tf", difficulty: "hard", q: "(2 × 10³)² = 4 × 10⁶.", answer: true, explanation: "2² = 4 and (10³)² = 10⁶, so the result is 4 × 10⁶." },
            { type: "mcq", difficulty: "hard", q: "The speed of light is 3 × 10⁸ m/s. In one minute (60 s), light travels:", options: ["1.8 × 10¹⁰ m", "1.8 × 10⁹ m", "6 × 10⁸ m", "3 × 10⁸ m"], answer: 0, explanation: "3 × 10⁸ × 6 × 10¹ = 18 × 10⁹ = 1.8 × 10¹⁰ m." },
            { type: "short", difficulty: "hard", q: "Evaluate (5 × 10⁻³) × (4 × 10⁷) and write the answer in standard form.", answer: "5 × 4 = 20; −3 + 7 = 4; 20 × 10⁴ = 2.0 × 10⁵.", explanation: "Multiply coefficients and add exponents, then adjust so coefficient is between 1 and 10." }
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
            { type: "tf", difficulty: "easy", q: "a^(1/2) means the square root of a.", answer: true, explanation: "A power of 1/2 is equivalent to a square root." },
            { type: "mcq", difficulty: "easy", q: "16^(1/2) = ?", options: ["4", "8", "2", "256"], answer: 0, explanation: "The square root of 16 is 4." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 27^(1/3).", answer: "3", explanation: "The cube root of 27 is 3." },
            { type: "mcq", difficulty: "hard", q: "8^(2/3) = ?", options: ["4", "2", "16", "6"], answer: 0, explanation: "Cube root of 8 is 2, then squared: 2² = 4." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 64^(1/3).", answer: "4", explanation: "The cube root of 64 is 4 (since 4³ = 64)." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 81^(1/2).", answer: "9", explanation: "The square root of 81 is 9." },
            { type: "mcq", difficulty: "medium", q: "4^(3/2) = ?", options: ["8", "6", "12", "16"], answer: 0, explanation: "Square root of 4 is 2; 2³ = 8." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 125^(1/3).", answer: "5", explanation: "5³ = 125, so the cube root is 5." },
            { type: "mcq", difficulty: "hard", q: "32^(2/5) = ?", options: ["4", "8", "2", "16"], answer: 0, explanation: "Fifth root of 32 = 2; 2² = 4." },
            { type: "numeric", difficulty: "hard", q: "Evaluate 9^(3/2).", answer: "27", explanation: "Square root of 9 = 3; 3³ = 27." },
            { type: "mcq", difficulty: "hard", q: "Which expression equals 1000^(1/3)?", options: ["10", "100", "31.6", "3.16"], answer: 0, explanation: "10³ = 1000, so 1000^(1/3) = 10." },
            { type: "short", difficulty: "hard", q: "Evaluate 16^(3/4) showing each step.", answer: "Fourth root of 16 = 2; then 2³ = 8.", explanation: "a^(m/n) = (a^(1/n))^m: take the root first, then raise to the power." }
          ] },
        { text: "Convert between index and radical form.",
          resources: [
            { type: "interactive", title: "Radicals & exponents", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "√ ↔ power forms." },
            { type: "interactive", title: "Fractional exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-fractional.html", note: "Radical form." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "x^(1/3) can be written as ∛x in radical form.", answer: true, explanation: "The power 1/3 is the cube root, written ∛x." },
            { type: "mcq", difficulty: "easy", q: "x^(1/2) in radical form is:", options: ["√x", "∛x", "x²", "1/√x"], answer: 0, explanation: "A power of one-half is the square root." },
            { type: "mcq", difficulty: "medium", q: "∛x written as an index is:", options: ["x^(1/3)", "x³", "x^(3)", "x^(1/2)"], answer: 0, explanation: "A cube root is the power one-third." },
            { type: "mcq", difficulty: "medium", q: "x^(2/3) in radical form is:", options: ["(∛x)²", "(√x)³", "∛(x²) only B correct too, but A is simplest", "x^(3/2)"], answer: 0, explanation: "(∛x)² = x^(1/3 × 2) = x^(2/3)." },
            { type: "mcq", difficulty: "medium", q: "√x⁴ written using indices is:", options: ["x²", "x^(1/4)", "x^(4)", "x^(1/2)"], answer: 0, explanation: "(x⁴)^(1/2) = x^(4/2) = x²." },
            { type: "mcq", difficulty: "medium", q: "Which index form equals ⁵√x?", options: ["x^(1/5)", "x^5", "x^(5)", "x^(0.2)"], answer: 0, explanation: "Fifth root = power 1/5; x^(1/5) = x^0.2 as well." },
            { type: "tf", difficulty: "medium", q: "a^(m/n) = (a^m)^(1/n) = (a^(1/n))^m, so both root-then-power and power-then-root give the same result.", answer: true, explanation: "The laws of indices allow either order." },
            { type: "mcq", difficulty: "hard", q: "(x^(1/2))^4 simplified is:", options: ["x²", "x^(1/8)", "x^8", "x^(1/2)"], answer: 0, explanation: "Multiply exponents: (1/2) × 4 = 2; result is x²." },
            { type: "short", difficulty: "hard", q: "Write ⁴√(x³) using index notation and simplify the exponent.", answer: "x^(3/4)", explanation: "The fourth root of x³ is x^(3/4)." },
            { type: "mcq", difficulty: "hard", q: "∛(x⁶) simplified is:", options: ["x²", "x³", "x^(1/2)", "x⁶"], answer: 0, explanation: "x^(6/3) = x²." },
            { type: "tf", difficulty: "hard", q: "x^(−1/2) = 1/√x.", answer: true, explanation: "Negative exponent means reciprocal: x^(−1/2) = 1/x^(1/2) = 1/√x." },
            { type: "numeric", difficulty: "hard", q: "Write x^(4/3) in radical form: it equals the cube root of x to the power of __ (give the power).", answer: "4", explanation: "x^(4/3) = (∛x)⁴." }
          ] },
        { text: "Solve equations involving indices.",
          resources: [
            { type: "interactive", title: "Laws of Exponents", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/exponent-laws.html", note: "Matching bases and powers." },
            { type: "interactive", title: "Exponential equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To solve x³ = 27, you take the cube root of both sides.", answer: true, explanation: "x = ∛27 = 3." },
            { type: "numeric", difficulty: "easy", q: "Solve x² = 49 (positive value). What is x?", answer: "7", explanation: "√49 = 7." },
            { type: "numeric", difficulty: "medium", q: "Solve 2^x = 8. What is x?", answer: "3", explanation: "2³ = 8, so x = 3." },
            { type: "numeric", difficulty: "medium", q: "Solve 3^x = 81. What is x?", answer: "4", explanation: "3⁴ = 81, so x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve x³ = 125. What is x?", answer: "5", explanation: "∛125 = 5." },
            { type: "mcq", difficulty: "medium", q: "Solve 5^x = 625.", options: ["x = 4", "x = 5", "x = 3", "x = 25"], answer: 0, explanation: "5⁴ = 625, so x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 10^x = 1000. What is x?", answer: "3", explanation: "10³ = 1000, so x = 3." },
            { type: "mcq", difficulty: "hard", q: "Solve 4^x = 64.", options: ["x = 3", "x = 4", "x = 2", "x = 16"], answer: 0, explanation: "4³ = 64, so x = 3." },
            { type: "numeric", difficulty: "hard", q: "Solve 2^x = 1/8. What is x?", answer: "-3", explanation: "2^(−3) = 1/8, so x = −3." },
            { type: "mcq", difficulty: "hard", q: "Solve 9^x = 27.", options: ["x = 1.5", "x = 3", "x = 2", "x = 0.5"], answer: 0, explanation: "9^(3/2) = (3²)^(3/2) = 3³ = 27, so x = 3/2 = 1.5." },
            { type: "short", difficulty: "hard", q: "Solve 2^(x+1) = 16. Show your reasoning.", answer: "2^(x+1) = 2⁴; so x + 1 = 4; x = 3.", explanation: "Express both sides as powers of the same base, then equate exponents." },
            { type: "tf", difficulty: "hard", q: "If a^x = a^y, then x = y (assuming a > 0, a ≠ 1).", answer: true, explanation: "Equal powers of the same base means the exponents are equal." }
          ] },
        { text: "Distinguish pure and mixed surds.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Pure and mixed surds." },
            { type: "interactive", title: "Simplifying surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A pure surd consists only of a radical with no integer coefficient, e.g. √7.", answer: true, explanation: "Pure surds have no whole-number coefficient in front of the radical." },
            { type: "mcq", difficulty: "easy", q: "Which is a pure surd?", options: ["√11", "3√2", "2√5", "4√3"], answer: 0, explanation: "√11 has no coefficient — it is a pure surd." },
            { type: "mcq", difficulty: "medium", q: "Which is a mixed surd?", options: ["3√2", "√5", "√7", "√2"], answer: 0, explanation: "A mixed surd has a whole number in front, like 3√2." },
            { type: "mcq", difficulty: "medium", q: "√18 as a mixed surd is:", options: ["3√2", "2√3", "9√2", "3√3"], answer: 0, explanation: "√18 = √9 × √2 = 3√2." },
            { type: "mcq", difficulty: "medium", q: "√20 simplified as a mixed surd is:", options: ["2√5", "4√5", "5√2", "2√10"], answer: 0, explanation: "√20 = √4 × √5 = 2√5." },
            { type: "mcq", difficulty: "medium", q: "Is 2√9 a surd?", options: ["No — it simplifies to 6", "Yes — it contains a radical", "Yes — it is a mixed surd", "No — √9 is not an integer"], answer: 0, explanation: "√9 = 3, so 2√9 = 6, a rational number, not a surd." },
            { type: "mcq", difficulty: "medium", q: "√45 as a mixed surd is:", options: ["3√5", "5√3", "9√5", "√9×5"], answer: 0, explanation: "√45 = √9 × √5 = 3√5." },
            { type: "tf", difficulty: "medium", q: "A surd is an irrational number expressed exactly using a root sign.", answer: true, explanation: "Surds cannot be written as exact fractions." },
            { type: "mcq", difficulty: "hard", q: "√75 simplified is:", options: ["5√3", "3√5", "15√3", "25√3"], answer: 0, explanation: "√75 = √25 × √3 = 5√3." },
            { type: "mcq", difficulty: "hard", q: "Which of these is an irrational number?", options: ["√7", "√9", "√4", "√1"], answer: 0, explanation: "√7 cannot be expressed as a fraction; the others simplify to integers." },
            { type: "short", difficulty: "hard", q: "Explain the difference between a pure and a mixed surd, giving one example of each.", answer: "A pure surd has no integer coefficient, e.g. √5. A mixed surd has an integer coefficient, e.g. 3√2.", explanation: "Mixed = integer × pure surd." },
            { type: "numeric", difficulty: "hard", q: "√98 simplifies to k√2. What is k?", answer: "7", explanation: "√98 = √49 × √2 = 7√2, so k = 7." }
          ] },
        { text: "Use conjugates of surd expressions.",
          resources: [
            { type: "interactive", title: "Conjugates", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/conjugate.html", note: "Pairs that remove the surd." },
            { type: "interactive", title: "Surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The conjugate of (a + √b) is (a − √b).", answer: true, explanation: "The conjugate changes the sign of the surd term." },
            { type: "mcq", difficulty: "easy", q: "The conjugate of (5 − √3) is:", options: ["5 + √3", "−5 + √3", "−5 − √3", "5 − √3"], answer: 0, explanation: "Change the sign in front of the radical: 5 + √3." },
            { type: "mcq", difficulty: "medium", q: "The conjugate of (3 + √2) is:", options: ["3 − √2", "−3 + √2", "√2 − 3", "3 + √2"], answer: 0, explanation: "Change the sign between the terms: 3 − √2." },
            { type: "tf", difficulty: "medium", q: "Multiplying (a + √b)(a − √b) removes the surd, giving a² − b.", answer: true, explanation: "It is a difference of two squares: a² − (√b)² = a² − b." },
            { type: "mcq", difficulty: "medium", q: "(2 + √3)(2 − √3) = ?", options: ["1", "4 − 3", "4 + 3", "√3"], answer: 0, explanation: "2² − (√3)² = 4 − 3 = 1." },
            { type: "numeric", difficulty: "medium", q: "(5 + √2)(5 − √2) = 5² − 2 = ?", answer: "23", explanation: "25 − 2 = 23." },
            { type: "mcq", difficulty: "medium", q: "(1 + √5)(1 − √5) = ?", options: ["−4", "6", "4", "1 − 5"], answer: 0, explanation: "1 − 5 = −4." },
            { type: "numeric", difficulty: "medium", q: "(3 + √7)(3 − √7) = 9 − 7 = ?", answer: "2", explanation: "3² − 7 = 9 − 7 = 2." },
            { type: "mcq", difficulty: "hard", q: "Why do we multiply by the conjugate when rationalising a denominator with (a + √b)?", options: ["To get a rational number with no surd in the denominator", "To double the denominator", "To add the surds", "To remove the integer part"], answer: 0, explanation: "Multiplying (a + √b)(a − √b) = a² − b, which is rational." },
            { type: "short", difficulty: "hard", q: "Expand (4 − √6)(4 + √6).", answer: "4² − (√6)² = 16 − 6 = 10.", explanation: "Difference of two squares: a² − b." },
            { type: "mcq", difficulty: "hard", q: "(√5 − 2)(√5 + 2) = ?", options: ["1", "5 − 4", "5 + 4", "−1"], answer: 0, explanation: "(√5)² − 2² = 5 − 4 = 1." },
            { type: "numeric", difficulty: "hard", q: "(√10 + 3)(√10 − 3) = 10 − 9 = ?", answer: "1", explanation: "(√10)² − 3² = 10 − 9 = 1." }
          ] },
        { text: "Square and square-root surds.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Squaring and simplifying surds." },
            { type: "interactive", title: "Surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "(√a)² = a for any non-negative a.", answer: true, explanation: "Squaring undoes the square root." },
            { type: "numeric", difficulty: "easy", q: "Evaluate (√5)².", answer: "5", explanation: "Squaring a square root gives the number: (√5)² = 5." },
            { type: "mcq", difficulty: "medium", q: "(2√3)² = ?", options: ["12", "6", "4√3", "36"], answer: 0, explanation: "2² × (√3)² = 4 × 3 = 12." },
            { type: "numeric", difficulty: "easy", q: "Evaluate (√11)².", answer: "11", explanation: "(√11)² = 11." },
            { type: "mcq", difficulty: "medium", q: "(3√5)² = ?", options: ["45", "15", "9√5", "25"], answer: 0, explanation: "3² × (√5)² = 9 × 5 = 45." },
            { type: "numeric", difficulty: "medium", q: "Evaluate (4√2)².", answer: "32", explanation: "16 × 2 = 32." },
            { type: "mcq", difficulty: "medium", q: "√(a²) = ?", options: ["|a| (or a for a ≥ 0)", "a²", "a^(1/2)", "a/2"], answer: 0, explanation: "The square root of a² is the absolute value of a." },
            { type: "numeric", difficulty: "medium", q: "(6√2)² = k × 2. What is k?", answer: "36", explanation: "(6√2)² = 36 × 2 = 72, so k = 36." },
            { type: "mcq", difficulty: "hard", q: "(√3 + √3)² = ?", options: ["12", "6", "3", "9"], answer: 0, explanation: "(2√3)² = 4 × 3 = 12." },
            { type: "numeric", difficulty: "hard", q: "If (k√7)² = 63, what is k?", answer: "3", explanation: "k² × 7 = 63 → k² = 9 → k = 3." },
            { type: "short", difficulty: "hard", q: "Expand and simplify (1 + √2)².", answer: "1 + 2√2 + 2 = 3 + 2√2.", explanation: "(a + b)² = a² + 2ab + b²; here a = 1, b = √2." },
            { type: "mcq", difficulty: "hard", q: "(√5 + √5)² = ?", options: ["20", "10", "25", "5"], answer: 0, explanation: "(2√5)² = 4 × 5 = 20." }
          ] },
        { text: "Simplify surds by prime factorisation.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Take out square factors." },
            { type: "interactive", title: "Khan Academy: Simplifying surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked surd simplification." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To simplify a surd you look for the largest perfect-square factor.", answer: true, explanation: "e.g. √72 = √36 × √2 = 6√2." },
            { type: "mcq", difficulty: "easy", q: "Simplify √4.", options: ["2", "4", "√2", "1"], answer: 0, explanation: "√4 = 2 — a perfect square." },
            { type: "mcq", difficulty: "medium", q: "Simplify √50.", options: ["5√2", "2√5", "25√2", "5√5"], answer: 0, explanation: "√50 = √25 × √2 = 5√2." },
            { type: "mcq", difficulty: "medium", q: "Simplify √72.", options: ["6√2", "2√6", "3√8", "8√3"], answer: 0, explanation: "√72 = √36 × √2 = 6√2." },
            { type: "mcq", difficulty: "medium", q: "Simplify √27.", options: ["3√3", "9√3", "3√9", "√27"], answer: 0, explanation: "√27 = √9 × √3 = 3√3." },
            { type: "mcq", difficulty: "medium", q: "Simplify √32.", options: ["4√2", "2√8", "8√2", "16√2"], answer: 0, explanation: "√32 = √16 × √2 = 4√2." },
            { type: "numeric", difficulty: "medium", q: "Simplify √48 = k√3. What is k?", answer: "4", explanation: "√48 = √16 × √3 = 4√3, so k = 4." },
            { type: "mcq", difficulty: "medium", q: "Simplify √75.", options: ["5√3", "3√5", "15√3", "25√3"], answer: 0, explanation: "√75 = √25 × √3 = 5√3." },
            { type: "numeric", difficulty: "hard", q: "Simplify √200 = k√2. What is k?", answer: "10", explanation: "√200 = √100 × √2 = 10√2, so k = 10." },
            { type: "mcq", difficulty: "hard", q: "Simplify √180.", options: ["6√5", "9√5", "6√10", "3√20"], answer: 0, explanation: "√180 = √36 × √5 = 6√5." },
            { type: "short", difficulty: "hard", q: "Simplify √300, showing the prime factorisation step.", answer: "300 = 4 × 75 = 4 × 25 × 3; √300 = 2 × 5 × √3 = 10√3.", explanation: "Find the largest perfect square factor: 100." },
            { type: "numeric", difficulty: "hard", q: "Simplify √162 = k√2. What is k?", answer: "9", explanation: "162 = 81 × 2; √162 = 9√2, so k = 9." }
          ] },
        { text: "Add, subtract and multiply surds.",
          resources: [
            { type: "interactive", title: "Simplifying Square Roots", provider: "Math is Fun", url: "https://www.mathsisfun.com/surds.html", note: "Adding, subtracting and multiplying surds." },
            { type: "interactive", title: "Surds", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "√a + √b cannot generally be simplified to √(a+b).", answer: true, explanation: "e.g. √4 + √9 = 2 + 3 = 5, but √(4+9) = √13 ≠ 5." },
            { type: "mcq", difficulty: "easy", q: "5√7 − 2√7 = ?", options: ["3√7", "3√14", "7√7", "3√49"], answer: 0, explanation: "Subtract like terms: (5 − 2)√7 = 3√7." },
            { type: "mcq", difficulty: "medium", q: "√2 × √3 = ?", options: ["√6", "√5", "6", "√1"], answer: 0, explanation: "√a × √b = √(ab) = √6." },
            { type: "mcq", difficulty: "medium", q: "2√3 + 4√3 = ?", options: ["6√3", "6√6", "8√3", "6√9"], answer: 0, explanation: "Like surds add: (2 + 4)√3 = 6√3." },
            { type: "mcq", difficulty: "medium", q: "√5 × √5 = ?", options: ["5", "√25", "10", "√10"], answer: 0, explanation: "√5 × √5 = (√5)² = 5." },
            { type: "numeric", difficulty: "medium", q: "3√2 × 4√2 = 12 × 2 = ?", answer: "24", explanation: "Multiply coefficients (3 × 4 = 12) and surds (√2 × √2 = 2): 12 × 2 = 24." },
            { type: "mcq", difficulty: "medium", q: "√3 + √12 simplified is:", options: ["3√3", "√15", "2√3", "4√3"], answer: 0, explanation: "√12 = 2√3; total = √3 + 2√3 = 3√3." },
            { type: "numeric", difficulty: "medium", q: "7√5 − 3√5 = k√5. What is k?", answer: "4", explanation: "(7 − 3)√5 = 4√5." },
            { type: "mcq", difficulty: "hard", q: "√2 × √8 = ?", options: ["4", "√16", "8", "2√2"], answer: 0, explanation: "√2 × √8 = √16 = 4." },
            { type: "mcq", difficulty: "hard", q: "√18 + √2 = ?", options: ["4√2", "2√18", "√20", "3√2"], answer: 0, explanation: "√18 = 3√2; 3√2 + √2 = 4√2." },
            { type: "short", difficulty: "hard", q: "Expand and simplify 2√3(√3 + √12).", answer: "2√3 × √3 = 2 × 3 = 6; 2√3 × √12 = 2√36 = 12; total = 6 + 12 = 18.", explanation: "Multiply out the bracket, simplify each surd product." },
            { type: "mcq", difficulty: "hard", q: "√50 − √8 = ?", options: ["3√2", "2√2", "√42", "4√2"], answer: 0, explanation: "√50 = 5√2; √8 = 2√2; 5√2 − 2√2 = 3√2." }
          ] },
        { text: "Rationalise the denominator.",
          resources: [
            { type: "interactive", title: "Conjugates", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/conjugate.html", note: "Removing surds from the denominator." },
            { type: "interactive", title: "Rationalize the denominator", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To rationalise a denominator of the form √n, multiply numerator and denominator by √n.", answer: true, explanation: "√n × √n = n, leaving an integer denominator." },
            { type: "mcq", difficulty: "easy", q: "To rationalise 1/√3, multiply top and bottom by:", options: ["√3", "3", "1/√3", "√3/3"], answer: 0, explanation: "Multiplying by √3/√3 removes the surd from the denominator." },
            { type: "mcq", difficulty: "hard", q: "Rationalise 1/√2.", options: ["√2/2", "2/√2", "√2", "1/2"], answer: 0, explanation: "Multiply top and bottom by √2: √2/2." },
            { type: "short", difficulty: "hard", q: "Explain how to rationalise the denominator of 3/√5.", answer: "Multiply numerator and denominator by √5: (3 × √5)/(√5 × √5) = 3√5/5.", explanation: "Multiplying by √5/√5 clears the surd from the bottom." },
            { type: "mcq", difficulty: "medium", q: "Rationalise 4/√2.", options: ["2√2", "4√2/2", "4/2", "√2/4"], answer: 0, explanation: "4/√2 × √2/√2 = 4√2/2 = 2√2." },
            { type: "mcq", difficulty: "medium", q: "Rationalise 6/√3.", options: ["2√3", "6√3/3", "√3/6", "6/√3"], answer: 0, explanation: "6/√3 × √3/√3 = 6√3/3 = 2√3." },
            { type: "mcq", difficulty: "medium", q: "5/√5 simplified is:", options: ["√5", "5", "1", "5√5"], answer: 0, explanation: "5/√5 × √5/√5 = 5√5/5 = √5." },
            { type: "mcq", difficulty: "hard", q: "Rationalise 1/(3 + √2) by multiplying by the conjugate. The denominator becomes:", options: ["7", "9 − 2", "9 + 2", "3 − √2"], answer: 0, explanation: "(3 + √2)(3 − √2) = 9 − 2 = 7." },
            { type: "short", difficulty: "hard", q: "Rationalise the denominator of 2/(1 + √3).", answer: "Multiply by (1 − √3)/(1 − √3): 2(1 − √3)/((1)² − (√3)²) = 2(1 − √3)/(1 − 3) = 2(1 − √3)/(−2) = −(1 − √3) = √3 − 1.", explanation: "Use the conjugate to remove the surd from the denominator." },
            { type: "mcq", difficulty: "hard", q: "12/√6 rationalised is:", options: ["2√6", "12√6/6", "6√2", "√6/12"], answer: 0, explanation: "12/√6 × √6/√6 = 12√6/6 = 2√6." },
            { type: "tf", difficulty: "hard", q: "After rationalising 1/(2 − √5) the denominator is −1.", answer: true, explanation: "(2 − √5)(2 + √5) = 4 − 5 = −1." },
            { type: "numeric", difficulty: "hard", q: "Rationalise 10/√5. The answer is k√5. What is k?", answer: "2", explanation: "10/√5 × √5/√5 = 10√5/5 = 2√5, so k = 2." }
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
            { type: "tf", difficulty: "easy", q: "To factorise x² + bx + c you find two numbers that multiply to c and add to b.", answer: true, explanation: "Those two numbers become the constants in the two brackets." },
            { type: "mcq", difficulty: "easy", q: "Factorise x² + 5x + 6.", options: ["(x + 2)(x + 3)", "(x + 1)(x + 6)", "(x + 3)(x + 2)", "(x + 5)(x + 1)"], answer: 0, explanation: "2 and 3 multiply to 6 and add to 5." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² + 6x + 8.", options: ["(x + 2)(x + 4)", "(x + 1)(x + 8)", "(x + 3)(x + 5)", "(x − 2)(x − 4)"], answer: 0, explanation: "2 and 4 multiply to 8 and add to 6." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 9.", options: ["(x + 3)(x − 3)", "(x − 3)²", "(x + 9)(x − 1)", "(x − 3)(x − 3)"], answer: 0, explanation: "Difference of two squares: x² − 3²." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 7x + 12.", options: ["(x − 3)(x − 4)", "(x + 3)(x − 4)", "(x − 3)(x + 4)", "(x − 12)(x − 1)"], answer: 0, explanation: "−3 and −4 multiply to 12 and add to −7." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² + 2x − 15.", options: ["(x + 5)(x − 3)", "(x − 5)(x + 3)", "(x + 15)(x − 1)", "(x − 5)(x − 3)"], answer: 0, explanation: "5 and −3 multiply to −15 and add to 2." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 4.", options: ["(x + 2)(x − 2)", "(x − 2)²", "(x − 4)(x + 1)", "(x + 4)(x − 1)"], answer: 0, explanation: "Difference of squares: x² − 2²." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − x − 6.", options: ["(x − 3)(x + 2)", "(x − 2)(x + 3)", "(x + 3)(x + 2)", "(x − 6)(x + 1)"], answer: 0, explanation: "−3 and 2 multiply to −6 and add to −1." },
            { type: "mcq", difficulty: "hard", q: "Factorise x² + 8x + 16.", options: ["(x + 4)²", "(x + 8)(x + 2)", "(x + 4)(x + 4)", "(x + 16)(x + 1)"], answer: 0, explanation: "Perfect square: (x + 4)² = x² + 8x + 16." },
            { type: "numeric", difficulty: "hard", q: "The factorisation of x² + kx − 12 is (x + 4)(x − 3). What is k?", answer: "1", explanation: "Expanding: x² + (4 − 3)x − 12 = x² + x − 12, so k = 1." },
            { type: "short", difficulty: "hard", q: "Factorise x² − 3x − 10.", answer: "(x − 5)(x + 2) — since −5 × 2 = −10 and −5 + 2 = −3.", explanation: "Find factor pairs of −10 that sum to −3." },
            { type: "mcq", difficulty: "hard", q: "Factorise x² + 4x − 21.", options: ["(x + 7)(x − 3)", "(x − 7)(x + 3)", "(x + 21)(x − 1)", "(x + 3)(x + 7)"], answer: 0, explanation: "7 and −3 multiply to −21 and add to 4." }
          ] },
        { text: "Factorise by splitting the middle term.",
          resources: [
            { type: "interactive", title: "Splitting the middle term", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "For ax² + bx + c." },
            { type: "interactive", title: "Factoring Quadratics", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring-quadratics.html", note: "Splitting the middle term." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "When factorising ax² + bx + c, the product of the two numbers used to split bx equals a × c.", answer: true, explanation: "This is the ac method: find two numbers with product ac and sum b." },
            { type: "short", difficulty: "medium", q: "To factorise x² + 5x + 6 by splitting, which two numbers multiply to 6 and add to 5?", answer: "2 and 3, giving (x + 2)(x + 3).", explanation: "Find a factor pair of the constant that sums to the middle coefficient." },
            { type: "mcq", difficulty: "hard", q: "Factorise 2x² + 7x + 3 by splitting the middle term.", options: ["(2x + 1)(x + 3)", "(2x + 3)(x + 1)", "(x + 1)(x + 3)", "(2x + 1)(x + 1)"], answer: 0, explanation: "Split 7x into 6x + x: 2x(x+3) + 1(x+3) = (2x+1)(x+3)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 3x² + 10x + 3.", options: ["(3x + 1)(x + 3)", "(3x + 3)(x + 1)", "(x + 3)(x + 1)", "(3x − 1)(x − 3)"], answer: 0, explanation: "ac = 9; split 10x into 9x + x: 3x(x+3) + 1(x+3) = (3x+1)(x+3)." },
            { type: "mcq", difficulty: "medium", q: "For 6x² + 11x + 3, the two numbers that multiply to 18 (= 6 × 3) and add to 11 are:", options: ["9 and 2", "6 and 3", "11 and 1", "9 and 3"], answer: 0, explanation: "9 × 2 = 18 and 9 + 2 = 11." },
            { type: "mcq", difficulty: "hard", q: "Factorise 2x² − 5x + 3.", options: ["(2x − 3)(x − 1)", "(2x − 1)(x − 3)", "(x − 1)(x − 3)", "(2x + 3)(x − 1)"], answer: 0, explanation: "ac = 6; find two numbers: −3 × −2 = 6, −3 + −2 = −5. Split: 2x(x−1) − 3(x−1) — wait, better: −3x − 2x; 2x² − 3x − 2x + 3 = x(2x−3) − 1(2x−3) = (x−1)(2x−3).", explanation: "Both methods confirm (2x − 3)(x − 1)." },
            { type: "mcq", difficulty: "hard", q: "Factorise 4x² + 4x − 3.", options: ["(2x + 3)(2x − 1)", "(2x − 3)(2x + 1)", "(4x − 1)(x + 3)", "(4x + 3)(x − 1)"], answer: 0, explanation: "ac = −12; numbers 6 and −2. Split: 4x² + 6x − 2x − 3 = 2x(2x+3) − 1(2x+3) = (2x−1)(2x+3)." },
            { type: "short", difficulty: "hard", q: "Use splitting to factorise 5x² + 13x + 6.", answer: "ac = 30; numbers 10 and 3. Split: 5x² + 10x + 3x + 6 = 5x(x+2) + 3(x+2) = (5x+3)(x+2).", explanation: "Find a factor pair of 30 that sums to 13: 10 and 3." },
            { type: "mcq", difficulty: "hard", q: "Factorise 3x² − 7x − 6.", options: ["(3x + 2)(x − 3)", "(3x − 2)(x + 3)", "(x + 2)(3x − 3)", "(3x − 6)(x + 1)"], answer: 0, explanation: "ac = −18; numbers −9 and 2. Split: 3x² − 9x + 2x − 6 = 3x(x−3) + 2(x−3) = (3x+2)(x−3)." },
            { type: "numeric", difficulty: "hard", q: "2x² + bx + 6 = (2x + 3)(x + 2). Expand to find b.", answer: "7", explanation: "(2x+3)(x+2) = 2x² + 4x + 3x + 6 = 2x² + 7x + 6, so b = 7." },
            { type: "tf", difficulty: "hard", q: "2x² + 5x + 2 = (2x + 1)(x + 2) is correct.", answer: true, explanation: "(2x+1)(x+2) = 2x² + 4x + x + 2 = 2x² + 5x + 2." },
            { type: "mcq", difficulty: "hard", q: "Factorise 6x² + x − 2.", options: ["(3x + 2)(2x − 1)", "(6x − 1)(x + 2)", "(2x + 1)(3x − 2)", "(6x + 2)(x − 1)"], answer: 0, explanation: "ac = −12; numbers 4 and −3. Split: 6x² + 4x − 3x − 2 = 2x(3x+2) − 1(3x+2) = (2x−1)(3x+2)." }
          ] },
        { text: "Factorise special quadratics where b = 0 or c = 0.",
          resources: [
            { type: "interactive", title: "Difference of squares", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/factoring.html", note: "b = 0 and c = 0 cases." },
            { type: "interactive", title: "Special factoring", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "x² − 25 = (x + 5)(x − 5) is a difference of two squares.", answer: true, explanation: "a² − b² = (a+b)(a−b); here a = x, b = 5." },
            { type: "mcq", difficulty: "easy", q: "Factorise x² + 5x (here c = 0).", options: ["x(x + 5)", "(x + 5)(x)", "x²(1 + 5)", "(x + 5)²"], answer: 0, explanation: "Common factor x: x(x + 5)." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 16 (here b = 0).", options: ["(x + 4)(x − 4)", "(x − 4)²", "(x + 8)(x − 2)", "(x + 16)(x − 1)"], answer: 0, explanation: "Difference of two squares: x² − 4²." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 36.", options: ["(x + 6)(x − 6)", "(x − 6)²", "(x + 4)(x − 9)", "(x + 36)(x − 1)"], answer: 0, explanation: "x² − 6² = (x+6)(x−6)." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² + 8x (c = 0).", options: ["x(x + 8)", "8x(x + 1)", "(x + 4)²", "x² + 8x"], answer: 0, explanation: "Common factor x: x(x + 8)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 4x² − 1.", options: ["(2x + 1)(2x − 1)", "(4x + 1)(x − 1)", "(2x − 1)²", "(4x − 1)²"], answer: 0, explanation: "(2x)² − 1² = (2x+1)(2x−1)." },
            { type: "mcq", difficulty: "medium", q: "Factorise 9x² − 25.", options: ["(3x + 5)(3x − 5)", "(9x − 5)²", "(3x − 5)²", "(9x + 25)(x − 1)"], answer: 0, explanation: "(3x)² − 5² = (3x+5)(3x−5)." },
            { type: "numeric", difficulty: "medium", q: "If x² − k² = (x+7)(x−7), what is k?", answer: "7", explanation: "The factorisation matches x² − 7², so k = 7." },
            { type: "mcq", difficulty: "hard", q: "Factorise x³ + 3x (c = 0 in this sense).", options: ["x(x² + 3)", "x² + 3x", "x³(1 + 3)", "(x + 3)(x² − 1)"], answer: 0, explanation: "Common factor x: x(x² + 3)." },
            { type: "mcq", difficulty: "hard", q: "Factorise 16 − x².", options: ["(4 + x)(4 − x)", "(x + 4)²", "(4 − x)²", "(x − 4)(x + 4)"], answer: 0, explanation: "16 − x² = 4² − x² = (4+x)(4−x)." },
            { type: "short", difficulty: "hard", q: "Factorise 5x² − 45 completely.", answer: "First factor out 5: 5(x² − 9); then difference of squares: 5(x+3)(x−3).", explanation: "Always look for a common factor before applying other methods." },
            { type: "tf", difficulty: "hard", q: "x² + 9 cannot be factorised over the integers (it is a sum of squares, not a difference).", answer: true, explanation: "Sum of squares does not factorise over the reals without complex numbers." }
          ] },
        { text: "Simplify algebraic fractions with algebraic denominators.",
          resources: [
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Simplifying algebraic fractions." },
            { type: "interactive", title: "Rational expressions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "You simplify algebraic fractions by cancelling common factors.", answer: true, explanation: "Divide numerator and denominator by any shared factor." },
            { type: "mcq", difficulty: "easy", q: "Simplify 6x/3.", options: ["2x", "6", "3x", "2"], answer: 0, explanation: "6x ÷ 3 = 2x." },
            { type: "mcq", difficulty: "medium", q: "Simplify x²/x.", options: ["x", "x²", "1", "x³"], answer: 0, explanation: "x² ÷ x = x." },
            { type: "mcq", difficulty: "medium", q: "(1/x) + (1/x) = ?", options: ["2/x", "1/(2x)", "2/x²", "1/x²"], answer: 0, explanation: "Same denominator: add the tops, 1 + 1 = 2 → 2/x." },
            { type: "mcq", difficulty: "medium", q: "Simplify (x² + 2x) / x.", options: ["x + 2", "x² + 2", "x + 2x", "1 + 2x"], answer: 0, explanation: "Factor x from numerator: x(x+2)/x = x + 2." },
            { type: "mcq", difficulty: "medium", q: "Simplify (2x² + 4x) / (2x).", options: ["x + 2", "2x + 4", "x + 2x", "x² + 2"], answer: 0, explanation: "Factor 2x: 2x(x+2)/(2x) = x + 2." },
            { type: "mcq", difficulty: "medium", q: "(3/x) − (1/x) = ?", options: ["2/x", "2", "2/x²", "4/x"], answer: 0, explanation: "Same denominator: 3 − 1 = 2, so 2/x." },
            { type: "mcq", difficulty: "hard", q: "Simplify (x² − 4) / (x + 2).", options: ["x − 2", "x + 2", "x² − 4", "x"], answer: 0, explanation: "Factorise: (x+2)(x−2)/(x+2) = x − 2." },
            { type: "mcq", difficulty: "hard", q: "Simplify (x² − 9) / (x + 3).", options: ["x − 3", "x + 3", "x − 9", "x² − 3"], answer: 0, explanation: "(x+3)(x−3)/(x+3) = x − 3." },
            { type: "short", difficulty: "hard", q: "Simplify (2x + 6) / (x + 3).", answer: "Factor numerator: 2(x+3)/(x+3) = 2.", explanation: "Cancel the common factor (x+3)." },
            { type: "mcq", difficulty: "hard", q: "(1/x) + (2/(x²)) = ? (over x² denominator)", options: ["(x + 2)/x²", "(x + 2)/x", "3/x²", "(x + 2)/x³"], answer: 0, explanation: "LCD is x²: x/x² + 2/x² = (x+2)/x²." },
            { type: "tf", difficulty: "hard", q: "(x² − 1)/(x − 1) simplifies to x + 1 (for x ≠ 1).", answer: true, explanation: "(x+1)(x−1)/(x−1) = x + 1." }
          ] },
        { text: "Form equations from situations.",
          resources: [
            { type: "interactive", title: "Linear Equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/linear-equations.html", note: "Turning situations into equations." },
            { type: "interactive", title: "Khan Academy: Forming equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked word-problem equations." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To form an equation from a word problem, introduce a variable for the unknown quantity.", answer: true, explanation: "Naming the unknown is the first step." },
            { type: "mcq", difficulty: "easy", q: "Three times a number equals 21. The equation is:", options: ["3x = 21", "x + 3 = 21", "x/3 = 21", "3x + 21 = 0"], answer: 0, explanation: "Three times x is 3x." },
            { type: "short", difficulty: "medium", q: "The sum of a number and 7 is 20. Form and solve an equation.", answer: "x + 7 = 20 → x = 13.", explanation: "Write the relationship as an equation, then solve." },
            { type: "numeric", difficulty: "hard", q: "A rectangle's length is 3 more than its width w, and the perimeter is 26. Form 2(w + w + 3) = 26 and solve for w.", answer: "5", explanation: "2(2w + 3) = 26 → 4w + 6 = 26 → 4w = 20 → w = 5." },
            { type: "numeric", difficulty: "medium", q: "5 times a number minus 8 equals 27. What is the number?", answer: "7", explanation: "5x − 8 = 27 → 5x = 35 → x = 7." },
            { type: "mcq", difficulty: "medium", q: "A father is 4 times as old as his son. Together their ages are 40. The son's age is:", options: ["8", "10", "32", "4"], answer: 0, explanation: "s + 4s = 40 → 5s = 40 → s = 8." },
            { type: "numeric", difficulty: "medium", q: "Two consecutive integers sum to 27. Form n + (n+1) = 27 and solve for the smaller integer n.", answer: "13", explanation: "2n + 1 = 27 → 2n = 26 → n = 13." },
            { type: "short", difficulty: "medium", q: "A train travels at v km/h. After 3 hours it has covered 210 km. Form and solve an equation for v.", answer: "3v = 210 → v = 70 km/h.", explanation: "distance = speed × time." },
            { type: "numeric", difficulty: "hard", q: "A triangle has angles x, 2x, and 3x. Angles sum to 180°. Find x.", answer: "30", explanation: "x + 2x + 3x = 6x = 180 → x = 30." },
            { type: "mcq", difficulty: "hard", q: "The price after a 20% discount is £56. The original price p satisfies:", options: ["0.8p = 56", "0.2p = 56", "1.2p = 56", "p − 20 = 56"], answer: 0, explanation: "Reduced to 80%: 0.8p = 56." },
            { type: "numeric", difficulty: "hard", q: "A square has area 81 cm². Form and solve an equation to find the side length (cm).", answer: "9", explanation: "x² = 81 → x = 9." },
            { type: "short", difficulty: "hard", q: "Tickets for adults cost £a and children cost £4. Two adults and three children pay £28 total. Form an equation and find a.", answer: "2a + 12 = 28 → 2a = 16 → a = 8.", explanation: "Write the total cost equation, substitute the child price, then solve." }
          ] },
        { text: "Solve linear equations.",
          resources: [
            { type: "interactive", title: "Solving equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/linear-equations.html", note: "Step-by-step solving." },
            { type: "interactive", title: "Linear equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Whatever you do to one side of an equation, you must do to the other side.", answer: true, explanation: "This keeps the equation balanced." },
            { type: "numeric", difficulty: "easy", q: "Solve x + 9 = 17. What is x?", answer: "8", explanation: "x = 17 − 9 = 8." },
            { type: "numeric", difficulty: "medium", q: "Solve 4x − 7 = 2x + 5. What is x?", answer: "6", explanation: "2x = 12 → x = 6." },
            { type: "numeric", difficulty: "medium", q: "Solve 3(x − 2) = 9. What is x?", answer: "5", explanation: "x − 2 = 3 → x = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve 5x + 3 = 23. What is x?", answer: "4", explanation: "5x = 20 → x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 2(3x − 1) = 16. What is x?", answer: "3", explanation: "6x − 2 = 16 → 6x = 18 → x = 3." },
            { type: "numeric", difficulty: "medium", q: "Solve 7x − 4 = 3x + 8. What is x?", answer: "3", explanation: "4x = 12 → x = 3." },
            { type: "mcq", difficulty: "medium", q: "Solve x/4 = 7.", options: ["28", "7", "1.75", "4"], answer: 0, explanation: "x = 7 × 4 = 28." },
            { type: "numeric", difficulty: "hard", q: "Solve 5(x + 1) = 3(x + 7). What is x?", answer: "8", explanation: "5x + 5 = 3x + 21 → 2x = 16 → x = 8." },
            { type: "numeric", difficulty: "hard", q: "Solve 4(x − 3) = 2(x + 1). What is x?", answer: "7", explanation: "4x − 12 = 2x + 2 → 2x = 14 → x = 7." },
            { type: "short", difficulty: "hard", q: "Solve the equation 3x + 7 = x + 15, showing each step.", answer: "3x − x = 15 − 7 → 2x = 8 → x = 4.", explanation: "Collect x terms on one side and numbers on the other." },
            { type: "tf", difficulty: "hard", q: "The equation 3(x + 2) = 3x + 7 has no solution.", answer: true, explanation: "3x + 6 = 3x + 7 gives 6 = 7, which is impossible." }
          ] },
        { text: "Change the subject of a formula.",
          resources: [
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Rearranging formulae." },
            { type: "interactive", title: "Rearranging formulas", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Making x the subject means writing x = ... with no x on the right side.", answer: true, explanation: "The subject appears alone on one side." },
            { type: "mcq", difficulty: "easy", q: "Make y the subject of x = y − 5.", options: ["y = x + 5", "y = x − 5", "y = 5 − x", "y = 5x"], answer: 0, explanation: "Add 5 to both sides: y = x + 5." },
            { type: "mcq", difficulty: "medium", q: "Make x the subject of y = x + 3.", options: ["x = y − 3", "x = y + 3", "x = 3 − y", "x = 3y"], answer: 0, explanation: "Subtract 3 from both sides: x = y − 3." },
            { type: "mcq", difficulty: "hard", q: "Make r the subject of A = πr².", options: ["r = √(A/π)", "r = A/π", "r = A²/π", "r = π/A"], answer: 0, explanation: "Divide by π then square-root: r = √(A/π)." },
            { type: "mcq", difficulty: "medium", q: "Make t the subject of v = u + at.", options: ["t = (v − u)/a", "t = (v + u)/a", "t = v − u − a", "t = a/(v − u)"], answer: 0, explanation: "Subtract u: v − u = at; divide by a." },
            { type: "mcq", difficulty: "medium", q: "Make h the subject of A = bh/2.", options: ["h = 2A/b", "h = A/(2b)", "h = Ab/2", "h = 2A + b"], answer: 0, explanation: "Multiply both sides by 2: 2A = bh; divide by b." },
            { type: "short", difficulty: "medium", q: "Rearrange P = 2(l + w) to make w the subject.", answer: "P/2 = l + w → w = P/2 − l.", explanation: "Divide by 2, then subtract l." },
            { type: "mcq", difficulty: "hard", q: "Make x the subject of y = 3x − 7.", options: ["x = (y + 7)/3", "x = (y − 7)/3", "x = 3y + 7", "x = 3/(y + 7)"], answer: 0, explanation: "Add 7: y + 7 = 3x; divide by 3." },
            { type: "mcq", difficulty: "hard", q: "Make u the subject of v² = u² + 2as.", options: ["u = √(v² − 2as)", "u = v − 2as", "u = √(v² + 2as)", "u = (v − 2as)²"], answer: 0, explanation: "u² = v² − 2as; u = √(v² − 2as)." },
            { type: "short", difficulty: "hard", q: "Make n the subject of S = n(a + l)/2.", answer: "2S = n(a + l) → n = 2S/(a + l).", explanation: "Multiply by 2, then divide by (a + l)." },
            { type: "mcq", difficulty: "hard", q: "Make T the subject of L = gT²/(4π²).", options: ["T = 2π√(L/g)", "T = √(4π²L/g)", "T = L/(g + 4π²)", "T = 4π²L/g"], answer: 0, explanation: "T² = 4π²L/g → T = √(4π²L/g) = 2π√(L/g)." },
            { type: "tf", difficulty: "hard", q: "To make x the subject of xy + z = w, you subtract z first then divide by y: x = (w − z)/y.", answer: true, explanation: "xy = w − z → x = (w − z)/y." }
          ] },
        { text: "Transpose formulae and model multi-step problems.",
          resources: [
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Rearranging multi-term formulae." },
            { type: "interactive", title: "Algebraic modelling", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Transposition means rearranging a formula so a different variable is the subject.", answer: true, explanation: "The same algebraic steps apply — add, subtract, multiply, divide, square-root." },
            { type: "mcq", difficulty: "easy", q: "The formula C = 3 + 2d gives cost for a taxi. If d = 4, then C =", options: ["11", "8", "7", "14"], answer: 0, explanation: "C = 3 + 2 × 4 = 11." },
            { type: "mcq", difficulty: "hard", q: "Rearrange v = u + at to make a the subject.", options: ["a = (v − u)/t", "a = v − u − t", "a = v/u + t", "a = (v + u)/t"], answer: 0, explanation: "Subtract u, then divide by t." },
            { type: "short", difficulty: "medium", q: "A taxi charges £3 plus £2 per km. Write a formula for the cost C of a journey of d km, and find the cost of 5 km.", answer: "C = 3 + 2d; for d = 5, C = 3 + 10 = £13.", explanation: "Fixed charge plus a rate times distance." },
            { type: "mcq", difficulty: "medium", q: "The formula for speed is s = d/t. Make t the subject.", options: ["t = d/s", "t = ds", "t = s/d", "t = d − s"], answer: 0, explanation: "Multiply both sides by t: st = d → t = d/s." },
            { type: "numeric", difficulty: "medium", q: "Using the formula P = F/A, find F when P = 10 and A = 4.", answer: "40", explanation: "F = P × A = 10 × 4 = 40." },
            { type: "short", difficulty: "medium", q: "A mobile plan costs £c = 5 + 1.5m (m = months). Rearrange to find m in terms of c.", answer: "c − 5 = 1.5m → m = (c − 5)/1.5.", explanation: "Subtract 5, then divide by 1.5." },
            { type: "mcq", difficulty: "hard", q: "Rearrange s = ut + ½at² to make u the subject.", options: ["u = (s − ½at²)/t", "u = s − at²", "u = st − ½at²", "u = (s + ½at²)/t"], answer: 0, explanation: "s − ½at² = ut → u = (s − ½at²)/t." },
            { type: "numeric", difficulty: "hard", q: "A model: profit P = 5n − 40, where n is units sold. Find n when P = 60.", answer: "20", explanation: "5n = 60 + 40 = 100 → n = 20." },
            { type: "short", difficulty: "hard", q: "The volume of a cylinder is V = πr²h. Rearrange for h.", answer: "h = V / (πr²).", explanation: "Divide both sides by πr²." },
            { type: "mcq", difficulty: "hard", q: "A car hire costs £C = 25 + 0.2d, where d is km. How many km if the bill is £65?", options: ["200", "40", "65", "325"], answer: 0, explanation: "0.2d = 40 → d = 200 km." },
            { type: "tf", difficulty: "hard", q: "Transposing a formula does not change the relationships it describes.", answer: true, explanation: "You are only re-expressing the same relationship with a different variable isolated." }
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
            { type: "tf", difficulty: "easy", q: "When solving equations with variables on both sides, move all x-terms to one side first.", answer: true, explanation: "Collect x-terms on one side and constants on the other." },
            { type: "numeric", difficulty: "easy", q: "Solve 3x = x + 8. What is x?", answer: "4", explanation: "2x = 8 → x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 5x − 3 = 2x + 9. What is x?", answer: "4", explanation: "3x = 12 → x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 7x + 2 = 3x + 18. What is x?", answer: "4", explanation: "4x = 16 → x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 6x − 5 = 4x + 3. What is x?", answer: "4", explanation: "2x = 8 → x = 4." },
            { type: "numeric", difficulty: "medium", q: "Solve 9x + 1 = 5x + 21. What is x?", answer: "5", explanation: "4x = 20 → x = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve 8x − 7 = 2x + 5. What is x?", answer: "2", explanation: "6x = 12 → x = 2." },
            { type: "mcq", difficulty: "medium", q: "Solve 10x − 3 = 7x + 9.", options: ["x = 4", "x = 3", "x = 6", "x = 2"], answer: 0, explanation: "3x = 12 → x = 4." },
            { type: "numeric", difficulty: "hard", q: "Solve 4(x + 2) = 2(x + 8). What is x?", answer: "4", explanation: "4x + 8 = 2x + 16 → 2x = 8 → x = 4." },
            { type: "numeric", difficulty: "hard", q: "Solve 3(2x − 1) = 5(x + 2). What is x?", answer: "13", explanation: "6x − 3 = 5x + 10 → x = 13." },
            { type: "short", difficulty: "hard", q: "Solve 2(x − 3) + 5 = 3(x − 1). Show all steps.", answer: "2x − 6 + 5 = 3x − 3 → 2x − 1 = 3x − 3 → 2 = x. So x = 2.", explanation: "Expand brackets, collect terms, solve." },
            { type: "tf", difficulty: "hard", q: "5x − 2 = 5x + 3 has no solution.", answer: true, explanation: "Subtracting 5x gives −2 = 3, which is impossible." }
          ] },
        { text: "Interpret slope as a rate of change.",
          resources: [
            { type: "interactive", title: "Slope (gradient)", provider: "Math is Fun", url: "https://www.mathsisfun.com/gradient.html", note: "Rate of change of a line." },
            { type: "interactive", title: "Slope", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A steeper line has a larger gradient.", answer: true, explanation: "Steeper = greater rate of change." },
            { type: "mcq", difficulty: "easy", q: "The gradient of a horizontal line is:", options: ["0", "1", "undefined", "−1"], answer: 0, explanation: "Horizontal line: no rise, so gradient = 0." },
            { type: "mcq", difficulty: "medium", q: "The slope (gradient) of a line represents:", options: ["the rate of change of y with x", "the y-intercept", "the area", "the length"], answer: 0, explanation: "Slope = how much y changes per unit of x." },
            { type: "mcq", difficulty: "medium", q: "If y doubles when x increases by 1, the gradient is:", options: ["2", "1", "0.5", "0"], answer: 0, explanation: "Change in y ÷ change in x = 2 ÷ 1 = 2." },
            { type: "tf", difficulty: "medium", q: "A negative gradient means the line goes downward from left to right.", answer: true, explanation: "As x increases, y decreases when the gradient is negative." },
            { type: "mcq", difficulty: "medium", q: "Which line is steepest?", options: ["y = 5x + 1", "y = 2x − 3", "y = x + 7", "y = 0.5x"], answer: 0, explanation: "Gradient 5 is the largest." },
            { type: "numeric", difficulty: "medium", q: "A car travels 60 km in 2 hours. The slope (rate of change of distance with time) is:", answer: "30", explanation: "60 km ÷ 2 h = 30 km/h." },
            { type: "mcq", difficulty: "medium", q: "In the context of speed, the slope of a distance-time graph represents:", options: ["speed", "acceleration", "distance", "time"], answer: 0, explanation: "Speed = change in distance ÷ change in time = gradient." },
            { type: "tf", difficulty: "hard", q: "The gradient of y = −3x + 2 is negative, so the line falls from left to right.", answer: true, explanation: "Gradient −3 means y decreases as x increases." },
            { type: "mcq", difficulty: "hard", q: "A line has gradient 4 and passes through (0, 1). What is y when x = 3?", options: ["13", "12", "7", "4"], answer: 0, explanation: "y = 4(3) + 1 = 13." },
            { type: "numeric", difficulty: "hard", q: "A slope of 3 means for every 2 units of run, the rise is:", answer: "6", explanation: "Rise = gradient × run = 3 × 2 = 6." },
            { type: "short", difficulty: "hard", q: "Explain what a gradient of −2 means in the context of a real-life problem where y = cost and x = items returned.", answer: "Each item returned reduces the cost by £2 — the relationship is decreasing.", explanation: "Negative gradient means y decreases as x increases." }
          ] },
        { text: "Find slope from a table of values.",
          resources: [
            { type: "interactive", title: "Slope from a table", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Change in y over change in x." },
            { type: "interactive", title: "Gradient", provider: "Math is Fun", url: "https://www.mathsisfun.com/gradient.html", note: "Rise over run." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Slope from a table is found by dividing the change in y by the change in x.", answer: true, explanation: "Slope = (y₂ − y₁)/(x₂ − x₁)." },
            { type: "numeric", difficulty: "easy", q: "x increases by 1 and y increases by 4 each time. What is the slope?", answer: "4", explanation: "Slope = change in y ÷ change in x = 4 ÷ 1 = 4." },
            { type: "numeric", difficulty: "medium", q: "A table shows x = 1, y = 3; x = 2, y = 5; x = 3, y = 7. What is the slope?", answer: "2", explanation: "y goes up 2 for each step of 1 in x." },
            { type: "numeric", difficulty: "medium", q: "A table shows x = 0, y = 1; x = 2, y = 7. What is the slope?", answer: "3", explanation: "Change in y = 6; change in x = 2; slope = 6/2 = 3." },
            { type: "mcq", difficulty: "medium", q: "A table has (x, y): (1, 10), (2, 8), (3, 6). The slope is:", options: ["−2", "2", "−10", "0"], answer: 0, explanation: "y decreases by 2 for each unit increase in x: slope = −2." },
            { type: "numeric", difficulty: "medium", q: "x: 0, 3, 6; y: 5, 11, 17. What is the slope?", answer: "2", explanation: "Change in y per step of 3 in x: (11−5)/3 = 6/3 = 2." },
            { type: "mcq", difficulty: "medium", q: "A table shows x: 2, 4, 6; y: 5, 9, 13. The slope is:", options: ["2", "4", "0.5", "3"], answer: 0, explanation: "Δy = 4, Δx = 2; slope = 4/2 = 2." },
            { type: "numeric", difficulty: "medium", q: "x: 1, 3; y: 7, 15. What is the slope?", answer: "4", explanation: "(15 − 7)/(3 − 1) = 8/2 = 4." },
            { type: "mcq", difficulty: "hard", q: "A table has x: 2, 5; y: 3, 12. The slope is:", options: ["3", "9", "1/3", "4.5"], answer: 0, explanation: "(12 − 3)/(5 − 2) = 9/3 = 3." },
            { type: "numeric", difficulty: "hard", q: "x: −1, 2; y: 4, −2. What is the slope?", answer: "-2", explanation: "(−2 − 4)/(2 − (−1)) = −6/3 = −2." },
            { type: "short", difficulty: "hard", q: "A table shows time (s): 0, 2, 4 and distance (m): 10, 18, 26. Find the slope and say what it represents.", answer: "Slope = (18 − 10)/(2 − 0) = 4 m/s. It represents the speed.", explanation: "Slope of a distance-time table is speed." },
            { type: "tf", difficulty: "hard", q: "If a table has a constant change in y for a constant change in x, the relationship is linear.", answer: true, explanation: "Constant slope is the hallmark of a linear (straight-line) relationship." }
          ] },
        { text: "Find slope from a graph.",
          resources: [
            { type: "interactive", title: "Slope from two points", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Reading a line's gradient." },
            { type: "interactive", title: "Graphing calculator", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Plot lines and see the slope." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The slope of a line can be found from a graph using slope = rise ÷ run.", answer: true, explanation: "Pick two points on the line and calculate the vertical change over the horizontal change." },
            { type: "numeric", difficulty: "easy", q: "A line rises 10 over a run of 5. What is the slope?", answer: "2", explanation: "10 ÷ 5 = 2." },
            { type: "mcq", difficulty: "medium", q: "A line passes through (0, 0) and (2, 6). Its slope is:", options: ["3", "2", "6", "1/3"], answer: 0, explanation: "Slope = 6 ÷ 2 = 3." },
            { type: "mcq", difficulty: "medium", q: "A line passes through (1, 2) and (3, 8). Its slope is:", options: ["3", "6", "2", "1"], answer: 0, explanation: "(8 − 2)/(3 − 1) = 6/2 = 3." },
            { type: "numeric", difficulty: "medium", q: "A line passes through (0, 4) and (2, 10). What is the slope?", answer: "3", explanation: "(10 − 4)/(2 − 0) = 6/2 = 3." },
            { type: "mcq", difficulty: "medium", q: "A line passes through (−1, 3) and (2, 9). Its slope is:", options: ["2", "3", "6", "1/2"], answer: 0, explanation: "(9 − 3)/(2 − (−1)) = 6/3 = 2." },
            { type: "numeric", difficulty: "medium", q: "A line falls from (0, 8) to (4, 0). What is the slope?", answer: "-2", explanation: "(0 − 8)/(4 − 0) = −8/4 = −2." },
            { type: "mcq", difficulty: "medium", q: "Which pair of points gives a slope of 5?", options: ["(0, 0) and (1, 5)", "(0, 5) and (1, 0)", "(0, 0) and (5, 1)", "(1, 0) and (5, 1)"], answer: 0, explanation: "(5 − 0)/(1 − 0) = 5." },
            { type: "numeric", difficulty: "hard", q: "A line passes through (−2, −1) and (3, 9). What is the slope?", answer: "2", explanation: "(9 − (−1))/(3 − (−2)) = 10/5 = 2." },
            { type: "mcq", difficulty: "hard", q: "A line through (a, 0) and (0, b) has slope:", options: ["−b/a", "b/a", "a/b", "−a/b"], answer: 0, explanation: "(b − 0)/(0 − a) = −b/a." },
            { type: "short", difficulty: "hard", q: "A graph has points (2, 5) and (6, 13). Find the slope and write the equation of the line.", answer: "Slope = (13 − 5)/(6 − 2) = 8/4 = 2; y-int: 5 = 2(2) + c → c = 1; equation: y = 2x + 1.", explanation: "Use slope then substitute a point to find the intercept." },
            { type: "tf", difficulty: "hard", q: "A line with slope −3 through (0, 4) passes through the point (2, −2).", answer: true, explanation: "y = −3(2) + 4 = −6 + 4 = −2. Confirmed." }
          ] },
        { text: "Interpret slope as rise over run.",
          resources: [
            { type: "interactive", title: "Rise over run", provider: "Math is Fun", url: "https://www.mathsisfun.com/gradient.html", note: "The slope formula." },
            { type: "interactive", title: "Slope", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A horizontal line has a slope of 0.", answer: true, explanation: "There is no rise, so the slope is 0." },
            { type: "mcq", difficulty: "easy", q: "Slope = rise ÷ run. If rise = 6 and run = 3, the slope =", options: ["2", "18", "0.5", "9"], answer: 0, explanation: "6 ÷ 3 = 2." },
            { type: "numeric", difficulty: "easy", q: "If rise = 12 and run = 4, what is the slope?", answer: "3", explanation: "12 ÷ 4 = 3." },
            { type: "mcq", difficulty: "easy", q: "A vertical line has a slope that is:", options: ["undefined", "0", "1", "infinite (undefined)"], answer: 0, explanation: "The run is 0, so division is undefined." },
            { type: "numeric", difficulty: "medium", q: "A ramp rises 3 m over a horizontal distance of 12 m. What is the slope?", answer: "0.25", explanation: "3 ÷ 12 = 0.25." },
            { type: "mcq", difficulty: "medium", q: "Rise = −8, run = 2. The slope is:", options: ["−4", "4", "−16", "6"], answer: 0, explanation: "−8 ÷ 2 = −4." },
            { type: "numeric", difficulty: "medium", q: "A slope of 1/4 means for every run of 8 units, the rise is:", answer: "2", explanation: "Rise = slope × run = (1/4) × 8 = 2." },
            { type: "mcq", difficulty: "medium", q: "If a slope is 2/3, for every 6 units of run the rise is:", options: ["4", "9", "3", "6"], answer: 0, explanation: "Rise = (2/3) × 6 = 4." },
            { type: "tf", difficulty: "medium", q: "Rise and run can both be negative, leading to a positive slope (going upward, left to right).", answer: true, explanation: "Negative ÷ negative = positive gradient." },
            { type: "numeric", difficulty: "hard", q: "A slope is 0.6. To rise 9 units, how far must you run?", answer: "15", explanation: "Run = rise ÷ slope = 9 ÷ 0.6 = 15." },
            { type: "short", difficulty: "hard", q: "A road rises 8 m over a run of 100 m. Express the gradient as a percentage.", answer: "Gradient = 8/100 = 0.08 = 8%.", explanation: "As a percentage gradient = (rise/run) × 100." },
            { type: "mcq", difficulty: "hard", q: "A line rises 7 and runs −14. Its slope is:", options: ["−0.5", "0.5", "−7", "2"], answer: 0, explanation: "7 ÷ (−14) = −0.5." }
          ] },
        { text: "Graph linear equations.",
          resources: [
            { type: "interactive", title: "Equation of a line (y = mx + c)", provider: "Math is Fun", url: "https://www.mathsisfun.com/equation_of_line.html", note: "Gradient and intercept." },
            { type: "interactive", title: "Graphing calculator", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Plot lines instantly." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In y = mx + c, m is the gradient and c is the y-intercept.", answer: true, explanation: "Standard form: y = mx + c." },
            { type: "mcq", difficulty: "easy", q: "In y = 2x + 1, the y-intercept is:", options: ["1", "2", "0", "−1"], answer: 0, explanation: "The constant term is the y-intercept: 1." },
            { type: "mcq", difficulty: "easy", q: "In y = 3x − 4, the gradient is:", options: ["3", "−4", "4", "−3"], answer: 0, explanation: "The coefficient of x is the gradient: 3." },
            { type: "mcq", difficulty: "medium", q: "The y-intercept of y = −2x + 7 is:", options: ["7", "−2", "2", "−7"], answer: 0, explanation: "Set x = 0: y = 7." },
            { type: "mcq", difficulty: "medium", q: "Which line is parallel to y = 4x + 1?", options: ["y = 4x − 3", "y = 3x + 1", "y = −4x + 1", "y = x + 4"], answer: 0, explanation: "Parallel lines share the same gradient: 4." },
            { type: "numeric", difficulty: "medium", q: "Find the y-intercept of y = 0.5x − 2.5.", answer: "-2.5", explanation: "Set x = 0: y = −2.5." },
            { type: "mcq", difficulty: "medium", q: "A line crosses the y-axis at 3 and has slope 2. Its equation is:", options: ["y = 2x + 3", "y = 3x + 2", "y = 2x − 3", "y = 3 + 2"], answer: 0, explanation: "y = mx + c = 2x + 3." },
            { type: "numeric", difficulty: "medium", q: "At what x-value does y = 3x − 9 cross the x-axis?", answer: "3", explanation: "Set y = 0: 3x = 9 → x = 3." },
            { type: "mcq", difficulty: "hard", q: "A line through (0, −2) with gradient 3. What is y when x = 4?", options: ["10", "12", "6", "−2"], answer: 0, explanation: "y = 3(4) − 2 = 10." },
            { type: "short", difficulty: "hard", q: "Write the equation of the line through (0, 5) and (3, 11).", answer: "Slope = (11 − 5)/3 = 2; equation: y = 2x + 5.", explanation: "Find slope using two points, then use y = mx + c." },
            { type: "tf", difficulty: "hard", q: "The lines y = 2x + 1 and y = −(1/2)x + 3 are perpendicular.", answer: true, explanation: "Product of gradients = 2 × (−1/2) = −1, confirming perpendicularity." },
            { type: "numeric", difficulty: "hard", q: "A line has equation 2y = 6x − 4. What is the gradient?", answer: "3", explanation: "Divide by 2: y = 3x − 2; gradient = 3." }
          ] },
        { text: "Use linear models.",
          resources: [
            { type: "interactive", title: "Linear models", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Real-life linear relationships." },
            { type: "interactive", title: "Graphing calculator", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Model with lines." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A linear model has the form y = mx + c and produces a straight-line graph.", answer: true, explanation: "m is the rate of change and c is the starting value." },
            { type: "numeric", difficulty: "easy", q: "y = 4x + 2 models a cost. Find y when x = 3.", answer: "14", explanation: "4 × 3 + 2 = 14." },
            { type: "short", difficulty: "medium", q: "A phone plan costs £10 plus £2 per GB. Write y in terms of x (GB) and find the cost for 5 GB.", answer: "y = 10 + 2x; for x = 5, y = 10 + 10 = £20.", explanation: "Fixed cost plus rate × quantity." },
            { type: "numeric", difficulty: "medium", q: "A model gives temperature y = 20 − 2x where x is altitude in km. Find y when x = 6.", answer: "8", explanation: "20 − 2 × 6 = 8." },
            { type: "mcq", difficulty: "medium", q: "A plumber charges £50 callout + £40 per hour. Which model is correct?", options: ["C = 50 + 40h", "C = 40 + 50h", "C = 50h + 40", "C = 40h"], answer: 0, explanation: "Fixed call-out of £50 plus rate of £40 per hour." },
            { type: "numeric", difficulty: "medium", q: "C = 50 + 40h. Find C when h = 3.", answer: "170", explanation: "50 + 40 × 3 = 50 + 120 = 170." },
            { type: "mcq", difficulty: "medium", q: "A model: weight W = 80 − 2t (kg, weeks). What does the gradient −2 mean?", options: ["lose 2 kg per week", "gain 2 kg per week", "start at 2 kg", "weight = 0 after 2 weeks"], answer: 0, explanation: "Gradient = rate of change: −2 kg per week." },
            { type: "numeric", difficulty: "medium", q: "A model: P = 3n − 12 (profit in £, n items sold). How many items to break even?", answer: "4", explanation: "Set P = 0: 3n = 12 → n = 4." },
            { type: "mcq", difficulty: "hard", q: "A model: y = 5x + 20. After how many units x does y first exceed 50?", options: ["7", "6", "5", "10"], answer: 0, explanation: "5x + 20 > 50 → 5x > 30 → x > 6, so first at x = 7 (integer)." },
            { type: "short", difficulty: "hard", q: "A water tank contains 200 L and drains at 8 L/min. Write a model for volume V after t minutes and find when the tank is empty.", answer: "V = 200 − 8t; empty when V = 0: t = 200/8 = 25 minutes.", explanation: "Initial value minus rate × time." },
            { type: "numeric", difficulty: "hard", q: "A model: F = 1.8C + 32 converts Celsius to Fahrenheit. Find F when C = 25.", answer: "77", explanation: "1.8 × 25 + 32 = 45 + 32 = 77." },
            { type: "tf", difficulty: "hard", q: "In a linear model y = mx + c, the c-value gives the output when the input is zero.", answer: true, explanation: "Substituting x = 0 gives y = c, the y-intercept." }
          ] },
        { text: "Use function notation f(x).",
          resources: [
            { type: "interactive", title: "Function notation", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/function.html", note: "What f(x) means." },
            { type: "interactive", title: "Functions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "f(x) is read as 'f of x' and means the function f applied to input x.", answer: true, explanation: "Function notation shows which function is applied to which input." },
            { type: "numeric", difficulty: "easy", q: "If f(x) = 2x + 3, find f(4).", answer: "11", explanation: "2 × 4 + 3 = 11." },
            { type: "numeric", difficulty: "medium", q: "If f(x) = x² − 1, find f(3).", answer: "8", explanation: "3² − 1 = 9 − 1 = 8." },
            { type: "numeric", difficulty: "easy", q: "If f(x) = 5x − 2, find f(0).", answer: "-2", explanation: "5 × 0 − 2 = −2." },
            { type: "numeric", difficulty: "medium", q: "If g(x) = 3x + 4, find g(−1).", answer: "1", explanation: "3 × (−1) + 4 = −3 + 4 = 1." },
            { type: "mcq", difficulty: "medium", q: "If h(x) = x² + 2x, find h(3).", options: ["15", "9", "11", "13"], answer: 0, explanation: "9 + 6 = 15." },
            { type: "numeric", difficulty: "medium", q: "If f(x) = 4 − 2x, find f(5).", answer: "-6", explanation: "4 − 10 = −6." },
            { type: "mcq", difficulty: "medium", q: "If f(x) = 2x − 1, which input gives f(x) = 9?", options: ["5", "4", "10", "3"], answer: 0, explanation: "2x − 1 = 9 → 2x = 10 → x = 5." },
            { type: "numeric", difficulty: "hard", q: "If f(x) = x² − 3x + 2, find f(4).", answer: "6", explanation: "16 − 12 + 2 = 6." },
            { type: "mcq", difficulty: "hard", q: "If f(x) = 2x + 1 and g(x) = x − 3, find f(g(4)).", options: ["3", "9", "5", "1"], answer: 0, explanation: "g(4) = 1; f(1) = 2 + 1 = 3." },
            { type: "short", difficulty: "hard", q: "If f(x) = 3x − 5, find the value of x such that f(x) = f(2).", answer: "f(2) = 1; 3x − 5 = 1 → x = 2. The only solution is x = 2.", explanation: "A function gives one output per input, so the equation has one solution here." },
            { type: "numeric", difficulty: "hard", q: "If f(x) = x² − 4 and f(a) = 0, what is the positive value of a?", answer: "2", explanation: "a² − 4 = 0 → a² = 4 → a = 2 (positive)." }
          ] },
        { text: "Evaluate functions.",
          resources: [
            { type: "interactive", title: "Evaluating functions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Substituting inputs." },
            { type: "interactive", title: "Functions", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/function.html", note: "Inputs and outputs." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To evaluate a function, substitute the given value for x and simplify.", answer: true, explanation: "This is what 'evaluate' means — plug in and compute." },
            { type: "numeric", difficulty: "easy", q: "If g(x) = 5x, find g(6).", answer: "30", explanation: "5 × 6 = 30." },
            { type: "numeric", difficulty: "medium", q: "If f(x) = 3x − 2, find f(0).", answer: "-2", explanation: "3 × 0 − 2 = −2." },
            { type: "numeric", difficulty: "easy", q: "If h(x) = x + 9, find h(7).", answer: "16", explanation: "7 + 9 = 16." },
            { type: "mcq", difficulty: "medium", q: "If f(x) = −x + 5, find f(3).", options: ["2", "8", "−3", "3"], answer: 0, explanation: "−3 + 5 = 2." },
            { type: "numeric", difficulty: "medium", q: "If p(x) = 2x² + 1, find p(3).", answer: "19", explanation: "2 × 9 + 1 = 19." },
            { type: "mcq", difficulty: "medium", q: "If q(x) = x/2 + 3, find q(10).", options: ["8", "13", "5", "10"], answer: 0, explanation: "10/2 + 3 = 5 + 3 = 8." },
            { type: "numeric", difficulty: "medium", q: "If f(x) = 7 − 3x, find f(2).", answer: "1", explanation: "7 − 6 = 1." },
            { type: "mcq", difficulty: "hard", q: "If f(x) = x² − 5x + 6 and f(a) = 0, which values of a work?", options: ["2 and 3", "1 and 6", "−2 and −3", "2 and −3"], answer: 0, explanation: "Factorise: (x−2)(x−3) = 0 → x = 2 or 3." },
            { type: "numeric", difficulty: "hard", q: "If f(x) = 2x + 1 and f(a) = 11, find a.", answer: "5", explanation: "2a + 1 = 11 → 2a = 10 → a = 5." },
            { type: "short", difficulty: "hard", q: "If f(x) = x² and g(x) = 3x + 1, evaluate f(g(2)).", answer: "g(2) = 7; f(7) = 49.", explanation: "Evaluate the inner function first, then apply the outer function." },
            { type: "tf", difficulty: "hard", q: "If f(x) = c (constant), then f(5) = f(100) for any x.", answer: true, explanation: "A constant function returns the same value for every input." }
          ] },
        { text: "Understand linearity and the definition of a function.",
          resources: [
            { type: "interactive", title: "What is a Function?", provider: "Math is Fun", url: "https://www.mathsisfun.com/sets/function.html", note: "One output per input." },
            { type: "interactive", title: "Functions", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A function gives exactly one output for each input.", answer: true, explanation: "That one-to-one mapping of inputs to outputs is the definition." },
            { type: "mcq", difficulty: "medium", q: "Which equation is linear?", options: ["y = 2x + 1", "y = x²", "y = 1/x", "y = √x"], answer: 0, explanation: "A linear equation graphs as a straight line: y = 2x + 1." },
            { type: "mcq", difficulty: "easy", q: "Which graph is NOT a linear function?", options: ["a parabola (y = x²)", "a straight line", "y = 3x + 1", "y = −2x + 5"], answer: 0, explanation: "A parabola is curved, not linear." },
            { type: "tf", difficulty: "easy", q: "Every straight-line graph represents a linear function.", answer: true, explanation: "Linear means the highest power of x is 1, giving a straight line." },
            { type: "mcq", difficulty: "medium", q: "Which of these is a function?", options: ["y = x + 1", "a circle", "x = 2 (vertical line)", "x² + y² = 1"], answer: 0, explanation: "y = x + 1 gives exactly one y for each x." },
            { type: "mcq", difficulty: "medium", q: "In a linear function y = mx + c, the graph is:", options: ["a straight line", "a curve", "a circle", "a parabola"], answer: 0, explanation: "Linear functions have constant gradient, producing a straight line." },
            { type: "tf", difficulty: "medium", q: "The vertical line test: if a vertical line crosses the graph more than once, it is not a function.", answer: true, explanation: "A function gives only one output per input — no vertical line can cross twice." },
            { type: "mcq", difficulty: "medium", q: "Which mapping is a function?", options: ["1→5, 2→6, 3→7 (each input has one output)", "1→5, 1→6 (same input, two outputs)", "neither", "both"], answer: 0, explanation: "A function maps each input to exactly one output." },
            { type: "tf", difficulty: "hard", q: "y = 2x + 3 and y = 2x + 5 are parallel linear functions.", answer: true, explanation: "Same gradient (2) but different intercepts — parallel straight lines." },
            { type: "mcq", difficulty: "hard", q: "A linear function has gradient 0. It is:", options: ["a horizontal line (constant function)", "a vertical line", "y = x", "undefined"], answer: 0, explanation: "Gradient 0 means y does not change: y = c, a horizontal line." },
            { type: "short", difficulty: "hard", q: "Explain why y = x² is not linear, and what makes y = 2x − 3 linear.", answer: "y = x² is not linear because the highest power of x is 2, producing a curved graph. y = 2x − 3 is linear because x appears only to the power 1, giving a straight-line graph.", explanation: "Linearity requires no powers of x greater than 1." },
            { type: "numeric", difficulty: "hard", q: "If f is a linear function with f(0) = 4 and f(2) = 10, what is the gradient?", answer: "3", explanation: "Gradient = (10 − 4)/(2 − 0) = 6/2 = 3." }
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
            { type: "tf", difficulty: "easy", q: "In substitution, you replace one variable in an equation using an expression from another equation.", answer: true, explanation: "This reduces the system to one equation with one unknown." },
            { type: "numeric", difficulty: "easy", q: "Using y = 2x and x + y = 9, find x.", answer: "3", explanation: "x + 2x = 9 → 3x = 9 → x = 3." },
            { type: "short", difficulty: "medium", q: "Solve y = x + 1 and x + y = 5 by substitution.", answer: "Substitute: x + (x + 1) = 5 → 2x + 1 = 5 → x = 2, y = 3.", explanation: "Replace y with x + 1, then solve for x." },
            { type: "numeric", difficulty: "medium", q: "Using y = 3x and 2x + y = 15, find y.", answer: "9", explanation: "2x + 3x = 15 → x = 3; y = 9." },
            { type: "mcq", difficulty: "medium", q: "y = x − 2 and x + y = 8. By substitution, x = ?", options: ["5", "3", "6", "4"], answer: 0, explanation: "x + (x−2) = 8 → 2x = 10 → x = 5." },
            { type: "numeric", difficulty: "medium", q: "y = 4 and x + y = 11. Find x.", answer: "7", explanation: "x + 4 = 11 → x = 7." },
            { type: "mcq", difficulty: "medium", q: "y = 2x + 1 and y = 4x − 3. By substitution, x = ?", options: ["2", "3", "1", "4"], answer: 0, explanation: "2x + 1 = 4x − 3 → 4 = 2x → x = 2." },
            { type: "numeric", difficulty: "hard", q: "y = 5x − 4 and 2x + y = 17. Find x.", answer: "3", explanation: "2x + 5x − 4 = 17 → 7x = 21 → x = 3." },
            { type: "mcq", difficulty: "hard", q: "y = 3x + 2 and 2x − y = −4. Find x.", options: ["2", "1", "−2", "3"], answer: 0, explanation: "2x − (3x+2) = −4 → −x − 2 = −4 → x = 2." },
            { type: "short", difficulty: "hard", q: "Solve y = x + 2 and 3x + y = 14 by substitution. Find both x and y.", answer: "3x + (x+2) = 14 → 4x = 12 → x = 3; y = 5.", explanation: "Substitute y = x + 2 into 3x + y = 14 to get 4x = 12." },
            { type: "numeric", difficulty: "hard", q: "y = x + 3 and 3x + y = 15. Find y.", answer: "6", explanation: "3x + x + 3 = 15 → 4x = 12 → x = 3; y = 6." },
            { type: "tf", difficulty: "hard", q: "Substitution is easiest when one equation is already solved for a variable.", answer: true, explanation: "If y = ... is given, substituting directly is straightforward." }
          ] },
        { text: "Solve simultaneous equations by elimination.",
          resources: [
            { type: "interactive", title: "Systems by elimination", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/systems-linear-equations.html", note: "Adding or subtracting equations." },
            { type: "interactive", title: "Elimination method", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In the elimination method, you add or subtract equations to remove one variable.", answer: true, explanation: "If coefficients match, adding/subtracting cancels that variable." },
            { type: "numeric", difficulty: "easy", q: "x + y = 8 and x − y = 2. Find x.", answer: "5", explanation: "Add: 2x = 10 → x = 5." },
            { type: "short", difficulty: "medium", q: "Solve x + y = 10 and x − y = 4 by elimination.", answer: "Add the equations: 2x = 14 → x = 7, then y = 3.", explanation: "Adding removes y; subtracting would remove x." },
            { type: "numeric", difficulty: "medium", q: "2x + y = 9 and x + y = 6. Subtract the second from the first to find x.", answer: "3", explanation: "(2x+y) − (x+y) = 9 − 6 → x = 3." },
            { type: "mcq", difficulty: "medium", q: "3x + 2y = 16 and x + 2y = 8. Subtracting gives x = ?", options: ["4", "8", "2", "6"], answer: 0, explanation: "2x = 8 → x = 4." },
            { type: "numeric", difficulty: "medium", q: "4x + y = 11 and 2x + y = 7. Find x.", answer: "2", explanation: "Subtract: 2x = 4 → x = 2." },
            { type: "mcq", difficulty: "medium", q: "x + 3y = 13 and x + y = 7. Subtracting gives:", options: ["2y = 6, so y = 3", "2y = 20", "0 = 6", "x = 3"], answer: 0, explanation: "2y = 6 → y = 3." },
            { type: "numeric", difficulty: "medium", q: "5x + 2y = 20 and 3x + 2y = 12. Find x.", answer: "4", explanation: "Subtract: 2x = 8 → x = 4." },
            { type: "mcq", difficulty: "hard", q: "x + y = 6 and x + y = 10. Elimination gives:", options: ["no solution (0 = 4 is false)", "x = 8, y = 2", "x = 2, y = 8", "infinitely many solutions"], answer: 0, explanation: "Subtracting gives 0 = −4, which is impossible." },
            { type: "short", difficulty: "hard", q: "Solve 5x + y = 17 and 3x + y = 11 by elimination.", answer: "Subtract: 2x = 6 → x = 3; substitute: y = 17 − 15 = 2.", explanation: "Subtracting removes y, solving for x first." },
            { type: "numeric", difficulty: "hard", q: "6x + 5y = 31 and 2x + 5y = 15. Find x.", answer: "4", explanation: "Subtract: 4x = 16 → x = 4." },
            { type: "tf", difficulty: "hard", q: "If two equations have the same y-coefficient, subtracting eliminates y.", answer: true, explanation: "Equal coefficients of the same variable are removed by subtraction." }
          ] },
        { text: "Multiply equations by constants to eliminate a variable.",
          resources: [
            { type: "interactive", title: "Scaling equations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Matching coefficients." },
            { type: "interactive", title: "Systems of equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/systems-linear-equations.html", note: "Preparing to eliminate." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "You can multiply an entire equation by a constant without changing its solution.", answer: true, explanation: "Both sides scale equally, so the solution is unchanged." },
            { type: "mcq", difficulty: "easy", q: "Why multiply an equation by a constant before elimination?", options: ["To match the coefficient of the variable to be eliminated", "To make the numbers bigger", "To change the solution", "To remove the constants"], answer: 0, explanation: "Equal coefficients allow elimination." },
            { type: "mcq", difficulty: "hard", q: "To eliminate y from x + 2y = 7 and 3x + y = 11, you could:", options: ["multiply the 2nd equation by 2", "add them directly", "multiply the 1st by 3", "subtract y"], answer: 0, explanation: "Multiplying the 2nd by 2 gives 6x + 2y, matching the 2y to eliminate." },
            { type: "mcq", difficulty: "medium", q: "To eliminate x from 2x + 3y = 12 and 4x + y = 14, multiply the 1st equation by:", options: ["2", "4", "3", "0.5"], answer: 0, explanation: "Multiply 2x + 3y = 12 by 2 to get 4x + 6y = 24, matching 4x." },
            { type: "numeric", difficulty: "medium", q: "3x + y = 10 and x + 2y = 10. Multiply the 1st by 2 to get 6x + 2y = 20. Subtract the 2nd to find x.", answer: "2", explanation: "6x + 2y − (x + 2y) = 20 − 10 → 5x = 10 → x = 2." },
            { type: "mcq", difficulty: "hard", q: "2x + 5y = 16 and 3x + 2y = 11. To eliminate y, you could multiply the 1st by 2 and the 2nd by:", options: ["5", "2", "3", "10"], answer: 0, explanation: "Multiply 2nd by 5 to get 10y; multiply 1st by 2 to get 10y: then subtract." },
            { type: "short", difficulty: "hard", q: "Solve 3x + 2y = 13 and 2x + 3y = 12 using the scaling method.", answer: "Multiply 1st by 3: 9x + 6y = 39. Multiply 2nd by 2: 4x + 6y = 24. Subtract: 5x = 15 → x = 3; y = 2.", explanation: "Scale both equations so y-coefficients match, then subtract." },
            { type: "numeric", difficulty: "hard", q: "4x + 3y = 18 and 3x + 2y = 13. Eliminate y: multiply 1st by 2 (→8x+6y=36) and 2nd by 3 (→9x+6y=39). Subtract 1st from 2nd: find x.", answer: "3", explanation: "9x − 8x = 39 − 36 → x = 3." },
            { type: "tf", difficulty: "hard", q: "Multiplying equation 1 by 3 and equation 2 by −2 can help eliminate a variable when the coefficients of that variable are 2 and 3 respectively.", answer: true, explanation: "2×3 = 6 and 3×(−2) = −6; adding gives 0 for that variable." },
            { type: "mcq", difficulty: "hard", q: "5x + 4y = 22 and 3x + 2y = 12. Multiply the 2nd by 2 to get 6x + 4y = 24. Subtract the 1st: x = ?", options: ["2", "1", "3", "4"], answer: 0, explanation: "6x + 4y − (5x + 4y) = 24 − 22 → x = 2." },
            { type: "mcq", difficulty: "hard", q: "x + 2y = 7 and 3x + 4y = 17. To eliminate y, multiply the 1st by 2 (→ 2x + 4y = 14) then subtract from the 2nd. Find x.", options: ["3", "1", "2", "4"], answer: 0, explanation: "3x + 4y − (2x + 4y) = 17 − 14 → x = 3." },
            { type: "short", difficulty: "hard", q: "Explain why multiplying an equation by a non-zero constant does not change its solutions.", answer: "Multiplying both sides by the same non-zero constant keeps the equation balanced. The set of (x, y) pairs satisfying it is identical before and after scaling.", explanation: "Scaling is an equivalent row operation that preserves the solution set." }
          ] },
        { text: "Solve systems graphically.",
          resources: [
            { type: "interactive", title: "Graphical solutions", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Plot both lines and find the crossing point." },
            { type: "interactive", title: "Systems graphically", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The graphical solution of two simultaneous equations is where their graphs intersect.", answer: true, explanation: "The intersection point satisfies both equations." },
            { type: "mcq", difficulty: "easy", q: "The solution of a pair of simultaneous linear equations on a graph is:", options: ["the point where the lines cross", "the y-intercept", "the origin", "the steeper line"], answer: 0, explanation: "The intersection satisfies both equations." },
            { type: "tf", difficulty: "medium", q: "Two parallel lines have no simultaneous solution.", answer: true, explanation: "Parallel lines never cross, so there is no common point." },
            { type: "mcq", difficulty: "medium", q: "Lines y = 2x + 1 and y = x + 3 intersect at:", options: ["(2, 5)", "(1, 4)", "(3, 7)", "(0, 1)"], answer: 0, explanation: "2x + 1 = x + 3 → x = 2; y = 5." },
            { type: "numeric", difficulty: "medium", q: "y = x and y = 2x − 4. At the intersection, x = ?", answer: "4", explanation: "x = 2x − 4 → x = 4." },
            { type: "mcq", difficulty: "medium", q: "If two lines have the same gradient and same intercept, they have:", options: ["infinitely many solutions", "no solution", "one solution", "two solutions"], answer: 0, explanation: "They are the same line — every point on one is also on the other." },
            { type: "numeric", difficulty: "medium", q: "y = 3x − 2 and y = x + 4. Find the x-coordinate of the intersection.", answer: "3", explanation: "3x − 2 = x + 4 → 2x = 6 → x = 3." },
            { type: "mcq", difficulty: "hard", q: "y = −x + 6 and y = 2x. The intersection is at:", options: ["(2, 4)", "(3, 3)", "(6, 0)", "(1, 5)"], answer: 0, explanation: "2x = −x + 6 → 3x = 6 → x = 2; y = 4." },
            { type: "short", difficulty: "hard", q: "Plot mentally: y = x + 1 and y = −x + 5. Find the intersection and explain how you know it is the solution.", answer: "x + 1 = −x + 5 → 2x = 4 → x = 2, y = 3. It is the solution because (2, 3) lies on both lines.", explanation: "Setting equal and solving finds the common point." },
            { type: "tf", difficulty: "hard", q: "If two lines are not parallel and not the same line, they intersect at exactly one point.", answer: true, explanation: "Two distinct non-parallel lines in a plane meet at one unique point." },
            { type: "mcq", difficulty: "hard", q: "y = 3x + 2 and y = 3x − 4 are:", options: ["parallel — no solution", "intersecting — one solution", "the same — infinite solutions", "perpendicular"], answer: 0, explanation: "Same gradient (3) but different intercepts — parallel, no intersection." },
            { type: "numeric", difficulty: "hard", q: "y = 4x − 7 and y = x + 5. Find the y-coordinate of the intersection.", answer: "9", explanation: "4x − 7 = x + 5 → 3x = 12 → x = 4; y = 4(4) − 7 = 9." }
          ] },
        { text: "Solve word problems with simultaneous equations.",
          resources: [
            { type: "interactive", title: "Systems word problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Forming two equations from a problem." },
            { type: "interactive", title: "Systems of Linear Equations", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/systems-linear-equations.html", note: "Worked simultaneous-equation problems." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To solve a simultaneous equations word problem, first write two equations using the given information.", answer: true, explanation: "Translating the problem into equations is the key first step." },
            { type: "numeric", difficulty: "medium", q: "Two numbers sum to 12 and differ by 4. What is the larger number?", answer: "8", explanation: "Add the equations: 2 × larger = 16 → larger = 8." },
            { type: "short", difficulty: "hard", q: "2 apples and 1 banana cost £5; 1 apple and 1 banana cost £3. Find the cost of an apple.", answer: "Subtract the equations: (2a + b) − (a + b) = 5 − 3 → a = £2.", explanation: "Eliminating b leaves the price of an apple." },
            { type: "numeric", difficulty: "medium", q: "The sum of two numbers is 20 and one number is 3 times the other. Find the smaller number.", answer: "5", explanation: "x + 3x = 20 → x = 5." },
            { type: "mcq", difficulty: "medium", q: "A cinema sold adult tickets at £8 and child tickets at £5. 10 tickets sold for £68. How many adult tickets?", options: ["6", "4", "5", "8"], answer: 0, explanation: "a + c = 10 and 8a + 5c = 68; from 1st: c = 10 − a; 8a + 50 − 5a = 68 → 3a = 18 → a = 6." },
            { type: "numeric", difficulty: "hard", q: "3 pens and 2 pencils cost £2.80. 2 pens and 3 pencils cost £2.70. Find the cost of 1 pen in £ (give as decimal).", answer: "0.6", explanation: "Multiply 1st by 3: 9p + 6q = 8.40; multiply 2nd by 2: 4p + 6q = 5.40. Subtract: 5p = 3.00 → p = 0.60." },
            { type: "short", difficulty: "hard", q: "Sam is twice as old as Tom. In 4 years Sam will be 1.5 times Tom's age. Find their current ages.", answer: "S = 2T; S + 4 = 1.5(T + 4) → 2T + 4 = 1.5T + 6 → 0.5T = 2 → T = 4, S = 8.", explanation: "Translate both conditions into equations." },
            { type: "numeric", difficulty: "hard", q: "A boat travels 24 km upstream in 3 hours and 24 km downstream in 2 hours. Find the speed of the current in km/h.", answer: "2", explanation: "v − c = 8 and v + c = 12; subtract: 2c = 4 → c = 2." },
            { type: "mcq", difficulty: "hard", q: "Two planes leave the same airport: one at 600 km/h and one at 450 km/h in the opposite direction. After t hours they are 2100 km apart. t = ?", options: ["2", "3", "4", "1.5"], answer: 0, explanation: "600t + 450t = 2100 → 1050t = 2100 → t = 2." },
            { type: "tf", difficulty: "hard", q: "A system of two equations with two unknowns always has exactly one solution.", answer: false, explanation: "Parallel lines give no solution; identical lines give infinitely many." },
            { type: "short", difficulty: "hard", q: "A rectangle's perimeter is 26 cm. Its length is 3 cm more than its width. Find the dimensions.", answer: "Let w = width, l = w + 3. 2(w + l) = 26 → 2(2w + 3) = 26 → 4w = 20 → w = 5, l = 8.", explanation: "Use the perimeter formula and the length–width relationship." },
            { type: "numeric", difficulty: "hard", q: "A jar has nickels (5p) and dimes (10p). There are 20 coins worth 145p. How many dimes are there?", answer: "9", explanation: "n + d = 20 and 5n + 10d = 145. From 1st: n = 20 − d; 5(20−d) + 10d = 145 → 100 + 5d = 145 → d = 9." }
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
            { type: "tf", difficulty: "easy", q: "In an arithmetic sequence, the difference between consecutive terms is constant.", answer: true, explanation: "This constant is called the common difference." },
            { type: "numeric", difficulty: "easy", q: "Arithmetic sequence 3, 7, 11, 15… What is the common difference?", answer: "4", explanation: "Each term increases by 4." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 2n + 1. Find the 10th term.", answer: "21", explanation: "2 × 10 + 1 = 21." },
            { type: "mcq", difficulty: "easy", q: "The next term in 5, 9, 13, 17, … is:", options: ["21", "20", "22", "25"], answer: 0, explanation: "Common difference 4; 17 + 4 = 21." },
            { type: "numeric", difficulty: "medium", q: "Arithmetic sequence: first term 6, common difference 5. What is the 8th term?", answer: "41", explanation: "a + (n−1)d = 6 + 7 × 5 = 41." },
            { type: "mcq", difficulty: "medium", q: "The 1st term of an arithmetic sequence is 10 and the 3rd term is 16. What is the common difference?", options: ["3", "6", "2", "4"], answer: 0, explanation: "(16 − 10) ÷ 2 = 3." },
            { type: "numeric", difficulty: "medium", q: "The nth term of a sequence is 4n − 3. What is the 7th term?", answer: "25", explanation: "4 × 7 − 3 = 25." },
            { type: "mcq", difficulty: "medium", q: "Which is an arithmetic sequence?", options: ["2, 5, 8, 11", "1, 2, 4, 8", "1, 1, 2, 3", "3, 9, 27, 81"], answer: 0, explanation: "Constant difference of 3." },
            { type: "numeric", difficulty: "hard", q: "An arithmetic sequence has first term 3 and common difference −2. What is the 10th term?", answer: "-15", explanation: "3 + 9 × (−2) = 3 − 18 = −15." },
            { type: "mcq", difficulty: "hard", q: "The 5th term of an arithmetic sequence is 19 and the 9th term is 35. What is the common difference?", options: ["4", "3", "5", "2"], answer: 0, explanation: "4 steps, change = 16; d = 16/4 = 4." },
            { type: "short", difficulty: "hard", q: "How many terms in the arithmetic sequence 7, 10, 13, … are less than 50?", answer: "nth term = 3n + 4; 3n + 4 < 50 → n < 15.33, so 15 terms.", explanation: "Find n from the nth term formula and solve the inequality." },
            { type: "numeric", difficulty: "hard", q: "The sum of the 1st and last terms of a 5-term arithmetic sequence is 20. What is the sum of all 5 terms?", answer: "50", explanation: "Sum = n/2 × (first + last) = 5/2 × 20 = 50." }
          ] },
        { text: "Work with geometric sequences.",
          resources: [
            { type: "interactive", title: "Geometric Sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Constant common ratio." },
            { type: "interactive", title: "Geometric sequences", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In a geometric sequence, each term is multiplied by the same constant ratio.", answer: true, explanation: "This constant is called the common ratio." },
            { type: "numeric", difficulty: "easy", q: "Geometric sequence 2, 6, 18, 54… What is the common ratio?", answer: "3", explanation: "Each term is 3 times the previous one." },
            { type: "numeric", difficulty: "medium", q: "A geometric sequence starts at 3 with ratio 2. What is the 3rd term?", answer: "12", explanation: "3, 6, 12 — the third term is 12." },
            { type: "mcq", difficulty: "easy", q: "The next term in 1, 5, 25, 125, … is:", options: ["625", "250", "500", "150"], answer: 0, explanation: "Common ratio 5; 125 × 5 = 625." },
            { type: "numeric", difficulty: "medium", q: "Geometric sequence: first term 4, ratio 3. What is the 4th term?", answer: "108", explanation: "4 × 3³ = 4 × 27 = 108." },
            { type: "mcq", difficulty: "medium", q: "The common ratio in 100, 50, 25, 12.5, … is:", options: ["0.5", "2", "50", "−0.5"], answer: 0, explanation: "50/100 = 0.5." },
            { type: "mcq", difficulty: "medium", q: "Which is a geometric sequence?", options: ["1, 2, 4, 8, 16", "2, 4, 6, 8, 10", "5, 10, 15, 20", "3, 6, 10, 15"], answer: 0, explanation: "Constant ratio of 2." },
            { type: "numeric", difficulty: "medium", q: "The nth term of a geometric sequence is 2 × 3^(n−1). What is the 4th term?", answer: "54", explanation: "2 × 3³ = 2 × 27 = 54." },
            { type: "mcq", difficulty: "hard", q: "A geometric sequence has first term 5 and ratio 2. Which term equals 160?", options: ["6th", "5th", "7th", "4th"], answer: 0, explanation: "5 × 2^(n−1) = 160 → 2^(n−1) = 32 = 2⁵ → n−1 = 5 → n = 6." },
            { type: "numeric", difficulty: "hard", q: "A geometric sequence with first term 6 and ratio 0.5. What is the 4th term?", answer: "0.75", explanation: "6 × (0.5)³ = 6 × 0.125 = 0.75." },
            { type: "short", difficulty: "hard", q: "Describe a real-life situation that can be modelled by a geometric sequence.", answer: "Examples: compound interest (balance multiplied by 1 + r each year), bacterial growth (doubles every hour), radioactive decay (halves every half-life).", explanation: "Any repeated multiplication at a constant rate fits a geometric model." },
            { type: "tf", difficulty: "hard", q: "A geometric sequence with a ratio between 0 and 1 decreases towards zero.", answer: true, explanation: "Multiplying by a fraction less than 1 each time shrinks the terms." }
          ] },
        { text: "Find the rule (nth term) of a linear sequence.",
          resources: [
            { type: "interactive", title: "Sequences & Series", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Finding the nth-term formula." },
            { type: "interactive", title: "Khan Academy: nth term", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Worked nth-term examples." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "To find the nth term of a linear sequence, multiply n by the common difference and adjust.", answer: true, explanation: "nth term = d × n + (first term − d)." },
            { type: "numeric", difficulty: "easy", q: "Using nth term 4n − 1, find the 6th term.", answer: "23", explanation: "4 × 6 − 1 = 23." },
            { type: "mcq", difficulty: "medium", q: "The nth term of 5, 8, 11, 14… is:", options: ["3n + 2", "5n", "3n + 5", "2n + 3"], answer: 0, explanation: "Common difference 3, and 3(1) + 2 = 5: rule is 3n + 2." },
            { type: "mcq", difficulty: "medium", q: "The nth term of 4, 6, 8, 10, … is:", options: ["2n + 2", "4n", "2n + 4", "n + 3"], answer: 0, explanation: "d = 2; zero term = 4 − 2 = 2; nth term = 2n + 2." },
            { type: "numeric", difficulty: "medium", q: "Find the nth term of 1, 4, 7, 10, … and use it to find the 20th term.", answer: "58", explanation: "d = 3; zero term = −2; nth term = 3n − 2; 20th = 58." },
            { type: "mcq", difficulty: "medium", q: "The nth term of 10, 7, 4, 1, … is:", options: ["13 − 3n", "10 − 3n", "3n + 10", "3n − 13"], answer: 0, explanation: "d = −3; zero term = 13; nth term = 13 − 3n." },
            { type: "numeric", difficulty: "medium", q: "Using nth term = 5n + 1, which term equals 51?", answer: "10", explanation: "5n + 1 = 51 → n = 10." },
            { type: "mcq", difficulty: "hard", q: "A sequence has nth term 2n − 5. Which term is the first positive term?", options: ["3rd", "2nd", "4th", "1st"], answer: 0, explanation: "2(3) − 5 = 1 > 0; 2(2) − 5 = −1 < 0. First positive at n = 3." },
            { type: "numeric", difficulty: "hard", q: "Find the nth term of 3, 7, 11, 15 and use it to find which term equals 39.", answer: "10", explanation: "nth term = 4n − 1; 4n − 1 = 39 → 4n = 40 → n = 10." },
            { type: "short", difficulty: "hard", q: "The nth term of a sequence is 6n − 4. Is 100 a term in the sequence? Show why or why not.", answer: "6n − 4 = 100 → 6n = 104 → n = 17.33..., not an integer, so 100 is NOT a term.", explanation: "If n is not a whole number, the value is not in the sequence." },
            { type: "mcq", difficulty: "hard", q: "The nth term of 2, 5, 8, 11, … is 3n − 1. The 50th term is:", options: ["149", "150", "148", "151"], answer: 0, explanation: "3 × 50 − 1 = 149." },
            { type: "tf", difficulty: "hard", q: "The nth term of an arithmetic sequence is linear in n.", answer: true, explanation: "nth term = dn + c is a linear (degree 1) expression in n." }
          ] },
        { text: "Generalise a pattern with an nth-term formula.",
          resources: [
            { type: "interactive", title: "Generalising patterns", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "From pattern to formula." },
            { type: "interactive", title: "Sequences", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/sequences-series.html", note: "Rules and terms." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "The nth term formula lets you find any term without listing all the previous ones.", answer: true, explanation: "Just substitute the term number into the formula." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 3n − 1. Which term equals 20? Give n.", answer: "7", explanation: "3n − 1 = 20 → 3n = 21 → n = 7." },
            { type: "short", difficulty: "medium", q: "A pattern uses 2, 5, 8, 11 matchsticks. Find a rule for the nth term.", answer: "The common difference is 3, and 3(1) − 1 = 2, so the nth term is 3n − 1.", explanation: "Linear sequence rule: (difference)n + (zero term)." },
            { type: "mcq", difficulty: "medium", q: "A dot pattern makes 1, 4, 7, 10 dots. The nth term is:", options: ["3n − 2", "4n − 3", "3n + 1", "n + 3"], answer: 0, explanation: "d = 3; zero term = 1 − 3 = −2; nth term = 3n − 2." },
            { type: "numeric", difficulty: "medium", q: "Using nth term = 4n + 1, find the 15th term.", answer: "61", explanation: "4 × 15 + 1 = 61." },
            { type: "mcq", difficulty: "medium", q: "A tile pattern has 3, 5, 7, 9 tiles. The nth term is:", options: ["2n + 1", "3n", "2n + 3", "n + 2"], answer: 0, explanation: "d = 2; zero term = 1; nth term = 2n + 1." },
            { type: "numeric", difficulty: "medium", q: "The nth term is 5n − 2. Which term of the sequence equals 48?", answer: "10", explanation: "5n − 2 = 48 → 5n = 50 → n = 10." },
            { type: "mcq", difficulty: "hard", q: "A pattern of squares: 1st has 4 sides, 2nd has 8, 3rd has 12 (shared sides excluded). The nth term is:", options: ["4n", "n + 4", "4(n + 1)", "4n + 4"], answer: 0, explanation: "Multiples of 4: 4, 8, 12, … nth term = 4n." },
            { type: "short", difficulty: "hard", q: "Triangles are made with matches: 3, 5, 7, 9 matches for 1, 2, 3, 4 triangles. Find the nth term and predict matches for 20 triangles.", answer: "nth term = 2n + 1; for n = 20: 2(20) + 1 = 41 matches.", explanation: "Spot the linear pattern (d = 2) and find the zero term." },
            { type: "numeric", difficulty: "hard", q: "A pattern: 6, 10, 14, 18 objects. How many objects in the 25th pattern?", answer: "102", explanation: "d = 4; nth term = 4n + 2; 4(25) + 2 = 102." },
            { type: "tf", difficulty: "hard", q: "The nth term formula also works for negative integers of n.", answer: false, explanation: "The formula generates terms for positive integers n = 1, 2, 3, …; negative n has no meaning in a sequence." },
            { type: "mcq", difficulty: "hard", q: "The 100th term of the sequence 1, 3, 5, 7, … (nth term = 2n − 1) is:", options: ["199", "200", "101", "198"], answer: 0, explanation: "2(100) − 1 = 199." }
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
            { type: "tf", difficulty: "easy", q: "A scale of 1:100 means 1 cm on the map represents 100 cm in real life.", answer: true, explanation: "The map/drawing is 100 times smaller than reality." },
            { type: "mcq", difficulty: "easy", q: "A scale is 1:50. A wall 200 cm long is drawn as:", options: ["4 cm", "10 cm", "2 cm", "40 cm"], answer: 0, explanation: "200 ÷ 50 = 4 cm." },
            { type: "numeric", difficulty: "medium", q: "Scale 1:200. A line 4 cm long represents how many cm in real life?", answer: "800", explanation: "4 × 200 = 800 cm." },
            { type: "mcq", difficulty: "hard", q: "On a 1:25,000 map, 1 cm represents:", options: ["250 m", "25 m", "2.5 km", "25 km"], answer: 0, explanation: "25,000 cm = 250 m." },
            { type: "numeric", difficulty: "medium", q: "A room is 6 m long. On a 1:50 scale drawing, the length in cm is:", answer: "12", explanation: "6 m = 600 cm; 600 ÷ 50 = 12 cm." },
            { type: "mcq", difficulty: "medium", q: "On a 1:500 map, two towns are 6 cm apart. Their real distance is:", options: ["30 m", "3000 m", "300 m", "3 m"], answer: 0, explanation: "6 × 500 = 3000 cm = 30 m." },
            { type: "numeric", difficulty: "medium", q: "A garden is drawn at scale 1:100. The drawn length is 8 cm. What is the real length in metres?", answer: "8", explanation: "8 × 100 = 800 cm = 8 m." },
            { type: "mcq", difficulty: "hard", q: "A map at scale 1:50,000 shows a river 3 cm long. The real length in km is:", options: ["1.5 km", "15 km", "150 km", "0.15 km"], answer: 0, explanation: "3 × 50,000 = 150,000 cm = 1.5 km." },
            { type: "short", difficulty: "hard", q: "A building is 35 m tall. Drawn at 1:500, how tall is it on paper (cm)?", answer: "35 m = 3500 cm; 3500 ÷ 500 = 7 cm.", explanation: "Convert to the same units, then divide by the scale." },
            { type: "numeric", difficulty: "hard", q: "On a 1:20 scale drawing, an object appears 15 cm long. What is the real length in cm?", answer: "300", explanation: "15 × 20 = 300 cm." },
            { type: "tf", difficulty: "hard", q: "A scale factor greater than 1 means the drawing is larger than the real object.", answer: false, explanation: "Larger scale factor means the real object is larger relative to the drawing; 1:200 means reality is 200× bigger." },
            { type: "mcq", difficulty: "hard", q: "Two points on a 1:10,000 map are 4.5 cm apart. Their real distance is:", options: ["450 m", "45 m", "4500 m", "0.45 m"], answer: 0, explanation: "4.5 × 10,000 = 45,000 cm = 450 m." }
          ] },
        { text: "Recognise transformations.",
          resources: [
            { type: "interactive", title: "Transformations", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/transformations.html", note: "Translation, rotation, reflection, enlargement." },
            { type: "interactive", title: "Transformations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which of these is NOT a geometric transformation?", options: ["translation", "rotation", "reflection", "factorisation"], answer: 3, explanation: "Factorisation is an algebra operation, not a transformation." },
            { type: "tf", difficulty: "easy", q: "A translation slides a shape without turning it.", answer: true, explanation: "Translation moves every point the same distance and direction." },
            { type: "mcq", difficulty: "easy", q: "A rotation turns a shape about a fixed point called the:", options: ["centre of rotation", "axis of symmetry", "mirror line", "translation vector"], answer: 0, explanation: "Every rotation has a centre point and an angle." },
            { type: "mcq", difficulty: "easy", q: "A reflection creates a mirror image across a:", options: ["line of reflection", "centre of rotation", "scale factor", "vector"], answer: 0, explanation: "The mirror line is equidistant from each point and its image." },
            { type: "tf", difficulty: "medium", q: "Under a rotation, the image and object are the same size and shape (congruent).", answer: true, explanation: "Rotation is a rigid transformation — it preserves all distances." },
            { type: "mcq", difficulty: "medium", q: "A shape is translated by vector (3, −2). A point at (1, 5) moves to:", options: ["(4, 3)", "(−2, 7)", "(3, 3)", "(1, 3)"], answer: 0, explanation: "Add the vector: x + 3 = 4, y − 2 = 3." },
            { type: "mcq", difficulty: "medium", q: "Which transformation changes the orientation (flips) of a shape?", options: ["reflection", "rotation", "translation", "enlargement"], answer: 0, explanation: "Reflection produces a mirror image with opposite orientation." },
            { type: "numeric", difficulty: "medium", q: "A shape is rotated 90° clockwise about the origin. A vertex at (2, 0) moves to (0, −2). What is the y-coordinate of the image of (3, 0)?", answer: "-3", explanation: "Rotating (x, 0) 90° clockwise gives (0, −x); so (3,0) → (0, −3)." },
            { type: "tf", difficulty: "medium", q: "Two congruent shapes are related by a rigid transformation.", answer: true, explanation: "Rigid transformations preserve shape and size, producing congruent images." },
            { type: "mcq", difficulty: "hard", q: "Under a 180° rotation about the origin, the point (a, b) maps to:", options: ["(−a, −b)", "(b, a)", "(−b, a)", "(a, −b)"], answer: 0, explanation: "180° rotation negates both coordinates." },
            { type: "short", difficulty: "hard", q: "Describe fully the single transformation that maps triangle A at (1,1), (2,1), (1,2) to triangle B at (−1,−1), (−2,−1), (−1,−2).", answer: "Rotation of 180° about the origin (0, 0).", explanation: "Each coordinate is negated: (x, y) → (−x, −y)." },
            { type: "mcq", difficulty: "hard", q: "A shape reflected in the x-axis has which coordinate change?", options: ["y-coordinate negated; x unchanged", "x-coordinate negated; y unchanged", "both negated", "neither changes"], answer: 0, explanation: "Reflecting in the x-axis: (x, y) → (x, −y)." }
          ] },
        { text: "Apply rigid transformations.",
          resources: [
            { type: "interactive", title: "Rigid transformations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Congruence-preserving moves." },
            { type: "interactive", title: "Transformations", provider: "GeoGebra", url: "https://www.geogebra.org/geometry", note: "Explore interactively." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "Rigid transformations (translation, rotation, reflection) preserve size and shape.", answer: true, explanation: "Only the position/orientation changes." },
            { type: "mcq", difficulty: "medium", q: "After a rigid transformation, the image is ___ the original.", options: ["congruent to", "larger than", "smaller than", "a different shape from"], answer: 0, explanation: "Same size and shape means congruent." },
            { type: "tf", difficulty: "easy", q: "Rigid transformations preserve angle measures.", answer: true, explanation: "Size and shape are both unchanged, including all angles." },
            { type: "mcq", difficulty: "easy", q: "Which of the following is a rigid transformation?", options: ["reflection", "enlargement", "dilation", "stretching"], answer: 0, explanation: "Reflection preserves size and shape; the others change size." },
            { type: "mcq", difficulty: "medium", q: "Under a translation by (−4, 2), the point (5, 1) maps to:", options: ["(1, 3)", "(9, −1)", "(1, −1)", "(5, 3)"], answer: 0, explanation: "5 + (−4) = 1; 1 + 2 = 3." },
            { type: "tf", difficulty: "medium", q: "A 90° rotation and a 270° rotation in the opposite direction produce the same result.", answer: true, explanation: "90° clockwise equals 270° anticlockwise — the same final position." },
            { type: "mcq", difficulty: "medium", q: "A triangle is reflected in the y-axis. A vertex at (3, 4) maps to:", options: ["(−3, 4)", "(3, −4)", "(−3, −4)", "(4, 3)"], answer: 0, explanation: "Reflecting in y-axis: x-coordinate negates, y unchanged." },
            { type: "numeric", difficulty: "medium", q: "A shape has 4 vertices. After a rigid transformation the image also has how many vertices?", answer: "4", explanation: "Rigid transformations preserve the number of vertices (and all other properties)." },
            { type: "mcq", difficulty: "hard", q: "Which composition of rigid transformations produces a glide reflection?", options: ["translation then reflection", "rotation then rotation", "reflection then dilation", "translation then rotation"], answer: 0, explanation: "A glide reflection combines a translation with a reflection in the direction of the translation." },
            { type: "short", difficulty: "hard", q: "Explain why two congruent triangles can always be related by a sequence of rigid transformations.", answer: "Rigid transformations preserve shape and size. Any congruent pair can be matched by a combination of translation, rotation, and/or reflection.", explanation: "Congruence means there exists at least one rigid transformation mapping one figure onto the other." },
            { type: "tf", difficulty: "hard", q: "A rotation of 360° about any centre returns a shape to its original position.", answer: true, explanation: "A full turn maps every point back to itself." },
            { type: "mcq", difficulty: "hard", q: "A figure is first reflected in the x-axis and then in the y-axis. The combined transformation is equivalent to:", options: ["a rotation of 180° about the origin", "a translation", "a dilation", "a reflection in y = x"], answer: 0, explanation: "Reflecting in both axes negates both coordinates: (x,y)→(−x,−y), which is a 180° rotation about the origin." }
          ] },
        { text: "Work with dilations (enlargements).",
          resources: [
            { type: "interactive", title: "Resizing (dilation)", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/resizing.html", note: "Scale factor enlargements." },
            { type: "interactive", title: "Dilations", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A shape is enlarged by scale factor 3. A 4 cm side becomes how many cm?", answer: "12", explanation: "4 × 3 = 12 cm." },
            { type: "mcq", difficulty: "medium", q: "A dilation with scale factor 1/2 makes a shape:", options: ["smaller", "larger", "congruent", "rotated"], answer: 0, explanation: "A factor between 0 and 1 reduces the size." },
            { type: "tf", difficulty: "easy", q: "A dilation preserves the shape (angles) but not the size.", answer: true, explanation: "All angles are kept; lengths are scaled by the scale factor." },
            { type: "mcq", difficulty: "easy", q: "A scale factor of 1 in a dilation produces an image that is:", options: ["the same size as the original", "twice the size", "half the size", "reflected"], answer: 0, explanation: "Scale factor 1 means every length stays the same." },
            { type: "numeric", difficulty: "medium", q: "A shape has a side of 5 cm. After a dilation with scale factor 4, the new side length is (cm):", answer: "20", explanation: "5 × 4 = 20 cm." },
            { type: "mcq", difficulty: "medium", q: "A dilation with scale factor 2 centred at the origin maps (3, 4) to:", options: ["(6, 8)", "(5, 6)", "(1.5, 2)", "(3, 8)"], answer: 0, explanation: "Multiply each coordinate by 2: (6, 8)." },
            { type: "mcq", difficulty: "medium", q: "A dilation with scale factor 3 changes the perimeter of a shape by a factor of:", options: ["3", "9", "6", "1"], answer: 0, explanation: "Perimeter scales by the same factor as the lengths." },
            { type: "tf", difficulty: "medium", q: "A scale factor greater than 1 produces an enlargement.", answer: true, explanation: "The image is bigger than the original." },
            { type: "numeric", difficulty: "hard", q: "A shape with perimeter 20 cm is dilated with scale factor 1.5. What is the new perimeter (cm)?", answer: "30", explanation: "20 × 1.5 = 30 cm." },
            { type: "mcq", difficulty: "hard", q: "Under a dilation with scale factor k and centre (0, 0), the point (x, y) maps to:", options: ["(kx, ky)", "(x+k, y+k)", "(x/k, y/k)", "(kx, y)"], answer: 0, explanation: "Each coordinate is multiplied by k." },
            { type: "short", difficulty: "hard", q: "A triangle has vertices at (2, 0), (4, 0), and (2, 3). After a dilation of scale factor 2 about the origin, give the new vertices.", answer: "(4, 0), (8, 0), (4, 6).", explanation: "Multiply each coordinate by 2." },
            { type: "tf", difficulty: "hard", q: "A dilation with a negative scale factor reflects and enlarges the shape.", answer: true, explanation: "A negative scale factor inverts the figure (through the centre) as well as scaling it." }
          ] },
        { text: "Understand similarity.",
          resources: [
            { type: "interactive", title: "Similar shapes", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/similar.html", note: "Same shape, scaled size." },
            { type: "interactive", title: "Similarity", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Similar shapes have the same shape but may differ in size, with equal corresponding angles.", answer: true, explanation: "Angles match and sides are in the same ratio." },
            { type: "numeric", difficulty: "medium", q: "Two similar triangles: a side of 3 maps to 9. What is the scale factor?", answer: "3", explanation: "9 ÷ 3 = 3." },
            { type: "mcq", difficulty: "easy", q: "Two similar rectangles have sides in the ratio 2:5. The smaller side is 4 cm. The larger is:", options: ["10 cm", "8 cm", "6 cm", "20 cm"], answer: 0, explanation: "4 × (5/2) = 10 cm." },
            { type: "tf", difficulty: "easy", q: "Congruent shapes are a special case of similar shapes with scale factor 1.", answer: true, explanation: "Scale factor 1 means same size, so similar and congruent." },
            { type: "mcq", difficulty: "medium", q: "Two triangles are similar. One has angles 40°, 60°, 80°. The other has angles:", options: ["40°, 60°, 80°", "40°, 60°, 90°", "50°, 60°, 70°", "different for similar shapes"], answer: 0, explanation: "Similar triangles have identical angle sets." },
            { type: "numeric", difficulty: "medium", q: "In two similar triangles the scale factor is 4. A side of 3 in the smaller maps to what length in the larger?", answer: "12", explanation: "3 × 4 = 12." },
            { type: "mcq", difficulty: "medium", q: "Which pair of shapes is always similar?", options: ["any two circles", "any two rectangles", "any two triangles", "any two quadrilaterals"], answer: 0, explanation: "All circles have the same shape (only size differs), so any two circles are always similar." },
            { type: "numeric", difficulty: "medium", q: "Two similar shapes have a scale factor of 5. An area of 6 cm² in the smaller becomes how many cm² in the larger?", answer: "150", explanation: "Area scale factor = 5² = 25; 6 × 25 = 150 cm²." },
            { type: "mcq", difficulty: "hard", q: "Triangle A has sides 3, 4, 5 and triangle B has sides 6, 8, 10. They are:", options: ["similar with scale factor 2", "congruent", "similar with scale factor 3", "not similar"], answer: 0, explanation: "All ratios are 2:1, so they are similar with scale factor 2." },
            { type: "short", difficulty: "hard", q: "Two similar pentagons have perimeters 15 cm and 45 cm. State the scale factor and find the length corresponding to a 7 cm side in the smaller one.", answer: "Scale factor = 45/15 = 3; corresponding side = 7 × 3 = 21 cm.", explanation: "Scale factor equals the ratio of corresponding lengths, including perimeters." },
            { type: "numeric", difficulty: "hard", q: "Two similar triangles have sides 5 and 15. If a side of the larger is 12, find the corresponding side in the smaller.", answer: "4", explanation: "Scale factor = 15 ÷ 5 = 3; smaller side = 12 ÷ 3 = 4." },
            { type: "tf", difficulty: "hard", q: "If two polygons are similar, all corresponding sides are in the same ratio and all corresponding angles are equal.", answer: true, explanation: "Both conditions must hold for true similarity." }
          ] },
        { text: "Find the effect of scaling on perimeter and area.",
          resources: [
            { type: "interactive", title: "Similar Shapes", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/similar.html", note: "How area scales with length." },
            { type: "interactive", title: "Similar shapes & area", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "If a shape is enlarged by scale factor 2, its area increases by a factor of:", options: ["4", "2", "8", "1/2"], answer: 0, explanation: "Area scales by the square of the length factor: 2² = 4." },
            { type: "tf", difficulty: "medium", q: "Enlarging lengths by a factor of k multiplies the area by k².", answer: true, explanation: "Area is two-dimensional, so it scales by k²." },
            { type: "mcq", difficulty: "easy", q: "Enlarging a shape by scale factor 3 multiplies the perimeter by:", options: ["3", "9", "6", "1"], answer: 0, explanation: "Perimeter is a one-dimensional measure; it scales by the same factor k." },
            { type: "numeric", difficulty: "medium", q: "A square has side 4 cm (area 16 cm²). It is enlarged with scale factor 3. What is the new area (cm²)?", answer: "144", explanation: "New side = 12; area = 12² = 144. Also 16 × 9 = 144." },
            { type: "mcq", difficulty: "medium", q: "A rectangle has area 10 cm². After enlargement by scale factor 4, the new area is:", options: ["160 cm²", "40 cm²", "80 cm²", "16 cm²"], answer: 0, explanation: "Area factor = 4² = 16; 10 × 16 = 160 cm²." },
            { type: "numeric", difficulty: "medium", q: "A triangle has perimeter 18 cm. After enlargement by scale factor 2, its perimeter (cm) is:", answer: "36", explanation: "Perimeter × 2 = 36 cm." },
            { type: "mcq", difficulty: "medium", q: "A circle of radius 5 cm is enlarged to radius 15 cm. The ratio of the new area to the old area is:", options: ["9:1", "3:1", "6:1", "1:9"], answer: 0, explanation: "Scale factor 3; area ratio = 3² = 9." },
            { type: "tf", difficulty: "medium", q: "If a 3D solid is scaled by factor k, its volume scales by k³.", answer: true, explanation: "Volume is three-dimensional, so it scales by k³." },
            { type: "numeric", difficulty: "hard", q: "Two similar triangles have areas 25 cm² and 100 cm². What is the scale factor of their sides?", answer: "2", explanation: "Area ratio = 100/25 = 4 = k²; k = 2." },
            { type: "short", difficulty: "hard", q: "A square of side 5 cm is enlarged. The new area is 225 cm². Find the scale factor.", answer: "Original area = 25 cm²; scale factor² = 225/25 = 9; scale factor = 3.", explanation: "Divide areas then square-root to find the linear scale factor." },
            { type: "mcq", difficulty: "hard", q: "A map drawn to scale 1:500 shows a park of area 8 cm². The real area of the park is:", options: ["2,000,000 cm²", "4,000 cm²", "40,000 cm²", "200,000 cm²"], answer: 0, explanation: "Area scale factor = 500² = 250,000; 8 × 250,000 = 2,000,000 cm²." },
            { type: "tf", difficulty: "hard", q: "If scale factor k = 0.5, the new area is one quarter of the original.", answer: true, explanation: "(0.5)² = 0.25 = one quarter." }
          ] },
        { text: "Use algebra within geometry.",
          resources: [
            { type: "interactive", title: "Angles & algebra", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Forming equations from angle/length facts." },
            { type: "interactive", title: "Geometry", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/index.html", note: "Angle rules." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "Angles on a straight line sum to 180°. They are x and 2x. Find x.", answer: "60", explanation: "x + 2x = 180 → 3x = 180 → x = 60." },
            { type: "numeric", difficulty: "hard", q: "A rectangle has sides x and x + 2 and perimeter 16. Find x.", answer: "3", explanation: "2(x + x + 2) = 16 → 4x + 4 = 16 → x = 3." },
            { type: "tf", difficulty: "easy", q: "Angles in a triangle sum to 180°.", answer: true, explanation: "This is a fundamental property of triangles." },
            { type: "numeric", difficulty: "easy", q: "Two angles in a triangle are 50° and 70°. Find the third angle.", answer: "60", explanation: "180 − 50 − 70 = 60°." },
            { type: "numeric", difficulty: "medium", q: "The angles of a quadrilateral sum to 360°. Three angles are 80°, 90°, and 100°. Find the fourth.", answer: "90", explanation: "360 − 80 − 90 − 100 = 90°." },
            { type: "mcq", difficulty: "medium", q: "Two angles are vertically opposite. One is (3x − 10)° and the other is (x + 20)°. Find x.", options: ["15", "10", "20", "30"], answer: 0, explanation: "Vertical angles are equal: 3x − 10 = x + 20 → 2x = 30 → x = 15." },
            { type: "numeric", difficulty: "medium", q: "The exterior angle of a triangle is 130°. Two interior opposite angles are y and 50°. Find y.", answer: "80", explanation: "Exterior angle = sum of opposite interior angles: y + 50 = 130 → y = 80." },
            { type: "mcq", difficulty: "medium", q: "A triangle has angles x, 2x, and 3x. Which type is it?", options: ["right-angled (one angle = 90°)", "equilateral", "obtuse", "reflex"], answer: 0, explanation: "6x = 180 → x = 30; angles 30°, 60°, 90° — right-angled." },
            { type: "short", difficulty: "hard", q: "Two angles of an isosceles triangle are (2x + 10)° each. The third angle is (x + 20)°. Find all three angles.", answer: "5x + 40 = 180 → 5x = 140 → x = 28; base angles = 2(28)+10 = 66°; apex = 28+20 = 48°. Check: 66+66+48 = 180.", explanation: "Set up the angle sum equation and solve for x." },
            { type: "numeric", difficulty: "hard", q: "A regular hexagon: each interior angle is (n−2)×180/n degrees. For n = 6, find each interior angle.", answer: "120", explanation: "(6−2)×180/6 = 4×30 = 120°." },
            { type: "tf", difficulty: "hard", q: "The sum of interior angles of a polygon with n sides is (n − 2) × 180°.", answer: true, explanation: "Dividing a polygon into triangles gives (n − 2) triangles, each contributing 180°." },
            { type: "mcq", difficulty: "hard", q: "In a parallelogram, adjacent angles are:", options: ["supplementary (sum to 180°)", "equal", "complementary (sum to 90°)", "unrelated"], answer: 0, explanation: "Parallel sides produce co-interior angles that sum to 180°." }
          ] },
        { text: "State and use the Pythagorean theorem.",
          resources: [
            { type: "video", title: "Properties of a right-angle triangle (4 min)", provider: "📚 School's Library · YouTube", url: "https://www.youtube.com/watch?v=PORfKtT7rU0", note: "The right triangle — the shape the Pythagorean theorem is built on." },
            { type: "interactive", title: "Pythagorean theorem", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/pythagorean-theorem.html", note: "a² + b² = c²." },
            { type: "interactive", title: "Pythagorean theorem", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "In a right triangle, a² + b² = c², where c is the hypotenuse.", answer: true, explanation: "This is the Pythagorean theorem." },
            { type: "mcq", difficulty: "medium", q: "Which set of side lengths forms a right triangle?", options: ["3, 4, 5", "2, 3, 4", "1, 2, 3", "5, 6, 7"], answer: 0, explanation: "3² + 4² = 9 + 16 = 25 = 5²." },
            { type: "mcq", difficulty: "easy", q: "In a right triangle the side opposite the right angle is called:", options: ["hypotenuse", "adjacent", "opposite", "base"], answer: 0, explanation: "The hypotenuse is always the longest side, opposite the right angle." },
            { type: "tf", difficulty: "easy", q: "The Pythagorean theorem applies only to right-angled triangles.", answer: true, explanation: "a² + b² = c² holds only when the triangle contains a 90° angle." },
            { type: "numeric", difficulty: "medium", q: "A right triangle has legs 5 and 12. Verify: 5² + 12² = ?", answer: "169", explanation: "25 + 144 = 169 = 13²." },
            { type: "mcq", difficulty: "medium", q: "Which is a Pythagorean triple?", options: ["5, 12, 13", "4, 5, 6", "6, 7, 8", "3, 5, 6"], answer: 0, explanation: "5² + 12² = 25 + 144 = 169 = 13²." },
            { type: "numeric", difficulty: "medium", q: "Is the triangle with sides 8, 15, 17 right-angled? Compute 8² + 15².", answer: "289", explanation: "64 + 225 = 289 = 17². Yes, right-angled." },
            { type: "mcq", difficulty: "medium", q: "A right triangle with hypotenuse 10 and one leg 6 satisfies: the other leg =", options: ["8", "4", "√136", "7"], answer: 0, explanation: "√(100 − 36) = √64 = 8." },
            { type: "short", difficulty: "hard", q: "A ladder 13 m long leans against a wall. Its foot is 5 m from the wall. How high does it reach?", answer: "√(169 − 25) = √144 = 12 m.", explanation: "Apply a² + b² = c²: height² = 13² − 5² = 144." },
            { type: "tf", difficulty: "hard", q: "If a² + b² > c², the angle opposite c is acute (less than 90°).", answer: true, explanation: "When a² + b² > c², the triangle is acute-angled." },
            { type: "numeric", difficulty: "hard", q: "A right triangle has legs a = 9 and b = 40. Find the hypotenuse.", answer: "41", explanation: "√(81 + 1600) = √1681 = 41." },
            { type: "mcq", difficulty: "hard", q: "A right triangle has area 60 cm² and one leg of 10 cm. The other leg is:", options: ["12 cm", "10 cm", "6 cm", "15 cm"], answer: 0, explanation: "Area = (1/2) × 10 × other leg = 60 → other leg = 12 cm." }
          ] },
        { text: "Find the hypotenuse of a right triangle.",
          resources: [
            { type: "interactive", title: "Finding the hypotenuse", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/pythagorean-theorem.html", note: "c = √(a² + b²)." },
            { type: "interactive", title: "Khan Academy: Pythagorean theorem", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Worked hypotenuse examples." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A right triangle has legs 3 and 4. What is the hypotenuse?", answer: "5", explanation: "√(3² + 4²) = √25 = 5." },
            { type: "numeric", difficulty: "medium", q: "A right triangle has legs 6 and 8. What is the hypotenuse?", answer: "10", explanation: "√(36 + 64) = √100 = 10." },
            { type: "numeric", difficulty: "easy", q: "A right triangle has legs 5 and 12. What is the hypotenuse?", answer: "13", explanation: "√(25 + 144) = √169 = 13." },
            { type: "mcq", difficulty: "easy", q: "The hypotenuse of a right triangle is found using:", options: ["c = √(a² + b²)", "c = a + b", "c = a × b", "c = a² + b²"], answer: 0, explanation: "Take the square root of the sum of the squares of the legs." },
            { type: "numeric", difficulty: "medium", q: "Legs 9 and 12. What is the hypotenuse?", answer: "15", explanation: "√(81 + 144) = √225 = 15." },
            { type: "numeric", difficulty: "medium", q: "Legs 8 and 15. What is the hypotenuse?", answer: "17", explanation: "√(64 + 225) = √289 = 17." },
            { type: "mcq", difficulty: "medium", q: "A right triangle has legs 7 and 24. Its hypotenuse is:", options: ["25", "31", "√625", "24"], answer: 0, explanation: "√(49 + 576) = √625 = 25." },
            { type: "numeric", difficulty: "medium", q: "An isosceles right triangle has legs 10 cm each. What is the hypotenuse to the nearest whole number?", answer: "14", explanation: "√(100 + 100) = √200 ≈ 14.14 ≈ 14." },
            { type: "short", difficulty: "hard", q: "Two points A(0, 0) and B(9, 12) form the hypotenuse of a right triangle. Find the length AB.", answer: "√(81 + 144) = √225 = 15 units.", explanation: "Use the distance formula, which is Pythagoras applied to coordinates." },
            { type: "numeric", difficulty: "hard", q: "Legs 20 and 21. What is the hypotenuse?", answer: "29", explanation: "√(400 + 441) = √841 = 29." },
            { type: "tf", difficulty: "hard", q: "In a right triangle, the hypotenuse is always the longest side.", answer: true, explanation: "The side opposite the largest angle (90°) is the longest." },
            { type: "mcq", difficulty: "hard", q: "A right triangle has legs a and a. The hypotenuse in terms of a is:", options: ["a√2", "2a", "a²", "a + 1"], answer: 0, explanation: "c = √(a² + a²) = √(2a²) = a√2." }
          ] },
        { text: "Find a missing leg of a right triangle.",
          resources: [
            { type: "interactive", title: "Finding a leg", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Rearranging Pythagoras." },
            { type: "interactive", title: "Pythagorean theorem", provider: "Math is Fun", url: "https://www.mathsisfun.com/geometry/pythagorean-theorem.html", note: "Solving for a leg." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A right triangle has hypotenuse 13 and one leg 5. What is the other leg?", answer: "12", explanation: "√(13² − 5²) = √(169 − 25) = √144 = 12." },
            { type: "numeric", difficulty: "medium", q: "Hypotenuse 10, one leg 6. What is the other leg?", answer: "8", explanation: "√(100 − 36) = √64 = 8." },
            { type: "mcq", difficulty: "easy", q: "To find a missing leg, you rearrange a² + b² = c² to get:", options: ["a² = c² − b²", "a = c − b", "a² = c² + b²", "a = √(c + b)"], answer: 0, explanation: "Subtract the known leg² from the hypotenuse²." },
            { type: "numeric", difficulty: "easy", q: "Hypotenuse 5, one leg 4. Find the other leg.", answer: "3", explanation: "√(25 − 16) = √9 = 3." },
            { type: "numeric", difficulty: "medium", q: "Hypotenuse 17, one leg 8. Find the other leg.", answer: "15", explanation: "√(289 − 64) = √225 = 15." },
            { type: "numeric", difficulty: "medium", q: "Hypotenuse 25, one leg 7. Find the other leg.", answer: "24", explanation: "√(625 − 49) = √576 = 24." },
            { type: "mcq", difficulty: "medium", q: "A right triangle has hypotenuse 26 and one leg 10. The missing leg is:", options: ["24", "16", "28", "20"], answer: 0, explanation: "√(676 − 100) = √576 = 24." },
            { type: "numeric", difficulty: "medium", q: "Hypotenuse 20, one leg 12. Find the other leg.", answer: "16", explanation: "√(400 − 144) = √256 = 16." },
            { type: "short", difficulty: "hard", q: "A rectangle has a diagonal of 15 cm and one side of 9 cm. Find the other side.", answer: "The diagonal is the hypotenuse: √(225 − 81) = √144 = 12 cm.", explanation: "Use Pythagoras with the diagonal as the hypotenuse." },
            { type: "numeric", difficulty: "hard", q: "Hypotenuse 41, one leg 40. Find the other leg.", answer: "9", explanation: "√(1681 − 1600) = √81 = 9." },
            { type: "tf", difficulty: "hard", q: "A right triangle with hypotenuse 10 can have a leg of 10.", answer: false, explanation: "The leg must be shorter than the hypotenuse; leg 10 would leave the other as 0." },
            { type: "mcq", difficulty: "hard", q: "A right triangle has hypotenuse 2 and one leg 1. The missing leg is:", options: ["√3", "1", "√5", "3"], answer: 0, explanation: "√(4 − 1) = √3." }
          ] },
        { text: "Apply coordinate geometry.",
          resources: [
            { type: "interactive", title: "Distance & midpoint", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/distance-2-points.html", note: "Distance and midpoint formulas." },
            { type: "interactive", title: "Coordinate geometry", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "What is the distance between (0, 0) and (3, 4)?", answer: "5", explanation: "√(3² + 4²) = √25 = 5." },
            { type: "mcq", difficulty: "medium", q: "The midpoint of (0, 0) and (4, 6) is:", options: ["(2, 3)", "(4, 6)", "(0, 0)", "(3, 2)"], answer: 0, explanation: "Average the coordinates: ((0+4)/2, (0+6)/2) = (2, 3)." },
            { type: "tf", difficulty: "easy", q: "The distance between two points uses the Pythagorean theorem applied to their horizontal and vertical separation.", answer: true, explanation: "d = √((x₂−x₁)² + (y₂−y₁)²)." },
            { type: "mcq", difficulty: "easy", q: "The midpoint formula for (x₁, y₁) and (x₂, y₂) is:", options: ["((x₁+x₂)/2, (y₁+y₂)/2)", "(x₁−x₂, y₁−y₂)", "(x₁×x₂, y₁×y₂)", "((x₁−x₂)/2, (y₁−y₂)/2)"], answer: 0, explanation: "Average the x-coordinates and average the y-coordinates." },
            { type: "numeric", difficulty: "medium", q: "Find the distance from (1, 1) to (4, 5).", answer: "5", explanation: "√((4−1)² + (5−1)²) = √(9+16) = √25 = 5." },
            { type: "mcq", difficulty: "medium", q: "The midpoint of (−2, 4) and (6, 0) is:", options: ["(2, 2)", "(4, 4)", "(2, 4)", "(0, 2)"], answer: 0, explanation: "((−2+6)/2, (4+0)/2) = (2, 2)." },
            { type: "numeric", difficulty: "medium", q: "Find the distance from (0, 0) to (5, 12).", answer: "13", explanation: "√(25 + 144) = √169 = 13." },
            { type: "mcq", difficulty: "medium", q: "Midpoint of (3, 7) and (9, 1) is:", options: ["(6, 4)", "(3, 4)", "(6, 7)", "(9, 7)"], answer: 0, explanation: "((3+9)/2, (7+1)/2) = (6, 4)." },
            { type: "numeric", difficulty: "hard", q: "A line segment has midpoint (5, 3) and one endpoint (2, 1). Find the x-coordinate of the other endpoint.", answer: "8", explanation: "(2 + x₂)/2 = 5 → x₂ = 8." },
            { type: "short", difficulty: "hard", q: "Find the perimeter of a triangle with vertices A(0, 0), B(4, 0), C(4, 3).", answer: "AB = 4; BC = 3; AC = √(16 + 9) = 5; perimeter = 4 + 3 + 5 = 12.", explanation: "Calculate each side length using the distance formula." },
            { type: "tf", difficulty: "hard", q: "The distance between (a, b) and (a + 3, b + 4) is always 5.", answer: true, explanation: "√(3² + 4²) = 5 regardless of the values of a and b." },
            { type: "mcq", difficulty: "hard", q: "Points A(1, 2), B(5, 2), C(5, 5) form a right triangle. The length of AC is:", options: ["5", "4", "3", "√7"], answer: 0, explanation: "√((5−1)² + (5−2)²) = √(16 + 9) = √25 = 5." }
          ] },
        { text: "Solve ratio segment / partition problems.",
          resources: [
            { type: "interactive", title: "Dividing a line in a ratio", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Partitioning segments." },
            { type: "interactive", title: "Ratios", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/ratio.html", note: "Dividing a segment in a ratio." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A line from 0 to 12 is divided in the ratio 1:3. The dividing point is at?", answer: "3", explanation: "4 parts over length 12 = 3 each; 1 part from 0 is at 3." },
            { type: "short", difficulty: "hard", q: "A point divides AB in the ratio 2:1, where A = 0 and B = 9. Find the point's position.", answer: "Total 3 parts over length 9 → 3 per part; 2 parts from A puts the point at 6.", explanation: "Position = (2/3) of the way from A to B." },
            { type: "tf", difficulty: "easy", q: "To divide a segment in ratio m:n, calculate m/(m+n) of the total length from the start.", answer: true, explanation: "The dividing point is m/(m+n) of the way along." },
            { type: "numeric", difficulty: "easy", q: "A segment from 0 to 10 is divided in ratio 3:2. Where is the dividing point?", answer: "6", explanation: "3/(3+2) × 10 = 3/5 × 10 = 6." },
            { type: "mcq", difficulty: "medium", q: "A segment of length 20 is divided in ratio 1:4. The shorter part has length:", options: ["4", "5", "16", "8"], answer: 0, explanation: "1/(1+4) × 20 = 1/5 × 20 = 4." },
            { type: "numeric", difficulty: "medium", q: "Points A(0) and B(30) on a number line. A point P divides AB in ratio 2:3. Find P.", answer: "12", explanation: "2/(2+3) × 30 = 2/5 × 30 = 12." },
            { type: "mcq", difficulty: "medium", q: "A 15 cm segment is divided in ratio 2:1. How long is the longer part?", options: ["10 cm", "5 cm", "7.5 cm", "12 cm"], answer: 0, explanation: "2/(2+1) × 15 = 2/3 × 15 = 10 cm." },
            { type: "numeric", difficulty: "medium", q: "Segment from A(0, 0) to B(10, 0). P divides AB in ratio 3:2. What is the x-coordinate of P?", answer: "6", explanation: "3/5 × 10 = 6." },
            { type: "short", difficulty: "hard", q: "Point P divides AB in ratio 1:2, A = (0, 0), B = (9, 6). Find P.", answer: "P = A + (1/3)(B − A) = (0,0) + (1/3)(9,6) = (3, 2).", explanation: "Move 1/(1+2) = 1/3 of the way from A to B." },
            { type: "numeric", difficulty: "hard", q: "A segment from A(0) to B(24) is divided in ratio 3:5. The point is at:", answer: "9", explanation: "3/(3+5) × 24 = 3/8 × 24 = 9." },
            { type: "tf", difficulty: "hard", q: "If P divides AB in ratio 1:1, P is the midpoint of AB.", answer: true, explanation: "Equal parts means P is exactly halfway." },
            { type: "mcq", difficulty: "hard", q: "On the segment from (0, 0) to (8, 6), the point 3/4 of the way along is:", options: ["(6, 4.5)", "(4, 3)", "(2, 1.5)", "(8, 6)"], answer: 0, explanation: "3/4 × (8, 6) = (6, 4.5)." }
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
            { type: "numeric", difficulty: "medium", q: "P(rolling 6 then 6 on two dice) = 1/36. Give the denominator.", answer: "36", explanation: "1/6 × 1/6 = 1/36." },
            { type: "tf", difficulty: "easy", q: "For two independent events A and B, P(A and B) = P(A) × P(B).", answer: true, explanation: "Multiplication rule for independent events." },
            { type: "mcq", difficulty: "easy", q: "A coin is flipped and a die is rolled. P(head and 3) = ?", options: ["1/12", "1/6", "1/3", "1/2"], answer: 0, explanation: "1/2 × 1/6 = 1/12." },
            { type: "numeric", difficulty: "medium", q: "P(drawing a red card from a standard deck) = 1/2. P(two red cards with replacement) = 1/4. Give the numerator.", answer: "1", explanation: "1/2 × 1/2 = 1/4." },
            { type: "mcq", difficulty: "medium", q: "A spinner has 4 equal sections (1, 2, 3, 4). P(spinning 2 then 3) = ?", options: ["1/16", "1/4", "1/8", "2/16"], answer: 0, explanation: "1/4 × 1/4 = 1/16." },
            { type: "tf", difficulty: "medium", q: "P(A or B) = P(A) + P(B) when A and B are mutually exclusive (cannot both occur).", answer: true, explanation: "If A and B cannot both happen, their combined probability is the sum." },
            { type: "mcq", difficulty: "medium", q: "P(rolling an even number on a die) = 1/2. P(rolling even twice) = ?", options: ["1/4", "1/2", "1/3", "2/3"], answer: 0, explanation: "1/2 × 1/2 = 1/4." },
            { type: "numeric", difficulty: "hard", q: "P(picking a vowel from ABCDE) = 2/5. P(picking two vowels with replacement) as a fraction — what is the denominator?", answer: "25", explanation: "2/5 × 2/5 = 4/25; denominator = 25." },
            { type: "mcq", difficulty: "hard", q: "A bag has 3 red and 7 blue balls. One is drawn and replaced. P(two reds) = ?", options: ["9/100", "3/10", "6/100", "1/10"], answer: 0, explanation: "3/10 × 3/10 = 9/100." },
            { type: "short", difficulty: "hard", q: "A bag has 5 red balls and 5 blue balls. Two balls are drawn with replacement. Find P(one red, one blue in that order).", answer: "P(red) × P(blue) = 1/2 × 1/2 = 1/4.", explanation: "Multiply the individual probabilities for sequential independent draws." },
            { type: "tf", difficulty: "hard", q: "Without replacement, drawing two cards are independent events.", answer: false, explanation: "The first draw changes the composition of the deck, so the events are dependent." }
          ] },
        { text: "Review and extend probability.",
          resources: [
            { type: "interactive", title: "Probability", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/probability.html", note: "Probability scale and outcomes." },
            { type: "interactive", title: "Probability", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "A bag has 4 red and 6 blue balls. P(blue) as a decimal?", answer: "0.6", explanation: "6 out of 10 = 0.6." },
            { type: "tf", difficulty: "easy", q: "All probabilities are between 0 and 1.", answer: true, explanation: "0 means impossible, 1 means certain." },
            { type: "mcq", difficulty: "easy", q: "P(certain event) = ?", options: ["1", "0", "0.5", "100"], answer: 0, explanation: "A certain event always occurs, so its probability is 1." },
            { type: "numeric", difficulty: "easy", q: "P(impossible event) = ?", answer: "0", explanation: "An impossible event never occurs." },
            { type: "mcq", difficulty: "medium", q: "A bag contains 3 yellow and 7 green marbles. P(yellow) = ?", options: ["0.3", "0.7", "3/7", "7/3"], answer: 0, explanation: "3 out of 10 total = 3/10 = 0.3." },
            { type: "numeric", difficulty: "medium", q: "A die is rolled. P(number > 4) as a fraction — give the numerator.", answer: "2", explanation: "Numbers > 4 are {5, 6}: 2 out of 6 = 1/3; numerator = 2 (over 6) or 1 (simplified). Accepting 2.", explanation: "5 and 6 are greater than 4: 2 outcomes out of 6." },
            { type: "mcq", difficulty: "medium", q: "If P(event A) = 0.3, then P(not A) = ?", options: ["0.7", "0.3", "1.3", "0"], answer: 0, explanation: "P(not A) = 1 − P(A) = 0.7." },
            { type: "tf", difficulty: "medium", q: "If you list all possible outcomes (the sample space), their probabilities sum to 1.", answer: true, explanation: "One of the outcomes must occur." },
            { type: "numeric", difficulty: "hard", q: "A spinner has 5 equal sectors. P(landing on sector 3) as a decimal?", answer: "0.2", explanation: "1/5 = 0.2." },
            { type: "mcq", difficulty: "hard", q: "A card is drawn from a standard 52-card deck. P(ace or king) = ?", options: ["8/52", "4/52", "2/52", "12/52"], answer: 0, explanation: "4 aces + 4 kings = 8 cards; 8/52." },
            { type: "short", difficulty: "hard", q: "A bag has 2 red, 3 green, and 5 blue balls. Find P(not blue).", answer: "P(not blue) = 1 − 5/10 = 5/10 = 0.5 (or 1/2).", explanation: "Non-blue balls = 2 + 3 = 5 out of 10." },
            { type: "mcq", difficulty: "hard", q: "In 200 trials an event occurs 50 times. The relative frequency (experimental probability) is:", options: ["0.25", "0.5", "50", "4"], answer: 0, explanation: "50/200 = 0.25." }
          ] },
        { text: "Work with bivariate data.",
          resources: [
            { type: "interactive", title: "Bivariate data", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Two variables together." },
            { type: "interactive", title: "Data", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Paired data." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Bivariate data involves:", options: ["two variables", "one variable", "no variables", "categories only"], answer: 0, explanation: "'Bi' means two — two variables." },
            { type: "tf", difficulty: "easy", q: "Bivariate data can be plotted on a scatter graph.", answer: true, explanation: "Each pair becomes a point (x, y)." },
            { type: "mcq", difficulty: "easy", q: "An example of bivariate data is:", options: ["height and weight of students", "just the heights of students", "the names of students", "a single test score"], answer: 0, explanation: "Height and weight are two variables measured on the same subjects." },
            { type: "tf", difficulty: "easy", q: "Univariate data has only one variable; bivariate data has two.", answer: true, explanation: "'Uni' = one, 'bi' = two." },
            { type: "mcq", difficulty: "medium", q: "Which pair of variables is bivariate?", options: ["hours studied and exam score", "just exam scores", "student names", "the number of students"], answer: 0, explanation: "Two measured variables per individual." },
            { type: "mcq", difficulty: "medium", q: "In a bivariate dataset the two values per subject are called:", options: ["an ordered pair (x, y)", "a range", "a mode", "a frequency"], answer: 0, explanation: "Each subject contributes one (x, y) pair to the dataset." },
            { type: "tf", difficulty: "medium", q: "In bivariate data, both variables should be measured on the same subjects.", answer: true, explanation: "Both measurements come from the same individual/case to form a pair." },
            { type: "mcq", difficulty: "medium", q: "A study records age (years) and reaction time (ms) for 20 people. This is:", options: ["bivariate data", "univariate data", "qualitative data", "no data"], answer: 0, explanation: "Two quantitative variables per person = bivariate." },
            { type: "short", difficulty: "hard", q: "Give one real-life example of bivariate data and say which variable you might place on each axis.", answer: "e.g. temperature (x) and ice cream sales (y); or revision time (x) and test score (y).", explanation: "The explanatory variable is typically on the x-axis and the response on the y-axis." },
            { type: "mcq", difficulty: "hard", q: "Bivariate data collected over time (e.g. temperature and month) can also be called:", options: ["time-series bivariate data", "categorical data", "cumulative data", "frequency data"], answer: 0, explanation: "When one variable is time, it is time-series data." },
            { type: "tf", difficulty: "hard", q: "Bivariate data is essential for investigating whether two variables are correlated.", answer: true, explanation: "Without paired measurements, correlation cannot be assessed." },
            { type: "numeric", difficulty: "medium", q: "A bivariate dataset has 8 pairs of values. How many data points appear on the scatter graph?", answer: "8", explanation: "Each pair is one point; 8 pairs = 8 points." }
          ] },
        { text: "Read and create scatter plots.",
          resources: [
            { type: "interactive", title: "Scatter Plots", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/scatter-xy-plots.html", note: "Plotting paired data." },
            { type: "interactive", title: "Scatter plots", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A scatter plot is used to show:", options: ["the relationship between two variables", "a single value", "parts of a whole", "time only"], answer: 0, explanation: "It reveals how two variables relate." },
            { type: "tf", difficulty: "easy", q: "Each point on a scatter plot represents a pair of values.", answer: true, explanation: "One point = one (x, y) pair." },
            { type: "mcq", difficulty: "easy", q: "The x-axis on a scatter plot usually shows the:", options: ["explanatory (independent) variable", "response (dependent) variable", "the y-intercept", "the mean"], answer: 0, explanation: "The variable thought to explain or predict the other goes on the x-axis." },
            { type: "tf", difficulty: "easy", q: "An outlier on a scatter plot is a point that lies far from the general pattern.", answer: true, explanation: "Outliers are unusual data values that stand away from the cluster." },
            { type: "mcq", difficulty: "medium", q: "A scatter plot of 'hours of sunshine' vs 'temperature' shows points rising from left to right. This suggests:", options: ["positive correlation", "negative correlation", "no correlation", "an exact linear relationship"], answer: 0, explanation: "Both variables increase together: positive correlation." },
            { type: "mcq", difficulty: "medium", q: "Which type of graph shows how two numeric variables relate to each other?", options: ["scatter plot", "bar chart", "pie chart", "frequency polygon"], answer: 0, explanation: "A scatter plot plots pairs of numeric values." },
            { type: "tf", difficulty: "medium", q: "A scatter plot can be used to identify an outlier.", answer: true, explanation: "An outlier appears as an isolated point, away from the main cluster." },
            { type: "numeric", difficulty: "medium", q: "A scatter plot has 15 data pairs. How many points are plotted?", answer: "15", explanation: "One point per data pair." },
            { type: "mcq", difficulty: "hard", q: "To draw a scatter plot of (height, shoe size) for 20 students, you need:", options: ["20 (x, y) pairs", "20 heights only", "a bar chart", "a frequency table"], answer: 0, explanation: "You need a paired value for each student." },
            { type: "short", difficulty: "hard", q: "Describe how you would create a scatter plot for data on age (x) and blood pressure (y) for 10 people.", answer: "Label the x-axis 'age' and y-axis 'blood pressure'. Plot each person's pair (age, pressure) as a point. Choose suitable scales for both axes.", explanation: "Each individual contributes one point to the graph." },
            { type: "tf", difficulty: "hard", q: "A scatter plot where the points form a perfect straight line shows a perfect linear relationship.", answer: true, explanation: "All points on one line means the correlation is exactly 1 or −1." },
            { type: "mcq", difficulty: "hard", q: "On a scatter plot with points scattered randomly in all directions, the correlation is:", options: ["no correlation (none)", "strong positive", "strong negative", "perfect"], answer: 0, explanation: "Random scatter means there is no pattern between the two variables." }
          ] },
        { text: "Describe correlation.",
          resources: [
            { type: "interactive", title: "Correlation", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/correlation.html", note: "Positive, negative and no correlation." },
            { type: "interactive", title: "Correlation", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Points going from bottom-left to top-right show:", options: ["positive correlation", "negative correlation", "no correlation", "an outlier"], answer: 0, explanation: "Both variables increase together — positive correlation." },
            { type: "tf", difficulty: "hard", q: "Correlation does not necessarily mean one variable causes the other.", answer: true, explanation: "Correlation is not causation." },
            { type: "mcq", difficulty: "easy", q: "Points running from top-left to bottom-right show:", options: ["negative correlation", "positive correlation", "no correlation", "a circle"], answer: 0, explanation: "As x increases, y decreases — negative correlation." },
            { type: "tf", difficulty: "easy", q: "A scatter plot with points going upward from left to right shows positive correlation.", answer: true, explanation: "Both variables increase together." },
            { type: "mcq", difficulty: "medium", q: "Which is an example of negative correlation?", options: ["more exercise → lower weight", "more study → higher score", "more rain → more flooding", "more height → more weight"], answer: 0, explanation: "As exercise increases, weight tends to decrease." },
            { type: "mcq", difficulty: "medium", q: "Strong correlation means:", options: ["the points lie close to a straight line", "the points are random", "the line is steep", "x causes y"], answer: 0, explanation: "Strong correlation means the data follows the linear trend closely." },
            { type: "tf", difficulty: "medium", q: "No correlation means changes in x do not predict changes in y.", answer: true, explanation: "Without correlation, the variables are unrelated." },
            { type: "mcq", difficulty: "medium", q: "Ice cream sales and drowning incidents are positively correlated. This means:", options: ["both are linked to hot weather, not to each other directly", "ice cream causes drowning", "drowning causes ice cream sales", "the data is wrong"], answer: 0, explanation: "A lurking variable (temperature) causes both — not a causal link." },
            { type: "mcq", difficulty: "hard", q: "The correlation coefficient r = −0.9 indicates:", options: ["strong negative correlation", "strong positive correlation", "no correlation", "weak negative correlation"], answer: 0, explanation: "Close to −1 means strong negative; the sign shows the direction." },
            { type: "short", difficulty: "hard", q: "Explain the difference between correlation and causation, using an example.", answer: "Correlation means two variables tend to move together. Causation means one directly causes the other. E.g. shoe size and reading ability are correlated in children (both increase with age), but shoe size does not cause reading ability.", explanation: "A third factor (age) can cause both, creating a spurious correlation." },
            { type: "numeric", difficulty: "hard", q: "A correlation coefficient of 0 means the linear relationship explains what percentage (%) of the variation?", answer: "0", explanation: "r = 0 means no linear relationship — 0% of the variation is explained." },
            { type: "tf", difficulty: "hard", q: "A correlation of r = +1 means a perfect positive linear relationship between the variables.", answer: true, explanation: "All data points lie exactly on an upward-sloping line." }
          ] },
        { text: "Model data with a line of best fit.",
          resources: [
            { type: "interactive", title: "Line of best fit", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/least-squares-regression.html", note: "Trend lines for data." },
            { type: "interactive", title: "Trend lines", provider: "Desmos", url: "https://www.desmos.com/calculator", note: "Fit a line to data." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A line of best fit is used to:", options: ["model a trend in scattered data", "connect every point", "show the mean only", "list the data"], answer: 0, explanation: "It summarises the overall trend." },
            { type: "short", difficulty: "medium", q: "What is a 'line of best fit' used for on a scatter graph?", answer: "It shows the overall trend in the data and can be used to estimate or predict values.", explanation: "It captures the general direction of the points." },
            { type: "tf", difficulty: "easy", q: "A line of best fit should pass through as many points as possible while minimising the overall distance from the other points.", answer: true, explanation: "It balances the distances from all data points, roughly half above and half below." },
            { type: "mcq", difficulty: "easy", q: "Predicting y for an x-value within the data range using the line of best fit is called:", options: ["interpolation", "extrapolation", "correlation", "sampling"], answer: 0, explanation: "Interpolation estimates within the range of the data." },
            { type: "mcq", difficulty: "medium", q: "Predicting y for an x-value outside the data range is called:", options: ["extrapolation", "interpolation", "correlation", "range estimation"], answer: 0, explanation: "Extrapolation extends the line beyond the data — less reliable." },
            { type: "tf", difficulty: "medium", q: "A line of best fit can be used to make predictions about intermediate values.", answer: true, explanation: "This is the primary purpose: estimating values not in the original dataset." },
            { type: "mcq", difficulty: "medium", q: "A line of best fit has equation y = 2x + 5. Predict y when x = 4.", options: ["13", "9", "14", "8"], answer: 0, explanation: "2(4) + 5 = 13." },
            { type: "numeric", difficulty: "medium", q: "A line of best fit is y = 3x − 1. Estimate y when x = 6.", answer: "17", explanation: "3(6) − 1 = 17." },
            { type: "mcq", difficulty: "hard", q: "Extrapolation is less reliable than interpolation because:", options: ["the trend may not continue beyond the data range", "the line is less accurate inside the data", "it uses more points", "the formula changes"], answer: 0, explanation: "Patterns may break down outside the observed range." },
            { type: "short", difficulty: "hard", q: "Explain how to draw a line of best fit by eye on a scatter graph.", answer: "Draw a straight line that follows the direction of the data, with roughly equal numbers of points above and below the line. It does not need to pass through the origin.", explanation: "The line of best fit minimises the overall spread of points from the line." },
            { type: "tf", difficulty: "hard", q: "The line of best fit must pass through the point (mean x, mean y).", answer: true, explanation: "The means of both variables define a point that the regression line always passes through." },
            { type: "numeric", difficulty: "hard", q: "A line of best fit has gradient 0.5 and y-intercept 10. Predict y when x = 20.", answer: "20", explanation: "0.5 × 20 + 10 = 20." }
          ] },
        { text: "Judge sampling and reliability.",
          resources: [
            { type: "interactive", title: "Sampling & reliability", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Fair, reliable samples." },
            { type: "interactive", title: "Data Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Bias and reliability in data." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "A larger, well-chosen sample generally gives more reliable results.", answer: true, explanation: "It better represents the population." },
            { type: "mcq", difficulty: "easy", q: "A reliable investigation should be:", options: ["repeatable and unbiased", "quick and small", "based on opinion", "done only once"], answer: 0, explanation: "Repeatable + unbiased = reliable." },
            { type: "tf", difficulty: "easy", q: "A biased sample does not fairly represent the population.", answer: true, explanation: "Bias means certain groups are over- or under-represented." },
            { type: "mcq", difficulty: "easy", q: "A random sample is one where:", options: ["every member of the population has an equal chance of being selected", "only volunteers are included", "the largest group is chosen", "the researcher picks their favourites"], answer: 0, explanation: "Random selection eliminates systematic bias." },
            { type: "mcq", difficulty: "medium", q: "A survey asks only sports club members about exercise habits. This sample is:", options: ["biased — it over-represents active people", "random", "representative", "reliable"], answer: 0, explanation: "Sports club members are more active than the general population." },
            { type: "tf", difficulty: "medium", q: "Increasing sample size generally reduces sampling error.", answer: true, explanation: "Larger samples better reflect the true population values." },
            { type: "mcq", difficulty: "medium", q: "Which sampling method is most likely to give a representative sample?", options: ["random sampling from the whole population", "asking your friends", "surveying only students with the highest marks", "convenience sampling"], answer: 0, explanation: "Random sampling removes systematic bias." },
            { type: "mcq", difficulty: "medium", q: "In an experiment you change one variable and keep others the same. The variable you keep the same is:", options: ["a control variable", "the dependent variable", "the independent variable", "the sample"], answer: 0, explanation: "Control variables are kept constant to make the test fair." },
            { type: "short", difficulty: "hard", q: "A study samples only online users to find internet usage trends. Identify the bias and suggest how to improve it.", answer: "The sample excludes non-internet users, so it over-estimates usage. Improve by using a random sample of all residents, not just online users.", explanation: "Sampling only from the group being studied creates self-selection bias." },
            { type: "tf", difficulty: "hard", q: "Repeating an experiment several times and averaging results improves reliability.", answer: true, explanation: "Repeated trials reduce the effect of random errors." },
            { type: "mcq", difficulty: "hard", q: "A stratified sample divides the population into groups and then:", options: ["randomly selects proportional numbers from each group", "selects only the largest group", "randomly picks one group", "surveys everyone"], answer: 0, explanation: "Stratified sampling ensures each subgroup is proportionally represented." },
            { type: "numeric", difficulty: "hard", q: "A school of 600 students: 240 in Year 7, 200 in Year 8, 160 in Year 9. A stratified sample of 60 is needed. How many Year 8 students should be included?", answer: "20", explanation: "200/600 × 60 = 20." }
          ] },
        { text: "Interpret statistics.",
          resources: [
            { type: "interactive", title: "Averages & range", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/central-measures.html", note: "Summarising data." },
            { type: "interactive", title: "Interpreting data", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "Practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Find the range of 4, 9, 2, 7.", answer: "7", explanation: "Range = largest − smallest = 9 − 2 = 7." },
            { type: "numeric", difficulty: "easy", q: "Find the mean of 10, 20, 30.", answer: "20", explanation: "(10 + 20 + 30) ÷ 3 = 60 ÷ 3 = 20." },
            { type: "mcq", difficulty: "easy", q: "The mode of 3, 5, 3, 7, 3, 9 is:", options: ["3", "5", "7", "9"], answer: 0, explanation: "3 appears most often (three times)." },
            { type: "numeric", difficulty: "easy", q: "Find the median of 2, 5, 7, 10, 13.", answer: "7", explanation: "Middle value of 5 ordered numbers is the 3rd: 7." },
            { type: "mcq", difficulty: "medium", q: "The mean of 8 values is 6. What is their sum?", options: ["48", "14", "6", "42"], answer: 0, explanation: "Sum = mean × count = 6 × 8 = 48." },
            { type: "numeric", difficulty: "medium", q: "Find the median of 1, 3, 5, 7, 9, 11 (even count).", answer: "6", explanation: "Middle two values are 5 and 7; median = (5+7)/2 = 6." },
            { type: "mcq", difficulty: "medium", q: "Which average is most affected by an extreme value (outlier)?", options: ["mean", "median", "mode", "range"], answer: 0, explanation: "The mean uses all values, so an extreme value pulls it significantly." },
            { type: "tf", difficulty: "medium", q: "The range measures how spread out a dataset is.", answer: true, explanation: "Range = max − min; larger range means more spread." },
            { type: "numeric", difficulty: "hard", q: "Five scores: 12, 15, 18, 20, x. Their mean is 17. Find x.", answer: "20", explanation: "Sum = 17 × 5 = 85; x = 85 − (12+15+18+20) = 85 − 65 = 20." },
            { type: "short", difficulty: "hard", q: "A dataset is 4, 4, 5, 6, 100. Which average best represents the data? Justify.", answer: "The median (5) best represents the data because the mean (23.8) is distorted by the outlier 100.", explanation: "The median is resistant to outliers." },
            { type: "mcq", difficulty: "hard", q: "The interquartile range (IQR) is:", options: ["Q3 − Q1", "max − min", "mean − median", "Q2 − Q1"], answer: 0, explanation: "IQR = upper quartile minus lower quartile, covering the middle 50% of data." },
            { type: "tf", difficulty: "hard", q: "A smaller standard deviation means the data is more tightly clustered around the mean.", answer: true, explanation: "Less spread = smaller standard deviation." }
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
            { type: "interactive", title: "Math is Fun: Number skills", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/index.html", note: "Mixed number and algebra practice." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Work out 25% of 200.", answer: "50", explanation: "200 ÷ 4 = 50." },
            { type: "numeric", difficulty: "easy", q: "Solve 2x + 5 = 17. What is x?", answer: "6", explanation: "2x = 12 → x = 6." },
            { type: "numeric", difficulty: "easy", q: "Find the area of a rectangle with length 9 cm and width 4 cm (cm²).", answer: "36", explanation: "9 × 4 = 36 cm²." },
            { type: "mcq", difficulty: "easy", q: "What is 12% of 50?", options: ["6", "12", "5", "60"], answer: 0, explanation: "12/100 × 50 = 6." },
            { type: "numeric", difficulty: "medium", q: "Write 4500 in standard form. Give the coefficient.", answer: "4.5", explanation: "4500 = 4.5 × 10³." },
            { type: "mcq", difficulty: "medium", q: "Simplify √72.", options: ["6√2", "3√8", "2√6", "36√2"], answer: 0, explanation: "√72 = √36 × √2 = 6√2." },
            { type: "numeric", difficulty: "medium", q: "A right triangle has legs 5 and 12. What is the hypotenuse?", answer: "13", explanation: "√(25 + 144) = √169 = 13." },
            { type: "mcq", difficulty: "medium", q: "Factorise x² − 16.", options: ["(x+4)(x−4)", "(x−4)²", "(x+8)(x−2)", "(x+16)(x−1)"], answer: 0, explanation: "Difference of two squares: x² − 4²." },
            { type: "numeric", difficulty: "hard", q: "Solve 3x + 2y = 13 and x + y = 5. Find x.", answer: "3", explanation: "From x + y = 5: y = 5 − x; 3x + 2(5−x) = 13 → x + 10 = 13 → x = 3." },
            { type: "mcq", difficulty: "hard", q: "An arithmetic sequence starts 4, 7, 10, …. What is the 20th term?", options: ["61", "60", "64", "58"], answer: 0, explanation: "nth term = 3n + 1; 3(20) + 1 = 61." },
            { type: "short", difficulty: "hard", q: "£500 is invested at 4% compound interest for 2 years. Find the total amount.", answer: "500 × 1.04 × 1.04 = 500 × 1.0816 = £540.80.", explanation: "Apply the multiplier 1.04 twice." },
            { type: "tf", difficulty: "hard", q: "The product (2 × 10³) × (4 × 10⁵) in standard form is 8 × 10⁸.", answer: true, explanation: "2 × 4 = 8; 10³ × 10⁵ = 10⁸." }
          ] },
        { text: "Bridge core skills before Grade 8 work.",
          resources: [
            { type: "interactive", title: "Pre-algebra review", provider: "Khan Academy", url: "https://www.khanacademy.org/math/pre-algebra", note: "Foundation skills." },
            { type: "interactive", title: "Number & algebra", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Review topics." }
          ],
          quiz: [
            { type: "numeric", difficulty: "easy", q: "Evaluate 3² + 4².", answer: "25", explanation: "9 + 16 = 25." },
            { type: "mcq", difficulty: "easy", q: "Simplify the ratio 10:15.", options: ["2:3", "3:2", "5:3", "1:2"], answer: 0, explanation: "Divide both by 5: 2:3." },
            { type: "numeric", difficulty: "easy", q: "What is 15% of 80?", answer: "12", explanation: "80 × 0.15 = 12." },
            { type: "mcq", difficulty: "easy", q: "Expand 3(x + 4).", options: ["3x + 12", "3x + 4", "x + 12", "3x + 7"], answer: 0, explanation: "Distribute: 3 × x + 3 × 4 = 3x + 12." },
            { type: "numeric", difficulty: "medium", q: "Find the LCM of 6 and 8.", answer: "24", explanation: "Multiples of 8: 8, 16, 24; 24 is divisible by 6 too." },
            { type: "mcq", difficulty: "medium", q: "Simplify (x⁴)/(x²).", options: ["x²", "x⁶", "x", "1"], answer: 0, explanation: "Subtract exponents: 4 − 2 = 2." },
            { type: "numeric", difficulty: "medium", q: "A price of £60 is increased by 30%. What is the new price (£)?", answer: "78", explanation: "60 × 1.3 = 78." },
            { type: "numeric", difficulty: "medium", q: "Find the nth term of 6, 9, 12, 15, …. Give the rule evaluated at n = 10.", answer: "33", explanation: "d = 3; zero term = 6 − 3 = 3; nth term = 3n + 3; for n = 10: 3(10) + 3 = 33." },
            { type: "mcq", difficulty: "hard", q: "Expand and simplify (x + 3)(x − 5).", options: ["x² − 2x − 15", "x² + 2x − 15", "x² − 2x + 15", "x² + 8x − 15"], answer: 0, explanation: "x² − 5x + 3x − 15 = x² − 2x − 15." },
            { type: "numeric", difficulty: "hard", q: "A car travels 120 km in 1.5 hours. What is the speed in km/h?", answer: "80", explanation: "120 ÷ 1.5 = 80 km/h." },
            { type: "tf", difficulty: "hard", q: "The equation y = x² is not linear.", answer: true, explanation: "It contains x², making it a quadratic curve, not a straight line." },
            { type: "short", difficulty: "hard", q: "List three key facts you know about surds.", answer: "Examples: a surd is an irrational root; √a × √b = √(ab); to simplify √12 = 2√3 (take out square factors); rationalise 1/√a by multiplying by √a/√a.", explanation: "Recap the key surd rules from the surds topic." }
          ] },
        { text: "Review exponents, linear equations and systems.",
          resources: [
            { type: "interactive", title: "Algebra review", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Exponents, equations and systems." },
            { type: "interactive", title: "Algebra", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Review." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "x³ × x² = ?", options: ["x⁵", "x⁶", "x¹", "2x⁵"], answer: 0, explanation: "Add the powers: 3 + 2 = 5." },
            { type: "numeric", difficulty: "medium", q: "Solve x + y = 7 and x − y = 1. Find x.", answer: "4", explanation: "Add the equations: 2x = 8 → x = 4." },
            { type: "numeric", difficulty: "easy", q: "Evaluate 2⁵.", answer: "32", explanation: "2 × 2 × 2 × 2 × 2 = 32." },
            { type: "mcq", difficulty: "easy", q: "x⁰ = ? (for x ≠ 0)", options: ["1", "0", "x", "undefined"], answer: 0, explanation: "Any non-zero base raised to the power 0 equals 1." },
            { type: "numeric", difficulty: "medium", q: "Solve 4x − 3 = 13. What is x?", answer: "4", explanation: "4x = 16 → x = 4." },
            { type: "mcq", difficulty: "medium", q: "In y = mx + c, the gradient is:", options: ["m", "c", "x", "y"], answer: 0, explanation: "m is the coefficient of x — the gradient." },
            { type: "numeric", difficulty: "medium", q: "Evaluate 5^(1/2) to the nearest whole number.", answer: "2", explanation: "√5 ≈ 2.24, so nearest whole number is 2." },
            { type: "mcq", difficulty: "medium", q: "Solve 2x + y = 10 and y = x + 1 by substitution. Find x.", options: ["3", "4", "5", "2"], answer: 0, explanation: "2x + x + 1 = 10 → 3x = 9 → x = 3." },
            { type: "numeric", difficulty: "hard", q: "Evaluate 8^(2/3).", answer: "4", explanation: "Cube root of 8 = 2; 2² = 4." },
            { type: "mcq", difficulty: "hard", q: "Solve 3x + 2y = 14 and 5x + 2y = 22. Find x.", options: ["4", "2", "3", "5"], answer: 0, explanation: "Subtract: 2x = 8 → x = 4." },
            { type: "short", difficulty: "hard", q: "Find the equation of the line through (0, 3) with slope 2.", answer: "y = 2x + 3.", explanation: "Use y = mx + c: m = 2, c = 3." },
            { type: "tf", difficulty: "hard", q: "x^(−n) = 1/xⁿ for any positive x and integer n.", answer: true, explanation: "A negative exponent means take the reciprocal and use a positive exponent." }
          ] },
        { text: "Review geometry and data.",
          resources: [
            { type: "interactive", title: "Geometry review", provider: "Khan Academy", url: "https://www.khanacademy.org/math/geometry", note: "Key geometry skills." },
            { type: "interactive", title: "Data review", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Averages and graphs." }
          ],
          quiz: [
            { type: "numeric", difficulty: "medium", q: "A right triangle has legs 9 and 12. What is the hypotenuse?", answer: "15", explanation: "√(81 + 144) = √225 = 15." },
            { type: "numeric", difficulty: "easy", q: "Find the mean of 5, 10, 15, 20.", answer: "12.5", explanation: "50 ÷ 4 = 12.5." },
            { type: "mcq", difficulty: "easy", q: "The angles in a triangle sum to:", options: ["180°", "360°", "90°", "270°"], answer: 0, explanation: "Every triangle's three angles sum to 180°." },
            { type: "numeric", difficulty: "easy", q: "A rectangle has length 8 cm and width 5 cm. What is its perimeter (cm)?", answer: "26", explanation: "2(8 + 5) = 26 cm." },
            { type: "mcq", difficulty: "medium", q: "On a scatter plot, a line of best fit sloping downward shows:", options: ["negative correlation", "positive correlation", "no correlation", "zero gradient"], answer: 0, explanation: "Downward slope means as x increases, y decreases." },
            { type: "numeric", difficulty: "medium", q: "The median of 3, 7, 8, 12, 15 is:", answer: "8", explanation: "Middle value of 5 ordered numbers is the 3rd: 8." },
            { type: "numeric", difficulty: "medium", q: "A circle has radius 7 cm. Its area to the nearest whole number (cm²) is: (use π ≈ 3.14)", answer: "154", explanation: "3.14 × 49 ≈ 153.86 ≈ 154 cm²." },
            { type: "mcq", difficulty: "medium", q: "Scale 1:25. A 5 cm drawing represents a real length of:", options: ["125 cm", "5 cm", "20 cm", "30 cm"], answer: 0, explanation: "5 × 25 = 125 cm." },
            { type: "numeric", difficulty: "hard", q: "The distance from (1, 2) to (7, 10) is:", answer: "10", explanation: "√((7−1)² + (10−2)²) = √(36+64) = √100 = 10." },
            { type: "short", difficulty: "hard", q: "Two data sets: A = {5, 6, 7, 8, 9} and B = {1, 3, 7, 11, 13}. Compare their means and ranges.", answer: "Mean A = 7, Mean B = 7 (same). Range A = 4, Range B = 12. Set B has more spread.", explanation: "Same mean but B's values are more dispersed." },
            { type: "mcq", difficulty: "hard", q: "Similar triangles have sides in the ratio 3:5. The smaller triangle has area 9 cm². The larger has area:", options: ["25 cm²", "15 cm²", "45 cm²", "81 cm²"], answer: 0, explanation: "Area ratio = 3²:5² = 9:25; so larger area = (25/9) × 9 = 25 cm²." },
            { type: "tf", difficulty: "hard", q: "A larger IQR indicates greater variability in the middle 50% of a dataset.", answer: true, explanation: "IQR = Q3 − Q1; a larger gap means more spread in the central half." }
          ] },
        { text: "Solve multi-step modelling problems.",
          resources: [
            { type: "interactive", title: "Modelling problems", provider: "Khan Academy", url: "https://www.khanacademy.org/math/algebra", note: "Real-world multi-step problems." },
            { type: "interactive", title: "Algebra Index", provider: "Math is Fun", url: "https://www.mathsisfun.com/algebra/index.html", note: "Multi-step modelling problems." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "A gym charges £20 joining fee plus £15 per month. Write a formula for cost C after m months and find the cost after 6 months.", answer: "C = 20 + 15m; for m = 6, C = 20 + 90 = £110.", explanation: "Fixed fee plus a monthly rate." },
            { type: "numeric", difficulty: "medium", q: "Using C = 20 + 15m, find C when m = 4.", answer: "80", explanation: "20 + 15 × 4 = 20 + 60 = 80." },
            { type: "mcq", difficulty: "easy", q: "A car travels at 60 km/h for 2.5 hours. How far does it travel (km)?", options: ["150", "62.5", "120", "24"], answer: 0, explanation: "distance = speed × time = 60 × 2.5 = 150 km." },
            { type: "numeric", difficulty: "medium", q: "A model: revenue R = 12n − 30, where n is units sold. Find n when R = 90.", answer: "10", explanation: "12n = 120 → n = 10." },
            { type: "mcq", difficulty: "medium", q: "Water fills a tank at 5 litres per minute. The tank holds 200 litres. How many minutes to fill it?", options: ["40", "50", "1000", "100"], answer: 0, explanation: "200 ÷ 5 = 40 minutes." },
            { type: "numeric", difficulty: "medium", q: "P = 4n − 24 gives profit. Find the break-even point (P = 0) for n.", answer: "6", explanation: "4n = 24 → n = 6." },
            { type: "mcq", difficulty: "medium", q: "A model T = 20 − 0.5h gives temperature (°C) at height h (km). Temperature at h = 10 is:", options: ["15", "10", "25", "5"], answer: 0, explanation: "20 − 0.5 × 10 = 15." },
            { type: "numeric", difficulty: "hard", q: "A ball is thrown and its height h = 20t − 5t². Find h when t = 2.", answer: "20", explanation: "20(2) − 5(4) = 40 − 20 = 20." },
            { type: "short", difficulty: "hard", q: "A town's population P grows at 2% per year. Starting at 10,000, find P after 3 years to the nearest integer.", answer: "P = 10,000 × 1.02³ = 10,000 × 1.061208 ≈ 10,612.", explanation: "Apply compound growth: multiply by 1.02 three times." },
            { type: "mcq", difficulty: "hard", q: "A model: cost C = 0.1x² + 5x + 50 (x units). The fixed cost (when x = 0) is:", options: ["50", "5", "0.1", "55"], answer: 0, explanation: "When x = 0: C = 50. The constant term is the fixed cost." },
            { type: "numeric", difficulty: "hard", q: "A linear model y = 4x + k passes through (3, 17). Find k.", answer: "5", explanation: "17 = 4(3) + k → k = 17 − 12 = 5." },
            { type: "tf", difficulty: "hard", q: "A model that fits the data well allows reliable interpolation but extrapolation may be unreliable.", answer: true, explanation: "Within the data range the model is tested; beyond it, the trend may not hold." }
          ] },
        { text: "Use test strategy for a cumulative assessment.",
          resources: [
            { type: "reading", title: "The math myth — you don't need a 'math brain'", provider: "📚 School's Library · Big Think", url: "https://bigthink.com/hard-science/math-myth/", note: "Why anyone can improve at maths with practice — a confidence boost before a test." },
            { type: "interactive", title: "Khan Academy: Review & test prep", provider: "Khan Academy", url: "https://www.khanacademy.org/math/cc-eighth-grade-math", note: "Revision and review." },
            { type: "interactive", title: "Math is Fun: Practice index", provider: "Math is Fun", url: "https://www.mathsisfun.com/numbers/index.html", note: "Revision across topics." }
          ],
          quiz: [
            { type: "short", difficulty: "medium", q: "Give two good strategies for a maths test.", answer: "Examples: read each question carefully, show your working, manage your time, attempt easier questions first, and check answers at the end.", explanation: "Good strategy improves accuracy and earns method marks." },
            { type: "tf", difficulty: "easy", q: "Showing your working can earn method marks even if the final answer is wrong.", answer: true, explanation: "Markers reward correct method as well as the final answer." },
            { type: "mcq", difficulty: "easy", q: "What should you do first when reading a multi-step problem?", options: ["Identify what is asked and what is given", "Guess the answer", "Skip to the formula", "Add all the numbers together"], answer: 0, explanation: "Understanding the question before calculating prevents wasted effort." },
            { type: "tf", difficulty: "easy", q: "Checking your answer by substituting back into the original equation is a good test strategy.", answer: true, explanation: "Substitution verification catches arithmetic errors." },
            { type: "mcq", difficulty: "medium", q: "If you get stuck on a question, the best strategy is:", options: ["Move on and return later", "Leave it blank and never return", "Guess without working", "Give up the whole paper"], answer: 0, explanation: "Time management: skip, continue, return when time allows." },
            { type: "mcq", difficulty: "medium", q: "Estimation before calculating is useful because:", options: ["it helps you spot errors in your final answer", "it is always more accurate", "it replaces the calculation", "it is faster"], answer: 0, explanation: "A rough estimate helps you judge if your computed answer is reasonable." },
            { type: "tf", difficulty: "medium", q: "Underlining key words and numbers in a problem helps you focus on what is required.", answer: true, explanation: "Active reading reduces misinterpretation of the question." },
            { type: "short", difficulty: "medium", q: "Why is it important to re-read the question after solving it?", answer: "To confirm you answered what was asked — you may have found the right intermediate value but not the final answer required.", explanation: "Students often solve for x when the question asks for 2x or x + 5." },
            { type: "mcq", difficulty: "hard", q: "Which approach best handles an unfamiliar problem type?", options: ["Break it into smaller parts and apply known methods", "Skip it entirely", "Write the formula without understanding", "Copy the worked example exactly"], answer: 0, explanation: "Decomposition: identify known sub-problems and link them." },
            { type: "tf", difficulty: "hard", q: "Leaving no working and writing only an answer risks losing all marks if the answer is wrong.", answer: true, explanation: "Method marks require evidence of approach." },
            { type: "short", difficulty: "hard", q: "A student solves 3x + 7 = 22 and gets x = 5. Explain how they can verify this.", answer: "Substitute: 3(5) + 7 = 15 + 7 = 22. This matches the right-hand side, confirming x = 5.", explanation: "Checking by substitution is a key verification strategy." },
            { type: "mcq", difficulty: "hard", q: "Time management during a test means:", options: ["spending appropriate time per question based on marks available", "spending equal time on every question", "finishing as fast as possible regardless of accuracy", "spending all time on the hardest question"], answer: 0, explanation: "Allocate time proportional to mark value, leaving time to check." }
          ] },
        { text: "Plan and carry out a final data / modelling project.",
          resources: [
            { type: "interactive", title: "Statistical projects", provider: "Khan Academy", url: "https://www.khanacademy.org/math/statistics-probability", note: "The data-handling cycle." },
            { type: "interactive", title: "Data handling", provider: "Math is Fun", url: "https://www.mathsisfun.com/data/index.html", note: "Collecting and presenting data." }
          ],
          quiz: [
            { type: "short", difficulty: "hard", q: "Outline the steps of a data project, from question to conclusion.", answer: "Pose a clear question; collect/sample data fairly; organise and display it (tables and graphs); analyse it (averages, correlation); then draw and justify a conclusion, noting limitations.", explanation: "This is the data-handling cycle." },
            { type: "tf", difficulty: "easy", q: "A good data project states a clear question and supports its conclusion with evidence.", answer: true, explanation: "Evidence-based conclusions are the goal of a data project." },
            { type: "mcq", difficulty: "easy", q: "The first step in a data project is:", options: ["state a clear question or hypothesis", "draw a graph", "calculate the mean", "collect data immediately"], answer: 0, explanation: "A clear research question guides all subsequent steps." },
            { type: "mcq", difficulty: "easy", q: "Which data display is most suitable for showing the relationship between two variables?", options: ["scatter plot", "bar chart", "pie chart", "tally chart"], answer: 0, explanation: "Scatter plots show bivariate (two-variable) data." },
            { type: "tf", difficulty: "medium", q: "A larger, randomly selected sample leads to more reliable conclusions in a data project.", answer: true, explanation: "It better represents the population, reducing sampling error." },
            { type: "mcq", difficulty: "medium", q: "In the data-handling cycle, after collecting data the next step is:", options: ["organise and represent the data", "write the conclusion", "state the question", "collect more data"], answer: 0, explanation: "Raw data must be sorted and displayed before analysis." },
            { type: "mcq", difficulty: "medium", q: "A data project finds a positive correlation between hours of study and test scores. The conclusion should state:", options: ["there is a positive correlation, though this may not be causal", "studying causes higher scores with certainty", "the data is unreliable", "the trend is negative"], answer: 0, explanation: "Correlation does not confirm causation." },
            { type: "short", difficulty: "medium", q: "What is a 'limitation' in a data project, and give one example?", answer: "A limitation is a factor that reduces the reliability or scope of the findings. Example: the sample was too small, or the sample was biased (e.g. only surveying one class).", explanation: "Acknowledging limitations shows critical thinking." },
            { type: "mcq", difficulty: "hard", q: "A student uses 5 data points to draw a line of best fit and makes predictions. The main concern is:", options: ["the sample is too small to be reliable", "the line cannot be drawn with 5 points", "predictions require a bar chart", "no concern — 5 points is plenty"], answer: 0, explanation: "A small sample increases uncertainty in the line of best fit and predictions." },
            { type: "short", difficulty: "hard", q: "You collect data on shoe sizes and reading ages of 30 seven-year-olds and find a strong positive correlation. Explain why this does not mean shoe size causes reading ability.", answer: "Both shoe size and reading ability increase with age. Age is the hidden (lurking) variable that causes both, not shoe size causing reading.", explanation: "A lurking variable (age) explains the correlation without a causal link." },
            { type: "tf", difficulty: "hard", q: "A conclusion in a data project should refer back to the original question and be supported by specific statistics.", answer: true, explanation: "The conclusion must directly answer the question and cite evidence from the data." },
            { type: "mcq", difficulty: "hard", q: "Primary data is:", options: ["data you collect yourself for the project", "data from a textbook or online database", "data collected by someone else", "published government statistics"], answer: 0, explanation: "Primary data is original data collected firsthand by the investigator." }
          ] }
      ]
    }
  ]
});
