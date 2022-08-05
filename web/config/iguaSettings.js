const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  iguaApiSecret: process.env.IGUA_API_SECRET,
  // add your settings here
};
