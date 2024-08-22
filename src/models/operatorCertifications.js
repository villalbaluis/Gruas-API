const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const tipoCertificacion = require('./certificationType');
const Operador = require('./operators');

const OperadorCertificacion = sequelize.define('OperadorCertificacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'op_cert_id',
  },
  operadorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'op_cert_ope_id',
  },
  tipoCertificacionId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'op_cert_tip_id',
  },
}, {
  tableName: 'operadores_certificaciones',
  timestamps: false,
});

OperadorCertificacion.belongsTo(tipoCertificacion, { foreignKey: 'tipoCertificacionId' });
OperadorCertificacion.belongsTo(Operador, { foreignKey: 'operadorId' });

module.exports = OperadorCertificacion;