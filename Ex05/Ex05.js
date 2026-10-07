// Operadores matematicos

let a, b;
let suma, resta, mult, div, residuo, potencia;

//Obtener los datos a traves del usuario
a = prompt('ingrese un numero: ');
b = prompt('ingrese otro numero: ');

// Resultados de las operaciones
suma = Number(a) + Number(b); // Aqui la operacion da un error debido a que se concatenan los datos
document.write("la suma es : ", suma, "<br>");
console.log("la suma es: ", suma);

resta = a - b;
document.write("la resta es: ", resta,"<br>");
console.log("la resta es: ", resta);

mult = a * b;
document.write("La multiplicación es: ", mult, "<br>");
console.log("La multiplicación es: ", mult);

residuo = a % b;
document.write("El residuo es: ", residuo, "<br>");
console.log("El residuo es: ", residuo);

potencia = a ** b;
document.write("La potencia es: ", potencia, "<br>");
console.log("La potencia es: ", potencia);

let c, d;

//Obtener los datos a trraves del usuario
c = parseInt(prompt('ingrese un numero: '));
d = parseInt(prompt('ingrese otro numero: '));

suma = c + d
resta = c - d
mult = c * d
div = c / d
residuo = c % d
potencia = c ** d

document.writeln("Los resultados de las operaciones son : ", 
  "Suma: ", suma, '<br>',
  "<br>",
  "Resta: ", resta, '<br>',
  "Multiplicacion: ", mult, '<br>',
  "Division: ", div, '<br>',
  "Residuo: ", residuo, '<br>', 
  "potencia: ", potencia, '<br>', 
);

console.log("Las operaciones resueltas son : ", 
  "Suma: ", suma, 
  "Resta: ", resta, 
  "Multiplicacion: ", mult,
  "Division: ", div, 
  "Residuo: ", residuo,
  "potencia: ", potencia,  
);
