const dotenv = require('dotenv');

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  msalConfig: {
    appCredentials: {
      clientId: process.env.CLIENT_ID,
      tenantId: process.env.TENANT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    authRoutes: {
      redirect: process.env.REDIRECT_ROUTE,
      error: '/error', // the wrapper will redirect to this route in case of any error
      unauthorized: '/unauthorized', // the wrapper will redirect to this route in case of unauthorized access attempt
    },
    b2cPolicies: {
      signUpSignIn: {
        authority: process.env.AUTHORITY,
      },
    },
  },
  secure: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 4000,
  sessionSecret: 'ENTER_YOUR_SECRET_HERE',
};
