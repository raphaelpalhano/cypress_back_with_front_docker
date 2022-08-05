const express = require('express');
const isAuthenticated = require('../../../helpers/authMiddleware');

const router = express.Router();

router.get('/home', isAuthenticated, (req, res) => {
  const { isAuthenticated: auth } = req.session;
  // #swagger.tags = ['Home']
  // #swagger.description = 'Verifica se o usuário está autenticado.'

  /* #swagger.responses[200] = {
              description: 'Usuário autenticado.',
              schema: {
                type: 'object',
                properties: {
                isAuthenticated: true,
                },
              },
        } */

  return res.send({ isAuthenticated: auth });
});

module.exports = router;
