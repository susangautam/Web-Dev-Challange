function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
}

function performSearch() {
  const searchInput = document.getElementById("search-input");
  const query = searchInput.value.trim();

  if (!query) {
    searchInput.setAttribute("aria-invalid", "true");
    searchInput.setCustomValidity("Please enter a search query.");
    searchInput.reportValidity();
    return;
  }

  searchInput.removeAttribute("aria-invalid");
  searchInput.setCustomValidity("");

  console.log(`Searching for: ${query}`);
  window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
    query
  )}`;
}

const debouncedPerformSearch = debounce(performSearch, 300);
document
  .getElementById("search-input")
  .addEventListener("keyup", debouncedPerformSearch);
document
  .querySelector(".search-container button")
  .addEventListener("click", performSearch);
