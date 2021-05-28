// controlador precisa se comunicar com o modelo
// passar caminho dos modelos
const database = require('../models')

class PessoaController{
    // static => esse método faz com que a função "PegaTodasPessoas" possa ser chamada no código, então posso chamá-la sem ter que criar uma nova instância de classe, sem ter que criar um "new PessoaController". 
    // async => diz que esse método precisa esperar resolver alguns outros métodos internos que usaremos aqui dentro para então devolver a resposta. Faz parte da questão de sincronia e assincronia do JavaScript.
    static async pegaTodasPessoas (req, res) {
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
    static async pegaUmaPessoa(req, res) {
        // este id será da requisição feita. Exemplo: localhost:3000/pessoas/4
        // o 4 seria este id
        const { id } = req.params
        try{
            // aqui vai o id do banco de dados, o "number" é para não dar problema, retornando um número.
            // primeiro id = coluna do banco de dados
            // segundo id (id) = o parâmetro que recebe da requisição feita acima.
            const umaPessoa = await database.Pessoas.findOne({ 
                where: {
                id:Number(id)} 
            })
            return res.status(200).json(umaPessoa)
        } catch(error) {
            return res.status(500).json(eror)

        }
    }
    // create -- Post
    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)

        }catch(error){
            return res.status(500).json(error)
        }
    }
    // update - PUT
    static async atualizaPessoa(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Pessoas.update(novasInfos, { where:{id:Number(id)} })
            const pessoaAtualizada = await database.Pessoas.findOne({ where:{id:Number(id)}})
            return res.status(200).json(pessoaAtualizada)

        }catch(error){
            return res.status(500).json(error)
        }
    }
    static async apagaPessoa(req, res){
        const { id } = req.params
        try{
            await database.Pessoas.destroy({where:{id:Number(id)}})
            return res.status(200).json({message: 'o Id ' +id+' foi deletado'})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //Para chamar a matrícula deve ser feito da seguinte forma:
    //localhost:3000/pessoas/estudanteId/matricula/matriculaid
    static async pegaUmaMatricula(req, res) {
        const { estudanteId, matriculaId } = req.params
        try{
            const umaMatricula = await database.Matriculas.findOne({ 
                where: {
                id:Number(matriculaId),
                estudante_Id:Number(estudanteId)} 
            })
            return res.status(200).json(umaMatricula)
        } catch(error) {
            return res.status(500).json(eror)

        }
    }

    // criar matricula
    static async criaMatricula(req, res){
        const { estudanteId } = req.params
        //criando um spread
        //estudante_id é o nome da coluna assim como no banco de dados
        const novaMatricula = {...req.body, estudante_id: Number(estudanteId)}
        console.log(novaMatricula)
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)

        }catch(error){
            return res.status(500).json(error)
        }
    }
    
    // update - PUT
    static async atualizaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try{
            await database.Matriculas.update(novasInfos, { 
                where: {
                    id:Number(matriculaId),
                    estudante_id:Number(estudanteId)
                    } 
                })
            //parte feita para retornar um valor legivel para quem fizer a requisição
            const matriculaAtualizada = await database.Matriculas.findOne({ where:{id:Number(matriculaId)}})
            return res.status(200).json(matriculaAtualizada)

        }catch(error){
            return res.status(500).json(error)
        }
    }
    static async apagaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        try{
            await database.Matriculas.destroy({where:{id:Number(matriculaId)}})
            return res.status(200).json({message: 'a matrícula ' +matriculaId+' foi deletada'})
        }catch(error){
            return res.status(500).json(error.message)
        }
    }


}

module.exports = PessoaController