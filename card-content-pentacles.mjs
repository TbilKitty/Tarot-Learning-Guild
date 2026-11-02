// Suit of Pentacles.
export const PENTACLES = {
  'ace-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['opportunity', 'prosperity', 'new venture', 'stability', 'manifestation'],
      reversed: ['missed opportunity', 'poor planning', 'financial setback', 'instability', 'delays'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Ace of Pentacles is a solid yes, especially for money, work and practical matters. Reversed, it is a maybe until the plan is more grounded.',
    },
    overview: `The Ace of Pentacles is the first card of the suit of Pentacles, which deals with money, work, the body, home and the material world. It is a seed of prosperity: a real, practical opportunity.

In a reading, it often shows a new job, financial opportunity or project with solid potential. It asks you to plant the seed and tend it patiently.`,
    imagery: `On the Rider–Waite–Smith card, a hand emerges from a cloud holding a large golden coin marked with a five-pointed star. Below is a lush garden with lilies and an archway of hedges opening onto mountains beyond.

The golden coin represents material opportunity. The garden shows abundance and growth. The archway suggests a path leading from this opportunity toward bigger goals.`,
    upright: {
      general: `Upright, the Ace of Pentacles brings a practical opportunity: a new job, income or project with real potential. Take it, plan it and build on it steadily.`,
      love: `In love, it can show a stable, grounded relationship beginning, or building a home together.`,
      career: `At work, it points to a new job, promotion or business opportunity.`,
      money: `Financially, it is one of the best cards: new income, savings or a sound investment.`,
    },
    reversed: {
      general: `Reversed, the Ace of Pentacles can show a missed opportunity, poor planning or a financial setback. The card asks you to get practical and build a stronger foundation.`,
      love: `In love, the reversal may show instability or money stress affecting a relationship.`,
      career: `At work, it may show a job offer falling through. Others will come.`,
      money: `With money, avoid risky moves and plan carefully.`,
    },
    inReading: `As an outcome, the Ace of Pentacles suggests a tangible opportunity. Next to the Three of Wands, growth follows. Next to the Ten of Pentacles, long-term wealth.`,
    pairs: [
      { with: 'Wheel of Fortune', text: 'A lucky financial opportunity.' },
      { with: 'Eight of Pentacles', text: 'Hard work building a solid future.' },
      { with: 'Ten of Pentacles', text: 'Long-term prosperity.' },
    ],
  },

  'two-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['balance', 'juggling', 'adaptability', 'priorities', 'time management'],
      reversed: ['overwhelm', 'disorganization', 'overcommitment', 'financial stress', 'dropping the ball'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Two of Pentacles is a maybe: possible if you can balance it with everything else. Reversed, it leans no while you are already stretched too thin.',
    },
    overview: `The Two of Pentacles is the card of juggling. You are balancing several priorities at once and staying flexible as things shift.

In a reading, it can show a busy, changing time. It asks you to prioritize and adapt, without taking on too much.`,
    imagery: `On the Rider–Waite–Smith card, a young man dances while juggling two coins linked by an infinity-shaped loop. Behind him, ships ride high waves on the sea.

The juggling shows balancing competing demands. The infinity loop suggests that this balancing act is ongoing. The ships on rough water show life’s ups and downs.`,
    upright: {
      general: `Upright, the Two of Pentacles shows you are juggling a lot. Stay flexible, prioritize and keep a sense of humor.`,
      love: `In love, it can show balancing a relationship with other responsibilities.`,
      career: `At work, it suggests multitasking and adapting to change.`,
      money: `Financially, it shows managing a tight budget. Track it carefully.`,
    },
    reversed: {
      general: `Reversed, the Two of Pentacles can show overwhelm, disorganization or overcommitment. Drop something before something drops you.`,
      love: `In love, the reversal may show neglecting a relationship because of other demands.`,
      career: `At work, it may show too much on your plate.`,
      money: `With money, it may show financial stress. Simplify.`,
    },
    inReading: `As an outcome, the Two of Pentacles suggests ongoing balancing. Next to the Ten of Wands, you have too much on your plate. Next to Temperance, balance is achievable.`,
    pairs: [
      { with: 'Temperance', text: 'Balanced priorities.' },
      { with: 'Ten of Wands', text: 'Overloaded. Cut back.' },
      { with: 'Eight of Wands', text: 'Busy, fast-moving times.' },
    ],
  },

  'three-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['teamwork', 'collaboration', 'skill', 'learning', 'quality work'],
      reversed: ['poor teamwork', 'conflict', 'lack of skill', 'mediocrity', 'working alone'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Three of Pentacles is a yes, especially if you work with others. Reversed, it is a maybe while teamwork or skills need work.',
    },
    overview: `The Three of Pentacles is the card of teamwork and skill. Good work happens when people with different skills collaborate.

In a reading, it points to collaboration, learning and recognition for quality work. It asks you to value others' expertise and contribute your own.`,
    imagery: `On the Rider–Waite–Smith card, a stonemason stands on a bench working on a cathedral archway, while a monk and an architect holding plans look on. Three pentacles are carved into the arch.

The three figures each bring something different: skill, vision and planning. The cathedral setting suggests that good work lasts.`,
    upright: {
      general: `Upright, the Three of Pentacles favors teamwork, learning and quality. Work with others and take pride in your craft.`,
      love: `In love, it suggests building something together as a team.`,
      career: `At work, it points to collaboration, recognition and skill.`,
      money: `Financially, it suggests working with professionals.`,
    },
    reversed: {
      general: `Reversed, the Three of Pentacles can show poor teamwork, conflict or work that is not up to standard. Communicate and clarify roles.`,
      love: `In love, the reversal may show not working as a team.`,
      career: `At work, it may show team conflict or lack of recognition.`,
      money: `With money, check the quality of advice.`,
    },
    inReading: `As an outcome, the Three of Pentacles suggests success through collaboration. Next to the Eight of Pentacles, skill is developing.`,
    pairs: [
      { with: 'Eight of Pentacles', text: 'Building skill and craftsmanship.' },
      { with: 'Two of Cups', text: 'A strong partnership.' },
      { with: 'Ten of Pentacles', text: 'Building something lasting.' },
    ],
  },

  'four-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['security', 'saving', 'control', 'holding on', 'scarcity mindset'],
      reversed: ['letting go', 'generosity', 'overspending', 'financial insecurity', 'releasing control'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Four of Pentacles leans no: holding on tightly may be blocking what you want. Reversed, it is still a no for now while money or control is unsettled.',
    },
    overview: `The Four of Pentacles is the card of holding on. It can show healthy saving, but often it shows holding on so tightly that nothing new can come in.

In a reading, it asks whether your need for security is helping you, or holding you back.`,
    imagery: `On the Rider–Waite–Smith card, a man sits on a stool clutching one coin to his chest, with another balanced on his head and two under his feet. A city stands behind him.

His tight grip shows holding on. The coins under his feet and on his head show that money is controlling him. The city behind him suggests a world he is shutting out.`,
    upright: {
      general: `Upright, the Four of Pentacles shows a focus on security and control. Saving is wise, but ask whether fear is making you hold on too tightly.`,
      love: `In love, it can show possessiveness or holding back emotionally.`,
      career: `At work, it may show resisting change to protect your position.`,
      money: `Financially, it favors saving, but not at the expense of living.`,
    },
    reversed: {
      general: `Reversed, the Four of Pentacles can show letting go and becoming more generous. It can also show overspending or financial insecurity.`,
      love: `In love, the reversal may show opening up.`,
      career: `At work, it may show embracing change.`,
      money: `With money, check you are not overspending.`,
    },
    inReading: `As an outcome, the Four of Pentacles suggests stability, but possibly stagnation. Next to The Devil, attachment to money is strong.`,
    pairs: [
      { with: 'The Devil', text: 'Attachment to money or control.' },
      { with: 'Six of Pentacles', text: 'Learning to share.' },
      { with: 'The Emperor', text: 'Rigid control.' },
    ],
  },

  'five-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['hardship', 'financial loss', 'isolation', 'worry', 'feeling left out'],
      reversed: ['recovery', 'help arriving', 'improvement', 'reconnecting', 'end of hardship'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Five of Pentacles leans no for now, often because of hardship or lack of support. Reversed, it is still a no for the moment, though things are starting to improve.',
    },
    overview: `The Five of Pentacles is the card of hardship. It can show financial difficulty, health worries or feeling left out in the cold.

In a reading, it acknowledges real struggle. It also reminds you that help is often closer than it seems, and asks you to reach out for it.`,
    imagery: `On the Rider–Waite–Smith card, two figures in ragged clothes walk through snow past a lit stained-glass window. One is on crutches. Neither looks up at the window.

The snow and ragged clothing show hardship. The lit window represents help and shelter nearby. The fact that they do not see it suggests that help is available but not noticed.`,
    upright: {
      general: `Upright, the Five of Pentacles reflects hardship or feeling left out. It is okay to ask for help. Look for support around you.`,
      love: `In love, it can show feeling unsupported or going through hard times together.`,
      career: `At work, it suggests job loss or insecurity. Reach out to your network.`,
      money: `Financially, it shows hardship. Look for resources and assistance.`,
    },
    reversed: {
      general: `Reversed, the Five of Pentacles shows recovery and help arriving. Hard times are easing.`,
      love: `In love, the reversal may show reconnecting after hard times.`,
      career: `At work, it may show new opportunities after a setback.`,
      money: `With money, it suggests improvement.`,
    },
    inReading: `As an outcome, the Five of Pentacles suggests a difficult time, but not a permanent one. Next to the Six of Pentacles, help arrives.`,
    pairs: [
      { with: 'Six of Pentacles', text: 'Help arriving in hard times.' },
      { with: 'The Star', text: 'Hope after hardship.' },
      { with: 'Ten of Swords', text: 'Rock bottom. It gets better from here.' },
    ],
  },

  'six-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['generosity', 'giving and receiving', 'charity', 'sharing', 'fairness'],
      reversed: ['strings attached', 'debt', 'one-sided generosity', 'power imbalance', 'self-care'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Six of Pentacles is a maybe: it depends on a fair exchange. Reversed, it leans no if there are strings attached.',
    },
    overview: `The Six of Pentacles is the card of giving and receiving. It shows generosity, charity and sharing resources fairly.

In a reading, you may be giving help or receiving it. It asks you to keep the exchange fair and to notice any imbalance of power.`,
    imagery: `On the Rider–Waite–Smith card, a wealthy man holds scales in one hand while giving coins to one of two kneeling beggars.

The scales show fairness. The kneeling figures show the power difference between giver and receiver. The card asks whether giving is balanced and respectful.`,
    upright: {
      general: `Upright, the Six of Pentacles shows generosity and fair exchange. Give what you can, and accept help when you need it.`,
      love: `In love, it suggests a balanced, giving relationship.`,
      career: `At work, it can show fair pay, mentorship or support.`,
      money: `Financially, it may show receiving a gift or loan, or giving to others.`,
    },
    reversed: {
      general: `Reversed, the Six of Pentacles can show one-sided generosity, debt or help with strings attached.`,
      love: `In love, the reversal may show an imbalanced relationship.`,
      career: `At work, it may show unfair pay.`,
      money: `With money, it warns about debt.`,
    },
    inReading: `As an outcome, the Six of Pentacles suggests a fair exchange. Next to the Five of Pentacles, help comes.`,
    pairs: [
      { with: 'Five of Pentacles', text: 'Help in hard times.' },
      { with: 'Justice', text: 'Fair exchange.' },
      { with: 'Four of Pentacles', text: 'Learning to share.' },
    ],
  },

  'seven-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['patience', 'long-term view', 'investment', 'assessment', 'perseverance'],
      reversed: ['impatience', 'poor returns', 'frustration', 'wasted effort', 'rethinking'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Seven of Pentacles is a maybe: it is growing, but not ready yet. Be patient. Reversed, it leans no if effort is not paying off.',
    },
    overview: `The Seven of Pentacles is the card of patience. You have planted and worked, and now you are waiting for the harvest.

In a reading, it asks you to assess progress and be patient with long-term investments.`,
    imagery: `On the Rider–Waite–Smith card, a farmer leans on a hoe, looking at seven pentacles growing on a bush.

His pause shows assessment. The growing pentacles show that the effort is paying off, slowly.`,
    upright: {
      general: `Upright, the Seven of Pentacles asks for patience. Your efforts are growing, but the harvest is not here yet. Review your progress.`,
      love: `In love, it suggests a relationship growing slowly.`,
      career: `At work, it points to long-term investment and patience.`,
      money: `Financially, it favors long-term saving and investing.`,
    },
    reversed: {
      general: `Reversed, the Seven of Pentacles can show impatience or effort that is not paying off. Rethink the approach.`,
      love: `In love, the reversal may show frustration over slow progress.`,
      career: `At work, it may show poor returns on effort.`,
      money: `With money, review investments.`,
    },
    inReading: `As an outcome, the Seven of Pentacles suggests results take time. Next to the Eight of Pentacles, keep working.`,
    pairs: [
      { with: 'Eight of Pentacles', text: 'Keep working. It will pay off.' },
      { with: 'The Hanged Man', text: 'Waiting and reassessing.' },
      { with: 'Ten of Pentacles', text: 'Long-term reward.' },
    ],
  },

  'eight-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['hard work', 'skill', 'craftsmanship', 'dedication', 'mastery'],
      reversed: ['perfectionism', 'boredom', 'lack of focus', 'shortcuts', 'burnout'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Eight of Pentacles is a yes, earned through hard work. Reversed, it is a maybe if focus or effort is slipping.',
    },
    overview: `The Eight of Pentacles is the card of dedication and craft. Through steady work you are building real skill.

In a reading, it asks you to commit to your craft and take pride in doing things well.`,
    imagery: `On the Rider–Waite–Smith card, a craftsman sits at a workbench carving a pentacle. Several finished pentacles hang on a post beside him, and a town is in the distance.

The focused craftsman shows dedication. The finished coins show progress. The distant town suggests he has stepped away to concentrate.`,
    upright: {
      general: `Upright, the Eight of Pentacles shows dedication, skill and hard work. Keep practicing; mastery is coming.`,
      love: `In love, it suggests putting effort into a relationship.`,
      career: `At work, it points to skill-building, training and diligence.`,
      money: `Financially, it shows steady income from hard work.`,
    },
    reversed: {
      general: `Reversed, the Eight of Pentacles can show perfectionism, boredom or cutting corners. Find meaning in the work again.`,
      love: `In love, the reversal may show neglect.`,
      career: `At work, it may show burnout or lack of motivation.`,
      money: `With money, it may show inconsistent effort.`,
    },
    inReading: `As an outcome, the Eight of Pentacles suggests success through hard work. Next to the Three of Pentacles, recognition follows.`,
    pairs: [
      { with: 'Three of Pentacles', text: 'Skill and teamwork.' },
      { with: 'The Magician', text: 'Mastery.' },
      { with: 'Seven of Pentacles', text: 'Patient work.' },
    ],
  },

  'nine-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['independence', 'abundance', 'self-sufficiency', 'luxury', 'reward'],
      reversed: ['overwork', 'financial dependence', 'superficiality', 'setbacks', 'self-worth'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Nine of Pentacles is a yes: you have earned it. Reversed, it is a maybe while independence or stability is shaky.',
    },
    overview: `The Nine of Pentacles is the card of independence and well-earned comfort. Through your own efforts, you have created a good life.

In a reading, it points to self-sufficiency and enjoying the rewards of your work.`,
    imagery: `On the Rider–Waite–Smith card, an elegantly dressed woman stands in a lush vineyard with a hooded falcon on her gloved hand. Nine pentacles grow on the vines around her.

The vineyard shows abundance. The trained falcon suggests discipline and self-control. Her calm pose shows contentment.`,
    upright: {
      general: `Upright, the Nine of Pentacles shows independence, comfort and reward. Enjoy what you have built.`,
      love: `In love, it shows feeling secure on your own, or a relationship between two independent people.`,
      career: `At work, it suggests financial independence and success.`,
      money: `Financially, it shows abundance and security.`,
    },
    reversed: {
      general: `Reversed, the Nine of Pentacles can show overwork, financial dependence or valuing appearances over substance.`,
      love: `In love, the reversal may show depending on someone too much.`,
      career: `At work, it may show overworking.`,
      money: `With money, it may show setbacks.`,
    },
    inReading: `As an outcome, the Nine of Pentacles suggests independence and comfort. Next to the Ten of Pentacles, lasting wealth.`,
    pairs: [
      { with: 'Ten of Pentacles', text: 'Lasting security.' },
      { with: 'Nine of Cups', text: 'Material and emotional satisfaction.' },
      { with: 'The Empress', text: 'Abundance.' },
    ],
  },

  'ten-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['wealth', 'legacy', 'family', 'long-term security', 'inheritance'],
      reversed: ['family conflict', 'financial loss', 'instability', 'short-term focus', 'inheritance disputes'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Ten of Pentacles is a strong yes for long-term and family matters. Reversed, it is a maybe while there is instability or family tension.',
    },
    overview: `The Ten of Pentacles is the card of lasting wealth and legacy. It represents security, family and building something that lasts beyond you.

In a reading, it points to long-term stability and family support.`,
    imagery: `On the Rider–Waite–Smith card, an elderly man sits in an archway with two dogs, while a couple and a child stand nearby. Ten pentacles are arranged across the scene.

Three generations show legacy. The archway suggests home and family heritage. The dogs show loyalty.`,
    upright: {
      general: `Upright, the Ten of Pentacles brings long-term security, family support and lasting success.`,
      love: `In love, it suggests a committed, stable relationship and family.`,
      career: `At work, it points to long-term success and stable institutions.`,
      money: `Financially, it suggests lasting wealth and good planning.`,
    },
    reversed: {
      general: `Reversed, the Ten of Pentacles can show family conflict, financial instability or short-term thinking.`,
      love: `In love, the reversal may show family pressure.`,
      career: `At work, it may show instability.`,
      money: `With money, it may show financial loss or disputes.`,
    },
    inReading: `As an outcome, the Ten of Pentacles suggests lasting success. Next to the Ten of Cups, family happiness and security.`,
    pairs: [
      { with: 'Ten of Cups', text: 'Happiness and security.' },
      { with: 'The World', text: 'Lasting success.' },
      { with: 'Four of Wands', text: 'Home and family celebration.' },
    ],
  },

  'page-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['learning', 'new opportunities', 'ambition', 'diligence', 'practical goals'],
      reversed: ['lack of progress', 'procrastination', 'missed opportunities', 'unrealistic goals', 'laziness'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Page of Pentacles is a yes for learning and starting something practical. Reversed, it is a maybe while procrastination slows things down.',
    },
    overview: `The Page of Pentacles is the eager student of the suit. Pages bring messages, and this one brings practical opportunities and the desire to learn.

In a reading, the Page can describe a diligent, studious person, or a new practical goal.`,
    imagery: `On the Rider–Waite–Smith card, a young person stands in a green field holding up a pentacle and studying it carefully. Plowed fields and trees are in the background.

The careful study shows a learner's focus. The fields suggest growth and potential.`,
    upright: {
      general: `Upright, the Page of Pentacles brings new learning and practical opportunities. Study, plan and take steady steps.`,
      love: `In love, it suggests a slow, steady start.`,
      career: `At work, it points to training, new skills or a new job.`,
      money: `Financially, it suggests learning to manage money.`,
    },
    reversed: {
      general: `Reversed, the Page of Pentacles can show procrastination or lack of progress. Take one small step.`,
      love: `In love, the reversal may show a lack of commitment.`,
      career: `At work, it may show missed opportunities.`,
      money: `With money, it may show poor planning.`,
    },
    inReading: `As an outcome, the Page of Pentacles suggests a new opportunity to learn. Next to the Eight of Pentacles, skill grows.`,
    pairs: [
      { with: 'Eight of Pentacles', text: 'Learning and skill-building.' },
      { with: 'Ace of Pentacles', text: 'A practical new opportunity.' },
      { with: 'Knight of Pentacles', text: 'Steady progress.' },
    ],
  },

  'knight-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['hard work', 'reliability', 'routine', 'patience', 'responsibility'],
      reversed: ['boredom', 'stagnation', 'laziness', 'perfectionism', 'stubbornness'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Knight of Pentacles is a slow but steady yes. Reversed, it is a maybe while progress stalls.',
    },
    overview: `The Knight of Pentacles is the most steady of the knights. He works hard, sticks to routine and gets things done, slowly but surely.

In a reading, he can describe a reliable, patient person, or the need for consistency.`,
    imagery: `On the Rider–Waite–Smith card, a knight sits on a heavy, still horse holding a pentacle and looking at plowed fields.

The still horse shows patience. The plowed fields show steady work. Unlike other knights, he is not rushing.`,
    upright: {
      general: `Upright, the Knight of Pentacles brings hard work, reliability and steady progress. Keep going.`,
      love: `In love, he shows a reliable, committed partner.`,
      career: `At work, he points to diligence and dependability.`,
      money: `Financially, he suggests steady saving.`,
    },
    reversed: {
      general: `Reversed, the Knight of Pentacles can show boredom, stagnation or stubbornness. Shake up the routine.`,
      love: `In love, the reversal may show a relationship in a rut.`,
      career: `At work, it may show feeling stuck.`,
      money: `With money, it may show being too cautious.`,
    },
    inReading: `As an outcome, the Knight of Pentacles suggests slow but sure progress. Next to the Knight of Wands, balance speed and steadiness.`,
    pairs: [
      { with: 'Knight of Wands', text: 'Balance speed and steadiness.' },
      { with: 'Eight of Pentacles', text: 'Hard work paying off.' },
      { with: 'Seven of Pentacles', text: 'Patience.' },
    ],
  },

  'queen-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['nurturing', 'practical care', 'abundance', 'home', 'security'],
      reversed: ['self-neglect', 'work-life imbalance', 'smothering', 'financial worry', 'overextending'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Queen of Pentacles is a warm, practical yes. Reversed, it is a maybe if you are stretched too thin.',
    },
    overview: `The Queen of Pentacles is practical, nurturing and generous. She creates comfort and abundance for herself and others.

In a reading, she can describe a caring, grounded person, or the need to care for your home, body and finances.`,
    imagery: `On the Rider–Waite–Smith card, the Queen sits on a throne in a lush garden, holding a pentacle in her lap. A rabbit sits nearby, and roses grow overhead.

The garden shows abundance. The rabbit suggests fertility and comfort. Her gaze at the pentacle shows care for practical matters.`,
    upright: {
      general: `Upright, the Queen of Pentacles brings practical care and abundance. Look after yourself and others with warmth and sense.`,
      love: `In love, she shows a nurturing, stable partner.`,
      career: `At work, she suggests practical leadership and balancing work and home.`,
      money: `Financially, she shows good money management.`,
    },
    reversed: {
      general: `Reversed, the Queen of Pentacles can show self-neglect, imbalance or overextending. Take care of yourself first.`,
      love: `In love, the reversal may show smothering.`,
      career: `At work, it may show work-life imbalance.`,
      money: `With money, it may show financial worry.`,
    },
    inReading: `As an outcome, the Queen of Pentacles suggests abundance and care. Next to The Empress, nurturing is strong.`,
    pairs: [
      { with: 'The Empress', text: 'Abundance and nurturing.' },
      { with: 'King of Pentacles', text: 'Stable partnership.' },
      { with: 'Nine of Pentacles', text: 'Comfort and independence.' },
    ],
  },

  'king-of-pentacles': {
    reviewed: false,
    keywords: {
      upright: ['wealth', 'success', 'leadership', 'security', 'discipline'],
      reversed: ['greed', 'materialism', 'stubbornness', 'poor financial decisions', 'control'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the King of Pentacles is a confident yes, built on solid foundations. Reversed, it is a maybe if greed or stubbornness is involved.',
    },
    overview: `The King of Pentacles has mastered the material world. He is successful, disciplined and generous, having built lasting wealth.

In a reading, he can describe a successful, reliable person, or the qualities you need to build lasting success.`,
    imagery: `On the Rider–Waite–Smith card, the King sits on a throne decorated with bulls, surrounded by grapevines. He holds a scepter and a pentacle, with a castle behind him.

The bulls represent stability and Taurus. The grapes show abundance. The castle shows achievement.`,
    upright: {
      general: `Upright, the King of Pentacles brings success, security and discipline. Build and share your wealth wisely.`,
      love: `In love, he shows a stable, generous partner.`,
      career: `At work, he points to business success and leadership.`,
      money: `Financially, he shows wealth and wise investment.`,
    },
    reversed: {
      general: `Reversed, the King of Pentacles can show greed, stubbornness or poor financial decisions.`,
      love: `In love, the reversal may show materialism.`,
      career: `At work, it may show controlling leadership.`,
      money: `With money, avoid greed.`,
    },
    inReading: `As an outcome, the King of Pentacles suggests lasting success. Next to the Ten of Pentacles, wealth is lasting.`,
    pairs: [
      { with: 'Ten of Pentacles', text: 'Lasting wealth.' },
      { with: 'The Emperor', text: 'Strong leadership.' },
      { with: 'Queen of Pentacles', text: 'Stable partnership.' },
    ],
  },
};
