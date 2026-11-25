/* (POO) programacion orientada a objetos.

la POO es un paradigma de programacion que organiza el software en clase y objetos para modelar conceptosdel mundo real. Este enque promueve la reutilizacion del codigo, modularidad y mejor organizacioin del software.
*/

// Crear el objetos Automovil

document.writeln(`creacion de un objeto AUTOMOVIL <br>`);

var Auto = {
  marca: `Toyota`,
  modelo: `corolla`,
  color: `Azul`,
  año: `2026`,
  combustible: `diesel`,
  tipo: `sedan`,
  radio: [`FM`,`MP4`,`USB`],
}

// Acceso a las propiedades. Se utiliza la notacion de punto (Auto.marca) para acceder a las propiedades del objeto.
document.writeln(`<br>`)
document.writeln(`Marca: ${Auto.marca}`, "<br>");

class vehiculos {
  marca= `Toyota`;
  modelo= `corolla`;
  color= `Azul`;
  año= `2026`;
  combustible= `diesel`;
  tipo= `sedan`;
  precio= `$78.285.000`;

// Metodos
// Representan acciones o comportamiento en este caso del vehiculo
acelerar(){
  return `El ${this.marca} acelera de 0 a 100 km/h en tan solo 3 segundos.`;
  }
frenar(){
  return ` El ${this.marca} ${this.modelo}puede frenar de 100 a 0 km/h en tan solo 2.5 segundos`;
  }
}

// Crear un Objeto basado en la Clase Vehiculo.
const ferrari = new vehiculos();
// se declara una constante, luego la palabra reservada NEW que significa que esta creando una nueva instancia de tipo objeto y al colocar el nombre de la clase, para este nuevo objeto tendra a disposicion los atributos y metodos de la clase previamente creada.

// Mostrar las propiedades y metodos del objeto ferrari
document.writeln(`marca: ${ferrari.marca} <br>`);
document.writeln(`modelo: ${ferrari.modelo} <br>`);
document.writeln(`color: ${ferrari.color} <br>`);


document.writeln(`<br>`)
document.writeln(`animales `, "<br>");
document.writeln(`<br>`)
  
class Animal {
  especie= `Herbivoros`;
  Nombre= `Vaca`;
  Color= `Blanca`;
  Alimentacion= `Plantas`;
  

comida(){
  return `El ${this.especie} se alimenta de solo plantas .`;
  }
formaDeComer(){
  return ` El ${this.especie} ${this.nombre}masticar usando su dentadura`;
  }
}

const rumiante = new Animal();

document.writeln(`Especie: ${rumiante.especie} <br>`);
document.writeln(`Nombre: ${rumiante.Nombre} <br>`);
document.writeln(`Alimentacion: ${rumiante.Alimentacion} <br>`);
document.writeln(`Color: ${rumiante.Color} <br>`);


// objeto guepardo
const guepardo = new Animal();
guepardo.Nombre = "guepardo";
guepardo.especie = "Africano";
guepardo.habitad = "Sur sahariano";
guepardo.velocidad = "112 km/h";
guepardo.sonido = "GRAAAAAWRR";

document.writeln(`<h2>${guepardo.Nombre}</h2>`)
document.writeln(`Especie: ${guepardo.especie}<br>`)
document.writeln(`velocidad: ${guepardo.velocidad}<br`)
document.writeln(guepardo.cazar(),`<br>`)
document.writeln(guepardo.rugir(),`<br>`)

document.writeln(`<br>`)

/* herencia Subclase y Metodos */

class Deportistas {
  constructor (nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
  }
}

class futbolista extends Deportistas {
  constructor(nombre, apellido, goles){
    super(nombre, apellido);
    this._goles = goles;
  }


get goles(){
  return this._goles;
  }
set goles(newGoals){
  this._goles = newGoals;
  }
}

let futbolista2 = new futbolista(`Lionel`,`Messi`,`5`);

document.writeln(`<h2>Futbolista: </h2> `)
document.writeln("nombre: ", futbolista2.nombre, "<br>");
document.writeln("apellido: ", futbolista2.apellido, "<br>");
document.writeln("goles: ", futbolista2.goles, "<br>")
