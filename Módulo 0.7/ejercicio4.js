const readLine = require("readline-sync");

const listaNumeros = readLine.question("Introduce una lista de numeros: ");

function calcularSuma(listaNumeros) {
    const numeros = listaNumeros.split(",").map(Number);
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

function calcularMedia(listaNumeros) {
    const numeros = listaNumeros.split(",").map(Number);
    const media = calcularSuma(listaNumeros) / numeros.length;
    return media; 
}
console.log("La suma es", calcularSuma(listaNumeros));

console.log("La media aritmética es", calcularMedia(listaNumeros));
