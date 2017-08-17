import  mongoose from 'mongoose'
import config from '../../etc/config.json'

mongoose.Promise = global.Promise;

export function setUpConnection() {
  mongoose.connect(config.mongoose.localUrl, config.mongoose.options);
}

