function fibonacci(num) {
	let lista = [1,1]
	for (let i = 2; i<num; i++){
		lista.push(lista[i-1]+lista[i-2]);
	}
	return lista
}
const fibo6 = fibonacci(6)

console.log(fibo6)