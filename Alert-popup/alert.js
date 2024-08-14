const showAlertButton = document.getElementById("showAlertButton");
const alertBox = document.querySelector(".alert");
const closeButton = document.querySelector(".close-btn");

function showAlert() {
  alertBox.classList.remove("hide");
}

function hideAlert() {
  alertBox.classList.add("hide");
}

showAlertButton.addEventListener("click", showAlert);
closeButton.addEventListener("click", hideAlert);
