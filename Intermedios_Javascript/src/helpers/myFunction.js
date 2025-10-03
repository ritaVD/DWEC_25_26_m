/**
 * 
 * @param {Object} products -Objeto data
 * @returns {Object} Object Products - Objeto con la información extraída
 */


export const extraerData = (products) => {
    const {
        nombre,
        fabricante: {
            nombre: nombreFabricante,
            contacto
        },
        especificaciones: { ram }
    } = products;

    return {
      nombre, 
      nombreFabricante,
      contacto,
      ram,
};

};

//Funcion llamada maxRam que le pases un array de productos y te devuelva el producto con más ram
export const maxRam = (arrayProducts) =>  {
    arrayProducts.map(extraerData)
    .reduce((max, actual,)=>{
        ram.slice()
    }, {})
     
}