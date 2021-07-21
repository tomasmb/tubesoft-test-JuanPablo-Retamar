const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('times', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    seconds: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    minutes: {
      type: DataTypes.INTEGER,
    },
    hours: {
      type: DataTypes.INTEGER,
    },
    days: {
      type: DataTypes.INTEGER,
    },
  });
};
