//Crear una función llamada nota, que devuelva aprobados, le pasas como parámetro un número y te dice si esta aprobado o no
//Crear una version 2.0 que si le paso un numero mayor o igual que no 9 dia sobresaliente si el numero esta entre 5 y 9 me diga aprobado y si esta entre 5 y 0 me diga suspenso


const aprobados = (nota=0) => (nota >= 5 ? "Aprobado" : "Suspenso");
const aprobadosv2 =(nota =0) => ( nota >= 9 ? "Sobresaliente" : "No sobresaliente");
console.log(aprobados(7));
console.log(aprobadosv2(9));