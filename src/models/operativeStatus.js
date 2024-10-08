const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EstadoOperativo = sequelize.define('EstadoOperativo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'est_id',
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'est_nombre',
  },
}, {
  tableName: 'estados_operativos',
  timestamps: false,
});

module.exports = EstadoOperativo;
