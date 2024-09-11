/* 
  Variables

  Las variables son contenedores que almacenan datos.

  Las variables se declaran usando las palabras reservadas:

  var -> Forma tradicional, pero ya no se recomienda.
  let - Forma moderna, es la recomendada.
  const -> El dato almacenado no puede cambiar.

  Para declarar una variable:

  var [nombreVariable] = [valor];

*/

var nombre = 'Sam Castillo';
let edad = 22;
const vivo = true;

console.log(nombre);
console.log(edad);
console.log(vivo);

/* 
  Las caribles declaradas con 'var' y 'let' pueden cambiar a lo largo del código, simpre y cuando su alcance lo permita.

  Las varialbles declaradas con 'const' no pueden cambiar.
  Si lo intentan sale un error.

  Para cambiar el valor de una variable_
  [nombreVariable] = [Nuevo valor]
  
*/

nombre = "DerckJack";
edad = 26;
/* vivo = false; */

// Mostrar nuevos datos.
console.log(nombre);
console.log(edad);