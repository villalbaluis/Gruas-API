const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoCertificacion = sequelize.define('TipoCertificacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'tip_id',
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'tip_nombre',
  },
}, {
  tableName: 'tipos_certificacion',
  timestamps: false,
});

module.exports = TipoCertificacion;
