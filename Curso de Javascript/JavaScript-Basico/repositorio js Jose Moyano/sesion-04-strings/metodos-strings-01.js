
// Metodos mas utilizados con cadenas de caracteres
// Como obtener la longitud de un string

let str = "hola soy una cadena"
console.log(str.length)

// Obetner partes de cadenas de caracteres
//slice() substring() substr()

let slice_str = str.slice(1, 10)
console.log(slice_str)

let substring_str = str.substring(1, 10)
console.log(substring_str)

// Esta ultima ya no se esta usando
let substr_str = str.substr(1, 10)
console.log(substr_str)

// Remplezar parte del contenido de una cadena de texto
let cadena = "Hola mi nombre es Jose"
console.log(cadena)

// Al utilizar string solo reempleza la primera instancia
console.log(cadena.replace('Jose', 'Pepe'))

let texto_largo = "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles."
// Al utilizar string solo reempleza la primera instancia
console.log(texto_largo.replace("los", "cinco"))

// Al utilizar la expresion regualr /g (global), reemplazatodas las instancias
console.log(texto_largo.replace(/los/g, 'cinco'))


