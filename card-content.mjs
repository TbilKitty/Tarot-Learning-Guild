// Full card pages. Keyed by card slug (e.g. "the-fool"). A card only gets its own
// page once it has an entry here, so unfinished cards never publish as thin pages.
//
// Fields (all plain text; blank lines start a new paragraph):
//   keywords   { upright: [...], reversed: [...] }
//   yesNo      { upright: 'Yes'|'No'|'Maybe', reversed: ..., note }
//   overview   what the card is about, in plain language
//   imagery    what's on the classic Rider–Waite–Smith card and why it matters
//   upright    { general, love, career, money }
//   reversed   { general, love, career, money }
//   inReading  how it reads in different positions / next to other cards
//   pairs      [{ with: 'Card Name', text }]   notable combinations
//   reviewed   true once N has read and edited it (drafts show nothing different publicly;
//              this is for your own tracking)

import {MAJORS_1} from './card-content-majors-1.mjs';
import {MAJORS_2} from './card-content-majors-2.mjs';
import {WANDS} from './card-content-wands.mjs';

export const CONTENT = {
  ...MAJORS_1,
  ...MAJORS_2,
  ...WANDS,
  'the-fool': {
    reviewed: false,
    keywords: {
      upright: ['new beginnings', 'curiosity', 'a leap of faith', 'openness', 'beginner’s mind'],
      reversed: ['recklessness', 'hesitation', 'poor timing', 'naivety', 'fear of starting'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, The Fool leans yes, especially for anything new: a move, a class, a first date, a project you keep circling. It is a yes to trying, not a promise about the outcome. Reversed, it becomes a “not like this”: the idea may be fine, but the plan, timing or preparation needs another look first.',
    },
    overview: `The Fool is card zero, the beginning of the Major Arcana and the one card that stands outside the numbered sequence. Traditionally the rest of the major cards are read as the Fool’s journey: every lesson from the Magician to the World is something this traveler meets along the road.

That is why the card is less about foolishness than about openness. The Fool has not learned what is supposed to be impossible yet. When this card appears, a reading usually points to a threshold: something is starting, or wants to start, and the main question is whether you will meet it with curiosity or talk yourself out of it before you begin.`,
    imagery: `On the classic Rider–Waite–Smith card, a young traveler stands at the edge of a cliff, face turned up toward the sky, a small bundle on a stick over one shoulder and a white rose in the other hand. A small white dog jumps at their heels. The sun is bright and the mountains behind are far away.

Each detail pulls in two directions. The cliff edge is real danger, yet the figure is relaxed rather than reckless. The light bundle suggests carrying only what is needed. The white rose is often read as innocence and pure intention, and the dog as instinct: a companion that either warns or cheers on. Readers disagree about whether the Fool is about to fall or about to fly, and that ambiguity is the point of the card.`,
    upright: {
      general: `Upright, The Fool says yes to beginnings. It often appears when you are standing at the start of something with no guarantee about how it will go: a new job, a new city, a creative project, a change in how you live. The card does not ask you to be fearless. It asks you to take the first real step and learn from what happens, instead of waiting until you feel completely ready. Small, honest experiments are its native language.`,
      love: `In love, The Fool points to freshness: a new connection, or new energy in an existing one. For someone single, it can describe meeting people without a script and enjoying the not-knowing. In a relationship, it can invite play, travel or trying something together for the first time. It is a light card rather than a commitment card, so it pairs best with questions about openness rather than “is this the one?”`,
      career: `For work, The Fool favors starting: a career change, a first job, a side project, a class in something you have never studied. It can describe being the newest person in the room and learning fast. The practical advice is to protect the experiment: keep the stakes manageable, ask questions freely, and treat early mistakes as information rather than verdicts.`,
      money: `With money, The Fool is cheerful but not careful by nature. It can encourage a new income stream or a fresh approach to budgeting. It is less friendly to large, unresearched risks. A good reading of this card in money matters is: start small, keep what you can afford to lose separate from what you cannot, and check the cliff edge before stepping off.`,
    },
    reversed: {
      general: `Reversed, The Fool can tip either way: too fast or too frozen. Sometimes it describes rushing into something because waiting feels unbearable, mistaking urgency for freedom. Other times it describes the opposite, a fear of starting so strong that nothing new gets tried at all. Either way, the card asks you to slow down long enough to see which one is happening, and to make the next step smaller rather than abandoning it.`,
      love: `In love, the reversed Fool can point to impulsive decisions, mixed signals, or someone who enjoys the start of things more than the middle. It can also describe holding back from connection because getting it wrong feels too risky. Ask what you actually want, and whether your pace matches the other person’s.`,
      career: `At work, it may flag a leap without a landing plan: quitting before saving, launching before testing, saying yes to everything. Or it may show a stalled start, the application never sent. The fix in both cases is the same: a clear, modest next step with a date on it.`,
      money: `Financially, the reversed Fool warns against get-rich-quick thinking, impulse purchases and “it will probably work out” logic. Write down the actual numbers before deciding. If fear is the issue instead, look for one low-risk move that builds confidence.`,
    },
    inReading: `As an outcome card, The Fool rarely means “everything is settled.” It usually means a new chapter opens and what happens next depends on what you do with it. In a past position, it can describe the hopeful beginning of a situation that has since grown complicated. Surrounded by many Pentacles, its leap becomes practical and grounded; beside a lot of Swords, the card reminds you to think before stepping.

If you pull The Fool as advice, the message is usually simple: begin, and keep it light enough that you can learn as you go.`,
    pairs: [
      { with: 'The Magician', text: 'An idea plus the skills to start it. A strong signal to move from thinking to doing.' },
      { with: 'The World', text: 'The beginning and end of the Major Arcana together: one cycle is finishing as another opens.' },
      { with: 'Eight of Pentacles', text: 'A beginner willing to practice. Learning a craft from scratch.' },
    ],
  },

  'death': {
    reviewed: false,
    keywords: {
      upright: ['endings', 'transformation', 'letting go', 'transition', 'clearing space'],
      reversed: ['resisting change', 'stagnation', 'lingering', 'fear of endings', 'slow transition'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'Death is usually read as “no” to keeping something the way it is, and “yes” to change. If your question is “will this continue as it is?” the answer leans no. If it is “is it time to move on?” the card leans yes. It is one of the clearest examples of why yes-or-no tarot depends on how you phrase the question.',
    },
    overview: `Death is the thirteenth card of the Major Arcana and probably the most misunderstood card in tarot. Despite its name and imagery, readers almost never treat it as a prediction of physical death. Its traditional meaning is an ending that makes room for something else: a chapter closing, a habit falling away, an identity you have outgrown.

The card can feel heavy because endings are heavy, even good ones. But in most readings Death is not a disaster card (that is closer to The Tower’s territory). It describes a natural, often inevitable transition. Something has run its course, and the question is how gracefully you let it go.`,
    imagery: `In the Rider–Waite–Smith deck, Death is a skeleton in black armor riding a white horse and carrying a black banner marked with a white five-petaled rose. A king has fallen beneath the horse; a bishop stands with hands pressed together; a woman turns away and a child looks on. In the distance, a sun rises between two towers.

Every rank of person meets Death the same way. The king’s crown is no protection, which is why the card is read as an ending no one can bargain with. Yet the rising sun on the horizon, and the white rose on the banner, are signs of renewal. The card holds both truths at once: something is over, and day still comes.`,
    upright: {
      general: `Upright, Death signals an ending that is ready to happen or already underway. It may be a job, a relationship pattern, a living situation or a belief about yourself. The card tends to appear when holding on has become more tiring than letting go. Its advice is to grieve what deserves grieving, close what needs closing, and stop spending energy on keeping a finished thing alive. Clearing the ground is not the same as knowing what will grow there, and that is all right.`,
      love: `In love, Death can describe a relationship ending, but just as often it describes the end of one version of a relationship: the honeymoon phase giving way to something deeper, or a couple leaving behind an old pattern of conflict. For someone single, it may point to finally releasing a past relationship so a new one has room.`,
      career: `At work, Death often points to restructuring, a role ending, or a clear sense that you have outgrown a position. It can be unsettling in the moment and freeing in hindsight. Use it as a prompt to plan the transition rather than wait for it to be decided for you.`,
      money: `Financially, the card suggests ending a draining pattern: a subscription you never use, a debt habit, a business line that costs more than it earns. Some people pull it during a job transition. Focus on what to stop, cleanly and deliberately.`,
    },
    reversed: {
      general: `Reversed, Death usually describes resistance. The ending is still happening, but you are holding the door shut. That can look like staying in a role long after it stopped fitting, replaying an old relationship, or refusing to change a routine that clearly is not working. Reversed Death can also describe a slow, drawn-out transition. The card asks what you are afraid would happen if you allowed the change, and whether staying put is costing more than you think.`,
      love: `In love, the reversed card often points to lingering: on-again, off-again patterns, or a connection kept alive out of fear of being alone. It invites an honest look at whether hope or habit is doing the work.`,
      career: `At work, it may describe stagnation, a job you have quietly left in spirit, or change being forced on you because it was avoided. Small steps toward the exit, or toward renewal in place, can ease the pressure.`,
      money: `With money, reversed Death can show clinging to a strategy, possession or spending pattern that no longer serves you. Ask what letting it go would actually free up.`,
    },
    inReading: `Death in a past position often explains why a situation feels new and unsteady: something important ended recently. In a future or outcome position, it suggests the question itself may be resolved by an ending rather than a fix. Next to hopeful cards such as The Star or the Ace of Cups, it reads as renewal after loss. Next to The Tower, change is likely sudden as well as final.

Many readers find it helpful to reframe the card as a question: what is already over, and what am I still carrying because I have not admitted it?`,
    pairs: [
      { with: 'The Star', text: 'Healing after an ending. Hope returning once the old situation is truly closed.' },
      { with: 'Eight of Cups', text: 'Walking away by choice. Leaving something that is no longer emotionally fulfilling.' },
      { with: 'The Tower', text: 'A sudden, decisive ending. Change that cannot be postponed.' },
    ],
  },

  'the-tower': {
    reviewed: false,
    keywords: {
      upright: ['sudden change', 'upheaval', 'revelation', 'collapse of illusions', 'breakthrough'],
      reversed: ['avoided disaster', 'delayed change', 'fear of upheaval', 'inner shake-up', 'resisting truth'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'No',
      note: 'The Tower is a strong “no” to stability and the status quo: whatever was built on a weak foundation is unlikely to hold. Reversed, it is still usually no, with the added message that delaying the change only makes it harder.',
    },
    overview: `The Tower is card sixteen of the Major Arcana and the deck’s symbol of sudden change. Where Death describes an ending that unfolds naturally, The Tower is the lightning strike: news, a revelation or an event that shakes something you thought was solid.

It is a confronting card, but not a cruel one. Traditionally, the tower in the image was built on pride or false assumptions, so its fall is also a release. Many people look back on Tower moments as the point where a truth finally became impossible to ignore, and where rebuilding on something more honest became possible.`,
    imagery: `The Rider–Waite–Smith Tower is a tall stone tower on a rocky peak, struck at the top by lightning. Its golden crown is knocked off, flames pour from the windows, and two figures fall headfirst through a dark sky. Small sparks, sometimes drawn as Hebrew yods, fall around them like rain.

The crown represents the top of a structure: pride, a belief or an arrangement that seemed untouchable. The lightning comes from outside, a reminder that this kind of change is rarely chosen. The falling figures are not shown hurt, only falling, and many readers see the yods as divine grace, small sparks of insight that come with the shock.`,
    upright: {
      general: `Upright, The Tower describes sudden disruption or a sharp revelation. It may be an event you did not see coming, or a truth that has finally broken through. The card is a warning that something built on a shaky foundation is unlikely to last, and often a reassurance that what falls was not as stable as it looked. In the moment, focus on safety and basics. Afterward, the card’s gift is clarity: you can rebuild knowing what is real.`,
      love: `In love, The Tower can mean an argument that changes everything, a secret coming to light, or a sudden end. It can also mean a breakthrough: an honest conversation that breaks a long stalemate. Either way, it asks you to deal with what is true now, not with the relationship you hoped you were in.`,
      career: `At work, it can point to layoffs, a restructure, a project collapsing or a realization that you can no longer stay. It favors flexible plans and a steady emergency fund. It also often marks the shake-up that leads to better-suited work.`,
      money: `Financially, The Tower urges caution with risky positions and over-leveraged plans. Unexpected expenses are a classic association. Strengthen your safety net where you can and avoid decisions made in panic.`,
    },
    reversed: {
      general: `Reversed, The Tower often describes a change you are trying to hold off, or an upheaval happening inside rather than around you. You may sense something has to give but keep patching the cracks. Sometimes it shows a disaster narrowly avoided, or a smaller crisis that arrives instead of a larger one. The card’s advice is to make the change voluntarily while you still have choices about how it happens.`,
      love: `In love, it can show avoiding a necessary conversation, or tension that keeps simmering because no one names it. Choosing honesty now can prevent a bigger rupture later.`,
      career: `At work, you may see trouble coming and hope it passes. Use the warning to update your résumé, raise the concern, or plan a transition before the decision is made for you.`,
      money: `With money, reversed Tower can mean dodging a financial reckoning. Opening the statement you have been avoiding is usually the first step.`,
    },
    inReading: `In a past position, The Tower often explains why someone is cautious or guarded now. As an outcome, it suggests the current path leads to a shake-up, which is useful information while there is still time to choose differently. Next to The Star, it reads as recovery after upheaval; beside the Ten of Swords, it emphasizes that the worst point is likely the turning point.

When The Tower appears as advice, it can mean: stop propping up what is already cracked.`,
    pairs: [
      { with: 'The Star', text: 'The classic recovery sequence: upheaval, then hope and healing.' },
      { with: 'Death', text: 'A sudden and final ending. Little point trying to return to the old situation.' },
      { with: 'Ace of Swords', text: 'A revelation. The truth arrives suddenly and changes how you see everything.' },
    ],
  },

  'three-of-cups': {
    reviewed: false,
    keywords: {
      upright: ['friendship', 'celebration', 'community', 'shared joy', 'reunion'],
      reversed: ['overindulgence', 'gossip', 'social fatigue', 'feeling left out', 'a third party'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Three of Cups is a cheerful yes, especially for anything involving friends, events, or other people’s support. Reversed, it becomes a maybe: check whether the social side of the situation is as healthy as it looks.',
    },
    overview: `The Three of Cups is the card of friendship and celebration. Where the Two of Cups is about a bond between two people, the Three widens the circle: friends, chosen family, teammates, the people who show up. It often appears around gatherings such as birthdays, weddings, reunions and parties, but its deeper meaning is mutual support.

In a reading, it reminds you that you do not have to carry everything alone. Joy grows when it is shared, and so does resilience. The card asks who your people are, and whether you are letting them in.`,
    imagery: `On the Rider–Waite–Smith card, three women in flowing robes dance in a circle, raising golden cups toward each other in a toast. They wear garlands; pumpkins, grapes and fruit lie at their feet.

The circle has no leader, which is often read as equality and reciprocity in friendship. The harvest at their feet links the celebration to something earned: they are marking a good season together. The raised cups suggest shared emotion, the Cups suit’s element of water poured into connection.`,
    upright: {
      general: `Upright, the Three of Cups describes connection, community and good times with others. It can point to a celebration, a reunion or simply a stretch of feeling supported. It also encourages you to reach out: a message to an old friend, joining a group, saying yes to the invitation. If you have been isolated, the card is a nudge toward people who make life lighter.`,
      love: `In love, it brings warmth and fun: a relationship that blends well with friends, a celebration as a couple, or meeting someone through your social circle. For singles, it suggests that socializing, not searching, is where connection is likely to come from.`,
      career: `At work, the card favors teamwork, collaboration and celebrating milestones. It can point to a supportive team or networking that feels natural. Credit shared generously tends to come back.`,
      money: `Financially, it is mostly positive: a shared win, a group venture or simply money spent on good times. Just keep celebration spending in proportion.`,
    },
    reversed: {
      general: `Reversed, the Three of Cups can point to a social life that has tipped out of balance: too much partying, gossip, cliques, or the tiredness of always being “on.” It can also describe feeling left out, or friendships that drift because no one makes the effort. The card asks which connections are genuinely nourishing, and which you keep up out of habit.`,
      love: `In love, the reversed card is famous for “three’s a crowd”: interference from friends or family, or, less often, a third person in the picture. Before assuming the worst, look at what boundaries the relationship needs.`,
      career: `At work, it can flag office politics, gossip or a team that socializes well but does not deliver. Keep your focus on the shared goal.`,
      money: `Financially, watch for overspending on going out, or money tensions inside a friend group. Clear agreements help.`,
    },
    inReading: `In a past position, the Three of Cups often points to a supportive community that shaped the present. As an outcome, it suggests a reason to celebrate. Next to the Ten of Cups, family and friendship blend together. Next to the Five of Pentacles, it reminds you that help is available if you ask for it.

As advice, the message is usually: call your people.`,
    pairs: [
      { with: 'Two of Cups', text: 'A relationship that fits well with your wider circle of friends and family.' },
      { with: 'Four of Wands', text: 'A celebration or gathering. Weddings, housewarmings and milestones are classic readings.' },
      { with: 'Seven of Swords', text: 'Gossip or a friend who is not being fully honest. Look closely at who you confide in.' },
    ],
  },

  'ten-of-swords': {
    reviewed: false,
    keywords: {
      upright: ['rock bottom', 'painful ending', 'exhaustion', 'betrayal', 'the worst is over'],
      reversed: ['recovery', 'survival', 'refusing to let go', 'lingering pain', 'slow healing'],
    },
    yesNo: {
      upright: 'No',
      reversed: 'Maybe',
      note: 'The Ten of Swords is one of the clearest “no” cards in the deck: whatever you are asking about has reached its end in its current form. Reversed, it softens to a maybe, as recovery begins, provided you stop reopening the wound.',
    },
    overview: `The Ten of Swords is the end of the Swords suit and its most dramatic image. It describes a painful conclusion: the point where a difficult situation finally hits bottom. It often shows up after a long stretch of worry, conflict or disappointment.

Despite how it looks, readers often see a hidden mercy in it. Ten is the end of a cycle. Once something has truly finished, it cannot get worse in the same way. The card acknowledges real pain and then gently points out that the dark sky in the picture is already lightening.`,
    imagery: `The Rider–Waite–Smith card shows a figure lying face down on the ground with ten swords in their back. A red cloth covers part of the body, the sky above is black, and on the horizon a band of yellow light rises over calm water.

The ten swords are clearly excessive, which many readers take as a sign of exaggeration: the mind piling on more pain than the situation alone demands. The calm water and the dawn on the horizon are the card’s counterweight. The worst has happened, and the next day is already arriving.`,
    upright: {
      general: `Upright, the Ten of Swords describes reaching the end of something painful: a betrayal, a collapse, burnout, or a situation that simply cannot continue. It names exhaustion honestly and does not ask you to pretend it is fine. Its advice is to stop fighting a battle that is already over, accept help, rest, and let the ending be an ending. Recovery starts the moment you stop reopening the wound.`,
      love: `In love, it can describe a painful breakup or the moment you realize a relationship is beyond repair. It may also point to feeling betrayed. The card encourages you to allow grief and to stop rehashing what happened in search of a different ending.`,
      career: `At work, it can show burnout, a job loss or a project collapsing. It is a strong signal to rest and to stop pushing through on willpower alone. The next chapter will need you rested.`,
      money: `Financially, it may point to a loss or reaching the end of your reserves. Focus on stabilizing basics and asking for help or advice rather than trying to fix everything at once.`,
    },
    reversed: {
      general: `Reversed, the Ten of Swords often signals that recovery has begun. You are getting back on your feet, slowly. It can also describe the opposite: refusing to let a painful chapter end, replaying it or reopening it so the healing never quite starts. The card asks which of these is true for you, and what one small act of recovery you can choose today.`,
      love: `In love, it may show healing after heartbreak, or getting stuck in the story of what went wrong. Being careful about who and what keeps the wound open helps.`,
      career: `At work, it can point to rebuilding after a setback, or to staying in a draining situation out of fear. Take one practical step toward recovery.`,
      money: `With money, reversed Ten of Swords suggests slowly digging out of a hole. Steady, unglamorous habits matter more than any single big fix.`,
    },
    inReading: `In a past position, the Ten of Swords explains why someone may be guarded: they went through something genuinely hard. As an outcome, it suggests the current path ends painfully unless something changes, which makes it valuable as a warning. Next to The Star or the Six of Swords, it reads as moving on and healing. Next to the Nine of Swords, the suffering may be amplified by worry and replaying events at night.`,
    pairs: [
      { with: 'Six of Swords', text: 'Leaving a painful situation behind and moving toward calmer waters.' },
      { with: 'The Sun', text: 'The night really is over. A full turnaround after a difficult period.' },
      { with: 'Nine of Swords', text: 'Pain intensified by anxiety. Rest and support, not more analysis, help most.' },
    ],
  },

  'queen-of-wands': {
    reviewed: false,
    keywords: {
      upright: ['confidence', 'warmth', 'charisma', 'independence', 'creative leadership'],
      reversed: ['self-doubt', 'jealousy', 'burnout', 'demanding', 'dimming your light'],
    },
    yesNo: {
      upright: 'Yes',
      reversed: 'Maybe',
      note: 'Upright, the Queen of Wands is a confident yes, especially when the question depends on you showing up boldly. Reversed, it is a maybe: the opportunity may be real, but confidence or energy needs attention first.',
    },
    overview: `The Queen of Wands is the warm, magnetic leader of the Wands suit. Queens in tarot represent mastery of their suit’s energy turned inward and outward with care, and in Wands that energy is fire: passion, creativity and drive. She is confident without needing approval, sociable without losing herself, and excellent at bringing other people along.

When she appears, she may describe a person in your life who fits that description, or a quality you are being asked to step into. Either way, she brings a clear message: take up space, and let your enthusiasm lead.`,
    imagery: `On the Rider–Waite–Smith card, the queen sits on a throne decorated with lions, holding a tall wand in one hand and a sunflower in the other. A black cat sits at her feet. She faces forward, open and steady.

The lions and the sunflower link her to the sun, vitality and warmth. The wand shows that her power is active, not decorative. The black cat is often read as intuition and independence, a hint that her warmth is paired with a private, self-possessed side.`,
    upright: {
      general: `Upright, the Queen of Wands encourages confidence, visibility and warmth. It is a good time to share your ideas, take the lead on something you care about, or simply be more openly yourself. She also models balance: passionate but organized, social but self-possessed. If you have been playing small, she suggests the people around you would welcome more of you, not less.`,
      love: `In love, she brings attraction, playfulness and confidence. For someone single, being openly enthusiastic about your own life is the most attractive thing you can do. In a relationship, she encourages warmth, fun and honest expression of desire.`,
      career: `At work, she points to leadership, creative initiative and being recognized. She favors pitching ideas, managing projects with energy, and roles where personality matters. She can also describe a supportive female mentor or leader.`,
      money: `Financially, she favors confidence in your earning power, perhaps asking for the rate you deserve or putting energy into a creative income stream, while staying organized enough to follow through.`,
    },
    reversed: {
      general: `Reversed, the Queen of Wands often signals a dimmed flame: self-doubt, exhaustion, or feeling invisible. She can also show the shadow side of her energy: jealousy, a need for attention, or warmth that turns demanding. The card asks what has drained your confidence and what would refill it, whether rest, a creative outlet, or people who actually energize you.`,
      love: `In love, reversed, she can point to insecurity, jealousy or comparing yourself to others. Rebuilding your own sense of worth tends to help more than seeking reassurance.`,
      career: `At work, she may show burnout from carrying too much, or frustration at not being seen. Delegate, and make your contributions visible in a sustainable way.`,
      money: `Financially, watch for spending to boost mood or image. Confidence comes back more reliably from small wins than from purchases.`,
    },
    inReading: `As a person card, the Queen of Wands can describe anyone (of any gender) who is confident, warm and energetic. As advice, she says: lead with enthusiasm. Next to the Sun, her energy is especially bright and successful; next to the Five of Wands, she may be navigating competition or strong personalities. Many Wands cards around her suggest a high-energy period that will need pacing.`,
    pairs: [
      { with: 'The Sun', text: 'Confidence rewarded. Visibility, joy and success.' },
      { with: 'Six of Wands', text: 'Public recognition for your work and leadership.' },
      { with: 'Ten of Wands', text: 'Doing too much alone. Even a strong leader needs to delegate.' },
    ],
  },
};
