# PostWork1-Bedu | Equipo 19

## Integrantes del equipo:

- [Valeria Jimeno Villegas](https://github.com/valjime95)
- [Rogelio Magaña Tapia](https://github.com/MaganaRogelio)
- [Obed Noe Martínez González](https://github.com/SupaStar)
- [Sergio Gael Martínez Sarmiento](https://github.com/Searge1357)
- [Diego Domínguez Melo](https://github.com/POWRFULCOW89)

## Instrucciones

1. Clonar 
 
```sh
gh repo clone SupaStar/PostWork1-Bedu
```
o [descargar](https://github.com/SupaStar/PostWork1-Bedu/archive/refs/heads/main.zip) el repositorio como ZIP.

2. Para ejecutar los scripts, 

    - Añadir como `<script>` a un documento HTML.

    ```html
    ...
    <script src="script.js"></script>
    ...
    ```

    - En un ambiente local de Node:

    ```sh
    node "script".js 
    ```
    - Con [nodemon](https://github.com/remy/nodemon#installation):

    ```sh
    [npx] nodemon "script".js
    ```

## Problema Deep Equal

### Descripción

Escribir una función llamada deepEqual que reciba dos argumentos y retorne true si son el mismo valor o si son objetos con las mismas propiedades, en este último caso los valores de las propiedades deben ser comparados con una llamada recursiva de deepEqual.

### Responsables

- Diego Domínguez Melo
- Obed Noe Martínez González

### Solución del problema

En un principio comenzamos corroborando si las  variables ingresadas son de tipo primitivo, si esto es cierto, y son exactamente iguales en tipo y valor regresa un `true`; en caso de no ser variables primitivas corroborará si son arreglos, comparando primero los tamaños del arreglo, si son diferentes regresa `false`, si son iguales pasará a comparar cada elemento de ambos arreglos con un ciclo `for`, en caso de que un par de elementos no coincidan regresará `false`, si todos los elementos son iguales regresará `true`.

Por último, en caso de que las varables de entradas de la función no sean de tipo primitivo ni arreglos, checará si son objetos, si esto no es así retornará `false`, si se cumple la condición pasará a obtener las keys de ambos objetos y comparará si ambos están vacíos, si es así la salida será `true`. Si los objetos no están vacíos, comparará que el tamaño de ambos sea igual, en caso de que esto sea cierto se corroborarán que los nombres de cada par de objetos sea igual, y si es así, se llamará recursivamente a deepEqual() para que compare los valores del par de propiedades; si cualquiera de las condiciones mencionadas anteriormente no se cumplen regresará `false`

## Problema Chunk

### Descripción

Escribir una función chunk que recibe un arreglo y un número entero `size`. La función debe dividir el arreglo en múltiples arreglos del tamaño determinado por `size`.

### Responsable

- Sergio Gael Martínez Sarmiento

### Solución del problema

Al principio creamos la variable `longitud` la cual tendrá el valor del tamaño del arreglo de entrada, también definimos la variable `contadorEspacios` y la iniciamos en 0, después creamos dos arreglos vacíos llamados `newArray` y `arrayAux`. Después de esto iniciamos un ciclo `for` que terminará una vez que la variable `i` alcance a `longitud`; dentro de este ciclo se le asignará a la variable `valor` el i-nésimo valor del arreglo de entrada, y este se moverá al arreglo `arrayAux` en el espacio correspondiente al valor de `contadorEspacios`, y a esta misma variable se le sumará 1. Después se revisará si `contadorEspacios` es igual al valor del parámetro de entrada `size`, ó si el valor de `i` es mayor o igual al tamaño del arreglo de entrada, si esto no es así continuará con el ciclo de arriba; pero en caso de que una de las dos condiciones se cumpla se reiniciará `contadorEspacios` en cero, se empujará `arrayAux` a `newArray`, y se limpiará `arrayAux`; de esta forma se irá subdividiendo el arreglo de entrada en arreglos del tamaño que se solicita.

## Problema Frequency

### Descripción

Escribir una función `frequency` que recibe un `string` como argumento. Esta función debe contar la frecuencia o el número de veces que se repite cada carácter. El resultado debe mostrarse en un objeto donde las propiedades sean los caracteres, y los valores sean la frecuencia. Los resultados deben ordenarse ascendentemente por los caracteres y no la frecuencia.

### Responsables

- Valeria Jimeno Villegas
- Ernesto Velasco Valdez

### Solución del problema

Inicializamos una variable `objFreq`, donde almacenaremos los caracteres encontrados y su frecuencia. Entonces iteramos la cadena dada, aumentando en uno su frecuencia y registrándola si no se encontrabab en `objFreq`. Tras esto, falta por clasificar en orden alfabético los caracteres dentro de `objFreq`, según lo indicado, objeto que finalmente es retornado.