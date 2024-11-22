const readLine = require("readline-sync");

function palabrasRepetidas(textoEntrada) {
    const palabras = textoEntrada.toLowerCase().replace(/[^\w\s]/g, '').split(/\s+/);
    const palabrasRepetidas = [];

    for (let i = 0; i < palabras.length; i++) {
        let contador = 0; 
        for (let j = 0; j < palabras.length; j++) {
            if (palabras[i] === palabras[j]) {
                contador++;
            }
        }
        if (contador > 1 && !palabrasRepetidas.includes(palabras[i])) {
            palabrasRepetidas.push(palabras[i]);
        }
    }
    return palabrasRepetidas;
}

const textoEntrada = readLine.question("Introduce un texto: ");
console.log("Se repiten las siguientes palabras: ", palabrasRepetidas(textoEntrada));



