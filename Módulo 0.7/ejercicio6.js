const readLine = require("readline-sync");

function matrizCuadrada(n){
    let matriz = [];
    let contador = 1;

    for (let i = 0; i < n; i++) {
        let fila = [];
        for (let j = 0; j < n; j++) {
            fila.push(contador);
            contador++;
        }
        matriz.push(fila);
    }
    return matriz.join('\n');
}

const n = readLine.question("Introduce el tamaño de la matriz cuadrada: ");

console.log(matrizCuadrada(n));