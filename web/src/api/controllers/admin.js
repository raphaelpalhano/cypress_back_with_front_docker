const express = require('express');
const { msoftGraph } = require('../../../helpers/msoftGraphConfig');

const router = express.Router();

router.get('/admin/users', async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'Listar todos os usuários'
  /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/Users" },
               description: 'Lista de usuários'
        } */

  const users = await msoftGraph('get', '/users');

  return res.send(users);
});

router.get('/admin/user/:id', async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'Endpoint para obter um usuário.'
  // #swagger.parameters['id'] = { description: 'ID do usuário.' }
  /* #swagger.responses[200] = {
               schema: { $ref: "#/definitions/User" },
               description: 'Usuário encontrado.'
        } */

  const { id } = req.params;
  const users = await msoftGraph('get', `/users/${id}`);

  return res.send(users);
});

router.post('/admin/users', async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'Endpoint para criar um usuário.'
  /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'Informações do usuário.',
               required: true,
               schema: { $ref: "#/definitions/AddUser" }
        } */

  const data = req.body;
  const users = await msoftGraph('post', '/users', data);
  return res.send(users);
});

router.patch('/admin/user/:id', async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'Endpoint para atualizar um usuário.'
  // #swagger.parameters['id'] = { description: 'ID do usuário.' }
  /* #swagger.parameters['newUser'] = {
               in: 'body',
               description: 'Informações do usuário.',
               required: true,
               schema: { $ref: "#/definitions/AddUser" }
        } */

  const data = req.body;
  const users = await msoftGraph('patch', `/users/${id}`, data);
  return res.send(users);
});

router.delete('/admin/user/:id', async (req, res) => {
  // #swagger.tags = ['Admin']
  // #swagger.description = 'Endpoint para deletar um usuário.'
  // #swagger.parameters['id'] = { description: 'ID do usuário.' }

  const { id } = req.params;
  const users = await msoftGraph('delete', `/users/${id}`);
  return res.send(users);
});
module.exports = router;
