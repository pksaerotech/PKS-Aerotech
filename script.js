// PKS Aerotech — mobile menu, anchor navigation and current year.
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
const links = [...document.querySelectorAll('.nav-link')];

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const opened = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(opened));
    toggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(link => link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`));
    });
  }, { rootMargin: '-20% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
