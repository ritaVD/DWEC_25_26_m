import { bienvenida } from "../db/data";
import fetching from "../utils/fetching";

export default function createEjercicio1Estudiar2() {
    const  bienvenidaSinFetch = () => {
        const container = document.createElement('div');
        const parrafo = document.createElement('p');
        parrafo.classList.add('welcome-message')
        parrafo.textContent = bienvenida.texto;
        container.appendChild(parrafo);

        return container;

    }

    const bienvenidaConFetch = () => {
        const container = document.createElement('div');
        const parrafo = document.createElement('p');
        
        fetching(bienvenida)
          .then((bienvenida) => {
            bienvenida.classList.add('welcome.message')
          })
          .catch((err) => {throw new Error('Error', err) })

        
    }

    return {
        element: container
    }

}