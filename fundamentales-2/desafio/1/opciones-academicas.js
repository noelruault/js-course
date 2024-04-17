'use strict';

// ------------------------------------------------------------------------------
// 1. Rango : Entre 0 y 6 años => Infantil
// 2. Rango : Entre 6 y 12 años => Primaria
// 3. Rango : Entre 12 y 18 años
// Si la persona esta en el rango 3, ofertar
// - ESO para mayores de 12 años => Secundaria
// - Bachiller para mayores de 16 años con la ESO
// - FP para mayores de 16 años con la ESO
// ------------------------------------------------------------------------------


  // Por ejemplo,
  // Si tiene 16 años y tiene ESO, devolvemos Bachiller y FP
  // Si tiene 14 años y no tiene ESO, devolvemos ESO
  // Si tiene 10 años, devolvemos Primaria
  // Si tiene 5 años, devolvemos Infantil

// Primera iteración de la función que devuelve opciones académicas
// const año = prompt("Introduce tu año de nacimiento")
// const tieneEso = confirm("¿Tienes la ESO? (sí/no)")

// Si usamos un prompt, requiere una conversión a booleano, ya que prompt devuelve un string y
// las opciones pueden ser "si", "no" o cualquier otra cosa que no esté contemplada.
// const tieneEso = prompt("¿Tienes la ESO? (sí/no)")
// const esoBoolean = tieneEso === "si" || tieneEso === "sí" ? true : false // únicamente convertiremos si a true, el resto a false
// opcionesAcademicas(año, tieneEso)

// Función que devuelve opciones académicas
// Calculamos la edad, en funcion de si tiene eso o no, devolvemos las alternativas disponibles
function opcionesAcademicas(añoNacimiento, tieneEso) {
  console.log(`Los parámetros son; añoDeNacimiento:${añoNacimiento} y eso:${tieneEso}`)

  // Validadores para saber si lo que estamos ejecutando funciona
  if (typeof tieneEso !== 'boolean') { // Valida si tieneEso es un booleano
    return "Por favor, introduce un valor de ESO válido"
  }

  if (Number(añoNacimiento) === NaN) { // Valida si añoDeNacimiento es un número
    return "Por favor, introduce un año válido"
  }

  const edad = 2024 - añoNacimiento // esto funcionaría a pesar de ser de tipo string

  if (edad <= 3) {
    return "Infantil"
  }

  if (edad <= 6) {
    return "Primaria"
  }

  if (edad <= 12) {
    return "ESO"
  }

  if (edad >= 16) {
    if (tieneEso) { // se cumple si es true, no se cumple si es false. Equivalente a if (eso === true)
      return "Bachillerato o FP"
    } else {
      return "ESO"
    }
  }
}
// opcionesAcademicas2(año, tieneEso)


const usuarioAñoNaciento = prompt("¿En qué año naciste?");
const usuarioTieneEso = confirm("¿Tienes la ESO?");

// const esoBooleanPrompt = prompt("¿Tienes la ESO?");
// const esoBoolean = esoBooleanPrompt === "si" || esoBooleanPrompt === "sí" ? true : false;
// Se debe llamar a la función cuyo nombre es "añoDeNacimiento"
console.log(opcionesAcademicas(usuarioAñoNaciento, usuarioTieneEso));
