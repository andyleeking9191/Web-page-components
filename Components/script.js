const toggleButton = document.getElementsByClassName('main-nav__toggle-button')[0];
const navLinks = document.getElementsByClassName('main-nav__items')[0];

toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('active')
})