// BUEN EJEMPLO DEL DO WHILE

do{
	// ingresa un nombre
	nombre = prompt('ingrese el nombre del actor o ingrese 0 para salir');
	// si el valor no es 0 agregalo al array
	if(nombre !== '0') {

		this.actores.push(nombre);

	}
	// hacelo mientras nombre no sea 0
}while(nombre !== '0')
