var listadeEstudiantes = ["Cristian", "Diego", "Raul", "Benito", "Gardel"];

function listarEst(x){
    console.log(`Hola ${x}`);   
}

// Primera forma de hacerlo
for (var i = 0; i < listadeEstudiantes.length; i++){
    listarEst(listadeEstudiantes[i]);
}

// segunda forma de hacerlo
// for (var x of listadeEstudiantes){
//     listarEst(x);
// }