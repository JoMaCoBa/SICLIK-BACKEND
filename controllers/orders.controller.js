const Order = require('../models/order.model');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Error to obtain products" });
  }
};

exports.createOrder = async (req, res) => {
  try {
    const { name, email, address, products } = req.body;
    const order = await Order.create({name, email, address, products});
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: "Error to create order" });
  }
};
