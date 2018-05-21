const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const db = require('../model/db');

db();

var ticketSchema = new Schema({ 
 	name: String,
	price: Number,
	date: {type: Date,default: Date.now()},
	image: String,
	location: String
}); 

var ticket_model  = mongoose.model('ticket', ticketSchema); 
module.exports = ticket_model;

