function esPrimo(numeroPrimo) {

let esNumeroPrimo = true;

for(let i = 2; i < numeroPrimo/2; i++){
    if(numeroPrimo % i=== 0){
        esNumeroPrimo = false;
    }
}
if(esNumerPrimo){
    console.log("Si es un Numero Primo", numeroPrimo);
}
else{
    console.log("No es Numero Primo", numeroPrimo);
}

  }