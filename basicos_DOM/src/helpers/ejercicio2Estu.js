import { tareas } from '../db/data'
import fetching from '../utils/fetching';


function createEjercicio2Estu () {
    const ejercicio2SinFetching = () => {
        const container = document.createElement('div'); 
        const lista = document.createElement('ul');
        lista.classList.add('task-list');
        tareas.forEach((tarea) => {
            const li = document.createElement('li');
            li.textContent = tarea.texto; 
            li.classList.add('task-item');
            if(tarea.completada === true){
                li.classList.add('completed')
            }
            lista.appendChild(li)
        })
        container.appendChild(lista)

        return {
            element: container
        }


    }
    const ejercicio2ConFetching = () => {
        const lista = document.createElement('ul');
        fetching(tareas)
          .then ((tareas) => {
            tareas.forEach((tarea) => {
                const li = document.createElement('li');
                li.classList.add('task-item')
                li.textContent = tarea.texto;
                if (tarea.completada === true){
                    li.classList.add('completed')
                }
            })
            lista.appendChild(li);
          }) 
          .catch(() => {
            lista.innerHTML = "<li class='task-item'> Error al cargar </li>"


          })
          container.appendChild(lista)
    }
}