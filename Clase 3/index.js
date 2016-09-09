// ---- TP 02 -----
// var diaLibre = prompt('Que dia te gustaria estar libre?','Comenzalo en Mayuscula');
// diaLibre = diaLibre.toUpperCase();
// var diasDeLaSemana = ['LUNES','MARTES','MIERCOLES','JUEVES','VIERNES','SABADO','DOMINGO'];



// for(i = 0; i < diasDeLaSemana.length; i++) {
// 	if(i <= 4 && diaLibre === diasDeLaSemana[i]){
// 			alert('Elegiste '+diaLibre+', un dia habil!! BIEN HECHO!');
// 			break;
// 	}else if(i >= 5 && diaLibre === diasDeLaSemana[i]){
// 		alert('Elegiste '+diaLibre+', es fin de semana!! Te recomiendo tomarte el Lunes!!');
// 		break;
// 	}
// }

function mostrarMensajeBienvenida(){
	alert('Bienvenidos a la Web!');
}

function mostrarMensaje(mensaje){
	alert(mensaje);
}

var mensajeBienvenida = 'Bienvenidos';

mostrarMensaje(mensajeBienvenida);

function sumar(operandoA,operandoB){
	alert(operandoA + operandoB);
}

function sumarArray(numeros){

	var resultado = 0;

	for (i = 0; i < numeros.length; i++) {
		resultado = resultado + numeros[i];
	}

	console.log(resultado);

	return resultado;

}

var numerosPrimos = [1,2,3,5,7]
// con esto devuelvo el resultado a una nueva variables

// var resultadoDeSumarPrimos = sumarArray(numerosPrimos);

// Defino Variable Global
var miVariableGlobal = 'Global';

// la puedo usar dentro de una funcion, no al reves
function miFuncion(){
	console.log(miVariableGlobal);
}

miFuncion();

 // ALCANCE LOCAL SOBRE EL GLOBAL
//ejemplo de varible con llamada local y global

var miVariable = 'global';

function miFuncion(){

	var miVariable = 'Local';

	console.log(miVariable);
}

// en el caso de arriba agarra la variable Local antes que la global por el Scope o alcance
// si no agrego el "var miVariable" y uso miVariable = 'local' entonces va a pisar la anterior en este caso la global


// USANDO UNA FUNCION DENTRO DE OTRA FUNCION COMO PARAMETRO

function imprimirPorConsola(){
	console.log('esto imprime por consola');	
}

function imprimirPorPantalla(){
	alert('esto imprime por pantalla');	
}

// pasando funciones como parametros
function imprimir(funcionQueImprime){
	funcionQueImprime();
}

imprimir(imprimirPorPantalla);


// Dato a las funciones: las puedo ejecutar con los caracteres ();

//Self Invoking
//una funcion que se invoca a si mismo sin lanzarla, va entre ()

(function () {
    var x = "Hello!!";      // I will invoke myself
    alert(x) // lanzo el hello automaticamente
})();






