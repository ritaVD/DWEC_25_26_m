
import { dbTareas } from "../db/db";


// importaciones
const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;



// aqui van las funciones helper para las tareas

export const rellenarLocalStorage = (arrayTareas, tareas = "Tareas") => {
    // Guardar en el localStorage en la clave 
    localStorage.setItem(tareas, JSON.stringify(arrayTareas));
}

// Crear una función llamada mostrarTareas que le pase como paramaetro una clave y me muestre de la consola la clave. 
// Utilizar console.info("hola"); 

export const mostrarTareas = (clave = "Tareas") => {
   console.table(JSON.parse(localStorage.getItem(clave)));
}


export default mostrarTareas;

//Devuelve un array con las tareas cuyo nombre contenga el texto buscado.
//La búsqueda debe ser insensible a mayúsculas/minúsculas y permitir coincidencias parciales.
/**
 * @author Rita Vicente
 * @param {String} nombreBuscado   - Nombre a buscar
 * @returns  {Array} Array de tareas que coinciden con el nombre buscado
 */

export const buscarPorNombre = (nombreBuscado = "") => {
    if (!localStorage.getItem("Tareas")) {
        return [];
    }
    const tareas = JSON.parse(localStorage.getItem("Tareas"));
    return tareas.filter(tarea => tarea.nombre.toLowerCase().includes(nombreBuscado.toLowerCase()));
};



//Devuelve un array con todas las tareas almacenas en localStorage. 
//Si no hay tareas devuelve un array vacio
export const getTareas = (clave = "Tareas") => {
    console.table(JSON.parse(localStorage.getItem(clave)) ?? []);
}

//Recive un array de tareas y lo guarda en localStorage bajo la clave "tareas"
//señalizandolo previamente a JSON

export const saveTareasPrueba = (arrayTareas = []) => {
    localStorage.setItem("Tareas", JSON.stringify(arrayTareas));
}

//Crea una nueva tarea con el nombre recibido, genera su id unico, establece 
// completada: false y la fecha de creación actual
//La añade al array de tareas y actualiza el localStorage.

export const addTarea = (nombre = "tarea") => {
    localStorage.setItem(nombre, )
}


function safeJSONParce(text){
    try {
        if(typeof text !== "string") {
            throw new Error(`El ${text} no es un string`);
         }; 
        return JSON.parse(text);
    
    }catch (error){
        throw new Error("Error al parsear JSON");
    }

}

export function saveTareas (arrayTareas= []){
    try{
        if(!Array.isArray(arrayTareas)){
            throw new Error(`El ${arrayTareas} no es un array`);

        }
        // serializar -> convierto a string
        const json = JSON.stringify(arrayTareas);
        
        //guardo en localStorage
        localStorage.setItem(TEXT_KEY, json);
        console.info("Array guardado correctamente"); 


    }catch (error){
        console.error("Error al realizar el amacenamiento en localStorage")
    }
}


export const addTareaDef = (nombreTarea) => {
    const limpio = String (nombreTarea ?? "").trim(); 
    try {
        const nuevaTarea = {
            id: uid(5),
            nombre, 
            fechaCreacion: new Date.toISOString(),
            completada: false,
        
        }
        dbTareas.push(nuevaTarea);
        saveTareas(dbTareas);
    }catch (error){

    }



}


const getTarea2 = () => {
    const dataSinParsear = localStorage.getItem(TEXT_KEY); 
    const dataParseada = safeJSONParce(dataSinParsear); 
    if (!Array.isArray(dataParseada)){  
        console.Error("Error en la data"); 
        return [];
        
    }

    
}