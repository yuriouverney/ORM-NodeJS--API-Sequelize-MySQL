// controlador precisa se comunicar com o modelo
// passar caminho dos modelos
const database = require('../models')

class PessoaController{
    // static => esse método faz com que a função "PegaTodasPessoas" possa ser chamada no código, então posso chamá-la sem ter que criar uma nova instância de classe, sem ter que criar um "new PessoaController". 
    // async => diz que esse método precisa esperar resolver alguns outros métodos internos que usaremos aqui dentro para então devolver a resposta. Faz parte da questão de sincronia e assincronia do JavaScript.
    static async PegaTodasPessoas (req, res) {
        // try/catch => funciona como o try, except do python
        try{
            //await => pedir para o JavaScript esperar ir até o banco, pegar as coisas e voltar, então ele vai dar um await, a palavra-chave que faz par com async.
            //database.Pessoas => dentro de database ele vai procurar Pessoas, e só prestando atenção, não é o nome do arquivo, e sim a const que está sendo retornada no arquivo /models/pessoas.js, estamos puxando através de database.
            //findAll() => é um comando do sequelize que seria parecido com o "SELECT * FROM Pessoas;" do MySQL
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas)
        } catch(error) {
            return res.status(500).json(error.message)
        }

    }
}

module.exports = PessoaController