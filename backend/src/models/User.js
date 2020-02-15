const { model, Schema } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const bcrypt = require('bcryptjs')

const { validateEmail, validateCpf, validateCnpj } = require('./validators/strings')
const { validateCommonUser, validateOrganization } = require('./validators/users')
const { allowedTypes } = require('./utils/allowedEnums')

require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const UserSchema = new Schema(
  {
    nome: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: [
        true,
        'O campo e-mail é obrigatório'
      ],
      validate: {
        validator: function (email) {
          return validateEmail(email)
        },
        message: 'Insira um endereço de e-mail válido'
      },
      unique: true
    },
    senha: {
      type: String,
      required: [
        true,
        'O campo senha é obrigatório'
      ],
      select: false
    },
    avatar: {
      type: String,
      required: false
    },
    cpf: {
      type: String,
      required: [
        function (tipo) {
          return validateCommonUser(tipo)
        },
        'O campo CPF é obrigatório'
      ],
      validate: {
        validator: function (cpf) {
          return validateCpf(cpf)
        },
        message: 'Insira um CPF válido'
      },
      select: false
    },
    cnpj: {
      type: String,
      required: [
        function (tipo) {
          return validateOrganization(tipo)
        },
        'O campo CNPJ é obrigatório'
      ],
      validate: {
        validator: function (cnpj) {
          return validateCnpj(cnpj)
        },
        message: 'Insira um CNPJ válido'
      },
      select: false
    },
    endereco: {
      rua: String,
      numero: Number,
      cep: String,
      select: false
    },
    telefone: {
      type: String,
      required: false,
      select: false
    },
    tipo: {
      type: String,
      enum: allowedTypes,
      default: 'Pessoa física',
      required: [
        true,
        'O tipo de pessoa é obrigatório'
      ]
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

UserSchema.pre('save', async function (next) {
  if (!this.isModified('senha')) return next()

  const hash = await bcrypt.hash(this.senha, 10)

  this.senha = hash

  return next()
})

UserSchema.virtual('avatar_url').get(function () {
  if (!this.avatar) return 'none'

  return `${process.env.APP_URL}/public/uploads/${this.avatar}`
})

module.exports = model('users', UserSchema)
