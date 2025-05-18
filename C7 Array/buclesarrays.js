// FOR de forleach
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

// FOR para encontrar letra en string
function encontrarLetraP(string){
    var letras = string.split('');

    for (let i = 0; i < letras.length; i ++) {
        if (letras[i] === 'p') {
            console.log('Si contiene a P');
        }
    }
}
encontrarLetraP('javascript');
encontrarLetraP('henry');

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Alain');
}
console.log(arr);

// Cuidado Bucle Infinito:
//var arr = [];
//var n = 1;

//while (n < 3) { //Mientras n sea menor que 3 (como n es = a 1 siempre va a ser menor que 3)
//    arr.push(Math.random()); // agregar un numero aleatorio al array (el arreglo se vuelve infinito)
//}

// para arrwglar el ejemplo anterior se debe usar un while con length para determinar la cantidad de veces
// que queremos poner un numero aleatorio
var aleatorio = [];
while (aleatorio.length < 10) {
    aleatorio.push(Math.floor(Math.random() * 100) + 1);
}
console.log(aleatorio);
