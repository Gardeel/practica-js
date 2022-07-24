const cristian = {
    name: "Cris",
    age: 29,
    approvedCourses: ["Curso 1"],
    addCourse(newCourse){
        console.log("This", this);
        console.log("This.approvedCourses", this.approvedCourses);

        this.approvedCourses.push(newCourse);
    }
}


// console.log(Object.keys(cristian));
// console.log(Object.getOwnPropertyNames(cristian));
// console.log(Object.entries(cristian));

// Object.defineProperty ESTA PROPIEDAD SE PUEDEN DEFINIR NUEVAS PROPIEDADES A NUESTRO OBJETO.

// Object.defineProperty(cristian, "Navigator", {
//     value: "Chrome",
//     enumerable: false,
//     writable: true,
//     configurable: true,
// })

// Object.defineProperty(cristian, "editor", {
//     value: "VSCode",
//     enumerable: true,
//     writable: false,
//     configurable: true,
// })

// Object.defineProperty(cristian, "terminal", {
//     value: "WSL",
//     enumerable: true,
//     writable: true,
//     configurable: false,
// })

// Object.defineProperty(cristian, "PruebaNasa", {
//     // el valor es Extraterrestre
//     value: "Extraterrestre",
//     // Se puede ver si se lista con una propiedad si no es invisible.
//     enumerable: false,
//     // Es editable o no, si quieras cambiarlo de valor por ejemplo tiene que ser true para poder cambiarlo.
//     writable: false,
//     // Esta propiedad nos permite ver si podemos eliminarlo o no.
//     configurable: false,
// })


// seal permite que configurable:false sea falso para que no puedan eliminarlo.
// Object.seal(cristian);

// freeze permite que configurable y writable sean falso para que no puedan editarlo ni eliminarlo.
Object.freeze(cristian);

console.log(Object.getOwnPropertyDescriptors(cristian));
