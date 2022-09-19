class Persona {
	//Private --> # 
	//Private --> solo se puede acceder desde dentro de la clase
	#nombre
	#edad


	//Protected --> _
	//Protected --> _ solo se puede acceder desde dentro de la clase y desde clase descendientes
	_isDeveloper = true
	constructor(nom, edad) {
		this.#nombre = nom
		this.#edad = edad

	}

	saludo() { //todas las funciones y clases se llaman metodos en javascript y las variables de dentro atributos
		console.log(`Hola, mi nombre es ${this.#nombre}, tengo ${this.#edad} años`)
	}

	obtenNombre(){  // Funcion getter --> Nos permite acceder (de forma controlada) a algun atributo protegido
		return this.#nombre
	}
	#obtenEdad() {
		return this.obtenEdad
	}

	getEdad() {
		return this.#edad
	}
}

const persona = new Persona("gorka", 70)
//console.log(persona)
//console.log(persona.nombre)
//persona.saludo()

//console.log(persona.obtenNombre())
//console.log(persona.#obtenEdad()) // No se puede acceder desde fuera porque esrta protegido
//console.log(persona._isDeveloper)


// Getter --> metodos que nos permiten obtener atributos/métodos privados o protegidos
const edad = persona.getEdad()
console.log(edad)
// Setter --> metodo que nos permiten cambiar el valor de alguno de los atibutos privados o protegidos