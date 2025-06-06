fetch("https://api.openweathermap.org/data/2.5/weather?q=Sumy&appid=22e30256a6bc217554b8155e50f42d6c&units=metric&lang=ua").then(u=>u.json()).then(u=>{document.querySelector(".weather").innerHTML=`
  <div class="weather-card">
    <h1>\u{41F}\u{43E}\u{433}\u{43E}\u{434}\u{430} \u{432} \u{43C}\u{456}\u{441}\u{442}\u{456} ${u.name}</h1>
    <img src="https://openweathermap.org/img/wn/${u.weather[0].icon}@2x.png" alt="\u{41F}\u{43E}\u{433}\u{43E}\u{434}\u{430}">
    <h2>${u.weather[0].description}</h2>
    <h3>${u.main.temp}\xb0C</h3>
    <ul class="weather-list">
      <li>\u{412}\u{456}\u{434}\u{447}\u{443}\u{432}\u{430}\u{454}\u{442}\u{44C}\u{441}\u{44F} \u{44F}\u{43A}: ${u.main.feels_like}</li>
      <li>\u{425}\u{43C}\u{430}\u{440}\u{43D}\u{456}\u{441}\u{442}\u{44C}: ${u.clouds.all}%</li>
      <li>\u{412}\u{43E}\u{43B}\u{43E}\u{433}\u{456}\u{441}\u{442}\u{44C}: ${u.main.humidity}%</li>
      <li>\u{428}\u{432}\u{438}\u{434}\u{43A}\u{456}\u{441}\u{442}\u{44C} \u{432}\u{456}\u{442}\u{440}\u{443}: ${u.wind.speed} \u{43C}/\u{441}</li>
    </ul>
  </div>
  `}).catch(u=>{console.error("Помилка при завантаженні даних:",u)});
//# sourceMappingURL=test.aa01fb69.js.map
