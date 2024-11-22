const readLine = require("readline-sync");

function longitudCircunferencia(radio) {
    const longitud = 2 * Math.PI * radio;
    return longitud;
}

const radio = readLine.question("Introduce el radio: ");

console.log("La circunferencia es", longitudCircunferencia(radio));
