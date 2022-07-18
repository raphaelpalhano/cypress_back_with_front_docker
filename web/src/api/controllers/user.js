const express = require('express');
const isAuthenticated = require('../../../helpers/authMiddleware');
const UserService = require('../services/user/user');

const userServiceInstance = new UserService();

const router = express.Router();
// protected
router.get('/user', isAuthenticated, (req, res) => {
  // #swagger.tags = ['User']
  // #swagger.description = 'Rertorna informações básicas de sessão do usuário autenticado.'

  /* #swagger.responses[200] = {
              description: 'Usuário autenticado.',
              schema: {
                type: 'object',
                properties: {
                name: 'Daniel',
                email: 'daniel@mail.com',
                secondName: 'Prokofiev',
                sub: '129fjs-fjskfjskfj-fjskfjskfj-fjskfjskfj',
                },
              }
        } */

  const {
    isAuthenticated: auth,
    sessionParams: { user },
  } = req.session;
  userServiceInstance.getUserInfos();

  const claims = {
    name: user.idTokenClaims?.family_name,
    secondName: user.idTokenClaims?.given_name,
    email: user.idTokenClaims?.emails?.[0],
    sub: user.idTokenClaims.sub,
  };
  return res.send({ isAuthenticated: auth, claims });
});

module.exports = router;
