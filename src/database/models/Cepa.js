
module.exports = function (sequelize, dataTypes) {
  let alias = "Cepa";
  
  let cols = {
    cepa_id: {
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
    tableName: "cepas",
    timestamps: false,
    underscore: true
  }

  let Cepa = sequelize.define(alias, cols, config);
  Cepa.associate = function(models) {
    Cepa.hasMany(models.Producto, {
      as: "productos",
      foreignKey: "cepa_id"
    })
  }
  return Cepa;
}