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

});