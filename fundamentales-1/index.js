"use strict";

console.log("Curso JavaScript");

const PI = 3.14159265359;
// console.log(PI);

const trabajoAnterior = "programador";
const trabajoActual = "profesor";

// const 1erTrabajo = "programador"; // no se puede usar números al inicio


const miPrimeraVariable = "Hola mundo";
const my_first_variable = "Hola mundo"; // No usar guiones bajos
const $myPrimeraVariable = "Hola mundo"; // Se puede usar el signo $
const myPrimeraVariable$ = "Hola mundo"; // Se puede usar el signo $

// const añoActual = 2021;
let edad;

// const ganador = "";
// ganador = "Equipo Palma"; // no funciona porque es constante y los valores constantes no pueden cambiar

/*
- Tipos de datos primitivos
    - Number 123
    - String "", ''
    - Boolean true, false
    - Undefined (variable sin valor)
    - Null (object)
    - (Fuera de alcance) Symbol, BigInt
*/

// Numeros
  const numero = 123;
// Cadenas
  const cadena = "Hola mundo";
  const cadenaComillasSimples = 'Hola mundo';
  // const cadenaComillasSimplesPalabrasInglesas0 = 'I'm a programmer';
  const cadenaComillasSimplesPalabrasInglesas1 = "I'm a programmer";
  const cadenaComillasSimplesPalabrasInglesas2 = 'I\'m a programmer';
// Booleanos
  const verdadero = true;
  const falso = false;

// undefined
  let indefinido;
  // console.log(typeof indefinido);
  let indefinido2 = undefined;
  // console.log(typeof indefinido2);

  let cadenaVacia = "";
  // console.log(typeof cadenaVacia);

  // Se puede cambiar el tipo de dato de una variable porque en Javascript,
  // el tipo de dato se almacena en el valor y no en la variable
  cadenaVacia = 14;
  // console.log(typeof cadenaVacia);

// Null
  let nulo = null;
  // console.log(typeof nulo);


// Operator precedence
// console.log(10 - (4 - 3) * 1);

let x;
x = 10 + 5; // 15
// x += 15
x = x - 5 // = 10
// x -= 5;
x = x + 10 // = 20
// x += 10;
x = x * 4 // = 80
// x *= 4;
x = x / 4 // = 20
// x /= 4;
x = x ** 4 // = 160000
// x **= 4;
// console.log(x)


const nacimientoOsa = 2007
let añoActual = 2024

// console.log("Integrantes de clase", "Martin", "Noel", "Osa")
// console.log("Integrantes de clase", "Osa tiene", añoActual - nacimientoOsa, "años" )

// Ha pasado un año
añoActual++ // añoActual = añoActual + 1
añoActual-- // añoActual = añoActual - 1
añoActual = añoActual - 1
// console.log(añoActual)

// Operadores de comparación
const diez = 10;
const diezCadena = "10";

// console.log(diez == diezCadena); // true - The values are the same after type conversion
// console.log(diez === diezCadena); // false - The values are different types and not equal

// ---

const verdaderoTrue = true;
const uno = 1;

// console.log(verdaderoTrue == uno); // true - The boolean value true gets converted to 1
// console.log(verdaderoTrue === uno); // false - The values are different types and not equal


// console.log(5>4)
// console.log(4 >= 3) // 0, 1, 2, 3
// console.log(4 > 3) // 0, 1, 2, 3, 4

// # Desafío de codificación #1
    const massOsa = 95;
    const heightOsa = 1.88; // en metros
    const massMartin = 85;
    const heightMartin = 1.76;

    const BMIOsa = massOsa / heightOsa ** 2;
    const BMIMartin = massMartin / (heightMartin * heightMartin);

    // Haz que salga por pantalla el mensaje: "28.3, 23.9, true".
    //  28.3 y 23.9 son los BMI de Osa y Martin respectivamente, y true es si el BMI de Osa es mayor que el de Martin

    // ---------------------------------------------
    //
    // console.log(...);
    //
    // ---------------------------------------------

  // console.log("Osa:", BMIOsa, "Martin:",  BMIMartin)
  // console.log(BMIOsa > BMIMartin) // BMI Osa es mayor que Martin
  // console.log(BMIMartin > BMIOsa) // BMI Martin es mayor que Osa
  // console.log(BMIOsa < BMIMartin) // BMI Osa es menor que Martin
  // console.log(BMIMartin < BMIOsa) // BMI Martin es menor que Osa

// console.log("Osa:", BMIOsa, "Martin:", BMIMartin,
//   "¿El BMI de Osa es mayor al de Martin ? ", BMIOsa > BMIMartin
// )

// console.log(`Osa tiene un BMI de ${BMIOsa}
// Martin tiene un BMI de ${BMIMartin}
// ¿El BMI de Osa es mayor al de Martin? ${BMIOsa > BMIMartin}`)

const age = 15;
if (age >= 18) {
    // console.log('¡Puedes conducir! 🚗');
} else {
    const yearsLeft = 18 - age;
    // console.log(`Muy joven, espera otros ${yearsLeft} años :)`);
}

/*
const agePrompt = prompt("¿Cuál es tu edad?");
const mayoriaEdad = 18;

// if (agePrompt < mayoriaEdad) {
//    console.log("No puedes conducir")
// }
if (agePrompt >= mayoriaEdad) { // ¿La edad introducida es mayor o igual a 18?
    console.log('¡Puedes conducir! 🚗');
} else { // ¿La edad introducida es algo diferente al primer caso?
    console.log("No puedes conducir")
    const yearsLeft = mayoriaEdad - agePrompt;
    console.log(`Muy joven, espera otros ${yearsLeft} años :)`);
}

// const agePrompt = prompt("¿Cuál es tu edad?");
// const mayoriaEdad = 18;
if (agePrompt >= 100) { // ¿La edad introducida es mayor o igual a 18?
  console.log("No puedes conducir, eres muy viejo");
} else if (agePrompt >= mayoriaEdad) {
  console.log("¡Puedes conducir! 🚗");
} else { // ¿La edad introducida es algo diferente al primer caso?
    console.log("No puedes conducir")
    const yearsLeft = mayoriaEdad - agePrompt;
    console.log(`Muy joven, espera otros ${yearsLeft} años :)`);
}
*/

// &&, ||, ??

const teoricoAprobado = false;
const practicoAprobado = true;
const psicotecnicoAprobado = true;
const tieneLicenciaInternacional = true;

if (
  (teoricoAprobado && practicoAprobado && psicotecnicoAprobado)
    || tieneLicenciaInternacional) {
  // console.log("Licencia OK");
} else {
  // console.log("Licencia NO OK");
}

// Falsy values: null, undefined, false, NaN, 0, -0, 0n, "", '', ``
"verdadero" || "falso"
1 || "falso"
true || "falso"

"" || "falso"
null || "falso"
undefined || "falso"
0 || "falso"

// console.log(hasDriversLicense && hasGoodVision);
// console.log(!hasDriversLicense || !hasGoodVision); // 🤯

// console.log(hasDriversLicense || hasForeignAndValidLicense);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('User is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

/*
- [✔️] Enlazar un archivo JavaScript
    <script defer type="module" src="index.js"></script>

- Valores y variables
    variable = "valor";
    console.log(variable);
    - Convenciones de nombres de variables
    - Usar nombres descriptivos
    - No usar palabras reservadas
    - No usar números al inicio
    - No usar espacios
    - Usar camelCase
    - Es posible usar guiones bajos y el signo $
    - Las variables en mayúsculas son constantes por convención
    - Se pueden declarar variables sin valor (let variable;)

- Tipos de datos (let, const y var)
    console.log(typeof variable);

- Tipos de datos primitivos
    - Number 123
    - String "", ''
    - Boolean true, false
    - Undefined (variable sin valor)
    - Null (object)
    - NaN (Not a Number)
    - (Fuera de alcance) Symbol, BigInt

- Operadores básicos
    (podéis encontrar una referencia completa a continuación: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

    // Operadores aritméticos
    +, -, *, /, %, **

    // Negación
    -variable, -valor

    // Operadores de concatenación
    console.log('I'm ' + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!');

    // Operadores de asignación
    let x = 10 + 5; // 15
    x -= 5; // x = x - 5 = 10
    x += 10; // x = x + 15 = 25
    x *= 4; // x = x * 4 = 100
    x /= 4; // x = x / 4 = 25
    x **= 4; // x = x ** 4 = 390625

    // Operadores de incremento y decremento
    x++; // x = x + 1
    x--; // x = x - 1

- Operadores relacionales y de equidad
    >, <, >=, <=, ==, ===, !=, !==
    - Operadores de igualdad: == vs. ===

        const num = 10;
        const str = "10";

        console.log(num == str); // true - The values are the same after type conversion
        console.log(num === str); // false - The values are different types and not equal

        // ---

        const bool = true;
        const num = 1;

        console.log(bool == num); // true - The boolean value true gets converted to 1
        console.log(bool === num); // false - The values are different types and not equal

- Precedencia de operadores
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

- Desafío de codificación #1

    const massOsa = 95;
    const heightOsa = 1.88;
    const massMartin = 85;
    const heightMartin = 1.76;

    const BMIOsa = massOsa / heightOsa ** 2;
    const BMIMartin = massMartin / (heightMartin * heightMartin);

    Haz que salga por pantalla el mensaje: "28.3, 23.9, true".
    //  28.3 y 23.9 son los BMI de Osa y Martin respectivamente, y true es si el BMI de Osa es mayor que el de Martin

    // ---------------------------------------------
    //
    // console.log(...);
    //
    // ---------------------------------------------

- Cadenas y plantillas

    console.log(`I'm ${firstName}, a ${year - birthYear} year old ${job}!`);
    console.log(`String
    multiple
    lines`);

- Tomar decisiones: declaraciones if / else

    const age = 15;
    if (age >= 18) {
        console.log('User can start driving license 🚗');
    } else {
        const yearsLeft = 18 - age;
        console.log(`User is too young. Wait another ${yearsLeft} years :)`);
    }

- Operadores lógicos
    &&, ||, ??

        const hasDriversLicense = true;
        const hasGoodVision = true;
        const hasForeignAndValidLicense = true;

        console.log(hasDriversLicense && hasGoodVision);
        console.log(!hasDriversLicense || !hasGoodVision); // 🤯

        console.log(hasDriversLicense || hasForeignAndValidLicense);
        console.log(!hasDriversLicense);

        if (hasDriversLicense && hasGoodVision) {
          console.log('User is able to drive!');
        } else {
          console.log('Someone else should drive...');
        }

- Falsy values
  https://developer.mozilla.org/en-US/docs/Glossary/Falsy

  // Falsy values: null, undefined, false, NaN, 0, -0, 0n, "", '', ``

  "verdadero" || "falso"
  1 || "falso"
  true || "falso"

  null || "falso"
  undefined || "falso"
  0 || "falso"

- Desafío de programación #2

    Utiliza el ejemplo del IMC del Desafío nº 1, y el código que ya has escrito, y mejóralo:

    1. 1. Imprime un bonito mensaje en la consola, diciendo quién tiene el IMC más alto. El mensaje puede ser "¡El IMC de Marcos es mayor que el de Juan!" o "¡El IMC de Juan es mayor que el de Marcos!".
    2. Utiliza un literal de plantilla para incluir los valores de IMC en las salidas. Ejemplo: "¡El IMC de Marcos (28,3) es mayor que el de Juan (23,9)!".


- Conversión de tipos y coerción
- Valores verdaderos y falsos
- Desafío de codificación #3
- Sentencia switch
- Sentencias y expresiones
- Operador condicional (ternario)
- Desafío de codificación #4
*/


/*
////////////////////////////////////
// Linking a JavaScript File
let js = "amazing";
console.log(40 + 8 + 23 - 10);

////////////////////////////////////
// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);

////////////////////////////////////
// Data Types
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

////////////////////////////////////
// let, const and var
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Schmedtmann';
console.log(lastName);

////////////////////////////////////
// Basic Operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

////////////////////////////////////
// Operator Precedence
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

////////////////////////////////////
// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

////////////////////////////////////
// Strings and Template Literals
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`);


////////////////////////////////////
// Taking Decisions: if / else Statements
const age = 15;

if (age >= 18) {
  console.log('Sarah can start driving license 🚗');
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

////////////////////////////////////
// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`)
}


const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' / '2');

let n = '1' + 1; // '11'
n = n - 1;
console.log(n);

*/
////////////////////////////////////
// Type Conversion and Coercion

// type conversion

// tipos? string, number, boolean, undefined, null, object
const tipoNumero = 12;
const tipoString = "cadena de texto";
//const tipoString2 = 'cadena de texto';
// const tipoString3 = `cadena de texto`;
const tipoBoolean = true; // false


const ejemploCadena = "12";
const numeroDesdeCadena = Number(ejemploCadena);
// console.log(numeroDesdeCadena); // 12

const ejemploNumero = 12;
// console.log(typeof ejemploNumero); // "number"
const cadenaDesdeNumero = String(ejemploNumero);
// console.log(cadenaDesdeNumero); // "12"
// console.log(typeof cadenaDesdeNumero); // "string"

// Ejemplo NaN
// console.log(Number('Hola')); // NaN

// Falsy values
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy
/*
console.log("null", Boolean(null))
console.log("undefined", Boolean(undefined))
console.log("false", Boolean(false))
console.log("NaN", Boolean(NaN))
console.log("0", Boolean(0))
console.log("-0", Boolean(-0))
console.log("0n", Boolean(0n))
console.log("\"\"", Boolean(""))
console.log("''", Boolean(''))
*/

////////////////////////////////////
// EJERCICIO
//
// dineroCliente; // El dinero que tiene disponible el cliente
// precioVenta; // El dinero que nos va a costar la compra

/*
El cliente va a comprar:
- una camiseta a 20 euros
- unas zapatillas a 10 euros
- unas gafas a 100 euros

Calcular el precio de venta para la transaccion actual
Dependiendo de la cantidad de dinero que tenga el cliente, se podrá realizar la compra o no

## Pseudocódigo
- en base a los articulos, realizar la suma del precio de venta
    const camiseta = 20, const zapatillas = 10, const gafas = 100;
- Ayudándonos de un condicional, comprobar si el cliente tiene
  suficiente dinero para realizar la compra
    if (dineroCliente es mayor que precioVenta){
      // Se realiza la transacción correctamente
    } else {
      // La transacción no puede realizarse
    }
- Mostrar un mensaje en consola indicando si la compra se ha realizado o no.

## Resultado
*/

// Supuesto carrito de compra
const camiseta = 20;
const zapatillas = 10;
const gafas = 100;

/*
console.log(camiseta+camiseta)
console.log("camiseta"+camiseta)
console.log("La suma de los artículos es "+ camiseta + gafas + zapatillas ) // error de concatenación por unir cadena a numero
console.log("La suma de los artículos es "+ (camiseta + gafas + zapatillas) ) // agrupando los números, solucionamos lo anterior
console.log("El precio de la camiseta es " + camiseta + ", y el de las gafas es " + gafas) // ejemplo de concatenació
console.log(`La suma de los artículos es ${camiseta + gafas + zapatillas}`) // ¡¡¡recomendada!!!
*/

// const precioVenta = (camiseta + zapatillas + gafas) + ((camiseta + zapatillas + gafas) * 0.21)
const precioVenta = camiseta + zapatillas + gafas
// console.log(`La compra que vas a realizar tiene el precio de ${precioVenta}`)
const dineroCliente = 0 // prompt("¿Cuánto dinero tienes en la cuenta?")
const tarjetaRegaloDorada = true

// console.log(`Dinero cliente: ${dineroCliente}, precio venta: ${precioVenta}`)

if (dineroCliente >= precioVenta) {
  // console.log("Compra satisfactoria")
} else {
  // console.log("Compra denegada")
}

// dineroCliente >= precioVenta ? console.log("OK") : console.log("NOK")

// EXTRA:
// - Añade un artículo más al carrito de compra y asegúrate de que está incluído en todo el proceso
// - Si el cliente es poseedor de una tarjeta regalo dorada, la compra se realizará tenga dinero o no
//    Se puede hacer un "else if" o utilizar el operador lógico "||", si quieres, ¡prueba ambas combinaciones!

/*
// la tarjeta puede estar activa
if (tarjetaRegaloDorada || dineroCliente >= precioVenta) {
  console.log("Compra satisfactoria")
} else {
  console.log("Compra denegada")
}
*/

/*
if (tarjetaRegaloDorada) {
  console.log("Compra satisfactoria")
  tarjetaRegaloDorada = false;

} else if (dineroCliente >= precioVenta) {
  console.log("Compra satisfactoria")

} else {
  console.log("Compra denegada")
}
*/

////////////////////////////////////
// Prompt
/*
const dineroEnLaCuenta = prompt("Introduce texto 1 aquí")
console.log(dineroEnLaCuenta)

console.log(prompt("Introduce texto 2 aquí"))
*/


////////////////////////////////////
// El operador condicional (ternario)
//
const miEdad = 30;
let mayorDeEdad;

// Sin usar el condicional ternario
let variablesSiNo;
if (edad > 18) {
    mayorDeEdad = true;
    variablesSiNo = "si"
} else {
   mayorDeEdad = false;
   variablesSiNo = "no"
}

// console.log(`Mi edad es ${miEdad} y ${variablesSiNo} soy mayor de edad: ${mayorDeEdad}`)

// Usando el condicional ternario
//
// x >= y ? si_se_cumple : si_no_se_cumple
//
// mayorDeEdad = miEdad >= 18 ? true : false; // Aunque en este caso concreto, true/false podríamos simplificarlo más todavía
// mayorDeEdad = miEdad >= 18;
// Pero si queremos hacer algo más complejo en menos línes de código, podemos hacerlo usando el condicional ternario
// mayorDeEdad = miEdad >= 18 ? console.log('Puedo beber vino 🍷') : console.log('Agüita fresca 💧');

console.log(`Mi edad es ${miEdad} y ${miEdad >= 18 ? 'si' : 'no'} soy mayor de edad`) // BOOM 💥

/*
////////////////////////////////////
// Truthy and Falsy Values

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('YAY! Height is defined');
} else {
  console.log('Height is UNDEFINED');
}

////////////////////////////////////
// Equality Operators: == vs. ===
const age = '18';
if (age === 18) console.log('You just became an adult :D (strict)');

if (age == 18) console.log('You just became an adult :D (loose)');

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 22 === 23 -> FALSE
  console.log('Cool! 23 is an amzaing number!')
} else if (favourite === 7) {
  console.log('7 is also a cool number')
} else if (favourite === 9) {
  console.log('9 is also a cool number')
} else {
  console.log('Number is not 23 or 7 or 9')
}

if (favourite !== 23) console.log('Why not 23?');

////////////////////////////////////
// Logical Operators
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoodVision) {
//   console.log('Sarah is able to drive!');
// } else {
//   console.log('Someone else should drive...');
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log('Sarah is able to drive!');
} else {
  console.log('Someone else should drive...');
}
*/

////////////////////////////////////
// Coding Challenge #3

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

/*
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//   console.log('Dolphins win the trophy 🏆');
// } else if (scoreKoalas > scoreDolphins) {
//   console.log('Koalas win the trophy 🏆');
// } else if (scoreDolphins === scoreKoalas) {
//   console.log('Both win the trophy!');
// }

// BONUS 1
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log('Both win the trophy!');
} else {
  console.log('No one wins the trophy 😭');
}

////////////////////////////////////
// The switch Statement
const day = 'friday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Plan course structure');
    console.log('Go to coding meetup');
    break;
  case 'tuesday':
    console.log('Prepare theory videos');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Write code examples');
    break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy the weekend :D');
    break;
  default:
    console.log('Not a valid day!');
}

if (day === 'monday') {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
} else if (day === 'tuesday') {
  console.log('Prepare theory videos');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Write code examples');
} else if (day === 'friday') {
  console.log('Record videos');
} else if (day === 'saturday' || day === 'sunday') {
  console.log('Enjoy the weekend :D');
} else {
  console.log('Not a valid day!');
}

////////////////////////////////////
// Statements and Expressions
3 + 4
1991
true && false && !false

if (23 > 10) {
  const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`I'm ${2037 - 1991} years old ${me}`);

////////////////////////////////////
// The Conditional (Ternary) Operator
const age = 23;
// age >= 18 ? console.log('I like to drink wine 🍷') : console.log('I like to drink water 💧');

const drink = age >= 18 ? 'wine 🍷' : 'water 💧';
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = 'wine 🍷';
} else {
  drink2 = 'water 💧';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);
*/

////////////////////////////////////
// Coding Challenge #4

/*
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2
HINT: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

GOOD LUCK 😀
*/

/*
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/


const persona = {
  edad: 0, // Valor por defecto, puede asignarse posteriormente

  esMayorDeEdad: function() {
    if (this.edad > 18) {
      // console.log(this.edad);
      return true;
    } else {
      return false;
    }
  },

  // Versión mejorada de la función anterior
  esMayorDeEdadMejorado: function() {
    return this.edad >= 18;
  }

};

// Assigning the age
persona.edad = 30;

// Checking if the person is of legal age
// console.log(persona.esMayorDeEdad()); // Output: true
// console.log(persona.esMayorDeEdadMejorado()); // Output: true
