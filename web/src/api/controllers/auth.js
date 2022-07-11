const express = require('express');
const msid = require('../../../helpers/msidExpress');

const router = express.Router();

router.get(
  '/signin',
  msid.signIn({
    postLoginRedirect: '/',
  }),
);

router.get(
  '/signout',
  msid.signOut({
    postLogoutRedirect: '/',
  }),
);

module.exports = router;
