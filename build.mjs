import {mkdir,copyFile,readFile,writeFile} from 'node:fs/promises';
import {DECK} from './deck.mjs';
await mkdir('public',{recursive:true});
for(const f of ['index.html','style.css','app.mjs','deck.mjs','card-back.webp','_headers'])await copyFile(f,`public/${f}`);
await writeFile('public/.nojekyll','');
const escape=s=>s.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const library=DECK.map(c=>`<details><summary>${escape(c.name)}</summary><p><strong>Upright: </strong>${escape(c.upright)}</p><p><strong>Reversed: </strong>${escape(c.reversed)}</p></details>`).join('');
const original=await readFile('index.html','utf8');
const withLibrary=original.replace('<!-- Rendered at build time for readers and search engines. -->',library);
await writeFile('public/index.html',withLibrary);
// A self-contained, offline demo can be opened by double-clicking this file.
let html=withLibrary;
const art=(await readFile('card-back.webp')).toString('base64');
const css=(await readFile('style.css','utf8')).replace("url('card-back.webp')",`url('data:image/webp;base64,${art}')`);
const deck=(await readFile('deck.mjs','utf8')).replaceAll('export ','');
const app=(await readFile('app.mjs','utf8')).replace(/^import[^\n]+\n/,'').replace("if(location.protocol!=='file:'){try{const r=await fetch('/api/config');if(r.ok)state.config=await r.json();}catch{}}",'');
html=html.replace('<link rel="stylesheet" href="style.css">',`<style>${css}</style>`).replace('<script type="module" src="app.mjs"></script>',`<script>${deck}\n${app}</script>`);
await writeFile('Fifth-Card-Preview.html',html);
