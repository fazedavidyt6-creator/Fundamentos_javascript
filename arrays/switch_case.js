/* Condicional switch Case

El SWITCH es una estructura de control utilizada para tomar deciciones basadas en el valor de una expresion 
es util cuando se desea comparar un mismo valor con multiples casos posibles y ejecutar un bloque de codigo segun el caso coincida.
*/

let valor;
valor = parseInt(prompt(`ingrese valores numericos entre 1 y 3`));

switch (valor) {
  case 1:
    document.writeln(`usted ingreso el numero: `, valor);
    break;
  case 2:
    document.writeln(`usted ingreso el numero: `, valor);
    break;
  case 3:
    document.writeln(`usted ingreso el numero: `, valor);
    break;

  default:
    document.writeln(`El numero esta afuera del rango o no es un numero valido`);
    break;
}

document.writeln(`<br>`)

let color;
color = prompt(`ingrese uno de estos colores: Rojo, Verde o Azul`);
switch (color) {
  case `Rojo`:
    document.writeln(`usted ingreso el numero: `, color);
    break;
  case `Verde`:
    document.writeln(`usted ingreso el numero: `, color);
    break;
  case `Azul`:
    document.writeln(`usted ingreso el numero: `, color);
    break;

  default:
    document.writeln(`El color esta afuera del rango o no es un color valido`);
    break;
}