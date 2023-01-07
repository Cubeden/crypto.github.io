// Burger Functional

const burger = document?.querySelector('.header__burger');
const nav = document?.querySelector('.navbar');
const navItems = nav?.querySelectorAll('a');

burger?.addEventListener('click', () => {
    burger?.classList.toggle('header__burger_active');
    nav?.classList.toggle('navbar_active');
    $('header').toggleClass('header_active');
    $('body').toggleClass('body_lock');
});

navItems.forEach(el => {
    el.addEventListener('click', () => {
        burger?.classList.remove('header__burger_active');
        nav?.classList.remove('navbar_active')
        $('header').toggleClass('header_active');
        $('body').toggleClass('body_lock');
    });
});
