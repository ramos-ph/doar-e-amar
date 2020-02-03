require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

// const jwt = require('jsonwebtoken')
// const bcrypt = require('bcryptjs')

const User = require('../models/User')

// function generateToken (params = {}) {
//   return jwt.sign(params, process.env.SECRET)
// }

module.exports = {
  async index (req, res) {
    try {
      const organizations = await User.paginate({
        $and: [{ tipo: 'Organization' }]
      })

      return res.status(200).json(organizations)
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message)
    }
  },

  async store (req, res) {
    try {
      const { nome, email, senha, cnpj, endereco, tipo } = req.validated

      const organization = await User.create({
        nome,
        email,
        senha,
        cnpj,
        endereco,
        tipo
      })

      return res.status(201).json(organization)
    } catch (err) {
      return res
        .status(500)
        .json(err.toString() || err.message)
    }
  }
}
