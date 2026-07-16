//Ejercicio 5 — [Terminal]
/*Un restaurante registra los pedidos del día en un arreglo de objetos con mesa, plato y valor (mínimo 5
pedidos). Usa find para localizar el primer pedido cuyo valor supere $50.000 e imprímelo. Usa filter para
obtener todos los pedidos con valor menor o igual a $50.000. Usa reduce para calcular el total recaudado
en el día. Muestra en consola: el primer pedido costoso encontrado, la lista de pedidos económicos y el
total del día. Todos los valores monetarios con toLocaleString("es-CO")*/

console.log(" PEDIDOS DEL RESTAURANTE ");

// Arreglo de objetos
const pedidos = [
    { mesa: 1, plato: "Bandeja Paisa", valor: 35000 },
    { mesa: 2, plato: "Parrillada", valor: 65000 },
    { mesa: 3, plato: "Hamburguesa", valor: 28000 },
    { mesa: 4, plato: "Salmón", valor: 72000 },
    { mesa: 5, plato: "Pizza", valor: 45000 }
];

// Primer pedido mayor a $50.000
let pedidoCostoso = pedidos.find(pedido => pedido.valor > 50000);

console.log("Primer pedido mayor a $50.000");
console.log(pedidoCostoso);

// Pedidos económicos
let pedidosEconomicos = pedidos.filter(pedido => pedido.valor <= 50000);

console.log("----------------------------");
console.log("Pedidos menores o iguales a $50.000");

pedidosEconomicos.forEach(pedido => {
    console.log(
        "Mesa:", pedido.mesa,
        "| Plato:", pedido.plato,
        "| Valor: $", pedido.valor.toLocaleString("es-CO")
    );
});

// Total vendido
let totalVentas = pedidos.reduce((acumulador, pedido) => {
    return acumulador + pedido.valor;
}, 0);

console.log("----------------------------");
console.log("Total del día: $", totalVentas.toLocaleString("es-CO"));