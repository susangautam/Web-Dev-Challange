document.addEventListener("DOMContentLoaded", () => {
    const loginText = document.querySelector(".title-text .login");
    const loginForm = document.querySelector("form.login");
    const loginBtn = document.querySelector("label.login");
    const signupBtn = document.querySelector("label.signup");
    const signupLink = document.querySelector("form .signup-link a");
  
    const handleSignupClick = () => {
      loginForm.style.marginLeft = "-50%";
      loginText.style.marginLeft = "-50%";
    };
  
    const handleLoginClick = () => {
      loginForm.style.marginLeft = "0%";
      loginText.style.marginLeft = "0%";
    };
  
    const handleSignupLinkClick = (event) => {
      event.preventDefault();
      signupBtn.click();
    };
  
    signupBtn.addEventListener("click", handleSignupClick);
    loginBtn.addEventListener("click", handleLoginClick);
    signupLink.addEventListener("click", handleSignupLinkClick);
  });
  
