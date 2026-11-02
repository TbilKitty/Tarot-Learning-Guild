// Suit of Swords (Ten of Swords lives in card-content.mjs).
export const SWORDS = {
  'ace-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['clarity', 'truth', 'breakthrough', 'new idea', 'decisive thinking'],
      reversed: ['confusion', 'miscommunication', 'clouded judgment', 'harsh words', 'mental block'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Ace of Swords is a clear yes, especially if you have the facts and act honestly. Reversed, it is a maybe until confusion or miscommunication is cleared up.',
    },
    overview: `The Ace of Swords is the first card of the suit of Swords, which deals with thoughts, truth, communication and conflict. It is a seed of clarity: a breakthrough, a clear idea or the truth cutting through confusion.

In a reading, it often shows a moment when things suddenly make sense, or when it is time to speak honestly. It asks you to think clearly and act on what you know is true.`,
    imagery: `On the Rider–Waite–Smith card, a hand emerges from a cloud holding an upright, double-edged sword. The tip passes through a golden crown, with an olive branch and a palm frond hanging from it. Below are bare mountain peaks.

The upright sword shows clear, sharp thinking. The crown suggests mental mastery and victory. The olive and palm represent peace and success, and the bare peaks show that truth can be stark.`,
    upright: {
      general: `Upright, the Ace of Swords brings clarity and breakthroughs. The truth is becoming clear, or a strong new idea is arriving. Speak honestly, decide clearly, and use your mind as a tool.`,
      love: `In love, it suggests an honest conversation that clears the air. Truth may be sharp but freeing.`,
      career: `At work, it points to new ideas, clear decisions and strong communication.`,
      money: `Financially, it favors clear, informed decisions. Do the research.`,
    },
    reversed: {
      general: `Reversed, the Ace of Swords can show confusion, miscommunication or thoughts going in circles. Words may come out harsher than intended. The card asks you to slow down, gather facts and choose your words carefully.`,
      love: `In love, the reversal may show misunderstandings or harsh words.`,
      career: `At work, it may show unclear plans or a mental block.`,
      money: `With money, avoid decisions without full information.`,
    },
    inReading: `As an outcome, the Ace of Swords suggests clarity and a breakthrough. Next to Justice, truth and fairness win out. Next to The Moon, clarity is still forming.`,
    pairs: [
      { with: 'Justice', text: 'Truth and a fair decision.' },
      { with: 'Seven of Cups', text: 'Clarity cutting through confusion.' },
      { with: 'Page of Swords', text: 'New ideas and honest communication.' },
    ],
  },

  'two-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['indecision', 'stalemate', 'difficult choice', 'avoidance', 'balance'],
      reversed: ['information revealed', 'decision made', 'overwhelm', 'confusion', 'releasing tension'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Two of Swords is a maybe: you are stuck between options and may need more information. Reversed, it leans no while confusion or overwhelm makes a good decision hard.',
    },
    overview: `The Two of Swords is the card of a difficult decision. You are stuck between two options and have blocked out your feelings to avoid choosing.

In a reading, it shows stalemate, indecision or avoidance. It asks you to take off the blindfold, gather the information you need and make a choice.`,
    imagery: `On the Rider–Waite–Smith card, a blindfolded woman sits on a bench with her back to the sea, holding two crossed swords over her chest. A crescent moon hangs in the sky, and rocks rise from the water behind her.

The blindfold shows she is not seeing the full situation. The crossed swords show a defensive stance and a choice held in tension. The sea and moon behind her suggest emotions and intuition she is ignoring.`,
    upright: {
      general: `Upright, the Two of Swords shows indecision or stalemate. You may be avoiding a choice because both options feel hard. Gather information, listen to your intuition and decide.`,
      love: `In love, it can show being torn between two people or avoiding a needed conversation.`,
      career: `At work, it suggests a hard decision. Get the facts.`,
      money: `Financially, it may mean weighing options. Avoid putting it off.`,
    },
    reversed: {
      general: `Reversed, the Two of Swords can show new information arriving that makes the choice clearer. It can also show overwhelm when too much is coming at once. Take it one step at a time.`,
      love: `In love, the reversal may show the truth coming out, or tension being released.`,
      career: `At work, it may show a decision finally being made.`,
      money: `With money, it may show confusion. Get advice.`,
    },
    inReading: `As an outcome, the Two of Swords suggests a decision is still to be made. Next to Justice, weigh the facts carefully. Next to the Seven of Cups, there are too many options.`,
    pairs: [
      { with: 'Justice', text: 'Weigh the facts and decide fairly.' },
      { with: 'The Lovers', text: 'A choice of the heart.' },
      { with: 'Ace of Swords', text: 'Clarity ends the stalemate.' },
    ],
  },

  'three-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['heartbreak', 'sorrow', 'grief', 'painful truth', 'hurt'],
      reversed: ['healing', 'forgiveness', 'recovery', 'releasing pain', 'moving on'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Three of Swords leans no: the situation involves hurt or a painful truth. Reversed, it is still a no to returning to the source of pain, but a sign you are healing.',
    },
    overview: `The Three of Swords is the card of heartbreak and painful truth. It is one of the most recognizable cards in the deck: a heart pierced by three swords.

In a reading, it can show grief, sadness or hurt from words or betrayal. It is not meant to frighten. It acknowledges that pain is part of life, and that facing it honestly is how healing starts.`,
    imagery: `On the Rider–Waite–Smith card, a red heart is pierced by three swords against a gray sky filled with clouds and rain.

The heart pierced by swords shows emotional pain caused by thoughts, words or truths. The rain suggests tears and also cleansing. There are no people on the card, which makes the pain feel universal.`,
    upright: {
      general: `Upright, the Three of Swords reflects heartbreak, grief or a painful truth. Let yourself feel it rather than pushing it away. Talking to people you trust can help, and so can time.`,
      love: `In love, it can show heartbreak, a breakup or hurtful words. Be gentle with yourself.`,
      career: `At work, it may describe painful news or harsh criticism. It is not the end of the story.`,
      money: `Financially, it can show disappointment or loss. Take care of yourself first.`,
    },
    reversed: {
      general: `Reversed, the Three of Swords shows healing. The pain is fading, and you may be ready to forgive, release and move on. It can also show holding onto pain too long. Healing is a process.`,
      love: `In love, the reversal may show recovery after heartbreak, or reconciliation.`,
      career: `At work, it may show recovering from a setback.`,
      money: `With money, it suggests the worst is over.`,
    },
    inReading: `As an outcome, the Three of Swords suggests pain, but pain that can heal. Next to The Star, healing follows. Next to the Five of Cups, grief needs time.`,
    pairs: [
      { with: 'The Star', text: 'Healing after heartbreak.' },
      { with: 'Five of Cups', text: 'Deep grief. Allow it time.' },
      { with: 'Six of Swords', text: 'Moving on from pain.' },
    ],
  },

  'four-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['rest', 'recovery', 'contemplation', 'retreat', 'recharging'],
      reversed: ['restlessness', 'burnout', 'returning to action', 'stagnation', 'avoiding rest'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Four of Swords is a maybe: not right now, rest first and decide later. Reversed, it leans no, often because burnout is making things harder than they need to be.',
    },
    overview: `The Four of Swords is the card of rest and recovery. After struggle or heartbreak, it is time to pause, recharge and heal.

In a reading, it asks you to step back, take a break and let your mind and body recover before your next move.`,
    imagery: `On the Rider–Waite–Smith card, a knight lies in a peaceful pose on a stone tomb in a church, his hands together as if in prayer. Three swords hang on the wall above him, and one lies beneath him. A stained-glass window shows a figure with a child.

The resting knight shows deliberate rest, not defeat. The swords hung on the wall show conflict set aside for now. The church setting suggests sanctuary and quiet.`,
    upright: {
      general: `Upright, the Four of Swords asks you to rest. Take a break, step back and recover. It is not giving up; it is getting ready.`,
      love: `In love, it can show needing space or a calm period after conflict.`,
      career: `At work, it suggests taking time off or stepping back to plan.`,
      money: `Financially, pause before big decisions.`,
    },
    reversed: {
      general: `Reversed, the Four of Swords can show restlessness, burnout from refusing to rest, or the end of a rest period and a return to action. The card asks whether you have actually recovered.`,
      love: `In love, the reversal may show being ready to reconnect.`,
      career: `At work, it may show burnout. Take the break you need.`,
      money: `With money, it may show returning to active planning.`,
    },
    inReading: `As an outcome, the Four of Swords suggests a rest period is needed. Next to the Ten of Wands, rest is overdue. Next to the Hanged Man, the pause is purposeful.`,
    pairs: [
      { with: 'Ten of Wands', text: 'Overloaded. You need rest.' },
      { with: 'The Hanged Man', text: 'A meaningful pause to rethink.' },
      { with: 'Temperance', text: 'Healing through balance and rest.' },
    ],
  },

  'five-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['conflict', 'winning at a cost', 'tension', 'defeat', 'betrayal'],
      reversed: ['reconciliation', 'making amends', 'moving past conflict', 'regret', 'compromise'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Five of Swords leans no: even if you win, it may cost more than it is worth. Reversed, it is still a no to the fight, but a yes to making peace.',
    },
    overview: `The Five of Swords is the card of conflict where nobody really wins. Someone may come out on top, but relationships are damaged in the process.

In a reading, it can show arguments, hostility or winning at any cost. It asks whether the fight is worth what you would lose.`,
    imagery: `On the Rider–Waite–Smith card, a man holds three swords and smirks as two defeated figures walk away. Two more swords lie on the ground. The sky is stormy.

The smirking figure has won but is alone. The figures walking away show the cost of the victory. The stormy sky shows tension in the air.`,
    upright: {
      general: `Upright, the Five of Swords shows conflict and winning at a cost. Ask whether being right is worth it, and look for ways to resolve the tension without burning bridges.`,
      love: `In love, it can show arguments, hurtful words or a power struggle.`,
      career: `At work, it suggests a hostile environment or unfair competition.`,
      money: `Financially, it may show disputes over money.`,
    },
    reversed: {
      general: `Reversed, the Five of Swords suggests reconciliation, making amends or walking away from a fight. It can also show regret over a conflict. The card asks what would help you move on.`,
      love: `In love, the reversal may show making peace after an argument.`,
      career: `At work, it may show conflict settling down.`,
      money: `With money, it suggests resolving disputes.`,
    },
    inReading: `As an outcome, the Five of Swords suggests a hollow victory. Next to Temperance, compromise is the answer. Next to the Seven of Swords, dishonesty is involved.`,
    pairs: [
      { with: 'Temperance', text: 'Compromise ends the conflict.' },
      { with: 'Seven of Swords', text: 'Deception or unfair tactics.' },
      { with: 'Five of Wands', text: 'Competition turning hostile.' },
    ],
  },

  'six-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['transition', 'moving on', 'leaving behind', 'calmer waters', 'travel'],
      reversed: ['resistance to change', 'unfinished business', 'stuck', 'emotional baggage', 'delays'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Six of Swords is a quiet yes: you are moving toward better times. Reversed, it is a maybe while you resist moving on.',
    },
    overview: `The Six of Swords is the card of transition. You are leaving something difficult behind and moving toward calmer waters.

In a reading, it can show moving on, recovering or literal travel. The journey may be bittersweet, but it leads somewhere better.`,
    imagery: `On the Rider–Waite–Smith card, a man poles a boat across water, carrying a cloaked woman and a child. Six swords stand upright in the boat. The water on one side is rough, while the water ahead is calm.

The rough and calm water show leaving trouble for peace. The figures are quiet, showing that moving on can be sad even when it is right. The swords travel with them, suggesting some baggage comes along.`,
    upright: {
      general: `Upright, the Six of Swords shows you are moving on toward something better. It may be bittersweet, but the direction is right. Keep going.`,
      love: `In love, it can show moving on from a past relationship or a couple moving through a hard time together.`,
      career: `At work, it suggests a transition, such as a new role or relocating.`,
      money: `Financially, it suggests gradual improvement.`,
    },
    reversed: {
      general: `Reversed, the Six of Swords can show resistance to change, unfinished business or feeling unable to move on. The card asks what you need to resolve before you can leave.`,
      love: `In love, the reversal may show difficulty letting go.`,
      career: `At work, it may show delays in a transition.`,
      money: `With money, it may show slow recovery.`,
    },
    inReading: `As an outcome, the Six of Swords suggests moving toward peace. Next to the Eight of Cups, you are walking away from something. Next to The Star, healing follows.`,
    pairs: [
      { with: 'Eight of Cups', text: 'Walking away toward something better.' },
      { with: 'The Star', text: 'Healing after a hard time.' },
      { with: 'Three of Swords', text: 'Moving on from heartbreak.' },
    ],
  },

  'seven-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['deception', 'strategy', 'secrecy', 'getting away with something', 'going it alone'],
      reversed: ['coming clean', 'conscience', 'getting caught', 'rethinking strategy', 'honesty'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Seven of Swords leans no: something may not be as honest or straightforward as it seems. Reversed, it is still a no for now, while the truth comes out.',
    },
    overview: `The Seven of Swords is the card of strategy and secrecy. It can describe clever planning, but more often it points to deception, hidden motives or trying to get away with something.

In a reading, it asks you to look at what is being hidden, by others or by you, and to act with integrity.`,
    imagery: `On the Rider–Waite–Smith card, a man tiptoes away from a camp carrying five swords, looking back over his shoulder with a sly expression. Two swords remain stuck in the ground behind him.

His sneaking posture suggests stealth and deception. Looking back shows he is worried about being caught. The two swords left behind suggest he could not take everything.`,
    upright: {
      general: `Upright, the Seven of Swords suggests deception, secrecy or a strategic move. Be alert to dishonesty, and be honest with yourself about your own motives.`,
      love: `In love, it can show secrets or a lack of trust.`,
      career: `At work, it suggests office politics or someone taking credit. Protect your work.`,
      money: `Financially, watch for scams or hidden costs.`,
    },
    reversed: {
      general: `Reversed, the Seven of Swords can show the truth coming out, coming clean or rethinking a sneaky approach. It can also show getting caught.`,
      love: `In love, the reversal may show honesty returning, or secrets revealed.`,
      career: `At work, it may show a more open approach.`,
      money: `With money, it suggests uncovering hidden costs.`,
    },
    inReading: `As an outcome, the Seven of Swords warns that something may be hidden. Next to The Moon, deception is likely. Next to Justice, the truth comes out.`,
    pairs: [
      { with: 'The Moon', text: 'Hidden information or deception.' },
      { with: 'Justice', text: 'The truth will come out.' },
      { with: 'Five of Swords', text: 'Unfair tactics in a conflict.' },
    ],
  },

  'eight-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['feeling trapped', 'self-limiting beliefs', 'restriction', 'powerlessness', 'fear'],
      reversed: ['freedom', 'new perspective', 'self-acceptance', 'release', 'taking control'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Eight of Swords leans no for now: you may feel stuck, but the trap is often less solid than it seems. Reversed, it is still a no to the old limits, and a yes to breaking free.',
    },
    overview: `The Eight of Swords is the card of feeling trapped. You feel stuck and powerless, but much of the trap is made of your own fears and beliefs.

In a reading, it asks you to question the stories you are telling yourself and look for the way out that may already be there.`,
    imagery: `On the Rider–Waite–Smith card, a blindfolded woman with her arms loosely bound stands surrounded by eight swords stuck in muddy ground. A castle sits on a hill behind her.

The swords do not completely surround her, and the bindings are loose. The blindfold shows she cannot see her options. The scene suggests she could walk free if she could see clearly.`,
    upright: {
      general: `Upright, the Eight of Swords shows feeling trapped or powerless. Look at which limits are real and which come from fear. Small steps can start to free you.`,
      love: `In love, it can show feeling stuck in a relationship or held back by fear.`,
      career: `At work, it suggests feeling trapped in a job. Your options may be wider than you think.`,
      money: `Financially, it may show feeling stuck. Get advice and look at all options.`,
    },
    reversed: {
      general: `Reversed, the Eight of Swords shows freedom and new perspective. You are seeing the situation more clearly and taking back control.`,
      love: `In love, the reversal may show releasing fears that held you back.`,
      career: `At work, it may show finding a way out.`,
      money: `With money, it suggests finding new solutions.`,
    },
    inReading: `As an outcome, the Eight of Swords suggests limits that can be overcome. Next to The Devil, feeling trapped is strong. Next to Strength, you have the courage to free yourself.`,
    pairs: [
      { with: 'The Devil', text: 'Feeling trapped. The way out is closer than it seems.' },
      { with: 'Strength', text: 'Courage to break free.' },
      { with: 'Two of Swords', text: 'Blocked by fear of choosing.' },
    ],
  },

  'nine-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['anxiety', 'worry', 'sleepless nights', 'overthinking', 'fear'],
      reversed: ['relief', 'hope', 'facing fears', 'reaching out', 'recovery'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Nine of Swords leans no for now, often because worry is making things look worse than they are. Reversed, it is still a no for the moment, though relief is coming.',
    },
    overview: `The Nine of Swords is the card of anxiety and worry. It shows the kind of fear that keeps you awake at night.

In a reading, it reflects stress and overthinking. Often the fear is worse than the reality. It asks you to name your worries, check them against the facts and reach out for support. If worry ever feels overwhelming or unsafe, talking to someone you trust or a professional can help.`,
    imagery: `On the Rider–Waite–Smith card, a figure sits up in bed with their face in their hands. Nine swords hang horizontally on the black wall behind them. The quilt is decorated with roses and astrological symbols.

The figure awake in the dark shows sleepless worry. The swords on the wall are not touching them, suggesting the fears are in the mind. The quilt adds a reminder that comfort is nearby.`,
    upright: {
      general: `Upright, the Nine of Swords shows anxiety and overthinking. Write down your worries, check what is real, and talk to someone. Things often look better in daylight.`,
      love: `In love, it can show worry or insecurity about a relationship.`,
      career: `At work, it suggests stress. Break problems down into steps.`,
      money: `Financially, it may show money worries. Make a plan and seek advice.`,
    },
    reversed: {
      general: `Reversed, the Nine of Swords suggests relief, hope and recovery. You are facing your fears, reaching out or seeing things more clearly.`,
      love: `In love, the reversal may show anxiety easing.`,
      career: `At work, it may show stress lifting.`,
      money: `With money, it suggests a plan easing worries.`,
    },
    inReading: `As an outcome, the Nine of Swords suggests worry, but often more than the situation warrants. Next to The Moon, fears are distorting things. Next to The Sun, relief comes.`,
    pairs: [
      { with: 'The Moon', text: 'Fears distorting reality.' },
      { with: 'The Sun', text: 'Relief after worry.' },
      { with: 'Four of Swords', text: 'Rest to calm the mind.' },
    ],
  },

  'page-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['curiosity', 'new ideas', 'communication', 'vigilance', 'learning'],
      reversed: ['gossip', 'all talk', 'haste', 'defensiveness', 'scattered thinking'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Page of Swords is a maybe: find out more before deciding. Reversed, it leans no while gossip or rushed thinking clouds things.',
    },
    overview: `The Page of Swords is the curious, quick-thinking beginner of the suit. Pages bring messages, and this one brings news, ideas and questions.

In a reading, the Page can describe a curious, talkative person, or the need to learn, investigate and communicate.`,
    imagery: `On the Rider–Waite–Smith card, a young person stands on high ground holding a sword upright, looking alert. Clouds swirl in the sky and wind bends the trees.

The raised sword shows readiness. The high ground and windy sky suggest an active, restless mind. The Page looks around alertly, as if gathering information.`,
    upright: {
      general: `Upright, the Page of Swords brings curiosity, new ideas and news. Ask questions, learn and communicate clearly.`,
      love: `In love, it can show lively conversation or news.`,
      career: `At work, it suggests learning, research and new ideas.`,
      money: `Financially, do your homework.`,
    },
    reversed: {
      general: `Reversed, the Page of Swords can show gossip, hasty words or being all talk and no action. Think before speaking.`,
      love: `In love, the reversal may show miscommunication.`,
      career: `At work, it may show rushed decisions or rumors.`,
      money: `With money, avoid hasty choices.`,
    },
    inReading: `As an outcome, the Page of Swords suggests news or a need for more information. Next to the Eight of Wands, news arrives fast.`,
    pairs: [
      { with: 'Eight of Wands', text: 'Quick news or messages.' },
      { with: 'Ace of Swords', text: 'A sharp new idea.' },
      { with: 'Seven of Swords', text: 'Gossip or hidden agendas.' },
    ],
  },

  'knight-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['ambition', 'speed', 'directness', 'action', 'determination'],
      reversed: ['recklessness', 'aggression', 'impulsiveness', 'burnout', 'scattered energy'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Knight of Swords is a maybe: things may move fast, but think before you charge ahead. Reversed, it leans no because recklessness could backfire.',
    },
    overview: `The Knight of Swords charges ahead at full speed. He is ambitious, direct and focused on his goal.

In a reading, he can describe a fast-moving, determined person, or a period of quick action. He asks you to act decisively, without running over people or skipping important steps.`,
    imagery: `On the Rider–Waite–Smith card, a knight in armor charges forward on a galloping horse, sword raised. Clouds and trees are blown by strong wind.

The galloping horse shows speed. The raised sword shows determination. The windy sky suggests a whirlwind of thought and action.`,
    upright: {
      general: `Upright, the Knight of Swords brings speed, ambition and directness. Go after what you want, but think before you leap.`,
      love: `In love, he can show a fast-moving relationship or direct communication.`,
      career: `At work, he suggests ambition and quick progress.`,
      money: `Financially, act decisively, but carefully.`,
    },
    reversed: {
      general: `Reversed, the Knight of Swords can show recklessness, aggression or burnout. Slow down.`,
      love: `In love, the reversal may show harsh words or impatience.`,
      career: `At work, it may show rushing or conflict.`,
      money: `With money, avoid impulsive decisions.`,
    },
    inReading: `As an outcome, the Knight of Swords suggests fast action. Next to the Eight of Wands, things accelerate.`,
    pairs: [
      { with: 'Eight of Wands', text: 'Very fast movement.' },
      { with: 'The Chariot', text: 'Determined forward motion.' },
      { with: 'Four of Swords', text: 'Slow down and rest.' },
    ],
  },

  'queen-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['clarity', 'honesty', 'independence', 'boundaries', 'clear judgment'],
      reversed: ['coldness', 'harshness', 'bitterness', 'overly critical', 'emotional distance'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Queen of Swords is a maybe: look at the facts honestly and the answer will be clear. Reversed, it leans no while harshness or bitterness clouds judgment.',
    },
    overview: `The Queen of Swords is clear-sighted, honest and independent. She has learned from experience and sees through nonsense.

In a reading, she can describe a direct, perceptive person, or the need for clear boundaries and honest communication.`,
    imagery: `On the Rider–Waite–Smith card, the Queen sits on a throne facing to the side, holding an upright sword in one hand and raising the other as if welcoming or gesturing. Clouds gather below, and a single bird flies overhead.

The upright sword shows clear judgment. The raised hand suggests openness to the truth. The single bird suggests independence and clear vision.`,
    upright: {
      general: `Upright, the Queen of Swords asks for clarity and honesty. Set boundaries, speak plainly and trust your judgment.`,
      love: `In love, she suggests honest communication and clear boundaries.`,
      career: `At work, she shows clear thinking and fair leadership.`,
      money: `Financially, use your head, not emotions.`,
    },
    reversed: {
      general: `Reversed, the Queen of Swords can show coldness, harshness or bitterness. The card asks you to balance honesty with kindness.`,
      love: `In love, the reversal may show emotional distance.`,
      career: `At work, it may show overly critical behavior.`,
      money: `With money, avoid decisions from bitterness.`,
    },
    inReading: `As an outcome, the Queen of Swords suggests a clear, honest result. Next to Justice, truth is central.`,
    pairs: [
      { with: 'Justice', text: 'Truth and fairness.' },
      { with: 'Ace of Swords', text: 'Sharp clarity.' },
      { with: 'Queen of Cups', text: 'Balance head and heart.' },
    ],
  },

  'king-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['authority', 'truth', 'intellect', 'fairness', 'clear thinking'],
      reversed: ['manipulation', 'abuse of power', 'coldness', 'rigidity', 'poor judgment'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the King of Swords is a yes based on logic and fairness. Reversed, it is a maybe, because judgment may be clouded.',
    },
    overview: `The King of Swords is the master of intellect and truth. He makes decisions with logic, fairness and authority.

In a reading, he can describe an expert, a professional or a fair authority figure, or the need for clear, objective thinking.`,
    imagery: `On the Rider–Waite–Smith card, the King sits on a throne facing forward, holding an upright sword slightly tilted. His throne is decorated with butterflies and crescent moons, and birds fly in the sky.

The frontal position shows directness. The upright sword shows authority and truth. The butterflies suggest transformation through thought.`,
    upright: {
      general: `Upright, the King of Swords asks you to think clearly, act fairly and use your expertise. Logic wins.`,
      love: `In love, he suggests honest, mature communication.`,
      career: `At work, he shows leadership, expertise and fair decisions.`,
      money: `Financially, he suggests professional advice.`,
    },
    reversed: {
      general: `Reversed, the King of Swords can show manipulation, abuse of power or rigid thinking. Be careful whom you trust.`,
      love: `In love, the reversal may show coldness or control.`,
      career: `At work, it may show an unfair authority.`,
      money: `With money, check advice carefully.`,
    },
    inReading: `As an outcome, the King of Swords suggests a fair, rational result. Next to Justice, legal matters may be involved.`,
    pairs: [
      { with: 'Justice', text: 'A fair, logical decision.' },
      { with: 'The Emperor', text: 'Strong authority.' },
      { with: 'Queen of Swords', text: 'Clear, honest partnership.' },
    ],
  },
};
