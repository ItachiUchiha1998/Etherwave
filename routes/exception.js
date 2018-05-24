var express = require('express');
var router = express.Router();

//not found
router.get('*',function(req,res){
	res.send({message: 'Not the page you are looking for'});
});

module.exports = router;
