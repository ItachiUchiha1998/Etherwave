var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

var events = require('../controllers/ticketController');

router.get('/', events.findAll);

module.exports = router;
