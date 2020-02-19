const router = require('express').Router()

const SessionController = require('../controllers/SessionController')

router.post('/', SessionController.show)

module.exports = router
