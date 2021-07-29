/*
Escribir una función llamada deepEqual que reciba dos argumentos y retorne true 
si son el mismo valor o si son objetos con las mismas propiedades, en este último 
caso los valores de las propiedades deben ser comparados con una llamada recursiva 
de deepEqual.

Usando el operador typeof puedes determinar si ambas variables son objetos, de ser 
así se debe llamar nuevamente deepEqual para comparar las propiedades de dichos objetos, 
en caso contrario solo es necesario revisar si ambas variables son estrictamente iguales.

La función Object.keys() es útil para obtener las propiedades de los objetos.
*/

const deepEqual = (obj1, obj2) => {
    if (obj1 === obj2){ // Comparando tipos primitivos. Casos #1 y #2
        return true;
    } else if (Array.isArray(obj1) && Array.isArray(obj2)){
        
    } else if ((obj1 != null && typeof obj1 == 'object') && (obj2 != null && typeof obj2 == 'object')) {
        let keyObj1 = Object.keys(obj1);// Se obtienen las keys de ambos objetos
        let keyObj2 = Object.keys(obj2);
        let salida = false;
        if (keyObj1.length === 0 && keyObj2.length === 0) return true; //Comprobacion si el objeto esta vacio
        if (keyObj1.length !== keyObj2.length) return salida; //Si los tamanios, no son los mismos, no tienen las mismas propiedades y es false
        for (let i = 0; i < keyObj1.length; i++) { //Se hace un ciclo de cada una de las propiedades
            if (keyObj1[i] !== keyObj2[i]) { //Si los nombres de las propiedades no coinciden se retorna un false
                return false;
            } else {
                salida = deepEqual(obj1[keyObj1[i]], obj2[keyObj1[i]]);//Si las propiedades coinciden se llama recursivamente
            }
        }
        return salida;
    }
    else return false;

};

const john = {
    firstName: 'John',
    lastName: 'Doe'
}
   
console.log('Test 1:', deepEqual(1, 1)) // true
console.log('Test 2:', deepEqual(1, '1')) // false
console.log('Test 3:', deepEqual(john, john)) // true
console.log('Test 4:', deepEqual(john, { firstName: 'John', lastName: 'Doe' })) // true
console.log('Test 5:', deepEqual(john, { firstName: 'John' })) // false
