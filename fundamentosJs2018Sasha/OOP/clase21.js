// COMO FUNCIONAN LAS CLASES JAVASCRIPT 23
// Las clases o prototipos cuya sintaxis tiene dos componentes:
//  Expresiones
//  Declaraciones
// En esta clase veremos el uso de this. Dentro de una funcion, el valor de this depende de como es llamada esta.

function Persona(nombre, apellido){
    // ambas son dos variables distintas
    this.nombre = nombre
    this.apellido = apellido
    // implicitamente llama a return 

}

Persona.prototype.saludar = function (){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

var cris = new Persona('Cristian', 'Calderon')
var erica = new Persona('Erica', 'Luna')
var arturo = new Persona ('Arturo', 'Martinez')

// cris.saludar() //Hola me llamo Cristian Calderon