const searchInput = document.querySelector("#searchInput");
const searchBtn = document.querySelector("#searchBtn");

const apiKey = "986ef598023b92c624a0f64739812f59";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector("#city");
const temp = document.querySelector("#temp");
const humid = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const weatherIcon = document.querySelector("#weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();
  console.log(data);

  cityName.innerHTML = data.name;
  temp.innerHTML = Math.round(data.main.temp) + "°c";
  humid.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + " km/h";

  const wCondition = data.weather[0].main;
  if (wCondition == "Clouds") {
    weatherIcon.src = "./img/icons/clouds.png";
  } else if (wCondition == "Rain") {
    weatherIcon.src = "./img/icons/rain.png";
  } else if (wCondition == "Drizzle") {
    weatherIcon.src = "./img/icons/drizzle.png";
  } else if (wCondition == "Clear") {
    weatherIcon.src = "./img/icons/clear.png";
  } else if (wCondition == "Mist") {
    weatherIcon.src = "./img/icons/mist.png";
  } else if (wCondition == "Snow") {
    weatherIcon.src = "./img/icons/snow.png";
  }
}

checkWeather("alger");

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
  searchInput.value = "";
});

searchInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
