/* 

  Los tipos de datos se dividen en 2 categorias: Primitivos y Complejos

  1. Tipos de Datos Primitivos

  Datos básicos que no se consideran 'objetos' y no tienen 'métodos'.

  Number = Número

  Representación de valores numéricos ya sea con enteros o con decimales (punto flotante)

  * String o Cadena de Caractéres.

  Se usa para representar texto. El texto se coloca entre comillas dobles o simlpes "Texto" 'Text'.

  *Boolean o Buleanos

  Estos representan un valor lógico qie puede ser 'true' o 'false'

  * Undefined o Indefinido

  Es el valor que se asigna a una varible que ha sido declara pero no inicializada.


  2. Tipo de Datos Complejos.

  * Array = Arreglo

  Es un conjunto de datos que los almacena en una lista odenada de elementos. Los datos dentro de los arreglos se escrbiben entre corchetes [] y separados por coma ,

*/

/* Numbers */

let miNumero = 2;
let miNumeroDecimal = 3.14151692

console.log(miNumero);
console.log(miNumeroDecimal); 

/* Strings */

let miNombre = 'Samuel';
let miNombreApellido = 'Castillo';

console.log(miNombre);
console.log(miNombreApellido)

/* Booleans */

let miVerdad = true;
let miMentura = false;

console.log(miVerdad);
console.log(miMentura);

/* Undefined */

let x; // Declarar una variable sin inicializarla

console.log(x);

x = prompt('¿Cuál es tu número favorito?')

console.log(x); // Valor que el usuario introduzca.

/* Array */

let misVidejuegosFavoritos = ["Halo","Valorant","Apex"];
let misNumerosSuerte = [2, 9, 7];
let otroArray = ["Noble 6", 8, true]

console.log(misVidejuegosFavoritos);
console.log(misNumerosSuerte);
console.log(otroArray);