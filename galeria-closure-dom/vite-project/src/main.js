import createApp from './App';
import './style.css'
document.addEventListener("DOMContentLoaded", () => {
    const appContainer = document.getElementById("app");
    //appContainer.className = "text-4xl text-purple-600"
    //appContainer.innerHTML = "<h1> Hola Mundo </h1> "
    const app = createApp();
    appContainer.appendChild(app);
    console.log("Aplicación inicial")


});