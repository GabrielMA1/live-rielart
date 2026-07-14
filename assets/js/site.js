
(() => {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem('theme'); } catch (e) {}
  root.dataset.theme = saved === 'dark' ? 'dark' : 'light';
  root.classList.add('js');
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => btn.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem('theme', root.dataset.theme); } catch (e) {}
    btn.setAttribute('aria-label', root.dataset.theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
  }));

  const menuBtn = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  let lastFocused;
  const focusable = () => menu ? [...menu.querySelectorAll('a,button,[tabindex]:not([tabindex="-1"])')] : [];
  function closeMenu(){ if(!menuBtn||!menu)return; menu.classList.remove('open');document.body.classList.remove('menu-open');menuBtn.setAttribute('aria-expanded','false');menu.setAttribute('aria-hidden','true'); if(lastFocused)lastFocused.focus(); }
  function openMenu(){ if(!menuBtn||!menu)return; lastFocused=document.activeElement;menu.classList.add('open');document.body.classList.add('menu-open');menuBtn.setAttribute('aria-expanded','true');menu.setAttribute('aria-hidden','false');focusable()[0]?.focus(); }
  menuBtn?.addEventListener('click',()=>menu?.classList.contains('open')?closeMenu():openMenu());
  menu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu?.classList.contains('open'))closeMenu(); if(e.key==='Tab'&&menu?.classList.contains('open')){const f=focusable();if(!f.length)return;const first=f[0],last=f[f.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});

  document.querySelectorAll('[data-faq-question]').forEach(btn => {
    btn.addEventListener('click', () => {
      const item=btn.closest('.faq-item'), open=btn.getAttribute('aria-expanded')==='true';
      document.querySelectorAll('.faq-item.open').forEach(other=>{if(other!==item){other.classList.remove('open');other.querySelector('[data-faq-question]')?.setAttribute('aria-expanded','false')}});
      item.classList.toggle('open',!open);btn.setAttribute('aria-expanded',String(!open));
    });
  });

  const tabs=[...document.querySelectorAll('[role="tab"][data-contact-tab]')];
  function activateTab(tab){const group=tab.closest('.contact-panel');if(!group)return;group.querySelectorAll('[role="tab"]').forEach(t=>{const active=t===tab;t.classList.toggle('active',active);t.setAttribute('aria-selected',String(active));t.tabIndex=active?0:-1});group.querySelectorAll('[role="tabpanel"]').forEach(p=>p.hidden=p.id!==tab.getAttribute('aria-controls'));const panel=document.getElementById(tab.getAttribute('aria-controls'));const iframe=panel?.querySelector('iframe[data-src]');if(iframe&&!iframe.src)iframe.src=iframe.dataset.src;}
  tabs.forEach((tab,i)=>{tab.addEventListener('click',()=>activateTab(tab));tab.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const group=tabs.filter(t=>t.closest('.contact-panel')===tab.closest('.contact-panel'));let idx=group.indexOf(tab);if(e.key==='ArrowRight')idx=(idx+1)%group.length;if(e.key==='ArrowLeft')idx=(idx-1+group.length)%group.length;if(e.key==='Home')idx=0;if(e.key==='End')idx=group.length-1;group[idx].focus();activateTab(group[idx])})});
  document.querySelectorAll('[data-open-call]').forEach(a=>a.addEventListener('click',e=>{const tab=document.querySelector('[data-contact-tab="call"]');if(tab){e.preventDefault();activateTab(tab);document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'});}}));
  try { if (location.hash === '#schedule' || new URLSearchParams(location.search).get('mode') === 'call') { const callTab=document.querySelector('[data-contact-tab="call"]'); if(callTab){ activateTab(callTab); setTimeout(()=>document.querySelector('#contact')?.scrollIntoView({behavior:'smooth'}),80); } } } catch(e) {}


  const observer='IntersectionObserver' in window?new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12}):null;
  document.querySelectorAll('.reveal').forEach(el=>observer?observer.observe(el):el.classList.add('visible'));
  document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

  const filters=[...document.querySelectorAll('[data-filter]')], cards=[...document.querySelectorAll('[data-category]')], search=document.querySelector('[data-blog-search]');
  function applyFilter(){const active=document.querySelector('[data-filter].active')?.dataset.filter||'all',q=(search?.value||'').toLowerCase().trim();cards.forEach(c=>{const matchCat=active==='all'||c.dataset.category===active,matchText=!q||c.textContent.toLowerCase().includes(q);c.hidden=!(matchCat&&matchText)})}
  filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(b=>b.classList.remove('active'));btn.classList.add('active');applyFilter()}));search?.addEventListener('input',applyFilter);
  document.querySelectorAll('[data-contact-form]').forEach(form=>form.addEventListener('submit',()=>{const b=form.querySelector('[type="submit"]');if(b){b.disabled=true;b.dataset.original=b.innerHTML;b.textContent='Sending…'}}));
  window.addEventListener('pageshow',()=>document.querySelectorAll('[data-contact-form] [type="submit"]').forEach(b=>{b.disabled=false;if(b.dataset.original)b.innerHTML=b.dataset.original}));
})();

/* RielArt 2027 interaction polish */
(() => {
  const header = document.querySelector('.site-header');
  const setHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
  setHeaderState();
  window.addEventListener('scroll', setHeaderState, { passive: true });

  const path = location.pathname.replace(/\/index\.html$/, '/');
  document.querySelectorAll('.nav a, .mobile-menu nav > a:not(.btn)').forEach(link => {
    try {
      const linkPath = new URL(link.href, location.origin).pathname.replace(/\/index\.html$/, '/');
      const active = linkPath === '/' ? path === '/' : path.startsWith(linkPath);
      if (active) link.setAttribute('aria-current', 'page');
    } catch (_) {}
  });

  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const glass = document.querySelectorAll('.card,.ra-simple-card,.ra-proof-card,.process-step,.timeline-item,.aside-card,.portal-callout,.pricing-assurance-card,.subscription-card,.contact-panel,.contact-intro,.article-card,.person-card,.management-service-card,.service-card,.metric-card');
    glass.forEach(el => {
      el.addEventListener('pointermove', event => {
        const rect = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
        el.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
      }, { passive: true });
      el.addEventListener('pointerleave', () => {
        el.style.setProperty('--mx', '50%');
        el.style.setProperty('--my', '50%');
      }, { passive: true });
    });
  }
})();
