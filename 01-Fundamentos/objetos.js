/* 

    Objetos

        Es una coleccion dde propiedades y métodos.

        Las propiedades describen las carecterísticas del objeto.

        Los métodos describen loa comportamientos del objeto.

        Los objetos pueden contener distintos tipos de datos: strings, numbers, arrays, booleans, "undefined", otros objetos e incluso funciones.

    Sintaxis:

        let nombreArray = []; -> Diferencia

        Let nombreObjeto = {
            //Propiedades y Métodos
        };

     Propiedades de un objeto se escirben en pares "clave" : "valor"

        Let nombre = "Sam" // Esta es una vairable

        nombre : "Sam" // Esta es una propiedad

    Las propiedades de un objeto se separan por comas "," después del valor.

    Las claves de las propiedades pueden tener más de una palabra pero se deberá escribir entre comillas dobles "" o simples ''

        "nombre real" = "Sam",

    También se pueden escribir en formato Camel Case y sin comillas.

        nombreReal = "Sam",

*/

let personaje = {
    nombre : "DerckJack",
    edad : 23,
    residencia: "Vashir",
    poderes: false,
    habilidadesHumanas : ["Inteligencia superior", "fuerza sobrehumana", "súper velocidad"]
}

/* 

    Accedemos al valor de las propiedades del objeto.

*/

console.log (personaje.nombre);
/* console.log (personaje["habilidades humanas"][2]); */
console.log(personaje.habilidadesHumanas[1]);

/* Agregar y quitar propiedades de objetos */

personaje.enemigos = ["Surtur", "Jonmungander"];

delete personaje.poderes; // Borrar una propiedad.

/* 

    Anidamos objetos

        Nombramos al objeto anidado y lo definimos con las llaves {} - Dentro de las llaves se declaran las propiedades en pares "clave" : "valor"

    Métodos

        Un método es una función que se define como propiedad de un objeto.

        Sintaxis:

            nombreClave : function(parámetros) {
                //código que se ejecuta
            }
        
        this
        
            Es una palabra reservada que se refiere al objeto para acceder a sus propiedaes del mismo.

*/

let mascota = {
    nombre : "Pancho",
    tipo : "Hurón",
    edad : 2,

    //Objeto anidado
    fisico : {
        estatura: 38,
        peso : 1.2,
        color : "marrón"
    },

    //Declaramos un método
    saludo : function(amo) {
        // Código que se ejecuta al invocar la función
        alert(`Hola soy un hurón parlanchín, me llamo ${this.nombre} y mi amo es ${amo} 😎`);
    }
}

console.log(mascota.fisico.color);
console.log(mascota.fisico.estatura);
console.log(mascota.fisico.peso);

mascota.fisico.colorOjos = "Marrón Obscuro"; // Agregar

delete mascota.fisico.color; // Eliminar

/* Accedemos al método saludo del objeto mascota */

mascota.saludo("Sam");