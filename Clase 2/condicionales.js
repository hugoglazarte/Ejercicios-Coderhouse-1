// var mostrar=false;
// alert(!mostrar);

var haceFrio = false;
var tengoMuchoTrabajo = false;
var estoyCansado = false;

var tengoExcusa = haceFrio || tengoMuchoTrabajo || estoyCansado;

var haySubte = true;
var hayTren = true;
var hayColectivo = true;
var voyCaminando = false;

var hayFormaDeLlegar = haySubte || hayTren || hayColectivo || voyCaminando;

var voyaClase = !tengoExcusa && hayFormaDeLlegar;

alert('voy a Clase? ' + voyaClase);
alert('voy a clase?' + Boolean(!tengoExcusa && hayFormaDeLlegar));
