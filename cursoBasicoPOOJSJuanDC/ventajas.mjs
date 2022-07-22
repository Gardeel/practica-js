// por fuera de la clase vamos a crear dos funciones
function videoPlay (id){
    const urlSecreta = "https://platzisecreta" + id ;
    console.log(`Se esta reproduciendo desde la url ${urlSecreta}`)
}

function videoStop (id){
    const urlSecreta = "https://platzisecreta" + id ;
    console.log(`Pausamos la url ${urlSecreta}`)
}

export class PlatziClass {

    constructor({
        name,
        videoID,
    }){
        this.name = name;
        this.videoID = videoID;
    }

    reproducir (){
        videoPlay(this.videoID)
    }

    pausar(){
        videoStop(this.videoID)
    }
}






// Clase de un curso
class Courses {
    constructor({
    name,
    classes =[],
    }){
        this._name = name;
        this.classes = classes;
    }

    // creamos un get 
    get name (){
        return this._name;
    }

    // Ejemplo para llamar a un setter: cursoProgBasica.name = "Curso Malito de Programacion Basica"
    set name (nuevoNombrecito){
        if(nuevoNombrecito === "Curso Malito de Programacion Basica"){
            console.error ("Web ... no");
        }else{
            this._name = nuevoNombrecito;
        }
    }
}


const cursoProgBasica = new Courses ({
    name: "Curso Gratis de Programacion Basica", 
});

const cursoDefinitivoHTML = new Courses ({
    name: "Curso Definitivo de HTML y CSS", 
});

const cursoPracticoHTML = new Courses ({
    name: "Curso Practico de HTML y CSS", 
});

// Clases de los cursos
class LearningPath {
    constructor({
        name,
        courses = []
    }){
        this.name = name;
        this.courses = courses;
    }
}


const escuelaWeb = new LearningPath ({
    name: "Escuela de Desarrollo Web",
    courses: [
        cursoProgBasica,
        cursoDefinitivoHTML,
        cursoPracticoHTML,
    ]
});

const escuelaData = new LearningPath ({
    name: "Escuela de Data Science",
    courses: [
        cursoProgBasica,
        "Curso DataBusiness",
        "Curso Dataviz",
    ]
});


const escuelaVgs = new LearningPath ({
    name: "Escuela de Videojuegos",
    courses: [
        cursoProgBasica,
        "Curso Unity",
        "Curso Unreal",
    ]
});








class Student {
    constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twitter: twitter,
            // Tambien se puede llamar solo con su nombre y no instanciarlo ya que JS lo reconoce solo.
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses;
        this.learningPaths = learningPaths;
    }
}

class FreeStudent extends Student {}



class BasicStudent extends Student {}



class ExpertStudent extends Student {}



const cris = new Student({
    name: "Cristian",
    username: "Gardel",
    email: "cdcalderonrojass@gmail.com",
    twitter: "@gardel",
    learningPaths: [
        escuelaWeb,
        escuelaVgs,
    ]
});

const miguel = new Student({
    name: "Miguelito",
    username: "miguelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "@miguelito_feliz",
    learningPaths: [
        escuelaWeb,
        escuelaData,
    ]
});