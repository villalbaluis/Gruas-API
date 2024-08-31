const express = require('express');
const dotenv = require('dotenv');
const craneRoutes = require('./api/routes/crane.routes');
const userRoutes = require('./api/routes/user.routes');
const { specs, swaggerUi } = require('./swagger');
const { apiTokenMiddleware } = require('./api/middlewares/auth.middleware');
const cors = require('cors')

dotenv.config();

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use(express.json());
app.use(cors());

// Aplica el middleware de token de API a todas las rutas
app.use(apiTokenMiddleware);

// Rutas de tratamiento de Gruas
app.use('/api/gruas', craneRoutes);
// Rutas de tratamiento de Usuarios
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API ejecutandose correctamente.');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Error interno del servidor' });
});

module.exports = app;