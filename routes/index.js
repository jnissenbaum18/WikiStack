var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'WIKISTACK' });
});

router.get('/about', function(req, res, next) {
  res.render('about_us', { title: 'WIKISTACK' });
});



module.exports = router;
