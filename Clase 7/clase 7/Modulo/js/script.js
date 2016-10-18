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
		
		/*
		 
			LocalStorage: 

				Es una base de datos local en nuestro navegador con almacenamiento limitado.
				
				Es util para guardar en ella informacion que sabemos que no va a cambiar en el tiempo,
				como por ejemplo el listado de provincias de Argentina; el tipo de documento de una persona
				(DNI, CI, LC, LE, PASAPORTE) etc.
				
				Por cada pagina web hay un localstorage asociado.
				
				Al igual que otros objetos como window o document que ya vimos, localStorage es un objeto que tenemos
				disponible apenas abre nuestro navegador.
			
				Los metodos que nos interesan son 2:
				
					1. localStorage.setItem(clave, valor);
					2. localStorage.getItem(clave);

				LocalStorage SOLO guarda strings. Como podemos hacer para guardar algo que no sea un string?
				Todos los tipos de datos que podemos usar en Javascript tienen su representacion en formato string.
				Como hacemos para obtener esa representacion?
				
				JSON.stringify(elemento); //<-- Formato
				Esta funcion devuelve un JSON (Javascript Object Notation) que es una notacion 
				que se usa para representar cualquier tipo de dato en Javascript.
				
				Algunos ejemplos:
				
				var miNumero = 1;
				var dato = JSON.stringify(miNumero);
				Resultado: "1"
				
				var miString = "Hola Mundo";
				var dato = JSON.stringify(miString);
				Resultado: "Hola Mundo"
				
				var miArray = [1,2,3,4];
				var dato = JSON.stringify(miArray);
				Resultado: "[1,2,3,4]"
				
				var pelicula = { nombre: 'batman', anio: 1989 };
				var dato = JSON.stringify(pelicula);
				Resultado: "{"nombre":"batman","anio":1989}" // Notar que los atributos pasan a ser strings, o sea, nombre paso a ser "nombre"
				
				var peliculaConActores = { nombre: 'batman', anio: 1989, actores: ['Michael Keaton', 'Jack Nicholson'] };
				var dato = JSON.stringify(peliculaConActores);
				Resultado: "{"nombre":"batman","anio":1989,"actores":["Michael Keaton","Jack Nicholson"]}"
				
				var peliculaConObjetosActores = ({ nombre: 'batman', anio: 1989, actores: [{ nombre: 'Michael', apellido: 'Keaton' }, { nombre: 'Jack', apellido: 'Nicholson' }] });
				var dato = JSON.stringify(peliculaConObjetosActores);
				Resultado: "{"nombre":"batman","anio":1989,"actores":[{"nombre":"Michael","apellido":"Keaton"},{"nombre":"Jack","apellido":"Nicholson"}]}"
				
				Como grabamos uno de estos ejemplos en localStorage?
				
				var miArray = [1,2,3,4];
				var dato = JSON.stringify(miArray);
				localStorage.setItem('array', dato);

				Como recuperamos algo que hayamos grabado en localStorage?
				
				var dato = localStorage.getItem('array'); // Esto es un string. Recordemos que localStorage guarda solamente strings

				Como lo convertimos de string al tipo de dato que era originalmente?
				
				var miArray = JSON.parse(dato);
				
		 */
		
		
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
    var dibujarNoticia = function (noticia) {

		// Se obtiene el elemento padre que nos servira para agregar los elementos hijos
        var ul = document.getElementById("noticias");

		// Se crean todos los elementos que necesitaremos para dibujar la noticia (li, h3, img, p)
        var li = document.createElement("li");
        var h3 = document.createElement('h3');
        var img = document.createElement('img');
        var p = document.createElement('p');

		// Se asignan los atributos id y class al elemento li creado anteriormente
		// El id del li es el id de la noticia. Nos servira para luego, de ser necesario, borrarla
        li.setAttribute('id', noticia.id);
        li.setAttribute('class', 'list-group-item'); // Bootstrap

		// Se agrega el texto al h3 y p a partir del titulo y la descripcion respectivamente
        h3 = agregarTexto(h3, noticia.titulo);
        p = agregarTexto(p, noticia.descripcion);

		// Se asigna el source de la imagen (src) a partir del atributo imagen de la noticia
        img.setAttribute('src',  noticia.imagen);

		// Appends de los elementos h1, p, img en li
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(img);

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

        var posicion = existeNoticia(noticia);

        if (posicion > -1) {

            // Borra 1 elemento desde la posicion
            noticias.splice(posicion, 1);

            guardarNoticias();

            borrarNoticiaDOM(noticia);

        } else {

            alert('La noticia con id: ' + noticia.id + ' no existe');

        }

    }
    
    var limpiarDiario = function () {

		noticias = []
		localStorage.removeItem(claveLocalStorage);
		
		var noticias = document.getElementById("noticias");
		
		while (noticias.firstChild) {
			noticias.removeChild(noticias.firstChild);
		}
		
	}

    precargarNoticias();

    // El 'agregarNoticia' de la izquierda es el nombre del atributo de nuestro objeto literal.
    // El 'agregarNoticia' de la derecha es el valor que tendra el atributo. Es la funcion que tenemos declarada

    // El 'eliminarNoticia' de la izquierda es el nombre del atributo de nuestro objeto literal.
    // El 'eliminarNoticia' de la derecha es el valor que tendra el atributo. Es la funcion que tenemos declarada
    return {
        agregarNoticia: agregarNoticia,
        eliminarNoticia: eliminarNoticia,
		limpiarDiario: limpiarDiario
    };

})()

// Para limpiar el diario pueden hacer lo siguiente:
// Esto borra el array de noticias, limpia localstorage y quita todas las noticias del DOM.
// Diario.limpiarDiario()

// Como agregamos una noticia?

var primavera = new Noticia(0, 'Llego la primavera!', 'Al fin termino el invierno en Buenos Aires..', 'http://placehold.it/250x150');
Diario.agregarNoticia(primavera);

// Como eliminamos una noticia?
// Diario.eliminarNoticia(noticia);

// Como agregamos otra noticia?
// var cirqueDuSoleil = new Noticia(1, 'Cirque du Soleil', 'Cirque du Soleil presenta su nuevo show...', 'http://placehold.it/250x150');
// Diario.agregarNoticia(noticia);