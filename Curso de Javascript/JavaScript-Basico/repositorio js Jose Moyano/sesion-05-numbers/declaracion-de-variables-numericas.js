// Sesion 5 - Numbers

const { match } = require("assert");

// Decalaracion de variables numericas (enteros y con decimales)
let a = 5;
console.log(a);

let b = 0.1;
console.log(b);

// Precisión (no da exacto por la memoria donde esta almacenada)
let c = 0.2;
console.log(b+c);
// pequeño truco para obtener valores "reales"
console.log(Math.round((0.1 + 0.2) * 100)/100)
