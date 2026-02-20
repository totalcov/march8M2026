const slides = document.querySelectorAll('.slide');
let index = 0;
const intervalTime = 7000;

function showSlide(i) {
  slides.forEach((slide, n) => {
    slide.classList.toggle('active', n === i);
  });
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

// автопереключение
let sliderInterval = setInterval(nextSlide, intervalTime);

// 👆 переключение по тапу / клику
slides.forEach(slide => {
  slide.addEventListener('click', () => {
    clearInterval(sliderInterval);
    nextSlide();
    sliderInterval = setInterval(nextSlide, intervalTime);
  });
});