'use strict';
module.exports = (sequelize, DataTypes) => {
  const Turmas = sequelize.define('Turmas', {
    data_inicio: DataTypes.DATEONLY
  }, {});
  Turmas.associate = function(models) {
    Turmas.hasMany(models.Matriculas, {
      foreignKey: 'turma_id'
    })
    //verificar pq buga com essas duas linhas na hora da requisição
    Turmas.belongsTo(models.Pessoas)
    //Turmas.belongsTo(models.Niveis);
  };
  return Turmas;
};