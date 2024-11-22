const readLine = require("readline-sync");

function numerosPrimos(num) {
    if (num <= 1) {
        return console.log("No es primo.");
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return console.log("No es primo.");
        }
    }
    return console.log("Es primo.");
}

const num = readLine.question("Introduce un número: ");
numerosPrimos(num);
