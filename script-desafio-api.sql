-- COMANDO PARA CRIAR O DATABASE
CREATE DATABASE desafio_api;

-- Garante que as tabelas sejam criadas na ordem correta, se já existirem
DROP TABLE IF EXISTS items;
DROP TABLE IF EXISTS orders;

-- 1. Cria a tabela de Pedidos
CREATE TABLE orders (
    "orderId" VARCHAR(50) PRIMARY KEY,
    value NUMERIC(10, 2),              
    "creationDate" TIMESTAMP          
);

-- 2. Cria a tabela de Itens
CREATE TABLE items (
    id SERIAL PRIMARY KEY,         
    "orderId" VARCHAR(50),
    "productId" INT,
    quantity INT,
    price NUMERIC(10, 2),
    FOREIGN KEY ("orderId") REFERENCES orders("orderId") ON DELETE CASCADE
);