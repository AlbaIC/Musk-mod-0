const readLine = require("readline-sync");

function palabrasInvertidas(palabra) {
    const pila = [];
    for (let letra of palabra) {
        pila.push(letra);
    }
    let invertida = '';
    for (let i = pila.length; i > 0; i--) {
        invertida += pila.pop();
    }
    return invertida; 
}

const palabra = readLine.question("Introduce una palabra: ");
console.log("La palabra invertida es: ", palabrasInvertidas(palabra));
