const { model, Schema } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const bcrypt = require('bcryptjs')

require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const UserSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true,
      select: false
    },
    avatar: {
      type: String,
      required: true
    },
    'cpf-cnpj': {
      type: String,
      required: true,
      select: false
    },
    endereco: {
      rua: {
        type: String,
        required: false
      },
      numero: {
        type: Number,
        required: false
      },
      cep: {
        type: String,
        required: false
      },
      select: false
    },
    telefone: {
      type: String,
      required: false,
      select: false
    },
    tipo: {
      type: String,
      enum: [
        'Pessoa física',
        'Pessoa jurídica'
      ],
      default: 'Pessoa física',
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

UserSchema.plugin(mongoosePaginate)

// realiza a criptografia de senha ao salvar
UserSchema.pre('save', async function (next) {
  // se a senha já foi modificada
  if (!this.isModified('senha')) return next()

  const hash = await bcrypt.hash(this.senha, 10)

  this.senha = hash

  next()
})

// vincula a url do avatar do usuário
UserSchema.virtual('avatar_url').get(function () {
  if (!this.avatar) return 'none'

  return `${process.env.APP_URL}/public/uploads/${this.avatar}`
})

module.exports = model('users', UserSchema)
