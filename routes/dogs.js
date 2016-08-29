var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');

// GET dogs list.
router.get('/', function(req, res, next) {
  res.json('dogs');
});



module.exports = router;
