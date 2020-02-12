const router = require('express').Router()
const authorization = require('./authorizateToken')

router.use(authorization)

router.get('/auth', (req, res) => {
  return res.status(200).send({ authorized: true, user: req.user_id })
})

module.exports = router
