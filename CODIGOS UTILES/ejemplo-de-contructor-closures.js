var construirComparador = function (atributo, ordenamientoAscendente) {

    return function (elementoA, elementoB) {

      var resultado;

      if (elementoA[atributo] > elementoB[atributo]) {

        resultado = 1;

      }

      if (elementoA[atributo] === elementoB[atributo]) {

        resultado = 0;

      }

      if (elementoA[atributo] < elementoB[atributo]) {

        resultado = -1;

      }

      if (ordenamientoAscendente === false) {

        resultado = -resultado;

      }

      return resultado;

    }

  }

  // Tenemos una sola funcion para ordenar peliculas
  var ordenarPeliculas = function (atributo, ordenamientoAscendente) {

    var comparador = construirComparador(atributo, ordenamientoAscendente);

    peliculas.sort(comparador);

	// mas codigo
  }
  
  