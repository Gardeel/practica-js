// Filtrar un array 20
var cris = {
    nombre: 'Cristian',
    apellido: 'Calderon',
    altura: 1.84,
}

var martin = {
    nombre:'Martin',
    apellido:'Gomez',
    altura: 1.85,
}

var alan = {
    nombre:'Alan',
    apellido:'rodriguez',
    altura: 1.86,
}

var dario = {
    nombre:'Dario',
    apellido:'Juarez',
    altura: 1.71,
}

var vicky = {
    nombre:'Vicky',
    apellido:'Zapata',
    altura: 1.56,
}

var paula = {
    nombre:'Paula',
    apellido:'Barros',
    altura: 1.76,
}

const ALTA = 1.8 

// const esAlta = persona => persona.altura > 1.8
const esAlta = ({altura}) => altura > ALTA
const esBaja = ({altura}) => altura < ALTA

var personas = [cris, martin, alan, dario, vicky, paula]

// filter("CONDICION") nos devuelve un nuevo array
var personasAltas = personas.filter(esAlta)
var personasBajas = personas.filter(esBaja)


// var personasAltas = personas.filter(function(persona){
//     return persona.altura > 1.8
// })

console.log(personasAltas)
console.log(personasBajas)
