const images = document.querySelectorAll(".main-images img");
const circles = document.querySelectorAll(".color-option .circle");

circles.forEach(circle => {
  circle.addEventListener("click", () => {
    const color = circle.id;

    images.forEach(img => {
      img.classList.toggle("active", img.id === color);
    });

    circles.forEach(cir => {
      cir.classList.toggle("active", cir.id === color);
    });
  });
});
