// EVENTOS
// ONCLICK

function mostrarMensaje() {

	alert('gracias por hacer click aqui');

}

var botonEvento = document.getElementById('evento');

function cambiarTexto() {

	this.setAttribute('value','No hacer click aqui');

}



// OnLoad
// se ejecuta cuando el sitio se termino de cargar

// de esta forma lanzamos un modulo al terminar la cargo del Sitio
window.onload = function() {

	var IMDB = {};
	IMDB.iniciar();

	botonEvento.onclick = cambiarTexto;

}

