var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const db = require('../model/db');
mongoose.connect('mongodb://localhost/EtherWave');

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/qr', (req, res, next) => {
  res.render('qr');
});

router.get('/', (req,res,next) => {
  
  db.Ticket.find({}, (err, ticket) => {
        if (err) {
            console.log("error");
            res.send({ success: false });
            return console.error(err);
        } else {
            res.render('home',{title: 'EtherWave',event: ticket});
            console.log(ticket);
        }
    });
})

router.get('/readEvent',(req,res) => {
  db.Ticket.find({}, (err, ticket) => {
        if (err) {
            console.log("error");
            res.send({ success: false });
            return console.error(err);
        } else {
            res.send({ success: true, ticket: ticket });
            console.log("success");
        }
    });
})

router.post('/newEvent',(req,res)=>{
  db.Ticket.create({
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
})

//not found
router.get('*',function(req,res){
	res.send({message: 'Not the page you are looking for'});
});

module.exports = router;
