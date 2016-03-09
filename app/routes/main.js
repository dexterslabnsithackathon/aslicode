var home = require('../controllers/home.server.controller');
var abSchema = require('mongoose').model('abSchema');
var variantA = require('../controllers/variantA.server.controller');
var variantB = require('../controllers/variantB.server.controller');
module.exports = function(app) {
	
	app.use(function (req, res) {
	  // check if client sent cookie
	  var cookie = req.cookies.cookieName;

	  if (cookie === undefined)
	  {
	    

	    abSchema.findOne({}, function(err, query) {
	  	if(query.flag==0)
 	  	{
		//load page b
	  	var page = query.variant[1];
	  	//update flag
	  	res.cookie('cookieName',page, { maxAge: 900000, httpOnly: true });
	    console.log('cookie created successfully');
	  	res.sendFile('/home/nitin/Documents/MainStream Projects/meanhacknsit/public/variantB.html');
	  	}
	 	else
		{
	  	var page = query.variant[0];
	  	console.log(page);
	  	//update flag
	  	res.cookie('cookieName',page, { maxAge: 900000, httpOnly: true });
	    console.log('cookie created successfully');
	  	res.sendFile('/home/nitin/Documents/MainStream Projects/meanhacknsit/public/variantA.html');
	    }
	  
	  });
	  } 
	  else
	  {
	  	app.get('/home', function(req, res) {
  			console.log("Cookies: ", req.cookies)
		});
	  }
	});
	
};

