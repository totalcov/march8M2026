const images = document.querySelectorAll('.photo'); // класс фото
let current = 0;
const intervalTime = 4000;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
    });
}

// автопереключение
let sliderInterval = setInterval(nextImage, intervalTime);

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

// 👆 переключение по тапу / клику
images.forEach(img => {
    img.addEventListener('click', () => {
        clearInterval(sliderInterval);   // сбрасываем таймер
        nextImage();
        sliderInterval = setInterval(nextImage, intervalTime);
    });
});