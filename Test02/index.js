// Criando as variáveis const
const express = require('express');
const app = express();

// Criando rotas para o http - Cliente ao digitar a rota no endereço será direcionado a página.
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/html/index.html');
});

app.get("/sobre", function (req, res) {
    res.sendfile(__dirname + '/html/sobre.html');
});

app.get("/blog", function (req, res) {
    res.send("Bem-vindo ao meu blog!");
})

// Criando rotas dinâmicas com parâmetros
app.get("/ola/:nome/:cargo", function (req, res) {
    // res.send("OLa");
    // res.send(req.params);
    res.send("<h1>Ola " + req.params.nome + "</h1>" + "<h2>Seu cargo e: " + req.params.cargo + "</h2>");
});

// Acessar a página. Deve ficar na última linha do código
// Função de callback inicializada após a porta para retornar no terminal 
app.listen(8081, function () {
    console.log('Servidor rodando na url http://localhost:8081');
});
