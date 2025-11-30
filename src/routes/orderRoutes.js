const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Definição das rotas conforme o desafio
router.post('/order', orderController.createOrder);
router.get('/order/:id', orderController.getOrder);

// Opcionais
router.get('/order/list', orderController.listOrders);
router.put('/order/:id', orderController.updateOrder);
router.delete('/order/:id', orderController.deleteOrder);

module.exports = router;