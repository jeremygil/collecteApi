var express = require('express'); 
 
// Nous définissons ici les paramètres du serveur.
var hostname = 'localhost'; 
var port = 3000; 
 
var app = express(); 
 
// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port+"\n"); 
});
 