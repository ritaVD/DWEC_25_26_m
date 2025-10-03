// EJERCICIO : Destructuring profundo

import { productos } from './data/data.js';
import { extraerData } from './helpers/myFunction.js';

// Inicio de la aplicación

const newDataArray = (arrayProducts) => {arrayProducts
    .map((product) => extraerData(product));
}

newDataArray(productos);