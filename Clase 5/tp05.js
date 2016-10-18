var peliculas = [];

var elPadrino = {	nombre : 'El padrino',
					id : 01 };

var terminator = {	nombre : 'Terminator',
					id : 02 };

var birdman = {	nombre : 'Birdman',
					id : 03 };

var batman2 = {	nombre : 'Batman',
					id : 04 };

var batman = {	nombre : 'Batman',
					id : 05 };



// Funcion que recorre el array, si no se encuentra la pelicula la agrega.

function agregarPelicula(valor1) {

	for(i = 0; i < peliculas.length; i++) {
		
		if(peliculas[i] === valor1) {

			console.log('La pelicula ya fue ingresada previamente');

		}

	}

	peliculas.push(valor1);

}

function ordenarPeliculas() {

	peliculas.sort(function (a, b) {

	//ordenando por nombre
	if (a.nombre > b.nombre) {

    	return 1;
 
  	}
  	//si dos nombres son iguales ordena por id
  	if (a.nombre === b.nombre) {

  		if(a.id > b.id) {

  			return 1;

  		}

  		if(a.id < b.id) {

  			return -1
  		}

  		return 0;

  	}

  	if (a.nombre < b.nombre) {

    	return -1;

  	}

  		return 0;
		
	});

}

function borrarId(valor1) {

	for( i=0 ; i < peliculas.length; i++) {

		if(peliculas[i].id == valor1) {
			// console.log('El id pertenece a la pelicula: '+ peliculas[i].nombre);
			peliculas.splice(i,1);

		}

	}

}



agregarPelicula(terminator);
agregarPelicula(elPadrino);
agregarPelicula(birdman);
agregarPelicula(batman);
agregarPelicula(batman2);
