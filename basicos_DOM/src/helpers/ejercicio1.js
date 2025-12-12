
//importar las variables
const URL = import.meta.env.VITE_URL;
const PORT = import.meta.env.VITE_PORT;

const URL_PORT = `${URL}:${PORT}`;

export function createEjercicio1 () {
    function createBienvenidaSinFecth () {
    const container = document.createElement('div');

    //Header
    const header = document.createElement("header");
    header.className = "border border-gray-400 p-4 bg-white";

    const headerContentDiv = document.createElement("div");
    headerContentDiv.className = "max-w-7xl mx-auto";

    const headerTitle = document.createElement("h1");
    headerTitle.className = "text-2xl font-bold text-gray-800";
    headerTitle.textContent = "Aplicación"

    const main = document.createElement("main");
    main.className = "border border-gray-400 p-4";

    const mainContentDiv = document.createElement("div");
    mainContentDiv.className = "welcome-message";
    mainContentDiv.textContent = 'Hola, bienvenido a JavaScript';


    container.appendChild(header);
    container.appendChild(main);

    header.appendChild(headerContentDiv);
    headerContentDiv.appendChild(headerTitle);

    main.appendChild(mainContentDiv);

    return {
        element : container
    }
    }
    /*

    
    function createBienvenidaConFecth () {
        const PORT = import.meta.env.VITE_PORT
        const PORT = import.meta.env.VITE_PORT;
        const URL_PORT = `${URL}:${PORT}`;


        return fetch(`${URL_PORT}/bienvenida}`)
        .then(res => res.json())
        .then(miJson => {
        return miJson.texto
        })
        .catch(err => {
        console.error(err)
        })
    }


    const createBienvenidaSinFetchCorregida = () => bienvenida.texto
    }
        */


    //Aqui decido donde pintar el objeto del DOM
     /*
     const container = document.createElement("div");
     const parrafo = document.createElement('p');
        parrafo.classList.add("welcome-message");
        parrafo.textContent = createBienvenidaConFecth().then((miJson) => (parrafo.textContent = miJson));
        container.appendChild(parrafo);
        return container; 
    */


    //Retorno el objeto
    return createBienvenidaSinFecth();
}

