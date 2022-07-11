const express = require('express');
const Msid = require('../../../helpers/msidExpress');
const UserService = require('../services/user/user');

const userServiceInstance = new UserService();

const router = express.Router();

// protected
router.get('/user', Msid.isAuthenticated(), (req, res) => {
  const { isAuthenticated } = req.session;
  userServiceInstance.getUserInfos();

  const claims = {
    name: req.session.account.idTokenClaims?.family_name,
    secondName: req.session.account.idTokenClaims?.given_name,
    email: req.session.account.idTokenClaims?.emails[0],
    sub: req.session.account.idTokenClaims.sub,
  };
  res.send({ isAuthenticated, claims });
});

module.exports = router;
