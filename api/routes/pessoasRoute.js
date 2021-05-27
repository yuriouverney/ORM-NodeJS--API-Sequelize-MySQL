const { Router } = require('express')
const pessoaController = require('../controllers/PessoaController')

const router = Router()

//chamando o método pegaTodasPessoas de "/controllers/pessoaController"
router.get('/pessoas', pessoaController.pegaTodasPessoas)
//os ":"" indica o parâmetro que vai receber
router.get('/pessoas/:id', pessoaController.pegaUmaPessoa)
router.post('/pessoas/', pessoaController.criaPessoa)
router.put('/pessoas/:id', pessoaController.atualizaPessoa)
router.delete('/pessoas/:id', pessoaController.apagaPessoa)

module.exports = router