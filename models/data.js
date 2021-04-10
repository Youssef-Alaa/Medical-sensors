const mongoose = require('mongoose');
const Strings = require('../config/strings');

const DataSchema = new mongoose.Schema({
  /* patientID: {
    Type: mongoose.types.ObjectId,
    required: true,
    length: 8,
  }, */
  emergency: {
      type: Boolean,
      Default: false,
  },
  department: [{
    type: String,
    enum: Object.values(Strings.departments),
  }],
  data: {
  type: mongoose.Schema.Types.Mixed,
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
},
{ timestamps: true },
);

module.exports = mongoose.model('Data', DataSchema);