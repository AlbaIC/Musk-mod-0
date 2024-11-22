const readLine = require("readline-sync"); 

const numAltura = readLine.question("Introduce la altura del rectangulo: ");

const numAnchura = readLine.question("Introduce la anchura del rectangulo: ");

for (let altura = 0; altura < numAltura; altura++) {
    let rectangulo = "";
    for (let anchura = 0; anchura < numAnchura; anchura++) {
        if (altura === 0 || altura === numAltura - 1|| anchura === 0 || anchura === numAnchura - 1) {
            rectangulo += "*";
        }
        else {
            rectangulo += " ";
        }
    }
    console.log(rectangulo);
} 