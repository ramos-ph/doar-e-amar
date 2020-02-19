module.exports = {
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
