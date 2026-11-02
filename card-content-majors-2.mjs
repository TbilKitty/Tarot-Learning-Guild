// Major Arcana X–XXI (except Death and The Tower, which live in card-content.mjs).
export const MAJORS_2 = {
  'wheel-of-fortune': {
    reviewed: false,
    keywords: {
      upright: ['change', 'cycles', 'luck', 'turning points', 'destiny'],
      reversed: ['bad luck', 'resisting change', 'setbacks', 'feeling stuck', 'breaking a cycle'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Wheel of Fortune leans yes: things are turning in your favor, often faster than expected. Reversed, it is a maybe, because timing is off or an old pattern is repeating. Wait, adjust and try again when the wheel turns.',
    },
    overview: `The Wheel of Fortune is card ten of the Major Arcana and the card of cycles. Life rises and falls, seasons change, and luck comes and goes. The Wheel reminds you that nothing stays the same forever, including hard times.

In a reading, it often marks a turning point: a change you did not fully control, a lucky break, or the start of a new chapter. The card asks you to ride the change rather than fight it, and to notice which patterns in your life keep coming around.`,
    imagery: `The Rider–Waite–Smith Wheel is a large orange wheel in the clouds marked with letters (often read as TARO or ROTA) and alchemical symbols. A snake descends on one side, a figure with a jackal’s head rises on the other, and a sphinx sits on top holding a sword. In the four corners are an angel, an eagle, a lion and a bull, each reading a book.

The descending snake and rising figure show the turning cycle: some things fall while others rise. The sphinx represents wisdom that stays steady at the top. The four winged creatures, linked to the fixed signs of the zodiac, suggest that even in constant change some things remain stable.`,
    upright: {
      general: `Upright, the Wheel of Fortune signals change, often for the better. A lucky break, an unexpected opportunity or a shift in circumstances may be arriving. The card reminds you that life moves in cycles: if things have been hard, they are turning. Stay flexible and be ready to act when the opening appears.`,
      love: `In love, the Wheel can mean a fated-feeling meeting, a relationship entering a new phase, or patterns from past relationships finally becoming clear. Change is in the air; let it happen.`,
      career: `At work, it points to new opportunities, a change of role or a sudden lucky development. Be prepared so you can say yes when the timing is right.`,
      money: `Financially, the Wheel can bring a windfall or a positive change, but it is also a reminder that fortunes shift. Save some of the good luck for later turns.`,
    },
    reversed: {
      general: `Reversed, the Wheel often describes a downturn, delays or the sense that luck is against you. It can also show resistance to necessary change, or an old pattern repeating. The card asks what is in your control and what is not. You cannot stop the wheel, but you can choose how you respond, and you can break a cycle by doing something differently.`,
      love: `In love, the reversal may show repeating relationship patterns or bad timing. Notice what keeps happening, and what you could change.`,
      career: `At work, it can point to setbacks or plans thrown off by events outside your control. Adapt instead of forcing the old plan.`,
      money: `With money, expect some unpredictability. Keep a cushion and avoid big gambles.`,
    },
    inReading: `In a past position, the Wheel often marks the event that changed everything. As an outcome, it suggests a turn of fortune is coming. Next to The Star, the change brings hope. Next to the Ten of Wands, it may be time to put down a burden as a cycle ends.`,
    pairs: [
      { with: 'The Star', text: 'Luck and hope returning together. Things are looking up.' },
      { with: 'Ace of Pentacles', text: 'A lucky financial or practical opportunity.' },
      { with: 'The Tower', text: 'Sudden, uncontrollable change. Hold on and adapt.' },
    ],
  },

  'justice': {
    reviewed: false,
    keywords: {
      upright: ['fairness', 'truth', 'cause and effect', 'accountability', 'balance'],
      reversed: ['unfairness', 'dishonesty', 'avoiding responsibility', 'bias', 'imbalance'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'Justice is a maybe: the answer depends on the facts and on what is fair. If you have acted honestly, it can tip toward yes. Reversed, it leans no, often because something unfair or untrue is in play.',
    },
    overview: `Justice is card eleven in the Rider–Waite–Smith deck (eight in some older decks). It stands for fairness, truth and the principle that actions have consequences. Justice weighs things carefully and makes a clear decision.

In a reading, the card often points to decisions, agreements, contracts or legal matters, and to the importance of honesty. It asks you to look at a situation objectively, take responsibility for your part, and choose what is fair rather than what is easy.`,
    imagery: `On the Rider–Waite–Smith card, Justice sits between two pillars wearing a red robe and a crown. She holds an upright, double-edged sword in her right hand and balanced scales in her left. A purple veil hangs behind her.

The scales show careful weighing of evidence. The double-edged sword is a reminder that decisions cut both ways and that truth can be sharp. Unlike many images of Justice, she is not blindfolded, which suggests clear sight rather than blind impartiality.`,
    upright: {
      general: `Upright, Justice asks for honesty and fairness. Outcomes will reflect what has actually been done, so take responsibility for your part and look at the facts clearly. It favors clear decisions, balanced judgment and doing the right thing even when it is hard. In practical terms, it can point to contracts, agreements or legal processes.`,
      love: `In love, Justice favors honesty and fairness between partners: equal effort, clear agreements and accountability. It can also point to a relationship decision made with clear eyes.`,
      career: `At work, it suggests fair outcomes, contracts and decisions based on merit. Be honest and organized; documentation helps.`,
      money: `Financially, Justice favors balanced books, fair deals and reading contracts carefully. Pay what you owe and expect the same from others.`,
    },
    reversed: {
      general: `Reversed, Justice can point to unfairness, dishonesty or avoiding responsibility. Something may feel unbalanced, or you may be judging yourself or others too harshly. The card asks where the truth is being bent. Taking ownership of your part, and asking for fairness where it is missing, are the first steps.`,
      love: `In love, the reversal can show an unequal relationship, blame or dishonesty. Name what feels unfair and see whether it can be rebalanced.`,
      career: `At work, it may point to unfair treatment, bias or cut corners. Keep records and raise concerns through the right channels.`,
      money: `With money, check contracts and bills carefully. Something may not add up.`,
    },
    inReading: `In a past position, Justice may describe a decision whose consequences you are now living with. As an outcome, it suggests a fair result based on the facts. Next to Judgement, it points to a major reckoning or decision. Next to the Seven of Swords, honesty is in question.`,
    pairs: [
      { with: 'Judgement', text: 'A big decision or reckoning. Face it honestly.' },
      { with: 'Two of Swords', text: 'A hard choice. Weigh the facts, then decide.' },
      { with: 'Seven of Swords', text: 'Dishonesty or a hidden agenda that may come to light.' },
    ],
  },

  'the-hanged-man': {
    reviewed: false,
    keywords: {
      upright: ['pause', 'surrender', 'new perspective', 'letting go', 'waiting'],
      reversed: ['stalling', 'resistance', 'indecision', 'pointless sacrifice', 'impatience'],
    },
    yesNo: {
      upright: 'Maybe',
      reversed: 'No',
      note: 'The Hanged Man is a maybe: not yet, or not in the way you expect. Pause and look at it from a different angle. Reversed, it leans no, because stalling or resisting is keeping things stuck.',
    },
    overview: `The Hanged Man is card twelve of the Major Arcana and the card of the meaningful pause. It describes a time when moving forward is not possible, or not wise, and the best thing to do is stop, let go of control and see things differently.

It is less gloomy than it looks. The figure on the card is calm, and the pause often leads to insight. In a reading, The Hanged Man suggests that the breakthrough comes from changing your perspective, not from pushing harder.`,
    imagery: `In the Rider–Waite–Smith deck, a man hangs upside down by one foot from a living tree shaped like a T. His other leg is bent behind his knee, his hands are behind his back, and a golden halo shines around his head. His expression is peaceful.

He is not being punished; he looks calm and even enlightened. The halo suggests insight that comes from seeing the world upside down. The living tree hints that this pause is part of growth, not an end.`,
    upright: {
      general: `Upright, The Hanged Man asks you to pause and look at things from a new angle. Progress may feel stuck, but forcing it will not help. Let go of what you cannot control, sit with the uncertainty and notice what you have been missing. Sometimes the wise move is to wait, and sometimes it is to give up one thing to gain something better.`,
      love: `In love, it can mean a relationship in limbo or a need to see your partner, or yourself, differently. Patience and a fresh perspective will help more than pressure.`,
      career: `At work, it may describe a stalled project or a waiting period. Use the time to rethink your approach or learn something new.`,
      money: `Financially, it suggests holding off on big decisions until you have a clearer view. Not acting can be a valid choice.`,
    },
    reversed: {
      general: `Reversed, The Hanged Man shows a pause that has gone on too long, or resistance to a needed change. You may be stalling, avoiding a decision, or making sacrifices that no longer serve any purpose. The card asks what you are waiting for, and whether it is time to cut the rope and move.`,
      love: `In love, the reversal can point to staying stuck in an unclear situation. Ask for clarity or make a decision.`,
      career: `At work, it may show procrastination or impatience. Decide what to do next and do it.`,
      money: `With money, it can show avoiding a necessary financial decision. Look at it today.`,
    },
    inReading: `In a past position, The Hanged Man may describe a pause that changed your perspective. As an outcome, it suggests waiting before acting. Next to the Four of Swords, rest is essential. Next to The Chariot, it is time to stop waiting and move.`,
    pairs: [
      { with: 'Four of Swords', text: 'A deliberate pause to rest and rethink.' },
      { with: 'Eight of Cups', text: 'Letting go of something to find what you really need.' },
      { with: 'The Chariot', text: 'The waiting is over. Time to take the reins.' },
    ],
  },

  'temperance': {
    reviewed: false,
    keywords: {
      upright: ['balance', 'moderation', 'patience', 'healing', 'finding the middle path'],
      reversed: ['imbalance', 'excess', 'impatience', 'clashing', 'burnout'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, Temperance is a calm yes, through patience and balance rather than all at once. Reversed, it is a maybe until something is brought back into balance.',
    },
    overview: `Temperance is card fourteen of the Major Arcana and comes right after Death, as if to show what follows an ending: slow, careful healing. It is the card of balance, blending opposites and finding the middle path.

When Temperance appears, it suggests patience and moderation. Things are working out, but at their own pace. It favors combining different parts of your life in the right proportions, and avoiding extremes.`,
    imagery: `On the Rider–Waite–Smith card, a winged angel pours water between two cups, with one foot on land and one in a pool. A path leads from the water to distant mountains, where a crown-like light shines. Irises grow beside the pool.

The pouring water shows blending and flow. One foot on land and one in water suggests balancing the practical and the emotional. The path to the mountains hints that patience leads somewhere meaningful, and the irises, linked to the goddess Iris, connect the card to messages and renewal.`,
    upright: {
      general: `Upright, Temperance asks for balance and patience. Avoid extremes, blend the different needs in your life, and let things unfold at a steady pace. It is a healing card, often appearing after a hard period. The middle path, steady effort and calm communication will get you where you want to go.`,
      love: `In love, Temperance points to harmony, compromise and a relationship that grows steadily. It favors give-and-take and patience over drama.`,
      career: `At work, it suggests teamwork, balance between work and rest, and steady progress. Combining different skills or people leads to good results.`,
      money: `Financially, Temperance favors moderation: a balanced budget, steady saving and avoiding risky extremes.`,
    },
    reversed: {
      general: `Reversed, Temperance points to imbalance: too much of something, not enough of something else, or impatience to get results. It can show excess, burnout or conflict between people or priorities. The card asks what has gone to an extreme, and what small adjustment would restore balance.`,
      love: `In love, the reversal may show clashing needs, one partner giving too much, or rushing things. Look for compromise.`,
      career: `At work, it may point to overwork, team conflict or forcing progress. Pace yourself.`,
      money: `With money, it can show overspending or extreme swings. Bring things back to the middle.`,
    },
    inReading: `In a past position, Temperance may describe a healing period. As an outcome, it suggests a balanced, sustainable result. After Death or The Tower, it reads as recovery. Next to the Two of Pentacles, the focus is juggling priorities wisely.`,
    pairs: [
      { with: 'Death', text: 'Healing after an ending. Slow, steady renewal.' },
      { with: 'Two of Pentacles', text: 'Balancing many priorities. Keep things in proportion.' },
      { with: 'The Star', text: 'Deep healing and renewed hope.' },
    ],
  },

  'the-devil': {
    reviewed: false,
    keywords: {
      upright: ['temptation', 'attachment', 'unhealthy patterns', 'feeling trapped', 'materialism'],
      reversed: ['breaking free', 'release', 'reclaiming power', 'facing the shadow', 'detachment'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Devil is usually a no, especially if the question involves something tempting but unhealthy. Reversed, it is still a no to the old pattern, but a yes to breaking free from it.',
    },
    overview: `The Devil is card fifteen of the Major Arcana and represents the things that hold us: habits, addictions, unhealthy relationships, fear and the pull of short-term pleasure. It is not about evil in a literal sense. It is about where we have given away our freedom, often without realizing it.

The key to the card is that the chains are loose. In a reading, The Devil asks you to name what is controlling you, and to notice that you may have more power to walk away than you think.`,
    imagery: `On the Rider–Waite–Smith card, a horned figure with bat wings sits on a black pedestal, one hand raised and the other holding a torch pointed down. A naked man and woman, with small horns and tails, stand chained to the pedestal. Their chains are loose enough to lift over their heads.

The figure mirrors The Lovers card, with the angel replaced by the Devil, suggesting connection turned into bondage. The loose chains are the most important detail: the couple could free themselves. The downward torch suggests energy wasted or misdirected.`,
    upright: {
      general: `Upright, The Devil points to an attachment or pattern that is holding you back. It might be a habit, a relationship, a job you stay in out of fear, or an obsession with money or status. The card is honest, not judgmental: it shows the trap so you can see the way out. Naming the pattern is the first step to loosening it.`,
      love: `In love, The Devil can mean intense attraction, but also jealousy, possessiveness, codependency or a relationship that feels hard to leave. Ask whether the bond makes you freer or smaller.`,
      career: `At work, it may describe feeling trapped by money, a toxic environment or a job you stay in out of fear. Look at what is really keeping you there.`,
      money: `Financially, The Devil warns about debt, impulse spending, gambling or letting money run your life. Look honestly at the habits involved.`,
    },
    reversed: {
      general: `Reversed, The Devil often signals release: breaking a habit, leaving an unhealthy situation, or seeing a pattern clearly for the first time. It can be a powerful card of reclaiming your freedom. Sometimes it also shows the struggle of breaking free, with relapses along the way. Keep going.`,
      love: `In love, the reversal can mean leaving a toxic dynamic or a relationship becoming healthier as old patterns fall away.`,
      career: `At work, it may show you finally leaving a job that kept you stuck, or setting better boundaries.`,
      money: `With money, it can mean breaking a spending habit or getting out of debt. Celebrate each step.`,
    },
    inReading: `In a past position, The Devil may explain a pattern that still affects you. As an outcome, it is a warning: the current path leads to feeling trapped unless something changes. Next to The Tower, an unhealthy situation breaks apart. Next to The Star, healing after release is strongly suggested.`,
    pairs: [
      { with: 'The Lovers', text: 'Attraction that may be more about attachment than love. Look closely.' },
      { with: 'The Tower', text: 'A trap breaking apart, suddenly. Painful but freeing.' },
      { with: 'The Star', text: 'Healing and hope after breaking free.' },
    ],
  },

  'the-star': {
    reviewed: false,
    keywords: {
      upright: ['hope', 'healing', 'renewal', 'inspiration', 'peace'],
      reversed: ['discouragement', 'lost faith', 'disconnection', 'despair', 'self-doubt'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The Star is a hopeful yes: things are healing and moving in a good direction. Reversed, it is a maybe while hope is low, so reconnect with what you believe in before deciding.',
    },
    overview: `The Star is card seventeen of the Major Arcana and comes right after The Tower. After the upheaval comes calm, healing and renewed hope. It is one of the most comforting cards in the deck.

In a reading, The Star suggests that the worst is over and things are gently improving. It favors faith in the future, self-care and following what inspires you. The card does not promise instant results, but it does promise that light is returning.`,
    imagery: `On the Rider–Waite–Smith card, a naked woman kneels by a pool beneath a night sky. She pours water from one jug into the pool and from another onto the land, where it flows in five streams. A large eight-pointed star shines above her, surrounded by seven smaller stars, and a bird perches in a tree behind her.

Her nakedness suggests openness and vulnerability without fear. Pouring water into the pool and onto the land shows renewal flowing to both the emotional and the practical parts of life. The great star is a guiding light, and the bird is often read as hope or the soul.`,
    upright: {
      general: `Upright, The Star brings hope, healing and renewal. If you have been through a hard time, this card says you are recovering. It encourages you to rest, believe in yourself and follow what inspires you. It is a good card for creativity, wellness and setting intentions for the future.`,
      love: `In love, The Star points to healing, honesty and a hopeful connection. After heartbreak, it suggests you are ready to open up again. In a relationship, it brings peace and renewed trust.`,
      career: `At work, it favors inspiration, creative work and recognition coming over time. Follow the work that feels meaningful.`,
      money: `Financially, The Star suggests recovery and improving prospects. Keep your plans realistic, but trust that things are getting better.`,
    },
    reversed: {
      general: `Reversed, The Star can point to discouragement, low faith or feeling disconnected from what inspires you. You may be too tired or hurt to feel hopeful. The card asks you to be gentle with yourself and look for small sources of light: rest, nature, people who care about you, a small win.`,
      love: `In love, the reversal may show lingering hurt or difficulty trusting again. Healing takes time; do not rush it.`,
      career: `At work, it may describe losing motivation or feeling uninspired. Reconnect with why you started.`,
      money: `With money, it can show pessimism about finances. Look at the facts, which may be better than they feel.`,
    },
    inReading: `In a past position, The Star may mark a time of recovery. As an outcome, it suggests hope and healing. After The Tower, it is the classic sign of rebuilding. Next to the Six of Swords, moving on leads to peace.`,
    pairs: [
      { with: 'The Tower', text: 'Upheaval followed by healing. The worst is behind you.' },
      { with: 'Ace of Cups', text: 'Emotional renewal. A fresh start for the heart.' },
      { with: 'The Moon', text: 'Hope, but uncertainty too. Trust yourself while things become clearer.' },
    ],
  },

  'the-moon': {
    reviewed: false,
    keywords: {
      upright: ['uncertainty', 'intuition', 'illusion', 'fear', 'the subconscious'],
      reversed: ['clarity returning', 'releasing fear', 'truth revealed', 'confusion lifting', 'inner work'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Moon leans no, or at least not yet: things are unclear, and decisions made now may rest on wrong assumptions. Reversed, it is still a no for now, though clarity is starting to return.',
    },
    overview: `The Moon is card eighteen of the Major Arcana and the card of uncertainty. Things are not what they seem, the path is not clear, and fears or illusions may be shaping how you see a situation.

The Moon also connects to intuition, dreams and the subconscious. In a reading, it asks you to move carefully, trust your instincts while checking the facts, and avoid big decisions until the picture becomes clearer.`,
    imagery: `On the Rider–Waite–Smith card, a full moon with a face shines between two towers. Below, a dog and a wolf howl at it, and a crayfish crawls out of a pool onto a winding path that leads between the towers toward distant mountains.

The dog and wolf represent the tame and wild sides of our nature. The crayfish emerging from the water suggests fears and thoughts rising from the subconscious. The winding path through the twilight shows a way forward that can only be seen a little at a time.`,
    upright: {
      general: `Upright, The Moon describes uncertainty and confusion. You may not have the full picture, and fears or assumptions may be filling in the gaps. The card asks you to slow down, trust your intuition, and verify what you can. It is a poor time for big decisions based on incomplete information, and a good time for reflection, dreams and inner work.`,
      love: `In love, The Moon can point to mixed signals, insecurity or not knowing where you stand. It may also show your own fears coloring the situation. Ask honest questions rather than guessing.`,
      career: `At work, it may describe unclear direction, rumors or hidden information. Get things in writing and check facts.`,
      money: `Financially, The Moon warns against unclear deals or decisions made in anxiety. Read the fine print.`,
    },
    reversed: {
      general: `Reversed, The Moon often shows clarity returning: fears are fading, the truth is coming out, or you are seeing a situation more realistically. It can also show inner confusion being worked through. Trust that things are becoming clearer, even if slowly.`,
      love: `In love, the reversal may mean secrets coming out or anxiety easing as you understand where you stand.`,
      career: `At work, it can show misunderstandings being cleared up. Ask the question you have been avoiding.`,
      money: `With money, it may show financial confusion lifting. Now is a good time to get organized.`,
    },
    inReading: `In a past position, The Moon may describe a confusing period. As an outcome, it suggests uncertainty, so do not rush. Next to The Sun, confusion gives way to clarity. Next to the Nine of Swords, anxiety may be making things seem worse than they are.`,
    pairs: [
      { with: 'The Sun', text: 'Confusion clearing. The truth comes into the light.' },
      { with: 'Nine of Swords', text: 'Anxiety and overthinking. Things are likely better than they feel at 3 a.m.' },
      { with: 'The High Priestess', text: 'Strong intuition. Listen to your gut, then check the facts.' },
    ],
  },

  'the-sun': {
    reviewed: false,
    keywords: {
      upright: ['joy', 'success', 'positivity', 'vitality', 'clarity'],
      reversed: ['temporary setback', 'delayed joy', 'overconfidence', 'low energy', 'inner child'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'The Sun is the clearest yes in the deck: joy, success and things going well. Reversed, it is still mostly positive but delayed, a maybe that usually leans toward yes with time.',
    },
    overview: `The Sun is card nineteen of the Major Arcana and the brightest card in the deck. It stands for joy, success, warmth and clarity. After the confusion of The Moon, everything is visible in the light of day.

In a reading, The Sun is almost always good news. It can describe success, happiness, good health, celebrations and simple pleasure in being alive. Its advice is to enjoy it, share it and let yourself shine.`,
    imagery: `On the Rider–Waite–Smith card, a large smiling sun shines over a garden wall lined with sunflowers. A naked child rides a white horse, arms spread wide and holding a red banner.

The child represents innocence, playfulness and joy without self-consciousness. The white horse suggests purity and strength. The sunflowers turn toward the light, and the wall shows that the hard journey through The Moon has been left behind.`,
    upright: {
      general: `Upright, The Sun brings joy, confidence and success. Things are going well or about to. It is a time to enjoy life, celebrate wins, spend time with people you love and let your personality shine. It can also bring clarity: the truth is out in the open.`,
      love: `In love, The Sun is one of the happiest cards: a joyful relationship, warmth, fun and openness. It can point to happy news for couples and a confident, sunny season for singles.`,
      career: `At work, it favors success, recognition and doing work you enjoy. Confidence and enthusiasm will carry you far.`,
      money: `Financially, The Sun suggests positive results and stability. Enjoy it, and share the good fortune.`,
    },
    reversed: {
      general: `Reversed, The Sun is still a good card, but the light is dimmed. Success or joy may be delayed, or you may be struggling to feel it. Sometimes it warns of overconfidence. The card asks you to reconnect with simple pleasures and give good things time to arrive.`,
      love: `In love, the reversal can show a temporary rough patch or unrealistic expectations. The warmth is still there.`,
      career: `At work, it may show delays or feeling unappreciated. Keep going; recognition is likely coming.`,
      money: `With money, it may mean a slower recovery than you hoped. Stay steady.`,
    },
    inReading: `In a past position, The Sun may describe a happy time that still supports you. As an outcome, it is a strongly positive sign. Next to The Moon, confusion clears. Next to the Ten of Cups, family and home life are especially happy.`,
    pairs: [
      { with: 'The Moon', text: 'Clarity after confusion. The truth comes out.' },
      { with: 'Ten of Cups', text: 'Joy at home. Family happiness and celebration.' },
      { with: 'Six of Wands', text: 'Public success and recognition.' },
    ],
  },

  'judgement': {
    reviewed: false,
    keywords: {
      upright: ['awakening', 'reflection', 'a calling', 'second chances', 'reckoning'],
      reversed: ['self-doubt', 'harsh self-judgment', 'ignoring a calling', 'avoiding reflection', 'stuck in the past'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, Judgement is a yes, especially to second chances and answering a call you already feel. Reversed, it is a maybe while self-doubt or fear of judgment holds you back.',
    },
    overview: `Judgement is card twenty of the Major Arcana and the card of awakening. It describes a moment of reckoning: looking back honestly at the past, understanding it, and answering a call to rise into a new chapter.

In a reading, Judgement often points to an important decision, a second chance or a realization that changes your direction. It asks you to forgive yourself for what is behind you and step into who you are becoming.`,
    imagery: `On the Rider–Waite–Smith card, an angel, often identified as Gabriel, blows a trumpet from the clouds. Below, people rise from open coffins floating on water, arms raised toward the sky. Mountains stand in the background.

The trumpet is a wake-up call. The people rising from coffins suggest renewal: leaving behind an old self or an old way of life. Their open arms show readiness to answer the call.`,
    upright: {
      general: `Upright, Judgement signals an awakening or a turning point. You may be seeing your past clearly for the first time, feeling called toward something new, or getting a second chance. The card asks for honest reflection without self-punishment, then decisive action. It is time to rise to the occasion.`,
      love: `In love, Judgement can mean a relationship reaching a decision point, a second chance or a reconnection. It favors honest conversations about the past and the future.`,
      career: `At work, it may point to a calling, a career change or an evaluation that leads somewhere new. Listen to what you really want to do.`,
      money: `Financially, it suggests reviewing past choices and making a fresh plan. Learn from mistakes rather than repeating them.`,
    },
    reversed: {
      general: `Reversed, Judgement often points to self-doubt, harsh self-criticism or fear of being judged. You may be ignoring a calling or avoiding a decision because you are afraid of getting it wrong. The card asks you to be kinder to yourself and to stop letting the past define your future.`,
      love: `In love, the reversal can show dwelling on past mistakes or fear of commitment. Forgiveness, of yourself or another, may be needed.`,
      career: `At work, it may describe ignoring a career calling or fear of evaluation. Take one step toward what you want.`,
      money: `With money, it can show avoiding a needed financial review. Look at it without blame.`,
    },
    inReading: `In a past position, Judgement may describe a turning point that redirected your life. As an outcome, it suggests an important decision or renewal. Next to Justice, a major reckoning or decision is emphasized. Next to The World, a chapter closes so the next can begin.`,
    pairs: [
      { with: 'Justice', text: 'A major decision or reckoning. Face it honestly.' },
      { with: 'The World', text: 'A chapter completed. Ready for the next level.' },
      { with: 'Six of Cups', text: 'Reconnecting with the past, or a second chance with someone from it.' },
    ],
  },

  'the-world': {
    reviewed: false,
    keywords: {
      upright: ['completion', 'achievement', 'wholeness', 'travel', 'fulfillment'],
      reversed: ['unfinished business', 'delays', 'lack of closure', 'shortcuts', 'almost there'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The World is a strong yes: completion, success and things coming together. Reversed, it is a maybe, because something still needs finishing before the circle closes.',
    },
    overview: `The World is card twenty-one, the final card of the Major Arcana. It represents completion: a journey finished, a goal achieved, a cycle brought to a satisfying close. After all the lessons from The Fool onward, The World is integration and wholeness.

In a reading, The World is one of the most positive cards. It points to success, fulfillment and the sense of everything fitting together. It can also mean travel and expanding your world, and it often hints that a new cycle is about to begin.`,
    imagery: `On the Rider–Waite–Smith card, a dancing figure wrapped in a purple sash floats inside a large oval wreath, holding a wand in each hand. In the four corners are an angel, an eagle, a lion and a bull, the same figures as on the Wheel of Fortune.

The wreath is a symbol of victory and completion. The dancer moves freely, at ease. The four corner figures return from the Wheel of Fortune, but now they are calm, suggesting that change has been mastered and integrated.`,
    upright: {
      general: `Upright, The World signals completion and success. A project, phase or journey is coming to a satisfying end, and you can feel proud of how far you have come. It is a time to celebrate, take stock and get ready for what comes next. It can also point to travel or broadening your horizons.`,
      love: `In love, The World suggests fulfillment: a relationship reaching a meaningful milestone, or feeling whole and happy, together or alone.`,
      career: `At work, it points to achieving goals, finishing major projects and recognition. It can also mean work involving travel or international connections.`,
      money: `Financially, The World suggests reaching a goal and feeling secure. Take a moment to enjoy it before setting the next target.`,
    },
    reversed: {
      general: `Reversed, The World often means you are almost there, but something is unfinished. You may lack closure, feel stuck just short of the finish line, or be tempted to take a shortcut. The card asks what loose ends need tying up so you can complete this chapter and move on.`,
      love: `In love, the reversal may show unresolved issues from the past or a relationship that has not quite found its footing. Address what is unfinished.`,
      career: `At work, it can point to delays near completion or a project that keeps dragging. Push through the last stretch.`,
      money: `With money, it may show a goal slightly out of reach. Stay the course.`,
    },
    inReading: `In a past position, The World may describe a major accomplishment. As an outcome, it is one of the best possible cards. Next to The Fool, one journey ends and another begins. Next to the Eight of Wands, travel or rapid progress toward completion is likely.`,
    pairs: [
      { with: 'The Fool', text: 'The end of one cycle and the start of the next.' },
      { with: 'Ten of Pentacles', text: 'Lasting success and security.' },
      { with: 'Eight of Wands', text: 'Travel, or a fast finish to a long project.' },
    ],
  },
};
