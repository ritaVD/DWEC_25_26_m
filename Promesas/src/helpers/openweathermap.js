//-----------
//OpenWeatherMap Helper Functions
//-----------

const API_KEY = import.meta.env.VITE_API_KEY;
const VITE_API_OPENWEATHER = import.meta.env.VITE_API_OPENWEATHER;

// VERSION 1 USANDO PROMISE
export function getWeatherPromise (city = "Granada"){
    //url
    const URL = `${VITE_API_OPENWEATHER}?q=${city}`; 

    // petición a una api de openweather
    return fetch(URL)
        .then(response => {
            if (!response.ok) throw new Error ("Error")
            return response.json()
        })
        .then(data => {
            console.log(`Clima de la ciudad ${city}`)
            console.log(`Temperatura de la ciudad ${data.main.temp}`)
            const arrayImg = ["nublado, rayo, sol, sol con nubes"]; 
            const weather = data.weather[0].main
            console.log(`${weather}`);
            return data;
        })
        .catch(error => console.log("Error"))
        .finally(()=> console.log("Cerrando getWeatherPromisa API"))
        ;
}