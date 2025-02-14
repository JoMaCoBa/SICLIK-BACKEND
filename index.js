require ('dotenv').config();
const { faker } = require('@faker-js/faker');

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const Product = require('./models/product.model');
const Order = require('./models/order.model');

const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

sequelize.sync({ force: false }).then(async () => {
  console.log('✅ Database connected');
  await seedProducts(); // Llamar la función para poblar la base de datos
}).catch(err => {
  console.log(err);
});


routerApi(app);

app.listen(port, () => {
  console.log(`Running in port: ${port}`);
});

async function seedProducts() {
  try {
    const count = await Product.count(); // Verifica si hay productos en la BD
    if (count === 0) {
      console.log('⚡ No hay productos en la base de datos. Creando 100 productos...');

      const categories = ['Clothes', 'Electronics']; // Solo dos categorías

      const products = Array.from({ length: 100 }).map(() => ({
        name: faker.commerce.productName(),
        price: faker.number.float({ min: 100, max: 10000, precision: 0.01 }),
        description: faker.commerce.productDescription(),
        category: faker.helpers.arrayElement(categories), // Selecciona una categoría aleatoria
        image: faker.image.urlLoremFlickr({ category: 'electronics' }),
      }));

      await Product.bulkCreate(products);
      console.log('✅ Se han creado 100 productos automáticamente.');
    } else {
      console.log(`📦 La base de datos ya tiene ${count} productos.`);
    }
  } catch (error) {
    console.error('❌ Error al poblar la base de datos:', error);
  }
}
