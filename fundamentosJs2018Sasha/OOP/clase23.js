// La verdad oculta sobre las clases en JavaScript 26
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



function Desarrollador (nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

Desarrollador.prototype.saludar = function () {
    console.log (`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrolladora`)
}

var cris = new Persona('Cristian', 'Calderon', 1.84)
var erica = new Persona ('Erica', 'Luna', 1.65)
var arturo = new Persona ('Arturo', 'Martinez', 1.89)
