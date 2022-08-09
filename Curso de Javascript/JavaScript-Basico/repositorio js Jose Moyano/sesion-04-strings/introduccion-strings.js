// Sesion 4  - Strings (cadena de caracteres)


let str_dbl = "Hola soy un textocon comillas dobles";
let str_sng = "Hola soy un texto con comillas simples";

// da igual elegir comillas simples o dobles pero la misma en el mismo string
console.log(str_dbl);
console.log(str_sng);

let str_comillas = "El otro dijo me dijo literalmente \"ve a a sacar la basura \""
let str_comillas_simples = 'El otro me dijo literalemten "ve a sacar la basura'


// de la opciones siguientes la segunda es la mejor
console.log(str_comillas);
console.log(str_comillas_simples);

//COMILLAS INVERTIDAS (backticks)
let str_backticks = `Hola esto es un string con backticks`

console.log(str_backticks)

let nombre = "Pepe"
let saludo = `Hola, ${nombre} bienvenido`

console.log(saludo)

// Plantilla HTML, al usas comullas invertidas se puede escribir en diferentes lineas
let plantilla = `
<html>
    <h1> Pagina web de ${nombre} <\h1>
    <p> Esto es un parrafo <\p>
<\html>
`;

console.log(plantilla)


//Introduccion de variables en html
let libros = ["Empieza por el por qué", "El monje que vendio su ferrari", "El poder del ahora"]