//Gestión bancaria revolut 
//Documentar funciones

//Consiste en llevar un pequeño sistema bancario en JavaScript que permita:
//-Crear cuentas con titular y saldo 
//- Depositar dinero en la cuenta
//- Retirar dinero de la cuenta (Siempre que no tenga saldo)
//- Consultar el saldo de la cuenta
//- Transferir dinero entre dos cuentas, validando si tienes saldo para transferir
//- Mantener un listado de cuentas y buscar una cuenta por su titular

//Cuando creemos una cuenta se debe generar un numero de cuenta con 24 digitos aleatorios
//Testear todos los posibles casos, con una funcion que se llame test que pruebe todas las funcionalidades

/**
 * Crea una cuenta bancaria con titular y saldo inicial
 * @param {string} El nombre del titular
 * @param {number} El saldo inicial
 * @returns {Object} La cuenta creada
 */

function crearCuenta(titular, saldo){
    const cuenta = {
        titular : titular,
        saldo : saldo,
        numeroCuenta : generarNumeroCuenta()
    }
    return cuenta;
}
/**
 * Genera un numero de cuenta aleatorio de 24 digitos
 * @returns {string}numero de cuenta aleatorio de 24 digitos
 */


//Math.randon() genera un numero aleatorio entre 0 y 1 (decimal)
//Math.floor() redondea un numero decimal al entero mas cercano
function generarNumeroCuenta(){
    let numero= "";
    for ( let i = 0; i <24; i++){
        numero += Math.floor(Math.random() * 10);
    }
    return numero;
}


/**
 * Deposita una cantidad en la cuenta
 * @param {Object}  cuenta
 * @param {string}  cantidad 
 * 
 */

function depositar(cuenta, cantidad){
    if ( cantidad > 0){
        return cuenta.saldo += cantidad;
        return true;
    }else{
        return false;
    }
}
/**
 * Retira una cantidad de la cuenta
 * @param {number} La cantidad a retirar 
 * @returns 
 */
function retirar (cantidad){
    if (cuenta.saldo <=   cantidad && cantidad > 0){
        return saldo -= cantidad;
        return true;
    }else{
        return false;
    }
}

/**
 * Muestra el saldo de la cuenta
 * @param {Object} La cuenta
 * @returns {number} El saldo de la cuenta
 */
function consultarSaldo(cuenta){
    return cuentasaldo;
}


/**
 * Transfiere una cantidad de una cuenta a otra
 * @param {Object} cuentaOrigen es la cuenta de origen del dinero 
 * @param {Object} cuentaDestino es la cuenta de destino del dinero
 * @param {number} cantidad es la cantidad a transferir
 * @returns 
 */
function transferir(cuentaOrigen, cuentaDestino, cantidad){
    if (cantidad <= cuentaOrigen.saldo && cantidad > 0) {
    cuentaOrigen.saldo -= cantidad;
    cuentaDestino.saldo += cantidad;
    return true;
  }
  return false;
}

/**
 * Busca una cuenta por su titular
 * @param {Array} cuentas es el array de cuentas
 * @param {string} titular  es el titular a buscar
 * @returns La cuenta del titular o null si no existe
 */
function buscarCuenta(cuentas, titular){
    for (let i = 0; i < cuentas.length; i++) {
    if (cuentas[i].titular == titular) {
      return cuentas[i];
    }
  }
  return null;
}

/**
 * Realiza los tests correspondientes de la aplicación.
 * @return - Tests
 */
function test() {
  const cuentas = [];
  const cuenta1 = crearCuenta("Juan Perez", 1000);
  const cuenta2 = crearCuenta("Maria Lopez", 500);
  cuentas.push(cuenta1, cuenta2);
  console.log("Cuenta 1:", cuenta1);
  console.log("Cuenta 2:", cuenta2);
  console.log("Saldo cuenta 1:", mostrarSaldo(cuenta1));
  console.log("Saldo cuenta 2:", mostrarSaldo(cuenta2));
  depositar(cuenta1, 200);
  console.log(
    "Saldo cuenta 1 después de depositar 200:",
    mostrarSaldo(cuenta1)
  );
  retirar(cuenta2, 100);
  console.log("Saldo cuenta 2 después de retirar 100:", mostrarSaldo(cuenta2));
  transferir(cuenta1, cuenta2, 300);
  console.log(
    "Saldo cuenta 1 después de transferir 300 a cuenta 2:",
    mostrarSaldo(cuenta1)
  );
  console.log(
    "Saldo cuenta 2 después de recibir 300 de cuenta 1:",
    mostrarSaldo(cuenta2)
  );
  const cuentaBuscada = buscarCuentaPorTitular(cuentas, "Maria Lopez");
  console.log(cuentaBuscada);
  const cuentaBuscadaMal = buscarCuentaPorTitular(cuentas, "Jose");
  console.log(cuentaBuscadaMal, "Debe ser null");
}

//inicializar aplicación  
test();