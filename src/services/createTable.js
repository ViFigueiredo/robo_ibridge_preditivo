const Preditivo = require('./model');

// Cria a tabela no banco
const createTable = async () => {
  try {
    await Preditivo.sync({ force: false, logging: false });
    console.log('Tabela encontrada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a tabela:', error);
  }
};

module.exports = createTable;
