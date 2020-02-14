const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

const { validatePostalCode } = require('./validators/strings')
const { allowedCategories } = require('./utils/allowedEnums')

require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const DonationSchema = new Schema(
  {
    titulo: {
      type: String,
      required: [
        true,
        'Um título precisa ser fornecido'
      ]
    },
    descricao: {
      type: String,
      required: [
        true,
        'Uma descrição precisa ser informada'
      ]
    },
    foto: {
      type: String,
      required: [
        true,
        'Uma foto precisa ser fornecida'
      ]
    },
    endereco: {
      rua: {
        type: String,
        required: [
          true,
          'Um endereço de retirada válido precisa ser informado'
        ]
      },
      numero: {
        type: Number,
        required: [
          true,
          'Um endereço de retirada válido precisa ser informado'
        ]
      },
      cep: {
        type: String,
        required: [
          true,
          'Um endereço de retirada válido precisa ser informado'
        ],
        validate: {
          validator: function () {
            return validatePostalCode(this.endereco.cep)
          },
          message: 'Insira um CEP válido'
        }
      },
      cidade: {
        type: String,
        required: [
          true,
          'Um endereço de retirada válido precisa ser informado'
        ]
      },
      select: false
    },
    dono: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users'
    },
    categoria: {
      type: String,
      enum: allowedCategories,
      required: true
    }
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
