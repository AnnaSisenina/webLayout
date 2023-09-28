const menuActive = document.querySelector('.burger-menu');
const burger = document.querySelector('.burger');

function toggleMenu() {
    menuActive.classList.toggle('menu-hidden');
}

burger.addEventListener ('click', toggleMenu);
