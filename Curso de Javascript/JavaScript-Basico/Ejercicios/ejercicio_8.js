
// Crea un archivo JS que contenga las siguientes líneas

// Una función sin parámetros que devuelva siempre "true"
function ok(){
	console.log(true)
}

ok()

//Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado

const myPromesa = new Promise(() =>{
	setTimeout(function(){
		console.log("Hola soy una promesa")
	}, 5000)
})

// Una función generadora de índices pares automáticos
function pasandoPorLosPares() {
for (let i = 0; i <= 1000; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

// Ejecutando la función directamente:
pasandoPorLosPares()

