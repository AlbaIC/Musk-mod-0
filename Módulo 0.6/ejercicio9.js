const readLine = require("readline-sync");

let numEscrito = "";

while(true) {
    const num = readLine.question("Introduce un numero del 0 al 10: ");

    if (!isNaN(num) && num <= 10 && num >= 0) {
    
     switch (num) {
        case "0": 
            numEscrito = "cero";
            break;
        case "1": 
            numEscrito = "uno";
            break;
        case "2": 
            numEscrito = "dos";
            break;
        case "3": 
            numEscrito = "tres";
            break;
        case "4": 
            numEscrito = "cuatro";
            break;
        case "5": 
            numEscrito = "cinco";
            break;
        case "6": 
            numEscrito = "seis";
            break;
        case "7": 
            numEscrito = "siete";
            break;
        case "8": 
            numEscrito = "ocho";
            break;
        case "9": 
            numEscrito = "nueve";
            break;
        case "10": 
            numEscrito = "diez";
            break;
        }
        break;
    } else {
    console.log("No válido.")
    }
}
console.log(numEscrito);
