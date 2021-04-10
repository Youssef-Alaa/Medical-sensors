const router = require('express-promise-router')();

const { jwt } = require('../../utils/passport-strategies');
const { validate } = require('../middleware/validator');

const {
  registerDevice,
  updateDevice,
  getDevice
} = require('../controller/Device');

router.post('/', jwt(), registerDevice);

router.put('/', jwt(), updateDevice);

router.get('/', getDevice);

exports.deviceRouter = router;
