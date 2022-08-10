//Crea un archivo JS que contenga las siguientes líneas
// Una variable que contenga la lista de la compra (mínimo 5 elementos)
const listacompra = ["aceite", "pan", "chocolate", "cerveza", "patatas"]
console.log(listacompra)

// Modifica la lista de la compra y añádele "Aceite de Girasol"
listacompra.unshift("aceite de giraol")
console.log(listacompra)

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"
listacompra.shift("aceite de girasol")
console.log(listacompra)

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)
const listaPeliculas = [
    {pelicula: "La vida es bella", director : "Roberto Benigni", año : 1997},
    {pelicula: "Cadena perpetua", director : "Frank Darabont", año : 1994},
    {pelicula: "El padrino", director : "Francis Ford Coppola", año : 1972}
    
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 1990 (utilizando filter)
const peliculasPosteriores = listaPeliculas.filter(pel => pel.año > 1990)
console.log(peliculasPosteriores)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)
const directoresOriginales = listaPeliculas.map(nom => nom.director)
console.log(directoresOriginales)

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)
const peliculasOriginales = listaPeliculas.map(nom => nom.pelicula)
console.log(peliculasOriginales)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)
console.log(peliculasOriginales.concat(directoresOriginales))

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)
const listaDirectPeli = [...peliculasOriginales, ...directoresOriginales]
console.log(listaDirectPeli)