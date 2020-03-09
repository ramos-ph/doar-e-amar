const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const OfferAccompaniment = require('./utils/OfferAccompaniment')

const OfferSchema = new Schema(
  {
    doacao: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'donations'
    },
    endereco_de_retirada: {
      type: String,
      required: true
    },
    data_de_anuncio: {
      type: Date,
      required: true,
      default: Date.now
    },
    acompanhamento: {
      acompanhamento: OfferAccompaniment,
      required: true
    }
  },
  {
    timestamps: true
  }
)

OfferSchema.plugin(mongoosePaginate)

module.exports = model('offers', OfferSchema)
