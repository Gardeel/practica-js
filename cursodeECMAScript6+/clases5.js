// Clases, Modulos y Generadores 5

class calculator {
    constructor (){
        this.valueA = 0;
        this.valueB = 0;
    }
    sumar(valueA, valueB){
        this.valueA = valueA
        this.valueB = valueB
        return this.valueA + this.valueB
    }
}

const calc = new calculator();
console.log(calc.sumar(2,2));


// exportar
const hello = require('./module')
console.log(hello())


// Generadores!
function* helloWorld (){
    if (true){
        yield 'Helloo, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
