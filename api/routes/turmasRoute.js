const { Router } = require('express')
const turmaController = require('../controllers/TurmaController')

const router = Router()

//chamando o método pegaTodasPessoas de "/controllers/turmaController"
router.get('/turmas', turmaController.pegaTodasTurmas)
//os ":"" indica o parâmetro que vai receber
router.post('/turmas/', turmaController.criaUmaTurma)
router.put('/turmas/:id', turmaController.atualizaTurma)

module.exports = router