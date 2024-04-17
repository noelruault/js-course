# Fundamentos de Javascript 1

1. [](#)
2. [](#)
... [](#)

## Arrays

```javascript

```

## Funciones

Declaración de función

```javascript
const añoActual = 2024;
const añoMayoresDeEdad = añoActual - 18

function mayoriaEdad(añoNacimiento) {
    return (añoActual - añoNacimiento) >= 18;
}
```

Expresión de función (es un valor, dentro de una variable)
NOTA: No puede accederse a un valor de una variable antes de que sea declarada

```javascript
// mayoriaEdad(2007) // no funcionará
const mayoriaEdad = mayoriaEdad(añoNacimiento) {
    return (2024 - añoNacimiento) >= 18;
}
```

Arrow functions

```javascript
const mayoriaEdad = añoNacimiento => (2024 - añoNacimiento) >= 18

mayoriaEdad(2007)
```
