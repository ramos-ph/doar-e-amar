const { model, Schema } = require('mongoose')

const ReceivementSchema = new Schema(
  {
    id_da_oferta: {
      type: Schema.Types.ObjectId,
      ref: 'offers',
      required: true
    },
    id_do_recebedor: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = model('receivement', ReceivementSchema)
