// Testa conexão com banco de dados
const testConnection = async (db) => {
  try {
    await db.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar-se ao banco de dados:', error);
  }
};

module.exports = testConnection;
