const crypto = require("crypto");

const lista = [];

for (let i = 0; i < 100_000; i++) {
    lista.push(crypto.randomInt(1000));
}

let listaBurbuja = lista.slice();
console.time("El algoritmo bubble sort ha tardado en ordenar 100000 elementos en");
for (let i = 0; i < listaBurbuja.length; i++) {
    for (let j = 0; j < listaBurbuja.length - 1; j++) {
        if (listaBurbuja[j] > listaBurbuja[j + 1]) {
            const aux = listaBurbuja[j];
            listaBurbuja[j] = listaBurbuja[j + 1];
            listaBurbuja[j + 1] = aux;
        }
    }
}
console.timeEnd("El algoritmo bubble sort ha tardado en ordenar 100000 elementos en");
