const {
    registerDevice,
    updateDevice,
    getDevice
  } = require('../services/device.service');
  
  const { controller } = require('../middleware/controller');
  
  module.exports = {
    registerDevice: controller(registerDevice),
    updateDevice: controller(updateDevice),
    getDevice: controller(getDevice),
  };
  