var express = require('express');
var router = express.Router();
var db = require('../db')
var User = require('../models/user').User

router.post('/:action', function (req, res, next) {
  switch (req.params.action) {
    case 'login':
      console.log(req.body)
      break;
    case 'registration':
      var user = new User(req.body);
      var userPromise = user.save();
      
      userPromise.then(function (user) {
        User.findOne({ username: req.body.username }, function (err, user) {
          console.log(user);
          res.json(user);
        });
      })
      break;
  }
});

router.post('/', function (req, res, next) {
  console.log(req.body)
  res.json(req.body);
});

module.exports = router;


