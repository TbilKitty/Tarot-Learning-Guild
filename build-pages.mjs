// Builds the search-friendly parts of the site into ./public:
//   /cards/<card>.html  one full page per card that has content in card-content.mjs
//   /about.html, /privacy.html, /sitemap.xml, /robots.txt, /ads.txt (only once ads are on)
// Called from build.mjs after the main pages are copied.
import {mkdir, writeFile} from 'node:fs/promises';
import {DECK} from './deck.mjs';
import {CONTENT} from './card-content.mjs';
import {SITE} from './site.config.mjs';

const esc = s => String(s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
export const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const paras = text => text.trim().split(/\n\s*\n/).map(p => `<p>${esc(p.trim())}</p>`).join('');
const today = new Date().toISOString().slice(0, 10);

const adsOn = /^ca-pub-\d{10,20}$/.test(SITE.adsenseClient);
// Auto ads: one script in <head>; Google chooses placements. Only on reading pages, never on the
// practice-draw or payment page.
const adHead = adsOn
  ? `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${SITE.adsenseClient}" crossorigin="anonymous"></script>`
  : '';

function shell({title, description, path, body, jsonld = [], ads = false}) {
  const url = SITE.url + path;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(title)}</title><meta name="description" content="${esc(description)}"><link rel="canonical" href="${esc(url)}">
<meta property="og:type" content="article"><meta property="og:title" content="${esc(title)}"><meta property="og:description" content="${esc(description)}"><meta property="og:url" content="${esc(url)}"><meta property="og:site_name" content="${esc(SITE.name)}">
<meta name="theme-color" content="#eee6f5"><link rel="stylesheet" href="/style.css"><link rel="stylesheet" href="/magic-theme.css"><link rel="stylesheet" href="/pages.css">
${jsonld.map(j => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`).join('')}${ads ? adHead : ''}</head>
<body><div class="page"><header><a class="brand" href="/" aria-label="${esc(SITE.name)} home"><span class="brand-mark">✦</span> ${esc(SITE.name.toUpperCase())}</a><nav aria-label="Main"><a href="/#learn">Learn tarot</a><a href="/card-meanings">Card meanings</a></nav></header>
<main class="article-page">${body}</main>
${footer()}</div></body></html>`;
}

export function footer() {
  return `<footer class="site-footer"><span class="brand">✦ &nbsp; ${esc(SITE.name.toUpperCase())}</span><span>${esc(SITE.tagline)}</span><nav aria-label="Site"><a href="/about">About</a><a href="/privacy">Privacy</a><a href="/card-meanings">All 78 cards</a></nav></footer>`;
}

function cardPage(card, c, prev, next, prompt) {
  const s = slug(card.name);
  const title = `${card.name} Tarot Card Meaning: Upright, Reversed, Love & Yes or No`;
  const description = `${card.name} tarot meaning in plain language: upright and reversed, love, career and money, the classic imagery, and whether it's a yes or no card.`;
  const section = (id, heading, inner) => `<section id="${id}"><h2>${esc(heading)}</h2>${inner}</section>`;
  const four = (o, label) => ['love', 'career', 'money'].map(k => `<h3>${esc(card.name)} ${label} in ${k === 'love' ? 'love & relationships' : k === 'career' ? 'career & work' : 'money & finances'}</h3>${paras(o[k])}`).join('');
  const navLink = (x, dir) => x ? `<a href="/cards/${slug(x.name)}" rel="${dir}">${dir === 'prev' ? '← ' : ''}${esc(x.name)}${dir === 'next' ? ' →' : ''}</a>` : '<span></span>';
  const body = `
<nav class="crumbs" aria-label="Breadcrumb"><a href="/">Home</a> › <a href="/card-meanings#${slug(card.suit)}">${esc(card.suit)}</a> › <span>${esc(card.name)}</span></nav>
<article class="card-article">
<p class="eyebrow">${esc(card.suit.toUpperCase())}${card.id < 22 ? ` · CARD ${card.id}` : ''}</p>
<h1>${esc(card.name)} <em>tarot card meaning</em></h1>
<div class="at-a-glance">
  <div><strong>Upright</strong>${esc(c.keywords.upright.join(', '))}</div>
  <div><strong>Reversed</strong>${esc(c.keywords.reversed.join(', '))}</div>
  <div><strong>Yes or no</strong>${esc(c.yesNo.upright)} upright · ${esc(c.yesNo.reversed)} reversed</div>
</div>
<nav class="toc" aria-label="On this page"><a href="#upright">Upright</a><a href="#reversed">Reversed</a><a href="#yes-or-no">Yes or no</a><a href="#imagery">Imagery</a><a href="#in-a-reading">In a reading</a></nav>
${paras(c.overview)}
${section('upright', `${card.name} upright meaning`, paras(c.upright.general) + four(c.upright, 'upright'))}
${section('reversed', `${card.name} reversed meaning`, paras(c.reversed.general) + four(c.reversed, 'reversed'))}
${section('yes-or-no', `Is ${card.name} a yes or no card?`, `<p class="verdict"><strong>${esc(c.yesNo.upright)}</strong> upright · <strong>${esc(c.yesNo.reversed)}</strong> reversed</p>${paras(c.yesNo.note)}`)}
${section('imagery', `${card.name} symbolism and imagery`, paras(c.imagery))}
${section('in-a-reading', `${card.name} in a reading`, paras(c.inReading) + (c.pairs?.length ? `<h3>Notable combinations</h3><ul class="pairs">${c.pairs.map(p => `<li><strong>${esc(card.name)} + ${esc(p.with)}:</strong> ${esc(p.text)}</li>`).join('')}</ul>` : ''))}
<aside class="reflect"><strong>Ask yourself</strong>${esc(prompt)}</aside>
<aside class="cta"><p>Learning a card sticks best when you see it in context.</p><a class="button-link" href="/">Draw a free five-card practice spread</a></aside>
<p class="note">Tarot is a tool for reflection and entertainment, not a prediction of fixed events or a substitute for medical, legal or financial advice.</p>
</article>
<nav class="prev-next" aria-label="More cards">${navLink(prev, 'prev')}<a href="/card-meanings">All 78 cards</a>${navLink(next, 'next')}</nav>`;
  const jsonld = [
    {'@context': 'https://schema.org', '@type': 'Article', headline: title, description, url: `${SITE.url}/cards/${s}`, dateModified: today,
      author: {'@type': 'Organization', name: SITE.name}, publisher: {'@type': 'Organization', name: SITE.name}},
    {'@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      {'@type': 'ListItem', position: 1, name: 'Home', item: SITE.url + '/'},
      {'@type': 'ListItem', position: 2, name: 'Card meanings', item: SITE.url + '/card-meanings'},
      {'@type': 'ListItem', position: 3, name: card.name, item: `${SITE.url}/cards/${s}`}]},
  ];
  return shell({title, description, path: `/cards/${s}`, body, jsonld, ads: true});
}

function about() {
  const contact = SITE.contactEmail ? `<a href="mailto:${esc(SITE.contactEmail)}">${esc(SITE.contactEmail)}</a>` : '<em>(contact email coming soon)</em>';
  return shell({title: `About | ${SITE.name}`, description: `What ${SITE.name} is, how the card meanings are written, and how to get in touch.`, path: '/about', body: `
<article class="card-article"><h1>About ${esc(SITE.name)}</h1>
<p>${esc(SITE.name)} is a free, independent guide for people learning to read tarot. Every card page explains the traditional upright and reversed meanings in plain language, shows how a card can read in love, work and money questions, and offers a practice prompt so you can build your own interpretation instead of memorizing someone else’s.</p>
<p>The free practice tool on the home page lets you draw a five-card spread and study it with the meanings beside each card, as many times as you like.</p>
<h2>How we write about tarot</h2>
<p>We treat tarot as a tool for reflection and entertainment. Our pages describe the long-standing symbolic traditions of the cards, based on the classic Rider–Waite–Smith deck, and avoid claims of certain predictions. Nothing here is medical, legal, financial or psychological advice.</p>
<h2>Contact</h2><p>Questions, corrections or suggestions for a card page: ${contact}</p>
</article>`});
}

function privacy() {
  const contact = SITE.contactEmail ? `<a href="mailto:${esc(SITE.contactEmail)}">${esc(SITE.contactEmail)}</a>` : 'the contact address on our About page';
  const adsText = adsOn
    ? `<h2>Advertising</h2><p>Card reference pages show ads served by Google AdSense. Google and its partners use cookies and similar technologies to serve ads based on your visits to this and other websites, and to measure ad performance. You can learn how Google uses this information at <a href="https://policies.google.com/technologies/partner-sites" rel="nofollow">policies.google.com/technologies/partner-sites</a>, and opt out of personalized advertising at <a href="https://adssettings.google.com" rel="nofollow">Google Ad Settings</a>. Visitors in the European Economic Area, the UK and Switzerland are asked for consent through a Google-certified consent message before personalized ads are shown.</p>`
    : `<h2>Advertising</h2><p>This site does not currently show ads. If that changes, this policy will be updated before ads appear, including how advertising cookies are used and how to opt out.</p>`;
  return shell({title: `Privacy Policy | ${SITE.name}`, description: `How ${SITE.name} handles your information.`, path: '/privacy', body: `
<article class="card-article"><h1>Privacy policy</h1><p class="note">Last updated ${today}</p>
<h2>What we collect</h2>
<p>You can read every card page and use the free practice draw without creating an account. Practice draws happen in your browser and are not sent to us.</p>
<p>If you use a personal AI reading, we store your question, your drawn cards and the generated reading for 30 days so you can return to it, linked to a random key saved in your browser, not to your name. Free readings use a Cloudflare Turnstile check to prevent abuse. Paid readings are processed by Stripe; we never see or store your card number. Reading text is sent to OpenAI to generate the interpretation and is not used to train their models under their API terms.</p>
${adsText}
<h2>Hosting and logs</h2><p>The site is hosted by Cloudflare, which processes standard technical data such as IP addresses to deliver pages and protect against abuse.</p>
<h2>Your choices</h2><p>You can clear your browser storage at any time to remove the reading key. To ask about or delete reading data, contact ${contact}.</p>
</article>`});
}

export async function buildPages(prompts = []) {
  await mkdir('public/cards', {recursive: true});
  const withContent = DECK.filter(c => CONTENT[slug(c.name)]);
  const unknown = Object.keys(CONTENT).filter(k => !DECK.some(c => slug(c.name) === k));
  if (unknown.length) throw new Error(`card-content.mjs has unknown card keys: ${unknown.join(', ')}`);
  for (const [i, card] of withContent.entries()) {
    const c = CONTENT[slug(card.name)];
    for (const f of ['overview', 'imagery', 'inReading']) if (!c[f]) throw new Error(`${card.name}: missing ${f}`);
    for (const side of ['upright', 'reversed']) for (const f of ['general', 'love', 'career', 'money'])
      if (!c[side]?.[f]) throw new Error(`${card.name}: missing ${side}.${f}`);
    await writeFile(`public/cards/${slug(card.name)}.html`, cardPage(card, c, withContent[i - 1], withContent[i + 1], prompts[card.id] || ''));
  }
  await writeFile('public/card-pages.json', JSON.stringify(withContent.map(c => slug(c.name))));
  await writeFile('public/about.html', about());
  await writeFile('public/404.html', shell({title: `Page not found | ${SITE.name}`, description: 'This page could not be found.', path: '/404', body: `
<article class="card-article"><h1>That card isn’t in the deck</h1><p>The page you were looking for doesn’t exist or has moved.</p>
<p><a class="button-link" href="/card-meanings">Browse all 78 card meanings</a></p></article>`}).replace('<link rel="canonical"', '<meta name="robots" content="noindex"><link rel="x-canonical"'));
  await writeFile('public/privacy.html', privacy());
  const urls = ['/', '/card-meanings', '/about', '/privacy', ...withContent.map(c => `/cards/${slug(c.name)}`)];
  await writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE.url}${u}</loc><lastmod>${today}</lastmod></url>`).join('\n')}\n</urlset>\n`);
  await writeFile('public/robots.txt', `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE.url}/sitemap.xml\n`);
  if (adsOn) await writeFile('public/ads.txt', `google.com, ${SITE.adsenseClient.replace('ca-', '')}, DIRECT, f08c47fec0942fa0\n`);
  return {cards: withContent.map(c => slug(c.name)), adsOn, adHead};
}
