// Estructura repetitivas: while
var cris = {
    nombre: 'Cristian',
    apellido: 'Calderon',
    edad: 29,
    peso: 90,
}


console.log(`Al inicio del year ${cris.nombre} pesa ${cris.peso}kg`)

// Magic number
const INCREMENTO_PESO = 0.3;
const DIAS_DEL_YEAR = 365;


const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


const META = cris.peso - 3;
var dias = 0

// Cuando Cristian sea menor que meta se acaba y el dia suma 1 dia cada vez.
while (cris.peso > META) {
    if(comeMucho()){
        aumentarDePeso(cris)
    }
    if (realizaDeporte()){
        adelgazar(cris)
    }
    dias += 1
}

console.log(`Pasaron ${dias} dias hasta que ${cris.nombre} adelgazo 3kg`)