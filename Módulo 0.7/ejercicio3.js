const readLine = require("readline-sync");

function longitudCircunferencia(radio) {
    const longitud = 2 * Math.PI * radio;
    return longitud;
}
function areaCircunferencia(radio) {
    const area = Math.PI * (radio ** 2);
    return area;
}
const radio = readLine.question("Introduce el radio: ");

console.log("La circunferencia es", longitudCircunferencia(radio));

console.log("El área del círculo es", areaCircunferencia(radio));

