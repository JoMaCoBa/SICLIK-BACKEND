const express = require("express");
const router = express.Router();

const ProductsController = require('../controllers/products.controller');
const controller = new ProductsController();

router.get('/', (req, res) => {
  const products = controller.getAllProducts();
  res.status(200).json(products);
});

router.get('/:id', (req, res) => {
  const {id} = req.params;
  const product = controller.getDetailproduct(id);
  if(product === undefined) {
    res.status(404).json({message: 'Product not found'});
  }
  res.status(200).json(product);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newProduct = controller.createProduct(body);
  res.status(201).json(newProduct);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const product = controller.editProduct(id, body);
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const message = controller.deleteProduct(id);
  res.json(message);
});

module.exports = router;
