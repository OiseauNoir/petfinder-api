var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');



// GET home page.
router.get('/', function (req, res, next) {
  Dog.find({}, function (err, dogs) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(dogs)
    }
  })
});
module.exports = router;
