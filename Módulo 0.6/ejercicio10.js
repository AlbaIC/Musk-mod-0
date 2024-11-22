const readLine = require("readline-sync");

const randomNumber = Math.floor(Math.random() * 10) + 1;

let contadorIntentos = 0;

let numCorrecto = false;

while (!numCorrecto) {
  let num = readLine.question("Introduce un numero: ");
  contadorIntentos++;
  if (num == randomNumber) {
    console.log(
      "ENHORABUENA, ¡EL NÚMERO ES CORRECTO! El número correcto era el " +
        randomNumber +
        " y el número de intentos en conseguirlo ha sido de " +
        contadorIntentos +
        "."
    );
    numCorrecto = true;
  } else
    console.log(
      "El número no es correcto, vuelve a introducir otro número. Llevas " +
        contadorIntentos +
        " intentos."
    );
}

