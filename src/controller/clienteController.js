const clienteModel = require('../model/clienteModel');

// Método do controlador para listar todos os clientes
const getAllCliente = (req, res) => {
    const clientes = clienteModel.findAll();
    res.status(200).json(clientes);
};

//Método do controlador para obter um cliente por ID
const getClienteById = (req, res) => {
    //Pegando o id que foi enviado na requisição
    const id = parseInt(req.params.id);

    //Chamando o método findById do productModel
    const cliente = clienteModel.findById(id);

    if(cliente){
        //Responder com status code de 200 (Sucesso!)
        //E devolver os dados do produto em formato json
        res.status(200).json(cliente);
    } else{
        res.status(404).json({mensagem: 'Cliente não encontrado no banco de dados!'});
    }
};

//Método do controlador para obter um produto por nome
const getClienteByName = (req, res) => {
    //Pegando o nome que foi enviado na requisição
    const name = req.params.name;

    //Chamando o método findByName do productModel
    const cliente = clienteModel.findByName(name);

    if(cliente){
        //Responder com status code de 200 (Sucesso!)
        //E devolver os dados do produto em formato json
        res.status(200).json(cliente);
    } else {
        res.status(404).json({mensagem: 'Produto não encontrado no banco de dados!'})
    }
};


//Método controlador para criar um novo cliente
const createCliente = (req, res) => {
    //Pegando os dados que foram enviados pelo body da requisição
    const {name, email, telefone, endereco, dataCadastro, ativo} = req.body;

    //Validar se foram enviados
    if(!name || !email || !telefone || !endereco || !dataCadastro || !ativo){
        return res.status(400).json({mensagem: "Todos os campos são obrigatórios!"})
    } else{
        const newCliente = clienteModel.create({name, email, telefone, endereco, dataCadastro, ativo});
        res.status(200).json(newCliente);
    }
};


//Método controlador para alterar o conteudo de um cliente
const alterarCliente = (req, res) => {
    const {name, email, telefone, endereco, dataCadastro, ativo} = req.body;
    let id = parseInt(req.params.id);

    clienteModel.alterCliente(id, {name, email, telefone, endereco, dataCadastro, ativo});
    res.status(200).json(id);

};

//Método controlador para deleter um cliente
const deletarCliente = (req, res) => {
    let id = parseInt(req.params.id);

    clienteModel.deleteCliente(id);
    res.status(200).json(id);
}

module.exports = {
    getAllCliente,
    getClienteById,
    getClienteByName,
    createCliente,
    alterarCliente,
    deletarCliente
};