// controlador precisa se comunicar com o modelo
// passar caminho dos modelos
const database = require('../models')

class NivelController{
    // static => esse método faz com que a função "pegaTodosNiveis" possa ser chamada no código, então posso chamá-la sem ter que criar uma nova instância de classe, sem ter que criar um "new PessoaController". 
    // async => diz que esse método precisa esperar resolver alguns outros métodos internos que usaremos aqui dentro para então devolver a resposta. Faz parte da questão de sincronia e assincronia do JavaScript.
    static async pegaTodosNiveis (req, res) {
        // try/catch => funciona como o try, except do python
        try{
            //await => pedir para o JavaScript esperar ir até o banco, pegar as coisas e voltar, então ele vai dar um await, a palavra-chave que faz par com async.
            //database.Pessoas => dentro de database ele vai procurar Pessoas, e só prestando atenção, não é o nome do arquivo, e sim a const que está sendo retornada no arquivo /models/pessoas.js, estamos puxando através de database.
            //findAll() => é um comando do sequelize que seria parecido com o "SELECT * FROM Niveis;" do MySQL
            const todasOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todasOsNiveis)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmNivel(req, res) {
        // este id será da requisição feita. Exemplo: localhost:3000/niveis/4
        // o 4 seria este id
        const { id } = req.params
        try{
            // aqui vai o id do banco de dados, o "number" é para não dar problema, retornando um número.
            // primeiro id = coluna do banco de dados
            // segundo id (id) = o parâmetro que recebe da requisição feita acima.
            const umNivel = await database.Niveis.findOne({ 
                where: {
                id:Number(id)} 
            })
            return res.status(200).json(umNivel)
        } catch(error) {
            return res.status(500).json(eror)

        }
    }
    // create -- Post
    static async criaNivel(req, res){
        const novoNivel = req.body
        try{
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)

        }catch(error){
            return res.status(500).json(error)
        }
    }
    // update - PUT
    static async atualizaNivel(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Niveis.update(novasInfos, { where:{id:Number(id)} })
            const nivelAtualizado = await database.Niveis.findOne({ where:{id:Number(id)}})
            return res.status(200).json(nivelAtualizado)

        }catch(error){
            return res.status(500).json(error)
        }
    }
    static async apagaNivel(req, res){
        const { id } = req.params
        try{
            await database.Niveis.destroy({where:{id:Number(id)}})
            return res.status(200).json({message: 'o Id ' +id+' foi deletado'})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = NivelController