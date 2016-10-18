function Noticia(id, titulo, descripcion, imagen) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

}

var Diario = (function () {

    // Atributos privados
    var noticias = [];
	var claveLocalStorage = 'noticias';

    /*
        Permite precargar las noticias por localstorage
    */
    var precargarNoticias = function () {
		
        var datos = localStorage.getItem(claveLocalStorage);

        if (datos !== null && datos !== '') {

            noticias = JSON.parse(datos);
			
			for (i = 0; i < noticias.length; i++) {
				
				dibujarNoticia(noticias[i]);
				
			}

        }

    }

    /*
        Guarda el array de noticias en localstorage
    */
    var guardarNoticias = function () {

        var datos = JSON.stringify(noticias);
        localStorage.setItem(claveLocalStorage, datos);

    }
	
	/*
		Agrega el texto al elemento utilizando un nodoTexto
		Retorna el elemento con el nodoTexto agregado
	 */
    var agregarTexto = function (elemento, texto) {

        var nodoTexto = document.createTextNode(texto);
        elemento.appendChild(nodoTexto);

        return elemento;

    }

    /*
		Dibuja en el DOM la noticia pasada como parametro
	 */

	 // EJERCICIO
	 // Hay que agregar un boton para eliminar la noticia
	 // El evento onclick del boton debera hacer referencia a una funcion que busque el parent de ese boton
    var dibujarNoticia = function (noticia) {
    	// debugger;
		// Se obtiene el elemento padre que nos servira para agregar los elementos hijos
        var ul = document.getElementById("noticias");

		// Se crean todos los elementos que necesitaremos para dibujar la noticia (li, h3, img, p)
        var li = document.createElement("li");
        var h3 = document.createElement('h3');
        var img = document.createElement('img');
        var p = document.createElement('p');
        // dibujando el boton borrar-noticia
        var but = document.createElement('button');
        var butTxt = document.createTextNode('Borrar Noticia');

		// Se asignan los atributos id y class al elemento li creado anteriormente
		// El id del li es el id de la noticia. Nos servira para luego, de ser necesario, borrarla
        li.setAttribute('id', noticia.id);
        li.setAttribute('class', 'list-group-item'); // Bootstrap

        //seteo atributos del button
        but.setAttribute('id','boton-ID-'+noticia.id);
        but.setAttribute('class', 'btn-borrar btn btn-primary');
        but.setAttribute('style','display:block;');
        // but.setAttribute('onclick','eliminarNoticia('+noticias[noticia.id]+');');

        but.onclick = function () {
        	debugger;
        	var idBoton = this.getAttribute('id');
        	var temp = idBoton.split('-');//cortar el caracter en pedazos, dividiendolos por el caractar -

        	var noti = {id: parseInt(temp[2])};
        	// buscarPosicion(noti);
        	eliminarNoticia(noti);

        }

        but.appendChild(butTxt);

		// Se agrega el texto al h3 y p a partir del titulo y la descripcion respectivamente
        h3 = agregarTexto(h3, noticia.titulo);
        p = agregarTexto(p, noticia.descripcion);

		// Se asigna el source de la imagen (src) a partir del atributo imagen de la noticia
        img.setAttribute('src',  noticia.imagen);

		// Appends de los elementos h1, p, img en li
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(img);
        li.appendChild(but);

		// Por ultimo se hace append del li en ul
        ul.appendChild(li);

    }

    /*
		Borra del DOM la noticia pasada como parametro
	 */
    var borrarNoticiaDOM = function (noticia) {

        var ul = document.getElementById("noticias");
        var li = document.getElementById(noticia.id);

        ul.removeChild(li);

    }

    // Si la noticia existe en el array de noticias devuelve la posicion donde se encuentra (0, 1, 2, etc.)
    // En caso contrario devuelve -1;
    var existeNoticia = function (noticia) {

        var posicion = -1; 
        
        // La condicion del for lee: 'Mientras haya elementos en el array de noticias por recorrer y la posicion sea -1
        for(i = 0; i < noticias.length && posicion === -1; i++) { 

            if (noticias[i].id === noticia.id) { 
                
                // Si los ids coinciden me guardo el contenido de la variable i en la variable posicion
                posicion = i; 

            }

        }

        return posicion;

    }

    var buscarPosicion = function (noticia) {

    	// debugger;
        var posicionEnArray = -1; 
        
        // La condicion del for lee: 'Mientras haya elementos en el array de noticias por recorrer y la posicion sea -1
        for(i = 0; i < noticias.length && posicionEnArray === -1; i++) { 

            if (noticias[i].id === noticia.id) { 
                
                // Si los ids coinciden me guardo el contenido de la variable i en la variable posicion
                posicionEnArray = i; 

            }

        }

        return posicionEnArray;

    }

    var agregarNoticia = function (noticia) {

        // Validacion de que no exista la noticia en el array de noticias
        // Validacion de que lo que me pasen sea una noticia. // Opcional

        // Las noticias con diferente id se podran insertar en el array noticias
        var posicion = existeNoticia(noticia);

        if (posicion === -1) {

            noticias.push(noticia);

            guardarNoticias();

            dibujarNoticia(noticia);

        }  else {

            alert('La noticia con id: ' + noticia.id + ' ya existe');

        }

    }

    var eliminarNoticia = function (noticia) {

        // var posicion = existeNoticia(noticia);
        var posicion = buscarPosicion(noticia);

        if (posicion > -1) {

            // Borra 1 elemento desde la posicion
            noticias.splice(posicion, 1);

            guardarNoticias();

            borrarNoticiaDOM(noticia);

        } else {

            alert('La noticia con id: ' + noticia.id + ' no existe');

        }

    }

    // FUNCION BORRAR ///////////

    // var borrarPorBoton = function() {

    // 	var btnBorrar = document.getElementById('boton-ID-0');

    // 	btnBorrar.onclick = console.log('hiciste click');
    // }



    //	var btnBorrar = document.getElementsByClassName('btn-borrar');

    

    /////////////////////////

    var limpiarDiario = function () {

		noticias = []; // inicializo el array vacio
		localStorage.removeItem(claveLocalStorage);
		
		var noticiasDOM = document.getElementById("noticias");
		
		while (noticiasDOM.firstChild) {
			noticiasDOM.removeChild(noticiasDOM.firstChild);
		}
		
	}

	var limpiarPrueba = function () {

		var noticiasDOM = document.getElementById("noticias");
		
		while (noticiasDOM.firstChild) {
			noticiasDOM.removeChild(noticiasDOM.firstChild);
		}

	}

	

	// EJERCICIO
	// Busca en el array de noticias la noticia con el id mas grande y devuelve ese id incrementado en una unidad.	
	var generarNuevoId = function () {
		
		// EJERCICIO
		var mayorID = -1;

		for(i = 0; i < noticias.length; i++) { 

			if (noticias[i].id > mayorID) { 
                
            	mayorID = noticias[i].id;
            }

        }

        return ++mayorID;

	}

	// EJERCICIO
	// Vincular el evento onclick del elemento con id boton a una function que llamaremos crearNoticia
	var vincularFormulario = function () {


		var boton = document.getElementById("boton");
		boton.onclick = crearNoticia;


	}

	// EJERCICIO
	// Tomara los valores (objeto.value) de los objetos DOM con id titulo, descripcion, imagen
	// Con esos valores se creara una noticia y se llamara a agregarNoticia(noticia)
	var crearNoticia = function () {

		var titulo = document.getElementById("titulo").value;

		var descripcion = document.getElementById("descripcion").value;

		var imagen = document.getElementById("imagen").value;

		var nuevoID = generarNuevoId();

		var nuevaNoticia = new Noticia(nuevoID, titulo, descripcion, imagen);

		agregarNoticia(nuevaNoticia);


	}

	// EJERCICIO
	// Vincular los elementos con id ordenamiento_id, ordenamiento_az, ordenamiento_za
	// a 3 funciones que usaremos para ordenar
	var vincularOrdenamientos = function () {

		var ordenID = document.getElementById("ordenamiento_id");

		function ordenarPorID() {

			noticias.sort(function (a, b) {

			//ordenando por nombre
			if (a.id > b.id) {

		    	return 1;
		 
		  	}

		  	if (a.id < b.id) {

		    	return -1;

		  	}

		  		return 0;
				
			});

			guardarNoticias();
			limpiarPrueba();
			precargarNoticias();


		}

		ordenID.onclick = ordenarPorID;

		var ordenNombreAz = document.getElementById("ordenamiento_az");

		function ordenarPorAz() {

			noticias.sort(function (a, b) {

			//ordenando por nombre
			if (a.titulo > b.titulo) {

		    	return 1;
		 
		  	}

		  	if (a.titulo < b.titulo) {

		    	return -1;

		  	}

		  		return 0;
				
			});

			guardarNoticias();
			limpiarPrueba();
			precargarNoticias();


		}

		ordenNombreAz.onclick = ordenarPorAz;


		var ordenNombreZa = document.getElementById("ordenamiento_za");

		function ordenarPorZa() {

			noticias.sort(function (a, b) {

			//ordenando por nombre
			if (a.titulo > b.titulo) {

		    	return -1;
		 
		  	}

		  	if (a.titulo < b.titulo) {

		    	return 1;

		  	}

		  		return 0;
				
			});

			guardarNoticias();
			limpiarPrueba();
			precargarNoticias();


		}

		ordenNombreZa.onclick = ordenarPorZa;


	}

	// EJERCICIO
	// Esta funcion vinculara todos los eventos de los objetos del DOM a las funciones que iremos construyendo
	// Sera necesario programar varias funciones para ello:
	//	1. vincularFormulario
	//	2. vincularOrdenamientos (por id, a-z, z-a)
	var iniciar = function () {

		vincularFormulario();

		vincularOrdenamientos();

		precargarNoticias();

	}


    var obtenerNoticias = function () {

    	return noticias;

    }


    // EJERCICIO
    // Solo dejar publico el metodo iniciar
    return {
        agregarNoticia: agregarNoticia,
        eliminarNoticia: eliminarNoticia,
		iniciar: iniciar,
		limpiarPrueba: limpiarPrueba, // borrando de prueba
		limpiarDiario: limpiarDiario,
		buscarPosicion: buscarPosicion,
		obtenerNoticias: obtenerNoticias
    };

})()

// EJERCICIO
// Vincular el evento onload del objeto window al metodo Diario.iniciar
window.onload = function() {

	Diario.iniciar();

}
