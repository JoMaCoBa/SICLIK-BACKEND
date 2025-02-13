const {faker} = require('@faker-js/faker');

class ProductsController {
  constructor() {
    this.products = [];
    this.generate()
  }

  generate() {
    for(let i = 0; i <= 100; i++) {
      this.products.push({
        id: faker.commerce.isbn(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price()),
        image: faker.image.url(),
        description: faker.commerce.productDescription()
      })
    }
  }

  getAllProducts() {
    return this.products;
  }

  getDetailproduct(id) {
    return this.products.find(product => product.id === id);
  }

  createProduct(body) {
    const newProduct = {
      id: faker.commerce.isbn(),
      ...body
    }
    this.products.push(newProduct);
    return newProduct;
  }

  editProduct(id, body) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    const product = this.products[productIndex];
    this.products[productIndex] = {
      ...product,
      ...body
    }
    return this.products[productIndex];
  }

  deleteProduct(id) {
    const productIndex = this.products.findIndex(product => product.id === id);
    if (productIndex === -1) {
      throw new Error('Product not found');
    }
    this.products.splice(productIndex, 1);
    return {message: 'Product deleted'};
  }
}

module.exports = ProductsController;
