// Bucle For

const { TRUE } = require("node-sass");


// for (inicializacion; condicion; actualizacion)
for(let i = 0; i < 10; i = i + 1){
    console.log(i)
}

let lista = [1, 4, 6, 2, 3, 7, 10, 12, 800];
for(let i = 0; i < lista.length; i++) {
    console.log(lista[i] * 2)
}

// Estrucutra for ...of
for (let valor of lista) {
    console.log(valor)
}

// Estructura forEach
lista.forEach(valor => {
    console.log(valor)
})

let persona = {
    nombre: "Jose",
    apellido: "Moyano",
    edad: 38,
    isDeveloper: true
}

for(let propiedad in persona) {
    console.log(propiedad);
    console.log(persona[propiedad])
}