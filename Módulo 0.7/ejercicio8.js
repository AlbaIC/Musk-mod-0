const readLine = require("readline-sync");

function palindromo(fraseUsuario){
    let fraseLimpia = fraseUsuario.replace(/\s/g, '').toLowerCase();
    return fraseLimpia === fraseLimpia.split('').reverse().join('');
}

const fraseUsuario = readLine.question("Introduce una frase: ");

if (palindromo(fraseUsuario)) {
    console.log("Es palíndromo.");
} else {
    console.log("No es palíndromo.")
}
