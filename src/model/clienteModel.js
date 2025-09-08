// Simulação de um banco de dados em memória
let clientes = [
    {id:1, name: 'Pedro Silva', email: 'pedro@email.com', telefone: '(11)98311-1256', endereco: 'R. Jornalista Martins, 45, Jd. Elvira, Itapevi, SP', dataCadastro: '16/06/2025', ativo: true},
    {id:2, name: 'Weslei Santos', email: 'weslei@email.com', telefone: '(11)97432-1369', endereco: 'Av. Jair Messias, 22, Jd. Rosemary, Itapevi, SP', dataCadastro: '22/06/2025', ativo: true},
    {id:3, name: 'Nikolas Fernandes', email: 'nikolas@email.com', telefone: '(11)99204-2266', endereco: 'R. Murphis De Pai, 99, Alphaville, Barueri, SP', dataCadastro: '24/06/2025', ativo: true},
    {id:4, name: 'Nicolas Durao', email: 'durinho@email.com', telefone: '(11)96821-9901', endereco: 'R. Sagrado Coração, 32, Ambuitá, Itapevi, SP', dataCadastro: '25/06/2025', ativo: false},
];

// Função para buscar todos os clientes
const findAll = () => {
    return clientes;
};

// Função para buscar um cliente por ID
const findById = (id) => {
    return clientes.find(clientes => clientes.id === id);
};

// Função para buscar um cliente por nome
const findByName = (name) => {
    return clientes.find(clientes => clientes.name == name);
};

// Função que adiciona um novo cliente
const create = (newCliente) => {
    const newId = clientes.length > 0 ? clientes[clientes.length -1].id + 1 : 1;
    const clienteWithId = {id: newId, ...newCliente}
    clientes.push(clienteWithId);
    return clienteWithId;
};

// Função que altera um cliente existente
const alterCliente = (id, clienteAlter) => {
    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].id === id){
            clientes[i].name = clienteAlter.name
            clientes[i].email = clienteAlter.email
            clientes[i].telefone = clienteAlter.telefone
            clientes[i].endereco = clienteAlter.endereco
            clientes[i].dataCadastro = clienteAlter.dataCadastro
            clientes[i].ativo = clienteAlter.ativo
        }
    }
}

// Função para deleter um cliente
const deleteCliente = (id) => {
    for(let i = 0; i < clientes.length; i++){
        if(clientes[i].id === id){
            clientes.splice(i, 1)
        }
    }
};

// Exportar as funções
module.exports = {
    findAll,
    findById,
    findByName,
    create,
    alterCliente,
    deleteCliente
};