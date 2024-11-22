const readLine = require("readline-sync");

function secuenciaBalanceada(textoSecuencia) {
    const pila = [];

    for (let char of textoSecuencia) {
        if (char === '(' || char === '[' || char === '{') {
            pila.push(char);
        }
        else if (char === ')' && pila.pop() !== '(') {
            console.log("Secuencia correcta.");
            return;
        }
        else if (char === ']' && pila.pop() !== '[') {
            console.log("Secuencia incorrecta.");
            return;
        }
        else if (char === '}' && pila.pop() !== '{') {
            console.log("Secuencia incorrecta.");
            return;
        }

    }
    if (pila.length === 0) {
        console.log("Secuencia correcta.");
    } else {
        console.log("Secuencia incorrecta.");
    }
}

const textoSecuencia = readLine.question("Introduce una secuencia: ");
secuenciaBalanceada(textoSecuencia);
