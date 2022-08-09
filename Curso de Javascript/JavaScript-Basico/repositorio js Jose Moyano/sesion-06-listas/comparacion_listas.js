// Como podemos comparar listas
// .every()
const array = [4, 40, 21, 1, -84, 56, 05, 99]

const resultado = array.every(valor => valor > 0 )
console.log(resultado)

const resultado2 = array.every(valor => valor = 'number')
console.log(resultado2)

// Comparacion de listas
const ar1 = [1,2,3,4]
const ar2 = [1,2,3,4]

console.log(ar1 === ar2)

const compararArrays = (array_1, array_2) => {
    if (array_1.length !== array_2.length) return false
    const res = array_1.every((valor, i) => valor === array_2[i])
    return res
}

console.log(compararArrays(ar1, ar2))

const ar3 = [1, 2, 3, 9]

console.log(compararArrays(ar1, ar3))