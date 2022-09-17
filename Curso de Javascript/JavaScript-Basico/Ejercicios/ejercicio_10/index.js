import {suma, multiplica} from './modulos/controller.js'
import chalk from 'chalk';


const suma1 = suma(1,2)
const suma2 = suma(4,5)

const resultado = multiplica(suma1, suma2)
console.log("Esto es la primera suma", suma1)
console.log("Esto es la segunda suma", suma2)
console.log(chalk.green("Esto es el resultado de la multiplicacion", resultado))
