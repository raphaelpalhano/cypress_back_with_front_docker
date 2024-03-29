const express = require('express');
const appSettings = require('../../../config/appSettings');
const errorRedirect = require('../../../helpers/errorRedirect');
const { getIguaAccessToken } = require('../../../helpers/iguaHttp');
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

  if (req.query.code) {
    // prepare the request for authentication
    appSettings.tokenRequest.code = req.query.code;
    return confidentialClientApplication
      .acquireTokenByCode(appSettings.tokenRequest)
      .then(async (response) => {
        const { id: sessionId } = req.session;
        req.session.isAuthenticated = !!response.account?.idTokenClaims?.sub;
        req.session.sessionParams = { user: response.account, idToken: response.idToken };
        const isAuthenticated = !!response.account?.idTokenClaims?.sub;
        res.set({
          isAuthenticated,
          givenName: response.account.idTokenClaims.given_name,
          sessionId,
        });

        // obtenção de token de api da igua
        const token = await getIguaAccessToken();
        // opcao de armazenar o token em cookie tb, caso seja melhor
        // res.cookie('testeCookie', token, { maxAge: 900000, httpOnly: true });
        return res.redirect(`/home/?token=${JSON.stringify(token)}`);
      })
      .catch(() => errorRedirect(req?.query?.error_description, res));
  }
  return errorRedirect(req?.query?.error_description, res);
});

module.exports = router;
