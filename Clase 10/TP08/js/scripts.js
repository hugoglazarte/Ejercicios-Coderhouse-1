function Pelicula(id, titulo, descripcion, imagen) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

}

var Imdb = (function () {

    // Atributos privados
    var peliculas = [];
	var claveLocalStorage = 'peliculas';


	// Metodos
    var precargarPeliculas = function () {
		
        var datos = localStorage.getItem(claveLocalStorage);

        if (datos !== null && datos !== '') {

            peliculas = JSON.parse(datos);
			
			for (i = 0; i < peliculas.length; i++) {
				
				dibujarPelicula(peliculas[i]);
				
			}

        }

    }

    var guardarPeliculas = function () {

        var datos = JSON.stringify(peliculas);
        localStorage.setItem(claveLocalStorage, datos);

    }
	

    var agregarTexto = function (elemento, texto) {

        var nodoTexto = document.createTextNode(texto);
        elemento.appendChild(nodoTexto);

        return elemento;

    }

    var dibujarPelicula = function (pelicula) {

        var ul = document.getElementById("peliculas");

		// Creando Elementos HTML de cada Pelicula
        var li = document.createElement("li");
        var h3 = document.createElement('h3');
        var img = document.createElement('img');
        var p = document.createElement('p');
        var but = document.createElement('button');
        var butTxt = document.createTextNode('Borrar Pelicula');

        // Atributos de cada element HTML de peliculas
        li.setAttribute('id', pelicula.id);
        li.setAttribute('class', 'list-group-item'); // Bootstrap

        // Atributos para Tag Img
        img.setAttribute('class', 'img-thumbnail')

        //seteo atributos del button
        but.setAttribute('id','boton-ID-'+pelicula.id);
        but.setAttribute('class', 'btn-borrar btn btn-default');
        but.setAttribute('style','display:block;');


        but.onclick = function () {
        	// debugger;
        	var idBoton = this.getAttribute('id');
        	var temp = idBoton.split('-'); //cortar el caracter en pedazos, dividiendolos por el caracter -

        	var peli = {id: parseInt(temp[2])};
        	eliminarPelicula(peli);

        }

        but.appendChild(butTxt);

		// Agregamos contenido a los elementos HTML
        h3 = agregarTexto(h3, pelicula.titulo);
        p = agregarTexto(p, pelicula.descripcion);
        img.setAttribute('src',  pelicula.imagen);

		// Appends de los elemento
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(img);
        li.appendChild(but);

		// Por ultimo 
        ul.appendChild(li);

    }

    /*
		Borra del DOM la noticia pasada como parametro
	 */
    var borrarPeliculaDOM = function (pelicula) {

        var ul = document.getElementById("peliculas");
        var li = document.getElementById(pelicula.id);

        ul.removeChild(li);

    }


    var existePelicula = function (pelicula) {

        var posicion = -1; 
        
        for(i = 0; i < peliculas.length && posicion === -1; i++) { 

            if (peliculas[i].id === pelicula.id) { 
                
                posicion = i; 

            }

        }

        return posicion;

    }

    // Buscando posicion del objeto en array
    var buscarPosicion = function (pelicula) {

        var posicionEnArray = -1; 
        
        for(i = 0; i < peliculas.length && posicionEnArray === -1; i++) { 

            if (peliculas[i].id === pelicula.id) { 
                
                posicionEnArray = i; 

            }

        }

        return posicionEnArray;

    }

    var agregarPelicula = function (pelicula) {

        var posicion = existePelicula(pelicula);

        if (posicion === -1) {

            peliculas.push(pelicula);

            guardarPeliculas();

            dibujarPelicula(pelicula);

            borrarFormulario();

            alert('La Pelicula se cargo exitosamente!');

        }  else {

            alert('La pelicula con id: ' + pelicula.id + ' ya existe');

        }

    }

    var eliminarPelicula = function (pelicula) {

        var posicion = buscarPosicion(pelicula);

        if (posicion > -1) {

            peliculas.splice(posicion, 1);

            guardarPeliculas();

            borrarPeliculaDOM(pelicula);

        } else {

            alert('La pelicula con id: ' + pelicula.id + ' no existe');

        }

    }


    var limpiarImdb = function () {

		peliculas = []; // inicializo el array vacio
		localStorage.removeItem(claveLocalStorage);
		
		var peliculasDOM = document.getElementById("peliculas");
		
		while (peliculasDOM.firstChild) {
			peliculasDOM.removeChild(peliculasDOM.firstChild);
		}
		
	}

	var limpiarPeliculas = function () {

		var peliculasDOM = document.getElementById("peliculas");
		
		while (peliculasDOM.firstChild) {
			peliculasDOM.removeChild(peliculasDOM.firstChild);
		}

	}


	var generarNuevoId = function () {
		
		var mayorID = -1;

		for(i = 0; i < peliculas.length; i++) { 

			if (peliculas[i].id > mayorID) { 
                
            	mayorID = peliculas[i].id;
            }

        }

        return ++mayorID;

	}

	var vincularFormulario = function () {


		var boton = document.getElementById("boton");
		boton.onclick = crearPelicula;


	}

	var vincularBotonMostrar = function () {


		var botonMostrar = document.getElementById("boton-mostrar");

		function recargarFormu() {

			limpiarPeliculas();
			precargarPeliculas();

		}

		botonMostrar.onclick = recargarFormu;


	}

	var crearPelicula = function () {

		var titulo = document.getElementById("titulo").value;

		var descripcion = document.getElementById("descripcion").value;

		var imagen = document.getElementById("imagen").value;

		var nuevoID = generarNuevoId();

		var nuevaPelicula = new Pelicula(nuevoID, titulo, descripcion, imagen);

		agregarPelicula(nuevaPelicula);


	}

	var borrarFormulario = function () {

		// var campoString = String(campo);
		// document.getElementByClassName("form-control").value = '';

		var elementosFormu = document.getElementsByClassName("form-control");

		for(i=0 ; i < elementosFormu.length ; i++) {

			document.getElementsByClassName("form-control")[i].value = '';

		}

	}

	var vincularOrdenamientos = function () {

		var ordenID = document.getElementById("ordenamiento_id");

		function ordenarPorID() {

			peliculas.sort(function (a, b) {

			//ordenando por nombre
			if (a.id > b.id) {

		    	return 1;
		 
		  	}

		  	if (a.id < b.id) {

		    	return -1;

		  	}

		  		return 0;
				
			});

			guardarPeliculas();
			limpiarPeliculas();
			precargarPeliculas();


		}

		ordenID.onclick = ordenarPorID;


		var ordenNombreAz = document.getElementById("ordenamiento_az");

		function ordenarPorAz() {

			peliculas.sort(function (a, b) {

			//ordenando por nombre
			if (a.titulo > b.titulo) {

		    	return 1;
		 
		  	}

		  	if (a.titulo < b.titulo) {

		    	return -1;

		  	}

		  		return 0;
				
			});

			guardarPeliculas();
			limpiarPeliculas();
			precargarPeliculas();


		}

		ordenNombreAz.onclick = ordenarPorAz;


		var ordenNombreZa = document.getElementById("ordenamiento_za");

		function ordenarPorZa() {

			peliculas.sort(function (a, b) {

			//ordenando por nombre
			if (a.titulo > b.titulo) {

		    	return -1;
		 
		  	}

		  	if (a.titulo < b.titulo) {

		    	return 1;

		  	}

		  		return 0;
				
			});

			guardarPeliculas();
			limpiarPeliculas();
			precargarPeliculas();


		}

		ordenNombreZa.onclick = ordenarPorZa;


	}

	var iniciar = function () {

		vincularFormulario();

		vincularOrdenamientos();

		vincularBotonMostrar();

		// precargarPeliculas();

	}


    var obtenerPeliculas = function () {

    	return peliculas;

    }


    return {

		iniciar: iniciar,

    };

})()


window.onload = function() {

	Imdb.iniciar();

}
