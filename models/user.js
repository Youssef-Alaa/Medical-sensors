const mongoose = require('mongoose');
const Strings = require('../config/strings');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: '{VALUE} is not a valid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  name: {
    type: String,
    required: true,
    minlength: 2,
  },
  role: {
    type: String,
    enum: [Strings.role.admin,Strings.role.doctor,Strings.role.patient],
    default: Strings.role.patient
  },
  department: [{
    type: String,
    enum: Object.values(Strings.departments),
  }],
  avatar: {
    type: String,
  },
  bio: {
    type: String
  },
},
{ timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);