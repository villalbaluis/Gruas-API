const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Gruas API',
      version: '1.0.0',
      description: 'Aplicación de tipo API para proyecto de Gruas-Matte.',
    },
  },
  apis: ['./api/routes/*.js'],
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};