// Ejercicio
// Variables
let autos = []; 
let cantidadAutos = 0;
let cantRegistrados = 0;

// funcion
function auto (marca, modelo, year, color){
    this.marca = marca;
    this.modelo = modelo;
    this.year = year;
    this.color =color;
}

// Solicitamos al usuario cuantos autos va a registrar
cantidadAutos = prompt(`Cuantos autos desea registrar?`);

/*
    Ejecutamos este ciclo mientra la cantidad de autos registrados sea menor
    a la cantidad de autos que el usuario desea registrar.
*/

while(cantRegistrados < cantidadAutos){
    // Defino vairales con spoce local
    let marca = prompt(`Marca: `);
    let modelo = prompt(`Modelo: `);
    let year = prompt (`Year: `);
    let color = prompt (`Color: `);

    // Pasamos las variables de spoce local a la funcion constructura
    var autoNuevo = new auto (marca, modelo, year, color);

    // agregamos el auto a mi arreglo de autos
    autos.unshift(autoNuevo);

    // incremento la cantidad de autos registrados en 1 
    cantRegistrados++;
}

// Retorono por consola el arreglo con todos los autos registrados por el usuario

console.log(autos);