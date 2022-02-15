// VARIABLES
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

// OPEN NAV EVENT LISTENER
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// CLICK A NAV LINK, THEN CLOSE THE NAV BAR
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});