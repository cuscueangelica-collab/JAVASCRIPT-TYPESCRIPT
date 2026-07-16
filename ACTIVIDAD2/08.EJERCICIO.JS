//Ejercicio 8 — [Terminal]
/*Un gimnasio tiene registrados sus clientes en un arreglo de objetos con nombre, edad, plan (1, 2 o 3) y
activo (booleano). Usa filter para obtener solo los clientes activos. Sobre ese resultado usa map para
calcular el precio de cada cliente según su plan (1 = $80.000, 2 = $130.000, 3 = $200.000) aplicando el
descuento correspondiente con if/else if: menores de 18 años 20% de descuento, entre 60 y 99 años 30%
de descuento, los demás sin descuento. El map debe retornar un objeto con nombre, plan y valorFinal.
Usa forEach para imprimir cada resultado y reduce para calcular el ingreso total del mes. Muestra todos
los valores con toLocaleString("es-CO")*/

console.log("GIMNASIO");

// Arreglo de objetos
const clientes = [
    { nombre: "Andrés", edad: 17, plan: 1, activo: true },
    { nombre: "María", edad: 22, plan: 2, activo: true },
    { nombre: "Carlos", edad: 65, plan: 3, activo: true },
    { nombre: "Laura", edad: 30, plan: 1, activo: false },
    { nombre: "Camila", edad: 15, plan: 2, activo: true },
    { nombre: "Juan", edad: 70, plan: 3, activo: true }
];

// Obtener solo clientes activos
let clientesActivos = clientes.filter(cliente => cliente.activo);
// Calcular el valor del plan
let pagos = clientesActivos.map(cliente => {
    let precio = 0;

    // Precio según el plan
    if (cliente.plan === 1) {
        precio = 80000;
    } else if (cliente.plan === 2) {
        precio = 130000;
    } else {
        precio = 200000;
    }

    // Descuento según la edad
    if (cliente.edad < 18) {
        precio = precio * 0.80;
    } else if (cliente.edad >= 60 && cliente.edad <= 99) {
        precio = precio * 0.70;
    }

    return {
        nombre: cliente.nombre,
        plan: cliente.plan,
        valorFinal: precio
    };

});

// Mostrar resultados
console.log("----------------------------");
console.log("Clientes activos");
pagos.forEach(cliente => {
    console.log(
        "Nombre:", cliente.nombre,
        "| Plan:", cliente.plan,
        "| Valor: $", cliente.valorFinal.toLocaleString("es-CO")
    );

});

// Calcular ingreso total
let ingresoTotal = pagos.reduce((acumulador, cliente) => {
    return acumulador + cliente.valorFinal;
}, 0);

console.log("----------------------------");
console.log("Ingreso total del mes");
console.log("$", ingresoTotal.toLocaleString("es-CO"));