// Criando a conexão com o bando de dados
const Sequelize = require('sequelize')
const sequelize = new Sequelize("test", "root", "ba230190", {
    host: 'localhost',
    dialect: "mysql"
})

// Criando model para tableas no MySQL
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

// Criando uma postagem dentro da tabela no Banco de Dados
// Postagem.create({
//     titulo: "Um titulo qualquer",
//     conteudo: "Um conteudo aleatorio e qualquer"
// })

const Usuario = sequelize.define('usuarios', {
    nome:{
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

// Criando um usuario dentro da tabela no Banco de Dados
Usuario.create({
    nome: "Acacio",
    sobrenome: "Miranda",
    idade: 32,
    email: "acacio@teste.com.br"
})

// Usuario.sync ({force: true})

// Postagem.sync({force: true})

//  Criando conexão com o Banco de Dados através do Sequelize - Funções then e catch
// sequelize.authenticate().then(function(){
//     console.log("Conectado com sucesso!")
// }).catch(function(erro){
//     console.log("Falha ao se conectar: "+erro)
// })  

