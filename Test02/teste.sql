-- Criando novo banco de dados
create database test;

-- Inserindo dados na tabela
insert into usuarios(nome, email, idade) values (
    "Miguel Oreia",
    "miguel.cat@teste.com.br",
    22
);

-- Selecionando dados na tabela
select * from usuarios where idade <= 32;

-- Deletando dados na tabela
delete from usuarios where nome = "Victor Lima";
delete from usuarios where id = 6;

-- Atualizando dados na tabela
update usuarios set email = "cat.miguel@teste.com.br" where email = "miguel.cat@teste.com.br";
