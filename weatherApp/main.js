import './style.css'

import { getWeather, getForecast } from './get-data.js'
import { getLocation } from './get-location.js';



const location = await getLocation();
const actualWeather = await getWeather(location);
//console.log("Showing current weather for: " + location)

const app = document.getElementById("app");


function createLineCurrent (id, innerText){
  const parent = document.querySelector(".currentWeather")
  const p = document.getElementById(id);
  p.innerText=innerText;
}

const DOMlocation = document.getElementById("location");
DOMlocation.innerText=actualWeather.name + ", " + actualWeather.sys.country;





//console.log("weather for: " + actualWeather.name + " " +actualWeather.sys.country)


// for(const [key, value] of Object.entries(actualWeather.weather[0])){
//   if(key === "description") createLineCurrent("description", value)
//   if(key === "icon") {
//     const currentIcon = document.getElementById("actualIcon")
//     currentIcon.src=`http://openweathermap.org/img/wn/${value}.png`
//   }
// }

createLineCurrent("description", actualWeather.weather[0].description);

const currentIcon = document.getElementById("actualIcon");
currentIcon.src=`http://openweathermap.org/img/wn/${actualWeather.weather[0].icon}.png`;

createLineCurrent("temperature", `Actual temp: ${actualWeather.main.temp} °C`)
createLineCurrent("feelsLike", `Feels like ${actualWeather.main.feels_like} °C`)

createLineCurrent("temperatureMin", `Max today: ${actualWeather.main.temp_max} °C`)
createLineCurrent("temperatureMax", `Min today: ${actualWeather.main.temp_min} °C`)
createLineCurrent("humidity", `Humidity: ${actualWeather.main.humidity} %`)
createLineCurrent("pressure", `Pressure: ${actualWeather.main.pressure} hPa`)


//console.log(`${key} : ${value}`)

const forecast = await getForecast(location);


function forecastLine(parent,text, cls ){
  const parentElement = document.querySelector(parent)
  const line = document.createElement("p");
  line.classList.add(cls)
  line.innerText = text;
  parentElement.appendChild(line)
}

console.log(actualWeather)

console.log("forecast: ")
console.log(forecast)

//for (const [ day, i] of forecast.list)
forecast.list.forEach(function (day, i){
  // console.log(day.dt_txt)
  // console.log(day.weather[0].description)
  // console.log(day.weather[0].icon)
  const forecastDiv = document.querySelector(".forecast")
  const card = document.createElement("div");
  card.classList.add("card")
  card.classList.add("card"+i)
  forecastDiv.appendChild(card)
  forecastLine(".card"+i, `day: ${day.dt_txt}`, "date")

  const icon = document.createElement("img");
  icon.classList.add("forecastIcon");
  icon.src=`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`
  card.appendChild(icon)

  forecastLine(".card"+i, `temp: ${day.main.temp}`, "temp")
  forecastLine(".card"+i, `feels like: ${day.main.feels_like}`, "feel-temp")
  //forecastLine(".card"+i, `max: ${day.main.temp_max}`, "max-temp")
  //forecastLine(".card"+i, `min: ${day.main.temp_min}`, "min-temp")
  forecastLine(".card"+i, `description: ${day.weather[0].description}`, "description")
  
  
  
});


