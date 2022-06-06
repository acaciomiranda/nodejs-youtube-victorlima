// Model criado para conectar com o banco de dados
const db = require('./db')

const Post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.TEXT
    }
})

module.exports = Post

// Executar esse comando uma única vez 
// Post.sync({force: true})