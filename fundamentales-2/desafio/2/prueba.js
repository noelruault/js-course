console.log("Bienvenido al fichero JS del formulario de películas.")
console.log("Este formulario es un desafío de fundamentales-2/desafio/2/prueba.js")

function acceptarFormulario() {
    textoPelícula = document.querySelector("#movieName").value
    textoReseña = document.querySelector("#review").value
    textoValoración = document.querySelector("#rating").value

    console.log("Película: " + textoPelícula)
    console.log("Reseña: " + textoReseña)
    console.log("Valoración: " + textoValoración)

    debugger;
}
