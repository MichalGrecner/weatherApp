import './style.css'

import { getData } from './get-data.js'






getData();

const actualWeather = await getData();
console.log("location: " + actualWeather.name + " " +actualWeather.sys.country)

//console.log(actualWeather.weather[0])

// for(const data in actualWeather.weather[0]){
//   console.log(data)
// }

for(const [key, value] of Object.entries(actualWeather.weather[0])){
  if(key === "description")console.log(`${key} : ${value}`)
}

console.log(actualWeather)