// PATRONES
// Patrones de diseños:

// Código optimizado par resolver diferentes situaciones preestablecidos y chequeados.

// Mas usado: Patron Modulo

// Primero debemos saber:

// * Objeto literal
// * Funciones Anónimas
// * Funciones autoejecutadas
// * Scope de una función

// Objeto literales:

// ej de objeto literal, no parte de una clase:

var persona = {	nombre: ‘demo’,
			apellido: ‘blabla’, 
			edad: 33,
			obtenerNombre: function() {};
			};

// Funciones Anónimas:

// Funciones que no tienen nombres.
// ej. el array contiene una función en la posición 3

arrayEjemplo[3]();

// Func. Autoejecutadas:

// Se ejecutan en el momento que se declara la función.

// ejemplo de funcion anonima

function() {
	alert('Esto es una funcion anonima');
}

// la encerramos entre parentesis y terminamos con () para ejecutarla
// entonces la funcion pasa a ser ANONIMA Y AUTOEJECUTABLE

(function() {
	alert('Esto es una funcion anonima');
})();

//ejemplo con parametro
// se suele llamar IIFE
(function(mensaje) {

	alert(mensaje);

})('Hola Mundo');


// Ejemplo de funcion sin nombre que devuelve objeto literal sin nombre
// y podemos devolver el objeto a otra variable.

var miModulo = (function() {

	return {nombre: 'juan'}

})()






