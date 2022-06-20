// Codigo del cuadrado

function perimetroCuadrado(lado){
  return lado * 4;  
} 


function areaCuadrado (lado){
    return  lado * lado ;
}

console.groupEnd();


// Codigo del triangulo

console.group("Triangulos")
// Dato curioso de la clase: cuando declaramos la funcion los datos dentro de los parentesis se llaman PARAMETROS, cuando llamamos a ejecutarla se llaman ARGUMENTOS.

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base
}

function areaTriangulo (base, altura){
    return (base * altura) / 2
}
console.groupEnd();



// Codigo del circulo
console.group("Circulo")

// Diametro
function diametroCirculo (radio){
    return radio * 2
}

// PI
const PI = Math.PI;
console.log(`PI es ${PI}`)


// Circunferencia
function perimetroCirculo (radio){
    const diametro = diametroCirculo (radio);
    return diametro * PI;
}

// Area
function areaCirculo (radio){
    return (radio * radio) * PI
}

console.groupEnd();



// Aqui interactuamos con el html

function calcularPerimetroCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const perimetro = perimetroCuadrado (valor);
    alert(perimetro);
}

function calcularAreaCuadrado (){
    const input = document.getElementById("InputCuadrado");
    const valor = input.value;

    const area = areaCuadrado (valor);
    alert(area);
}

function calcularperimetroTriangulo() {
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("triangulobase");
    
    const valor1 =input1.value;
    const valor2 =input2.value;
    const valor3 =input3.value;

    const perimetro = (Number (valor1) + Number (valor2) + Number(valor3));
    alert(perimetro);

}
