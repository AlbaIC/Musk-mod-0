const readLine = require("readline-sync");

function palabrasAnagramas(cadena1, cadena2) {
  cadena1 = cadena1.replace(/\s/g, "").toLowerCase();
  cadena2 = cadena2.replace(/\s/g, "").toLowerCase();

  if (cadena1.length !== cadena2.length) {
    return false;
  }

  const map = new Map();

  for (let i = 0; i < cadena1.length; i++) {
    const caracter = cadena1[i];
    map.set(caracter, (map.get(caracter) || 0) + 1);
  }

  for (let i = 0; i < cadena2.length; i++) {
    const caracter = cadena2[i];
    if (!map.has(caracter)) {
      return false;
    }
    map.set(caracter, map.get(caracter) - 1);
    if (map.get(caracter) === 0) {
      map.delete(caracter);
    }
  }
  return map.size === 0;
}

const cadena1 = readLine.question("Introduce una palabra: ");
const cadena2 = readLine.question("Introduce otra palabra: ");
const resultado = palabrasAnagramas(cadena1, cadena2);

if (resultado) {
    console.log("Son anagramas.")
} else {
    console.log("No son anagramas.")
}