var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var multer = require('multer');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now())
    }
});
var upload = multer({storage: storage});

var events = require('../controllers/ticketController');

router.get('/qr', (req, res, next) => {
  res.render('qr');
});

router.get('/', events.findAll);

router.post('/newEvent', upload.single('image') , events.create);

// Retrieve all Events
router.get('/events', events.findAll);

// Retrieve a single Event with noteId
router.get('/events/:eventId', events.findOne);

// Update an Event with eventId
router.put('/events/:eventId', events.update);

router.get('/admin', (req,res,next) => {
	res.render('admin',{title: "EtherWave"});
});

//not found
router.get('*',function(req,res){
	res.send({message: 'Not the page you are looking for'});
});

module.exports = router;
