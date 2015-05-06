var express = require('express');
var router = express.Router();
var models = require('../models/')

/* GET home page. */
router.get('/', function(req, res, next) {
	models.Page.find(function (err, data) {
		// var docs = data
		// console.log(docs)
		res.render('catagories', { title: 'Tags', docs: data });
	})
	
});

router.get('/:tag_name', function(req, res, next) {
	var tagName = req.params.tag_name;

	//console.log(models.Page.page_tags);

	models.Page.find({
    // $elemMatch matches array subdocuments
    // $in matches a set of possibilities
    page_tags: {$elemMatch: {$in: [tagName]}}
	}).exec(function (err, pages) {
		console.log(pages);
		
    	res.render('catagories', { title: 'Tags', docs: pages });
    });
})
// tags: {$tagName: {$in: pages.page_tags}}


module.exports = router;