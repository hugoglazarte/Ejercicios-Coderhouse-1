var diaLibre = prompt('Que dia te gustaria estar libre?','...ingresalo aqui...');
diaLibre = diaLibre.toUpperCase();
var diasDeLaSemana = ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO'];



for(i = 0; i < diasDeLaSemana.length; i++) {
	if(i <= 4 && diaLibre === diasDeLaSemana[i]){
		alert('Elegiste '+diaLibre+', un dia habil!! BIEN HECHO!');
		break;
	}else if(i >= 5 && diaLibre === diasDeLaSemana[i]){
		alert('Elegiste '+diaLibre+', es fin de semana!! Te recomiendo tomarte el Lunes!!');
		break;
	}
}
