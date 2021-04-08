const mongoose = require('mongoose');
const Strings = require('../config/strings');
const validator = require('validator');
const { isInteger } = require('lodash');

const DataSchema = new mongoose.Schema({


  /* patientID: {
    Type: mongoose.types.ObjectId,
    required: true,
    length: 8,
  }, */
  
  warning: {
      type: Boolean,
      Default: false,

  },
 
  
  department: [{
    type: String,
    enum: ["Surgeon", "Veterinarian","Neurologist","Pathologist","Psychiatrist","Therapist","Nurse", "Otorhinolaryngologist",
    "Cardiologist","Pulmonologist","Pediatrician","Orthopedist ","Dentist","Gynaecologist","Ophthalmologist"],
  }],

  data: {
  type: mongoose.Schema.Types.Mixed,
  }
}, 



{ timestamps: true },
);

module.exports = mongoose.model('Data',DataSchema);