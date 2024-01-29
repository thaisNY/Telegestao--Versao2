
# Telegestão de Sensores

Este é um projeto de Telegestão de Sensores que utiliza Node.js para o backend e fornece uma API para a gestão de dados simulados de sensores de iluminação pública. O projeto é dividido em modelos MVC (Model-View-Controller) para uma organização clara e modular.

## Requisitos

- Node.js (v14.0.0 ou superior)
- npm (Node Package Manager)

## Instalação

Clone o repositório para o seu ambiente local:

```bash
git clone https://github.com/seu-usuario/telegestao-sensores.git

Acesse o diretório do projeto:

bash
Copy code
cd telegestao-sensores
Crie a estrutura de diretórios:

bash
Copy code
mkdir controllers models routes
Crie os arquivos iniciais:

bash
Copy code
touch app.js controllers/sensorController.js models/sensorModel.js routes.js
Instale as dependências:

bash
Copy code
npm install
Configuração
Certifique-se de que o Node.js e o npm estão instalados corretamente.

No arquivo app.js, ajuste a configuração do servidor conforme necessário.

Uso
Inicie o servidor:

bash
Copy code
node app.js
Utilize o Postman ou qualquer outra ferramenta para testar as rotas da API.

Estrutura do Projeto
app.js: Arquivo principal que configura e inicia o servidor.
controllers/sensorController.js: Controlador responsável por lidar com a lógica de manipulação de dados.
models/sensorModel.js: Modelo que representa o objeto Sensor e lida com a persistência de dados.
routes.js: Arquivo que define as rotas da API e chama métodos no controlador.
package.json: Arquivo de configuração do Node.js.
Rotas da API
POST /api/sensor-data: Endpoint para processar dados simulados do sensor.
GET /api/simulated-data: Endpoint para obter dados simulados para o frontend.
