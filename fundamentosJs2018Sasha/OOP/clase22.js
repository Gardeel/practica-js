// El contexto de las funciones: quien es this (Windows) 25
function Persona (nombre, apellido, altura){
    this.nombre = nombre 
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
}

Persona.prototype.soyAlto = function (){
    return this.altura > 1.8
}

var cris = new Persona('Cristian', 'Calderon', 1.84)
var erica = new Persona ('Erica', 'Luna', 1.65)
var arturo = new Persona ('Arturo', 'Martinez', 1.89)
