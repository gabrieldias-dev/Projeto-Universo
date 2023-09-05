
// Bloco do carrossel da imagem
const carousel = document.getElementById("carousel");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + 8) % 8;
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % 8;
    updateCarousel();
});

function updateCarousel() {
    const translateX = currentIndex * -400;
    carousel.style.transform = `translateX(${translateX}px)`;
}