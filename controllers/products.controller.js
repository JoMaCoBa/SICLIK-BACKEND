const Product = require('../models/product.model');

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error to obtain products" });
  }
};

exports.getProductsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const products = await Product.findAll({ where: { category } });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Error to obtain products" });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (product) {
      res.status(200).json(product);
    } else {
      res.status(404).json({ error: "Product not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error to obtain product" });
  }
};

exports.createProduct = async (req, res) => {
  try {
    console.log("Body recibido:", JSON.stringify(req.body, null, 2));;
    const { name, price, image, description } = req.body;
    const product = await Product.create({name, price, image, description});
    res.status(201).json(product);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error to create product" });
  }
};
