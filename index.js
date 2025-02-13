const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Running in port: ${port}`);
});

app.get('/', (request, response) => {
  response.send("Hello, from my server in express");
})
