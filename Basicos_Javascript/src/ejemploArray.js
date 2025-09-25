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

function mayusculas (nombre){
    return nombre.map(nombre => nombre.toUpperCase());
}


const precios = [10, 6.99, 8, 7.56]

function iva (precios){
    return precios.map(precio => precio *1.21);

}

const numeros = [4, 5,6,9,76,80,26];

function imparesCuadrados(numeros){
    return numeros.filter( numero => numero % 2 !== 0).map(numero => numero * numero)
}

const correos = ["  usuario1@gmail.com  ", "  prueba@hotmail.com", "test@yahoo.es   "];

function normalizarEmail(correos){
    return correos.map(correo => correo.trim());
}

function filtrarLongitud(nombre, tamño){
    return nombre.filter(nombre => nombre.length >= tamaño)
}

function normalizarNombres(arr) {
  return arr.map(nombre => 
    nombre
      .toLowerCase()
      .split(" ")
      .map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1))
      .join(" ")
  );
}