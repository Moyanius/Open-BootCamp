// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
let i = 1;

for (let i = 1; i <= 10; i++) {
    console.log(i)
}

//factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
let j = 1;
let max = 10;
while (j <= max) {
    console.log(j);
    j++;
}


//factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break
let k = 1;
let maxi = 20;
while (k <= maxi) {
    console.log(k);
    if (k === 10) {
        break
    }
    k++;
}