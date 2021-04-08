const dotenv = require('dotenv');

const envFound = dotenv.config();
if (!envFound) {
  throw new Error(' Couldn\'t find .env file!');
}

module.exports = {
  url: 'mongodb+srv://VforVendetta:0163875641@medical.5scsg.mongodb.net/Medical?retryWrites=true&w=majority',
  secret: 'SECRET'
};
