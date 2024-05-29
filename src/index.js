const cron = require('node-cron');
const { database } = require('./services/config');
const testConnection = require('./services/connection');
const createTable = require('./services/createTable');
const consumoAPI = require('./services/api');
const convertDataApi = require('./services/convert');
const date = require('./services/today');

console.log(`${date()} - Aguardando inicio da aplicação...`)

async function App() {
  try {
    await testConnection(database);
    // await createTable();
    const dataAPI = await consumoAPI();
    await convertDataApi(dataAPI);
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

// App();

// Agenda a tarefa para ser executada todos os dias às 20:00 (exceto sábados e domingos)
cron.schedule('00 20 * * *', () => { App() });
