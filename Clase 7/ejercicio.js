
function Noticia(id, titulo, descripcion, imagen) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

}

// Una noticia
var miNoticia = new Noticia(0, 'titulo de la noticia', 'desc', 'imagen.jpg');


var diario = (function () {

    // Atributos privados
    var noticias = [];

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
            
        }  else {

            alert('La noticia con id: ' + noticia.id + ' ya existe');

        }

    }

    var eliminarNoticia = function(noticia) {

        var posicion = existeNoticia(noticia);

        if (posicion > -1) {

            // Borra 1 elemento desde la posicion
            noticias.splice(posicion, 1);

        } else {

            alert('La noticia con id: ' + noticia.id + ' no existe');

        }

    }

    // El 'agregarNoticia' de la izquierda es el nombre del atributo de nuestro objeto literal.
    // El 'agregarNoticia' de la derecha es el valor que tendra el atributo. Es la funcion que tenemos declarada

    // El 'eliminarNoticia' de la izquierda es el nombre del atributo de nuestro objeto literal.
    // El 'eliminarNoticia' de la derecha es el valor que tendra el atributo. Es la funcion que tenemos declarada
    return {
        agregarNoticia: agregarNoticia,
        eliminarNoticia: eliminarNoticia
    };

})()


diario.agregarNoticia(miNoticia);

