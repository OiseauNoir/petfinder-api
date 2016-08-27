var express = require('express');
var router = express.Router();

var Pets = require('../models/pet');



// GET home page.
router.get('/', function(req, res, next) {
  res.render('index', { title: 'OLA' });
});

module.exports = router;
