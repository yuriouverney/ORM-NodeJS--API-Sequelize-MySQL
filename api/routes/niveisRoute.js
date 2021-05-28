const { Router } = require('express')
const nivelController = require('../controllers/NivelController')

const router = Router()

//chamando o método pegaTodosNiveis de "/controllers/nivelController"
router.get('/niveis', nivelController.pegaTodosNiveis)
//os ":"" indica o parâmetro que vai receber
router.get('/niveis/:id', nivelController.pegaUmNivel)
router.post('/niveis/', nivelController.criaNivel)
router.put('/niveis/:id', nivelController.atualizaNivel)
router.delete('/niveis/:id', nivelController.apagaNivel)

module.exports = router