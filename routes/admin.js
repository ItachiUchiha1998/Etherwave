var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
	res.render('admin', {title: "EtherWave"});
});

// Retrieve a single Ticket with ticketId
router.get('/ticket/:ticketId', (req,res,next) => {
	res.render('admin_ticket_detail', {title: "EtherWave Dashboard"});
});

router.get('/qr', (req, res, next) => {
    res.render('qr');
});

router.get('/ticket/:id',(req,res) => {
	res.render('ticket',{id: req.params.id});
})
  
module.exports = router;
