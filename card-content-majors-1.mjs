// Major Arcana I–IX. Same fields as card-content.mjs; merged into CONTENT there.
export const MAJORS_1 = {
  'the-magician': {
    reviewed: false,
    keywords: {
      upright: ['skill', 'focus', 'resourcefulness', 'making it happen', 'willpower'],
      reversed: ['scattered energy', 'untapped talent', 'manipulation', 'self-doubt', 'all talk'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The Magician is a confident yes, especially when the outcome depends on your own effort. You already have what you need to start. Reversed, it is a maybe: the potential is there, but focus, honesty or follow-through needs work first.',
    },
    overview: `The Magician is card one of the Major Arcana, the first step after The Fool’s leap. Where The Fool is pure possibility, The Magician is possibility put to work. This card is about turning an idea into something real using the skills, tools and energy you already have.

It is one of the most encouraging cards in the deck for anyone starting a project, learning a skill or trying to make something happen. The Magician’s message is that you are more capable than you think, and that focus is the real magic: attention pointed in one direction gets results.`,
    imagery: `In the Rider–Waite–Smith deck, The Magician stands at a table with one arm raised holding a wand toward the sky and the other pointing to the ground. On the table lie a cup, a sword, a pentacle and a wand: the symbols of all four suits. A sideways figure eight, the infinity sign, floats above his head, and red roses and white lilies grow around him.

The pose is often summarized as “as above, so below”: drawing inspiration down from above and grounding it in the physical world. The four tools on the table mean he has every resource the deck offers: feeling, thought, action and material means. The infinity symbol suggests limitless potential, and the flowers pair passion (red roses) with pure intention (white lilies).`,
    upright: {
      general: `Upright, The Magician says you have the skills and resources to make something happen, and now is the time to use them. It favors decisive action, clear communication and confidence in your abilities. The card often appears when someone is waiting for permission they do not actually need. Pick one goal, gather your tools and start. Focus turns potential into results.`,
      love: `In love, The Magician points to attraction, chemistry and taking initiative. If you are single, it encourages you to put yourself out there with confidence. In a relationship, it can mean actively creating the connection you want rather than waiting for it, whether that is planning something special or finally saying what you mean.`,
      career: `For work, this is one of the strongest cards you can pull: new projects, promotions, pitching ideas, launching a business. It suggests your skills are a good match for the opportunity in front of you. Present yourself clearly and act on the plan.`,
      money: `Financially, The Magician favors resourcefulness: a side hustle, using a skill to earn, negotiating well, or making better use of what you already have. It rewards active management over hoping things work out.`,
    },
    reversed: {
      general: `Reversed, The Magician points to energy that is scattered or misdirected. You may have the talent but are not using it, are spread across too many ideas, or doubt yourself enough to never start. The reversal can also warn of manipulation, either someone using charm to mislead you, or you being tempted to cut corners. The fix is to narrow your focus and choose honesty over cleverness.`,
      love: `In love, the reversed Magician can describe someone who says the right things but does not follow through, or charm that hides other motives. It can also show you holding back from expressing yourself. Watch actions more than words.`,
      career: `At work, it may point to a stalled project, wasted skills or overpromising. Pick the one task that matters most and finish it before taking on more.`,
      money: `With money, be wary of schemes that sound too good, and of your own tendency to start many plans without completing any.`,
    },
    inReading: `As a past card, The Magician often marks the moment a plan was set in motion. As an outcome, it suggests success comes through your own effort and skill. Next to The Fool, a beginning becomes a real start; next to the Eight of Pentacles, the message is to practice until the skill is solid. Surrounded by Swords, its power is in communication: what you say and how you say it will shape the result.`,
    pairs: [
      { with: 'The Fool', text: 'An idea and the ability to act on it. Stop planning and start.' },
      { with: 'Ace of Pentacles', text: 'A practical opportunity you have the skills to turn into income or results.' },
      { with: 'Seven of Swords', text: 'Cleverness tipping into trickery. Check whether someone, maybe you, is cutting corners.' },
    ],
  },

  'the-high-priestess': {
    reviewed: false,
    keywords: {
      upright: ['intuition', 'inner knowing', 'mystery', 'patience', 'listening'],
      reversed: ['ignored intuition', 'secrets', 'overthinking', 'disconnection', 'hidden agendas'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The High Priestess is a classic maybe: not everything is known yet, and the answer may be one you already sense but have not admitted. Reversed, it leans no, often because something is being hidden or ignored.',
    },
    overview: `The High Priestess is card two of the Major Arcana and the keeper of quiet knowledge. Where The Magician acts, The High Priestess waits, watches and listens. She represents intuition, the inner voice and the kind of understanding that does not come from more information but from stillness.

When she appears, the reading usually asks you to slow down and pay attention to what you already know. The answer may not be ready to be spoken out loud. Her lesson is that not every question needs action right now; some need patience until the picture becomes clear.`,
    imagery: `On the Rider–Waite–Smith card, The High Priestess sits between two pillars, one black marked B and one white marked J, often read as Boaz and Jachin from Solomon’s temple. Behind her hangs a veil decorated with pomegranates. She wears a crown shaped like the phases of the moon, holds a partly hidden scroll marked TORA, and a crescent moon rests at her feet.

The two pillars represent opposites: light and dark, known and unknown. She sits between them, at home in the space where both exist. The veil hides what is not yet revealed, and the half-hidden scroll suggests knowledge that is only partly available. The moon imagery ties her to cycles, intuition and things that shift in the dark.`,
    upright: {
      general: `Upright, The High Priestess asks you to trust your intuition and give the situation time. You may sense something before you can explain it. Rather than pushing for answers, she suggests quiet observation: journal, sleep on it, notice what keeps coming back to mind. Information may still be unfolding. It is a good card for reflection, study and private decisions.`,
      love: `In love, The High Priestess can point to unspoken feelings, mutual attraction that has not been named, or a connection with a deep, private quality. It is a reminder to notice what your instincts are telling you about someone. Not everything needs to be decided today.`,
      career: `At work, she favors research, careful listening and keeping your plans to yourself until they are ready. She can describe a mentor with quiet expertise, or a situation where reading between the lines matters more than what is officially said.`,
      money: `Financially, gather information before deciding. Something may not be fully visible yet: fine print, a hidden cost, or a better option you have not researched. Patience is the strategy.`,
    },
    reversed: {
      general: `Reversed, The High Priestess often means your intuition is being drowned out by noise, overthinking or other people’s opinions. You may be ignoring a gut feeling because it is inconvenient. It can also point to secrets: something being kept from you, or something you are keeping from yourself. Make space to listen inwardly again before deciding.`,
      love: `In love, the reversal can point to secrets, mixed signals, or ignoring red flags you can sense. It may also show a disconnect between what you feel and what you allow yourself to say.`,
      career: `At work, it may flag office politics, hidden agendas or information being withheld. Ask clarifying questions and trust the uneasy feeling enough to check the facts.`,
      money: `With money, watch for decisions made on rumor or impulse. If something feels off, look at the details again.`,
    },
    inReading: `In a past position, The High Priestess may show a time of waiting or quiet preparation. As an outcome, it suggests the answer is not public yet, and patience will reveal it. Paired with The Moon, intuition is strong but so is confusion, so separate feelings from facts. Next to The Magician, it balances knowing with doing: listen first, then act.`,
    pairs: [
      { with: 'The Moon', text: 'Strong intuition, but also uncertainty. Wait for more clarity before acting.' },
      { with: 'Two of Swords', text: 'A decision you are avoiding. Your gut may already know the answer.' },
      { with: 'The Magician', text: 'Inner knowing plus outward skill: listen first, then act decisively.' },
    ],
  },

  'the-empress': {
    reviewed: false,
    keywords: {
      upright: ['abundance', 'nurturing', 'creativity', 'growth', 'comfort'],
      reversed: ['creative block', 'over-giving', 'neglecting yourself', 'smothering', 'stagnation'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The Empress is a warm yes, especially for anything you are growing over time: a relationship, a creative project, a home. Reversed, it is a maybe that asks whether you are giving enough care to yourself and to the thing you want to grow.',
    },
    overview: `The Empress is card three of the Major Arcana and the card of growth, abundance and care. She is often linked with motherhood, but her meaning is broader: nurturing anything until it flourishes, whether that is a person, a garden, a business or a creative idea.

She represents the pleasure of being in your body and in the world: good food, beauty, rest and comfort. In a reading, The Empress usually signals that something is ripening. The work now is to tend it patiently and to let yourself enjoy the process.`,
    imagery: `In the Rider–Waite–Smith deck, The Empress sits on cushions in a lush landscape, with a field of ripe wheat at her feet and a stream and forest behind her. She wears a crown of twelve stars and a robe printed with pomegranates. A heart-shaped shield beside her bears the symbol of Venus.

The wheat stands for harvest and abundance, and the flowing water for emotion and life. The twelve stars are often read as the months of the year or the signs of the zodiac, tying her to natural cycles. The Venus symbol connects her to love, beauty and fertility in every sense of the word.`,
    upright: {
      general: `Upright, The Empress brings growth, comfort and creativity. Plans are ripening, and care given now will pay off. It is a good time to make things, nurture relationships and let yourself enjoy life’s pleasures. She also reminds you to nurture yourself: rest, nourishment and beauty are not indulgences but fuel.`,
      love: `In love, The Empress is affectionate and abundant: a relationship deepening, romance, sensuality and feeling cared for. For some readers it can point to family growth. For singles, it suggests attracting love by feeling good in your own life first.`,
      career: `At work, she favors creative projects, steady growth and roles that involve care, design or making things. Results come from patient cultivation more than rushing.`,
      money: `Financially, The Empress suggests comfort and growth: income increasing over time or investments maturing. Enjoy what you have while still planting for the future.`,
    },
    reversed: {
      general: `Reversed, The Empress often points to blocked growth or care that has gone out of balance. You might be giving so much to others that you are running on empty, or feeling creatively stuck. It can also describe smothering: caring so hard that it stops others from growing. The remedy is to turn some of that nurturing back toward yourself.`,
      love: `In love, the reversal can show over-giving, neediness or neglecting your own needs to keep someone else happy. It may also point to feeling unappreciated. Balance care with self-respect.`,
      career: `At work, it may describe a creative block or burnout from taking care of everyone else’s work. Rest is part of being productive.`,
      money: `With money, watch for overspending on comfort, or for financially supporting others at your own expense.`,
    },
    inReading: `In a past position, The Empress often marks a period of growth or a nurturing influence. As an outcome, it suggests flourishing results if you keep tending what you have started. Next to the Ace of Cups, love or creativity overflows. Next to the Four of Swords, the message is rest: you cannot pour from an empty cup.`,
    pairs: [
      { with: 'The Emperor', text: 'Care and structure together. A balanced partnership or a stable home.' },
      { with: 'Ace of Pentacles', text: 'A practical opportunity that can grow into real abundance with care.' },
      { with: 'Ten of Wands', text: 'Over-giving. Taking care of everyone except yourself.' },
    ],
  },

  'the-emperor': {
    reviewed: false,
    keywords: {
      upright: ['structure', 'stability', 'authority', 'leadership', 'boundaries'],
      reversed: ['rigidity', 'control', 'lack of discipline', 'power struggles', 'instability'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The Emperor is a firm yes when a plan, a rule or steady effort is involved. Reversed, it becomes a maybe: the structure is either too rigid or too weak to support what you want right now.',
    },
    overview: `The Emperor is card four of the Major Arcana and the card of order. Where The Empress grows things, The Emperor builds the structure that keeps them safe: rules, routines, boundaries and plans. He represents leadership, responsibility and the kind of stability that comes from discipline.

In a reading, The Emperor often appears when a situation needs a clear framework. Sometimes he describes an authority figure in your life. Often he asks you to become that steady, responsible presence yourself.`,
    imagery: `The Rider–Waite–Smith Emperor sits on a stone throne carved with ram heads, wearing armor under a red robe. He holds an ankh-topped scepter in one hand and an orb in the other. Behind him rise bare, rocky mountains.

The rams link him to Aries and to drive and initiative. The armor shows readiness to defend what he has built. The stone throne and barren mountains suggest something permanent and unyielding: strong, but not soft. The scepter and orb are classic symbols of rule over a domain.`,
    upright: {
      general: `Upright, The Emperor asks for structure and steady leadership. Make a plan, set boundaries, create routines and take responsibility for your part. This card favors practical, long-term thinking over emotion-driven decisions. It can also describe a supportive authority figure: a boss, parent or mentor who provides stability.`,
      love: `In love, The Emperor points to commitment, reliability and clear expectations. It favors relationships with a solid foundation. It can also describe a protective partner. Healthy boundaries make love feel safer, not colder.`,
      career: `At work, this is a strong card for leadership roles, management, organizing systems and long-term planning. It favors professionalism and taking charge of your responsibilities.`,
      money: `Financially, The Emperor recommends budgets, long-term plans and disciplined saving. Stability is built, not found.`,
    },
    reversed: {
      general: `Reversed, The Emperor shows structure out of balance. It may be too rigid: control, stubbornness or an authority figure who dominates. Or it may be too weak: lack of discipline, chaos or no clear plan. Ask which one fits. The aim is firm but flexible structure that supports people rather than restricting them.`,
      love: `In love, the reversal can point to controlling behavior, power struggles or one partner making all the decisions. It may also show a lack of commitment or reliability. Talk about expectations directly.`,
      career: `At work, it may describe a difficult boss, rigid bureaucracy or your own struggle with self-discipline. Look for the part you can organize yourself.`,
      money: `With money, it can show either overly tight control or no plan at all. A simple, realistic budget is the middle path.`,
    },
    inReading: `As a person, The Emperor can describe anyone, of any gender, who takes charge and provides structure. In a past position, he may point to an upbringing or job with strong rules. As advice, he says: get organized and take ownership. Next to The Empress, care and structure balance each other. Next to the Five of Wands, competing authorities need clear roles.`,
    pairs: [
      { with: 'The Empress', text: 'Nurture and structure together. A stable home or balanced partnership.' },
      { with: 'Four of Pentacles', text: 'Security tipping into control. Holding on too tightly.' },
      { with: 'The Chariot', text: 'Discipline plus drive: a clear plan you can push forward with confidence.' },
    ],
  },

  'the-hierophant': {
    reviewed: false,
    keywords: {
      upright: ['tradition', 'learning', 'guidance', 'shared values', 'commitment'],
      reversed: ['rebellion', 'questioning rules', 'nonconformity', 'restriction', 'new paths'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The Hierophant leans yes, especially if you follow an established path, get good advice or make a formal commitment. Reversed, it is a maybe: the conventional route may not fit you, and you may need your own way.',
    },
    overview: `The Hierophant is card five of the Major Arcana and represents tradition, teaching and shared beliefs. Where The Emperor builds worldly structure, The Hierophant passes down knowledge and values: the wisdom of schools, religions, mentors and communities.

In a reading, the card often points to learning from people who have walked the path before, following an established method, or making a formal commitment such as marriage, a degree or joining a group. It can also ask you to examine which inherited beliefs truly belong to you.`,
    imagery: `On the Rider–Waite–Smith card, The Hierophant sits between two pillars, wearing a triple crown and raising one hand in blessing. He holds a triple cross. Two followers kneel before him, and two crossed keys lie at his feet.

He is a teacher and spiritual authority, a bridge between the sacred and everyday life. The crossed keys are often read as access to hidden knowledge, the keys to heaven and earth. The two kneeling figures show knowledge being handed down from teacher to student.`,
    upright: {
      general: `Upright, The Hierophant favors learning, structure and tradition. It is a good time to take a class, find a mentor, follow proven methods or lean on your community. The card can also mark a formal commitment or ritual. Its message: you do not have to reinvent everything. There is wisdom available if you ask for it.`,
      love: `In love, The Hierophant points to commitment and shared values: marriage, engagement, meeting the family or building a relationship around common beliefs. It favors traditional expressions of love and serious intentions.`,
      career: `At work, it favors established organizations, training, certifications and working within a system. A mentor or senior colleague may be especially helpful.`,
      money: `Financially, stick with proven, conventional approaches: steady saving, reputable institutions and expert advice over experimental schemes.`,
    },
    reversed: {
      general: `Reversed, The Hierophant challenges convention. You may be questioning rules that do not fit your life, outgrowing a belief system or feeling restricted by expectations. This can be healthy: the reversal invites you to find your own path. It can also warn against rebellion for its own sake. Keep what is true for you, and let go of what is not.`,
      love: `In love, the reversal can point to an unconventional relationship, differing values, or pressure from family or tradition. Talk honestly about what you each actually believe.`,
      career: `At work, it may show frustration with bureaucracy, or a desire to leave a traditional path for something more independent.`,
      money: `With money, it might favor a new approach, but research it carefully before abandoning proven methods.`,
    },
    inReading: `In a past position, The Hierophant may describe the beliefs or institutions that shaped you. As an outcome, it can point to a commitment or joining something larger. Next to The Lovers, it often signals marriage or a formal partnership. Next to The Fool or the Knight of Wands, it suggests breaking away from tradition to try something new.`,
    pairs: [
      { with: 'The Lovers', text: 'Commitment. A relationship formalized, or values that truly align.' },
      { with: 'Eight of Pentacles', text: 'Formal study or apprenticeship. Learning a craft the proper way.' },
      { with: 'The Fool', text: 'Leaving a traditional path to try something entirely your own.' },
    ],
  },

  'the-lovers': {
    reviewed: false,
    keywords: {
      upright: ['love', 'connection', 'alignment', 'choices', 'values'],
      reversed: ['disharmony', 'misaligned values', 'indecision', 'imbalance', 'temptation'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The Lovers is a yes, especially when the choice is honest and in line with your values. Reversed, it is a maybe: something is out of alignment, and you may need to choose more clearly before moving forward.',
    },
    overview: `The Lovers is card six of the Major Arcana. It is famously the love card, and it does speak to romance, attraction and partnership. But its deeper meaning is about choice: choosing with your whole heart, and making decisions that line up with your values.

A reading with The Lovers often asks what truly matters to you. A relationship, a job or a path may be in front of you, and the card asks whether choosing it would make you more fully yourself.`,
    imagery: `In the Rider–Waite–Smith deck, a man and a woman stand naked beneath a large angel, often identified as Raphael, who spreads his arms over them in blessing. Behind the woman is a tree with fruit and a serpent, and behind the man a tree with flames. A mountain rises between them, and the sun shines above.

The scene echoes the Garden of Eden, with innocence, temptation and choice all present. Their nakedness suggests honesty and vulnerability. The man looks to the woman and the woman looks up to the angel, a sequence often read as moving from the physical to the emotional to the spiritual.`,
    upright: {
      general: `Upright, The Lovers speaks of meaningful connection and important choices. It can mark a relationship, a partnership or a decision that reflects who you really are. The card favors honesty, mutual respect and acting from your values. If you are choosing between options, ask which one you could commit to fully.`,
      love: `In love, The Lovers is one of the strongest cards: deep attraction, a soulmate-type bond, or a relationship reaching a new level of commitment. It also emphasizes communication and choosing each other on purpose.`,
      career: `At work, it can point to a partnership or collaboration that clicks, or a career choice that aligns with your values. Decisions made for the right reasons will hold up.`,
      money: `Financially, it can describe a joint venture or shared finances. Make sure everyone’s priorities are aligned before committing.`,
    },
    reversed: {
      general: `Reversed, The Lovers points to imbalance or misalignment. That may be in a relationship, with values clashing or communication breaking down. Or it may be within you: a choice you keep avoiding, or acting in ways that do not match what you believe. The card asks you to be honest about what you want and to stop splitting yourself between options.`,
      love: `In love, the reversal can show conflict, distance, mismatched expectations or temptation. It may also point to self-love that needs attention first. Have the honest conversation.`,
      career: `At work, it may show a partnership out of balance or a choice that conflicts with your values. Name what matters to you before deciding.`,
      money: `With money, watch for disagreements over shared finances, or decisions driven by temptation rather than priorities.`,
    },
    inReading: `In a past position, The Lovers may mark the beginning of an important relationship or a defining choice. As an outcome, it suggests union or a decision that brings things into alignment. Next to the Two of Cups, the romantic meaning is very strong. Next to the Seven of Cups, there may be too many options, and focusing on your values will narrow them down.`,
    pairs: [
      { with: 'Two of Cups', text: 'Mutual love and a strong, balanced partnership.' },
      { with: 'The Hierophant', text: 'Commitment: engagement, marriage or a formal partnership.' },
      { with: 'Seven of Cups', text: 'Too many options. Choose based on values, not fantasy.' },
    ],
  },

  'the-chariot': {
    reviewed: false,
    keywords: {
      upright: ['determination', 'willpower', 'victory', 'direction', 'momentum'],
      reversed: ['lack of direction', 'scattered effort', 'obstacles', 'aggression', 'loss of control'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The Chariot is a strong yes when you are willing to push for it: success through focus and effort. Reversed, it is a maybe, because conflicting goals or loss of control are slowing you down.',
    },
    overview: `The Chariot is card seven of the Major Arcana and the card of forward motion. It represents victory through determination: holding competing forces together and steering them in one direction.

When The Chariot appears, you are often in a position to move ahead, but only if you take the reins. It favors focus, confidence and self-control. The challenge is not a lack of power but a lack of direction, and once you choose where you are going, the card says you can get there.`,
    imagery: `In the Rider–Waite–Smith card, a warrior stands in a chariot beneath a canopy of stars. He wears armor decorated with crescent moons and holds a wand, but no visible reins. Two sphinxes, one black and one white, sit in front of the chariot. A walled city stands behind him.

The black and white sphinxes represent opposing forces, such as heart and head or desire and duty. The charioteer controls them without reins, through willpower alone. The city behind him shows what he has left behind as he moves out into the world.`,
    upright: {
      general: `Upright, The Chariot says push forward. You can overcome obstacles and reach your goal through focus, discipline and confidence. It often appears when competing priorities need to be pulled into one clear direction. Decide what you want, commit, and keep moving even when it is hard. Travel and literal journeys are also traditional meanings.`,
      love: `In love, The Chariot can mean pursuing what you want with confidence, or working through challenges together. It favors taking action rather than waiting. Make sure you are both steering toward the same place.`,
      career: `At work, this is a winning card: ambition, competition, promotion and achieving goals through hard work. It rewards focus and persistence.`,
      money: `Financially, The Chariot supports disciplined effort toward a goal: paying down debt, saving for something specific. Stay on course.`,
    },
    reversed: {
      general: `Reversed, The Chariot can show momentum stalled. You may be pulled in different directions, lacking motivation, or trying to control things that cannot be controlled. Sometimes it shows too much force: pushing so hard that it backfires. Step back, decide what actually matters, and steer from there.`,
      love: `In love, the reversal can point to power struggles, moving too fast or wanting different things. Slow down and check that you are going the same way.`,
      career: `At work, it may show frustration, setbacks or burnout from forcing things. Re-plan rather than pushing harder.`,
      money: `With money, it can show impulsive decisions or losing track of a goal. Return to your plan.`,
    },
    inReading: `In a past position, The Chariot often marks a hard-won success. As an outcome, it suggests victory if you stay focused. Next to the Six of Wands, success is public and celebrated. Next to the Two of Swords, indecision is the real obstacle: pick a direction and the momentum will follow.`,
    pairs: [
      { with: 'Six of Wands', text: 'Victory and recognition for your effort.' },
      { with: 'Strength', text: 'Willpower balanced by patience. Success without force.' },
      { with: 'Two of Swords', text: 'Momentum blocked by indecision. Choose a direction.' },
    ],
  },

  'strength': {
    reviewed: false,
    keywords: {
      upright: ['inner strength', 'courage', 'patience', 'compassion', 'self-control'],
      reversed: ['self-doubt', 'insecurity', 'low energy', 'losing patience', 'feeling overwhelmed'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, Strength is a patient yes: you can handle this, especially with calm persistence rather than force. Reversed, it is a maybe while self-doubt or exhaustion gets in the way.',
    },
    overview: `Strength is card eight in the Rider–Waite–Smith deck (some older decks number it eleven). It is about a quieter kind of power: courage, patience and compassion rather than force. The card suggests that the most difficult things, whether fear, anger or a wild situation, are best handled with gentleness and steady confidence.

When Strength appears, it usually reminds you that you are more resilient than you feel. It favors calm persistence, emotional maturity and leading with kindness.`,
    imagery: `On the Rider–Waite–Smith card, a woman in a white robe gently holds open, or closes, the jaws of a lion. She wears a crown of flowers and a belt of roses, and the infinity symbol floats above her head, as it does over The Magician.

The lion represents raw instinct, passion and fear. The woman does not fight it; she calms it. Her white robe suggests purity of intention, and the flowers suggest softness. The infinity sign links her calm strength to something lasting rather than momentary.`,
    upright: {
      general: `Upright, Strength says you have what it takes to get through this, not by force but by patience and inner courage. It encourages handling difficult emotions, people or situations with compassion. You may need to tame your own impulses, or calm someone else’s. Gentle persistence wins here.`,
      love: `In love, Strength points to patience, emotional maturity and a relationship that can handle challenges. It favors understanding over winning arguments. For singles, it suggests confidence that comes from within.`,
      career: `At work, it favors steady effort, handling difficult colleagues with grace, and leading by example. Your calm presence is an asset.`,
      money: `Financially, Strength supports self-control: resisting impulse spending and sticking with a plan through a tough stretch.`,
    },
    reversed: {
      general: `Reversed, Strength often points to self-doubt or depleted energy. You may feel overwhelmed, insecure or quick to lose patience. It can also show emotions running the show. The card does not say you are weak, only that your strength needs rebuilding. Rest, encouragement and small wins help.`,
      love: `In love, the reversal can show insecurity, jealousy or reactive arguments. Look after your own confidence first.`,
      career: `At work, it may point to burnout or lack of confidence. Ask for support and take on manageable challenges to rebuild.`,
      money: `With money, it can show impulse decisions made from stress. Pause before buying or committing.`,
    },
    inReading: `In a past position, Strength may describe a time you got through something hard. As an outcome, it suggests success through patience. Next to The Chariot, willpower and gentleness balance each other. Next to the Nine of Wands, it speaks to resilience in a long struggle: you are closer to the end than it feels.`,
    pairs: [
      { with: 'The Chariot', text: 'Inner calm and outer drive together. A powerful combination for any goal.' },
      { with: 'Nine of Wands', text: 'Resilience. Hold on a little longer.' },
      { with: 'Five of Swords', text: 'Choosing grace over winning. Not every fight needs to be fought.' },
    ],
  },

  'the-hermit': {
    reviewed: false,
    keywords: {
      upright: ['solitude', 'reflection', 'inner guidance', 'soul-searching', 'wisdom'],
      reversed: ['isolation', 'loneliness', 'withdrawal', 'avoiding reflection', 'rejoining the world'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Hermit is a maybe: take time to think before answering. The answer is likely to come from within, not from rushing. Reversed, it leans no, especially if isolation or avoidance is part of the situation.',
    },
    overview: `The Hermit is card nine of the Major Arcana and the card of stepping back. After the outward action of The Chariot and the inner work of Strength, The Hermit withdraws from the noise to look for answers within.

This is not loneliness but chosen solitude: time to think, reflect and listen to your own inner guidance. In a reading, The Hermit often suggests that you will find clarity by taking a break from other people’s opinions and seeking your own truth.`,
    imagery: `In the Rider–Waite–Smith deck, The Hermit is an old man in a gray cloak standing alone on a snowy mountain peak. He holds a lantern containing a six-pointed star, and leans on a staff.

The mountain peak shows he has climbed to a place of perspective, far from the crowd. The lantern lights only the next few steps, a reminder that wisdom often shows the way one step at a time. The six-pointed star inside is sometimes read as the joining of opposites, or simply as inner wisdom made visible.`,
    upright: {
      general: `Upright, The Hermit invites solitude and reflection. Step back from the noise, think things through and listen to your inner voice. It is a good time for journaling, meditation, study or a solo walk. The card suggests the answers you need are within you, not in more advice. It can also describe a wise mentor.`,
      love: `In love, The Hermit can mean taking time to understand yourself before or within a relationship. It may describe a period of being single by choice, or needing space. That space can strengthen love when it is communicated clearly.`,
      career: `At work, it favors focused independent work, research and deep thinking. It may also point to reassessing whether your work still means something to you.`,
      money: `Financially, The Hermit favors simplicity and careful thought. Review your priorities rather than making big moves.`,
    },
    reversed: {
      general: `Reversed, The Hermit can point to isolation that has gone too far: loneliness, withdrawal or cutting yourself off. It can also show the opposite: avoiding reflection by staying constantly busy and surrounded by noise. Ask which applies. Sometimes the reversal is a sign it is time to come back down the mountain and reconnect.`,
      love: `In love, the reversal may show loneliness or emotional distance. It can also signal readiness to re-engage after a period alone.`,
      career: `At work, it may describe feeling isolated or disconnected from colleagues. Reach out, share your ideas and collaborate.`,
      money: `With money, it can show avoiding a needed review of your finances. Take a quiet hour to look.`,
    },
    inReading: `In a past position, The Hermit may mark a period of withdrawal that shaped you. As an outcome, it suggests the next step is inward rather than outward. Next to the Four of Swords, rest and reflection are strongly emphasized. Next to the Three of Cups, it may be time to leave solitude and reconnect with friends.`,
    pairs: [
      { with: 'Four of Swords', text: 'Deep rest and recovery. Step away to recharge.' },
      { with: 'The High Priestess', text: 'Strong intuition. The answer is within, if you get quiet enough to hear it.' },
      { with: 'Three of Cups', text: 'Time to come back to your people after a period alone.' },
    ],
  },
};
