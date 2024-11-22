const crypto = require("crypto");

const lista = [];

for (let i = 0; i < 100_000; i++) {
    lista.push(crypto.randomInt(1000));
}

let listaQuicksort = lista.slice();
console.time("El algoritmo quicksort ha tardado en ordenar 100000 elementos en");

function quicksort(lista, inicio, fin) {
    if (inicio < fin) {
        const pivote = lista[fin];
        let i = inicio; 
        for (let j = inicio; j < fin; j++) {
            if (lista[j] < pivote) {
                const aux = lista[i];
                lista[i] = lista[j];
                lista[j] = aux;
                i++;
            }
        }
        lista[fin] = lista[i];
        lista[i] = pivote;
        quicksort(lista, i + 1, fin);
    }
}
quicksort(listaQuicksort, 0, listaQuicksort.length - 1);
console.timeEnd("El algoritmo quicksort ha tardado en ordenar 100000 elementos en");
