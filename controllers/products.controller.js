const {faker} = require('@faker-js/faker');

class ProductsController {
  static getAllProducts(req, res) {
    const products = []
    for(i = 0; i <= 10; i++){
      products.push({
        name: faker.commerce,
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url
      });
    }
    res.json(products);
  }
}

module.exports = ProductsController;
