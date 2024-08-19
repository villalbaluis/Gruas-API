const Client = require('../models/clients');

class ClientRepository {
  async create(clientData) {
    return await Client.create(clientData);
  }

  async findById(clientId) {
    return await Client.findByPk(clientId);
  }
}

module.exports = new ClientRepository();