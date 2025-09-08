// Importar o módulo Express
const express = require ('express');

// Criar uma aplicação Express
const app = express();

// Definir a porta em que o servidor irá escutar
const porta = 7000;

//Definir o middleware para analisar json do body
app.use(express.json());

// Definir a rota de teste de API
app.get('/', (req, res) =>{
    res.send("API está funcionando!")
});

//Importa as rotas de produto
const productRoutes = require('./src/routes/productRoutes');

//Usando as rotas do produto
app.use('/api/product', productRoutes);

//Usando as rotas do produto por nome
app.use('/api/product/name', productRoutes);

//Importa as rotas de cliente
const clienteRoutes = require('./src/routes/clienteRoutes');

//Usando as rotas do cliente
app.use('/api/cliente', clienteRoutes);

//Usando as rotas do cliente por nome
app.use('/api/cliente/name', clienteRoutes);

// Inicia o servidor
app.listen(porta, () =>{
    console.log(`Servidor rodando em http://localhost:${porta}`);
});
