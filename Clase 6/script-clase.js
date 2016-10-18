// Declaracion de la clase Actor. 
// El nombre de la clase comienza con la primer letra en mayuscula
// Esta clase recibe como parametros nombre, apellido, edad

function Actor(nombre, apellido, edad) {

    // Atributos
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    // Metodos
    this.obtenerNombreCompleto = function() {

        return this.nombre + ' ' + this.apellido;

    }

}

// Como podemos crear objetos a partir de esta clase Actor?
var miActor = new Actor('Leonadro', 'Di Caprio', 41);

// Como se accede a los atributos y/o metodos del objeto creado?
alert(miActor.nombre);
alert(miActor.apellido);
alert(miActor.edad);
alert(miActor.obtenerNombreCompleto());

// Como podemos cambiar el valor de un atributo?
miActor.nombre = ' Leo';

// Declaracion de la clase Pelicula. 
// El nombre de la clase comienza con la primer letra en mayuscula
// Esta clase recibe como parametros id, titulo, descripcion, anio, duracion, director
// Los parametros de la clase (id, titulo, descripcion, anio, duracion, director) 
// se utilizan para inicializar los atributos que, en este caso, tienen los mismos nombres.

function Pelicula (id, titulo, descripcion, anio, duracion, director) {

    // Atributos
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.anio = anio; // Evitar usar letras que no esten en el alfabeto ingles
    this.duracion = duracion;
    this.director = director;
    this.actores = []; // Inicializacion por defecto. Es un array.

    // Metodos
    this.editarTitulo = function (titulo) {
        titulo = titulo;
    }

    this.editarDescripcion = function (descripcion) {
        this.descripcion = descripcion;
    }

    this.agregarActores = function () {

        var nombre;
        var apellido;

        do {

            nombre = prompt('Ingrese el nombre del actor o ingrese 0 para salir');
            apellido = prompt('Ingrese el apellido del actor o ingrese 0 para salir');
            edad = parseInt(prompt('Ingrese la edad del actor o ingrese 0 para salir'));

            if (nombre !== '0' && apellido !== '0' && edad !== 0) {

                var actor = new Actor(nombre, apellido, edad);
                this.actores.push(actor);

            }

        } while(nombre !== '0' || apellido !== '0' || edad !== 0) // La condicion es false si nombre o apellido son '0'

    }

}

// Como podemos crear objetos a partir de esta clase Pelicula?
var miPelicula = new Pelicula(10, 'Titanic', 'Es una pelicula de un barco...', 1997, 180, 'Cameron');

// Como podemos cambiar un atributo de nuestro objeto?
miPelicula.titulo = 'Titanic 2';

miPelicula.agregarActores();


// Clase Videoteca. No recibe parametros
// Esta clase se comento que puede ser una mejora para el TP5 donde se pedia crear un objeto pelicula 
// y que se puedan agregar/borrar/ordear peliculas. Videoteca agrupa todas estas funcionalidades asi no queda
// sueltas en el contexto global
function Videoteca() {
    
    
    this.moviesList = [];
    
    
    this.addMovie = function (movie) {
        
        var newMovie = true;
        
        for (i=0; i <= this.moviesList.length && newMovie === true; i++) {

            if (movie === this.moviesList[i]) {

                newMovie = false;
                
            };

        };


        if (newMovie === true) { // es lo mismo que hacer if (newMovie) { ... }
            
            moviesList.push(movie);
            
        } else {
            
            alert('This movie already exist');
            
        }
    };

    
    //tuve que buscar en internet una funcion (splice) para borrar elementos de un array
    this.deleteMovie = function (idToDelete) {

        for (i=0; i <= moviesList.length; i++) {

            if (moviesList[i].id === idToDelete) {

                moviesList.splice(i,1);
                break;
            };
        };
    };


    //para ordenar por id
    this.compareId = function (a,b) {

        var result;

        if (a.id < b.id) {

            result = -1;
        };

        if (a.id === b.id) {

            result = 0;
        };

        if (a.id > b.id) {

            result = 1;
        };


        return result;

    }


    this.idOrder = function () {

        moviesList.sort(this.compareId);
        
    }

    //para ordenar por el titulo
    this.compareTitle = function (a,b) {

        var result;

        if (a.title < b.title) {

            result = -1;
        };

        if (a.title === b.title) {

            result = 0;
        };

        if (a.title > b.title) {

            result = 1;
        };


        return result;

    }


    this.titleOrder function  () {
        
        moviesList.sort(this.compareTitle);
        
    }

}


// Creacion del objeto miVideoteca a partir de la clase Videoteca
var miVideoteca = new Videoteca();

var peliRambo = new Pelicula(12, 'Rambo', '', 120, 1982, 'Ted Kotcheff');

var peliBatman = new Pelicula(11, 'Batman', '', 120, 1989, 'Tim Burton');

// Agregamos 2 peliculas a nuestra videoteca
miVideoteca.addMovie(peliRambo);
miVideoteca.addMovie(peliBatman);


// UML: Se puede crear documentacion adicional para enteder como se relacionan
// las clases de nuestra aplicacion. En nuestro caso nos van a interesar los diagramas de clases.
// En internet hay mucha informacion acerca de UML.


// Tema de hoy: Patrones de disenio
// Patron Modulo (es el patron mas usado en JS). 
// No es necesario aplicarlo para construir una aplicacion.

// Que necesitamos saber para aprender el patron modulo?
// 1. Objeto literal
// 2. Funciones anonimas
// 3. Funciones autoejecutadas


// Repaso de la clase nro 4 donde vimos objetos
// En esa clase habiamos comenzado a modelar una persona con las siguientes variables:
// var nombre;
// var apellido;
// var edad;
// Habiamos comentado que no era una buena solucion porque las variables estan sueltas en el contexto global
// y no guardan relacion entre ellas.
// Luego intentamos usar un array y nos dimos cuenta que, mas alla que nos permite guardar muchos valores, perdemos
// los nombres de las cosas que guardamos.
// var personaArray = ['demo', 'demo2', 0, function () { alert(mensaje); }];

// Luego presentamos la mejor solucion para modelar una persona; un objeto.
// En ese momento no le habiamos puesto nombre pero es un objeto literal..

// 1. Objeto literal
// Es un objeto que se crea sin necesitar una clase.
// En este caso estamos creando el objeto persona y definiento sus atributos.
// y metodos al mismo tiempo que la creamos.
// Como cualquier objeto puede tener todo tipo de datos.
var persona = { nombre: 'Sherlock', 
                apellido: 'Holmes', 
                edad: 42,  
                obtenerNombreCompleto: function () { return this.nombre + ' ' + this.apellido } };



// 2. Funciones anonimas. Es una funcion sin nombre.
// Muchas aplicaciones comienzan con una funcion sin nombre. Esto es util justamente, para no tomar un nombre que 
// ya pueda haber sido tomado por otro desarrollador.
// Ya venimos usando este tipo de funciones. Donde?
// Ejemplo:

function Clase() {

    // La siguiente funcion no tiene nombre asignado.

    this.miMetodo = function () { 

        /* codigo */

    }

}


// Pero que pasa si intentamos ejecutar el siguiente codigo en la consola de Chrome?

/*
    function () {

        alert('Esta es una funcion anonima');

    }
*/

// Arroja un error de unexpected (... Esto es porque el interprete entiende que lo que queremos hacer
// es declarar una funcion CON nombre. Espera lo siguiente:
/*
    function miFuncion() {

        alert('Esta es una funcion anonima');

    }
*/


// Entonces como podemos hacer para decirle al interprete que lo que queremos 
// realmente es una funcion que no tenga nombre?
// Si recordamos una variable puede tener cualquier valor. Un numero, un string, un objeto, una funcion.
// Entonces decimos que una funcion puede ser valor.
// Le pedimos entonces al interprete que obtenga el valor de lo que esta entre ()

(function () {


    alert('Esta es una funcion anonima');

})

// Una funcion anonima se puede ejecutar si le agregamos ().
// En ese caso para a ser una funcion anonima autoejecutada. Se llaman IIFE.
// JQUERY usa mucho esto

(function () {


    alert('Esta es una funcion anonima');

})()



// Mas ejemplos con funciones autoejecutadas
// Con parametro

// Esta es la declaracion de una funcion que ya conocemos.
// Recibe como parametro mensaje que se pasa como parametro al alert
function miFuncion(mensaje) {


    alert(mensaje);

}

miFuncion('hola mundo');

// Asi es como le pasamos parametros a nuestra funcion anonima y autoejecutada
(function (mensaje) {


    alert(mensaje);

})('hola mundo')



// Combinemos funciones y objetos literales.
// Se declara una funcion que crea un objeto literal y lo asigna a una variable.
// Esa variable se retorna.
function crearObjetoLiteral() {

    var objetoLiteral = {nombre: 'juan'};

    return objetoLiteral;

}


// Podemos prescindir de la variable. No es necesaria para crea un objeto literal.
function crearObjetoLiteral() {

    return {nombre: 'juan'};

}

// Esto si combinamos las funciones autoejecutadas con los objetos literales podemos hacer los siguiente.
// La siguiente funcion se ejecuta y retorna un objeto literal con el atributo nombre. 
// El valor de ese atributo nombre es 'juan'.
// El objeto literal se asigna a la variable miModulo.

var miModulo = (function () {

    return {nombre: 'juan'};

})()



// Crear el modulo Diario

//El objeto noticia debera contener un id, un titulo, una descripcion y una imagen
// El modulo Debera validar que la noticia no fue ingresada previamente
// El modulo Debera tener la posibilidad de eliminar una noticia por ID
// El modulo Debera tener la posibilidad de ordernar sus noticias
// El modulo debera persistir las noticias creadas en session o local storage, por lo tanto cuando recargue deberan volver a aparecer.


function Noticia(id, titulo, descripcion, imagen) {

    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.imagen = imagen;

}

// Una noticia
var miNoticia = new Noticia(0, 'titulo de la noticia', 'desc', 'imagen.jpg');


// En el objeto literal se pondra todo lo que se quiera exponer:
// Metodos para agregar/buscar/eliminar/modificar noticias seran expuestos.
// En cambio el array de noticias y el metodo de existeNoticia no seran expuestos.
// Para que nos sirve esto?
// Nos sirve para que no se pueda hacer lo siguiente:
// miModulo.noticias.push(..) 
// Por que no se podra hacer eso?
// Porque el objeto literal NO TIENE (ni tendra) el array de noticias como atributo. O sea:

/*

var miModulo = (function () {

    var noticias = [];

    // El 'noticias' de la izquierda es el nombre del atributo
    // El 'noticias' de la derecha es el valor que tendra el atributo

    return {noticias: noticias}; // Si hacemos esto estamos exponiendo el array de noticias y no es lo que queremos

})()

*/
// Como el array de noticias no esta expuesto el usuario de miModulo debera si o si usar el metodo que agrega una noticia.

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

// Como usamos lo que tenemos hasta ahora?

// Mas arriba hicimos lo siguiente:

// var miNoticia = new Noticia(0, 'titulo de la noticia', 'desc', 'imagen.jpg');
// Entonces vamos a utilizar el metodo expuesto llamado agregarNoticia del modulo diario.

diario.agregarNoticia(miNoticia);

// Como hariamos para exponer el metodo existeNoticia?
// Tenemos que agregarlo al objeto literal.
// Solo transcribo la parte que nos interesa

/*

var diario = (function () {

    // ... 

    var existeNoticia = function (noticia) {

        // ...

    }

    // ...

    
    return {
        agregarNoticia: agregarNoticia,
        eliminarNoticia: eliminarNoticia,
        existeNoticia: existeNoticia
    };

})()


*/