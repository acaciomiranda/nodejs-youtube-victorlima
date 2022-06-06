const Sequelize = require('sequelize');

// Criando a conexão com o banco de dados
const sequelize = new Sequelize("postapp", "root", "ba230190", {
    host: 'localhost',
    dialect: "mysql",
    query: {raw: true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}