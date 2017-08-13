var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://wnetking:iluxa434343@ds145283.mlab.com:45283/do-it-test', {
  useMongoClient: true,
});

module.exports = mongoose;
