/* 

  Son una estrucura de datos que oermite almacenar multiples valores en una sola variable.

  Los elementos dentro del array tienen una posición indice que permite acceder a ellos.

  Los indices de los datos comienzan en 0.
  
  Arrays pueden contener datos de cualquier tipo: números, strings, booleanos, incluso arrays inidanos.

  Sintaxis

  let nombreArray = [ elemento1, elemento2, elemento3 ]

*/

let galletasFavoritas = ["Oreo", "Chokis", "Mega galletas"];
let numerosSuerte = [2, 9, 7, 22, 12];
let meQuiereNoMeQuiere = [false, true, false, true, false];
let misDatos = ["Sam", "Castillo", 22, true];
let anidados = [
  [123, 456, 789] ,
  ["Hurón", "Perro", "Gato"] ,
  [true, false, true]
];

/* 

  array  -> ["Oreo", "Chokis", "Costco"]
  indice ->    0        1          2

  array  -> [ 2,  9,  7,  22,  12 ]
  indice ->   0   1   2    3   4

*/

/* 

  Acceder a los elementos de un array

  Para acceder a un dato usamos la siguiente sintaxis:

  nombreArray[0];


*/

console.log( galletasFavoritas[0] );
console.log( numerosSuerte[3] );
console.log( anidados[1][0] );

/* 

  Modificar los elementos de un array

  Para cambiar el valor de cualquier elemento dentro del array usamos la siguiente sintaxis:

  nombreArray[indice] = nuevoDato

*/

console.log( galletasFavoritas );

galletasFavoritas[1] = "Triki-trakes";

console.log( galletasFavoritas );

/* 

  Métodos útiles para los arrays

  Los métodos son "funciones" que trabajan con los datos de los arrays, su sintaxis es la siguiente:

  1. nombreArray.nombreMetodo
  2. nombreArray.nommbreMetodo(parametro)

*/

/* 

  lenght nos dice cuantos elementos tiene un array

*/

  console.log(meQuiereNoMeQuiere.length);
  console.log(galletasFavoritas.length);
  console.log(anidados.length);

/* 

  push() - Agrega un elemento al final del array.

  nombreArray.push(dato)


*/

console.log(galletasFavoritas);

galletasFavoritas.push("Canelitas");

console.log(galletasFavoritas);

/* 

  pop() - Eliminamos el último elemento del array y lo devuelve.

  nombreArray.pop()

*/

console.log(meQuiereNoMeQuiere);

let meQueireQuitado = meQuiereNoMeQuiere.pop();

console.log(meQuiereNoMeQuiere);

console.log(meQueireQuitado);