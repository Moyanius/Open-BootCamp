// Trabajando con fechas

const { SlowBuffer } = require("buffer")

const fecha = new Date()
console.log(fecha)

const fecha2 = new Date(1987, 05, 20, 23, 55, 59,)
console.log(fecha2)

const fecha3 = new Date(1010009000009) // Milisegundos
console.log(fecha3)

const fecha4 = new Date("october 13, 1979 12:15:15")
console.log(fecha4)

console.log(fecha > fecha2)

const fecha5 = new Date(1987, 05, 20, 23, 55, 59,)
console.log(fecha5)

console.log(fecha2 === fecha5) //ERROR No se pueden comparar fechas de esta manera

console.log(fecha2.getTime() === fecha5.getTime()) // Ok Esta es la forma de comparar la igualdad entre fechas

// Obtener el dia, el mes y el año de una fecha
// Obtener el dia .getDate()
console.log(fecha2.getDate())

// Obetner el mes .getMonth() 0 es enero y el 11 Diciembre como en los arrays
console.log(fecha2.getMonth() +1) //Se le suma 1 porque empieza en cero

// Obenter el año .getFullyear()
console.log(fecha2.getFullYear())

// Para que la fecha sea mas elegible usar la linea 41 y elegir idioma
console.log(fecha2)

// .toLocaleDateString
// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
console.log(fecha2.toLocaleDateString("en-GB"))