//Primer ejercicio de JavaScript
console.log("Hola Mundo!");

//Declarar variables

// Declarar la funcion (hay q documenrarla)
/*
Descripcion: Esta funcion suma dos numeros
Parametros:
    - a: numero
    - b: numero
Retorna:  La suma de a y b
/*
/**
 * Suma dos numeros y devuelve el resultado
 * @param {number} [a=0] -primer numero a sumar con valor por defecto 0
 * @param {number} [b=0]  -segundo numero a sumar con valor por defecto 0
 * @returns {number} - La suma de a y b
 */
function suma(a, b) {
    return a + b;
}

//Inicializar la aplicación
console.log(suma(0,5));


// condicion ? se reañliza si es true : se realiza si es false
/*
let edad = 17;
edad >= 18 ? alert ("Eres mayor de edad") : alert("Eres menor de edad");
*/

function saludar (nombreUsuario){
    //return 'Bienvenid@'
    //let mensaje = nombreUsuario ?? "Usuario";
    return `Bienvenid@ ${nombreUsuario ?? "Usuario"}`
}

let nombre;
console.log(saludar(nombre));

