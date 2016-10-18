/* Comenzamos con un HTML que tiene unicamente la etiqueta body
<html>
	<body></body>
</html>
*/

//Obtengo el elemento 'body' buscandolo por nombre de etiqueta.
//El metodo getElementsByTagName retorna un array, por lo que me quedo con el elemento en la posicion 0.
var body = document.getElementsByTagName("body")[0];

//Creo un nuevo elemento con etiqueta div
var nuevoDiv = document.createElement("div");

//Creo un nuevo parrafo
var parrafo = document.createElement("p");

//Le asigno al parrafo creado un id
parrafo.setAttribute("id", "parrafoUno");

//Creo el texto que va a estar dentro del parrafo
var textoParrafo = document.createTextNode("Texto del parrafo");

//Inserto el texto dentro del parrafo usando el metodo appendChild. 
//Este metodo se llama en el nodo padre y recibe como parametro el nodo hijo.
parrafo.appendChild(textoParrafo);

//Inserto el parrafo dentro del div.
nuevoDiv.appendChild(parrafo);

//Finalmente, inserto el div (que contiene al parrafo) dentro del body.
body.appendChild(nuevoDiv);

/* El HTML me queda de esta forma:
<html>
	<body>
		<div>
			<p id="parrafoUno">Texto del parrafo</p>
		</div>
	</body>
</html>
*/

//Quiero modificar el texto del parrafo y ademas asignarle una clase.
//En este caso ya tengo en la variable parrafo al objeto, pero sino, lo puedo buscar por id usando el metodo getElementById
var parrafoRecuperado = document.getElementById("parrafoUno");

//Cambio el texto utilizando la propiedad innerHTML.
parrafoRecuperado.innerHTML = "Nuevo texto";

//Asigno la clase usando la propiedad className.
parrafoRecuperado.className = "claseParrafos";

/* El HTML me queda de esta forma:
<html>
	<body>
		<div>
			<p id="parrafoUno" class="claseParrafos">Nuevo texto</p>
		</div>
	</body>
</html>
*/

//Ahora quiero eliminar el parrafo y en cambio, agregar una imagen con un titulo dentro del div.

//Para eliminar el parrafo, primero busco al padre del nodo a borrar, usando la propiedad parentNode.
//En este caso, padreParrafo hace referencia al objeto asociado al div.
var padreParrafo = parrafoRecuperado.parentNode;

//Ahora podemos eliminar al parrafo, usando el metodo removeChild.
//Este metodo se llama en el nodo padre y recibe como parametro el nodo hijo que se quiere borrar.
padreParrafo.removeChild(parrafoRecuperado);

/* El HTML me queda de esta forma:
<html>
	<body>
		<div></div>
	</body>
</html>
*/

//Ahora procedo a agregar la imagen. Primero creo el elemento con etiqueta img
var imagen = document.createElement("img");

//Le asigno a la imagen un id y el atributo src
imagen.setAttribute("id", "imagenDom");
imagen.setAttribute("src", "http://www.w3schools.com/js/pic_htmltree.gif");

//Creamos un elemento con etiqueta h1 para el titulo.
var titulo = document.createElement("h1");

//Creo el texto que va a estar dentro del titulo.
var textoTitulo = document.createTextNode("Arbol de nodos");

//Inserto el texto dentro del h1 usando el metodo appendChild.
titulo.appendChild(textoTitulo);

//Inserto el titulo y la imagen dentro del div, que ya existe en la pagina.
nuevoDiv.appendChild(titulo);
nuevoDiv.appendChild(imagen);

/* El HTML me queda de esta forma:
<html>
	<body>
		<div>
			<h1>Arbol de nodos</h1>
			<img id="imagenDom" src="http://www.w3schools.com/js/pic_htmltree.gif" />
		</div>
	</body>
</html>
*/