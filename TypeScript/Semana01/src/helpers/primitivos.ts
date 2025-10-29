// primitivos en TypeScript

// 1.- String
let nombre: string = "Rita";
let cp: string = "18013";
let mensaje: string = `Bienvenido D/Dñaa ${nombre} -> co: ${cp}`;

function procesarTexto (texto: string): string{
    return texto.trim().toUpperCase();
}
console.log(procesarTexto(mensaje))

let saludo = "Qué tal todo";
procesarTexto(saludo);

// 2.- Number

//calcularPrecioFinal(precio, impuesto, descuento)
function calcularPrecioFinal(precio: number, impuesto: number, descuento: number): number {
    return(precio*( (1+impuesto/100)) * ((1-descuento)/100))  // 21,3
    
}

console.log(calcularPrecioFinal(80, 21, 3));


// 3.- Booleanos

//cualquier tipo any (siempre q se pueda no usar)
//función que verifique que lo que pase como parámetro es un número
// NO es inifinito, !isNan



function esNumero(numero: any): boolean{
    return typeof numero === "number" && isFinite(numero) && !isNaN(numero);
}

esNumero("7");



//calcular el promedio de los elementos de un array de números

function calcularPromedio(numeros: number[]): number{
    if(numeros.length === 0){
        throw new Error("El array está vacío")
    }
    const suma:number = numeros.reduce((acc, numero)=> acc+=numero, 0 );
    return suma/numeros.length;
}

function calcularExtremos (numeros: number[]):number[] {
    if(numeros.length === 0){
        throw new Error("El array está vacío")
    }

    const min: number = Math.min(...numeros);
    const max: number = Math.max(...numeros);

    return [min, max];

}


// Comprobar si un email es correcto o no
function esValidoEail (email: string): boolean{

    //ritavicdom@gmail.com  . y espacio son caracteres especiales hay que escaparlos con \. y \s
    const emailRegex : RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);

}
esValidoEail("aaaaaa@aaaaa@aaaaaaa.es");

//interface Tipo de dato generado por el usuario para una determinada situación

interface permisoUsuario {
    puedeLeer: boolean;
    puedeEscribir: boolean;
    puedeBorrar: boolean;

}

// crear una función llamada obtener permisos dependiendo de si el usuario es administrador
//invitado o usuario que cam
// bie los permisos de la interfaz

type tipoUsuario = "administrador" | "invitado" | "usuario";

// type permisos crear un tipo de dato entre valores dados.

function obtenerPermisos(tipoUsuario: tipoUsuario): permisoUsuario{
    switch(tipoUsuario){
        case "invitado":
            return {
                puedeLeer: true,
                puedeEscribir: false,
                puedeBorrar: false,
            }
            break;
        case "usuario":
            return{
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: false,
            } 
            break;
        case "administrador":
            return{
                puedeLeer: true,
                puedeEscribir: true,
                puedeBorrar: true,
            };
            default:
                return{
                    puedeLeer: false,
                    puedeEscribir: false,
                    puedeBorrar: false,
                
                }     
    }}

obtenerPermisos("administrador");

// NULL UNDEFINED 

let posibleNombre : string | null= "Invitado";
let posibleNombreIndifenido: string | undefined = undefined;

//arrow function

const duplicar = (numero :number): number => {
    return numero * 2;
}; 
// crear una función que le pase como parámetro un array de objetos y me devuelva los usarios mayores de edad

const usuarios = [
    {nombre: "Ana", edad: 34},
    {nombre: "Carla", edad: 19},
    {nombre: "Mario", edad: 14}

]
/*
const mayorEdad = (string[]= usuarios) => {
    return (usuarios
    .filter(u => u.edad >= 18)
    .map((u) => ({nombre: u.nombre})))
    

}
    */

//funciónn procesoNumeros que cree devuelva un array de números solo
//positivos, multiplicados por 2 y ordenados de menor a mayor


const procesarNumeros = (numeros: number[]): number[] => {
  return numeros
    .filter(n => n > 0)
    .map(n => n * 2)
    .sort((a, b) => a - b)
}

// ejercicio:

interface Cliente  {
    id: number;
    nombre: string;
    email: string;
    telefono: string;
}

// Crear una función que genere un MAP 
/*
{ 
    idUsuario : {
        nombre: string,
        email: string,
        telefono: string,
    }
}
*/

const clientes: Cliente[] = [
  {
    id: 1,
    nombre: "Ana García",
    email: "ana.garcia@example.com",
    telefono: "600123456"
  },
  {
    id: 2,
    nombre: "Luis Fernández",
    email: "luis.fernandez@example.com",
    telefono: "611987654"
  },
  {
    id: 3,
    nombre: "María López",
    email: "maria.lopez@example.com",
    telefono: "622345678"
  },
  {
    id: 4,
    nombre: "Carlos Pérez",
    email: "carlos.perez@example.com",
    telefono: "633456789"
  },
  {
    id: 5,
    nombre: "Lucía Romero",
    email: "lucia.romero@example.com",
    telefono: "644567890"
  },
  {
    id: 6,
    nombre: "Javier Sánchez",
    email: "javier.sanchez@example.com",
    telefono: "655678901"
  },
  {
    id: 7,
    nombre: "Sofía Martín",
    email: "sofia.martin@example.com",
    telefono: "666789012"
  },
  {
    id: 8,
    nombre: "Andrés Navarro",
    email: "andres.navarro@example.com",
    telefono: "677890123"
  }
];

const generarMapaClientes = (clientes: Cliente[]): Map<number, { 
    nombre: string; 
    email: string; 
    telefono: string }> => {
  const mapa = new Map<number, { nombre: string; email: string; telefono: string }>();

  clientes.forEach(c => {
    mapa.set(c.id, {
      nombre: c.nombre,
      email: c.email,
      telefono: c.telefono
    });
  });

  return mapa;
};

//Ejercicio:
//Crear una calculador tipida que realice operaciones basicas para ello partimos de una interfaz llamada operacion
// formada por tipo con cuatro posibles opciones, sumar, restar, dividir, multiplicar 
// segundo elemento operando uno tipo number y operando dos 
//Función llamada calculadora q le pasaremos por parametro una operacion de tipo operacion
// y me devolvera segun el tipo el calculo de los dos operandos.
// Probarlo con 10 y 5 y /10 y 0
//Se podria ampliar a otras operaciones?

interface Operacion {
  tipo: "sumar" | "restar" | "multiplicar" | "dividir";
  operando1: number;
  operando2: number;
}
function calculadora(op: Operacion): number | string {
  switch (op.tipo) {
    case "sumar":
      return op.operando1 + op.operando2;
    case "restar":
      return op.operando1 - op.operando2;
    case "multiplicar":
      return op.operando1 * op.operando2;
    case "dividir":
      if (op.operando2 === 0) return "Error: no se puede dividir entre 0";
      return op.operando1 / op.operando2;
    default:
      return "Operación no válida";
  }
}

console.log(calculadora({ tipo: "sumar", operando1: 10, operando2: 5 }));       
console.log(calculadora({ tipo: "dividir", operando1: 10, operando2: 0 }));     
console.log(calculadora({ tipo: "multiplicar", operando1: 10, operando2: 5 })); 
console.log(calculadora({ tipo: "restar", operando1: 10, operando2: 5 }));

let cualquieracosa:any = "texto";
cualquieracosa = 45;
cualquieracosa = true;

let valorDesconocido : unknown = "no se";

if (typeof valorDesconocido === "string"){

}

interface Usuarios {
  nombre: string
}

type Datos ={
  nombreEmpresa: string
}

const edades = new Map<string, number>();
edades.set("Antonio", 56)
edades.has("Antonio")

interface Dato {
  nombre: string;
  email: string;
  cp: number;

}

const users = new Map<string, Dato>();
users.set("Antonio",{
  nombre: "Antonio Fernandez",
  email: "afernandez@gmail.com",
  cp: 18002,
  
} );

const mySet = new Set<number>();
mySet.add(19);

// Crear un sistema de categoriás:
// Crear una varibale llamada catalogo que tenga dentro un 
//set de productos

//Crear las siguiente funciones:
// agregar producto, devuelve true o false
//mostrar catálogo
//adicionalmente, crear una funcion llamada buscarProducto
//que le pase un string, el nombre del producto o que busque por el nombre del producto
//nota: cuidado con el get q a veces devuelve undefinied 

// esta en otro archivo