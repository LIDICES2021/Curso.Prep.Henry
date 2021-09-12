
var frases = ['hola esto string', 'frase con palabra'];


function palabraMasLarga(array) {
 var masLarga = "";
 for(var j = 0; j < array.length; j++) {
    var palabras = array[j].split(' ');
    var longitud = masLarga.length;  
      for(var i = 0; i < palabras.length; i++){      
        if(palabras[i].length > longitud){
          longitud = palabras[i].length;
          masLarga = palabras[i];
        }
      }
  }
  return masLarga
}

console.log(palabraMasLarga(frases));