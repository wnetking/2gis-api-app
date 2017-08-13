var express = require('express');
var router = express.Router();
var content = require('../data/contact');

/* GET users listing. */
router.post('/', function (req, res, next) {
  res.json(content);
});


module.exports = router;
