require ('dotenv').config();

const express = require('express');
const cors = require('cors');

const routerApi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

routerApi(app);

app.listen(port, () => {
  console.log(`Running in port: ${port}`);
});
