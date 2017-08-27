import mongoose from 'mongoose'

let Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: String },
  pos: { type: Array, required: true },
  created: { type: Date, default: Date.now }
});

const Marker = mongoose.model('Marker', schema);

export default Marker;