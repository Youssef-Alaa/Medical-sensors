const mongoose = require('mongoose');
const Strings = require('../config/strings');

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },
  department: [{
    type: String,
    enum: Object.values(Strings.departments),
  }],
  avatar: {
    type: String,
  },
  bio: {
    type: String,
  },
  type: {
    type: String,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
}, 
{ timestamps: true },
);

module.exports = mongoose.model('Device', DeviceSchema);