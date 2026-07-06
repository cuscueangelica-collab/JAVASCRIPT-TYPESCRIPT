console.log("hola aprendises ADSO");
/*sesaion1: variables*/

let edad=25; //let declara una variable
edad = 30;
//let edad = 20;
let nombre = "Andres";
console.log(nombre);

const PI =3.141598; //const maniene el valor en todo el programa

//number numerico o decimal
const entero = 50;
const decimal = 31.40;
const negative = -21;
console.log("numero entero: , entero");

//Booleam solo tiene 2 estados falso o verdadero
let estadoActivo = true;
let tienePermiso = false;

//null ausencia intensional del valor
const resultado = null;

//undefined - variable declarado sin valor
let sinValor;
console.log(sinValor);

//typeof - tipo de valor
console.log(typeof -21);
console.log(typeof "Andres");

/*3.Operadores aritmedicos*/
let a = 20;
let b = 10;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);//division
console.log(a%b);//modulo
console.log(a**b);//potencia de 20 a 10

//Operaciones comparacion
console.log(5 == "5"); //true-igualdad de valor
console.log(5 == "5"); //false igualdad estricta usar siempre
console.log(5 !== 3); //true - diferencia estricta
console.log(10>5); //true
console.log(3<5); //true

// operadoreslogicos
console.log("operadores logicos ");
let email = "andres@gmail.com"
let pass = "andres123"
//And las 2 condiciones deben ser  verdaderas

console.log(false&& false); //and o y si coreo es v y password v entonces ingreso
console.log(false || false);//OR al menos una condicion debe ser verdadera
console.log(true); // Not niega el valor!

// operadroes de aignacion
console.log("operadores de asignacion")

let contador = 0
contador = contador+4;
contador+=4;
conatador=4;
contador++;// incremento en 1
contador--;//decremento en 1
contador.log(contador);

// estructuras radicionales
// if else
    let temperatura = 21;

//si la temperatura es mayr a 35 grados es clima calido
if(temperatura > 35){
    console.log("hace mucho calor,temperatura calida")

}else if (temperatura > 25){
    console.llog("clima intermedio")
}


