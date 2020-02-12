require('dotenv').config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : '.env'
})

const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  const auth = req.headers.authorization

  if (!auth) { return res.status(401).send({ message: 'Nenhuma chave fornecida' }) }

  const key = auth.split(' ')

  if (!key.length === 2) { return res.status(401).send({ message: 'Chave está mal informada' }) }

  const [scheme, token] = key

  if (!/^Bearer$/i.test(scheme)) { return res.status(401).send({ message: 'Chave fornecida é invalida' }) }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) { return res.status(401).send({ message: 'Chave fornecida é inválida' }) }

    req.user_id = decoded.id

    return next()
  })
}
