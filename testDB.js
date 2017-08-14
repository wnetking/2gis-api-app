var db = require('./db')
var User = require('./models/user').User

var data = {
  username: 'test1',
  email: 'test1@test.com',
  password: '1234567'
}
var user = new User(data);
var promise = user.save();

promise.catch((err)=> {
  console.log(err);
});

promise.then(function () {
  User.findOne({'username': 'test1'}, function (err, user) {
    if (err) return handleError(err);
    console.log(user);
  })
});

