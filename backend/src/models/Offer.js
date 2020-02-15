const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const OfferSchema = new Schema(
  {
    doacao: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'donations'
    },
    estado: {
      type: String,
      enum: [
        'Pendente',
        'Aceito',
        'Entregue'
      ],
      required: true,
      default: 'Pendente'
    },
    entregueEm: {
      type: Date,
      required: false
    },
    anuncio: {
      type: Date,
      required: true,
      default: Date.now
    },
    recebido: Boolean,
    recebedor: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      select: false
    }
  },
  {
    timestamps: true
  }
)

OfferSchema.plugin(mongoosePaginate)

module.exports = model('offers', OfferSchema)
