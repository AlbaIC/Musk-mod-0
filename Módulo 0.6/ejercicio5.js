const readLine = require("readline-sync");

let cadena = readLine.question("Introduce una frase: ");

let vocales = "aeiouAEIOU";

let contadorVocales = 0;

for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        contadorVocales++;
    }
}
console.log("El número de vocales es:", contadorVocales);

