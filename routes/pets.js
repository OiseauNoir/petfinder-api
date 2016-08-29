var express = require('express');
var router = express.Router();
var Pet = require('../models/dog');

// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OLA' });
});



module.exports = router;
