require ('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');

const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

sequelize.sync({ force: false }).then(() => {
  console.log('Database connected');
}).catch(err => {
  console.log(err);
});

routerApi(app);

app.listen(port, () => {
  console.log(`Running in port: ${port}`);
});
