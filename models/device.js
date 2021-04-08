const mongoose = require('mongoose');
const Strings = require('../config/strings');
const validator = require('validator');
const { isInteger } = require('lodash');

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    // required: true
  },

 /*  userID: {
    Type: mongoose.types.ObjectId,
    required: true,
    length: 8,
  },
 */
  
  department: [{
    type: String,
    enum: ["Surgeon", "Veterinarian","Neurologist","Pathologist","Psychiatrist","Therapist","Nurse", "Otorhinolaryngologist",
    "Cardiologist","Pulmonologist","Pediatrician","Orthopedist ","Dentist","Gynaecologist","Ophthalmologist","Urologist" ],
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

module.exports = mongoose.model('Device',DeviceSchema);