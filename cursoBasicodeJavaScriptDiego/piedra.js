var piedra = "Piedra";
var tijera = "Tijera";
var papel = "Papel";



var juego = function (cristian,pc){
    if(cristian != pc){
        if(cristian === piedra && pc === papel){
            console.log(`piedra vs papel = ${papel} gana`)
        }
        else if(cristian === papel && pc === piedra){
            console.log(`piedra vs papel = ${papel} gana`)
        }
        else if(cristian === piedra && pc === tijera ){
            console.log(`piedra vs tijera = ${piedra} gana`)
        }
        else if(cristian === tijera && pc === piedra ){
            console.log(`piedra vs tijera = ${piedra} gana`)
        }
        else if (cristian === tijera && pc === papel){ 
            console.log(`tijera vs papel = ${tijera} gana`)
        }
        else if (cristian === papel && pc === tijera){ 
            console.log(`tijera vs papel = ${tijera} gana`)
        }    
    }
    else{
        console.log(`Es un empate bro yeah`);
    }
}

juego(piedra,piedra)