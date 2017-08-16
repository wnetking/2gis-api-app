var express = require('express');
var router = express.Router();
var db = require('../db');
var utils = require('../utils/user');

router.post('/:action', function (req, res, next) {
  switch (req.params.action) {
    case 'login':
      utils.logIn(req.body, (err, message) => {
        res.json(message);
      }, (user) => {
        res.json(user);
      })
      break;
    case 'registration':
      utils.registration(req.body, (error) => {
          res.json(error);
        }, (user, message) => {
          res.json(message);
        }
      )
      break;
    case 'get-positions':
      utils.getPosition(req.body.username, (err)=> {
          res.json(err);
        }, (message) => {
          res.json(message);
        }
      )
      break;
    case 'save-markers':
      utils.saveMarkers(req.body, (err)=> {
          res.json(err);
        }, (message) => {
          console.log(message);
          res.json(message);
        }
      )
      break;
  }
});

module.exports = router;


