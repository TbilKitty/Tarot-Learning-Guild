// Suit of Cups (Three of Cups lives in card-content.mjs).
export const CUPS = {
  'ace-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['new love', 'emotional fresh start', 'compassion', 'intuition', 'overflowing feelings'],
      reversed: ['blocked emotions', 'emptiness', 'self-neglect', 'holding back', 'emotional loss'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Ace of Cups is a warm yes, especially for matters of the heart. Reversed, it is a maybe while feelings are blocked or uncertain.',
    },
    overview: `The Ace of Cups is the first card of the suit of Cups, which deals with emotions, relationships, love and intuition. It is a seed of feeling: new love, deep compassion or a fresh emotional start.

In a reading, it often points to a new relationship, a renewed connection or a moment when your heart opens. It asks you to let yourself feel and receive.`,
    imagery: `On the Rider–Waite–Smith card, a hand emerges from a cloud holding a golden cup that overflows with five streams of water into a pond of lotus flowers. A dove descends toward the cup carrying a wafer marked with a cross.

The overflowing cup shows abundant feeling. The five streams are often linked to the five senses. The lotus flowers rise from water, a symbol of emotional and spiritual growth, and the dove brings peace.`,
    upright: {
      general: `Upright, the Ace of Cups brings emotional renewal. New love, friendship, creativity or compassion may be flowing in. Open your heart and let yourself receive care, as well as give it.`,
      love: `In love, it is one of the best cards: new romance, deepening feelings or a fresh start in a relationship.`,
      career: `At work, it suggests fulfilling, creative or caring work, and good relationships with colleagues.`,
      money: `Financially, it is less about money and more about feeling content. A gift is possible.`,
    },
    reversed: {
      general: `Reversed, the Ace of Cups suggests blocked or held-back emotions. You may feel empty, guarded or disconnected, or you may be pouring into others without refilling yourself. The card asks what you need to feel cared for.`,
      love: `In love, the reversal can show unreturned feelings or fear of opening up.`,
      career: `At work, it may describe feeling uninspired or emotionally drained.`,
      money: `With money, avoid spending to fill an emotional gap.`,
    },
    inReading: `As an outcome, the Ace of Cups suggests emotional fulfillment. Next to the Two of Cups, a new relationship is likely. Next to The Star, healing flows in.`,
    pairs: [
      { with: 'Two of Cups', text: 'New love, or a meaningful new connection.' },
      { with: 'The Star', text: 'Emotional healing and hope.' },
      { with: 'Ace of Wands', text: 'Passion and feeling together.' },
    ],
  },

  'two-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['partnership', 'mutual attraction', 'connection', 'harmony', 'unity'],
      reversed: ['imbalance', 'breakup', 'miscommunication', 'disconnection', 'tension'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Two of Cups is a yes, especially for relationships and partnerships. Reversed, it is a maybe while there is imbalance or tension between two people.',
    },
    overview: `The Two of Cups is the card of connection between two people. It stands for mutual attraction, partnership and the feeling of being truly seen by someone.

In a reading, it often points to romance, but it can also describe close friendships or business partnerships built on respect. It asks you to meet the other person halfway.`,
    imagery: `On the Rider–Waite–Smith card, a young man and woman face each other, each holding a cup, as if exchanging vows or toasting. Above them floats a staff entwined with two snakes, topped by a winged lion’s head.

The exchange of cups shows equal give-and-take. The staff with two snakes, similar to the caduceus, suggests healing and balance. The lion’s head adds passion and strength.`,
    upright: {
      general: `Upright, the Two of Cups shows a strong, balanced connection. A partnership, romance or friendship is built on mutual respect. It is a good time to strengthen bonds and make agreements.`,
      love: `In love, it can mean new romance, a deepening bond, or commitment. Attraction is mutual.`,
      career: `At work, it points to strong partnerships and collaboration.`,
      money: `Financially, it can show a good partnership or shared finances that work.`,
    },
    reversed: {
      general: `Reversed, the Two of Cups suggests imbalance or disconnection between two people. Communication may have broken down, or one person may be giving more than the other. The card asks what it would take to restore balance, or whether it is time to let go.`,
      love: `In love, the reversal can show tension, distance or a breakup.`,
      career: `At work, it may describe a partnership that is not working.`,
      money: `With money, disagreements over shared finances may arise.`,
    },
    inReading: `As an outcome, the Two of Cups suggests a meaningful connection. Next to The Lovers, the bond is significant. Next to the Four of Wands, commitment and celebration are likely.`,
    pairs: [
      { with: 'The Lovers', text: 'A deep, meaningful partnership.' },
      { with: 'Four of Wands', text: 'An engagement or commitment.' },
      { with: 'Ace of Cups', text: 'New love beginning.' },
    ],
  },

  'four-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['apathy', 'boredom', 'contemplation', 'missed opportunities', 'withdrawal'],
      reversed: ['re-engagement', 'new motivation', 'seizing opportunity', 'acceptance', 'clarity'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Four of Cups leans no, at least for now: you are not fully engaged, and you may be missing what is in front of you. Reversed, it is still a no for the moment, though your interest is returning.',
    },
    overview: `The Four of Cups is the card of apathy and contemplation. Something feels flat or unsatisfying, and you have pulled inward.

In a reading, it can show boredom, dissatisfaction or being so focused on what is missing that you overlook what is being offered. It asks you to look up and notice.`,
    imagery: `On the Rider–Waite–Smith card, a young man sits under a tree with his arms crossed, looking at three cups on the ground. A hand emerges from a cloud offering him a fourth cup, which he does not seem to notice.

The crossed arms show closed-off feelings. The three cups represent what he already has. The fourth cup is an opportunity he is overlooking because he is turned inward.`,
    upright: {
      general: `Upright, the Four of Cups shows apathy or dissatisfaction. Things may feel stale, and you may be withdrawing. Some reflection is healthy, but be careful not to miss new opportunities while you are looking away.`,
      love: `In love, it can show boredom in a relationship or disinterest in new connections. Ask what you really want.`,
      career: `At work, it suggests feeling unmotivated or overlooking an offer.`,
      money: `Financially, it may show taking what you have for granted.`,
    },
    reversed: {
      general: `Reversed, the Four of Cups often shows re-engagement: snapping out of a rut, noticing an opportunity or feeling motivated again. It can also mean finally accepting something and moving forward.`,
      love: `In love, the reversal can mean renewed interest or reaching out again.`,
      career: `At work, it may show saying yes to a new opportunity.`,
      money: `With money, it suggests noticing resources you had overlooked.`,
    },
    inReading: `As an outcome, the Four of Cups warns about missing an opportunity. Next to the Ace of Cups, the offered cup is worth taking. Next to The Hermit, reflection is useful but should not become isolation.`,
    pairs: [
      { with: 'Ace of Cups', text: 'An emotional opportunity you may be overlooking.' },
      { with: 'The Hermit', text: 'Withdrawing to reflect. Do not stay away too long.' },
      { with: 'Seven of Cups', text: 'Unsatisfied and unsure what you want.' },
    ],
  },

  'five-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['loss', 'grief', 'regret', 'disappointment', 'dwelling on the past'],
      reversed: ['acceptance', 'moving on', 'forgiveness', 'healing', 'finding what remains'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Five of Cups leans no, usually because something has already been lost or disappointed. Reversed, it is still a no to the old situation, but a sign you are starting to move forward.',
    },
    overview: `The Five of Cups is the card of loss and regret. Something has been spilled and cannot be taken back, and it is natural to grieve.

In a reading, it acknowledges disappointment and sadness, but also gently points out that not everything is lost. It asks you to allow the grief, and when you are ready, to turn toward what remains.`,
    imagery: `On the Rider–Waite–Smith card, a figure in a black cloak stands with head bowed over three spilled cups. Behind them, two cups still stand upright. In the distance, a bridge crosses a river toward a house.

The black cloak shows mourning. The spilled cups are the loss. The two standing cups, unseen by the figure, show what remains. The bridge suggests a way forward when they are ready.`,
    upright: {
      general: `Upright, the Five of Cups reflects grief, disappointment or regret. Give yourself permission to feel it. When you are ready, notice what is still standing, and the support available to you.`,
      love: `In love, it can show heartbreak, a breakup or regret. Healing takes time.`,
      career: `At work, it may describe a setback or disappointment. Learn from it without dwelling on it.`,
      money: `Financially, it can point to a loss. Focus on what you can still do.`,
    },
    reversed: {
      general: `Reversed, the Five of Cups shows healing and acceptance. You are starting to move on, forgive or see what remains. The card encourages you to keep going.`,
      love: `In love, the reversal may show moving past heartbreak, or reconciling.`,
      career: `At work, it may show recovering from a setback.`,
      money: `With money, it suggests recovery after a loss.`,
    },
    inReading: `As an outcome, the Five of Cups suggests a sad or disappointing result, but not a hopeless one. Next to the Six of Swords, you are moving on. Next to The Star, healing follows.`,
    pairs: [
      { with: 'Six of Swords', text: 'Leaving sadness behind and moving toward calmer waters.' },
      { with: 'The Star', text: 'Healing after loss.' },
      { with: 'Three of Swords', text: 'Heartbreak that needs time.' },
    ],
  },

  'six-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['nostalgia', 'childhood', 'innocence', 'reunion', 'kindness'],
      reversed: ['living in the past', 'unrealistic memories', 'moving forward', 'outgrowing', 'independence'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Six of Cups is a gentle yes, often linked to someone or something from your past. Reversed, it is a maybe, because looking back may be keeping you from moving forward.',
    },
    overview: `The Six of Cups is the card of nostalgia and simple kindness. It looks back to childhood, old friends and happy memories.

In a reading, it can show reunions, reconnecting with someone from the past, or acts of generosity. It asks you to draw comfort from good memories without getting stuck in them.`,
    imagery: `On the Rider–Waite–Smith card, a child offers another child a cup filled with white flowers in a peaceful village courtyard. Other cups with flowers stand nearby, and an older figure walks away in the background.

The exchange of flowers shows innocence and kindness. The village setting suggests home and the past. The figure walking away suggests that time moves on.`,
    upright: {
      general: `Upright, the Six of Cups brings nostalgia, warmth and kindness. You may reconnect with an old friend, revisit a meaningful place or simply remember happy times. Let it comfort you.`,
      love: `In love, it can show an old flame returning, or sweet, innocent affection.`,
      career: `At work, it may show returning to past skills or working with people you know.`,
      money: `Financially, it can mean a gift or help from family.`,
    },
    reversed: {
      general: `Reversed, the Six of Cups can show being stuck in the past, idealizing memories or refusing to grow. It can also mean finally leaving the past behind. The card asks whether looking back is helping or holding you back.`,
      love: `In love, the reversal may show comparing new partners to old ones.`,
      career: `At work, it may suggest it is time to move past old ways of working.`,
      money: `With money, it may show relying too much on old patterns.`,
    },
    inReading: `As an outcome, the Six of Cups suggests reconnection with the past. Next to Judgement, a second chance is possible. Next to the Eight of Cups, it is time to move on.`,
    pairs: [
      { with: 'Judgement', text: 'A second chance with someone from your past.' },
      { with: 'Ten of Cups', text: 'Family warmth and happy memories.' },
      { with: 'Eight of Cups', text: 'Leaving the past behind.' },
    ],
  },

  'seven-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['choices', 'fantasy', 'illusion', 'daydreaming', 'confusion'],
      reversed: ['clarity', 'making a decision', 'facing reality', 'focus', 'alignment'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Seven of Cups leans no for now: there are too many options or illusions to choose wisely. Reversed, it is still a no until you narrow down what you really want, though clarity is coming.',
    },
    overview: `The Seven of Cups is the card of choices and illusions. Many options appear at once, but not all of them are real or good for you.

In a reading, it can show daydreaming, confusion or wishful thinking. It asks you to separate fantasy from reality and choose one path.`,
    imagery: `On the Rider–Waite–Smith card, a figure seen from behind faces seven cups floating in clouds. Each cup holds something different: a head, a veiled figure, a snake, a castle, jewels, a wreath and a dragon.

The cups in the clouds suggest fantasies rather than solid options. Each object represents a different temptation or dream: fame, mystery, desire, security, wealth, victory and fear.`,
    upright: {
      general: `Upright, the Seven of Cups shows many choices and possible illusions. It is easy to get lost in daydreams. Get practical: which options are real, and which one matters most?`,
      love: `In love, it can show confusion about what you want, or idealizing someone.`,
      career: `At work, it suggests too many ideas or options. Focus on one.`,
      money: `Financially, it warns against get-rich-quick schemes and wishful thinking.`,
    },
    reversed: {
      general: `Reversed, the Seven of Cups shows clarity returning. You are seeing options more realistically and making a decision. The fog is lifting.`,
      love: `In love, the reversal may show seeing a person or situation as it really is.`,
      career: `At work, it may show narrowing your focus and committing.`,
      money: `With money, it suggests realistic planning.`,
    },
    inReading: `As an outcome, the Seven of Cups warns that confusion may cloud the result. Next to The Moon, illusions are strong. Next to the Two of Swords, a choice must be made.`,
    pairs: [
      { with: 'The Moon', text: 'Illusion and confusion. Check the facts.' },
      { with: 'Two of Swords', text: 'Too many choices. Pick one.' },
      { with: 'Ace of Swords', text: 'Clarity cuts through the fog.' },
    ],
  },

  'eight-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['walking away', 'moving on', 'seeking more', 'leaving behind', 'disillusionment'],
      reversed: ['fear of change', 'staying stuck', 'indecision', 'returning', 'avoidance'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Eight of Cups leans no to the current situation: it is time to walk away and look for something more fulfilling. Reversed, it is still a no, often because fear is keeping you somewhere you have outgrown.',
    },
    overview: `The Eight of Cups is the card of walking away. Something that once satisfied you no longer does, and you choose to leave it to look for something deeper.

In a reading, it can show leaving a relationship, job or situation that has stopped meeting your needs. It is not always easy, but it is often brave. It asks you to trust that there is more for you.`,
    imagery: `On the Rider–Waite–Smith card, a cloaked figure with a walking staff turns away from eight stacked cups and walks toward rocky hills under a moon that shows both a full and a crescent face.

The stacked cups show something built and now left behind. A gap in the stack hints that something was missing. The moon suggests intuition guiding the journey at night.`,
    upright: {
      general: `Upright, the Eight of Cups shows you are ready to leave something behind. It may be time to move on, even if the situation is not terrible, because it no longer feels right. Trust the pull toward something more meaningful.`,
      love: `In love, it can show leaving a relationship that has stopped fulfilling you.`,
      career: `At work, it may mean leaving a job or path to seek more meaning.`,
      money: `Financially, it can show walking away from something stable for something more fulfilling. Plan for it.`,
    },
    reversed: {
      general: `Reversed, the Eight of Cups can show fear of leaving, staying stuck, or going back and forth. It can also show returning to something you left. The card asks what is really keeping you there.`,
      love: `In love, the reversal may show staying out of fear, or trying again.`,
      career: `At work, it may describe staying in a job you have outgrown.`,
      money: `With money, it may show fear of change keeping you stuck.`,
    },
    inReading: `As an outcome, the Eight of Cups suggests moving on. Next to the Six of Swords, a transition is underway. Next to The Hermit, the search is inward.`,
    pairs: [
      { with: 'Six of Swords', text: 'Moving on toward calmer waters.' },
      { with: 'The Hermit', text: 'Leaving to search for deeper meaning.' },
      { with: 'Five of Cups', text: 'Grieving what you leave behind.' },
    ],
  },

  'nine-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['wishes granted', 'satisfaction', 'contentment', 'gratitude', 'pleasure'],
      reversed: ['unmet wishes', 'dissatisfaction', 'overindulgence', 'smugness', 'inner happiness'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'The Nine of Cups is known as the wish card, and upright it is a strong yes. Reversed, it is a maybe, because what you want may not bring the happiness you expect.',
    },
    overview: `The Nine of Cups is often called the wish card. It stands for satisfaction, contentment and getting what you hoped for.

In a reading, it shows pleasure, comfort and gratitude. It asks you to enjoy your good fortune and appreciate it.`,
    imagery: `On the Rider–Waite–Smith card, a well-dressed man sits on a bench with his arms crossed and a satisfied smile. Behind him, nine cups are arranged in an arc on a table covered with blue cloth.

The satisfied expression and crossed arms show contentment, though some see a hint of smugness. The cups on display show abundance and pride in what he has.`,
    upright: {
      general: `Upright, the Nine of Cups shows wishes coming true and deep satisfaction. Enjoy what you have achieved, and share it with gratitude.`,
      love: `In love, it suggests happiness and emotional fulfillment.`,
      career: `At work, it points to satisfaction and achieving goals.`,
      money: `Financially, it suggests comfort and enjoying the rewards of your work.`,
    },
    reversed: {
      general: `Reversed, the Nine of Cups can show unmet wishes, dissatisfaction or overindulgence. It can also mean realizing that happiness has to come from within. The card asks what would truly satisfy you.`,
      love: `In love, the reversal may show unmet expectations.`,
      career: `At work, it may show success that feels hollow.`,
      money: `With money, it warns against overspending on pleasures.`,
    },
    inReading: `As an outcome, the Nine of Cups is a very positive sign. Next to the Ten of Cups, happiness extends to family. Next to The Star, wishes and hopes align.`,
    pairs: [
      { with: 'Ten of Cups', text: 'Lasting happiness with loved ones.' },
      { with: 'The Star', text: 'Hopes and wishes coming true.' },
      { with: 'The Sun', text: 'Joy and success.' },
    ],
  },

  'ten-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['harmony', 'family', 'happiness', 'emotional fulfillment', 'home'],
      reversed: ['family tension', 'broken harmony', 'misaligned values', 'disconnection', 'unrealistic ideals'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Ten of Cups is a joyful yes, especially for family, home and relationships. Reversed, it is a maybe while there is tension or misaligned values.',
    },
    overview: `The Ten of Cups is the card of lasting happiness. It represents emotional fulfillment, harmony at home and loving relationships.

In a reading, it points to family joy, a happy home and relationships that feel secure. It asks you to cherish the people who matter most.`,
    imagery: `On the Rider–Waite–Smith card, a couple stands with their arms around each other, raising their free arms toward a rainbow of ten cups. Two children dance nearby, and a house sits among green hills.

The rainbow of cups suggests blessing and emotional abundance. The dancing children show joy and innocence. The house represents home and stability.`,
    upright: {
      general: `Upright, the Ten of Cups brings harmony, love and happiness. Family, friends and home life are a source of joy. Appreciate it.`,
      love: `In love, it suggests a happy, committed relationship and shared values.`,
      career: `At work, it can show a supportive team and a good work-life balance.`,
      money: `Financially, it suggests stability that supports a happy home.`,
    },
    reversed: {
      general: `Reversed, the Ten of Cups can show family tension, broken harmony or values that do not align. It can also mean holding onto an ideal that does not match reality. The card asks what would bring more peace at home.`,
      love: `In love, the reversal may show different visions for the future.`,
      career: `At work, it may describe tension affecting home life.`,
      money: `With money, financial stress may be affecting the household.`,
    },
    inReading: `As an outcome, the Ten of Cups is one of the most positive cards. Next to the Four of Wands, celebration at home. Next to the Ten of Pentacles, lasting security.`,
    pairs: [
      { with: 'Four of Wands', text: 'Celebration with family.' },
      { with: 'Ten of Pentacles', text: 'Lasting happiness and security.' },
      { with: 'The Sun', text: 'Joyful family life.' },
    ],
  },

  'page-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['creativity', 'intuition', 'emotional messages', 'curiosity', 'sensitivity'],
      reversed: ['emotional immaturity', 'creative block', 'insecurity', 'unrealistic dreams', 'moodiness'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Page of Cups is a maybe that leans hopeful: something sweet or surprising may come, but it is still young and uncertain. Reversed, it leans no while emotions are immature or unclear.',
    },
    overview: `The Page of Cups is the dreamy, sensitive beginner of the suit of Cups. Pages often bring messages, and this one brings emotional news, creative ideas or surprising feelings.

In a reading, the Page can describe a person who is gentle, creative and intuitive, or a new emotional or creative opening. It asks you to stay open to surprises.`,
    imagery: `On the Rider–Waite–Smith card, a young person in a floral tunic stands by the sea holding a cup. A small fish pokes its head out of the cup, and the Page looks at it with curiosity.

The fish appearing from the cup is a surprise, like an unexpected feeling or idea. The sea in the background represents emotion and the unconscious.`,
    upright: {
      general: `Upright, the Page of Cups brings emotional or creative messages. You may receive sweet news, feel inspired or notice an intuitive nudge. Stay curious and open.`,
      love: `In love, it can show a crush, a sweet message or new romantic feelings.`,
      career: `At work, it suggests creative ideas or new artistic opportunities.`,
      money: `Financially, it may show a creative idea with potential.`,
    },
    reversed: {
      general: `Reversed, the Page of Cups can show emotional immaturity, creative blocks or unrealistic daydreams. The card asks you to take your feelings seriously, without letting them run the show.`,
      love: `In love, the reversal may show moodiness or immature behavior.`,
      career: `At work, it may show a creative block.`,
      money: `With money, avoid emotional spending.`,
    },
    inReading: `As an outcome, the Page of Cups suggests a sweet or surprising development. Next to the Ace of Cups, new feelings are emerging. Next to the Seven of Cups, daydreams may be taking over.`,
    pairs: [
      { with: 'Ace of Cups', text: 'A new emotional or creative beginning.' },
      { with: 'Two of Cups', text: 'A sweet romantic message.' },
      { with: 'Seven of Cups', text: 'Dreamy, but not yet realistic.' },
    ],
  },

  'knight-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['romance', 'charm', 'following the heart', 'invitations', 'idealism'],
      reversed: ['moodiness', 'unrealistic expectations', 'jealousy', 'disappointment', 'empty promises'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Knight of Cups is a maybe: a romantic offer or idea is coming, but check whether it is realistic. Reversed, it leans no, because promises may not be kept.',
    },
    overview: `The Knight of Cups is the romantic of the tarot. He follows his heart and brings offers, invitations and charm.

In a reading, he can describe a charming, idealistic person, or a romantic or creative offer. He asks you to follow your heart, while making sure your feet stay on the ground.`,
    imagery: `On the Rider–Waite–Smith card, a knight rides a white horse slowly, holding a cup out in front of him as if offering it. His helmet and heels have wings, and a river flows through the landscape.

The outstretched cup shows an offer. The slow pace contrasts with the other knights, showing a gentle, dreamy approach. The wings suggest imagination.`,
    upright: {
      general: `Upright, the Knight of Cups brings romance, invitations and creative inspiration. Follow your heart, but make sure your choices match reality.`,
      love: `In love, he can show a romantic proposal, a charming suitor or a date.`,
      career: `At work, he suggests creative opportunities or an attractive offer.`,
      money: `Financially, check that offers are as good as they seem.`,
    },
    reversed: {
      general: `Reversed, the Knight of Cups can show moodiness, empty promises or unrealistic expectations. Romance may turn into disappointment. The card asks you to look past the charm.`,
      love: `In love, the reversal may show unreliable romance or jealousy.`,
      career: `At work, it may show ideas that are not grounded.`,
      money: `With money, avoid promises that sound too good.`,
    },
    inReading: `As an outcome, the Knight of Cups suggests an emotional offer. Next to the Two of Cups, romance is likely. Next to the Seven of Swords, look closely at intentions.`,
    pairs: [
      { with: 'Two of Cups', text: 'A romantic offer or proposal.' },
      { with: 'Page of Cups', text: 'Sweet, new feelings.' },
      { with: 'Seven of Swords', text: 'Charm that may hide something.' },
    ],
  },

  'queen-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['compassion', 'intuition', 'emotional security', 'care', 'calm'],
      reversed: ['emotional overwhelm', 'codependency', 'insecurity', 'martyrdom', 'self-neglect'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Queen of Cups is a maybe: trust your intuition, which probably already knows the answer. Reversed, it leans no while emotions are overwhelming your judgment.',
    },
    overview: `The Queen of Cups is the compassionate, intuitive heart of the tarot. She is caring, emotionally wise and deeply in touch with her feelings.

In a reading, she can describe a nurturing person, or the qualities you need: compassion, emotional honesty and trust in your intuition.`,
    imagery: `On the Rider–Waite–Smith card, the Queen sits on a throne at the edge of the sea, holding an ornate, closed cup and gazing at it. Her throne is decorated with sea creatures and cherubs.

The closed cup suggests deep, private feelings and intuition. The sea at her feet shows her comfort with emotion. The cherubs add a sense of love and imagination.`,
    upright: {
      general: `Upright, the Queen of Cups invites compassion, emotional honesty and intuition. Care for others, and for yourself. Trust your feelings.`,
      love: `In love, she shows a caring, emotionally available partner, or deep emotional connection.`,
      career: `At work, she suggests caring work and emotionally intelligent leadership.`,
      money: `Financially, trust your instincts, but check the facts.`,
    },
    reversed: {
      general: `Reversed, the Queen of Cups can show emotional overwhelm, codependency or giving until you have nothing left. The card asks you to set boundaries and refill your own cup.`,
      love: `In love, the reversal may show insecurity or caring too much for the wrong person.`,
      career: `At work, it may show emotional burnout.`,
      money: `With money, avoid spending to soothe feelings.`,
    },
    inReading: `As an outcome, the Queen of Cups suggests emotional wisdom guides the result. Next to The High Priestess, intuition is strong. Next to the King of Cups, a balanced emotional partnership.`,
    pairs: [
      { with: 'The High Priestess', text: 'Deep intuition. Trust what you know.' },
      { with: 'King of Cups', text: 'Emotional balance and support.' },
      { with: 'Four of Swords', text: 'Rest to recover emotionally.' },
    ],
  },

  'king-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['emotional balance', 'diplomacy', 'calm', 'wisdom', 'compassionate leadership'],
      reversed: ['emotional manipulation', 'moodiness', 'volatility', 'coldness', 'repression'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The King of Cups is a maybe: stay calm and think it through rather than reacting. Reversed, it leans no while emotions are volatile or being used to control.',
    },
    overview: `The King of Cups has mastered his emotions. He feels deeply but stays calm, and he leads with compassion and wisdom.

In a reading, he can describe a steady, caring person, or the need to keep a cool head in emotional situations.`,
    imagery: `On the Rider–Waite–Smith card, the King sits on a stone throne floating on rough sea. He holds a cup in one hand and a scepter in the other. A fish leaps from the water on one side, and a ship sails on the other.

The throne on rough water shows calm in the middle of emotional turbulence. The fish and ship show emotion and practical life side by side.`,
    upright: {
      general: `Upright, the King of Cups asks you to balance feeling and reason. Stay calm, listen and respond with compassion and wisdom.`,
      love: `In love, he shows a mature, caring and stable partner.`,
      career: `At work, he suggests calm, diplomatic leadership.`,
      money: `Financially, keep emotions out of decisions.`,
    },
    reversed: {
      general: `Reversed, the King of Cups can show emotional manipulation, moodiness or repressed feelings that erupt. The card asks you to notice and name emotions instead of letting them control you or others.`,
      love: `In love, the reversal may show emotional unavailability or manipulation.`,
      career: `At work, it may describe a moody or volatile leader.`,
      money: `With money, avoid decisions made in a bad mood.`,
    },
    inReading: `As an outcome, the King of Cups suggests a calm resolution. Next to the Queen of Cups, emotional partnership. Next to the Five of Wands, a calm head settles conflict.`,
    pairs: [
      { with: 'Queen of Cups', text: 'Emotional balance in partnership.' },
      { with: 'Temperance', text: 'Calm, balanced decisions.' },
      { with: 'Five of Wands', text: 'Keeping calm in conflict.' },
    ],
  },
};
