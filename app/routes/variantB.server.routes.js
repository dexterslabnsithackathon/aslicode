 var variantB = require('../controllers/variantB.server.controller');
module.exports = function(app) {
   
    app.get('/variantB', variantB.render);
};

