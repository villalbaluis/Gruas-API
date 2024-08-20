const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const TipoGrua = sequelize.define('TipoGrua', {
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
  tableName: 'tipos_gruas',
  timestamps: false,
});

module.exports = TipoGrua;
