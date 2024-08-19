const UserUseCase = require('../../useCases/user.useCase');
const jwt = require('jsonwebtoken');

class UserController {
    async registerUser(req, res) {
        try {
            const userId = await UserUseCase.createUser(req.body);
            res.status(201).json({ id: userId, message: 'Usuario registrado exitosamente' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async loginUser(req, res) {
        try {
            const user = await UserUseCase.loginUser(req.body.username, req.body.password);
            if (user) {
                const token = jwt.sign({ id: user.id, type: user.type }, process.env.JWT_SECRET, { expiresIn: '3h' });
                res.json({ token, user: { id: user.id, username: user.username, type: user.type } });
            } else {
                res.status(401).json({ message: 'Credenciales inválidas' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getUserById(req, res) {
        try {
            const user = await UserUseCase.getUserById(req.params.id);
            if (user) {
                res.json(user);
            } else {
                res.status(404).json({ message: 'Usuario no encontrado' });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new UserController();