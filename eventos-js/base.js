"use stict";

/*
element.addEventListener("click", myFunction);

function myFunction() {
  alert ("Hello World!");
}
*/

document.addEventListener("DOMContentLoaded", function () {
    // This code will run after the DOM is fully loaded


    // equivalente a :active en CSS

    /*
    // Esto selecciona la primera instancia de la clase .ball
    document.querySelector(".ball").addEventListener("click", function () {
        console.log("la bola ha sido presionada");
        console.log(this)

        if (this.style.background === "red") {
            this.style.background = "blue";
        } else { // cualquier otra cosa
            this.style.background = "red";
        }
    });
    */

    // Versión 1, con data attributes
    // - https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
    // elecciona todas las instancias de la clase .ball
    const bolas = document.querySelectorAll(".ball") // bolas -> [div.ball, div.ball]
    // console.log(bolas)

    for (let index = 0; index < bolas.length; index++) {
        const bola = bolas[index];
        bola.dataset.position = 0;

        bola.addEventListener("click", function () {
            console.log(this)
            bola.dataset.position = Number(bola.dataset.position) + 10;
            this.style.transform = `translateX(${bola.dataset.position}px)`;
        });

        bola.addEventListener("mouseover", function () {
            if (this.style.background === "red") {
                this.style.background = "blue";
            } else { // cualquier otra cosa
                this.style.background = "red";
            }
        });
    }

    /*
    // Versión 2, con data attributes y un array
    // elecciona todas las instancias de la clase .ball
    const bolas = document.querySelectorAll(".ball") // bolas -> [div.ball, div.ball]
    // console.log(bolas)

    let posicionBolas = [];
    for (let index = 0; index < bolas.length; index++) {
        const bola = bolas[index];

        posicionBolas[index] = 0;
        bola.dataset.index = index;
        bola.dataset.position = 0;

        bola.addEventListener("click", function () {
            console.log(this)
            posicionBolas[bola.dataset.index] += 10;
            this.style.transform = `translateX(${posicionBolas[bola.dataset.index]}px)`;
        });

        bola.addEventListener("mouseover", function () {
            if (this.style.background === "red") {
                this.style.background = "blue";
            } else { // cualquier otra cosa
                this.style.background = "red";
            }
        });
    }
    */
});
