//Crear un buscador de rick and morty dinamico (con cada pulsacion del teclado,reañlizo la busqueda) para que atraves de un formulario utilizando el boton de buscar o un enter me realizara una busqueda por el nombre de todas las posibles coincidencias mostrando en un grid los resultados. 
//Utilizar fetch  para traer los datos de la api
//implementar una caché para que atraves de un map guarde las busquedas anteriores. Si busco dos veces la misma palabra no lo buscara en la api si no que se lo traera del map 
//https://rickandmortyapi.com/api/character/?name=${nombre}

export default function createEjercicioRick() {
    
  

    //Creamos el caché
    //clave: string de busqueda
    //valor: array de los personajes
    const cache = new Map();

    const fetchCharacters = async (name) => {
        const cleanName = name.trim().toLowerCase();
        if (cleanName === "") {
          return [];
        }

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
    const renderCharactersGrid = (characters) => {
  const container = document.createElement("div");
  container.classList.add("characters-grid");

  characters.forEach((char) => {
    const card = document.createElement("div");
    card.classList.add("character-card");

    const img = document.createElement("img");
    img.src = char.image;
    img.alt = char.name;
    card.appendChild(img);

    const nameEl = document.createElement("h3");
    nameEl.textContent = char.name;
    card.appendChild(nameEl);

    const infoEl = document.createElement("p");
    infoEl.textContent = `${char.status} - ${char.species}`;
    card.appendChild(infoEl);

    container.appendChild(card);
  });

  return container;
};


    const render = () => {
        const mainContainer = document.createElement("div");
        const title = document.createElement("h2")
        title.textContent = "Buscador simple"
        mainContainer.appendChild(title);

        const form = document.createElement("form");
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Nombre del personaje";
        form.appendChild(input);

        const button = document.createElement("button");
        button.type = "submit";
        button.textContent = "Buscar";
        form.appendChild(button);

        mainContainer.appendChild(form);

        const message = document.createElement("p");
        message.textContent = "Escribe un nombre";
        mainContainer.appendChild(message);

        const resultsContainer = document.createElement("div");
        resultsContainer.classList.add("results-container"); // para darle estilos luego
        mainContainer.appendChild(resultsContainer);

        const buscador = async () => {
            const text = input.value;
            const characters = await fetchCharacters(text);
            console.log(characters);
            if (characters.length === 0) {
              message.textContent = "No se han encontrado personajes.";
            } else {
             message.textContent = `Se han encontrado ${characters.length} personajes. `;
             const grid = renderCharactersGrid(characters);
             resultsContainer.appendChild(grid);
            }
        }
         form.addEventListener("submit", (event) => {
          event.preventDefault(); // para que no recargue la página
          buscador();
        });


        return mainContainer;






    }
    return {
        render
    }
}


//Otro ejercicio
/*
Crear una aplicacion que conmsulte a la api del clima constituida por 6 elementos subdivididos en un header, 1 footer, y 1 main . El header y el footer se construyen utilizando los elementos que hemos visto del dom. 
Header-> titutlo 
footer_> nuestros datos
El main esta subdivivdo en3 componentes que osn: la search card, la weather card y la favorites card.
El componnete sear se encarga de buscar dentro de la api la ciudad que queramos
Ejempplicar el uso de un almacenamiento con map en localStorage  (cache)
El componente donde vamos a pintar que es weather card disponedremos de un array de  imagenes almacenadas en public con los diferentes estados climatologicos posibles
La tarjeta favorites card almacenara las ciudades o tarjetas favorita.
Para hacer favorita una ciudad basta con dos clicks de raton y automaticamente se guardara en la card favorites
Para sacar una tarjeta de las favorittes se hara boton derecho, pedir confirmación y se sacará. Persistencia si recarga que todo se quede como esta
*/



/*
Booking
Crear un sistema booking de gestion de reservas que permita ejemplificar la reserva en un hotel 
El sistema tendra el siguien interfaz: header-nombre de la empresa, footer- nombre, main- compouesto por: un desplegable donde puedas seleccionar de una api privada que he montado con json server las ciudades disponibles 
Dos input dates (check in  y check out) donde el check out no puede ser anterior al check in. y el numero de huespedes automaticamente me mostrara utilizando un componente card hotel todos aquellos hoteles que tengan disponibilidad en el rango de fechas indicados 
Cuando le de un click a la tarjeta automaticamente se añadira en un componente carrito reserva la informacion de el hotel, el numero de personas, numero de estrellas y total a pagar 

El total a pagar es igual al numero de huespedes * el precio de la habitacion que tiene el hotel
Desglosar el iba
Finalizar reserva - reseteamos todo 
Hay persistencia, hasta que no le des a vaciar reserva al recargar debe salir lo mismo. 


Examen: fetch-promesas
crear componentes
persistencia de datos
recorrer array
filtrar/buscar como el de ricky y morty

el putisimo ejercicio de booking 

*/