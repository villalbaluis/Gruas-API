const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'cli_id',
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'cli_nombre',
    },
    cedula: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'cli_cedula',
    },
    telefono: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'cli_telefono',
    },
    vehiculoTransportado: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'cli_vehiculo_transportado',
    },
}, {
    tableName: 'clientes',
    timestamps: false,
});

module.exports = Cliente;