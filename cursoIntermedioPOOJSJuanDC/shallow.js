const obj1 = {
  a: "a",
  b: "b",
  e: {
    d: "d",
    e: "e",
  }
};

const obj2 = {};

// Shallow copy solo sirve para tipos de datos basico cuando hay un objeto entro no puede copiar en otro lugar de la memoria
for (prop in obj1) {
  obj2[prop] = obj1[prop];
}

// el metodo assign igual tiene el mismo problema no puede copiar objetos que tengan otros objetos dentro.
const obj3 = Object.assign({}, obj1)

// el metodo create solo nos pide un parametro que elemento queremos copiar, pero de la misma manera que vimos no puede lograr hacer una copia.
const obj4 = Object.create(obj1)