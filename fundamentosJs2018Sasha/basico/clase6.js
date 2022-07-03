// Objetos 

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

// Opcion 1
// function imprimir (persona){
//     var nombre = persona.nombre.toUpperCase()
//     console.log(nombre)
// }

// Opcion 2
// function imprimir (persona){
//     console.log(persona.nombre.toUpperCase())
// }

// Opcion 3 gozzzzuuuuuuuu
function imprimir ({nombre}){
    console.log(nombre.toUpperCase())
}


imprimir(adri)
imprimir(cris)
imprimir ({nombre:'Messi'})

