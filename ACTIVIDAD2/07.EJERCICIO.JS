//Ejercicio 7 — [Terminal]
/*Una empresa de ventas quiere analizar su desempeño semanal. Crea un arreglo de objetos con las ventas
de 7 días, cada objeto con dia (string) y totalVendido (número). Implementa tres funciones separadas:
calcularTotal(ventas) que use reduce y retorne la suma total de la semana; encontrarMejorDia(ventas) que
use reduce y retorne el objeto del día con mayor venta; filtrarDiasDestacados(ventas, minimo) que use
filter y retorne los días donde totalVendido supera el mínimo recibido como parámetro. Llama las tres
funciones al final e imprime sus resultados. Usa toLocaleString("es-CO") para los valores*/

console.log("VENTAS SEMANALES");

// Arreglo de objetos
const ventas = [
    { dia: "Lunes", totalVendido: 450000 },
    { dia: "Martes", totalVendido: 620000 },
    { dia: "Miércoles", totalVendido: 510000 },
    { dia: "Jueves", totalVendido: 730000 },
    { dia: "Viernes", totalVendido: 980000 },
    { dia: "Sábado", totalVendido: 1200000 },
    { dia: "Domingo", totalVendido: 680000 }
];

// Función para calcular el total vendido
function calcularTotal(ventas) {

    return ventas.reduce((acumulador, venta) => {
        return acumulador + venta.totalVendido;
    }, 0);

}
// Función para encontrar el mejor día
function encontrarMejorDia(ventas) {
    return ventas.reduce((mejor, venta) => {

        if (venta.totalVendido > mejor.totalVendido) {
            return venta;
        } else {
            return mejor;
        }

    });

}

// Función para filtrar los días destacados
function filtrarDiasDestacados(ventas, minimo) {

    return ventas.filter(venta => venta.totalVendido > minimo);

}
// Llamado de funciones
let totalSemana = calcularTotal(ventas);
let mejorDia = encontrarMejorDia(ventas);
let diasDestacados = filtrarDiasDestacados(ventas, 700000);
// Mostrar resultados
console.log("----------------------------");
console.log("Total vendido en la semana");
console.log("$", totalSemana.toLocaleString("es-CO"));
console.log("----------------------------");
console.log("Mejor día de ventas");
console.log(mejorDia);
console.log("----------------------------");
console.log("Días destacados");

diasDestacados.forEach(venta => {

    console.log(
        venta.dia,
        "- $",
        venta.totalVendido.toLocaleString("es-CO")
    );

});