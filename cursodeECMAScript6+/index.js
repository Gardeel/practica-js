function newFunction (name, age, country){
    var name = name || 'Oscar';
    var age = age || 32;
    var country = country || 'MX';
    console.log(name, age, country)
}

// ESMAScript 6

function newFunction2 (name = 'Cristian', age = 29, country = 'ARG'){
    console.log(name, age, country)
}

newFunction2()
newFunction2('Raul', 32, 'ES')


// Antiguo Concatenacion
let hello = 'Hello';
let world = 'World';
// let epicPhrase = hello + ' ' + world
// console.log (epicPhrase)

// Nuevas concatenacion comillas francesas ` propuesta ECMACScritp6
let epicPhrase2 = `${hello} ${world}!!`
console.log (epicPhrase2)


// LET y CONST, multilinea, Spread Operator y Desestructuracion 3

let lorem = "tenemos un frase super larga y queremos separarlas por un enter \n" + "Otra frase epica que necesitamos"

// ES6
let lorem2 = `otra frase epica que necesitamos 
ahora es otra frase epica simple
`;

console.log (lorem)
console.log (lorem2)

//  
let persona ={
    'name': 'Cristian',
    'age': 29,
    'country': 'ARG'
}

console.log(persona.name, persona.age)

// desestructurar un objeto, esta notacion podemos elegir cuales keys necesitamos del mismo objeto y ya puedo proceder a desplegarlas en el console sin necesidad de utilizar un objeto.key

let { name, age } = persona;
console.log(name, age)



// operador de propagacion ...

let team1 = ['Cristian', 'Freddy', 'Juan']
let team2 = ['Valeria', 'Yesica', 'Camila']

let education = ['David', ...team1, ...team2]

console.log(education);


{
    var globalVar= "Gloval Var";
}

{
    let globalLet = 'Global Let';
    console.log(globalLet)
}

console.log(globalVar);



// No se puede cambiar el valor de una constate

const a = 'a'
a = 'b';
console.log(a)


// Arrow Functions, Promesas y Parametros en Objetos

let namezz = 'Cristian';
let agezz = 29;

// es5
obj = {namezz: namezz, agezz: agezz }

// es6
obj2 ={ namezz, agezz};
console.log(obj2)


// Arrow Function sintaxis mas reducida

const names = [
    {name: 'Cristian', age: 32},
    {name: 'Yesica', age: 27}
]

let listOfNames = names.map (function (item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name))


// Promesas
const helloPromise = ()=> {
    return new Promise ((resolve, reject)=>{
        if(false){
            resolve('Hey soy una promesa verdadera');
        }else{
            reject('Ups la promesa no se cumplio')
        }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(()=> console.log('Holaa'))
    .catch(error => console.log(error))