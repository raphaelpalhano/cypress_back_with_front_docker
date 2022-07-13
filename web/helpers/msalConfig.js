const msal = require('@azure/msal-node');
const appSettings = require('../config/appSettings');

const confidentialClientApplication = new msal.ConfidentialClientApplication(appSettings.msalConfig);

/**
 * This method is used to generate an auth code request
 * @param {string} authority: the authority to request the auth code from
 * @param {array} scopes: scopes to request the auth code for
 * @param {string} state: state of the application
 * @param {Object} res: express middleware response object
 */
const getAuthCode = (authority, scopes, state, res) => {
  // prepare the request
  console.log('Fetching Authorization code');
  appSettings.authCodeRequest.authority = authority;
  appSettings.authCodeRequest.scopes = scopes;
  appSettings.authCodeRequest.state = state;

  // Each time you fetch Authorization code, update the relevant authority in the tokenRequest configuration
  appSettings.tokenRequest.authority = authority;

  // request an authorization code to exchange for a token
  return confidentialClientApplication
    .getAuthCodeUrl(appSettings.authCodeRequest)
    .then((response) => {
      console.log(`\nAuthCodeURL: \n${response}`);
      // redirect to the auth code URL/send code to
      res.redirect(response);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
};

module.exports = { getAuthCode, confidentialClientApplication };
