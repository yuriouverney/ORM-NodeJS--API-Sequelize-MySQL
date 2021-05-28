'use strict';
module.exports = (sequelize, DataTypes) => {
  const Matriculas = sequelize.define('Matriculas', {
    status: DataTypes.STRING
  }, {});
  Matriculas.associate = function(models) {
    //verificar pq q com o belongsTo não está funcionando
    //Matriculas.belongsTo(models.Pessoas)
    //Matriculas.belongsTo(models.Turmas)

  };
  return Matriculas;
};