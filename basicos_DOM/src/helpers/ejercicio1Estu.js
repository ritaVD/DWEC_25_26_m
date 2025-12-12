import fetching from "../utils/fetching";

//importar las variables
const URL = import.meta.env.VITE_URL;
const PORT = import.meta.env.VITE_PORT;

const URL_PORT = `${URL}:${PORT}`;



function createejercicio1Estu() {
    const createBienvenidaSinFecth = () => {
        const container = document.createElement('div'); 

        // Creamos el header
        const header = document.createElement('header'); 
        header.className = "border border-gray-400 p-4 bg-white"

        const headerContent = document.createElement('div');
        headerContent.className = "max-w-7xl mx-auto"
        
        const title = document.createElement('h1')
        title.className = "text-2xl font-bold text-gray-800"
        title.textContent = "Aplicación";

        header.appendChild(headerContent);
        headerContent.appendChild(title);
        container.appendChild(header);

        const main = document.createElement('div') // Es la zona donde va el ejercicio
        main.className = "border border-gray-400 p-4"

        // El ejercicio en si: 
        const mainContent = document.className('p'); 
        mainContent.className = 'welcome-message'; 
        mainContent.textContent = "Hola, bienvenido a JavaScript"

        //lo añadimos al main
        main.appendChild(mainContent)
        container.appendChild(main)


        //Usando fetching
        const createBienvenidaConFecth = () => {
            const parrafo = document.createElement ('p'); 
            parrafo.classList.add('welcome-message') //añade una clase pudiendo añadir otras, className borra las anteriores
            parrafo.textContent = "Cargando..."

            fetching("bienvenida")
              .then((data) => {  //cuando la promesa se resuelva bien ejecuta esta funcion
                parrafo.textContent = data.texto; //data es el objeto json que devolvio el servior y cogemos ese texto de ese JSON. Es decir: cuando lleguen los datos del servidor, escribe dentro del parrafo el texto que viene
              })
              .catch ((err) => {  // es el plan B, si algo falla en la promesa devuelve un error
                parrafo.textContent = "Error cargando el mensaje";
                console.error(err); 
              })
        }



        return {
            element: container
        }





        


        
    }

}