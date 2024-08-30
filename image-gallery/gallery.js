const filterItem = document.querySelector(".items");
const filterImg = document.querySelectorAll(".gallery .image");

window.onload = () => {
  filterItem.addEventListener("click", (event) => {
    if (event.target.classList.contains("item")) {
      filterItem.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");

      const filterName = event.target.getAttribute("data-name");

      filterImg.forEach((image) => {
        const imageCategory = image.getAttribute("data-name");
        if (imageCategory === filterName || filterName === "all") {
          image.classList.remove("hide");
          image.classList.add("show");
        } else {
          image.classList.add("hide");
          image.classList.remove("show");
        }
      });
    }
  });

  filterImg.forEach(image => {
    image.addEventListener("click", () => preview(image));
  });
};

const previewBox = document.querySelector(".preview-box");
const categoryName = previewBox.querySelector(".title p");
const previewImg = previewBox.querySelector("img");
const closeIcon = previewBox.querySelector(".icon");
const shadow = document.querySelector(".shadow");

function preview(element) {
  document.body.style.overflow = "hidden";
  
  const selectedImgSrc = element.querySelector("img").src;
  const selectedImgCategory = element.getAttribute("data-name");

  previewImg.src = selectedImgSrc;
  categoryName.textContent = selectedImgCategory;
  
  previewBox.classList.add("show");
  shadow.classList.add("show");
  
  closeIcon.addEventListener("click", () => {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
    document.body.style.overflow = "auto";
  });
}
