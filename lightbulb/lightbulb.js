const lightBulb = document.getElementById('lightBulb');

const btnOn = document.getElementById('btnOn');
const btnOff = document.getElementById('btnOff');

btnOn.addEventListener('click', () => {
  lightBulb.innerHTML = '<img src="bulbon-01.png" alt="Lightbulb On">';
    lightBulb.classList.add('glow');
});

btnOff.addEventListener('click', () => {
lightBulb.innerHTML = '<img src="bulboff.png" alt="Lightbulb Off">';
  lightBulb.classList.remove('glow');
});
