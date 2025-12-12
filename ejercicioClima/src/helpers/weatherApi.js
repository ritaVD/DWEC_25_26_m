/* 
Crea una funcion getWeatherByCity(cityName){
que devuelva una data en json
}

2) crear una funcion llamada parseWeatherData(data){
    QUE DEVUELVA:
    city, pais, temperatura, humedad, viento, descripcion
}
*/

export default function createclimateApp() {
    const API_URL = import.meta.env.VITE_API_URL || "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEYWEATHER || "";


    function guardarLocalStorage (key, valor) {
        localStorage.setItem(key, JSON.stringify(valor));
    }

    function sacarLocalStorage (key){
        const data = localStorage.getItem(key);
        if(!data){
            return []
        }
        return new Map(JSON.parse(data))
    }

    const container = document.createElement('div')
    const header = document.createElement('header')
    header.textContent = 'Buscado de climas'
    container.appendChild(header)

    const footer = document.createElement('footer')
    footer.textContent= 'Datos'
    container.appendChild(footer)
    const getWeatherByCity =  async (cityName) => {
        const data = fetching(API_URL)
    }

    const parseWeatherData = (data) => {
        const dataParseada = {
            name: data.name,
            country: data.sys.country,
            temperature: data.main.temperature,
            humidity: data.main.humidity,
            wind: data.wind.speed

        }
    }

}