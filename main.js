let weather = {
  apiKey: "29793a695253066981df4f80d5b3293c",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((res) => res.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    city = document.querySelector(".city");
    city.innerText = "weather in " + name;
    document.querySelector(".description").innerText =
      "Weather Status : " + description;
    document.querySelector(".temp").innerText = temp + " C°";
    document.querySelector(".humidity").innerText = "Humidity : " + humidity;
    document.querySelector(".wind").innerText =
      "Wind Speed : " + speed + " km/h";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};
document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});
document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });
// weather.fetchWeather("spain");
