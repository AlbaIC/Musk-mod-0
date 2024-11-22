const readLine = require("readline-sync");

let year = readLine.question("Introduce un año: ");

if ((year % 4 === 0) && (year % 100 != 0) || (year % 400 === 0)) {
    console.log("El año introducido es bisiesto.")
} else {
    console.log("El año introducido no es bisiesto.")
}