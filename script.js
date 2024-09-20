const images = [
    'tech2.jpg',
    'tech3.jpg',
    'tech4.jpg',
];

let currentIndex = 0;

const imageElement = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateImage() {
    imageElement.src = images[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage();
});
