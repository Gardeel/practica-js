var articulos = [
    {nombre: "Bicicleta", costo: 3000},
    {nombre: "Television", costo: 2500},
    {nombre: "Libro", costo: 320 },
    {nombre: "mouse", costo: 500 },
    {nombre: "Mochila", costo: 400 },
    {nombre: "Celular", costo: 10000},
    {nombre: "Portatil", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
    {nombre: "Portatil", costo: 17000}

];
  
// el filter lo que hace es agregar a otro nuevo arrays los articulos que cumplieron la nueva validacion 
var articuloFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// funcion map lo que haces mostrar todo el contenido con un filtrado.
var nombreArticulos = articulos.map(function(art){
    return art.nombre
});


// funcion find () devuelve el primer valor que coincide de la coleccion, una vez que coincida con el valor en los resultados, no verifica los valores restantes en la coleccion de matriz.
var encuentraArticulo = articulos.find(function(objeto){
    return objeto.nombre === "Portatil"
});

// forEach esta funcion no crea una arrays si no devuelve un resultado.
articulos.forEach(function(objeto){
    console.log(objeto.nombre)
});


// metodo some () nos va regresar una validacion de VERDADERA o FALSA para articulos que cumplan esa validacion, se crea una nueva arrays
var articuloBaratos = articulos.some(function(objeto){
    return objeto.costo <= 700;
});

/*
Resumen:

Agregar al final= .push()
Eliminar al final= .pop()

Agregar al inicio= .unshift()
Eliminar al inicio= .shift()
*/