// Simulação de um banco de dados em memória
let products = [
    {id:1, name: 'Tijolo', descricao: 'Tijolo Baiano de 6 furos', preco: 1.69, categoria: 'Construção', estoque: '3000', ativo: true},
    {id:2, name: 'Cimento', descricao: 'Cimento Votoran 50Kg', preco: 31.90, categoria: 'Construção', estoque: '380', ativo: true},
    {id:3, name: 'Cerâmica', descricao: 'Cerâmica Portinari 50x50', preco: 62.90, categoria: 'Revestimento', estoque: '275', ativo: true},
    {id:4, name: 'Tinta', descricao: 'Lata de Tinta Verde Limão Coral 18L', preco: 369.90, categoria: 'Pintura', estoque: '0', ativo: false}
];

// Função para buscar todos os produtos
const findAll = () => {
    return products;
};

// Função para buscar um produto por ID
const findById = (id) => {
    return products.find(products => products.id === id);
};

// Função para buscar um produto por nome
const findByName = (name) => {
    return products.find(products => products.name == name);
};

// Função que adiciona um novo produto
const create = (newProduct) => {
    const newId = products.length > 0 ? products[products.length -1].id + 1 : 1;
    const productWithId = {id: newId, ...newProduct}
    products.push(productWithId);
    return productWithId;
};

// Função que altera o produto
const alterProduct = (id, productAlter) => {
    for(let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products[i].name = productAlter.name
            products[i].descricao = productAlter.descricao
            products[i].preco = productAlter.preco
            products[i].categoria = productAlter.categoria
            products[i].estoque = productAlter.estoque
            products[i].ativo = productAlter.ativo
        }
    }
    
};

// Função para deleter um produto
const deleteProduct = (id) => {
    for(let i = 0; i < products.length; i++){
        if(products[i].id === id){
            products.splice(i, 1)
        }
    }
};

// Exportar as funções
module.exports = {
    findAll,
    findById,
    findByName,
    create,
    alterProduct,
    deleteProduct

};