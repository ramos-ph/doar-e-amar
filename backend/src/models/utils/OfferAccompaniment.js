const { Schema } = require('mongoose')

const OfferAccompaniment = new Schema(
  {
    acompanhamento: {
      type: String,
      required: true,
      enum: [
        'Pendente',
        'Aceito',
        'Entregue'
      ],
      default: 'Pendente'
    }
  },
  {
    timestamps: true
  }
)

module.exports = OfferAccompaniment
