
import { alojamientos } from '../db/data'
import fetching from '../utils/fetching';

export default function createEjercicio4() {

    //closure SCOPE


    //notFetching
    const notFetching = () => alojamientos;
    //renderTable
    const renderTable = (alojamientosArray) => {
        const tableContainer = document.createElement('div');
        tableContainer.classList.add('table-container');

        const table = document.createElement('table');
        // thead
        const thead = document.createElement('thead');
        const trHead = document.createElement('tr');
        ["Nombre", "Ubicación", "Precio", "Rating"].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            trHead.appendChild(th);
        });
        thead.appendChild(trHead);
        table.appendChild(thead);

        //tbody
        const tbody = document.createElement("tbody")
        alojamientosArray.forEach(alojamiento => {
            const tr = document.createElement('tr');
            //nombre
            const tdNombre = document.createElement('td');
            tdNombre.textContent = alojamiento.nombre;
            tr.appendChild(tdNombre);
            //Ubicacion
            const tdUbicacion = document.createElement('td');
            tdUbicacion.textContent = alojamiento.ubicacion;
            tr.appendChild(tdUbicacion);
            //Precio
            const tdPrecio = document.createElement('td');
            tdPrecio.classList.add('price');
            tdPrecio.textContent = `${alojamiento.precio}€`;
            tr.appendChild(tdPrecio);
            //Rating
            const tdRating = document.createElement('td');
            tdRating.classList.add('rating');
            tdRating.textContent = "⭐".repeat(Math.floor(alojamiento.rating));
            tr.appendChild(tdRating);

            tbody.appendChild(tr);
        })
        table.appendChild(tbody);
        tableContainer.appendChild(table);


        return tableContainer;


    }
    //render
    const render = () => {
        const mainContainer = document.createElement('div');
        //version sincrona
        const v1Wrapper = document.createElement('div');
        v1Wrapper.innerHTML = "<h3>Versión síncrona</h3>";

        //version asincrona
        const v2Wrapper = document.createElement('div');
        v2Wrapper.innerHTML = "<h3>Versión asíncrona</h3>";
        // v2Wrapper.appendChild(renderTable(notFetching()));
        fetching("alojamientos")
        .then((data) => {
            console.log("alojamientsoddddddddd",data)
            v2Wrapper.appendChild(renderTable(data));
        })
        .catch((err) => {
            console.log("Error: ", err);
            throw err;
        });
        mainContainer.appendChild(v2Wrapper);
        return mainContainer;
    }

  return {
    render,
  }
}
