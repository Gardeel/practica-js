
var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

var resultado = function (usuario, pc){
    switch(true){
        case usuario === pc:
            console.log(`Empate`)
            break;
        case usuario === "piedra" && pc === "tijera":
            console.log(`piedra gana a tijera`)
            break;
        case usuario === "papel" && pc === "piedra":
            console.log(`papel gana a piedra`)
            break;
        case usuario === "tijera" && pc === "papel":
            console.log(`tijera gana a papel`)
            break;
            default:
                console.log(`Perdiste`)
        }
    }
    

resultado(papel,tijera)

