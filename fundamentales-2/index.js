'use strict';

/*
1. Funciones
2. Declaraciones de Funciones vs. Expresiones
3. Funciones de Flecha
4. Llamando Funciones desde Otras Funciones
5. Revisión de Funciones
6. Desafío de Codificación #1
7. Introducción a los Arrays
8. Operaciones Básicas de Arrays (Métodos)
9. Desafío de Codificación #2
10. Iteración: El Bucle for
*/

console.log("Fundamentos 2");

const añoNacimiento = 1999;

// Funcion normal
// console.log("Funcion:", esMayorDeEdad(añoNacimiento))
// function <nombre>(<parametro1>, <parametro2>, ...) {}
// function <nombre>() {}
// @param añoNacimiento: number
function esMayorDeEdad(añoNacimiento) {
  return 2024 - añoNacimiento >= 18;
}

// Funcion dentro de una variable
// console.log("Funcion dentro de una variable:", mayorEdad(añoNacimiento)) // No funciona porque la variable no ha sido declarada aun
const mayorEdad = function esMayorDeEdad(añoNacimiento) {
  return 2024 - añoNacimiento >= 18;
}
// console.log("Funcion dentro de una variable:", mayorEdad(añoNacimiento))

// Arrow function
// Funciones de Flecha
// =>
//
// const nombreFuncion = (<parametro1>, <parametro2>, ...) => {}
const mayorEdad2 = añoNacimiento => 2024 - añoNacimiento >= 18;
// console.log("Funcion dentro de una arrow function:", mayorEdad2(añoNacimiento))


// Función que indice el nombre, edad y si es mayor de edad
function descripcionPersona(nombre, añoNacimiento) {
  const edad = 2024 - añoNacimiento;
  // return `${nombre} tiene ${edad} años y ¿es mayor de edad? ${esMayorDeEdad(añoNacimiento)}`;
  return `${nombre} tiene ${edad} años y ${esMayorDeEdad(añoNacimiento) ? 'si': 'no'} es mayor de edad`;
}

// console.log(edad) // No está definida
// console.log(descripcionPersona("añoNacimiento", 1999))

let nombre = "añoNacimiento";
// Función que calcula el promedio de 3 números
function cambiarNombre(nombrePersona) {
  nombre = "Violeta";
  return nombrePersona;
}
// console.log(cambiarNombre("Azul")) // Azul
// console.log(nombre) // Violeta

let nombreGlobal = "Juan";
// Función que calcula el promedio de 3 números
function cambiarNombre2(nombrePersona) {
  nombre = nombrePersona;
  // no existe return, por lo tanto el valor resultado de la funcion es undefined
}

// console.log(cambiarNombre2("Pepe")) // undefined
// console.log(nombre) // Pepe

const mediaMatematicas = promedio(10, 8, 4)
const mediaHistoria = promedio(5, 7, 8)
const mediaCastellano = promedio(5, 6, 5)

function promedioSinReturn(n1, n2, n3){
  const resultado = (n1 + n2 + n3) / 3;
  console.log(resultado)
  // no hay return
}

// console.log(
  // `Mi nota media este curso ha sido ${promedioSinReturn(mediaMatematicas, mediaHistoria, mediaCastellano)}`
// )

// --------

// Funcion que calcula el promedio de 3 números
function promedio(n1, n2, n3) {
  // console.log(`n1:${n1}, n2:${n2}, n3:${n3}`)
  return (n1 + n2 + n3) / 3;
}

// console.log(promedio(3, 4, 5))
// console.log(promedio(8, 8, 8))

// Calculo de las notas de un alumno durante un curso escolar
const mediaMatematicas2 = promedio(10, 8, 4)
const mediaHistoria2 = promedio(5, 7, 8)
const mediaCastellano2 = promedio(5, 6, 5)

const mediaCurso = promedio(mediaMatematicas2, mediaHistoria2, mediaCastellano2)
// console.log(`Mi nota media este curso ha sido ${mediaCurso}`)

const notas = [
  promedio(10, 8, 4), // Matemáticas 0
  promedio(5, 7, 8), // Historia 1
  promedio(5, 6, 5), // Castellano 2
  promedio(5, 6, 5) // Física 3
]

// console.log(notas)
// console.log(notas.length)
function mediaNotas(notas) {
  let total;
  for (let index = 0; index < notas.length; index++) {
    // notas[0], notas[1], notas[2], notas[3]
    // console.log(notas[index])
    total = total + notas[index]
    return total
  }
}

// console.log(mediaNotas(notas))


// Función tipo 1
function tipo1(datos) {
  const nombre = datos[0]
  const barrio = datos[1]
  let error = ""

  if (typeof nombre !== "string") {
    error = error + "nombre"
  }
  if (typeof barrio !== "string") {
    error = error + " barrio"
  }

  if (error) {
    return `Existen errores de validación: ${error}`
  }

  return `Hola, soy ${datos[0]} y vivo en el ${datos[1]}.`
}

const miArray = [
  "sinsajo", // 0
  "distrito 4", // 1
]

// console.log(tipo1(miArray));


const de3 = function reglaDeTres(a, b, c) {
  const x = (b * c) / a
  return x
}

// console.log(de3(2, 4, 6))

// Función tipo 3
const tipo3 = (a,b,c) => (b * c) / a // return esta implicito
// ## Funciones

// Declaración de función

const añoActual = 2024;
const añoMayoresDeEdad = añoActual - 18

function mayoriaEdad1(añoNacimiento) {
    return (añoActual - añoNacimiento) >= 18;
}

// Expresión de función (es un valor, dentro de una variable)
// NOTA: No puede accederse a un valor de una variable antes de que sea declarada

// mayoriaEdad(2007) // no funcionará
const mayoriaEdad2 = function mayoriaEdad(añoNacimiento) {
    return (2024 - añoNacimiento) >= 18;
}

// Arrow functions

const mayoriaEdad3 = añoNacimiento => (2024 - añoNacimiento) >= 18

mayoriaEdad3(2007)


// Funciones CON y SIN return.
function funciónConReturn() {
  return "Hola"
}

const valorPrimeraFuncion = funciónConReturn()
console.log("valorPrimeraFuncion: " + valorPrimeraFuncion)

function funciónSinReturn() {
  console.log("Hola")
}

const valorSegundaFuncion = funciónSinReturn()
console.log("valorSegundaFuncion: " + valorSegundaFuncion)


// Arrays

// const notas = [10, 8, 4, 5, 7, 8]

function tres() {
  return 3
}

const miArray2 = [0,"uno", 2]
// Estructura de datos ordenada (nunca se desordena)
// Puede contener cualquier tipo de dato

// for (inicio; condición; incremento) {}
// miArray2.length siempre considerará la longitud del array
for (let i = 0; i < miArray2.length; i++) {
  console.log(miArray2[i])
}

for (let i = miArray2.length; i >= 0; i--) {
  console.log(miArray2[i])
}

const colaChicos = ["Pepito", "Juanito", "Jaimito", "Pablito"] // length = 4
console.log(colaChicos.push("María")) // length = 5
console.log(colaChicos) // ["Pepito", "Juanito", "Jaimito", "Pablito", "María"]

// inicio: colaChicos.length - 1  (5-1 = 4)
// condicion: i >= 0
// incremento: i--
for (let i = colaChicos.length -1; i >= 0; i--) {
  console.log(colaChicos[i])
  // ["Pepito", "Juanito", "Jaimito", "Pablito", "María"] // 5
  // 0,          1,         2,         3,        4

  // El orden sería el siguiente. De 4 a 0.
  // 4>=0?       3>=0,      2>=0,      1>=0,     0>=0   -1>=0❌
}

const colaChicas = ["Juana", "Juliana", "Laura", "Elena"] // length = 4
console.log(colaChicas.push("Marina")) // length = 5
console.log(colaChicas) // ["Pepito", "Juanito", "Jaimito", "Pablito", "María"]

// inicio: 0
// condicion: i < colaChicas.length
// incremento: i++
for (let i = 0; i < colaChicas.length; i++) {
  console.log(colaChicas[i])

  // ["Juana", "Juliana", "Laura", "Elena", "Marina"] // 5
  //    0,        1,         2,       3,        4

  // El orden sería el siguiente. De 0 a 4.
  // 0<5?       1<5?,      2<5?,      3<5?,     4<5?     5<5?❌
}

// Métodos de Arrays
// .length devuelve la longitud del array
colaChicas.length
// 5

// Push introduce un elemento al final del array
colaChicas.push("Push")
// colaChicas = (6)['Juana', 'Juliana', 'Laura', 'Elena', 'Marina', 'Push']

// Unshift introduce un elemento al principio del array
colaChicas.unshift("Unshift")
// colaChicas = (7)['Unshift', 'Juana', 'Juliana', 'Laura', 'Elena', 'Marina', 'Push']

// Pop elimina el último elemento del array
colaChicas.pop()
// colaChicas = (6)['Unshift', 'Juana', 'Juliana', 'Laura', 'Elena', 'Marina']

// Shift elimina el primer elemento del array
colaChicas.shift()
// colaChicas = (5)['Juana', 'Juliana', 'Laura', 'Elena', 'Marina']


colaChicas.join(" - ")


// Ahora necesitamos acceder a todos los elementos de un array.
// ¿Cuanto mide nuestro array?
// Podemos comprobarlo con un método del propio array: console.log(datos.length)
const datos = ["uno", "dos", "tres", "cuatro", "cinco"]

console.log(datos[0]) // "uno"
console.log(datos[1]) // "dos"
console.log(datos[2]) // "tres"
console.log(datos[3]) // "cuatro"
console.log(datos[4]) // "cinco"
console.log(datos[5]) // undefined
console.log(datos.length) // 5

// Para acceder a los elementos de un array, necesitamos una forma de iterar sobre ellos...
let inicioArray = 0
if (inicioArray < datos.length) { // 0 < 5?
  console.log(datos[inicioArray])
  inicioArray++                   // inicioArray = 1
  console.log(inicioArray)
}
if (inicioArray < datos.length) { // 1 < 5?
  console.log(datos[inicioArray])
  inicioArray++                  // inicioArray = 2
  console.log(inicioArray)
}
if (inicioArray < datos.length) { // 2 < 5?
  console.log(datos[inicioArray])
  inicioArray++                   // inicioArray = 3
  console.log(inicioArray)
}
if (inicioArray < datos.length) { // 3 < 5?
  console.log(datos[inicioArray])
  inicioArray++                  // inicioArray = 4
  console.log(inicioArray)
}
if (inicioArray < datos.length) { // 4 < 5?
  console.log(datos[inicioArray])
  inicioArray++                   // inicioArray = 5
  console.log(inicioArray)
}
if (inicioArray < datos.length) { // 5 < 5? ❌
  console.log(datos[inicioArray])
  inicioArray++                   // inicioArray = 6
  console.log(inicioArray)
} else {
  console.log("Fin del array")
}

// Iteración: El Bucle for
// Desafío de Codificación #2
// for (inicio; condición; incremento) {   }

// Realiza un bucle que recorra el array hacia delante y hacia atrás
// y muestre por consola cada uno de los elementos del array.
const numeros = ["uno", "dos", "tres", "cuatro", "cinco"]

// 1. Recorrer el array hacia delante
// for (i=0; i < numeros.length; i++)
// A.K.A. De cero a cuatro

// 2. Recorrer el array hacia atrás
// for (i=numeros.length -1; i >= 0; i--)
// A.K.A. De cuatro a cero
