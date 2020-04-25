const { model, Schema } = require('mongoose')
const mongoosePaginate = require('mongoose-paginate-v2')
const bcrypt = require('bcryptjs')

const { validateEmail } = require('./validators/strings')
const UserTypes = require('./utils/UserTypes')

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
    foto_de_perfil: {
      type: String,
      required: false
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
    tipo_de_usuario: {
      type: UserTypes,
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
