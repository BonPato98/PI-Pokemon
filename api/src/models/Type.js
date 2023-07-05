const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('type', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
        validate: {notEmpty:{ msg: "El nombre no puede estar vacío"}}
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
};