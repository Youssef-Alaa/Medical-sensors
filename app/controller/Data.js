const {
    registerData,
    updateData,
    getData
  } = require('../services/data.service');
  
  const { controller } = require('../middleware/controller');
  
  module.exports = {
    registerData: controller(registerData),
    updateData: controller(updateData),
    getData: controller(getData),
  };
  