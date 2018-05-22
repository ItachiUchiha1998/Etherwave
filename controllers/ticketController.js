const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Concert = require('../model/event');


exports.findAll = function(req, res) {
    Concert.find({}, (err, event) => {
        if (err) {
            console.log("error");
            res.send({ success: false });
            return console.error(err);
        } else {
            res.render('home',{title: 'EtherWave', event: event});
            console.log(event);
        }
    });
};

// Find a single event with an eventId
exports.findOne = (req, res) => {
    Concert.findById(req.params.eventId)
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });            
        }
        res.send(event);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving event with id " + req.params.eventId
        });
    });
};
  
// Create and Save a new Event
exports.create = (req, res) => {
    Concert.create({
      name: req.body.name ,
      price: req.body.price,
      date: req.body.date,
      image: req.body.image,
      location: req.body.location
    }).then(function(){
      res.send({success: true});
    }).catch(function(){
      res.send({success: false});    
    })
};

// Update an event identified by the eventId in the request
exports.update = function(req, res) {   
    console.log(req.body);
    // Validate Request
    if(!req.body) {
        return res.status(400).send({
            message: "Event content can not be empty"
        });
    };
    
    Concert.findByIdAndUpdate(req.params.eventId, {
        name: req.body.name || "Untitled Event",
        price: req.body.price || 700,
        location: req.body.location || "Toronto",
        date: req.body.date ||"2018-05-28"
    }, {new: true})
    .then(event => {
        if(!event) {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });
        }
        res.send(event);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Event not found with id " + req.params.eventId
            });                
        }
        return res.status(500).send({
            message: "Error updating event with id " + req.params.eventId
        });
    });
};