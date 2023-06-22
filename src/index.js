const cron = require('node-cron');
const { database } = require('./config');
const testConnection = require('./connection');
const consumoAPI = require('./api');
const convertDataApi = require('./convert');

console.log('Aguardando inicio da aplicação...');

async function App() {
  try {
    await testConnection(database);
    const dataAPI = await consumoAPI();
    await convertDataApi(dataAPI);
    //await database.close();
  } catch (error) {
    console.error('Ocorreu um erro:', error);
  }
}

//App();

// Agenda a tarefa para ser executada todos os dias às 20:00 (exceto sábados e domingos)
cron.schedule('00 20 * * *', () => { App() });
