import { getWeatherPromise } from "./helpers/openweathermap";
import { dataJSONAsync, dataJSONPromise } from "./helpers/utils";
import "./style.css";

//dataJSONPromise();
dataJSONAsync();
getWeatherPromise('Madrid'); 
getWeatherPromise(); 