
// .at <--- acceso con ídices negativos.

const frutas=["🍉","🍇","🍓","🍒"];
console.log(frutas.at(-2)); //🍓
console.log(frutas.slice(-2)) //🍓","🍒

//splite --> extraer o elimiar partes de un array sin  mutar el orifinal
//splice --> frutas.splice(1,2) <-- elimina 2 elementos desde la posicion 1
//pero el array se queda guardado solo con los elementos que has cogido

const frutas2=["🍉","🍇","🍓","🍒", 4, 8];
frutas.slice(1,2,"Pera") //->elimina y agrega el tercer parametro (tercero y los siguientes)

//concat <-- concatenar dos o más arrays

frutas.concat(frutas2)

const edades = [1,2,3,4,5,6];
const ArrayConcat=[  ...frutas,"oso", ...edades,"gato"  ]; // ESTA ES LA QUE HAY QUE USAR spread Operator

//SET <--- otro tipo de datos (datos únicos) ******************************

const pesos=[4,5,3,6,6,9,3,6]
const sinDuplicados = [...new Set(pesos)] //<--- usamos set para crear elementos unicos

// .reduce  (reduce un array a un único valor)
//pesos.reduce((acumulador, elemento, array, indice, array))=> aqui va la lógica, aqui el valor inicial);
//acmulador, elemento <-- no son opcionales
//el resto son opcionales
//no muta el array ****

pesos.reduce((suma, peso)=> suma+peso,  0 /*el tipo de dato de aqui debe ser como el del resultado */ );

//1. Realiza la multiplicacion de todos los elementos de  un array
//2. Encontrar el máximo y el mínimo
//3.Dado un array que sea manzana, platano, naranja, manzana, manazana, platano, pera, pera   devolverme un objeto clave valor que me diga
    // nombre de la fruta: cuantas veces aparece esa fruta
//4. Dado el siguiente array bidimensaional [[1,2],[3,4],[5,6]] se pide aplanar dicho array en un array unidimensional [1,2,3,4,5,6]

//1. Realiza la multiplicacion de todos los elementos de  un array
const numeros = [1, 2, 3, 4, 5, 6 , 8 , 5, 4 , 4, 9 ];
pesos.reduce((multiplicación, numeros)=> multiplicación*numeros, 1);

//2. Encontrar el máximo y el mínimo
numeros.reduce( (max, numero)=> numero > max ? numero : max,  numeros[0]);
numeros.reduce( (min, numero)=> numero > min ? numero : min,  numeros[0]);

//3.Dado un array que sea manzana, platano, naranja, manzana, manazana, platano, pera, pera   devolverme un objeto clave valor que me diga
    // nombre de la fruta: cuantas veces aparece esa fruta
const frutas3 = ["manzana", "platano", "naranja", "manzana", "manzana", "platano", "pera", "pera"];
/* {    
        manzana : 3
        platano : 2
        naranja : 1 
        pera : 2
    }
*/
// acc -> acumulador
frutas3.reduce( (acc, fruta) => {   
    acc[fruta] = (acc[fruta] || 0 ) + 1;
    return acc;
}
 , {} )


 //4. Dado el siguiente array bidimensaional [[1,2],[3,4],[5,6]] se pide aplanar dicho array en un array unidimensional [1,2,3,4,5,6]





 // array de objetos
 const usuarios = [
    {id: 1, nombre: "Ana", edad: 25, data:  {books: 100}},
    {id: 2, nombre: "Juan", edad: 30, data:  {books: 50}},
    {id: 3, nombre: "María", edad: 28, data:  {books: 20}},
    {id: 3, nombre: "Sara", edad: 20, data:  {books: 20}},
    {id: 3, nombre: "Carlos", edad: 20, data:  {books: 10}},
    {id: 3, nombre: "Mario", edad: 38, data:  {books: 0}},
 ];

 //dame la información del usuario cuyo nombre es JUAN
 usuarios.find(usuario => usuario.nombre.toLowerCase() === "juan");

let resultado = usuarios.find(usuario => Number(usuario.edad) >= 28) ?? {};

//1. Dado el siguiente array de usuarios devolver un array con solo los nombres que tienen en su biblioteca más de 20 libro
/**
 * 
 * @param {string} usuario 
 * @returns 
 */
function filtrar(usuario) {
    return usuario.filter(usuario => Number(usuario.data.books) > 20)
    .map ( usuario => usuario.nombre)
}
console.log(filtrar(usuarios));


//2.Obetener el valor promedio total de todos los libros si susponemos un precio medio 28 € 
const promedio = usuarios.reduce((total, usuario) =>  total+= Number(usuario.data.books)*28 , 0);
console.log(promedio);


//3. Decirme que usuarios no tienen libros 
/**
 * 
 * @param {*} usuario 
 * @returns 
 */
function filtrar0(usuario) {
    return usuario.filter(usuario => Number(usuario.data.books) === 0)
    .map ( usuario => usuario.nombre )
}
console.log(filtrar0(usuarios));







const productos = [
    {id: 1, nombre: 'Laptop', precio: 1200, stock: 5, categoria: 'Tecnología'},
    {id: 2, nombre: 'Camiseta', precio: 35, stock: 15, categoria: 'Ropa'},
    {id: 3, nombre: 'Monitor', precio: 300, stock: 0, categoria: 'Tecnología'},
    {id: 4, nombre: 'Libro', precio: 20, stock: 50, categoria: 'Literatura'},
    {id: 5, nombre: 'Móvil', precio: 800, stock: 10, categoria: 'Tecnología'},
    {id: 6, nombre: 'Pantalón', precio: 60, stock: 5, categoria: 'Ropa'}    
];

//Se pide:
//1. Obetener un array con los nombres de todos los productos que están agotados
/**
 * Devuelve un array con los productos que están agotados (stock 0)
 * @param {array} producto 
 * @returns 
 */
function agotados(producto){
    return producto
    .filter(producto => Number(producto.stock) === 0)
    .map(producto => producto.nombre)
}
console.log(agotados(productos));


//2. Calcular el valor total del inventario (precio*stock) de todos los productos
/**
 * Calcula el valor total del inventario (precio * stock) de todos los productos
 * @param {array} lista 
 * @returns 
 */
function valorInventario(lista){
  return lista.reduce((total, p) => total + (p.precio * p.stock), 0);
}
console.log(valorInventario(productos)); 



//3. Filtrar los productos que pertenecen a la categoría 'Tecnología' y tienen un precio mayor a 500
/**
 * Filtra los productos de la categoría 'Tecnología' con precio mayor a 500
 * @param {array} lista 
 * @returns 
 */
function tecnologiaCaros(lista){
  return lista.filter(producto => producto.categoria === 'Tecnología' && producto.precio > 500);
}
console.log(tecnologiaCaros(productos));


//4. Crear un nuevo array de productos aplicando un descuento del 10% a todos los productos de la categoria "Ropa".
/**
 * Crea un nuevo array de productos aplicando un descuento del 10% a los productos de la categoría 'Ropa'
 * @param {array} lista 
 * @returns 
 */
function aplicarDescuento(lista){
  return lista.map(p => {
    if (p.categoria === 'Ropa') {
      return { ...p, precio: p.precio * 0.9 }; 
    }
    return p;
  });
}
console.log(aplicarDescuento(productos));
