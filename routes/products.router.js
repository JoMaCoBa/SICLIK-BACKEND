const express = require("express");
const router = express.Router();

const ProductsController = require('../controllers/products.controller');

router.get('/', ProductsController.getAllProducts);
router.get('/:id', ProductsController.getProduct);
router.get('/:category', ProductsController.getProductsByCategory);
router.post('/', ProductsController.createProduct);

module.exports = router;
