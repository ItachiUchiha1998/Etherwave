var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

router.get('/qr', (req, res, next) => {
  res.render('qr');
});


var events = require('../controllers/ticketController');

router.get('/', events.findAll);

router.post('/newEvent', events.create);

// Retrieve all Events
router.get('/events', events.findAll);

// Retrieve a single Event with noteId
router.get('/events/:eventId', events.findOne);

// Update an Event with eventId
router.put('/events/:eventId', events.update);

//not found
router.get('*',function(req,res){
	res.send({message: 'Not the page you are looking for'});
});

module.exports = router;
