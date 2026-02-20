document.addEventListener('DOMContentLoaded', () => {

    const slides = document.querySelectorAll('.slide');
    if (!slides.length) return;

    let index = 0;
    const intervalTime = 3000;

    function showSlide(i) {
        slides.forEach((slide, n) => {
            slide.classList.toggle('active', n === i);
        });
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    // автослайд
    let sliderInterval = setInterval(nextSlide, intervalTime);

    // 👆 тап по фото
    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            clearInterval(sliderInterval);
            nextSlide();
            sliderInterval = setInterval(nextSlide, intervalTime);
        });
    });

    // ===== ПЛАВАЮЩИЕ СЕРДЕЧКИ =====

const hearts = ['🤍', '💖', '💗', '💞', '🌸'];

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  const size = Math.random() * 12 + 12;
  heart.style.fontSize = size + 'px';

  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.setProperty('--x', (Math.random() * 60 - 30) + 'px');

  const duration = Math.random() * 5 + 6;
  heart.style.animationDuration = duration + 's';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}

// создаём сердечко каждые 1.2 сек
setInterval(createHeart, 1000);

});


