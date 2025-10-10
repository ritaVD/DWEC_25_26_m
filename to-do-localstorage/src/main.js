// -------- Importaciones

import { dbTareas } from "./db/db";
import mostrarTareas ,{ buscarPorNombre, rellenarLocalStorage } from "./helpers/tarea";

const TEXT_KEY = import.meta.env.VITE_TEXT_KEY;


// -------- Inicio de la aplicación

rellenarLocalStorage(dbTareas, TEXT_KEY);



//mostrarTareas("Tareas");
console.table(buscarPorNombre("Hacer"));