var hayClase = false;
var diaActual = 'Lunes';
var diasDeClase = ['Lunes','Martes'];

//// ESTRUCTURAS CONDICIONALES /////

//// IF ////

if(diaActual === diasDeClase[0]){
	hayClase = true;
}

//// ELSE IF ////

if(diaActual === diasDeClase[0]){
	hayClase = true;
} else if (diaActual === diasDeClase[1]){
	hayClase = true;
}

//// SWITCH ////

switch (diaActual) {
	case diasDeClase[0]: // los dos puntos indican hacer algo
		hayClase = true; // hace esto
		break; //si lo hiciste o se dio la condicion corta con break
	case diasDeClase[1]:
		hayClase = true;
		break;
	default: //si no comprueba ninguno entra por default
		hayClase = false;
}

//// FOR ////

// tres parte, posicion, condicion, incremento

for(posicion = 0; posicion < diasDeClase.length; posicion++) {
	if(!hayClase){
		hayClase = diaActual === diasDeClase [posicion];
	}
}

///// FOR IN ////

// dos posiciones: indice y arreglo a recorrer
// solo sirve para arreglos

for(diaDeClase in diasDeClase) {
	if(!hayClase) {
		hayClase = diaActual === diasDeClase;
	}
}


//// WHILE ////

var pos = 0;

while(!hayClase && pos < diasDeClase.length){
	hayClase = diaActual === diasDeClase[pos];
	pos++;
}


//// DO WHILE //// 

do{
	hayClase = diaActual === diasDeClase[pos];
	pos++;
} while (!hayClase && pos < diasDeClase.length);



