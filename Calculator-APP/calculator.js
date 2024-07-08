const display = document.getElementById("insert");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const btntext = button.textContent;

      if (btntext === "=") {
      calculate();
    } else if (btntext === "C") {
      clearDisplay();
      } else {
      appendToDisplay(btntext);
    }
  });
});

function appendToDisplay(value) {
  display.value += value;
}

   function clearDisplay() {
          display.value = "";
}

function calculate() {
       try {
        display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}
