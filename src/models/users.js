const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./clients');
const Operador = require('./operators');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'usu_id',
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    field: 'usu_username',
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'usu_password',
  },
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'usu_id_cliente',
  },
  operadorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'usu_id_operario',
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

Usuario.belongsTo(Cliente, { foreignKey: 'clienteId' });
Usuario.belongsTo(Operador, { foreignKey: 'operadorId' });

module.exports = Usuario;