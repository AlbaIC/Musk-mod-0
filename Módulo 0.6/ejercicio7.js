const readLine = require("readline-sync");

const num = readLine.question("Introduce la altura del triangulo : ");

for (let altura = 1; altura <= num; altura++) {
    let triangulo = "";
    for (let espacios = 1; espacios <= num - altura; espacios++) {
        triangulo += " ";
    }
    for (let asteriscos = 1; asteriscos <= 2 * altura - 1; asteriscos++) {
        triangulo += "*";

    }
    console.log(triangulo);
    } 
   