// Variables : String

var nombre ='Cristian' , apellido = 'Calderon';

var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

var primeraLetraDelNombre = nombre.charAt(0);
var cantidadDeLetrasNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido}`;

// Substring sirve para acceder a una letra en particular
var sstring = nombre.substring(1,2);

// mostrar la ultima letra
var ultimaletra = nombre.substring(nombre.length-1, nombre.length)
