/* 

  Ejemplo con if / else

  1. Declaramos una variable edad y le asignamos un valor numérico.
  2. Comprobamos si edad es igual o mayor que 18, mostramos el mensaje: "¡Eres mayor de edad! 🤩"
  3. Si edad no es mayor que 18, mostramos el mensaje: "Eres un bebé 😴"

*/

/* let edad = 22;

if (edad >= 18) {
  console.log("¡Eres mayor de edad! 🤩");
} else {
  console.log("Eres un bebé 😴");
} */

/* 

  El operador ternario es una forma más consisa de escribir una condición if / else-
  
  Trabaja con tres operadores:

  1. Una condición
  2. La expresión si la condición es verdadera.
  3. La expresión si la condicion es falsa.

  Sintaxis:

  condición ? expresionSiVerdadera : expresionSiFalsa

*/

let edad = 23;

let resultado = edad >= 18 ? "¡Eres mayor de edad! 🤩" : "Eres un bebé 😴";

console.log(resultado);