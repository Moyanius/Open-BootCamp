
class Estudiante {
	constructor(alumno, asignaturas) {
	this.alumno = alumno
	this.asignaturas = ["Javascrritp", "HTML", "Css"]
	}

	getObten(){
		return this.alumno
		return this.asignaturas
	}

	//getDato() {
	//	return obtenDato
	//}
}

const alumno1 =  new Estudiante("Jose")

console.log(alumno1)
