import {DECK,POSITIONS,drawDeck,yesNo,YES_NO_WORD} from './deck.mjs';
// Tarot Learning Guide — phone-first card game: daily card, tap-to-flip spread, collection, streaks.
// Everything celebratory is tied to something real (a new card, a streak day, a finished reading).

const $ = id => document.getElementById(id);
const store = {
  get(k, d) { try { const v = localStorage.getItem('tlg:' + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem('tlg:' + k, JSON.stringify(v)); } catch {} },
};
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const state = {config: {enabled: false, freeEnabled: false}, topic: 'love', mode: 'spread', ynCard: null, reading: null, revealed: 0, bonusRevealed: 0,
  busy: false, order: null, visitorToken: null, widgetId: null, remaining: 3, pages: new Set(), sound: store.get('sound', true)};

const labels = {love: 'Love', career: 'Career', money: 'Money', other: 'Life'};
const lens = {
  love: 'Think about what has actually been said and shown, not only what you hope or fear.',
  career: 'Think about one practical step that is within your control this week.',
  money: 'Check real numbers before any big money decision.',
  other: 'Connect it to something you can actually observe or choose.',
};
const placeholders = {love: 'What should I know about this connection?', career: 'What should I consider about my next move at work?',
  money: 'What should I notice about my money habits right now?', other: 'What do I need to see more clearly?'};
const positionPrompt = [
  'This is where things stand right now.',
  'This is the force shaping the situation, often from the background.',
  'This is the challenge: the knot to work with, not a verdict.',
  'This is a helpful next step to try.',
  'This is one possible direction if things continue as they are.',
];
const suitInfo = {
  'Major Arcana': {emoji: '✦', cls: 'major', energy: 'big life lessons'},
  Wands: {emoji: '🔥', cls: 'wands', energy: 'drive, passion and action'},
  Cups: {emoji: '💧', cls: 'cups', energy: 'feelings and relationships'},
  Swords: {emoji: '⚔️', cls: 'swords', energy: 'thoughts, decisions and conflict'},
  Pentacles: {emoji: '🪙', cls: 'pentacles', energy: 'money, work and everyday life'},
};
const majorEmoji = ['🎒','🪄','🌙','🌾','👑','🔑','💞','🏇','🦁','🏮','☸️','⚖️','🙃','🦋','⚗️','⛓️','⚡','⭐','🌕','☀️','📯','🌍'];
const roman = ['0','I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII','XIII','XIV','XV','XVI','XVII','XVIII','XIX','XX','XXI'];
const rankShort = {Ace: 'A', Two: '2', Three: '3', Four: '4', Five: '5', Six: '6', Seven: '7', Eight: '8', Nine: '9', Ten: '10', Page: 'P', Knight: 'Kn', Queen: 'Q', King: 'K'};
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const cardUrl = c => state.pages.has(slug(c.name)) ? `/cards/${slug(c.name)}` : `/card-meanings#${slug(c.name)}`;
const meaning = c => c.reversedCard ? c.reversed : c.upright;
const today = () => new Date().toLocaleDateString('en-CA');
const yesterday = () => { const d = new Date(); d.setDate(d.getDate() - 1); return d.toLocaleDateString('en-CA'); };

function el(tag, cls, text) { const n = document.createElement(tag); if (cls) n.className = cls; if (text !== undefined) n.textContent = text; return n; }
function status(text) { $('status').textContent = text; }

// ---------------------------------------------------------------- heavy questions
// The cards can't know whether "yes" is good news. For serious questions, celebrations switch off
// and a short, kind note appears instead.
const CRISIS = /\b(suicid\w*|kill (my|him|her)self|end (my|it all)|self[- ]?harm|hurt(ing)? myself|want to die|don'?t want to (live|be here))\b/i;
const HEAVY = /\b(cheat\w*|affair|unfaithful|divorc\w*|break ?up|leav(e|ing) me|pregnan\w*|miscarr\w*|cancer|tumou?r|sick|illness|diagnos\w*|surgery|hospital|die|dying|death|dead|pass away|abus\w*|hit me|court|custody|lawsuit|arrest\w*|jail|prison|evict\w*|fired|laid off|debt|bankrupt\w*)\b/i;
const isHeavy = q => HEAVY.test(q || '') || CRISIS.test(q || '');
function careNote(q) {
  if (CRISIS.test(q || '')) return 'If you’re thinking about hurting yourself, please reach out now: call or text 988 (Suicide & Crisis Lifeline, US) anytime, or text HOME to 741741. You deserve real support, not just cards.';
  if (HEAVY.test(q || '')) return 'Cards can’t confirm what another person is doing or how a serious situation will turn out. Take this as something to reflect on, and lean on facts and people you trust for the real answer.';
  return '';
}
state.quiet = false; // true while showing a reading for a heavy question

// ---------------------------------------------------------------- feedback
let audio;
function tone(freqs, dur = 0.12, gap = 0.07, vol = 0.05) {
  if (!state.sound) return;
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    freqs.forEach((f, i) => {
      const o = audio.createOscillator(), g = audio.createGain(), t = audio.currentTime + i * gap;
      o.type = 'sine'; o.frequency.value = f;
      g.gain.setValueAtTime(0, t); g.gain.linearRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
      o.connect(g).connect(audio.destination); o.start(t); o.stop(t + dur + 0.02);
    });
  } catch {}
}
const buzz = p => { try { navigator.vibrate?.(p); } catch {} };
const sounds = {
  flip: () => { tone([660, 990], 0.14, 0.06); buzz(18); },
  newCard: () => { tone([784, 988, 1319], 0.18, 0.08, 0.06); buzz([20, 40, 20]); },
  win: () => { if (state.quiet) { tone([523, 659], 0.2, 0.1, 0.04); return; } tone([523, 659, 784, 1047, 1319], 0.22, 0.09, 0.07); buzz([30, 50, 30, 50, 60]); },
  reveal: () => { tone([440, 554, 659], 0.3, 0.12, 0.045); buzz(25); },
  tap: () => { tone([520], 0.06, 0, 0.03); buzz(8); },
};

// confetti / sparkles on a canvas
const fx = {parts: [], running: false};
function burst(x, y, n = 40, spread = 1) {
  if (reduceMotion || state.quiet) return;
  const colors = ['#ffd36e', '#ff7ac6', '#a98bff', '#7ee0ff', '#ffffff'];
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, v = (2 + Math.random() * 6) * spread;
    fx.parts.push({x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 3, life: 60 + Math.random() * 40, size: 3 + Math.random() * 5,
      color: colors[i % colors.length], star: Math.random() < 0.35, rot: Math.random() * 6});
  }
  if (!fx.running) { fx.running = true; requestAnimationFrame(tick); }
}
function burstFrom(node, n, spread) { const r = node.getBoundingClientRect(); burst(r.left + r.width / 2, r.top + r.height / 2, n, spread); }
function confetti() { const w = innerWidth; [0.2, 0.5, 0.8].forEach((p, i) => setTimeout(() => burst(w * p, innerHeight * 0.35, 60, 1.4), i * 150)); }
function tick() {
  const c = $('fx'), ctx = c.getContext('2d'), dpr = devicePixelRatio || 1;
  if (c.width !== innerWidth * dpr) { c.width = innerWidth * dpr; c.height = innerHeight * dpr; }
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, innerWidth, innerHeight);
  fx.parts = fx.parts.filter(p => p.life-- > 0);
  for (const p of fx.parts) {
    p.vy += 0.18; p.vx *= 0.99; p.x += p.vx; p.y += p.vy; p.rot += 0.1;
    ctx.globalAlpha = Math.min(1, p.life / 30); ctx.fillStyle = p.color;
    ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.rot);
    if (p.star) { ctx.beginPath(); for (let k = 0; k < 5; k++) { ctx.lineTo(0, -p.size); ctx.rotate(Math.PI / 5); ctx.lineTo(0, -p.size / 2.4); ctx.rotate(Math.PI / 5); } ctx.fill(); }
    else ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    ctx.restore();
  }
  if (fx.parts.length) requestAnimationFrame(tick); else { fx.running = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
}
let toastTimer;
function toast(text, kind = '') {
  const t = $('toast'); t.textContent = text; t.className = `toast show ${kind}`;
  clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.className = 'toast'; }, 2600);
}


// ---------------------------------------------------------------- share images (story size, 1080×1920)
const SUIT_GRAD = {major: ['#3b1a6e', '#6d28d9'], wands: ['#5a1e0e', '#c2410c'], cups: ['#0c2f5a', '#2563eb'], swords: ['#111827', '#64748b'], pentacles: ['#123d2a', '#15803d']};
function roundRect(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); }
function wrap(ctx, text, x, y, maxW, lh, maxLines = 4) {
  const words = text.split(' '); let line = '', lines = [];
  for (const w of words) { const t = line ? line + ' ' + w : w; if (ctx.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }
  if (line) lines.push(line);
  if (lines.length > maxLines) { lines = lines.slice(0, maxLines); lines[maxLines - 1] += '…'; }
  lines.forEach((l, i) => ctx.fillText(l, x, y + i * lh)); return y + lines.length * lh;
}
function drawFace(ctx, card, x, y, w, h) {
  const info = suitInfo[card.suit], [c1, c2] = SUIT_GRAD[info.cls];
  ctx.save(); ctx.shadowColor = '#0009'; ctx.shadowBlur = w * 0.12; ctx.shadowOffsetY = w * 0.04;
  roundRect(ctx, x, y, w, h, w * 0.09); const g = ctx.createLinearGradient(x, y, x + w, y + h); g.addColorStop(0, c1); g.addColorStop(1, c2); ctx.fillStyle = g; ctx.fill(); ctx.restore();
  ctx.save(); roundRect(ctx, x, y, w, h, w * 0.09); ctx.lineWidth = Math.max(3, w * 0.025); ctx.strokeStyle = '#ffd36e'; ctx.stroke();
  ctx.translate(x + w / 2, y + h / 2); if (card.reversedCard) ctx.rotate(Math.PI);
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.font = `${w * 0.36}px serif`; ctx.fillStyle = '#fff'; ctx.fillText(card.id < 22 ? majorEmoji[card.id] : info.emoji, 0, -h * 0.08);
  ctx.font = `600 ${w * 0.1}px Georgia, serif`; wrap(ctx, card.name, 0, h * 0.24, w * 0.86, w * 0.12, 2);
  const rank = card.id < 22 ? roman[card.id] : (rankShort[card.name.split(' of ')[0]] || '');
  ctx.font = `700 ${w * 0.09}px Georgia, serif`; ctx.fillStyle = '#ffd36e'; ctx.textAlign = 'left'; ctx.fillText(rank, -w * 0.4, -h * 0.42);
  ctx.restore();
}
async function shareImage({title, lines = [], cards = [], big = '', bigColor = '#ffd36e', text}) {
  const W = 1080, H = 1920, c = document.createElement('canvas'); c.width = W; c.height = H; const ctx = c.getContext('2d');
  const bg = ctx.createLinearGradient(0, 0, W * 0.3, H); bg.addColorStop(0, '#1b1030'); bg.addColorStop(0.55, '#2b1450'); bg.addColorStop(1, '#1a0f2e'); ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
  const glow = ctx.createRadialGradient(W / 2, 0, 0, W / 2, 0, W); glow.addColorStop(0, '#7c3aed66'); glow.addColorStop(1, '#7c3aed00'); ctx.fillStyle = glow; ctx.fillRect(0, 0, W, H);
  for (let i = 0; i < 140; i++) { ctx.globalAlpha = 0.25 + Math.random() * 0.6; ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(Math.random() * W, Math.random() * H, Math.random() * 2.4 + 0.4, 0, 7); ctx.fill(); }
  ctx.globalAlpha = 1; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#ffd36e'; ctx.font = '700 38px system-ui, sans-serif'; ctx.fillText('✦  TAROT LEARNING GUIDE  ✦', W / 2, 150);
  ctx.fillStyle = '#fff'; ctx.font = '600 76px Georgia, serif'; let y = wrap(ctx, title, W / 2, 270, W - 140, 86, 2);
  ctx.font = 'italic 44px Georgia, serif'; ctx.fillStyle = '#e9dcf8'; for (const l of lines) y = wrap(ctx, l, W / 2, y + 20, W - 160, 56, 3);
  if (cards.length === 1) {
    const w = 460, h = w * 5 / 3; drawFace(ctx, cards[0].card, (W - w) / 2, y + 60, w, h); y += 60 + h;
  } else if (cards.length) {
    const w = 270, h = w * 5 / 3, gap = 40, top = y + 70;
    cards.forEach(({card, label}, i) => {
      const row = i < 3 ? 0 : 1, inRow = row === 0 ? Math.min(3, cards.length) : cards.length - 3, col = row === 0 ? i : i - 3;
      const x = (W - (inRow * w + (inRow - 1) * gap)) / 2 + col * (w + gap), yy = top + row * (h + 110);
      ctx.fillStyle = '#d9c9ef'; ctx.font = '600 30px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.fillText(label, x + w / 2, yy - 18);
      drawFace(ctx, card, x, yy, w, h);
    });
    y = top + 2 * (h + 110) - 60;
  }
  if (big) { ctx.fillStyle = bigColor; ctx.font = '800 170px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.shadowColor = bigColor; ctx.shadowBlur = 40; ctx.fillText(big, W / 2, Math.min(y + 210, H - 330)); ctx.shadowBlur = 0; }
  const by = H - 230; const cg = ctx.createLinearGradient(140, by, W - 140, by + 130); cg.addColorStop(0, '#ffe08a'); cg.addColorStop(0.55, '#ffb347'); cg.addColorStop(1, '#ff7ac6');
  roundRect(ctx, 120, by, W - 240, 130, 40); ctx.fillStyle = cg; ctx.fill();
  ctx.fillStyle = '#2b1450'; ctx.font = '800 44px system-ui, sans-serif'; ctx.textAlign = 'center'; ctx.fillText('Flip your own cards free', W / 2, by + 60);
  ctx.font = '700 36px system-ui, sans-serif'; ctx.fillText(location.host || 'tarotlearningguide.com', W / 2, by + 108);
  const blob = await new Promise(r => c.toBlob(r, 'image/png'));
  const file = new File([blob], 'my-tarot-reading.png', {type: 'image/png'});
  const shareText = `${text}\n${location.origin || 'https://tarotlearningguide.com'}`;
  try {
    if (navigator.canShare?.({files: [file]})) { await navigator.share({files: [file], text: shareText, title: 'My tarot reading'}); return; }
  } catch (e) { if (e.name === 'AbortError') return; }
  const url = URL.createObjectURL(blob), a = el('a'); a.href = url; a.download = file.name; a.click(); setTimeout(() => URL.revokeObjectURL(url), 2000);
  toast('🖼️ Image saved! Post it to your story.');
}

// ---------------------------------------------------------------- card faces
function faceContent(card) {
  const info = suitInfo[card.suit];
  const node = el('span', `face-art ${info.cls}${card.reversedCard ? ' rev' : ''}`);
  const rank = card.id < 22 ? roman[card.id] : (rankShort[card.name.split(' of ')[0]] || '');
  node.append(el('span', 'rank', rank), el('span', 'symbol', card.id < 22 ? majorEmoji[card.id] : info.emoji),
    el('span', 'fname', card.name), el('span', 'rank bottom', rank));
  return node;
}
function flipCard(card, label) {
  const b = el('button', 'flip-card'); b.type = 'button'; b.setAttribute('aria-label', label);
  const inner = el('span', 'flip-inner'), back = el('span', 'face back'), front = el('span', 'face front');
  front.append(faceContent(card)); inner.append(back, front); b.append(inner);
  return b;
}

// ---------------------------------------------------------------- collection, streak, badges
const BADGES = [
  {id: 'first', name: 'First flip', icon: '🌟', test: s => s.size >= 1},
  {id: 'ten', name: '10 cards', icon: '🎴', test: s => s.size >= 10},
  {id: 'majors', name: 'All 22 Major Arcana', icon: '👑', test: s => DECK.slice(0, 22).every(c => s.has(c.id))},
  {id: 'wands', name: 'Every Wand', icon: '🔥', test: s => DECK.filter(c => c.suit === 'Wands').every(c => s.has(c.id))},
  {id: 'cups', name: 'Every Cup', icon: '💧', test: s => DECK.filter(c => c.suit === 'Cups').every(c => s.has(c.id))},
  {id: 'swords', name: 'Every Sword', icon: '⚔️', test: s => DECK.filter(c => c.suit === 'Swords').every(c => s.has(c.id))},
  {id: 'pentacles', name: 'Every Pentacle', icon: '🪙', test: s => DECK.filter(c => c.suit === 'Pentacles').every(c => s.has(c.id))},
  {id: 'deck', name: 'Full deck: all 78', icon: '🏆', test: s => s.size >= 78},
  {id: 'streak3', name: '3-day streak', icon: '🔥', test: (s, st) => st >= 3},
  {id: 'streak7', name: '7-day streak', icon: '💫', test: (s, st) => st >= 7},
  {id: 'streak30', name: '30-day streak', icon: '🌙', test: (s, st) => st >= 30},
];
const collection = new Set(store.get('collection', []));
function streakCount() { const s = store.get('streak', {last: null, count: 0}); return s.last === today() || s.last === yesterday() ? s.count : 0; }
function renderProgress() {
  $('collected').textContent = collection.size; $('streak').textContent = streakCount();
  $('collection-bar').style.setProperty('width', `${(collection.size / 78) * 100}%`);
  $('collection-progress').setAttribute('aria-valuenow', String(collection.size));
  const have = new Set(store.get('badges', []));
  $('badges').replaceChildren(...BADGES.filter(b => have.has(b.id)).map(b => el('span', 'badge', `${b.icon} ${b.name}`)));
}
function checkBadges() {
  const have = new Set(store.get('badges', [])), st = streakCount();
  if (state.quiet) return;
  for (const b of BADGES) if (!have.has(b.id) && b.test(collection, st)) {
    have.add(b.id); store.set('badges', [...have]);
    setTimeout(() => { toast(`${b.icon} Badge unlocked: ${b.name}!`, 'gold'); sounds.win(); confetti(); }, 900);
  }
}
function collect(card, node) {
  const isNew = !collection.has(card.id);
  if (isNew) {
    collection.add(card.id); store.set('collection', [...collection]);
    node.classList.add('is-new'); node.append(el('span', 'new-tag', 'NEW!'));
    setTimeout(() => { if (!state.quiet) { sounds.newCard(); burstFrom(node, 30, 0.8); toast(`✨ New card collected! ${collection.size}/78`); } }, 350);
  }
  renderProgress(); checkBadges();
  return isNew;
}

// ---------------------------------------------------------------- daily card
function daily() {
  const saved = store.get('daily', null);
  const done = saved && saved.date === today();
  const card = done ? {...DECK[saved.id], reversedCard: saved.rev} : null;
  const btn = $('daily-card');
  if (done) { $('daily-front').replaceChildren(faceContent(card)); btn.classList.add('flipped'); showDaily(card); return; }
  btn.classList.add('beckon');
  btn.addEventListener('click', () => {
    if (btn.classList.contains('flipped')) return;
    const c = drawDeck(true)[0];
    store.set('daily', {date: today(), id: c.id, rev: c.reversedCard});
    const s = store.get('streak', {last: null, count: 0});
    const count = s.last === today() ? s.count : s.last === yesterday() ? s.count + 1 : 1;
    store.set('streak', {last: today(), count});
    $('daily-front').replaceChildren(faceContent(c));
    state.quiet = false; btn.classList.remove('beckon'); btn.classList.add('flipped'); sounds.flip(); burstFrom(btn, 50, 1.1);
    setTimeout(() => { showDaily(c); collect(c, btn); if (count > 1) toast(`🔥 ${count}-day streak!`, 'gold'); }, 450);
  }, {once: false});
}
function showDaily(card) {
  $('daily-hint').hidden = true;
  $('daily-name').textContent = `${card.name}${card.reversedCard ? ' (reversed)' : ''}`;
  $('daily-meaning').textContent = meaning(card);
  $('daily-link').href = cardUrl(card);
  $('daily-result').hidden = false;
}

// ---------------------------------------------------------------- reading content
function practice(topic, question, reversals) {
  const deck = drawDeck(reversals).slice(0, 8);
  const main = deck.slice(0, 5);
  const counts = {}; main.forEach(c => { counts[c.suit] = (counts[c.suit] || 0) + 1; });
  const top = Object.entries(counts).filter(([s]) => s !== 'Major Arcana').sort((a, b) => b[1] - a[1])[0];
  const majors = counts['Major Arcana'] || 0, revs = main.filter(c => c.reversedCard).length;
  const insights = [];
  if (top && top[1] >= 2) insights.push(`${suitInfo[top[0]].emoji} Mostly ${top[0]}: this reading is about ${suitInfo[top[0]].energy}.`);
  if (majors >= 2) insights.push(`✦ ${majors} Major Arcana cards: a bigger turning point, not just a passing mood.`);
  else if (majors === 1) insights.push(`✦ One Major Arcana card (${main.find(c => c.id < 22).name}) carries the main lesson.`);
  if (revs >= 3) insights.push(`↻ ${revs} reversed cards: something feels blocked, delayed or private right now.`);
  else if (revs === 0) insights.push('↑ Every card upright: the themes are out in the open and moving.');
  const summary = `Your story in five cards: ${main.map(c => c.name).join(' → ')}. `
    + `The card to act on is ${main[3].name}, in the “next step” spot. ${meaning(main[3])} `
    + `Keep an eye on ${main[2].name}, your challenge: ${meaning(main[2]).charAt(0).toLowerCase() + meaning(main[2]).slice(1)} ${lens[topic]}`;
  return {topic, question, deck, demo: true, content: {
    summary, insights,
    cards: main.map((c, i) => ({interpretation: `${positionPrompt[i]} ${meaning(c)} ${lens[topic]}`})),
    clarification: `${deck.slice(5).map(c => `${c.name}${c.reversedCard ? ' (reversed)' : ''}: ${meaning(c)}`).join(' ')} Read these three together as one extra lens on your whole reading: what do they back up, and what do they question?`,
    reflection: 'What is one thing you can check, one thing you can change, and one thing you can let stay uncertain for now?',
  }};
}

// ---------------------------------------------------------------- the spread game
function dealReading(reading) {
  state.reading = reading; state.revealed = 0; state.bonusRevealed = 0; state.quiet = isHeavy(reading.question);
  $('result').hidden = true; $('bonus-table').hidden = true; $('clarifier-story').hidden = true; $('bonus').hidden = false;
  $('table').hidden = false; $('yn-table').hidden = true; closeSheet();
  $('reading-kind').textContent = reading.demo ? 'YOUR FIVE-CARD SPREAD' : '✦ YOUR PERSONAL AI READING ✦';
  $('reading-question').textContent = reading.question ? `“${reading.question}”` : `A ${labels[reading.topic].toLowerCase()} reading`;
  $('dots').replaceChildren(...POSITIONS.map(() => el('span', 'dot')));
  const spread = $('spread'); spread.replaceChildren();
  reading.deck.slice(0, 5).forEach((card, i) => {
    const slot = el('div', 'slot'); slot.style.setProperty('--i', i);
    const b = flipCard(card, `Card ${i + 1}, ${POSITIONS[i]}: tap to flip`);
    b.disabled = i !== 0; if (i === 0) b.classList.add('beckon');
    b.addEventListener('click', () => reveal(i, b));
    slot.append(el('span', 'slot-label', `${i + 1}. ${POSITIONS[i]}`), b); spread.append(slot);
  });
  spread.classList.remove('dealt'); void spread.offsetWidth; spread.classList.add('dealt');
  $('progress-text').textContent = 'Tap card 1 to flip it 👆';
  sounds.tap();
  $('table').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'start'});
}
function reveal(i, node) {
  if (i !== state.revealed || node.classList.contains('flipped')) return;
  const card = state.reading.deck[i];
  node.classList.remove('beckon'); node.classList.add('flipped'); node.disabled = true;
  node.setAttribute('aria-label', `${POSITIONS[i]}: ${card.name}${card.reversedCard ? ', reversed' : ''}`);
  sounds.flip(); burstFrom(node, 18, 0.6);
  $('dots').children[i].classList.add('on');
  state.revealed++;
  setTimeout(() => { collect(card, node); openSheet(i); }, 520);
}
function openSheet(i) {
  const card = state.reading.deck[i], last = i === 4;
  $('sheet-pos').textContent = `CARD ${i + 1} OF 5 · ${POSITIONS[i].toUpperCase()}`;
  $('sheet-name').textContent = card.name;
  $('sheet-orient').textContent = card.reversedCard ? '↻ Reversed' : '↑ Upright';
  $('sheet-text').textContent = state.reading.content.cards[i]?.interpretation || meaning(card);
  $('sheet-link').href = cardUrl(card);
  $('sheet-next').textContent = last ? '🎉 See my full reading' : `Flip card ${i + 2} →`;
  $('sheet-next').onclick = () => { closeSheet(); last ? finish() : nextCard(); };
  $('sheet').hidden = false; requestAnimationFrame(() => $('sheet').classList.add('open'));
  $('sheet-next').focus({preventScroll: true});
}
function closeSheet() { $('sheet').classList.remove('open'); setTimeout(() => { if (!$('sheet').classList.contains('open')) $('sheet').hidden = true; }, 250); }
function nextCard() {
  const nodes = $('spread').querySelectorAll('.flip-card'), next = nodes[state.revealed];
  if (!next) return;
  next.disabled = false; next.classList.add('beckon');
  next.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'center'});
  $('progress-text').textContent = `Tap card ${state.revealed + 1} to flip it 👆`;
}
function finish() {
  const r = state.reading;
  $('progress-text').textContent = 'All five cards revealed ✨';
  $('result-title').textContent = `Your ${labels[r.topic].toLowerCase()} reading`;
  $('insights').replaceChildren(...(r.content.insights || []).map(t => el('li', '', t)));
  $('summary').textContent = r.content.summary;
  $('reflection').textContent = r.content.reflection;
  $('care-note').textContent = careNote(r.question); $('care-note').hidden = !careNote(r.question);
  $('go-deeper').hidden = !r.demo || !(state.config.enabled || state.config.freeEnabled);
  $('result').hidden = false; sounds.win(); confetti();
  $('result').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'start'});
  const reads = store.get('readings', 0) + 1; store.set('readings', reads);
}
$('bonus').addEventListener('click', () => {
  $('bonus').hidden = true; $('bonus-table').hidden = false;
  const spread = $('bonus-spread'); spread.replaceChildren();
  state.reading.deck.slice(5, 8).forEach((card, i) => {
    const slot = el('div', 'slot'); slot.style.setProperty('--i', i);
    const b = flipCard(card, `Bonus card ${i + 1}: tap to flip`); b.classList.add('beckon');
    b.addEventListener('click', () => {
      if (b.classList.contains('flipped')) return;
      b.classList.remove('beckon'); b.classList.add('flipped'); b.disabled = true; sounds.flip(); burstFrom(b, 16, 0.6);
      slot.append(el('span', 'slot-label', `${card.name}${card.reversedCard ? ' ↻' : ''}`));
      setTimeout(() => collect(card, b), 520);
      if (++state.bonusRevealed === 3) setTimeout(() => {
        $('clarifier-story').textContent = state.reading.content.clarification; $('clarifier-story').hidden = false;
        $('bonus-progress').textContent = 'Bonus cards revealed ✨'; sounds.win(); burstFrom(spread, 50, 1.2);
      }, 700);
      else $('bonus-progress').textContent = `${3 - state.bonusRevealed} to go…`;
    });
    slot.append(b); spread.append(slot);
  });
  spread.classList.remove('dealt'); void spread.offsetWidth; spread.classList.add('dealt');
  $('bonus-progress').textContent = 'Tap each bonus card 👆';
  spread.scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'center'});
});


// ---------------------------------------------------------------- yes or no mode
const ynText = {
  Y: 'The card leans yes. The energy supports moving forward.',
  M: 'The card says maybe. The answer depends on choices or details that are still open.',
  N: 'The card leans no, at least not in the way things stand right now.',
};
function setMode(m) {
  state.mode = m;
  document.querySelectorAll('.mode').forEach(b => b.setAttribute('aria-selected', String(b.dataset.mode === m)));
  const yn = m === 'yesno';
  $('chips').hidden = yn; $('play-sub').textContent = yn ? 'Ask a yes-or-no question, then flip one card for your answer.' : 'Pick a topic, shuffle, then flip your five cards one by one.';
  $('question').placeholder = yn ? 'Will…? Should I…? Is…?' : placeholders[state.topic];
  $('deal').textContent = yn ? '✅ Draw my answer' : '🔮 Shuffle & deal my cards';
  $('table').hidden = true; $('result').hidden = true; $('yn-table').hidden = true; closeSheet();
}
document.querySelectorAll('.mode').forEach(b => b.addEventListener('click', () => { setMode(b.dataset.mode); sounds.tap(); }));
function dealYesNo() {
  const card = drawDeck($('reversals').checked)[0]; state.ynCard = card; state.quiet = isHeavy($('question').value);
  $('yn-question').textContent = $('question').value.trim() ? `“${$('question').value.trim()}”` : 'Your yes-or-no question';
  $('yn-answer').hidden = true; $('yn-table').hidden = false; $('yn-progress').textContent = 'Tap the card to get your answer 👆';
  const spread = $('yn-spread'); spread.replaceChildren();
  const slot = el('div', 'slot'); const b = flipCard(card, 'Tap to reveal your answer'); b.classList.add('big', 'beckon');
  b.addEventListener('click', () => {
    if (b.classList.contains('flipped')) return;
    b.classList.remove('beckon'); b.classList.add('flipped'); b.disabled = true; sounds.flip();
    setTimeout(() => {
      const yn = yesNo(card), word = YES_NO_WORD[yn];
      $('yn-word').textContent = yn === 'Y' ? 'YES' : yn === 'M' ? 'MAYBE' : 'NO';
      $('yn-word').className = `yn-word ${yn}`;
      $('yn-card').textContent = `${card.name}${card.reversedCard ? ' (reversed)' : ''}`;
      $('yn-text').textContent = `${ynText[yn]} ${meaning(card)}`;
      $('yn-link').href = state.pages.has(slug(card.name)) ? `/cards/${slug(card.name)}#yes-or-no` : '/yes-or-no-tarot';
      $('yn-answer').hidden = false; $('yn-progress').textContent = '';
      sounds.reveal();
      $('yn-care').textContent = careNote($('question').value); $('yn-care').hidden = !careNote($('question').value);
      collect(card, b);
      $('yn-answer').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'center'});
      state.ynWord = word;
    }, 560);
  });
  slot.append(b); spread.append(slot);
  spread.classList.remove('dealt'); void spread.offsetWidth; spread.classList.add('dealt');
  $('yn-table').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'start'});
}
$('yn-again').addEventListener('click', () => { $('yn-table').hidden = true; $('question').value = ''; $('question').focus(); $('play').scrollIntoView({behavior: 'smooth'}); });
$('yn-share').addEventListener('click', () => {
  const card = state.ynCard; if (!card) return; const yn = yesNo(card);
  shareImage({title: 'I asked the cards…', lines: $('question').value.trim() ? [`“${$('question').value.trim()}”`] : [], cards: [{card, label: ''}],
    big: yn === 'Y' ? 'YES' : yn === 'M' ? 'MAYBE' : 'NO', bigColor: '#ffd36e', text: `The cards said ${YES_NO_WORD[yn].toUpperCase()} 🔮`});
});

// ---------------------------------------------------------------- controls
function setTopic(t) {
  state.topic = t;
  document.querySelectorAll('.chip').forEach(c => c.setAttribute('aria-checked', String(c.dataset.topic === t)));
  $('question').placeholder = placeholders[t];
}
document.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => { setTopic(c.dataset.topic); sounds.tap(); }));
$('question').addEventListener('input', () => { $('count').textContent = `${$('question').value.length} / 600`; });
function showSupport() {
  $('table').hidden = true; $('result').hidden = true; $('yn-table').hidden = true; closeSheet();
  $('support').hidden = false; $('support').scrollIntoView({behavior: reduceMotion ? 'auto' : 'smooth', block: 'center'});
}
$('deal').addEventListener('click', () => {
  if (state.busy) return;
  $('support').hidden = true;
  if (CRISIS.test($('question').value)) { showSupport(); return; }
  $('deal').classList.add('shuffling'); sounds.tap();
  if (state.order && location.protocol !== 'file:') { history.replaceState({}, '', location.pathname); state.order = null; }
  setTimeout(() => { $('deal').classList.remove('shuffling'); if (state.mode === 'yesno') dealYesNo(); else dealReading(practice(state.topic, $('question').value.trim(), $('reversals').checked)); status(''); }, reduceMotion ? 0 : 650);
});
$('again').addEventListener('click', () => { $('result').hidden = true; $('table').hidden = true; $('play').scrollIntoView({behavior: 'smooth'}); $('deal').focus({preventScroll: true}); });
$('sound').addEventListener('click', () => {
  state.sound = !state.sound; store.set('sound', state.sound);
  $('sound').textContent = state.sound ? '🔊' : '🔇'; $('sound').setAttribute('aria-pressed', String(state.sound));
  $('sound').setAttribute('aria-label', state.sound ? 'Sound on' : 'Sound off'); if (state.sound) sounds.tap();
});
function readingText() {
  const r = state.reading;
  let text = `My ${labels[r.topic]} tarot reading${r.question ? `: “${r.question}”` : ''}\n\n`;
  r.deck.slice(0, 5).forEach((c, i) => { text += `${i + 1}. ${POSITIONS[i]}: ${c.name}${c.reversedCard ? ' (reversed)' : ''}\n`; });
  return text + `\n${r.content.summary}\n\nReflection: ${r.content.reflection}`;
}
$('share').addEventListener('click', () => {
  const r = state.reading; if (!r) return;
  shareImage({title: `My ${labels[r.topic].toLowerCase()} reading ✨`, lines: r.question ? [`“${r.question}”`] : [],
    cards: r.deck.slice(0, 5).map((card, i) => ({card, label: POSITIONS[i]})), text: `My ${labels[r.topic].toLowerCase()} tarot reading 🔮`});
});
$('daily-share').addEventListener('click', () => {
  const d = store.get('daily', null); if (!d) return; const card = {...DECK[d.id], reversedCard: d.rev};
  shareImage({title: 'My card of the day', lines: [`${card.name}${card.reversedCard ? ' (reversed)' : ''}`, meaning(card)], cards: [{card, label: ''}], text: `My tarot card of the day: ${card.name} ✨`});
});
$('download').addEventListener('click', () => {
  const text = 'TAROT LEARNING GUIDE\n' + readingText() + '\n\nFor reflection and entertainment. No outcome is guaranteed.';
  const url = URL.createObjectURL(new Blob([text], {type: 'text/plain'}));
  const a = el('a'); a.href = url; a.download = 'my-tarot-reading.txt'; a.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
});

// ---------------------------------------------------------------- personal AI readings (free + paid)
function busy(v) { state.busy = v; for (const id of ['deal', 'free-ai', 'purchase', 'retry']) $(id).disabled = v; }
async function api(path, body, token) {
  const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 115000);
  try {
    const response = await fetch(`/api/${path}`, {method: 'POST', headers: {'Content-Type': 'application/json', ...(token ? {Authorization: `Bearer ${token}`} : {})}, body: JSON.stringify(body), signal: controller.signal});
    const result = await response.json();
    if (!response.ok) throw new Error(result.error || 'The request could not be completed.');
    return result;
  } finally { clearTimeout(timer); }
}
const accessKey = order => `fifth-card:${order}`;
const randomKey = () => Array.from(crypto.getRandomValues(new Uint8Array(32)), b => b.toString(16).padStart(2, '0')).join('');
function aiQuestion() {
  const q = $('question').value.trim() || state.reading?.question || '';
  if (q.length < 8) { status('Type a question (at least 8 characters) above for a personal reading.'); $('question').focus(); $('play').scrollIntoView({behavior: 'smooth'}); return null; }
  return q;
}
async function refreshFree() {
  if (!state.visitorToken) return;
  try {
    const info = await api('free-status', {token: state.visitorToken});
    state.remaining = info.remaining;
    $('free-count').textContent = info.remaining ? `🎁 ${info.remaining} of 3 free personal readings left` : 'Your three free personal readings have been used.';
    $('free-ai').hidden = $('human-check').hidden = info.remaining === 0;
    $('purchase').hidden = info.remaining > 0 || !state.config.enabled;
  } catch { status('Could not check your free readings. Try reloading the page.'); }
}
async function restore(order) {
  busy(true); $('retry').hidden = true; status('🔮 Your personal reading is being written. This can take about a minute…');
  try {
    const token = localStorage.getItem(accessKey(order));
    if (!token) throw new Error('This browser does not have the key for this reading. Use the browser you started in, or contact support if you paid.');
    const result = await api('reading', {order}, token);
    state.order = order; status('');
    dealReading({...result, demo: false});
  } catch (e) {
    status(e.name === 'AbortError' ? 'This is taking longer than usual. Tap retry; it will not charge you again or use another free reading.' : e.message);
    $('retry').hidden = false;
  } finally { busy(false); }
}
$('purchase').addEventListener('click', async () => {
  if (state.busy) return; const question = aiQuestion(); if (!question) return;
  busy(true); status('Opening secure checkout…');
  try {
    const token = randomKey();
    const result = await api('checkout', {topic: state.topic, question, reversals: $('reversals').checked, token});
    localStorage.setItem(accessKey(result.order), token); location.assign(result.url);
  } catch (e) { status(e.message || 'Checkout could not open. Check that browser storage is on and try again.'); busy(false); }
});
$('free-ai').addEventListener('click', async () => {
  if (state.busy) return; const question = aiQuestion(); if (!question) return;
  const turnstile = window.turnstile?.getResponse(state.widgetId);
  if (!turnstile) { status('Complete the quick human check first.'); return; }
  busy(true); status('Claiming your free personal reading…');
  try {
    const result = await api('free', {topic: state.topic, question, reversals: $('reversals').checked, token: state.visitorToken, turnstile});
    localStorage.setItem(accessKey(result.order), state.visitorToken); history.replaceState({}, '', `?order=${result.order}`);
    await refreshFree(); await restore(result.order);
  } catch (e) { status(e.message || 'Your free reading could not start. Please retry.'); }
  finally { if (window.turnstile && state.widgetId !== null) window.turnstile.reset(state.widgetId); busy(false); }
});
$('retry').addEventListener('click', () => restore(new URL(location.href).searchParams.get('order')));

// ---------------------------------------------------------------- daily reminder (web push)
const pushSupported = () => 'serviceWorker' in navigator && 'PushManager' in window && 'Notification' in window;
const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
const isStandalone = () => matchMedia('(display-mode: standalone)').matches || navigator.standalone === true;
const hourLabel = h => h === 12 ? 'noon' : `${h % 12 || 12} ${h < 12 ? 'AM' : 'PM'}`;
function keyBytes(b64) { const s = b64.replace(/-/g, '+').replace(/_/g, '/'); return Uint8Array.from(atob(s + '='.repeat((4 - s.length % 4) % 4)), c => c.charCodeAt(0)); }
function openRSheet(panel) {
  $('r-time').hidden = panel !== 'time'; $('r-ios').hidden = panel !== 'ios';
  $('rsheet').hidden = false; requestAnimationFrame(() => $('rsheet').classList.add('open'));
}
function closeRSheet() { $('rsheet').classList.remove('open'); setTimeout(() => { if (!$('rsheet').classList.contains('open')) $('rsheet').hidden = true; }, 250); }
function renderReminder() {
  const r = store.get('reminder', null);
  $('remind-btn').hidden = Boolean(r);
  $('remind-state').hidden = !r;
  if (r) {
    const off = el('button', '', 'Turn off'); off.type = 'button'; off.addEventListener('click', turnOffReminder);
    $('remind-state').replaceChildren(document.createTextNode(`🔔 Daily reminder on at ${hourLabel(r.hour)}. `), off);
  }
}
async function turnOnReminder(hour) {
  const btn = $('r-go'); btn.disabled = true; btn.textContent = 'Turning on…';
  try {
    const perm = await Notification.requestPermission();
    if (perm !== 'granted') { toast(perm === 'denied' ? 'Notifications are blocked. Allow them in your settings to get reminders.' : 'No problem, maybe later.'); return; }
    const reg = await navigator.serviceWorker.register('/sw.js'); await navigator.serviceWorker.ready;
    let sub = await reg.pushManager.getSubscription();
    if (!sub) sub = await reg.pushManager.subscribe({userVisibleOnly: true, applicationServerKey: keyBytes(state.config.pushKey)});
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'America/New_York';
    const res = await fetch('/api/push/subscribe', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({subscription: sub.toJSON(), hour, tz, welcome: true})});
    if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'Could not turn on reminders.');
    store.set('reminder', {hour}); closeRSheet(); renderReminder();
    sounds.win(); burstFrom($('remind'), 40, 0.8); toast(`🔔 You’re set! See you at ${hourLabel(hour)}.`, 'gold');
  } catch (e) { toast(e.message || 'Could not turn on reminders. Please try again.'); }
  finally { btn.disabled = false; btn.textContent = '🔔 Turn on reminders'; }
}
async function turnOffReminder() {
  try {
    const reg = await navigator.serviceWorker.getRegistration('/');
    const sub = await reg?.pushManager.getSubscription();
    if (sub) { await fetch('/api/push/unsubscribe', {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({endpoint: sub.endpoint})}); await sub.unsubscribe(); }
  } catch {}
  store.set('reminder', null); renderReminder(); toast('Reminders turned off.');
}
function setupReminders() {
  if (!state.config.pushKey) return;
  const canNow = pushSupported() && (!isIOS() || isStandalone());
  if (!canNow && !(isIOS() && !isStandalone())) return; // browser can't do push at all
  $('remind').hidden = false;
  // Forget a stale "on" state if the browser no longer has permission.
  if (store.get('reminder', null) && pushSupported() && Notification.permission !== 'granted') store.set('reminder', null);
  renderReminder();
  let hour = 8;
  document.querySelectorAll('.rchip').forEach(c => c.addEventListener('click', () => {
    hour = Number(c.dataset.hour); sounds.tap();
    document.querySelectorAll('.rchip').forEach(x => x.setAttribute('aria-checked', String(x === c)));
  }));
  $('remind-btn').addEventListener('click', () => { sounds.tap(); openRSheet(canNow ? 'time' : 'ios'); });
  $('r-go').addEventListener('click', () => turnOnReminder(hour));
  $('r-ok').addEventListener('click', closeRSheet);
  $('r-close').addEventListener('click', closeRSheet);
}

async function init() {
  $('sound').textContent = state.sound ? '🔊' : '🔇'; $('sound').setAttribute('aria-pressed', String(state.sound));
  setTopic('love'); renderProgress(); daily();
  if (new URL(location.href).searchParams.get('mode') === 'yesno' || location.hash === '#yes-no') setMode('yesno');
  if (location.protocol === 'file:') return;
  try { const r = await fetch('/card-pages.json'); if (r.ok) state.pages = new Set(await r.json()); } catch {}
  try { const r = await fetch('/api/config'); if (r.ok) state.config = await r.json(); } catch {}
  setupReminders();
  if (state.config.enabled) { $('purchase').hidden = false; $('purchase').textContent = state.config.testMode ? 'Test AI reading · $2' : 'Personal AI reading · $2'; }
  if (state.config.freeEnabled) {
    $('free-zone').hidden = false;
    try {
      state.visitorToken = localStorage.getItem('tarot-guild-visitor') || randomKey(); localStorage.setItem('tarot-guild-visitor', state.visitorToken);
      await refreshFree();
      if (state.remaining > 0) {
        const script = el('script'); script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'; script.async = true;
        script.onload = () => { state.widgetId = window.turnstile.render('#human-check', {sitekey: state.config.turnstileSiteKey, theme: 'dark', size: 'flexible'}); };
        document.head.append(script);
      }
    } catch { $('free-zone').hidden = true; }
  }
  if (state.config.enabled || state.config.freeEnabled) {
    $('privacy-copy').replaceChildren(el('p', '', `Personal AI readings store your question, topic, cards and reading for up to 30 days and send them to OpenAI to write the interpretation. Free readings use Cloudflare Turnstile to block bots. After three free readings in this browser, more cost $2 each through Stripe; your card never touches this site. Contact ${state.config.supportEmail} for help or a refund if a paid reading fails.`));
  }
  const url = new URL(location.href), order = url.searchParams.get('order');
  if (order) await restore(order);
  if (url.searchParams.has('cancelled')) status('Checkout cancelled. No charge was made.');
}
init();
