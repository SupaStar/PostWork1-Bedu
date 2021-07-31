/*Escribir una función chunk que recibe un arreglo y un número entero size. 
La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por size.*/

function chunk(array, size) {
    longitud = array.length; 
    let contadorEspacios = 0;  
    let newArray = []; 
    let arrayAux = []; 

    for (let i = 0; i < longitud; i++){
        var valor = array[i]; 
        //La variable valor la pondrá en el arreglo arrayAux
        arrayAux[contadorEspacios] = valor; 
        contadorEspacios++; 
        //Esto seguirá ocurriendo hasta que contadorEspacios sea igual al valor del size que se busca
        //o cuando i es igual al tamaño del arreglo de entrada a la función
        if (contadorEspacios === size || i === longitud-1){
            //En el momento que se entre a este If, se empujará el arreglo arrayAux a newArray, y después se borrará el arreglo arrayAux
            //y contadorEspacios se reinicie, esto permitirá que se sigan introduciendo más del arreglo original a arrayAux
            contadorEspacios = 0; 
            newArray.push(arrayAux);
            arrayAux = [];
        }
    } 

    return newArray; 
  };
  
  var data = [1, 2, 3, 4, 5, 6, 7, 8]
  
  console.log('Test 1:', chunk(data, 1)) // [[1], [2], [3], [4], [5], [6], [7], [8]]
  console.log('Test 2:', chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7, 8]]
  console.log('Test 3:', chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7, 8]]