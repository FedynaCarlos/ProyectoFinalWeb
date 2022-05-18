module.exports = function (sequelize, dataTypes) {
  let alias = "Usuario";
  
  let cols = {
    id: {
      type:dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nombres: {
      type:dataTypes.STRING
    },
    apellidos: {
      type:dataTypes.STRING
    },
    email: {
      type:dataTypes.STRING
    },
    fechaNac: {
      type:dataTypes.DATE
    },
    telefono: {
      type:dataTypes.INTEGER
    },
    password: {
      type:dataTypes.STRING
    },
    perfil_id: {
      type:dataTypes.STRING
    },
    avatar: {
      type:dataTypes.STRING
    }
  }

  let config = {
    tableName: "usuario",
    timestamps: false
  }

  let Usuario = sequelize.define(alias, cols, config);
  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Perfil, {
      as: "perfil",
      foreignKey: "perfil_id"
    })
  }
  return Usuario;
}