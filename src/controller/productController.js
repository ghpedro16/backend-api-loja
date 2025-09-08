const productModel = require('../model/productModel');

// Método do controlador para listar todos os produtos
const getAllProduct = (req, res) => {
    const products = productModel.findAll();
    res.status(200).json(products);
};

//Método do controlador para obter um produto por ID
const getProductById = (req, res) => {
    //Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id);

    //Chamando o método findById do productModel
    const product = productModel.findById(id);

    if(product){
        //Responder com status code de 200 (Sucesso!)
        //E devolver os dados do produto em formato json
        res.status(200).json(product);
    } else{
        res.status(404).json({mensagem: 'Produto não encontrado no banco de dados!'});
    }
};

//Método do controlador para obter um produto por nome
const getProductByName = (req, res) => {
    //Pegando o nome que foi enviado na requisição
    const name = req.params.name;

    //Chamando o método findByName do productModel
    const product = productModel.findByName(name);

    if(product){
        //Responder com status code de 200 (Sucesso!)
        //E devolver os dados do produto em formato json
        res.status(200).json(product);
    } else {
        res.status(404).json({mensagem: 'Produto não encontrado no banco de dados!'})
    }
};

//Método controlador para criar um novo produto
const createProduct = (req, res) => {
    //Pegando os dados que foram enviados pelo body da requisição
    const {name, descricao, preco, categoria, estoque, ativo} = req.body;

    //Validar se foram enviados
    if(!name || !descricao || !preco || !categoria || !estoque || !ativo){
        return res.status(400).json({mensagem: "Todos os campos são obrigatórios!"})
    } else{
        const newProduct = productModel.create({name, descricao, preco, categoria, estoque, ativo});
        res.status(200).json(newProduct);
    }
};

//Método controlador para alterar o conteudo de um produto
const alterarProduct = (req, res) => {
    const {name, descricao, preco, categoria, estoque, ativo} = req.body;
    let id = parseInt(req.params.id);

    //Validar se foram enviados
    if(!name || !descricao || !preco || !categoria || !estoque || !ativo){
        return res.status(400).json({mensagem: "Todos os campos são obrigatórios!"})
    } else{
        productModel.alterProduct(id, {name, descricao, preco, categoria, estoque, ativo});
        res.status(200).json(id);
    }

};

//Método controlador para deleter um produto
const deletarProduct = (req, res) => {
    let id = parseInt(req.params.id);

    if(id){
        //Responder com status code de 200 (Sucesso!)
        //E devolver os dados do produto em formato json
        productModel.deleteProduct(id);
        res.status(200).json(id);
    } else {
        res.status(404).json({mensagem: 'Produto não encontrado no banco de dados!'})
    }
    
};

module.exports = {
    getAllProduct,
    getProductById,
    getProductByName,
    createProduct,
    alterarProduct,
    deletarProduct
};
