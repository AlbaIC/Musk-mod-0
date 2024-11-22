const readLine = require("readline-sync");

const frecuenciaMap = new Map();
function frecuenciaCaracteres(cadena){
    for (let i = 0; i < cadena.length; i++) {
        let caracter = cadena[i];
        frecuenciaMap.set(caracter, (frecuenciaMap.get(caracter) || 0) + 1);
    }
    return frecuenciaMap;
}

const cadena = readLine.question("Introduce un texto: ");
console.log("Mapa de frecuencias: ", frecuenciaCaracteres(cadena));
