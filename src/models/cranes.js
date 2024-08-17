const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Grua = sequelize.define('Grua', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'gru_id',
  },
  numero_serie: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'gru_numero_serie',
  },
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'gru_modelo',
  },
  capacidad_carga: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    field: 'gru_capacidad_carga',
  },
  anio_fabricacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'gru_anio_fabricacion',
  },
  estado_operativo_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'gru_estado_operativo_id',
  },
  tipo_grua_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'gru_tipo_grua_id',
  },
}, {
  tableName: 'gruas',
  timestamps: false,
});

module.exports = Grua;
