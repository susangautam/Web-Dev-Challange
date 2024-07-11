const modeToggle = document.getElementById('modeToggle');
let isDark = false;

modeToggle.addEventListener('click', function() {

    isDark = !isDark;
    document.body.classList.toggle('dark', isDark);
    applyTheme();
});

function applyTheme() {
    if (isDark) {
        document.body.classList.add('dark-mode');
         document.body.style.backgroundColor = '#28282B';
         document.body.style.color = 'white';

    } else {
        document.body.classList.remove('dark-mode');
        document.body.style.backgroundColor = 'white';
        document.body.style.color = '#28282B';
    }
}
