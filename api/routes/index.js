// ponto de entrada de todas as rotas serão definidas neste arquivo!
const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute.js')
const niveis = require('./niveisRoute.js')
const turmas = require('./turmasRoute.js')

module.exports = app => {
    app.use(bodyParser.json(),
    pessoas,
    niveis,
    turmas)
    app.get('/', (req, res) => res.send('olá'))
}