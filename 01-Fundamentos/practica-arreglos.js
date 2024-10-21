/* 

  Prácticas arreglos - Liga Superheroes

  1. Definir un arreglo llamado "heroes" que contenga 5 nombres de super hereoes.

  2. Agregar un heroe al final del array.
  
  3. Eliminar el primer heroe.

  4. Cambiamos al tercer hereoe por otro más poderoso.

  5. Ordenar alfabéticamente el array "heroes".

  6. Crear un nuevo array llamado enemigos, con los últimos 3 hereoes del array.

  7. Mostrar por consola los arrays "heroes" y "enemigos".

*/

let heroes = ["Spider-man", "Spwan", "Gambito", "Wolverine", "Quick silver"];



heroes.push("Miles Morales");

heroes.shift();

heroes[2] = "Adam Warlock";

heroes.sort();

let enemigos = heroes.splice(2,5);

console.log(heroes);
console.log(enemigos);