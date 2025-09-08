const express = require('express');

const router = express.Router();

const clienteController = require('../controller/clienteController');

//criando as rotas da nossa API

//Rota para obter todos os clientes
router.get('/', clienteController.getAllCliente);

//Rota para obter dados de um cliente por ID
router.get('/:id', clienteController.getClienteById);

//Router para obter o nome do cliente
router.get('/name/:name', clienteController.getClienteByName);

//Rota para criar um novo cliente
router.post('/', clienteController.createCliente);

//Rota para alterar um cliente
router.patch('/:id', clienteController.alterarCliente);

//Rota para deletar um cliente
router.delete('/:id', clienteController.deletarCliente);

module.exports = router;