const { Schema } = require('mongoose');

const DonationCategory = new Schema(
  {
    categoria: {
      type: String,
      enum: [
        'Alimentos',
        'Vestimentas',
        'Móveis',
        'Medicamentos',
        'Acessórios para Pets',
        'Produtos de Limpeza',
        'Dinheiro',
        'Brinquedos',
        'Outros',
      ],
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = DonationCategory;
