# 📦 API de Gerenciamento de Pedidos

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)

> Desafio técnico de desenvolvimento de uma API RESTful para controle de pedidos e itens, utilizando Node.js e banco de dados relacional PostgreSQL.

---

## 📄 Documentação da API

A documentação completa das rotas, com exemplos de requisição e resposta, pode ser acessada através do link abaixo:

[![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://documenter.getpostman.com/view/28197701/2sB3dLUryy)

🔗 **[Acessar Documentação Online](https://documenter.getpostman.com/view/28197701/2sB3dLUryy)**

---

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução JavaScript.
* **Express**: Framework para criação da API.
* **PostgreSQL**: Banco de dados relacional.
* **pg (node-postgres)**: Driver de conexão com o banco.
* **Dotenv**: Gerenciamento de variáveis de ambiente.

## ✨ Funcionalidades

O sistema permite realizar o **CRUD** completo de pedidos, com as seguintes características:

* ✅ **Criar Pedido (POST):** Recebe um JSON, transforma os dados e salva em duas tabelas (`orders` e `items`) utilizando **Transações** (BEGIN/COMMIT) para garantir a integridade dos dados.
* ✅ **Listar Todos (GET):** Retorna todos os pedidos cadastrados com seus respectivos itens aninhados.
* ✅ **Consultar por ID (GET):** Busca os detalhes de um pedido específico.
* ✅ **Atualizar (PUT):** Permite alterar o valor total de um pedido.
* ✅ **Deletar (DELETE):** Remove um pedido e, automaticamente, exclui os itens associados (Cascade Delete).

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* Node.js instalado
* PostgreSQL instalado e rodando

### Passo a Passo

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/SamuelBelloSB/Teste-JitterBit.git](https://github.com/SamuelBelloSB/Teste-JitterBit.git)
    cd desafio-api-pedidos
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Configure as Variáveis de Ambiente:**
    Crie um arquivo `.env` na raiz do projeto e configure suas credenciais do banco:
    ```env
    DB_USER=seu_usuario_postgres
    DB_HOST=localhost
    DB_NAME=desafio_api
    DB_PASSWORD=sua_senha
    DB_PORT=5432
    PORT=3000
    ```

4.  **Crie o Banco de Dados:**
    No seu cliente PostgreSQL (pgAdmin/DBeaver), crie um banco chamado `desafio_api`.

5.  **Gere as Tabelas:**
    Rode o script de configuração para criar as tabelas automaticamente:
    ```bash
    node setup.js
    ```

6.  **Inicie o Servidor:**
    ```bash
    npm start
    # Ou para desenvolvimento:
    npx nodemon index.js
    ```

## 🗄️ Estrutura do Banco de Dados

O projeto possui relacionamento **1:N** (Um para Muitos), onde um Pedido pode ter vários Itens.

* **Tabela `orders`**: `orderId` (PK), `value`, `creationDate`.
* **Tabela `items`**: `id` (PK), `orderId` (FK), `productId`, `quantity`, `price`.

## 🤖 Transparência e Inteligência Artificial (IA)

Esta seção é dedicada à transparência no processo de desenvolvimento deste projeto.

* **Uso de IA:** Este projeto utilizou uma ferramenta de **Inteligência Artificial Generativa** como co-piloto e assistente de mentoria e estudos.
* **Função da IA:** A ferramenta foi utilizada principalmente para:
    * Revisão e validação da arquitetura (Estrutura do Express, uso de **Transações** em SQL).
    * Diagnóstico e solução de erros.
    * Estruturação e formatação da documentação (`README.md`, documentação da API, guias de teste).
* **Autoria Humana:** Todas as decisões críticas (escolha do PostgreSQL, modelagem do banco de dados relacional, lógica de *mapping* dos dados) e a integração final dos módulos foram realizadas pelo desenvolvedor, que manteve a responsabilidade total e a autoria sobre o código final.

---

## 👨‍💻 Autor

Desenvolvido por **Samuel Bello**.

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/samuelbellosb/)