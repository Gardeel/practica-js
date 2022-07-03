var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    year: 2020,
    detalleDelAuto: function(){
        console.log(`auto ${this.modelo} ${this.year}`);
    }
}

console.log(miAuto.year)
console.log(miAuto)

// Llamamos al objeto luego a funcion como funcion
miAuto.detalleDelAuto()