/* English — Grade 7: Core Development
   PER-OBJECTIVE schema: each objective is { text, resources[], quiz[] }.
   FULL depth: 12–15 questions per objective, easy→hard, mixed types
   (mcq / tf / short / long / match), each with an explanation. */
window.CURRICULUM_ENGLISH.grades.push({
  id: "grade-7",
  name: "Grade 7",
  tagline: "Core Development",
  color: "#e11d48",
  blurb: "Core themes (identity, social issues, dystopia), literary analysis (plot, conflict, characterisation, figurative language, point of view), non-fiction and media (bias, rhetoric, fallacies), the CEA paragraph and essay, sentence structure, and research with CRAAP and MLA.",
  topics: [

    /* ============================================================ */
    {
      id: "e7-themes",
      title: "Core Themes & Units",
      subject: "Themes",
      icon: "🧭",
      summary: "Big-idea units that frame the year's reading and writing: identity and self-expression, fact vs fiction, social issues, historical and dystopian fiction, and media & advertising.",
      objectives: [

        {
          text: "Explore identity and self-expression as a literary theme.",
          resources: [
            { type: "reading", title: "Identity-themed texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Stories and poems exploring who we are." },
            { type: "reading", title: "Theme & big ideas", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "How texts develop themes like identity." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A text exploring 'identity' is mainly concerned with:", options: ["the weather", "who a person is and how they see themselves", "maths formulas", "the price of goods"], answer: 1, explanation: "Identity themes explore selfhood — who characters are and how they express it." },
            { type: "mcq", difficulty: "easy", q: "'Self-expression' means:", options: ["hiding who you are", "showing your thoughts, feelings and identity to others", "copying someone else exactly", "staying silent"], answer: 1, explanation: "Self-expression is revealing one's identity, ideas and feelings." },
            { type: "tf", difficulty: "easy", q: "A character's identity can include their culture, beliefs, values and experiences.", answer: true, explanation: "Identity is shaped by many things — culture, values, history and more." },
            { type: "mcq", difficulty: "easy", q: "Which is a way characters often express identity in stories?", options: ["the page numbers", "their choices, words, and how they treat others", "the font", "the publisher"], answer: 1, explanation: "Choices, speech and behaviour reveal who a character is." },
            { type: "tf", difficulty: "medium", q: "A coming-of-age story often explores how a young character's sense of identity develops.", answer: true, explanation: "Coming-of-age narratives focus on growth and self-discovery." },
            { type: "mcq", difficulty: "medium", q: "A character who hides their true self to fit in is wrestling with a conflict between:", options: ["maths and science", "their real identity and others' expectations", "two settings", "the title and the plot"], answer: 1, explanation: "This is an identity conflict — authenticity vs belonging." },
            { type: "short", difficulty: "medium", q: "Name one way an author can reveal a character's sense of identity.", answer: "Through the character's choices, what they value, how they speak, their relationships, their background or culture, or moments of self-reflection. (Any sensible way.)", explanation: "Identity is shown through choices, values, voice and reflection." },
            { type: "mcq", difficulty: "medium", q: "The 'Identity in Making' idea suggests that identity is:", options: ["fixed at birth and never changes", "something that develops and is shaped over time", "only about appearance", "decided by other people alone"], answer: 1, explanation: "Identity is presented as evolving — 'in the making' through experience." },
            { type: "short", difficulty: "medium", q: "Why might writers explore identity and self-expression in their work?", answer: "To help readers understand themselves and others, to explore universal questions about belonging and difference, to build empathy, and because the search for identity is a powerful, relatable human experience.", explanation: "Identity themes are universal and build self-understanding and empathy." },
            { type: "tf", difficulty: "medium", q: "Two readers from different backgrounds might connect with an identity-themed text in different ways.", answer: true, explanation: "Readers bring their own experiences, so they relate to identity themes differently." },
            { type: "mcq", difficulty: "hard", q: "A poem in which the speaker lists the languages, foods and customs of their home is most likely exploring:", options: ["a maths concept", "cultural identity and belonging", "the weather", "a grammar rule"], answer: 1, explanation: "Such specific cultural detail signals a theme of cultural identity." },
            { type: "short", difficulty: "hard", q: "Explain the difference between a character's identity and how they choose to express it.", answer: "Identity is who a character truly is — their values, culture, beliefs and sense of self. Expression is how they show that outwardly — through words, choices, art, clothing or actions. Sometimes the two match; sometimes a character hides or struggles to express their real identity.", explanation: "Identity = who you are inside; expression = how you show it." },
            { type: "long", difficulty: "hard", q: "Choose a character from any story, film or book and explain what shapes their identity and one moment where they express (or struggle to express) who they are.", answer: "Answers vary. A strong response names a character, identifies forces that shape their identity (culture, family, experiences, values), and describes a specific moment of self-expression or identity conflict, explaining what it reveals about who they are.", explanation: "A clear character + what shapes their identity + a specific expression/struggle moment." }
          ]
        },

        {
          text: "Distinguish fact from fiction and understand why the line can blur.",
          resources: [
            { type: "reading", title: "Fact vs fiction", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Texts that mix real events with invention." },
            { type: "reading", title: "Fiction vs non-fiction", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Genres based on truth and invention." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Fiction is writing that comes mainly from the author's imagination, even if inspired by real life.", answer: true, explanation: "Fiction is invented, though it may draw on reality." },
            { type: "mcq", difficulty: "easy", q: "Non-fiction is writing that is:", options: ["entirely imaginary", "based on real facts, people and events", "always a poem", "never true"], answer: 1, explanation: "Non-fiction presents real, factual content." },
            { type: "mcq", difficulty: "easy", q: "Which is an example of fiction?", options: ["a science textbook", "a novel about an invented detective", "a real news report", "a biography"], answer: 1, explanation: "An invented detective story is fiction." },
            { type: "tf", difficulty: "easy", q: "A biography of a real person is non-fiction.", answer: true, explanation: "Biographies recount real lives, so they are non-fiction." },
            { type: "mcq", difficulty: "medium", q: "Historical fiction is a genre that:", options: ["is entirely factual", "blends invented characters/events with a real historical setting", "contains no facts at all", "is always about the future"], answer: 1, explanation: "Historical fiction sets imagined stories within real historical contexts." },
            { type: "tf", difficulty: "medium", q: "Even fiction can contain true facts (e.g. a real city or historical event used as a backdrop).", answer: true, explanation: "Fiction often weaves real details into invented stories." },
            { type: "short", difficulty: "medium", q: "Why can the line between fact and fiction sometimes blur?", answer: "Because some writing mixes both — historical fiction, 'based on a true story' films, or memoirs that dramatise real events. Authors may invent details, dialogue or characters around real facts, so it isn't purely one or the other.", explanation: "Genres like historical fiction and dramatised true stories mix invention with fact." },
            { type: "mcq", difficulty: "medium", q: "A film labelled 'based on a true story' usually means it:", options: ["is 100% accurate in every detail", "uses real events but may add or change details for the story", "is completely made up", "is a documentary"], answer: 1, explanation: "'Based on' signals real events with some dramatisation." },
            { type: "match", difficulty: "medium", q: "Match each text to fact or fiction.", pairs: [["A fantasy novel", "Fiction"], ["A newspaper report", "Fact (non-fiction)"], ["An autobiography", "Fact (non-fiction)"], ["A made-up short story", "Fiction"]], explanation: "Invented = fiction; real/true = non-fiction." },
            { type: "tf", difficulty: "medium", q: "Knowing whether a text is fact or fiction changes how critically you judge its truth.", answer: true, explanation: "You expect non-fiction to be accurate; fiction is judged differently." },
            { type: "mcq", difficulty: "hard", q: "Why might an author choose historical fiction rather than a straight history book to tell a story?", options: ["to avoid all real facts", "to bring the past alive through characters and emotion while keeping a real setting", "because facts are unimportant", "to confuse the reader"], answer: 1, explanation: "Fiction lets readers experience history emotionally through invented characters." },
            { type: "short", difficulty: "hard", q: "How should a reader treat 'facts' that appear inside a clearly fictional story?", answer: "A reader should enjoy them as part of the story but check anything they want to rely on as true, since fiction can mix real and invented details freely. Real settings or events may be accurate, but dialogue, characters and specifics are often invented.", explanation: "Verify before trusting 'facts' in fiction — invention and reality are mixed." },
            { type: "long", difficulty: "hard", q: "Explain, with an example, how a single story could contain both factual and fictional elements.", answer: "Answers vary. A strong response gives an example (e.g. historical fiction set during a real war) and identifies which elements are factual (the real event, time, place) and which are fictional (invented characters, dialogue, personal subplots), showing understanding that the two can combine in one text.", explanation: "A clear example separating its real (factual) and invented (fictional) elements." }
          ]
        },

        {
          text: "Read and discuss texts that raise social issues.",
          resources: [
            { type: "reading", title: "Social-issue texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Texts on fairness, community and change." },
            { type: "reading", title: "Reading informational texts", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Analysing texts about real-world issues." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A 'social issue' in a text is:", options: ["a grammar rule", "a problem affecting people or society (e.g. fairness, the environment)", "a punctuation mark", "the title page"], answer: 1, explanation: "Social issues are real problems in society that texts can explore." },
            { type: "mcq", difficulty: "easy", q: "Which of these is a social issue?", options: ["the colour of a book cover", "access to clean water", "the number of chapters", "the author's name"], answer: 1, explanation: "Access to clean water is a real societal problem — a social issue." },
            { type: "tf", difficulty: "easy", q: "Stories can raise awareness about social issues like poverty, fairness or the environment.", answer: true, explanation: "Literature often shines a light on real-world problems." },
            { type: "mcq", difficulty: "easy", q: "Reading about a social issue from a character's point of view can help a reader feel:", options: ["bored", "empathy and understanding", "nothing", "confused about grammar"], answer: 1, explanation: "Experiencing an issue through a character builds empathy." },
            { type: "tf", difficulty: "medium", q: "A story can explore a social issue without directly stating its opinion about it.", answer: true, explanation: "Authors often let events and characters raise the issue, leaving readers to reflect." },
            { type: "short", difficulty: "medium", q: "Why do authors write stories about social issues?", answer: "To raise awareness, make readers think and feel, encourage empathy, question what's unfair, or inspire change. Stories make abstract issues personal and relatable.", explanation: "Stories humanise social issues and prompt reflection or action." },
            { type: "mcq", difficulty: "medium", q: "When discussing a social-issue text, the most thoughtful contribution would:", options: ["ignore the issue", "use evidence from the text to explore the issue and listen to other views", "only state a personal feeling with no support", "change the subject"], answer: 1, explanation: "Good discussion uses textual evidence and considers multiple perspectives." },
            { type: "short", difficulty: "medium", q: "Give one example of a social issue you might find explored in a story for your age.", answer: "Examples: bullying, fairness/inequality, friendship and belonging, the environment, prejudice, family difficulties, or standing up for what's right. (Any real societal problem.)", explanation: "Age-appropriate texts often explore bullying, fairness, belonging and the environment." },
            { type: "tf", difficulty: "medium", q: "Discussing a social issue respectfully means listening to views that differ from your own.", answer: true, explanation: "Respectful discussion welcomes and considers different perspectives." },
            { type: "mcq", difficulty: "hard", q: "A story shows a character treated unfairly because of where they come from. The social issue being explored is most likely:", options: ["spelling", "prejudice or discrimination", "the weather", "punctuation"], answer: 1, explanation: "Unfair treatment based on origin points to prejudice/discrimination." },
            { type: "short", difficulty: "hard", q: "How can fiction be a powerful way to explore a social issue compared with just reading the facts?", answer: "Fiction puts a human face on an issue — readers experience it through characters they care about, which creates empathy and emotional understanding that bare facts may not. It lets readers imagine 'what it's like', making the issue memorable and moving.", explanation: "Fiction makes issues personal and emotional, building empathy beyond facts." },
            { type: "long", difficulty: "hard", q: "Think of a story, film or text that deals with a social issue. Name the issue, explain how the text raises it, and describe what it made you think or feel.", answer: "Answers vary. A strong response names a specific text and social issue, explains how the text presents it (through characters, events or conflict), and reflects thoughtfully on the reader's own response — what it made them think, question or feel.", explanation: "A specific text + the issue + how it's raised + a genuine personal reflection." }
          ]
        },

        {
          text: "Recognise the features of historical and dystopian fiction.",
          resources: [
            { type: "reading", title: "Genre features", provider: "LiteraryDevices", url: "https://literarydevices.net/genre/", note: "What defines different fiction genres." },
            { type: "reading", title: "Dystopian & historical texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Examples to read and analyse." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A 'dystopia' is a fictional society that is:", options: ["perfect and ideal", "imagined as deeply flawed, often controlled or frightening", "set in the real past", "always cheerful"], answer: 1, explanation: "A dystopia is a dark, often oppressive imagined society (opposite of a utopia)." },
            { type: "mcq", difficulty: "easy", q: "Historical fiction is set:", options: ["in the future", "in a real time and place from the past", "in outer space only", "with no setting"], answer: 1, explanation: "Historical fiction uses a real past setting." },
            { type: "tf", difficulty: "easy", q: "A 'utopia' is an imagined perfect society — the opposite of a dystopia.", answer: true, explanation: "Utopia = ideal; dystopia = its dark opposite." },
            { type: "mcq", difficulty: "easy", q: "Which is a typical feature of dystopian fiction?", options: ["a happy, free, fair society", "an oppressive government or system that controls people", "no conflict at all", "a focus on cooking"], answer: 1, explanation: "Control and oppression are hallmarks of dystopia." },
            { type: "tf", difficulty: "medium", q: "Dystopian fiction often warns readers about dangers in our own society by imagining a worse future.", answer: true, explanation: "Dystopias act as cautionary 'what if' warnings." },
            { type: "short", difficulty: "medium", q: "Name two common features of dystopian fiction.", answer: "Any two of: an oppressive government or ruling power, loss of freedom, surveillance/control, propaganda, a protagonist who questions the system, a damaged or controlled environment, and a warning about society.", explanation: "Oppression, lost freedom, surveillance, propaganda and a questioning hero are common." },
            { type: "mcq", difficulty: "medium", q: "To write convincing historical fiction, an author must research:", options: ["future technology", "the real customs, events and details of the chosen time period", "nothing at all", "only the title"], answer: 1, explanation: "Authentic historical detail makes the setting believable." },
            { type: "match", difficulty: "medium", q: "Match each genre to a feature.", pairs: [["Dystopian fiction", "Oppressive, controlled future society"], ["Historical fiction", "Real past setting with invented story"], ["Utopian fiction", "An imagined ideal society"]], explanation: "Each genre has defining features of time and society." },
            { type: "tf", difficulty: "medium", q: "A dystopian story usually includes a character who begins to question or resist the system.", answer: true, explanation: "A questioning/resisting protagonist is a common dystopian feature." },
            { type: "mcq", difficulty: "hard", q: "A novel set during a real historical war, following an invented family, belongs to which genre?", options: ["dystopian fiction", "historical fiction", "science fiction", "non-fiction"], answer: 1, explanation: "Real past event + invented characters = historical fiction." },
            { type: "short", difficulty: "hard", q: "How can a dystopia, even though it is set in an imaginary future, comment on the real present?", answer: "By exaggerating present-day trends or fears (e.g. surveillance, inequality, loss of freedom) into an imagined future, a dystopia warns readers what could happen if those problems grow unchecked. It uses the fictional world to make readers reflect on their own society.", explanation: "Dystopias exaggerate present problems as a warning about the real world." },
            { type: "long", difficulty: "hard", q: "Compare historical fiction and dystopian fiction: name one key difference and one thing they can have in common.", answer: "Answers vary. A strong response identifies a clear difference (e.g. historical fiction is set in the real past while dystopia imagines a flawed future) and a genuine similarity (e.g. both blend invented stories with serious ideas about society, both can explore how power affects people, both mix imagination with commentary on the real world).", explanation: "A real difference (past vs imagined future) and a true shared trait (societal commentary, invented story)." }
          ]
        },

        {
          text: "Examine how media and advertising shape messages.",
          resources: [
            { type: "reading", title: "Analysing advertisements", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "How ads target audiences and persuade." },
            { type: "reading", title: "Media literacy", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Reading and questioning media messages." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The main purpose of most advertising is to:", options: ["inform neutrally", "persuade you to buy or believe something", "tell a true story", "teach grammar"], answer: 1, explanation: "Advertising is designed to persuade." },
            { type: "mcq", difficulty: "easy", q: "'Media' includes things like:", options: ["only books", "TV, news, websites, social media and advertisements", "only spoken words", "only photographs"], answer: 1, explanation: "Media covers many channels that share messages with audiences." },
            { type: "tf", difficulty: "easy", q: "Advertisers usually have a specific target audience in mind.", answer: true, explanation: "Ads are designed to appeal to particular groups." },
            { type: "mcq", difficulty: "easy", q: "A slogan in an ad is:", options: ["a long paragraph of facts", "a short, catchy phrase that sticks in your memory", "the price tag", "the company's address"], answer: 1, explanation: "Slogans are short, memorable phrases used to persuade." },
            { type: "tf", difficulty: "medium", q: "Media messages are constructed choices — someone decided what to include and leave out.", answer: true, explanation: "All media is built by people making deliberate choices." },
            { type: "short", difficulty: "medium", q: "Name one technique advertisers use to persuade an audience.", answer: "Any of: emotional appeals, celebrity endorsement, catchy slogans, attractive images, 'everyone's doing it' (bandwagon), special offers, repetition, or appealing to fears/desires.", explanation: "Ads use emotional and persuasive techniques to influence audiences." },
            { type: "mcq", difficulty: "medium", q: "An ad using a famous athlete to sell shoes is relying mainly on:", options: ["logic and statistics", "celebrity endorsement / appeal to authority", "boredom", "grammar rules"], answer: 1, explanation: "A celebrity's fame and trust are used to sell the product." },
            { type: "match", difficulty: "medium", q: "Match each advertising technique to its description.", pairs: [["Bandwagon", "'Everyone is using it, so should you'"], ["Celebrity endorsement", "A famous person promotes the product"], ["Emotional appeal", "Plays on feelings like fear or happiness"], ["Slogan", "A short, catchy memorable phrase"]], explanation: "These are common persuasive advertising techniques." },
            { type: "tf", difficulty: "medium", q: "Being 'media literate' means you can question and critically analyse media messages rather than just accepting them.", answer: true, explanation: "Media literacy is the skill of analysing media critically." },
            { type: "mcq", difficulty: "hard", q: "An advert shows only happy, attractive people using a snack and never mentions nutrition. This is an example of:", options: ["giving full, balanced information", "selectively showing positives and leaving out negatives to persuade", "a news report", "a research study"], answer: 1, explanation: "Ads often show only the positives — a persuasive, one-sided choice." },
            { type: "short", difficulty: "hard", q: "Why is it important to think critically about advertisements and media messages?", answer: "Because media is designed to influence us and often shows only one side. Thinking critically helps us spot persuasion techniques, recognise bias, avoid being misled, and make our own informed decisions rather than simply believing or buying what we're told.", explanation: "Critical thinking guards against manipulation and supports informed choices." },
            { type: "long", difficulty: "hard", q: "Choose an advertisement you've seen. Describe its target audience, its main message, and two techniques it uses to persuade.", answer: "Answers vary. A strong response identifies a specific ad, names a plausible target audience, states the main message it wants viewers to accept/do, and identifies two genuine persuasive techniques (e.g. emotional appeal, celebrity, slogan, bandwagon, attractive visuals) that the ad uses.", explanation: "Target audience + main message + two real persuasive techniques from a chosen ad." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e7-lit-reading",
      title: "Literary Reading",
      subject: "Reading",
      icon: "📚",
      summary: "Analysing plot structure, conflict, characterisation, setting and mood, theme and symbolism, figurative language, point of view and narrator reliability, and reading inferentially with evidence.",
      objectives: [

        {
          text: "Analyse plot structure: exposition, rising action, climax and resolution.",
          resources: [
            { type: "interactive", title: "Plot diagram tool", provider: "ReadWriteThink", url: "https://www.readwritethink.org/classroom-resources/student-interactives/plot-diagram", note: "Map a story's structure interactively." },
            { type: "reading", title: "Plot & structure", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Texts to analyse for structure." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The turning point of greatest tension in a story is the:", options: ["exposition", "climax", "resolution", "setting"], answer: 1, explanation: "The climax is the peak of the story's tension." },
            { type: "mcq", difficulty: "easy", q: "The exposition of a story:", options: ["resolves the conflict", "introduces characters, setting and situation", "is the most exciting part", "is the last scene"], answer: 1, explanation: "Exposition sets things up at the start." },
            { type: "tf", difficulty: "easy", q: "Rising action is the series of events that build tension toward the climax.", answer: true, explanation: "Rising action develops the conflict before the turning point." },
            { type: "mcq", difficulty: "easy", q: "The resolution of a story:", options: ["introduces the characters", "settles the conflict and brings the story to a close", "is the turning point", "is always missing"], answer: 1, explanation: "The resolution ties up the conflict at the end." },
            { type: "match", difficulty: "medium", q: "Match each plot stage to its role.", pairs: [["Exposition", "Sets up characters and situation"], ["Rising action", "Builds the conflict"], ["Climax", "Turning point of highest tension"], ["Resolution", "Settles the conflict"]], explanation: "These are the four core plot stages in order." },
            { type: "mcq", difficulty: "medium", q: "Put these in the usual order: 1) resolution, 2) rising action, 3) exposition, 4) climax.", options: ["3, 2, 4, 1", "1, 2, 3, 4", "3, 4, 2, 1", "2, 3, 1, 4"], answer: 0, explanation: "Exposition → rising action → climax → resolution = 3, 2, 4, 1." },
            { type: "tf", difficulty: "medium", q: "'Falling action' refers to the events after the climax that lead toward the resolution.", answer: true, explanation: "Falling action bridges the climax and the resolution." },
            { type: "short", difficulty: "medium", q: "What is the difference between the climax and the resolution of a story?", answer: "The climax is the turning point of highest tension, where the main conflict comes to a head. The resolution comes after, settling the conflict and showing how things turn out. Climax = peak; resolution = wind-down.", explanation: "Climax = peak tension; resolution = the conflict is settled." },
            { type: "mcq", difficulty: "medium", q: "Why do authors build rising action before the climax?", options: ["to waste time", "to create suspense and develop the conflict so the climax has impact", "to introduce the title", "to end the story early"], answer: 1, explanation: "Rising action builds tension so the climax matters." },
            { type: "tf", difficulty: "medium", q: "Some stories use flashbacks, changing the order events are told without changing the plot's structure.", answer: true, explanation: "Narrative order can differ from chronological order through devices like flashback." },
            { type: "mcq", difficulty: "hard", q: "In a mystery, the moment the detective finally reveals who the culprit is would usually be the:", options: ["exposition", "climax", "rising action", "title"], answer: 1, explanation: "The big reveal is the turning point of highest tension — the climax." },
            { type: "long", difficulty: "hard", q: "Choose a story you know well and map its plot by naming what happens at each stage: exposition, rising action, climax, and resolution.", answer: "Answers vary. A strong response identifies all four stages accurately for one story: exposition (set-up), rising action (events building the conflict), climax (the turning point), and resolution (how the conflict is settled), with events that genuinely match each stage.", explanation: "All four stages mapped accurately onto one chosen story." }
          ]
        },

        {
          text: "Identify internal and external conflict.",
          resources: [
            { type: "reading", title: "Types of conflict", provider: "LiteraryDevices", url: "https://literarydevices.net/conflict/", note: "Internal vs external conflict explained." },
            { type: "reading", title: "Conflict in stories", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Practice spotting conflict." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "An INTERNAL conflict happens:", options: ["between two characters", "inside a character's own mind (a struggle with feelings or choices)", "between nations", "with the weather"], answer: 1, explanation: "Internal conflict is a struggle within a character." },
            { type: "mcq", difficulty: "easy", q: "An EXTERNAL conflict is a struggle:", options: ["only inside the mind", "between a character and an outside force (another person, nature, society)", "that never appears in stories", "about spelling"], answer: 1, explanation: "External conflict pits a character against an outside force." },
            { type: "tf", difficulty: "easy", q: "'A sailor battling a storm' is an example of external conflict (character vs nature).", answer: true, explanation: "It's a struggle against an outside force — external conflict." },
            { type: "mcq", difficulty: "easy", q: "A character deciding whether to tell a difficult truth is experiencing:", options: ["external conflict", "internal conflict", "no conflict", "a setting"], answer: 1, explanation: "The struggle is within the character's own mind — internal." },
            { type: "match", difficulty: "medium", q: "Match each example to its conflict type.", pairs: [["A girl argues with her brother", "External (character vs character)"], ["A boy wrestles with guilt", "Internal"], ["Villagers fight a flood", "External (character vs nature)"], ["A worker challenges an unfair law", "External (character vs society)"]], explanation: "External conflict has several sub-types; internal is within the self." },
            { type: "mcq", difficulty: "medium", q: "'Character vs society' conflict involves a character struggling against:", options: ["their own thoughts", "the rules, customs or expectations of their community", "the weather", "a wild animal only"], answer: 1, explanation: "Character vs society is a struggle against social norms or systems." },
            { type: "tf", difficulty: "medium", q: "A single story can contain both internal and external conflicts at the same time.", answer: true, explanation: "Characters often face outer struggles and inner ones together." },
            { type: "short", difficulty: "medium", q: "Explain the difference between internal and external conflict.", answer: "Internal conflict is a struggle inside a character's own mind — between feelings, desires or choices. External conflict is a struggle between a character and an outside force, such as another person, nature, or society.", explanation: "Internal = within the self; external = against an outside force." },
            { type: "mcq", difficulty: "medium", q: "Which is an example of 'character vs nature' conflict?", options: ["A hiker fights to survive a blizzard", "A student doubts herself", "Two friends quarrel", "A citizen breaks an unjust rule"], answer: 0, explanation: "Surviving a blizzard is a struggle against nature." },
            { type: "tf", difficulty: "medium", q: "Internal conflict often makes a character feel more realistic and relatable.", answer: true, explanation: "Inner struggles mirror real human experience, deepening characters." },
            { type: "mcq", difficulty: "hard", q: "A character must choose between loyalty to a friend and doing what is right. This is best described as:", options: ["character vs nature", "internal conflict (a struggle within the character)", "no conflict", "character vs the weather"], answer: 1, explanation: "The struggle between two values is inside the character — internal." },
            { type: "long", difficulty: "hard", q: "Choose a character from a story and describe one internal AND one external conflict they face, explaining each.", answer: "Answers vary. A strong response names a character and clearly identifies one internal conflict (a struggle within their mind/feelings) and one external conflict (against another person, nature or society), explaining what each struggle involves.", explanation: "One genuine internal and one genuine external conflict for one character, each explained." }
          ]
        },

        {
          text: "Analyse characterisation (direct and indirect) and character development.",
          resources: [
            { type: "reading", title: "Characterisation", provider: "LiteraryDevices", url: "https://literarydevices.net/characterization/", note: "Direct vs indirect; static vs dynamic." },
            { type: "reading", title: "Character analysis", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Tracking how characters change." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "DIRECT characterisation is when the author:", options: ["shows traits through actions only", "tells the reader a character's traits directly", "never describes characters", "uses only dialogue"], answer: 1, explanation: "Direct characterisation states traits outright (e.g. 'She was generous')." },
            { type: "mcq", difficulty: "medium", q: "INDIRECT characterisation reveals a character through:", options: ["the author stating their traits directly", "their actions, words, thoughts and how others react", "the page number", "the book's title"], answer: 1, explanation: "Indirect characterisation shows traits through behaviour rather than telling them." },
            { type: "tf", difficulty: "easy", q: "A STATIC character stays essentially the same throughout a story.", answer: true, explanation: "Static characters do not undergo significant change." },
            { type: "mcq", difficulty: "medium", q: "A DYNAMIC character is one who:", options: ["never changes", "changes or grows over the course of the story", "is always the villain", "has no dialogue"], answer: 1, explanation: "Dynamic characters change; static characters stay the same." },
            { type: "match", difficulty: "medium", q: "Match each term to its meaning.", pairs: [["Direct characterisation", "Author states the trait outright"], ["Indirect characterisation", "Trait shown through actions/words"], ["Static character", "Does not change"], ["Dynamic character", "Changes or grows"]], explanation: "These describe how characters are revealed and whether they change." },
            { type: "mcq", difficulty: "medium", q: "'Character motivation' means:", options: ["how a character looks", "the reason behind a character's actions — what they want", "the setting", "the title"], answer: 1, explanation: "Motivation is the why behind what a character does." },
            { type: "tf", difficulty: "medium", q: "A 'character arc' is the path of change a character travels across a story.", answer: true, explanation: "An arc traces how a character develops from start to finish." },
            { type: "short", difficulty: "medium", q: "Give an example of indirect characterisation: how could an author show a character is brave without saying 'she was brave'?", answer: "By showing brave actions — e.g. she runs into a burning building to save a child, stands up to a bully, or speaks the truth despite fear. The reader infers bravery from what she does.", explanation: "Indirect characterisation reveals the trait through actions, not statements." },
            { type: "mcq", difficulty: "medium", q: "The acronym 'STEAL' for indirect characterisation stands for Speech, Thoughts, Effect on others, Actions and:", options: ["Length", "Looks (appearance)", "Latitude", "Letters"], answer: 1, explanation: "STEAL = Speech, Thoughts, Effect on others, Actions, Looks." },
            { type: "tf", difficulty: "medium", q: "Most main characters (protagonists) in a story are dynamic, while minor characters are often static.", answer: true, explanation: "Protagonists usually grow; minor characters often stay the same." },
            { type: "mcq", difficulty: "hard", q: "A character begins selfish but, after losing a friend, learns to think of others. This shows a:", options: ["static character", "dynamic character with a clear character arc", "flat setting", "lack of motivation"], answer: 1, explanation: "Real change over the story marks a dynamic character with an arc." },
            { type: "long", difficulty: "hard", q: "Choose a character who changes in a story you know. Describe what they were like at the start, what they became, and what caused the change (their arc).", answer: "Answers vary. A strong response names a dynamic character, describes their qualities at the beginning and end, and explains the events or realisations that caused the change — tracing a clear character arc.", explanation: "Start state + end state + the cause of change = a clear character arc." }
          ]
        },

        {
          text: "Explain how setting creates mood.",
          resources: [
            { type: "reading", title: "Setting & mood", provider: "LiteraryDevices", url: "https://literarydevices.net/mood/", note: "How time and place shape atmosphere." },
            { type: "reading", title: "Mood in texts", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Practice identifying mood." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "'Mood' in literature means:", options: ["the main character's name", "the feeling or atmosphere a text creates in the reader", "the plot", "the punctuation"], answer: 1, explanation: "Mood is the emotional atmosphere of a text." },
            { type: "mcq", difficulty: "easy", q: "Setting is the:", options: ["time and place of a story", "main problem", "narrator", "ending"], answer: 0, explanation: "Setting is when and where the story happens." },
            { type: "tf", difficulty: "easy", q: "A dark, foggy, silent setting tends to create a tense or eerie mood.", answer: true, explanation: "Setting details strongly shape mood." },
            { type: "mcq", difficulty: "easy", q: "A sunny meadow full of birdsong would most likely create a mood that is:", options: ["frightening", "peaceful and cheerful", "tense", "gloomy"], answer: 1, explanation: "Bright, pleasant settings create calm, happy moods." },
            { type: "tf", difficulty: "medium", q: "Mood (the reader's feeling) is closely related to tone (the author's attitude), but they are not the same.", answer: true, explanation: "Mood is the atmosphere felt by readers; tone is the author's attitude." },
            { type: "short", difficulty: "medium", q: "Name three setting details a writer could use to build a scary mood.", answer: "Any three of: darkness/night, fog or shadows, silence or eerie sounds, a storm, an abandoned or decaying place, cold, creaking doors, or isolation.", explanation: "Darkness, fog, storms, silence and decay all help build a scary mood." },
            { type: "mcq", difficulty: "medium", q: "Which technique most directly helps create mood?", options: ["page numbers", "vivid sensory description of the setting", "the author's name", "the chapter count"], answer: 1, explanation: "Sensory description of setting builds atmosphere." },
            { type: "tf", difficulty: "medium", q: "Changing the weather in a scene from bright sunshine to a thunderstorm can change its mood.", answer: true, explanation: "Weather is a powerful tool for shifting mood." },
            { type: "short", difficulty: "medium", q: "How can the same place (e.g. a forest) be given two completely different moods?", answer: "By changing the details and language: a forest in golden sunlight with birdsong feels peaceful and magical, while the same forest in darkness with fog, snapping twigs and shadows feels frightening. The mood comes from which details and words the writer chooses.", explanation: "Mood depends on the sensory details and word choices, not just the place." },
            { type: "mcq", difficulty: "hard", q: "An author describes 'crumbling walls, a cold draught, and the distant howl of wind' to mainly:", options: ["state facts", "create an eerie, lonely mood", "list characters", "give instructions"], answer: 1, explanation: "These details build an eerie, isolated atmosphere — mood." },
            { type: "short", difficulty: "hard", q: "Explain the relationship between setting and mood in your own words.", answer: "Setting is the time and place of a story; mood is the feeling it creates. The details a writer chooses for the setting — light, weather, sounds, surroundings — shape the atmosphere, so setting is one of the main tools for creating mood.", explanation: "Setting details are a key tool writers use to create mood." },
            { type: "long", difficulty: "hard", q: "Write a few sentences describing a setting that creates a clear mood (e.g. tense, peaceful, lonely). Then name the mood and explain which details create it.", answer: "Answers vary. A strong response describes a setting with specific sensory detail, names the intended mood, and explains which details (light, sound, weather, surroundings) produce that mood — showing a clear link between setting and atmosphere.", explanation: "A vivid setting + the named mood + the specific details that create it." }
          ]
        },

        {
          text: "Distinguish topic from theme and recognise symbolism.",
          resources: [
            { type: "reading", title: "Theme & symbolism", provider: "LiteraryDevices", url: "https://literarydevices.net/symbolism/", note: "How objects can carry deeper meaning." },
            { type: "reading", title: "Topic vs message", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Finding the deeper message." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A symbol in a story is:", options: ["a spelling mistake", "an object or image that stands for a bigger idea", "the title", "the narrator"], answer: 1, explanation: "A symbol represents something larger (e.g. a dove = peace)." },
            { type: "mcq", difficulty: "easy", q: "A 'topic' is:", options: ["the message of a story", "what a story is about, in a word or phrase", "the climax", "the setting"], answer: 1, explanation: "A topic names the subject in a word or phrase (e.g. courage)." },
            { type: "tf", difficulty: "easy", q: "A theme is a complete idea or message, not just a single word.", answer: true, explanation: "Theme expresses an idea about the topic, stated as a sentence." },
            { type: "mcq", difficulty: "easy", q: "Which is commonly a symbol of hope or new beginnings?", options: ["a storm", "a sunrise / dawn", "a locked door", "a broken clock"], answer: 1, explanation: "Sunrise and dawn frequently symbolise hope and new beginnings." },
            { type: "match", difficulty: "medium", q: "Match each common symbol to its usual meaning.", pairs: [["Dove", "Peace"], ["Heart", "Love"], ["Skull", "Death/danger"], ["Light", "Hope or knowledge"]], explanation: "Symbols carry widely understood meanings." },
            { type: "mcq", difficulty: "medium", q: "Which is a THEME rather than a topic?", options: ["friendship", "True friendship requires sacrifice", "a dog", "war"], answer: 1, explanation: "A theme is a full idea about a topic, not just the word." },
            { type: "short", difficulty: "medium", q: "Explain the difference between a topic and a theme.", answer: "A topic is what a text is about in a word or phrase (e.g. freedom). A theme is the message the text expresses about that topic (e.g. 'freedom must sometimes be fought for'). Theme is a full idea, not a single word.", explanation: "Topic = subject; theme = the message about it." },
            { type: "tf", difficulty: "medium", q: "A symbol can help develop a story's theme by representing one of its key ideas.", answer: true, explanation: "Symbols often reinforce or deepen the theme." },
            { type: "mcq", difficulty: "medium", q: "In a story, a caged bird that a character longs to free most likely symbolises:", options: ["breakfast", "trapped freedom or a longing to be free", "the weather", "a maths problem"], answer: 1, explanation: "A caged bird commonly symbolises lost or longed-for freedom." },
            { type: "tf", difficulty: "medium", q: "The same object can symbolise different things in different stories depending on context.", answer: true, explanation: "Symbol meaning depends on how it's used in a particular text." },
            { type: "mcq", difficulty: "hard", q: "To turn the topic 'courage' into a theme, you would:", options: ["just write 'courage'", "state an idea about courage, e.g. 'real courage means acting despite fear'", "name a character", "describe the setting"], answer: 1, explanation: "A theme expresses a complete idea about the topic." },
            { type: "long", difficulty: "hard", q: "Choose a story you know. Identify one topic, state a theme based on it (as a full sentence), and name one symbol the story uses (or could use) to develop that theme.", answer: "Answers vary. A strong response names a topic (a word/phrase), expresses a theme as a complete sentence (an idea about that topic), and identifies a relevant symbol, briefly explaining how it connects to the theme.", explanation: "Topic + theme-as-sentence + a connected symbol." }
          ]
        },

        {
          text: "Identify figurative language: simile, metaphor, personification and irony.",
          resources: [
            { type: "reading", title: "Figurative language", provider: "LiteraryDevices", url: "https://literarydevices.net/", note: "Definitions and examples of devices." },
            { type: "reading", title: "Figurative language practice", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Spotting devices in texts." }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each device to its definition.", pairs: [["Simile", "Comparison using 'like' or 'as'"], ["Metaphor", "Says one thing IS another"], ["Personification", "Gives human qualities to non-human things"], ["Irony", "A gap between what is said/expected and what is true"]], explanation: "These are four core figurative devices." },
            { type: "mcq", difficulty: "easy", q: "'As brave as a lion' is an example of a:", options: ["metaphor", "simile", "personification", "fact"], answer: 1, explanation: "It compares using 'as' — a simile." },
            { type: "mcq", difficulty: "easy", q: "'The classroom was a zoo' is an example of a:", options: ["simile", "metaphor", "personification", "statistic"], answer: 1, explanation: "It says one thing IS another (no 'like'/'as') — a metaphor." },
            { type: "mcq", difficulty: "medium", q: "'The wind whispered through the trees' is an example of:", options: ["simile", "personification", "a fact", "a metaphor comparing wind to fire"], answer: 1, explanation: "Wind can't whisper — a human quality is given to it: personification." },
            { type: "tf", difficulty: "easy", q: "A simile uses 'like' or 'as'; a metaphor does not.", answer: true, explanation: "The presence of 'like'/'as' is the key difference." },
            { type: "mcq", difficulty: "medium", q: "Which sentence contains irony?", options: ["The sky is blue.", "A fire station burns down.", "She ran quickly.", "He has two dogs."], answer: 1, explanation: "A fire station burning down is situational irony — the opposite of what's expected." },
            { type: "short", difficulty: "medium", q: "Write your own example of a simile and your own example of a metaphor.", answer: "Answers vary. A correct simile compares two things using 'like' or 'as' (e.g. 'Her smile was like sunshine'); a correct metaphor states one thing IS another (e.g. 'Her smile was sunshine'). Both should be sensible comparisons.", explanation: "Simile uses like/as; metaphor states an identity. Both must be valid comparisons." },
            { type: "mcq", difficulty: "medium", q: "Why do writers use figurative language?", options: ["to make writing dull", "to create vivid images and deeper meaning beyond the literal", "to avoid describing anything", "to add spelling errors"], answer: 1, explanation: "Figurative language makes writing vivid and meaningful." },
            { type: "tf", difficulty: "medium", q: "'Verbal irony' is when someone says the opposite of what they mean (e.g. 'Great weather!' during a storm).", answer: true, explanation: "Verbal irony means saying one thing while meaning another." },
            { type: "mcq", difficulty: "hard", q: "'Time is a thief that steals our days' uses which device?", options: ["simile", "metaphor and personification", "irony only", "no device"], answer: 1, explanation: "It calls time a thief (metaphor) and gives it the human act of stealing (personification)." },
            { type: "short", difficulty: "hard", q: "Explain the difference between a simile and a metaphor, with an example of each making the SAME comparison.", answer: "A simile compares using 'like' or 'as'; a metaphor states one thing IS another. Same comparison: simile — 'He is as busy as a bee'; metaphor — 'He is a busy bee'. Both compare a person to a bee, but the metaphor drops 'as' and states it directly.", explanation: "Same comparison shown both ways: simile (like/as) vs metaphor (direct identity)." },
            { type: "long", difficulty: "hard", q: "Find or invent one example each of simile, metaphor, personification and irony, and briefly explain why each fits its device.", answer: "Answers vary. A strong response gives four correct examples — a simile (uses like/as), a metaphor (direct identity statement), personification (human quality given to non-human), and irony (gap between expectation and reality / saying the opposite) — each with a short correct explanation.", explanation: "Four correct, distinct examples, each correctly explained." }
          ]
        },

        {
          text: "Identify point of view and assess narrator reliability.",
          resources: [
            { type: "reading", title: "Point of view", provider: "LiteraryDevices", url: "https://literarydevices.net/point-of-view/", note: "First, second and third person; reliability." },
            { type: "reading", title: "Narrator & POV", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Practice identifying narrators." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A story told using 'I' and 'we' is written in:", options: ["first person", "second person", "third person", "no person"], answer: 0, explanation: "'I/we' signals a first-person narrator." },
            { type: "mcq", difficulty: "easy", q: "A story told using 'he', 'she' and 'they' is written in:", options: ["first person", "second person", "third person", "no narrator"], answer: 2, explanation: "He/she/they signals third-person narration." },
            { type: "tf", difficulty: "easy", q: "Second-person point of view addresses the reader directly as 'you'.", answer: true, explanation: "Second person uses 'you' to address the reader." },
            { type: "mcq", difficulty: "medium", q: "A 'third-person omniscient' narrator:", options: ["knows only one character's thoughts", "knows the thoughts and feelings of all characters", "is a character in the story", "speaks as 'I'"], answer: 1, explanation: "Omniscient = all-knowing about every character." },
            { type: "mcq", difficulty: "medium", q: "An 'unreliable narrator' is one who:", options: ["always tells the full truth", "may mislead the reader, on purpose or because of limited/biased knowledge", "is never used in fiction", "has no name"], answer: 1, explanation: "Unreliable narrators can't be fully trusted to report events accurately." },
            { type: "tf", difficulty: "medium", q: "A first-person narrator can be unreliable because they only know their own perspective.", answer: true, explanation: "First-person narrators are limited and may be biased — a source of unreliability." },
            { type: "match", difficulty: "medium", q: "Match each point of view to its pronoun signal.", pairs: [["First person", "I, we"], ["Second person", "you"], ["Third person", "he, she, they"]], explanation: "Pronouns reveal the narrative point of view." },
            { type: "short", difficulty: "medium", q: "How does point of view affect what a reader knows about a story?", answer: "The point of view decides whose thoughts and knowledge the reader has access to. A first-person or limited narrator only shows one perspective (so the reader may miss things), while an omniscient narrator can reveal everyone's thoughts. POV shapes how much, and whose side, the reader sees.", explanation: "POV controls whose knowledge and perspective the reader receives." },
            { type: "mcq", difficulty: "medium", q: "Clues that a narrator may be unreliable include:", options: ["clear, consistent reporting", "contradictions, strong bias, or things other characters dispute", "using correct grammar", "describing the weather"], answer: 1, explanation: "Contradictions and bias are warning signs of unreliability." },
            { type: "tf", difficulty: "medium", q: "Third-person limited narration follows the thoughts of only one character.", answer: true, explanation: "Limited = access to a single character's inner world." },
            { type: "mcq", difficulty: "hard", q: "A narrator insists everyone admires him, but every other character avoids him. This suggests the narrator is:", options: ["omniscient", "unreliable / biased", "second person", "non-existent"], answer: 1, explanation: "The gap between his claims and others' behaviour signals unreliability." },
            { type: "long", difficulty: "hard", q: "Explain how the SAME event could be told very differently depending on which character narrates it. Use a brief example.", answer: "Answers vary. A strong response explains that each narrator brings their own knowledge, feelings and bias, so the same event is coloured by who tells it. A good example shows two characters describing one event with different emphasis, sympathy or details, demonstrating how POV shapes the account.", explanation: "Clear explanation that POV/bias reshapes an event, supported by a concrete example." }
          ]
        },

        {
          text: "Read inferentially and track textual evidence while reading.",
          resources: [
            { type: "reading", title: "Making inferences", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Reading between the lines with evidence." },
            { type: "reading", title: "Annotation & evidence", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Marking up texts for key evidence." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "An inference is a logical conclusion drawn from text clues plus reasoning.", answer: true, explanation: "Inferences combine evidence with reasoning." },
            { type: "mcq", difficulty: "easy", q: "'Textual evidence' is:", options: ["your opinion alone", "specific words, details or quotes from the text that support a point", "the page count", "the author's biography"], answer: 1, explanation: "Textual evidence is support drawn directly from the text." },
            { type: "mcq", difficulty: "easy", q: "Text: 'Her eyes were red and she sniffled as she read the letter.' You can infer she:", options: ["is laughing", "has been crying / is upset", "is asleep", "is hungry"], answer: 1, explanation: "Red eyes and sniffling are clues she has been crying." },
            { type: "tf", difficulty: "easy", q: "A good inference should be supported by clues in the text.", answer: true, explanation: "Inferences need textual support, not pure guessing." },
            { type: "mcq", difficulty: "medium", q: "Which is the best textual evidence to prove a character is nervous?", options: ["'It was Tuesday.'", "'His hands trembled and he kept glancing at the door.'", "'The room was large.'", "'She had brown hair.'"], answer: 1, explanation: "Trembling hands and glancing at the door directly show nervousness." },
            { type: "short", difficulty: "medium", q: "What is the difference between a literal detail and an inference?", answer: "A literal detail is information the text states directly. An inference is a conclusion you work out from clues in the text combined with your own reasoning — it isn't stated outright but is supported by evidence.", explanation: "Literal = stated; inference = reasoned from clues." },
            { type: "mcq", difficulty: "medium", q: "When you make an inference in an essay, you should:", options: ["never use the text", "back it up with specific textual evidence", "only guess", "copy the whole page"], answer: 1, explanation: "Inferences must be supported with specific evidence." },
            { type: "tf", difficulty: "medium", q: "Annotating means making notes and marks on a text to capture your thinking and key evidence.", answer: true, explanation: "Annotation records ideas and evidence as you read." },
            { type: "short", difficulty: "medium", q: "Why is it useful to track (note/annotate) evidence as you read?", answer: "It lets you find and quote support quickly when you analyse or write about the text, helps you notice patterns, and keeps your interpretations grounded in the text rather than in guesswork.", explanation: "Tracking evidence makes later analysis accurate and well-supported." },
            { type: "mcq", difficulty: "medium", q: "A reasonable inference must be:", options: ["whatever you like", "supported by clues and consistent with the whole text", "stated word-for-word", "based only on the title"], answer: 1, explanation: "Good inferences fit the evidence and the text as a whole." },
            { type: "mcq", difficulty: "hard", q: "Text: 'He left his untouched dinner, grabbed his coat, and didn't answer when his mother called.' The best-supported inference is that he is:", options: ["very hungry", "upset or in a hurry about something", "asleep", "celebrating"], answer: 1, explanation: "Leaving food, grabbing a coat and ignoring his mother suggest he's upset or rushing." },
            { type: "long", difficulty: "hard", q: "Read any short passage. Make one inference about a character or situation, then quote or describe the specific textual evidence that supports it and explain your reasoning.", answer: "Answers vary. A strong response states a clear inference, provides specific evidence from the text (a quote or detail), and explains the reasoning that links the evidence to the inference — showing how clues plus reasoning lead to the conclusion.", explanation: "Inference + specific textual evidence + reasoning linking them." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e7-nonfiction-media",
      title: "Non-Fiction & Media Analysis",
      subject: "Media & Rhetoric",
      icon: "📊",
      summary: "Telling fact from opinion, recognising text structures, analysing news and advertisements, detecting bias, and understanding the rhetorical triangle (ethos/pathos/logos), rhetorical devices and logical fallacies.",
      objectives: [

        {
          text: "Distinguish fact, opinion and judgment.",
          resources: [
            { type: "reading", title: "Fact vs opinion", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Telling facts from opinions and judgments." },
            { type: "reading", title: "Fact/opinion practice", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Sorting statements in real texts." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which statement is a FACT (can be checked)?", options: ["Pizza is the best food.", "Water boils at 100°C at sea level.", "Mondays are awful.", "This film is boring."], answer: 1, explanation: "A fact can be verified; the others are opinions or judgments." },
            { type: "mcq", difficulty: "easy", q: "Which statement is an OPINION?", options: ["The library has 5,000 books.", "Reading is the most enjoyable hobby.", "The shop opens at 9 a.m.", "India is in Asia."], answer: 1, explanation: "'Most enjoyable' is a personal view — an opinion." },
            { type: "tf", difficulty: "easy", q: "A fact can be proven true or false; an opinion expresses a personal belief.", answer: true, explanation: "That is the core difference between fact and opinion." },
            { type: "mcq", difficulty: "easy", q: "Which words often signal an opinion?", options: ["measured, recorded, dated", "best, worst, should, beautiful", "exactly, precisely", "located, named"], answer: 1, explanation: "Value words like 'best' and 'should' signal opinions." },
            { type: "tf", difficulty: "medium", q: "An opinion expresses a personal belief or feeling and cannot simply be proven true or false.", answer: true, explanation: "Opinions are personal viewpoints, not verifiable facts." },
            { type: "mcq", difficulty: "medium", q: "A 'judgment' differs from a plain opinion because it:", options: ["has no viewpoint", "evaluates or rates something, often as good/bad or right/wrong", "is always a fact", "uses no words"], answer: 1, explanation: "A judgment is an evaluative opinion — assessing worth or rightness." },
            { type: "short", difficulty: "medium", q: "How can you test whether a statement is a fact?", answer: "Ask whether it can be checked or proven using reliable evidence (measurement, records, observation). If it can be verified true or false, it's a fact; if it depends on personal taste or belief, it's an opinion or judgment.", explanation: "Facts can be verified; opinions/judgments depend on personal views." },
            { type: "match", difficulty: "medium", q: "Sort each statement.", pairs: [["The mountain is 3,000 m high.", "Fact"], ["Climbing is the best sport.", "Opinion"], ["The team played terribly.", "Judgment"], ["The match lasted 90 minutes.", "Fact"]], explanation: "Verifiable = fact; preference = opinion; evaluation = judgment." },
            { type: "tf", difficulty: "medium", q: "Writers sometimes present opinions as if they were facts to influence readers.", answer: true, explanation: "This is a persuasive technique readers should watch for." },
            { type: "mcq", difficulty: "hard", q: "'Studies show the bridge is unsafe, so it must be the worst-built bridge in the country.' This statement mixes:", options: ["only facts", "a factual claim with an opinion/judgment", "only questions", "only instructions"], answer: 1, explanation: "'Studies show... unsafe' is a factual claim; 'worst-built in the country' is a judgment." },
            { type: "short", difficulty: "hard", q: "Why is it important to tell fact from opinion when reading the news or ads?", answer: "Because facts can be trusted and checked, while opinions reflect someone's viewpoint and may be biased or aimed at persuading you. Telling them apart helps you judge what to believe, avoid being misled, and form your own informed views.", explanation: "Separating fact from opinion guards against bias and manipulation." },
            { type: "long", difficulty: "hard", q: "Write one factual statement and one opinion statement about the same topic, then explain how a reader could tell which is which.", answer: "Answers vary. A strong response gives a clear, verifiable fact and a clear personal opinion on the same topic, and explains that the fact can be checked with evidence while the opinion reflects a personal view (often signalled by value words like 'best' or 'should').", explanation: "One verifiable fact + one opinion on the same topic + how to distinguish them." }
          ]
        },

        {
          text: "Recognise text structures (cause/effect, problem/solution, chronological, compare/contrast).",
          resources: [
            { type: "reading", title: "Text structures", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "How informational texts organise ideas." },
            { type: "reading", title: "Structure practice", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Identifying organisational patterns." }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each text structure to its signal.", pairs: [["Cause & effect", "because, as a result, leads to"], ["Problem & solution", "the issue / one way to fix it"], ["Chronological", "first, then, finally (time order)"], ["Compare & contrast", "similarly, however, on the other hand"]], explanation: "Each structure has typical signal words." },
            { type: "mcq", difficulty: "easy", q: "A text that lists events in time order uses which structure?", options: ["compare & contrast", "chronological", "problem & solution", "no structure"], answer: 1, explanation: "Time order = chronological structure." },
            { type: "mcq", difficulty: "easy", q: "A text that explains why something happened and what resulted uses:", options: ["compare & contrast", "cause & effect", "chronological", "alphabetical"], answer: 1, explanation: "Cause and effect explains reasons and results." },
            { type: "tf", difficulty: "easy", q: "'Problem and solution' structure presents an issue and then ways to address it.", answer: true, explanation: "That is exactly the problem/solution pattern." },
            { type: "mcq", difficulty: "medium", q: "Signal words 'similarly', 'unlike' and 'on the other hand' suggest which structure?", options: ["cause & effect", "compare & contrast", "chronological", "problem & solution"], answer: 1, explanation: "These words highlight similarities and differences." },
            { type: "short", difficulty: "medium", q: "Why does recognising a text's structure help a reader?", answer: "It helps you predict how ideas are organised, follow the author's logic, locate key information, and remember the content. Knowing the structure makes the text easier to understand and summarise.", explanation: "Knowing structure aids comprehension, navigation and recall." },
            { type: "mcq", difficulty: "medium", q: "An article describing the differences between two cities mainly uses:", options: ["chronological", "compare & contrast", "cause & effect", "problem & solution"], answer: 1, explanation: "Examining differences is compare and contrast." },
            { type: "tf", difficulty: "medium", q: "A single longer text can use more than one structure in different sections.", answer: true, explanation: "Texts often combine structures across sections." },
            { type: "mcq", difficulty: "medium", q: "A passage that says 'Pollution rose, so fish populations fell' uses:", options: ["cause & effect", "compare & contrast", "chronological only", "no structure"], answer: 0, explanation: "It links a cause (pollution) to an effect (fish decline)." },
            { type: "short", difficulty: "medium", q: "Give the signal words you'd expect to find in a cause-and-effect text.", answer: "Words such as: because, since, so, therefore, as a result, due to, leads to, causes, consequently.", explanation: "These connectives signal cause-and-effect relationships." },
            { type: "mcq", difficulty: "hard", q: "A recipe and a set of assembly instructions both rely most on which structure?", options: ["compare & contrast", "chronological (step-by-step order)", "problem & solution", "cause & effect"], answer: 1, explanation: "Both depend on doing steps in the correct time order." },
            { type: "long", difficulty: "hard", q: "Pick a non-fiction topic (e.g. recycling). Describe how you could organise a text about it using TWO different structures, and what each would emphasise.", answer: "Answers vary. A strong response chooses a topic and explains two structures — e.g. cause & effect (why we recycle and its results) and problem & solution (the waste problem and recycling as a fix) — noting what each emphasises. The structures must be correctly described.", explanation: "Two correctly described structures applied to one topic, with what each emphasises." }
          ]
        },

        {
          text: "Analyse news articles and advertisements (purpose, audience, techniques).",
          resources: [
            { type: "reading", title: "Analysing ads & news", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Purpose, audience, visuals and persuasion." },
            { type: "reading", title: "Reading the news critically", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Questioning media texts." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "When analysing an advertisement, you should consider its purpose, audience, visuals and:", options: ["page count", "persuasive techniques", "the printer's name", "the font size only"], answer: 1, explanation: "Ads are built from purpose, audience, visuals and persuasion." },
            { type: "mcq", difficulty: "easy", q: "A news headline is designed mainly to:", options: ["hide the story", "grab attention and summarise the story", "list the writer's hobbies", "give the price"], answer: 1, explanation: "Headlines attract readers and capture the story's gist." },
            { type: "tf", difficulty: "easy", q: "A news report usually answers who, what, when, where (and often why and how).", answer: true, explanation: "The '5 W's and H' are the basics of news reporting." },
            { type: "mcq", difficulty: "medium", q: "The 'target audience' of an advert is:", options: ["everyone equally", "the specific group it is designed to appeal to", "the printer", "the news editor"], answer: 1, explanation: "Ads are aimed at a particular group of likely buyers." },
            { type: "short", difficulty: "medium", q: "Name one visual element an advertiser might use to influence viewers.", answer: "Any of: bright/eye-catching colours, attractive or famous people, large bold text, appealing images of the product, facial expressions, or symbolic imagery.", explanation: "Visuals (colour, images, people) shape an ad's emotional pull." },
            { type: "mcq", difficulty: "medium", q: "A toy advert full of bright colours, cartoon characters and excited children is targeting:", options: ["elderly readers", "young children (and their parents)", "scientists", "no one"], answer: 1, explanation: "The visuals and tone are aimed at children." },
            { type: "tf", difficulty: "medium", q: "Even a 'factual' news article can show bias through which facts it chooses to include or leave out.", answer: true, explanation: "Selection and emphasis can create bias even in factual reporting." },
            { type: "short", difficulty: "medium", q: "What questions should you ask to analyse any media text?", answer: "Who made it and why (purpose)? Who is it aimed at (audience)? What techniques does it use (language, visuals, persuasion)? What does it want me to think, feel or do? What might it leave out?", explanation: "Purpose, audience, techniques and what's left out are the key questions." },
            { type: "mcq", difficulty: "medium", q: "An ad's slogan and logo are mainly there to:", options: ["confuse buyers", "make the brand memorable and recognisable", "report news", "give instructions"], answer: 1, explanation: "Slogans and logos build brand memory and recognition." },
            { type: "tf", difficulty: "medium", q: "The same news event can be reported with different emphasis by different outlets.", answer: true, explanation: "Different outlets choose different angles, words and details." },
            { type: "mcq", difficulty: "hard", q: "A news article uses the word 'reckless' to describe a decision. This word choice:", options: ["is purely neutral", "carries a negative judgment that may reveal bias", "is a fact", "is a headline only"], answer: 1, explanation: "'Reckless' is a loaded, judgmental word — a sign of possible bias." },
            { type: "long", difficulty: "hard", q: "Choose an advertisement or news item. Identify its purpose, target audience, and two techniques it uses, and explain whether it persuades you.", answer: "Answers vary. A strong response names a specific media text, states its purpose and likely target audience, identifies two genuine techniques (visuals, slogan, loaded words, emotional appeal, selection of facts), and gives a reasoned judgment about its persuasiveness.", explanation: "Purpose + audience + two techniques + a reasoned judgment of effectiveness." }
          ]
        },

        {
          text: "Detect bias and evaluate objectivity.",
          resources: [
            { type: "reading", title: "Bias & objectivity", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Spotting slanted language and viewpoints." },
            { type: "reading", title: "Detecting bias", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Practice identifying bias in texts." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "'Bias' in a text means:", options: ["a balanced view", "a one-sided slant that favours a particular view", "correct spelling", "a type of font"], answer: 1, explanation: "Bias is an unbalanced leaning toward one side." },
            { type: "mcq", difficulty: "easy", q: "An 'objective' text tries to be:", options: ["one-sided and emotional", "fair, balanced and based on facts", "full of opinions", "deliberately misleading"], answer: 1, explanation: "Objectivity means fair, fact-based and balanced." },
            { type: "tf", difficulty: "easy", q: "Loaded, emotional word choices can be a clue that a text is biased rather than objective.", answer: true, explanation: "Loaded language often signals a slant." },
            { type: "mcq", difficulty: "easy", q: "Which sentence sounds most biased?", options: ["The policy was introduced in 2020.", "This ridiculous policy was forced on us by out-of-touch leaders.", "The policy affects two regions.", "The policy is being reviewed."], answer: 1, explanation: "'Ridiculous', 'forced', 'out-of-touch' are loaded, one-sided words." },
            { type: "tf", difficulty: "medium", q: "Leaving out one side of a story is a form of bias even if every stated fact is true.", answer: true, explanation: "Bias can come from omission, not just from false statements." },
            { type: "short", difficulty: "medium", q: "Name two clues that a text may be biased.", answer: "Any two of: loaded or emotional language, only one side presented, opinions stated as facts, exaggeration, leaving out important information, name-calling, or a clear agenda/purpose to persuade.", explanation: "Loaded language, one-sidedness and omission are key bias clues." },
            { type: "mcq", difficulty: "medium", q: "To judge a text's objectivity, a careful reader asks:", options: ["How long is it?", "Does it present multiple sides fairly and rely on evidence?", "What font is used?", "Who printed it physically?"], answer: 1, explanation: "Objectivity is about fair, evidence-based, multi-sided presentation." },
            { type: "tf", difficulty: "medium", q: "Knowing who created a text and why can help you detect possible bias.", answer: true, explanation: "Source and purpose are major clues to bias." },
            { type: "mcq", difficulty: "medium", q: "An opinion column and a straight news report differ because the column:", options: ["must be fully objective", "is meant to argue a viewpoint", "can never use evidence", "has no author"], answer: 1, explanation: "Columns openly argue a viewpoint; news reports aim to be objective." },
            { type: "short", difficulty: "medium", q: "Why does spotting bias matter when forming your own opinion?", answer: "Because biased texts show only one side and may use emotion or omission to push a view. Spotting bias lets you seek other perspectives, weigh the evidence fairly, and form a balanced, independent opinion rather than absorbing someone else's slant.", explanation: "Detecting bias helps you reach balanced, independent conclusions." },
            { type: "mcq", difficulty: "hard", q: "Two articles report the same protest: one says 'brave demonstrators', the other 'unruly mob'. This shows:", options: ["both are fully objective", "how word choice reveals each writer's bias", "neither describes the protest", "the protest didn't happen"], answer: 1, explanation: "Opposite loaded labels for the same group reveal each writer's bias." },
            { type: "long", difficulty: "hard", q: "Take a simple neutral sentence (e.g. 'The council changed the rule') and rewrite it twice — once with positive bias and once with negative bias. Explain what makes each biased.", answer: "Answers vary. A strong response keeps the same basic event but adds positive loaded language in one version and negative loaded language in the other, then explains that the bias comes from the emotional/value-laden word choices rather than the underlying fact.", explanation: "Same event, two slants via loaded language, with an explanation of what creates the bias." }
          ]
        },

        {
          text: "Apply the rhetorical triangle: ethos, pathos and logos.",
          resources: [
            { type: "reading", title: "Ethos, pathos, logos", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/establishing_arguments/rhetorical_strategies.html", note: "The three rhetorical appeals." },
            { type: "reading", title: "Rhetorical appeals", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Spotting appeals in speeches and ads." }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each appeal to its meaning.", pairs: [["Ethos", "Appeal to credibility/trust"], ["Pathos", "Appeal to emotion"], ["Logos", "Appeal to logic and evidence"]], explanation: "Ethos = credibility, pathos = emotion, logos = logic." },
            { type: "mcq", difficulty: "easy", q: "An appeal to EMOTION is called:", options: ["ethos", "pathos", "logos", "kairos"], answer: 1, explanation: "Pathos is the appeal to emotion." },
            { type: "mcq", difficulty: "easy", q: "An appeal to LOGIC and evidence is called:", options: ["ethos", "pathos", "logos", "bias"], answer: 2, explanation: "Logos is the appeal to logic and evidence." },
            { type: "mcq", difficulty: "easy", q: "An appeal to the speaker's CREDIBILITY or trustworthiness is called:", options: ["ethos", "pathos", "logos", "thesis"], answer: 0, explanation: "Ethos is the appeal based on credibility and character." },
            { type: "mcq", difficulty: "medium", q: "'9 out of 10 dentists recommend this toothpaste' mainly appeals to:", options: ["pathos (emotion)", "logos (logic/evidence) and ethos (expert authority)", "rhyme", "neither"], answer: 1, explanation: "It uses statistics (logos) and expert authority (ethos)." },
            { type: "mcq", difficulty: "medium", q: "'Imagine your family cold and hungry this winter — please donate.' mainly appeals to:", options: ["logos", "pathos", "ethos", "grammar"], answer: 1, explanation: "It targets the reader's emotions — pathos." },
            { type: "tf", difficulty: "medium", q: "A strong argument often uses all three appeals — ethos, pathos and logos — together.", answer: true, explanation: "Combining the appeals makes persuasion more effective." },
            { type: "short", difficulty: "medium", q: "Give an example of how a speaker could build ETHOS (credibility) at the start of a speech.", answer: "By mentioning relevant experience or qualifications (e.g. 'As a doctor for 20 years...'), showing they share the audience's values, being honest and fair, or referencing trustworthy sources. This builds the audience's trust in the speaker.", explanation: "Ethos is built through experience, qualifications, honesty and shared values." },
            { type: "mcq", difficulty: "medium", q: "Charts, statistics and step-by-step reasoning are tools of which appeal?", options: ["ethos", "pathos", "logos", "irony"], answer: 2, explanation: "Data and logical reasoning are logos." },
            { type: "tf", difficulty: "medium", q: "Relying only on pathos (emotion) with no facts can make an argument weak or manipulative.", answer: true, explanation: "Emotion alone, without evidence, is a weak or manipulative argument." },
            { type: "mcq", difficulty: "hard", q: "A charity advert shows a sad child (emotion), cites a trusted expert (credibility), and gives donation statistics (evidence). It uses:", options: ["only pathos", "ethos, pathos and logos together", "no appeals", "only logos"], answer: 1, explanation: "It combines all three appeals of the rhetorical triangle." },
            { type: "long", difficulty: "hard", q: "Imagine you are persuading your school to start a recycling programme. Write one sentence using ethos, one using pathos, and one using logos.", answer: "Answers vary. A strong response gives three clearly distinct sentences: ethos (establishing credibility/trust), pathos (appealing to emotion), and logos (using facts/logic/statistics) — all on the recycling topic and each correctly matching its appeal.", explanation: "Three on-topic sentences, each correctly using ethos, pathos and logos." }
          ]
        },

        {
          text: "Identify rhetorical devices and common logical fallacies.",
          resources: [
            { type: "reading", title: "Rhetorical devices", provider: "LiteraryDevices", url: "https://literarydevices.net/", note: "Repetition, parallelism, diction, connotation." },
            { type: "reading", title: "Logical fallacies", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/academic_writing/logic_in_argumentative_writing/fallacies.html", note: "Common errors in reasoning." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Repeating a word or phrase for emphasis is the rhetorical device called:", options: ["repetition", "metaphor", "a fallacy", "a fact"], answer: 0, explanation: "Deliberate repetition emphasises an idea." },
            { type: "mcq", difficulty: "medium", q: "An 'ad hominem' fallacy is when someone:", options: ["uses solid evidence", "attacks the person instead of their argument", "repeats a word for effect", "tells a true story"], answer: 1, explanation: "Ad hominem attacks the person, not the argument." },
            { type: "mcq", difficulty: "easy", q: "'Connotation' refers to:", options: ["a word's dictionary definition", "the feelings or associations a word carries", "the spelling of a word", "the length of a word"], answer: 1, explanation: "Connotation is the emotional/associated meaning of a word." },
            { type: "tf", difficulty: "easy", q: "'Parallelism' repeats a grammatical structure for rhythm and emphasis (e.g. 'I came, I saw, I conquered').", answer: true, explanation: "Parallelism uses matching grammatical patterns." },
            { type: "match", difficulty: "medium", q: "Match each fallacy to its description.", pairs: [["Ad hominem", "Attacks the person, not the argument"], ["Bandwagon", "'Everyone does it, so it's right'"], ["Hasty generalisation", "A big conclusion from too little evidence"], ["Slippery slope", "Claims one step leads to disaster"]], explanation: "These are common logical fallacies." },
            { type: "mcq", difficulty: "medium", q: "'Diction' means:", options: ["a writer's word choice", "the plot", "the page count", "the genre"], answer: 0, explanation: "Diction is the choice and use of words." },
            { type: "mcq", difficulty: "medium", q: "'You should buy this phone because everyone in your class already has one.' is which fallacy?", options: ["ad hominem", "bandwagon", "parallelism", "ethos"], answer: 1, explanation: "Appealing to popularity ('everyone has one') is the bandwagon fallacy." },
            { type: "tf", difficulty: "medium", q: "A logical fallacy is a flaw in reasoning that can make an argument seem convincing but actually weak.", answer: true, explanation: "Fallacies are reasoning errors that undermine arguments." },
            { type: "mcq", difficulty: "medium", q: "Words 'home' and 'house' have similar definitions but different connotations because:", options: ["they are spelled the same", "'home' carries warmer, more emotional associations", "they mean opposite things", "neither is a real word"], answer: 1, explanation: "'Home' has warm connotations; 'house' is more neutral." },
            { type: "mcq", difficulty: "medium", q: "'My uncle smoked and lived to 90, so smoking isn't harmful.' is an example of a:", options: ["valid argument", "hasty generalisation (too little evidence)", "metaphor", "fact"], answer: 1, explanation: "One example can't disprove broad evidence — a hasty generalisation." },
            { type: "short", difficulty: "hard", q: "Explain why recognising logical fallacies helps you evaluate arguments.", answer: "Fallacies are errors in reasoning that can make a weak argument sound convincing. Recognising them lets you see when an argument doesn't really hold up — when it attacks the person, appeals to popularity, or jumps to conclusions — so you can judge claims on real evidence and avoid being fooled.", explanation: "Spotting fallacies lets you judge arguments on evidence, not faulty reasoning." },
            { type: "long", difficulty: "hard", q: "Choose two rhetorical devices (e.g. repetition, parallelism) and one logical fallacy. Give an example of each and explain its effect or flaw.", answer: "Answers vary. A strong response gives a correct example of two rhetorical devices (explaining the persuasive effect of each) and one logical fallacy (explaining why the reasoning is flawed). Examples must match the named devices/fallacy.", explanation: "Two device examples with effects + one fallacy example with its flaw." }
          ]
        },

        {
          text: "Analyse a speech for its purpose, structure and persuasive techniques.",
          resources: [
            { type: "reading", title: "Analysing speeches", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Famous speeches with analysis questions." },
            { type: "reading", title: "Rhetoric in speeches", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "How speakers persuade audiences." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Powerful speeches often combine ethos, pathos and logos to persuade.", answer: true, explanation: "Great speeches blend all three appeals." },
            { type: "mcq", difficulty: "easy", q: "The main purpose of a persuasive speech is to:", options: ["confuse the audience", "convince the audience to think or act a certain way", "list random facts", "put people to sleep"], answer: 1, explanation: "Persuasive speeches aim to convince." },
            { type: "mcq", difficulty: "easy", q: "A rhetorical question in a speech is one that:", options: ["demands a written answer", "is asked for effect, not for a literal answer", "is off-topic", "the audience must shout out"], answer: 1, explanation: "Rhetorical questions make the audience think; no answer is expected." },
            { type: "tf", difficulty: "easy", q: "A strong speech usually has a clear opening, a developed middle, and a memorable ending.", answer: true, explanation: "Good speeches are structured with a clear beginning, middle and end." },
            { type: "mcq", difficulty: "medium", q: "Repeating a key phrase at the start of several sentences ('We shall... We shall...') is a technique that:", options: ["bores the audience", "builds rhythm and emphasises the message", "hides the point", "is a fallacy"], answer: 1, explanation: "Repetition/anaphora builds rhythm and drives home the message." },
            { type: "short", difficulty: "medium", q: "Name one technique that makes a spoken speech memorable.", answer: "Any of: repetition, rhetorical questions, a strong rhythm, vivid imagery, emotional appeals, a memorable phrase or slogan, parallelism, or direct address to the audience.", explanation: "Repetition, rhythm and vivid appeals make speeches stick." },
            { type: "mcq", difficulty: "medium", q: "Addressing the audience directly as 'you' and 'we' helps a speaker:", options: ["distance the audience", "connect with the audience and include them", "confuse listeners", "end the speech"], answer: 1, explanation: "Direct address builds connection and inclusion." },
            { type: "tf", difficulty: "medium", q: "Analysing a speech means looking at HOW it persuades, not just what it says.", answer: true, explanation: "Speech analysis focuses on techniques and effect." },
            { type: "short", difficulty: "medium", q: "What should you identify when analysing the structure of a speech?", answer: "How it opens (the hook), how the argument is built and ordered in the middle, the techniques used along the way, and how it closes (the memorable ending or call to action). You trace how the speech is organised to persuade.", explanation: "Analyse the opening, the development, the techniques, and the closing." },
            { type: "mcq", difficulty: "medium", q: "A 'call to action' at the end of a speech:", options: ["summarises nothing", "urges the audience to do something specific", "lists the speaker's hobbies", "is a fallacy"], answer: 1, explanation: "A call to action tells the audience what to do next." },
            { type: "mcq", difficulty: "hard", q: "A speaker says 'Will we stand by and do nothing? No — we will act!' This uses:", options: ["only statistics", "a rhetorical question plus repetition/emphasis for persuasive effect", "an apology", "a definition"], answer: 1, explanation: "The rhetorical question and emphatic answer drive the persuasive point." },
            { type: "long", difficulty: "hard", q: "Think of a powerful speech (real or from a film). Identify its purpose and two techniques it uses, and explain how those techniques make it persuasive.", answer: "Answers vary. A strong response names a speech, states its purpose, identifies two genuine techniques (repetition, rhetorical questions, emotional appeal, vivid imagery, direct address, etc.), and explains how each technique helps persuade the audience.", explanation: "Purpose + two techniques + explanation of how they persuade." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e7-writing",
      title: "Writing",
      subject: "Writing",
      icon: "✍️",
      summary: "Narrative and alternate-ending writing, the CEA paragraph (claim–evidence–analysis), thesis statements and essay outlining, transitions and flow, expository and literary essays, persuasive speeches, and revision.",
      objectives: [

        {
          text: "Write a narrative, including an alternate ending to a known story.",
          resources: [
            { type: "reading", title: "Narrative writing", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Crafting and reshaping stories." },
            { type: "reading", title: "Narrative techniques", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Building engaging narratives." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Story-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Story-Writing'.", url: "" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "An 'alternate ending' keeps a story's characters and setting but changes how it finishes.", answer: true, explanation: "It re-imagines the resolution while staying true to the rest." },
            { type: "mcq", difficulty: "easy", q: "A narrative is a piece of writing that:", options: ["lists facts", "tells a story with events in sequence", "argues a point", "gives instructions"], answer: 1, explanation: "A narrative tells a story." },
            { type: "mcq", difficulty: "easy", q: "Dialogue in a narrative is:", options: ["the setting", "the words characters speak", "the title", "the moral"], answer: 1, explanation: "Dialogue is spoken exchange between characters." },
            { type: "tf", difficulty: "easy", q: "A strong narrative opening hooks the reader's interest.", answer: true, explanation: "An engaging hook draws readers in from the start." },
            { type: "mcq", difficulty: "medium", q: "When writing an alternate ending, what must stay consistent?", options: ["nothing", "the established characters and prior events", "the spelling only", "the author's name"], answer: 1, explanation: "An alternate ending must fit the characters and what already happened." },
            { type: "short", difficulty: "medium", q: "When writing an alternate ending, what should stay consistent with the original story?", answer: "The characters' established personalities, the setting and the events that already happened should stay consistent; only the outcome changes. The new ending should still feel believable for those characters.", explanation: "Keep characters and prior events consistent; change only the outcome." },
            { type: "mcq", difficulty: "medium", q: "Which technique best brings a narrative scene to life?", options: ["listing only facts", "vivid sensory description and showing action", "writing one short sentence", "skipping the setting"], answer: 1, explanation: "Sensory detail and action immerse the reader." },
            { type: "tf", difficulty: "medium", q: "'Show, don't tell' means revealing feelings and events through detail and action rather than flat statements.", answer: true, explanation: "Showing immerses readers more than telling." },
            { type: "short", difficulty: "medium", q: "Why might a writer create an alternate ending to a familiar story?", answer: "To explore 'what if', to express how they wished the story had gone, to deepen understanding of the characters by testing them in a new outcome, or to be creative while practising narrative skills.", explanation: "Alternate endings explore possibilities and deepen character understanding." },
            { type: "mcq", difficulty: "hard", q: "An alternate ending in which a previously kind character suddenly turns cruel for no reason would be:", options: ["excellent because it surprises", "weak because it is inconsistent with the character", "required in all stories", "the same as the original"], answer: 1, explanation: "Unmotivated, inconsistent change breaks believability." },
            { type: "long", difficulty: "hard", q: "Write the opening of a narrative (3–5 sentences) that introduces a character and setting and hooks the reader with a hint of a problem.", answer: "Answers vary. A strong opening introduces a character and setting with some vivid detail and ends on a hook — a hint of trouble, mystery or change — that makes the reader want to continue.", explanation: "Character + setting + a hook hinting at the coming problem." },
            { type: "long", difficulty: "hard", q: "Pick a well-known story or fairy tale. Briefly describe an alternate ending and explain why it still fits the characters.", answer: "Answers vary. A strong response describes a new outcome for a known story and explains how it remains consistent with the established characters' personalities and the earlier events — showing the change is believable, not random.", explanation: "A new ending + a clear explanation of why it stays true to the characters." }
          ]
        },

        {
          text: "Write a CEA paragraph: Claim, Evidence, Analysis.",
          resources: [
            { type: "reading", title: "Claim–Evidence–Analysis", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "Structuring an analytical paragraph." },
            { type: "reading", title: "Using textual evidence", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Backing claims with evidence." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Paragraph-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Paragraph-Writing'.", url: "" }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each part of a CEA paragraph to its job.", pairs: [["Claim", "States your point/argument"], ["Evidence", "A quote or detail from the text"], ["Analysis", "Explains how the evidence proves the claim"]], explanation: "CEA = Claim, Evidence, Analysis." },
            { type: "mcq", difficulty: "easy", q: "In CEA, the 'C' stands for:", options: ["conclusion", "claim", "comma", "context"], answer: 1, explanation: "C = Claim, the point you are arguing." },
            { type: "mcq", difficulty: "easy", q: "The 'E' in CEA is the:", options: ["ending", "evidence (a quote or detail)", "essay", "exclamation"], answer: 1, explanation: "E = Evidence drawn from the text." },
            { type: "mcq", difficulty: "medium", q: "In a CEA paragraph, the ANALYSIS should:", options: ["just repeat the quote", "explain how the evidence supports the claim", "introduce a new unrelated topic", "be left out"], answer: 1, explanation: "Analysis connects the evidence back to the claim." },
            { type: "tf", difficulty: "easy", q: "A CEA paragraph should begin with a clear claim.", answer: true, explanation: "The claim states the paragraph's point up front." },
            { type: "tf", difficulty: "medium", q: "Evidence in a CEA paragraph should be relevant to the claim.", answer: true, explanation: "Evidence must actually support the claim being made." },
            { type: "mcq", difficulty: "medium", q: "Which is the weakest part of this CEA paragraph: a clear claim, a strong quote, and then it just stops?", options: ["the claim", "the evidence", "the missing analysis", "nothing is missing"], answer: 2, explanation: "Without analysis, the paragraph never explains how the evidence proves the claim." },
            { type: "short", difficulty: "medium", q: "Why is the 'analysis' step the most important part of a CEA paragraph?", answer: "Because evidence doesn't explain itself — the analysis shows how and why the quote or detail proves the claim. Without analysis, the reader is left to guess the connection, and the argument isn't really made.", explanation: "Analysis makes the link between evidence and claim explicit." },
            { type: "tf", difficulty: "medium", q: "A CEA paragraph can include more than one piece of evidence, each with its own analysis.", answer: true, explanation: "Stronger paragraphs may layer several evidence-analysis pairs." },
            { type: "mcq", difficulty: "hard", q: "Claim: 'The author shows the city as unwelcoming.' Which sentence is ANALYSIS?", options: ["The text says 'grey walls loomed over empty streets.'", "The word 'loomed' makes the buildings feel threatening, and 'empty' shows there is no warmth or life, creating an unwelcoming feel.", "The city is in the story.", "Cities have many buildings."], answer: 1, explanation: "It explains how the specific words create the unwelcoming effect — that's analysis." },
            { type: "short", difficulty: "hard", q: "A student writes a claim and a quote, then immediately starts a new claim. What is missing, and why does it matter?", answer: "The analysis is missing — the student never explained how the quote supports the claim. It matters because evidence doesn't prove a point on its own; without analysis the reader can't see the connection, so the argument is incomplete.", explanation: "Missing analysis leaves the evidence–claim link unexplained, so the point isn't actually made." },
            { type: "long", difficulty: "hard", q: "Write a short CEA paragraph about any text or topic: state a claim, give a piece of evidence, and analyse how the evidence supports the claim.", answer: "Answers vary. A strong response has a clear claim, relevant evidence (a quote or specific detail), and analysis that explicitly explains how the evidence proves the claim — all three parts present and connected.", explanation: "A clear claim + relevant evidence + analysis linking them." }
          ]
        },

        {
          text: "Embed quotes and facts and explain the evidence.",
          resources: [
            { type: "reading", title: "Integrating quotations", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/using_research/quoting_paraphrasing_and_summarizing/index.html", note: "Smoothly embedding evidence." },
            { type: "reading", title: "Using evidence", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Quoting and explaining support." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Paragraph-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Paragraph-Writing'.", url: "" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A quote should be introduced and explained, not just dropped into a paragraph on its own.", answer: true, explanation: "Embedded quotes need framing and explanation." },
            { type: "mcq", difficulty: "easy", q: "Quotation marks are used to show:", options: ["a character's age", "the exact words taken from a text or speaker", "a question", "a list"], answer: 1, explanation: "Quotation marks enclose words quoted exactly." },
            { type: "mcq", difficulty: "easy", q: "'Embedding' a quote means:", options: ["leaving it as a separate sentence with no link", "weaving it smoothly into your own sentence", "deleting it", "translating it"], answer: 1, explanation: "Embedding integrates the quote into your sentence." },
            { type: "tf", difficulty: "easy", q: "You should choose the most relevant part of a quote rather than copying a long passage.", answer: true, explanation: "Short, well-chosen quotes are stronger than long ones." },
            { type: "mcq", difficulty: "medium", q: "Which best embeds a quote?", options: ["The hero is afraid. 'My heart pounded.'", "The narrator admits his fear when he says his 'heart pounded' with dread.", "Heart pounded.", "'My heart pounded.' That's it."], answer: 1, explanation: "It weaves the quote smoothly into the writer's own sentence." },
            { type: "short", difficulty: "medium", q: "After giving a quote as evidence, what should a writer do next?", answer: "Explain it — analyse how the quote supports the claim, what it shows or means. The writer should connect the evidence back to the point being made rather than leaving it to speak for itself.", explanation: "Always explain how the evidence proves your point." },
            { type: "mcq", difficulty: "medium", q: "A 'dropped quote' (a quote with no introduction or explanation) is a problem because:", options: ["it is too short", "the reader doesn't see how it connects to your point", "quotes are never allowed", "it uses quotation marks"], answer: 1, explanation: "Without framing/analysis, the connection is unclear." },
            { type: "tf", difficulty: "medium", q: "When quoting a fact or statistic, you should still explain why it matters to your argument.", answer: true, explanation: "Facts need interpretation to support a point." },
            { type: "short", difficulty: "medium", q: "Give one phrase you could use to introduce a quote smoothly.", answer: "Examples: 'The author writes...', 'As the narrator explains...', 'This is shown when...', 'According to the text...'. Any phrase that leads naturally into the quoted words.", explanation: "Lead-in phrases integrate quotes into your sentence." },
            { type: "mcq", difficulty: "medium", q: "Using square brackets [ ] inside a quote lets a writer:", options: ["change the meaning entirely", "add a small clarification or adjust a word to fit the sentence", "delete the quote", "make it longer"], answer: 1, explanation: "Brackets show small editorial clarifications within a quote." },
            { type: "mcq", difficulty: "hard", q: "Best practice for using evidence is to:", options: ["quote, then stop", "introduce the quote, present it, then analyse it", "list quotes with no comment", "avoid quotes completely"], answer: 1, explanation: "Introduce → quote → analyse is the strong pattern." },
            { type: "long", difficulty: "hard", q: "Take any short quote (real or invented). Write a sentence that embeds it smoothly, then write a sentence explaining what it shows.", answer: "Answers vary. A strong response weaves the quote naturally into a sentence (with a lead-in) and follows with a sentence analysing what the quote reveals or proves — demonstrating embed + explain.", explanation: "A smoothly embedded quote + an explanation of what it shows." }
          ]
        },

        {
          text: "Write strong topic sentences and maintain paragraph unity.",
          resources: [
            { type: "reading", title: "Topic sentences & unity", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "Keeping paragraphs focused." },
            { type: "reading", title: "Paragraph structure", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Building unified paragraphs." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Paragraph-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Paragraph-Writing'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "'Paragraph unity' means:", options: ["every sentence supports one main idea", "the paragraph is very long", "there is no topic sentence", "ideas keep changing"], answer: 0, explanation: "Unity = all sentences relate to a single main idea." },
            { type: "mcq", difficulty: "easy", q: "A topic sentence usually:", options: ["ends the paragraph randomly", "states the paragraph's main idea", "lists the author's name", "is always a question"], answer: 1, explanation: "The topic sentence announces the paragraph's main idea." },
            { type: "tf", difficulty: "easy", q: "A sentence that drifts off the paragraph's main idea breaks its unity.", answer: true, explanation: "Off-topic sentences harm paragraph unity." },
            { type: "mcq", difficulty: "easy", q: "Where is a topic sentence most often placed?", options: ["at or near the start of the paragraph", "only at the very end", "in the middle, hidden", "never in the paragraph"], answer: 0, explanation: "Topic sentences usually open the paragraph." },
            { type: "mcq", difficulty: "medium", q: "Which sentence does NOT belong in a paragraph whose topic sentence is 'Exercise improves health'?", options: ["It strengthens the heart.", "It can lift your mood.", "My cousin has a new phone.", "It helps you sleep better."], answer: 2, explanation: "The phone sentence is off-topic and breaks unity." },
            { type: "tf", difficulty: "medium", q: "A strong topic sentence both states the main idea and is specific enough to be developed.", answer: true, explanation: "Good topic sentences are clear and focused." },
            { type: "short", difficulty: "medium", q: "What is the difference between a topic sentence and a supporting sentence?", answer: "A topic sentence states the paragraph's main idea. Supporting sentences develop that idea with details, examples, reasons or evidence. The topic sentence sets the focus; supporting sentences back it up.", explanation: "Topic sentence = main idea; supporting sentences = the development." },
            { type: "mcq", difficulty: "medium", q: "Which is the strongest topic sentence?", options: ["Stuff about dogs.", "Dogs make excellent guide animals because of their trainability and loyalty.", "Dogs.", "I like dogs maybe."], answer: 1, explanation: "It states a clear, specific, developable main idea." },
            { type: "tf", difficulty: "medium", q: "A coherent paragraph also uses transitions to link its sentences smoothly.", answer: true, explanation: "Transitions support unity and flow within a paragraph." },
            { type: "short", difficulty: "medium", q: "How can you check whether a paragraph has unity?", answer: "Read each sentence and ask whether it relates to and supports the topic sentence's main idea. If any sentence is off-topic or introduces a new idea, the paragraph lacks unity and that sentence should be cut or moved.", explanation: "Test each sentence against the topic sentence's main idea." },
            { type: "mcq", difficulty: "hard", q: "A paragraph starts about the benefits of reading but ends arguing that homework should be banned. The problem is:", options: ["perfect unity", "a loss of paragraph unity (two different main ideas)", "too short", "a missing title"], answer: 1, explanation: "Two unrelated main ideas break the paragraph's unity." },
            { type: "long", difficulty: "hard", q: "Write a strong topic sentence on a topic of your choice, then list three supporting points that all stay on that one idea.", answer: "Answers vary. A strong response gives a clear, specific topic sentence and three supporting points that each genuinely develop that single main idea (no off-topic drift), demonstrating paragraph unity.", explanation: "A focused topic sentence + three on-topic supporting points." }
          ]
        },

        {
          text: "Write a clear thesis statement and outline an essay.",
          resources: [
            { type: "reading", title: "Thesis statements", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/thesis_statement_tips.html", note: "How to craft a strong thesis." },
            { type: "reading", title: "Essay outlining", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Planning an essay's structure." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Essay-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Essay-Writing'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A thesis statement is:", options: ["a random fact", "the main argument or central claim of an essay", "the conclusion only", "a quotation"], answer: 1, explanation: "The thesis states the essay's main argument, usually in the introduction." },
            { type: "tf", difficulty: "easy", q: "An essay usually has an introduction, body paragraphs and a conclusion.", answer: true, explanation: "This is the standard essay structure." },
            { type: "mcq", difficulty: "easy", q: "Where does the thesis statement usually appear?", options: ["in the conclusion only", "near the end of the introduction", "in the title", "nowhere"], answer: 1, explanation: "The thesis typically closes the introduction." },
            { type: "mcq", difficulty: "easy", q: "An essay outline helps a writer:", options: ["avoid planning", "organise ideas before writing", "skip the thesis", "make spelling errors"], answer: 1, explanation: "Outlining organises ideas and structure in advance." },
            { type: "tf", difficulty: "medium", q: "A strong thesis is specific and arguable, not just an obvious fact.", answer: true, explanation: "A good thesis makes a claim that can be supported and debated." },
            { type: "mcq", difficulty: "medium", q: "Which is the strongest thesis statement?", options: ["This essay is about pollution.", "Pollution is bad.", "Cities should ban single-use plastics because they harm wildlife and clog waterways.", "Plastics exist."], answer: 2, explanation: "It is specific, arguable and previews the supporting reasons." },
            { type: "short", difficulty: "medium", q: "What is the purpose of a thesis statement?", answer: "It states the essay's main argument or central claim and tells the reader what the essay will argue and prove. It guides the whole essay and keeps it focused.", explanation: "The thesis announces and focuses the essay's main argument." },
            { type: "tf", difficulty: "medium", q: "Each body paragraph in an essay should support the thesis.", answer: true, explanation: "Body paragraphs develop and prove the thesis." },
            { type: "mcq", difficulty: "medium", q: "A good essay outline typically lists:", options: ["only the title", "the thesis and the main point of each paragraph", "random sentences", "the word count"], answer: 1, explanation: "An outline maps the thesis and each paragraph's main point." },
            { type: "short", difficulty: "medium", q: "Why is it useful to outline an essay before writing it?", answer: "An outline organises your ideas, ensures each paragraph supports the thesis, helps the essay flow logically, and prevents you from wandering off-topic or forgetting key points. It makes the actual writing faster and clearer.", explanation: "Outlining organises ideas and keeps the essay focused and logical." },
            { type: "mcq", difficulty: "hard", q: "A thesis that says 'There are many interesting things about space' is weak mainly because it:", options: ["is too specific", "is vague and not arguable", "has a clear claim", "lists evidence"], answer: 1, explanation: "It's vague and makes no specific, arguable claim." },
            { type: "long", difficulty: "hard", q: "Write a clear thesis statement for an essay on a topic you choose, then outline the three body paragraphs that would support it.", answer: "Answers vary. A strong response gives a specific, arguable thesis and outlines three body paragraphs, each with a distinct main point that supports the thesis — showing a logical, organised plan.", explanation: "An arguable thesis + three distinct supporting body-paragraph points." }
          ]
        },

        {
          text: "Use transitions to create flow between ideas and paragraphs.",
          resources: [
            { type: "reading", title: "Transitions", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/mechanics/transitions_and_transitional_devices/index.html", note: "Linking ideas smoothly." },
            { type: "reading", title: "Coherence & flow", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Making writing flow." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Paragraph-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Paragraph-Writing'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which transition signals CONTRAST?", options: ["furthermore", "however", "for example", "first"], answer: 1, explanation: "'However' signals a contrast between ideas." },
            { type: "mcq", difficulty: "easy", q: "Which transition signals ADDING information?", options: ["however", "in addition / furthermore", "in contrast", "nevertheless"], answer: 1, explanation: "'In addition' and 'furthermore' add information." },
            { type: "mcq", difficulty: "easy", q: "Which transition signals a CONCLUSION?", options: ["in conclusion / therefore", "for instance", "meanwhile", "similarly"], answer: 0, explanation: "'In conclusion' and 'therefore' signal a closing or result." },
            { type: "tf", difficulty: "easy", q: "Transitions can link ideas within a paragraph and also link whole paragraphs.", answer: true, explanation: "Transitions work at sentence and paragraph level." },
            { type: "match", difficulty: "medium", q: "Match each transition to what it signals.", pairs: [["however", "Contrast"], ["for example", "Giving an example"], ["as a result", "Cause/effect"], ["finally", "Sequence/conclusion"]], explanation: "Transitions show different relationships between ideas." },
            { type: "mcq", difficulty: "medium", q: "Choose the best transition: 'The plan was expensive. ___, it solved the problem completely.'", options: ["Therefore", "Nevertheless", "For example", "Firstly"], answer: 1, explanation: "'Nevertheless' shows the contrast — expensive, yet effective." },
            { type: "short", difficulty: "medium", q: "Why do essays need transitions between paragraphs?", answer: "Transitions connect paragraphs so ideas flow logically, showing the reader how one point relates to the next (adding, contrasting, concluding). They prevent the essay from feeling like disconnected chunks.", explanation: "Transitions create coherence and flow between paragraphs." },
            { type: "tf", difficulty: "medium", q: "Overusing the same transition (e.g. 'and then') repeatedly can make writing feel monotonous.", answer: true, explanation: "Varied transitions read better than one repeated phrase." },
            { type: "mcq", difficulty: "medium", q: "A paragraph that opens 'Another reason to recycle is...' uses a transition to:", options: ["contrast with the previous point", "add a further supporting reason", "conclude the essay", "give an example"], answer: 1, explanation: "'Another reason' adds a further supporting point." },
            { type: "short", difficulty: "medium", q: "Rewrite these choppy sentences into one smooth sentence with a transition: 'The team trained hard. They lost the final.'", answer: "Examples: 'Although the team trained hard, they lost the final.' or 'The team trained hard; nevertheless, they lost the final.' The transition shows the contrast between effort and outcome.", explanation: "A contrast transition joins the two ideas smoothly." },
            { type: "mcq", difficulty: "hard", q: "Which sentence uses a transition INCORRECTLY for its meaning?", options: ["It rained; therefore, the match was cancelled.", "She studied hard; however, she passed easily.", "He was tired; nevertheless, he kept going.", "We were late; as a result, we missed the bus."], answer: 1, explanation: "'However' wrongly signals contrast — studying hard and passing easily agree, so 'therefore' would fit." },
            { type: "long", difficulty: "hard", q: "Write a short paragraph (4–5 sentences) making an argument, using at least three different transitions correctly.", answer: "Answers vary. A strong response presents a small argument and correctly uses at least three distinct transitions (e.g. firstly, in addition, however, therefore) that genuinely match the relationships between the ideas, creating clear flow.", explanation: "A coherent argument using at least three correctly-matched transitions." }
          ]
        },

        {
          text: "Write expository and literary analysis essays.",
          resources: [
            { type: "reading", title: "Expository writing", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "Explaining and informing in an essay." },
            { type: "reading", title: "Literary analysis", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Analysing texts in essay form." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Essay-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Essay-Writing'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "An EXPOSITORY essay mainly aims to:", options: ["tell a personal story", "explain or inform about a topic", "sell a product", "rhyme"], answer: 1, explanation: "Expository essays explain or inform." },
            { type: "mcq", difficulty: "easy", q: "A literary analysis essay examines:", options: ["the price of a book", "how a text works and what it means", "the author's address", "the weather"], answer: 1, explanation: "Literary analysis interprets how a text creates meaning." },
            { type: "tf", difficulty: "easy", q: "A literary analysis is more than retelling the plot — it interprets and explains.", answer: true, explanation: "Analysis goes beyond summary to interpretation." },
            { type: "tf", difficulty: "easy", q: "An expository essay should be based on facts and clear explanation rather than personal opinion alone.", answer: true, explanation: "Exposition informs objectively rather than just opining." },
            { type: "mcq", difficulty: "medium", q: "A literary analysis essay should be built around:", options: ["a plot summary only", "a thesis (interpretation) supported by textual evidence and analysis", "the author's biography", "your favourite quotes with no point"], answer: 1, explanation: "Literary analysis argues an interpretation with evidence." },
            { type: "match", difficulty: "medium", q: "Match each essay type to its main purpose.", pairs: [["Expository", "Explain or inform"], ["Literary analysis", "Interpret a text"], ["Persuasive", "Convince the reader"], ["Narrative", "Tell a story"]], explanation: "Each essay type has a distinct primary purpose." },
            { type: "short", difficulty: "medium", q: "What is the difference between summarising a story and analysing it?", answer: "Summarising retells what happens in the story (the plot). Analysing examines how and why the author makes choices — devices, themes, language — and what they mean. Summary tells what; analysis explains how and why.", explanation: "Summary = what happens; analysis = how/why it works and what it means." },
            { type: "tf", difficulty: "medium", q: "Both expository and literary analysis essays should support their points with evidence.", answer: true, explanation: "Evidence underpins both kinds of essay." },
            { type: "mcq", difficulty: "medium", q: "Which topic suits an EXPOSITORY essay?", options: ["Argue that pets should be banned", "Explain how a volcano erupts", "Tell a scary story", "Convince readers to vote"], answer: 1, explanation: "Explaining a process is expository (informative)." },
            { type: "mcq", difficulty: "medium", q: "In literary analysis, quoting the text serves to:", options: ["fill space", "provide evidence for your interpretation", "replace your argument", "show off"], answer: 1, explanation: "Quotes are evidence supporting your interpretation." },
            { type: "short", difficulty: "hard", q: "Explain how the purpose of an expository essay differs from a literary analysis essay.", answer: "An expository essay aims to explain or inform the reader about a topic clearly and factually. A literary analysis essay aims to interpret a text — to argue what it means and how the author achieves effects, using evidence from the text. Exposition informs; analysis interprets.", explanation: "Expository = inform/explain; literary analysis = interpret a text with evidence." },
            { type: "long", difficulty: "hard", q: "Choose a text you know. Write a thesis for a literary analysis essay about it, and note one piece of evidence you would use to support that thesis.", answer: "Answers vary. A strong response gives an interpretive (not summary) thesis about a specific text and identifies a relevant piece of textual evidence (a quote or detail) that would support that interpretation.", explanation: "An interpretive thesis + a relevant supporting piece of evidence." }
          ]
        },

        {
          text: "Draft a persuasive speech.",
          resources: [
            { type: "reading", title: "Persuasive writing & speeches", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Building a persuasive case for an audience." },
            { type: "reading", title: "Rhetoric & persuasion", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/", note: "Appeals and structure for speeches." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Speech-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Speech-Writing'.", url: "" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "A persuasive speech tries to convince an audience to think or act in a certain way.", answer: true, explanation: "Persuasion is the goal of such a speech." },
            { type: "mcq", difficulty: "easy", q: "A persuasive speech should open by:", options: ["boring the audience", "grabbing attention and stating the issue", "apologising", "listing the speaker's hobbies"], answer: 1, explanation: "A strong hook and clear issue open a persuasive speech." },
            { type: "mcq", difficulty: "easy", q: "The clear position a persuasive speech argues for is its:", options: ["claim/thesis", "title", "conclusion only", "footnote"], answer: 0, explanation: "The claim states what the speaker wants the audience to accept." },
            { type: "tf", difficulty: "easy", q: "Persuasive speeches often end with a call to action.", answer: true, explanation: "A call to action urges the audience to do something." },
            { type: "mcq", difficulty: "medium", q: "Which combination most strengthens a persuasive speech?", options: ["only emotion", "evidence (logos), credibility (ethos) and emotion (pathos) together", "no evidence", "random facts only"], answer: 1, explanation: "Blending the three appeals strengthens persuasion." },
            { type: "short", difficulty: "medium", q: "Name two features of an effective persuasive speech.", answer: "Any two of: a clear position/claim, strong evidence and reasons, emotional appeals (pathos), credibility (ethos), rhetorical devices like repetition, a memorable opening and closing, and awareness of the audience.", explanation: "Clear claim, evidence, appeals and audience awareness make a speech persuasive." },
            { type: "mcq", difficulty: "medium", q: "Anticipating and answering the audience's likely objection is called addressing the:", options: ["thesis", "counterargument", "title", "setting"], answer: 1, explanation: "Addressing counterarguments strengthens persuasion." },
            { type: "tf", difficulty: "medium", q: "Knowing your audience helps you choose the most convincing arguments and tone.", answer: true, explanation: "Audience awareness shapes effective persuasion." },
            { type: "mcq", difficulty: "medium", q: "Repetition of a key phrase in a speech is used to:", options: ["confuse listeners", "emphasise and make the message memorable", "fill time", "hide the point"], answer: 1, explanation: "Repetition emphasises and aids memory." },
            { type: "short", difficulty: "medium", q: "Why is a strong conclusion important in a persuasive speech?", answer: "The conclusion is the last thing the audience hears, so it should reinforce the main message, leave a lasting impression, and call the audience to action. A weak ending lets the persuasion fade.", explanation: "A strong close reinforces the message and drives the call to action." },
            { type: "mcq", difficulty: "hard", q: "A persuasive speech that gives only emotional stories with no evidence risks being seen as:", options: ["perfectly balanced", "manipulative or weak in reasoning", "too factual", "objective"], answer: 1, explanation: "Emotion without evidence can feel manipulative and unconvincing." },
            { type: "long", difficulty: "hard", q: "Draft the opening of a persuasive speech on an issue you care about: include a hook, your claim, and one reason with evidence.", answer: "Answers vary. A strong response opens with an attention-grabbing hook, states a clear claim/position, and gives at least one supporting reason backed by evidence — showing the foundations of a persuasive speech.", explanation: "A hook + a clear claim + one reason supported by evidence." }
          ]
        },

        {
          text: "Revise and edit writing for clarity and correctness.",
          resources: [
            { type: "reading", title: "Revising & editing", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/the_writing_process/proofreading/index.html", note: "Improving drafts step by step." },
            { type: "reading", title: "Editing your work", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Polishing writing." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Composition — Essay-Writing", note: "This writing skill is covered in Wren & Martin's Composition section, 'Composition — Essay-Writing'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "medium", q: "What is the difference between revising and editing?", options: ["They are exactly the same", "Revising improves ideas/structure; editing fixes grammar, spelling and punctuation", "Editing comes before writing", "Revising means deleting everything"], answer: 1, explanation: "Revising = big-picture ideas/organisation; editing = surface correctness." },
            { type: "tf", difficulty: "easy", q: "Reading your work aloud can help you catch awkward or unclear sentences.", answer: true, explanation: "Reading aloud reveals flow and clarity problems." },
            { type: "mcq", difficulty: "easy", q: "Editing (proofreading) focuses on fixing:", options: ["the main argument", "spelling, grammar and punctuation", "the overall structure", "the topic choice"], answer: 1, explanation: "Editing handles surface-level correctness." },
            { type: "tf", difficulty: "easy", q: "Revision can include adding, cutting, or reordering ideas.", answer: true, explanation: "Revising reshapes content and structure." },
            { type: "mcq", difficulty: "medium", q: "Which task is part of REVISING rather than editing?", options: ["fixing a spelling error", "correcting a comma", "reordering paragraphs for better logic", "capitalising a name"], answer: 2, explanation: "Reordering for logic is big-picture revision." },
            { type: "short", difficulty: "medium", q: "Name two things you would check when EDITING a piece of writing.", answer: "Any two of: spelling, punctuation, grammar, capitalisation, sentence boundaries (fragments/run-ons), subject–verb agreement, and consistent tense.", explanation: "Editing targets spelling, punctuation, grammar and mechanics." },
            { type: "mcq", difficulty: "medium", q: "A good first step in revising is to:", options: ["check commas only", "reread for whether the ideas are clear and well-organised", "count the words", "change the font"], answer: 1, explanation: "Revision starts with the clarity and organisation of ideas." },
            { type: "tf", difficulty: "medium", q: "Getting feedback from a reader can help you see problems you missed in your own writing.", answer: true, explanation: "Fresh eyes catch unclear or weak spots." },
            { type: "short", difficulty: "medium", q: "Why is it useful to revise before editing (rather than the other way round)?", answer: "Because revising may add, cut or reorganise whole sections — so there's no point perfecting the spelling and commas of text you might delete or rewrite. Fix the big-picture ideas first, then polish the surface details.", explanation: "Revise content first; polish mechanics last to avoid wasted effort." },
            { type: "mcq", difficulty: "medium", q: "A 'redundant' phrase like 'free gift' should be edited because it:", options: ["adds useful detail", "repeats meaning unnecessarily ('gift' is already free)", "is grammatically wrong", "is a fragment"], answer: 1, explanation: "Redundancy repeats meaning; editing tightens it." },
            { type: "mcq", difficulty: "hard", q: "A peer says your essay's argument is hard to follow. The best response is to:", options: ["fix only the spelling", "revise the structure and clarity of the ideas", "ignore the feedback", "add more commas"], answer: 1, explanation: "A confusing argument is a structure/clarity issue — revise it." },
            { type: "long", difficulty: "hard", q: "Take any sentence you've written that could be clearer and improve it. Write the original and the revised version, and explain what you changed.", answer: "Answers vary. A strong response shows an original sentence and an improved version (clearer, tighter, or better-worded) and explains the change — e.g. removing redundancy, fixing a run-on, choosing stronger words, or improving clarity.", explanation: "Original + improved sentence + a clear explanation of the improvement." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e7-grammar",
      title: "Grammar & Sentence Structure",
      subject: "Grammar",
      icon: "🔤",
      summary: "Parts of speech review, degrees of comparison, adverbs, fixing fragments and run-ons, clauses and FANBOYS, commas and semicolons, sentence types (simple/compound/complex), prepositional phrases, appositives, apostrophes and sentence variety.",
      objectives: [

        {
          text: "Review the parts of speech (nouns, pronouns, articles, adjectives).",
          resources: [
            { type: "reading", title: "Parts of speech", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "Review of word classes." },
            { type: "reading", title: "Parts of speech overview", provider: "Grammarly", url: "https://www.grammarly.com/blog/parts-of-speech/", note: "All eight parts of speech explained." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Parts of Speech", note: "This grammar point is covered in Wren & Martin's grammar section, 'Parts of Speech'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A word that names a person, place, thing or idea is a:", options: ["verb", "noun", "adjective", "adverb"], answer: 1, explanation: "Nouns name people, places, things and ideas." },
            { type: "mcq", difficulty: "easy", q: "In 'the happy child', 'happy' is a(n):", options: ["noun", "verb", "adjective", "article"], answer: 2, explanation: "'Happy' describes the noun — an adjective." },
            { type: "mcq", difficulty: "easy", q: "A word that replaces a noun (he, she, it, they) is a:", options: ["pronoun", "verb", "article", "adverb"], answer: 0, explanation: "Pronouns stand in for nouns." },
            { type: "mcq", difficulty: "easy", q: "'A', 'an' and 'the' are:", options: ["verbs", "articles", "adjectives only", "pronouns"], answer: 1, explanation: "These three words are the articles." },
            { type: "match", difficulty: "medium", q: "Match each word to its part of speech.", pairs: [["dog", "Noun"], ["she", "Pronoun"], ["bright", "Adjective"], ["the", "Article"]], explanation: "Each word belongs to a word class." },
            { type: "mcq", difficulty: "medium", q: "In 'They quickly ran to the old house,' which word is a verb?", options: ["They", "quickly", "ran", "old"], answer: 2, explanation: "'Ran' is the action word — the verb." },
            { type: "tf", difficulty: "medium", q: "A word's part of speech can depend on how it is used in a sentence (e.g. 'run' can be a noun or a verb).", answer: true, explanation: "Function in the sentence determines part of speech." },
            { type: "short", difficulty: "medium", q: "Identify the noun, the adjective and the article in 'The red balloon floated away.'", answer: "Article: 'The'. Adjective: 'red'. Noun: 'balloon'. ('Floated' is the verb and 'away' is an adverb.)", explanation: "The = article, red = adjective, balloon = noun." },
            { type: "mcq", difficulty: "medium", q: "Which word is a pronoun in 'Maria gave it to them'?", options: ["Maria", "gave", "it / them", "to"], answer: 2, explanation: "'It' and 'them' replace nouns — they are pronouns." },
            { type: "tf", difficulty: "medium", q: "Verbs, adverbs, prepositions, conjunctions and interjections are also parts of speech, alongside nouns, pronouns, adjectives and articles.", answer: true, explanation: "There are eight traditional parts of speech (articles are sometimes counted with adjectives/determiners)." },
            { type: "mcq", difficulty: "hard", q: "In 'The fast runner won, but the race was close,' how many adjectives are there?", options: ["one (fast)", "two (fast, close)", "three", "none"], answer: 1, explanation: "'Fast' describes runner and 'close' describes race — two adjectives." },
            { type: "long", difficulty: "hard", q: "Write a sentence of at least eight words, then label the part of speech of any four words in it.", answer: "Answers vary. A strong response gives a correct sentence of 8+ words and accurately labels the part of speech of at least four words (e.g. noun, verb, adjective, article, pronoun, adverb, preposition, conjunction).", explanation: "A valid sentence + four words correctly labelled by part of speech." }
          ]
        },

        {
          text: "Use degrees of comparison (positive, comparative, superlative).",
          resources: [
            { type: "reading", title: "Comparatives & superlatives", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "Comparing with -er/-est and more/most." },
            { type: "reading", title: "Degrees of comparison", provider: "Grammarly", url: "https://www.grammarly.com/blog/comparative-and-superlative-adjectives/", note: "Rules and examples." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Adjective — Degrees of Comparison", note: "This grammar point is covered in Wren & Martin's grammar section, 'The Adjective — Degrees of Comparison'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "The superlative of 'tall' is:", options: ["tall", "taller", "tallest", "more tall"], answer: 2, explanation: "Superlative = tallest (the most)." },
            { type: "mcq", difficulty: "easy", q: "The comparative of 'fast' is:", options: ["fast", "faster", "fastest", "most fast"], answer: 1, explanation: "Comparative = faster (comparing two)." },
            { type: "tf", difficulty: "easy", q: "The comparative degree compares two things; the superlative compares three or more.", answer: true, explanation: "Comparative = two; superlative = the most among many." },
            { type: "mcq", difficulty: "easy", q: "The positive (base) form of 'happiest' is:", options: ["happier", "happy", "happily", "happiness"], answer: 1, explanation: "'Happy' is the base/positive adjective." },
            { type: "mcq", difficulty: "medium", q: "Choose the correct form: 'This is the ___ book I have ever read.' (interesting)", options: ["interesting", "interestinger", "most interesting", "more interesting"], answer: 2, explanation: "Long adjectives form the superlative with 'most': most interesting." },
            { type: "mcq", difficulty: "medium", q: "Choose the correct form: 'My bag is ___ than yours.' (heavy)", options: ["heavy", "heavier", "heaviest", "most heavy"], answer: 1, explanation: "Comparing two bags needs the comparative: heavier." },
            { type: "tf", difficulty: "medium", q: "Some adjectives are irregular: 'good' becomes 'better' and 'best', not 'gooder/goodest'.", answer: true, explanation: "Good/better/best is an irregular comparison." },
            { type: "match", difficulty: "medium", q: "Match each adjective to its superlative form.", pairs: [["good", "best"], ["bad", "worst"], ["big", "biggest"], ["beautiful", "most beautiful"]], explanation: "Short adjectives use -est; long ones use 'most'; some are irregular." },
            { type: "mcq", difficulty: "medium", q: "Which sentence is correct?", options: ["She is more taller than him.", "She is taller than him.", "She is the more tall.", "She is most tall than him."], answer: 1, explanation: "'Taller' is the correct comparative; don't add 'more' to an -er form." },
            { type: "short", difficulty: "medium", q: "Explain when to use '-er/-est' versus 'more/most' for forming comparisons.", answer: "Short adjectives (usually one syllable, and some two) add -er/-est (fast → faster → fastest). Longer adjectives (usually two or more syllables) use more/most (careful → more careful → most careful). Some adjectives are irregular (good → better → best).", explanation: "-er/-est for short adjectives; more/most for longer ones; some are irregular." },
            { type: "mcq", difficulty: "hard", q: "Which sentence uses the degree of comparison correctly?", options: ["Of the two roads, take the shortest.", "Of the two roads, take the shorter.", "Of the two roads, take the more shortest.", "Of the two roads, take shortest one."], answer: 1, explanation: "Comparing two roads requires the comparative 'shorter', not the superlative." },
            { type: "long", difficulty: "hard", q: "Write three sentences comparing things: one using a comparative, one using a superlative, and one using an irregular form (good/bad). Note which is which.", answer: "Answers vary. A strong response gives one correct comparative sentence (two things), one correct superlative sentence (three+), and one using an irregular form (better/best or worse/worst), each correctly identified.", explanation: "Correct comparative, superlative and irregular-comparison sentences, labelled." }
          ]
        },

        {
          text: "Identify and use adverbs.",
          resources: [
            { type: "reading", title: "Adverbs", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "What adverbs modify and how." },
            { type: "reading", title: "Adverbs explained", provider: "Grammarly", url: "https://www.grammarly.com/blog/adverb/", note: "Adverbs of manner, time, place and degree." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Adverb", note: "This grammar point is covered in Wren & Martin's grammar section, 'The Adverb'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "An adverb most often describes a:", options: ["noun", "verb (how, when, where, to what degree)", "article", "preposition only"], answer: 1, explanation: "Adverbs typically modify verbs (and adjectives/other adverbs)." },
            { type: "mcq", difficulty: "easy", q: "In 'She ran quickly,' the adverb is:", options: ["She", "ran", "quickly", "none"], answer: 2, explanation: "'Quickly' tells how she ran — an adverb." },
            { type: "tf", difficulty: "easy", q: "Many (but not all) adverbs end in '-ly'.", answer: true, explanation: "Many adverbs end in -ly, though words like 'fast' and 'soon' are adverbs too." },
            { type: "mcq", difficulty: "easy", q: "An adverb of TIME answers the question:", options: ["how?", "when?", "which colour?", "how many?"], answer: 1, explanation: "Adverbs of time (soon, yesterday) answer 'when?'" },
            { type: "match", difficulty: "medium", q: "Match each adverb to its type.", pairs: [["quietly", "Manner (how)"], ["yesterday", "Time (when)"], ["here", "Place (where)"], ["very", "Degree (how much)"]], explanation: "Adverbs describe manner, time, place or degree." },
            { type: "mcq", difficulty: "medium", q: "In 'The test was extremely difficult,' the adverb 'extremely' modifies:", options: ["the noun 'test'", "the adjective 'difficult'", "the verb 'was' only", "nothing"], answer: 1, explanation: "'Extremely' intensifies the adjective 'difficult' — an adverb of degree." },
            { type: "tf", difficulty: "medium", q: "Adverbs can modify verbs, adjectives, and even other adverbs.", answer: true, explanation: "Adverbs modify all three (e.g. 'very quickly')." },
            { type: "short", difficulty: "medium", q: "Identify the adverb in 'He spoke softly to the frightened puppy' and say what it tells us.", answer: "The adverb is 'softly'. It modifies the verb 'spoke' and tells us HOW he spoke — it's an adverb of manner. ('Frightened' is an adjective describing the puppy.)", explanation: "'Softly' is an adverb of manner modifying 'spoke'." },
            { type: "mcq", difficulty: "medium", q: "Which sentence correctly uses an adverb (not an adjective)?", options: ["She sings beautiful.", "She sings beautifully.", "She is a beautifully singer.", "She beautiful sings."], answer: 1, explanation: "The verb 'sings' needs the adverb 'beautifully'." },
            { type: "tf", difficulty: "medium", q: "'Fast' can act as an adverb, as in 'He runs fast' (no -ly needed).", answer: true, explanation: "'Fast' is an adverb here, modifying 'runs', despite having no -ly." },
            { type: "mcq", difficulty: "hard", q: "In 'They almost always arrive late,' how many adverbs are there?", options: ["one", "two", "three", "none"], answer: 2, explanation: "'Always' (time/frequency) and 'late' (manner/time) are adverbs; 'almost' modifies 'always' — arguably three, but the two clear adverbs are 'always' and 'late'." },
            { type: "long", difficulty: "hard", q: "Write a sentence using an adverb of manner and another using an adverb of time. Underline or name each adverb.", answer: "Answers vary. A strong response gives one sentence with an adverb of manner (how — e.g. 'slowly', 'carefully') and one with an adverb of time (when — e.g. 'yesterday', 'soon'), each correctly identified.", explanation: "One manner-adverb sentence and one time-adverb sentence, each labelled." }
          ]
        },

        {
          text: "Fix sentence fragments and run-on sentences.",
          resources: [
            { type: "reading", title: "Fragments & run-ons", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/mechanics/sentence_fragments.html", note: "Identifying and fixing both." },
            { type: "reading", title: "Run-on sentences", provider: "Grammarly", url: "https://www.grammarly.com/blog/run-on-sentence/", note: "How to repair run-ons." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Sentence; Analysis of Sentences", note: "This grammar point is covered in Wren & Martin's grammar section, 'The Sentence; Analysis of Sentences'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which is a sentence fragment?", options: ["The cat slept.", "Running through the rain.", "She laughed.", "We won."], answer: 1, explanation: "'Running through the rain' lacks a subject and complete thought." },
            { type: "mcq", difficulty: "easy", q: "A complete sentence must have a subject and a:", options: ["comma", "predicate (verb)", "adjective", "title"], answer: 1, explanation: "A complete sentence needs a subject and a predicate." },
            { type: "tf", difficulty: "easy", q: "A run-on joins two complete sentences without correct punctuation or a connector.", answer: true, explanation: "Run-ons fuse independent clauses incorrectly." },
            { type: "mcq", difficulty: "easy", q: "Which is a run-on sentence?", options: ["I was tired, so I slept.", "I was tired I slept.", "I was tired. I slept.", "Because I was tired, I slept."], answer: 1, explanation: "'I was tired I slept' fuses two sentences with no punctuation or connector." },
            { type: "mcq", difficulty: "medium", q: "Which correctly fixes the run-on 'It rained we stayed inside'?", options: ["It rained we, stayed inside.", "It rained, so we stayed inside.", "It rained we stayed, inside.", "It rained, we stayed inside (no connector)"], answer: 1, explanation: "Adding a comma + 'so' joins the clauses correctly." },
            { type: "tf", difficulty: "medium", q: "A 'comma splice' (joining two sentences with only a comma) is a type of run-on error.", answer: true, explanation: "A comma alone cannot join two independent clauses." },
            { type: "short", difficulty: "medium", q: "Give two different ways to fix a run-on sentence.", answer: "Any two of: split it into two sentences with a full stop; join with a comma + coordinating conjunction (and, but, so...); join with a semicolon; or make one clause dependent with a subordinating conjunction (because, although...).", explanation: "Full stop, comma+conjunction, semicolon, or subordination all fix run-ons." },
            { type: "mcq", difficulty: "medium", q: "'When the bell rang.' is a fragment because it:", options: ["has no verb", "is a dependent clause that doesn't express a complete thought", "is too long", "has no commas"], answer: 1, explanation: "It's a subordinate clause needing a main clause to be complete." },
            { type: "short", difficulty: "medium", q: "Turn this fragment into a complete sentence: 'After the movie ended.'", answer: "Examples: 'After the movie ended, we walked home.' Adding a main clause (we walked home) completes the thought.", explanation: "Attach a main clause to complete the idea." },
            { type: "tf", difficulty: "medium", q: "Adding a subject and a verb to a fragment can turn it into a complete sentence.", answer: true, explanation: "A complete sentence needs both, plus a complete thought." },
            { type: "mcq", difficulty: "hard", q: "Which is correctly fixed (neither a fragment nor a run-on)?", options: ["She studied all night, she still felt nervous.", "She studied all night; she still felt nervous.", "She studied all night she still felt nervous.", "Studying all night. Still nervous."], answer: 1, explanation: "A semicolon correctly joins the two independent clauses." },
            { type: "long", difficulty: "hard", q: "Write one fragment and one run-on of your own, then fix each and explain your fix.", answer: "Answers vary. A strong response provides a genuine fragment (incomplete thought) and corrects it into a full sentence; and a genuine run-on (two clauses wrongly joined) corrected with a full stop, comma+conjunction or semicolon — with a brief explanation of each fix.", explanation: "A fragment and a run-on, each correctly fixed and explained." }
          ]
        },

        {
          text: "Identify independent and dependent clauses and use FANBOYS conjunctions.",
          resources: [
            { type: "reading", title: "Clauses & conjunctions", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "Independent vs dependent; coordinating conjunctions." },
            { type: "reading", title: "FANBOYS", provider: "Grammarly", url: "https://www.grammarly.com/blog/coordinating-conjunctions/", note: "For, And, Nor, But, Or, Yet, So." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Analysis of Sentences — Clauses; The Conjunction", note: "This grammar point is covered in Wren & Martin's grammar section, 'Analysis of Sentences — Clauses; The Conjunction'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "An INDEPENDENT clause:", options: ["cannot stand alone", "can stand alone as a complete sentence", "has no verb", "is always a question"], answer: 1, explanation: "An independent clause expresses a complete thought on its own." },
            { type: "mcq", difficulty: "easy", q: "A DEPENDENT (subordinate) clause:", options: ["can stand alone", "cannot stand alone as a sentence", "has no subject ever", "is always a question"], answer: 1, explanation: "A dependent clause needs an independent clause to complete its meaning." },
            { type: "mcq", difficulty: "easy", q: "Which is a FANBOYS (coordinating) conjunction?", options: ["because", "although", "but", "while"], answer: 2, explanation: "FANBOYS = For, And, Nor, But, Or, Yet, So — 'but' is one." },
            { type: "tf", difficulty: "easy", q: "FANBOYS stands for For, And, Nor, But, Or, Yet, So.", answer: true, explanation: "These are the seven coordinating conjunctions." },
            { type: "mcq", difficulty: "medium", q: "Which is a dependent clause?", options: ["The dog barked.", "Although the dog barked", "She smiled.", "We left early."], answer: 1, explanation: "'Although the dog barked' can't stand alone — it's dependent." },
            { type: "mcq", difficulty: "medium", q: "To join two independent clauses with a FANBOYS conjunction, you usually put a:", options: ["semicolon after it", "comma before it", "nothing", "full stop before it"], answer: 1, explanation: "Use a comma before the coordinating conjunction (e.g. '..., and ...')." },
            { type: "match", difficulty: "medium", q: "Match each conjunction to the relationship it shows.", pairs: [["but", "Contrast"], ["so", "Result"], ["or", "Choice/alternative"], ["and", "Addition"]], explanation: "FANBOYS conjunctions signal different relationships." },
            { type: "tf", difficulty: "medium", q: "Words like 'because', 'although' and 'when' are subordinating conjunctions that begin dependent clauses.", answer: true, explanation: "Subordinating conjunctions introduce dependent clauses." },
            { type: "short", difficulty: "medium", q: "Combine these into one sentence using a FANBOYS conjunction: 'I wanted to go. It was raining.'", answer: "Example: 'I wanted to go, but it was raining.' The comma + 'but' joins the two independent clauses and shows the contrast.", explanation: "Comma + 'but' joins the clauses and shows contrast." },
            { type: "mcq", difficulty: "medium", q: "Which sentence correctly joins two independent clauses?", options: ["I cooked dinner, and she washed up.", "I cooked dinner and, she washed up.", "I cooked dinner she washed up.", "I cooked dinner, she washed up."], answer: 0, explanation: "Comma before 'and' correctly joins two independent clauses." },
            { type: "mcq", difficulty: "hard", q: "In 'Because it was late, we left,' the dependent clause is:", options: ["we left", "Because it was late", "it", "late"], answer: 1, explanation: "'Because it was late' can't stand alone — it's the dependent clause." },
            { type: "long", difficulty: "hard", q: "Write one sentence with two independent clauses joined by a FANBOYS conjunction, and one sentence containing a dependent clause. Identify the clauses.", answer: "Answers vary. A strong response gives one compound sentence correctly joining two independent clauses with a comma + FANBOYS conjunction, and one complex sentence containing a dependent clause (introduced by a subordinating conjunction), with the clauses identified.", explanation: "A correct compound sentence (FANBOYS) and a sentence with a dependent clause, both identified." }
          ]
        },

        {
          text: "Use commas and semicolons correctly.",
          resources: [
            { type: "reading", title: "Commas", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/punctuation/commas/index.html", note: "Comma rules with examples." },
            { type: "reading", title: "Semicolons", provider: "Grammarly", url: "https://www.grammarly.com/blog/semicolon/", note: "When and how to use a semicolon." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Punctuation", note: "This grammar point is covered in Wren & Martin's grammar section, 'Punctuation'.", url: "" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Commas are used to separate items in a list of three or more.", answer: true, explanation: "Lists use commas to separate items." },
            { type: "mcq", difficulty: "easy", q: "Which sentence uses list commas correctly?", options: ["I bought eggs milk and bread.", "I bought eggs, milk, and bread.", "I bought, eggs milk bread.", "I, bought eggs milk bread."], answer: 1, explanation: "Commas separate the listed items." },
            { type: "mcq", difficulty: "medium", q: "A semicolon can correctly join:", options: ["a word and a comma", "two closely related independent clauses", "a fragment to nothing", "items that need no separation"], answer: 1, explanation: "A semicolon links two related complete sentences." },
            { type: "tf", difficulty: "easy", q: "A comma is also used after an introductory word or phrase (e.g. 'However, ...').", answer: true, explanation: "Introductory elements are followed by a comma." },
            { type: "mcq", difficulty: "medium", q: "Which correctly uses a semicolon?", options: ["I love reading; especially mysteries.", "I love reading; I read every night.", "I love reading; and writing.", "I love; reading."], answer: 1, explanation: "Both sides of the semicolon are complete, related sentences." },
            { type: "mcq", difficulty: "medium", q: "Choose the correctly punctuated sentence:", options: ["After the rain we went outside.", "After the rain, we went outside.", "After, the rain we went outside.", "After the rain we, went outside."], answer: 1, explanation: "A comma follows the introductory phrase 'After the rain'." },
            { type: "tf", difficulty: "medium", q: "You can use a semicolon to separate items in a list when the items themselves already contain commas.", answer: true, explanation: "Semicolons clarify complex lists with internal commas." },
            { type: "short", difficulty: "medium", q: "Explain one situation where you would use a semicolon instead of a comma.", answer: "To join two closely related complete sentences without a conjunction (e.g. 'It was late; we went home'), or to separate list items that already contain commas. A comma alone between two sentences would be a comma splice.", explanation: "Semicolons join related independent clauses or separate comma-containing list items." },
            { type: "mcq", difficulty: "medium", q: "Which sentence has a comma splice (incorrect)?", options: ["It was cold, so we left.", "It was cold; we left.", "It was cold, we left.", "Because it was cold, we left."], answer: 2, explanation: "'It was cold, we left' joins two sentences with only a comma — a splice." },
            { type: "tf", difficulty: "medium", q: "Commas are used to set off a non-essential phrase, e.g. 'My brother, who is older, lives abroad.'", answer: true, explanation: "Commas enclose non-essential (extra) information." },
            { type: "mcq", difficulty: "hard", q: "Which is punctuated correctly?", options: ["We visited Paris, France; Rome, Italy; and Bern, Switzerland.", "We visited Paris France, Rome Italy, Bern Switzerland.", "We visited Paris, France, Rome, Italy, Bern, Switzerland.", "We visited; Paris France Rome Italy."], answer: 0, explanation: "Semicolons separate list items that contain internal commas." },
            { type: "long", difficulty: "hard", q: "Write one sentence using commas in a list, and one sentence using a semicolon to join two related independent clauses. Explain why each punctuation mark is correct.", answer: "Answers vary. A strong response gives a correct list sentence (commas separating items) and a correct semicolon sentence (joining two related complete clauses), with a brief, accurate reason for each punctuation choice.", explanation: "A correct list-comma sentence and a correct semicolon sentence, each justified." }
          ]
        },

        {
          text: "Build simple, compound and complex sentences.",
          resources: [
            { type: "reading", title: "Sentence types", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "Simple, compound and complex sentences." },
            { type: "reading", title: "Sentence structure", provider: "Grammarly", url: "https://www.grammarly.com/blog/sentence-structure/", note: "Combining clauses." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Analysis of Sentences — Kinds of Sentences", note: "This grammar point is covered in Wren & Martin's grammar section, 'Analysis of Sentences — Kinds of Sentences'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A SIMPLE sentence has:", options: ["one independent clause", "two independent clauses", "a dependent clause only", "no verb"], answer: 0, explanation: "A simple sentence is a single independent clause." },
            { type: "mcq", difficulty: "medium", q: "A COMPOUND sentence is made of:", options: ["one independent clause", "two independent clauses joined correctly", "only a dependent clause", "no clauses"], answer: 1, explanation: "Compound = two independent clauses joined (e.g. with a FANBOYS + comma)." },
            { type: "mcq", difficulty: "medium", q: "A COMPLEX sentence has:", options: ["two independent clauses", "one independent and at least one dependent clause", "no clauses", "only fragments"], answer: 1, explanation: "Complex = an independent clause plus a dependent clause." },
            { type: "match", difficulty: "medium", q: "Match each sentence type to its make-up.", pairs: [["Simple", "One independent clause"], ["Compound", "Two independent clauses"], ["Complex", "An independent + a dependent clause"]], explanation: "Sentence types differ by how clauses combine." },
            { type: "mcq", difficulty: "easy", q: "Which is a simple sentence?", options: ["The dog barked, and the cat ran.", "The dog barked.", "When the dog barked, the cat ran.", "The dog barked; the cat ran."], answer: 1, explanation: "'The dog barked.' is one independent clause — simple." },
            { type: "mcq", difficulty: "medium", q: "Which is a complex sentence?", options: ["I ate lunch.", "I ate lunch, and I rested.", "After I ate lunch, I rested.", "I ate lunch; I rested."], answer: 2, explanation: "'After I ate lunch' is a dependent clause + an independent clause = complex." },
            { type: "tf", difficulty: "medium", q: "A compound-complex sentence contains two independent clauses and at least one dependent clause.", answer: true, explanation: "That combination defines a compound-complex sentence." },
            { type: "short", difficulty: "medium", q: "Turn this simple sentence into a complex one: 'She smiled.'", answer: "Example: 'When she heard the good news, she smiled.' Adding a dependent clause ('When she heard the good news') makes it complex.", explanation: "Adding a dependent clause creates a complex sentence." },
            { type: "tf", difficulty: "medium", q: "Using a mix of simple, compound and complex sentences makes writing more varied and interesting.", answer: true, explanation: "Sentence variety improves style and rhythm." },
            { type: "mcq", difficulty: "medium", q: "'The sun set, and the stars appeared.' is a:", options: ["simple sentence", "compound sentence", "complex sentence", "fragment"], answer: 1, explanation: "Two independent clauses joined by ', and' make a compound sentence." },
            { type: "mcq", difficulty: "hard", q: "'Although it was raining, we went out, and we had fun.' is a:", options: ["simple sentence", "compound sentence", "complex sentence", "compound-complex sentence"], answer: 3, explanation: "It has a dependent clause plus two independent clauses — compound-complex." },
            { type: "long", difficulty: "hard", q: "Write one simple, one compound and one complex sentence on the same topic, and label each.", answer: "Answers vary. A strong response gives three correct sentences on one topic: a simple (one independent clause), a compound (two independent clauses joined correctly), and a complex (independent + dependent clause), each correctly labelled.", explanation: "Correct simple, compound and complex sentences, each labelled." }
          ]
        },

        {
          text: "Use prepositional phrases and appositives.",
          resources: [
            { type: "reading", title: "Prepositional phrases", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "Phrases beginning with prepositions." },
            { type: "reading", title: "Appositives", provider: "Grammarly", url: "https://www.grammarly.com/blog/appositive/", note: "Renaming nouns with appositives." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "The Preposition; The Phrase", note: "This grammar point is covered in Wren & Martin's grammar section, 'The Preposition; The Phrase'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A preposition is a word like:", options: ["run, jump", "in, on, under, beside", "happy, sad", "quickly"], answer: 1, explanation: "Prepositions show position or relationship (in, on, under...)." },
            { type: "mcq", difficulty: "easy", q: "In 'The book on the table is mine,' the prepositional phrase is:", options: ["The book", "on the table", "is mine", "mine"], answer: 1, explanation: "'On the table' begins with the preposition 'on'." },
            { type: "mcq", difficulty: "medium", q: "An appositive is a noun phrase that:", options: ["renames or explains another noun beside it", "is a verb", "ends a sentence", "asks a question"], answer: 0, explanation: "An appositive renames the noun next to it (e.g. 'my dog, a beagle, ...')." },
            { type: "tf", difficulty: "easy", q: "A prepositional phrase begins with a preposition and ends with a noun or pronoun (its object).", answer: true, explanation: "E.g. 'under the bridge' = preposition + object." },
            { type: "mcq", difficulty: "medium", q: "In 'My friend, a talented artist, won the prize,' the appositive is:", options: ["My friend", "a talented artist", "won the prize", "the prize"], answer: 1, explanation: "'A talented artist' renames 'my friend' — an appositive." },
            { type: "tf", difficulty: "medium", q: "A non-essential appositive is usually set off with commas.", answer: true, explanation: "Commas enclose extra (non-essential) appositive information." },
            { type: "short", difficulty: "medium", q: "Write a sentence containing an appositive that renames a noun.", answer: "Answers vary. A correct example renames a noun with a phrase beside it, e.g. 'Mr Rao, our science teacher, is retiring.' ('our science teacher' renames Mr Rao).", explanation: "An appositive phrase renames the noun next to it, usually set off by commas." },
            { type: "mcq", difficulty: "medium", q: "How many prepositional phrases are in 'The cat slept on the mat in the corner'?", options: ["one", "two", "three", "none"], answer: 1, explanation: "'On the mat' and 'in the corner' are two prepositional phrases." },
            { type: "tf", difficulty: "medium", q: "Prepositional phrases can add detail about where, when, or how something happens.", answer: true, explanation: "They give information like place, time and manner." },
            { type: "short", difficulty: "medium", q: "What is the difference between a prepositional phrase and an appositive?", answer: "A prepositional phrase begins with a preposition and gives detail about place, time or manner (e.g. 'in the garden'). An appositive is a noun phrase that renames or explains a nearby noun (e.g. 'Spot, our dog'). They do different jobs.", explanation: "Prepositional phrase = preposition + object (detail); appositive = noun phrase renaming a noun." },
            { type: "mcq", difficulty: "hard", q: "In 'Mount Everest, the world's tallest peak, lies in the Himalayas,' identify the appositive and a prepositional phrase.", options: ["appositive: 'the world's tallest peak'; prepositional: 'in the Himalayas'", "appositive: 'lies'; prepositional: 'Mount Everest'", "appositive: 'tallest'; prepositional: 'the world'", "there are none"], answer: 0, explanation: "The appositive renames Everest; 'in the Himalayas' is the prepositional phrase." },
            { type: "long", difficulty: "hard", q: "Write a sentence that contains BOTH a prepositional phrase and an appositive, then identify each.", answer: "Answers vary. A strong response gives a correct sentence containing a prepositional phrase (preposition + object) and an appositive (a noun phrase renaming a nearby noun), and correctly identifies both.", explanation: "One sentence with both elements, each correctly identified." }
          ]
        },

        {
          text: "Use apostrophes correctly (possession and contractions).",
          resources: [
            { type: "reading", title: "Apostrophes", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/punctuation/apostrophe_introduction.html", note: "Possession and contractions." },
            { type: "reading", title: "Apostrophe rules", provider: "Grammarly", url: "https://www.grammarly.com/blog/apostrophe/", note: "Common apostrophe mistakes." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Punctuation — The Apostrophe", note: "This grammar point is covered in Wren & Martin's grammar section, 'Punctuation — The Apostrophe'.", url: "" }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Which shows correct possession?", options: ["the dogs bone (one dog)", "the dog's bone", "the dogs' bone (one dog)", "the dog,s bone"], answer: 1, explanation: "One dog owning a bone = the dog's bone." },
            { type: "tf", difficulty: "easy", q: "'It's' is the contraction of 'it is', while 'its' shows possession.", answer: true, explanation: "It's = it is; its = belonging to it." },
            { type: "mcq", difficulty: "easy", q: "The contraction of 'do not' is:", options: ["dont", "do'nt", "don't", "does'nt"], answer: 2, explanation: "The apostrophe replaces the missing 'o': don't." },
            { type: "mcq", difficulty: "medium", q: "Which shows correct PLURAL possession?", options: ["the childrens toys", "the children's toys", "the childrens' toys", "the childrens's toys"], answer: 1, explanation: "'Children' is already plural, so add 's: children's toys." },
            { type: "mcq", difficulty: "medium", q: "To show possession for a regular plural noun ending in -s (e.g. 'the boys'), you:", options: ["add 's", "add just an apostrophe after the s (boys')", "add nothing", "remove the s"], answer: 1, explanation: "Regular plurals ending in s take an apostrophe after the s: the boys' room." },
            { type: "tf", difficulty: "medium", q: "Apostrophes are NOT normally used to make a word plural (e.g. 'apples', not 'apple's').", answer: true, explanation: "Plurals don't take apostrophes; that's a common error ('greengrocer's apostrophe')." },
            { type: "match", difficulty: "medium", q: "Match each form to its meaning.", pairs: [["it's", "it is"], ["its", "belonging to it"], ["they're", "they are"], ["their", "belonging to them"]], explanation: "These commonly confused forms differ in meaning." },
            { type: "short", difficulty: "medium", q: "Explain the difference between 'your' and 'you're'.", answer: "'Your' shows possession — something belongs to you ('your book'). 'You're' is a contraction of 'you are' ('you're late'). The apostrophe marks the missing letter in the contraction.", explanation: "your = possession; you're = you are." },
            { type: "mcq", difficulty: "medium", q: "Which sentence is correct?", options: ["Its raining and the cat licked it's paw.", "It's raining and the cat licked its paw.", "Its raining and the cat licked its paw.", "It's raining and the cat licked it's paw."], answer: 1, explanation: "It's = it is (raining); its = possessive (its paw)." },
            { type: "mcq", difficulty: "medium", q: "The contraction 'they'll' means:", options: ["they all", "they will", "they ill", "their"], answer: 1, explanation: "They'll = they will." },
            { type: "mcq", difficulty: "hard", q: "Which sentence uses apostrophes correctly?", options: ["The teachers' lounge is for all the teachers, and it's door is locked.", "The teachers' lounge is for all the teachers, and its door is locked.", "The teacher's lounge is for all the teacher's, and its door is locked.", "The teachers lounge is for all the teachers', and it's door is locked."], answer: 1, explanation: "Plural possessive 'teachers''; possessive 'its' (no apostrophe) for the door." },
            { type: "long", difficulty: "hard", q: "Write four short sentences: one with a singular possessive, one with a plural possessive, one using 'it's', and one using 'its'. Make sure each apostrophe (or lack of one) is correct.", answer: "Answers vary. A strong response gives four correct sentences: a singular possessive (e.g. 'the girl's bag'), a plural possessive (e.g. 'the girls' bags'), a correct use of 'it's' (it is), and a correct use of 'its' (possessive, no apostrophe).", explanation: "Correct singular possessive, plural possessive, 'it's', and 'its'." }
          ]
        },

        {
          text: "Edit for sentence variety to improve style.",
          resources: [
            { type: "reading", title: "Sentence variety", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/general_writing/mechanics/sentence_variety.html", note: "Varying length and structure." },
            { type: "reading", title: "Improving style", provider: "Khan Academy", url: "https://www.khanacademy.org/humanities/grammar", note: "Making writing flow with varied sentences." },
            { type: "book", title: "Wren & Martin — High School English Grammar and Composition", author: "Wren & Martin (rev. N.D.V. Prasada Rao)", chapter: "Transformation & Synthesis of Sentences", note: "This grammar point is covered in Wren & Martin's grammar section, 'Transformation & Synthesis of Sentences'.", url: "" }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Mixing short and long sentences makes writing more interesting to read.", answer: true, explanation: "Sentence variety improves rhythm and engagement." },
            { type: "mcq", difficulty: "easy", q: "'Sentence variety' means varying:", options: ["only spelling", "the length and structure of your sentences", "the page numbers", "the font"], answer: 1, explanation: "Variety mixes sentence lengths and types." },
            { type: "tf", difficulty: "easy", q: "Starting every sentence the same way (e.g. 'I... I... I...') can make writing feel repetitive.", answer: true, explanation: "Repeated openings reduce variety and flow." },
            { type: "mcq", difficulty: "medium", q: "A short sentence among longer ones can be used to:", options: ["confuse the reader", "create emphasis or impact", "fill space", "hide the topic"], answer: 1, explanation: "A short sentence stands out and adds punch." },
            { type: "short", difficulty: "medium", q: "Why is sentence variety important in good writing?", answer: "Varying sentence length and structure keeps writing from sounding repetitive or monotonous, controls pace and emphasis, and keeps the reader engaged. A mix of simple, compound and complex sentences reads more naturally.", explanation: "Variety improves rhythm, emphasis and reader interest." },
            { type: "mcq", difficulty: "medium", q: "One way to add variety is to start some sentences with:", options: ["always the subject", "a prepositional phrase, an adverb, or a dependent clause", "the same word every time", "a number only"], answer: 1, explanation: "Varying sentence openings increases variety." },
            { type: "tf", difficulty: "medium", q: "Combining several short, choppy sentences into one can improve flow.", answer: true, explanation: "Combining choppy sentences reduces monotony and improves flow." },
            { type: "mcq", difficulty: "medium", q: "Which passage shows the BEST sentence variety?", options: ["I woke up. I ate. I left. I walked.", "After waking early, I ate a quick breakfast and left; the walk to school was peaceful.", "I woke up and I ate and I left and I walked.", "Woke. Ate. Left."], answer: 1, explanation: "It varies sentence length and structure, improving flow." },
            { type: "short", difficulty: "medium", q: "Rewrite these choppy sentences into one varied sentence: 'The dog was hungry. It barked. It ran to its bowl.'", answer: "Example: 'Hungry and barking, the dog ran to its bowl.' or 'The hungry dog barked and ran to its bowl.' Combining the ideas creates one smoother, more varied sentence.", explanation: "Combining choppy sentences improves variety and flow." },
            { type: "tf", difficulty: "medium", q: "Sentence variety is about both how sentences begin and how long they are.", answer: true, explanation: "Variety includes openings, length and structure." },
            { type: "mcq", difficulty: "hard", q: "A paragraph of all long, complex sentences with no short ones is likely to:", options: ["read clearly and punchily", "feel dense and tiring, lacking emphasis", "have perfect variety", "be a fragment"], answer: 1, explanation: "All-long sentences feel dense; short sentences add contrast and emphasis." },
            { type: "long", difficulty: "hard", q: "Take a short, choppy passage (3+ short sentences) and rewrite it with better sentence variety. Show both versions.", answer: "Answers vary. A strong response shows an original choppy passage and a revised version that varies sentence length and structure (combining some, varying openings) while keeping the meaning — clearly improving flow and readability.", explanation: "Original choppy passage + a revised version with improved variety." }
          ]
        }

      ]
    },

    /* ============================================================ */
    {
      id: "e7-research",
      title: "Research & Academic Skills",
      subject: "Research",
      icon: "🔎",
      summary: "Generating research questions, evaluating sources with the CRAAP test, paraphrasing vs quoting, avoiding plagiarism, MLA citation basics, collecting and annotating evidence, and seminar (Harkness) discussion.",
      objectives: [

        {
          text: "Generate focused research questions.",
          resources: [
            { type: "reading", title: "Developing research questions", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/research_overview/index.html", note: "From broad topic to focused question." },
            { type: "reading", title: "Research skills", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Asking good questions to guide research." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "A good research question is usually:", options: ["answerable with a simple yes/no and very broad", "focused, clear and open enough to explore", "impossible to research", "the same as the title"], answer: 1, explanation: "Strong research questions are focused yet open to investigation." },
            { type: "tf", difficulty: "easy", q: "'Everything about space' is too broad to be a good research question.", answer: true, explanation: "It needs narrowing to a focused, researchable question." },
            { type: "mcq", difficulty: "easy", q: "A research question guides your work by:", options: ["telling you what to investigate and find out", "giving you the answer immediately", "replacing the need for sources", "being kept secret"], answer: 0, explanation: "It focuses the investigation on what you want to learn." },
            { type: "mcq", difficulty: "medium", q: "Which is the most focused research question?", options: ["Are animals interesting?", "What is everything about oceans?", "How does plastic pollution affect sea turtles?", "Why is science good?"], answer: 2, explanation: "It is specific, focused and researchable." },
            { type: "tf", difficulty: "medium", q: "A research question that can be answered with one word from a single quick search is usually too narrow or simple.", answer: true, explanation: "Good research questions invite investigation, not a one-word lookup." },
            { type: "short", difficulty: "medium", q: "Name two qualities of a good research question.", answer: "Any two of: focused/specific, clear, open (not just yes/no), researchable with available sources, and interesting/meaningful enough to explore.", explanation: "Focused, clear, open and researchable are key qualities." },
            { type: "mcq", difficulty: "medium", q: "To narrow a broad topic like 'pollution' into a research question, you might add:", options: ["nothing", "a specific type, place, group or effect", "more vague words", "a random fact"], answer: 1, explanation: "Adding specifics (type, place, effect) narrows the focus." },
            { type: "short", difficulty: "medium", q: "Turn the broad topic 'social media' into a focused research question.", answer: "Answers vary. A strong example narrows it, e.g. 'How does social media use affect the sleep of teenagers?' — specific, focused and researchable. Any reasonable narrowing is acceptable.", explanation: "A good answer adds a specific angle (group, effect, place) to the broad topic." },
            { type: "tf", difficulty: "medium", q: "It's normal to refine or adjust your research question as you learn more during research.", answer: true, explanation: "Questions often sharpen as research progresses." },
            { type: "mcq", difficulty: "hard", q: "Which question would lead to the richest research project?", options: ["When did the internet start?", "How has the internet changed the way students learn, and is the effect positive?", "Is the internet real?", "Do people use phones?"], answer: 1, explanation: "It is open, focused, and invites analysis and evidence." },
            { type: "short", difficulty: "hard", q: "Why does a focused research question make the whole research process easier?", answer: "A focused question tells you exactly what to look for, so you can choose relevant sources, ignore off-topic material, organise your findings, and build a clear answer. A vague question leaves you with too much to cover and no clear direction.", explanation: "Focus directs your searching, source selection and organisation." },
            { type: "long", difficulty: "hard", q: "Choose a broad topic you find interesting. Write a focused research question about it and explain why it is well-focused (not too broad or too narrow).", answer: "Answers vary. A strong response gives a focused, open, researchable question and explains that it targets a specific angle (avoiding 'everything about X') while still being open enough to explore (not a one-word lookup).", explanation: "A focused question + a clear explanation of why its scope is right." }
          ]
        },

        {
          text: "Evaluate sources using the CRAAP test.",
          resources: [
            { type: "reading", title: "Evaluating sources (CRAAP)", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/conducting_research/evaluating_sources_of_information/index.html", note: "Currency, Relevance, Authority, Accuracy, Purpose." },
            { type: "reading", title: "Source evaluation", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Judging if a source is reliable." }
          ],
          quiz: [
            { type: "match", difficulty: "medium", q: "Match each CRAAP letter to its meaning.", pairs: [["C — Currency", "How recent the information is"], ["A — Authority", "Who wrote it and their expertise"], ["A — Accuracy", "Whether it is correct and supported"], ["P — Purpose", "Why it was written (inform/sell/persuade)"]], explanation: "CRAAP = Currency, Relevance, Authority, Accuracy, Purpose." },
            { type: "mcq", difficulty: "easy", q: "CRAAP stands for Currency, Relevance, Authority, Accuracy and:", options: ["Popularity", "Purpose", "Price", "Pictures"], answer: 1, explanation: "The final P is Purpose." },
            { type: "mcq", difficulty: "medium", q: "Checking WHO wrote a source and whether they are an expert tests its:", options: ["currency", "authority", "purpose", "length"], answer: 1, explanation: "Authority is about the author's credentials and expertise." },
            { type: "mcq", difficulty: "easy", q: "'Currency' in the CRAAP test refers to:", options: ["money", "how up-to-date the information is", "the country of origin", "the colour"], answer: 1, explanation: "Currency = how recent/timely the information is." },
            { type: "tf", difficulty: "easy", q: "'Relevance' asks whether the source actually relates to your topic and question.", answer: true, explanation: "Relevance is about fit to your research need." },
            { type: "mcq", difficulty: "medium", q: "A website trying to SELL you something may score poorly on which CRAAP element?", options: ["Currency", "Purpose (it may be biased toward selling)", "Length", "Font"], answer: 1, explanation: "A selling purpose can bias the information." },
            { type: "tf", difficulty: "medium", q: "Checking 'Accuracy' includes seeing whether claims are supported by evidence and can be verified elsewhere.", answer: true, explanation: "Accuracy is about correctness and verifiable support." },
            { type: "short", difficulty: "medium", q: "Why should you consider the PURPOSE of a source?", answer: "Because the reason a source was created — to inform, persuade, sell or entertain — affects how balanced and trustworthy it is. A source meant to sell or persuade may leave out or slant information, so knowing its purpose helps you judge its reliability.", explanation: "Purpose reveals possible bias and affects reliability." },
            { type: "mcq", difficulty: "medium", q: "Which source is likely MOST authoritative on a medical question?", options: ["a random anonymous blog", "an article by a qualified doctor on a reputable health site", "a social media meme", "an advert for a supplement"], answer: 1, explanation: "A qualified expert on a reputable site has strong authority." },
            { type: "tf", difficulty: "medium", q: "A very old source can still be a problem even if it was once accurate, because information may be out of date.", answer: true, explanation: "Currency matters — facts and knowledge can change over time." },
            { type: "mcq", difficulty: "hard", q: "You find a 2015 article by an unnamed author on a site that sells the product it praises. Which CRAAP concerns apply?", options: ["none", "Authority (no named author), Purpose (selling/bias), and possibly Currency (dated)", "only the font", "only Relevance"], answer: 1, explanation: "No author = authority issue; selling = purpose/bias; 2015 = possibly dated." },
            { type: "long", difficulty: "hard", q: "Choose a source you might use for research. Evaluate it using at least three CRAAP criteria and decide whether it is reliable.", answer: "Answers vary. A strong response names a source and applies at least three CRAAP criteria (Currency, Relevance, Authority, Accuracy, Purpose) with specific observations, then reaches a reasoned conclusion about the source's reliability.", explanation: "At least three CRAAP criteria applied to a real source + a reasoned verdict." }
          ]
        },

        {
          text: "Paraphrase and quote appropriately.",
          resources: [
            { type: "reading", title: "Quoting, paraphrasing, summarising", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/using_research/quoting_paraphrasing_and_summarizing/index.html", note: "When to use each." },
            { type: "reading", title: "Paraphrase vs quote", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Using others' ideas correctly." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "To paraphrase means to:", options: ["copy the exact words", "restate someone's idea in your own words", "ignore the source", "translate to another language"], answer: 1, explanation: "Paraphrasing restates an idea in your own words." },
            { type: "mcq", difficulty: "easy", q: "To quote means to:", options: ["use the exact words from a source, in quotation marks", "make up a fact", "summarise loosely", "delete the source"], answer: 0, explanation: "A quote reproduces the original words exactly, in quotation marks." },
            { type: "tf", difficulty: "easy", q: "Even a paraphrase needs to credit the original source.", answer: true, explanation: "Using someone's idea always requires acknowledgement." },
            { type: "tf", difficulty: "easy", q: "A direct quote must use the exact original words inside quotation marks.", answer: true, explanation: "Quotes reproduce the wording precisely." },
            { type: "mcq", difficulty: "medium", q: "When is it better to QUOTE rather than paraphrase?", options: ["always", "when the exact original wording is powerful, precise, or important", "never", "only for long passages"], answer: 1, explanation: "Quote when the precise wording matters; otherwise paraphrase." },
            { type: "mcq", difficulty: "medium", q: "A good paraphrase:", options: ["just swaps a couple of words", "fully restates the idea in new words and structure while keeping the meaning", "copies the sentence exactly", "changes the meaning"], answer: 1, explanation: "A real paraphrase reworks wording and structure, keeping the meaning." },
            { type: "tf", difficulty: "medium", q: "Changing only a few words of the original while keeping its structure is NOT proper paraphrasing.", answer: true, explanation: "Near-copying is 'patchwriting' and risks plagiarism." },
            { type: "short", difficulty: "medium", q: "What is the difference between paraphrasing and summarising?", answer: "Paraphrasing restates a specific passage in your own words at about the same length and detail. Summarising condenses a larger text down to its main points, so it is much shorter. Both use your own words and need credit.", explanation: "Paraphrase = restate (similar length); summary = condense (shorter)." },
            { type: "mcq", difficulty: "medium", q: "Both quoting and paraphrasing require you to:", options: ["hide the source", "credit/cite the original source", "change the meaning", "use no punctuation"], answer: 1, explanation: "Both must acknowledge the source to avoid plagiarism." },
            { type: "short", difficulty: "medium", q: "Paraphrase this sentence in your own words: 'The library is open to all students after school.'", answer: "Answers vary. A correct paraphrase restates the meaning in new words, e.g. 'After classes finish, any student is welcome to use the library.' The meaning must be kept while the wording changes.", explanation: "Same meaning, genuinely different wording and structure." },
            { type: "mcq", difficulty: "hard", q: "You want to use an author's exact, memorable phrase in your essay. You should:", options: ["paraphrase it without credit", "quote it in quotation marks and cite the source", "copy it with no marks or credit", "change a few words and call it your own"], answer: 1, explanation: "Exact wording must be quoted and cited." },
            { type: "long", difficulty: "hard", q: "Take any short sentence from a text or write one. First quote it correctly, then paraphrase it. Explain when each version would be better to use.", answer: "Answers vary. A strong response shows a correct direct quote (exact words, quotation marks) and a genuine paraphrase (reworded, same meaning), and explains that quoting suits powerful/precise wording while paraphrasing suits restating an idea in your own voice — both needing a citation.", explanation: "A correct quote + a genuine paraphrase + when to use each." }
          ]
        },

        {
          text: "Avoid plagiarism.",
          resources: [
            { type: "reading", title: "Avoiding plagiarism", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/avoiding_plagiarism/index.html", note: "What counts as plagiarism and how to avoid it." },
            { type: "reading", title: "Academic honesty", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Crediting sources properly." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "Plagiarism is:", options: ["citing your sources", "using someone else's words or ideas as if they were your own", "writing in your own words with credit", "asking a question"], answer: 1, explanation: "Plagiarism is presenting others' work as your own." },
            { type: "tf", difficulty: "easy", q: "Quoting a source and citing it correctly is NOT plagiarism.", answer: true, explanation: "Proper quoting with citation is honest use of sources." },
            { type: "mcq", difficulty: "easy", q: "Copying a paragraph from a website into your essay without quotation marks or a citation is:", options: ["good research", "plagiarism", "paraphrasing", "summarising"], answer: 1, explanation: "Using exact words without credit is plagiarism." },
            { type: "tf", difficulty: "easy", q: "Even ideas (not just words) must be credited to their source.", answer: true, explanation: "Borrowed ideas require acknowledgement too." },
            { type: "mcq", difficulty: "medium", q: "Which of these helps you avoid plagiarism?", options: ["copying and changing a few words", "taking careful notes, using your own words, and citing all sources", "not mentioning where ideas came from", "memorising and retyping a source"], answer: 1, explanation: "Own words + citations are the key to avoiding plagiarism." },
            { type: "tf", difficulty: "medium", q: "Paraphrasing without crediting the source is still plagiarism.", answer: true, explanation: "Borrowed ideas need credit even when reworded." },
            { type: "short", difficulty: "medium", q: "Name two ways to avoid plagiarism in your writing.", answer: "Any two of: put quoted words in quotation marks and cite them; paraphrase properly in your own words and still cite the idea; keep careful notes of where information came from; include a Works Cited/reference list; and do your own thinking and writing.", explanation: "Quote+cite, paraphrase+cite, track sources and reference them." },
            { type: "mcq", difficulty: "medium", q: "'Patchwriting' (copying a sentence and changing only a few words) is:", options: ["proper paraphrasing", "still a form of plagiarism", "always fine", "the best technique"], answer: 1, explanation: "Minimal word-swapping that keeps the original structure is a kind of plagiarism." },
            { type: "tf", difficulty: "medium", q: "Citing your sources also helps readers find and check the information for themselves.", answer: true, explanation: "Citations give credit and allow verification." },
            { type: "mcq", difficulty: "medium", q: "If you use your OWN original idea, do you need to cite it?", options: ["yes, always", "no — it's your own idea, though you cite any sources that influenced it", "only on Mondays", "no citations are ever needed"], answer: 1, explanation: "Your own ideas don't need citing, but sources you drew on do." },
            { type: "short", difficulty: "hard", q: "Why is avoiding plagiarism important, beyond just 'not breaking the rules'?", answer: "It respects the original creators by giving credit, builds your honesty and credibility, lets readers trace your evidence, and shows you've genuinely understood and engaged with the material rather than copying. It's about fairness and trust as well as rules.", explanation: "Avoiding plagiarism is about credit, honesty, credibility and genuine learning." },
            { type: "long", difficulty: "hard", q: "Explain the difference between an acceptable use of a source and plagiarism, using an example of each.", answer: "Answers vary. A strong response contrasts an acceptable use (e.g. quoting with quotation marks and a citation, or paraphrasing properly and citing the idea) with plagiarism (e.g. copying words or ideas without quotation marks or credit), with a clear example of each.", explanation: "A correctly-credited use vs an uncredited copy, each illustrated." }
          ]
        },

        {
          text: "Apply MLA citation basics.",
          resources: [
            { type: "reading", title: "MLA formatting & citation", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_general_format.html", note: "The standard MLA guide." },
            { type: "reading", title: "In-text citations (MLA)", provider: "Purdue OWL", url: "https://owl.purdue.edu/owl/research_and_citation/mla_style/mla_formatting_and_style_guide/mla_in_text_citations_the_basics.html", note: "How to cite within your writing." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "An MLA in-text citation usually includes the author's last name and the:", options: ["page number", "colour of the book", "publisher's phone number", "weather"], answer: 0, explanation: "MLA in-text citations give author + page number." },
            { type: "tf", difficulty: "easy", q: "A 'Works Cited' page lists the full details of every source used.", answer: true, explanation: "MLA ends with a Works Cited list of sources." },
            { type: "mcq", difficulty: "easy", q: "An MLA Works Cited list is arranged:", options: ["randomly", "alphabetically by author's last name", "by page count", "by colour"], answer: 1, explanation: "Entries are alphabetised by the author's last name." },
            { type: "mcq", difficulty: "medium", q: "Which is a correct MLA in-text citation?", options: ["(Smith 42)", "(page 42 by Smith book)", "[Smith, 42, 2020]", "Smith said it"], answer: 0, explanation: "MLA in-text style is (Author PageNumber): (Smith 42)." },
            { type: "tf", difficulty: "medium", q: "Every source cited in the text should also appear on the Works Cited page (and vice versa).", answer: true, explanation: "In-text citations and Works Cited entries must match." },
            { type: "mcq", difficulty: "medium", q: "An MLA Works Cited entry for a book typically begins with the:", options: ["page number", "author's last name", "publisher", "price"], answer: 1, explanation: "Entries start with the author's last name for alphabetising." },
            { type: "short", difficulty: "medium", q: "What two pieces of information does a basic MLA in-text citation give?", answer: "The author's last name and the page number where the information was found, e.g. (Patel 17). This points the reader to the full source on the Works Cited page.", explanation: "Author's last name + page number." },
            { type: "tf", difficulty: "medium", q: "If you already name the author in your sentence, the in-text citation can just give the page number.", answer: true, explanation: "If 'Smith argues...' is in the sentence, you only need (42) at the end." },
            { type: "mcq", difficulty: "medium", q: "The main purpose of citations is to:", options: ["make essays longer", "give credit to sources and let readers find them", "show off", "fill the page"], answer: 1, explanation: "Citations credit sources and enable verification." },
            { type: "mcq", difficulty: "medium", q: "Which belongs in an MLA Works Cited entry for an online article?", options: ["author, title, website name, date, and URL/access info", "only the author's first name", "your opinion of it", "the time you read it in seconds"], answer: 0, explanation: "MLA web entries include author, title, site, date and location (URL)." },
            { type: "tf", difficulty: "hard", q: "MLA format also has rules for the whole paper, such as double-spacing and a header with your last name and page number.", answer: true, explanation: "MLA covers overall formatting, not just citations." },
            { type: "long", difficulty: "hard", q: "Explain why a research essay needs BOTH in-text citations and a Works Cited page, and how the two work together.", answer: "Answers vary. A strong response explains that in-text citations briefly mark where borrowed material appears (author + page) so readers see exactly what came from a source, while the Works Cited page gives the full details so readers can locate each source. Together they give credit and let readers trace and verify every source.", explanation: "In-text marks the borrowing; Works Cited gives full details — together they credit and enable verification." }
          ]
        },

        {
          text: "Collect textual evidence and annotate effectively.",
          resources: [
            { type: "reading", title: "Annotating texts", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Marking up a text for key ideas and evidence." },
            { type: "reading", title: "Gathering evidence", provider: "CommonLit", url: "https://www.commonlit.org/", note: "Finding and recording support." }
          ],
          quiz: [
            { type: "tf", difficulty: "easy", q: "Annotating means making notes and marks on a text to record your thinking and key evidence.", answer: true, explanation: "Annotation captures ideas and evidence as you read." },
            { type: "mcq", difficulty: "easy", q: "'Textual evidence' is:", options: ["your guess", "specific words or details from the text that support a point", "the page count", "the cover"], answer: 1, explanation: "Textual evidence is support taken directly from the text." },
            { type: "short", difficulty: "medium", q: "Name one thing you might mark when annotating a text.", answer: "Any of: key ideas/main points, important quotes or evidence, unfamiliar words, questions, connections, the author's techniques, or your reactions.", explanation: "Annotations flag key ideas, evidence, questions and techniques." },
            { type: "mcq", difficulty: "easy", q: "Underlining or highlighting a key quote while reading helps you:", options: ["lose the quote", "find and use it as evidence later", "skip the text", "change the meaning"], answer: 1, explanation: "Marking key quotes makes them easy to locate as evidence later." },
            { type: "tf", difficulty: "easy", q: "Good annotations include your own thoughts and questions, not just highlighting.", answer: true, explanation: "Notes and questions make annotation active thinking." },
            { type: "mcq", difficulty: "medium", q: "When collecting evidence for an essay, you should choose quotes that are:", options: ["the longest available", "directly relevant to your point", "random", "from the title only"], answer: 1, explanation: "Relevant evidence supports your specific point." },
            { type: "tf", difficulty: "medium", q: "Noting the page or location of each quote as you collect it saves time when you cite it later.", answer: true, explanation: "Recording locations makes citation quick and accurate." },
            { type: "short", difficulty: "medium", q: "How does annotating a text help you when you later write about it?", answer: "Annotation records your thinking, key ideas and evidence as you read, so when you write you can quickly find relevant quotes, recall your interpretations, and see patterns — making your analysis faster, deeper and well-supported.", explanation: "Annotations give you ready evidence and recorded thinking for later writing." },
            { type: "mcq", difficulty: "medium", q: "A symbol system (e.g. ! for surprising, ? for unclear) when annotating helps you:", options: ["waste time", "quickly mark and later find different kinds of notes", "hide your ideas", "avoid reading"], answer: 1, explanation: "A consistent symbol system speeds up marking and reviewing." },
            { type: "tf", difficulty: "medium", q: "Strong evidence is specific (a particular quote or detail) rather than vague.", answer: true, explanation: "Specific evidence is more convincing than general statements." },
            { type: "mcq", difficulty: "hard", q: "You're arguing a character is lonely. The BEST evidence to collect is:", options: ["'It was 1999.'", "'She ate alone again, watching the others laugh across the room.'", "'The town was large.'", "'He had brown shoes.'"], answer: 1, explanation: "Eating alone while others laugh directly supports loneliness." },
            { type: "long", difficulty: "hard", q: "Describe your own method for annotating a text and collecting evidence. What would you mark, and how would you organise it for later use?", answer: "Answers vary. A strong response describes a practical method — e.g. highlighting key quotes, writing margin notes/questions, using symbols, and recording quotes with their page numbers in a list or notes — and explains how this organisation helps when writing later.", explanation: "A clear, practical annotation/evidence-collection method with organisation for later use." }
          ]
        },

        {
          text: "Participate in seminar (Harkness-style) discussion.",
          resources: [
            { type: "reading", title: "Discussion & speaking skills", provider: "ReadWriteThink", url: "https://www.readwritethink.org/", note: "Collaborative, student-led discussion." },
            { type: "reading", title: "Academic discussion", provider: "Khan Academy", url: "https://www.khanacademy.org/ela", note: "Building on others' ideas with evidence." }
          ],
          quiz: [
            { type: "mcq", difficulty: "easy", q: "In a Harkness-style seminar, students mainly:", options: ["listen silently to the teacher only", "lead the discussion themselves, building on each other's ideas", "compete to talk loudest", "read in silence"], answer: 1, explanation: "Harkness discussion is student-led and collaborative." },
            { type: "short", difficulty: "medium", q: "Name one way to contribute well in a class discussion.", answer: "Any of: build on a classmate's point, support your view with evidence from the text, ask a thoughtful question, listen actively, disagree respectfully, or invite quieter members to speak.", explanation: "Good discussion means listening, building on others, and using evidence." },
            { type: "mcq", difficulty: "easy", q: "Active listening in a discussion means:", options: ["planning your reply and ignoring others", "paying attention and responding to what others actually say", "talking over people", "looking away"], answer: 1, explanation: "Active listening focuses on understanding others before responding." },
            { type: "tf", difficulty: "easy", q: "Supporting your point with evidence from the text makes your contribution stronger.", answer: true, explanation: "Evidence grounds and strengthens discussion points." },
            { type: "mcq", difficulty: "medium", q: "'Building on' a peer's idea means:", options: ["repeating it word-for-word", "adding to, extending, or thoughtfully responding to it", "ignoring it", "changing the subject"], answer: 1, explanation: "Building on connects your contribution to a peer's point." },
            { type: "tf", difficulty: "medium", q: "Disagreeing respectfully — challenging the idea, not the person — is a valuable part of discussion.", answer: true, explanation: "Respectful disagreement keeps discussion productive and civil." },
            { type: "short", difficulty: "medium", q: "Give a sentence starter that helps you build on or respond to a classmate's point.", answer: "Examples: 'Building on what ___ said...', 'I agree with ___, and I'd add...', 'I see it differently because...', 'That connects to...'. (Any phrase linking to a peer's point.)", explanation: "Sentence starters link your contribution to a peer's idea." },
            { type: "mcq", difficulty: "medium", q: "Which behaviour HARMS a good seminar discussion?", options: ["asking a thoughtful question", "interrupting and dominating the conversation", "citing the text", "listening carefully"], answer: 1, explanation: "Interrupting and dominating shuts down collaborative discussion." },
            { type: "tf", difficulty: "medium", q: "A good discussion involves many voices, not just one or two people talking.", answer: true, explanation: "Balanced participation makes a richer discussion." },
            { type: "mcq", difficulty: "medium", q: "Asking an open question in discussion (e.g. 'Why might the author have ended it that way?') helps by:", options: ["closing down talk", "inviting deeper thinking and more responses", "showing off", "ending the seminar"], answer: 1, explanation: "Open questions spark deeper, fuller discussion." },
            { type: "short", difficulty: "hard", q: "Why is listening just as important as speaking in a seminar discussion?", answer: "Because good contributions respond to what others have said — you can only build on, agree with, or thoughtfully challenge a point if you've truly listened. Listening keeps the discussion connected and collaborative rather than a series of unrelated speeches.", explanation: "Listening lets you respond, build on and connect — making discussion collaborative." },
            { type: "long", difficulty: "hard", q: "Describe how you would prepare for and participate well in a Harkness-style seminar on a text you've read.", answer: "Answers vary. A strong response covers preparation (reading and annotating the text, noting evidence and questions) and participation (listening actively, building on peers, supporting points with textual evidence, asking open questions, and including others) — showing understanding of student-led, evidence-based discussion.", explanation: "Preparation (read/annotate/note questions) + participation (listen, build on, use evidence, include others)." }
          ]
        }

      ]
    }

  ]
});
