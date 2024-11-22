function diferenciaArrays(array1, array2) {
    let resultado = [];
    for (i = 0; i < array1.length; i++) {
        let numeroDiferente = false; 
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                numeroDiferente = true;
                break;
            }
        }
        if (!numeroDiferente) {
            resultado.push(array1[i]);
        }
    }
    return resultado; 
}

function arrayRandom(length, valorMax) {
    let result = [];
    for (let i = 0; i < length; i++) {
        result.push(Math.floor(Math.random() * valorMax));
    }
    return result; 
}

const array1 = arrayRandom(5, 5);
const array2 = arrayRandom(3, 5);

console.log("Array 1: ", array1);
console.log("Array 2: ", array2);

console.log("Los elementos que están en el primer array y no están en el segundo son: ", diferenciaArrays(array1, array2));