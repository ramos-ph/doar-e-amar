require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const jwt = require('jsonwebtoken')
const User = require('../models/User')

function generateToken (params = {}) {
  return jwt.sign(params, process.env.SECRET)
}

module.exports = {
  async store (req, res) {
    try {
      const { email, senha, cpf } = req.body

      const user = await User.create({
        email,
        senha,
        tipo_de_usuario: {
          tipo: 'PF',
          cpf
        }
      })

      user.senha = undefined

      return res.status(201).json({
        user,
        token: generateToken({ id: user._id })
      })
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message)
    }
  },

  async update (req, res) {
    try {
      const userId = req.user_id
      const { firstName, lastName } = req.body

      const loggedUser = await User.findById(userId)

      if (loggedUser.nome) {
        return res
          .status(400)
          .json({ message: 'Este usuário já tem um nome' })
      }

      loggedUser.nome = `${firstName} ${lastName}`
      loggedUser.avatar = req.file.filename
      await loggedUser.save()

      return res.status(200).json(loggedUser)
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message)
    }
  }
}
