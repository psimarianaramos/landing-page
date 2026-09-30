const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

if (menuButton && mainNav) {
  const label = menuButton.querySelector('.sr-only');
  const setMenu = (open) => {
    mainNav.classList.toggle('open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    label.textContent = open ? 'Fechar menu' : 'Abrir menu';
  };

  menuButton.addEventListener('click', () => {
    setMenu(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenu(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainNav.classList.contains('open')) {
      setMenu(false);
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!mainNav.contains(event.target) && !menuButton.contains(event.target)) setMenu(false);
  });

  const mobile = window.matchMedia('(max-width: 700px)');
  mobile.addEventListener('change', () => setMenu(false));
  document.documentElement.classList.add('nav-ready');
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
