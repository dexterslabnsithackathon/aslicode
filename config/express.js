var config = require('./config'),
	express = require('express');
	/*bodyParser = require('body-parser'),
	passport = require('passport'),
	flash = require('connect-flash'),
	session = require('express-session'),
	dbConnection = require('./dbConnection');*/

module.exports = function() {
	var app = express();

	app.set('views', './app/views');
	app.set('view engine', 'ejs');

/*	require('../app/routes/index.server.routes.js')(app);
	require('../app/routes/users.server.routes.js')(app);
	require('../app/routes/hospitalDB.server.routes.js')(app);
	require('../app/routes/hospitalForm.server.routes.js')(app);
	require('../app/routes/mapdata.server.routes.js')(app);
	require('../app/routes/heatmap.server.routes.js')(app);*/
	require('../app/routes/variantA.server.routes.js')(app);
	require('../app/routes/variantB.server.routes.js')(app);
	require('../app/routes/success.server.routes.js')(app);
	app.use(express.static('./public'));

	require('../app/routes/abtestdata.server.routes.js')(app);
	return app;
};