// index.js

const cron = require('node-cron');
const consumoAPI = require('./api');
const Preditivo = require('./model');
const { database } = require('./config');

// Testa conexão com banco de dados
async function testConnection() {
  try {
    await database.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
}

// Cria a tabela no banco
async function createTable() {
  try {
    await Preditivo.sync({ force: false, logging: false });
    console.log('Tabela encontrada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
  }
}

// Agenda a tarefa para ser executada todos os dias às 20:00 (exceto sábados e domingos)
// cron.schedule('00 20 * * *', () => {
testConnection()
  .then(createTable)
  .then(consumoAPI)
  .catch((error) => {
    console.error('Erro:', error);
  });
// });
