var express = require('express');
var router = express.Router();
var models = require('../models/')

/* GET home page. */
router.get('/', function(req, res, next) {
	models.Page.find(function (err, data) {
		// var docs = data
		// console.log(docs)
		res.render('index', { title: 'WIKISTACK', docs: data });
	})
	
});

router.get('/about', function(req, res, next) {
  res.render('about_us', { title: 'WIKISTACK' });
});



module.exports = router;
