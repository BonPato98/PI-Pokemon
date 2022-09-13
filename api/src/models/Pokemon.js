const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    ID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    Vida: {
      type: DataTypes.INTEGER
    },
    Ataque: {
      type: DataTypes.INTEGER,
    },
    Defensa: {
      type: DataTypes.INTEGER
    },
    Velocidad: {
      type: DataTypes.INTEGER
    },
    Altura: {
      type: DataTypes.INTEGER
    },
    Peso: {
      type: DataTypes.INTEGER
    }

  });
};
/* 
ID (Número de Pokemon) * : No puede ser un ID de un pokemon ya existente en la API pokeapi
Nombre *
Vida
Ataque
Defensa
Velocidad
Altura
Peso
*/