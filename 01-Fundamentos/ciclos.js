/* 

    Hay varios tipos de ciclos.

    for (definición, condición ; actualización){
        Código a ejecutar
    }
    Este se utiliza cuando vas a usar un ciclo y conoces su limite. Se utiliza con contadores.

    while
    El ciclo se aplica mientras la condición sea verdadera.

    do while
    Es similar a while pero garantiza que el bloque de código se ejecute al menos una vez. Primero ejecuta el código y luego verifica la condición.

    for in
    Se utiliza para recorrer las propiedades enuberables en un objeto.

    for of
    Se utiliza para recorrer objetos iterales (arrays, strings, mapas, conjuntos, etc.)

*/

// [Código guarda nombres for]

/* let personas = prompt("¿Cuántas personas son?");
personas = Number(personas);
var nombres = [];
for (let c = 1; c <= personas; c++);{
    nombres.push(prompt("Dame el nombre de esas personas"));
    console.log(nombres);
}
alert(nombres);
*/

let contador = 0; //Definición

while (contador != 20); {
    console.log("Minions" + contador);
    contador++;
}

let veces = 5;

while (veces > 2) {
    console.log("veces:" + veces);
    veces--;
}


let numero = 6;
do{
    //Código que se ejecuta al menos 1 vez
    console.log("el numero es:" + numero);
    numero--;
}while(numero<6 && numero>=0);

/* 

    Vamos a recorrer los Arreglos a traves de su índice, podemos obtener el dato a traves de este o hacer algo con el indice.

*/

let colores = ["azul", "morado", "cian"];
// indice        0         1        2

console.log(colores[0]);
colores.push("magenta");

let indice = colores.length;


// Recorre el array con el bucle for
/* 

    for(let i = 0 ; i < indice ; i ++){
        console.log(colores[i]);
    }

*/

/* 

    Bucle for...of

    Es una manera simple y moderna de recorrer arrays en JavaScript.
    Este bucle nos permite acceder a cada indice sin la necesidad de utilizar índices.
    
    Sintaxis:

        for(constante elemento of nombreArray){
            codigo que ejecutas para cada elemento en el array
            }

*/

for(const color of colores){
    console.log(`color: ${color}`);
}

//Ejercicio

let array = [];
let cantidad = prompt("Dime cuantos dulces, tiene que ser la menos uno");{
    for (let i = 1; i <= cantidad; i++);
    array.push(prompt("Pon los dulces que quieres"));
}

for (const dulce of arrat){
    console.log(`dulce: ${dulce}`);
}