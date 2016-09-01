var express = require('express');
var router = express.Router();
var Dog = require('../models/cat');

// GET cats list.
router.get('/', function (req, res, next) {
  // console.log(req.query);
  Cat.find(req.query, function (err, dogs) {
    if (err) {
      res.status(500).send()
    } else {
      res.json(cats)
    }
  })
});

module.exports = router;
