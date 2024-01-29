// routes.js

const express = require('express');
const path = require('path');
const routes = require(path.join(__dirname, 'routes'));


routes = express.Router();
const sensorController = require('./controllers/sensorController');

// Rota para processar dados do sensor via POST
router.post('/api/sensor-data', sensorController.processSensorData);

// Rota para obter dados simulados via GET
router.get('/api/simulated-data', sensorController.getSimulatedData);

// Exporte o router
module.exports = router;
