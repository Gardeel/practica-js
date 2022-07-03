// Transformar un array 

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

// metodo MAP la funcion map a diferencia de filter () lo que va hacer es devolvernos un nuevo array en el cual va modificar cada uno de los elementos de la array original

var personas = [cris, martin, alan, dario, vicky, paula]

// vamos a crear un nuevo objeto con la altura modificada para no, modificar a array original.
// como vamos a devolver un OBJETO no podemos devolver el objeto directamente con {} porque de esa manera estaremos poniendo el cuerpo de la funcion, si queremos retornar este objeto, poner parentesis envolviendolo SI EL ARROY FUCTION EMPIEZA CON PARENTESIS TIENE QUE ESTAR SEGUIDO DE LLAVES Y VA RETORNAR EL OBJETO QUE TENEMOS ACA.
const pasarAlturaACms = persona => ({
        ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms)


console.log(personasCms)