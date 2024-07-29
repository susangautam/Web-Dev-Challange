document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementById("typewriter-text");
  const texts = ["Hello Everyone!", "I am Susan Gautam."];
  const delay = 200;

  typeWriterEffect(element, texts, delay);
});

function typeWriterEffect(element, texts, delay) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let currentText = "";

  function type() {
    const text = texts[textIndex];

    if (isDeleting) {
      currentText = text.substring(0, currentText.length - 1);
    } else {
      currentText = text.substring(0, charIndex + 1);
      charIndex++;
    }

    element.textContent = currentText;

    if (!isDeleting && currentText === text) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 1000);
    } else if (isDeleting && currentText === "") {
      textIndex = (textIndex + 1) % texts.length;
      isDeleting = false;
      charIndex = 0;

      setTimeout(type, 400);
    } else {
      setTimeout(type, delay);
    }
  }

  type();
}
