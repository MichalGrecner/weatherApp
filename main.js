import './style.css'

import { getWeather, getForecast } from './get-data.js'
import { getLocation } from './get-location.js';
import { drawCurrentWeather } from './drawCurrentWeather.js';
import { drawForecast } from './drawForecast.js';



const location = await getLocation();
const actualWeather = await getWeather(location);
const forecast = await getForecast(location);

drawCurrentWeather(actualWeather);
drawForecast(forecast);


