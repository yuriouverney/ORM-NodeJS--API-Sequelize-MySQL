// controlador precisa se comunicar com o modelo
// passar caminho dos modelos
const database = require('../models')

class TurmaController{
    // static => esse método faz com que a função "pegaTodasAsTurmas" possa ser chamada no código, então posso chamá-la sem ter que criar uma nova instância de classe, sem ter que criar um "new TurmaController". 
    // async => diz que esse método precisa esperar resolver alguns outros métodos internos que usaremos aqui dentro para então devolver a resposta. Faz parte da questão de sincronia e assincronia do JavaScript.
    static async pegaTodasTurmas (req, res) {
        // try/catch => funciona como o try, except do python
        try{
            //await => pedir para o JavaScript esperar ir até o banco, pegar as coisas e voltar, então ele vai dar um await, a palavra-chave que faz par com async.
            //database.Turmas => dentro de database ele vai procurar Turmas, e só prestando atenção, não é o nome do arquivo, e sim a const que está sendo retornada no arquivo /models/turmas.js, estamos puxando através de database.
            //findAll() => é um comando do sequelize que seria parecido com o "SELECT * FROM Turmas;" do MySQL
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        } catch(error) {
            return res.status(500).json(error.message)
        }
    }
    
    // create -- Post
    static async criaUmaTurma(req, res){
        const novaTurma = req.body
        try{
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)

        }catch(error){
            return res.status(500).json(error)
        }
    }
    // update - PUT
    static async atualizaTurma(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Turmas.update(novasInfos, { where:{id:Number(id)} })
            const turmaAtualizada = await database.Turmas.findOne({ where:{id:Number(id)}})
            return res.status(200).json(turmaAtualizada)

        }catch(error){
            return res.status(500).json(error)
        }
    }
    
}

module.exports = TurmaController