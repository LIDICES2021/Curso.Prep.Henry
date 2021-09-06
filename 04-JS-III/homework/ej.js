
const lista = [5, 10, 11, 3, 4];

function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
    var masgrande = numeros[0];
    for(var i = 1; i < numeros.length; i++){
        if(numeros[i] > masgrande){
            masgrande = numeros[i];
        }
    }
    return masgrande;

    
}
console.log(numeroMasGrande(lista));