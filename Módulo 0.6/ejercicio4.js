const readLine = require("readline-sync");

const num = readLine.question("Introduce un numero: ");

for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num*i));
}
