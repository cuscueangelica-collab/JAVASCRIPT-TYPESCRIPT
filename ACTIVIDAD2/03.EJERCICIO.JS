//Ejercicio 3 — [Terminal]
/*Una cooperativa registra los pagos mensuales de 5 asociados. Crea un arreglo de objetos con nombre,
cuota mensual y si está al día (booleano al_dia). Usando un switch sobre el mes actual (decláralo como
variable numérica del 1 al 12), muestra un saludo de bienvenida diferente por trimestre: "Bienvenido al
primer trimestre", "Bienvenido al segundo trimestre", etc. Luego recorre el arreglo e imprime el nombre
de cada asociado y su estado: "Al día" o "En mora". Cuenta e imprime cuántos están en mora. Usa const
para el arreglo y let para el mes*/


console.log(" COOPERATIVA ");

// Arreglo de objetos
const asociados = [
    { nombre: "Andrés", cuotaMensual: 120000, al_dia: true },
    { nombre: "María", cuotaMensual: 85000, al_dia: false },
    { nombre: "Carlos", cuotaMensual: 95000, al_dia: true },
    { nombre: "Laura", cuotaMensual: 150000, al_dia: false },
    { nombre: "Camila", cuotaMensual: 100000, al_dia: true }
];

// Variable del mes
let mes = 8;

// Saludo según el trimestre
switch (true) {
    case (mes >= 1 && mes <= 3):
        console.log("Bienvenido al primer trimestre");
        break;

    case (mes >= 4 && mes <= 6):
        console.log("Bienvenido al segundo trimestre");
        break;

    case (mes >= 7 && mes <= 9):
        console.log("Bienvenido al tercer trimestre");
        break;

    case (mes >= 10 && mes <= 12):
        console.log("Bienvenido al cuarto trimestre");
        break;

    default:
        console.log("Mes inválido");
}
// Contador de asociados en mora
let enMora = 0;
// Recorrer el arreglo
for (const asociado of asociados) {
    if (asociado.al_dia) {
    console.log(
            asociado.nombre,
            "- Cuota: $",
            asociado.cuotaMensual.toLocaleString("es-CO"),
            "- Estado: Al día"
        );

    } else {
        console.log(
            asociado.nombre,
            "- Cuota: $",
            asociado.cuotaMensual.toLocaleString("es-CO"),
            "- Estado: En mora"
        );
        enMora++;
    }
}

console.log("---------------------------");
console.log("Asociados en mora:", enMora);