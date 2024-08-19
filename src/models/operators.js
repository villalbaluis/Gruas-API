const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Operador = sequelize.define('Operador', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'ope_id',
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false,
        field: 'ope_nombre',
    },
    numeroIdentificacion: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'ope_numero_identificacion',
    },
    numeroContacto: {
        type: DataTypes.STRING(20),
        allowNull: false,
        field: 'ope_numero_contacto',
    },
    tipoOperador: {
        type: DataTypes.ENUM('Mantenimiento', 'Grúa'),
        allowNull: false,
        field: 'ope_tipo_operador',
    },
}, {
    tableName: 'operadores',
    timestamps: false,
});

module.exports = Operador;