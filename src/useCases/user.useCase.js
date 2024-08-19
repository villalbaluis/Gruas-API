const userRepository = require('../repositories/user.repository');
const clientRepository = require('../repositories/client.repository');
const operatorRepository = require('../repositories/operator.repository');
const bcrypt = require('bcrypt');

class UserUseCase {
    async createUser(userData) {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        let clienteId = null;
        let operadorId = null;

        if (userData.type === 1) { // Cliente
            const cliente = await clientRepository.create({
                nombre: userData.nombre,
                cedula: userData.cedula,
                telefono: userData.telefono,
                vehiculoTransportado: userData.vehiculoTransportado,
            });
            clienteId = cliente.id;
        } else if (userData.type === 0) { // Operador
            const operador = await operatorRepository.create({
                nombre: userData.nombre,
                numeroIdentificacion: userData.numeroIdentificacion,
                numeroContacto: userData.numeroContacto,
                tipoOperador: userData.tipoOperador,
            });
            operadorId = operador.id;
        }

        return await userRepository.create({
            username: userData.username,
            password: hashedPassword,
            clienteId,
            operadorId,
        });
    }

    async loginUser(username, password) {
        const user = await userRepository.findByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            return {
                id: user.id,
                username: user.username,
                type: user.clienteId ? 1 : 0,
                clienteId: user.clienteId,
                operadorId: user.operadorId,
            };
        }
        return null;
    }

    async getUserById(id) {
        const user = await userRepository.findById(id);
        if (!user) return null;

        const userInfo = {
            id: user.id,
            username: user.username,
            type: user.clienteId ? 1 : 0,
        };

        if (user.clienteId) {
            const cliente = await clientRepository.findById(user.clienteId);
            userInfo.cliente = cliente;
        } else if (user.operadorId) {
            const operador = await operatorRepository.findById(user.operadorId);
            userInfo.operador = operador;
        }

        return userInfo;
    }
}

module.exports = new UserUseCase();