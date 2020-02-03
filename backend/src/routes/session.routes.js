// inicializando o roteamento
const router = require('express').Router()

// controles do usuário
const SessionController = require('../controllers/SessionController')
const SessionMiddleware = require('../middlewares/session')

// rotas públicas
router.post('/start', SessionMiddleware.show, SessionController.show)
router.post('/create', SessionMiddleware.store, SessionController.store)

module.exports = router
