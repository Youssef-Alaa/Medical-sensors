const router = require('express-promise-router')();

const { jwt } = require('../../utils/passport-strategies');
const { validate } = require('../middleware/validator');



const {
  registerData,
  updateData,
  getData
} = require('../controller/Data');

router.post('/', registerData);

router.put('/',   updateData);

router.get('/',  getData);

exports.dataRouter = router;
