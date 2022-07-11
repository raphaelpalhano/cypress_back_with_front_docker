const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => {
  const { isAuthenticated } = req.session;
  res.send({ isAuthenticated });
});

module.exports = router;
