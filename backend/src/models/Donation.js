const { Schema, model } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')

require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const DonationSchema = new Schema(
  {
    titulo: {
      type: String,
      required: true
    },
    descricao: {
      type: String,
      required: true
    },
    foto: {
      type: String,
      required: true
    },
    endereco: {
      rua: {
        type: String,
        required: true
      },
      numero: {
        type: Number,
        required: true
      },
      cep: {
        type: String,
        required: true
      },
      cidade: {
        type: String,
        required: true
      }
    },
    dono: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'users'
    },
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
        'Outros'
      ],
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
