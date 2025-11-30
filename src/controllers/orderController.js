const pool = require('../config/db');

// Função auxiliar para mapear e transformar os dados
const mapOrderData = (data) => {
    return {
        orderId: data.numeroPedido,
        value: data.valorTotal,
        creationDate: data.dataCriacao,
        items: data.items.map(item => ({
            productId: parseInt(item.idItem), // Convertendo string para int
            quantity: item.quantidadeItem,
            price: item.valorItem
        }))
    };
};

const createOrder = async (req, res) => {
    console.log("Chegou uma requisição! Dados recebidos:", req.body);

    const client = await pool.connect(); // Pega um cliente para a transação

    try {
        // 1. Transformação dos dados
        const cleanData = mapOrderData(req.body);

        // 2. Inicia transação
        await client.query('BEGIN');

        // 3. Insere pedido
        const orderQuery = `
            INSERT INTO orders ("orderId", "value", "creationDate")
            VALUES ($1, $2, $3)
            RETURNING *
        `;
        await client.query(orderQuery, [cleanData.orderId, cleanData.value, cleanData.creationDate]);

        // 4. Insere itens
        const itemQuery = `
            INSERT INTO items ("orderId", "productId", "quantity", "price")
            VALUES ($1, $2, $3, $4)
        `;

        for (const item of cleanData.items) {
            await client.query(itemQuery, [
                cleanData.orderId,
                item.productId,
                item.quantity,
                item.price
            ]);
        }

        // 5. Confirma transação
        await client.query('COMMIT');

        res.status(201).json({ 
            message: "Pedido criado com sucesso!", 
            data: cleanData // Retorna o JSON já transformado conforme pedido
        });

    } catch (error) {
        await client.query('ROLLBACK'); // Desfaz tudo se der erro
        console.error(error);
        res.status(500).json({ error: "Erro ao processar pedido." });
    } finally {
        client.release(); // Libera a conexão
    }
};

const getOrder = async (req, res) => {
    const { id } = req.params;
    
    try {
        // Tenta buscar o pedido
        const orderResult = await pool.query('SELECT * FROM orders WHERE "orderId" = $1', [id]);
        
        if (orderResult.rows.length === 0) {
            return res.status(404).json({ error: "Pedido não encontrado" });
        }

        // Busca os itens desse pedido
        const itemsResult = await pool.query('SELECT * FROM items WHERE "orderId" = $1', [id]);

        // Monta o objeto de resposta
        const response = {
            orderId: orderResult.rows[0].orderId,
            value: parseFloat(orderResult.rows[0].value), //converte a resposta em float
            creationDate: orderResult.rows[0].creationDate,
            items: itemsResult.rows.map(item => ({
                productId: item.productId,
                quantity: item.quantity,
                price: parseFloat(item.price)
            }))
        };

        res.json(response);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro ao buscar pedido" });
    }
};

module.exports = { createOrder, getOrder };