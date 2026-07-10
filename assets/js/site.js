(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('[data-theme-toggle]');
  let savedTheme = null;
  try { savedTheme = localStorage.getItem('rielart-theme'); } catch (error) {}
  root.dataset.theme = savedTheme || 'light';
  const syncThemeIcon = () => {
    if (!themeToggle) return;
    const isLight = root.dataset.theme === 'light';
    themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark mode' : 'Switch to light mode');
    themeToggle.textContent = isLight ? '☾' : '☀';
  };
  syncThemeIcon();
  themeToggle?.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try { localStorage.setItem('rielart-theme', root.dataset.theme); } catch (error) {}
    syncThemeIcon();
  });

  const header = document.querySelector('.site-header');
  const updateHeader = () => header?.classList.toggle('scrolled', window.scrollY > 10);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobilePanel = document.querySelector('[data-mobile-panel]');
  const closeMenu = () => { mobilePanel?.classList.remove('open'); menuButton?.setAttribute('aria-expanded','false'); };
  menuButton?.addEventListener('click', () => {
    const open = !mobilePanel?.classList.contains('open');
    mobilePanel?.classList.toggle('open', open);
    menuButton?.setAttribute('aria-expanded', String(open));
  });
  mobilePanel?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

  document.querySelectorAll('[data-faq]').forEach(item => {
    const button = item.querySelector('.faq-question');
    button?.addEventListener('click', () => {
      const open = !item.classList.contains('open');
      document.querySelectorAll('[data-faq]').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-question')?.setAttribute('aria-expanded','false');
      });
      if (open) { item.classList.add('open'); button.setAttribute('aria-expanded','true'); }
    });
  });

  const tabs = [...document.querySelectorAll('[data-contact-tab]')];
  const panels = [...document.querySelectorAll('[data-contact-panel]')];
  const activatePanel = mode => {
    tabs.forEach(tab => {
      const active = tab.dataset.contactTab === mode;
      tab.classList.toggle('active', active);
      tab.setAttribute('aria-selected', String(active));
    });
    panels.forEach(panel => {
      const active = panel.dataset.contactPanel === mode;
      panel.hidden = !active;
    });
  };
  tabs.forEach(tab => tab.addEventListener('click', () => activatePanel(tab.dataset.contactTab)));
  document.querySelectorAll('[data-contact-target]').forEach(link => link.addEventListener('click', () => activatePanel(link.dataset.contactTarget || 'brief')));
  const requested = new URLSearchParams(location.search).get('contact');
  if (requested === 'brief' || requested === 'call') activatePanel(requested);

  const observer = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, { threshold:.12, rootMargin:'0px 0px -40px' }) : null;
  document.querySelectorAll('.reveal').forEach(el => observer ? observer.observe(el) : el.classList.add('visible'));

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const posts = [...document.querySelectorAll('[data-post]')];
  const search = document.querySelector('[data-blog-search]');
  let category = 'all';
  const updatePosts = () => {
    const term = (search?.value || '').trim().toLowerCase();
    posts.forEach(post => {
      const categoryMatch = category === 'all' || post.dataset.category === category;
      const termMatch = !term || post.textContent.toLowerCase().includes(term);
      post.hidden = !(categoryMatch && termMatch);
    });
  };
  filterButtons.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.filter;
    filterButtons.forEach(other => other.classList.toggle('active', other === button));
    updatePosts();
  }));
  search?.addEventListener('input', updatePosts);

  const form = document.querySelector('[data-contact-form]');
  form?.addEventListener('submit', () => {
    const button = form.querySelector('button[type="submit"]');
    if (button) { button.disabled = true; button.textContent = 'Sending…'; }
  });
})();
