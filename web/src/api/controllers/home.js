const express = require('express');

const router = express.Router();

router.get('/home', (req, res) => {
  const { isAuthenticated } = req.session;
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
  return res.send({ isAuthenticated });
});

module.exports = router;
