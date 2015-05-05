var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WIKISTACK' });
});

router.get('/about', function(req, res, next) {
  res.render('about_us', { title: 'WIKISTACK' });
});

router.get('/add', function(req, res, next) {
  res.render('addPage', { title: 'New Page' });
});

router.post('/newPage', function(req, res, next) {
	console.log('hello 1', req.body)
	// console.log('hello 2', req.body.pageContent)
	res.send(req.body)
})

module.exports = router;
