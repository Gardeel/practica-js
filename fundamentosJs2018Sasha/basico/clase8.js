// Parametros como referencia o como valor 10
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
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimir(adri)
imprimir(cris)

// Crea un copia del objeto pasado y como parametro y sobreescribe la propiedad edad.
function birthday (persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
