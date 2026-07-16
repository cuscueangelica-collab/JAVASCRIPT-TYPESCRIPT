//Ejercicio 1 — [Terminal]
/*Una empresa de domicilios necesita calcular el costo de entrega de varios pedidos. Crea un arreglo con los
nombres y pesos (en kg) de 5 pedidos definidos directamente en el código. Recorre el arreglo con for...of
y para cada pedido determina el costo: menos de 1 kg cuesta $4.000, entre 1 y 3 kg cuesta $8.000, y más
de 3 kg cuesta $14.000. Muestra en consola el nombre del pedido, su peso y su costo. Al finalizar, muestra
el total acumulado de todos los costos. Usa const para el arreglo y toLocaleString("es-CO") para los valores
monetarios*/

console.log(" EMPRESA DE DOMICILIOS ");
// Arreglo de objetos
const pedidos = [
    { nombre: "Laptop", peso: 0.8 },
    { nombre: "Mouse", peso: 1.5 },
    { nombre: "Monitor", peso: 4.2 },
    { nombre: "Teclado", peso: 2.7 },
    { nombre: "WebCam", peso: 0.6 }
];
// Variable para acumular el costo total
let totalCostos = 0;
// Recorremos el arreglo
for (const pedido of pedidos) {
    let costo = 0;
    // Determinar el costo según el peso
    if (pedido.peso < 1) {
        costo = 4000;
    } else if (pedido.peso >= 1 && pedido.peso <= 3) {
        costo = 8000;
    } else {
        costo = 14000;
    }
    // Acumular el costo
    totalCostos += costo;

    // Mostrar información del pedido
    console.log("Producto:", pedido.nombre);
    console.log("Peso:", pedido.peso, "kg");
    console.log("Costo: $", costo.toLocaleString("es-CO"));
    console.log("----------------------------");
}

// Mostrar el total
console.log("TOTAL DE ENTREGAS");
console.log("$", totalCostos.toLocaleString("es-CO"));