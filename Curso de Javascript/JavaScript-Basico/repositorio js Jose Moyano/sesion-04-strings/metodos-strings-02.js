//Metodos de cadenas de texto parte 2
//Pasar todo a mayuscula o minusculas

let input = "escorpio"
let db = "escorpio"

// tolowerCase() - toUpperCase()
console.log(input.toLowerCase())
console.log(input.toLowerCase() === db.toLowerCase())


// Formas de concatenar dos cadenas
let str_1 = "Hola soy la primera cadena."
let str_2 = "Hola soy la segunda cadena."

console.log(str_1.concat(" ",str_2))

//Tdoso los espacios por el principio y por el final no nos interesa
let str_3 = "  Hola soy un string con espacios al final    "
console.log(str_3.length)
//trim
console.log(str_3.trim().length)  // Este es para el total de espacios
console.log(str_3.trimStart().length) // Este elimina los espacios del principio
console.log(str_3.trimEnd().length) // Este elimina los espacios del final

//obtener el caracter que hay en cierta posicion
let str_4 = "Hola soy el string numero 4"
console.log(str_4.charAt(5))
console.log(str_4[5])

// Obtener la posicion de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Jose y me husta el bar. Mi nomnre es Jose y mi apellido es Moyano."
console.log(str_5.indexOf("Jose"))
console.log(str_5.charAt(9))
//Este es para la ultima instancia
console.log(str_5.lastIndexOf("Jose"))