"use strict";

console.log("Prácticas JavaScript con Condicionales");

// Ejercicio 1: Condicionales

// <= menor o igual que
// >= mayor o igual que
// && AND
const edad = 3;
if (edad <= 6) { // menor o igual que 6 años
  console.log("Infantil");
} else if (edad >= 7 && edad <= 11) { // entre 7 y 11 años
  console.log("Primaria");
} else if (edad >= 12 && edad <= 16) { // entre 12 y 16 años
  console.log("Secundaria");
} else { // el resto no podrán matricularse
  console.log("No podemos hacer matricula");
}

// Ejercicio 2: Condicionales

// === igualdad estricta
// !== desigualdad estricta
// && AND
// || OR
const dia = "sábado";
if (dia === "sábado" || dia === "domingo") {
  console.log("Es fin de semana");
}
if (dia !== "domingo" && dia !== "sábado") {
  console.log("Es un día laboral");
}
/*
// Alternativa equivalente, pero más larga:
if (dia === "lunes"
  || dia === "martes"
  || dia === "miércoles"
  || dia === "jueves"
  || dia === "viernes") {
  console.log("Es un día laboral");
}
*/

// Ejercicio 3: Condicionales
// Condicional ternario
const edadUsuario = 18;
const esMayorDeEdad = (edadUsuario >= 18) ? "Es mayor de edad" : "No es mayor de edad";
//                  if(                 ){                   } else {                 }
console.log(esMayorDeEdad);

// Ejercicio 4: Condicionales
const coche = undefined;
const cocheUsuario = coche ?? 'No tiene coche'; // si el de la izquierda no se evalua, se evalúa el de la derecha
console.log(`El coche del usuario es ${cocheUsuario}`);
// console.log('El coche del usuario es ' + cocheUsuario); // equivalente, pero menos recomendado
// console.log("El coche del usuario es " + cocheUsuario); // equivalente, pero menos recomendado

const moto = "Honda";
const motoUsuario = moto ?? 'No tiene moto'; // si el de la izquierda no se evalua, se evalúa el de la derecha
console.log(`La moto del usuario es ${motoUsuario}`);
