// sensorController.js

// Importe o modelo
const sensorModel = require('./models/sensorModel');

// Controlador para lidar com a lógica de manipulação de dados
const sensorController = {
  // Método para processar dados do sensor recebidos por POST
  processSensorData: (req, res) => {
    const { luminosity, temperature } = req.body;

    // Validação simples
    if (luminosity === undefined || temperature === undefined) {
      return res.status(400).json({ message: 'Dados incompletos' });
    }

    // Chame o método do modelo para salvar os dados
    sensorModel.saveData(luminosity, temperature);

    // Responda com uma mensagem indicando sucesso
    res.json({ message: 'Dados do sensor recebidos e salvos com sucesso!' });
  },

  // Método para obter dados simulados para o frontend por GET
  getSimulatedData: (req, res) => {
    // Chame o método do modelo para obter dados
    sensorModel.getData((err, data) => {
      if (err) {
        return res.status(500).json({ message: 'Erro ao obter dados' });
      }

      // Responda com os dados obtidos
      res.json(data);
    });
  },
};

// Exporte o controlador
module.exports = sensorController;
