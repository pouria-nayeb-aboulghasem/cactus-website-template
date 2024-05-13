const navMenu = document.querySelector("#nav-menu"),
    navClose = document.querySelector("#nav-close"),
    navShow = document.querySelector("#nav-show");

if (navShow)
    navShow.addEventListener("click", () =>
        navMenu.classList.add("nav__menu--show"));

if (navClose)
    navClose.addEventListener("click", () => navMenu.classList.remove("nav__menu--show"));

const navLinks = document.querySelectorAll(".nav__link");

navLinks.forEach(navLink => {
    navLink.addEventListener("click", () =>
        navMenu.classList.remove("nav__menu--show"));
});

const shadowHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('header-blur')
        : header.classList.remove('header-blur');
}
window.addEventListener('scroll', shadowHeader);

const scrollReveal = () => {
    const scrollup = document.getElementById('scrollup')
    this.scrollY >= 350 ? scrollup.classList.add('scrollup-show')
        : scrollup.classList.remove('scrollup-show');
}
window.addEventListener('scroll', scrollReveal);

const sections = document.querySelectorAll('div[id]');


const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('nav__link--active');
        } else {
            sectionsClass.classList.remove('nav__link--active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2500,
    delay: 300
});

sr.reveal(".hero__img, .new__img, .care__img, .contact__content, .footer");
sr.reveal(".hero__data, .care__list, .contact__img", { delay: 500 });
sr.reveal(".new__item", { delay: 500, interval: 100 });
sr.reveal(".shop__item", { interval: 100 });