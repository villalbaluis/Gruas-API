const express = require('express');
const dotenv = require('dotenv');
const craneRoutes = require('./api/routes/crane.routes');
const { specs, swaggerUi } = require('./swagger');

dotenv.config();

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());

// Rutas de tratamiento de Gruas
app.use('/api/gruas', craneRoutes);

app.get('/', (req, res) => {
  res.send('API ejecutandose correctamente.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;
