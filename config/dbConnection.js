var mongoose = require('mongoose');
//mongoose.connect('mongodb://nitinkmr:miniquora@ds051655.mongolab.com:51655/miniquora');
//mongoose.connect('mongodb://localhost/mini1');
mongoose.connect('mongodb://dexterslab:dexterslab@ds045464.mlab.com:45464/dexterslab');

var db = mongoose.connection;
console.log('db line');
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected');
  // we're connected!
  
  // define schema here
  var kittySchema = mongoose.Schema({
    name: String
	});
  
  var Kitten = mongoose.model('Kitten', kittySchema);
  
  var billi1 = new Kitten({ name: 'billi1' });

	billi1.save(function (err, fluffy) {
  if (err) return console.error(err);

});

  
});
console.log("dedae");

// mongoose 4.3.x
/*var mongoose = require('mongoose');
 
/* 
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 90000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 90000 } } };       
 
var mongodbUri = 'mongodb://nitinkmr:miniquora@ds051655.mongolab.com:51655/miniquora';
 console.log('here1');
mongoose.connect(mongodbUri, options);
console.log('here2');
var conn = mongoose.connection;             
 console.log('here3');
conn.on('error', console.error.bind(console, 'connection error:'));  
 console.log('here4');
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
console.log('here5');
console.log('connected');
});	
console.log('here6');*/