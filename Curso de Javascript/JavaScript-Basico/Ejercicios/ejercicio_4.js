// Crea un archivo JS que contenga las siguientes líneas

const { match } = require("assert");

// Una variable que contenga tu altura en centímetros (entero)
 let altura = 187;
 console.log(altura);

// Una variable que contenga tu altura en metros (número de coma flotante)
 let altura_float = 1.87;
 console.log(altura_float);

// Una variable que contenga tu peso en kilogramos (número de coma flotante)
 let peso = 92.58
 console.log(peso);

// Una variable que contenga tu altura en metros redondeada hacia arriba
console.log(Math.ceil(altura_float));

// Una variable que contenga tu peso en kilogramos redondeado hacia abajo
 console.log(Math.floor(peso));

// Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript

console.log((Number.MAX_VALUE +1) === Number.MAX_VALUE);