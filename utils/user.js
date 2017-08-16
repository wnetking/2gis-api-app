var User = require('../models/user').User

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

module.exports.registration = registration;
module.exports.logIn = logIn;
module.exports.getPosition = getPosition;
module.exports.saveMarkers = saveMarkers;