const readLine = require("readline-sync");

function matrizTraspuesta(matriz) {
    const traspuesta = [];
    for (let i = 0; i < matriz[0].length; i++) {
        traspuesta[i] = [];
        for (let j = 0; j < matriz.length; j++) {
            traspuesta[i][j] = matriz[j][i];
        }
    }
    return traspuesta;
}

const matrizDeEntrada = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ]
] 

console.log("Matriz de entrada:");
console.log(matrizDeEntrada);

const traspuesta = matrizTraspuesta(matrizDeEntrada);
console.log("Matriz traspuesta:")
console.log(traspuesta);