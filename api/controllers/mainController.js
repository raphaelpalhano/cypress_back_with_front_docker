exports.getHomePage = (req, res) => {
  const { isAuthenticated } = req.session;
  res.send({ isAuthenticated });
};

exports.getIdPage = (req, res) => {
  const { isAuthenticated } = req.session;

  const claims = {
    name: req.session.account.idTokenClaims.name,
    preferred_username: req.session.account.idTokenClaims.preferred_username,
    oid: req.session.account.idTokenClaims.oid,
    sub: req.session.account.idTokenClaims.sub,
  };
  res.send({ isAuthenticated, claims });
};
