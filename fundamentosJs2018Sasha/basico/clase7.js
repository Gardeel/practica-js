// Desestructurar objetos 9
var cris = {
    nombre: 'Cristian',
    apellido: 'Calderon',
    edad: 29,
}

var adri = {
    nombre: 'Adriana',
    apellido: 'Aruquipa',
    edad: 29,
}

function imprimir (persona){
    // var nombre = persona.nombre
    var {nombre } = persona
    console.log(nombre.toUpperCase())
}

imprimir(adri)
imprimir(cris)

// desafio
function imprimirnomyedad (persona){
    var {nombre} = persona;
    var {apellido} = persona;
    var {edad} = persona;
    console.log(`Hola, me llamo ${nombre} ${apellido} y tengo ${edad} years`)
}

imprimirnomyedad(cris)
imprimirnomyedad(adri)