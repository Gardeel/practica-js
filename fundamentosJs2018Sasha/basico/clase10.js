// Condicionales

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

function profesion(persona) {
  console.log(`${persona.nombre} es:`);

  if (persona.ingeniero) {
    console.log("Ingeniero");
  }else{
    console.log("No es ingeniero")
  }

  if (persona.cocinero) {
    console.log("Cocinero");
  }

  if (persona.cantante) {
    console.log("Canta");
  }

  if (persona.dj) {
    console.log("Dj");
  }

  if (persona.guitarrista) {
    console.log("Guitarrista");
  }

  if (persona.drone) {
    console.log("Piloto de drone");
  }
}

profesion(cris);

// Reto mayor de edad y menor de edad

var adri = {
    nombre: 'Adriana',
    apellido: 'Aruquipa',
    edad: 17, 
};

function mayorDeEdad (persona){
    console.log (`mi nombre es ${persona.nombre} ${persona.apellido} y `)

    if (persona.edad < 18){
        console.log('soy menor de edad')
    }
    else{
        console.log('soy mayor de edad')
    }
}


mayorDeEdad(adri)




