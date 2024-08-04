document.addEventListener('DOMContentLoaded', function() {
    const startBtn = document.querySelector('.start-btn');
    const modelBox = document.querySelector('.model-box');
    const closeBtn = document.querySelector('.model-box .fa-times');

    startBtn.addEventListener('click', function() {
        startBtn.classList.add('show-model');
        modelBox.classList.add('show-model');
    });

    closeBtn.addEventListener('click', function() {
        startBtn.classList.remove('show-model');
        modelBox.classList.remove('show-model');
    });

    window.addEventListener('click', function(event) {
        if (event.target === modelBox) {
            startBtn.classList.remove('show-model');
            modelBox.classList.remove('show-model');
        }
    });
});
