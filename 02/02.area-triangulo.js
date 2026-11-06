//==============================================================
//EJERCICIO 3 -SUMAR 4 VALORES Y RESTAR EL ULTIMO
// Leer 4 valores, sumarlos y a la suma restarle el ultimo valor.
//==============================================================

//Buscamos en HTML los 4 inputs y la caja del resultado (por su id).
const inputPrimero = document.getElementById("base");
const inputSegundo = document.getElementById("altura");
// const inputTercero = document.getElementById("tercerValor");
// const inputcuarto = document.getElementById("cuartoValor");
const cajaResultado = document.getElementById("resultado");

function calcular() {
  //si falta algun valor no se calcula.
  if (inputPrimero.value === "" || inputSegundo.value === "" )
    {cajaResultado.textContent = "Escribe los 2 valores";
    return;
  }


//Lo que se escribe en un input es un texto: Number() lo convierte en un numero.
const base = Number(inputPrimero.value);
const altura = Number(inputSegundo.value);
// const tercerValor = Number(inputTercero.value);
// const cuartoValor = Number(inputcuarto.value);

//const areaTriangulo = (base * altura) / 2;
const areaTriangulo = (base*altura)/2;

// A la suma total se le resta el cuarto valor.
// const resultadoResta = areaTriangulo - cuartoValor;

// Mostrar los resultados en la pagina
cajaResultado.innerHTML =
" area del triangulo es: <b>" + areaTriangulo + "</b><br>";
}
// cada vez que se escribe en cualquiera de los inputs, se vuelve a calcular 
inputPrimero.addEventListener("input", calcular);
inputSegundo.addEventListener("input", calcular);

// inputTercero.addEventListener("input", calcular);
// inputcuarto.addEventListener("input", calcular);