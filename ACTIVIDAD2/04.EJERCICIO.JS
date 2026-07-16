//Ejercicio 4 — [Terminal]
/*Una tienda de tecnología tiene su inventario en un arreglo de objetos con nombre, precio y stock
(mínimo 6 productos, definidos en el código). Usa filter para obtener solo los productos que tienen stock mayor a 0.
Luego usa map sobre ese resultado para crear un nuevo arreglo donde cada elemento sea un string con el formato "Nombre — $Precio" usando toLocaleString("es-CO").
Imprime el arreglo resultante con forEach. Al final usa reduce para calcular el valor total del
inventario disponible (precio × stock de cada producto con stock > 0) y muéstralo en consola*/



let iventario= [
    {nombre: "Equipo PC", precio: 520, stock: 7},
    {nombre: "Mouse", precio: 120, stock: 10},
    {nombre: "Teclado", precio: 50, stock: 5},
    {nombre: "Pantalla", precio: 400, stock: 25},
    {nombre: "Memoria RAM", precio: 180, stock: 18},
];


//1. filter -solo productos con el stock
let disponibles = inventario.filter(p=> p.stock >0);
console.log(disponibles);
//2. map - convertir cada objeto en texto legible
let etiquetas = disponibles.map(p =>`${p.nombre} - $${p.precio.toLocaleString("es-CO")}`
);
console.log(etiquetas);
//3.forech imprimir
console.log("lista de productos:");
etiquetas.forEach(e =>console.log(e));
// 4. Reduce: valor total del inventario
let total = disponibles.reduce(
    (acumulador, p) => acumulador + (p.precio * p.stock),
    0
);

console.log(
    "Valor total del inventario: $" +
    total.toLocaleString("es-CO")
);

