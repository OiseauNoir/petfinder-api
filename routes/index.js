var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Connect The Spots' });
});

router.get('/shelters', function(req, res, next) {
  res.render('shelters', { title: 'Shelters In Need' });
});

router.get('/doglist', function(req, res, next) {
  res.render('doglist', { title: 'List' });
});

router.get('/catlist', function(req, res, next) {
  res.render('catlist', { title: 'Cats' });
});

router.get('/quiz', function(req, res, next) {
  res.render('quiz', { title: 'Quiz' });
});

module.exports = router;
