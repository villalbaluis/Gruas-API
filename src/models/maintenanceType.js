const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoMantenimiento = sequelize.define('TipoMantenimiento', {
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
  tableName: 'tipos_mantenimiento',
  timestamps: false,
});

module.exports = TipoMantenimiento;
