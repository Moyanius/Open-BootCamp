// Ejercicio 7
// Crea un archivo llamado conjuntos.js que contenga las siguientes líneas

//- Un nuevo Set con los nombres de tu familia
const miFamily = ["Jose", "Maria", "Josesito"]
const miSet= new Set(miFamily)
console.log(miFamily)
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
miSet.add("Jose")
console.log(miSet)
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
miSet.add("Javascript")
console.log(miSet)