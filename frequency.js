/* EJERCICIO 3
Frequency:
Escribir una función frequency que recibe un string como argumento. 
Esta función debe contar la frecuencia o el número de veces que se repite cada carácter.

El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, 
y los valores sean la frecuencia. Los resultados deben ordenarse de manera ascendente 
por los caracteres y no la frecuencia.
*/


function freq(str){
   /*funcion que recibe un string y devuelve un diccionario con el número de caracteres 
   que contiene este.*/
   
   /* con try lo que buscamos es que si no se introduce una cadena mande un error en pantalla 
   indicando que debe introducir una jajaja */
   try {
    // vamos a sortear el string y lo metemos dentro de un array, creamos un objeto vacio */
   const list = str.split('').sort();
   const dic = {};

   /*asignamos cada valor como una key del objeto si este no esta definido
   si está definido lo cremos y le asignamos un 1 como valor */
   for(const key of list){

      if(dic[key]){
         ++dic[key];
      } else {
         dic[key] = 1;
      }
   }
   return dic;
   } catch (error){
      console.log('Lo que introdujiste NO ES UNA CADENA, porfavor introduce una!!!!');

   }
   
}
console.log(freq(5));
// Lo que introdujiste NO ES UNA CADENA, porfavor introduce una!!!!
console.log(freq('www.bedu.org'));
// { '.': 2, b: 1, d: 1, e: 1, g: 1, o: 1, r: 1, u: 1, w: 3 }
console.log(freq('cccbbbaaa'));
//{ a: 3, b: 3, c: 3 }
console.log(freq('john.doe@domain.com'));
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