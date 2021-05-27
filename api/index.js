const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const port = 3000

app.get('/teste', (req,res) =>{
    console.log('fui acessado')
    res.status(200).send({mensagem: 'Bem vindo!'})
})
app.listen(port, ()=> console.log('Funcionado na porta ' + port))
module.exports = app