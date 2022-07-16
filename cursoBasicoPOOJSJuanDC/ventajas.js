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

const cris = new Student({
    name: "Cristian",
    username: "Gardel",
    email: "cdcalderonrojass@gmail.com",
    twitter: "@gardel",

});