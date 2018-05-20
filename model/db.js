const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ticketSchema = new Schema({ 
 	name: String,
	price: Number,
	date: {type: Date,default: Date.now()},
	image: String,
	location: String
}); 

var ticket_details  = mongoose.model('ticket',ticketSchema); 
module.exports = { Ticket: ticket_details };