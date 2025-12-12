export default function createEjercicio11(){
    const URL = "https://rickandmortyapi.com/api/character";
    const state = {
        cache: new Map(),
        isLoading: false,
    }

    const debounce = () => {
        let timeout;
        
        return (...args) => {
            clearTimeout(timeout) 
            timeout = setTimeout(()=> fn( ...args ), delay)

        }

    }

    const displayCharacters = async (charactersArray) => {
        xxx.innerHtml = charactersArray
          .map(character => {
            `<div>
            ${character.name}
            ${character.image}
            
            </div>`
          });

        

        const url = `${URL}/?name=${encodeURIComponent(cleanName)}`

        try {
            const response = await fetch(url);
            if (!response.ok){
              throw new Error ("Error en API");
    
            }
            const data = await response.json();
            return data.results || [];
        }catch(error){
            console.log("Error", error);
            throw error;
        }

    } 
    const search = async (query) => {
        //Funcion que busca lo que yo escriba en el input
        const term = query.trim().toLowerCase();
        if (!term) {
            displayEmpy();
            return;
        }
        if(state.cache.has(term)){
           //pinto desde el mapa l displaycharacteres
           displayCharacters(state.cache.get(term));
        }
        state.isLoading = true;
        try {
            const response = await fetch(`${URL}/?name=${encodeURIComponent(term)}`);
            if (!response.ok){
              throw new Error ("Error en API");
    
            }
            const data = await response.json();
            return data.results || [];
        }catch(error){
            console.log("Error", error);
            throw error;
        }
   }

    }

    const displayError = () => {
        //xxxx.innerHtml = "<h3 class="error">Ha ocurrido un error</h3>";

    }


    const displayLoading = () => {
        // loop
        Loader.open();
        Loader.close()

    }

    const displayEmpy = () => {
        //xxxx.innerHtml = "<h3 class="error">No hay resultados</h3>";
    }
    const render = () => {
        const mainContainer = document.createElement("div");
        const title = document.createElement("h2")
        title.textContent = "Buscador simple"
        mainContainer.appendChild(title);
        const form = document.createElement("form");
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Escribe el nombre del personaje";
        form.appendChild(input);
        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Buscar";
        form.appendChild(button);
        mainContainer.appendChild(form);
        const resultsContainer = document.createElement("div");
        mainContainer.appendChild(resultsContainer);
        form.addEventListener("submit", async (event) => {
            event.preventDefault(); // para que no recargue la página   
            await search(input.value);
        });
        return mainContainer;
    }

