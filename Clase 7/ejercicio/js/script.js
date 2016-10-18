// Crear el modulo Diario

//El objeto noticia debera contener un id, un titulo, una descripcion y una imagen
// El modulo Debera validar que la noticia no fue ingresada previamente
// El modulo Debera tener la posibilidad de eliminar una noticia por ID
// El modulo Debera tener la posibilidad de ordernar sus noticias
// El modulo debera persistir las noticias creadas en session o 
// local storage, por lo tanto cuando recargue deberan volver a aparecer.


function Noticia(id, titulo, descripcion, imagen) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

}

var Diario = (function () {

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

    var guardarNoticias = function () {

        var datos = JSON.stringify(noticias);

        localStorage.setItem('noticias', datos);

    }

    // EJERCICIO
    var dibujarNoticia = function (noticia) {

        // CODIGO DIBUJAR UNA NOTICIA
        // body div ul
        var ul = document.getElementById("noticias");

        var li = document.createElement('li');

        li.setAttribute('id',noticia.id);

        var h1 = document.createElement('h1');

        var contenidoH1 = document.createTextNode(noticia.titulo);

        h1.appendChild(contenidoH1);

        var p = document.createElement('p');

        var contenidoP = document.createTextNode(noticia.descripcion);

        p.appendChild(contenidoP);

        var img = document.createElement('img');

        img.setAttribute('src', noticia.imagen);

        

        li.appendChild(h1);
        li.appendChild(p);
        li.appendChild(img);

        ul.appendChild(li);



    }

    // EJERCICIO
    var borrarNoticiaDOM = function (noticia) {

        // CODIGO DIBUJAR BORRAR UNA NOTICIA

        var noticiaActual = document.getElementByid(noticia.id);

        ul.removeChild(noticiaActual);



    }



    var recuperarNoticias = function () {

        var datos = localStorage.getItem('noticias');

        if (datos !== null) {

            noticias = JSON.parse(datos);

        }


        // EJERCICIO
        /*

            Recorrer el array llamando a la dibujarNoticia

        */

    }

    var agregarNoticia = function (noticia) {

        var posicion = existeNoticia(noticia);

        if (posicion === -1) {

            noticias.push(noticia);

            guardarNoticias();


            // EJERCICIO
            dibujarNoticia(noticia);
            
        }  else {

            alert('La noticia con id: ' + noticia.id + ' ya existe');

        }

    }

    var eliminarNoticia = function(noticia) {

        var posicion = existeNoticia(noticia);

        if (posicion > -1) {

            // Borra 1 elemento desde la posicion
            noticias.splice(posicion, 1);

            guardarNoticias();

            // EJERCICIO
            borrarNoticiaDOM()

        } else {

            alert('La noticia con id: ' + noticia.id + ' no existe');

        }

    }

    recuperarNoticias();

    return {
        agregarNoticia: agregarNoticia,
        eliminarNoticia: eliminarNoticia

    }

})()

var noticia = new Noticia(0, 'Titulo', 'Descripcion', 'imagen.jpg');

// var noticia2 = new Noticia(2, 'Titulo', 'Descripcion', 'imagen.jpg');

// var noticia3 = new Noticia(3, 'Titulo', 'Descripcion', 'imagen.jpg');

//Diario.agregarNoticia(noticia);