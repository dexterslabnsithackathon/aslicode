var variantA = require('../controllers/variantA.server.controller');
module.exports = function(app) {
   
    app.get('/variantA', variantA.render);
};

