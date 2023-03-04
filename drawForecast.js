
function forecastLine(parent,text, cls ){
  const parentElement = document.querySelector(parent)
  const line = document.createElement("p");
  line.classList.add(cls)
  line.innerHTML = text;
  parentElement.appendChild(line)
}

export function drawForecast(weather){
  console.log(weather)
  //goes through list of each forecast element
  weather.list.forEach(function (day, i){
    const forecastDiv = document.querySelector(".forecast")
    const card = document.createElement("div");
    card.classList.add("card")
    card.classList.add("card"+i)
    forecastDiv.appendChild(card)
    
    const date = day.dt_txt.slice(0,10).split("-")
    
    const time = day.dt_txt.slice(11)
  
    
    forecastLine(".card"+i, `${date[2]}.${date[1]}.${date[0]}`, "date")
    forecastLine(".card"+i, `${time}`, "time")
    

    const icon = document.createElement("img");
    icon.classList.add("forecastIcon");
    icon.src=`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`
    card.appendChild(icon)
    forecastLine(".card"+i, `${day.weather[0].description}`, "description")

    const cardBottom = document.createElement("div");
    cardBottom.classList.add("cardBottom"+i);
    cardBottom.classList.add("cardBottom")
    card.appendChild(cardBottom)

    forecastLine(".cardBottom"+i, `<span class="material-symbols-outlined">
    device_thermostat
    </span>${day.main.temp}°C`, "temp")
    
    forecastLine(".cardBottom"+i, `<span class="material-symbols-outlined">
    air
    </span>${day.wind.speed} km/s`, "wind")
    
});

}
