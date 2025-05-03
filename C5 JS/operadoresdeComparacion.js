//Operaciones de comparación
console.log ('1 ' + (4 < 7)); 
console.log ('2 ' + (4 < 1 ));
console.log ('3 ' + (4 > 4)); 
console.log ('4 ' + (4 == 7));
//Igualdad vs igualdad estricta 
console.log ('5 ' + (3 == 3)); 
console.log ('6 ' + (3 === 3)); 
console.log ('7 ' + (3 == "3")); 
console.log ('8 ' + (3 === "3"));
console.log ('9 ' + (7 == "7"));
console.log ('10 ' + (7 === "7"));
//Asignación y asociatividad
var a = 1;
var b = 2;
var c = a = b;
console.log (c); 