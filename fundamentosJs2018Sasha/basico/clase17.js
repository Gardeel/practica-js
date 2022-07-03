// Introduccion a arrays

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
    apellido:'Perez',
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

var personas = [cris, martin, alan, dario, vicky, paula]

for(var i = 0; i < personas.length; i++){
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura}mts`)
}