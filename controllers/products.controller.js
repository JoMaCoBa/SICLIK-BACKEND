const {faker} = require('@faker-js/faker');

class ProductsController {
  static getAllProducts(req, res) {
    const products = [
      {name: 'Mouse Gamer', price: '20.00', image: faker.image.url},
      {name: 'Monitor', price: '100.00', image: faker.image.url}
    ];
    res.json(products);
  }
}

module.exports = ProductsController;
