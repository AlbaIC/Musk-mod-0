const readLine = require("readline-sync");

function comprobarElementosUnicos(lista) {
    let elementosUnicos = true;
    let elementosRepetidos = [];

    for (let i = 0; i < lista.length; i++) {
        for (let j = i + 1; j < lista.length; j++) {
            if (lista[i] === lista[j] && !elementosRepetidos.includes(lista[i])) {
                elementosUnicos = false;
                elementosRepetidos.push(lista[i]);
                break;
            }
        }
        
    }
    if (elementosUnicos) {
        console.log("Todos los elementos son únicos.");
    } else {
        console.log("Hay elementos repetidos en la lista");
        console.log("Los elementos repetidos son:", elementosRepetidos);
    }
}

const elementosDelUsuario = readLine.question("Introduce una lista de elementos: ");
const lista = elementosDelUsuario.split(",");
comprobarElementosUnicos(lista);