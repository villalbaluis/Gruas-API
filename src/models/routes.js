const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Ruta = sequelize.define('Ruta', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'rut_id',
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'rut_nombre',
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'rut_descripcion',
  },
}, {
  tableName: 'rutas',
  timestamps: false,
});

module.exports = Ruta;
