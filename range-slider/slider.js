document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('input[type="range"]');
    const sliderValue = document.querySelector('.sliderValue span');

    slider.addEventListener('input', function () {
        sliderValue.textContent = slider.value;
    });

    // Initialize the slider value on page load
    sliderValue.textContent = slider.value;
});
