const mongoose = require('mongoose');
const Strings = require('../config/strings');
const validator = require('validator');
const { toInteger } = require('lodash');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },

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

 /*  userID: {
    Type: mongoose.Schema.Types.ObjectId,
    ref:'User',
  
  },
 */

  

  role: {
    type: String,
    enum: [Strings.role.admin,Strings.role.doctor,Strings.role.patient],
    default: Strings.role.member
  },

  department: [{
    type: String,
    enum: ["Surgeon", "Veterinarian","Neurologist","Pathologist","Psychiatrist","Therapist","Nurse", "Otorhinolaryngologist",
    "Cardiologist","Pulmonologist","Pediatrician","Orthopedist ","Dentist","Gynaecologist","Ophthalmologist"],
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