/* eslint-disable consistent-return */
const isAuthenticated = (req, res, next) => {
  if (!req.session.isAuthenticated) {
    return res.redirect('/signin'); // redirect to sign-in route
  }
  next();
};

module.exports = isAuthenticated;
