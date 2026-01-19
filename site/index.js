const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    NavMenu.classList.toggle('ativo');
    menu.classList.toggle('ativo');
});