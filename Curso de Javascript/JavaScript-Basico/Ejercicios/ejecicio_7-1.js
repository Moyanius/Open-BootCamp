//Crea un archivo llamado objetos.js que contenga las siguientes líneas
// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const obj = {
	id: 1,
	apellido: "Moyano",
	nombre: "Jose",
	edad: 38,
	altura: 187,
	isdeveloper: true
}
console.log(obj)

// Una variable que obtenga tu edad a partir del objeto anterior
const edad = obj.edad
console.log(edad)

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
const amigos1 ={
	id: 2,
	apellido: "Lopez",
	nombre: "Antonio",
	edad: 45,
	altura: 190,
	isdeveloper: false
}

const amigos2 ={
	id: 3,
	apellido: "Garcia",
	nombre: "Ivan",
	edad: 51,
	altura: 178,
	isdeveloper: true
}

const amigos = {obj, amigos1, amigos2}
console.log(amigos)
// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

amigos.sort((a, b) => a.edad - b.edad)
console.log(amigos)