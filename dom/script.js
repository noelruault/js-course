"use strict";


function wrongInput(input) {
    input.style.background = "red"
    input.reportValidity()
}
const email = document.querySelector("#mail");

// email.addEventListener("input", (event) => {
// email.addEventListener("input", function() {
email.addEventListener("input", function() {
    console.log(email.value) // para imprimir por consola el valor actual
    if (email.validity.typeMismatch) {
        // Email es inválido
        wrongInput(email)
    } else {
        // Email es válido
        email.style.background = "green"
    }
});

const bolas = document.querySelectorAll(".ball");

bolas.forEach(bola =>
    bola.addEventListener("click", () => {
        // bola.style.background === "red" ? bola.style.background = "white" : bola.style.background="red"

        if (bola.style.background === "white") {
            bola.style.background = "red";
            bola.textContent = "red"
        } else {
            bola.style.background = "white";
            bola.textContent = "white"
        }
        // bola.style.background = "red";
    })
)

const nombre = document.querySelector('#nombre');
nombre.addEventListener("input", function () {

    console.log(nombre.validity)

    if (nombre.value === "") {
        nombre.style.background = "white"
        return
    }

    nombre.validity.patternMismatch || nombre.validity.valueMissing ?
        wrongInput(nombre) : nombre.style.background = "green"
});



// https://developer.mozilla.org/es/docs/Web/Events


// Alternativa a ejecutar el script con defer:
// Esperar a que el DOM esté listo en Javascript
window.addEventListener('DOMContentLoaded', () => {
    // contenido de JS. Cualquier cosa...
});

const primeraBola = document.querySelector(".ball")
console.log(primeraBola)
console.log(primeraBola.style.background)
// El estilo que no es "inline" no estará reflejado en el DOM.

// Para ver el estilo, hay que llamar a la función window.getComputedStyle()
const estiloBola = window.getComputedStyle(primeraBola)
console.log(estiloBola.backgroundColor)
