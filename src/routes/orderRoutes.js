const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Definição das rotas conforme o desafio
router.post('/order', orderController.createOrder);
router.get('/order/:id', orderController.getOrder);


module.exports = router;