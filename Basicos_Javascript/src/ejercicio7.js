// OBJETOS EN JAVASCRIPT
const usuario = {
	name: "Rita",
	email:"ritavicdom@gmail.com",
	active: true,
}

//para las claves
const claves = Object.keys(usuario);
// [name, email, active]

//Utilidad 

//1. Como pruebo si un objeto tiene una claveue todas las claves existen? 
function validarCamposRequeridos (objeto, validarCamposRequeridos){
    const clavesObjeto = Object.keys(objeto);
    // retorno verdadero o falso
    return validarCamposRequeridos.every((campo) => {
        return clavesObjeto.includes(campo);
    })

}

//data:
const datosFormulario = { name : "Carla", active: false};

const esValido = validarCamposRequeridos(datosFormulario,
     ["name", "password", "active"]);
// para los valores (values)
const producto = {
    nombre: "laptop",
    stock: 1000,
    precio: 1100,
    destacad: true,
}
//array de valores
const valores = Object.values(producto);
// [laptop, 1000, 1100, true]

//verificar si algún valor cumple una condicion: 
const precipitacione = {
    enero: 110,
    febrero: 98,
    marzo : 120,
    abril: 50,
}
//algun mes la precipitacion fue mayor a 100 l? 

const mesSuperiorCien = Object.values(precipitacione)
    .some((precipitaciones) => precipitaciones > 100);

//cuantos litros totales han caido en los meses enero -abril? 
const litrosTotales = Object.values(precipitacione)
    .reduce((total, precipitacion ) => total + precipitacion, 0);

// calcular la precipitacion máxima
const precipitaciónMaxima = Object.values(precipitacione)
    .reduce((maximo, precipitacion)=> precipitacion > maximo ? precipitacion : maximo, 0)

const precipitacionMax = Math.max(...Object.values(precipitacione));

//obtener pares [clave, valor] <- entries()
const configuracion = {
    tema : "oscuro",
    idioma: "es",
    notificaciones: true,
    volumen: 75
}
//obtener array de pares clave, valor
const entradas = Object.entries(configuracion);
//Devuelve: 
/*
[
    ["tema", "oscuro"],
    ["idioma", "es"],
    ["notificaciones", true]
    ["volumen", 75]
]

*/

const usuarioDB = {
	name: "Rita",
    password: "1234abcd",
	email:"ritavicdom@gmail.com",
	active: true,
}

//filtrar, eliminar los campos sensibles de este object usuarioDB("password")
Object.entries(usuarioDB)
    .filter([])


//destructuring
const {nombre, email} = usuarioDB;  // -> const nombre = usuarioDB.nombre; const email = usuarioDB.email;

const data = [1, 2, 3, 4, 5];
const [a,b,,c] = data; // a = 1, b=2, c=4

function vData (array){
    cont [v1, v2] = array; //v1 = 1, v2 = 2
    console.log("v1;", v1)
    console.log("v2;", v2);
}
vData(["data", 66, 99]);  // <- 

// crear funcion llamada mostrarPersona que obtenga el username, y las dos primeras redes sociales que el usuario tenga:
const usuario3 = {
    id: 1,
    info : {
        username: "Rita", 
        redes : ["facebook", "twitter", "instagram"]

    }   
}

const {info: {username, redes:[r1, ...r2]}} = usuario3;
/*
username -> "Rita"
r1 -> "facebook"
r2 -> ["twitter", "instagram"]
*/

//Obtener el nombre y la edad del siguiente objeto. Si no existe edad que guarde el valor 0
const data4 = {
    id: 101,
    usuario: {
        perfil :{
            nombre2 : "Lucia",
            edad:28,
            direccion: {
                ciudad: "Granada",
                pais: "España"
             },

        },  
        activo: true, 
    }
}
const {usuario: {perfil: {nombre2, edad = 0}}} = data4;
/*
nombre2 -> "Lucia",
edad -> 28
*/
const productos = [
    {
        id: 1,
        nombre: "Laptop",
        precio: 1000,
        fabricante: {
            nombreFabricante: "HP",
            pais: "USA",
            contacto: {
                email: "infoHp@gmail.com",
                telefono: "55443322"
            },
        },
        especificaciones: {
            ram: "16GB",
            cpu: "Intel i7",
        }
    },
    {
        id: 2,
        nombre: "Smartphone",
        precio: 800,
        fabricante: {
            nombreFabricante: "Samsung",
            pais: "Corea del Sur",
            contacto: {
                email: "support@samsung.com",
                telefono: "99887766"
            },
        },
        especificaciones: {
            ram: "8GB",
            cpu: "Exynos 2100",
        }
    },
    {
        id: 3,
        nombre: "Tablet",
        precio: 600,
        fabricante: {
            nombreFabricante: "Apple",
            pais: "USA",
            contacto: {
                email: "contact@apple.com",
                telefono: "11223344"
            },
        },
        especificaciones: {
            ram: "6GB",
            cpu: "Apple M1",
        }
    },
    {
        id: 4,
        nombre: "Monitor",
        precio: 300,
        fabricante: {
            nombreFabricante: "Dell",
            pais: "USA",
            contacto: {
                email: "support@dell.com",
                telefono: "44332211"
            },
        },
        especificaciones: {
            ram: "N/A",
            cpu: "N/A",
        }
    },
    {
        id: 5,
        nombre: "Impresora",
        precio: 200,
        fabricante: {
            nombreFabricante: "Canon",
            pais: "Japón",
            contacto: {
                email: "info@canon.jp",
                telefono: "55667788"
            },
        },
        especificaciones: {
            ram: "2GB",
            cpu: "ARM Cortex",
        }
    },
    {
        id: 6,
        nombre: "Smartwatch",
        precio: 250,
        fabricante: {
            nombreFabricante: "Xiaomi",
            pais: "China",
            contacto: {
                email: "service@xiaomi.com",
                telefono: "66778899"
            },
        },
        especificaciones: {
            ram: "1GB",
            cpu: "Snapdragon Wear 4100",
        }
    },
    {
        id: 7,
        nombre: "Auriculares",
        precio: 150,
        fabricante: {
            nombreFabricante: "Sony",
            pais: "Japón",
            contacto: {
                email: "support@sony.jp",
                telefono: "77889900"
            },
        },
        especificaciones: {
            ram: "N/A",
            cpu: "Bluetooth 5.2",
        }
    },
    {
        id: 8,
        nombre: "Cámara",
        precio: 1200,
        fabricante: {
            nombreFabricante: "Nikon",
            pais: "Japón",
            contacto: {
                email: "contact@nikon.com",
                telefono: "88990011"
            },
        },
        especificaciones: {
            ram: "4GB",
            cpu: "Expeed 6",
        }
    },
    {
        id: 9,
        nombre: "Consola",
        precio: 500,
        fabricante: {
            nombreFabricante: "Microsoft",
            pais: "USA",
            contacto: {
                email: "support@microsoft.com",
                telefono: "99001122"
            },
        },
        especificaciones: {
            ram: "16GB",
            cpu: "AMD Zen 2",
        }
    },
    {
        id: 10,
        nombre: "Router",
        precio: 100,
        fabricante: {
            nombreFabricante: "TP-Link",
            pais: "China",
            contacto: {
                email: "service@tp-link.com",
                telefono: "11002233"
            },
        },
        especificaciones: {
            ram: "512MB",
            cpu: "Dual-Core ARM",
        }
    }
];


// Crear una funcion que extraiga los datos del objeto y me devuelva la siguiente estrucura

//nombR, fabricante, {nombR, contacto}, especificaciones (solo la ram)
//Imaginemos un ARRAY DE PRODUCTOS
// USANDO LA NUEVA ESPECIFICAICONES OBTENER el nombre del producto de más ram

const newData = (arrayProducts) => {
    const {
        nombre,
        fabricante: {
            nombre: nombreFabricante,
            contacto
        },
        especificaciones: { ram }
    } = arrayProducts;
 return {
    nombre, 
    fabricante,
    especificaciones
};

};
/**
 *nombre -> nombre 
 *fabricante -> {nombreFabricante, contacto}
 */


const newDataArray = (arrayProducts) => {arrayProducts
    .map((product) => newData(product));
}



const obtenerMasRam = (arrayProducts) => {}

