require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')

function generateToken (params = {}) {
  return jwt.sign(params, process.env.SECRET)
}

module.exports = {
  async show (req, res) {
    try {
      const { email, senha } = req.validated

      const user = await User.findOne({ email }).select('+senha')

      if (!user) {
        return res.status(400).json({ message: 'Usuário não existe' })
      }

      if (!(await bcrypt.compare(senha, user.senha))) {
        return res.status(400).json({ message: 'Usuário ou senha inválidos' })
      }

      user.senha = undefined

      return res.status(200).json({
        user,
        token: generateToken({ id: user._id })
      })
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message)
    }
  }
}
