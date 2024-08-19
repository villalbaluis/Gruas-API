const User = require('../models/users');

class UserRepository {
    async create(userData) {
        const newUser = await User.create(userData);
        return newUser.id;
    }

    async findByUsername(username) {
        return await User.findOne({ where: { username } });
    }

    async findById(id) {
        return await User.findByPk(id, {
            attributes: ['id', 'username', 'clienteId', 'operadorId'],
        });
    }
}

module.exports = new UserRepository();