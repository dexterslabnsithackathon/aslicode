var db = require('../../app/controllers/abtestdata.server.controller');

module.exports = function(app) {
	app.route('/abtestdata').post(db.create).get(db.list);

	app.route('/abtestdata/:dbById').get(db.read).put(db.update).delete(db.delete);

	app.param('dbById', db.dbById);

};

