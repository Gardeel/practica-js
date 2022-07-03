var listadeEstudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];


function saludar (alumno){
    console.log(`Hola como haz estado? ${alumno}`);
}

while(listadeEstudiantes.length > 0){
    console.log(listadeEstudiantes);
    var alumno = listadeEstudiantes.shift();
    saludar(alumno);
}