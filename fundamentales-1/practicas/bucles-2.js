"use strict";

console.log("Prácticas JavaScript con Bucles 2");


// Búcles con arrays
//  →←↓↑
const camino = ['→', '→', '→', '↑'];

// // array.forEach((elemento) => { ... });
// letras.forEach((letra) => {
//     console.log(`(forEach): ${letra}`)
// });

// for (inicialización; condición; post-procesado) { ... }
for (let iteración = 0; iteración < camino.length; iteración++) {
    // Se ejecuta 5 veces, desde 0 hasta 4: 0, 1, 2, 3, 4
    // console.log(`(for): Avanzando una iteración ${iteración}`);
    console.log(camino[iteración])
}
