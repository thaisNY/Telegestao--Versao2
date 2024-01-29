// sensorModel.js

const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

// Método para criar a tabela no banco de dados
const createTable = () => {
  db.run('CREATE TABLE sensors (id INTEGER PRIMARY KEY AUTOINCREMENT, luminosity REAL, temperature REAL)');
};

// Método para salvar dados no banco de dados
const saveData = (luminosity, temperature) => {
  db.run('INSERT INTO sensors (luminosity, temperature) VALUES (?, ?)', [luminosity, temperature]);
};

// Método para obter dados do banco de dados
const getData = (callback) => {
  db.all('SELECT * FROM sensors', (err, rows) => {
    callback(err, rows);
  });
};

// Exporte os métodos do modelo
module.exports = { createTable, saveData, getData };
