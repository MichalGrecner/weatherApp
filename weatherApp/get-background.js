export async function getBackground(){
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Prague,cz&APPID=0f348b83dbe8bc5573a52b603954a9c7`);
  const weatherData = await response.json()
  return weatherData
}