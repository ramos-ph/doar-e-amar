const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const DonationCategory = require('./utils/DonationCategory')

require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const DonationSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    foto: {
      type: String,
      required: true
    },
    usuario_doador: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users'
    },
    categoria: DonationCategory
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true
    }
  }
)

DonationSchema.virtual('foto_url').get(function () {
  return `${process.env.APP_URL}/public/uploads/${this.foto}`
})

DonationSchema.plugin(mongoosePaginate)

module.exports = model('donations', DonationSchema)
