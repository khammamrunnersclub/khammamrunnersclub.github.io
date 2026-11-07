(() => {
 const data=window.KRC_CONTENT || {};
 const $=id=>document.getElementById(id);
 const text=(id,value)=>{if($(id)) $(id).textContent=value||''};
 const el=(tag,cls,value)=>{const n=document.createElement(tag);if(cls)n.className=cls;if(value!==undefined)n.textContent=value;return n};
 const empty=(node,message)=>{const n=el('div','empty',message);n.style.gridColumn='1/-1';node.append(n)};
 text('intro',data.intro);text('about-copy',data.about);text('year',new Date().getFullYear());
 const stats=$('stats');(data.stats||[]).forEach(s=>{const n=el('div','stat');n.append(el('strong','',s.number),el('small','',s.label));stats.append(n)});
 const events=$('event-list');if(!(data.events||[]).length)empty(events,'Upcoming KRC runs and event dates will appear here once confirmed.');
 (data.events||[]).forEach(e=>{const n=el('article','card');if(e.image){const img=el('img');img.src=e.image;img.alt=e.title||'KRC event';n.append(img)}const b=el('div','card-body');b.append(el('h3','',e.title||'Club run'));if(e.date)b.append(el('p','',new Date(e.date+'T12:00:00').toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric'})));if(e.location)b.append(el('p','',`📍 ${e.location}`));if(e.distance)b.append(el('p','',`🏃 ${e.distance}`));if(e.time)b.append(el('p','',`🕕 ${e.time}`));if(e.link && /^https:\/\//.test(e.link)){const a=el('a','', 'Event details →');a.href=e.link;a.rel='noopener noreferrer';b.append(a)}n.append(b);events.append(n)});
 const achievements=$('achievement-list');if(!(data.achievements||[]).length)empty(achievements,'Verified club and member achievements will be published here.');(data.achievements||[]).forEach(a=>{const n=el('article','card');const b=el('div','card-body');b.append(el('h3','',a.title||''),el('p','',a.description||''));n.append(b);achievements.append(n)});
 const gallery=$('gallery-list');if(!(data.gallery||[]).length)empty(gallery,'Official KRC photographs will be added here.');(data.gallery||[]).forEach(g=>{if(!g.image)return;const f=el('figure');const img=el('img');img.src=g.image;img.alt=g.caption||'KRC club photo';img.loading='lazy';f.append(img,el('figcaption','',g.caption||''));gallery.append(f)});
 const contact=$('contact-info');if(data.contactEmail){const a=el('a','',data.contactEmail);a.href='mailto:'+encodeURIComponent(data.contactEmail);contact.append(a)}else contact.append(el('p','', 'Official KRC contact information will be shared here soon.'));
 const menu=$('menu'),links=$('links');menu.addEventListener('click',()=>{const open=links.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
})();
