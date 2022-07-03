// Reducir un array a un valor 22 reduce ()
// reduce () reduce un array a un valor unico


var cris = {
    nombre: 'Cristian',
    apellido: 'Calderon',
    altura: 1.84,
    cantidadDeLibros: 111
}

var martin = {
    nombre:'Martin',
    apellido:'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132
}

var alan = {
    nombre:'Alan',
    apellido:'rodriguez',
    altura: 1.86,
    cantidadDeLibros: 78
}

var dario = {
    nombre:'Dario',
    apellido:'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90
}

var vicky = {
    nombre:'Vicky',
    apellido:'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91
}

var paula = {
    nombre:'Paula',
    apellido:'Barros',
    altura: 1.76,
    cantidadDeLibros: 182
}


var personas = [cris, martin, alan, dario, vicky, paula]

// var aculador = 0

// for (var i = 0 ; i < personas.length; i++){
//     aculador = aculador + personas[i].cantidadDeLibros
// }

const reducer = (acum, persona) => acum + persona.cantidadDeLibros;

var totalDeLibros = personas.reduce(reducer, 0)


console.log(`En total todos tienen ${totalDeLibros} libros`)