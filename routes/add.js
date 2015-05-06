var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  res.render('addPage', { title: 'New Page' });
});



router.post('/submit', function(req, res, next) {
	// console.log('hello 2', req.body.pageContent)
	//res.send(req.body.pageContent)


	var models = require('../models/');

  // STUDENT ASSIGNMENT:
  // add definitions of the `title`, `body` and `url_name` variables here
  	var title = req.body.pageTitle;
  	var body = req.body.pageContent;
  	var tagsArr = req.body.pageTags.split(/[\s,]/g);
  	
  	function isTrue(tagsArr) {
  		return (tagsArr !== "" && tagsArr !== ",");
  	}
  	tagsArr = tagsArr.filter(isTrue);
  	  	
  	//console.log(title, req.body.pageTitle);
  	var url_name = title.replace(/[^\w\s]/ig, "");
  	url_name = url_name.replace(/\s/ig, "_");

  	console.log(url_name);
  	
	var page = new models.Page({ 'title': title, 'body': body, 'url_name': url_name, 'page_tags': tagsArr });
	page.save();
	res.redirect('/');
})

module.exports = router;
