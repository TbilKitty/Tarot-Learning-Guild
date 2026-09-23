const search=document.getElementById('card-search');
const cards=[...document.querySelectorAll('.meaning-entry')];
const sections=[...document.querySelectorAll('.suit-section')];
search?.addEventListener('input',()=>{const query=search.value.trim().toLocaleLowerCase();let visible=0;for(const card of cards){const match=card.dataset.card.includes(query);card.hidden=!match;if(match)visible++;}for(const section of sections)section.hidden=![...section.querySelectorAll('.meaning-entry')].some(card=>!card.hidden);document.getElementById('no-results').hidden=visible>0;});
