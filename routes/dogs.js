var express = require('express');
var router = express.Router();
var Dog = require('../models/dog');

// GET dogs list.
router.get('/', function (req, res, next) {
  console.log(req.query);
  Dog.find(req.query, function (err, dogs) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(dogs)
    }
  })
});

module.exports = router;
