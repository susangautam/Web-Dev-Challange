const prevButton = document.querySelector('.slider-button-prev');
const nextButton = document.querySelector('.slider-button-next');
const sliderWrapper = document.querySelector('.slider-wrapper');
const paginationContainer = document.querySelector('.slider-pagination');

let slideIndex = 0;

const slides = document.querySelectorAll('.slider-slide');
const totalSlides = slides.length;

function updatePagination() {
    const paginationItems = paginationContainer.children;
    for (let i = 0; i < paginationItems.length; i++) {
        paginationItems[i].classList.toggle('active', i === slideIndex);
    }
}

function showSlide(index) {
    if (index >= totalSlides) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = totalSlides - 1;
    } else {
        slideIndex = index;
    }
    const offset = -slideIndex * 100 / 3; 
    sliderWrapper.style.transform = `translateX(${offset}%)`;
    updatePagination();
}


for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => showSlide(i));
    paginationContainer.appendChild(dot);
}
updatePagination();

prevButton.addEventListener('click', () => {
    showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(slideIndex + 1);
});


setInterval(() => {
    showSlide(slideIndex + 1);
}, 5000); 
