/**
 * @file index.js
 * @description Plantilla JS preconfigurada con ESLint
*/

console.log("Plantilla JS preconfigurada con ESLint")
console.log("Ejecuta el comando 'make setup' para instalar las dependencias")

let i = 0
function wrong() {
    console.log("i", i)
    if (2 == 1) {
        return true
    }
    console.log("i", i)
}
