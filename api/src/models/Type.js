const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('type', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true,
        DefaultValue: UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        unique: true,
    }
  }, {
    timestamps: false,
    freezeTableName: true
  })
};