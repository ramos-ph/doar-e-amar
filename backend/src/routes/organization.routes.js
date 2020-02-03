// inicializando o roteamento
const router = require('express').Router()

// controles de organizações
const OrganizationController = require('../controllers/OrganizationController')

// rotas das organizações
router.get('/', OrganizationController.index)

module.exports = router
