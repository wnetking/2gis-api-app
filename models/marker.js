import mongoose from 'mongoose'

let Schema = mongoose.Schema;

var schema = new Schema({
  author: { type: String },
  pos: { type: Array, required: true },
  label: { type: String },
  draggable: { type: Boolean },
  clickable: { type: Boolean },
  created: { type: Date, default: Date.now }
});

const Marker = mongoose.model('Marker', schema);

export default Marker;