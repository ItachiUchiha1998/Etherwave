var express = require('express');
var router = express.Router();

router.get('/', (req,res,next) => {
	res.render('admin', {title: "EtherWave"});
});

router.get('/qr', (req, res, next) => {
    res.render('qr');
});
  
module.exports = router;
