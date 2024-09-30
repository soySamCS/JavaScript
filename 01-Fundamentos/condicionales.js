/* 

  Condicionales

  Son estructuras que permiten ejecutar diferentes bloques de código en función de que si una condición (expresión) es verdadera o falsa.

  Estas estructuras controlan el flujo de los programas.

  1. if (si)

  El bloque if se ejecuta solo si la condición es verdadera "true". Si la condición es falsa "false" el código denteo de if se omite.

  if (condición) {
    código que se ejecuta si es verdadera
  }

  2. else -> de lo contrario

  Este bloque ejecuta un código cuando las condiciones anteriores no son verdaderas.

  if(condición) {
    Código que se ejecuta en caso de que la condición sea verdadera
  } else {
    Condición que se ejecuta en caso de que la condición anterior o anteriores sean falsas 
  }

  3. else if -> si no

  Else if nos ayuda a comprobar condiciones adicionales si la condición "if" es falsa. Podemos tener tantos "else if" como necesitemos. Los "else if" se escriben entre el "if" y el "else"

  if (codicional) {
    // código...
  } else if (condicional) {
    // código ejecutar
  } else if (condicional) {
    // codigo ejecutar 
  } else {
    // código
  }

*/

// Sentencia o bloque if

let numero = 10;

if (numero < 4) {
  console.log("Me ejecute porque la condición es verdadera");
} else if (numero > 4) {
  console.log("Me ejecute porque la segunda condición es verdadera");
} else {
  console.log("Me ejecute porque las condiciones anteriores son falsas");
}