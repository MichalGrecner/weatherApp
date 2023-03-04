

function createLineCurrent (id, innerText){
  const parent = document.querySelector(".currentWeather")
  const p = document.getElementById(id);
  p.innerHTML=innerText;
}


export function drawCurrentWeather(weather){
  console.log(weather)

  const app = document.getElementById("app");


  const DOMlocation = document.getElementById("location");
  DOMlocation.innerText=weather.name + ", " + weather.sys.country;


  createLineCurrent("description",weather.weather[0].description);

  const currentIcon = document.getElementById("actualIcon");
  currentIcon.src=`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;

  createLineCurrent("temperature", `<span class="material-symbols-outlined">
  device_thermostat
  </span>${weather.main.temp} °C`)
  createLineCurrent("temperatureMax", `<span class="material-symbols-outlined">
  arrow_upward
  </span>${weather.main.temp_max} °C`)
  createLineCurrent("temperatureMin", `<span class="material-symbols-outlined">
  arrow_downward
  </span>${weather.main.temp_min} °C`)
  createLineCurrent("humidity", `<span class="material-symbols-outlined">
  humidity_low
  </span>${weather.main.humidity} %`)
  createLineCurrent("pressure", `${weather.main.pressure} hPa`)
  createLineCurrent("wind", `<span class="material-symbols-outlined">
  air
  </span>${weather.wind.speed} km/s`)

}
