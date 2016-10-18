function Noticia(id, titulo, descripcion, imagen) {

	//atrib
	this.id = id;
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.imagen = imagen;

	//met


}

var miNoticia = new Noticia(0, 'titulo de la noticia', 'desc', 'imagen1.jpg');

//Modulo diario

var diario = (function (){

	//atributos privados
	var noticias = [];

	// si extiste la noticia devuelve la posicion y sino devuelve -1
	var existeNoticia = function(noticia) {
		// la iniciamos en -1 como una especie de false
		var posicion = -1;
		var noticiaActual;

		for(i = 0; i < noticias.length && existe === -1; i++) {

			noticiaActual = noticias[i];

			if(noticiaActual.id === noticia.id) {

				posicion = i;

			} 
		}

		return posicion;
	}

	var agregarNoticiasPrivado = function(noticia){
		/** **/
		var posicion = existeNoticia(noticia);

		if(posicion === -1) {

			noticias.push(noticia);

		}

	}

	var eliminarNoticia = function(noticia){

		var posicion = existeNoticia(noticia);//vuelvo a usar el existeNoticia

		if(posicio > -1) {

			noticias.splice(posicion,1);

		} else {

			alert('La noticia con Id: ' + noticia.id + 'ya existe!');

		}

	}


	return {
		// retornando atributos o metodos como publicos

		// ACA prodria definir que metodo puede ser publico para usar fuera de este modulo
		// como los objetos literales hago publico el agregarNotiPrivad como nuevo metodo agregarNoticiasPublico retornndo un nuevo objeto 'diario'
		agregarNoticiasPublico: agregarNoticiasPrivado

	}
})()

