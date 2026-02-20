const photos = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg'
];

const photoEl = document.getElementById('photo');
let current = 0;
const intervalTime = 4000;

function nextPhoto() {
    current = (current + 1) % photos.length;
    photoEl.classList.remove('fade');

    // маленькая пауза для анимации
    setTimeout(() => {
        photoEl.src = photos[current];
        photoEl.classList.add('fade');
    }, 100);
}

// автопереключение
let slider = setInterval(nextPhoto, intervalTime);

// переключение по тапу
photoEl.addEventListener('click', () => {
    clearInterval(slider);
    nextPhoto();
    slider = setInterval(nextPhoto, intervalTime);
});