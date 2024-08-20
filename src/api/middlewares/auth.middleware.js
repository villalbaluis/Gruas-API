const jwt = require('jsonwebtoken');

const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Token de autenticación requerido' });
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);

        if (decoded.exp < Date.now() / 1000) {
            return res.status(403).json({ message: 'Token expirado' });
        }

        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token inválido o expirado' });
    }
};

const apiTokenMiddleware = (req, res, next) => {
    try {
        const apiToken = req.headers.apitoken;
        if (!apiToken || apiToken !== process.env.API_TOKEN) {
            return res.status(403).json({ message: 'Token de API inválido' });
        };
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Token de API inválido' });
    }
};

module.exports = { authMiddleware, apiTokenMiddleware };