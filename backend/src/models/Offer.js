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
    data_de_anuncio: {
      type: Date,
      required: true,
      default: Date.now
    },
    acompanhamento: OfferAccompaniment
  },
  {
    timestamps: true
  }
)

OfferSchema.plugin(mongoosePaginate)

module.exports = model('offers', OfferSchema)
