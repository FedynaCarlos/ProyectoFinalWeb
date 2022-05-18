
module.exports = function (sequelize, dataTypes) {
  let alias = "Producto";
  
  let cols = {
    produc_id: {
      type:dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull : false
    },
    nombre: {
      type:dataTypes.STRING
    },
    precio: {
      type:dataTypes.DECIMAL
    },
    cepa_id: {
      type:dataTypes.INTEGER
    },
    categoria: {
      type:dataTypes.STRING
    },
    descripcion: {
      type:dataTypes.TEXT
    },
    imagen: {
      type:dataTypes.STRING
    }
  }
  
  let config = {
    tableName: "productos" ,
    timestamps: false,
    underscore: true
  }

  const Producto = sequelize.define(alias, cols, config);
  Producto.associate = function(models) {
    Producto.belongsTo(models.Cepa, {
      as: "cepa",
      foreignKey: "cepa_id"
    })
  }
  return Producto;
}