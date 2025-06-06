// Отримати погоду за допомогою OpenWeatherMap API Опис:
//  Використайте публічне API OpenWeatherMap для отримання поточної погоди.
//  Зробіть GET-запит за адресою https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY},
//  де {city} - назва міста, а {API_KEY} - ваш ключ API OpenWeatherMap. Перегляньте отримані дані щодо погоди.

function makeList(obj) {
  const placeholder = `
  <div class="weather-card">
    <h1>Погода в місті ${obj.name}</h1>
    <img src="https://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png" alt="Погода">
    <h2>${obj.weather[0].description}</h2>
    <h3>${obj.main.temp}°C</h3>
    <ul class="weather-list">
      <li>Відчувається як: ${obj.main.feels_like}</li>
      <li>Хмарність: ${obj.clouds.all}%</li>
      <li>Вологість: ${obj.main.humidity}%</li>
      <li>Швидкість вітру: ${obj.wind.speed} м/с</li>
    </ul>
  </div>
  `;
  return placeholder;
}

fetch("https://api.openweathermap.org/data/2.5/weather?q=Sumy&appid=22e30256a6bc217554b8155e50f42d6c&units=metric&lang=ua")
  .then(response => response.json())
  .then(data => {
    document.querySelector(".weather").innerHTML = makeList(data);
  })
  .catch(error => {
    console.error("Помилка при завантаженні даних:", error);
  });