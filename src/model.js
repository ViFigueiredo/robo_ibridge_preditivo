// model.js

const { database, DataTypes } = require('./config');

const Preditivo = database.define('preditivo_apis_v2', {
  operacao_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operacao_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lista_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lista_criacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lista_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lista_estado_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  lista_estado_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contato_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contato_criacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contato_codigo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contato_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contato_email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contato_estado_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contato_estado_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  contato_telefone_numero: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_id_unico: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_criacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_datahora_agendamento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_datahora_metralhadora: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_datahora_inicio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_datahora_atendimento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_datahora_termino: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_duracao_inicial: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_duracao_final: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_duracao_total: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_destino: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_retorno_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_retorno_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_tipo_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_tipo_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_situacao_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_situacao_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_estado_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_estado_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  campanha_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  campanha_criacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  campanha_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  campanha_estado_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  campanha_estado_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operador_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operador_criacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operador_codigo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operador_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operador_estado_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operador_estado_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  operador_equipe: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fila_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fila_estado_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  perfil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_criacao: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_datahora_inicio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_datahora_termino: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_codigo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_tipo_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_tipo_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_situacao_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_situacao_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_categoria_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_categoria_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_estado_id: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ocorrencia_estado_nome: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  chamada_status: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  forma_pagamento: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Preditivo;
