// inicializando o roteamento
const router = require('express').Router()

// controles do usuário
const SessionController = require('../controllers/SessionController')
const SessionMiddleware = require('../middlewares/session')

// rotas públicas
router.post('/', SessionMiddleware.show, SessionController.show)

module.exports = router
