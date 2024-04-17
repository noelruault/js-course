# Fundamentos de Javascript 1

1. [Enlazar un archivo JavaScript](#enlazar-un-archivo-javascript)
2. [Variables](#variablesjs)
3. [Tipos de datos](#tiposdatosjs)
4. [Operadores](#operadoresjs)
5. [Operadores relacionales](#operadoresrelacionalesjs)
6. [Desafío 1](#desafio1js)
7. [Plantillas literales de cadena](#stringtemplateliteralsjs)
8. [Decisiones](#decisionesjs)
9. [Precedencia de operadores](#precedenciaoperadoresjs)
10. [Operadores lógicos](#operadoreslogicosjs)
11. [Valores falsy 1](#falsyvalues1js)
12. [Coerción de tipos](#typecoertionjs)
13. [Valores falsy 2](#falsyvalues2js)
14. [Ejercicio práctico](#ejercicio-práctico)
15. [Condicional ternario](#condicionalternariojs)

## Enlazar un archivo JavaScript

```javascript
// Enlazar un archivo JavaScript
<script src="index.js"></script>
```

## variables.js

```javascript
// Valores y variables
const PI = 3.14159265359; // Las variables globales se declaran usando mayúsculas
const trabajoAnterior = "programador";
const trabajoActual = "profesor";
let edad; // let puede inicializarse sin un valor inicial (será undefined)
console.log(edad)

const miPrimeraVariable = "Hola mundo";

// El estándar es camelCase, pero si hubese necesidad, podéis usar guiones bajos y el signo del dólar
const my_first_variable = "Hola mundo";
const $myPrimeraVariable = "Hola mundo";
const myPrimeraVariable$ = "Hola mundo";
```

## tiposDatos.js

```javascript
// Tipos de datos primitivos: Numero, Cadena, booleano, null, undefined...
const numero = 123;
const cadena = "Hola mundo";
const cadenaComillasSimples = 'Hola mundo';
const cadenaComillasSimplesPalabrasInglesas1 = "I'm a programmer";
const cadenaComillasSimplesPalabrasInglesas1 = "I'm a \"programmer\"";
const cadenaComillasSimplesPalabrasInglesas2 = 'I\'m a programmer';
const verdadero = true;
const falso = false;
let indefinido;
let indefinido2 = undefined;
let cadenaVacia = "";
let nulo = null;
```

## operadores.js

```javascript
// Operadores básicos: +, -, *, /, **
const x;
x = x + 10 // x += 10;
x = x - 5 // x -= 5;
x = x * 4 // x *= 4;
x = x / 4 // x /= 4;
x = x ** 4 // x **= 4;

// También podemos usar operadores de incremento/decremento
x++; // ++x;  | x = x + 1
x--; // --x;  | x = x - 1

x+2;
2-x;
```

## operadoresRelacionales.js

```javascript
// Operadores relacionales y de equidad: ==, ===
const diez = 10;
const diezCadena = "10";
console.log(diez == diezCadena); // true - Los valores son los mismos tras la conversión de tipo
console.log(diez === diezCadena); // false - Los valores son de tipos diferentes y no iguales


const verdaderoTrue = true;
const uno = 1;
console.log(verdaderoTrue == uno); // true - Los valores son los mismos tras la conversión de tipo
console.log(verdaderoTrue === uno); // false - Los valores son de tipos diferentes y no iguales
```

## desafio1.js

```javascript
// Desafío #1

// Calcula el índice de masa corporal de dos sujetos ficticios.
// El índice de masa corporal (IMC) es un método utilizado para estimar la cantidad de grasa
// corporal que tiene una persona

const masaOsa = 95;
const alturaOsa = 1.88;
const masaMartin = 85;
const alturaMartin = 1.76;

const IMCOsa = masaOsa / alturaOsa ** 2;
const IMCMartin = masaMartin / (alturaMartin * alturaMartin);

// Escribe por pantalla ambos BMI y refleja si hay uno mayor (o menor) que el otro.
console.log(IMCOsa, IMCMartin, IMCOsa > IMCMartin)
```

## stringTemplateLiterals.js

```javascript
const nombre = 'Noel';
const edad = 30;
const trabajo = 'desarrollador';

// Usando concatenación de mensajes
const mensajeConcatenado = 'Hola, mi nombre es ' + nombre + ', tengo ' + edad + ' años, y mi trabajo es ' + trabajo + '.';
console.log(mensajeConcatenado);

// Usando plantillas literales
const mensajePlantillaLiteral = `Hola, mi nombre es ${nombre}, tengo ${edad} años, y mi trabajo es ${trabajo}.`;
console.log(mensajePlantillaLiteral);

console.log(`Cadena
    múltiples
    líneas`);

console.log('String with \n\
multiple \n\
lines');
```

## decisiones.js

```javascript
/*
if (condición) { // siempre se ejecuta
  declaración
} else { // se ejecuta siempre que lo anterior no sea cierto
  declaración
}

if (condición) { // siempre se ejecuta
  declaración
} else if (condición) { // no se ejecuta si el primero es cierto
  declaración
} else { // se ejecuta siempre que los anteriores no sean ciertos
  declaración
}

if (condición) { // siempre se ejecuta
  declaración
}
if (condición) { // siempre se ejecuta
  declaración
}
*/

// Tomar decisiones: declaraciones if / else
const edad = 15;
if (edad >= 18) {
    console.log('¡Puedes conducir! 🚗');
} else {
    const edadRestante = 18 - edad;
    console.log(`Aún eres demasidado joven, espera otros ${edadRestante} años :)`);
}
```

## precedenciaOperadores.js

```javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence#table

```

## operadoresLogicos.js

```javascript
// &&, ||, ??

// A continuación, se detalla una porción de código simplificada para una supuesta aplicación
// cuyo propósito es averiguar si una licencia de conducción es válida o no lo es.

const teoricoAprobado = false;
const

 practicoAprobado = true;
const psicotecnicoAprobado = true;
const tieneLicenciaInternacional = true;

if (
  (teoricoAprobado && practicoAprobado && psicotecnicoAprobado)
    || tieneLicenciaInternacional
) {
  console.log("Licencia OK");
} else {
  console.log("Licencia NO OK");
}

// Prueba diferentes combinaciones de true/false e intenta dar sentido a los resultados obtenidos
```

## falsyValues1.js

```javascript
// Falsy values: null, undefined, false, NaN, 0, -0, 0n, "", '', ``
console.log("verdadero" || "falso");
console.log(1 || "falso");
console.log(true || "falso");

console.log("" || "falso");
console.log(0 || "falso");
console.log(false || "falso");
console.log(null || "falso");
console.log(undefined || "falso");
```

## typeCoertion.js

```javascript
// tipos? number, string, boolean, object, undefined, bigint, symbol.

// Coerción entre tipos
// https://developer.mozilla.org/es/docs/Glossary/Type_coercion
const tipoNumero = 12;
const tipoString = "cadena de texto";
const tipoBoolean = true; // false

const ejemploCadena = "12";
const numeroDesdeCadena = Number(ejemploCadena);

const ejemploNumero = 12;
const cadenaDesdeNumero = String(ejemploNumero);
```

## falsyValues2.js

```javascript
// Falsy values
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

console.log("null", Boolean(null))
console.log("undefined", Boolean(undefined))
console.log("false", Boolean(false))
console.log("NaN", Boolean(NaN))
console.log("0", Boolean(0))
console.log("-0", Boolean(-0))
console.log("0n", Boolean(0n))
console.log("\"\"", Boolean(""))
console.log("''", Boolean(''))
```

## Ejercicio práctico

```javascript
////////////////////////////////////
// SOLUCIÓN DEL EJERCICIO
//

// Supuesto carrito de compra
const camiseta = 20;
const zapatillas = 10;
const gafas = 100;

/*
// Pruebas para familiarizarse con la impresión de difernetes tipos en la consola
console.log(camiseta+camiseta)
console.log("camiseta"+camiseta)
console.log("La suma de los artículos es "+ camiseta + gafas + zapatillas ) // error de concatenación por unir cadena a numero
console.log("La suma de los artículos es "+ (camiseta + gafas + zapatillas) ) // agrupando los números, solucionamos lo anterior
console.log("El precio de la camiseta es " + camiseta + ", y el de las gafas es " + gafas) // ejemplo de concatenació
console.log(`La suma de los artículos es ${camiseta + gafas + zapatillas}`) // ¡¡¡recomendada!!!
*/

// const precioVenta = (camiseta + zapatillas + gafas) + ((camiseta + zapatillas + gafas) * 0.21) // Con IVA!
const precioVenta = camiseta + zapatillas + gafas
// console.log(`La compra que vas a realizar tiene el precio de ${precioVenta}`)
const dineroCliente = 0

// También se podría preguntar al cliente cuánto dinero tiene...
// const dineroCliente = prompt("¿Cuánto dinero tienes en la cuenta?")

const tarjetaRegaloDorada = true

console.log(`Dinero cliente: ${dineroCliente}, precio venta: ${precioVenta}`)

if (dineroCliente >= precioVenta) {
  console.log("Compra satisfactoria")
} else {
  console.log("Compra denegada")
}

// EXTRA
// Versión 1
if (tarjetaRegaloDorada) {
  console.log("Compra satisfactoria, canjeada por una tarjeta regalo")
  tarjetaRegaloDorada = false
} else if (dineroCliente >= precioVenta) {
  console.log("Compra satisfactoria")
} else {
  console.log("Compra denegada")
}

// Versión 2
if (tarjetaRegaloDorada || dineroCliente >= precioVenta) {
  console.log("Compra satisfactoria")
} else {
  console.log("Compra denegada")
}
```

## condicionalTernario.js

```javascript
// Versión 1: IF/ELSE
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

console.log(`Mi edad es ${miEdad} y ${variablesSiNo} soy mayor de edad: ${mayorDeEdad}`)

// Versión 2: El operador condicional (ternario)
//
// x > y ? si : sino
//
console.log(`Mi edad es ${miEdad} y ${miEdad >= 18 ? 'si' : 'no'} soy mayor de edad`) // BOOM 💥
```
