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

/* 

  unshift()

  Agrega un elemento al inicio del array.

  nombreArray.unshift(elemento)

*/

console.log(galletasFavoritas);

galletasFavoritas.unshift("Lords")

console.log(galletasFavoritas);

/* 

  shift() - Elimina el primer elemento del array y lo devuelve.

  nombreArray.shift();

*/

console.log(numerosSuerte);

let quitarNumero = numerosSuerte.shift();

console.log(numerosSuerte);
console.log(quitarNumero);

/* 

  indexOf() - Encuentra el indice de un elemento en el array. (Si un dato no está marcará -1)

  nombreArray.indexOf(dato);

*/

let inidiceGalletas = galletasFavoritas.indexOf("Mega galletas");

console.log(inidiceGalletas);

/* 

  splice() - Eliminar o agregar elementos al array desde una posición específica.

  - Eliminar

  nombreArray.splice(inidiceInicio, indiceFinal);

  - Agregar

  nombreArray.splice(inidiceInicio, pasos, valor1, valor2);

*/

console.log(galletasFavoritas);

galletasFavoritas.splice(2, 4);

console.log(galletasFavoritas);


galletasFavoritas.splice(2,0, "Senzo", "Giro");
console.log(galletasFavoritas);

/* 

  slice() - Crear una copia de una porción del array. No modifica el original, se crea un nuevo array.

  nombreArray.slice(indiceInicio, IndiceFinal);

*/


let galletasCopia = (galletasFavoritas.slice(2, 4));

console.log(galletasCopia);

/* 

  sort() - Ordena los elementos de un array de mayor a menor.

  nombreArray.sort() - De primera no pasamos datos entre los paréntesis.

*/

console.log(galletasFavoritas);

galletasFavoritas.sort();

console.log(galletasFavoritas);


console.log(numerosSuerte);

numerosSuerte.sort();

console.log(numerosSuerte);