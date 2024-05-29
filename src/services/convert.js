/* eslint-disable no-await-in-loop */
const iconv = require('iconv-lite');
const Papa = require('papaparse');
const date = require('./today');
const Preditivo = require('./model');

// Função para dividir o array em pedaços menores
function chunkArray(array, size) {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
}

const convertDataApi = async (buffer) => {
  // le csv preditivo e converte em json
  const encodedData = iconv.decode(buffer, 'ISO-8859-1');
  const csvData = encodedData.toString();
  const parsedData = Papa.parse(csvData, { header: true });
  const jsonData = parsedData.data;
  const chunkSize = 5000; // Defina o tamanho desejado para os pedaços
  const chunks = chunkArray(jsonData, chunkSize);

  console.log(`${date()} -> ${jsonData.length} registros baixados.`);

  if (jsonData != '' && jsonData != null && jsonData != undefined) {
    // loop no json preditivo e insere no banco em lotes
    let insertedCount = 0;
    for (let i = 0; i < chunks.length; i += 1) {
      const result = await Preditivo.bulkCreate(chunks[i], {
        returning: true,
        logging: false,
        timeout: 60000,
      });
      insertedCount += result.length;
      console.log(`Inseridos ${chunks[i].length} registros.`);
    }
    if (insertedCount === jsonData.length)
      console.log(`Dados: ${date()} -> Salvo com sucesso!`);
    else console.log(`Dados: ${date()} -> Dia improdutivo!`);
  }
  console.log('Aguardando inicio da aplicação...');
};

module.exports = convertDataApi;
