var express = require('express');
var router = express.Router();
var models = require('../models/')

/* GET home page. */
router.get('/', function(req, res, next) {
	// models.Page.find(function (err, data) {
	// 	// var docs = data
	// 	// console.log(docs)
		
	// })
	res.render('wiki', { title: 'WIKISTACK'});
	
});

router.get('/:url_name', function(req, res, next) {
	var url_name = req.params.url_name
	models.Page.find(function (err, data) {
	}).where('url_name').equals(url_name).exec(function (err, data) {
		res.render('wiki', { title: 'WIKISTACK',docs: data });
	})
  
});



module.exports = router;
