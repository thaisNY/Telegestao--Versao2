// app.js

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('C:\Users\thais\Desktop\Telegestão\routes\routes.js');

const app = express();

app.use(bodyParser.json());

// Use o router definido em routes.js
app.use(routes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
