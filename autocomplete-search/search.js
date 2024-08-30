document.addEventListener("DOMContentLoaded", () => {
    const searchWrapper = document.querySelector(".search-input");
    const inputBox = searchWrapper.querySelector("input");
    const suggBox = searchWrapper.querySelector(".autocom-box");
    const icon = searchWrapper.querySelector(".icon");
    const linkTag = searchWrapper.querySelector("a");
  
    inputBox.addEventListener("keyup", handleKeyup);
    icon.addEventListener("click", handleIconClick);
  
    function handleKeyup(event) {
      const userData = event.target.value.trim();
      if (userData) {
        const filteredSuggestions = suggestions
          .filter(data => data.toLowerCase().startsWith(userData.toLowerCase()))
          .map(data => `<li>${data}</li>`);
  
        searchWrapper.classList.add("active");
        showSuggestions(filteredSuggestions);
  
        suggBox.querySelectorAll("li").forEach(item => {
          item.addEventListener("click", () => selectSuggestion(item));
        });
      } else {
        searchWrapper.classList.remove("active");
      }
    }
  
    function handleIconClick() {
      const userData = inputBox.value.trim();
      if (userData) {
        const webLink = `https://www.google.com/search?q=${userData}`;
        linkTag.setAttribute("href", webLink);
        linkTag.click();
      }
    }
  
    function selectSuggestion(element) {
      const selectData = element.textContent;
      inputBox.value = selectData;
      handleIconClick();
      searchWrapper.classList.remove("active");
    }
  
    function showSuggestions(list) {
      const listData = list.length ? list.join('') : `<li>${inputBox.value}</li>`;
      suggBox.innerHTML = listData;
    }
  });

  
  let suggestions = [
    "HTML Basics",
    "CSS Flexbox Tutorial",
    "Susan Gautam",
    "100 Days Web Dev Challange",
    "HTML CSS JS journey",
    "Responsive Web Design",
    "CSS Grid Layout",
    "HTML5 Elements",
    "JavaScript for Beginners",
    "CSS Animations and Transitions",
    "Web Development Best Practices",
    "HTML Forms and Input Types",
    "CSS Variables and Custom Properties",
    "JavaScript DOM Manipulation",
    "Web Accessibility Guidelines",
    "HTML Semantic Elements",
    "CSS Frameworks Comparison",
    "JavaScript Asynchronous Programming",
    "Modern CSS Techniques",
    "Building a Responsive Navbar",
    "HTML and CSS Project Ideas",
    "JavaScript Event Handling",
    "Creating Interactive Forms with JavaScript",
    "HTML Canvas API",
    "CSS Grid vs Flexbox",
    "JavaScript Closures Explained",
    "Optimizing Web Performance with CSS and JS",
    "HTML and CSS Layout Patterns"
  ];
  
