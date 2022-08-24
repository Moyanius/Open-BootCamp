// Funciones de tipo flecha - funciones anonimas

const array = [1, 5, 6, 2,12, 92]


const array2 = array.map((valor) => valor * 2)

console.log(array2)

const dobleDelValor = valor => valor * 2 //las funciones tipo flechas se deben inicializar antes de usarla al contrario de las funciones normales

console.log(doble(6)) // la estamos utilizando y declarando al final
console.log(dobleDelValor(6))

const array3 = array.map(dobleDelValor) // tira de la funcion flecha de la linea 10

console.log(array3)

function doble(valor) {
	return valor *2
}