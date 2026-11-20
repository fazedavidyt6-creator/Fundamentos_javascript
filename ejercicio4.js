/* let a, b;

a = 20;
b = 30;

console.log(a == b); // false
console.log(a < b); // true
console.log(a > b); // false 

let pais, edad
pais = prompt("¿de que pais eres?");
edad = prompt("¿que edad tienes?");

if (pais == "colombia" && edad >= 18) {
  document.writeln("eres ciudadano del pais de :", pais);
} else {
  document.writeln("No eres ciudadano del pais de colombia o no eres mayor de edad" );  
}
 */
// El operador !! (DR) se utiliza para evaluar si al menos una de las condiciones es verdadera. 
// si alguna de las condiciones es verdadera, el resultado sera verdadero. por ejemplo:


let i = 1
while (i< 2){ 
let day, month, year;
day = prompt ("ingrese el dia(1-31):")
month = prompt ("ingrese el mes (1-12):")
year = prompt ("ingrese el año (por ejemplo, 2023):");

//convertir los valores ingresados a numeros 
day = parseInt(day);
month = parseInt(month);
year = parseInt (year);

//validar si el dia, mes y año son validos

if (isNaN(day)  || isNaN(month)  || isNaN(year)) {
  document.writeln("ingrese solo numeros")
} else if (month == 1 || month ==2 || month == 3){
  document.writeln("Pertenece al primer trimestre del año")
} else{
  document.writeln("No pertenece al primer trimestre del año")
}
i++;
}
