/* 

  Instrucciones condicionales if / else / else if

  1. Crear una variable día y asignarle un valor numérico.
  2. Con las sentecias if / else / else if, evalar el valor de la variable día con las siguientes condiciones:

  - dia == 1 // lunes
  - dia == 2 // martes
  - dia == 3 // miércoles
  - dia == 4 // jueves
  - dia == 5 // viernes
  - dia == ? // Día no válido


*/

/* let dia = 2;

if (dia === 1) {
  console.log("Lunes");
} else if (dia === 2) {
  console.log("Martes")
} else if (dia === 3) {
  console.log("Miércoles")
} else if (dia === 4) {
  console.log("Jueves")
} else if (dia === 5) {
  console.log("Viernes")
} else {
  console.log("Día no valido");
} */


/* 

  Switch

  Es una estructura de control de flujo condicional, pero se utiliza cando tenemos multiples casos posibles para evaluar una expresión.

  Es más eficiente y elegible en situaciones donde se requiere comprobar una sola varible con varios valores posibles.

  Sintaxis;

  switch (expresión) {
    case valor1:
      // Código que se ejecuta
      break;
    case valor2:
      // Código que se ejecuta
      break;
    case valor3:
      //Código que se ejecuta
      break;
    default:
      //Código que se ejecuta por default
  }

*/

/* let dia;
dia = parseInt(prompt("Dime un día del 1 al 5"))

switch (dia) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles")
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  default:
    console.log("Día no valido")
} */

/* 

  Ejercicio Switch
  
  1. Crear una variable pokemón y asignarle un valor en string con el nombre de un pokemón.

*/

let pokemon;
pokemon = prompt("Escribe Pikachu/Mimikyu/Eevee/Rayquaza/Mareep para conocer la información de ese pokemón");

switch (pokemon) {
  case "Pikachu":
    console.log("Tu pokemón es Pikachu y es de tipo eléctrico.");
    break;
  case "Mimikyu":
    console.log("Tu pokemón es Mimikyu y es de tipo fantasma.")
    break;
  case "Eevee":
    console.log("Tu pokemón es Eevee y es de tipo normal.");
    break;
  case "Rayquaza":
    console.log("Tu pokemón es Rayquaza y es de tipo dragón/volador.")
    break;
  case "Mareep":
    console.log("Tu pokemón es Mareep y es de tipo eléctrico");
    break;
  default:
    console.log("Checa bien las instrucciones 😛")
}