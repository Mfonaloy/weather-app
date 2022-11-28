function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#city");
    let cityInput = document.querySelector("#city-input");
    cityElement.innerHTML = cityInput.value;
  }
  
  function displayWeatherCondition(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
  
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;

    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  }

  function searchCity(city) {
    let apiKey = "2ad3df86f01baa30d925420a827292df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayWeatherCondition);
  }
  
  function handleCity(e) {
    e.preventDefault();
    let city = document.querySelector("#city-input");
    searchCity(city.value);
  }
  
  function searchLocation(position) {
    let apiKey = "2ad3df86f01baa30d925420a827292df";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
    position.coords.latitude
  }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

 axios.get(apiUrl).then(displayWeatherCondition);
  }

  function getCurrentLocation(event){
    event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
  }
  
  function convertToFahrenheit(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 66;
  }
  
  function convertToCelsius(event) {
    event.preventDefault();
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = 19;
  }
  
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentLocation);
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleCity);
  
  searchCity("Abuja");