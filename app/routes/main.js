var home = require('../controllers/home.server.controller');
var abSchema = require('mongoose').model('abSchema');
var variantA = require('../controllers/variantA.server.controller');
var variantB = require('../controllers/variantB.server.controller');
module.exports = function(app) {
	
	app.use(function (req, res, next) {
	  var cookie = req.cookies.cookieName;

	  if (cookie === undefined)
	  {
	    abSchema.findOne({}, function(err, query) {
	  	if(query.flag==0)
 	  	{
	  	var page = query.variant[1];
	  	query.flag=1;
	  	var a = query.total[1] +1;
	  	var b = query.total[0];
	  	query.total = [b,a];
	  	res.cookie('cookieName',page, { maxAge: 900000, httpOnly: true });
	    console.log('cookie created successfully');
	  	res.sendFile('/home/nitin/Documents/MainStream Projects/meanhacknsit/public/variantB.html');
	  	}
	 	else		
		{
	  	var page = query.variant[0];
	  	query.flag=0;
	  	var a = query.total[0] +1;
	  	var b = query.total[1];
	  	query.total = [a,b];
	  	res.cookie('cookieName',page, { maxAge: 900000, httpOnly: true });
	    console.log('cookie created successfully');
	  	res.sendFile('/home/nitin/Documents/MainStream Projects/meanhacknsit/public/variantA.html');
	    }
	  	query.save();
	  });
	  } 
	  else
	  {
  			var page = '/home/nitin/Documents/MainStream Projects/meanhacknsit/public/' + req.cookies.cookieName + '.html'; 
  			res.sendFile(page);
	  }
	});
};

