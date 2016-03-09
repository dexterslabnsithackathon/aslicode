 var success = require('../controllers/success.server.controller');
module.exports = function(app) {
   
    app.get('/success', success.render);
};

