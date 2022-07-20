const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  tenantId: process.env.TENANT_ID,
  clientId: process.env.APP_CLIENT_ID,
  clientSecret: process.env.APP_CLIENT_SECRET,
  graphScope: process.env.GRAPH_SCOPE,
  graphEndpoint: process.env.GRAPH_ENDPOINT,
};
