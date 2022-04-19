const { isGeneratorFunction } = require("util/types");
const { getEnvironmentData } = require("worker_threads");

module.exports = function (sequelize, dataTypes) {
  let alias = "productos";
  
  let cols = {
    produc_id: {
      type:dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombre: {
      type:dataTypes.VARCHAR(100)
    },
    precio: {
      type:dataTypes.DECIMAL
    },
    cepa_id: {
      type:dataTypes.INTEGER
    },
    categoria: {
      type:dataTypes.VARCHAR(100)
    },
    descripcion: {
      type:dataTypes.text
    },
    imagen: {
      type:dataTypes.VARCHAR(255)
    }
  }
  
  let config = {
    tableName: "productos" ,
    timestamps: false
  }

  let Producto = sequelize.define(alias, cols, config);

  Producto.associate = function(models) {
    Producto.belongsTo(models.Cepa, {
      as: "cepa",
      foreignKey: "cepa_id"
    })
  }


  return Producto;
}