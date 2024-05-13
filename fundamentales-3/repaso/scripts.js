"use strict";

console.log("Contenidos del repaso 2: Fundamentales JS");

// -------------------- Ámbito (Scope) --------------------


// Ámbito global
let variableGlobal = "Esta es mi variable global";

if (typeof variableGlobal === "string") {
    // console.log("La variable es accesible dentro del bloque if");
    let variableLocal = "Esta es mi variable local";
    // console.log(variableGlobal);
    variableGlobal = "Modificando variable global";
    // console.log(variableGlobal);
}
// console.log(variableLocal); // Error: variableLocal is not defined


function test() {
    const listaNumeros = [1, 2, 3, 4, 5]
    for (let i in listaNumeros) {
        if (listaNumeros[i] % 2 === 0) {
            var algunNumeroParEncontrado = true; // variable contenida en el ámbito de la función
        }
        // if (algunNumeroParEncontrado) { console.log(`El número ${listaNumeros[i]} es par`); }
    }
    // console.log(`¿Se encontró algún número par? ${algunNumeroParEncontrado}`);
}

test()
// console.log(algunNumeroParEncontrado) // Error Uncaught ReferenceError: algunNumeroParEncontrado is not defined


if (true) {
    var varGlob = true; // variable contenida en el ámbito de la función
}
// console.log(`La variable global es: ${varGlob}`);

// -------------------- / Ámbito (Scope) --------------------


// --------------------- Bucles ---------------------

const arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
//           0   1   2   3   4   5   6   7   8   9

// 1. Utilizando for
for (let index = 0; index < arr.length; index++) {
    // console.log(`Elemento: ${ arr[index] }`)
}

// 2. Utilizando while
let index = 0; // inicialización del índice
while (index < arr.length) { // condición

    // console.log(`Elemento: ${arr[index]}`);

    index++; // incremento
}

// 3. Utilizando forEach
// arr.forEach((elemento) => console.log(`Elemento: ${elemento}`));

// 4. Utilizando for in
for (let i in arr) {
    // console.log(`${i}: Elemento: ${ arr[i] }`);
}

// -------------------- / Bucles --------------------

// --------- Funciones + Arrays + Bucles ------------

const arrayTipos = [1, "hola", false, 2, "adiós", 3, true, "ciao", 4, "bye"];
// index:           0    1      2     3     4     5    6     7     8     9
//
// El resultado de la suma del array anterior debería ser 10

function sumarNumerosDeUnArray(arrayTipos) {
    let suma = 0;
    for (let index = 0; index < arrayTipos.length; index++) {
        if (typeof arrayTipos[index] === "number") {
            suma = suma + arrayTipos[index]; // suma += arrayTipos[index];
        }
    }
    return suma;
}
// console.log(sumarNumerosDeUnArray(arrayTipos));

// -------- / Funciones + Arrays + Bucles ----------

// --------------- Condicional ternario -----------------
const numeroPorComprobar = 9;

if (numeroPorComprobar % 2 === 0) {
    // console.log("El número es par");
}
else {
    // console.log("El número es impar");
}

// Condición ? valor si verdadero : valor si falso
// numeroPorComprobar % 2 === 0 ?
//     console.log("El número es par") : console.log("El número es impar");

// ------------- / Condicional ternario -----------------

// ----------------- Arrays -----------------

// Sin los métodos de los arrays, para eliminar un método de un array habría que hacer algo así:
let removeElement = (array, posicion) => {
    let newArray = [];

    for (let i = 0; i < array.length; i++) {
        if (i === posicion) {
            continue // esto significa que no se ejecuta el código a continuación y se pasa a la siguiente iteración
        }
        newArray[newArray.length] = array[i] // newArray.push(array[i])
    }
    return newArray;
};

let arrayInicial = [1, 2, 3, "hola", 4];
let posicion = 3;
let resultado = removeElement(arrayInicial, posicion);
console.log(arrayInicial)
console.log("Elementos después de la eliminación: " + resultado);

// Gracias a los métodos de los arrays, podemos hacer lo mismo de una forma más sencilla:

const misNotas = [5, 6, 7, "8", 6, 7, "fin"];

// 1. Borra el último elemento del array
//     misNotas.pop();       // [5, 6, 7, '8', 6, 7]
// 2. Añadir un elemento al final del array
//     misNotas.push(10);    // [5, 6, 7, '8', 6, 7, 'fin', 10]
// 3. Añadir un elemento al principio del array
//     misNotas.unshift(4);  // [4, 5, 6, 7, '8', 6, 7]
// 4. Borra el primer elemento del array
//     misNotas.shift();     // [5, 6, 7, '8', 6, 7]
// 5. Modificar un elemento del array
//    misNotas[3] = 8;      // [5, 6, 7, 8, 6, 7]

// --------------- / Arrays -----------------
