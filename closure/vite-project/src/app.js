
export const app = () => {
  // Primera función closure
  const crearClosure = () => {
    let mensajeSecreto = "Yo soy tu closure";

    return () => {
        console.log("Mensaje: ", mensajeSecreto);
    };
  };

  const miClosure = crearClosure();
  miClosure();


  // -------------- scope lexico ---------
  let nivelGlobal = "Soy Global";
  const funcionExterna = () => {
    let nivelExterno = "Soy del scope Externo";
    const funcionInterna = () => {
        let nivelInterno = "Soy del scope Interno";

        //demostremos... 
        console.log("Accediendo a : ", nivelGlobal);
        console.log("Accediendo a : ", nivelExterno);
        console.log("Accediendo a : ", nivelInterno);
    };
    funcionInterna();
  };
  funcionExterna();



  // ejercicio ENCAPSULACION -----
  /**
   * objetoPublico saldo, retirarDinero(cantidad) <- retirar ese dinero del saldo
   * 
   */

  const objetoPublico = {
    saldo: 1000,
    retirarDiner0: function(cantidad){
        this.saldo -= cantidad;
    },
  };
  objetoPublico.retirarDiner0(100);
  console.log("Saldo", objetoPublico.saldo);

  const crearCuentaBancaria = (saldoInicial = 0) =>{
    //saldo privado
    let saldo = saldoInicial;
    return {
        obtenerSaldo: () =>saldo,
        depositar : (cantidad = 0) => {
            if(cantidad > 0){
                saldo += cantidad;
                console.log(`Cantidad ${cantidad} añadida. El nuevo saldo es ${saldo}`

                );
            }
            //si es negativa no hago nada
            return true;

        },
        retirar: (cantidad = 0) => {
            if(cantidad > saldo){
                console.log(`Error no hay suficiente saldo`);
                return false;
            }
            saldo-=cantidad
            console.log(`Cantidad ${cantidad} retirada correctamente`);
            return true;
            
        },
    };
  };



  // Primera cuenta
  
  const miCuenta1 = crearCuentaBancaria(1000);
  //miCuenta1.saldo=99999;
  miCuenta1.depositar(100);
  console.log("Saldo de mi cuenta 1: ", miCuenta1.obtenerSaldo());
  miCuenta1.retirar(50);
  console.log("Saldo de mi cuenta 1: ", miCuenta1.obtenerSaldo());

  const miCuenta2 = crearCuentaBancaria(100);
  console.log("Saldo de mi cuenta 2: ", miCuenta2.obtenerSaldo());
  

  // crear un contador q pueda incrementar, decrementar, resetear y obtener el valor del contador
  //Ejercicio 1 crear 2 contadores, uno que empiece en 10 y vaya hasta el 0 y otro que empiece en 0 y vaya hasta el 10 
  // ejemplificar utilizando un temporizador de un segundo como los contaodres uno sube y otro baja
  //utilizando el metodo del contador

  const crearContador = (inicio) =>  {
    let contador= inicio;
    return {
        incrementar : (valor) => {
            if (valor <0 ){
                console.log("No se pueden sumar numeros negativos")
                return false;
            }
            contador = valor +inicio;
            return contador;

        },

        decrementar : (valor) => {
            if(valor > inicio){
                console.log("Valor superior al inicial, no se puede restar")
                return false;
            }
            contador = inicio -valor;
            return contador;
        },

        resetar : (inicioNuevo) => {
            contador = Number(inicioNuevo);
            return contador
        },
        obtenerContador : () => contador,

    };


  };
    //setInterval (funcion, 1000) <--- cada segundo
    //clearInterval(id) <---- para el intervalo
    // Ejercicio 1 

    const contador1 = crearContador(0);
    const contador2 = crearContador(10);
    /*
    setInterval( () => {
     //if (contador1.incrementar(1) <= 10, 1000){
        //clearInterval()
        console.log(contador1.obtenerContador())
        clearInterval();
     }, 1000 );
    };
    */


}

// Ejercicio 2
// Ejemplificar un carrito de la compra persistente utilizando closure y estableciendo la persistencia a traves de una base de datos sqlite3
// Ejemplificar un carrito de la compra que permita insertar cantidad productos, eliminar productos y calcular total

const carrito = () => {
    let carrito = [];
    let producto;
    let idProducto;
    let productos;
    return {
        añadirProducto: (cantidad, idProducto) => {
            
            carrito.push(producto);

        }
    }


}



export default app;
