"use strict";

console.log("Prácticas JavaScript con Bucles");

let iteración = 0;
while (iteración < 5) {
    console.log(`(while): Avanzando una iteración ${iteración}`);
    iteración = iteración + 1;
}

do {
    console.log(`(do-while 1): Esto se ejecuta al menos una vez`);
} while (false); // Se ejecuta 5 veces, desde 1 hasta 5: 1, 2, 3, 4, 5


iteración = 0;
do {
    // iteración = iteración + 1;
    // iteración++;
    iteración += 1;
    console.log(`(do-while 2): Avanzando una iteración ${iteración}`);
} while (iteración < 5); // Se ejecuta 5 veces, desde 1 hasta 5: 1, 2, 3, 4, 5


// for (inicialización; condición; post-procesado) { ... }
for (let iteración = 0; iteración < 5; iteración++) {
    // Se ejecuta 5 veces, desde 0 hasta 4: 0, 1, 2, 3, 4
    console.log(`(for): Avanzando una iteración ${iteración}`);
}

// Búcles con arrays

const letras = ['a', 'b', 'c'];
console.log(letras);
// array.forEach((elemento) => { ... });
letras.forEach((letra) => {
    console.log(`(forEach): ${letra}`)
});
