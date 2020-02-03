const { Schema, model } = require('mongoose')

const OfferSchema = new Schema(
  {
    doacao: {
      type: Schema.Types.ObjectId,
      ref: 'donations'
    },
    dono: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    recebido: Boolean
  },
  {
    timestamps: true
  }
)

module.exports = model('offers', OfferSchema)
