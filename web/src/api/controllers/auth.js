const express = require('express');
const appSettings = require('../../../config/appSettings');
const { getAuthCode, confidentialClientApplication } = require('../../../helpers/msalConfig');
require('dotenv');

const router = express.Router();

router.get('/signin', (req, res) => {
  // no scopes passed. openid, profile and offline_access will be used by default.
  // #swagger.description = 'Rota de signin. Náo acessivel via Swagger.'
  // #swagger.tags = ['Auth']

  getAuthCode(process.env.SIGN_UP_SIGN_IN_POLICY_AUTHORITY, [], appSettings.APP_STATES.LOGIN, res);
});

router.get('/password', (req, res) => {
  // #swagger.description = 'Rota de redefinição de senha. Náo acessivel via Swagger.'
  // #swagger.tags = ['Auth']

  getAuthCode(process.env.RESET_PASSWORD_POLICY_AUTHORITY, [], appSettings.APP_STATES.PASSWORD_RESET, res);
});

router.get('/signout', async (req, res) => {
  // #swagger.description = 'Rota de signout. Náo acessivel via Swagger.'
  // #swagger.tags = ['Auth']

  const logoutUri = process.env.LOGOUT_ENDPOINT;
  req.session.destroy(() => {
    res.redirect(logoutUri);
  });
});

router.get('/redirect', (req, res) => {
  // determine the reason why the request was sent by checking the state
  // #swagger.tags = ['Auth']

  if (req.query.state === appSettings.APP_STATES.LOGIN) {
    // prepare the request for authentication
    appSettings.tokenRequest.code = req.query.code;
    confidentialClientApplication
      .acquireTokenByCode(appSettings.tokenRequest)
      .then((response) => {
        req.session.isAuthenticated = !!response.account?.idTokenClaims?.sub;
        req.session.sessionParams = { user: response.account, idToken: response.idToken };
        res.send({
          isAuthenticated: !!response.account?.idTokenClaims?.sub,
          givenName: response.account.idTokenClaims.given_name,
        });
      })
      .catch((error) => {
        throw new Error(error);
      });
  } else if (req.query.state === appSettings.APP_STATES.PASSWORD_RESET) {
    // If the query string has a error param
    if (req.query.error) {
      // and if the error_description contains AADB2C90091 error code
      // Means user selected the Cancel button on the password reset experience
      if (JSON.stringify(req.query.error_description).includes('AADB2C90091')) {
        // Send the user home with some message
        // But always check if your session still exists
        res.redirect('/signin');
      }
    } else {
      res.send({
        isAuthenticated: !!response.account?.idTokenClaims?.sub,
        givenName: response.account.idTokenClaims.given_name,
      });
    }
  } else {
    res.status(500).send('We do not recognize this response!');
  }
  // else if (req.query.state === appSettings.APP_STATES.EDIT_PROFILE) {
  //   appSettings.tokenRequest.scopes = [];
  //   appSettings.tokenRequest.code = req.query.code;

  //   // Request token with claims, including the name that was updated.
  //   confidentialClientApplication.acquireTokenByCode(appSettings.tokenRequest).then((response) => {
  //     req.session.sessionParams = { user: response.account, idToken: response.idToken };
  //     console.log(`${JSON.stringify(response)}`);
  //     res.send({ givenName: response.account.idTokenClaims.given_name });
  //   });
  // }
});

module.exports = router;
