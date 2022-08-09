// .sort()
const array = [2, 4, 5, 9, 8, 3 , 1 , 7, 6] 
console.log(array)

array.sort((a,b) => a - b)
console.log(array)

array.sort((a, b) => b -a)
console.log(array)

// Interesante en arrays de objetos
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

// listaObjetos.sort((a, b) => {
//     if (a.edad < b.edad) {
//         return -1
//     } else if (a.edad > b.edad) {
//         return +1
//     } else {
//         return 0
//     }
// })
listaObjetos.sort((a, b) => a.edad - b.edad)

console.log(listaObjetos)
