const express = require('express');

const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router');

function routerApi(app){
  const router = express.Router();
  app.use('/api', router);
  router.use('/products', productsRouter);
  router.use('/orders', ordersRouter);
}

module.exports = routerApi;
