const User = require('../models/User')

module.exports = {
  async store (req, res, next) {
    const { email, senha, cpf } = req.body

    const re = /^(([^<>()[\].,:\s@']+(\.[^<>()[\].,:\s@']+)*)|('.+'))@(([^<>()[\].,:\s@']+\.)+[^<>()[\].,:\s@']{2,})$/i

    if (!email) return res.status(400).send({ message: 'Informe seu e-mail' })

    if (!senha) return res.status(400).send({ message: 'Informe sua senha' })

    if (senha.lenght <= 7) {
      return res
        .status(400)
        .send({ message: 'A senha deve conter mais do que cinco caractéres' })
    }

    if (!re.test(email)) {
      return res
        .status(400)
        .send({ message: 'Insira um endereço de e-mail válido!' })
    }

    if (!cpf) return res.status(400).send({ message: 'Informe o seu CPF' })

    if (cpf.length !== 11) {
      return res.status(400).send({ message: 'Informe um CPF válido!' })
    }

    if (!Number(cpf)) {
      return res.status(400).send({ message: 'Informe um CPF válido!' })
    }

    if (await User.findOne({ email })) {
      return res
        .status(400)
        .send({ message: 'Este e-mail já está sendo utilizado' })
    }

    if (await User.findOne({ cpf })) {
      return res
        .status(400)
        .send({ message: 'Este CPF já está sendo utilizado' })
    }

    req.validated = { email, senha, cpf }

    return next()
  },

  show (req, res, next) {
    const { email, senha } = req.body

    const re = /^(([^<>()[\].,:\s@']+(\.[^<>()[\].,:\s@']+)*)|('.+'))@(([^<>()[\].,:\s@']+\.)+[^<>()[\].,:\s@']{2,})$/i

    if (!email) {
      return res.status(400).send({ message: 'Informe o seu e-mail' })
    }

    if (!senha) return res.status(400).send({ message: 'Informe sua senha' })

    if (!re.test(email)) {
      return res
        .status(400)
        .send({ message: 'Insira um endereço de e-mail válido!' })
    }

    req.validated = { email, senha }

    return next()
  }
}
