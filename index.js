var express = require('express');
var app = express();

const PUERTO = 9000;

app.listen(PUERTO, function(){
	console.log('Servidor http correindo en el puerto 9000');
});

app.get('/', function(req, res){
	res.send('esta es la pagina inicial para la materia "Desarollo Movil"');
	console.log('Se recibio una petición get');
});