/* English — Grade 8: Mastery & Extension
   PER-OBJECTIVE schema: each objective is { text, resources[], quiz[] }.
   FULL depth: 12–15 questions per objective, easy→hard, mixed types
   (mcq / tf / short / long / match), each with an explanation. */
window.CURRICULUM_ENGLISH.grades.push({
  id: "grade-8",
  name: "Grade 8",
  tagline: "Mastery & Extension",
  color: "#e11d48",
  blurb: "Big-idea units (conflict, justice, speculation), comparative and deep literary analysis, non-literary and media texts, argument with counterargument, advanced grammar and style, speaking and discussion, and a research capstone.",
  topics: [

    /* ============================================================ */
    {
      id: "e8-themes",
      title: "Core Themes & Units",
      subject: "Themes",
      icon: "🌍",
      summary: "Big-idea units framing the year: common humanity, consequences of conflict, the future and speculation, war and society, social control, and justice, fairness and human behaviour.",
      objectives: [

        {
          text: "Explore 'common humanity' as a unifying theme across texts.",
          resources: [
            { type: "reading", title: "Theme & human experience", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Texts exploring what unites people." },
            { type: "reading", title: "Universal themes", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Ideas that cross cultures and eras." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A 'universal theme' is one that:", options: ["only appears in one culture", "speaks to human experiences across cultures and times", "is about grammar", "is always about war"], answer: 1, explanation: "Universal themes resonate across cultures and eras." },
            { type: "mcq", difficulty: "easy", q: "'Common humanity' refers to:", options: ["differences that divide people", "the experiences, needs and feelings shared by all people", "a single country", "a grammar rule"], answer: 1, explanation: "Common humanity is what all people share, despite differences." },
            { type: "tf", difficulty: "easy", q: "Texts from very different cultures can share the same universal theme.", answer: true, explanation: "Universal themes cross cultural boundaries." },
            { type: "mcq", difficulty: "easy", q: "Which is an example of a universal theme?", options: ["the colour of a book", "the longing to belong", "the page count", "the font choice"], answer: 1, explanation: "The longing to belong is shared across humanity — a universal theme." },
            { type: "tf", difficulty: "medium", q: "Reading about people unlike ourselves can reveal how much we have in common.", answer: true, explanation: "Cross-cultural reading often highlights shared humanity." },
            { type: "short", difficulty: "medium", q: "Give one example of a theme about 'common humanity' that many texts share.", answer: "Examples: the longing for belonging, the pain of loss, the desire for freedom or dignity, love and family, the search for hope in hardship, or empathy for strangers. (Any shared human experience.)", explanation: "Common-humanity themes capture experiences all people share." },
            { type: "mcq", difficulty: "medium", q: "How can literature build empathy through common humanity?", options: ["by hiding emotions", "by helping readers recognise their own feelings in very different characters", "by avoiding people", "by listing facts"], answer: 1, explanation: "Seeing shared feelings in others builds empathy." },
            { type: "tf", difficulty: "medium", q: "A theme of common humanity can appear in a war story, a love poem, and a science-fiction novel alike.", answer: true, explanation: "Shared human experience can surface in any genre." },
            { type: "short", difficulty: "medium", q: "Why might an author from one culture write a story that readers worldwide connect with?", answer: "Because they explore universal human experiences — love, loss, hope, fear, belonging — that all people understand, regardless of culture. Specific cultural details surround a feeling that is shared, so readers everywhere relate to it.", explanation: "Universal feelings beneath specific details let readers everywhere connect." },
            { type: "mcq", difficulty: "hard", q: "Two stories — one set in ancient times, one in the future — both show a parent sacrificing for a child. This shared idea is best called a:", options: ["setting", "universal theme (common humanity)", "plot hole", "genre"], answer: 1, explanation: "A shared deep idea across very different texts is a universal theme." },
            { type: "short", difficulty: "hard", q: "Explain how recognising common humanity in texts can affect how we treat real people.", answer: "Recognising that others share our feelings, hopes and struggles builds empathy and understanding. This can make us more compassionate, less quick to judge, and more willing to treat people from different backgrounds with fairness and respect in real life.", explanation: "Seeing shared humanity in texts can foster real-world empathy and fairness." },
            { type: "long", difficulty: "hard", q: "Choose two texts (or a text and a real experience) that explore a shared human experience. Name the common theme and explain how each shows it despite their differences.", answer: "Answers vary. A strong response identifies a universal theme (e.g. resilience, belonging, loss) and explains how two different texts/experiences each express it, showing that the shared human experience appears despite differences in setting, culture or genre.", explanation: "A shared theme + how two different texts each express it." }
          ]
        },

        {
          text: "Examine the consequences of conflict and war on society.",
          resources: [
            { type: "reading", title: "War & conflict texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Literature on the human cost of conflict." },
            { type: "reading", title: "Reading about history & conflict", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Analysing texts on war and society." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "War literature often explores the human cost and lasting consequences of conflict, not just battles.", answer: true, explanation: "Such texts examine loss, trauma and social change." },
            { type: "mcq", difficulty: "easy", q: "A 'consequence' of conflict is:", options: ["a cause of the conflict", "a result or effect that follows from it", "the title of a poem", "a grammar rule"], answer: 1, explanation: "A consequence is an effect or result." },
            { type: "mcq", difficulty: "easy", q: "Which is a consequence of war often shown in literature?", options: ["a cheerful holiday", "loss, grief and displacement", "a maths lesson", "a recipe"], answer: 1, explanation: "Loss, grief and displacement are common consequences depicted." },
            { type: "tf", difficulty: "easy", q: "War can affect ordinary civilians, not only soldiers.", answer: true, explanation: "Conflict affects whole societies, including civilians." },
            { type: "short", difficulty: "medium", q: "Name one way conflict or war can affect a society as shown in literature.", answer: "Any of: loss of life and grief, displacement of people, broken families, trauma, economic hardship, social change, questioning of authority, or loss of innocence.", explanation: "Literature shows war's wide human and social consequences." },
            { type: "mcq", difficulty: "medium", q: "War poetry written by soldiers often aims to:", options: ["glorify war as glamorous", "convey the real, often harsh experience and cost of war", "advertise products", "teach spelling"], answer: 1, explanation: "Much war poetry conveys war's grim reality and cost." },
            { type: "tf", difficulty: "medium", q: "Literature about war can challenge as well as support a society's official view of a conflict.", answer: true, explanation: "Writers may critique or question the way a war is portrayed." },
            { type: "short", difficulty: "medium", q: "Why might a writer focus on one family's experience to show the consequences of a large war?", answer: "Focusing on one family makes the vast, abstract consequences of war personal and emotional. Readers connect with individuals, so the family's loss or struggle helps them feel the human cost in a way that statistics about millions cannot.", explanation: "A single family puts a human, emotional face on war's huge consequences." },
            { type: "tf", difficulty: "medium", q: "The consequences of a conflict can continue long after the fighting ends.", answer: true, explanation: "Trauma, rebuilding and social change persist for years." },
            { type: "mcq", difficulty: "hard", q: "A poem describes empty homes and silent streets after a war. This mainly conveys war's:", options: ["excitement", "lasting human and social cost (loss, emptiness)", "humour", "profit"], answer: 1, explanation: "Empty homes and silent streets evoke loss and the lasting cost." },
            { type: "short", difficulty: "hard", q: "How can studying the consequences of past conflicts in literature help readers today?", answer: "It helps readers understand the real human cost of war, build empathy for those affected, learn from history, and think critically about conflict and peace — encouraging more thoughtful attitudes toward present and future conflicts.", explanation: "Studying war's consequences builds empathy and informs how we view conflict today." },
            { type: "long", difficulty: "hard", q: "Choose a war or conflict text you've encountered. Explain two consequences of the conflict it shows and how the author makes those consequences feel real.", answer: "Answers vary. A strong response names a text, identifies two genuine consequences of the conflict it portrays (loss, trauma, displacement, social change, etc.), and explains the techniques the author uses (imagery, personal stories, tone) to make those consequences vivid and affecting.", explanation: "Two real consequences from a text + how the author makes them feel real." }
          ]
        },

        {
          text: "Analyse the future and speculation (science fiction, dystopia).",
          resources: [
            { type: "reading", title: "Science fiction & dystopia", provider: "LiteraryDevices", url: "https://literarydevices.net/genre/", note: "Speculative genres and their purposes." },
            { type: "reading", title: "Speculative texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Stories imagining possible futures." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Speculative fiction (sci-fi, dystopia) often uses imagined futures to:", options: ["avoid all real-world ideas", "comment on present-day issues and warn or question", "teach maths", "report the news"], answer: 1, explanation: "Speculative fiction reflects on today through 'what if' futures." },
            { type: "tf", difficulty: "easy", q: "A dystopia imagines a flawed or oppressive society, often as a warning.", answer: true, explanation: "Dystopias are cautionary imagined societies." },
            { type: "mcq", difficulty: "easy", q: "Science fiction often explores the effects of:", options: ["imagined science and technology", "spelling rules", "cooking", "ancient history only"], answer: 0, explanation: "Sci-fi imagines science/technology and its consequences." },
            { type: "mcq", difficulty: "easy", q: "'Speculation' in fiction means:", options: ["reporting only facts", "imagining 'what if' possibilities", "copying the news", "describing the past exactly"], answer: 1, explanation: "Speculative fiction asks 'what if?' about possible realities." },
            { type: "tf", difficulty: "medium", q: "A good science-fiction idea is often an exaggeration of a real present-day trend.", answer: true, explanation: "Sci-fi extrapolates current trends into the future." },
            { type: "short", difficulty: "medium", q: "How can a story set in the future actually be about the present?", answer: "By imagining where current trends, fears or technologies might lead, a future story comments on today — warning about or questioning present-day choices. The future setting is a mirror or magnifier for present issues.", explanation: "Future settings extrapolate and comment on present-day trends and concerns." },
            { type: "mcq", difficulty: "medium", q: "A novel imagines a world where screens control everyone's thoughts. This is most likely:", options: ["historical fiction", "dystopian science fiction commenting on technology", "a biography", "a news report"], answer: 1, explanation: "An oppressive tech-controlled future is dystopian sci-fi commenting on technology." },
            { type: "tf", difficulty: "medium", q: "Speculative fiction can explore questions of ethics, like 'should we do something just because we can?'", answer: true, explanation: "Sci-fi often raises ethical questions about technology and power." },
            { type: "match", difficulty: "medium", q: "Match each speculative element to its focus.", pairs: [["Science fiction", "Imagined science and technology"], ["Dystopia", "A flawed, controlled society"], ["Utopia", "An imagined ideal society"], ["Speculation", "'What if' possibilities"]], explanation: "These elements all imagine alternatives to the present." },
            { type: "mcq", difficulty: "hard", q: "Why is exaggeration a useful tool in speculative fiction?", options: ["it confuses readers", "it magnifies a real concern so readers notice and reflect on it", "it removes all meaning", "it is required by grammar"], answer: 1, explanation: "Exaggerating a trend makes its dangers or implications vivid and clear." },
            { type: "short", difficulty: "hard", q: "Explain the difference between a utopia and a dystopia, and why dystopias are more common in fiction.", answer: "A utopia is an imagined perfect society; a dystopia is an imagined deeply flawed or oppressive one. Dystopias are more common because conflict and danger create tension and drama, and a flawed society lets authors warn and critique — a perfect world offers little story conflict.", explanation: "Utopia = ideal; dystopia = flawed. Dystopias offer conflict and warnings, which drive stories." },
            { type: "long", difficulty: "hard", q: "Invent a brief 'what if' premise for a speculative story and explain what real present-day issue it would comment on.", answer: "Answers vary. A strong response gives a clear speculative premise (a 'what if' about technology, society or the future) and explains the real present-day issue or trend it reflects or warns about, showing that speculation comments on the present.", explanation: "A 'what if' premise + the real present-day issue it comments on." }
          ]
        },

        {
          text: "Explore social control as a theme.",
          resources: [
            { type: "reading", title: "Power & control in texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "How texts depict control of people." },
            { type: "reading", title: "Theme analysis", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Tracing a theme through a text." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "In dystopian fiction, 'social control' often refers to how those in power:", options: ["help everyone equally", "restrict freedom and shape what people think or do", "tell jokes", "ignore the citizens"], answer: 1, explanation: "Social control = limiting freedom and shaping behaviour/thought." },
            { type: "short", difficulty: "medium", q: "Name one method of social control an author might depict.", answer: "Any of: surveillance/monitoring, censorship, propaganda, fear and punishment, controlling information or language, rationing, or rewriting history.", explanation: "Surveillance, propaganda, censorship and fear are common control methods." },
            { type: "mcq", difficulty: "easy", q: "'Surveillance' as a tool of social control means:", options: ["watching and monitoring people", "feeding people", "teaching art", "building parks"], answer: 0, explanation: "Surveillance is watching/monitoring to control behaviour." },
            { type: "mcq", difficulty: "easy", q: "'Propaganda' is:", options: ["balanced, neutral information", "biased information spread to influence people's beliefs", "a type of poem", "a maths method"], answer: 1, explanation: "Propaganda is biased messaging used to shape opinion." },
            { type: "tf", difficulty: "medium", q: "Controlling the information people receive is a powerful form of social control.", answer: true, explanation: "Whoever controls information can shape beliefs and behaviour." },
            { type: "mcq", difficulty: "medium", q: "Why might a controlling society limit or change language (e.g. banning certain words)?", options: ["to help creativity", "because limiting language can limit the thoughts people can express", "for fun", "to improve spelling"], answer: 1, explanation: "Restricting language can restrict the ideas people are able to think and share." },
            { type: "tf", difficulty: "medium", q: "Fear of punishment can make people control their own behaviour, helping those in power.", answer: true, explanation: "Fear leads to self-censorship and obedience." },
            { type: "short", difficulty: "medium", q: "How does a dystopian author often use a single rebellious character?", answer: "The rebel highlights the system's control by resisting it. Through their eyes the reader sees how the society works, questions it, and feels the tension between freedom and control — making the theme of social control clear.", explanation: "A rebel exposes and questions the controlling system, dramatising the theme." },
            { type: "match", difficulty: "medium", q: "Match each control method to its description.", pairs: [["Censorship", "Banning or hiding information"], ["Propaganda", "Spreading biased messages"], ["Surveillance", "Watching/monitoring people"], ["Fear", "Using threats to ensure obedience"]], explanation: "These are common methods of social control." },
            { type: "mcq", difficulty: "hard", q: "A society where cameras watch every street and citizens are afraid to speak freely shows social control through:", options: ["kindness", "surveillance and fear", "humour", "education"], answer: 1, explanation: "Constant watching plus fear of speaking are surveillance and fear-based control." },
            { type: "short", difficulty: "hard", q: "Why do authors warn about social control in fiction?", answer: "To make readers value and protect their own freedoms, to expose how power can be misused, and to encourage them to question authority and resist manipulation. Fiction lets readers see the dangers of unchecked control safely and reflect on their own society.", explanation: "Such warnings encourage readers to value freedom and question misuse of power." },
            { type: "long", difficulty: "hard", q: "Choose a dystopian text (or imagine one). Identify two methods of social control it shows and explain their effect on the people in that society.", answer: "Answers vary. A strong response names a text (or invents a clear scenario), identifies two genuine methods of social control (surveillance, propaganda, censorship, fear, language control, etc.), and explains how each affects the citizens — their freedom, thoughts or behaviour.", explanation: "Two control methods + their effects on the society's people." }
          ]
        },

        {
          text: "Examine justice, fairness and human behaviour.",
          resources: [
            { type: "reading", title: "Justice-themed texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Texts about fairness and morality." },
            { type: "reading", title: "Analysing big ideas", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Exploring moral questions in literature." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Many texts use a character's choices to explore questions of justice and fairness.", answer: true, explanation: "Moral dilemmas reveal themes of justice and fairness." },
            { type: "mcq", difficulty: "easy", q: "'Justice' in a story usually concerns:", options: ["fairness and what is right or deserved", "the weather", "spelling", "page numbers"], answer: 0, explanation: "Justice is about fairness and what people deserve." },
            { type: "mcq", difficulty: "easy", q: "A 'moral dilemma' is:", options: ["an easy choice", "a difficult choice between two values or rights and wrongs", "a grammar rule", "a setting"], answer: 1, explanation: "A moral dilemma forces a hard choice between competing values." },
            { type: "tf", difficulty: "easy", q: "Stories about justice can make readers question whether a law or rule is truly fair.", answer: true, explanation: "Literature often invites readers to weigh fairness." },
            { type: "mcq", difficulty: "medium", q: "A character who breaks an unjust law to help others raises the question of:", options: ["spelling", "whether what is legal is always the same as what is right", "the weather", "page length"], answer: 1, explanation: "It explores the tension between law and morality — a justice theme." },
            { type: "short", difficulty: "medium", q: "Why do authors explore questions of justice and fairness in stories?", answer: "To make readers think about right and wrong, to question how society treats people, to build empathy, and to explore how individuals behave under pressure. Stories let readers wrestle with moral questions safely.", explanation: "Justice themes prompt moral reflection and empathy." },
            { type: "tf", difficulty: "medium", q: "Examining human behaviour in stories can reveal why people act unfairly or cruelly, not just that they do.", answer: true, explanation: "Literature explores motives and causes, deepening understanding." },
            { type: "mcq", difficulty: "medium", q: "A story shows a fair-minded judge and a corrupt official as opposites. This contrast helps explore:", options: ["spelling", "the theme of justice through comparison", "the weather", "the font"], answer: 1, explanation: "Contrasting characters sharpen the exploration of justice." },
            { type: "short", difficulty: "medium", q: "What is the difference between what is 'legal' and what is 'just'?", answer: "'Legal' means allowed by the law; 'just' means morally fair or right. Usually they overlap, but a law can be unjust (unfair), and a just action can sometimes be against the law. Texts often explore the gap between the two.", explanation: "Legal = lawful; just = morally fair — and the two don't always match." },
            { type: "tf", difficulty: "medium", q: "How a character behaves under pressure often reveals their true values.", answer: true, explanation: "Pressure tests and exposes a character's real character." },
            { type: "mcq", difficulty: "hard", q: "A novel ends with a wrongdoer unpunished and a good character suffering. This 'unjust' ending most likely aims to:", options: ["confuse readers for no reason", "provoke readers to think critically about real-world fairness", "teach spelling", "fill pages"], answer: 1, explanation: "An unjust ending can deliberately make readers reflect on real injustice." },
            { type: "long", difficulty: "hard", q: "Describe a story (or situation) that explores justice or fairness. Explain the moral question it raises and what it suggests about human behaviour.", answer: "Answers vary. A strong response names a text or situation, clearly states the moral/justice question it raises (e.g. is it right to break an unfair rule?), and reflects on what it reveals about how people behave — their values, choices, or flaws.", explanation: "A justice text + the moral question + an insight into human behaviour." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e8-lit-reading",
      title: "Literary Reading",
      subject: "Reading",
      icon: "📚",
      summary: "Comparative literary analysis, character foils, subtext in drama, symbolism and theme development in advanced texts, genre characteristics, authorial choices (diction, syntax, tone, mood, imagery) and dual narrative.",
      objectives: [

        {
          text: "Carry out comparative literary analysis of two texts.",
          resources: [
            { type: "reading", title: "Comparing texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Paired texts for comparison." },
            { type: "reading", title: "Comparative analysis", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "Structuring a comparison." },
            { type: "book", enrichment: true, title: "How to Read Literature Like a Professor — For Kids", author: "Thomas C. Foster", chapter: "(e.g. 'Is That a Symbol?', 'It's All Political', 'He's Blind for a Reason')", note: "Enrichment read (great for ages 11–13): a fun guide to symbols, theme, irony and the deeper patterns in literature.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A comparative analysis examines:", options: ["only one text", "similarities and differences between two or more texts", "the cover design", "the publisher"], answer: 1, explanation: "Comparison looks at how texts are alike and different." },
            { type: "tf", difficulty: "easy", q: "A Venn diagram can help organise the similarities and differences before writing a comparison.", answer: true, explanation: "Venn diagrams map shared and unique features." },
            { type: "mcq", difficulty: "easy", q: "To 'contrast' two texts means to focus on their:", options: ["similarities", "differences", "page counts", "authors' ages"], answer: 1, explanation: "Contrast = differences; compare = similarities." },
            { type: "mcq", difficulty: "medium", q: "Two common ways to structure a comparison essay are point-by-point and:", options: ["alphabetical", "block (text-by-text)", "random", "backwards"], answer: 1, explanation: "Block and point-by-point are the two standard structures." },
            { type: "tf", difficulty: "medium", q: "A strong comparison does more than list features — it explains what the similarities or differences reveal.", answer: true, explanation: "Analysis interprets the meaning of the comparison." },
            { type: "short", difficulty: "medium", q: "When comparing two texts, name two aspects you could compare.", answer: "Any two of: theme, characters, setting, tone/mood, point of view, style/language, structure, the author's message, or how each treats a shared topic.", explanation: "Theme, character, setting, tone, style and message are all comparable aspects." },
            { type: "mcq", difficulty: "medium", q: "A good comparative thesis would:", options: ["just name the two texts", "make a claim about how the texts relate (e.g. both explore X, but differ in how)", "summarise one text only", "list page numbers"], answer: 1, explanation: "A comparative thesis states the relationship and a claim about it." },
            { type: "tf", difficulty: "medium", q: "Comparing two texts on the same theme can reveal how differently authors treat the same idea.", answer: true, explanation: "Comparison highlights different approaches to a shared theme." },
            { type: "short", difficulty: "medium", q: "What is the difference between point-by-point and block structure in a comparison?", answer: "Point-by-point alternates between the two texts for each feature (discussing theme in both, then setting in both, etc.). Block discusses everything about one text first, then everything about the other. Both then draw the comparison together.", explanation: "Point-by-point alternates per feature; block does one text fully, then the other." },
            { type: "mcq", difficulty: "hard", q: "Two poems both use the sea as a symbol, but one for freedom and one for danger. The best analysis would:", options: ["just say both mention the sea", "explore how and why each uses the sea differently and what it reveals", "ignore the difference", "count the lines"], answer: 1, explanation: "Strong comparison interprets the meaning of the differing uses." },
            { type: "short", difficulty: "hard", q: "Why is it important to use a clear structure (point-by-point or block) in a comparative analysis?", answer: "A clear structure keeps the comparison organised and easy to follow, ensures both texts get balanced treatment, and helps the reader see the similarities and differences clearly rather than getting lost in a jumble of unconnected observations.", explanation: "Structure keeps the comparison organised, balanced and clear." },
            { type: "long", difficulty: "hard", q: "Choose two texts (poems, stories, or a text and a film). Identify one similarity and one difference, and explain what the comparison reveals about each.", answer: "Answers vary. A strong response names two texts, identifies a genuine similarity and a genuine difference (in theme, technique, tone, etc.), and explains what the comparison reveals — not just listing features but interpreting their significance.", explanation: "A real similarity + a real difference + what the comparison reveals." }
          ]
        },

        {
          text: "Identify character foils.",
          resources: [
            { type: "reading", title: "Character foils", provider: "LiteraryDevices", url: "https://literarydevices.net/foil/", note: "Characters who contrast to highlight traits." },
            { type: "reading", title: "Characterisation", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Analysing contrasting characters." },
            { type: "book", enrichment: true, title: "How to Read Literature Like a Professor — For Kids", author: "Thomas C. Foster", chapter: "(e.g. 'Is That a Symbol?', 'It's All Political', 'He's Blind for a Reason')", note: "Enrichment read (great for ages 11–13): a fun guide to symbols, theme, irony and the deeper patterns in literature.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A 'foil' is a character who:", options: ["is identical to the hero", "contrasts with another character to highlight their qualities", "narrates the story", "never appears"], answer: 1, explanation: "A foil's contrast emphasises another character's traits." },
            { type: "tf", difficulty: "easy", q: "Foils help readers see a main character's traits more clearly through contrast.", answer: true, explanation: "Contrast spotlights key qualities." },
            { type: "mcq", difficulty: "easy", q: "A foil is mainly used for:", options: ["filling pages", "contrast that reveals another character's qualities", "setting the scene", "ending the story"], answer: 1, explanation: "Foils exist to create revealing contrast." },
            { type: "mcq", difficulty: "medium", q: "If one character is reckless and brave, a foil might be:", options: ["equally reckless and brave", "cautious and fearful, highlighting the first by contrast", "exactly the same", "invisible"], answer: 1, explanation: "An opposite character sharpens the first by contrast." },
            { type: "tf", difficulty: "medium", q: "A foil does not have to be a villain — it can be a friend who is simply very different.", answer: true, explanation: "Foils contrast; they aren't necessarily enemies." },
            { type: "short", difficulty: "medium", q: "How does a foil character help develop the protagonist?", answer: "By contrast: the foil's opposite traits make the protagonist's qualities stand out more clearly. Seeing how the two differ in choices, values or behaviour helps readers understand and define the protagonist.", explanation: "Contrast with a foil sharpens and clarifies the protagonist's traits." },
            { type: "mcq", difficulty: "medium", q: "Two friends, one honest and one deceitful, are placed side by side. The deceitful one acts as a foil to:", options: ["the setting", "highlight the honest friend's integrity", "the narrator's age", "the plot's length"], answer: 1, explanation: "The contrast spotlights the honest friend's integrity." },
            { type: "tf", difficulty: "medium", q: "A foil and the character it contrasts with usually share a situation but respond to it differently.", answer: true, explanation: "Similar situations + different responses sharpen the contrast." },
            { type: "match", difficulty: "medium", q: "Match each trait to its likely foil trait.", pairs: [["Brave", "Cowardly"], ["Generous", "Selfish"], ["Calm", "Hot-tempered"], ["Honest", "Deceitful"]], explanation: "A foil typically embodies the opposite trait." },
            { type: "mcq", difficulty: "hard", q: "Why might an author deliberately create a foil rather than just describing the hero's traits?", options: ["to waste space", "because contrast shows traits more vividly than telling, and adds depth", "because foils are required by law", "to confuse readers"], answer: 1, explanation: "Contrast 'shows' traits more powerfully than simply stating them." },
            { type: "short", difficulty: "hard", q: "Explain the difference between a foil and an antagonist.", answer: "An antagonist opposes the protagonist and creates conflict. A foil contrasts with another character to highlight their qualities — the foil may or may not be in conflict with them. A character can be both, but a foil's main job is contrast, not opposition.", explanation: "Antagonist = opposes/creates conflict; foil = contrasts to reveal traits." },
            { type: "long", difficulty: "hard", q: "Choose two characters from a story you know who act as foils. Explain how they contrast and what that contrast reveals.", answer: "Answers vary. A strong response names two characters who contrast, describes their opposing traits or choices, and explains what the contrast reveals about one or both — showing how the foil highlights key qualities.", explanation: "Two contrasting characters + what the foil relationship reveals." }
          ]
        },

        {
          text: "Analyse subtext in drama.",
          resources: [
            { type: "reading", title: "Subtext", provider: "LiteraryDevices", url: "https://literarydevices.net/subtext/", note: "Meaning beneath the lines." },
            { type: "reading", title: "Reading drama", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Plays and scenes to analyse." },
            { type: "book", enrichment: true, title: "How to Read Literature Like a Professor — For Kids", author: "Thomas C. Foster", chapter: "(e.g. 'Is That a Symbol?', 'It's All Political', 'He's Blind for a Reason')", note: "Enrichment read (great for ages 11–13): a fun guide to symbols, theme, irony and the deeper patterns in literature.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "'Subtext' is:", options: ["the literal words spoken", "the underlying meaning beneath what is said", "stage directions only", "the title"], answer: 1, explanation: "Subtext is the implied meaning beneath the dialogue." },
            { type: "tf", difficulty: "medium", q: "In drama, what a character does NOT say can be as revealing as their words.", answer: true, explanation: "Silence, pauses and gaps carry subtext." },
            { type: "mcq", difficulty: "easy", q: "If a character says 'I'm fine' through gritted teeth while clenching their fists, the subtext is likely that they are:", options: ["genuinely fine", "actually angry or upset", "asleep", "hungry"], answer: 1, explanation: "Body language contradicts the words, revealing the real feeling." },
            { type: "tf", difficulty: "easy", q: "Subtext is the meaning 'between the lines', not stated directly.", answer: true, explanation: "Subtext lies beneath the surface words." },
            { type: "mcq", difficulty: "medium", q: "Which can carry subtext in a play?", options: ["only the spoken words", "pauses, tone, body language and what's left unsaid", "the page number", "the cover"], answer: 1, explanation: "Pauses, tone and unsaid things all convey subtext." },
            { type: "short", difficulty: "medium", q: "Why do playwrights often rely on subtext rather than stating feelings directly?", answer: "Because it is more realistic (people rarely say exactly what they feel), it creates tension and depth, and it lets the audience read between the lines — making the drama more engaging and lifelike than blunt statements.", explanation: "Subtext is realistic, creates tension, and engages the audience's interpretation." },
            { type: "tf", difficulty: "medium", q: "Stage directions (e.g. 'she turns away coldly') can guide the audience toward the subtext.", answer: true, explanation: "Directions shape how lines are delivered and hint at hidden meaning." },
            { type: "mcq", difficulty: "medium", q: "Two characters exchange polite words but never make eye contact and keep their distance. The subtext suggests:", options: ["close friendship", "tension or discomfort between them", "they are strangers with no history", "nothing at all"], answer: 1, explanation: "Avoiding eye contact and distance imply hidden tension." },
            { type: "tf", difficulty: "medium", q: "Reading subtext is a form of inference applied to drama.", answer: true, explanation: "You infer hidden meaning from clues, just as in inferential reading." },
            { type: "short", difficulty: "medium", q: "Give an example of a line whose subtext could differ from its literal meaning.", answer: "Answers vary. A good example shows words whose real meaning differs from the surface, e.g. 'Lovely. Just lovely.' said sarcastically (literal: praise; subtext: frustration), or 'Do whatever you want' said coldly (subtext: I'm hurt/angry).", explanation: "Tone and context can flip a line's literal meaning — that gap is the subtext." },
            { type: "mcq", difficulty: "hard", q: "An actor performing subtext well would:", options: ["read lines flatly with no expression", "use tone, pauses and body language to convey the hidden meaning", "change the script", "ignore the other actors"], answer: 1, explanation: "Delivery (tone, pause, gesture) conveys the subtext beneath the words." },
            { type: "long", difficulty: "hard", q: "Write a short two-line exchange between characters where the subtext (real meaning) differs from the literal words, then explain the subtext.", answer: "Answers vary. A strong response gives a brief exchange whose literal words mask a different real meaning (tension, hurt, sarcasm, hidden affection, etc.) and clearly explains the subtext beneath the lines.", explanation: "A two-line exchange with hidden meaning + a clear explanation of the subtext." }
          ]
        },

        {
          text: "Trace theme development and symbolism in advanced texts.",
          resources: [
            { type: "reading", title: "Symbolism", provider: "LiteraryDevices", url: "https://literarydevices.net/symbolism/", note: "How symbols deepen theme." },
            { type: "reading", title: "Theme development", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Following a theme across a text." },
            { type: "book", enrichment: true, title: "How to Read Literature Like a Professor — For Kids", author: "Thomas C. Foster", chapter: "(e.g. 'Is That a Symbol?', 'It's All Political', 'He's Blind for a Reason')", note: "Enrichment read (great for ages 11–13): a fun guide to symbols, theme, irony and the deeper patterns in literature.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "How does a symbol typically support a text's theme?", options: ["by being random", "by standing for a larger idea that connects to the message", "by ending the story", "by listing facts"], answer: 1, explanation: "Symbols represent ideas that reinforce the theme." },
            { type: "short", difficulty: "medium", q: "What does 'theme development' mean?", answer: "It means how a theme is introduced, built up and deepened across a text through events, characters, symbols and conflicts — not stated once but developed and explored as the work progresses.", explanation: "Theme development = how the message is built and deepened over the text." },
            { type: "mcq", difficulty: "easy", q: "A symbol is:", options: ["a punctuation mark", "an object, image or action that stands for a bigger idea", "the title", "the narrator"], answer: 1, explanation: "Symbols represent something beyond their literal meaning." },
            { type: "tf", difficulty: "easy", q: "A recurring symbol that appears throughout a text can help develop its theme.", answer: true, explanation: "Recurring symbols reinforce and develop the theme." },
            { type: "mcq", difficulty: "medium", q: "A theme is usually developed through:", options: ["the title alone", "events, characters, conflicts and symbols across the whole text", "page numbers", "the font"], answer: 1, explanation: "Many elements work together over a text to develop a theme." },
            { type: "tf", difficulty: "medium", q: "An author may deepen a theme by showing it from more than one character's perspective.", answer: true, explanation: "Multiple perspectives develop and complicate a theme." },
            { type: "short", difficulty: "medium", q: "How can a symbol change in meaning as a text develops?", answer: "A symbol can take on new or deeper meaning as the story unfolds — e.g. an object that first means safety might come to represent loss. Tracking how its meaning shifts shows how the theme develops across the text.", explanation: "A symbol's evolving meaning can mirror the theme's development." },
            { type: "mcq", difficulty: "medium", q: "Tracing theme development means following how the theme:", options: ["is stated once at the start", "is introduced, built and deepened throughout the text", "is hidden completely", "appears only in the title"], answer: 1, explanation: "Theme development is traced across the whole text." },
            { type: "tf", difficulty: "medium", q: "A strong analysis of theme uses specific evidence from different points in the text, not just one quote.", answer: true, explanation: "Theme development is shown by evidence across the text." },
            { type: "mcq", difficulty: "hard", q: "A novel repeatedly shows light and darkness as a character moves from despair to hope. This pattern most likely:", options: ["is meaningless", "uses symbolism (light/dark) to develop a theme of hope overcoming despair", "is a setting only", "is a grammar choice"], answer: 1, explanation: "The recurring light/dark symbol develops the hope-vs-despair theme." },
            { type: "short", difficulty: "hard", q: "Explain how symbolism and theme work together in a text.", answer: "A symbol stands for an idea connected to the theme. As the symbol recurs and develops, it repeatedly points the reader toward the theme, reinforcing and deepening the message. Symbolism is one of the main tools authors use to develop theme without stating it directly.", explanation: "Symbols embody and repeatedly signal the theme, helping develop it." },
            { type: "long", difficulty: "hard", q: "Choose a text you know. Identify a theme and a symbol, and explain how the symbol helps develop that theme across the text.", answer: "Answers vary. A strong response names a theme and a relevant symbol, and traces how the symbol appears and (ideally) evolves across the text to reinforce or deepen the theme — using specific moments as evidence.", explanation: "A theme + a symbol + how the symbol develops the theme across the text." }
          ]
        },

        {
          text: "Recognise genre characteristics (dystopia, science fiction, war poetry, drama).",
          resources: [
            { type: "reading", title: "Literary genres", provider: "LiteraryDevices", url: "https://literarydevices.net/genre/", note: "Defining features of genres." },
            { type: "reading", title: "Genre study", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Texts across multiple genres." },
            { type: "book", enrichment: true, title: "How to Read Literature Like a Professor — For Kids", author: "Thomas C. Foster", chapter: "(e.g. 'Is That a Symbol?', 'It's All Political', 'He's Blind for a Reason')", note: "Enrichment read (great for ages 11–13): a fun guide to symbols, theme, irony and the deeper patterns in literature.", url: "" }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each genre to a key feature.", pairs: [["Dystopia", "Oppressive imagined society"], ["Science fiction", "Imagined science/technology and futures"], ["War poetry", "Verse exploring the experience of war"], ["Drama", "A story told through dialogue and performance"]], explanation: "Each genre has recognisable defining features." },
            { type: "tf", difficulty: "easy", q: "Knowing a text's genre helps you predict its conventions and purpose.", answer: true, explanation: "Genre sets up expectations for a text." },
            { type: "mcq", difficulty: "easy", q: "Drama is mainly written to be:", options: ["read silently only", "performed, told through dialogue and action", "a list of facts", "a recipe"], answer: 1, explanation: "Drama is written for performance, driven by dialogue and action." },
            { type: "mcq", difficulty: "easy", q: "War poetry typically explores:", options: ["cooking", "the experiences and emotions of war", "maths", "advertising"], answer: 1, explanation: "War poetry conveys the experience and feeling of war." },
            { type: "tf", difficulty: "medium", q: "A single text can blend genres (e.g. dystopian science fiction).", answer: true, explanation: "Genres often combine, like dystopian sci-fi." },
            { type: "short", difficulty: "medium", q: "Name two features that help you recognise a piece of drama.", answer: "Any two of: it is written as dialogue with character names before lines; it includes stage directions; it is divided into acts/scenes; it is meant to be performed.", explanation: "Dialogue format, stage directions, acts/scenes and performance intent signal drama." },
            { type: "mcq", difficulty: "medium", q: "A text with an oppressive government, surveillance and a rebellious hero is most likely:", options: ["a romance", "dystopian fiction", "a recipe", "a news report"], answer: 1, explanation: "These conventions are hallmarks of dystopia." },
            { type: "tf", difficulty: "medium", q: "Recognising genre conventions can help you understand what an author is doing (or deliberately breaking).", answer: true, explanation: "Knowing conventions helps you spot when they're followed or subverted." },
            { type: "mcq", difficulty: "medium", q: "Which feature most clearly signals science fiction rather than historical fiction?", options: ["a real past setting", "imagined future technology or scientific 'what ifs'", "letters and diaries", "no characters"], answer: 1, explanation: "Imagined future tech/science marks science fiction." },
            { type: "short", difficulty: "medium", q: "Why might an author deliberately break a genre's conventions?", answer: "To surprise readers, make a point, subvert expectations, or create something fresh. Breaking conventions (e.g. a dystopia with a hopeful ending) can highlight themes and make the text stand out.", explanation: "Subverting conventions surprises readers and can emphasise theme." },
            { type: "mcq", difficulty: "hard", q: "A poem uses trench imagery, gas, and the voices of soldiers to convey suffering. Its genre and purpose are best described as:", options: ["a cheerful nursery rhyme", "war poetry conveying the harsh reality of war", "a science textbook", "an advertisement"], answer: 1, explanation: "Trench/gas imagery and soldiers' voices convey war's reality — war poetry." },
            { type: "long", difficulty: "hard", q: "Choose a genre (dystopia, sci-fi, war poetry, or drama). List two of its conventions and explain how a writer uses them to achieve the genre's purpose.", answer: "Answers vary. A strong response names a genre, identifies two genuine conventions, and explains how a writer uses them to achieve the genre's typical purpose (e.g. dystopian surveillance to warn about control; war imagery to convey suffering).", explanation: "Two conventions of a chosen genre + how they serve the genre's purpose." }
          ]
        },

        {
          text: "Analyse authorial choices: diction, syntax, tone, mood and imagery.",
          resources: [
            { type: "reading", title: "Diction, tone & syntax", provider: "LiteraryDevices", url: "https://literarydevices.net/diction/", note: "How word and sentence choices create effect." },
            { type: "reading", title: "Author's craft", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Analysing stylistic choices." },
            { type: "book", enrichment: true, title: "How to Read Literature Like a Professor — For Kids", author: "Thomas C. Foster", chapter: "(e.g. 'Is That a Symbol?', 'It's All Political', 'He's Blind for a Reason')", note: "Enrichment read (great for ages 11–13): a fun guide to symbols, theme, irony and the deeper patterns in literature.", url: "" }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each term to its meaning.", pairs: [["Diction", "An author's word choice"], ["Syntax", "How sentences are arranged"], ["Tone", "The author's attitude toward the subject"], ["Imagery", "Descriptive language appealing to the senses"]], explanation: "These are key elements of an author's craft." },
            { type: "mcq", difficulty: "medium", q: "'Tone' refers to:", options: ["the plot", "the author's or speaker's attitude toward the subject", "the page count", "the genre"], answer: 1, explanation: "Tone is the attitude conveyed by the writing." },
            { type: "mcq", difficulty: "easy", q: "'Diction' means an author's:", options: ["handwriting", "choice of words", "page numbers", "title"], answer: 1, explanation: "Diction is word choice." },
            { type: "mcq", difficulty: "easy", q: "'Imagery' is language that:", options: ["lists facts", "appeals to the senses to create pictures in the mind", "asks questions", "counts syllables"], answer: 1, explanation: "Imagery creates sensory pictures." },
            { type: "tf", difficulty: "easy", q: "'Syntax' is about how words and clauses are arranged into sentences.", answer: true, explanation: "Syntax is sentence structure and arrangement." },
            { type: "tf", difficulty: "medium", q: "Short, clipped sentences (syntax) can create tension, while long flowing ones can feel calm.", answer: true, explanation: "Sentence length and rhythm shape effect — a syntax choice." },
            { type: "short", difficulty: "medium", q: "What is the difference between tone and mood?", answer: "Tone is the author's (or speaker's) attitude toward the subject — e.g. sarcastic, serious, admiring. Mood is the feeling or atmosphere the text creates in the reader — e.g. tense, peaceful. Tone is the writer's stance; mood is the reader's experience.", explanation: "Tone = author's attitude; mood = reader's feeling/atmosphere." },
            { type: "mcq", difficulty: "medium", q: "An author choosing 'cramped, grimy, suffocating' over 'small, plain' is making a choice about:", options: ["page numbers", "diction (word choice) to create a negative tone/mood", "spelling only", "genre"], answer: 1, explanation: "Loaded word choices (diction) shape tone and mood." },
            { type: "tf", difficulty: "medium", q: "Analysing authorial choices means asking WHY the author chose particular words, structures and images.", answer: true, explanation: "Analysis focuses on the purpose and effect of the choices." },
            { type: "mcq", difficulty: "medium", q: "Which is an example of imagery?", options: ["The room was nice.", "Golden light spilled across the dusty floor as the scent of jasmine drifted in.", "It happened.", "The end."], answer: 1, explanation: "Sensory detail (sight, smell) creates vivid imagery." },
            { type: "mcq", difficulty: "hard", q: "A passage uses harsh consonants, short sentences and dark word choices to describe a storm. Together these choices create a:", options: ["calm, gentle tone", "tense, threatening tone and mood", "humorous tone", "neutral report"], answer: 1, explanation: "Sound, syntax and diction combine to build a tense, threatening effect." },
            { type: "long", difficulty: "hard", q: "Take a short passage (or write one) and analyse two authorial choices (e.g. diction and imagery), explaining the effect each creates.", answer: "Answers vary. A strong response identifies two specific authorial choices (diction, syntax, tone, imagery) in a passage and explains the effect each has on the reader — connecting the choice to its purpose or impact.", explanation: "Two specific authorial choices + the effect each creates." }
          ]
        },

        {
          text: "Analyse point of view, perspective and dual narrative.",
          resources: [
            { type: "reading", title: "Point of view & perspective", provider: "LiteraryDevices", url: "https://literarydevices.net/point-of-view/", note: "Narrative voice and perspective." },
            { type: "reading", title: "Dual narratives", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Texts told from more than one viewpoint." },
            { type: "book", enrichment: true, title: "How to Read Literature Like a Professor — For Kids", author: "Thomas C. Foster", chapter: "(e.g. 'Is That a Symbol?', 'It's All Political', 'He's Blind for a Reason')", note: "Enrichment read (great for ages 11–13): a fun guide to symbols, theme, irony and the deeper patterns in literature.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A 'dual narrative' tells a story:", options: ["from a single fixed viewpoint", "through two narrators or perspectives", "with no narrator", "only in dialogue"], answer: 1, explanation: "A dual narrative uses two narrative perspectives." },
            { type: "tf", difficulty: "easy", q: "Switching perspectives can show readers an event from more than one side.", answer: true, explanation: "Multiple perspectives reveal different sides of the story." },
            { type: "mcq", difficulty: "easy", q: "'Perspective' in a story refers to:", options: ["the font size", "the particular viewpoint and attitude through which events are seen", "the page count", "the cover art"], answer: 1, explanation: "Perspective is the viewpoint and attitude shaping the telling." },
            { type: "mcq", difficulty: "medium", q: "A first-person narrator's account is limited because they:", options: ["know everything", "can only report what they themselves see, know and feel", "are always lying", "never speak"], answer: 1, explanation: "First-person knowledge is limited to that character." },
            { type: "tf", difficulty: "medium", q: "Two narrators describing the same event may emphasise different details and feelings.", answer: true, explanation: "Each perspective colours the account differently." },
            { type: "short", difficulty: "medium", q: "Why might an author choose to tell a story through two alternating narrators?", answer: "To show an event or relationship from more than one side, to build dramatic irony (the reader knows more than each character), to create suspense, and to deepen understanding by revealing different perspectives, feelings and truths.", explanation: "Dual narration reveals multiple sides, builds irony, and deepens understanding." },
            { type: "mcq", difficulty: "medium", q: "'Dramatic irony' in a dual narrative occurs when:", options: ["the reader knows something a character does not", "the narrator is silent", "there is no plot", "the font changes"], answer: 0, explanation: "Seeing both perspectives, the reader can know more than each character." },
            { type: "tf", difficulty: "medium", q: "Perspective can make a 'villain' seem sympathetic if the story is told from their point of view.", answer: true, explanation: "POV shapes sympathy and understanding." },
            { type: "match", difficulty: "medium", q: "Match each point of view to its description.", pairs: [["First person", "Narrated by 'I', limited to one character"], ["Third-person limited", "'He/she', following one character's thoughts"], ["Third-person omniscient", "'He/she', knowing all characters' thoughts"], ["Dual narrative", "Two alternating perspectives"]], explanation: "These are different ways of handling narrative viewpoint." },
            { type: "mcq", difficulty: "hard", q: "In a dual narrative, two characters give opposite accounts of the same argument. The reader is positioned to:", options: ["trust only the first", "weigh both perspectives and judge for themselves", "ignore both", "stop reading"], answer: 1, explanation: "Seeing both sides invites the reader to evaluate and judge." },
            { type: "short", difficulty: "hard", q: "How does point of view affect a reader's sympathy for a character?", answer: "When a story is told from a character's point of view, readers see their thoughts, reasons and feelings, which usually makes them more sympathetic to that character — even one who would seem unlikeable from outside. POV shapes whose side the reader is drawn to.", explanation: "Access to a character's inner world through POV tends to increase sympathy for them." },
            { type: "long", difficulty: "hard", q: "Describe how an event could be told differently by two narrators in a dual narrative, and explain what the reader gains from hearing both.", answer: "Answers vary. A strong response describes one event told from two perspectives that differ in detail, emphasis or feeling, and explains what the reader gains — a fuller picture, dramatic irony, more sympathy, or the ability to judge between conflicting accounts.", explanation: "Two differing accounts of one event + what the reader gains from both." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e8-nonlit-media",
      title: "Non-Literary & Media Texts",
      subject: "Media & Rhetoric",
      icon: "🎬",
      summary: "Short films, film posters, editorials, speeches and persuasive media; bias detection, rhetorical analysis, ethos/pathos/logos, visual rhetoric, evaluating credibility, and distinguishing argument from persuasion.",
      objectives: [

        {
          text: "Analyse short films and film posters as texts.",
          resources: [
            { type: "reading", title: "Analysing visual & film texts", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Reading film and visual media." },
            { type: "reading", title: "Media analysis", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Questioning media messages." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical devices that make speeches, ads and writing persuasive and memorable.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A film poster persuades viewers mainly through:", options: ["only the title", "images, colour, text and design choices that create an impression", "the running time", "the director's address"], answer: 1, explanation: "Posters use visual design to attract and persuade." },
            { type: "tf", difficulty: "easy", q: "Camera angles, music and lighting in a film all shape how a viewer feels.", answer: true, explanation: "These techniques are part of a film's 'language'." },
            { type: "mcq", difficulty: "easy", q: "A low camera angle looking UP at a character often makes them seem:", options: ["weak and small", "powerful or dominant", "invisible", "funny"], answer: 1, explanation: "Looking up at a character tends to make them seem powerful." },
            { type: "mcq", difficulty: "easy", q: "Dark lighting and tense music in a scene usually create a mood that is:", options: ["cheerful", "suspenseful or frightening", "boring", "neutral"], answer: 1, explanation: "Dark visuals and tense music build suspense or fear." },
            { type: "tf", difficulty: "medium", q: "Everything a viewer sees and hears in a film is a deliberate choice by the filmmakers.", answer: true, explanation: "Film is constructed — shots, sound and design are chosen for effect." },
            { type: "short", difficulty: "medium", q: "Name two design elements a film poster uses to attract its audience.", answer: "Any two of: striking images, colour scheme, the title's font/size, a tagline, images of stars/characters, lighting/mood, and the overall composition or focal point.", explanation: "Imagery, colour, title design, tagline and stars are key poster elements." },
            { type: "mcq", difficulty: "medium", q: "A film poster placing one heroic figure in the centre, lit brightly, signals that they are:", options: ["unimportant", "the central/important character", "the villain only", "a background extra"], answer: 1, explanation: "Central placement and lighting mark importance." },
            { type: "tf", difficulty: "medium", q: "Sound effects and a musical score can tell viewers how to feel before anything is said.", answer: true, explanation: "Music and sound guide emotional response." },
            { type: "short", difficulty: "medium", q: "How is 'reading' a film similar to reading a written text?", answer: "Both communicate meaning through deliberate choices and can be analysed for purpose, audience, techniques and message. In film, camera, lighting, sound and editing are the 'language', just as words and structure are in writing — and both can be interpreted and questioned.", explanation: "Both use deliberate techniques to make meaning, and both can be analysed." },
            { type: "mcq", difficulty: "hard", q: "A short film lingers on a character's face in close-up during a decision. This shot choice mainly serves to:", options: ["waste time", "draw the viewer into the character's emotion at a key moment", "show the setting", "list credits"], answer: 1, explanation: "Close-ups focus the viewer on a character's feelings at important moments." },
            { type: "short", difficulty: "hard", q: "Why should viewers analyse films and posters critically rather than just enjoying them passively?", answer: "Because films and posters are constructed to influence how we feel and what we believe or buy. Analysing them critically reveals the techniques and messages at work, helps us spot persuasion or bias, and lets us form our own judgments rather than simply absorbing the intended effect.", explanation: "Critical viewing reveals constructed messages and guards against passive influence." },
            { type: "long", difficulty: "hard", q: "Choose a film or film poster you know. Identify two techniques it uses (visual or sound) and explain the effect each has on the audience.", answer: "Answers vary. A strong response names a film/poster, identifies two genuine techniques (camera angle, lighting, colour, music, composition, tagline, etc.), and explains the specific effect each has on how the audience feels or what they understand.", explanation: "Two real techniques + the audience effect of each." }
          ]
        },

        {
          text: "Analyse editorials, speeches and persuasive media.",
          resources: [
            { type: "reading", title: "Editorials & opinion", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Reading persuasive non-fiction." },
            { type: "reading", title: "Rhetoric & persuasion", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "How persuasive texts work." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical devices that make speeches, ads and writing persuasive and memorable.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "An editorial is a piece that:", options: ["only reports facts neutrally", "expresses an opinion or argument on an issue", "is a short story", "lists ingredients"], answer: 1, explanation: "Editorials argue a viewpoint on an issue." },
            { type: "tf", difficulty: "medium", q: "Persuasive media often combines facts with emotional appeals.", answer: true, explanation: "Persuasion blends evidence with emotion." },
            { type: "mcq", difficulty: "easy", q: "The purpose of a persuasive speech or editorial is to:", options: ["confuse the audience", "convince readers/listeners to accept a viewpoint or take action", "report neutrally", "tell a bedtime story"], answer: 1, explanation: "Both aim to persuade toward a view or action." },
            { type: "tf", difficulty: "easy", q: "An editorial usually states a clear position on its topic.", answer: true, explanation: "Editorials take a clear stance." },
            { type: "mcq", difficulty: "medium", q: "How does an editorial differ from a straight news report?", options: ["it has no author", "it argues an opinion, while a news report aims to inform neutrally", "it can't use evidence", "it is always shorter"], answer: 1, explanation: "Editorials argue; news reports aim to be neutral." },
            { type: "short", difficulty: "medium", q: "Name two techniques a persuasive editorial might use.", answer: "Any two of: a clear claim/stance, evidence and statistics (logos), emotional appeals (pathos), credibility/expert opinion (ethos), rhetorical questions, repetition, addressing counterarguments, and a call to action.", explanation: "Claims, evidence, appeals, rhetorical devices and calls to action are common." },
            { type: "mcq", difficulty: "medium", q: "A persuasive piece that acknowledges the opposing view and then answers it is using a:", options: ["fallacy", "counterargument and rebuttal", "summary", "headline"], answer: 1, explanation: "Addressing and answering the other side is counterargument + rebuttal." },
            { type: "tf", difficulty: "medium", q: "Recognising a text's persuasive purpose helps you read it more critically.", answer: true, explanation: "Knowing the aim lets you weigh the techniques and bias." },
            { type: "mcq", difficulty: "medium", q: "An editorial's strong, opinionated language is a clue that the reader should:", options: ["accept every claim", "read critically and check the supporting evidence", "stop reading", "ignore the topic"], answer: 1, explanation: "Opinionated language signals the need for critical reading." },
            { type: "short", difficulty: "medium", q: "Why might a speech be more persuasive heard aloud than read silently?", answer: "Because delivery adds power: tone of voice, pace, pauses, emphasis, rhythm and the speaker's presence and emotion all reinforce the words. Techniques like repetition and rhetorical questions land more strongly when performed.", explanation: "Delivery (voice, rhythm, emphasis, presence) amplifies a speech's persuasion." },
            { type: "mcq", difficulty: "hard", q: "An editorial cites statistics, quotes an expert, AND ends with 'we cannot stand by'. This combines:", options: ["only emotion", "logos, ethos and pathos (plus a call to action)", "no appeals", "only logos"], answer: 1, explanation: "Stats (logos), expert (ethos), emotive close + call to action (pathos)." },
            { type: "long", difficulty: "hard", q: "Choose an editorial, speech or advertisement. Identify its main claim and two persuasive techniques, and judge how convincing it is and why.", answer: "Answers vary. A strong response names a persuasive text, states its central claim, identifies two genuine techniques (appeals, evidence, rhetorical devices, etc.), and gives a reasoned judgment of its persuasiveness — considering evidence and any bias.", explanation: "Claim + two techniques + a reasoned judgment of persuasiveness." }
          ]
        },

        {
          text: "Detect bias and evaluate credibility.",
          resources: [
            { type: "reading", title: "Bias detection", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Spotting slant and unreliable sources." },
            { type: "reading", title: "Evaluating credibility", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/index.html", note: "Judging source reliability." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical devices that make speeches, ads and writing persuasive and memorable.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A credible source is one that is:", options: ["anonymous and unsupported", "trustworthy, accurate and from a knowledgeable author", "always the shortest", "full of emotional language"], answer: 1, explanation: "Credibility rests on accuracy, authority and support." },
            { type: "tf", difficulty: "medium", q: "Loaded or one-sided language is a warning sign of bias.", answer: true, explanation: "Slanted wording signals bias." },
            { type: "mcq", difficulty: "easy", q: "'Bias' means:", options: ["a fair, balanced view", "an unfair leaning toward one side", "correct grammar", "a font"], answer: 1, explanation: "Bias is a one-sided slant." },
            { type: "mcq", difficulty: "easy", q: "Which makes a source MORE credible?", options: ["no named author", "a known expert and supporting evidence", "lots of emotional language", "spelling errors"], answer: 1, explanation: "Expertise and evidence boost credibility." },
            { type: "tf", difficulty: "medium", q: "Even a true fact can be used in a biased way if other important facts are left out.", answer: true, explanation: "Selective use of facts creates bias through omission." },
            { type: "short", difficulty: "medium", q: "Name two questions you can ask to check a source's credibility.", answer: "Any two of: Who wrote it and are they qualified? Is it supported by evidence? Is it recent enough? Why was it written (purpose/bias)? Do other reliable sources agree?", explanation: "Author, evidence, currency, purpose and corroboration test credibility." },
            { type: "mcq", difficulty: "medium", q: "A source funded by a company to praise that company's product may have:", options: ["no possible bias", "a bias due to its purpose/funding", "perfect objectivity", "no author"], answer: 1, explanation: "Funding and purpose can bias a source." },
            { type: "tf", difficulty: "medium", q: "Checking whether other reliable sources agree (corroboration) helps judge accuracy.", answer: true, explanation: "Corroboration across sources supports accuracy." },
            { type: "mcq", difficulty: "medium", q: "Which is a sign that an online source may NOT be credible?", options: ["clear author with credentials", "citations to evidence", "no author, no date, and a strong sales pitch", "balanced presentation"], answer: 2, explanation: "No author/date plus a sales pitch are red flags." },
            { type: "short", difficulty: "medium", q: "What is the difference between bias and an outright lie?", answer: "Bias is an unfair slant or one-sided emphasis that may still use true facts; a lie is a false statement. A biased source can mislead through selection and emphasis without saying anything technically false, whereas a lie states something untrue.", explanation: "Bias = unfair slant (often using true facts); a lie = a false statement." },
            { type: "mcq", difficulty: "hard", q: "An article uses only positive quotes about a policy, ignores critics, and is written by the policy's creator. This shows:", options: ["balanced reporting", "bias (one-sidedness and a self-interested author)", "high credibility", "no purpose"], answer: 1, explanation: "One-sided quotes plus a self-interested author indicate bias." },
            { type: "long", difficulty: "hard", q: "Explain how you would judge whether a news article about a controversial topic is biased and credible. List the steps or questions you'd use.", answer: "Answers vary. A strong response describes checking the author and their expertise/motives, whether both sides are presented, whether claims are supported by evidence, the language used (loaded vs neutral), the date, the purpose, and whether other reliable sources agree — then forming a reasoned judgment.", explanation: "A clear set of credibility/bias checks (author, balance, evidence, language, purpose, corroboration) + a judgment." }
          ]
        },

        {
          text: "Conduct rhetorical analysis using ethos, pathos and logos.",
          resources: [
            { type: "reading", title: "Rhetorical strategies", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/rhetorical_strategies.html", note: "Analysing the three appeals." },
            { type: "reading", title: "Appeals in speeches & ads", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Practice analysing rhetoric." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical devices that make speeches, ads and writing persuasive and memorable.", url: "" }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each appeal to an example.", pairs: [["Ethos", "'As a doctor of 20 years, I can say...'"], ["Pathos", "'Imagine your own child going hungry.'"], ["Logos", "'Studies show a 40% drop in accidents.'"]], explanation: "Ethos = credibility, pathos = emotion, logos = logic." },
            { type: "mcq", difficulty: "medium", q: "A rhetorical analysis explains:", options: ["only what a text says", "HOW a text persuades its audience", "the page numbers", "the author's address"], answer: 1, explanation: "Rhetorical analysis focuses on the techniques of persuasion." },
            { type: "mcq", difficulty: "easy", q: "Ethos is an appeal to the speaker's:", options: ["emotions", "credibility and trustworthiness", "statistics", "rhythm"], answer: 1, explanation: "Ethos appeals through credibility/character." },
            { type: "mcq", difficulty: "easy", q: "Pathos appeals to the audience's:", options: ["logic", "emotions", "spelling", "schedule"], answer: 1, explanation: "Pathos targets emotions." },
            { type: "tf", difficulty: "easy", q: "Logos relies on facts, evidence and logical reasoning.", answer: true, explanation: "Logos is the appeal to logic and evidence." },
            { type: "short", difficulty: "medium", q: "In a rhetorical analysis, what do you do AFTER identifying an appeal?", answer: "You explain how it works and what effect it has on the audience — why the speaker uses it and how it helps persuade. Naming the appeal isn't enough; analysis explains its purpose and impact.", explanation: "Identify the appeal, then analyse its purpose and effect." },
            { type: "mcq", difficulty: "medium", q: "A speaker says 'Our research team tested this for five years.' This builds mainly:", options: ["pathos", "ethos and logos (expertise + evidence)", "rhyme", "irony"], answer: 1, explanation: "It establishes credibility (ethos) and points to evidence (logos)." },
            { type: "tf", difficulty: "medium", q: "Over-reliance on pathos with no logos can make an argument feel manipulative.", answer: true, explanation: "Emotion without evidence can seem manipulative." },
            { type: "mcq", difficulty: "medium", q: "'Think of the planet our children will inherit' appeals mainly to:", options: ["logos", "pathos", "ethos", "syntax"], answer: 1, explanation: "It stirs emotion about future generations — pathos." },
            { type: "short", difficulty: "medium", q: "Why is it useful for a persuader to combine all three appeals?", answer: "Different audience members respond to different appeals: evidence (logos) convinces logical thinkers, emotion (pathos) moves feelings, and credibility (ethos) builds trust. Combining all three makes the argument convincing to more people and harder to dismiss.", explanation: "Combining appeals reaches more of the audience and strengthens persuasion." },
            { type: "mcq", difficulty: "hard", q: "To analyse a speech rhetorically, the strongest approach is to:", options: ["summarise the plot", "identify specific appeals/techniques and explain how each persuades the audience", "count the words", "judge the speaker's clothes"], answer: 1, explanation: "Rhetorical analysis links specific techniques to their persuasive effect." },
            { type: "long", difficulty: "hard", q: "Take a short persuasive passage (real or invented). Identify one example each of ethos, pathos and logos in it, and explain the effect of each.", answer: "Answers vary. A strong response identifies a clear ethos example (credibility), a pathos example (emotion), and a logos example (logic/evidence) in the passage, and explains the persuasive effect of each on the audience.", explanation: "One ethos, one pathos and one logos example, each with its effect explained." }
          ]
        },

        {
          text: "Analyse visual rhetoric and audience positioning.",
          resources: [
            { type: "reading", title: "Visual rhetoric", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/visual_rhetoric/visual_rhetoric/index.html", note: "How images persuade." },
            { type: "reading", title: "Reading images", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Analysing visual texts." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical devices that make speeches, ads and writing persuasive and memorable.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "'Visual rhetoric' is the study of how:", options: ["words sound", "images and design persuade or communicate meaning", "books are bound", "fonts are made"], answer: 1, explanation: "Visual rhetoric examines persuasion through images and design." },
            { type: "tf", difficulty: "medium", q: "An image's framing and what it leaves out can position the audience to feel a certain way.", answer: true, explanation: "Composition shapes audience response." },
            { type: "mcq", difficulty: "easy", q: "In images, the colour red is often used to suggest:", options: ["calm and quiet", "danger, passion or urgency", "boredom", "nothing"], answer: 1, explanation: "Red commonly signals danger, passion or urgency." },
            { type: "mcq", difficulty: "easy", q: "Where the eye is drawn first in an image is called the:", options: ["footnote", "focal point", "margin", "caption only"], answer: 1, explanation: "The focal point is the visual centre of attention." },
            { type: "tf", difficulty: "medium", q: "'Audience positioning' is how a text encourages the audience to adopt a particular viewpoint or feeling.", answer: true, explanation: "Positioning shapes how the audience is led to respond." },
            { type: "short", difficulty: "medium", q: "Name two visual choices that can position how an audience feels.", answer: "Any two of: colour, lighting, camera/viewing angle, composition/framing, facial expressions, what is included or cropped out, size/scale, and symbolism.", explanation: "Colour, angle, framing, expression and what's left out all position the viewer." },
            { type: "mcq", difficulty: "medium", q: "A charity image cropped tightly on a child's worried face is positioning viewers to feel:", options: ["amused", "sympathetic and moved to help", "bored", "angry at the child"], answer: 1, explanation: "The framing focuses emotion to evoke sympathy and action." },
            { type: "tf", difficulty: "medium", q: "Leaving something OUT of an image can be as persuasive as what is shown.", answer: true, explanation: "Omission and cropping shape the message." },
            { type: "mcq", difficulty: "medium", q: "Showing a product held by a smiling, admired celebrity positions the audience to:", options: ["distrust the product", "associate the product with success and admiration", "ignore it", "fear it"], answer: 1, explanation: "Association with an admired figure positions the audience positively." },
            { type: "short", difficulty: "medium", q: "How can camera angle position a viewer's attitude toward a subject?", answer: "A low angle looking up can make a subject seem powerful or important; a high angle looking down can make them seem weak or vulnerable; eye level feels equal/relatable. The angle guides how the viewer regards the subject.", explanation: "Angle (low/high/eye-level) shapes whether a subject seems powerful, weak or relatable." },
            { type: "mcq", difficulty: "hard", q: "A poster places a politician above a cheering crowd, lit warmly from behind. This visual rhetoric positions viewers to see them as:", options: ["weak and small", "a heroic, inspiring leader", "an ordinary person", "a villain"], answer: 1, explanation: "Elevation, the adoring crowd and warm backlight construct a heroic image." },
            { type: "long", difficulty: "hard", q: "Choose an advertisement or image. Explain two visual rhetoric choices it makes and how each positions the audience to think or feel.", answer: "Answers vary. A strong response names a visual text and identifies two genuine visual choices (colour, framing, angle, focal point, expression, omission, symbolism), explaining how each positions the audience's attitude or emotion.", explanation: "Two visual rhetoric choices + how each positions the audience." }
          ]
        },

        {
          text: "Distinguish argument from persuasion.",
          resources: [
            { type: "reading", title: "Argument vs persuasion", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html", note: "Reason-based argument vs emotional persuasion." },
            { type: "reading", title: "Building arguments", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Claims, reasons and evidence." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical devices that make speeches, ads and writing persuasive and memorable.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "How does a reasoned ARGUMENT differ from pure PERSUASION?", options: ["They are identical", "Argument relies mainly on logic and evidence; persuasion may lean heavily on emotion and rhetoric", "Argument has no claim", "Persuasion uses only facts"], answer: 1, explanation: "Argument centres on reasoning/evidence; persuasion often foregrounds emotion." },
            { type: "tf", difficulty: "medium", q: "Strong writing can use both reasoned argument and persuasive appeals together.", answer: true, explanation: "The best persuasive texts combine logic with appeal." },
            { type: "mcq", difficulty: "easy", q: "An argument is built around a:", options: ["claim supported by reasons and evidence", "random list", "a single emotion", "no point"], answer: 0, explanation: "An argument has a claim backed by reasons and evidence." },
            { type: "tf", difficulty: "easy", q: "Persuasion can sometimes rely on emotion or pressure rather than solid evidence.", answer: true, explanation: "Persuasion may use emotion or social pressure, not just reason." },
            { type: "mcq", difficulty: "medium", q: "Which is more characteristic of reasoned argument than mere persuasion?", options: ["name-calling", "providing evidence and addressing counterarguments", "scaring the audience", "repeating a slogan"], answer: 1, explanation: "Evidence and engaging counterarguments mark reasoned argument." },
            { type: "short", difficulty: "medium", q: "Give one example of persuasion that is NOT really a reasoned argument.", answer: "Examples: an ad that just shows happy celebrities (emotion/association, no reasons); a slogan repeated to pressure you; 'everyone's buying it' (bandwagon); scaring people without evidence. These persuade without logical argument.", explanation: "Emotional appeals, bandwagon, slogans and fear can persuade without real argument." },
            { type: "tf", difficulty: "medium", q: "Recognising whether a text argues or merely persuades helps you judge how much to trust it.", answer: true, explanation: "Knowing the basis (reason vs emotion) helps you evaluate trustworthiness." },
            { type: "mcq", difficulty: "medium", q: "A text that addresses the opposing view and answers it with evidence is behaving most like a:", options: ["pure emotional persuasion", "reasoned argument", "advertisement slogan", "fallacy"], answer: 1, explanation: "Engaging counterarguments with evidence is reasoned argument." },
            { type: "tf", difficulty: "medium", q: "Emotional appeals are always dishonest.", answer: false, explanation: "Emotion isn't dishonest in itself; problems arise only when it replaces or hides a lack of evidence." },
            { type: "short", difficulty: "medium", q: "Why might a speaker combine reasoned argument WITH emotional persuasion?", answer: "Reasoned argument gives logical, trustworthy support, while emotional appeal motivates the audience to care and act. Combining them makes a case both convincing and moving — sound reasoning that people also feel compelled to follow.", explanation: "Reason convinces the mind; emotion motivates action — together they're most effective." },
            { type: "mcq", difficulty: "hard", q: "An ad claims 'Buy now or regret it forever!' with no evidence. This is mainly:", options: ["a reasoned argument", "emotional persuasion (using fear/urgency) rather than argument", "a logical proof", "a counterargument"], answer: 1, explanation: "Fear and urgency with no evidence is persuasion, not reasoned argument." },
            { type: "long", difficulty: "hard", q: "Explain the difference between argument and persuasion, giving one example of each on the same topic.", answer: "Answers vary. A strong response explains that argument relies on a claim with reasons and evidence while persuasion may rely on emotion, association or pressure, and gives two examples on one topic — one reasoned (evidence-based) and one persuasive (emotional/rhetorical) — clearly distinguishing them.", explanation: "Clear distinction + a reasoned example and a persuasion example on one topic." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e8-writing",
      title: "Writing",
      subject: "Writing",
      icon: "✍️",
      summary: "Compare-and-contrast, persuasive, editorial and flash fiction; the literary analysis and argument essay with counterargument, rebuttal and qualified claims; nuanced argumentation; a capstone thesis and a final written defence of a claim.",
      objectives: [

        {
          text: "Write compare-and-contrast and descriptive/narrative pieces.",
          resources: [
            { type: "reading", title: "Compare & contrast writing", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "Structuring comparisons." },
            { type: "reading", title: "Narrative & descriptive craft", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Refining story and description." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Essay-Writing; Story-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Essay-Writing; Story-Writing'.", url: "" },
            { type: "book", enrichment: true, title: "On Writing: A Memoir of the Craft", author: "Stephen King", chapter: "(the 'Toolbox' and 'On Writing' craft sections)", note: "Enrichment read (advanced / with guidance): a celebrated author's practical advice on argument, storytelling and the craft of writing.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Two common ways to structure a compare-and-contrast essay are point-by-point and:", options: ["alphabetical", "block (subject-by-subject)", "random", "backwards"], answer: 1, explanation: "Block and point-by-point are the two standard structures." },
            { type: "tf", difficulty: "easy", q: "A compare-and-contrast piece examines both similarities and differences.", answer: true, explanation: "Compare = alike; contrast = different." },
            { type: "mcq", difficulty: "easy", q: "Descriptive writing relies most on:", options: ["statistics", "sensory detail to create vivid pictures", "dialogue tags only", "citations"], answer: 1, explanation: "Description uses sensory detail to paint a scene." },
            { type: "tf", difficulty: "easy", q: "A compare-and-contrast essay still needs a thesis stating the point of the comparison.", answer: true, explanation: "The thesis says why the comparison matters." },
            { type: "mcq", difficulty: "medium", q: "In a point-by-point comparison, you:", options: ["discuss everything about A, then everything about B", "alternate between A and B for each feature", "discuss only A", "list random facts"], answer: 1, explanation: "Point-by-point alternates between subjects for each feature." },
            { type: "short", difficulty: "medium", q: "What is the difference between comparing and contrasting?", answer: "Comparing looks at how two things are similar; contrasting looks at how they are different. A 'compare and contrast' piece usually does both — examining similarities and differences.", explanation: "Compare = similarities; contrast = differences." },
            { type: "mcq", difficulty: "medium", q: "A strong descriptive paragraph mostly uses 'show, don't tell', which means:", options: ["stating feelings flatly", "revealing through vivid detail and action", "avoiding all adjectives", "using only dialogue"], answer: 1, explanation: "'Show, don't tell' uses detail to let readers experience the scene." },
            { type: "tf", difficulty: "medium", q: "Transitions like 'similarly' and 'on the other hand' are useful in compare-and-contrast writing.", answer: true, explanation: "These signal similarities and differences." },
            { type: "mcq", difficulty: "medium", q: "Which transition would best introduce a CONTRAST in a comparison essay?", options: ["likewise", "in the same way", "however / by contrast", "furthermore"], answer: 2, explanation: "'However' and 'by contrast' signal differences." },
            { type: "short", difficulty: "medium", q: "When would block structure be better than point-by-point for a comparison?", answer: "Block structure works well for shorter comparisons or when each subject is best understood as a whole; point-by-point suits longer or more detailed comparisons where readers need the two held side by side on each feature. (Either reasoned choice is acceptable.)", explanation: "Block suits short/holistic comparisons; point-by-point suits detailed, feature-by-feature ones." },
            { type: "long", difficulty: "hard", q: "Plan a compare-and-contrast paragraph on two things you know well. State your point (thesis), and list two similarities and two differences you'd include.", answer: "Answers vary. A strong response gives a clear comparison thesis (the point of comparing the two) and lists two genuine similarities and two genuine differences relevant to that point.", explanation: "A comparison thesis + two similarities + two differences." },
            { type: "long", difficulty: "hard", q: "Write a short descriptive paragraph (4–6 sentences) about a place or moment, using sensory detail and 'show, don't tell'.", answer: "Answers vary. A strong response uses vivid sensory detail (sight, sound, smell, touch, taste) and shows rather than tells, creating a clear picture and mood without flat statements like 'it was nice'.", explanation: "Vivid, multi-sensory description that shows rather than tells." }
          ]
        },

        {
          text: "Write a literary analysis essay.",
          resources: [
            { type: "reading", title: "Literary analysis essay", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/subject_specific_writing/writing_in_literature/writing_in_literature_detailed_discussion/index.html", note: "How to analyse literature in an essay." },
            { type: "reading", title: "Analysing texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Building text-based arguments." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Essay-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Essay-Writing'.", url: "" },
            { type: "book", enrichment: true, title: "On Writing: A Memoir of the Craft", author: "Stephen King", chapter: "(the 'Toolbox' and 'On Writing' craft sections)", note: "Enrichment read (advanced / with guidance): a celebrated author's practical advice on argument, storytelling and the craft of writing.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A literary analysis essay should be built around:", options: ["a plot summary only", "a thesis (interpretation) supported by textual evidence and analysis", "the author's biography", "your favourite quotes with no point"], answer: 1, explanation: "Literary analysis argues an interpretation with evidence." },
            { type: "tf", difficulty: "medium", q: "A literary analysis is more than retelling the plot — it interprets and explains.", answer: true, explanation: "Analysis goes beyond summary to interpretation." },
            { type: "mcq", difficulty: "easy", q: "The thesis of a literary analysis essay states:", options: ["a plot summary", "your interpretation/argument about the text", "the author's address", "the page count"], answer: 1, explanation: "The thesis presents your interpretive claim." },
            { type: "tf", difficulty: "easy", q: "Quotations in a literary analysis serve as evidence for your interpretation.", answer: true, explanation: "Quotes back up your claims about the text." },
            { type: "mcq", difficulty: "medium", q: "Which is an interpretive (analytical) thesis rather than a summary?", options: ["The story is about a boy and a dog.", "Through the dog's death, the author shows that growing up means accepting loss.", "There is a dog in the story.", "The boy is ten."], answer: 1, explanation: "It makes an arguable claim about the text's meaning." },
            { type: "short", difficulty: "medium", q: "What is the difference between summarising and analysing a text in an essay?", answer: "Summarising retells what happens (the plot). Analysing argues an interpretation — what the text means and how the author achieves effects — using evidence. A literary analysis essay analyses, not just summarises.", explanation: "Summary = what happens; analysis = what it means and how, with evidence." },
            { type: "mcq", difficulty: "medium", q: "Each body paragraph of a literary analysis should:", options: ["introduce a new unrelated topic", "support the thesis with a point, evidence and analysis", "only summarise", "list the characters"], answer: 1, explanation: "Body paragraphs develop the thesis with evidence and analysis (e.g. CEA)." },
            { type: "tf", difficulty: "medium", q: "A literary analysis essay should explain HOW the evidence supports your interpretation.", answer: true, explanation: "Analysis links evidence to the interpretive claim." },
            { type: "mcq", difficulty: "medium", q: "Which would weaken a literary analysis essay?", options: ["a clear interpretive thesis", "evidence with analysis", "just retelling the plot with no interpretation", "topic sentences for each paragraph"], answer: 2, explanation: "Plot retelling without interpretation isn't analysis." },
            { type: "short", difficulty: "medium", q: "Name the three things a strong body paragraph in a literary analysis usually contains.", answer: "A point/claim (topic sentence supporting the thesis), evidence (a quote or detail from the text), and analysis (explaining how the evidence supports the claim). This is the claim–evidence–analysis pattern.", explanation: "Claim/point + evidence + analysis (CEA)." },
            { type: "tf", difficulty: "hard", q: "A literary analysis essay can validly reach a different interpretation from a classmate's, as long as it is well-supported by the text.", answer: true, explanation: "Texts can support more than one reasonable interpretation; what matters is the evidence and analysis behind it." },
            { type: "long", difficulty: "hard", q: "Choose a text you know. Write an interpretive thesis for a literary analysis essay about it and outline two body paragraphs (point + evidence) that would support it.", answer: "Answers vary. A strong response gives an arguable interpretive thesis (not a summary) about a specific text and outlines two body paragraphs, each with a distinct point and a relevant piece of evidence that supports the thesis.", explanation: "An interpretive thesis + two body-paragraph points each with supporting evidence." }
          ]
        },

        {
          text: "Write an argument essay with a clear claim and reasoning.",
          resources: [
            { type: "reading", title: "Argumentative essays", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/essay_writing/argumentative_essays.html", note: "Claim, reasons, evidence, structure." },
            { type: "reading", title: "Argument writing", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Making a case in writing." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Essay-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Essay-Writing'.", url: "" },
            { type: "book", enrichment: true, title: "On Writing: A Memoir of the Craft", author: "Stephen King", chapter: "(the 'Toolbox' and 'On Writing' craft sections)", note: "Enrichment read (advanced / with guidance): a celebrated author's practical advice on argument, storytelling and the craft of writing.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The central claim of an argument essay is its:", options: ["conclusion only", "thesis", "title", "first quote"], answer: 1, explanation: "The thesis states the essay's main argument." },
            { type: "tf", difficulty: "medium", q: "An argument essay should support its claim with reasons and evidence, not just opinion.", answer: true, explanation: "Reasons and evidence make an argument convincing." },
            { type: "mcq", difficulty: "easy", q: "A 'claim' in an argument is:", options: ["a question", "the position you are arguing for", "a random fact", "a summary"], answer: 1, explanation: "The claim is the stance the essay defends." },
            { type: "tf", difficulty: "easy", q: "Evidence in an argument essay can include facts, examples, statistics and expert opinion.", answer: true, explanation: "These types of evidence support claims." },
            { type: "mcq", difficulty: "medium", q: "A strong argument thesis is:", options: ["vague and obvious", "specific, debatable and supportable", "a plain fact no one disputes", "a question"], answer: 1, explanation: "Good argument theses are specific, arguable and provable." },
            { type: "short", difficulty: "medium", q: "What is the difference between a claim and the evidence that supports it?", answer: "A claim is the position or point you are arguing (what you believe). Evidence is the facts, examples, data or quotations that prove or support the claim. The claim asserts; the evidence backs it up.", explanation: "Claim = your position; evidence = the support that proves it." },
            { type: "mcq", difficulty: "medium", q: "Which sentence is the strongest claim for an argument essay?", options: ["School is a place.", "Schools should start later because it improves students' health and focus.", "Some people like school.", "There are many schools."], answer: 1, explanation: "It is specific, debatable, and previews supporting reasons." },
            { type: "tf", difficulty: "medium", q: "An argument essay is stronger when its reasons are backed by specific evidence rather than left as bare assertions.", answer: true, explanation: "Specific evidence supports reasons and convinces readers." },
            { type: "mcq", difficulty: "medium", q: "The reasoning in an argument essay does what?", options: ["lists facts with no link", "explains how the evidence supports the claim", "summarises a story", "ends the essay abruptly"], answer: 1, explanation: "Reasoning connects evidence to the claim." },
            { type: "short", difficulty: "medium", q: "Why isn't strong personal opinion enough on its own in an argument essay?", answer: "Because readers won't be convinced just because you feel strongly. An argument needs reasons and evidence — facts, examples, data — to show WHY your claim is true. Opinion sets your position; evidence and reasoning prove it.", explanation: "Opinion states a view; evidence and reasoning are what actually persuade." },
            { type: "tf", difficulty: "hard", q: "An argument essay that gives reasons but no supporting evidence is weaker than one that backs each reason with evidence.", answer: true, explanation: "Reasons alone can be dismissed; evidence proves them and makes the argument convincing." },
            { type: "long", difficulty: "hard", q: "Write a clear, debatable claim on an issue you care about, then give one reason and one piece of evidence that support it.", answer: "Answers vary. A strong response gives a specific, arguable claim and supports it with a logical reason and a genuine piece of evidence (fact, example, statistic) that backs the reason.", explanation: "A debatable claim + a reason + supporting evidence." }
          ]
        },

        {
          text: "Include counterargument and rebuttal, and qualify claims.",
          resources: [
            { type: "reading", title: "Counterargument & rebuttal", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html", note: "Addressing the other side." },
            { type: "reading", title: "Nuanced argument", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Qualifying and strengthening claims." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Essay-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Essay-Writing'.", url: "" },
            { type: "book", enrichment: true, title: "On Writing: A Memoir of the Craft", author: "Stephen King", chapter: "(the 'Toolbox' and 'On Writing' craft sections)", note: "Enrichment read (advanced / with guidance): a celebrated author's practical advice on argument, storytelling and the craft of writing.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A 'counterargument' is:", options: ["your own thesis", "an opposing view that you acknowledge and respond to", "a grammar rule", "the conclusion"], answer: 1, explanation: "A counterargument is the opposing side you address." },
            { type: "mcq", difficulty: "hard", q: "A 'rebuttal' does what to a counterargument?", options: ["agrees with it fully", "responds to it and explains why your position still holds", "ignores it", "repeats your thesis word-for-word"], answer: 1, explanation: "A rebuttal answers the opposing view and defends your claim." },
            { type: "tf", difficulty: "easy", q: "Acknowledging a counterargument can make your own argument more convincing and credible.", answer: true, explanation: "It shows fairness and that you've considered other views." },
            { type: "mcq", difficulty: "easy", q: "To 'qualify' a claim means to:", options: ["make it more extreme", "add limits or conditions so it isn't overstated (e.g. 'often', 'in most cases')", "delete it", "ignore evidence"], answer: 1, explanation: "Qualifying adds nuance and limits to avoid overstating." },
            { type: "mcq", difficulty: "medium", q: "Which is a qualified (more careful) version of 'Video games cause violence'?", options: ["Video games always cause violence.", "Some studies suggest that excessive violent gaming may contribute to aggression in certain individuals.", "Video games never affect anyone.", "Games are bad."], answer: 1, explanation: "It uses qualifiers ('some', 'may', 'certain') to avoid overstating." },
            { type: "tf", difficulty: "medium", q: "Overstated, absolute claims (e.g. 'always', 'never') are easier for opponents to disprove.", answer: true, explanation: "One exception can topple an absolute claim, so qualifying is safer." },
            { type: "short", difficulty: "medium", q: "Why should a strong argument include and answer a counterargument?", answer: "It shows you've fairly considered other views, makes you seem reasonable and credible, and lets you defuse the opposition by responding to it. Ignoring obvious objections leaves your argument looking one-sided and weak.", explanation: "Addressing counterarguments builds credibility and pre-empts objections." },
            { type: "mcq", difficulty: "medium", q: "The usual order when handling the other side is:", options: ["rebuttal then counterargument", "state the counterargument, then give your rebuttal", "ignore both", "only the counterargument"], answer: 1, explanation: "Present the opposing view, then rebut it." },
            { type: "tf", difficulty: "medium", q: "Words like 'often', 'sometimes' and 'in many cases' are qualifiers that add nuance to a claim.", answer: true, explanation: "Qualifiers limit and refine claims." },
            { type: "short", difficulty: "medium", q: "Rebut this counterargument: 'Homework should be banned because it causes stress.' (Defend keeping homework.)", answer: "Answers vary. A strong rebuttal acknowledges the stress concern, then argues homework still has value — e.g. it reinforces learning, builds independent study skills, and the stress can be managed with reasonable amounts — explaining why the benefit outweighs or addresses the objection.", explanation: "Acknowledge the concern, then give reasons/evidence that defend the position." },
            { type: "mcq", difficulty: "hard", q: "Which is the best-qualified version of a claim?", options: ["Screens are always harmful to everyone.", "Excessive screen time may harm sleep for some people.", "Screens never affect anyone at all.", "Screens are bad, end of story."], answer: 1, explanation: "Qualifiers ('may', 'some', 'excessive') make the claim accurate and defensible rather than overstated." },
            { type: "long", difficulty: "hard", q: "Choose a claim. Write a sentence stating a counterargument to it and a sentence rebutting that counterargument, then qualify your original claim appropriately.", answer: "Answers vary. A strong response states a claim, gives a genuine opposing counterargument, rebuts it with a reason or evidence, and rephrases the claim with suitable qualifiers (e.g. 'in most cases', 'often') to avoid overstating.", explanation: "A counterargument + a rebuttal + an appropriately qualified claim." }
          ]
        },

        {
          text: "Develop a capstone thesis and defend a claim in writing.",
          resources: [
            { type: "reading", title: "Strong thesis statements", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/thesis_statement_tips.html", note: "Crafting a defensible thesis." },
            { type: "reading", title: "Defending a claim", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Building a sustained argument." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Essay-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Essay-Writing'.", url: "" },
            { type: "book", enrichment: true, title: "On Writing: A Memoir of the Craft", author: "Stephen King", chapter: "(the 'Toolbox' and 'On Writing' craft sections)", note: "Enrichment read (advanced / with guidance): a celebrated author's practical advice on argument, storytelling and the craft of writing.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "A strong capstone thesis is one that is:", options: ["obvious and unarguable", "specific, debatable and supportable with evidence", "a question with no answer", "a list of facts"], answer: 1, explanation: "A good thesis is specific, arguable and provable." },
            { type: "short", difficulty: "medium", q: "What does it mean to 'defend' a claim in writing?", answer: "It means supporting your claim with reasons and evidence, explaining your reasoning, and addressing and answering opposing views (counterarguments) so the claim stands up to challenge.", explanation: "Defending = supporting with evidence and answering objections." },
            { type: "tf", difficulty: "easy", q: "A capstone project usually involves sustained research and a substantial piece of work.", answer: true, explanation: "Capstones are larger, culminating projects." },
            { type: "mcq", difficulty: "easy", q: "A thesis you can 'defend' must be:", options: ["impossible to question", "arguable, so there is something to support and defend", "a single fact", "a question"], answer: 1, explanation: "Only an arguable thesis can be defended." },
            { type: "tf", difficulty: "medium", q: "Defending a claim well includes anticipating objections and responding to them.", answer: true, explanation: "Addressing objections strengthens a defence." },
            { type: "mcq", difficulty: "medium", q: "Which thesis is most defensible in a research capstone?", options: ["Pollution exists.", "Reducing single-use plastics in our city would significantly cut waterway pollution, based on data from comparable cities.", "Plastic is a material.", "Some people dislike pollution."], answer: 1, explanation: "It is specific, arguable and points to supporting evidence." },
            { type: "short", difficulty: "medium", q: "Why must a capstone thesis be specific rather than broad?", answer: "A specific thesis can be properly researched, supported with focused evidence, and defended within the scope of the project. A broad thesis ('pollution is bad') is too vague to argue precisely or prove, leaving the work unfocused.", explanation: "Specific theses are researchable, focused and defensible; broad ones are not." },
            { type: "tf", difficulty: "medium", q: "Evidence from multiple credible sources strengthens the defence of a capstone claim.", answer: true, explanation: "Multiple credible sources make a defence more convincing." },
            { type: "mcq", difficulty: "medium", q: "When defending a claim, addressing the strongest opposing view (rather than a weak one) makes your defence:", options: ["weaker", "more convincing and fair", "irrelevant", "shorter only"], answer: 1, explanation: "Engaging the strongest objection shows a robust, fair defence." },
            { type: "short", difficulty: "hard", q: "What are the key parts of a well-defended written argument?", answer: "A clear, arguable thesis; reasons supporting it; credible evidence for each reason; analysis explaining how the evidence supports the claim; acknowledgement and rebuttal of counterarguments; and a conclusion that reinforces the defended claim.", explanation: "Thesis + reasons + evidence + analysis + counterargument/rebuttal + conclusion." },
            { type: "tf", difficulty: "hard", q: "A capstone thesis you can't find any evidence for, or that no one could disagree with, is a poor choice.", answer: true, explanation: "A defensible thesis must be both arguable (so there's something to defend) and supportable (so you can defend it with evidence)." },
            { type: "long", difficulty: "hard", q: "Draft a capstone-style thesis on a topic you'd research, and outline how you would defend it (key reasons, types of evidence, and one counterargument you'd answer).", answer: "Answers vary. A strong response gives a specific, arguable thesis and outlines a defence: a few supporting reasons, the kinds of evidence/sources to use, and at least one counterargument that would be acknowledged and rebutted.", explanation: "A specific thesis + reasons + evidence types + a counterargument to answer." }
          ]
        },

        {
          text: "Write flash fiction and an editorial.",
          resources: [
            { type: "reading", title: "Flash fiction", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Telling a complete story very briefly." },
            { type: "reading", title: "Editorial writing", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Opinion writing on an issue." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Story-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Story-Writing'.", url: "" },
            { type: "book", enrichment: true, title: "On Writing: A Memoir of the Craft", author: "Stephen King", chapter: "(the 'Toolbox' and 'On Writing' craft sections)", note: "Enrichment read (advanced / with guidance): a celebrated author's practical advice on argument, storytelling and the craft of writing.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "'Flash fiction' is:", options: ["a very long novel", "an extremely short, complete story", "a news report", "a poem with no words"], answer: 1, explanation: "Flash fiction tells a whole story in very few words." },
            { type: "tf", difficulty: "medium", q: "An editorial takes a clear stance and tries to influence readers' opinions.", answer: true, explanation: "Editorials argue a viewpoint." },
            { type: "mcq", difficulty: "easy", q: "Despite its short length, flash fiction should still have:", options: ["no characters or point", "a complete sense of story (some change, conflict or revelation)", "100 pages", "a bibliography"], answer: 1, explanation: "Even tiny stories need a sense of completeness." },
            { type: "tf", difficulty: "easy", q: "An editorial is a type of persuasive, opinion-based writing.", answer: true, explanation: "Editorials argue an opinion on an issue." },
            { type: "mcq", difficulty: "medium", q: "Because flash fiction is so short, every word should:", options: ["be filler", "count and contribute to the story", "repeat", "be random"], answer: 1, explanation: "Brevity demands that each word earns its place." },
            { type: "short", difficulty: "medium", q: "What challenge does flash fiction present to a writer?", answer: "Telling a complete, satisfying story — with some character, conflict or change — in very few words. The writer must imply a lot, choose every word carefully, and often rely on a sharp ending or a single powerful moment.", explanation: "Conveying a whole story compactly, making every word count." },
            { type: "mcq", difficulty: "medium", q: "An editorial usually ends with:", options: ["a random fact", "a clear conclusion or call to action", "the author's hobbies", "a shopping list"], answer: 1, explanation: "Editorials close by reinforcing the stance or urging action." },
            { type: "tf", difficulty: "medium", q: "Flash fiction often relies on a strong final line or twist for impact.", answer: true, explanation: "A powerful ending makes a short story resonate." },
            { type: "mcq", difficulty: "medium", q: "An editorial differs from flash fiction because an editorial is:", options: ["a fictional story", "non-fiction that argues a real opinion on an issue", "a poem", "a recipe"], answer: 1, explanation: "Editorials are opinion non-fiction; flash fiction is a short story." },
            { type: "short", difficulty: "medium", q: "Name two features a good editorial should include.", answer: "Any two of: a clear stance/claim, supporting reasons and evidence, awareness of the audience, persuasive techniques (appeals), acknowledgement of other views, and a strong conclusion or call to action.", explanation: "Clear stance, evidence, appeals and a strong conclusion." },
            { type: "tf", difficulty: "hard", q: "A strong piece of flash fiction often implies more than it states, trusting the reader to fill in the gaps.", answer: true, explanation: "With so few words, flash fiction suggests backstory and meaning rather than spelling everything out." },
            { type: "long", difficulty: "hard", q: "Write a very short piece of flash fiction (3–5 sentences) that tells a complete mini-story with some change or twist.", answer: "Answers vary. A strong response tells a tiny but complete story — with a character/situation, a moment of change, conflict or revelation, and ideally a striking ending — within just a few sentences, making every word count.", explanation: "A complete mini-story with change/twist in just a few well-chosen sentences." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e8-grammar",
      title: "Advanced Grammar & Style",
      subject: "Grammar",
      icon: "🔤",
      summary: "Tenses (past simple/perfect), gerunds and infinitives, modal and phrasal verbs, active vs passive voice, verb moods, parallelism, complex-sentence control, participial phrases, dialogue formatting and voice (tone, sarcasm, humour).",
      objectives: [

        {
          text: "Use past simple and past perfect tenses correctly.",
          resources: [
            { type: "reading", title: "Verb tenses", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "Simple and perfect tenses." },
            { type: "reading", title: "Past perfect", provider: "Grammarly", url: "https://www.grammarly.com/blog/past-perfect/", note: "When to use the past perfect." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Verb — Tenses", note: "This is covered in Wren & Martin's grammar section, 'The Verb — Tenses'.", url: "" },
            { type: "book", enrichment: true, title: "Eats, Shoots & Leaves", author: "Lynne Truss (children's edition available)", chapter: "(punctuation, dialogue & sentence sense)", note: "Enrichment read (great for ages 11–13): a witty tour of punctuation and why it really matters.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The past perfect ('had + past participle') is used for an action that:", options: ["is happening now", "happened before another past action", "will happen later", "never happened"], answer: 1, explanation: "Past perfect shows the earlier of two past events." },
            { type: "mcq", difficulty: "medium", q: "Choose the correct form: 'By the time we arrived, the train ___.'", options: ["leaves", "had left", "will leave", "leave"], answer: 1, explanation: "The leaving happened before the arriving — past perfect 'had left'." },
            { type: "mcq", difficulty: "easy", q: "The past simple of 'go' is:", options: ["goed", "went", "gone", "going"], answer: 1, explanation: "'Go' is irregular: past simple = went." },
            { type: "tf", difficulty: "easy", q: "The past simple describes a completed action in the past (e.g. 'She walked home').", answer: true, explanation: "Past simple = a finished past action." },
            { type: "mcq", difficulty: "medium", q: "Which sentence correctly uses the past perfect?", options: ["She had ate before we arrived.", "She had eaten before we arrived.", "She has eaten before we arrived.", "She eat before we arrived."], answer: 1, explanation: "Past perfect = had + past participle (eaten)." },
            { type: "tf", difficulty: "medium", q: "The past perfect helps make the order of two past events clear.", answer: true, explanation: "It marks which past action happened first." },
            { type: "short", difficulty: "medium", q: "Explain when you would use the past perfect rather than the past simple.", answer: "Use the past perfect for an action that was already completed before another past action. For example, 'I had finished my homework before dinner' — finishing happened before dinner. The past simple alone is for a single completed past action.", explanation: "Past perfect = the earlier of two past actions; past simple = one completed past action." },
            { type: "mcq", difficulty: "medium", q: "Complete: 'When I phoned, she ___ already ___ (leave).'", options: ["has / left", "had / left", "have / leave", "did / leave"], answer: 1, explanation: "Past perfect: 'had already left' (before the phone call)." },
            { type: "tf", difficulty: "medium", q: "'I had saw the film' is incorrect; it should be 'I had seen the film'.", answer: true, explanation: "Past perfect needs the past participle 'seen', not 'saw'." },
            { type: "short", difficulty: "medium", q: "Rewrite using the past perfect to show order: 'I ate breakfast. Then I went to school.' (Combine so breakfast clearly came first.)", answer: "Example: 'I had eaten breakfast before I went to school.' or 'After I had eaten breakfast, I went to school.' The past perfect ('had eaten') shows breakfast came first.", explanation: "Past perfect 'had eaten' marks the earlier action." },
            { type: "mcq", difficulty: "hard", q: "Which sentence correctly mixes past simple and past perfect?", options: ["By the time the show started, we had found our seats.", "By the time the show had started, we found our seats.", "By the time the show starts, we had found our seats.", "By the time the show started, we have found our seats."], answer: 0, explanation: "Finding seats (past perfect, earlier) before the show started (past simple)." },
            { type: "long", difficulty: "hard", q: "Write a short paragraph (3–4 sentences) about a past event that correctly uses BOTH the past simple and the past perfect, and note which is which.", answer: "Answers vary. A strong response narrates a past event using the past simple for the main completed actions and the past perfect for an action that happened earlier (had + past participle), correctly identifying each.", explanation: "Correct use of past simple and past perfect together, with each identified." }
          ]
        },

        {
          text: "Use gerunds and infinitives.",
          resources: [
            { type: "reading", title: "Gerunds & infinitives", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "-ing nouns and 'to + verb'." },
            { type: "reading", title: "Gerunds vs infinitives", provider: "Grammarly", url: "https://www.grammarly.com/blog/gerund/", note: "Forms and uses." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Verb — Verbals (Gerunds & Infinitives)", note: "This is covered in Wren & Martin's grammar section, 'The Verb — Verbals (Gerunds & Infinitives)'.", url: "" },
            { type: "book", enrichment: true, title: "Eats, Shoots & Leaves", author: "Lynne Truss (children's edition available)", chapter: "(punctuation, dialogue & sentence sense)", note: "Enrichment read (great for ages 11–13): a witty tour of punctuation and why it really matters.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A gerund is a verb form ending in -ing that acts as a:", options: ["verb only", "noun", "preposition", "punctuation mark"], answer: 1, explanation: "A gerund (e.g. 'swimming is fun') functions as a noun." },
            { type: "mcq", difficulty: "easy", q: "Which is an infinitive?", options: ["running", "to run", "ran", "runs"], answer: 1, explanation: "An infinitive is 'to' + base verb: 'to run'." },
            { type: "mcq", difficulty: "easy", q: "In 'Reading relaxes me,' the gerund is:", options: ["Reading", "relaxes", "me", "none"], answer: 0, explanation: "'Reading' is an -ing form acting as a noun (the subject)." },
            { type: "tf", difficulty: "easy", q: "A gerund looks like a verb but does the job of a noun.", answer: true, explanation: "Gerunds are verb-derived nouns." },
            { type: "mcq", difficulty: "medium", q: "In 'She wants to learn guitar,' the infinitive is:", options: ["wants", "to learn", "guitar", "she"], answer: 1, explanation: "'To learn' is the infinitive." },
            { type: "tf", difficulty: "medium", q: "Some verbs are followed by a gerund (e.g. 'enjoy swimming'), others by an infinitive (e.g. 'want to go').", answer: true, explanation: "Certain verbs take gerunds, others infinitives." },
            { type: "mcq", difficulty: "medium", q: "Choose the correct form: 'I enjoy ___ to music.'", options: ["to listen", "listening", "listen", "listened"], answer: 1, explanation: "'Enjoy' is followed by a gerund: listening." },
            { type: "mcq", difficulty: "medium", q: "Choose the correct form: 'They decided ___ early.'", options: ["leaving", "to leave", "leave", "left"], answer: 1, explanation: "'Decide' is followed by an infinitive: to leave." },
            { type: "short", difficulty: "medium", q: "What is the difference between a gerund and an infinitive?", answer: "A gerund is the -ing form of a verb used as a noun (e.g. 'swimming'). An infinitive is 'to' + the base verb (e.g. 'to swim'). Both come from verbs, but they take different forms and follow different verbs.", explanation: "Gerund = -ing noun; infinitive = 'to' + verb." },
            { type: "tf", difficulty: "medium", q: "A gerund can be the subject of a sentence, as in 'Running keeps me fit.'", answer: true, explanation: "Gerunds, being nouns, can serve as subjects." },
            { type: "mcq", difficulty: "hard", q: "Which sentence uses a gerund as the OBJECT of a preposition?", options: ["She is good at painting.", "She wants to paint.", "She painted a wall.", "She will paint tomorrow."], answer: 0, explanation: "'At painting' — the gerund follows the preposition 'at'." },
            { type: "long", difficulty: "hard", q: "Write one sentence using a gerund and one using an infinitive. Identify each and say what job it does in the sentence.", answer: "Answers vary. A strong response gives one correct sentence with a gerund (-ing form acting as a noun — subject, object, or after a preposition) and one with an infinitive ('to' + verb), correctly identifying each and its role.", explanation: "One gerund sentence and one infinitive sentence, each identified with its role." }
          ]
        },

        {
          text: "Use modal and phrasal verbs.",
          resources: [
            { type: "reading", title: "Modal verbs", provider: "Grammarly", url: "https://www.grammarly.com/blog/modal-verbs/", note: "Can, could, may, might, must, should." },
            { type: "reading", title: "Phrasal verbs", provider: "Grammarly", url: "https://www.grammarly.com/blog/phrasal-verbs/", note: "Verb + particle combinations." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Verb — Auxiliary & Modal Verbs; Phrasal Verbs", note: "This is covered in Wren & Martin's grammar section, 'The Verb — Auxiliary & Modal Verbs; Phrasal Verbs'.", url: "" },
            { type: "book", enrichment: true, title: "Eats, Shoots & Leaves", author: "Lynne Truss (children's edition available)", chapter: "(punctuation, dialogue & sentence sense)", note: "Enrichment read (great for ages 11–13): a witty tour of punctuation and why it really matters.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which is a modal verb?", options: ["run", "must", "table", "quickly"], answer: 1, explanation: "'Must' is a modal expressing necessity." },
            { type: "mcq", difficulty: "medium", q: "A phrasal verb is a verb combined with a particle, like:", options: ["'give up'", "'tableness'", "'quick'", "'beautiful'"], answer: 0, explanation: "'Give up' (verb + particle) is a phrasal verb meaning to quit." },
            { type: "mcq", difficulty: "easy", q: "Modal verbs express ideas such as:", options: ["colour and size", "possibility, ability, permission or necessity", "past tense only", "punctuation"], answer: 1, explanation: "Modals show possibility, ability, permission, necessity, etc." },
            { type: "match", difficulty: "medium", q: "Match each modal to what it expresses.", pairs: [["can", "Ability"], ["must", "Necessity/obligation"], ["may", "Permission/possibility"], ["should", "Advice/recommendation"]], explanation: "Different modals express different shades of meaning." },
            { type: "tf", difficulty: "easy", q: "'Could' is the past or more tentative form of 'can'.", answer: true, explanation: "'Could' softens or shifts 'can' to the past/tentative." },
            { type: "mcq", difficulty: "medium", q: "In 'The plane took off on time,' the phrasal verb is:", options: ["The plane", "took off", "on", "time"], answer: 1, explanation: "'Took off' (verb + particle) means departed/left the ground." },
            { type: "tf", difficulty: "medium", q: "The meaning of a phrasal verb often can't be guessed from the separate words (e.g. 'give up' ≠ 'give' + 'up').", answer: true, explanation: "Many phrasal verbs are idiomatic." },
            { type: "mcq", difficulty: "medium", q: "Which modal best expresses polite possibility: '___ I borrow your pen?'", options: ["Must", "May", "Should", "Will"], answer: 1, explanation: "'May' politely asks permission/possibility." },
            { type: "short", difficulty: "medium", q: "Give the meaning of two common phrasal verbs.", answer: "Examples: 'give up' = quit/stop trying; 'look after' = take care of; 'put off' = postpone; 'find out' = discover; 'turn down' = refuse/reduce. (Any two correct meanings.)", explanation: "Phrasal verbs have idiomatic meanings like quit, postpone, discover, etc." },
            { type: "mcq", difficulty: "medium", q: "Which sentence uses a modal to give advice?", options: ["You must be 18 to enter.", "You should drink more water.", "I can swim.", "She may come."], answer: 1, explanation: "'Should' offers advice/recommendation." },
            { type: "mcq", difficulty: "hard", q: "'You must finish' and 'You might finish' differ because 'must' expresses ___ while 'might' expresses ___.", options: ["possibility / necessity", "necessity / possibility", "ability / advice", "permission / ability"], answer: 1, explanation: "'Must' = necessity/obligation; 'might' = possibility." },
            { type: "long", difficulty: "hard", q: "Write three sentences: one using a modal of ability, one using a modal of obligation, and one using a phrasal verb. Identify each.", answer: "Answers vary. A strong response gives a sentence with a modal of ability (can/could), one with a modal of obligation (must/have to/should), and one containing a phrasal verb (verb + particle), correctly identifying each.", explanation: "A modal of ability, a modal of obligation, and a phrasal verb, each identified." }
          ]
        },

        {
          text: "Use active and passive voice, and choose voice intentionally.",
          resources: [
            { type: "reading", title: "Active vs passive voice", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/active_and_passive_voice/index.html", note: "When to use each voice." },
            { type: "reading", title: "Passive voice", provider: "Grammarly", url: "https://www.grammarly.com/blog/passive-voice/", note: "Recognising and using the passive." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Active and Passive Voice", note: "This is covered in Wren & Martin's grammar section, 'Active and Passive Voice'.", url: "" },
            { type: "book", enrichment: true, title: "Eats, Shoots & Leaves", author: "Lynne Truss (children's edition available)", chapter: "(punctuation, dialogue & sentence sense)", note: "Enrichment read (great for ages 11–13): a witty tour of punctuation and why it really matters.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which sentence is in the PASSIVE voice?", options: ["The cat chased the mouse.", "The mouse was chased by the cat.", "The cat chases mice.", "Cats chase mice."], answer: 1, explanation: "In the passive, the subject receives the action: 'was chased'." },
            { type: "tf", difficulty: "medium", q: "Active voice is usually clearer and more direct than passive voice.", answer: true, explanation: "Active voice tends to be more concise and direct." },
            { type: "mcq", difficulty: "easy", q: "In the ACTIVE voice, the subject:", options: ["receives the action", "performs the action", "disappears", "is always 'it'"], answer: 1, explanation: "Active subjects do the action." },
            { type: "mcq", difficulty: "easy", q: "Which is active voice?", options: ["The window was broken.", "The ball broke the window.", "The window had been broken.", "Mistakes were made."], answer: 1, explanation: "The subject (ball) performs the action — active." },
            { type: "tf", difficulty: "medium", q: "The passive voice is formed with a form of 'to be' + a past participle (e.g. 'was written').", answer: true, explanation: "That's the structure of the passive voice." },
            { type: "mcq", difficulty: "medium", q: "Change to passive: 'The chef cooked the meal.'", options: ["The meal cooked the chef.", "The meal was cooked by the chef.", "The chef was cooked.", "Cooking the meal."], answer: 1, explanation: "The object becomes the subject: 'The meal was cooked by the chef.'" },
            { type: "short", difficulty: "medium", q: "Give one situation where the passive voice is a GOOD choice.", answer: "When the doer is unknown or unimportant ('The window was broken'), when you want to emphasise the receiver/result ('The patient was treated immediately'), or in formal/scientific writing ('The samples were heated'). Passive suits these cases.", explanation: "Passive suits unknown/unimportant doers, emphasis on the receiver, or formal/scientific writing." },
            { type: "tf", difficulty: "medium", q: "The passive voice can hide who did something (e.g. 'Mistakes were made').", answer: true, explanation: "Passive can omit the agent, sometimes to avoid blame." },
            { type: "mcq", difficulty: "medium", q: "Change to active: 'The letter was written by Sara.'", options: ["The letter wrote Sara.", "Sara wrote the letter.", "Sara was written.", "Writing the letter."], answer: 1, explanation: "Make the doer the subject: 'Sara wrote the letter.'" },
            { type: "tf", difficulty: "medium", q: "Choosing voice intentionally means picking active or passive based on what you want to emphasise.", answer: true, explanation: "Voice is a deliberate stylistic choice for emphasis." },
            { type: "mcq", difficulty: "hard", q: "A scientist writes 'The solution was heated to 50°C.' The passive is appropriate here mainly because:", options: ["it hides a mistake", "the action/result matters more than who did it", "active is forbidden", "it is shorter"], answer: 1, explanation: "In science, the process/result matters more than the doer, suiting the passive." },
            { type: "long", difficulty: "hard", q: "Write the same idea twice — once in active voice and once in passive — and explain which you'd prefer and why.", answer: "Answers vary. A strong response gives a correct active-voice sentence and its passive equivalent, then explains a reasoned preference (e.g. active for directness and clarity, or passive to emphasise the receiver or when the doer is unknown).", explanation: "An active and a passive version of one idea + a reasoned preference." }
          ]
        },

        {
          text: "Use verb moods (indicative, imperative, subjunctive).",
          resources: [
            { type: "reading", title: "Verb moods", provider: "Grammarly", url: "https://www.grammarly.com/blog/grammatical-mood/", note: "Indicative, imperative, subjunctive and more." },
            { type: "reading", title: "Mood in grammar", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "How mood changes meaning." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Verb — Mood", note: "This is covered in Wren & Martin's grammar section, 'The Verb — Mood'.", url: "" },
            { type: "book", enrichment: true, title: "Eats, Shoots & Leaves", author: "Lynne Truss (children's edition available)", chapter: "(punctuation, dialogue & sentence sense)", note: "Enrichment read (great for ages 11–13): a witty tour of punctuation and why it really matters.", url: "" }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each mood to an example.", pairs: [["Indicative", "She walks to school."], ["Imperative", "Close the door."], ["Subjunctive", "If I were you, I'd rest."]], explanation: "Indicative states facts, imperative commands, subjunctive expresses hypotheticals/wishes." },
            { type: "mcq", difficulty: "easy", q: "An imperative sentence usually:", options: ["asks a question", "gives a command or instruction", "states a wish", "describes the weather"], answer: 1, explanation: "Imperatives command or instruct." },
            { type: "mcq", difficulty: "easy", q: "The indicative mood is used to:", options: ["give commands", "state facts or ask questions", "express impossible wishes only", "do nothing"], answer: 1, explanation: "Indicative states facts and asks ordinary questions." },
            { type: "tf", difficulty: "easy", q: "'Sit down, please' is in the imperative mood.", answer: true, explanation: "It gives a command/request — imperative." },
            { type: "mcq", difficulty: "medium", q: "Which sentence uses the subjunctive mood?", options: ["I am tired.", "If I were rich, I would travel.", "Close the window.", "She runs fast."], answer: 1, explanation: "'If I were' is subjunctive — a hypothetical/contrary-to-fact situation." },
            { type: "tf", difficulty: "medium", q: "The subjunctive often appears in 'if' clauses about unreal or hypothetical situations.", answer: true, explanation: "Subjunctive expresses hypotheticals, wishes and unreal conditions." },
            { type: "mcq", difficulty: "medium", q: "Choose the subjunctive form: 'I wish I ___ taller.'", options: ["am", "was", "were", "be"], answer: 2, explanation: "The subjunctive uses 'were' for unreal wishes: 'I wish I were taller.'" },
            { type: "short", difficulty: "medium", q: "What is the difference between the indicative and imperative moods?", answer: "The indicative states facts or asks questions ('You are leaving', 'Are you leaving?'). The imperative gives commands or instructions ('Leave now'). Indicative describes/asks; imperative orders.", explanation: "Indicative = states/asks; imperative = commands." },
            { type: "tf", difficulty: "medium", q: "Imperative sentences often have an 'understood' subject (you), even though it isn't written.", answer: true, explanation: "In 'Close the door', the subject 'you' is implied." },
            { type: "mcq", difficulty: "medium", q: "'The teacher suggested that he be on time' uses the subjunctive because it expresses:", options: ["a simple fact", "a request/recommendation about something not yet real", "a question", "the past"], answer: 1, explanation: "Subjunctive 'be' follows verbs of suggestion/recommendation." },
            { type: "mcq", difficulty: "hard", q: "Which sentence is correct subjunctive?", options: ["If I was you, I would apologise.", "If I were you, I would apologise.", "If I am you, I would apologise.", "If I be you, I would apologise."], answer: 1, explanation: "Contrary-to-fact 'if' clauses use 'were': 'If I were you'." },
            { type: "long", difficulty: "hard", q: "Write one sentence in each mood — indicative, imperative, and subjunctive — and label them.", answer: "Answers vary. A strong response gives a correct indicative sentence (statement/question), an imperative (command/instruction), and a subjunctive (hypothetical/wish, e.g. 'If I were...'), each correctly labelled.", explanation: "A correct indicative, imperative and subjunctive sentence, each labelled." }
          ]
        },

        {
          text: "Use parallelism and participial phrases; control complex sentences.",
          resources: [
            { type: "reading", title: "Parallel structure", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/mechanics/parallel_structure.html", note: "Keeping items in a series parallel." },
            { type: "reading", title: "Participial phrases", provider: "Grammarly", url: "https://www.grammarly.com/blog/participle/", note: "Phrases built from participles." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Participle; Synthesis of Sentences", note: "This is covered in Wren & Martin's grammar section, 'The Participle; Synthesis of Sentences'.", url: "" },
            { type: "book", enrichment: true, title: "Eats, Shoots & Leaves", author: "Lynne Truss (children's edition available)", chapter: "(punctuation, dialogue & sentence sense)", note: "Enrichment read (great for ages 11–13): a witty tour of punctuation and why it really matters.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which sentence uses correct parallelism?", options: ["She likes reading, to swim, and biking.", "She likes reading, swimming, and biking.", "She likes to read, swimming, biked.", "She likes read, swim, and to bike."], answer: 1, explanation: "Parallelism keeps the items in the same grammatical form (all -ing)." },
            { type: "tf", difficulty: "medium", q: "Parallel structure makes lists and comparisons clearer and more balanced.", answer: true, explanation: "Matching forms improve clarity and rhythm." },
            { type: "mcq", difficulty: "easy", q: "A participial phrase begins with a participle, which is a verb form often ending in:", options: ["-ly", "-ing or -ed", "-tion", "-ness"], answer: 1, explanation: "Participles commonly end in -ing (present) or -ed (past)." },
            { type: "mcq", difficulty: "medium", q: "In 'Smiling broadly, she accepted the award,' the participial phrase is:", options: ["she accepted", "Smiling broadly", "the award", "accepted the award"], answer: 1, explanation: "'Smiling broadly' is a participial phrase describing 'she'." },
            { type: "tf", difficulty: "medium", q: "A participial phrase should clearly modify the right noun, or it becomes a 'dangling modifier'.", answer: true, explanation: "Misplaced participial phrases create dangling modifiers." },
            { type: "mcq", difficulty: "medium", q: "Which sentence has a dangling/misplaced participial phrase?", options: ["Running to catch the bus, I dropped my bag.", "Running to catch the bus, the bag fell.", "I dropped my bag while running.", "While running, I dropped my bag."], answer: 1, explanation: "It illogically suggests the bag was running to catch the bus." },
            { type: "short", difficulty: "medium", q: "Why is parallel structure useful in a sentence with a list?", answer: "It keeps each item in the same grammatical form, which makes the sentence balanced, clear and easy to read. Mismatched forms (e.g. mixing -ing words and infinitives) sound awkward and can confuse the reader.", explanation: "Parallelism keeps list items in matching forms, improving clarity and balance." },
            { type: "tf", difficulty: "medium", q: "'I came, I saw, I conquered' is an example of parallel structure.", answer: true, explanation: "Each clause follows the same pronoun + past-tense verb pattern." },
            { type: "mcq", difficulty: "medium", q: "Fix the parallelism: 'The job requires typing, filing, and to answer phones.'", options: ["...typing, filing, and answering phones.", "...to type, filing, and to answer.", "...typing, to file, and answering.", "leave it unchanged"], answer: 0, explanation: "Make all items gerunds: typing, filing, answering." },
            { type: "short", difficulty: "medium", q: "Rewrite to use a participial phrase: 'The dog barked. It chased the postman.'", answer: "Example: 'Barking loudly, the dog chased the postman.' The participial phrase 'Barking loudly' modifies 'the dog' and combines the two ideas.", explanation: "A participial phrase ('Barking...') combines the actions and modifies the dog." },
            { type: "mcq", difficulty: "hard", q: "Which sentence both controls a complex structure AND keeps parallelism?", options: ["Although tired, she finished the race, accepted her medal, and was smiling.", "Although tired, she finished the race, accepted her medal, and smiled.", "Although tired she finished, accepting, smiled.", "Tired she race finished medal smiled."], answer: 1, explanation: "The dependent clause is handled well and the three verbs (finished, accepted, smiled) are parallel." },
            { type: "long", difficulty: "hard", q: "Write a sentence that uses a participial phrase and a sentence that uses parallel structure in a list. Identify the technique in each.", answer: "Answers vary. A strong response gives one sentence with a correctly placed participial phrase (modifying the right noun) and one with a parallel list (matching grammatical forms), correctly identifying each technique.", explanation: "A correct participial-phrase sentence and a parallel-list sentence, each identified." }
          ]
        },

        {
          text: "Format dialogue correctly.",
          resources: [
            { type: "reading", title: "Dialogue punctuation", provider: "Grammarly", url: "https://www.grammarly.com/blog/punctuation-in-dialogue/", note: "Quotation marks, commas and new lines." },
            { type: "reading", title: "Writing dialogue", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Conventions for dialogue." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Direct and Indirect Speech; Punctuation", note: "This is covered in Wren & Martin's grammar section, 'Direct and Indirect Speech; Punctuation'.", url: "" },
            { type: "book", enrichment: true, title: "Eats, Shoots & Leaves", author: "Lynne Truss (children's edition available)", chapter: "(punctuation, dialogue & sentence sense)", note: "Enrichment read (great for ages 11–13): a witty tour of punctuation and why it really matters.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Which is correctly punctuated dialogue?", options: ["\"Let's go\" she said.", "\"Let's go,\" she said.", "Let's go, she said.", "\"Let's go,\" She said"], answer: 1, explanation: "A comma goes inside the quotation marks before the dialogue tag, which is lowercase." },
            { type: "tf", difficulty: "easy", q: "You usually start a new paragraph each time a different character speaks.", answer: true, explanation: "New speaker, new line is the standard convention." },
            { type: "mcq", difficulty: "easy", q: "Spoken words in dialogue are enclosed in:", options: ["brackets", "quotation marks", "asterisks", "nothing"], answer: 1, explanation: "Quotation marks enclose what is spoken." },
            { type: "mcq", difficulty: "medium", q: "Which is correct when the dialogue tag comes first?", options: ["She said \"hello.\"", "She said, \"Hello.\"", "She said \"Hello\".", "She said: hello."], answer: 1, explanation: "Comma after the tag, capital letter to begin the speech, end punctuation inside the quotes." },
            { type: "tf", difficulty: "medium", q: "End punctuation (like a comma or full stop) usually goes INSIDE the closing quotation mark.", answer: true, explanation: "In standard usage, end punctuation sits inside the quotes." },
            { type: "mcq", difficulty: "medium", q: "Which correctly punctuates a question in dialogue?", options: ["\"Are you ready?\" he asked.", "\"Are you ready,\" he asked?", "\"Are you ready\"? he asked.", "Are you ready? he asked."], answer: 0, explanation: "The question mark goes inside the quotes; the tag is lowercase." },
            { type: "tf", difficulty: "medium", q: "A dialogue tag (e.g. 'she said') is usually written in lowercase when it follows the quoted speech.", answer: true, explanation: "'...,\" she said.' — the tag is lowercase." },
            { type: "short", difficulty: "medium", q: "Why do writers start a new paragraph for each new speaker?", answer: "It makes the conversation clear and easy to follow, so readers can tell who is speaking without confusion. Without new paragraphs, lines of dialogue would run together and become hard to track.", explanation: "New paragraphs per speaker keep the conversation clear and easy to follow." },
            { type: "mcq", difficulty: "medium", q: "Correct this: He shouted \"watch out\".", options: ["He shouted, \"Watch out!\"", "He shouted \"watch out\".", "He shouted, watch out.", "\"He shouted watch out\"."], answer: 0, explanation: "Comma after the tag, capital W, exclamation inside the quotes." },
            { type: "tf", difficulty: "medium", q: "When dialogue is interrupted by a tag ('\"I think,\" she said, \"we should go.\"'), commas separate the parts.", answer: true, explanation: "Commas correctly set off the interrupting tag." },
            { type: "mcq", difficulty: "hard", q: "Which is correctly punctuated?", options: ["\"I'm leaving now\", said Tom \"see you later\".", "\"I'm leaving now,\" said Tom. \"See you later.\"", "\"I'm leaving now\" said Tom, \"see you later\".", "I'm leaving now, said Tom, see you later."], answer: 1, explanation: "Comma before the tag, full stop after it, and a new capitalised sentence in quotes." },
            { type: "long", difficulty: "hard", q: "Write a short exchange of dialogue between two characters (at least two lines each), using correct dialogue punctuation and paragraphing.", answer: "Answers vary. A strong response uses quotation marks correctly, places punctuation inside the quotes, uses lowercase tags after speech, and starts a new paragraph/line for each new speaker — producing a clear, correctly formatted exchange.", explanation: "Correct quotation marks, punctuation placement, tags, and new line per speaker." }
          ]
        },

        {
          text: "Control voice — sarcasm, humour, formal and persuasive tone.",
          resources: [
            { type: "reading", title: "Tone & voice", provider: "LiteraryDevices", url: "https://literarydevices.net/tone/", note: "How word choice shapes voice." },
            { type: "reading", title: "Writing voice", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "Adjusting tone for purpose." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Style and Tone", note: "Style and tone are developed in Wren & Martin's Composition section.", url: "" },
            { type: "book", enrichment: true, title: "Eats, Shoots & Leaves", author: "Lynne Truss (children's edition available)", chapter: "(punctuation, dialogue & sentence sense)", note: "Enrichment read (great for ages 11–13): a witty tour of punctuation and why it really matters.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "'Voice' in writing refers to:", options: ["how loud you read", "the distinctive style and personality of the writing", "the font", "the page count"], answer: 1, explanation: "Voice is the writer's distinctive style and attitude." },
            { type: "tf", difficulty: "medium", q: "A skilled writer can shift tone (e.g. formal, humorous, sarcastic) to suit the purpose and audience.", answer: true, explanation: "Controlling tone is a mark of stylistic skill." },
            { type: "mcq", difficulty: "easy", q: "'Tone' is the writer's:", options: ["handwriting", "attitude toward the subject or audience", "page count", "spelling"], answer: 1, explanation: "Tone conveys the writer's attitude." },
            { type: "mcq", difficulty: "easy", q: "Sarcasm usually means:", options: ["saying exactly what you mean", "saying the opposite of what you mean, often mockingly", "writing formally", "asking a question"], answer: 1, explanation: "Sarcasm says the opposite of the intended meaning, often to mock." },
            { type: "tf", difficulty: "medium", q: "A formal tone avoids slang and contractions and uses standard, polished language.", answer: true, explanation: "Formal tone is polished and avoids casual language." },
            { type: "mcq", difficulty: "medium", q: "Which sentence has a sarcastic tone?", options: ["I'm really looking forward to the trip.", "Oh great, another three-hour wait. Wonderful.", "The bus arrives at 9 a.m.", "Please be on time."], answer: 1, explanation: "It says 'great' and 'wonderful' to mean the opposite — sarcasm." },
            { type: "short", difficulty: "medium", q: "How does word choice help create tone?", answer: "The words a writer picks carry connotations and feeling — 'cheap' vs 'affordable', 'stubborn' vs 'determined'. Choosing positive, negative, formal, casual or exaggerated words signals the writer's attitude and sets the tone.", explanation: "Word choice (connotation, register) signals the writer's attitude — the tone." },
            { type: "mcq", difficulty: "medium", q: "Which tone best suits a job application letter?", options: ["sarcastic", "formal and respectful", "joking", "angry"], answer: 1, explanation: "Formal, respectful tone suits professional writing." },
            { type: "tf", difficulty: "medium", q: "The same information can be written in a humorous, formal, or persuasive tone depending on the writer's purpose.", answer: true, explanation: "Tone is adjusted to purpose and audience." },
            { type: "short", difficulty: "medium", q: "Give an example of how you'd change a sentence from a casual tone to a formal tone.", answer: "Answers vary. A good example shows a casual version (e.g. 'Hey, can you sort this out ASAP?') rewritten formally (e.g. 'Could you please resolve this matter as soon as possible?'), removing slang/contractions and using polished language.", explanation: "Removing slang/contractions and using polished wording shifts casual to formal." },
            { type: "mcq", difficulty: "hard", q: "A writer wants to gently criticise something while entertaining readers. The best tonal choice is likely:", options: ["a flat, neutral report", "humour or light sarcasm", "an angry rant", "a formal legal tone"], answer: 1, explanation: "Humour or light sarcasm can criticise while entertaining." },
            { type: "long", difficulty: "hard", q: "Take one simple message (e.g. 'the event is cancelled') and write it in two different tones (e.g. formal and humorous). Explain how you created each tone.", answer: "Answers vary. A strong response presents the same message in two clearly different tones and explains the choices that created each — word choice, formality, sentence style, humour or sarcasm — showing deliberate control of voice.", explanation: "One message in two distinct tones + explanation of how each tone was created." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e8-speaking",
      title: "Speaking, Listening & Discussion",
      subject: "Speaking",
      icon: "🗣️",
      summary: "Harkness discussion, active listening, building on peers' ideas, mini-debates, oral presentation, persuasive speech delivery, speaking with evidence and responding to counterclaims.",
      objectives: [

        {
          text: "Participate in Harkness discussion and build on peers' ideas.",
          resources: [
            { type: "reading", title: "Collaborative discussion", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Student-led seminar skills." },
            { type: "reading", title: "Academic conversation", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Extending and connecting ideas." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical techniques that make spoken arguments and debate memorable.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Building on a peer's idea in discussion means:", options: ["repeating it exactly", "adding to, extending or thoughtfully responding to it", "ignoring it", "changing the subject"], answer: 1, explanation: "You connect your contribution to what was just said." },
            { type: "short", difficulty: "medium", q: "Give one sentence starter that helps you build on a classmate's point.", answer: "Examples: 'Building on what ___ said...', 'I agree with ___, and I'd add...', 'That connects to...', 'To extend that idea...'. (Any phrase that links to a peer's point.)", explanation: "Sentence starters link your idea to a peer's." },
            { type: "mcq", difficulty: "easy", q: "In a Harkness-style seminar, the discussion is mainly led by:", options: ["the teacher alone", "the students themselves", "no one", "a textbook"], answer: 1, explanation: "Harkness discussion is student-led." },
            { type: "tf", difficulty: "easy", q: "A good discussion has many participants contributing, not just one person.", answer: true, explanation: "Balanced participation enriches discussion." },
            { type: "tf", difficulty: "medium", q: "Supporting your point with evidence from the text strengthens your contribution.", answer: true, explanation: "Evidence grounds discussion points." },
            { type: "mcq", difficulty: "medium", q: "Which contribution best 'builds on' a peer's point?", options: ["'That's wrong.'", "'Adding to what Aisha said, the ending also shows this because...'", "'Anyway, moving on.'", "'I wasn't listening.'"], answer: 1, explanation: "It links to and extends the peer's idea with reasoning." },
            { type: "tf", difficulty: "medium", q: "Disagreeing respectfully — challenging the idea, not the person — is valuable in discussion.", answer: true, explanation: "Respectful disagreement keeps discussion civil and productive." },
            { type: "short", difficulty: "medium", q: "Why is building on others' ideas important in a seminar?", answer: "It keeps the discussion connected and collaborative rather than a string of unrelated comments. Building on others shows you've listened, deepens the conversation, and helps the group develop ideas together.", explanation: "Building on others keeps discussion connected and develops ideas collaboratively." },
            { type: "mcq", difficulty: "medium", q: "Asking an open question in a seminar (e.g. 'Why might the author end it that way?') helps by:", options: ["shutting down talk", "inviting deeper thinking and more responses", "showing off", "ending the discussion"], answer: 1, explanation: "Open questions spark deeper, fuller discussion." },
            { type: "tf", difficulty: "medium", q: "Preparing by reading and annotating the text beforehand helps you contribute well to a seminar.", answer: true, explanation: "Preparation gives you ideas and evidence to share." },
            { type: "mcq", difficulty: "hard", q: "A student who only states their own view and never refers to others is failing to:", options: ["speak at all", "build on peers and make the discussion collaborative", "use grammar", "sit down"], answer: 1, explanation: "Collaborative discussion requires connecting to others' contributions." },
            { type: "long", difficulty: "hard", q: "Describe how you would contribute well to a Harkness discussion on a text — include preparing, listening, building on others, and using evidence.", answer: "Answers vary. A strong response covers preparation (reading/annotating, noting questions and evidence), active listening, building on or respectfully challenging peers' points, supporting contributions with textual evidence, and helping include others — showing understanding of collaborative, evidence-based discussion.", explanation: "Prepare + listen + build on peers + use evidence + include others." }
          ]
        },

        {
          text: "Use active listening.",
          resources: [
            { type: "reading", title: "Active listening", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Listening to understand and respond." },
            { type: "reading", title: "Discussion skills", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Listening and responding well." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical techniques that make spoken arguments and debate memorable.", url: "" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Active listening includes paying attention, not interrupting, and responding to what was actually said.", answer: true, explanation: "Active listening means truly engaging with the speaker." },
            { type: "mcq", difficulty: "medium", q: "Which shows active listening?", options: ["Planning your reply while ignoring the speaker", "Paraphrasing the speaker's point before responding", "Talking over others", "Looking at your phone"], answer: 1, explanation: "Paraphrasing shows you listened and understood." },
            { type: "mcq", difficulty: "easy", q: "A key part of active listening is:", options: ["interrupting often", "focusing fully on the speaker", "thinking about lunch", "checking your phone"], answer: 1, explanation: "Full attention to the speaker is central to active listening." },
            { type: "tf", difficulty: "easy", q: "Nodding and eye contact can show a speaker that you are listening.", answer: true, explanation: "Such non-verbal cues signal attention." },
            { type: "mcq", difficulty: "medium", q: "Asking a clarifying question (e.g. 'Do you mean...?') during a discussion shows that you:", options: ["weren't listening", "are listening and want to understand fully", "are bored", "want to change the topic"], answer: 1, explanation: "Clarifying questions reflect engaged listening." },
            { type: "short", difficulty: "medium", q: "Why is listening just as important as speaking in a discussion?", answer: "Because good responses depend on understanding what others said — you can only build on, agree with, or thoughtfully challenge a point if you truly listened. Listening keeps the discussion connected and shows respect for others' contributions.", explanation: "Listening enables connected, respectful responses; without it discussion falls apart." },
            { type: "tf", difficulty: "medium", q: "Planning your own response while someone is still talking can stop you from really listening.", answer: true, explanation: "Rehearsing your reply distracts from genuine listening." },
            { type: "mcq", difficulty: "medium", q: "'Paraphrasing' a speaker means:", options: ["repeating word-for-word", "restating their point in your own words to check understanding", "ignoring them", "translating to another language"], answer: 1, explanation: "Paraphrasing confirms you understood the speaker." },
            { type: "tf", difficulty: "medium", q: "Active listening can help reduce misunderstandings in a discussion.", answer: true, explanation: "Listening carefully prevents misreading others' points." },
            { type: "short", difficulty: "medium", q: "Name two behaviours that show you are actively listening.", answer: "Any two of: making eye contact, nodding, not interrupting, asking clarifying questions, paraphrasing the speaker's point, and responding directly to what they said.", explanation: "Eye contact, not interrupting, clarifying questions and paraphrasing all show active listening." },
            { type: "mcq", difficulty: "hard", q: "In a debate, actively listening to your opponent helps you because:", options: ["it wastes time", "you can respond directly to their actual points and rebut them", "it is irrelevant", "you can ignore them"], answer: 1, explanation: "Listening lets you rebut the real argument, not a misheard one." },
            { type: "long", difficulty: "hard", q: "Describe a situation where poor listening caused a problem in a discussion or conversation, and explain how active listening could have helped.", answer: "Answers vary. A strong response describes a realistic situation where not listening caused a misunderstanding or conflict, and explains how active-listening behaviours (attention, clarifying, paraphrasing, not interrupting) would have prevented or resolved it.", explanation: "A poor-listening problem + how active listening would have helped." }
          ]
        },

        {
          text: "Take part in mini-debates and respond to counterclaims.",
          resources: [
            { type: "reading", title: "Debate basics", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Structuring and arguing a debate." },
            { type: "reading", title: "Counterclaims & rebuttal", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html", note: "Answering the opposing side." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical techniques that make spoken arguments and debate memorable.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A 'counterclaim' in a debate is:", options: ["your own main point", "the opposing side's argument", "a grammar error", "the conclusion"], answer: 1, explanation: "A counterclaim is the opposing argument you must answer." },
            { type: "short", difficulty: "medium", q: "How should you respond to a counterclaim in a debate?", answer: "Acknowledge it fairly, then rebut it — explain with reasons and evidence why your position is still stronger. Don't ignore or mock it; address it directly and respectfully.", explanation: "Acknowledge, then rebut with reasons and evidence." },
            { type: "mcq", difficulty: "easy", q: "A 'rebuttal' is:", options: ["agreeing with the other side", "your response that answers a counterclaim", "your opening statement", "a summary"], answer: 1, explanation: "A rebuttal answers and counters the opposing argument." },
            { type: "tf", difficulty: "easy", q: "In a debate, you should support your claims with reasons and evidence.", answer: true, explanation: "Evidence makes debate arguments convincing." },
            { type: "tf", difficulty: "medium", q: "A strong debater anticipates the opponent's likely counterclaims in advance.", answer: true, explanation: "Anticipating objections lets you prepare rebuttals." },
            { type: "mcq", difficulty: "medium", q: "Attacking your opponent personally instead of their argument is:", options: ["a strong rebuttal", "the ad hominem fallacy", "good evidence", "active listening"], answer: 1, explanation: "Attacking the person, not the argument, is an ad hominem fallacy." },
            { type: "short", difficulty: "medium", q: "Why is it more convincing to rebut the STRONGEST version of an opposing argument?", answer: "Because answering the strongest objection shows your position can withstand serious challenge, which is far more persuasive than knocking down a weak or distorted version. It makes your argument look robust and fair.", explanation: "Rebutting the strongest objection proves your case is robust and fair." },
            { type: "tf", difficulty: "medium", q: "Staying calm and respectful makes a debater more persuasive than getting angry.", answer: true, explanation: "Composure and respect strengthen credibility (ethos)." },
            { type: "mcq", difficulty: "medium", q: "The usual structure for handling the opposing side is to:", options: ["rebut, then state the counterclaim", "state the counterclaim, then rebut it", "ignore the counterclaim", "only state the counterclaim"], answer: 1, explanation: "Present the opposing view, then answer it." },
            { type: "short", difficulty: "medium", q: "Give a respectful phrase you could use to introduce a rebuttal.", answer: "Examples: 'I understand why some might think..., however...', 'While that's a fair point, the evidence shows...', 'It's true that..., but...'. Any phrase that acknowledges the other side before countering it.", explanation: "Acknowledge-then-counter phrases introduce a respectful rebuttal." },
            { type: "mcq", difficulty: "hard", q: "In a mini-debate on uniforms, your opponent says uniforms limit self-expression. The strongest rebuttal would:", options: ["call them silly", "acknowledge the concern, then argue uniforms reduce bullying/peer pressure and self-expression can happen in other ways", "ignore it", "change the topic"], answer: 1, explanation: "It fairly acknowledges the point, then counters with reasons and evidence." },
            { type: "long", difficulty: "hard", q: "Pick a debate topic. State your claim, give one likely counterclaim, and write a rebuttal that acknowledges and answers it.", answer: "Answers vary. A strong response states a clear claim on a debatable topic, gives a genuine counterclaim, and provides a rebuttal that fairly acknowledges the counterclaim then answers it with reasons or evidence — staying respectful.", explanation: "A claim + a real counterclaim + a fair, evidence-based rebuttal." }
          ]
        },

        {
          text: "Deliver an oral presentation or persuasive speech.",
          resources: [
            { type: "reading", title: "Oral presentation skills", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Planning and delivering a talk." },
            { type: "reading", title: "Speech delivery", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "Engaging an audience aloud." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical techniques that make spoken arguments and debate memorable.", url: "" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Eye contact, clear voice and pacing all help an oral presentation succeed.", answer: true, explanation: "Delivery skills are key to effective speaking." },
            { type: "short", difficulty: "medium", q: "Name two delivery techniques that make a spoken presentation effective.", answer: "Any two of: clear and varied volume, good pace (not too fast), eye contact, pauses for emphasis, confident posture, gestures, and a strong opening and closing.", explanation: "Voice, pace, eye contact and emphasis make delivery effective." },
            { type: "mcq", difficulty: "easy", q: "Speaking too fast during a presentation can:", options: ["help the audience", "make it hard for the audience to follow", "improve clarity", "show confidence only"], answer: 1, explanation: "Rushing makes a talk hard to follow." },
            { type: "mcq", difficulty: "easy", q: "A good presentation usually opens by:", options: ["mumbling", "grabbing attention and previewing the topic", "apologising", "reading silently"], answer: 1, explanation: "A strong, engaging opening hooks the audience." },
            { type: "tf", difficulty: "medium", q: "Pausing briefly after an important point can give it emphasis and let it sink in.", answer: true, explanation: "Strategic pauses add emphasis." },
            { type: "mcq", difficulty: "medium", q: "Which body-language choice helps a presenter connect with the audience?", options: ["staring at the floor", "making eye contact and standing confidently", "turning your back", "hiding behind notes"], answer: 1, explanation: "Eye contact and confident posture build connection." },
            { type: "tf", difficulty: "medium", q: "Practising a presentation beforehand usually improves delivery and confidence.", answer: true, explanation: "Rehearsal builds fluency and reduces nerves." },
            { type: "short", difficulty: "medium", q: "Why shouldn't you simply read a presentation word-for-word from a script?", answer: "Reading word-for-word usually means little eye contact, a flat monotone, and less connection with the audience. Speaking from notes or memory lets you engage listeners, vary your tone, and respond to them — making the talk more natural and persuasive.", explanation: "Reading verbatim flattens delivery and loses audience connection." },
            { type: "mcq", difficulty: "medium", q: "Visual aids (like slides) in a presentation should:", options: ["contain every word you say", "support and clarify your points, not replace your speaking", "distract the audience", "be unrelated"], answer: 1, explanation: "Visual aids support, not replace, the spoken content." },
            { type: "tf", difficulty: "medium", q: "Varying your tone of voice keeps a presentation engaging.", answer: true, explanation: "Vocal variety prevents monotony and holds attention." },
            { type: "mcq", difficulty: "hard", q: "A presenter who speaks in a flat monotone, reads from notes, and avoids eye contact is most likely to:", options: ["captivate the audience", "lose the audience's attention and seem less persuasive", "be highly persuasive", "improve clarity"], answer: 1, explanation: "Monotone delivery with no eye contact disengages the audience." },
            { type: "long", difficulty: "hard", q: "Plan the delivery of a short persuasive speech: describe how you would open, use your voice and body, and close to maximise impact.", answer: "Answers vary. A strong response describes an attention-grabbing opening, deliberate voice use (volume, pace, pauses, variety), confident body language (eye contact, posture, gestures), and a memorable closing or call to action — showing awareness of effective delivery.", explanation: "A planned opening + voice/body techniques + a strong closing." }
          ]
        },

        {
          text: "Speak with evidence to support points.",
          resources: [
            { type: "reading", title: "Using evidence in speech", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Backing spoken claims with support." },
            { type: "reading", title: "Evidence-based discussion", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Citing the text when you speak." },
            { type: "book", enrichment: true, title: "The Elements of Eloquence: How to Turn the Perfect English Phrase", author: "Mark Forsyth", chapter: "(rhetorical figures, one per chapter)", note: "Enrichment read (accessible stretch): the rhetorical techniques that make spoken arguments and debate memorable.", url: "" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Referring to specific evidence from a text makes a spoken point more convincing.", answer: true, explanation: "Evidence strengthens spoken arguments." },
            { type: "mcq", difficulty: "easy", q: "Which is the strongest way to support a claim in discussion?", options: ["'Because I said so.'", "'In the text it says... which shows...'", "'Everyone knows it.'", "'I just feel that way.'"], answer: 1, explanation: "Citing the text and explaining it is the strongest support." },
            { type: "mcq", difficulty: "easy", q: "'Evidence' in a discussion means:", options: ["your feelings only", "specific facts, examples or quotes that support your point", "the loudest opinion", "a guess"], answer: 1, explanation: "Evidence is concrete support for a claim." },
            { type: "tf", difficulty: "easy", q: "Saying 'everyone knows it' is weaker support than giving a specific example.", answer: true, explanation: "Vague appeals are weaker than concrete evidence." },
            { type: "mcq", difficulty: "medium", q: "After stating evidence aloud, a strong speaker will:", options: ["move on instantly", "explain how the evidence supports their point", "repeat the evidence five times", "change the topic"], answer: 1, explanation: "Explaining the evidence links it to the claim." },
            { type: "short", difficulty: "medium", q: "Why is evidence-based speaking more persuasive than just stating opinions?", answer: "Evidence gives listeners concrete reasons to accept your point, rather than just your say-so. Facts, examples and quotes make a claim credible and harder to dismiss, while bare opinion can be waved away.", explanation: "Evidence gives listeners concrete, credible reasons to accept a claim." },
            { type: "tf", difficulty: "medium", q: "Knowing the text well lets you quote or refer to specific parts when you speak.", answer: true, explanation: "Familiarity with the text supplies ready evidence." },
            { type: "mcq", difficulty: "medium", q: "Which contribution uses evidence best?", options: ["'The character is brave.'", "'The character is brave — when the fire starts, she runs in to save the child despite her fear.'", "'I think she's brave I guess.'", "'Brave, yes.'"], answer: 1, explanation: "It names the trait AND gives specific supporting evidence." },
            { type: "tf", difficulty: "medium", q: "Preparing evidence in advance helps you speak confidently and support your points.", answer: true, explanation: "Prepared evidence makes spoken arguments stronger and more confident." },
            { type: "short", difficulty: "medium", q: "Name one type of evidence you could use to support a spoken claim.", answer: "Any of: a quotation from the text, a specific example or event, a statistic or fact, an expert's view, or a personal observation that's relevant. (Any concrete support.)", explanation: "Quotes, examples, facts/statistics and expert views are all evidence." },
            { type: "mcq", difficulty: "hard", q: "In a discussion, the most persuasive speaker is usually the one who:", options: ["talks loudest", "supports claims with specific, relevant evidence and explains it", "talks the most", "interrupts others"], answer: 1, explanation: "Evidence and clear explanation persuade, not volume or quantity." },
            { type: "long", difficulty: "hard", q: "Choose a claim about a text or topic you know. State it, then provide specific evidence and explain aloud (in writing) how the evidence supports it.", answer: "Answers vary. A strong response states a clear claim, gives specific, relevant evidence (a quote, example, fact or statistic), and explains how that evidence supports the claim — modelling evidence-based speaking.", explanation: "A claim + specific evidence + an explanation of how it supports the claim." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e8-research",
      title: "Research & Capstone Skills",
      subject: "Research",
      icon: "🎓",
      summary: "Primary source inquiry, advanced source evaluation, refining research questions, selecting evidence, multi-source synthesis, MLA reinforcement, and developing and defending a capstone project.",
      objectives: [

        {
          text: "Conduct primary source inquiry.",
          resources: [
            { type: "reading", title: "Primary vs secondary sources", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/index.html", note: "Working with original sources." },
            { type: "reading", title: "Using sources", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Research with evidence." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "A PRIMARY source is:", options: ["someone's later commentary on an event", "an original, first-hand record (e.g. a diary, letter, photo, interview)", "a textbook summary", "an encyclopaedia"], answer: 1, explanation: "Primary sources are first-hand, original materials." },
            { type: "tf", difficulty: "easy", q: "A diary written by someone who lived through an event is a primary source.", answer: true, explanation: "First-hand accounts are primary sources." },
            { type: "mcq", difficulty: "medium", q: "A SECONDARY source is:", options: ["an original first-hand record", "a later work that analyses or summarises primary sources", "always unreliable", "never used in research"], answer: 1, explanation: "Secondary sources interpret or summarise primary material." },
            { type: "match", difficulty: "medium", q: "Sort each into primary or secondary.", pairs: [["A soldier's wartime letter", "Primary"], ["A historian's book about that war", "Secondary"], ["An original interview recording", "Primary"], ["A textbook summary of an era", "Secondary"]], explanation: "First-hand = primary; later analysis/summary = secondary." },
            { type: "tf", difficulty: "easy", q: "Photographs taken at the time of an event can be primary sources.", answer: true, explanation: "Original first-hand records like photos are primary sources." },
            { type: "mcq", difficulty: "medium", q: "Why are primary sources valuable in research?", options: ["they are always short", "they give direct, first-hand evidence from the time or person", "they need no analysis", "they are easy to find"], answer: 1, explanation: "Primary sources offer direct, first-hand evidence." },
            { type: "tf", difficulty: "medium", q: "Primary sources can still be biased — a diary reflects one person's view.", answer: true, explanation: "First-hand doesn't mean unbiased; a single perspective can be partial." },
            { type: "short", difficulty: "medium", q: "Give two examples of primary sources you might use to research a historical event.", answer: "Any two of: letters, diaries, photographs, original newspaper reports from the time, interviews/oral histories, official documents, speeches, or artefacts from the period.", explanation: "Letters, diaries, photos, original reports, interviews and documents are primary sources." },
            { type: "mcq", difficulty: "medium", q: "When using a primary source, you should still:", options: ["accept it as perfectly objective", "consider its perspective, purpose and possible bias", "ignore who created it", "assume it covers everything"], answer: 1, explanation: "Primary sources need critical evaluation too." },
            { type: "tf", difficulty: "medium", q: "Combining primary sources with reliable secondary sources can give a fuller, more balanced picture.", answer: true, explanation: "Using both types together strengthens research." },
            { type: "mcq", difficulty: "hard", q: "To research how ordinary people felt during an event, the BEST primary source would be:", options: ["a modern textbook", "letters or diaries written by people at the time", "an encyclopaedia entry", "a recent summary article"], answer: 1, explanation: "First-hand letters/diaries directly reveal people's feelings at the time." },
            { type: "long", difficulty: "hard", q: "Choose a topic. Name a primary source and a secondary source you could use, and explain what each would contribute to your research.", answer: "Answers vary. A strong response names a genuine primary source (first-hand) and a secondary source (later analysis) for a topic, and explains the distinct contribution of each — direct evidence from the primary, context/interpretation from the secondary.", explanation: "A primary and a secondary source + the distinct contribution of each." }
          ]
        },

        {
          text: "Refine research questions and select strong evidence.",
          resources: [
            { type: "reading", title: "Refining research questions", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/research_overview/index.html", note: "Sharpening your focus." },
            { type: "reading", title: "Selecting evidence", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Choosing the best support." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "The BEST evidence for a claim is:", options: ["any evidence at all", "relevant, credible and specific to the claim", "the longest quote", "your opinion"], answer: 1, explanation: "Strong evidence is relevant, credible and on-point." },
            { type: "tf", difficulty: "medium", q: "As research deepens, it's normal to refine and narrow your research question.", answer: true, explanation: "Questions sharpen as you learn more." },
            { type: "mcq", difficulty: "easy", q: "A research question that is too broad should be:", options: ["left as is", "narrowed to a more specific focus", "made even broader", "deleted"], answer: 1, explanation: "Broad questions should be narrowed for focus." },
            { type: "tf", difficulty: "easy", q: "Evidence should be relevant to the specific point you are making.", answer: true, explanation: "Irrelevant evidence doesn't support the claim." },
            { type: "mcq", difficulty: "medium", q: "Which piece of evidence is strongest for the claim 'recycling saves energy'?", options: ["'Recycling is popular.'", "'Making aluminium from recycled metal uses about 95% less energy.'", "'I like recycling.'", "'Bins are green.'"], answer: 1, explanation: "A specific, relevant statistic directly supports the claim." },
            { type: "short", difficulty: "medium", q: "What makes a piece of evidence 'strong'?", answer: "It is relevant (directly supports the claim), credible (from a reliable, knowledgeable source), and specific (a concrete fact, example, statistic or quote rather than something vague). Strong evidence convinces because it is on-point and trustworthy.", explanation: "Strong evidence is relevant, credible and specific." },
            { type: "tf", difficulty: "medium", q: "It's better to use a few strong, relevant pieces of evidence than many weak or off-topic ones.", answer: true, explanation: "Quality and relevance beat quantity in evidence." },
            { type: "mcq", difficulty: "medium", q: "Refining a research question usually means making it:", options: ["vaguer", "more specific, focused and answerable", "longer for no reason", "a yes/no question"], answer: 1, explanation: "Refining sharpens focus and answerability." },
            { type: "short", difficulty: "medium", q: "Narrow this question: 'What about climate change?'", answer: "Answers vary. A strong example narrows it, e.g. 'How does rising sea level threaten coastal cities in South Asia?' — specific, focused and researchable. Any reasonable narrowing is acceptable.", explanation: "Add a specific angle (effect, place, group) to focus the question." },
            { type: "tf", difficulty: "medium", q: "Discarding evidence that doesn't fit your refined question keeps your research focused.", answer: true, explanation: "Cutting off-topic evidence maintains focus and relevance." },
            { type: "mcq", difficulty: "hard", q: "You have lots of evidence but it points in many directions. The best step is to:", options: ["use all of it regardless", "refine your question and keep only the most relevant, credible evidence", "give up", "pick the longest quotes"], answer: 1, explanation: "Refining the question and selecting relevant evidence restores focus." },
            { type: "long", difficulty: "hard", q: "Take a broad topic, refine it into a focused research question, and describe what kind of evidence you would look for to answer it.", answer: "Answers vary. A strong response narrows a broad topic into a specific, researchable question and describes the kinds of relevant, credible evidence (data, expert sources, primary sources, examples) needed to answer it.", explanation: "A refined question + a description of the relevant, credible evidence needed." }
          ]
        },

        {
          text: "Synthesise multiple sources.",
          resources: [
            { type: "reading", title: "Synthesising sources", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/using_research/index.html", note: "Combining sources into one argument." },
            { type: "reading", title: "Multi-source writing", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Weaving evidence from several texts." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "To 'synthesise' sources means to:", options: ["list them one after another with no links", "combine ideas from several sources into a connected argument", "use only one source", "copy them"], answer: 1, explanation: "Synthesis weaves multiple sources into a unified point." },
            { type: "tf", difficulty: "medium", q: "Synthesis shows how different sources agree, disagree or build on each other.", answer: true, explanation: "Synthesis relates sources to one another." },
            { type: "mcq", difficulty: "easy", q: "Simply summarising each source one by one with no connections is:", options: ["true synthesis", "NOT synthesis — it lacks links between the sources", "the best method", "impossible"], answer: 1, explanation: "Listing summaries isn't synthesis; synthesis connects them." },
            { type: "tf", difficulty: "easy", q: "Synthesis combines information from more than one source.", answer: true, explanation: "By definition, synthesis draws on multiple sources." },
            { type: "mcq", difficulty: "medium", q: "Which sentence shows synthesis?", options: ["Source A says X. Source B says Y.", "Both Source A and Source B agree that X, though A adds that Y, strengthening the case for Z.", "Source A is long.", "I like Source B."], answer: 1, explanation: "It connects the sources and builds a combined point." },
            { type: "short", difficulty: "medium", q: "What is the difference between summarising sources and synthesising them?", answer: "Summarising restates what each source says, usually one at a time. Synthesising combines them — showing how they relate, agree, disagree or build on each other to support your own argument. Synthesis links sources; summary just reports each.", explanation: "Summary reports each source; synthesis connects them into one argument." },
            { type: "tf", difficulty: "medium", q: "When sources disagree, a good synthesis acknowledges the disagreement rather than hiding it.", answer: true, explanation: "Strong synthesis addresses conflicting views honestly." },
            { type: "mcq", difficulty: "medium", q: "A useful first step before synthesising is to:", options: ["ignore the sources", "find the points where sources connect, agree or differ", "use only one source", "copy them all"], answer: 1, explanation: "Identifying relationships between sources enables synthesis." },
            { type: "tf", difficulty: "medium", q: "Synthesis should serve YOUR argument, not just describe the sources.", answer: true, explanation: "Synthesis uses sources to build your own point." },
            { type: "short", difficulty: "medium", q: "Why is synthesis a more advanced skill than just quoting one source?", answer: "Because it requires understanding several sources, seeing how they relate, and weaving them into a single coherent argument of your own. It shows deeper thinking than simply repeating one source — you're combining and evaluating multiple voices.", explanation: "Synthesis requires relating and combining multiple sources into your own argument." },
            { type: "mcq", difficulty: "hard", q: "Two sources give different statistics on the same issue. Good synthesis would:", options: ["pick one and ignore the other silently", "present both, note the difference, and discuss what it means", "delete both", "claim they're identical"], answer: 1, explanation: "Synthesis acknowledges and interprets the differing evidence." },
            { type: "long", difficulty: "hard", q: "Describe how you would synthesise three sources on one topic into a single paragraph that supports a claim. What would you look for and how would you connect them?", answer: "Answers vary. A strong response explains identifying where the three sources agree, disagree or add to each other, then weaving them together around a claim — using connecting language ('both... and', 'however', 'building on this') rather than listing them separately, so they jointly support the point.", explanation: "Find relationships among the sources + connect them around a claim, not list them." }
          ]
        },

        {
          text: "Reinforce MLA citation.",
          resources: [
            { type: "reading", title: "MLA style guide", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_general_format.html", note: "Full MLA formatting reference." },
            { type: "reading", title: "MLA Works Cited", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_works_cited_page_basic_format.html", note: "Building a Works Cited list." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Every source you cite in the text should also appear on the Works Cited page.", answer: true, explanation: "In-text citations and the Works Cited list must match." },
            { type: "mcq", difficulty: "medium", q: "An MLA Works Cited entry for a book typically begins with the:", options: ["page number", "author's last name", "publisher", "price"], answer: 1, explanation: "MLA entries start with the author's last name for alphabetising." },
            { type: "mcq", difficulty: "easy", q: "A correct MLA in-text citation looks like:", options: ["(Lee 23)", "[Lee book page 23]", "Lee said page 23", "{23 Lee}"], answer: 0, explanation: "MLA in-text style is (Author Page): (Lee 23)." },
            { type: "tf", difficulty: "easy", q: "The Works Cited list is arranged alphabetically by author's last name.", answer: true, explanation: "MLA alphabetises entries by author surname." },
            { type: "mcq", difficulty: "medium", q: "If you name the author in your sentence ('Lee argues...'), the in-text citation can give just the:", options: ["author again", "page number", "title", "date"], answer: 1, explanation: "If the author is named in the sentence, only the page number is needed." },
            { type: "short", difficulty: "medium", q: "What is the purpose of citing sources in MLA format?", answer: "To give credit to the original authors (avoiding plagiarism) and to let readers find and check the sources you used. A consistent format makes citations clear and standardised.", explanation: "Citations credit sources and let readers locate/verify them." },
            { type: "tf", difficulty: "medium", q: "MLA format also sets rules for the whole paper, like double-spacing and a header with your last name and page number.", answer: true, explanation: "MLA covers overall document formatting too." },
            { type: "mcq", difficulty: "medium", q: "Which information belongs in an MLA Works Cited entry for an online article?", options: ["author, title, website name, date, and URL", "only the URL", "just the author's first name", "the time you read it"], answer: 0, explanation: "MLA web entries include author, title, site, date and location (URL)." },
            { type: "tf", difficulty: "medium", q: "Citing sources correctly is part of academic honesty.", answer: true, explanation: "Proper citation credits others and avoids plagiarism." },
            { type: "mcq", difficulty: "medium", q: "If a source has no named author, an MLA entry usually begins with the:", options: ["page number", "title of the work", "publisher's phone number", "your name"], answer: 1, explanation: "With no author, MLA starts the entry with the title." },
            { type: "short", difficulty: "hard", q: "Explain how in-text citations and the Works Cited page work together in MLA.", answer: "In-text citations (author + page) briefly mark where borrowed material appears so readers see exactly what came from a source. The Works Cited page gives the full details of each source so readers can locate it. Together they credit sources and let readers trace and verify every reference.", explanation: "In-text marks the borrowing; Works Cited gives full details — together they credit and enable verification." },
            { type: "long", difficulty: "hard", q: "Describe the MLA citation steps you would follow when using a quotation from a book in an essay, from in-text citation to Works Cited.", answer: "Answers vary. A strong response covers: introduce and quote the passage with quotation marks; add an in-text citation (author's last name + page number); and create a matching Works Cited entry (author, title, publisher, year) alphabetised by surname — showing in-text and Works Cited work together.", explanation: "Quote + in-text citation (author, page) + a matching Works Cited entry." }
          ]
        },

        {
          text: "Develop and defend a capstone project.",
          resources: [
            { type: "reading", title: "Building a research project", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/index.html", note: "From question to final product." },
            { type: "reading", title: "Argument defence", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Defending claims with evidence." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Defending a capstone project means being able to:", options: ["avoid all questions", "explain and justify your claims with evidence and answer challenges", "read it aloud only", "change your topic"], answer: 1, explanation: "Defence requires justifying your work and answering questions." },
            { type: "short", difficulty: "medium", q: "Name two things a strong capstone project should include.", answer: "Any two of: a clear focused research question or thesis, credible evidence from multiple sources, synthesis of that evidence, proper citation (MLA), acknowledgement of counterarguments, and a clear conclusion or defence.", explanation: "Focused thesis, credible synthesised evidence, citation and a defended conclusion." },
            { type: "mcq", difficulty: "easy", q: "A capstone project usually begins with a:", options: ["random fact", "focused research question or thesis", "conclusion", "bibliography only"], answer: 1, explanation: "A focused question/thesis guides the whole project." },
            { type: "tf", difficulty: "easy", q: "A capstone is a larger, culminating project that draws together skills you've learned.", answer: true, explanation: "Capstones are substantial, skill-integrating projects." },
            { type: "tf", difficulty: "medium", q: "Anticipating likely questions or objections helps you prepare to defend your project.", answer: true, explanation: "Preparing for challenges strengthens your defence." },
            { type: "mcq", difficulty: "medium", q: "When defending your project, if asked a tough question you can't fully answer, the best response is to:", options: ["pretend you didn't hear", "respond honestly with what you do know and acknowledge limits", "make up an answer", "end the defence"], answer: 1, explanation: "Honesty and acknowledging limits is more credible than bluffing." },
            { type: "short", difficulty: "medium", q: "Why is evidence from multiple credible sources important in a capstone?", answer: "Multiple credible sources make your argument stronger and more convincing — they show your conclusion isn't based on one possibly-biased source, and that different evidence points the same way. It builds reliability and lets you synthesise a fuller picture.", explanation: "Multiple credible sources strengthen reliability and let you synthesise a fuller case." },
            { type: "tf", difficulty: "medium", q: "Acknowledging the limitations of your project can actually make your defence more credible.", answer: true, explanation: "Honesty about limits shows mature, credible scholarship." },
            { type: "mcq", difficulty: "medium", q: "A clear conclusion in a capstone should:", options: ["introduce brand-new evidence", "restate the thesis and sum up how the evidence supports it", "list unrelated facts", "apologise"], answer: 1, explanation: "Conclusions reinforce the thesis and synthesise the support." },
            { type: "short", difficulty: "medium", q: "What does it mean to 'defend' your thesis in a capstone presentation?", answer: "It means explaining and justifying your thesis with reasons and evidence, showing how your research supports it, and responding to questions or objections from the audience — proving your claim can withstand scrutiny.", explanation: "Defending = justifying the thesis with evidence and answering challenges." },
            { type: "mcq", difficulty: "hard", q: "Addressing the strongest possible objection to your capstone claim makes your defence:", options: ["weaker and risky", "more convincing, because you've shown it withstands serious challenge", "irrelevant", "shorter only"], answer: 1, explanation: "Engaging the strongest objection demonstrates a robust, well-tested argument." },
            { type: "long", difficulty: "hard", q: "Outline a capstone project: state a focused thesis, list the kinds of evidence you'd gather, and describe how you would defend it against one likely objection.", answer: "Answers vary. A strong response gives a specific, arguable thesis, lists the evidence/sources to gather (including credible and ideally primary sources), and describes anticipating and answering one likely objection with reasons or evidence — showing how the project would be built and defended.", explanation: "A focused thesis + evidence plan + how to defend against a likely objection." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e8-mastery",
      title: "Mastery Skills (Grades 7–8)",
      subject: "Skills",
      icon: "🏆",
      summary: "The cross-grade skills that mark mastery: textual analysis, citing specific evidence, analysing authorial choices, constructing logical claims, avoiding fallacies, acknowledging counterarguments, and moving from literal comprehension to rhetorical analysis.",
      objectives: [

        {
          text: "Analyse texts closely and cite specific evidence.",
          resources: [
            { type: "reading", title: "Close reading & evidence", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Analysing texts with precise support." },
            { type: "reading", title: "Textual evidence", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Citing the text accurately." }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "Strong textual analysis always:", options: ["avoids the text", "grounds claims in specific evidence from the text", "summarises the plot only", "uses no quotes"], answer: 1, explanation: "Analysis must be anchored in specific textual evidence." },
            { type: "tf", difficulty: "easy", q: "Citing a specific line or detail is stronger than making a vague general claim.", answer: true, explanation: "Specific evidence is more convincing than generalities." },
            { type: "mcq", difficulty: "easy", q: "'Close reading' means:", options: ["reading quickly with no attention", "carefully examining a text's details, language and meaning", "reading only the title", "skipping difficult parts"], answer: 1, explanation: "Close reading examines a text carefully and in detail." },
            { type: "tf", difficulty: "easy", q: "Quotations and specific details serve as evidence in analysis.", answer: true, explanation: "Quotes and details support analytical claims." },
            { type: "mcq", difficulty: "medium", q: "Which is the strongest evidence for the claim 'the mood is tense'?", options: ["'The story is interesting.'", "'The text says her 'hands trembled' and the room fell 'deathly silent'.'", "'It was a book.'", "'I felt something.'"], answer: 1, explanation: "Specific quoted details directly support the claim about mood." },
            { type: "short", difficulty: "medium", q: "Why should analysis quote or point to specific parts of the text?", answer: "Because specific evidence proves the claim and shows it's based on the text, not just opinion. Pointing to exact words or details makes the analysis convincing and lets the reader see exactly what supports the interpretation.", explanation: "Specific evidence proves claims and grounds analysis in the text." },
            { type: "tf", difficulty: "medium", q: "After citing evidence, you should explain how it supports your point.", answer: true, explanation: "Evidence needs analysis explaining its relevance." },
            { type: "mcq", difficulty: "medium", q: "A vague claim like 'the author uses good words' could be improved by:", options: ["leaving it vague", "naming specific words and explaining their effect", "deleting the analysis", "adding more vague claims"], answer: 1, explanation: "Specific examples and explanation strengthen analysis." },
            { type: "tf", difficulty: "medium", q: "Close analysis can examine word choice, imagery, structure and tone, not just plot.", answer: true, explanation: "Close reading looks at how a text is crafted, beyond events." },
            { type: "short", difficulty: "medium", q: "What three things make up a well-analysed point (often called CEA)?", answer: "A claim (your point), evidence (a specific quote or detail), and analysis (an explanation of how the evidence supports the claim). Together they make a complete analytical point.", explanation: "Claim + evidence + analysis = a complete analytical point." },
            { type: "mcq", difficulty: "hard", q: "Which sentence is true analysis rather than summary?", options: ["The character leaves home and travels far.", "The author's choice of the word 'fled' (not 'left') suggests the character is escaping fear, deepening the theme of freedom.", "There is a journey in the story.", "The story has many pages."], answer: 1, explanation: "It examines a specific word choice and its effect — analysis, not summary." },
            { type: "long", difficulty: "hard", q: "Choose a short text or passage. Make a claim about it, cite one specific piece of evidence, and analyse how that evidence supports your claim.", answer: "Answers vary. A strong response states a clear claim, quotes or points to a specific detail as evidence, and explains precisely how that evidence supports the claim — demonstrating close analysis grounded in the text.", explanation: "A claim + specific cited evidence + analysis linking them." }
          ]
        },

        {
          text: "Construct logical claims and avoid fallacies.",
          resources: [
            { type: "reading", title: "Logical reasoning", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/logic_in_argumentative_writing/index.html", note: "Sound reasoning in argument." },
            { type: "reading", title: "Logical fallacies", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/logic_in_argumentative_writing/fallacies.html", note: "Errors to avoid." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "A logical fallacy is:", options: ["a strong, valid argument", "a flaw or error in reasoning that weakens an argument", "a type of evidence", "a citation style"], answer: 1, explanation: "Fallacies are reasoning errors that undermine arguments." },
            { type: "mcq", difficulty: "medium", q: "Which is an example of a fallacy?", options: ["Supporting a claim with relevant data", "'Everyone believes it, so it must be true' (bandwagon)", "Acknowledging a counterargument", "Citing an expert correctly"], answer: 1, explanation: "Bandwagon — popularity doesn't prove truth — is a classic fallacy." },
            { type: "mcq", difficulty: "easy", q: "A logical claim should be supported by:", options: ["reasons and evidence", "volume and repetition", "nothing", "insults"], answer: 0, explanation: "Sound claims rest on reasons and evidence." },
            { type: "match", difficulty: "medium", q: "Match each fallacy to its description.", pairs: [["Ad hominem", "Attacks the person, not the argument"], ["Bandwagon", "'Everyone does it, so it's right'"], ["Hasty generalisation", "A broad conclusion from too little evidence"], ["False cause", "Assumes one thing caused another without proof"]], explanation: "These are common reasoning errors." },
            { type: "mcq", difficulty: "medium", q: "'My uncle smoked and lived to 90, so smoking is safe' is which fallacy?", options: ["valid reasoning", "hasty generalisation (one case)", "metaphor", "citation"], answer: 1, explanation: "One example can't outweigh broad evidence — a hasty generalisation." },
            { type: "tf", difficulty: "medium", q: "A fallacy can make an argument SOUND convincing even though its reasoning is flawed.", answer: true, explanation: "Fallacies are persuasive but logically weak." },
            { type: "short", difficulty: "medium", q: "What makes a claim 'logical' rather than just an opinion?", answer: "A logical claim is supported by sound reasoning and relevant evidence — reasons that genuinely lead to the conclusion. An opinion alone is just a belief; a logical claim shows WHY it should be accepted, without relying on faulty reasoning.", explanation: "Logical claims rest on sound reasoning and evidence, not just belief." },
            { type: "mcq", difficulty: "medium", q: "'You can't trust her argument because she's young' is which fallacy?", options: ["logos", "ad hominem (attacking the person)", "valid reasoning", "synthesis"], answer: 1, explanation: "It attacks the person's age, not the argument — ad hominem." },
            { type: "tf", difficulty: "medium", q: "Recognising fallacies helps you both strengthen your own arguments and spot weak ones from others.", answer: true, explanation: "Fallacy-awareness improves your reasoning and your critical reading." },
            { type: "mcq", difficulty: "medium", q: "A 'slippery slope' fallacy claims that:", options: ["evidence supports a claim", "one small step will inevitably lead to extreme consequences, without proof", "two sources agree", "a person is wrong because of who they are"], answer: 1, explanation: "Slippery slope assumes a chain of dire results without justification." },
            { type: "short", difficulty: "hard", q: "Why is it important to avoid fallacies in your own writing?", answer: "Because fallacies weaken your argument — readers who spot them will distrust your reasoning, and your conclusion won't truly be supported. Avoiding fallacies makes your argument sound, fair and genuinely convincing rather than merely persuasive on the surface.", explanation: "Fallacies undermine credibility and don't truly support the claim." },
            { type: "long", difficulty: "hard", q: "Construct a logical claim with a reason and evidence, then give an example of a fallacy someone might wrongly use to argue the same point.", answer: "Answers vary. A strong response gives a sound claim supported by a logical reason and relevant evidence, and then an example of a fallacy (bandwagon, ad hominem, hasty generalisation, etc.) that someone might use instead — correctly identifying why it's flawed.", explanation: "A sound claim (reason + evidence) + a contrasting fallacy, correctly identified." }
          ]
        },

        {
          text: "Acknowledge counterarguments and organise essays effectively.",
          resources: [
            { type: "reading", title: "Counterargument", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/index.html", note: "Engaging opposing views." },
            { type: "reading", title: "Essay organisation", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Structuring strong essays." }
          ],
          quiz: [
            { type: "tf", difficulty: "medium", q: "Acknowledging a counterargument can actually make your own argument stronger and more credible.", answer: true, explanation: "Addressing the other side shows fairness and strengthens your case." },
            { type: "mcq", difficulty: "easy", q: "A well-organised essay has a clear:", options: ["introduction, body and conclusion", "list of random facts", "single long paragraph", "title only"], answer: 0, explanation: "Clear structure (intro, body, conclusion) organises an essay." },
            { type: "mcq", difficulty: "easy", q: "A counterargument is:", options: ["your own thesis", "an opposing viewpoint", "a citation", "a conclusion"], answer: 1, explanation: "A counterargument is the opposing side." },
            { type: "tf", difficulty: "easy", q: "Each body paragraph should support the essay's thesis.", answer: true, explanation: "Body paragraphs develop the central argument." },
            { type: "mcq", difficulty: "medium", q: "After presenting a counterargument, a strong essay will:", options: ["agree and give up", "rebut it, explaining why the main argument still holds", "ignore it", "repeat it"], answer: 1, explanation: "Acknowledge then rebut — that's how to handle a counterargument." },
            { type: "tf", difficulty: "medium", q: "Transitions help connect paragraphs and keep an essay organised and coherent.", answer: true, explanation: "Transitions create flow and coherence." },
            { type: "short", difficulty: "medium", q: "Why should an argument essay address opposing views rather than ignore them?", answer: "Addressing opposing views shows you've fairly considered other perspectives, makes you appear reasonable and credible, and lets you weaken the opposition by answering it. Ignoring obvious objections leaves your argument looking one-sided and easy to challenge.", explanation: "Engaging counterarguments builds credibility and pre-empts objections." },
            { type: "mcq", difficulty: "medium", q: "The introduction of an argument essay usually ends with the:", options: ["conclusion", "thesis statement", "bibliography", "first piece of evidence"], answer: 1, explanation: "The thesis typically closes the introduction." },
            { type: "tf", difficulty: "medium", q: "A logical order of paragraphs helps the reader follow the argument.", answer: true, explanation: "Logical organisation aids understanding." },
            { type: "mcq", difficulty: "medium", q: "Where is a counterargument-and-rebuttal often placed in an essay?", options: ["never included", "in a body paragraph, before the conclusion", "in the title", "in the bibliography"], answer: 1, explanation: "It's usually addressed in the body before concluding." },
            { type: "short", difficulty: "hard", q: "Describe a good structure for an argument essay that includes a counterargument.", answer: "Introduction with a clear thesis; body paragraphs each making a point supported by evidence and analysis; a paragraph that acknowledges a counterargument and rebuts it; and a conclusion that reinforces the thesis. Transitions connect the paragraphs throughout.", explanation: "Intro/thesis → supporting body paragraphs → counterargument + rebuttal → conclusion, with transitions." },
            { type: "long", difficulty: "hard", q: "Choose a claim. Outline an argument essay for it, including your thesis, two supporting points, and one counterargument you would acknowledge and rebut.", answer: "Answers vary. A strong response gives a clear thesis, two distinct supporting points (ideally with evidence), and one genuine counterargument with a rebuttal — showing a well-organised, balanced argument structure.", explanation: "A thesis + two supporting points + a counterargument with rebuttal." }
          ]
        },

        {
          text: "Move from literal comprehension to rhetorical analysis.",
          resources: [
            { type: "reading", title: "From comprehension to analysis", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Reading beyond the surface." },
            { type: "reading", title: "Rhetorical analysis", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/rhetorical_strategies.html", note: "Analysing how texts persuade." }
          ],
          quiz: [
            { type: "mcq", difficulty: "hard", q: "Moving from literal comprehension to rhetorical analysis means going from understanding WHAT a text says to understanding:", options: ["nothing more", "HOW and WHY it makes its effect on the reader", "the page count", "the price"], answer: 1, explanation: "Rhetorical analysis examines how and why a text achieves its effects." },
            { type: "short", difficulty: "medium", q: "What is the difference between literal comprehension and rhetorical analysis?", answer: "Literal comprehension is understanding what a text directly says (the basic meaning). Rhetorical analysis goes further, examining how the writer makes choices (language, appeals, structure) to affect and persuade the reader, and why.", explanation: "Comprehension = what it says; rhetorical analysis = how/why it works." },
            { type: "mcq", difficulty: "easy", q: "'Literal comprehension' means understanding:", options: ["the hidden persuasion", "what the text directly says", "the author's biography", "the page numbers"], answer: 1, explanation: "Literal comprehension is grasping the basic, stated meaning." },
            { type: "tf", difficulty: "easy", q: "Rhetorical analysis looks at the techniques a writer uses to persuade or affect readers.", answer: true, explanation: "It examines persuasive choices and their effects." },
            { type: "mcq", difficulty: "medium", q: "Which question belongs to rhetorical analysis rather than literal comprehension?", options: ["What happened in the text?", "Why did the author repeat that phrase, and what effect does it create?", "Who is the main character?", "When is it set?"], answer: 1, explanation: "Asking about the effect of a technique is rhetorical analysis." },
            { type: "tf", difficulty: "medium", q: "You need to understand a text literally before you can analyse it rhetorically.", answer: true, explanation: "Comprehension is the foundation for analysis." },
            { type: "mcq", difficulty: "medium", q: "A rhetorical analysis of a speech would focus on:", options: ["only what it says", "the appeals, devices and structure the speaker uses to persuade", "the speaker's clothing", "the room's size"], answer: 1, explanation: "Rhetorical analysis examines persuasive techniques and their effect." },
            { type: "tf", difficulty: "medium", q: "Identifying a technique (e.g. repetition) is not enough — rhetorical analysis also explains its effect.", answer: true, explanation: "Analysis explains the purpose and effect, not just names the device." },
            { type: "short", difficulty: "medium", q: "Give an example of a rhetorical-analysis question you could ask about an advertisement.", answer: "Examples: 'How does the ad use emotion (pathos) to persuade buyers?', 'Why did they choose this image/colour and what effect does it have?', 'How does the slogan position the audience?'. Any question about how/why it persuades.", explanation: "Rhetorical-analysis questions ask how/why a text persuades or affects its audience." },
            { type: "mcq", difficulty: "medium", q: "The shift from comprehension to analysis is a shift from:", options: ["reading to not reading", "understanding meaning to evaluating craft and effect", "writing to speaking", "fiction to non-fiction"], answer: 1, explanation: "It moves from grasping meaning to examining how the text is crafted and its effect." },
            { type: "tf", difficulty: "hard", q: "Mastery in English includes being able to analyse not just what a text means, but how its language and structure shape the reader's response.", answer: true, explanation: "That deeper, how-and-why analysis is a mark of mastery." },
            { type: "long", difficulty: "hard", q: "Take a short persuasive text (an ad, a speech line, or a headline). First state what it literally says, then analyse rhetorically HOW and WHY it tries to affect its audience.", answer: "Answers vary. A strong response first gives the literal meaning (what it says), then analyses the rhetorical choices — language, appeals (ethos/pathos/logos), devices, structure — and explains how and why they are designed to affect or persuade the audience.", explanation: "Literal meaning first, then analysis of how/why the text persuades — comprehension to rhetorical analysis." }
          ]
        }

      ]
    }

  ]
});
