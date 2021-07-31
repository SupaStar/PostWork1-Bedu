/* EJERCICIO 3
Frequency:
Escribir una función frequency que recibe un string como argumento. 
Esta función debe contar la frecuencia o el número de veces que se repite cada carácter.

El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, 
y los valores sean la frecuencia. Los resultados deben ordenarse de manera ascendente 
por los caracteres y no la frecuencia.
*/

function freq(str) {
	// Get object and throw props or amount
	const objFreq = {};
	for (let i = 0; i < str.length; i++) {
		if (objFreq.hasOwnProperty(str[i])) objFreq[str[i]] += 1;
		else objFreq[str[i]] = 1;
	}
	// Get new object ordened
	const objOrdened = {};
	Object.keys(objFreq)
		.sort()
		.forEach(function (key) {
			objOrdened[key] = objFreq[key];
		});
	return objOrdenedF;
}

console.log(freq("www.bedu.org"));
// { '.': 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3 }
console.log(freq("cccbbbaaa"));
//{ a: 3, b: 3, c: 3 }
console.log(freq("john.doe@domain.com"));
/*{
  '.': 2,
  '@': 1,
  a: 1,
  c: 1,
  d: 2,
  e: 1,
  h: 1,
  i: 1,
  j: 1,
  m: 2,
  n: 2,
  o: 4
}*/
