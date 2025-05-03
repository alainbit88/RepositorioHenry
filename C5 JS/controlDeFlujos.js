function viajar (destino) {
    if (destino === 'brazil') {
        console.log('gire a la izquierda');
    } else if (destino === 'argentina') {
        console.log('gire a la derecha');
    } else {
        console.log('Nos perdimos');
    }
}

viajar('Cuba');

function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } 
    console.log( false );
  }
  
  puedeManejar(17);