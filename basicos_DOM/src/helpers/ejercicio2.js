import { tareas } from '../db/data'


//export function createEjercicio2 () {
    const URL = import.meta.env.VITE_URL;
    const PORT = import.meta.env.VITE_PORT;
    const URL_PORT = `${URL}:${PORT}`;

   export function createListChoresSinFecth () {
    const container = document.createElement('div');
    const list = document.createElement('ul');

    tareas.forEach((tarea) => {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.textContent = tarea.texto;
        list.appendChild(li);
    });
    container.appendChild(list);
    return {
        element: container,
    }
    
   }
                  
    //function createListChoresConFecth () {


    //}



    //return {
       // createListChoresSinFecth,
       // createListChoresConFecth
    //}




//}