var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var abSchema = new Schema({
	//route 
	variant:[String],// array of file names
	total:[Number], //no of visits to a particular page
	conversion:[Number], //no of success for any page
	flag: {type:Number}, //int
	success:[String], //arrray of 2 strings
	time:[Number], // duration for experiment in range
	endtime:{type:Date} //last time when expt is to be conducted
});

/*abSchema.pre('save', 
	function(next) {
		if (this.password) {
			var md5 = crypto.createHash('md5');
			this.password = md5.update(this.password).digest('hex');
		}

		next();
	}
);*/
/*
UserSchema.methods.authenticate = function(password) {
	var md5 = crypto.createHash('md5');
	md5 = md5.update(password).digest('hex');

	return this.password === md5;
};

UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
	var _this = this;
	var possibleUsername = username + (suffix || '');

	_this.findOne(
		{username: possibleUsername},
		function(err, user) {
			if (!err) {
				if (!user) {
					callback(possibleUsername);
				}
				else {
					return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
				}
			}
			else {
				callback(null);
			}
		}
	);
};
*/
mongoose.model('abSchema', abSchema);