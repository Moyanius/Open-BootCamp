// Cómo trabajar con listas(arrays, arreglos, vectores...)

let var1 = 45;
let array =[1, 'hola', false, { id : 5}, null, undefined,  var1];

console.log(array);

// Acceder a los valores de los arrays a traves de su posicion

console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[2])


// Metodos para introducir nuevos valores en nuestros arrays
// .push() .unshift() => Mutan el valor de nuestro array
//Valores al final -> Push
array.push("final", 45, 100, false)
console.log(array)
// Valores al principio -> Unshift
array.unshift("inicio", 87, 99)
console.log(array)


// Metodos para eliminar valores en nuestros arrays
// .pop() .shift() => Mutan el valor del array
const array2 = [1, 3, "hola", false]
// Valores al final -> Pop
array2.pop()
console.log(array2)
// Valores al principio -> Shift
array2.shift()
console.log(array2)


//Metodos para eliminar, modificar o añadir valores en nuestro array
// .splice(x, y, z)
const array3 = [1, 2, 3, 4, 5, 6]
// Eliminar valores .splice(donde empieza, numerodevalores a eliminar)
array3.splice(2, 2)
console.log(array3)
// Añadir valores .splice(indice, 0, valores)
array3.splice(2, 0, "valor introducido", "valor introducido 2")
console.log(array3)
// Modificar valores .splice(indice, 1, valores)
array3.splice(2,1,3)
array3.splice(3,1,4)
console.log(array3)