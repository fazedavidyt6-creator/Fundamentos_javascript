

let nombre = "karolina"; // variable de tipo string
let cantidad = 55; // variable de tipo entero o int 
let precio = 14889.58; // variable de tipo decimal o float
let verdadero = true; // variable de tipo booleano
let falso = false; // variable de tipo booleno
let nulo = null; // variable tipo nulo

// formas de concatenar o juntar variables y tipos de datos
console.log(nombre + " " + cantidad + " " + precio + " " + verdadero + " " + falso + " " + nulo);
console.log( nombre ," " ,cantidad , " " , precio , " " , verdadero , " " , falso , " " , nulo);
console.log(``);
console.log(
  `su nombre es: ${nombre}, \n
  tiene en este momento ${cantidad} centavos,\n 
  el precio es de: ${precio}, \n
  su apellido de verdad es: ${verdadero},\n 
  y todo esto es: ${falso}, \n
  porque los datos son ${nulo}`);