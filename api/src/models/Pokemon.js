const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      DefaultValue: UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {notEmpty: true, mg: "El nombre no puede estar vacío"}
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {isUrl: true, msg: "La imagen debe ser una dirección URL"}
    },
    hp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true, msg: "El valor debe ser un número entero" }
    },
    attack: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true, msg: "El valor debe ser un número entero" }
    },
    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true, msg: "El valor debe ser un número entero" }
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: { isInt: true, msg: "El valor debe ser un número entero"}
    },
    height: {
      type: DataTypes.INTEGER,
      validate: { isInt: true, msg: "El valor debe ser un número entero"}
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: { isInt: true, msg: "El valor debe ser un número entero"}
    }

  }, {
    timestamps: false,
    freezeTableName: true

  });
};
