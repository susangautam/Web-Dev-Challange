document.addEventListener('DOMContentLoaded', () => {
  const openMenu = document.getElementById('open-menu');
  const closeMenu = document.getElementById('close-menu');
  const menu = document.querySelector('.nav .menu');
  const toggleBtn = document.getElementById('toggle-btn');
  const descriptionText = document.getElementById('description-text');

  openMenu.addEventListener('click', () => {
    menu.style.display = 'flex';
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
  });

  closeMenu.addEventListener('click', () => {
    menu.style.display = 'none';
    openMenu.style.display = 'block';
    closeMenu.style.display = 'none';
  });

  toggleBtn.addEventListener('click', () => {
    const isExpanded = descriptionText.classList.toggle('expanded');
    toggleBtn.textContent = isExpanded ? 'Read Less' : 'Read More';
  });
});

const initSlider = () => {
  const imageList = document.querySelector(".slider .list-images");
  const slideButtons = document.querySelectorAll(".slider .btn-icon");
  const sliderScrollbar = document.querySelector(".scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".thumb");
  const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
          
          scrollbarThumb.style.left = `${boundedPosition}px`;
          imageList.scrollLeft = scrollPosition;
      }

      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

  const handleSlideButtons = () => {
      slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }


  const updateScrollThumbPosition = () => {
      const scrollPosition = imageList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }
  imageList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });
}
window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);


let buttons = document.querySelectorAll(".services-btn");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", (e) => {
    e.preventDefault();
    
    let overlay = document.createElement('span');
    overlay.classList.add("overlay");
    e.target.appendChild(overlay);
    
    let xValue = e.clientX - e.target.getBoundingClientRect().left;
    let yValue = e.clientY - e.target.getBoundingClientRect().top;
    
    overlay.style.left = xValue + "px";
    overlay.style.top = yValue + "px";
    
    setTimeout(() => {
      overlay.remove();
    }, 500);
  });
}
