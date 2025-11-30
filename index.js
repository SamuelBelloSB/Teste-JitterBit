const express = require('express');
const orderRoutes = require('./src/routes/orderRoutes');

const app = express();

app.use(express.json()); // Importante para ler o JSON do body

app.use('/', orderRoutes); // Prefixo base

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});