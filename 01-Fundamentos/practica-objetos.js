/* 

    Practica Clases y Objetos

    1. Crar una clase llamada Arma

        Debe tener las siguientes propiedades en su constructor:
            
            * nombre (string): nombre del arma.
            * tipo (string): tipo de arma (ej. "espada", "pistola", "arco")
            * daño (número): cantidad de daño que puede causar.

        Agregar un método llamado describir que imprima en consola:

            'Arma: Galadhrim | Tipo: Arco | Daño: 40'

    2. Crear un objeto llamado arsenal que contenga:

        * Una propiedad armas que sea un array vacío.
        * Un método agregarArma que recibe un arma como parámetro y la agrega al array armas.
    
    3. Instancias Armas:
        
        * Crear tres armas usando la clase Arma con diferentes valores para nombre, tipo y daño.

    4. Agregar las armas al Arsenal

        * Usa el método agragarArma del objeto arsenal para agragar cada una de las armas al array armas.

    5. Muestra la descripción de las Armas:

        * Usa un bucle for para agragar recorrer el array armas dentro del objeto arsenal.

        * En cada interación, llama al método describir de cada arma para sus detalles en la consola.

*/

class arma {
    constructor(nombre, tipo, daño){
        this.nombre = nombre
        this.tipo = tipo
        this.daño = daño
    }

    describir(){
        console.log(`Arma: ${this.nombre} | Tipo: ${this.tipo} | Daño: ${this.daño}`);
    }
}

let arma1 = new arma("Frostmourne", "Espada", 9999999)
let arma2 = new arma("Martillo del alba", "Martillo", 8999)
let arma3 = new arma("Espadad de energía", "Arma alien", 44222)
let arma4 = new arma("Magnum", "Pistola", 42)

let arsenal = {
    armas: [],

    agregarArma : function(arma) {
        this.armas.push(arma);
    }
}

arsenal.agregarArma(arma1);
arsenal.agregarArma(arma2);
arsenal.agregarArma(arma3);
arsenal.agregarArma(arma4);

for (let i = 0; i < arsenal.armas.length; i++){
    arsenal.armas[i].describir();
}
