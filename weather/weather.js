const apiKey = "7735aed9bd56ca310a01fd871da100fa";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".icon");

async function checkWeather(city) {
  try {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    setWeatherIcon(data.weather[0].main);

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
}
function setWeatherIcon(weatherCondition) {
  switch (weatherCondition) {
    case "Clouds":
      weatherIcon.src = "clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "clear.png";
      break;
    case "Drizzle":
      weatherIcon.src = "drizzle.png";
      break;
    case "Rain":
      weatherIcon.src = "rain.png";
      break;
    case "Mist":
      weatherIcon.src = "mist.png";
      break;
    case "Snow":
      weatherIcon.src = "snow.png";
      break;
    default:
      weatherIcon.src = "clear.png";
      break;
  }
}

searchButton.addEventListener("click", () => {
  const city = searchInput.value.trim();
  if (city !== "") {
    checkWeather(city);
  } else {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
});
