var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
	res.render('admin', {title: "EtherWave"});
});

router.get('/qr', (req, res, next) => {
    res.render('qr');
});

router.get('/ticket/:id',(req,res) => {
	res.render('ticket',{id: req.params.id});
})
  
module.exports = router;
