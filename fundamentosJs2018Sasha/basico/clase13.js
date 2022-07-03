// Estructura repetitivas: for
var cris = {
    nombre: 'Cristian',
    apellido: 'Calderon',
    edad: 29,
    peso: 90,
}


console.log(`Al inicio del year ${cris.nombre} pesa ${cris.peso}kg`)

// Magic number
const INCREMENTO_PESO = 0.2;
const DIAS_DEL_YEAR = 365;


const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;

for (var i = 1; i <= 365; i++){
    var random = Math.random();
    // el numero random va desde 0 ~ 1

    if(random < 0.25){
        // aumentar de peso
        aumentarDePeso(cris)
    }
    else if(random < 0.5){
        // baja de peso
        adelgazar(cris)
    }
}

console.log(`Al final del year ${cris.nombre} pesa ${cris.peso.toFixed(1)}kg`)
