// Listas, array o arreglo
const lista = [1, "hola", true, undefined, null];
const lista2 = new Array(2, "hola", true, undefined, null);
const lista3 = new Array(3);
lista3[0] = "soy el primer elemento, index 0";
const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista3[1]);
console.log(lista4);


// Objetos
const movil = {
    altura: 10,
    anchura: 5,
    marca: "Xiaomi",
    iswhite: false,
    contactos: ["Gorka", "Martin", "Raul"],
    tarjeta: {
        marca: "Sandisk",
        almacenamiento: 32
    },
    "altura-tarjeta": 4
}
movil.anyo = 2020
movil.marca = "Samsung";

console.log(movil.marca);

// Fechas, librerias de apoyo Moment.js
const ahora = new Date();
console.log(ahora);

const fecha_milis = new Date(10); //Utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020");
console.log(fecha_cadena);

const fecha_valores = new Date (2022, 0 , 10);
console.log(fecha_valores);

const day = ahora.getDate();
const month = ahora.getMonth() +1 ;
const year = ahora.getFullYear()

console.log(day, month, year);