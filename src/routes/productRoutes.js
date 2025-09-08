const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

//criando as rotas da nossa API

//Rota para obter todos os produtos
router.get('/', productController.getAllProduct);

//Rota para obter dados de um produto por ID
router.get('/:id', productController.getProductById);

//Router para obter o nome do produto
router.get('/name/:name', productController.getProductByName);

//Rota para criar um novo produto
router.post('/', productController.createProduct);

//Rota para alterar um produto
router.patch('/:id', productController.alterarProduct);

//Rota para deletar um produto
router.delete('/:id', productController.deletarProduct);

module.exports = router;