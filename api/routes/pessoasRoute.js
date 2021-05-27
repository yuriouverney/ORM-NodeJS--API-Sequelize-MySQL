const { Router } = require('express')
const pessoaController = require('../controllers/PessoaController')

const router = Router()

//chamando o método PegaTodasPessoas de "/controllers/pessoaController"
router.get('/pessoas', pessoaController.PegaTodasPessoas)

module.exports = router