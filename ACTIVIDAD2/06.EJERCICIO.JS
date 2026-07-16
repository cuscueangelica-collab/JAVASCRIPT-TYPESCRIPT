//Ejercicio 6 — [Terminal]
/*Una librería mantiene su carrito de compras como un arreglo de objetos con titulo, autor y precio. Inicia
el arreglo con 3 libros definidos en el código. Luego usa push para agregar 2 libros más al final. Usa pop
para eliminar el último libro agregado e imprime cuál fue eliminado. Usa map para crear un arreglo solo
con los títulos de los libros restantes e imprímelo. Finalmente usa reduce para calcular el total a pagar y
muéstralo con toLocaleString("es-CO"). Muestra el estado del carrito después de cada operación*/

console.log("CARRITO DE COMPRAS ");
// Arreglo inicial con 3 libros
let carrito = [
    {
        titulo: "JavaScript Básico",
        autor: "Juan Pérez",
        precio: 70000
    },
    {
        titulo: "HTML y CSS",
        autor: "Ana López",
        precio: 55000
    },
    {
        titulo: "Node.js",
        autor: "Carlos Ruiz",
        precio: 90000
    }
];

// Mostrar carrito inicial
console.log("Carrito inicial");
console.log(carrito);

// Agregar 2 libros
carrito.push({
    titulo: "React",
    autor: "Laura Gómez",
    precio: 85000
});

carrito.push({
    titulo: "Base de Datos",
    autor: "Andrés Torres",
    precio: 80000
});

console.log("----------------------------");
console.log("Carrito después de agregar libros");
console.log(carrito);

// Eliminar el último libro
let eliminado = carrito.pop();
console.log("----------------------------");
console.log("Libro eliminado");
console.log(eliminado);
// Mostrar carrito actualizado
console.log("----------------------------");
console.log("Carrito actualizado");
console.log(carrito);
// Obtener solo los títulos
let titulos = carrito.map(libro => libro.titulo);

console.log("----------------------------");
console.log("Títulos de los libros");

titulos.forEach(titulo => {
    console.log(titulo);
});

// Calcular el total a pagar
let total = carrito.reduce((acumulador, libro) => {
    return acumulador + libro.precio;
}, 0);

console.log("----------------------------");
console.log("Total a pagar: $", total.toLocaleString("es-CO"));