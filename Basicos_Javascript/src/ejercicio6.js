const numeros = [1, 2, 3, 4, 5];

//generar un objeto resumen de mi array que tenga los siguientes campos: 
/*

{
    valor: numero_correspondiente,
    posición: posición_dentro_del_array,
    esUltimo: que sea un array que me diga si es el último (true/false)
}

*/

const resumenNumeros = numeros.map((numero, indice, miArray)=> {
    return {
        valor: numero,
        posicion: indice,
        esUltimo: indice == miArray.length -1
    };
});

console.log(resumenNumeros); //array de objetos mapeados a una estructura dada. 

const productos = [
    {
        name: "laptop", price: 1000, stock : 5, active: true
    },
    {
        name: "Mouse Logitech", price: 28.56, stock: 0, active: false
    }

]

/* Mapeado
nombre
precioOriginal
precioConIva
hayStock

*/

//Teacher's version
const productsWithVat = productos.map((product)=>{
    return {
        originalPrice: product.price,
        priceWithVat : product.price * 1.21,
        avaible : product.stock > 0,

    }
});
//My version
const mapeado = productos.map((product)=>{
    return {
        nombre : product.name,
        precioOriginal: product.price,
        precioConIva : product.price * 1.21,
        hayStock : product.stock > 0,

    };

});
// filtrame los productos que tienen stock y estan activos
const productsWithStockAndActive = 
    productos.filter ((product) => product.stock > 0 && product.active);

// Buscar todos los laptop de forma case insensitive (da igual si esta en mayusculas o minusculas)

const findProducts = 
    productos.filter ((product)=> {
        return  product.name.toLowerCase().includes("laptop".toLowerCase())}
    );
console.log(searchLaptop);

//crear una funcion que pase como parametro un array de objetos y como segundo parametro el nombre del objeto a buscar y devuelva todos los objetos con esas características

const findProducts2 = (product, wordToFind) => productos
    .filter((product)=> productos.name.toLowerCase()
        .includes(wordToFind.toLowerCase()));
console.log(findProducts2(productos, "laptop"));
// arrow

// crear una funcion que le pase como parámetro un array de productos, precio_inicial, precio_final
// y me devuelva los productos cuyo precio está en ere rango de valores ( sin incluirlos)

const filterByPrice = (product, initialPrice, finalPrice) => productos
    .filter ((product) => Number(product.price > initialPrice) && Number(product.price < finalPrice)
);

console.log(filterByPrice(productos, 20, 500));

//modificar FindProducts2 para que además me muestre sólo los que están activos 

const findProductsActive = (productos =[], wordToFind = "") => productos
    .filter((product)=> product.name.toLowerCase()
    .includes(wordToFind.toLowerCase())  && product.active
);
       
console.log(findProductsActive(productos, "laptop"));


const cart = [
    {
        name: "laptop", price: 1000, stock : 5, category : "Electrónica"
    },
    {
        name: "Mouse Logitech", price: 28.56, stock: 0, category : "Electrónica"
    },
    {
        name: "Monitor MSI 24 ", price: 210.6, stock: 10, category : "Electrónica"
    },
    {
        name: "Teclado Mecánico", price: 150, stock: 2, category : "Electrónica"
    },
    {
        name: "Polo Scalper", price: 150, stock: 2, category : "Ropa"
    },
    {
        name: "Panatalón Stradivarius", price: 45, stock: 5, category : "Ropa"
    },
]


/**
 * @comment : 
 * @autor : 
 * @param {Object} cart 
 * @returns {Number} - Total del carrito con IVA 
 */
const total = ( cart = [], vat = 1.21) => {
    return cart.reduce((total, product) => 
        {total+(product.price * vat)} , 0)};
console.log(total);

//Agrupar el carrito por categorías
/*
{
"Electrónica" : [ 
    {producto1}, {producto2}, ... ],
}
"Ropa" : [
    {producto1}, {producto2}, ... ]
}
*/

const productsCategory = (carrito=[]) => {
    carrito.reduce((groups, product) => {  
        const categoryFilter = product.category;
        if (!groups[categoryFilter]){
            groups[categoryFilter] = [];
        }
        groups[categoryFilter].push(product);
        return groups;

    }, {})

}; 

const votos = ["Ana", "Luis", "Ana", "Carlos", "Luis", "Ana"];
// { Ana: 3, Luis: 2, Carlos: 1 }
// función al qu ele paso un array de votos y cuentos votos tiene cada usuario

const countVotes = (votes = []) => {
    return votes.reduce((countsVote, vote) => {
        countsVote[vote] = (countsVote[vote] || 0) + 1;
    }, {})
};


const usuarios = [
    { id: 1, nombre: "Ana", rol: "admin"},
    { id: 2, nombre: "Luis", rol: "user"},
    { id: 3, nombre: "Carlos", rol: "admin"},
];

//función (arrayUsuarios, idBusquedq) -> devuelve el rol que tiene
//buscar el usuario cuyo id = 2 y obtener el rol que tiene

const findUsers = (users=[], id =1) => {
    return users.find((user)=> {
        if (encontrado = Number(user.id) === Number(id)){
            return user.rol;
        } else {
            return "No encontrado";
        }
        
    })
};

//buscar el indice del array donde se encuentra el usuario con el id buscado
const findUserIndex = () => {
    return users.findIndex((user)=>Number(user.id) === Number(id));

}
//devuelve -1 si findIndex devuelve error o no encuentra la acción requerida 

//some() -> devuelve true si al menos un elemento cumple la condición **** 
const numerosPares = [2,4,6,8,10];
// hay numeros pares en el array?
const hayPares = numerosPares.some( numero => numero % 2 === 0);  // devuelve true o false si hay algún número par

