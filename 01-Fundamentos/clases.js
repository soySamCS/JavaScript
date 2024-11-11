/* 

  Clases

  Una clase en JS es una plantilla para crear objetos.

  Es un forma moderna y natural de trabajar con la programación orientada a objetos.

  Los nombres de las clases se recomienda escribirlas con la primera letra en mayúscula.

  Método Constructor.

  El método constructor es un método especial que se ejecuta automáticamente cuando se crea una nueva instancia de la clase.

  Dentro del método constructor, pasamos las propiedades y valores de la clase.

  Las propiedades pasan como parámetros y luego se asignan "this".

  Sintaxis Básica

    class nombreClase {
      // Método constructor

      constructor(par1, par2) {
        this.par1 = par1;
        this.par2 = par2;<
      }
    }

  Instancia de Clase

    Para crear un objeto usando la clase, se utiliza la palabra 'new', este invoca al constructor de la clase.

  Sintaxis:

    new NombreClase(par1, par2);

    Esta instancia se asigna a una variable o constante.
  
  * Métodos de Clase
      
      Se definen dentro de una clase y se asignan automáticamente en el 'prototipo' del objeto. Estó permite que todas las instancias compartan el mismo método.

      Sintaxis:

        nombreMetodo(parm...) {
         // Código que se ejecuta.
        }
    
*/

// Definir la clase Mascota

class Mascota {
  constructor(nombre, edad){
    this.nombre = nombre; // Propiedad nombre
    this.edad = edad; // Propiedad edad
  }

  saludo(){
    console.log(`¡Hola me llamo ${this.nombre} y tengo ${this.edad} años!`)
  }

}

// Instancear la clase Mascota. Creamo un objeto con la plantilla mascota.

let mascota1 = new Mascota("Pepe", 3);
let mascota2 = new Mascota("Rem", 2);

// Accedemos a los datos de las instancias.

console.log(mascota1.nombre);
console.log(mascota1.edad);

// Lanzar los métodos de los objetos

mascota1.saludo()
mascota2.saludo()