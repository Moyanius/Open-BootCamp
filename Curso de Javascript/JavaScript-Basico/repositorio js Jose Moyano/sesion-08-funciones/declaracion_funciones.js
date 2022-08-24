// Que son las funciones, como se declaran y como se utilizan

const nom = "Jose"
// saludar("Jose")
saludar (nom)
function saludar(nombre) {
	console.log(`Hola ${nombre}`)
}

// No cambia el nombre auqnue renombremos porque es un dato primitivo
let nombre2 = "Juan"
console.log(nombre2)

despedir(nombre2)

function despedir(nombre) {
	nombre = "Dieguin"
	console.log(`Adios ${nombre}`)
}
console.log(nombre2)

// Cuidado con esta forma porque es una fuente interminable de errores

let persona = {nombre: "Juan", apellido: "Gonzalez"}

saludarPersona(persona)
console.log(persona)
function saludarPersona(objeto) {
	objeto.apellido = "Villar"
	console.log(`Hola ${objeto.nombre} ${objeto.apellido}`)
}

console.log(persona)

// parametros por defecto
function imprimeNumero(numero = 7) {
	console.log(numero)
}
imprimeNumero()

/// 
function imprimir(...parametros) {
	console.log(parametros)
}

imprimir(1, 3, 2, "hola", {id:9, nombre:"Pepe"})

/////

function suma(...nums) {
    return nums.reduce((a, b) => a + b)
}

const s = suma(1, 2, 3, 4, 9, 15, 16)

console.log(s)

//////
let variable = "hola"

function multiplicar(a = 0, b = 0) {
    console.log(variable)
    let variable_interna = "adiós"
    console.log(variable_interna)
    return a * b
}


console.log(multiplicar(4, 9))