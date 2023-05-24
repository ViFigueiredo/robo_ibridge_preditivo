// api.js

const axios = require('axios');
const iconv = require('iconv-lite');
const Papa = require('papaparse');
const Preditivo = require('./model');

const hoje = new Date(); // Obtém a data atual
hoje.setDate(hoje.getDate() - 2); // Define a data para o dia anterior

const dia = hoje.getDate();
const mes = hoje.getMonth() + 1; // Os meses no JavaScript são baseados em zero (janeiro é 0)
const ano = hoje.getFullYear();

// Formata a data no formato desejado (YYYY-MM-DD)
const dataAnterior = `${ano}-${mes < 10 ? `0${mes}` : mes}-${
  dia < 10 ? `0${dia}` : dia
}`;
// dataAnterior = '2023-05-23';

// console.log(dataAnterior); // Exibe a data do dia anterior

const convertDataApi = async (res) => {
  // le csv preditivo e converte em json
  const encodedData = iconv.decode(res.data, 'ISO-8859-1');
  const csvData = encodedData.toString();
  const parsedData = Papa.parse(csvData, {
    header: true,
  });
  const jsonData = parsedData.data;
  // console.log(jsonData);
  // console.log(typeof jsonData);

  if (jsonData != '' && jsonData != null && jsonData != undefined) {
    // loop no json preditivo e insere no banco
    const promises = jsonData.map((obj) =>
      Preditivo.create(
        {
          operacao_id: obj.operacao_id,
          operacao_nome: obj.operacao_nome,
          lista_id: obj.lista_id,
          lista_criacao: obj.lista_criacao,
          lista_nome: obj.lista_nome,
          lista_estado_id: obj.lista_estado_id,
          lista_estado_nome: obj.lista_estado_nome,
          contato_id: obj.contato_id,
          contato_criacao: obj.contato_criacao,
          contato_codigo: obj.contato_codigo,
          contato_nome: obj.contato_nome,
          contato_email: obj.contato_email,
          contato_estado_id: obj.contato_estado_id,
          contato_estado_nome: obj.contato_estado_nome,
          contato_telefone_numero: obj.contato_telefone_numero,
          chamada_id: obj.chamada_id,
          chamada_criacao: obj.chamada_criacao,
          chamada_datahora_agendamento: obj.chamada_datahora_agendamento,
          chamada_datahora_metralhadora: obj.chamada_datahora_metralhadora,
          chamada_datahora_inicio: obj.chamada_datahora_inicio,
          chamada_datahora_atendimento: obj.chamada_datahora_atendimento,
          chamada_datahora_termino: obj.chamada_datahora_termino,
          chamada_duracao_inicial: obj.chamada_duracao_inicial,
          chamada_duracao_final: obj.chamada_duracao_final,
          chamada_duracao_total: obj.chamada_duracao_total,
          chamada_destino: obj.chamada_destino,
          chamada_retorno_id: obj.chamada_retorno_id,
          chamada_retorno_nome: obj.chamada_retorno_nome,
          chamada_tipo_id: obj.chamada_tipo_id,
          chamada_tipo_nome: obj.chamada_tipo_nome,
          chamada_situacao_id: obj.chamada_situacao_id,
          chamada_situacao_nome: obj.chamada_situacao_nome,
          chamada_estado_id: obj.chamada_estado_id,
          chamada_estado_nome: obj.chamada_estado_nome,
          campanha_id: obj.campanha_id,
          campanha_criacao: obj.campanha_criacao,
          campanha_nome: obj.campanha_nome,
          campanha_estado_id: obj.campanha_estado_id,
          campanha_estado_nome: obj.campanha_estado_nome,
          operador_id: obj.operador_id,
          operador_criacao: obj.operador_criacao,
          operador_codigo: obj.operador_codigo,
          operador_nome: obj.operador_nome,
          operador_estado_id: obj.operador_estado_id,
          operador_estado_nome: obj.operador_estado_nome,
          ocorrencia_id: obj.ocorrencia_id,
          ocorrencia_criacao: obj.ocorrencia_criacao,
          ocorrencia_datahora_inicio: obj.ocorrencia_datahora_inicio,
          ocorrencia_datahora_termino: obj.ocorrencia_datahora_termino,
          ocorrencia_codigo: obj.ocorrencia_codigo,
          ocorrencia_status: obj.ocorrencia_status,
          ocorrencia_tipo_id: obj.ocorrencia_tipo_id,
          ocorrencia_tipo_nome: obj.ocorrencia_tipo_nome,
          ocorrencia_situacao_id: obj.ocorrencia_situacao_id,
          ocorrencia_situacao_nome: obj.ocorrencia_situacao_nome,
          ocorrencia_categoria_id: obj.ocorrencia_categoria_id,
          ocorrencia_categoria_nome: obj.ocorrencia_categoria_nome,
          ocorrencia_estado_id: obj.ocorrencia_estado_id,
          ocorrencia_estado_nome: obj.ocorrencia_estado_nome,
          chamada_status: obj.chamada_status,
        },
        { logging: false },
      ),
    );

    await Promise.all(promises);
    console.log(`Data: ${dataAnterior} -> Salvo com sucesso!`);
  } else {
    console.log(`Data: ${dataAnterior} -> Dia improdutivo!`);
  }
};

const consumoAPI = async () => {
  const url = `https://avantti-crm.ibridge.net.br/bi/?k=7f9Gv8VXzzdGGpRfNzorrPYXlw47L1e4&inicio=${dataAnterior} 08:30:00&termino=${dataAnterior} 20:00:00&modo=producao`;

  // console.log(url);

  try {
    const res = await axios({
      method: 'post',
      maxBodyLength: Infinity,
      url,
      responseType: 'arraybuffer',
      headers: {
        'Content-Type': 'application/x-msexcel',
      },
    });
    await convertDataApi(res);
  } catch (error) {
    // console.error('Erro na requisição:', error);
    console.error('Erro na requisição!');
  }
};

module.exports = consumoAPI;
