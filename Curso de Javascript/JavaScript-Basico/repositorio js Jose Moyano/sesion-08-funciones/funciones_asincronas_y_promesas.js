// Funciones asincronas, sin aquellas uqe  por alguna razon pueden tardar, como por ejmplo una llamada a base de datos

function miAsincrona () {
	// Hace una llamada a auna base de dato externa
	// Puedo darnos algun error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // Si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }
})

miPromesa
    .then(() => console.log("Se ha ejecutado de forma correcta"))
    .catch(() => console.log("ERROR"))
    .finally(() => console.log("Yo me ejecuto siempre"))



	