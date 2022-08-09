// Metodos de cadena de texto (parte 3)
// https://regexr.com -> para prbar las expresiones regulares

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."

console.log(texto_largo.match(/no/g))

// Esto busca una palabra en concreto si existe, true o false si no
console.log(texto_largo.includes("prefiere"))

//Saber si un texto emppieza con una palabra
console.log(texto_largo.startsWith("Tito"))

//Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("Tito"))
console.log(texto_largo.endsWith("árboles."))