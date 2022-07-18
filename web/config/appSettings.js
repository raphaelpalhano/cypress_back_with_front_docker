const dotenv = require('dotenv');
const msal = require('@azure/msal-node');

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env',
});

module.exports = {
  msalConfig: {
    auth: {
      clientId: process.env.APP_CLIENT_ID,
      authority: process.env.SIGN_UP_SIGN_IN_POLICY_AUTHORITY,
      clientSecret: process.env.APP_CLIENT_SECRET,
      knownAuthorities: [process.env.AUTHORITY_DOMAIN], // This must be an array
      redirectUri: process.env.APP_REDIRECT_URI,
      validateAuthority: false,
    },
    system: {
      loggerOptions: {
        loggerCallback(loglevel, message) {
          console.log(message);
        },
        piiLoggingEnabled: false,
        logLevel: msal.LogLevel.Verbose,
      },
    },
  },
  secure: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 4000,
  sessionSecret: 'IGUAAPPWEB',
  authCodeRequest: {
    redirectUri: process.env.APP_REDIRECT_URI,
  },
  tokenRequest: {
    redirectUri: process.env.APP_REDIRECT_URI,
  },
  APP_STATES: {
    LOGIN: 'login',
    LOGOUT: 'logout',
    PASSWORD_RESET: 'password_reset',
  },
};
