const { Schema } = require('mongoose');

const { validateCpf, validateCnpj } = require('../validators/strings');

const UserTypes = new Schema(
  {
    tipo: {
      type: String,
      enum: [
        'PF',
        'PJ',
      ],
      required: true,
    },
    cpf: {
      type: String,
      required: [
        function () {
          return this.tipo === 'PF';
        },
        'O campo CPF é obrigatório',
      ],
      validate: {
        validator(cpf) {
          return validateCpf(cpf);
        },
        message: 'Insira um CPF válido',
      },
      select: false,
    },
    cnpj: {
      type: String,
      required: [
        function () {
          return this.tipo === 'PJ';
        },
        'O campo CNPJ é obrigatório',
      ],
      validate: {
        validator(cnpj) {
          return validateCnpj(cnpj);
        },
        message: 'Insira um CNPJ válido',
      },
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = UserTypes;
