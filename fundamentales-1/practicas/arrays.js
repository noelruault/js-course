"use strict";

console.log("Prácticas JavaScript con Arrays");

// Ejercicio 1: Arrays
const nombresAlumnos = [
    "Juan",  // 0
    "María", // 1
    "Carlos"
];
const notasAlumnos = [
    // nota matemáticas, nota lengua, nota historia
    [6, 7, 8], // Juan (0)
    [4,6,8], // María
    [1,5,10], // Carlos
];

// console.log(nombresAlumnos[0]) // Juan
// console.log(notasAlumnos[0]) // [6,7,8]

const arrayNotas = [6, 7, 8]
console.log(arrayNotas)
console.log(arrayNotas[0]) // [<0>,<1>,<2>]
console.log(arrayNotas[1]) // [<0>,<1>,<2>]
console.log(arrayNotas[2]) // [<0>,<1>,<2>]

console.log([6, 7, 8])
console.log([6, 7, 8][0]) // [<0>,<1>,<2>]
console.log([6, 7, 8][1]) // [<0>,<1>,<2>]
console.log([6, 7, 8][2]) // [<0>,<1>,<2>]

// ¿Cómo acceder a las posiciones de un array dentro de otro array?

const números = [
    [1, 3, 5, 7, 9], // números impares
    [2, 4, 6, 8],    // números pares
]
console.log(números)
console.log(números[0]) // números impares
console.log(números[0][0]) // primer elemento de los números impares
console.log(números[0][4]) // último elemento de los números impares

const juan = 0;
console.log(`Nota matemáticas de ${nombresAlumnos[juan]}: ${notasAlumnos[juan][0]}`) // 6

const maría = 1;
console.log(`Nota matemáticas de ${nombresAlumnos[maría]}: ${notasAlumnos[maría][0]}`) // 6
