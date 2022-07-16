// Objetos literales y prototipos en JavaScript

// Objeto Literal
const cristian = {
    name: "Cris",
    age: 29,
    cursosAprobados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",

    ],

    // creamos un metodo dentro de un objeto literal
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)
    }
};


// OBJETOS 
function Student (name, age, cursosAprobados){
    this.name = name;
    this.age = age; 
    this.cursosAprobados = cursosAprobados;
    
    // crear una funcion interna
    // this.aprobarCurso = function (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso);
    // }    
}

// llamar por fuera una funcion 

Student.prototype.aprobarCurso = function (nuevoCurso){
        this.cursosAprobados.push(nuevoCurso);
}


const juanito = new Student (
    "Juan Perez",
    25,
    [
        "Curso a la Introduccion a los VideoJuegos",
        "Curso de creacion de Personajes",
    ],
);