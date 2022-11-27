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
  
  function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
  
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
  }
  function searchCity(city) {
    let apiKey = "2ad3df86f01baa30d925420a827292df";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(displayTemperature);
  }
  
  function handleCity(e) {
    e.preventDefault();
    let city = document.querySelector("#city-input");
    searchCity(city.value);
  }
  
  function showPosition(position) {
    let h1 = document.querySelector("h1");
    h1.innerHTML = `your latitude is ${position.coords.latitude} and your longitude is ${position.coords.longitude}`;
  }
  function getCurrentPosition() {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  let currentLocationButton = document.querySelector("#current-location-button");
  currentLocationButton.addEventListener("click", getCurrentPosition);
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = new Date(currentTime);
  
  let searchForm = document.querySelector("#search-form");
  searchForm.addEventListener("submit", handleCity);
  