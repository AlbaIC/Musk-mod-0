const readLine = require("readline-sync");

function matrizDelTexto(string) {
    const palabras = string.split(' ');

    const matrizBidimensional = [];
    let fila = [];

    for(let i = 0; i < palabras.length; i++) {
        fila.push(palabras[i]);
        if(i === palabras.length - 1 || fila.length === 5 ) {
            matrizBidimensional.push(fila);
            fila = [];
        }
    }
    return matrizBidimensional;
}

const string = readLine.question("Introduce un texto: ");

console.log(matrizDelTexto(string));