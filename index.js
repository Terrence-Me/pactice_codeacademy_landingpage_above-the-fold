const closeSidbar = document.querySelector('.mobile-menubar__close');
const openSidbar = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

const sidebarOpen = () => {};

openSidbar.addEventListener('click', () => {
  mobileNav.classList.add('open');
});

closeSidbar.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});
