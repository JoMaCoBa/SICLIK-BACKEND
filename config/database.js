const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    logging: false, // Opcional: Oculta logs de SQL en consola
  }
);

async function initializeDatabase() {
  try {
    // Conexión inicial a MySQL sin especificar base de datos
    const rootSequelize = new Sequelize(
      null,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
      }
    );

    // Crea la base de datos si no existe
    await rootSequelize.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`);

    // Conectar a la base de datos ya creada
    await sequelize.authenticate();
    console.log('✅ Connection has been established successfully.');

    // Sincroniza modelos (opcional)
    await sequelize.sync({ alter: true });
    console.log('✅ Models synchronized.');

  } catch (error) {
    console.error('❌ Error with conection: ', error);
  }
}

initializeDatabase();

module.exports = sequelize;
