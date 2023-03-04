(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const u="0f348b83dbe8bc5573a52b603954a9c7";async function p(t){const n=String(t[0]),o=String(t[1]),a=`https://api.openweathermap.org/data/2.5/weather?lat=${n}&lon=${o}&units=metric&appid=${u}`;return await(await fetch(a)).json()}async function f(t){const n=String(t[0]),o=String(t[1]),a=`https://api.openweathermap.org/data/2.5/forecast?lat=${n}&lon=${o}&units=metric&appid=${u}`;return await(await fetch(a)).json()}function g(){return new Promise(function(t,n){navigator.geolocation.getCurrentPosition(t,n)})}async function y(){try{const t=await g(),n=t.coords.latitude,o=t.coords.longitude;return[n,o]}catch{return[50.088,14.4208]}}function r(t,n){document.querySelector(".currentWeather");const o=document.getElementById(t);o.innerHTML=n}function h(t){console.log(t),document.getElementById("app");const n=document.getElementById("location");n.innerText=t.name+", "+t.sys.country,r("description",t.weather[0].description);const o=document.getElementById("actualIcon");o.src=`http://openweathermap.org/img/wn/${t.weather[0].icon}.png`,r("temperature",`<span class="material-symbols-outlined">
  device_thermostat
  </span>${t.main.temp} °C`),r("temperatureMax",`<span class="material-symbols-outlined">
  arrow_upward
  </span>${t.main.temp_max} °C`),r("temperatureMin",`<span class="material-symbols-outlined">
  arrow_downward
  </span>${t.main.temp_min} °C`),r("humidity",`<span class="material-symbols-outlined">
  humidity_low
  </span>${t.main.humidity} %`),r("pressure",`${t.main.pressure} hPa`),r("wind",`<span class="material-symbols-outlined">
  air
  </span>${t.wind.speed} km/s`)}function i(t,n,o){const a=document.querySelector(t),e=document.createElement("p");e.classList.add(o),e.innerHTML=n,a.appendChild(e)}function w(t){console.log(t),t.list.forEach(function(n,o){const a=document.querySelector(".forecast"),e=document.createElement("div");e.classList.add("card"),e.classList.add("card"+o),a.appendChild(e);const s=n.dt_txt.slice(0,10).split("-"),c=n.dt_txt.slice(11);i(".card"+o,`${s[2]}.${s[1]}.${s[0]}`,"date"),i(".card"+o,`${c}`,"time");const d=document.createElement("img");d.classList.add("forecastIcon"),d.src=`http://openweathermap.org/img/wn/${n.weather[0].icon}.png`,e.appendChild(d),i(".card"+o,`${n.weather[0].description}`,"description");const l=document.createElement("div");l.classList.add("cardBottom"+o),l.classList.add("cardBottom"),e.appendChild(l),i(".cardBottom"+o,`<span class="material-symbols-outlined">
    device_thermostat
    </span>${n.main.temp}°C`,"temp"),i(".cardBottom"+o,`<span class="material-symbols-outlined">
    air
    </span>${n.wind.speed} km/s`,"wind")})}const m=await y(),$=await p(m),L=await f(m);h($);w(L);
