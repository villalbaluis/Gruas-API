// // src/models/EstadoOperativo.js
// class EstadoOperativo {
//     constructor(id, nombre) {
//       this.id = id;
//       this.nombre = nombre;
//     }
//   }

//   module.exports = EstadoOperativo;


const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const EstadoOperativo = sequelize.define('EstadoOperativo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    field: 'est_id', // Mapea a la columna "est_id" en la base de datos
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'est_nombre', // Mapea a la columna "est_nombre" en la base de datos
  },
}, {
  tableName: 'estados_operativos', // Nombre de la tabla en la base de datos
  timestamps: false, // Desactiva las columnas `createdAt` y `updatedAt`
});

module.exports = EstadoOperativo;
