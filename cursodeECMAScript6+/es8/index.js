// como convertir un objeto en una matriz

// const data = {
//     fronted : 'Cristian',
//     backend : 'Damaso',
//     design: 'Alejandra'
// }

const entries = Object.entries(data)
console.log(entries)
// tambien se puede hacer un length para saber cuantos elementos tiene un objeto.
console.log(entries.length)

const data = {
         fronted : 'Cristian',
         backend : 'Damaso',
         design: 'Alejandra'   
     }

const value = Object.values(data)
console.log(value)
console.log(value.length)


// Padding 
const cadena = 'Hola';
console.log(cadena.padStart(7, 'Oh '))
console.log(cadena.padEnd(14,' gentecita'))
console.log('Milanesa'.padEnd(18, ' con Papas'))