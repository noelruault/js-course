'use strict';

/*
1. Introducción a los Objetos
2. Notación de Punto vs. Corchetes
3. Métodos de Objetos
4. Desafío de Codificación #3
5. Iteración: El Bucle for
6. Bucles en Reversa y Bucles Anidados
7. El Bucle while
8. Desafío de Codificación #4
*/

function nombre(parámetro1, parámero2){}

const array = [
    "texto", // string
    124,     // numero
    true,    // bool
    nombre() // función
]

const objeto = {
    clave: "valor",

    introduccion: "texto",
    numeroDeSerie: 124,
    contenidos: [1, 2, 3, 4],
    2: "dos",                 // Aunque usemos números, la clave será tipo string

    informacionDelObjeto() {
        return `La intro es: ${this.introduccion} y el numero de serie es ${this.numeroDeSerie}`
    },

    // info: function (parámetro1, parámetro2){}
}

// console.log(objeto.informacionDelObjeto())
objeto.dia = "sol"          // inicialización de un nuevo valor (no existía)
objeto.numeroDeSerie = 2345 // modificación de un valor existente
objeto["noche"] = "luna"

// console.log(objeto)
// console.log(objeto.noche)

const valoresInteresantesObjeto = ["numeroDeSerie", "contenidos"]

// for (declaración iterador   ;  condición ;    incremento/decremento )
for (let index = 0; index < valoresInteresantesObjeto.length; index++) {
    // console.log(objeto[valoresInteresantesObjeto[index]])
    // 1: objeto["numeroDeSerie"]
    // 2: objeto["contenidos"]
}

// Extraer todos los valores de un objeto
Object.values(objeto)

// Extraer todas las claves de un objeto
Object.keys(objeto)

// O una clave específica
Object.keys(objeto)[0]
// Que corresponderá con su valor en la misma posición (0)
Object.values(objeto)[0]


const pelicula = {
    insertarValoracion(numero) {
        if (numero > 5 || numero < 0) {
            return false
        }
        this.valoraciones.push(numero)
    },
    calculoValoracion() {
        let resultadoMedia = 0;
        this.valoraciones.forEach(element => {
            resultadoMedia = resultadoMedia + element
        });
        resultadoMedia = resultadoMedia / this.valoraciones.length
        // 3, 4, 5 = 12
        // 12 / 3 = 4
        return resultadoMedia
    },
    valoraciones: [],
}

const vengadores = pelicula







// Desarrolla un objeto despertador con las funciones: amanecer y anochecer
// que al llamarlas impriman por pantalla a que hora amanece o anochece.
// El despertador basara su resultado en las variables día y noche, que almacenan
// La hora exacta a la que amanece o anochece.
//
// Extra: desarrolla también funciones que te digan cuanto falta para
// el siguiente amanecer y anochecer
//
// Ejemplo de llamada:
// despertador.amanecer()
// 'Amanece a las 5AM'










// App que
// Curl biceps
// Curl 1, 2...

// Registrar para cada ejercicio, el grupo muscular, el tipo y las repeticiones, la fecha?
// Para ver progreso por grupo muscular
// registrarEjercicio("biceps", "curl", [15, 10, 8, 6], [60, 55, 50, 40], 2024/05/08)

let repeticiones = []
let peso = []
function registrarRepeticiones(numeroRepeticiones, pesoUtilizado) {
    if (numeroRepeticiones <= 0 || pesoUtilizado < 0) {
        return false
    }

    // Usamos concat() para dar soporte a arrays como parámetro
    repeticiones = repeticiones.concat(numeroRepeticiones)
    peso = peso.concat(pesoUtilizado) // equivalente a peso[peso.length] = pesoUtilizado

    return true
}

function registrarEjercicio(
    grupoMuscular,
    tipoEjercicio,
    nRepeticiones,
    nPesos,
    fechaDelEjercicio
) {
    registrarRepeticiones(nRepeticiones, nPesos)
    if (fechaDelEjercicio === undefined) {
        fechaDelEjercicio = new Date(); // fecha actual
    }

    return `Has registrado un ejercicio de ${grupoMuscular}, tipo ${tipoEjercicio}. Has hecho ${nRepeticiones} repeticiones con pesos de ${nPesos} el día ${fechaDelEjercicio.toLocaleDateString("es-ES")}`
}


const despertador = {
    dia: 5,
    noche: 22,
    diaMinutos: 30,
    nocheMinutos: 10,

    anochecer() {
        return `Anochece a las ${this.noche}:${this.nocheMinutos}`
    },
    amanecer() {
        return `Amanece a las ${this.dia}:${this.diaMinutos}`
    },

    // La función solo dará un resultado correcto si aún no ha anochecido
    siguienteAnochecer() {
        const horaActual = new Date().getHours()
        const minutoActual = new Date().getMinutes()

        let horasRestantes = this.noche - horaActual
        const minutosRestantes = this.nocheMinutos - minutoActual

        return `${horasRestantes}:${(minutosRestantes < 0) ? 60 + minutosRestantes : minutosRestantes}`
    }
}

/*
const divisas = {
    // Euro es la moneda base
    // Buscar cada una de las monedas y almacenarla en su clave
    // dolar: ...     (1 euro 1.07 us dollar)
    // yen:   ...     (1 euro 167.37 japanese yen)
    // naira: ...     (1 euro 1530.17 nigerian naira)
    moneda: 123,

    conversor(euros, divisa) {
        // divisas.conversor(10, "yen")
        // euros = 10; divisa = "yen"

        console.log(euros, divisa)
        console.log(this[divisa])
        return true
    }
    // divisas.conversor(12, "naira")
    // 18362.04
}
*/


const divisas = {
    dolar:1.07,
    yen:167.37,
    naira: 1530.17,

    conversor(euros, divisa) {
        console.log(`me llegan ${euros} euros, a convertir en ${divisa}`)
        // euros  // (un número)
        // divisa // ("yen", "dolar" ...)

        // this.yen
        // this["yen"]

        // console.log(this[divisa])

        return euros * this[divisa]
    }
}
