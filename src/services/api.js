const axios = require('axios');
const date = require('./today');
const dotenv = require('dotenv');

dotenv.config();

const consumoAPI = async () => {
  const url = `https://avanttinew-crm.ibridge.net.br/bi/?k=${process.env.API_URL}&inicio=${date()}%2000:00:00&termino=${date()}%2023:00:00`;

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
