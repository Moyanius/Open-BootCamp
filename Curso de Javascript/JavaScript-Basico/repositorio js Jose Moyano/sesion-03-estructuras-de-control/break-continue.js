// Casos muy especificos - break, continue
let lista = [1, 2, 3, 4, 5, 6, 7, 8]

for (let i = 0; i < lista.length; i++) {
    if (lista[i] === 3) {
        continue
    }
    let j =  50;
    const k = 100;
    var u = 120;
    console.log(lista[i]);
    console.log(j);
    console.log(k);
    console.log(u);

    if (lista[i] > 5) {
        break;
    }
}

// Cúal es el ambito de un bucle
console.log(u);
console.log(k);
console.log(i);