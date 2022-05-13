module.exports = function (sequelize, dataTypes) {
  let alias = "usuarios";
  
  let cols = {
    id: {
      type:dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombres: {
      type:dataTypes.VARCHAR(100)
    },
    apellidos: {
      type:dataTypes.VARCHAR(100)
    },
    email: {
      type:dataTypes.VARCHAR(100)
    },
    fechaNac: {
      type:dataTypes.DATE
    },
    telefono: {
      type:dataTypes.INTEGER
    },
    password: {
      type:dataTypes.VARCHAR(100)
    },
    categoria: {
      type:dataTypes.VARCHAR(10)
    },
    avatar: {
      type:dataTypes.VARCHAR(255)
    }
  }
  
  let config = {
    tableName: "usuario",
    timestamps: false
  }

  let Usuario = sequelize.define(alias, cols, config);

  return Usuario;
}