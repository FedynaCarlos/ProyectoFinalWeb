module.exports = function (sequelize, dataTypes) {
  let alias = "cepa";
  
  let cols = {
    cepa_id: {
      type:dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    descripcion: {
      type:dataTypes.VARCHAR(100)
    }
  }
  
  let config = {
    tableName: "cepas",
    timestamps: false
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