module.exports = {
  index (req, res, next) {
    return next()
  },

  store (req, res, next) {
    const {
      titulo,
      descricao,
      rua,
      numero,
      cidade,
      cep,
      categoria
    } = req.body

    if (!titulo) return res.status(400).send({ message: 'Informe um título!' })

    if (!descricao) {
      return res.status(400).send({ message: 'Informe uma descrição!' })
    }

    if (!rua) {
      return res.status(400).send({ message: 'Informe a rua para retirada!' })
    }

    if (!numero) {
      return res
        .status(400)
        .send({ message: 'Informe o número para retirada!' })
    }

    if (!cidade) {
      return res.status(400).send({ message: 'Informe a cidade de retirada!' })
    }

    if (!cep) {
      return res.status(400).send({ message: 'Informe o CEP para retirada!' })
    }

    if (cep.length !== 9) {
      return res.status(400).send({ message: 'Informe um CEP válido' })
    }

    const endereco = { rua, numero, cidade, cep }
    req.validated = { titulo, descricao, endereco, categoria }

    return next()
  }
}
