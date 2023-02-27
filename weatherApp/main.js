import './style.css'

import { getWeather, getForecast } from './get-data.js'
import { getLocation } from './get-location.js';



const location = await getLocation();
const actualWeather = await getWeather(location);
//console.log("Showing current weather for: " + location)

const app = document.getElementById("app");


function createLineCurrent (id, innerText){
  const parrent = document.querySelector(".currentWeather")
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









console.log(actualWeather)

console.log("forecast: ")
console.log(forecast)


for (const day of forecast.list){
  
  console.log(day.dt_txt)
  console.log(day.weather[0].description)
  console.log(day.weather[0].icon)
  console.log("______________________")
 
}


