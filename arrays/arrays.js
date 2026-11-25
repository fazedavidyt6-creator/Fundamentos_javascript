/* ARRAY o arreglos
Un array es una estructura de datos que permite almacenar una colecion ordena de elemntos; estos elementos pueden ser cadenas de texto, valores numericos, booleanos, entre otros. igualmente podrian ser conjunto de funciones e inclusive otro arrays.
*/

// declaracion de un array vacio
let numeros = [];
// llenar un array con elementos, cada elemento dentro del array se separa por comas.

numeros = [5.4,8,12,16,35,44,2];
document.writeln(`Elementos:`, numeros);
document.writeln(`<br>`);

// un array puede crearse directamente sin ser declarado:
numeros = [5, 10, 15, 20, 25, 30, 35];
document.writeln (`Elementos: `, numeros);
document.writeln(`<br>`);

//visualizar uno o alguno de los elementos del array segun parametro o indice indicado
document.writeln(`Elementos discriminado:`, numeros[3]);
document.writeln(`<br>`);
document.writeln(`Elementos discriminado:`, numeros[0]);
document.writeln(`<br>`);

//cambiar un elemento del array indicando el indice de posicion y/o ubicacion existente  y el avlor del elemento a cambiar.
numeros [3] = 84;
  document.writeln(`cambio de un elemento: `, numeros);
  document.writeln(`<br>-----------------------------`)

  // Array con valores de tipo texto o string
  let frutas = [`manzanas`, `peras`, `Mandarinas`, `Naranjas`, `Kiwi`];
  document.writeln(`Diversas frutas: `, frutas);
  document.writeln(`<br>`)

  //metodos de los array

  // ver la cantidad de elementos 
  document.writeln(`cantidad de elementos del array de frutas: `, frutas.length)
  document.writeln(`<br>`)
  document.writeln(`cantidad de elementos del array de numeros: `, numeros.length)
  document.writeln(`<br>-----------------------------`)
  document.writeln(`<br>`)

  let abecedario = [`A`, `X`,`Z`,`C`,`D`,`B`,`R`,`S`,`W`,`K`,`T`]
  document.writeln(abecedario)
  document.writeln(`<br>`)

    document.writeln(abecedario.sort());//organiza alfabeticamente las letras
    document.writeln(`<br>`);


    // funcion reverse organiza los elementos alfabeticamente pero a la inversa.

    document.writeln(abecedario.reverse()); // organiza alfabeticamente las letras
    document.writeln(`<br>`);