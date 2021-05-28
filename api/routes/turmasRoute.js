const { Router } = require('express')
const turmaController = require('../controllers/TurmaController')

const router = Router()

//chamando o método pegaTodasPessoas de "/controllers/turmaController"
router.get('/turmas', turmaController.pegaTodasTurmas)
//os ":"" indica o parâmetro que vai receber
router.get('/turmas/:id', turmaController.pegaUmaTurma)
router.post('/turmas/', turmaController.criaUmaTurma)
router.put('/turmas/:id', turmaController.atualizaTurma)
router.delete('/turmas/:id', turmaController.apagaTurma)

module.exports = router