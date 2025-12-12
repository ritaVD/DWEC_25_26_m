//Otro ejercicio
/*
Crear una aplicacion que conmsulte a la api del clima constituida por 6 elementos subdivididos en un header, 1 footer, y 1 main . El header y el footer se construyen utilizando los elementos que hemos visto del dom. 
Header-> titutlo 
footer_> nuestros datos
El main esta subdivivdo en3 componentes que osn: la search div, la weather div y la favorites div.
El componnete search se encarga de buscar dentro de la api la ciudad que queramos
Ejempplicar el uso de un almacenamiento con map en localStorage  (cache)
El componente donde vamos a pintar que es weather div disponedremos de un array de  imagenes almacenadas en public con los diferentes estados climatologicos posibles
La tarjeta favorites div almacenara las ciudades o tarjetas favorita.
Para hacer favorita una ciudad basta con dos clicks de raton y automaticamente se guardara en la div favorites
Para sacar una tarjeta de las favorittes se hara boton derecho, pedir confirmación y se sacará. Persistencia si recarga que todo se quede como esta
*/

export default function weather2 () {
    const API_URL = "url"
    const API_KEY = "key"

    const guardarLocal = (key, map) =>{
        localStorage.setItem(key, JSON.stringify([...map]))
    }
    const sacarLocal = (key) => {
        const data = localStorage.getItem(key)
        if(!data) return [];
        return new Map(JSON.parse(data))
    }
    const cache = sacarLocal("weatherCache");
    const favorites = sacarLocal("weatherFavorites");

    //Contenedor principal
    const mainContainer = document.createElement('div');

    //Header
    const header = document.createElement('header')
    header.className = '';
    header.textContent = 'Titulo'
    mainContainer.appendChild(header)

    //Footer
    const footer = document.createElement('footer')
    footer.className = ''
    footer.textContent = 'Footer'
    mainContainer.appendChild(footer)

    /*
    
    
    const search = async (nombreCiudad) => {
        const resultados = await fetch(URL)
        if(!resultados.ok){throw new Error('Error')}
        const datos = await resultados.json()

        datos.forEach(ciudad => {
            if(nombreCiudad === ciudad.name){
            const card = document.createElement('div')
            const title = document.createElement('h1')
            title.textContent = ciudad.name;
            const input = document.createElement('input')
            input.type = 'text'
            input.placeholder = 'Pon el nombre de la ciudad'
            const button = document.createElement('button')
            button.textContent = 'buscar'
            card.appendChild(input)
            card.appendChild(button)
            card.appendChild(title)

            }
            })
        }
    */

    //main
    const main = document.createElement('div')
    main.className = '';

    //Search Div

    const input = document.createElement('input');
    input.className = '';
    input.textContent = 'Nombre de la ciudad'

    const button = document.createElement("button");
    button.textContent = "Buscar";

    const pedirDatos = async () => {
        try {
            const response = await fecth(url)
            if(!response.ok){
                throw new Error('Error')
            }
            const datos = await response.json();
            return datos;

        }catch (err){
            throw new Error('Error', err)

        }

        
    }
    const buscarCiudad = async (city) => {
        const cache = new Map(sacarLocal(cache));
        if (cache.has(city)){
            const card = document.createElement('div');
            card.className = '';
            card.textContent = ciudad.name; 

        }else{

            const datos2 = await pedirDatos();
    
            datos2.forEach(ciudad => {
                if(ciudad.name.toLowerCase() === city.toLowerCase().trim()){
                    const card = document.createElement('div');
                    card.className = '';
                    card.textContent = ciudad.name; 
                }
            });
        }
    }
}
