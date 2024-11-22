const readLine = require("readline-sync");

function matrizCuadradaIndices(num) {
    let matriz = [];
    for (let i = 0; i < num; i++){
        let fila = [];
        for (let j = 0; j < num; j++) {
            fila.push(i * j);
        }
        matriz.push(fila);
    }
    return matriz.join('\n');
}

const num = readLine.question("Introduce el tamaño de la matriz cuadrada: ");
console.log(matrizCuadradaIndices(num));

