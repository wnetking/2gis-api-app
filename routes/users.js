var express = require('express');
var router = express.Router();
var db = require('../db')
var User = require('../models/user').User

router.post('/:action', function (req, res, next) {
  switch (req.params.action) {
    case 'login':
      logIn(req.body, (err, message) => {
        res.json(message);
      }, (user) => {
        res.json(user);
      })
      break;
    case 'registration':
      registration(req.body, (error) => {
          res.json(error);
        }, (user, message) => {
          res.json(message);
        }
      )
      break;
    case 'get-positions':
      getPosition(req.body.username, (err)=> {
          res.json(err);
        }, (message) => {
          res.json(message);
        }
      )
      break;
    case 'save-markers':
      saveMarkers(req.body, (err)=> {
          res.json(err);
        }, (message) => {
          console.log(message);
          res.json(message);
        }
      )
      break;
  }
});

function registration(data, err, callback) {
  var user = new User(data);
  var userPromise = user.save();

  userPromise.catch((error)=> {
    err({
      message: {
        'type': 'danger',
        show: true,
        text: error.errmsg
      }
    })
  });

  userPromise.then(function () {
    User.findOne({'email': data.email}, function (error, user) {
      if (error) return err({
        message: {
          'type': 'danger',
          show: true,
          text: error.errmsg
        }
      });

      callback(user, {
        login: true,
        user: {
          name: user.username,
          email: user.email,
          positions: user.positions
        },
        message: {
          'type': 'info',
          show: true,
          text: `Welcome ${user.username}`
        }
      });
    })
  })
}

function logIn(data, err, callback) {
  var user = User.findOne({email: data.email}, (error, user)=> {
    if (error || user === null) return err(err, {
      login: false,
      message: {
        type: 'error',
        show: true,
        text: 'Wrong email'
      }
    });

    if (user.checkPassword(data.password)) {
      callback({
        login: true,
        user: {
          name: user.username,
          email: user.email,
          positions: user.positions
        },
        message: {
          type: 'info',
          show: true,
          text: `Welcome ${user.username}`
        }
      })
    } else {
      err(null, {
        login: false,
        message: {
          type: 'error',
          show: true,
          text: 'Wrong password'
        }
      })
    }
  });
  user.catch((error)=> {
    err(error, {
      login: false,
      message: {
        'type': 'error',
        show: true,
        text: error.errmsg
      }
    })
  })
}

function getPosition(username, err, callback) {
  var user = User.findOne({username: username}, (error, user)=> {
    if (error || user === null) return err({
      login: false,
      message: {
        type: 'error',
        show: false,
        text: 'no positions'
      }
    });

    callback({
      login: true,
      user: {
        name: user.username,
        email: user.email,
        positions: user.positions
      },
      message: {
        type: 'info',
        show: true,
        text: `Welcome ${user.username}`
      }
    })
  })
}

function saveMarkers(data, err, callback) {
  var user = User.update({username: data.username},
    {positions: data.positions},
    (error, user)=> {
      if (error || user === null) return err({
        login: false,
        message: {
          type: 'danger',
          show: true,
          text: 'Sorry, you cant save markers. Please login.'
        }
      });

      callback({
        message: {
          type: 'success',
          show: true,
          text: `Markers save!`
        }
      });
    });
}

module.exports = router;


