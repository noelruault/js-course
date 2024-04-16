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
10. Introducción a los Objetos
11. Notación de Punto vs. Corchetes
12. Métodos de Objetos
13. Desafío de Codificación #3
14. Iteración: El Bucle for
15. Bucles en Reversa y Bucles Anidados
16. El Bucle while
17. Desafío de Codificación #4
*/

console.log("Fundamentos 2");

const damaris = 1999;

// Funcion normal
// console.log("Funcion:", esMayorDeEdad(damaris))
// function <nombre>(<parametro1>, <parametro2>, ...) {}
// function <nombre>() {}
// @param añoNacimiento: number
function esMayorDeEdad(añoNacimiento) {
  return 2024 - añoNacimiento >= 18;
}

// Funcion dentro de una variable
// console.log("Funcion dentro de una variable:", mayorEdad(damaris)) // No funciona porque la variable no ha sido declarada aun
const mayorEdad = function esMayorDeEdad(añoNacimiento) {
  return 2024 - añoNacimiento >= 18;
}
// console.log("Funcion dentro de una variable:", mayorEdad(damaris))

// Arrow function
// Funciones de Flecha
// =>
//
// const nombreFuncion = (<parametro1>, <parametro2>, ...) => {}
const mayorEdad2 = añoNacimiento => 2024 - añoNacimiento >= 18;
// console.log("Funcion dentro de una arrow function:", mayorEdad2(damaris))


// Función que indice el nombre, edad y si es mayor de edad
function descripcionPersona(nombre, añoNacimiento) {
  const edad = 2024 - añoNacimiento;
  // return `${nombre} tiene ${edad} años y ¿es mayor de edad? ${esMayorDeEdad(añoNacimiento)}`;
  return `${nombre} tiene ${edad} años y ${esMayorDeEdad(añoNacimiento) ? 'si': 'no'} es mayor de edad`;
}

// console.log(edad) // No está definida
// console.log(descripcionPersona("Damaris", 1999))

let nombre = "Damaris";
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
