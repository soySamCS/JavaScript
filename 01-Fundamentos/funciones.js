/* 

  Funciones

    Bloques de código reutilizables, ya que realizan una tarea específica.

    En lugar de escribir el mismo código una y otra vez, podemos definir una función una sola vez y usarla siempre que necesitemos.

  Conceptos de las funciones

    * Defiinr: Creamos la función con un nombre y los datos que llamamos parámetros. (Opcionales)

    * Invocan: Llamamos la fucnión cuando queremos que ejecute su código, es decir que haga su tarea.

    * Retornan: Puede devolver un resultado la función. (Opcional) 'return'

  Sintaxis

    function nombreFuncion(param1, param2) {
      // Código que se va a ejecutar.
      return resultado;
    }

    function -> es la palabra clave para declarar una función.

    nombreFuncion -> El nombre que le asignamos a la fucnión. Es es el nombre lo usamos para invocarla.

    param1, param2 ... -> Son los datos que le pasamos a la función para que trabaje con ellos en su bloque de código. (opcional)

    Cuerpo de la función -> El código que se ejecuta y realiza la tarea de la función.

    return -> Devuelve o retorna un resultado. (opcional)

*/

function salutation() {
  console.log("Salutations program")
}

/* salutation(); */

function salutationCustom(name) {
  console.log(`Salutations ${name} welcome to Tron`)
}

/* salutationCustom("Program");
salutationCustom("CLU");
salutationCustom("Kevin Flyn"); */

function sumar(a, b) {
  return a + b
}

let resultado = sumar(10, 20);

console.log(resultado * 5);