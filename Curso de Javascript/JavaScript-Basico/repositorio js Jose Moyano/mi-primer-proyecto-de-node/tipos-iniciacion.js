//Tipos primitivos

//number
4

//string
"Hola mundo";
'Hola mundo';
`Hola mundo`;

// booleanos
true;
false;

//nulo y undefined
null;
undefined;

//null, undefined, false, 0 ---> Todas son falsy
//no cumple, especio asignado en memoria vacio
if (null) {
    console.log("cumple")
} else {
    console.log("no cumple")
}
//no cumple, espacio no asignado en memoria
if (undefined) {
    console.log("cumple")
} else {
    console.log("no cumple")
}
//no cumple, es un valor bolesno
if (false) {
    console.log("cumple")
} else {
    console.log("no cumple")
}
//no cumple, es un valor numerico
if (0) {
    console.log("cumple")
} else {
    console.log("no cumple")
}
//cumple
if (true) {
    console.log("cumple")
} else {
    console.log("no cumple")
}