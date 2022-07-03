// Funciones que retornan valores

let cris = {
    nombre: "Cristian",
    apellido: "Calderon",
    edad: 29,
    ingeniero: true,
    cocinero: false,
    cantante: false,
    dj: false,
    guitarrista: false,
    drone: true,
  };


  var adri = {
      nombre: 'Adriana',
      apellido: 'Aruquipa',
      edad: 17, 
  };

// consejo cuando se declara una constante tiene que ser en mayusculas
const MAYORIA_DE_EDAD = 18; 


function esMayor (persona){
    return persona.edad >= MAYORIA_DE_EDAD;
}



  function imprimiredad (persona){
     
    if(esMayor(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
  }
  
  
  imprimiredad (adri)
  imprimiredad (cris)

  
  
  
  
  