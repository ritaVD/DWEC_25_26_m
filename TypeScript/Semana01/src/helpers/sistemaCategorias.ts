// Crear un sistema de categorías

const catalogo = new Map<string, Set<string>>();

//funciones

function addProduct(category: string, product: string): boolean {
    if (!catalogo.has(category)){
        // lo creamos nosotros
        catalogo.set(category, new Set<string>());
    }
    // añadimos ya el producto a la categoria

    catalogo.get(category)?.add(product);
    return true;

}
addProduct("Electronica", "Portatil HP");
addProduct("Electronica", "Portatil HP");
addProduct("Electronica", "Teclado");
addProduct("Electronica", "Mouse");
addProduct("Deportes", "Raqueta de tenis");
addProduct("Electronica", "Zapatillas nike");

//mostrar catalago de productos
function showCatalogo() : void {
    console.log("---------Catalogo de productos -------------");

    for ( const [categoria, productos] of catalogo ){
        console.log(`Categoría: ${categoria} ----Numero de productos: ${productos.size}`);
        for (const producto of productos){
            console.log(`- ${producto}`);
        }
        
    } 
    

}
showCatalogo();

// función que busque un producto por nombre
function searchProducts(nameProduct: string): string[] {
    const categoriasEncontradas : string[] = [];

    for ( const [categoria, productos] of catalogo ){

        if (productos.has(nameProduct)){
            categoriasEncontradas.push(categoria);
        

        }

        
    }
    return categoriasEncontradas; 


}

console.log(`Las categorias del producto Teclado son: ${searchProducts("Teclado")} `) 

