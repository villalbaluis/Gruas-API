const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Grua = require('./cranes');
const Operador = require('./operators');

const Turno = sequelize.define('Turno', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'tur_id',
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true,
    field: 'tur_fecha_inicio',
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'tur_fecha_fin',
  },
  operadorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'tur_ope_id',
  },
  gruaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'tur_gru_id',
  },
}, {
  tableName: 'turnos',
  timestamps: false,
});

Turno.belongsTo(Grua, { foreignKey: 'gruaId' });
Turno.belongsTo(Operador, { foreignKey: 'operadorId' });

module.exports = Turno;