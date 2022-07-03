// El alcance de las funciones

var nombre = 'Damaso';

function imprimir (nombre){
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimir(nombre)


// si una variable no esta definida dentro del cuerpo de una funcion, esa funcion es de alcance global