function Auto() {


	this.velocidad = 0;

	// Por convencion con metodos GETTER y SETTER
	// ENCAPSULAMIENTO

	this.setVelocidad = function() {

		this.velocidad = velocidad;

	}

	this.getVelocidad = function() {

		return this.velocidad;

	}

	this.setColor = function(color) {

		this.color = color;
	}

	this.getColor = function() {

		return this.color;

	}
}

// String y arrays

// undefined y null
var miVariable;

// paso a ser string
miVariable = 'hola mundo';


// comparando

var dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
var diaIngresado = prompt('Ingrese un dia de la semana');


for(i = 0; i < dias.length; i++) {

	var diaActual = dias[i];

	if(diaIngresado.toLowerCase() === diaActual.toLowerCase()) {

		console.log('Ingreso un dia correcto');

	}

}


miVariable = 'hola mundo. Que lindo dia';

// indexOf of devuelve la posicion del caracter en el string
// si no lo encontro, devuelve -1

var caracter = 'Q';
posicionQ = miVariable.indexOf(caracter);


// si hay dos q esto muestra la posicion de la ultima q, arranca de la ultima a 0
miVariable.lastIndeOf(caracter);


// Agarra string y busca la palabra en la primera posic y la reemplaza por la de la segunda
miVariable.replace('viejo', 'nuevo');


// devuelve el caracter de la posicion 0
miVariable.charAt(0);
// muestra H

// devuelve porcion del string original
miVariable.substring(inicio, fin);


// busca espacio en este caso en el string, lo quita y el resto lo divide y devuelve en array
miVariable.split(' ');


miArreglo = [1,2,,3,4,5];

//agrega nuevo valor
miArreglo.push(6);
//agrega dos valores
miArreglo.push(7,8);
//puede agregar arrary dentro de array
miArreglo.push(otroArray);


//elimina ultimo elemento del array
miArreglo.pop();

//join devuelve un string con una coma entre los valores
miArreglo.join(,);

//indexof devuelve la posicion del elemento que estas buscando
miArreglo.indexOf(4);

//sort ordena los elementos, por ejemplo si son numeros, de forma ascendente. Puede contener una funcion cambiando el orden
miArreglo.sort();








