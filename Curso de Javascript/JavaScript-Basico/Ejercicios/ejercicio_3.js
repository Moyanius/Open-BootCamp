//Crea un archivo JS que contenga las siguientes líneas

//Una cadena de texto con tu Nombre
let str_nombre = "     Jose"

//Otra cadena de texto con tu Apellido
let str_apellido = "Moyano"

//Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias
let estudiante = str_nombre.concat(" ",str_apellido)
console.log(estudiante)

//Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas
let estudianteMayus = estudiante.toUpperCase()
console.log(estudianteMayus)

//Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas
let estudianteMinus = estudiante.toLowerCase()
console.log(estudianteMinus)

//Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios
console.log(estudiante.length)

//Una variable que contenga la primera letra del Nombre
console.log(str_nombre[0])

//Otra variable que contenga la última letra del Apellido
console.log(str_apellido[5])

//Una cadena de texto que elimine los espacios de la variable "estudiante"
console.log(estudiante.length)
console.log(estudiante.trim().length)

//Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"
console.log(estudiante.includes(str_nombre))