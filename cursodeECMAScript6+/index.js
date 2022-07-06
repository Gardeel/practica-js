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

