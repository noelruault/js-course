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

console.log("------ Gimnasio XYZ ------")
const codigoMaquinaSeleccionada = prompt("¿Qué máquina necesitas consultar?")

switch (codigoMaquinaSeleccionada) {
    case "M1":
        mensajeSwitch = `${mensajeBienvenida}. Estás en la máquina ${nombreMaquinas[0]}. Pasos a seguir: ${instruccionesMaquinas[0]}`
        break;
    case "M2":
        mensajeSwitch = `${mensajeBienvenida}. Estás en la mejor máquina del gimnasio: ${nombreMaquinas[1]}. Pasos a seguir: ${instruccionesMaquinas[1]}`
        break;
    // ...
    default:
        mensajeSwitch = mensajeNoExisteMaquina
        // alert(mensajeNoExisteMaquina)
        break;
}

console.log(mensajeSwitch)
