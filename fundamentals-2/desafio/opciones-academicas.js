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
// Función que devuelve opciones académicas
function opcionesAcademicas(añoNacimiento, tieneEso) {
  // Calculamos la edad, en funcion de si tiene eso o no, devolvemos las alternativas disponibles

  // Por ejemplo,
  // Si tiene 16 años y tiene ESO, devolvemos Bachiller y FP
  // Si tiene 14 años y no tiene ESO, devolvemos ESO
  // Si tiene 10 años, devolvemos Primaria
  // Si tiene 5 años, devolvemos Infantil
}

// Primera iteración de la función que devuelve opciones académicas
// const año = prompt("Introduce tu año de nacimiento")
// const tieneEso = confirm("¿Tienes la ESO? (sí/no)")

// Si usamos un prompt, requiere una conversión a booleano, ya que prompt devuelve un string y
// las opciones pueden ser "si", "no" o cualquier otra cosa que no esté contemplada.
// const tieneEso = prompt("¿Tienes la ESO? (sí/no)")
// const esoBoolean = tieneEso === "si" || tieneEso === "sí" ? true : false // únicamente convertiremos si a true, el resto a false
// opcionesAcademicas(año, tieneEso)

function opcionesAcademicas2(añoNacimiento, tieneEso) {
  console.log(typeof añoNacimiento, typeof tieneEso)
  console.log(`Los datos introducidos son; añoNacimiento: ${añoNacimiento}, tieneEso: ${tieneEso}`)

  if (tieneEso) {
    console.log("Bachiller y FP")
  } else {
    console.log("ESO")
  }
}
// opcionesAcademicas2(año, tieneEso)
