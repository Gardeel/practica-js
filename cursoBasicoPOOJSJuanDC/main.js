// Objetos literales y prototipos en JavaScript

const cristian = {
    name: "Cris",
    age: 29,
    cursosAprovados: [
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",

    ],

    // creamos un metodo dentro de un objeto literal

    aprobarCurso(nuevoCurso){
        this.cursosAprovados.push(nuevoCurso)
    }
};


