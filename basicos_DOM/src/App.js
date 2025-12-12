//import { createListChoresSinFecth } from "./helpers/ejercicio2"
import  createEjercicioWeather  from "./helpers/ejercicioWeather"


export default function createApp() {
  const appDiv = document.getElementById("app");
  //appDiv.appendChild(createEjercicio3().render(true));
  appDiv.appendChild(createEjercicioWeather().render());
}