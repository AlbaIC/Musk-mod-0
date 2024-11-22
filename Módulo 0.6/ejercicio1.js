const readLine = require("readline-sync");

const input = readLine.question("Introduce un numero: ");

const num = parseInt(input);
if (isNaN(num)) {
    console.log("No has introducido un numero");
} else {
    console.log("El número es;", num);
}

if (num % 2 === 0) { 
    console.log("El número introducido es par");
} else {
    console.log("El número introducido es impar");
} 

if (num > 0) {
    console.log("y positivo.");
} else if (num < 0) {
    console.log("y negativo.");
} else {
    console.log("el número cero se considera un número neutro.");
}
