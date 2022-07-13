/* eslint-disable consistent-return */
const path = require('path');
const express = require('express');

// custom middleware to check auth state
function isAuthenticated(req, res, next) {
  if (!req.session.isAuthenticated) {
    return res.redirect('/signin'); // redirect to sign-in route
  }
  next();
}
const router = express.Router();
const auth = require('./auth');
const home = require('./home');
const user = require('./user');

router.use(express.static(path.join(__dirname, '../../../public')));
router.use(auth);
router.use(home);
router.use(isAuthenticated, user);

// another routes
router.get('/', (req, res) => res.redirect('/home'));
router.get('/error', (req, res) => res.redirect('/500.html'));
router.get('/unauthorized', (req, res) => res.redirect('/401.html'));
router.get('*', (req, res) => res.status(404).redirect('/404.html'));

module.exports = router;
