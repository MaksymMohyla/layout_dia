const slider = document.querySelector('.header__slider');
const slides = slider.querySelectorAll('.slider');
const controls = slider.querySelector('.slider-text__controls');
const prevBtn = controls.querySelector('.icon--arrow-l');
const nextBtn = controls.querySelector('.icon--arrow-r');

let slideIndex = 0;

function showSlide(n) {
  slideIndex = (n + slideCount) % slideCount; // Забезпечуємо циклічне перемикання
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[slideIndex].style.display = 'block';
}

// slides.forEach((slide, index) => {
//   // slide.style.display = index === n ? 'block' : 'none';
//   slide.classList.add('slider--hidden');
//   slides[n].classList.remove('slider--hidden');
//   slideIndex = n;
// });

// function showSlide(n) {
//   slides.forEach((slide, index) => {
//     slide.classList.add('hidden');
//   });
//   slides[n].classList.remove('hidden');
//   slideIndex = n;
// }

prevBtn.addEventListener('click', () => {
  // showSlide((slideIndex + slides.length - 1) % slides.length);
  showSlide(slideIndex - 1);
});

nextBtn.addEventListener('click', () => {
  // showSlide((slideIndex + 1) % slides.length);
  showSlide(slideIndex + 1);
});

showSlide(slideIndex);
