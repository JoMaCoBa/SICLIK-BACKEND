const express = require('express');
const router = express.Router();

const OrdersController = require('../controllers/orders.controller');

router.get('/', OrdersController.getAllOrders);
router.post('/', OrdersController.createOrder);

module.exports = router;
