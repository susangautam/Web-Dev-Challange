const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");
const number = document.querySelector(".number");
const resetButton = document.getElementById("reset");

let a = 1;

increment.addEventListener("click", () => {
    a++;
    a = (a < 10) ? "0" + a : a;
    number.innerText = a;
});

decrement.addEventListener("click", () => {
    if (a > 1) {
        a--;
        a = (a < 10) ? "0" + a : a;
        number.innerText = a;
    }
});

resetButton.addEventListener("click", () => {
    a = 0;
    number.innerText = (a < 10) ? "0" + a : a;
});
