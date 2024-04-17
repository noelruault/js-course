"use strict";

// App de gimnasio en la que podamos visualizar los pasos a seguir dada una máquina determinada.
// Las máquinas estarán identificadas por un número.
// Cada máquina tendrá una serie de pasos a seguir.
// Si la máquina seleccionada no existe, mostrar un mensaje de error
//
// 1. Mensaje de bienvenida y nombre de la máquina y
// 2. los pasos a seguir en función de la máquina seleccionada

// Pseudocódigo
// ¿Cual es el código de la máquina seleccionada?
// if (codigoMaquinaSeleccionada === 1) {
//       Bienvenido al gimnasio XYZ, estás en la máquina Bicicleta estática
//       Pasos a seguir:
//       1. Ajustar el sillín
//       2. Ajustar el manillar
//       3. ...

const mensajeBienvenida = "Bienvenido al gimnasio XYZ";
const identificadorMaquinas = ["M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9"];
const nombreMaquinas = [
    "Cinta de correr",    // 0
    "Bicicleta estática", // 1
    "Máquina de remo",    // ...
    "Elíptica",
    "Máquina de step",
    "Máquina de abdominales",
    "Máquina de piernas",
    "Máquina de brazos",
    "Máquina de pecho",
    "Máquina de espalda"
];

const instruccionesMaquinas = [
    `Corre sin parar`,           // Cinta de correr    // 0
    `Pedalea sin mirar atrás`,   // Bicicleta estática // 1
    `Rema Johny, ¡rema!`,        // Máquina de remo    // ...
    `No hay instrucciones`,      // Elíptica
    `No hay instrucciones`,      // Máquina de step
    `No hay instrucciones`,      // Máquina de abdominales
    `No hay instrucciones`,      // Máquina de piernas
    `No hay instrucciones`,      // Máquina de brazos
    `No hay instrucciones`,      // Máquina de pecho
    `No hay instrucciones`       // Máquina de espalda
];

console.log("------ Gimnasio XYZ ------")
// const codigoMaquinaSeleccionada = prompt("¿Qué máquina necesitas consultar?")
let codigoMaquinaSeleccionada;
const mensajeNoExisteMaquina = "La máquina seleccionada no existe"

let maquina = "Máquina no identificada"
let mensajeSwitch;

switch (codigoMaquinaSeleccionada) {
    case "M1":
        mensajeSwitch = `${mensajeBienvenida}. Estás en la máquina ${nombreMaquinas[0]}. Pasos a seguir: ${instruccionesMaquinas[0]}`
        break;
    case "M2":
        mensajeSwitch = `${mensajeBienvenida}. Estás en la mejor máquina del gimnasio: ${nombreMaquinas[1]}. Pasos a seguir: ${instruccionesMaquinas[1]}`
        break;
    case "M3":
        maquina = nombreMaquinas[2]
    case "M4":
        maquina = nombreMaquinas[3]
    case "M5":
        maquina = nombreMaquinas[4]
    case "M6":
        maquina = nombreMaquinas[5]
    case "M7":
        maquina = nombreMaquinas[6]
    case "M8":
        maquina = nombreMaquinas[7]
    case "M9":
        maquina = nombreMaquinas[8]
        mensajeSwitch = `${mensajeBienvenida}. Estás en la ${maquina}, que no tiene instrucciones.`
        break;
    default:
        mensajeSwitch = mensajeNoExisteMaquina
        // alert(mensajeNoExisteMaquina)
        break;
}
// console.log(mensajeSwitch)

let mensajeIfElse;
if(codigoMaquinaSeleccionada === "M1") {
    mensajeIfElse = `${mensajeBienvenida}. Estás en la máquina ${nombreMaquinas[0]}. Pasos a seguir: ${instruccionesMaquinas[0]}`
} else if (codigoMaquinaSeleccionada === "M2") {
    mensajeIfElse = `${mensajeBienvenida}. Estás en la mejor máquina del gimnasio: ${nombreMaquinas[1]}. Pasos a seguir: ${instruccionesMaquinas[1]}`
} else if (codigoMaquinaSeleccionada === "M3"
|| codigoMaquinaSeleccionada === "M4"
|| codigoMaquinaSeleccionada === "M5"
|| codigoMaquinaSeleccionada === "M6"
|| codigoMaquinaSeleccionada === "M7"
|| codigoMaquinaSeleccionada === "M8"
|| codigoMaquinaSeleccionada === "M9") {
    mensajeIfElse = `${mensajeBienvenida}. Estás en una máquina que no tiene instrucciones.`
}
else {
    mensajeIfElse = mensajeNoExisteMaquina
    // alert(mensajeNoExisteMaquina)
}
// console.log(mensajeIfElse)

//
// codigoMaquinaSeleccionada === M2
// nombreMaquinas[1] == instruccionesMaquinas[1]
// M1 == nombreMaquinas[0] == instruccionesMaquinas[0]
// M2 == nombreMaquinas[1] == instruccionesMaquinas[1]
// M3 == nombreMaquinas[2] == instruccionesMaquinas[2]

// console.log(codigoMaquinaSeleccionada)
// console.log(typeof codigoMaquinaSeleccionada)
// console.log(codigoMaquinaSeleccionada[1])

function selectorMaquina(codigoMaquinaSeleccionada) { // M5
    const identificadorMaquina = codigoMaquinaSeleccionada[1] - 1 // M5 | --> (5)-1 = 4
    const mensajeAUsuario = `${mensajeBienvenida}. Estás en la ${nombreMaquinas[identificadorMaquina]}. Pasos a seguir: ${instruccionesMaquinas[identificadorMaquina]}`
    // console.log(mensajeAUsuario)
}

// codigoMaquinaSeleccionada = prompt("¿Qué máquina necesitas consultar?")
// selectorMaquina(codigoMaquinaSeleccionada)

function Saluda(nombre, gimnasio) {
    console.log(`Hola ${nombre}, bienvenido al ${gimnasio}`)
}

Saluda("Osa", "Gimnasio XYZ")
Saluda("Pepito", "Gimnasio ABC")
