const _ = require('lodash');
const Data = require('../../models/data.js');
const { errorCodes } = require('../../config');
const {customAssign} = require('../../utils/util.js')


const getdataById = async id => {
  const data = await data.findById(id);
  if (!Data) return { error: `Data with ID ${id} is not found`, status: errorCodes.NOT_FOUND };
  return { deata: data.toJSON() };
}
exports.getdataById = getdataById;


exports.registerData = async ({ body }) => {
 
  const newData = new Data(body);
  try {
    let createdData = await newData.save();
    delete createdData._doc.__v;
    return { data: { createdData }, message: 'Data Created Successfully!' };
  } catch (error) {
    return { error, status: errorCodes.VALIDATION }
  }
};



exports.getData = async ({ query }) => {
  const { patientID, department } = query;
  const where = customAssign({}, { patientID, department});

  let data = await Data.find(where);
  if(!data) return { error: 'No Data Found', status: errorCodes.NOT_FOUND };
  return { data: { data }, message: 'data(s) found!' };
};