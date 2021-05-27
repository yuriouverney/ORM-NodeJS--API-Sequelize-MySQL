// ponto de entrada de todas as rotas serão definidas neste arquivo!
const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoute.js')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas)
    app.get('/', (req, res) => res.send('olá'))
}