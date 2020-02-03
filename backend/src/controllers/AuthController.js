const router = require('express').Router()
const AuthMiddleware = require('../middlewares/auth')

router.use(AuthMiddleware)

router.get('/auth', (req, res) => {
  return res.status(200).send({ authorized: true, user: req.user_id })
})

module.exports = router
