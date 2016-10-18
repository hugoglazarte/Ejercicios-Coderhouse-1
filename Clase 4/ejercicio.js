function Auto(color, modelo, patente, marca, velocidadMaxima) {

	// Atributos

	this.color = color;
	this.modelo = modelo;
	this.patente = patente;
	this.marca = marca;
	this.encendido = false;
	this.velocidadMaxima = velocidadMaxima;
	this.velocidad = 0;

	// Metodos

	this.encender = function() {

		if (!this.encendido) {

			this.encendido = true;

		} else {

			console.log('No se puede encender el auto encendido');
		}
		

	}

	this.apagar = function() {

		if (this.encendido) {

			this.encendido = false;

		} else {

			console.log('El auto ya esta apagado');

		}
		
	}

	this.acelerar = function(valor1) {

		if(this.encendido){

			if(this.velocidad < this.velocidadMaxima){

				this.velocidad += valor1;
				
			} else {

				console.log('Estas superando la velocidad Maxima');

			}

		} else {

			console.log('El motor esta apagado');
		}

	}

	this.mostrarVel = function() {

		console.log(this.velocidad);

	}

	this.frenar = function(valorFrenar) {

		if(this.encendido) {

			if(this.velocidad > 0) {

				this.velocidad -= valorFrenar;

			}

		} else {

			console.log('el motor esta apagado');

		}

	}

}