'use strict';
const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');
switcher.addEventListener('click', ()=>{
    if (page.classList.contains('page--themeblue')) {
        page.classList.remove('page--themeblue');
        switcher.classList.remove('theme-switcher--themeblue');
    } else {
        page.classList.add('page--themeblue');
        switcher.classList.add('theme-switcher--themeblue');
    }
});
const slider = document.querySelector('.header__slider');
const slides = document.querySelectorAll('.slider');
const prevBtn = document.querySelector('.icon--arrow-l');
const nextBtn = document.querySelector('.icon--arrow-r');
let slideIndex = 0;
const slideCount = slides.length;
function showSlide(n) {
    slides[slideIndex].classList.remove('active');
    slideIndex = (n + slideCount) % slideCount;
    slides[slideIndex].classList.add('active');
}
prevBtn.addEventListener('click', ()=>{
    showSlide(slideIndex - 1);
});
nextBtn.addEventListener('click', ()=>{
    showSlide(slideIndex + 1);
});
showSlide(slideIndex);
function preventScroll(event) {
    event.preventDefault();
}
const buttonClose = document.querySelector('.icon--close');
const buttonMenu = document.querySelector('.icon--menu');
const menu = document.querySelector('.menu');
buttonClose.addEventListener('click', ()=>{
    menu.style.transform = 'translateX(-100%)';
    document.body.style.overflow = 'auto';
});
buttonMenu.addEventListener('click', ()=>{
    menu.style.transform = 'translateX(0)';
    document.body.style.overflow = 'hidden';
});
const menuLinks = document.querySelectorAll('.nav__link--menu');
menuLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        menu.style.transform = 'translateX(-100%)';
        document.body.style.overflow = 'auto';
    });
});

//# sourceMappingURL=index.f75de5e1.js.map
