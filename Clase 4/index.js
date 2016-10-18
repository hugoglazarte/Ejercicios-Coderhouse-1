// OBJETOS

var miObjetoPersona = {	nombre : 'Sherlock',
						apellido : 'Holmes',
						edad : 45 };


function compararPersona(personaA,personaB){

	var sonIguales; /* sin var queda definida en el contexto global */

	if (personaA.nombre === personaB.nombre 
		&& personaA.apellido === personaB.apellido 
		&& personaA.edad === personaB.edad){

		sonIguales = true;
	
	}else{

		sonIguales = false;

	}

	return sonIguales;

}

var miPersonaConComportamiento = 
					{	nombre : 'Sherlock',
						apellido : 'Holmes',
						edad : 45 };

// en JS para diferenciar las funciones tradicionales de las clase, las clases comienzan con mayuscula

// Funcion de declaracion

function Persona(nombre, apellido, edad){

		//Atributos
		this.nombre = nombre;
		this.apellido = apellido;
		this.edad = edad;
		this.estaCaminando = false;
		this.estaComiendo = false;


		//Metodos
		this.caminar = function() {

			if(this.estaComiendo === false ) {

				this.estaCaminando = true;

			} else {

				console.log('esta persona esta comiendo');

			}
		}

		this.comer = function() {

			// si no esta caminando, entonces puede comer

			if (!this.estaCaminando) {

				this.estaComiendo = true;

			} else {

				console.log('Esta persona esta caminando');

			}

		}

		this.detenerse = function () {

			this.estaCaminando = false;

		}
};

// ECMAScript 6 Permite usar class


