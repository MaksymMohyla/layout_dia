'use strict';

const page = document.querySelector('.page');
const switcher = document.querySelector('.theme-switcher');

switcher.addEventListener('click', () => {
  if (page.classList.contains('page--themeblue')) {
    page.classList.remove('page--themeblue');
    switcher.classList.remove('theme-switcher--themeblue');
  } else {
    page.classList.add('page--themeblue');
    switcher.classList.add('theme-switcher--themeblue');
  }
});
