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

        if (obj1.length === 0 && obj2.length === 0) return true; // Validar [] == []

        if (obj1.length === obj2.length){   // Antes de comparar, verificar tengan la misma longitud
            for (let i = 0; i < obj1.length; i++) {
                const element1 = obj1[i];
                const element2 = obj2[i];

                if (element1 !== element2) break;

                if (i === obj1.length - 1) return true;
                
            }
        }
    
    } else if ((obj1 != null && typeof obj1 == 'object') && (obj2 != null && typeof obj2 == 'object')) {

    }
    
    return false;

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
console.log('Test 6:', deepEqual([], [])); // true
console.log('Test 7:', deepEqual({}, {})); // true
console.log('Test 8:', deepEqual([1,2,3], [1,2,3])) // true
console.log('Test 9:', deepEqual([1,2,3], ['1', '2', '3'])); // false
console.log('Test 10:', deepEqual([1, {name: 'John'}], [1, {name: 'John'}])) // true