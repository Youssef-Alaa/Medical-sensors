const _ = require('lodash');
const Device = require('../../models/device.js');
const { errorCodes } = require('../../config');
const { customAssign } = require('../../utils/util.js')

const getDeviceById = async id => {
  const device = await Device.findById(id);
  if (!Device) return { error: `Device with ID ${id} is not found`, status: errorCodes.NOT_FOUND };
  return { device: device.toJSON() };
}
exports.getDeviceById = getDeviceById;

exports.registerDevice = async ({ user, body }) => {
  if(user.role != "admin") return { error: "Not Authorized!", status: errorCodes.VALIDATION };
  const newDevice = new Device(body);
  try {
    let createdDevice = await newDevice.save();
    delete createdDevice._doc.__v;
    return { data: { createdDevice }, message: 'Device Created Successfully!' };
  } catch (error) {
    return { error, status: errorCodes.VALIDATION }
  }
};

exports.updateDevice = async ({ user, body }) => {
  if(user.role != "admin") return { error: "Not Authorized!", status: errorCodes.VALIDATION };
  try {
    let id = body.deviceId;
    delete body.id;
    let updatedDevice = await Device.findOneAndUpdate({ _id: id }, body, { new: true });
    delete updatedDevice._doc.__v;
    return { data: { updatedDevice }, message: 'Device Updated Successfully!' };
  } catch (error) {
    return { error, status: errorCodes.VALIDATION }
  }
};

exports.getDevice = async ({ query }) => {
  const { _id, name, department } = query;
  const where = customAssign({}, { _id, name, department });

  let devices = await Device.find(where);
  if(!devices) return { error: 'No Devices Found', status: errorCodes.NOT_FOUND };
  return { data: { devices }, message: 'device(s) found!' };
};
