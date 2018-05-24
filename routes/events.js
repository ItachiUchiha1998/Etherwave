var express = require('express');
var router = express.Router();
var multer = require('multer');

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

// Create a new Event
router.post('/create', upload.single('image'), events.create);

// Retrieve all Events
router.get('/', events.findAll);

// Retrieve a single Event with noteId
router.get('/:eventId', events.findOne);

// Update an Event with eventId
router.put('/:eventId', events.update);

module.exports = router;
