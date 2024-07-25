const toggle = document.querySelector(".toggle");
const input = document.querySelector("input");

toggle.addEventListener("click", () => {
    if (input.type === "password") {
        input.type = "text";
        toggle.classList.remove("fa-eye-slash");
        toggle.classList.add("fa-eye");
    } else {
        input.type = "password";
        toggle.classList.remove("fa-eye");
        toggle.classList.add("fa-eye-slash");
    }
});
