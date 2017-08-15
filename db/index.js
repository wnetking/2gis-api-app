var mongoose = require('mongoose');
mongoose.Promise = global.Promise;


var options = {
  useMongoClient: true
};

var mongodbUri = 'mongodb://wnetking:iluxa434343@ds145283.mlab.com:45283/do-it-test';
var mongoLocal = 'mongodb://localhost/do-it'

mongoose.connect(mongodbUri, options);

module.exports = mongoose;