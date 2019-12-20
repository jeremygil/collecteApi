var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost';
var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var routes = require('./routes/listRoutes'); //importing route
routes(app); //register the route


//https://jsonplaceholder.typicode.com/todos/


// Démarrer le serveur 
app.listen(port, hostname, function () {
	console.log("Mon serveur fonctionne sur http://" + hostname + ":" + port + "\n");
});
