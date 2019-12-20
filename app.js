var express = require('express'),
	app = express();

var listRoutes = require('./routes/listRoutes'); //importing route
app.use('/v1', listRoutes);

module.exports = app;