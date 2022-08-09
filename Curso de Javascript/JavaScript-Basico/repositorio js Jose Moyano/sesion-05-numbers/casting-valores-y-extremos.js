// Operador .valueof( -> obtener valores numericos a partir de literales)
let a = 2;
let b = new Number(3);

console.log(a);
console.log(b);
console.log(a +b);
console.log(a.valueOf() + b.valueOf()); //Esto es lo que hace internamente en el paso anterior

console.log(b.valueOf());

// Nan(not a number) - Infinity
let n = Number("adios");
console.log(n);
console.log(isNaN(n));

let  numerador = 19;
let divisor = 0;
console.log(numerador / divisor);

let divisor_2 = null;
console.log(numerador / divisor_2);

// Como convertir los strings a valores numericos con Number, parseInt y ParseFloat
let numero = '5.899';
let num2 = 17;

console.log(typeof numero);
console.log(numero + num2); // error esto concatena dos seguidos)

console.log(Number(numero) + num2); //esto lo castea y convierte al string en numero

console.log(parseInt(numero)); //Esto convierte el float en entero
console.log(parseFloat(numero));

// Numeros hexadecimales (base 16)
let numHEx = '0x3a5b7';
console.log(parseInt(numHEx, 16));

//Obtener los valores maximo y minimo en Javascript
let min_precision = Number.EPSILON;
let min_valor_js = Number.MIN_VALUE;
let max_valor_js = Number.MAX_VALUE;

console.log(min_precision);
console.log(min_valor_js);
console.log(max_valor_js);

