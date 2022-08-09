// Iterar los valores de una lista
const array = ["hola", 2, 5, 90, false, undefined]

//Forma antigua (poco eficiente)
for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

// Forma ES6 (mas moderna y mas eficiente)
let suma = 0;
const arraynums = [3, 6, 2, 77, 2, 3, 93, 19]
arraynums.forEach(valor => {
    suma += valor;
    console.log(valor)
})
console.log(suma)

// Busqueda de un valor dentro de una lista .find()
// Quiero encontrar el elemento 90 de la primera lista
const variable = array.find(valor => {
    if (valor === 90) {
        return true
    }
})
console.log(variable)

const listaObjetos = [
    {nombre: "Leire", edad: 35},
    {nombre: "Jose", edad: 34},
    {nombre: "Miguel", edad: 28},
    {nombre: "Maria", edad: 3},
    {nombre: "Pilar", edad: 29}
]

//const objeto = listaObjetos.find(o => {
//    if(o.nombre === "Miguel") {
//        return true
//    }
//})

const objeto = listaObjetos.find(o => o.nombre === "Miguel")
console.log(objeto.edad)

const { edad } = listaObjetos.find(o => o.nombre === "Miguel")
console.log(edad)