import { openWeatherURL } from "./apikeys.js";
export async function getData(){
  const response = await fetch(openWeatherURL);
  const weatherData = await response.json()
  return weatherData
}
