const readLine = require("readline-sync");

function areaCircunferencia(radio) {
    const area = Math.PI * (radio ** 2);
    return area;
}

const radio = readLine.question("Introduce el radio: ");

console.log("El área del círculo es", areaCircunferencia(radio));