const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoGrua = sequelize.define('TipoGrua', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'tip_id', // Mapea a la columna "tip_id" en la base de datos
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'tip_nombre', // Mapea a la columna "tip_nombre" en la base de datos
  },
}, {
  tableName: 'tipos_gruas', // Nombre de la tabla en la base de datos
  timestamps: false, // Desactiva las columnas `createdAt` y `updatedAt`
});

module.exports = TipoGrua;
