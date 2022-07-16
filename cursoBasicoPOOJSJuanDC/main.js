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


// Prototipos con la sintaxis de clases

class Student2 {
    // constructor (name, age, cursosAprobados){
    constructor ({
        name,
        age,
        // Podemos darle valores por defecto a nuestros parametros
        cursosAprobados = [],
        email,
    }){
        this.email = email,
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;
    }

    // Creamos una funcion dentro de una clase
    aprobarCurso(nuevoCurso2){
        this.cursosAprobados.push(nuevoCurso2);
    }
}

const Miguel = new Student2 ({
    email: "miguel@platzi.com",
    age: 29,
    name: "Miguel",
}
)