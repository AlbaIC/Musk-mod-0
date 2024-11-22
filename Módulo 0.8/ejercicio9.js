const readLine = require("readline-sync");

function parentesisBalanceados(textoParentesis) {
    const pila = [];
    for (let char of textoParentesis) {
        if (char === '(') {
            pila.push(char);
        } else if (char === ')') {
            if (pila.length === 0) {
                console.log("No son balanceados"); 
                return;
            }
            pila.pop();
        }
    }
    if (pila.length === 0) {
        console.log("Son balanceados");
    } else {
        console.log("No son balanceados");
    }
}

const textoParentesis = readLine.question("Introduce un texto: ");
parentesisBalanceados(textoParentesis);