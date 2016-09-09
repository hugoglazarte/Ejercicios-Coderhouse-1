function tuNombre(){
	var nombre = prompt('ingresa tu nombre');
	var apellido = prompt('ingresa tu apellido');
	alert('Bienvenido ' + nombre + ' ' + apellido);
}

tuNombre();


var diasHabiles = ['Lunes','Martes','Miercoles','Jueves','Viernes'];
var finDeSemana = ['Sabado','Domingo'];

function mostrar(valor){
	if(valor == diasHabiles){
		alert(diasHabiles);
	}else if(valor == finDeSemana){
		alert(finDeSemana);
	}

}

console.log(finDeSemana);

// otra forma

var diasDeLaSemana = ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO'];
var elegirDias = Boolean(prompt('Elegir dias de la semana','0 Habiles 1 Fin de semana'));

// Boolean(elegirDias);

// function mostrarDias(valor){

// 	if (valor = false){

// 			for (i = 0; i < diasDeLaSemana[5]; i++) {
// 			console.log(diasDeLaSemana[i]);

// 		}
// 	}else if (valor = true){

// 			for (i = 5; i < diasDeLaSemana[7]; i++) {
// 			console.log(diasDeLaSemana[i]);
// 	}

// }


