// crear y llenar Lista de compras
var listaDeCompras = [];

listaDeCompras[3] = 'Tomates';
listaDeCompras[1] = 'Lechuga';

console.log(listaDeCompras);

// Ver un elemento de lista de compras
var elementoDelArray = listaDeCompras[1];
console.log(elementoDelArray);

// Ver length de lista de compras
var elementosDelArray = listaDeCompras.length;
console.log(elementosDelArray);

// PUSH (final) y UNSHIFT (inicio)
var colores = ['Amarillo', 'Azul'];
colores.push('Rojo');
colores.unshift('Verde');

console.log(colores);

// POP (elimina el ultimo) y SHIFT (elimina el primero)
colores.shift();
colores.pop();

console.log(colores);

// INCLUDES
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Dalí');

console.log(existeDali);

// EVERY
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( ( num ) => { num > 5 } );

console.log(cumplenCondicion);

// SPLIT
var palabra = 'Henri';
var palabraSeparada = palabra.split('');

console.log(palabraSeparada);

//Arreglando con pop y push
palabraSeparada.pop();
palabraSeparada.push('y');

console.log(palabraSeparada);

// JOIN
var palabraArreglada = palabraSeparada.join('');

console.log(palabraArreglada);

// FOREACH (no hace cambios y muestra cada uno en una linea)
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } )

// MAP (modifica el arreglo y lo devuelve)
var masUno = numeros.map( (num) => { return num + 1 } );

console.log(masUno);

// existen mas de 40 metodos de arreglos y varios tipos de metodos para casi todo, ejemplo:
// find.Last (encuentra el ultimo elemento de un arreglo, incluso se le pueden agregar condiciones)
const array1 = [5, 12, 50, 130, 44];

const found = array1.findLast((element) => element > 45);

console.log(found);