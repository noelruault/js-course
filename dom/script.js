"use strict";


function wrongInput(input) {
    input.style.background = "red"
    input.reportValidity()
}

const email = document.querySelector("#mail");

// email.addEventListener("input", (event) => {
// email.addEventListener("input", function() {
email.addEventListener("input", function () {
    console.log(email.value) // para imprimir por consola el valor actual
    console.log(email.validity)
    if (email.validity.typeMismatch) {
        // Email es inválido
        wrongInput(email)
    } else if (email.validity.valueMissing) {
        email.setCustomValidity("El campo email no puede estar vacío")
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
    } else if (nombre.validity.tooShort) {
        nombre.setCustomValidity("El campo nombre no puede ser inferior a 2 caracteres")
        nombre.style.background = "red"
        nombre.reportValidity()
    } else {
        nombre.validity.patternMismatch || nombre.validity.valueMissing ?
            wrongInput(nombre) : nombre.style.background = "green"
    }
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



const cuadrado = document.querySelector('#square');
cuadrado.addEventListener("mouseover", function () {
    cuadrado.style.backgroundColor = "red"
    cuadrado.style.transform = "scale(1.1)"
    // cuadrado.style.transition = "background 2s";
    // cuadrado.style.transition = "transform 2s";
    cuadrado.style.transition = "all 2s";
});

cuadrado.addEventListener("mouseout", function () {
    cuadrado.style.backgroundColor = "white"
    cuadrado.style.transform = "scale(1)"
});


const submit = document.querySelector('#submitButton');
submit.addEventListener("mouseover", function () {
    submit.style.transform = "scale(1.1)"
    submit.style.backgroundColor = "#d693ff"
    submit.style.transition = "all 0.3s";
});

submit.addEventListener("mouseout", function () {
    submit.style.transform = "scale(1)"
    submit.style.backgroundColor = "white"
});

const player = document.querySelector('#player');

player.addEventListener("keydown", (event) => {
    if (event.isComposing || event.key === "ArrowRight") {
        player.style.transform = "translateX(10px)";
        player.style.backgroundColor = "#d693ff";
    } else if (event.isComposing || event.key === "ArrowLeft") {
        player.style.transform = "translateX(-10px)";
        player.style.backgroundColor = "#d693ff";
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const player = document.getElementById('player');
    let position = 0;

    function movePlayer(direction) {
        if (direction === 'left') {
            position -= 10;
        } else if (direction === 'right') {
            position += 10;
        }

        player.style.left = position + 'px';
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            movePlayer('left');
        } else if (event.key === 'ArrowRight') {
            movePlayer('right');
        }
    });
});
