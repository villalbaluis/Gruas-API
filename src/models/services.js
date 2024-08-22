const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Grua = require('./cranes');
const Operador = require('./operators');
const Ruta = require('./routes');
const Cliente = require('./clients');

const Servicio = sequelize.define('Servicio', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'ser_id',
  },
  fechaServicio: {
    type: DataTypes.DATE,
    allowNull: false,
    unique: true,
    field: 'ser_fecha',
  },
  vehiculoServicio: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'ser_vehiculo_por_recoger',
  },
  operadorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'ser_ope_id',
  },
  gruaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'ser_gru_id',
  },
  rutaId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'ser_rut_id',
  },
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'ser_cli_id',
  },
}, {
  tableName: 'servicios',
  timestamps: false,
});

Servicio.belongsTo(Grua, { foreignKey: 'gruaId' });
Servicio.belongsTo(Operador, { foreignKey: 'operadorId' });
Servicio.belongsTo(Ruta, { foreignKey: 'rutaId' });
Servicio.belongsTo(Cliente, { foreignKey: 'clienteId' });

module.exports = Servicio;