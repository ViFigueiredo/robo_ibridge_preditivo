const cron = require('node-cron');
const { database } = require('./config');
const testConnection = require('./connection');
const consumoAPI = require('./api');
const convertDataApi = require('./convert');

// Agenda a tarefa para ser executada todos os dias às 20:00 (exceto sábados e domingos)
cron.schedule('00 20 * * *', () => {
  (async () => {
    await testConnection(database);
    const dataAPI = await consumoAPI();
    await convertDataApi(dataAPI);
    await database.close();
  })();
});
