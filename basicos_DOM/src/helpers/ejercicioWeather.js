//Otro ejercicio
/*
Crear una aplicacion que conmsulte a la api del clima constituida por 6 elementos subdivididos en un header, 1 footer, y 1 main . El header y el footer se construyen utilizando los elementos que hemos visto del dom. 
Header-> titutlo 
footer_> nuestros datos
El main esta subdivivdo en3 componentes que osn: la search div, la weather div y la favorites div.
El componnete sear se encarga de buscar dentro de la api la ciudad que queramos
Ejempplicar el uso de un almacenamiento con map en localStorage  (cache)
El componente donde vamos a pintar que es weather div disponedremos de un array de  imagenes almacenadas en public con los diferentes estados climatologicos posibles
La tarjeta favorites div almacenara las ciudades o tarjetas favorita.
Para hacer favorita una ciudad basta con dos clicks de raton y automaticamente se guardara en la div favorites
Para sacar una tarjeta de las favorittes se hara boton derecho, pedir confirmación y se sacará. Persistencia si recarga que todo se quede como esta
*/

import fetching from "../utils/fetching";


export default function createEjercicioWeather () {
    const API_URL = import.meta.env.VITE_API_URL || "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = import.meta.env.VITE_API_KEYWEATHER || "";

    
    const container = document.createElement('div');
    const caché = new Map();
    
    //header
    const header = document.createElement('header');
    const title = document.createElement('h1')
    title.textContent = 'Titulo de la aplicación de Weather'
    header.appendChild(title)

    //main
    const main = document.createElement('main')

    //Componentes
    const searchdiv = document.createElement('div')
    const input = document.createElement('input')
    input.textContent = 'Introduce la ciudad'
    const button = document.createElement('button')
    button.textContent = ('Enviar')
    fetching('https://api.openweathermap.org/data/2.5/weather')
    .then.forEach((imagen)=> {
        const weatherdiv = document.createElement('div');
        weatherdiv.innerHtml = imagen.texto;
        caché = (imagen.ciudad, imagen.datos)
        localStorage.setItem('weatherCache', JSON.stringify([...caché]))

    }).catch ((err) => {throw new Error('Error', err)})

    
    
    const favoritesdiv = document.createElement('div')

    //footer
    const footer = document.createElement('footer')
    const datos = document.createElement('h4')
    datos.textContent = 'Mis datos de contacto'
    footer.appendChild(datos)
}