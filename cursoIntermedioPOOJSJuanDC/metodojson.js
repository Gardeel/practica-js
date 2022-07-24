const obj1 = {
    a: "a",
    b: "b",
    e: {
      d: "d",
      e: "e",
    }
  };

  

//   ESTOS DOS METODOS DE JSON PUEDEN COPIAR TODO MENUS FUNCIONES
// convierte el objeto a una string a una cadena 
const stringifiedComplexObj = JSON.stringify(obj1)
// Convierte la cadena en un objeto!
const obj2 = JSON.parse(stringifiedComplexObj)

