
module.exports = function (sequelize, dataTypes) {
  let alias = "Perfil";
  
  let cols = {
    perfil_id: {
      type:dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    descripcion: {
      type:dataTypes.STRING,
      allowNull: false
    }
  }
  
  let config = {
    tableName: "perfil",
    timestamps: false,
    underscore: true
  }

  let Perfil = sequelize.define(alias, cols, config);
  Perfil.associate = function(models) {
    Perfil.hasMany(models.Usuario, {
      as: "usuario",
      foreignKey: "perfil_id"
    })
  }
  return Perfil;
}