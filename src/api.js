const axios = require('axios');
const date = require('./today');

const consumoAPI = async () => {
  const url = `https://avantti-crm.ibridge.net.br/bi/?k=7f9Gv8VXzzdGGpRfNzorrPYXlw47L1e4&inicio=${date()} 08:30:00&termino=${date()} 20:00:00&modo=producao`;

  try {
    await console.log('Baixando relatório preditivo...');

    const res = await axios({
      method: 'post',
      url,
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/x-msexcel',
      },
    });
    return res.data;
  } catch (error) {
    console.error('Erro na requisição!');
  }
};

module.exports = consumoAPI;
