function addListeners() {
    document.querySelector('.hamburger').addEventListener('click', toggleMenu);
}

function toggleMenu() {
    // get menu element (elementul de meniu pe care lucram)
    let menu = document.querySelector('.menu');

    // if menu is visible hide it, else show it
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
    } else {
        menu.classList.add('visible');
    }
}

window.addEventListener('load', addListeners);

