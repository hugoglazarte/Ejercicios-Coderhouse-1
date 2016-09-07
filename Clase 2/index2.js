var tuFranco = prompt('Ingresa tu franco laboral : ');
// var diaLunes = 'Lunes';
// var diaJueves = 'Jueves';
var diasDeLaSemana = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];

// for(posicion = 0; posicion < diasDeClase.length; posicion++) {
// 	if(diasDeClase[posicion] === 'Lunes'){
// 		alert('hoy es Lunes!');
// 	}else if(diasDeClase[posicion] === 'Jueves'){
// 		alert('hoy es Jueves!');
// 	} console.log(diasDeClase[posicion]);
// }

// switch (tuFranco) {
// 	case diasDeLaSemana[0]: // los dos puntos indican hacer algo
// 		alert('Hoy es Lunes, felicitaciones es tu Franco Laboral'); // hace esto
// 		break; //si lo hiciste o se dio la condicion corta con break
// 	case diasDeLaSemana[1]:
// 		alert('Hoy es Martes, felicitaciones es tu Franco Laboral');
// 		break;
// 	default: //si no comprueba ninguno entra por default
// 		// hayClase = false;
// 		break;
// }

for(i = 0; i < diasDeLaSemana.length; i++) {
	if(diasDeLaSemana[i] < 4 && tuFranco == diasDeLaSemana[i]){
			alert('Hoy es '+tuFranco+', tu franco');
	}
	// alert('Hoy es '+diasDeLaSemana[i]+', lo siento! a trabajar!');
}
