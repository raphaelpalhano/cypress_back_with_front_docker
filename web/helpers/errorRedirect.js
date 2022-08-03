/* eslint-disable consistent-return */
const errorRedirect = (errorMsg, res) => {
  if (!errorMsg) return res.redirect('/signin');
  const code = errorMsg.substring(0, 11);
  const errors = {
    AADB2C90091: '/signin',
    AADB2C90118: '/password',
  };
  const val = errors[code];
  return res.redirect(val);
};

module.exports = errorRedirect;
