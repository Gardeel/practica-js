// Estructura de una funcion RECURSIVIDAD
// function recursiva(){
//          PUEDE SER OTRA CONDICIONAL
//     if(/* validacion */){
//         // llamados recursivos
//     }else{
//         // llamados normales, sin recursividad
//     }
// }


// funcion normal!! 
const numeritos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let numerito = 0;
// for (let index = 0; index < numeritos.length; index++){
//     numerito = numeritos[i];
//     console.log({index, numerito})
// } 

// funcion RECURSIVA

function recursiva(numbersArrays){
    if(numbersArrays.length != 0){
        const firstNum = numbersArrays[0];
        console.log(firstNum)
        numbersArrays.shift();
        recursiva(numbersArrays);
    }
}



