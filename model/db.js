const mongoose = require('mongoose');
function db() {
	mongoose.connect('mongodb://testdb:testdb@ds129780.mlab.com:29780/etherwave',(req,res) => {
		console.log("Connected to Database");
	})
}

module.exports = db;