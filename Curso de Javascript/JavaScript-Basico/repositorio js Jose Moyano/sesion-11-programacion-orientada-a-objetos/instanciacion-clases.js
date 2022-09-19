class Persona {
	constructor(nombre, edad, isDeveloper) {
		this.nombre = nombre
		this.edad = edad
		this.isDeveloper = isDeveloper
	}

	saludo() { //todas las funciones y clases se llaman metodos en javascript y las variables de dentro atributos
		console.log(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años`)
	}
}
//Con la palabra new js crea un objeto de esa clase
const nueva_persona = new Persona("pepe", 34, true)
console.log(nueva_persona)
nueva_persona.saludo()

let numero = 60 // inicializando una variable
console.log(typeof numero)

let persona_2 = new Persona("maria", 34, false) // instanciar
console.log(typeof persona_2)
console.log(persona_2 instanceof Persona)
//instanceof --> similar  a typeof pero para clase