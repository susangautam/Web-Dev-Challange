const colorPicker = document.getElementById("colorpicker");
const colorWheel = document.getElementById("colorwheel");
const Button = document.getElementById("button");

colorPicker.addEventListener("click", pickColor);

Button.addEventListener("click", pickRandomColor);

function pickColor(event) {
  rotateColorWheel(event);

  setColor(getColorAtAngle(getAngle(event)));
}

function pickRandomColor() {
  const randomAngle = Math.random() * 360;
  rotateColorWheel(null, randomAngle);
  setColor(getColorAtAngle(randomAngle));
}

function rotateColorWheel(event, angle) {
  if (event) {
    const boundingRect = colorWheel.getBoundingClientRect();
    const offsetX = event.clientX - boundingRect.left;
    const offsetY = event.clientY - boundingRect.top;
    angle = getAngle({ offsetX, offsetY });
  }
  colorPicker.style.transform = `rotate(${angle}deg)`;
}

function getAngle({ offsetX, offsetY }) {
  const x = offsetX - colorWheel.offsetWidth / 2;
  const y = offsetY - colorWheel.offsetHeight / 2;
  let angle = Math.atan2(y, x) * (180 / Math.PI);
  return angle < 0 ? angle + 360 : angle;
}

function getColorAtAngle(angle) {
  let hue;
  if (angle >= 0 && angle < 60) {
    hue = 0;
  } else if (angle >= 60 && angle < 120) {
    hue = 120;
  } else if (angle >= 120 && angle < 180) {
    hue = 60;
  } else if (angle >= 180 && angle < 240) {
    hue = 240;
  } else if (angle >= 240 && angle < 300) {
    hue = 0;
  } else {
    hue = 300;
  }
  return `hsl(${hue}, 100%, 50%)`;
}

function setColor(color) {
  colorPicker.style.backgroundColor = color;
}
