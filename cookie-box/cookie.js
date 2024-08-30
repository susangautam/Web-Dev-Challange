const cookieBox = document.querySelector(".wrapper");
const acceptBtn = cookieBox.querySelector("button");

function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

function checkCookie(name) {
  return document.cookie.split('; ').some(row => row.startsWith(`${name}=`));
}

acceptBtn.addEventListener("click", () => {
  setCookie("CookieBy", "SusanGautam", 30);
  if (checkCookie("CookieBy")) {
    alert("Cookie has been set successfully!");
  } else {
    alert("Cookie can't be set!");
  }
});

if (checkCookie("CookieBy")) {
  alert("Cookie already set!");
} else {
  alert("Cookie not set yet.");
}
