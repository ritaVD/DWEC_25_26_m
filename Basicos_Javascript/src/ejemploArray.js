//Usos de los arrays


// declaracion:
const edades = [];
const frutas = ["pera", "manzana", "fresa"];

//usando el constructor Array 
const cp = new Array();
const cc = new Array("hdfiosh8", "iohdaoijfief");


//Añadir: 

edades.push(10); //añadiendo al final
edades.unshift(); //añadiendo al principio

//eliminar
edades.pop();  //elimina el último y retorna lo que ha eliminado
edades.shift(); //elimina al principio y retorna lo que ha eliminado

// **** slice -> extraer trozo de un array y me retonar un nuevo array sin mutar el original

//edades.slice(1,2)

//******************************* map */
//una función que se le pasa como parámetro una funcion se llama callback
edades.map ( (edad) => edad*2 )


// ************** filter 

edades.filter( (edad) => edad >= 18 )


//Dado un array de nombre, crear una funcion llamada mayúsculas que ponga en mayúsculas todos los elemenstos de ese array que le paso parámetro
//segunda funcion llamada precios con iba que al pasarle un array de precios me los devuelva con el iba incluido 
//crear una función llamada impares cuadrado que le pase una array de numeros y me devuelva solo los impares elevados al cuadrado 
//crear una funcion llamada normalizar email que le pase un array de emails que pueden llevar espacios al principio o al final
//  y que me los devuelva sin espacios ni al principio ni al final
//crear una funciñon llamada filtrar longitud que le pase como parametro nombres(array), un tamaño y 
// me devuelva solo a traves de un array los nombres cuyo tamaño es mayor o igual que el parámetro
//normalizar nombres propios (crear una funcion) que le pase como parametro un array de nombres y me los devuelva con la letra capitan en mayusucula
// tanto de nombre como de apellidos

const nombre = ["pEdro Vazquez", "kylE whitemore", "aNtia", "Pepe", "marIa"]

/**
 * Pone el nombre en mayúsculas
 * @param {String[]} nombre 
 * @returns El nombre en mayúsculas
 */
function mayusculas (nombre){
    return nombre.map(nombre => nombre.toUpperCase());
}


const precios = [10, 6.99, 8, 7.56]

/**
 * Devuelve los precios con iva
 * @param {number[]} precios 
 * @returns {number[]} El precio con iva
 */

function iva (precios){
    return precios.map(precio => precio * 1.21);

}

const numeros = [4, 5,6,9,76,80,26];
/**
 * Devuelve los números impares elevados al cuadrado
 * @param {number[]} numeros Los numeros del array
 * @returns {number[]} Los impares multiplicados elevado por dos
 */
function imparesCuadrados(numeros){
    return numeros
        .filter( numero => numero % 2 !== 0)    
        .map(numero => numero * numero)
}
console.log(imparesCuadrados(numeros));


const correos = ["  usuario1@gmail.com  ", "  prueba@hotmail.com", "test@yahoo.es   "];
/**
 * Quita los espacios de los correos
 * @param {string[]} correos 
 * @returns El email sin espacios
 */
function normalizarEmail(correos){
    return correos
        .map(correo => correo.trim());
}
console.log(normalizarEmail(correos));


/**
 * Devuelve los nombres que tienen más tamaño que el pasado
 * @param {string[]} nombre 
 * @param {number} size 
 * @returns {string[]}Devuelve los nombres que son mayor al tamaño
 */
function filtrarLongitud(name = [], size=0){
    return name
        .filter(name => name.length >= size)
}

console.log(filtrarLongitud(names, 5));


/**
 * Pone en mayuscula la primera letra del nombre y del apellido
 * @param {string[]} nombre
 * @returns El nombre y apellido con la primera en mayusculas
 */
function normalizarNombres(nombre) {
  return nombre.map(nombre => 
    nombre
      .toLowerCase()
      .split(" ")  //devuelve un array
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(" ")
  );
}