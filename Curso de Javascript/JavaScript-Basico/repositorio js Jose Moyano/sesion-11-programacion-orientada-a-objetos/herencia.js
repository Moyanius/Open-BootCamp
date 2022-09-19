// Inheritence - Herencia

class Persona {
	_nombre
	_edad
	constructor(nombre, edad) {
		this._nombre = nombre
		this._edad = edad
	}

	saludo(){
		console.log(`Hola, mi nombre es ${this._nombre} y tengo ${this._edad} años`)
	}
}

class Desarrolador extends Persona {
	constructor(nombre, edad, lenguaje) {
		super(nombre, edad)
		this.lenguaje = lenguaje
	}
	saludo(){ // Override --> sobreescribir
		super.saludo()
		console.log(`Y soy desarrolador de ${this.lenguaje}`)
	}
}

const nuevoDev = new Desarrolador("Jose", 38, "Javascript")

console.log(nuevoDev)
nuevoDev.saludo()


// Polifmorfismo => varias formas
