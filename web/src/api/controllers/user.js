const express = require('express');
const UserService = require('../services/user/user');

const userServiceInstance = new UserService();

const router = express.Router();

// protected
router.get('/user', (req, res) => {
  const {
    isAuthenticated,
    sessionParams: { user },
  } = req.session;
  userServiceInstance.getUserInfos();

  const claims = {
    name: user.idTokenClaims?.family_name,
    secondName: user.idTokenClaims?.given_name,
    email: user.idTokenClaims?.emails?.[0],
    sub: user.idTokenClaims.sub,
  };
  res.send({ isAuthenticated, claims });
});

module.exports = router;
